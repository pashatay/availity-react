(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var o=t(3),i=t(7),r=(t(0),t(168)),a=["components"],c={title:"<PaginationContent />"},p={unversionedId:"components/pagination/content",id:"components/pagination/content",isDocsHomePage:!1,title:"<PaginationContent />",description:"This is the container of all the items rendered to the DOM when the Pagination provider receives items. Must be /nested inside a Pagination component.",source:"@site/docs/components/pagination/content.md",slug:"/components/pagination/content",permalink:"/availity-react/components/pagination/content",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/pagination/content.md",version:"current",sidebar:"someSidebar",previous:{title:"<PaginationControls />",permalink:"/availity-react/components/pagination/controls"},next:{title:"<AvResourcePagination />",permalink:"/availity-react/components/pagination/resource"}},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],s={toc:l};function b(e){var n=e.components,t=Object(i.a)(e,a);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is the container of all the items rendered to the DOM when the ",Object(r.b)("inlineCode",{parentName:"p"},"Pagination")," provider receives items. Must be /nested inside a ",Object(r.b)("inlineCode",{parentName:"p"},"Pagination")," component."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { PaginationContent } from '@availity/pagination';\n\nconst Example = () => (\n  <PaginationContent\n    loadingMessage=\"loading\"\n    component={Component}\n    itemKey=\"id\"\n  />\n);\n")),Object(r.b)("h3",{id:"props"},"Props"),Object(r.b)("h4",{id:"component-reactcomponenttype"},Object(r.b)("inlineCode",{parentName:"h4"},"component? React.ComponentType")),Object(r.b)("p",null,"The component to render when iterating through the current page of items. The contents of the item will be spread on the props of the component when rendered."),Object(r.b)("h4",{id:"itemkey-string"},Object(r.b)("inlineCode",{parentName:"h4"},"itemKey: string")),Object(r.b)("p",null,"The key of the object rendered in the component to be used during mapping."),Object(r.b)("h4",{id:"loadingmessage-string"},Object(r.b)("inlineCode",{parentName:"h4"},"loadingMessage?: string")),Object(r.b)("p",null,"The message to render with the loading bar when in the loading state."),Object(r.b)("h4",{id:"loader-boolean"},Object(r.b)("inlineCode",{parentName:"h4"},"loader?: boolean")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", calls ",Object(r.b)("inlineCode",{parentName:"p"},"BlockUI")," to simulate a loading state if the provider is loading."),Object(r.b)("h4",{id:"containerprops-reacthtmlattributeshtmldivelement"},Object(r.b)("inlineCode",{parentName:"h4"},"containerProps?: React.HTMLAttributes<HTMLDivElement>")),Object(r.b)("p",null,"Props to be spread onto the ",Object(r.b)("inlineCode",{parentName:"p"},"<BlockUI />")," tag."),Object(r.b)("h4",{id:"containertag-reactcomponenttype--string"},Object(r.b)("inlineCode",{parentName:"h4"},"containerTag?: React.ComponentType | string")),Object(r.b)("p",null,"The tag to render the ",Object(r.b)("inlineCode",{parentName:"p"},"<BlockUI />")," as. ",Object(r.b)("strong",{parentName:"p"},"Default:")," ",Object(r.b)("inlineCode",{parentName:"p"},"div"),"."),Object(r.b)("h4",{id:"infinitescroll-boolean"},Object(r.b)("inlineCode",{parentName:"h4"},"infiniteScroll?: boolean")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", renders pagination content inside an infinite scroll component"),Object(r.b)("h4",{id:"infinitescrollprops-infinitescrollprops"},Object(r.b)("inlineCode",{parentName:"h4"},"infiniteScrollProps?: InfiniteScrollProps")),Object(r.b)("p",null,"Only used when ",Object(r.b)("inlineCode",{parentName:"p"},"infiniteScroll")," is true. See ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ankeetmaini/react-infinite-scroll-component#props"},"react-infinite-scroll-component")),Object(r.b)("h4",{id:"children-reactreactnode---items-reactnode---reactnode"},Object(r.b)("inlineCode",{parentName:"h4"},"children?: React.ReactNode | ({ items?: ReactNode }) => ReactNode")),Object(r.b)("p",null,"Customize the contents of what gets rendered. Children can be a react child or a function that accepts the pagination items"))}b.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),m=o,u=b["".concat(a,".").concat(m)]||b[m]||d[m]||r;return t?i.a.createElement(u,c(c({ref:n},l),{},{components:t})):i.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);