(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(168)),i=["components"],c={title:"<FavoriteHeart />"},s={unversionedId:"components/favorites/heart",id:"components/favorites/heart",isDocsHomePage:!1,title:"<FavoriteHeart />",description:"The default Favorite Icon that can be used to store a favorited item. Can only be used inside of a `` Provider.",source:"@site/docs/components/favorites/heart.md",slug:"/components/favorites/heart",permalink:"/availity-react/components/favorites/heart",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/favorites/heart.md",version:"current",sidebar:"someSidebar",previous:{title:"<Favorites />",permalink:"/availity-react/components/favorites/favorites"},next:{title:"useFavorites",permalink:"/availity-react/components/favorites/hook"}},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The default Favorite Icon that can be used to store a favorited item. Can only be used inside of a ",Object(a.b)("inlineCode",{parentName:"p"},"<Favorites />")," Provider."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Favorites, { FavoriteHeart } from '@availity/favorites';\nimport '@availity/favorites/style.scss';\n\nconst Example = () => (\n  <Favorites>\n    <FavoriteHeart id=\"12345\" />\n  </Favorites>\n);\n")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("h4",{id:"id-string"},Object(a.b)("inlineCode",{parentName:"h4"},"id: string")),Object(a.b)("p",null,"The unique id of the favorite item to be fetched from API."),Object(a.b)("h4",{id:"onchange-isfavorited-boolean-event-event--void"},Object(a.b)("inlineCode",{parentName:"h4"},"onChange?: (isFavorited: boolean, event?: Event) => void")),Object(a.b)("p",null,"Called once the favorite heart has been clicked and updated."))}u.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return v}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,v=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(v,c(c({ref:t},p),{},{components:r})):o.a.createElement(v,c({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);