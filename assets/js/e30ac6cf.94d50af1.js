"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={sidebar_position:2},l="Integration Tests",c={unversionedId:"sdk/rust/testing/integration-tests",id:"sdk/rust/testing/integration-tests",title:"Integration Tests",description:"Note: Simulation tests are no longer actively supported. NEAR Simulator was meant to be an in-place replacement of a blockchain environment for the purpose of testing NEAR contracts. However, simulating NEAR ledger turned out to be a much more complex endeavor than was anticipated. Eventually, the idea of workspaces was born - a library for automating workflows and writing tests for NEAR smart contracts using a real NEAR network (localnet, testnet or mainnet). Thus, NEAR Simulator is being deprecated in favor of workspaces-rs, the Rust edition of workspaces. As the two libraries have two vastly different APIs this guide was created to ease the migration process for developers.",source:"@site/../docs/sdk/rust/testing/integration-tests.md",sourceDirName:"sdk/rust/testing",slug:"/sdk/rust/testing/integration-tests",permalink:"/sdk/rust/testing/integration-tests",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/testing/integration-tests.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"Reproducible Builds",permalink:"/sdk/rust/building/reproducible-builds"},next:{title:"Unit Tests",permalink:"/sdk/rust/testing/unit-tests"}},p={},u=[{value:"Unit Tests vs. Integration Tests",id:"unit-tests-vs-integration-tests",level:2},{value:"When to Use Integration Tests",id:"when-to-use-integration-tests",level:2},{value:"Setup",id:"setup",level:2},{value:"Comparing an Example",id:"comparing-an-example",level:2},{value:"Unit Test",id:"unit-test",level:3},{value:"Workspaces Test",id:"workspaces-test",level:3},{value:"Helpful Snippets",id:"helpful-snippets",level:2},{value:"Create an Account",id:"create-an-account",level:3},{value:"Create Helper Functions",id:"create-helper-functions",level:3},{value:"Spooning - Pulling Existing State and Contracts from Mainnet/Testnet",id:"spooning---pulling-existing-state-and-contracts-from-mainnettestnet",level:3},{value:"Fast Forwarding - Fast Forward to a Future Block",id:"fast-forwarding---fast-forward-to-a-future-block",level:3},{value:"Handle Errors",id:"handle-errors",level:3},{value:"Batch Transactions",id:"batch-transactions",level:3},{value:"Inspecting Logs",id:"inspecting-logs",level:3},{value:"Profiling Gas",id:"profiling-gas",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," Simulation tests are no longer actively supported. NEAR Simulator was meant to be an in-place replacement of a blockchain environment for the purpose of testing NEAR contracts. However, simulating NEAR ledger turned out to be a much more complex endeavor than was anticipated. Eventually, the idea of workspaces was born - a library for automating workflows and writing tests for NEAR smart contracts using a real NEAR network (localnet, testnet or mainnet). Thus, NEAR Simulator is being deprecated in favor of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs"},(0,s.kt)("inlineCode",{parentName:"a"},"workspaces-rs")),", the Rust edition of workspaces. As the two libraries have two vastly different APIs ",(0,s.kt)("a",{parentName:"p",href:"/develop/testing/workspaces-migration"},"this guide")," was created to ease the migration process for developers."),(0,s.kt)("h2",{id:"unit-tests-vs-integration-tests"},"Unit Tests vs. Integration Tests"),(0,s.kt)("p",null,"Unit tests are great for ensuring that functionality works as expected at an insolated, functional-level. This might include checking that function ",(0,s.kt)("inlineCode",{parentName:"p"},"get_nth_fibonacci(n: u8)")," works as expected, handles invalid input gracefully, etc. Unit tests in smart contracts might similarly test public functions, but can get unruly if there are several calls between accounts. As mentioned in the ",(0,s.kt)("a",{parentName:"p",href:"/sdk/rust/testing/unit-tests"},"unit tests")," section, there is a ",(0,s.kt)("inlineCode",{parentName:"p"},"VMContext")," object used by unit tests to mock some aspects of a transaction. One might, for instance, modify the testing context to have the ",(0,s.kt)("inlineCode",{parentName:"p"},"predecessor_account_id")," of ",(0,s.kt)("inlineCode",{parentName:"p"},'"bob.near"'),". The limits of unit tests become obvious with certain interactions, like transferring tokens. Since ",(0,s.kt)("inlineCode",{parentName:"p"},'"bob.near"')," is simply a string and not an account object, there is no way to write a unit test that confirms that Alice sent Bob 6 NEAR (\u24c3). Furthermore, there is no way to write a unit test that executes cross-contract calls. Additionally, there is no way of profiling gas usage and the execution of the call (or set of calls) on the blockchain."),(0,s.kt)("p",null,"Integration tests provide the ability to have end-to-end testing that includes cross-contract calls, proper user accounts, access to state, structured execution outcomes, and more. In NEAR, we can make use of the ",(0,s.kt)("inlineCode",{parentName:"p"},"workspaces")," libraries in both ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs"},"Rust")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js"},"JavaScript")," for this type of testing on a locally-run blockchain or testnet."),(0,s.kt)("h2",{id:"when-to-use-integration-tests"},"When to Use Integration Tests"),(0,s.kt)("p",null,"You'll probably want to use integration tests when:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There are cross-contract calls."),(0,s.kt)("li",{parentName:"ul"},"There are multiple users with balance changes."),(0,s.kt)("li",{parentName:"ul"},"You'd like to gather information about gas usage and execution outcomes on-chain."),(0,s.kt)("li",{parentName:"ul"},"You want to assert the use-case execution flow of your smart contract logic works as expected."),(0,s.kt)("li",{parentName:"ul"},"You want to assert given execution patterns do not work (as expected).")),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"Unlike unit tests (which would often live in the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," file of the contract), integration tests in Rust are located in a separate directory at the same level as ",(0,s.kt)("inlineCode",{parentName:"p"},"/src"),", called ",(0,s.kt)("inlineCode",{parentName:"p"},"/tests")," (",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/cargo-targets.html#integration-tests"},"read more"),"). Refer to this folder structure below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 Cargo.toml                  \u27f5 contains `dependencies` for contract and `dev-dependencies` for workspaces-rs tests\n\u251c\u2500\u2500 src\n\u2502  \u2514\u2500\u2500 lib.rs                   \u27f5 contract code\n\u251c\u2500\u2500 target\n\u2514\u2500\u2500 tests                       \u27f5 integration test directory\n   \u2514\u2500\u2500 integration-tests.rs     \u27f5 integration test file\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"These tests don't have to be placed in their own ",(0,s.kt)("inlineCode",{parentName:"p"},"/tests")," directory. Instead, you can place them in the ",(0,s.kt)("inlineCode",{parentName:"p"},"/src")," directory which can be beneficial since then you can use the non-exported types for serialization within the test case.")),(0,s.kt)("p",null,"A sample configuration for this project's ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," is shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "fungible-token-wrapper"\nversion = "0.0.2"\nauthors = ["Near Inc <hello@nearprotocol.com>"]\nedition = "2021"\n\n[dev-dependencies]\nanyhow = "1.0"\nnear-primitives = "0.5.0"\nnear-sdk = "4.0.0"\nnear-units = "0.2.0"\nserde_json = "1.0"\ntokio = { version = "1.14", features = ["full"] }\nworkspaces = "0.4.1"\n\n# remember to include a line for each contract\nfungible-token = { path = "./ft" }\ndefi = { path = "./test-contract-defi" }\n\n[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n\n[workspace]\n# remember to include a member for each contract\nmembers = [\n  "ft",\n  "test-contract-defi",\n]\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"integration-tests.rs")," file above will contain the integration tests. These can be run with the following command from the same level as the test ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cargo test --test integration-tests\n")),(0,s.kt)("h2",{id:"comparing-an-example"},"Comparing an Example"),(0,s.kt)("h3",{id:"unit-test"},"Unit Test"),(0,s.kt)("p",null,"Let's take a look at a very simple unit test and integration test that accomplish the same thing. Normally you wouldn't duplicate efforts like this (as integration tests are intended to be broader in scope), but it will be informative."),(0,s.kt)("p",null,"We'll be using snippets from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/examples/fungible-token"},"fungible-token example")," from the ",(0,s.kt)("inlineCode",{parentName:"p"},"near-sdk-rs")," repository to demonstrate simulation tests."),(0,s.kt)("p",null,"First, note this unit test that tests the functionality of the ",(0,s.kt)("inlineCode",{parentName:"p"},"test_transfer")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/near-sdk-rs/blob/6d4045251c63ec875dc55f43b065b33a36d94792/examples/fungible-token/ft/src/lib.rs#L100-L165\n")),(0,s.kt)("p",null,"The test above sets up the testing context, instantiates the test environment through ",(0,s.kt)("inlineCode",{parentName:"p"},"get_context()"),", calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"test_transfer")," method, and performs the ",(0,s.kt)("inlineCode",{parentName:"p"},"storage_deposit()")," initialization call (to register with the fungible token contract) and the ",(0,s.kt)("inlineCode",{parentName:"p"},"ft_transfer()")," fungible token transfer call."),(0,s.kt)("p",null,"Let's look at how this might be written with workspaces tests. The snippet below is a bit longer as it demonstrates a couple of things worth noting."),(0,s.kt)("h3",{id:"workspaces-test"},"Workspaces Test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/near-sdk-rs/blob/master/examples/fungible-token/tests/workspaces.rs#L25-L115\n")),(0,s.kt)("p",null,"In the test above, the compiled smart contract ",(0,s.kt)("inlineCode",{parentName:"p"},".wasm")," file (which we compiled into the ",(0,s.kt)("inlineCode",{parentName:"p"},"/out")," directory) for the Fungible Token example is dev-deployed (newly created account) to the environment. The ",(0,s.kt)("inlineCode",{parentName:"p"},"ft_contract")," account is created as a result from the environment which is used to create accounts. This specific file's format has only one test entry point (",(0,s.kt)("inlineCode",{parentName:"p"},"main"),"), and every test is declared with ",(0,s.kt)("inlineCode",{parentName:"p"},"#[tokio::test]"),". Tests do not share state between runs."),(0,s.kt)("p",null,"Notice the layout within ",(0,s.kt)("inlineCode",{parentName:"p"},"test_total_supply"),". ",(0,s.kt)("inlineCode",{parentName:"p"},".call()")," obtains its required gas from the account performing it. Unlike the unit test, there is no mocking being performed before the call as the context is provided by the environment initialized during ",(0,s.kt)("inlineCode",{parentName:"p"},"init()"),". Every call interacts with this environment to either fetch or change state."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Pitfall"),": you must compile your contract before running integration tests. Because workspaces tests use the ",(0,s.kt)("inlineCode",{parentName:"p"},".wasm")," files to deploy the contracts to the network. If changes are made to the smart contract code, the smart contract wasm should be rebuilt before running these tests again.")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"In case you wish to preserve state between runs, you can call multiple tests within one function, passing the worker around from a ",(0,s.kt)("inlineCode",{parentName:"p"},"workspaces::sandbox()")," call.")),(0,s.kt)("h2",{id:"helpful-snippets"},"Helpful Snippets"),(0,s.kt)("h3",{id:"create-an-account"},"Create an Account"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/rust-counter/blob/6a7af5a32c630e0298c09c24eab87267746552b2/integration-tests/rs/src/tests.rs#L16-L21\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You can also create a ",(0,s.kt)("inlineCode",{parentName:"p"},"dev_account")," without having to deploy a contract as follows:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/workspaces-rs/blob/8f12f3dc3b0251ac3f44ddf6ab6fc63003579139/workspaces/tests/create_account.rs#L7-L8\n"))),(0,s.kt)("h3",{id:"create-helper-functions"},"Create Helper Functions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial/blob/7fb267b83899d1f65f1bceb71804430fab62c7a7/integration-tests/rs/src/helpers.rs#L148-L161\n")),(0,s.kt)("h3",{id:"spooning---pulling-existing-state-and-contracts-from-mainnettestnet"},"Spooning - Pulling Existing State and Contracts from Mainnet/Testnet"),(0,s.kt)("p",null,"This example showcases spooning state from a testnet contract into our local sandbox environment:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/workspaces-rs/blob/c14fe2aa6cdf586028b2993c6a28240f78484d3e/examples/src/spooning.rs#L64-L122\n")),(0,s.kt)("p",null,"For a full example, see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs/blob/main/examples/src/spooning.rs"},"examples/src/spooning.rs")," example."),(0,s.kt)("h3",{id:"fast-forwarding---fast-forward-to-a-future-block"},"Fast Forwarding - Fast Forward to a Future Block"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"workspaces")," testing offers support for forwarding the state of the blockchain to the future. This means contracts which require time sensitive data do not need to sit and wait the same amount of time for blocks on the sandbox to be produced. We can simply just call ",(0,s.kt)("inlineCode",{parentName:"p"},"worker.fast_forward")," to get us further in time:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/workspaces-rs/blob/c14fe2aa6cdf586028b2993c6a28240f78484d3e/examples/src/fast_forward.rs#L12-L44\n")),(0,s.kt)("p",null,"For a full example, take a look at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs/blob/main/examples/src/fast_forward.rs"},"examples/src/fast_forward.rs"),"."),(0,s.kt)("h3",{id:"handle-errors"},"Handle Errors"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/FT/blob/98b85297a270cbcb8ef3901c29c17701e1cab698/integration-tests/rs/src/tests.rs#L199-L225\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Returning ",(0,s.kt)("inlineCode",{parentName:"p"},"Err(msg)")," is also a viable (and arguably simpler) implementation.")),(0,s.kt)("h3",{id:"batch-transactions"},"Batch Transactions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Batch Transaction - workspace-rs"',title:'"Batch',Transaction:!0,"-":!0,'workspace-rs"':!0},'let res = contract\n    .batch(&worker)\n    .call(\n        Function::new("ft_transfer_call")\n            .args_json((defi_contract.id(), transfer_amount, Option::<String>::None, "10"))?\n            .gas(300_000_000_000_000 / 2)\n            .deposit(1),\n    )\n    .call(\n        Function::new("storage_unregister")\n            .args_json((Some(true),))?\n            .gas(300_000_000_000_000 / 2)\n            .deposit(1),\n    )\n    .transact()\n    .await?;\n')),(0,s.kt)("h3",{id:"inspecting-logs"},"Inspecting Logs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Logs - workspaces-rs"',title:'"Logs',"-":!0,'workspaces-rs"':!0},'assert_eq!(\n    res.logs()[1],\n    format!("Closed @{} with {}", contract.id(), initial_balance.0 - transfer_amount.0)\n);\n')),(0,s.kt)("p",null,"Examining receipt outcomes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Logs - workspaces-rs"',title:'"Logs',"-":!0,'workspaces-rs"':!0},'let outcome = &res.receipt_outcomes()[5];\nassert_eq!(outcome.logs[0], "The account of the sender was deleted");\nassert_eq!(outcome.logs[2], format!("Account @{} burned {}", contract.id(), 10));\n')),(0,s.kt)("h3",{id:"profiling-gas"},"Profiling Gas"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"CallExecutionDetails::total_gas_burnt")," includes all gas burnt by call execution, including by receipts. This is exposed as a surface level API since it is a much more commonly used concept:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (all) - workspaces-rs"',title:'"Gas',"(all)":!0,"-":!0,'workspaces-rs"':!0},'println!("Burnt gas (all): {}", res.total_gas_burnt);\n')),(0,s.kt)("p",null,"If you do actually want gas burnt by transaction itself you can do it like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (transaction) - workspaces-rs"',title:'"Gas',"(transaction)":!0,"-":!0,'workspaces-rs"':!0},'println!("Burnt gas (transaction): {}", res.outcome().gas_burnt);\n')),(0,s.kt)("p",null,"If you want to see the gas burnt by each receipt, you can do it like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (receipt) - workspaces-rs"',title:'"Gas',"(receipt)":!0,"-":!0,'workspaces-rs"':!0},'for receipt in res.receipt_outcomes() {\n   println!("Burnt gas (receipt): {}", receipt.gas_burnt);\n}\n')))}d.isMDXComponent=!0}}]);