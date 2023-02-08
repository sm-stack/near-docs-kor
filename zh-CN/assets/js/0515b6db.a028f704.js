"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=p(r),c=a,m=y["".concat(o,".").concat(c)]||y[c]||k[c]||s;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},39760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],l={id:"key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore",title:"Class: UnencryptedFileSystemKeyStore",sidebar_label:"UnencryptedFileSystemKeyStore",custom_edit_url:null},o=void 0,p={unversionedId:"classes/key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore",id:"version-near-api-js@1.1.0/classes/key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore",title:"Class: UnencryptedFileSystemKeyStore",description:"keystores/unencryptedfilesystemkeystore.UnencryptedFileSystemKeyStore",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/classes/key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore.md",sourceDirName:"classes",slug:"/classes/key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore",title:"Class: UnencryptedFileSystemKeyStore",sidebar_label:"UnencryptedFileSystemKeyStore",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"MergeKeyStore",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_merge_key_store.MergeKeyStore"},next:{title:"Near",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/near.Near"}},d={},k=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getAccounts",id:"getaccounts",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getKey",id:"getkey",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getNetworks",id:"getnetworks",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"removeKey",id:"removekey",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"setKey",id:"setkey",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}],y={toc:k};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/key_stores_unencrypted_file_system_keystore"},"key_stores/unencrypted_file_system_keystore"),".UnencryptedFileSystemKeyStore"),(0,s.kt)("p",null,"This class is used to store keys on the file system."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"See"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store"},"https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { homedir } = require('os');\nconst { connect, keyStores } = require('near-api-js');\n\nconst keyStore = new keyStores.UnencryptedFileSystemKeyStore(`${homedir()}/.near-credentials`);\nconst config = { \n  keyStore, // instance of UnencryptedFileSystemKeyStore\n  networkId: 'testnet',\n  nodeUrl: 'https://rpc.testnet.near.org',\n  walletUrl: 'https://wallet.testnet.near.org',\n  helperUrl: 'https://helper.testnet.near.org',\n  explorerUrl: 'https://explorer.testnet.near.org'\n};\n\n// inside an async function\nconst near = await connect(config)\n")),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},(0,s.kt)("inlineCode",{parentName:"a"},"KeyStore"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"UnencryptedFileSystemKeyStore"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"new UnencryptedFileSystemKeyStore"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"keyDir"),")"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"keyDir")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"base directory for key storage. Keys will be stored in ",(0,s.kt)("inlineCode",{parentName:"td"},"keyDir/networkId/accountId.json"))))),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},"KeyStore"),".",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore#constructor"},"constructor")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/key_stores/unencrypted_file_system_keystore.ts#L88"},"key_stores/unencrypted_file_system_keystore.ts:88")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"clear"},"clear"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("p",null,"Deletes all unencrypted files from the ",(0,s.kt)("inlineCode",{parentName:"p"},"keyDir")," path."),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"overrides-1"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},"KeyStore"),".",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore#clear"},"clear")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/key_stores/unencrypted_file_system_keystore.ts#L134"},"key_stores/unencrypted_file_system_keystore.ts:134")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getaccounts"},"getAccounts"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"getAccounts"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"networkId"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,s.kt)("p",null,"Gets the account(s) files in ",(0,s.kt)("inlineCode",{parentName:"p"},"keyDir/networkId")),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"networkId")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The targeted network. (ex. default, betanet, etc\u2026)")))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,s.kt)("h4",{id:"overrides-2"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},"KeyStore"),".",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore#getaccounts"},"getAccounts")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/key_stores/unencrypted_file_system_keystore.ts#L164"},"key_stores/unencrypted_file_system_keystore.ts:164")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getkey"},"getKey"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"getKey"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"networkId"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"accountId"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},(0,s.kt)("inlineCode",{parentName:"a"},"KeyPair")),">"),(0,s.kt)("p",null,"Gets a ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair")," from an unencrypted file"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"networkId")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The targeted network. (ex. default, betanet, etc\u2026)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"accountId")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The NEAR account tied to the key pair")))),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},(0,s.kt)("inlineCode",{parentName:"a"},"KeyPair")),">"),(0,s.kt)("h4",{id:"overrides-3"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},"KeyStore"),".",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore#getkey"},"getKey")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/key_stores/unencrypted_file_system_keystore.ts#L111"},"key_stores/unencrypted_file_system_keystore.ts:111")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getnetworks"},"getNetworks"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"getNetworks"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,s.kt)("p",null,"Get the network(s) from files in ",(0,s.kt)("inlineCode",{parentName:"p"},"keyDir")),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,s.kt)("h4",{id:"overrides-4"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},"KeyStore"),".",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore#getnetworks"},"getNetworks")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/key_stores/unencrypted_file_system_keystore.ts#L151"},"key_stores/unencrypted_file_system_keystore.ts:151")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"removekey"},"removeKey"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"removeKey"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"networkId"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"accountId"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("p",null,"Deletes an unencrypted file holding a ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair")),(0,s.kt)("h4",{id:"parameters-3"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"networkId")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The targeted network. (ex. default, betanet, etc\u2026)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"accountId")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The NEAR account tied to the key pair")))),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"overrides-5"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},"KeyStore"),".",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore#removekey"},"removeKey")),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/key_stores/unencrypted_file_system_keystore.ts#L125"},"key_stores/unencrypted_file_system_keystore.ts:125")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"setkey"},"setKey"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"setKey"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"networkId"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"accountId"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"keyPair"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("p",null,"Store a ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},"KeyPair")," in an unencrypted file"),(0,s.kt)("h4",{id:"parameters-4"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"networkId")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The targeted network. (ex. default, betanet, etc\u2026)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"accountId")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The NEAR account tied to the key pair")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"keyPair")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/utils_key_pair.KeyPair"},(0,s.kt)("inlineCode",{parentName:"a"},"KeyPair"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The key pair to store in local storage")))),(0,s.kt)("h4",{id:"returns-5"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"overrides-6"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore"},"KeyStore"),".",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_keystore.KeyStore#setkey"},"setKey")),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/key_stores/unencrypted_file_system_keystore.ts#L99"},"key_stores/unencrypted_file_system_keystore.ts:99")))}c.isMDXComponent=!0}}]);