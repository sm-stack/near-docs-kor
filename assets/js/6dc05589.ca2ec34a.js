"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||s;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=n(87462),o=n(63366),s=(n(67294),n(3905));const r=n.p+"assets/images/batch-of-actions--dobulyo.near--w_artsu-7b8cd24a4de7d4afad476d733ede7e97.jpg";var i=["components"],l={sidebar_position:4,sidebar_label:"Hash the solution, unit tests, and an init method",title:"Introduction to basic hashing and adding unit tests"},c="Hash the solution, add basic unit tests",d={unversionedId:"tutorials/crosswords/basics/hashing-and-unit-tests",id:"tutorials/crosswords/basics/hashing-and-unit-tests",title:"Introduction to basic hashing and adding unit tests",description:"In the previous section, we stored the crossword solution as plain text as a String type on the smart contract. If we're trying to hide the solution from the users, this isn't a great approach as it'll be public to anyone looking at the state. Let's instead hash our crossword solution and store that instead. There are different ways to hash data, but let's use sha256 which is one of the hashing algorithms available in the Rust SDK.",source:"@site/../docs/3.tutorials/crosswords/01-basics/03-hashing-and-unit-tests.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/hashing-and-unit-tests",permalink:"/near-docs-kor/tutorials/crosswords/basics/hashing-and-unit-tests",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/03-hashing-and-unit-tests.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Hash the solution, unit tests, and an init method",title:"Introduction to basic hashing and adding unit tests"},sidebar:"tutorials",previous:{title:"Add basic code, create a subaccount, and call methods",permalink:"/near-docs-kor/tutorials/crosswords/basics/add-functions-call"},next:{title:"Add simple frontend",permalink:"/near-docs-kor/tutorials/crosswords/basics/simple-frontend"}},u={},h=[{value:"Helper unit test during rapid iteration",id:"helper-unit-test-during-rapid-iteration",level:2},{value:"Write a regular unit test",id:"write-a-regular-unit-test",level:2},{value:"Modifying <code>set_solution</code>",id:"modifying-set_solution",level:2},{value:"First use of Batch Actions",id:"first-use-of-batch-actions",level:2},{value:"Get ready for our frontend",id:"get-ready-for-our-frontend",level:2}],p={toc:h};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"hash-the-solution-add-basic-unit-tests"},"Hash the solution, add basic unit tests"),(0,s.kt)("p",null,"In the previous section, we stored the crossword solution as plain text as a ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," type on the smart contract. If we're trying to hide the solution from the users, this isn't a great approach as it'll be public to anyone looking at the state. Let's instead hash our crossword solution and store that instead. There are different ways to hash data, but let's use ",(0,s.kt)("inlineCode",{parentName:"p"},"sha256")," which is one of the hashing algorithms available in ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.sha256.html"},"the Rust SDK"),"."),(0,s.kt)("admonition",{title:"Remind me about hashing",type:"info"},(0,s.kt)("p",{parentName:"admonition"},'Without getting into much detail, hashing is a "one-way" function that will output a result from a given input. If you have input (in our case, the crossword puzzle solution) you can get a hash, but if you have a hash you cannot get the input. This basic idea is foundational to information theory and security.'),(0,s.kt)("p",{parentName:"admonition"},"Later on in this tutorial, we'll switch from using ",(0,s.kt)("inlineCode",{parentName:"p"},"sha256")," to using cryptographic key pairs to illustrate additional NEAR concepts."),(0,s.kt)("p",{parentName:"admonition"},"Learn more about hashing from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/abacabadabacaba"},"Evgeny Kapun"),"'s presentation on the subject. You may find other NEAR-related videos from the channel linked in the screenshot below."),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/PfabikgnD08"},(0,s.kt)("img",{alt:"Evgeny Kapun presents details on hashing",src:n(9634).Z,width:"3414",height:"1254"})))),(0,s.kt)("h2",{id:"helper-unit-test-during-rapid-iteration"},"Helper unit test during rapid iteration"),(0,s.kt)("p",null,"As mentioned in the first section of this ",(0,s.kt)("strong",{parentName:"p"},"Basics"),' chapter, our smart contract is technically a library as defined in the manifest file. For our purposes, a consequence of writing a library in Rust is not having a "main" function that runs. You may find many online tutorials where the command ',(0,s.kt)("inlineCode",{parentName:"p"},"cargo run")," is used during development. We don't have this luxury, but we can use unit tests to interact with our smart contract. This is likely more convenient than building the contract, deploying to a blockchain network, and calling a method."),(0,s.kt)("p",null,"We'll add a dependency to the ",(0,s.kt)("a",{parentName:"p",href:"https://crates.io/crates/hex"},"hex crate")," to make things easier. As you may remember, dependencies live in the manifest file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/481a83f0c90398f3234ce8006af4e232d6c779d7/contract/Cargo.toml#L10-L12\n")),(0,s.kt)("p",null,"Let's write a unit test that acts as a helper during development. This unit test will sha256 hash the input ",(0,s.kt)("strong",{parentName:"p"},'"near nomicon ref finance"')," and print it in a human-readable, hex format. (We'll typically put unit tests at the bottom of the ",(0,s.kt)("inlineCode",{parentName:"p"},"lib.rs")," file.)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    use super::*;\n    use near_sdk::test_utils::{get_logs, VMContextBuilder};\n    use near_sdk::{testing_env, AccountId};\n\n    #[test]\n    fn debug_get_hash() {\n        // Basic set up for a unit test\n        testing_env!(VMContextBuilder::new().build());\n\n        // Using a unit test to rapidly debug and iterate\n        let debug_solution = "near nomicon ref finance";\n        let debug_hash_bytes = env::sha256(debug_solution.as_bytes());\n        let debug_hash_string = hex::encode(debug_hash_bytes);\n        println!("Let\'s debug: {:?}", debug_hash_string);\n    }\n}\n')),(0,s.kt)("admonition",{title:"What is that {:?} thing?",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Take a look at different formatting traits that are covered in the ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/fmt/index.html#formatting-traits"},(0,s.kt)("inlineCode",{parentName:"a"},"std")," Rust docs")," regarding this. This is a ",(0,s.kt)("inlineCode",{parentName:"p"},"Debug")," formatting trait and can prove to be useful during development.")),(0,s.kt)("p",null,"Run the unit tests with the command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cargo test -- --nocapture\n")),(0,s.kt)("p",null,"You'll see this output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u2026\nrunning 1 test\nLet\'s debug: "69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f"\ntest tests::debug_get_hash ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n')),(0,s.kt)("p",null,'This means when you sha256 the input "near nomicon ref finance" it produces the hash:\n',(0,s.kt)("inlineCode",{parentName:"p"},"69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f")),(0,s.kt)("admonition",{title:"Note on the test flags",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You may also run tests using:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre"},"cargo test\n")),(0,s.kt)("p",{parentName:"admonition"},"Note that the test command we ran had additional flags. Those flags told Rust ",(0,s.kt)("em",{parentName:"p"},"not to hide the output")," from the tests. You can read more about this in ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/commands/cargo-test.html#display-options"},"the cargo docs"),". Go ahead and try running the tests using the command above, without the additional flags, and note that we won't see the debug message.")),(0,s.kt)("p",null,"The unit test above is meant for debugging and quickly running snippets of code. Some may find this a useful technique when getting familiar with Rust and writing smart contracts. Next we'll write a real unit test that applies to this early version of our crossword puzzle contract."),(0,s.kt)("h2",{id:"write-a-regular-unit-test"},"Write a regular unit test"),(0,s.kt)("p",null,"Let's add this unit test (inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"mod tests {}")," block, under our previous unit test) and analyze it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/d7699cf35092024fe11719b68788436c82fe82af/contract/src/lib.rs#L63-L93\n")),(0,s.kt)("p",null,"The first few lines of code will be used commonly when writing unit tests. It uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"VMContextBuilder")," to create some basic context for a transaction, then sets up the testing environment."),(0,s.kt)("p",null,"Next, an object is created representing the contract and the ",(0,s.kt)("inlineCode",{parentName:"p"},"set_solution")," function is called. After that, the ",(0,s.kt)("inlineCode",{parentName:"p"},"guess_solution")," function is called twice: first with the incorrect solution and then the correct one. We can check the logs to determine that the function is acting as expected."),(0,s.kt)("admonition",{title:"Note on assertions",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This unit test uses the ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert_eq.html"},(0,s.kt)("inlineCode",{parentName:"a"},"assert_eq!"))," macro. Similar macros like ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert.html"},(0,s.kt)("inlineCode",{parentName:"a"},"assert!"))," and ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert_ne.html"},(0,s.kt)("inlineCode",{parentName:"a"},"assert_ne!"))," are commonly used in Rust. These are great to use in unit tests. However, these will add unnecessary overhead when added to contract logic, and it's recommended to use the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/4.0.0-pre.2/near_sdk/macro.require.html"},(0,s.kt)("inlineCode",{parentName:"a"},"require!")," macro"),". See more information on this and ",(0,s.kt)("a",{parentName:"p",href:"/sdk/rust/contract-size"},"other efficiency tips here"),".")),(0,s.kt)("p",null,"Again, we can run all the unit tests with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cargo test -- --nocapture\n")),(0,s.kt)("admonition",{title:"Run only one test",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"To only run this latest test, use the command:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre"},"cargo test check_guess_solution -- --nocapture\n"))),(0,s.kt)("h2",{id:"modifying-set_solution"},"Modifying ",(0,s.kt)("inlineCode",{parentName:"h2"},"set_solution")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/tutorials/crosswords/basics/overview"},"overview section")," of this chapter tells us we want to have a single crossword puzzle and the user solving the puzzle should not be able to know the solution. Using a hash addresses this, and we can keep ",(0,s.kt)("inlineCode",{parentName:"p"},"crossword_solution"),"'s field type, as ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," will work just fine. The overview also indicates we only want the author of the crossword puzzle to be able to set the solution. As it stands, our function ",(0,s.kt)("inlineCode",{parentName:"p"},"set_solution")," can be called by anyone with a full-access key. It's trivial for someone to create a NEAR account and call this function, changing the solution. Let's fix that."),(0,s.kt)("p",null,"Let's have the solution be set once, right after deploying the smart contract."),(0,s.kt)("p",null,"Here we'll use the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/attr.near_bindgen.html"},(0,s.kt)("inlineCode",{parentName:"a"},"#[near_bindgen]")," macro")," on a function called ",(0,s.kt)("inlineCode",{parentName:"p"},"new"),", which is a common pattern."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/94f42e75cf70ed2aafb9c29a1faa1e21f079a49e/contract/src/lib.rs#L10-L17\n")),(0,s.kt)("p",null,"Let's call this method on a fresh contract."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Build (for Windows it\'s build.bat)\n./build.sh\n\n# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/my_crossword.wasm\n\n# Call the "new" method\nnear call crossword.friend.testnet new \'{"solution": "69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f"}\' --accountId crossword.friend.testnet\n')),(0,s.kt)("p",null,"Now the crossword solution, as a hash, is stored instead. If you try calling the last command again, you'll get the error message, thanks to the ",(0,s.kt)("inlineCode",{parentName:"p"},"#[init]")," macro:\n",(0,s.kt)("inlineCode",{parentName:"p"},"The contract has already been initialized")),(0,s.kt)("h2",{id:"first-use-of-batch-actions"},"First use of Batch Actions"),(0,s.kt)("p",null,"This is close to what we want, but what if a person deploys their smart contract and ",(0,s.kt)("strong",{parentName:"p"},"someone else")," quickly calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"new")," function before them? We want to make sure the same person who deployed the contract sets the solution, and we can do this using Batch Actions. Besides, why send two transactions when we can do it in one? (Technical details covered in the spec for a ",(0,s.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Transactions.html?highlight=batch#batched-transaction"},"batch transaction here"),".)"),(0,s.kt)("figure",null,(0,s.kt)("img",{src:r,alt:"Cookie sheet representing a transaction, where cookies are Deploy and FunctionCall Actions. Art created by dobulyo.near."}),(0,s.kt)("figcaption",{className:"full-width"},"Art by ",(0,s.kt)("a",{href:"https://twitter.com/w_artsu",target:"_blank"},"dobulyo.near"))),(0,s.kt)("br",null),(0,s.kt)("admonition",{title:"Batch Actions in use",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Batch Actions are common in this instance, where we want to deploy and call an initialization function. They're also common when using a factory pattern, where a subaccount is created, a smart contract is deployed to it, a key is added, and a function is called."),(0,s.kt)("p",{parentName:"admonition"},"Here's a truncated snippet from a useful (though somewhat advanced) repository with a wealth of useful code:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/core-contracts/blob/1720c0cfee238974ebeae8ad43076abeb951504f/staking-pool-factory/src/lib.rs#L172-L177\n")),(0,s.kt)("p",{parentName:"admonition"},"We'll get into Actions later in this tutorial, but in the meantime here's a handy ",(0,s.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions.html"},"reference from the spec"),".")),(0,s.kt)("p",null,"As you can from the info bubble above, we can batch ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/3.1.0/near_sdk/struct.Promise.html#method.deploy_contract"},"Deploy")," and ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/3.1.0/near_sdk/struct.Promise.html#method.function_call"},"FunctionCall")," Actions. This is exactly what we want to do for our crossword puzzle, and luckily, NEAR CLI has a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/near-cli#near-deploy"},"flag especially for this"),"."),(0,s.kt)("p",null,"Let's run this again with the handy ",(0,s.kt)("inlineCode",{parentName:"p"},"--initFunction")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"--initArgs")," flags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/my_crossword.wasm \\\n  --initFunction 'new' \\\n  --initArgs '{\"solution\": \"69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f\"}'\n")),(0,s.kt)("p",null,"Now that we're using Batch Actions, no one can call this ",(0,s.kt)("inlineCode",{parentName:"p"},"new")," method before us."),(0,s.kt)("admonition",{title:"Batch action failures",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If one Action in a set of Batch Actions fails, the entire transaction is reverted. This is good to note because sharded, proof-of-stake systems do not work like proof-of-work where a complex transaction with multiple cross-contract calls reverts if one call fails. With NEAR, cross-contract calls use callbacks to ensure expected behavior, but we'll get to that later.")),(0,s.kt)("h2",{id:"get-ready-for-our-frontend"},"Get ready for our frontend"),(0,s.kt)("p",null,"In the previous section we showed that we could use a ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," command to view the state of the contract without explicitly having a function that returns a value from state. Now that we've demonstrated that and hashed the solution, let's add a short view-only function ",(0,s.kt)("inlineCode",{parentName:"p"},"get_solution"),"."),(0,s.kt)("p",null,"In the next section we'll add a simple frontend for our single, hardcoded crossword puzzle. We'll want to easily call a function to get the final solution hash. We can use this opportunity to remove the function ",(0,s.kt)("inlineCode",{parentName:"p"},"get_puzzle_number")," and the constant it returns, as these were use for informative purposes."),(0,s.kt)("p",null,"We'll also modify our ",(0,s.kt)("inlineCode",{parentName:"p"},"guess_solution")," to return a boolean value, which will also make things easier for our frontend."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/94f42e75cf70ed2aafb9c29a1faa1e21f079a49e/contract/src/lib.rs#L19-L34\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"get_solution")," method can be called with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"near view crossword.friend.testnet get_solution\n")),(0,s.kt)("p",null,"In the next section we'll add a simple frontend. Following chapters will illustrate more NEAR concepts built on top of this idea."))}m.isMDXComponent=!0},9634:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kapun-hashing-8cb9a188869ce23ea8a6e0c0f9288c3c.png"}}]);