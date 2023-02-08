"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:2},l="Sending $NEAR",c={unversionedId:"sdk/rust/promises/token-tx",id:"sdk/rust/promises/token-tx",title:"Sending $NEAR",description:"You might want to send tokens from a contract for many reasons.",source:"@site/../docs/sdk/rust/promises/token-tx.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/token-tx",permalink:"/near-docs-kor/sdk/rust/promises/token-tx",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/token-tx.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"Promises: Introduction",permalink:"/near-docs-kor/sdk/rust/promises/intro"},next:{title:"Creating Accounts",permalink:"/near-docs-kor/sdk/rust/promises/create-account"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sending-near"},"Sending $NEAR"),(0,o.kt)("p",null,"You might want to send tokens from a contract for many reasons."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The contract uses something like the ",(0,o.kt)("a",{parentName:"li",href:"https://nomicon.io/Standards/StorageManagement.html"},"Storage Standard")," and needs to return deposits to users when they unregister."),(0,o.kt)("li",{parentName:"ul"},"Users pay into the contract and the contract later pays these fees to the maintainers, redistributes them to users, or disburses them to some cause the users vote on."),(0,o.kt)("li",{parentName:"ul"},"And more!")),(0,o.kt)("p",null,"Blockchains give us programmable money, and the ability for a smart contract to send tokens lies at the heart of that ability."),(0,o.kt)("p",null,"NEAR makes this easy. Transferring NEAR tokens is the simplest transaction you can send from a smart contract. Here's all you need:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let amount: u128 = 1_000_000_000_000_000_000_000_000; // 1 $NEAR as yoctoNEAR\nlet account_id: AccountId = "example.near".parse().unwrap();\n\nPromise::new(account_id).transfer(amount);\n')),(0,o.kt)("p",null,"In the context of a full contract and function call, this could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use near_sdk::{json_types::U128, near_bindgen, AccountId, Promise};\n\n#[near_bindgen]\npub struct Contract {}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn pay(amount: U128, to: AccountId) -> Promise {\n        Promise::new(to).transfer(amount.0)\n    }\n}\n")),(0,o.kt)("p",null,"Most of this is boilerplate you're probably familiar with by now \u2013\xa0imports, setting up ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/sdk/rust/contract-structure/near-bindgen"},(0,o.kt)("inlineCode",{parentName:"a"},"near_bindgen")),", ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/sdk/rust/contract-interface/serialization-interface"},"borsh"),", etc. Some interesting details related to the transfer itself:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"U128")," with a capital ",(0,o.kt)("inlineCode",{parentName:"p"},"U"),": The ",(0,o.kt)("inlineCode",{parentName:"p"},"pay")," method defined here accepts JSON as input, and numbers in JS ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},"cannot be larger than ",(0,o.kt)("inlineCode",{parentName:"a"},"2^53-1")),", so for compatibility with deserializing JSON to JS, the integer is serialized as a decimal string. Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," method takes a number in ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Yocto-"},"yocto"),"NEAR, it's likely to need numbers much larger than ",(0,o.kt)("inlineCode",{parentName:"p"},"2^53-1"),"."),(0,o.kt)("p",{parentName:"li"},"When a function takes ",(0,o.kt)("inlineCode",{parentName:"p"},"U128")," as input, it means that callers need to specify the number a a string. near-sdk-rs will then cast it to ",(0,o.kt)("inlineCode",{parentName:"p"},"U128")," type, which wraps Rust's native ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.u128.html"},(0,o.kt)("inlineCode",{parentName:"a"},"u128")),". The underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"u128")," can be retrieved with ",(0,o.kt)("inlineCode",{parentName:"p"},".0")," \u2013\xa0used in ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer(amount.0)"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"AccountId"),": this will automatically check that the provided string is a well-formed NEAR account ID, and panic with a useful error if not.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Returning ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),": This allows NEAR Explorer, near-cli, near-api-js, and other tooling to correctly determine if a whole chain of transactions is successful. If your function does not return ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),", tools like near-cli will return immediately after your function call. And then even if the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," fails, your function call will be considered successful. You can see an example of this behavior ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/xcc-advanced"},"here"),"."))),(0,o.kt)("p",null,"Using near-cli, someone could invoke this function with a call like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'near call $CONTRACT pay \'{"amount": "1000000000000000000000000", "to": "example.near"}\' --accountId benjiman.near\n')))}d.isMDXComponent=!0}}]);