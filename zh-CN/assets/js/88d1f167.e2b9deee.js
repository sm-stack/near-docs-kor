"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var a=n(87462),r=n(63366),o=(n(67294),n(3905));const i=n.p+"assets/images/crossword-actions-c5a7a08bac9abd41fa5fae029ce8aba4.png",s=n.p+"assets/images/transfer-brand-blue--qiqi04.near--blankworl-ae01b13e0567a25c47605ab4b0e72a94.png",c=n.p+"assets/images/yoctoNEAR-magnifying--jrbemint.near--JrbeMad-7664563cd1b1c33c5068ec24d30bb29a.jpg",l=n.p+"assets/images/predecessor-signer-current--yasuoarts.near--YasuoArt69-2c9b701d045112f7acb6214adb861da0.png";var p=["components"],d={sidebar_position:4,sidebar_label:"Actions and sending NEAR",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action"},u="Actions (including sending NEAR)",h={unversionedId:"tutorials/crosswords/beginner/actions",id:"tutorials/crosswords/beginner/actions",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action",description:"",source:"@site/../docs/3.tutorials/crosswords/02-beginner/03-actions.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/actions",permalink:"/near-docs-kor/zh-CN/tutorials/crosswords/beginner/actions",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/03-actions.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Actions and sending NEAR",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action"},sidebar:"tutorials",previous:{title:"Using structs and enums",permalink:"/near-docs-kor/zh-CN/tutorials/crosswords/beginner/structs-enums"},next:{title:"Add a puzzle",permalink:"/near-docs-kor/zh-CN/tutorials/crosswords/beginner/adding-a-puzzle"}},m={},f=[{value:"Actions from within a contract",id:"actions-from-within-a-contract",level:2},{value:"Define the prize amount",id:"define-the-prize-amount",level:2},{value:"Adding <code>Transfer</code>",id:"adding-transfer",level:2},{value:"Predecessor, signer, and current account",id:"predecessor-signer-and-current-account",level:2}],g={toc:f};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actions-including-sending-near"},"Actions (including sending NEAR)"),(0,o.kt)("p",null,"We're going to introduce a new Action: ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),". In this chapter, we'd like the first person to solve the crossword puzzle to earn some prize money, sent in NEAR."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:s,alt:"Two hands exchanging a coin emblazoned with the NEAR Protocol logo. Art created by qiqi04.near",width:"400"}),(0,o.kt)("figcaption",{class:"small"},"Art by ",(0,o.kt)("a",{href:"https://twitter.com/blankworl",target:"_blank"},"qiqi04.near"))),(0,o.kt)("br",null),(0,o.kt)("p",null,"We've already used Actions in the ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tutorials/crosswords/basics/hashing-and-unit-tests#using-batch-actions"},"previous chapter"),", when we deployed and initialized the contract, which used the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployContract")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FunctionCall")," Action, respectively."),(0,o.kt)("p",null,"The full list of Actions are available at the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions.html"},"NEAR specification site"),"."),(0,o.kt)("p",null,"By the end of this entire tutorial we'll have used all the Actions highlighted below:"),(0,o.kt)("img",{src:i,alt:"All Actions that will be used when the entire crossword puzzle tutorial is complete",width:"600"}),(0,o.kt)("h2",{id:"actions-from-within-a-contract"},"Actions from within a contract"),(0,o.kt)("p",null,"When we deployed and initialized the contract, we used NEAR CLI in our Terminal or Command Prompt app. At a high level, this might feel like we're lobbing a transaction into the blockchain, instructing it to do a couple actions."),(0,o.kt)("p",null,"It's important to note that you can also execute Actions inside a smart contract, which is what we'll be doing. In the sidebar on the left, you'll see a section called ",(0,o.kt)("a",{parentName:"p",href:"/sdk/rust/promises/intro"},(0,o.kt)("strong",{parentName:"a"},"Promises")),", which provides examples of this. Perhaps it's worth mentioning that for the Rust SDK, Promises and Actions are somewhat synonymous."),(0,o.kt)("admonition",{title:"Actions only effect the current contract",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"A contract cannot use the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddKey")," Action on another account, including the account that just called it. It can only add a key to ",(0,o.kt)("em",{parentName:"p"},"itself"),", if that makes sense."),(0,o.kt)("p",{parentName:"admonition"},"The same idea applies for the other actions as well. You cannot deploy a contract to someone else's account, or delete a different account. (Thankfully \ud83d\ude05)"),(0,o.kt)("p",{parentName:"admonition"},"Similarly, when we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," Action to send the crossword puzzle winner their prize, the amount is being subtracted from the account balance of the account where the crossword contract is deployed."),(0,o.kt)("p",{parentName:"admonition"},"The only interesting wrinkle (and what may ",(0,o.kt)("em",{parentName:"p"},"seem like")," an exception) is when a subaccount is created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateAccount")," Action. During that transaction, you may use Batch Actions to do several things like deploy a contract, transfer NEAR, add a key, call a function, etc. This is common in smart contracts that use a factory pattern, and we'll get to this in future chapters of this tutorial.")),(0,o.kt)("h2",{id:"define-the-prize-amount"},"Define the prize amount"),(0,o.kt)("p",null,"Let's make it simple and hardcode the prize amount. This is how much NEAR will be given to the first person who solves the crossword puzzle, and will apply to all the crossword puzzles we add. We'll make this amount adjustable in future chapters."),(0,o.kt)("p",null,"At the top of the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.rs")," file we'll add this constant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/1909630a10291081cb00b2780c1ae8889d98f620/contract/src/lib.rs#L10-L11\n")),(0,o.kt)("p",null,"As the code comment mentions, this is 5 NEAR, but look at all those zeroes in the code!"),(0,o.kt)("p",null,"That's the value in yoctoNEAR. This concept is similar to other blockchains. Bitcoin's smallest unit is a satoshi and Ethereum's is a wei."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:c,alt:"Depiction of bills of NEAR, coins for partial NEAR, and then a magnifying glass showing a tiny yoctoNEAR next to an ant. Art created by jrbemint.near"}),(0,o.kt)("figcaption",{class:"full-width"},"Art by ",(0,o.kt)("a",{href:"https://twitter.com/JrbeMad",target:"_blank"},"jrbemint.near"))),(0,o.kt)("h2",{id:"adding-transfer"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h2"},"Transfer")),(0,o.kt)("p",null,"In the last chapter we had a simple function called ",(0,o.kt)("inlineCode",{parentName:"p"},"guess_solution")," that returned ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the solution was correct, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise. We'll be replacing that function with ",(0,o.kt)("inlineCode",{parentName:"p"},"submit_solution")," as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/83d4d8925e6d30e04e8e4cb5e9a0a6d3763fce40/contract/src/lib.rs#L92-L124\n")),(0,o.kt)("p",null,"Note the last line in this function, which sends NEAR to the predecessor."),(0,o.kt)("admonition",{title:"Returning a Promise",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The last line of the function above ends with a semicolon. If the semicolon were removed, that would tell Rust that we'd like to return this Promise object."),(0,o.kt)("p",{parentName:"admonition"},"It would be perfectly fine to write the function like this:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn submit_solution(&mut self, solution: String, memo: String) -> Promise {\n    // \u2026\n    // Transfer the prize money to the winner\n    Promise::new(env::predecessor_account_id()).transfer(PRIZE_AMOUNT)\n}\n"))),(0,o.kt)("h2",{id:"predecessor-signer-and-current-account"},"Predecessor, signer, and current account"),(0,o.kt)("p",null,"When writing a smart contract you'll commonly want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," and the details it provides. We used this in the last chapter for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"logging (ex: ",(0,o.kt)("inlineCode",{parentName:"li"},'env::log_str("hello friend")'),")"),(0,o.kt)("li",{parentName:"ul"},"hashing using sha256 (ex: ",(0,o.kt)("inlineCode",{parentName:"li"},"env::sha256(solution.as_bytes())"),")")),(0,o.kt)("p",null,"There are more functions detailed in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/env/index.html"},"SDK reference docs"),"."),(0,o.kt)("p",null,"Let's cover three commonly-used functions regarding accounts: predecessor, signer, and current account."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:l,alt:"Illustration of Alice sending a transaction to a smart contract named Banana, which does a cross-contract call to the smart contract Cucumber. Art created by yasuoarts.near"}),(0,o.kt)("figcaption",{class:"full-width"},"Alice sends a transaction to the contract on banana.near, which does a cross-contract call to cucumber.near.",(0,o.kt)("br",null),"From the perspective of a contract on cucumber.near, we see a list of the predecessor, signer, and current account.",(0,o.kt)("br",null),"Art by ",(0,o.kt)("a",{href:"https://twitter.com/YasuoArt69",target:"_blank"},"yasuoarts.near"))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.predecessor_account_id.html"},"predecessor account")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"env::predecessor_account_id()")),(0,o.kt)("p",{parentName:"li"},"This is the account that was the immediate caller to the smart contract. If this is a simple transaction (no cross-contract calls) from ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," to ",(0,o.kt)("strong",{parentName:"p"},"banana.near"),", the smart contract at ",(0,o.kt)("strong",{parentName:"p"},"banana.near")," considers Alice the predecessor. In this case, Alice would ",(0,o.kt)("em",{parentName:"p"},"also")," be the signer."),(0,o.kt)("admonition",{parentName:"li",title:"When in doubt, use predecessor",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As we explore the differences between predecessor and signer, know that it's a more common ",(0,o.kt)("strong",{parentName:"p"},"best practice to choose the predecessor"),". "),(0,o.kt)("p",{parentName:"admonition"},'Using the predecessor guards against a potentially malicious contract trying to "fool" another contract that only checks the signer. '))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.signer_account_id.html"},"signer account")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"env::signer_account_id()")),(0,o.kt)("p",{parentName:"li"},"The signer is the account that originally ",(0,o.kt)("em",{parentName:"p"},"signed")," the transaction that began the blockchain activity, which may or may not include cross-contract calls. If a function calls results in several cross-contract calls, think of the signer as the account that pushed over the first domino in that chain reaction."),(0,o.kt)("admonition",{parentName:"li",title:"Beware of middlemen",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If your smart contract is checking the ownership over some assets (fungible token, NFTs, etc.) it's probably a bad idea to use the signer account."),(0,o.kt)("p",{parentName:"admonition"},"A confused or malicious contract might act as a middleman and cause unexpected behavior. If ",(0,o.kt)("strong",{parentName:"p"},"alice.near")," accidentally calls ",(0,o.kt)("strong",{parentName:"p"},"evil.near"),", the contract at that account might do a cross-contract call to ",(0,o.kt)("strong",{parentName:"p"},"vulnerable-nft.near"),", instructing it to transfer an NFT."),(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("strong",{parentName:"p"},"vulnerable-nft.near")," only checks the signer account to determine ownership of the NFT, it might unwittingly give away Alice's property. Checking the predecessor account eliminates this problem."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.current_account_id.html"},"current account")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"env::current_account_id()")),(0,o.kt)("p",{parentName:"li"},'The current account is "me" from the perspective of a smart contract.'),(0,o.kt)("admonition",{parentName:"li",title:"Why would I use that?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"There might be various reasons to use the current account, but a common use case is checking ownership or handling callbacks to cross-contract calls. "),(0,o.kt)("p",{parentName:"admonition"},"Many smart contracts will want to implement some sort of permission system. A common, rudimentary permission allows certain functions to only be called by the contract owner, AKA the person who owns a private key to the account for this contract."),(0,o.kt)("p",{parentName:"admonition"},"The contract can check that the predecessor and current account are the same, and trust offer more permissions like changing contract settings, upgrading the contract, or other privileged modifications.")))))}k.isMDXComponent=!0}}]);