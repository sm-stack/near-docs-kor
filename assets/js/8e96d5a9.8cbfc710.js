"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={id:"best-practices",title:"Best Practices"},l="Best practices",c={unversionedId:"sdk/rust/best-practices",id:"sdk/rust/best-practices",title:"Best Practices",description:"Enable overflow checks",source:"@site/../docs/sdk/rust/best-practices.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/best-practices",permalink:"/sdk/rust/best-practices",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/best-practices.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"best-practices",title:"Best Practices"},sidebar:"sdk",previous:{title:"Unit Tests",permalink:"/sdk/rust/testing/unit-tests"},next:{title:"Reducing Contract Size",permalink:"/sdk/rust/contract-size"}},p={},u=[{value:"Enable overflow checks",id:"enable-overflow-checks",level:2},{value:"Use <code>require!</code> early",id:"use-require-early",level:2},{value:"Use <code>log!</code>",id:"use-log",level:2},{value:"Return <code>Promise</code>",id:"return-promise",level:2},{value:"Reuse crates from <code>near-sdk</code>",id:"reuse-crates-from-near-sdk",level:2},{value:"<code>std::panic!</code> vs <code>env::panic</code>",id:"stdpanic-vs-envpanic",level:2},{value:"Use workspaces",id:"use-workspaces",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"best-practices"},"Best practices"),(0,s.kt)("h2",{id:"enable-overflow-checks"},"Enable overflow checks"),(0,s.kt)("p",null,"It's usually helpful to panic on integer overflow. To enable it, add the following into your ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},"[profile.release]\noverflow-checks = true\n")),(0,s.kt)("h2",{id:"use-require-early"},"Use ",(0,s.kt)("inlineCode",{parentName:"h2"},"require!")," early"),(0,s.kt)("p",null,"Try to validate the input, context, state and access using ",(0,s.kt)("inlineCode",{parentName:"p"},"require!")," before taking any actions. The earlier you panic, the more ",(0,s.kt)("a",{parentName:"p",href:"https://docs.near.org/concepts/basics/transactions/gas"},"gas")," you will save for the caller."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[near_bindgen]\nimpl Contract {\n    pub fn set_fee(&mut self, new_fee: Fee) {\n        require!(env::predecessor_account_id() == self.owner_id, "Owner\'s method");\n        new_fee.assert_valid();\n        self.internal_set_fee(new_fee);\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),": If you want debug information in the panic message or if you are using an SDK version before ",(0,s.kt)("inlineCode",{parentName:"p"},"4.0.0-pre.2"),",\nthe Rust ",(0,s.kt)("inlineCode",{parentName:"p"},"assert!")," macro can be used instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"require!"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[near_bindgen]\nimpl Contract {\n    pub fn set_fee(&mut self, new_fee: Fee) {\n        assert_eq!(env::predecessor_account_id(), self.owner_id, "Owner\'s method");\n        new_fee.assert_valid();\n        self.internal_set_fee(new_fee);\n    }\n}\n')),(0,s.kt)("h2",{id:"use-log"},"Use ",(0,s.kt)("inlineCode",{parentName:"h2"},"log!")),(0,s.kt)("p",null,"Use logging for debugging and notifying user."),(0,s.kt)("p",null,"When you need a formatted message, you can use the following macro:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'log!("Transferred {} tokens from {} to {}", amount, sender_id, receiver_id);\n')),(0,s.kt)("p",null,"It's equivalent to the following message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'env::log_str(format!("Transferred {} tokens from {} to {}", amount, sender_id, receiver_id).as_ref());\n')),(0,s.kt)("h2",{id:"return-promise"},"Return ",(0,s.kt)("inlineCode",{parentName:"h2"},"Promise")),(0,s.kt)("p",null,"If your method makes a cross-contract call, you probably want to return the newly created ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),".\nThis allows the caller (such as a near-cli or near-api-js call) to wait for the result of the promise instead of returning immediately.\nAdditionally, if the promise fails for some reason, returning it will let the caller know about the failure, as well as enabling NEAR Explorer and other tools to mark the whole transaction chain as failing.\nThis can prevent false-positives when the first or first few transactions in a chain succeed but a subsequent transaction fails."),(0,s.kt)("p",null,"E.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\nimpl Contract {\n    pub fn withdraw_100(&mut self, receiver_id: AccountId) -> Promise {\n        Promise::new(receiver_id).transfer(100)\n    }\n}\n")),(0,s.kt)("h2",{id:"reuse-crates-from-near-sdk"},"Reuse crates from ",(0,s.kt)("inlineCode",{parentName:"h2"},"near-sdk")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"near-sdk")," re-exports the following crates:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"borsh")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"base64")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bs58")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"serde")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"serde_json"))),(0,s.kt)("p",null,"Most common crates include ",(0,s.kt)("inlineCode",{parentName:"p"},"borsh")," which is needed for internal STATE serialization and\n",(0,s.kt)("inlineCode",{parentName:"p"},"serde")," for external JSON serialization."),(0,s.kt)("p",null,"When marking structs with ",(0,s.kt)("inlineCode",{parentName:"p"},"serde::Serialize")," you need to use ",(0,s.kt)("inlineCode",{parentName:"p"},'#[serde(crate = "near_sdk::serde")]'),"\nto point serde to the correct base crate."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'/// Import `borsh` from `near_sdk` crate \nuse near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\n/// Import `serde` from `near_sdk` crate \nuse near_sdk::serde::{Serialize, Deserialize};\n\n/// Main contract structure serialized with Borsh\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub pair: Pair,\n}\n\n/// Implements both `serde` and `borsh` serialization.\n/// `serde` is typically useful when returning a struct in JSON format for a frontend.\n#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct Pair {\n    pub a: u32,\n    pub b: u32,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(pair: Pair) -> Self {\n        Self {\n            pair,\n        }\n    }\n\n    pub fn get_pair(self) -> Pair {\n        self.pair\n    }\n}\n')),(0,s.kt)("h2",{id:"stdpanic-vs-envpanic"},(0,s.kt)("inlineCode",{parentName:"h2"},"std::panic!")," vs ",(0,s.kt)("inlineCode",{parentName:"h2"},"env::panic")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"std::panic!")," panics the current thread. It uses ",(0,s.kt)("inlineCode",{parentName:"p"},"format!")," internally, so it can take arguments.\nSDK sets up a panic hook, which converts the generated ",(0,s.kt)("inlineCode",{parentName:"p"},"PanicInfo")," from ",(0,s.kt)("inlineCode",{parentName:"p"},"panic!")," into a string and uses ",(0,s.kt)("inlineCode",{parentName:"p"},"env::panic")," internally to report it to Runtime.\nThis may provide extra debugging information such as the line number of the source code where the panic happened.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"env::panic")," directly calls the host method to panic the contract.\nIt doesn't provide any other extra debugging information except for the passed message."))),(0,s.kt)("h2",{id:"use-workspaces"},"Use workspaces"),(0,s.kt)("p",null,"Workspaces allow you to automate workflows and run tests for multiple contracts and cross-contract calls in a sandbox or testnet environment.\nRead more, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs"},"workspaces-rs")," or ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js"},"workspaces-js"),"."))}m.isMDXComponent=!0}}]);