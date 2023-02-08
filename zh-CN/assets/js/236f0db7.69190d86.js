"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7524],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,u=c["".concat(d,".").concat(m)]||c[m]||k[m]||i;return r?n.createElement(u,l(l({ref:t},s),{},{components:r})):n.createElement(u,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},63125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>k});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"utils_errors.TypedError",title:"Class: TypedError",sidebar_label:"TypedError",custom_edit_url:null},d=void 0,p={unversionedId:"classes/utils_errors.TypedError",id:"version-near-api-js@1.1.0/classes/utils_errors.TypedError",title:"Class: TypedError",description:"utils/errors.TypedError",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/classes/utils_errors.TypedError.md",sourceDirName:"classes",slug:"/classes/utils_errors.TypedError",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_errors.TypedError",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"utils_errors.TypedError",title:"Class: TypedError",sidebar_label:"TypedError",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"PositionalArgsError",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_errors.PositionalArgsError"},next:{title:"KeyPair",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"}},s={},k=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"context",id:"context",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"prepareStackTrace",id:"preparestacktrace",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"captureStackTrace",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-9",level:4}],c={toc:k};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/utils_errors"},"utils/errors"),".TypedError"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Error")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"TypedError"))),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_rpc_errors.ServerError"},(0,i.kt)("inlineCode",{parentName:"a"},"ServerError"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"new TypedError"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"message?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"context?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_errors.ErrorContext"},(0,i.kt)("inlineCode",{parentName:"a"},"ErrorContext")))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"Error.constructor"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/errors.ts#L16"},"utils/errors.ts:16")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cause"},"cause"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cause"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Error.cause"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"../../../../node_modules/typescript/lib/lib.es2022.error.d.ts:26"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"context"},"context"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"context"),": ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_errors.ErrorContext"},(0,i.kt)("inlineCode",{parentName:"a"},"ErrorContext"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/errors.ts#L15"},"utils/errors.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"message"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"Error.message"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"../../../../node_modules/typescript/lib/lib.es5.d.ts:1041"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"Error.name"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"../../../../node_modules/typescript/lib/lib.es5.d.ts:1040"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stack"},"stack"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stack"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"Error.stack"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"../../../../node_modules/typescript/lib/lib.es5.d.ts:1042"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/utils/errors.ts#L14"},"utils/errors.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CallSite"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"(",(0,i.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Optional override for formatting stack traces"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Error"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"Error.prepareStackTrace"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"../node_modules/@types/node/globals.d.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,"Error.stackTraceLimit"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,"../node_modules/@types/node/globals.d.ts:13"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Create .stack property on a target object"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,"Error.captureStackTrace"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,"../node_modules/@types/node/globals.d.ts:4"))}m.isMDXComponent=!0}}]);