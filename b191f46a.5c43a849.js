(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(168)),o=["components"],l={title:"Training Link"},c={unversionedId:"components/training-link",id:"components/training-link",isDocsHomePage:!1,title:"Training Link",description:"Component for allowing link out to training in the Header component",source:"@site/docs/components/training-link.mdx",slug:"/components/training-link",permalink:"/availity-react/components/training-link",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/training-link.mdx",version:"current",sidebar:"someSidebar",previous:{title:"<WizardStep />",permalink:"/availity-react/components/step-wizard/wizard-step"},next:{title:"Getting Started",permalink:"/availity-react/components/typography/index"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],s={toc:p};function u(e){var n=e.components,t=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Component for allowing link out to training in the Header component"),Object(a.b)("p",null,"Provide a link for training videos for your app"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/training-link"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/training-link.svg?style=for-the-badge",alt:"Version"}))),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,"npm"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/training-link --save\n")),Object(a.b)("p",null,"Yarn"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/training-link\n")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import TrainingLink from \'@availity/training-link\';\n\nconst Example = () => (\n  <TrainingLink link="https://www.github.com/availity" name="Availity Github" />\n);\n')),Object(a.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(a.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-training-link--default"}," Storybook")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("h4",{id:"link-string"},Object(a.b)("inlineCode",{parentName:"h4"},"link: string")),Object(a.b)("p",null,"Link to training video."),Object(a.b)("h4",{id:"name-string"},Object(a.b)("inlineCode",{parentName:"h4"},"name: string")),Object(a.b)("p",null,"Name of your app to make the sentence complete."))}u.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return t?i.a.createElement(d,l(l({ref:n},p),{},{components:t})):i.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);