"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"walletAccount.WalletConnection",title:"Class: WalletConnection",sidebar_label:"WalletConnection",custom_edit_url:null},s=void 0,p={unversionedId:"classes/walletAccount.WalletConnection",id:"version-near-api-js@1.1.0/classes/walletAccount.WalletConnection",title:"Class: WalletConnection",description:"walletAccount.WalletConnection",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/classes/walletAccount.WalletConnection.md",sourceDirName:"classes",slug:"/classes/walletAccount.WalletConnection",permalink:"/near-docs-kor/tools/near-api-js/reference/classes/walletAccount.WalletConnection",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"walletAccount.WalletConnection",title:"Class: WalletConnection",sidebar_label:"WalletConnection",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ConnectedWalletAccount",permalink:"/near-docs-kor/tools/near-api-js/reference/classes/walletAccount.ConnectedWalletAccount"},next:{title:"AccountAuthorizedApp",permalink:"/near-docs-kor/tools/near-api-js/reference/interfaces/account.AccountAuthorizedApp"}},c={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"account",id:"account",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getAccountId",id:"getaccountid",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isSignedIn",id:"issignedin",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"isSignedInAsync",id:"issignedinasync",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"requestSignIn",id:"requestsignin",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"requestSignTransactions",id:"requestsigntransactions",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"signOut",id:"signout",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}],u={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/modules/walletAccount"},"walletAccount"),".WalletConnection"),(0,l.kt)("p",null,"This class is used in conjunction with the ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/key_stores_browser_local_storage_key_store.BrowserLocalStorageKeyStore"},"BrowserLocalStorageKeyStore"),".\nIt redirects users to ",(0,l.kt)("a",{parentName:"p",href:"https://wallet.near.org"},"NEAR Wallet")," for key management.\nThis class is not intended for use outside the browser. Without ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," (i.e. in server contexts), it will instantiate but will throw a clear error when used."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/near-api-js/quick-reference#wallet"},"https://docs.near.org/tools/near-api-js/quick-reference#wallet")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// create new WalletConnection instance\nconst wallet = new WalletConnection(near, 'my-app');\n\n// If not signed in redirect to the NEAR wallet to sign in\n// keys will be stored in the BrowserLocalStorageKeyStore\nif(!wallet.isSignedIn()) return wallet.requestSignIn()\n")),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"new WalletConnection"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"near"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"appKeyPrefix"),")"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"near")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/near-docs-kor/tools/near-api-js/reference/classes/near.Near"},(0,l.kt)("inlineCode",{parentName:"a"},"Near")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"appKeyPrefix")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/wallet-account.ts#L87"},"wallet-account.ts:87")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"account"},"account"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"account"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/walletAccount.ConnectedWalletAccount"},(0,l.kt)("inlineCode",{parentName:"a"},"ConnectedWalletAccount"))),(0,l.kt)("p",null,"Returns the current connected wallet account"),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/walletAccount.ConnectedWalletAccount"},(0,l.kt)("inlineCode",{parentName:"a"},"ConnectedWalletAccount"))),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/wallet-account.ts#L273"},"wallet-account.ts:273")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getaccountid"},"getAccountId"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"getAccountId"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Returns authorized Account ID."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const wallet = new WalletConnection(near, 'my-app');\nwallet.getAccountId();\n")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/wallet-account.ts#L159"},"wallet-account.ts:159")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"issignedin"},"isSignedIn"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"isSignedIn"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Returns true, if this WalletConnection is authorized with the wallet."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const wallet = new WalletConnection(near, 'my-app');\nwallet.isSignedIn();\n")),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/wallet-account.ts#L128"},"wallet-account.ts:128")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"issignedinasync"},"isSignedInAsync"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"isSignedInAsync"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,l.kt)("p",null,"Returns promise of completing signing in after redirecting from wallet"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// on login callback page\nconst wallet = new WalletConnection(near, 'my-app');\nwallet.isSignedIn(); // false\nawait wallet.isSignedInAsync(); // true\n")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/wallet-account.ts#L142"},"wallet-account.ts:142")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestsignin"},"requestSignIn"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"requestSignIn"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Redirects current page to the wallet authentication page."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const wallet = new WalletConnection(near, 'my-app');\n// redirects to the NEAR Wallet\nwallet.requestSignIn({ contractId: 'account-with-deploy-contract.near' });\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"SignInOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},"An optional options object")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/wallet-account.ts#L177"},"wallet-account.ts:177")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestsigntransactions"},"requestSignTransactions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"requestSignTransactions"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Requests the user to quickly sign for a transaction or batch of transactions by redirecting to the NEAR wallet."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"RequestSignTransactionsOptions"))))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/wallet-account.ts#L205"},"wallet-account.ts:205")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"signout"},"signOut"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"signOut"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Sign out from the current account"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"walletConnection.signOut();\n")),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/wallet-account.ts#L265"},"wallet-account.ts:265")))}k.isMDXComponent=!0}}]);