(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(168)),o=["components"],c={title:"<SpacesImage />"},p={unversionedId:"components/spaces/images",id:"components/spaces/images",isDocsHomePage:!1,title:"<SpacesImage />",description:"Example",source:"@site/docs/components/spaces/images.md",slug:"/components/spaces/images",permalink:"/availity-react/components/spaces/images",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/spaces/images.md",version:"current",sidebar:"someSidebar",previous:{title:"<Space />",permalink:"/availity-react/components/spaces/spaces"},next:{title:"<SpacesDisclaimer />",permalink:"/availity-react/components/spaces/disclaimer"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Spaces, {\n  SpacesLogo,\n  SpacesBillboard,\n  SpacesTile,\n  SpacesImage,\n} from \'@availity/spaces\';\n\nconst Example = () => (\n  <Spaces\n    spaceIds={[\'73162546201441126239486200007187\']}\n    payerIds={[\'PayerID\']}\n    clientId="my-client-id"\n  >\n    <SpacesLogo spaceId="73162546201441126239486200007187" />\n    <SpacesBillboard payerId="PayerID" />\n    <SpacesTile payerId="PayerID" />\n    <SpacesImage payerId="PayerID" />\n  </Spaces>\n);\n')),Object(i.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(i.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-spaces--images"}," Storybook")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("h4",{id:"spaceid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"spaceId?: string")),Object(i.b)("p",null,"Required if ",Object(i.b)("inlineCode",{parentName:"p"},"payerId")," is not provided. The payer spaces ID of the payer to render the image for. If no ",Object(i.b)("inlineCode",{parentName:"p"},"spaceId")," or ",Object(i.b)("inlineCode",{parentName:"p"},"payerId")," is provided, the first space in the ",Object(i.b)("inlineCode",{parentName:"p"},"spaces")," array is used. Note: This is only to be used when the Spaces provider should only ever contain a single space."),Object(i.b)("h4",{id:"payerid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"payerId?: string")),Object(i.b)("p",null,"Required if ",Object(i.b)("inlineCode",{parentName:"p"},"spaceId")," is not provided. The payer ID of the payer to render the image for. If no ",Object(i.b)("inlineCode",{parentName:"p"},"spaceId")," or ",Object(i.b)("inlineCode",{parentName:"p"},"payerId")," is provided, the first space in the ",Object(i.b)("inlineCode",{parentName:"p"},"spaces")," array is used. Note: This is only to be used when the Spaces provider should only ever contain a single space."),Object(i.b)("h4",{id:"skeletonprops-object"},Object(i.b)("inlineCode",{parentName:"h4"},"skeletonProps?: object")),Object(i.b)("p",null,"Dimensions passed to loader to show while the image is loading."),Object(i.b)("h4",{id:"fallback-string"},Object(i.b)("inlineCode",{parentName:"h4"},"fallback?: string")),Object(i.b)("p",null,"The fallback image url to render if the url for the spaces image is not valid or not found"),Object(i.b)("h4",{id:"imagetype-string"},Object(i.b)("inlineCode",{parentName:"h4"},"imageType?: string")),Object(i.b)("p",null,"The path on the space containing the image reference. Defaults to: ",Object(i.b)("inlineCode",{parentName:"p"},'"url"'),"."))}d.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);