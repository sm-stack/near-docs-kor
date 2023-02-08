"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],c={id:"walletAccount",title:"Module: walletAccount",sidebar_label:"walletAccount",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"modules/walletAccount",id:"version-near-api-js@1.1.0/modules/walletAccount",title:"Module: walletAccount",description:"The classes in this module are used in conjunction with the BrowserLocalStorageKeyStore.",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/modules/walletAccount.md",sourceDirName:"modules",slug:"/modules/walletAccount",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/walletAccount",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",sidebarPosition:0,frontMatter:{id:"walletAccount",title:"Module: walletAccount",sidebar_label:"walletAccount",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"validators",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/validators"},next:{title:"MultisigDeleteRequestRejectionError",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/enums/account_multisig.MultisigDeleteRequestRejectionError"}},u={},p=[{value:"Classes",id:"classes",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The classes in this module are used in conjunction with the ",(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/key_stores_browser_local_storage_key_store.BrowserLocalStorageKeyStore"},"BrowserLocalStorageKeyStore"),".\nThis module exposes two classes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/walletAccount.WalletConnection"},"WalletConnection")," which redirects users to ",(0,a.kt)("a",{parentName:"li",href:"https://wallet.near.org/"},"NEAR Wallet")," for key management."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/walletAccount.ConnectedWalletAccount"},"ConnectedWalletAccount")," is an ",(0,a.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/account.Account"},"Account")," implementation that uses ",(0,a.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/walletAccount.WalletConnection"},"WalletConnection")," to get keys")),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/walletAccount.ConnectedWalletAccount"},"ConnectedWalletAccount")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/classes/walletAccount.WalletConnection"},"WalletConnection"))))}f.isMDXComponent=!0}}]);