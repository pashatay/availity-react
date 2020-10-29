import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField, useFormikContext } from 'formik';
import RSelect, { components as reactSelectComponents } from 'react-select';
import Creatable from 'react-select/creatable';
import Async from 'react-select-async-paginate';
import get from 'lodash.get';
import has from 'lodash.has';
import isFunction from 'lodash.isfunction';
import isEqual from 'lodash.isequal';

const {
  DownChevron,
  CrossIcon,
  DropdownIndicator,
  ClearIndicator,
} = reactSelectComponents;

const components = {
  DropdownIndicator: props => (
    <DropdownIndicator {...props}>
      <DownChevron />
      <span className="sr-only">Toggle Select Options</span>
    </DropdownIndicator>
  ),
  ClearIndicator: props => (
    <ClearIndicator {...props}>
      <CrossIcon />
      <span className="sr-only">Clear all selections</span>
    </ClearIndicator>
  ),
};

const createOption = (label, labelKey = 'label', valueKey = 'value') => ({
  [labelKey]: label,
  [valueKey]: label.toLowerCase().replace(/\W/g, ''),
});

const areValueAndOptionValueEqual = (value, optionValue) => {
  return isEqual(value, optionValue);
};

const selectAllOption = {
  label: 'Select all',
  value: '*',
};

const validateSelectAllOptions = options => {
  const filtered = options.filter(
    option => option.value === selectAllOption.value
  );
  if (filtered.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(
      `An option contains the value: ${selectAllOption.value}. This value is used by the Select All option.`
    );
  }
};

const Select = ({
  name,
  validate,
  className,
  options,
  selectRef,
  styles,
  maxLength,
  onChange: onChangeCallback,
  autofill,
  creatable,
  allowSelectAll,
  ...attributes
}) => {
  const [
    { onChange, value: fieldValue, ...field },
    { touched, error: hasError },
  ] = useField({
    name,
    validate,
  });
  const { values, setFieldValue, initialValues } = useFormikContext();

  const [newOptions, setNewOptions] = useState([]);

  const getOptionLabel = option => {
    if (option.__isNew__) {
      return option.label;
    }

    return option[get(attributes, 'labelKey', 'label')];
  };

  const getValueKey = (attrs = attributes) => get(attrs, 'valueKey', 'value');

  const getOptionValue = option =>
    attributes.raw && !attributes.valueKey
      ? option
      : get(option, getValueKey(attributes), option);

  const prepValue = (value, digIfMulti = true) => {
    if (attributes.isMulti && digIfMulti && Array.isArray(value)) {
      return value.map(prepValue, false);
    }
    if (attributes.raw || attributes.loadOptions) {
      return value;
    }
    const valueKey = getValueKey();
    return get(value, valueKey, value);
  };

  const findOptionFromValue = (value, options) =>
    Array.isArray(options) &&
    [...options, ...newOptions].filter(option =>
      areValueAndOptionValueEqual(value, getOptionValue(option))
    )[0];

  const getViewValue = () => {
    if (attributes.raw || attributes.loadOptions || !options) return fieldValue;
    if (attributes.isMulti && Array.isArray(fieldValue)) {
      return fieldValue.map(
        value => findOptionFromValue(value, options) || value
      );
    }
    return findOptionFromValue(fieldValue, options) || fieldValue;
  };

  let Tag = attributes.loadOptions ? Async : RSelect;

  if (!attributes.loadOptions && creatable) {
    Tag = Creatable;
  }

  if (!attributes.inputId) {
    attributes.inputId = name;
  }

  const onChangeHandler = async newValue => {
    if (
      newValue.length > 0 &&
      newValue[newValue.length - 1].value === selectAllOption.value
    ) {
      newValue = options;
    }

    const newVal = prepValue(newValue);
    const isOverMax =
      maxLength &&
      attributes.isMulti &&
      newValue &&
      newValue.length > maxLength;

    if (isOverMax) return;

    const valuesToSet = { [name]: true };

    await setFieldValue(name, newVal);

    const shouldAutofill =
      autofill && !attributes.isMulti && newValue && typeof newVal === 'object';

    if (shouldAutofill) {
      let formValuesForAutofill = values;
      if (typeof autofill === 'object') {
        formValuesForAutofill = Object.keys(autofill).reduce((accum, key) => {
          if (has(values, key)) {
            accum[key] = get(values, key);
          }
          return accum;
        }, {});
      }

      Object.keys(formValuesForAutofill)
        .filter(fieldName => fieldName !== name)
        .forEach(async fieldName => {
          let rawValue = newValue;
          if (
            !!newValue.label &&
            !!newValue.value &&
            typeof newValue.value === 'object'
          ) {
            rawValue = newValue.value;
          }

          let shouldAutofillField = false;
          if (typeof autofill === 'object') {
            shouldAutofillField = autofill[fieldName];
          } else {
            shouldAutofillField = has(rawValue, fieldName);
          }

          if (shouldAutofillField) {
            let val;
            if (typeof autofill === 'object') {
              if (isFunction(autofill[fieldName])) {
                val = autofill[fieldName](rawValue);
              } else if (typeof autofill[fieldName] === 'string') {
                val = get(
                  rawValue,
                  `${autofill[fieldName]}`,
                  initialValues[fieldName]
                );
              } else {
                val = initialValues[fieldName];
              }
            } else {
              val = get(rawValue, fieldName, initialValues[fieldName]);
            }
            valuesToSet[fieldName] = true;

            await setFieldValue(fieldName, val);
          }
        });
    }

    if (onChangeCallback) {
      onChangeCallback(newVal);
    }
  };

  const handleCreate = value => {
    const newOpt = createOption(
      value,
      get(attributes, 'labelKey', 'label'),
      get(attributes, 'valueKey', 'value')
    );
    newOptions.push(newOpt);
    setNewOptions([...newOptions]);

    if (attributes.isMulti) {
      onChangeHandler(
        Array.isArray(fieldValue) ? fieldValue.concat(newOpt) : [newOpt]
      );
    } else {
      onChangeHandler(newOpt);
    }
  };

  let selectOptions;
  if (!attributes.loadOptions) {
    if (allowSelectAll && attributes.isMulti) {
      if (
        [...options, ...newOptions].length > 0 &&
        (values[name] === undefined ||
          values[name].length < [...options, ...newOptions].length)
      ) {
        validateSelectAllOptions([...options, ...newOptions]);
        selectOptions = [selectAllOption, ...options, ...newOptions];
      } else {
        selectOptions = [...options, ...newOptions];
      }
    } else {
      selectOptions = [...options, ...newOptions];
    }
  }

  if (attributes.loadOptions && allowSelectAll) {
    // eslint-disable-next-line no-console
    console.warn('allowSelectAll is ignored when loadOptions is defined.');
  }

  return (
    <Tag
      {...field}
      onChange={onChangeHandler}
      ref={selectRef}
      name={name}
      classNamePrefix="av"
      role="listbox"
      SelectComponent={
        attributes.loadOptions && creatable ? Creatable : undefined
      }
      onCreateOption={handleCreate}
      className={classNames(
        className,
        'av-select',
        touched ? 'is-touched' : 'is-untouched',
        hasError ? 'av-invalid' : 'av-valid',
        touched && hasError && 'is-invalid'
      )}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      closeMenuOnSelect={!attributes.isMulti}
      components={components}
      options={selectOptions}
      defaultOptions
      styles={{
        ...styles,
        placeholder: (provided, state) => {
          if (state.isDisabled) {
            return provided;
          }
          const showError = touched && hasError && !state.focused;

          return {
            ...provided,
            color: showError ? '#3D3D3D' : '#666',
            maxWidth: '99%',
          };
        },
        valueContainer: provided => ({
          ...provided,
          width: '90%',
        }),
        singleValue: provided => {
          return {
            ...provided,
            color: '#495057',
          };
        },
        control: (provided, state) => {
          if (state.isDisabled) {
            return {
              ...provided,
              borderRadius: '.25em',
              borderColor: '#ced4da',
              backgroundColor: '#e9ecef',
            };
          }
          const showError = touched && hasError && !state.focused;

          return {
            ...provided,
            borderRadius: '.25em',
            backgroundColor: showError ? '#fbcbc8' : 'white',
            borderColor: showError ? '#931b1d' : 'hsl(0,0%,80%)',
            zIndex: state.focused && '3',
          };
        },
        multiValue: provided => ({
          ...provided,
          width: 'auto',
        }),
        input: provided => ({
          ...provided,
          maxWidth: '99%',
        }),
        dropdownIndicator: (provided, state) => {
          if (state.isDisabled) {
            return provided;
          }
          const showError = touched && hasError && !state.focused;

          return {
            ...provided,
            pointerEvents: 'none',
            color: showError ? '#931b1d' : 'hsl(0,0%,80%)',
          };
        },
        option: provided => ({
          ...provided,
          color: '#000',
        }),
      }}
      {...attributes}
      value={getViewValue()}
    />
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  options: PropTypes.array,
  loadOptions: PropTypes.func,
  raw: PropTypes.bool,
  className: PropTypes.string,
  selectRef: PropTypes.object,
  styles: PropTypes.object,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  creatable: PropTypes.bool,
  autofill: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  allowSelectAll: PropTypes.bool,
};

export default Select;
