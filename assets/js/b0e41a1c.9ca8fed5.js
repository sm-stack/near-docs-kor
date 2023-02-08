"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9270],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(d,".").concat(s)]||u[s]||m[s]||l;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10272:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var a,r=n(87462),l=n(63366),o=(n(67294),n(3905)),i=["components"],d={},p=void 0,c={unversionedId:"develop/contracts/environment/table.rs",id:"develop/contracts/environment/table.rs",title:"table.rs",description:"| Variable Name          | SDK Variable                    | Description                                                            |",source:"@site/../docs/2.develop/contracts/environment/table.rs.md",sourceDirName:"2.develop/contracts/environment",slug:"/develop/contracts/environment/table.rs",permalink:"/near-docs-kor/develop/contracts/environment/table.rs",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/environment/table.rs.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{}},m={},u=[],s=(a="TableRs",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}),k={toc:u};function g(t){var e=t.components,n=(0,l.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"TableRs"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,o.kt)("th",{parentName:"tr",align:null},"SDK Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Predecessor"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::predecessor_account_id()")),(0,o.kt)("td",{parentName:"tr",align:null},"Account ID that called this method")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Current Account"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::current_account_id()")),(0,o.kt)("td",{parentName:"tr",align:null},"Account ID of this smart contract")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Signer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::signer_account_id()")),(0,o.kt)("td",{parentName:"tr",align:null},"Account ID that signed the transaction leading to this execution")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Attached Deposit"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::attached_deposit()")),(0,o.kt)("td",{parentName:"tr",align:null},"Amount in NEAR attached to the call by the predecessor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account Balance"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::account_balance()")),(0,o.kt)("td",{parentName:"tr",align:null},"Balance of this smart contract (including Attached Deposit)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Prepaid Gas"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::prepaid_gas()")),(0,o.kt)("td",{parentName:"tr",align:null},"Amount of gas available for execution")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::block_timestamp()")),(0,o.kt)("td",{parentName:"tr",align:null},"Current timestamp (number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Current Epoch"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::epoch_height()")),(0,o.kt)("td",{parentName:"tr",align:null},"Current epoch in the blockchain")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block Index"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::block_index()")),(0,o.kt)("td",{parentName:"tr",align:null},"Current block index (a.k.a. block height)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Used"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::storage_usage()")),(0,o.kt)("td",{parentName:"tr",align:null},"Current storage used by this smart contract in bytes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Byte Cost"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::storage_byte_cost()")),(0,o.kt)("td",{parentName:"tr",align:null},"Current storage cost per byte in yoctoNEAR")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Used Gas"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::used_gas()")),(0,o.kt)("td",{parentName:"tr",align:null},"Amount of gas used for execution")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Signer Public Key"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::signer_account_pk()")),(0,o.kt)("td",{parentName:"tr",align:null},"Sender Public Key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account Locked Balance"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"env::account_locked_balance()")),(0,o.kt)("td",{parentName:"tr",align:null},"Balance of this smart contract that is locked"))))))}g.isMDXComponent=!0}}]);