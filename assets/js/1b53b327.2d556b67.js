"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6189],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>k});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),k=a,u=f["".concat(s,".").concat(k)]||f[k]||d[k]||i;return r?t.createElement(u,o(o({ref:n},c),{},{components:r})):t.createElement(u,o({ref:n},c))}));function k(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9360:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"browserConnect.ConnectConfig",title:"Interface: ConnectConfig",sidebar_label:"ConnectConfig",custom_edit_url:null},s=void 0,p={unversionedId:"interfaces/browserConnect.ConnectConfig",id:"version-near-api-js@1.1.0/interfaces/browserConnect.ConnectConfig",title:"Interface: ConnectConfig",description:"browserConnect.ConnectConfig",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/browserConnect.ConnectConfig.md",sourceDirName:"interfaces",slug:"/interfaces/browserConnect.ConnectConfig",permalink:"/near-docs-kor/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"browserConnect.ConnectConfig",title:"Interface: ConnectConfig",sidebar_label:"ConnectConfig",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ViewFunctionCallOptions",permalink:"/near-docs-kor/tools/near-api-js/reference/interfaces/account.ViewFunctionCallOptions"},next:{title:"ConnectConfig",permalink:"/near-docs-kor/tools/near-api-js/reference/interfaces/connect.ConnectConfig"}},c={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"headers",id:"headers",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"helperUrl",id:"helperurl",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"initialBalance",id:"initialbalance",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"jsvmAccountId",id:"jsvmaccountid",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"keyStore",id:"keystore",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"masterAccount",id:"masteraccount",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"networkId",id:"networkid",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"nodeUrl",id:"nodeurl",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"walletUrl",id:"walleturl",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-8",level:4}],f={toc:d};function k(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/modules/browserConnect"},"browserConnect"),".ConnectConfig"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"NearConfig"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ConnectConfig"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"headers"},"headers"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"headers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"NEAR RPC API headers. Can be used to pass API KEY and other parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/providers_json_rpc_provider.JsonRpcProvider"},"JsonRpcProvider")),(0,i.kt)("h4",{id:"index-signature"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#headers"},"headers")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L58"},"near.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"helperurl"},"helperUrl"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"helperUrl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-contract-helper"},"NEAR Contract Helper")," url used to create accounts if no master account is provided"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/account_creator.UrlAccountCreator"},"UrlAccountCreator")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#helperurl"},"helperUrl")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L29"},"near.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialbalance"},"initialBalance"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"initialBalance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The balance transferred from the ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig#masteraccount"},"masterAccount")," to a created account"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/account_creator.LocalAccountCreator"},"LocalAccountCreator")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#initialbalance"},"initialBalance")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L35"},"near.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"jsvmaccountid"},"jsvmAccountId"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"jsvmAccountId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"JVSM account ID for NEAR JS SDK"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#jsvmaccountid"},"jsvmAccountId")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L69"},"near.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"keystore"},"keyStore"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"keyStore"),": ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},(0,i.kt)("inlineCode",{parentName:"a"},"KeyStore"))),(0,i.kt)("p",null,"Holds ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPairs")," for signing transactions"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#keystore"},"keyStore")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L20"},"near.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"masteraccount"},"masterAccount"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"masterAccount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The account to use when creating new accounts"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/account_creator.LocalAccountCreator"},"LocalAccountCreator")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#masteraccount"},"masterAccount")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L41"},"near.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"networkid"},"networkId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"networkId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPairs")," are stored in a ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},"KeyStore")," under the ",(0,i.kt)("inlineCode",{parentName:"p"},"networkId")," namespace."),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#networkid"},"networkId")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L46"},"near.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nodeurl"},"nodeUrl"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"nodeUrl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"NEAR RPC API url. used to make JSON RPC calls to interact with NEAR."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/providers_json_rpc_provider.JsonRpcProvider"},"JsonRpcProvider")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#nodeurl"},"nodeUrl")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L52"},"near.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"walleturl"},"walletUrl"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"walletUrl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"NEAR wallet url used to redirect users to their wallet in browser applications."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wallet.near.org/"},"https://wallet.near.org/")),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig"},"NearConfig"),".",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/near.NearConfig#walleturl"},"walletUrl")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/near.ts#L64"},"near.ts:64")))}k.isMDXComponent=!0}}]);