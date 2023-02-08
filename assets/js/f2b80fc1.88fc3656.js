"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_position:3},s="Private Methods",l={unversionedId:"sdk/rust/contract-interface/private-methods",id:"sdk/rust/contract-interface/private-methods",title:"Private Methods",description:"When using callbacks",source:"@site/../docs/sdk/rust/contract-interface/private-methods.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/private-methods",permalink:"/sdk/rust/contract-interface/private-methods",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/private-methods.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"Contract Mutability",permalink:"/sdk/rust/contract-interface/contract-mutability"},next:{title:"Payable Methods",permalink:"/sdk/rust/contract-interface/payable-methods"}},p={},d=[{value:"When using callbacks",id:"when-using-callbacks",level:2},{value:"Writing internal methods",id:"writing-internal-methods",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"private-methods"},"Private Methods"),(0,i.kt)("h2",{id:"when-using-callbacks"},"When using callbacks"),(0,i.kt)("p",null,"Usually, when a contract has to have a callback for a remote cross-contract call, this callback method should only be called by the contract itself. It's to avoid someone else calling it and messing the state. Pretty common pattern is to have an assertion that validates that the direct caller (predecessor account ID) matches to the contract's account (current account ID). Macro ",(0,i.kt)("inlineCode",{parentName:"p"},"#[private]")," simplifies it, by making it a single line macro instead and improves readability."),(0,i.kt)("p",null,"Use this annotation within the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/rust/contract-structure/near-bindgen"},(0,i.kt)("inlineCode",{parentName:"a"},"near_bindgen")," macro")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[private]\npub fn my_method(&mut self) {\n    \u2026\n}\n")),(0,i.kt)("p",null,"Which is equivalent to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn my_method(&mut self ) {\n    if near_sdk::env::current_account_id() != near_sdk::env::predecessor_account_id() {\n        near_sdk::env::panic_str("Method method is private");\n    }\n...\n}\n')),(0,i.kt)("p",null,"Now with this annotation, only the account of the contract itself can call this method, either directly or through a promise."),(0,i.kt)("h2",{id:"writing-internal-methods"},"Writing internal methods"),(0,i.kt)("p",null,"Not all functions need to be exposed publicly. It may be beneficial to write private methods for helper or utility functions, for instance. There are three approaches to write internal methods:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"pub fn")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn helper_method(a: u8, b: u8) {\n  \u2026\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"pub(crate) fn"),". This may be helpful when an internal method is in a different module."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Function that can be called in another Rust file\npub(crate) fn get_first_name(account: Account) {\n  \u2026\n}\n")),(0,i.kt)("p",{parentName:"li"},"More information from the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/reference/visibility-and-privacy.html"},"official Rust docs")," regarding public/private methods.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Separate ",(0,i.kt)("inlineCode",{parentName:"p"},"impl")," block  "),(0,i.kt)("p",{parentName:"li"},"Another way of not exporting methods is by having a separate ",(0,i.kt)("inlineCode",{parentName:"p"},"impl Contract")," section, that is not marked with ",(0,i.kt)("inlineCode",{parentName:"p"},"#[near_bindgen]"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\nimpl Contract {\n    pub fn increment(&mut self) {\n        self.internal_increment();\n    }\n}\nimpl Contract {\n    /// This methods is still not exported.\n    pub fn internal_increment(&mut self) {\n        self.counter += 1;\n    }\n}\n")))))}m.isMDXComponent=!0}}]);