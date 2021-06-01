(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(168)),i=["components"],l={title:"List Group"},c={unversionedId:"components/list-group",id:"components/list-group",isDocsHomePage:!1,title:"List Group",description:"Availity's ListGroup, which can feature Cards and Selectable items",source:"@site/docs/components/list-group.mdx",slug:"/components/list-group",permalink:"/availity-react/components/list-group",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/list-group.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Link",permalink:"/availity-react/components/link"},next:{title:"Getting Started",permalink:"/availity-react/components/list-group-item/index"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],s={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Availity's ListGroup, which can feature Cards and Selectable items"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/list-group"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/list-group.svg?style=for-the-badge",alt:"Version"}))),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"npm"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/list-group --save\n")),Object(o.b)("p",null,"Yarn"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/list-group\n")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ListGroup from '@availity/list-group';\nimport ListGroupItem from '@availity/list-group-item';\n\nconst Example = () => (\n  <ListGroup selectable cards>\n    <ListGroupItem>Item 1</ListGroupItem>\n    <ListGroupItem>Item 2</ListGroupItem>\n    <ListGroupItem>Item 3</ListGroupItem>\n  </ListGroup>\n);\n")),Object(o.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(o.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-list-group--default"}," Storybook")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("h4",{id:"cards-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"cards?: boolean")),Object(o.b)("p",null,"Triggers the items (children) to appear as cards."),Object(o.b)("h4",{id:"selectable-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"selectable?: boolean")),Object(o.b)("p",null,"Triggers the items (children) to appear as selectable when hovered over."),Object(o.b)("h4",{id:"tag-reactcomponenttype--string"},Object(o.b)("inlineCode",{parentName:"h4"},"tag?: React.ComponentType | string")),Object(o.b)("p",null,"The tag to use in the list group. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"<ul>")))}u.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,l(l({ref:t},p),{},{components:r})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);