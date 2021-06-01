(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{168:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(168)),i=["components"],c={title:"<Feedback />"},b={unversionedId:"components/feedback/feedback",id:"components/feedback/feedback",isDocsHomePage:!1,title:"<Feedback />",description:"Example",source:"@site/docs/components/feedback/feedback.md",slug:"/components/feedback/feedback",permalink:"/availity-react/components/feedback/feedback",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/feedback/feedback.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/availity-react/components/feedback/index"},next:{title:"<FeedbackForm />",permalink:"/availity-react/components/feedback/form"}},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],l={toc:p};function d(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Feedback from \'@availity/feedback\';\n\nconst Example = () => (\n  <Feedback\n    appName="Payer Space"\n    prompt="Please provide some feedback"\n    color="primary"\n  >\n    Provide Feedback\n  </Feedback>\n);\n')),Object(o.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(o.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-feedback--default"}," Storybook")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("h4",{id:"appname-string"},Object(o.b)("inlineCode",{parentName:"h4"},"appName?: string")),Object(o.b)("p",null,"The name of the application this feedback is for. It is used in the API request to indicate where the feedback came from."),Object(o.b)("h4",{id:"formprops-formprops"},Object(o.b)("inlineCode",{parentName:"h4"},"formProps?: FormProps")),Object(o.b)("p",null,"Props to be spread to the underlying ",Object(o.b)("inlineCode",{parentName:"p"},"FeedbackForm"),". See the ",Object(o.b)("a",{parentName:"p",href:"/components/feedback/form/#props"},"FeedbackForm Props"),"."),Object(o.b)("h4",{id:"children-reactnode"},Object(o.b)("inlineCode",{parentName:"h4"},"children?: ReactNode")),Object(o.b)("p",null,"The text to display on the submit button."),Object(o.b)("h4",{id:"outline-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"outline?: boolean")),Object(o.b)("p",null,'Indicates if the button should use the "outline" styles or not.'),Object(o.b)("h4",{id:"color-string"},Object(o.b)("inlineCode",{parentName:"h4"},"color?: string")),Object(o.b)("p",null,"The color of the button. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},'"light"'),"."),Object(o.b)("h4",{id:"prompt-string"},Object(o.b)("inlineCode",{parentName:"h4"},"prompt?: string")),Object(o.b)("p",null,"Text that prompts the user to provider feedback. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},'"Tell us what you think about ${appName}."'),"."),Object(o.b)("h4",{id:"onfeedbacksent-feedback-feedbackobject--void"},Object(o.b)("inlineCode",{parentName:"h4"},"onFeedbackSent?: (feedback: FeedbackObject) => void")),Object(o.b)("p",null,"Callback for when the feedback is submitted. It is called with the feedback object."),Object(o.b)("h4",{id:"modal-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"modal?: boolean")),Object(o.b)("p",null,"Whether to open the ",Object(o.b)("inlineCode",{parentName:"p"},"FeedbackForm")," in a modal"),Object(o.b)("h4",{id:"zindex-number--string"},Object(o.b)("inlineCode",{parentName:"h4"},"zIndex?: number | string")),Object(o.b)("p",null,"Allows for overriding the ",Object(o.b)("inlineCode",{parentName:"p"},"z-index"),"value from react-strap ",Object(o.b)("inlineCode",{parentName:"p"},"Modal"),"component."),Object(o.b)("h4",{id:"analytics-analyticstype"},Object(o.b)("inlineCode",{parentName:"h4"},"analytics?: AnalyticsType")),Object(o.b)("p",null,"Override the analytics instance that is passed in. ",Object(o.b)("strong",{parentName:"p"},"Default")," ",Object(o.b)("a",{parentName:"p",href:"https://availity.github.io/sdk-js/api/definitions/logs/"},"avLogMessagesApi")),Object(o.b)("h4",{id:"supportzindex-number--string"},Object(o.b)("inlineCode",{parentName:"h4"},"supportZIndex?: number | string")),Object(o.b)("p",null,"Allows for overriding the ",Object(o.b)("inlineCode",{parentName:"p"},"z-index")," value from reactstrap Support ",Object(o.b)("inlineCode",{parentName:"p"},"Modal")," component."),Object(o.b)("h4",{id:"showsupport-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"showSupport?: boolean")),Object(o.b)("p",null,'Toggle whether or not to show the "Open a Support ticket" link in the FeedbackForm'))}d.isMDXComponent=!0}}]);