"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"index",title:"NEAR JavaScript API - v1.1.0",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"index",id:"version-near-api-js@1.1.0/index",title:"NEAR JavaScript API - v1.1.0",description:"NEAR JavaScript API is a complete library to interact with the NEAR blockchain. You can use it in the browser, or in Node.js runtime.",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/index.md",sourceDirName:".",slug:"/",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",sidebarPosition:0,frontMatter:{id:"index",title:"NEAR JavaScript API - v1.1.0",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",next:{title:"Exports",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules"}},c={},u=[{value:"Resources",id:"resources",level:2},{value:"Modules",id:"modules",level:2},{value:"Connect to NEAR",id:"connect-to-near",level:3},{value:"Managing Accounts",id:"managing-accounts",level:3},{value:"Managing Keys",id:"managing-keys",level:3},{value:"RPC",id:"rpc",level:3},{value:"Utils",id:"utils",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NEAR JavaScript API is a complete library to interact with the NEAR blockchain. You can use it in the browser, or in Node.js runtime."),(0,o.kt)("p",null,"\ud83d\udc49 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.near.org/tools/near-api-js/quick-reference"},"Learn how to use")," the library in your project.")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/README.md"},"Cookbook")," with common use cases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To quickly get started with integrating NEAR in a ",(0,o.kt)("em",{parentName:"p"},"web browser"),", read our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/develop/integrate/frontend"},"Web Frontend integration")," article.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Explore the code in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js"},"project's repository"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org"},"NEAR documentation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/api/rpc/introduction"},"RPC Endpoints")," reference"))),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("h3",{id:"connect-to-near"},"Connect to NEAR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"modules/browserConnect.html"},"From the browser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"modules/connect.html"},"From Node.js"))),(0,o.kt)("h3",{id:"managing-accounts"},"Managing Accounts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Class ",(0,o.kt)("a",{parentName:"li",href:"classes/account.Account.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Account"))),(0,o.kt)("li",{parentName:"ul"},"Module ",(0,o.kt)("a",{parentName:"li",href:"modules/walletAccount.html"},(0,o.kt)("inlineCode",{parentName:"a"},"walletAccount"))),(0,o.kt)("li",{parentName:"ul"},"Class ",(0,o.kt)("a",{parentName:"li",href:"classes/contract.Contract.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Contract")))),(0,o.kt)("h3",{id:"managing-keys"},"Managing Keys"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Module ",(0,o.kt)("a",{parentName:"li",href:"modules/utils_key_pair.html"},(0,o.kt)("inlineCode",{parentName:"a"},"utils/key_pair"))),(0,o.kt)("li",{parentName:"ul"},"Class ",(0,o.kt)("a",{parentName:"li",href:"classes/key_stores_browser_local_storage_key_store.BrowserLocalStorageKeyStore.html"},(0,o.kt)("inlineCode",{parentName:"a"},"BrowserLocalStorageKeyStore"))),(0,o.kt)("li",{parentName:"ul"},"Class ",(0,o.kt)("a",{parentName:"li",href:"classes/key_stores_in_memory_key_store.InMemoryKeyStore.html"},(0,o.kt)("inlineCode",{parentName:"a"},"InMemoryKeyStore"))),(0,o.kt)("li",{parentName:"ul"},"Class ",(0,o.kt)("a",{parentName:"li",href:"classes/key_stores_unencrypted_file_system_keystore.UnencryptedFileSystemKeyStore.html"},(0,o.kt)("inlineCode",{parentName:"a"},"UnencryptedFileSystemKeyStore"))),(0,o.kt)("li",{parentName:"ul"},"Class ",(0,o.kt)("a",{parentName:"li",href:"classes/key_stores_merge_key_store.MergeKeyStore.html"},(0,o.kt)("inlineCode",{parentName:"a"},"MergeKeyStore")))),(0,o.kt)("h3",{id:"rpc"},"RPC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"modules/providers_provider.html"},"Request and Response Types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"classes/providers_json_rpc_provider.JsonRpcProvider.html"},"Client"))),(0,o.kt)("h3",{id:"utils"},"Utils"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"modules/utils_format.html"},"Formatting utils"))))}d.isMDXComponent=!0}}]);