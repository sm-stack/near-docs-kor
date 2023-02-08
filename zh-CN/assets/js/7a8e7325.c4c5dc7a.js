"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"near-sdk-rs",title:"Rust SDK"},l=void 0,c={unversionedId:"tools/near-sdk-rs",id:"tools/near-sdk-rs",title:"Rust SDK",description:"Rust is a programming language designed for performance and safety. It is syntactically similar to C++, but can guarantee memory safety without resorting to garbage collection. Rust has proven to be a mature and secure language, which makes it ideal to write smart contracts. Because of this, Rust is the preferred programming language for writing smart contracts on NEAR. While there might be a learning curve for those coming from web development, learning Rust enables to write safer and faster contracts. Furthermore, core contracts such as Fungible Tokens and DAOs are currently only available in Rust.",source:"@site/../docs/4.tools/rs-sdk.md",sourceDirName:"4.tools",slug:"/tools/near-sdk-rs",permalink:"/near-docs-kor/zh-CN/tools/near-sdk-rs",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/rs-sdk.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"near-sdk-rs",title:"Rust SDK"},sidebar:"develop",previous:{title:"JavaScript SDK",permalink:"/near-docs-kor/zh-CN/tools/near-sdk-js"},next:{title:"NEAR CLI",permalink:"/near-docs-kor/zh-CN/tools/near-cli"}},u={},p=[{value:"Create Your First Rust Contract",id:"create-your-first-rust-contract",level:2},{value:"Resources",id:"resources",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rust is a programming language designed for performance and safety. It is syntactically similar to C++, but can guarantee memory safety without resorting to garbage collection. Rust has proven to be a mature and secure language, which makes it ideal to write smart contracts. Because of this, ",(0,o.kt)("strong",{parentName:"p"},"Rust is the preferred programming language for writing smart contracts on NEAR"),". While there might be a learning curve for those coming from web development, learning Rust enables to write safer and faster contracts. Furthermore, core contracts such as Fungible Tokens and DAOs are currently only available in Rust."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"create-your-first-rust-contract"},"Create Your First Rust Contract"),(0,o.kt)("p",null,"Create your first ",(0,o.kt)("strong",{parentName:"p"},"Rust contract")," in minutes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and install ",(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch01-01-installation.html"},"Rust"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a new ",(0,o.kt)("strong",{parentName:"li"},"rust")," project using our ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/develop/quickstart-guide"},"quickstart guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Read our docs on ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/near-docs-kor/zh-CN/develop/contracts/anatomy"},"how to write smart contracts")),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.near.org/develop/contracts/anatomy"},"https://docs.near.org/develop/contracts/anatomy")),(0,o.kt)("li",{parentName:"ol"},"Examples: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.near.org/tutorials/welcome"},"https://docs.near.org/tutorials/welcome")),(0,o.kt)("li",{parentName:"ol"},"Github: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-rs"},"https://github.com/near/near-sdk-rs"))))}d.isMDXComponent=!0}}]);