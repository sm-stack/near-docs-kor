"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],l={id:"account_creator.AccountCreator",title:"Class: AccountCreator",sidebar_label:"AccountCreator",custom_edit_url:null},i=void 0,s={unversionedId:"classes/account_creator.AccountCreator",id:"version-near-api-js@1.1.0/classes/account_creator.AccountCreator",title:"Class: AccountCreator",description:"accountcreator.AccountCreator",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/classes/account_creator.AccountCreator.md",sourceDirName:"classes",slug:"/classes/account_creator.AccountCreator",permalink:"/near-docs-kor/vi/tools/near-api-js/reference/classes/account_creator.AccountCreator",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"account_creator.AccountCreator",title:"Class: AccountCreator",sidebar_label:"AccountCreator",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Account",permalink:"/near-docs-kor/vi/tools/near-api-js/reference/classes/account.Account"},next:{title:"LocalAccountCreator",permalink:"/near-docs-kor/vi/tools/near-api-js/reference/classes/account_creator.LocalAccountCreator"}},u={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"createAccount",id:"createaccount",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/near-api-js/reference/modules/account_creator"},"account_creator"),".AccountCreator"),(0,o.kt)("p",null,"Account creator provides an interface for implementations to actually create accounts"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"AccountCreator"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/near-api-js/reference/classes/account_creator.LocalAccountCreator"},(0,o.kt)("inlineCode",{parentName:"a"},"LocalAccountCreator"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/near-api-js/reference/classes/account_creator.UrlAccountCreator"},(0,o.kt)("inlineCode",{parentName:"a"},"UrlAccountCreator"))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"new AccountCreator"),"()"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"createaccount"},"createAccount"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,o.kt)("strong",{parentName:"p"},"createAccount"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"newAccountId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"newAccountId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/near-docs-kor/vi/tools/near-api-js/reference/classes/utils_key_pair.PublicKey"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicKey")))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/account_creator.ts#L11"},"account_creator.ts:11")))}m.isMDXComponent=!0}}]);