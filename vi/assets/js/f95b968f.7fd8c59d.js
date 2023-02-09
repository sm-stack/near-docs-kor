"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5932],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>w,frontMatter:()=>h,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905));const i=a.p+"assets/images/shuffle-keys-77f1296905313d9f382ec78767e9920b.gif",s=(a.p,a.p+"assets/images/create-key-carpenter-near--carlcarlkarl.near--CarlCarlKarl-53d6a2571daf3910e8b4a51f6812bf0d.jpg"),l=a.p+"assets/images/remove-key-recycle--eerie_ram.near--eerie_ram-b42c10cc9da5ca74575c1ac02390e6a2.png";var c=["components"],h={sidebar_position:5,sidebar_label:"Cross-contract calls, etc.",title:"Adding cross-contract calls, access key shuffling, etc."},p="Updating the contract",d={unversionedId:"tutorials/crosswords/intermediate/cross-contract-calls",id:"tutorials/crosswords/intermediate/cross-contract-calls",title:"Adding cross-contract calls, access key shuffling, etc.",description:"To reiterate, we'd like anyone to be able to participate in the crossword puzzle, even folks who don't have a NEAR account.",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/04-cross-contract-calls.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/cross-contract-calls",permalink:"/near-docs-kor/vi/tutorials/crosswords/intermediate/cross-contract-calls",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/04-cross-contract-calls.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Cross-contract calls, etc.",title:"Adding cross-contract calls, access key shuffling, etc."},sidebar:"tutorials",previous:{title:"Linkdrop contract",permalink:"/near-docs-kor/vi/tutorials/crosswords/intermediate/linkdrop"},next:{title:"Base64 params, wrap up",permalink:"/near-docs-kor/vi/tutorials/crosswords/intermediate/base64vecu8"}},u={},m=[{value:"Reserving their spot",id:"reserving-their-spot",level:2},{value:"The plan",id:"the-plan",level:3},{value:"The implementation",id:"the-implementation",level:3},{value:"Cross-contract calls",id:"cross-contract-calls",level:2},{value:"The traits",id:"the-traits",level:3},{value:"<code>claim_reward</code>",id:"claim_reward",level:3},{value:"<code>claim_reward_new_account</code>",id:"claim_reward_new_account",level:3},{value:"Callbacks",id:"callbacks",level:2},{value:"Checking the public key",id:"checking-the-public-key",level:2},{value:"When the crossword is solved",id:"when-the-crossword-is-solved",level:3},{value:"When prize is claimed",id:"when-prize-is-claimed",level:3}],k={toc:m};function w(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-the-contract"},"Updating the contract"),(0,o.kt)("p",null,"To reiterate, we'd like anyone to be able to participate in the crossword puzzle, even folks who don't have a NEAR account."),(0,o.kt)("p",null,'The first person to win will "reserve their spot" and choose where to send the prize money: either an account they own or an account they\'d like to create.'),(0,o.kt)("h2",{id:"reserving-their-spot"},"Reserving their spot"),(0,o.kt)("h3",{id:"the-plan"},"The plan"),(0,o.kt)("p",null,"When a user first visits the crossword, they only see the crossword. No login button and no fields (like a ",(0,o.kt)("inlineCode",{parentName:"p"},"memo")," field) to fill out."),(0,o.kt)("p",null,"On their first visit, our frontend will create a brand new, random seed phrase in their browser. We'll use this seed phrase to create the user's unique key pair. If a random seed phrase is already there, it skips this part. (We covered the code for this in ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tutorials/crosswords/intermediate/use-seed-phrase#generate-random-seed-phrase"},"a previous section"),".)"),(0,o.kt)("p",null,"If the user is the first to solve the puzzle, it discovers the function-call access key and calls ",(0,o.kt)("inlineCode",{parentName:"p"},"submit_solution")," with that key. It's basically using someone else's key, as this key is on the crossword account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We'll be adding a new parameter")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"submit_solution")," so the user can include the random, public key we just stored in their browser. "),(0,o.kt)("p",null,"During the execution of ",(0,o.kt)("inlineCode",{parentName:"p"},"submit_solution"),", because contracts can use Promises to perform Actions, we'll remove the solution public key and add the user's public key."),(0,o.kt)("p",null,"This will lock out other attempts to solve the crossword puzzle and ensure there is only one winner."),(0,o.kt)("img",{src:i,width:"600"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"This means that a puzzle can have three states it can be in:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unsolved"),(0,o.kt)("li",{parentName:"ol"},"Solved and not yet claimed (not paid out)"),(0,o.kt)("li",{parentName:"ol"},"Claimed and finalized")),(0,o.kt)("p",null,"The previous chapter ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tutorials/crosswords/beginner/structs-enums#using-enums"},"we discussed enums"),", so this is simply modifying the enumeration variants.  "),(0,o.kt)("h3",{id:"the-implementation"},"The implementation"),(0,o.kt)("p",null,"First, let's see how the ",(0,o.kt)("inlineCode",{parentName:"p"},"submit_solution")," will verify the correct solution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L145-L151\n")),(0,o.kt)("p",null,"Instead of hashing the plaintext, we simply check that the public key matches what we know the answer is. (The answer being the series of words representing the solution to the crossword puzzle, used as a seed phrase to create a key pair, including a public key.)"),(0,o.kt)("p",null,"Further down in the ",(0,o.kt)("inlineCode",{parentName:"p"},"submit_solution")," method we'll follow our plan by ",(0,o.kt)("strong",{parentName:"p"},"adding a function-call access key")," (that only the winner has) and removing the access key that was discovered by the winner, so no one else can use it."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:s,alt:"Illustration of a carpenter who has created a key. Art by carlcarlkarl.near",width:"400"}),(0,o.kt)("figcaption",{class:"small"},"Our smart contract is like this carpenter adding a key to itself.",(0,o.kt)("br",null),"Art by ",(0,o.kt)("a",{href:"https://twitter.com/CarlCarlKarl",target:"_blank"},"carlcarlkarl.near"))),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L175-L181\n")),(0,o.kt)("p",null,"The first promise above adds an access key, and the second deletes the access key on the account that was derived from the solution as a seed phrase."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:l,alt:"Book showing pagination of hashes. Art created by eerie_ram.near",width:"600"}),(0,o.kt)("figcaption",null,"We delete the function-call access key so there is only one winner.",(0,o.kt)("br",null),"Art by ",(0,o.kt)("a",{href:"https://twitter.com/eerie_ram",target:"_blank"},"eerie_ram.near"))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Note that the new function-call access key is able to call two methods we'll be adding:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"claim_reward")," \u2014 when the user has an existing account and wishes to send the prize to it"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"claim_reward_new_account")," \u2014 when the user doesn't have an account, wants to create one and send the prize to it")),(0,o.kt)("p",null,"Both functions will do cross-contract calls and use callbacks to see the result. We finally get to the meat of this chapter, let's go! "),(0,o.kt)("h2",{id:"cross-contract-calls"},"Cross-contract calls"),(0,o.kt)("h3",{id:"the-traits"},"The traits"),(0,o.kt)("p",null,"We're going to be making a cross-contract call to the linkdrop account deployed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," account. We're also going to have callbacks for that, and for a simple transfer to a (potentially existing) account. We'll create the traits that define both those methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L19-L45\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's not necessary to create the trait for the callback as we could have just implemented the functions ",(0,o.kt)("inlineCode",{parentName:"p"},"callback_after_transfer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"callback_after_create_account")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Crossword")," struct implementation. We chose to define the trait and implement it to make the code a bit more readable.")),(0,o.kt)("h3",{id:"claim_reward"},(0,o.kt)("inlineCode",{parentName:"h3"},"claim_reward")),(0,o.kt)("p",null,"Again, this function is called when the user solves the crossword puzzle and wishes to send the prize money to an existing account."),(0,o.kt)("p",null,"Seems straightforward, so why would we need a callback? We didn't use a callback in the previous chapter when the user logged in, so what gives?"),(0,o.kt)("p",null,"It's possible that while claiming the prize, the user accidentally fat-fingers their username, or their cat jumps on their keyboard. Instead of typing ",(0,o.kt)("inlineCode",{parentName:"p"},"mike.testnet")," they type ",(0,o.kt)("inlineCode",{parentName:"p"},"mike.testnzzz")," and hit send. In short, if we try to send the prize to a non-existent account, we want to catch that."),(0,o.kt)("p",null,"For brevity, we'll skip some code in this function to focus on the Promise and callback:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn claim_reward(\n    &mut self,\n    crossword_pk: PublicKey,\n    receiver_acc_id: String,\n    memo: String,\n    ) -> Promise {\n        let signer_pk = env::signer_account_pk();\n        ...\n        Promise::new(receiver_acc_id.parse().unwrap())\n            .transfer(reward_amount)\n            .then(\n                Self::ext(env::current_account_id())\n                    .with_static_gas(GAS_FOR_ACCOUNT_CALLBACK)\n                    .callback_after_transfer(\n                        crossword_pk,\n                        receiver_acc_id,\n                        memo,\n                        env::signer_account_pk(),\n                    ),\n            )\n    }\n")),(0,o.kt)("admonition",{title:"Your IDE is your friend",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Oftentimes, the IDE can help you."),(0,o.kt)("p",{parentName:"admonition"},"For instance, in the above snippet we have ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver_acc_id.parse().unwrap()")," which might look confusing. You can lean on code examples or documentation to see how this is done, or you can utilize the suggestions from your IDE.")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"claim_reward")," method will attempt to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," Action to send NEAR to the account specified. It might fail on a protocol level (as opposed to a smart contract failure), which would indicate the account doesn't exist."),(0,o.kt)("p",null,"Let's see how we check this in the callback:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L381-L411\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"#[private]")," macro"),(0,o.kt)("p",{parentName:"admonition"},"Notice that above the function, we have declared it to be private."),(0,o.kt)("p",{parentName:"admonition"},"This is an ergonomic helper that checks to make sure the predecessor is the current account ID."),(0,o.kt)("p",{parentName:"admonition"},'We actually saw this done "the long way" in the callback for the linkdrop contract in ',(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tutorials/crosswords/intermediate/linkdrop#the-callback"},"the previous section"),"."),(0,o.kt)("p",{parentName:"admonition"},"Every callback will want to have this ",(0,o.kt)("inlineCode",{parentName:"p"},"#[private]")," macro above it.")),(0,o.kt)("p",null,"The snippet above essentially says it expects there to be a Promise result for exactly one Promise, and then sees if that was successful or not. Note that we're not actually getting a ",(0,o.kt)("em",{parentName:"p"},"value")," in this callback, just if it succeeded or failed."),(0,o.kt)("p",null,"If it succeeded, we proceed to finalize the puzzle, like setting its status to be claimed and finished, removing it from the ",(0,o.kt)("inlineCode",{parentName:"p"},"unsolved_puzzles")," collection, etc."),(0,o.kt)("h3",{id:"claim_reward_new_account"},(0,o.kt)("inlineCode",{parentName:"h3"},"claim_reward_new_account")),(0,o.kt)("p",null,"Now we want to handle a more interesting case. We're going to do a cross-contract call to the smart contract located on ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," and ask it to create an account for us. This name might be unavailable, and this time we get to write a callback that ",(0,o.kt)("em",{parentName:"p"},"gets a value"),"."),(0,o.kt)("p",null,"Again, for brevity, we'll show the meat of the ",(0,o.kt)("inlineCode",{parentName:"p"},"claim_reward_new_account")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn claim_reward_new_account(\n    &mut self,\n    crossword_pk: PublicKey,\n    new_acc_id: String,\n    new_pk: PublicKey,\n    memo: String,\n) -> Promise {\n    ...\n    ext_linkdrop::ext(AccountId::from(self.creator_account.clone()))\n        .with_attached_deposit(reward_amount)\n        .with_static_gas(GAS_FOR_ACCOUNT_CREATION) // This amount of gas will be split\n        .create_account(new_acc_id.parse().unwrap(), new_pk)\n        .then(\n            // Chain a promise callback to ourselves\n            Self::ext(env::current_account_id())\n                .with_static_gas(GAS_FOR_ACCOUNT_CALLBACK)\n                .callback_after_create_account(\n                    crossword_pk,\n                    new_acc_id,\n                    memo,\n                    env::signer_account_pk(),\n                ),\n        )\n}\n")),(0,o.kt)("p",null,"Then the callback:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L413-L448\n")),(0,o.kt)("p",null,"In the above snippet, there's one difference from the callback we saw in ",(0,o.kt)("inlineCode",{parentName:"p"},"claim_reward"),': we capture the value returned from the smart contract we just called. Since the linkdrop contract returns a bool, we can expect that type. (See the comments with "NOTE:" above, highlighting this.)'),(0,o.kt)("h2",{id:"callbacks"},"Callbacks"),(0,o.kt)("p",null,"The way that the callback works is that you start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Self::ext()")," and pass in the current acount ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"env::current_account_id()"),". This is essentially saying that you want to call a function that lives on the current account ID."),(0,o.kt)("p",null,"You then have a couple of config options that each start with ",(0,o.kt)("inlineCode",{parentName:"p"},".with_*"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can attach a deposit of \u24c3, in yocto\u24c3 to the call by specifying the ",(0,o.kt)("inlineCode",{parentName:"li"},".with_attached_deposit()")," method but it is defaulted to 0 (1 \u24c3 = 1000000000000000000000000 yocto\u24c3, or 1^24 yocto\u24c3)."),(0,o.kt)("li",{parentName:"ol"},"You can attach a static amount of GAS by specifying the ",(0,o.kt)("inlineCode",{parentName:"li"},".with_static_gas()")," method but it is defaulted to 0."),(0,o.kt)("li",{parentName:"ol"},"You can attach an unused GAS weight by specifying the ",(0,o.kt)("inlineCode",{parentName:"li"},".with_unused_gas_weight()")," method but it is defaulted to 1. The unused GAS will be split amongst all the functions in the current execution depending on their weights. If there is only 1 function, any weight above 1 will result in all the unused GAS being attached to that function. If you specify a weight of 0, however, the unused GAS will not be attached to that function. If you have two functions, one with a weight of 3, and one with a weight of 1, the first function will get 3/4 of the unused GAS and the other function will get 1/4 of the unused GAS.")),(0,o.kt)("p",null,"After you've added the desired configurations to the call, you execute the function and pass in the parameters. In this case, we call the function ",(0,o.kt)("inlineCode",{parentName:"p"},"callback_after_create_account")," and pass in the crossword public key, the new account ID, the memo, and the signer's public key."),(0,o.kt)("p",null,"This function will be called with static GAS equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"GAS_FOR_ACCOUNT_CALLBACK")," and will have no deposit attached. In addition, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"with_unused_gas_weight()")," method wasn't called, it will default to a weight of 1 meaning that it will split all the unused GAS with the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_account")," function to be added on top of the ",(0,o.kt)("inlineCode",{parentName:"p"},"GAS_FOR_ACCOUNT_CALLBACK"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},".then(\n    // Chain a promise callback to ourselves\n    Self::ext(env::current_account_id())\n        .with_static_gas(GAS_FOR_ACCOUNT_CALLBACK)\n        .callback_after_create_account(\n            crossword_pk,\n            new_acc_id,\n            memo,\n            env::signer_account_pk(),\n        ),\n)\n")),(0,o.kt)("admonition",{title:"Consider changing contract state in callback",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's not always the case, but often you'll want to change the contract state in the callback."),(0,o.kt)("p",{parentName:"admonition"},"The callback is a safe place where we have knowledge of what's happened after cross-contract calls or Actions. If your smart contract is changing state ",(0,o.kt)("em",{parentName:"p"},"before")," doing a cross-contract call, make sure there's a good reason for it. It might be best to move this logic into the callback.")),(0,o.kt)("p",null,"So what parameters should I pass into a callback?"),(0,o.kt)("p",null,"There's no one-size-fits-all solution, but perhaps there's some advice that can be helpful."),(0,o.kt)("p",null,"Try to pass parameters that would be unwise to trust coming from another source. For instance, if an account calls a method to transfer some digital asset, and you need to do a cross-contract call, don't rely on the results of contract call to determine ownership. If the original function call determines the owner of a digital asset, pass this to the callback."),(0,o.kt)("p",null,"Passing parameters to callbacks is also a handy way to save fetching data from persistent collections twice: once in the initial method and again in the callback. Instead, just pass them along and save some CPU cycles."),(0,o.kt)("h2",{id:"checking-the-public-key"},"Checking the public key"),(0,o.kt)("p",null,"The last simple change in this section is to modify the way we verify if a user has found the crossword solution."),(0,o.kt)("p",null,"In previous chapters we hashed the plaintext solution and compared it to the known solution's hash."),(0,o.kt)("p",null,"Here we're able to simply check the signer's public key, which is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," object ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.signer_account_pk.html"},"under ",(0,o.kt)("inlineCode",{parentName:"a"},"signer_account_pk")),"."),(0,o.kt)("p",null,"We'll do this check in both when the solution is submitted, and when the prize is claimed."),(0,o.kt)("h3",{id:"when-the-crossword-is-solved"},"When the crossword is solved"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// The solver_pk parameter is the public key generated and stored in their browser\npub fn submit_solution(&mut self, solver_pk: PublicKey) {\n    let answer_pk = env::signer_account_pk();\n    // check to see if the answer_pk from signer is in the puzzles\n    let mut puzzle = self\n        .puzzles\n        .get(&answer_pk)\n        .expect("ERR_NOT_CORRECT_ANSWER");\n')),(0,o.kt)("h3",{id:"when-prize-is-claimed"},"When prize is claimed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn claim_reward(\n    &mut self,\n    crossword_pk: PublicKey,\n    receiver_acc_id: String,\n    memo: String,\n) -> Promise {\n    let signer_pk = env::signer_account_pk();\n    ...\n    // Check that puzzle is solved and the signer has the right public key\n    match puzzle.status {\n        PuzzleStatus::Solved {\n            solver_pk: puzzle_pk,\n        } => {\n            // Check to see if signer_pk matches\n            assert_eq!(signer_pk, puzzle_pk, "You\'re not the person who can claim this, or else you need to use your function-call access key, friend.");\n        }\n        _ => {\n            env::panic_str("puzzle should have `Solved` status to be claimed");\n        }\n    };\n    ...\n}\n')))}w.isMDXComponent=!0}}]);