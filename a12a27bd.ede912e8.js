(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var o=t(3),r=t(7),i=(t(0),t(168)),a=["components"],s={title:"usePermissions"},c={unversionedId:"components/hooks/use-permissions",id:"components/hooks/use-permissions",isDocsHomePage:!1,title:"usePermissions",description:"Hook that returns user permissions.",source:"@site/docs/components/hooks/use-permissions.md",slug:"/components/hooks/use-permissions",permalink:"/availity-react/components/hooks/use-permissions",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/hooks/use-permissions.md",version:"current",sidebar:"someSidebar",previous:{title:"useToggle",permalink:"/availity-react/components/hooks/use-toggle"},next:{title:"useOrganizations",permalink:"/availity-react/components/hooks/use-organizations"}},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>config: AxiosRequestConfig</code>",id:"config-axiosrequestconfig",children:[]},{value:"<code>options?: QueryConfig</code>",id:"options-queryconfig",children:[]}]}],u={toc:p};function l(e){var n=e.components,t=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hook that returns user permissions."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { usePermissions } from '@availity/hooks';\n\nconst Example = () => {\n  const { data, isFetching } = usePermissions();\n\n  return (\n    <div>\n      {isFetching\n        ? 'Loading...'\n        : data?.data?.permissions?.[0]?.description || '404'}\n    </div>\n  );\n};\n")),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"config-axiosrequestconfig"},Object(i.b)("inlineCode",{parentName:"h3"},"config: AxiosRequestConfig")),Object(i.b)("p",null,"Config passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"getPermissions")," call from ",Object(i.b)("inlineCode",{parentName:"p"},"@availity/api-axios"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"More information about this config can be found ",Object(i.b)("a",{parentName:"p",href:"https://availity.github.io/sdk-js/api/getting-started/#config-1"},"here"))),Object(i.b)("h3",{id:"options-queryconfig"},Object(i.b)("inlineCode",{parentName:"h3"},"options?: QueryConfig")),Object(i.b)("p",null,"Options to be passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"useQuery")," hook such as ",Object(i.b)("inlineCode",{parentName:"p"},"enabled"),", ",Object(i.b)("inlineCode",{parentName:"p"},"retry"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"onSuccess"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"More information on the options can be found ",Object(i.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/docs/api/#usequery"},"here"))))}l.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,d=l["".concat(a,".").concat(m)]||l[m]||b[m]||i;return t?r.a.createElement(d,s(s({ref:n},p),{},{components:t})):r.a.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);