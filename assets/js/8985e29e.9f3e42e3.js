"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"workspaces-migration",sidebar_label:"Workspaces Migration",title:"Migrating from Simulation Testing to Workspaces"},l="Migrating from Simulation Testing to Workspaces",c={unversionedId:"develop/testing/workspaces-migration",id:"develop/testing/workspaces-migration",title:"Migrating from Simulation Testing to Workspaces",description:"Why did we stop supporting Simulation Testing?",source:"@site/../docs/2.develop/testing/workspaces-migration-guide.md",sourceDirName:"2.develop/testing",slug:"/develop/testing/workspaces-migration",permalink:"/develop/testing/workspaces-migration",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/testing/workspaces-migration-guide.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"workspaces-migration",sidebar_label:"Workspaces Migration",title:"Migrating from Simulation Testing to Workspaces"},sidebar:"develop",previous:{title:"Local Development",permalink:"/develop/testing/kurtosis-localnet"},next:{title:"Deploying and Using",permalink:"/develop/deploy"}},p={},u=[{value:"Why did we stop supporting Simulation Testing?",id:"why-did-we-stop-supporting-simulation-testing",level:3},{value:"Async Runtime and Error Handling",id:"async-runtime-and-error-handling",level:2},{value:"Initialization and Deploying Contracts",id:"initialization-and-deploying-contracts",level:2},{value:"Making Transactions and View Calls",id:"making-transactions-and-view-calls",level:2},{value:"Batch Transactions",id:"batch-transactions",level:3},{value:"Inspecting Logs",id:"inspecting-logs",level:2},{value:"Profiling Gas",id:"profiling-gas",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrating-from-simulation-testing-to-workspaces"},"Migrating from Simulation Testing to Workspaces"),(0,o.kt)("h3",{id:"why-did-we-stop-supporting-simulation-testing"},"Why did we stop supporting Simulation Testing?"),(0,o.kt)("p",null,"Simulation tests were not suitable for purpose for a few reasons, namely:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"near-sdk-sim")," was hooking into parts of nearcore that were not meant to be released, in the most recent version those crates aren't released so ",(0,o.kt)("inlineCode",{parentName:"li"},"near-sdk-sim")," is currently using duplicate dependencies (maintenance nightmare)."),(0,o.kt)("li",{parentName:"ul"},"Not a fully accurate simulation because it just used a subset of the runtime in a specific way - we can't rely on this. And thus couldn't measure gas burnt accurately. Also, all the intricacies of nearcore (like protocol features) wouldn't be one-to-one with the runtime since the runtime was just code built on top of VM logic. People would also need to write their own automation scripts to deploy to testnet, so we'd end up with very split workflows for testing."),(0,o.kt)("li",{parentName:"ul"},"Bulky dependencies pulled in (drastically increases compile time)."),(0,o.kt)("li",{parentName:"ul"},"Unergonomic API, not specific to this strategy, but likely would have had to be re-built."),(0,o.kt)("li",{parentName:"ul"},"Can't test parallel transactions easily - current pattern would process blocks until a transaction succeeded but you can't create specific conditions, which is required for a strategy like this that isn't fully simulated.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide presumes that you are transitioning from near-sdk-sim ",(0,o.kt)("inlineCode",{parentName:"p"},"3.2.0")," (the last non-deprecated release) to ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0.2.1"),". Given that near-sdk-sim is deprecated, it is very unlikely that its API will ever change, but future releases of ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," might. Hopefully, this guide will be helpful even if you are migrating your project to a more recent workspaces version. If workspaces have changed, feel free to migrate your tests to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.2.1")," first using this guide and upgrade to the most recent workspaces-rs version later by looking at the release notes to see how public API has changed since ",(0,o.kt)("inlineCode",{parentName:"p"},"0.2.1"),".")),(0,o.kt)("h2",{id:"async-runtime-and-error-handling"},"Async Runtime and Error Handling"),(0,o.kt)("p",null,"In this section we will be working purely with test signatures, so it applies to pretty much all NEAR contract tests regardless of what is written inside. We will walk through each change one by one. Let's start with how your tests look like right now; chances are something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\nfn test_transfer() {\n    ...\n}\n")),(0,o.kt)("p",null,"First big change is that ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," API is asynchronous, meaning that contract function calls return values that implement ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," trait. You will not be able to operate on the call results in a synchronous environment, thus you will have to add an async runtime (if you do not already have one). In this guide we are going to be using ",(0,o.kt)("a",{parentName:"p",href:"https://tokio.rs/"},(0,o.kt)("inlineCode",{parentName:"a"},"tokio")),", but you should be able to use any other alternative (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://async.rs/"},(0,o.kt)("inlineCode",{parentName:"a"},"async-std")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/smol-rs/smol"},(0,o.kt)("inlineCode",{parentName:"a"},"smol")),"). Rewrite the test above like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[tokio::test]\nasync fn test_transfer() {\n    ...\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using another attribute on top of the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"#[test]"),", make sure it plays nicely with the async runtime of your choosing. For example, if you are using ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/test-env-log"},(0,o.kt)("inlineCode",{parentName:"a"},"test-env-log"))," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tokio"),", then you need to mark your tests with ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"p"},"#[test_env_log::test(tokio::test)]"),".")),(0,o.kt)("p",null,"The second change is that ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," makes an extensive use of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/anyhow/latest/anyhow/type.Result.html"},(0,o.kt)("inlineCode",{parentName:"a"},"anyhow::Result")),". Although you can work with ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," directly, our recommendation is to make your tests return ",(0,o.kt)("inlineCode",{parentName:"p"},"anyhow::Result<()>")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[tokio::test]\nasync fn test_transfer() -> anyhow::Result<()> {\n    ...\n}\n")),(0,o.kt)("p",null,"This way you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," anywhere inside the test to safely unpack any ",(0,o.kt)("inlineCode",{parentName:"p"},"anyhow::Result<R>")," type to ",(0,o.kt)("inlineCode",{parentName:"p"},"R")," (will be very useful further down the guide). Note that the test will fail if ",(0,o.kt)("inlineCode",{parentName:"p"},"anyhow::Result<R>")," cannot be unpacked."),(0,o.kt)("h2",{id:"initialization-and-deploying-contracts"},"Initialization and Deploying Contracts"),(0,o.kt)("p",null,"Unlike NEAR Simulator, ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," uses an actual NEAR node and makes all calls through it. First, you need to decide which network you want your tests to be run on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sandbox")," - perfect choice if you are just interested in local development and testing; ",(0,o.kt)("inlineCode",{parentName:"li"},"workspaces-rs")," will instantiate a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/sandbox"},"sandbox")," instance on your local machine which will run an isolated NEAR node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testnet")," - an environment much closer to the real world; you can test integrations with other deployed contracts on testnet without bearing any financial risk."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mainnet")," - a network with reduced amount of features due to how dangerous it can be to do transactions there, but can still be useful for automating deployments and pulling deployed contracts.")),(0,o.kt)("p",null,"In this guide we will be focusing on ",(0,o.kt)("inlineCode",{parentName:"p"},"sandbox")," since it covers the same use cases NEAR Simulator did. But of course feel free to explore whether other networks can be of potential use to you when writing new tests/workflows."),(0,o.kt)("p",null,"One of the ways to initialize simulator and deploy a contract is shown below (the other way is through ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy!")," macro which we will look at in the next section):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Deployment - near-sdk-sim"',title:'"Deployment',"-":!0,'near-sdk-sim"':!0},'use near_sdk_sim::{init_simulator, to_yocto};\n\nnear_sdk_sim::lazy_static_include::lazy_static_include_bytes! {\n    WASM_BYTES => "res/contract.wasm",\n}\n\nconst ID: &str = "contract-id";\n\n...\n\nlet root = init_simulator(...);\nlet contract = root.deploy(&WASM_BYTES, ID.parse().unwrap(), to_yocto("5"));\n')),(0,o.kt)("p",null,"Although ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," provides a way to specify the account id for a contract to be deployed, usually it does not matter in the context of a single test. If you are fine with generating a random developer account and initializing it with 100N, then you can replace the snippet above with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Deployment - workspaces-rs"',title:'"Deployment',"-":!0,'workspaces-rs"':!0},'let worker = workspaces::sandbox().await?;\nlet contract = worker.dev_deploy(include_bytes!("../res/contract.wasm")).await?;\n')),(0,o.kt)("p",null,"Alternatively, use this if you care about the account id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Deployment - workspaces-rs (with explicit account id)"',title:'"Deployment',"-":!0,"workspaces-rs":!0,"(with":!0,explicit:!0,account:!0,'id)"':!0},'let worker = workspaces::sandbox().await?;\nlet (_, sk) = worker.dev_generate().await;\nlet id: AccountId = "contract-id".parse()?;\nlet contract = worker\n    .create_tla_and_deploy(\n        id,\n        sk,\n        include_bytes!("../examples/res/non_fungible_token.wasm"),\n    )\n    .await?\n    .result;\n')),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"'dev_deploy' can't supply the initial balance since testnet controls this amount in the helper contract which is what we're using to create dev accounts on testnet. So, to make it simple, we don't supply it at all (sandbox included). It is however possible to create a ",(0,o.kt)("strong",{parentName:"p"},"subaccount")," with a certain balance in sandbox, they can grab the root account and do:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Deployment - workspaces-rs (with initial balance)"',title:'"Deployment',"-":!0,"workspaces-rs":!0,"(with":!0,initial:!0,'balance)"':!0},"let root = worker.root_acount();\nroot.create_subaccount(...)\n   .initial_balance(...)\n   ...\n"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You might have noticed that ",(0,o.kt)("inlineCode",{parentName:"p"},"init_simulator")," used to accept an optional genesis config. Unfortunately, ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," does not support this feature yet, but we are trying to understand the need for this and properly design it. Please feel free to share your use case ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-rs/issues/68"},"here"),".")),(0,o.kt)("h2",{id:"making-transactions-and-view-calls"},"Making Transactions and View Calls"),(0,o.kt)("p",null,"As always, let's take a look at how we used to make calls with NEAR Simulator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Calls - near-sdk-sim"',title:'"Calls',"-":!0,'near-sdk-sim"':!0},'// Example 1: No Macros\nroot.call(\n    ft.account_id(),\n    "ft_transfer",\n    &json!({\n        "receiver_id": alice.account_id(),\n        "amount": U128::from(transfer_amount)\n    })\n    .to_string()\n    .into_bytes(),\n    300_000_000_000_000,\n    1,\n);\n\nlet root_balance: U128 = root.view(\n    ft.account_id(),\n    "ft_balance_of",\n    &json!({\n        "account_id": root.account_id()\n    })\n    .to_string()\n    .into_bytes(),\n)\n.unwrap_json();\n\n// Example 2: With Macros\ncall!(\n    root,\n    ft.ft_transfer(alice.account_id(), transfer_amount.into(), None),\n    deposit = 1\n    gas = 300_000_000_000_000\n);\n\nlet root_balance: U128 = view!(ft.ft_balance_of(root.account_id())).unwrap_json();\n')),(0,o.kt)("p",null,"Note how Example 2's ",(0,o.kt)("inlineCode",{parentName:"p"},"call!")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"view!")," macros accept a contract function invocation as if it was just regular Rust. Unlike NEAR Simulator, ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," never stores metadata about the deployed contract and hence does not support high-level syntax like that. This might change in the future once our ACI implementation is ready, but for the remainder of this section we will be migrating Example 1."),(0,o.kt)("p",null,"Workspaces have a unified way of making all types of calls via a ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.0.0/style/ownership/builders.html"},"builder")," pattern. Generally, calls are constructed by following these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"CallBuilder")," by invoking ",(0,o.kt)("inlineCode",{parentName:"li"},"Contract::call")),(0,o.kt)("li",{parentName:"ol"},"Pass function call arguments via ",(0,o.kt)("inlineCode",{parentName:"li"},"CallBuilder::args_json")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"CallBuilder::args_borsh")," depending on which serialization algorithm your contract is using"),(0,o.kt)("li",{parentName:"ol"},"Configure gas and deposit (if needed) via ",(0,o.kt)("inlineCode",{parentName:"li"},"CallBuilder::gas")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"CallBuilder::deposit")),(0,o.kt)("li",{parentName:"ol"},"Finalize the call by consuming builder via ",(0,o.kt)("inlineCode",{parentName:"li"},"CallBuilder::transaction")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"CallBuilder::view")," depending on what kind of call you want to make")),(0,o.kt)("p",null,"Reference this migration of Example 1 for migrating your own calls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Calls - workspaces-rs"',title:'"Calls',"-":!0,'workspaces-rs"':!0},'contract\n    .call(&worker, "ft_transfer")\n    .args_json((alice.id(), transfer_amount, Option::<bool>::None))?\n    .gas(300_000_000_000_000)\n    .deposit(ONE_YOCTO)\n    .transact()\n    .await?;\n\nlet root_balance: U128 = contract\n    .call(&worker, "ft_balance_of")\n    .args_json((contract.id(),))?\n    .view()\n    .await?\n    .json()?;\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Note that you have to pass arguments as any serializable type representing a sequential list. Tuples are usually the best candidate due to their heterogeneous nature (remember that you can construct a unary tuple by placing a comma before the closing bracket like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"(el,)"),"). Passing in an object formatted with the ",(0,o.kt)("inlineCode",{parentName:"p"},"json!()")," macro is also supported.")),(0,o.kt)("h3",{id:"batch-transactions"},"Batch Transactions"),(0,o.kt)("p",null,"There is a special builder for making batch transactions that can be instantiated by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract::batch"),". Consider the following snippet making a batch transaction consisting of two calls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Batch Transaction - near-sdk-sim"',title:'"Batch',Transaction:!0,"-":!0,'near-sdk-sim"':!0},'let res = root\n    .create_transaction(contract.account_id())\n    .function_call(\n        "ft_transfer_call".to_string(),\n        json!({\n            "receiver_id": defi_contract.account_id(),\n            "amount": transfer_amount.to_string(),\n            "msg": "10",\n        })\n        .to_string()\n        .into_bytes(),\n        300_000_000_000_000 / 2,\n        1,\n    )\n    .function_call(\n        "storage_unregister".to_string(),\n        json!({\n            "force": true\n        })\n        .to_string()\n        .into_bytes(),\n        300_000_000_000_000 / 2,\n        1,\n    )\n    .submit();\n')),(0,o.kt)("p",null,"There are no caveats here, the snippet can be straightforwardly mapped into the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Batch Transaction - workspace-rs"',title:'"Batch',Transaction:!0,"-":!0,'workspace-rs"':!0},'let res = contract\n    .batch(&worker)\n    .call(\n        Function::new("ft_transfer_call")\n            .args_json((defi_contract.id(), transfer_amount, Option::<String>::None, "10"))?\n            .gas(300_000_000_000_000 / 2)\n            .deposit(1),\n    )\n    .call(\n        Function::new("storage_unregister")\n            .args_json((Some(true),))?\n            .gas(300_000_000_000_000 / 2)\n            .deposit(1),\n    )\n    .transact()\n    .await?;\n')),(0,o.kt)("h2",{id:"inspecting-logs"},"Inspecting Logs"),(0,o.kt)("p",null,"The API for inspecting logs is fairly close to what it was in NEAR Simulator, but there are still some things you should keep in mind when migrating. Let's take the same transaction we used in the ",(0,o.kt)("a",{parentName:"p",href:"#batch-transactions"},"batch transactions")," section and try to inspect its logs. This is how one would check that the transaction logged a specific message in a certain position with NEAR Simulator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Logs - near-sdk-sim"',title:'"Logs',"-":!0,'near-sdk-sim"':!0},'assert_eq!(\n    res.logs()[1],\n    format!("Closed @{} with {}", contract.account_id(), initial_balance - transfer_amount)\n);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," counterpart might seem almost identical at the first look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Logs - workspaces-rs"',title:'"Logs',"-":!0,'workspaces-rs"':!0},'assert_eq!(\n    res.logs()[1],\n    format!("Closed @{} with {}", contract.id(), initial_balance.0 - transfer_amount.0)\n);\n')),(0,o.kt)("p",null,"However, it can actually behave differently depending on your use case, because while near-sdk-sim version only returns the logs from the transaction, the workspaces version returns all logs from both the transaction and receipt outcomes. If you want a literal counterpart, please use ",(0,o.kt)("inlineCode",{parentName:"p"},"res.outcome().logs"),"."),(0,o.kt)("p",null,"Another common use case is examining receipt outcome logs like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Logs - nead-sdk-sim"',title:'"Logs',"-":!0,'nead-sdk-sim"':!0},'let outcome = res.get_receipt_results().remove(5).unwrap();\n\nassert_eq!(outcome.logs()[0], "The account of the sender was deleted");\nassert_eq!(\n    outcome.logs()[2],\n    format!("Account @{} burned {}", root.account_id(), 10)\n);\n')),(0,o.kt)("p",null,"Which is straightforwardly replaced with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Logs - workspaces-rs"',title:'"Logs',"-":!0,'workspaces-rs"':!0},'let outcome = &res.receipt_outcomes()[5];\nassert_eq!(outcome.logs[0], "The account of the sender was deleted");\nassert_eq!(outcome.logs[2], format!("Account @{} burned {}", contract.id(), 10));\n')),(0,o.kt)("h2",{id:"profiling-gas"},"Profiling Gas"),(0,o.kt)("p",null,"NEAR Simulator never had accurate gas estimations since it only tried to mirror nearcore, but nearcore has extra functionality on top which consumes gas (like cross-contract calls are processed separately from the same transaction and that incurs gas fees). Workspaces offers the better experience here and aligns very well with what you can do on testnet and mainnet. It provides the added benefit of allowing the developer to accurately profile gas usage before deploying to ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),"."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," is now using accurate gas measurements, some testing flows that were previously being tested with sdk-sim that would depend on gas reports might not work anymore. You should do your due diligence if you plan to deploy to ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),".")),(0,o.kt)("p",null,"Let's once again return to the ",(0,o.kt)("a",{parentName:"p",href:"#batch-transactions"},"batch transactions")," example and see how we would estimate gas burnt by a given transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (transaction) - near-sdk-sim"',title:'"Gas',"(transaction)":!0,"-":!0,'near-sdk-sim"':!0},'println!("Burnt gas (transaction): {}", res.gas_burnt());\n')),(0,o.kt)("p",null,"Just like with ",(0,o.kt)("a",{parentName:"p",href:"#inspecting-logs"},"inspecting logs"),", one might mistakenly think that"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (all) - workspaces-rs"',title:'"Gas',"(all)":!0,"-":!0,'workspaces-rs"':!0},'println!("Burnt gas (all): {}", res.total_gas_burnt);\n')),(0,o.kt)("p",null,"is the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-rs")," snippet, but ",(0,o.kt)("inlineCode",{parentName:"p"},"CallExecutionDetails::total_gas_burnt")," includes all gas burnt by call execution, including by receipts. This is exposed as a surface level API since it is a much more commonly used concept, but if you do actually want gas burnt by transaction itself you can do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Gas (transaction) - workspaces-rs"',title:'"Gas',"(transaction)":!0,"-":!0,'workspaces-rs"':!0},'println!("Burnt gas (transaction): {}", res.outcome().gas_burnt);\n')))}m.isMDXComponent=!0}}]);