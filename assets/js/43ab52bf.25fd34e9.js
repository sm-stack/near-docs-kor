"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=i(a),d=l,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var i=2;i<o;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),r=["components"],s={sidebar_position:2},c="Callbacks",i={unversionedId:"sdk/rust/cross-contract/callbacks",id:"sdk/rust/cross-contract/callbacks",title:"Callbacks",description:"NEAR Protocol is a sharded, proof-of-stake blockchain that behaves differently than proof-of-work blockchains. When interacting with a native Rust (compiled to Wasm) smart contract, cross-contract calls are asynchronous. Callbacks are used to either get the result of a cross-contract call or tell if a cross-contract call has succeeded or failed.",source:"@site/../docs/sdk/rust/cross-contract/callbacks.md",sourceDirName:"sdk/rust/cross-contract",slug:"/sdk/rust/cross-contract/callbacks",permalink:"/sdk/rust/cross-contract/callbacks",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/cross-contract/callbacks.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"Serialization Protocols",permalink:"/sdk/rust/contract-interface/serialization-interface"},next:{title:"Promises: Introduction",permalink:"/sdk/rust/promises/intro"}},u={},p=[{value:"Calculator example",id:"calculator-example",level:2},{value:"Allowlist example",id:"allowlist-example",level:2}],h={toc:p};function d(e){var t=e.components,a=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"callbacks"},"Callbacks"),(0,o.kt)("p",null,"NEAR Protocol is a sharded, proof-of-stake blockchain that behaves differently than proof-of-work blockchains. When interacting with a native Rust (compiled to Wasm) smart contract, cross-contract calls are asynchronous. Callbacks are used to either get the result of a cross-contract call or tell if a cross-contract call has succeeded or failed."),(0,o.kt)("p",null,"There are two techniques to write cross-contract calls: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/high-level/src/lib.rs"},"high-level")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/low-level/src/lib.rs"},"low-level"),'. This document will mostly focus on the high-level approach. There are two examples in the Rust SDK repository that demonstrate these, as linked above. Note that these examples use cross-contract calls "to itself." We\'ll show two examples demonstrating the high-level approach.'),(0,o.kt)("h2",{id:"calculator-example"},"Calculator example"),(0,o.kt)("p",null,"There is a helper macro that allows you to make cross-contract calls with the syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ext_contract(...)]"),". It takes a Rust Trait and converts it to a module with static methods. Each of these static methods takes positional arguments defined by the Trait, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver_id"),", the attached deposit and the amount of gas and returns a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"."),(0,o.kt)("p",null,"For example, let's define a calculator contract Trait:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ext_contract(ext_calculator)]\ntrait Calculator {\n    fn mult(&self, a: U64, b: U64) -> U128;\n\n    fn sum(&self, a: U128, b: U128) -> U128;\n}\n")),(0,o.kt)("p",null,"It's equivalent to the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'mod ext_calculator {\n    pub fn mult(a: U64, b: U64, receiver_id: &AccountId, deposit: Balance, gas: Gas) -> Promise {\n        Promise::new(receiver_id.clone())\n            .function_call(\n                b"mult",\n                json!({ "a": a, "b": b }).to_string().as_bytes(),\n                deposit,\n                gas,\n            )\n    }\n\n    pub fn sum(a: U128, b: U128, receiver_id: &AccountId, deposit: Balance, gas: Gas) -> Promise {\n        // ...\n    }\n}\n')),(0,o.kt)("p",null,"Let's assume the calculator is deployed on ",(0,o.kt)("inlineCode",{parentName:"p"},"calc.near"),", we can use the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[near_bindgen]\nimpl Contract {\n    pub fn sum_a_b(&mut self, a: U128, b: U128) -> Promise {\n        let calculator_account_id: AccountId = "calc.near".parse().unwrap();\n        // Call the method `sum` on the calculator contract.\n        // Any unused GAS will be attached since the default GAS weight is 1.\n        // Attached deposit is defaulted to 0.\n        ext_calculator::ext(calculator_account_id)\n            .sum(a, b)\n    }\n}\n')),(0,o.kt)("h2",{id:"allowlist-example"},"Allowlist example"),(0,o.kt)("p",null,"Next we'll look at a simple cross-contract call that is made to an allowlist smart contract, returning whether an account is in the list or not."),(0,o.kt)("p",null,"The common pattern with cross-contract calls is to call a method on an external smart contract, use ",(0,o.kt)("inlineCode",{parentName:"p"},".then")," syntax to specify a callback, and then retrieve the result or status of the promise. The callback will typically live inside the same, calling smart contract. There's a special macro used for the callback function, which is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk-core/latest/near_sdk_core/struct.AttrSigInfo.html#structfield.is_private"},"#[private]"),". We'll see this pattern in the example below."),(0,o.kt)("p",null,"The following example demonstrates two common approaches to callbacks using the high-level cross-contract approach. When writing high-level cross-contract calls, special ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/trait.html"},"traits")," are set up as interfaces for the smart contract being called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ext_contract(ext_allowlist)]\npub trait ExtAllowlist {\n    fn is_allowlisted(staking_pool_account_id: AccountId) -> bool;\n}\n")),(0,o.kt)("p",null,"After creating the trait, we'll show two simple functions that will make a cross-contract call to an allowlist smart contract, asking if the account ",(0,o.kt)("inlineCode",{parentName:"p"},"mike.testnet")," is allowlisted. These methods will both return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," using different approaches. First we'll look at the methods, then we'll look at the differences in callbacks. Note that for simplicity in this example, the values are hardcoded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub const XCC_GAS: Gas = Gas(20000000000000);\nfn get_allowlist_contract() -> AccountId {\n    "allowlist.demo.testnet".parse().unwrap()\n}\nfn get_account_to_check() -> AccountId {\n    "mike.testnet".parse().unwrap()\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\nimpl Contract {\n    pub fn xcc_use_promise_result() -> Promise {\n        // Call the method `is_allowlisted` on the allowlisted contract. Static GAS is only attached to the callback.\n        // Any unused GAS will be split between the function call and the callback since both have a default unused GAS weight of 1\n        // Attached deposit is defaulted to 0 for both the function call and the callback.\n        ext_allowlist::ext(get_allowlist_contract())\n            .is_allowlisted(get_account_to_check())\n            .then(\n                Self::ext(env::current_account_id())\n                .with_static_gas(XCC_GAS)\n                .callback_promise_result()\n            )\n    }\n\n    pub fn xcc_use_arg_macro(&mut self) -> Promise {\n        // Call the method `is_allowlisted` on the allowlisted contract. Attach static GAS equal to XCC_GAS only for the callback.\n        // Any unused GAS will be split between the function call and the callback since both have a default unused GAS weight of 1\n        // Attached deposit is defaulted to 0 for both the function call and the callback.\n        ext_allowlist::ext(get_allowlist_contract())\n            .is_allowlisted(get_account_to_check())\n            .then(\n                Self::ext(env::current_account_id())\n                    .with_static_gas(XCC_GAS)\n                    .callback_arg_macro()\n            )\n    }\n")),(0,o.kt)("p",null,"The syntax begins with ",(0,o.kt)("inlineCode",{parentName:"p"},"ext_allowlist::ext()")," showing that we're using the trait to call the method on the account passed into ",(0,o.kt)("inlineCode",{parentName:"p"},"ext()"),". We then use ",(0,o.kt)("inlineCode",{parentName:"p"},"with_static_gas()")," to specify a base amount of GAS to attach to the call. We then call the method ",(0,o.kt)("inlineCode",{parentName:"p"},"is_allow_listed()")," and pass in the parameters we'd like to attach."),(0,o.kt)("p",null,"There are a couple things to note when doing these function calls:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can attach a deposit of \u24c3, in yocto\u24c3 to the call by specifying the ",(0,o.kt)("inlineCode",{parentName:"li"},".with_attached_deposit()")," method but it is defaulted to 0 (1 \u24c3 = 1000000000000000000000000 yocto\u24c3, or 1^24 yocto\u24c3)."),(0,o.kt)("li",{parentName:"ol"},"You can attach a static amount of GAS by specifying the ",(0,o.kt)("inlineCode",{parentName:"li"},".with_static_gas()")," method but it is defaulted to 0."),(0,o.kt)("li",{parentName:"ol"},"You can attach an unused GAS weight by specifying the ",(0,o.kt)("inlineCode",{parentName:"li"},".with_unused_gas_weight()")," method but it is defaulted to 1. The unused GAS will be split amongst all the functions in the current execution depending on their weights. If there is only 1 function, any weight above 1 will result in all the unused GAS being attached to that function. If you specify a weight of 0, however, the unused GAS will ",(0,o.kt)("strong",{parentName:"li"},"not")," be attached to that function. If you have two functions, one with a weight of 3, and one with a weight of 1, the first function will get ",(0,o.kt)("inlineCode",{parentName:"li"},"3/4")," of the unused GAS and the other function will get ",(0,o.kt)("inlineCode",{parentName:"li"},"1/4")," of the unused GAS.")),(0,o.kt)("p",null,"The two methods in the snippet above are very similar, except they will call separate callbacks in the smart contract, ",(0,o.kt)("inlineCode",{parentName:"p"},"callback_promise_result")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"callback_arg_macro"),". These two callbacks show how a value can be obtained. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[private]\npub fn callback_arg_macro(#[callback_unwrap] val: bool) -> bool {\n    val\n}\n\n#[private]\npub fn callback_promise_result() -> bool {\n    assert_eq!(env::promise_results_count(), 1, "ERR_TOO_MANY_RESULTS");\n    match env::promise_result(0) {\n        PromiseResult::NotReady => unreachable!(),\n        PromiseResult::Successful(val) => {\n            if let Ok(is_allowlisted) = near_sdk::serde_json::from_slice::<bool>(&val) {\n                is_allowlisted\n            } else {\n                env::panic_str("ERR_WRONG_VAL_RECEIVED")\n            }\n        },\n        PromiseResult::Failed => env::panic_str("ERR_CALL_FAILED"),\n    }\n}\n')),(0,o.kt)("p",null,"The first method uses a macro on the argument to cast the value into what's desired. In this approach, if the value is unable to be casted, it will panic. If you'd like to gracefully handle the error, you can either use the first approach, or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"#[callback_result]")," macro instead. An example of this can be seen below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[private]\npub fn handle_callbacks(\n    // New pattern, will gracefully handle failed callback results\n    #[callback_result] b: Result<u8, near_sdk::PromiseError>,\n) {\n    if b.is_err() {\n        // ...\n    }\n}\n")),(0,o.kt)("p",null,"The second method gets the value from the promise result and is essentially the expanded version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"#[callback_result]")," macro."),(0,o.kt)("p",null,"And that's it! Understanding how to make a cross-contract call and receive a result is an important part of developing smart contracts on NEAR. Two interesting references for using cross-contract calls can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/FT"},"fungible token")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/NFT"},"non-fungible token")," examples."))}d.isMDXComponent=!0}}]);