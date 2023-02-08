"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,k=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"account.ViewFunctionCallOptions",title:"Interface: ViewFunctionCallOptions",sidebar_label:"ViewFunctionCallOptions",custom_edit_url:null},p=void 0,c={unversionedId:"interfaces/account.ViewFunctionCallOptions",id:"version-near-api-js@1.1.0/interfaces/account.ViewFunctionCallOptions",title:"Interface: ViewFunctionCallOptions",description:"account.ViewFunctionCallOptions",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/account.ViewFunctionCallOptions.md",sourceDirName:"interfaces",slug:"/interfaces/account.ViewFunctionCallOptions",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.ViewFunctionCallOptions",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"account.ViewFunctionCallOptions",title:"Interface: ViewFunctionCallOptions",sidebar_label:"ViewFunctionCallOptions",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"SignAndSendTransactionOptions",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.SignAndSendTransactionOptions"},next:{title:"ConnectConfig",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"args",id:"args",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"attachedDeposit",id:"attacheddeposit",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"blockQuery",id:"blockquery",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"contractId",id:"contractid",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"gas",id:"gas",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"jsContract",id:"jscontract",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"methodName",id:"methodname",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"parse",id:"parse",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"stringify",id:"stringify",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-8",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/account"},"account"),".ViewFunctionCallOptions"),(0,i.kt)("p",null,"Options used to initiate a function call (especially a change function call)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/account.Account#viewfunction"},"viewFunction")," to initiate a view function call"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"FunctionCallOptions"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ViewFunctionCallOptions"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"args"},"args"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"object")),(0,i.kt)("p",null,"named arguments to pass the method ",(0,i.kt)("inlineCode",{parentName:"p"},"{ messageText: 'my message' }")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions"},"FunctionCallOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions#args"},"args")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L94"},"account.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"attacheddeposit"},"attachedDeposit"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"attachedDeposit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BN")),(0,i.kt)("p",null,"amount of NEAR (in yoctoNEAR) to send together with the call"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions"},"FunctionCallOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions#attacheddeposit"},"attachedDeposit")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L98"},"account.ts:98")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blockquery"},"blockQuery"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"blockQuery"),": ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/providers_provider#blockreference"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockReference"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L123"},"account.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contractid"},"contractId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"contractId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The NEAR account id where the contract is deployed"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions"},"FunctionCallOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions#contractid"},"contractId")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L88"},"account.ts:88")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gas"},"gas"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"gas"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BN")),(0,i.kt)("p",null,"max amount of gas that method call can use"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions"},"FunctionCallOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions#gas"},"gas")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L96"},"account.ts:96")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"jscontract"},"jsContract"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"jsContract"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Is contract from JS SDK, automatically encodes args from JS SDK to binary."),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions"},"FunctionCallOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions#jscontract"},"jsContract")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L106"},"account.ts:106")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"methodname"},"methodName"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"methodName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The name of the method to invoke"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions"},"FunctionCallOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions#methodname"},"methodName")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L90"},"account.ts:90")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parse"},"parse"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"parse"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"response"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"(",(0,i.kt)("inlineCode",{parentName:"p"},"response"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"response")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L122"},"account.ts:122")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stringify"},"stringify"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stringify"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,i.kt)("p",null,"Convert input arguments into bytes array."),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions"},"FunctionCallOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/account.FunctionCallOptions#stringify"},"stringify")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account.ts#L102"},"account.ts:102")))}f.isMDXComponent=!0}}]);