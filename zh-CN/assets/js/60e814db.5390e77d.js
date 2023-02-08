"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,c(c({ref:t},p),{},{components:n})):a.createElement(k,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"contract.Contract",title:"Class: Contract",sidebar_label:"Contract",custom_edit_url:null},l=void 0,s={unversionedId:"classes/contract.Contract",id:"version-near-api-js@1.1.0/classes/contract.Contract",title:"Class: Contract",description:"contract.Contract",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/classes/contract.Contract.md",sourceDirName:"classes",slug:"/classes/contract.Contract",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/contract.Contract",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"contract.Contract",title:"Class: Contract",sidebar_label:"Contract",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Connection",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/connection.Connection"},next:{title:"BrowserLocalStorageKeyStore",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_browser_local_storage_key_store.BrowserLocalStorageKeyStore"}},p={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"account",id:"account",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"contractId",id:"contractid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"_changeMethod",id:"_changemethod",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/contract"},"contract"),".Contract"),(0,o.kt)("p",null,"Defines a smart contract on NEAR including the change (mutable) and view (non-mutable) methods"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"See"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/near-api-js/quick-reference#contract"},"https://docs.near.org/tools/near-api-js/quick-reference#contract")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Contract } from 'near-api-js';\n\nasync function contractExample() {\n  const methodOptions = {\n    viewMethods: ['getMessageByAccountId'],\n    changeMethods: ['addMessage']\n  };\n  const contract = new Contract(\n    wallet.account(),\n    'contract-id.testnet',\n    methodOptions\n  );\n\n  // use a contract view method\n  const messages = await contract.getMessages({\n    accountId: 'example-account.testnet'\n  });\n\n  // use a contract change method\n  await contract.addMessage({\n     meta: 'some info',\n     callbackUrl: 'https://example.com/callback',\n     args: { text: 'my message' },\n     amount: 1\n  })\n}\n")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"new Contract"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"contractId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),")"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"account")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/account.Account"},(0,o.kt)("inlineCode",{parentName:"a"},"Account"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"NEAR account to sign change method transactions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"contractId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"NEAR account id where the contract is deployed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/contract.ContractMethods"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractMethods"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"NEAR smart contract methods that your application will use. These will be available as ",(0,o.kt)("inlineCode",{parentName:"td"},"contract.methodName"))))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/contract.ts#L90"},"contract.ts:90")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"account"},"account"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"account"),": ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/account.Account"},(0,o.kt)("inlineCode",{parentName:"a"},"Account"))),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/contract.ts#L82"},"contract.ts:82")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"contractid"},"contractId"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"contractId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/contract.ts#L83"},"contract.ts:83")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"_changemethod"},"_","changeMethod"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"_changeMethod"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ChangeMethodOptions"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/contract.ts#L132"},"contract.ts:132")))}u.isMDXComponent=!0}}]);