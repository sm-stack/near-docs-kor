"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"whatisacontract",title:"What is a Smart Contract?",sidebar_label:"What is a Smart Contract?"},c=void 0,l={unversionedId:"develop/contracts/whatisacontract",id:"develop/contracts/whatisacontract",title:"What is a Smart Contract?",description:"Smart contracts are simple programs that live in a NEAR network. As any modern application, smart contracts store data and expose methods to interact with them.",source:"@site/../docs/2.develop/contracts/whatiscontract.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/whatisacontract",permalink:"/near-docs-kor/vi/develop/contracts/whatisacontract",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/whatiscontract.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"whatisacontract",title:"What is a Smart Contract?",sidebar_label:"What is a Smart Contract?"},sidebar:"develop",previous:{title:"\u2b50 Quickstart",permalink:"/near-docs-kor/vi/develop/quickstart-guide"},next:{title:"Prerequisites",permalink:"/near-docs-kor/vi/develop/contracts/introduction"}},p={},u=[{value:"Programming Languages",id:"programming-languages",level:2},{value:"Other Languages",id:"other-languages",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Smart contracts are simple programs that live in a NEAR network. As any modern application, smart contracts store data and expose methods to interact with them."),(0,o.kt)("p",null,"They are written in human-readable languages, then compiled and deployed to an account where everyone can interact with them."),(0,o.kt)("p",null,"Do not worry if you don't know how smart-contract blockchains work. As a developer, it is sufficient to understand that NEAR smart-contracts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Have ",(0,o.kt)("strong",{parentName:"li"},"limited")," computational resources."),(0,o.kt)("li",{parentName:"ol"},"Interact with other contracts in an ",(0,o.kt)("strong",{parentName:"li"},"asynchronous")," way."),(0,o.kt)("li",{parentName:"ol"},"Deal with ",(0,o.kt)("strong",{parentName:"li"},"real money"),", for which security must be a top concern.")),(0,o.kt)("admonition",{title:"HTTP Requests and Smart Contracts",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Smart contracts ",(0,o.kt)("strong",{parentName:"p"},"cannot perform HTTP requests"),", meaning they can't retrieve data from outside the NEAR network. However, they can receive data from any outside source. If needed, you can set up a server to regularly feed them data (this is in short how ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/relevant-contracts/oracles"},"Oracles")," work).")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"programming-languages"},"Programming Languages"),(0,o.kt)("p",null,"Developers can choose between using ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/near-sdk-js"},"Javascript")," or ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/near-sdk-js"},"Rust")," to write smart contracts in NEAR."),(0,o.kt)("p",null,"Indistinctly from the language chosen, the NEAR SDK will help you to compile the contract into WebAssembly, from which point it can be deployed and executed on the NEAR platform."),(0,o.kt)("p",null,"While it is not necessary to be an expert in either language, during these docs we will assume you have a basic knowledge of at least one of them."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/near/near-sdk-js/releases/"},"JS-SDK")," is currently in Alpha"),(0,o.kt)("p",{parentName:"admonition"},"The JavaScript runtime has not been fully audited. For creating smart contracts that hold value please use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs"},(0,o.kt)("inlineCode",{parentName:"a"},"near-sdk-rs")),". ")),(0,o.kt)("h3",{id:"other-languages"},"Other Languages"),(0,o.kt)("p",null,"Theoretically, you can use any language that compiles to Wasm for developing NEAR smart contract. However, in order to have a user-friendly experience we would need\nto provide a library that wraps around low-level runtime APIs, while also offering other high-level functionalities."),(0,o.kt)("p",null,"We envision that in the future, more languages will be supported and the support will be done through the effort from the wider community, not just NEAR alone."))}m.isMDXComponent=!0}}]);