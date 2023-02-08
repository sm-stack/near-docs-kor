"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),y=a,h=d["".concat(i,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],c={id:"one-yocto",title:"Ensure it is the User (1y\u24c3)"},i=void 0,l={unversionedId:"develop/contracts/security/one-yocto",id:"develop/contracts/security/one-yocto",title:"Ensure it is the User (1y\u24c3)",description:"NEAR uses a system of Access Keys to simplify handling accounts.",source:"@site/../docs/2.develop/contracts/security/one_yocto.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/one-yocto",permalink:"/near-docs-kor/zh-CN/develop/contracts/security/one-yocto",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/one_yocto.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"one-yocto",title:"Ensure it is the User (1y\u24c3)"},sidebar:"develop",previous:{title:"Cross-Contract Calls",permalink:"/near-docs-kor/zh-CN/develop/contracts/security/callbacks"},next:{title:"Sybil Attacks",permalink:"/near-docs-kor/zh-CN/develop/contracts/security/sybil"}},p={},u=[],d={toc:u};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NEAR uses a system of ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/concepts/basics/accounts/access-keys"},"Access Keys")," to simplify handling accounts.\nThere are basically two type of keys: ",(0,o.kt)("inlineCode",{parentName:"p"},"Full Access"),", that have full control over an account (i.e. can perform all ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/actions"},"actions"),"), and\n",(0,o.kt)("inlineCode",{parentName:"p"},"Function Call"),", that only have permission to call a specified smart contract's method(s) that ",(0,o.kt)("em",{parentName:"p"},"do not")," attach \u24c3 as a deposit."),(0,o.kt)("p",null,"When a user ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/integrate/frontend#user-sign-in"},"signs in on a website")," to interact with your contract, what actually happens is\nthat a ",(0,o.kt)("inlineCode",{parentName:"p"},"Function Call")," key is created and stored in the website. Since the website has access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Function Call")," key, it can use it to\ncall the authorized methods as it pleases. While this is very user friendly for most cases, it is important to be careful in scenarios involving\ntransferring of valuable assets like ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/relevant-contracts/nft"},"NFTs")," or ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/relevant-contracts/ft"},"FTs"),". In such cases, you need to ensure that\nthe person asking for the asset to be transfer is ",(0,o.kt)("strong",{parentName:"p"},"actually the user"),"."),(0,o.kt)("p",null,"One direct and inexpensive way to ensure that the user is the one calling is by requiring to attach ",(0,o.kt)("inlineCode",{parentName:"p"},"1 y\u24c3"),". In this case, the user will be\nredirected to the wallet and be asked to accept the transaction. This is because, once again, only the ",(0,o.kt)("inlineCode",{parentName:"p"},"Full Access")," key can be used to send NEAR.\nSince the ",(0,o.kt)("inlineCode",{parentName:"p"},"Full Access")," key is only in the user's wallet, you can trust that a transaction with ",(0,o.kt)("inlineCode",{parentName:"p"},"1 y\u24c3")," was made by the user."))}y.isMDXComponent=!0}}]);