"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var a=n(87462),o=n(63366),r=(n(67294),n(3905));const s=n.p+"assets/images/teaching--jeheycell.near--artcultureac-2d9983a17041c734d5c6e47dc4c879cb.jpeg",i=n.p+"assets/images/creating account with text--seanpineda.near--_seanpineda-fff4a4afb35af8251a82af2524f98234.png",l=n.p+"assets/medias/erasing-subaccount-chalkboard--iambon.near--JohnreyBona-8d0cdfe27b736ffe13588ce9fbc5bcde.mp4";var c=["components"],d={sidebar_position:3,sidebar_label:"Add basic code, create a subaccount, and call methods",title:"Alter the smart contract, learning about basics of development"},u="Modifying the contract",p={unversionedId:"tutorials/crosswords/basics/add-functions-call",id:"tutorials/crosswords/basics/add-functions-call",title:"Alter the smart contract, learning about basics of development",description:"",source:"@site/../docs/3.tutorials/crosswords/01-basics/02-add-functions-call.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/add-functions-call",permalink:"/near-docs-kor/vi/tutorials/crosswords/basics/add-functions-call",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/02-add-functions-call.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Add basic code, create a subaccount, and call methods",title:"Alter the smart contract, learning about basics of development"},sidebar:"tutorials",previous:{title:"Set up Rust and a contract skeleton",permalink:"/near-docs-kor/vi/tutorials/crosswords/basics/set-up-skeleton"},next:{title:"Hash the solution, unit tests, and an init method",permalink:"/near-docs-kor/vi/tutorials/crosswords/basics/hashing-and-unit-tests"}},h={},m=[{value:"Add a const, a field, and functions",id:"add-a-const-a-field-and-functions",level:2},{value:"Building and deploying",id:"building-and-deploying",level:2},{value:"Build the contract",id:"build-the-contract",level:3},{value:"Create a subaccount",id:"create-a-subaccount",level:3},{value:"What&#39;s a codehash?",id:"whats-a-codehash",level:4},{value:"Deploy the contract",id:"deploy-the-contract",level:3},{value:"Call the contract methods (interact!)",id:"call-the-contract-methods-interact",level:3},{value:"Reset the account&#39;s contract and state",id:"reset-the-accounts-contract-and-state",level:2},{value:"Wrapping up",id:"wrapping-up",level:2}],f={toc:m};function k(e){var t=e.components,d=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modifying-the-contract"},"Modifying the contract"),(0,r.kt)("p",null,"This section will modify the smart contract skeleton from the previous section. This tutorial will start by writing a contract in a somewhat useless way in order to learn the basics. Once we've got a solid understanding, we'll iterate until we have a crossword puzzle."),(0,r.kt)("h2",{id:"add-a-const-a-field-and-functions"},"Add a const, a field, and functions"),(0,r.kt)("p",null,"Let's modify the contract to be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-snippets/blob/00223633f3e6b5b7137097e996b0aee90d632b0f/src/lib.rs#L1-L29\n")),(0,r.kt)("p",null,"We've done a few things here:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set a constant for the puzzle number."),(0,r.kt)("li",{parentName:"ol"},"Added the field ",(0,r.kt)("inlineCode",{parentName:"li"},"crossword_solution")," to our main struct."),(0,r.kt)("li",{parentName:"ol"},"Implemented three functions: one that's view-only and two that are mutable, meaning they have the ability to change state."),(0,r.kt)("li",{parentName:"ol"},"Used logging, which required the import of ",(0,r.kt)("inlineCode",{parentName:"li"},"env")," from our ",(0,r.kt)("inlineCode",{parentName:"li"},"near_sdk")," crate.")),(0,r.kt)("p",null,"Before moving on, let's talk about these changes and how to think about them, beginning with the constant:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const PUZZLE_NUMBER: u8 = 1;")),(0,r.kt)("p",null,"This is an in-memory value, meaning that when the smart contract is spun up and executed in the virtual machine, the value ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is contained in the contract code. This differs from the next change, where a field is added to the struct containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[near_bindgen]")," macro. The field ",(0,r.kt)("inlineCode",{parentName:"p"},"crossword_solution")," has the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and, like any other fields added to this struct, the value will live in ",(0,r.kt)("strong",{parentName:"p"},"persistent storage"),'. With NEAR, storage is "paid for" via the native NEAR token (\u24c3). It is not "state rent" but storage staking, paid once, and returned when storage is deleted. This helps incentivize users to keep their state clean, allowing for a more healthy chain. Read more about ',(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/concepts/storage/storage-staking"},"storage staking here"),"."),(0,r.kt)("p",null,"Let's now look at the three new functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_puzzle_number(&self) -> u8 {\n    PUZZLE_NUMBER\n}\n")),(0,r.kt)("p",null,"As is covered in the ",(0,r.kt)("a",{parentName:"p",href:"/sdk/rust/contract-interface/contract-mutability"},"mutability section of these docs"),', a "view-only" function will have open parenthesis around ',(0,r.kt)("inlineCode",{parentName:"p"},"&self"),' while "change methods" or mutable functions will have ',(0,r.kt)("inlineCode",{parentName:"p"},"&mut self"),". In the function above, the ",(0,r.kt)("inlineCode",{parentName:"p"},"PUZZLE_NUMBER")," is returned. A user may call this method using the proper RPC endpoint without signing any transaction, since it's read-only. Think of it like a GET request, but using RPC endpoints that are ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/api/rpc/contracts#call-a-contract-function"},"documented here"),"."),(0,r.kt)("p",null,"Mutable functions, on the other hand, require a signed transaction. The first example is a typical approach where the user supplies a parameter that's assigned to a field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn set_solution(&mut self, solution: String) {\n    self.crossword_solution = solution;\n}\n")),(0,r.kt)("p",null,"The next time the smart contract is called, the contract's field ",(0,r.kt)("inlineCode",{parentName:"p"},"crossword_solution")," will have changed."),(0,r.kt)("p",null,"The second example is provided for demonstration purposes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn guess_solution(&mut self, solution: String) {\n    if solution == self.crossword_solution {\n        env::log_str("You guessed right!")\n    } else {\n        env::log_str("Try again.")\n    }\n}\n')),(0,r.kt)("p",null,"Notice how we're not saving anything to state and only logging? Why does this need to be mutable?"),(0,r.kt)("p",null,"Well, logging is ultimately captured inside blocks added to the blockchain. (More accurately, transactions are contained in chunks and chunks are contained in blocks. More info in the ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Architecture.html?highlight=chunk#blockchain-layer-concepts"},"Nomicon spec"),".) So while it is not changing the data in the fields of the struct, it does cost some amount of gas to log, requiring a signed transaction by an account that pays for this gas."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"building-and-deploying"},"Building and deploying"),(0,r.kt)("p",null,"Here's what we'll want to do:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:s,alt:"Teacher shows chalkboard with instructions on how to properly deploy a smart contract. 1. Build smart contract. 2. Create a subaccount (or delete and recreate if it exists) 3. Deploy to subaccount. 4. Interact. Art created by jeheycell.near"}),(0,r.kt)("figcaption",{className:"full-width"},"Art by ",(0,r.kt)("a",{href:"https://twitter.com/artcultureac",target:"_blank"},"jeheycell.near"))),(0,r.kt)("h3",{id:"build-the-contract"},"Build the contract"),(0,r.kt)("p",null,"The skeleton of the Rust contract we copied from the previous section has a ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sh")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"build.bat")," file for OS X / Linux and Windows, respectively. For more details on building contracts, please see ",(0,r.kt)("a",{parentName:"p",href:"/sdk/rust/building/basics"},"this section"),"."),(0,r.kt)("p",null,"Run the build script and expect to see the compiled Wasm file copied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," folder, instead of buried  in the default folder structure Rust sets up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./build.sh\n")),(0,r.kt)("h3",{id:"create-a-subaccount"},"Create a subaccount"),(0,r.kt)("p",null,"If you've followed from the previous section, you have NEAR CLI installed and a full-access key on your machine. While developing, it's a best practice to create a subaccount and deploy the contract to it. This makes it easy to quickly delete and recreate the subaccount, which wipes the state swiftly and starts from scratch. Let's use NEAR CLI to create a subaccount and fund with 1 NEAR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near create-account crossword.friend.testnet --masterAccount friend.testnet --initialBalance 1 \n")),(0,r.kt)("p",null,"If you look again in your home directory's ",(0,r.kt)("inlineCode",{parentName:"p"},".near-credentials"),", you'll see a new key for the subaccount with its own key pair. This new account is, for all intents and purposes, completely distinct from the account that created it. It might as well be ",(0,r.kt)("inlineCode",{parentName:"p"},"alice.testnet"),", as it has, by default, no special relationship with the parent account. To be clear, ",(0,r.kt)("inlineCode",{parentName:"p"},"friend.testnet")," cannot delete or deploy to ",(0,r.kt)("inlineCode",{parentName:"p"},"crossword.friend.testnet")," unless it's done in a single transaction using Batch Actions, which we'll cover later."),(0,r.kt)("admonition",{title:"Subaccount nesting",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It's possible to have the account ",(0,r.kt)("inlineCode",{parentName:"p"},"another.crossword.friend.testnet"),", but this account must be created by ",(0,r.kt)("inlineCode",{parentName:"p"},"crossword.friend.testnet"),". "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"friend.testnet")," ",(0,r.kt)("strong",{parentName:"p"},"cannot")," create ",(0,r.kt)("inlineCode",{parentName:"p"},"another.crossword.friend.testnet"),' because accounts may only create a subaccount that\'s "one level deeper."'),(0,r.kt)("p",{parentName:"admonition"},"See this visualization where two keys belonging to ",(0,r.kt)("inlineCode",{parentName:"p"},"mike.near")," are able to create ",(0,r.kt)("inlineCode",{parentName:"p"},"new.mike.near"),". We'll get into concepts around access keys later."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:i,alt:"Depiction of create account where two figures put together a subaccount. Art created by seanpineda.near"}),(0,r.kt)("figcaption",{className:"full-width"},"Art by ",(0,r.kt)("a",{href:"https://twitter.com/_seanpineda",target:"_blank"},"seanpineda.near")))),(0,r.kt)("p",null,"We won't get into top-level accounts or implicit accounts, but you may read more ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/concepts/account"},"about that here"),"."),(0,r.kt)("p",null,"Now that we have a key pair for our subaccount, we can deploy the contract to testnet and interact with it!"),(0,r.kt)("h4",{id:"whats-a-codehash"},"What's a codehash?"),(0,r.kt)("p",null,"We're almost ready to deploy the smart contract to the account, but first let's take a look at the account we're going to deploy to. Remember, this is the subaccount we created earlier. To view the state easily with NEAR CLI, you may run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near state crossword.friend.testnet\n")),(0,r.kt)("p",null,"What you'll see is something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  amount: '6273260568737488799170194446',\n  block_hash: 'CMFVLYy6UP6c6vrWiSf1atWviayfZF2fgPoqKeUVtLhi',\n  block_height: 61764892,\n  code_hash: '11111111111111111111111111111111',\n  locked: '0',\n  storage_paid_at: 0,\n  storage_usage: 4236,\n  formattedAmount: '6,273.260568737488799170194446'\n}\n")),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"code_hash")," here is all ones. This indicates that there is no contract deployed to this account."),(0,r.kt)("p",null,"Let's deploy the contract (to the subaccount we created) and then check this again."),(0,r.kt)("h3",{id:"deploy-the-contract"},"Deploy the contract"),(0,r.kt)("p",null,"Ensure that in your command line application, you're in the directory that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," directory, then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near deploy crossword.friend.testnet --wasmFile res/my_crossword.wasm\n")),(0,r.kt)("p",null,"Congratulations, you've deployed the smart contract! Note that NEAR CLI will output a link to ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.near.org/"},"NEAR Explorer")," where you can inspect details of the transaction."),(0,r.kt)("p",null,"Lastly, let's run this command again and notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"code_hash")," is no longer all ones. This is the hash of the smart contract deployed to the account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near state crossword.friend.testnet\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": deploying a contract is often done on the command line. While it may be ",(0,r.kt)("em",{parentName:"p"},"technically")," possible to deploy via a frontend, the CLI is likely the best approach. If you're aiming to use a factory model, (where a smart contract deploys contract code to a subaccount) this isn't covered in the tutorial, but you may reference the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract"},"contracts in SputnikDAO"),". "),(0,r.kt)("h3",{id:"call-the-contract-methods-interact"},"Call the contract methods (interact!)"),(0,r.kt)("p",null,"Let's first call the method that's view-only:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near view crossword.friend.testnet get_puzzle_number\n")),(0,r.kt)("p",null,"Your command prompt will show the result is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". Since this method doesn't take any arguments, we don't pass any. We could have added ",(0,r.kt)("inlineCode",{parentName:"p"},"'{}'")," to the end of the command as well."),(0,r.kt)("p",null,"Next, we'll add a crossword solution as a string (later we'll do this in a better way) argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'near call crossword.friend.testnet set_solution \'{"solution": "near nomicon ref finance"}\' --accountId friend.testnet\n')),(0,r.kt)("admonition",{title:"Windows users",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Windows users will have to modify these commands a bit as the Command Prompt doesn't like single quotes as we have above. The command must use escaped quotes like so:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'near call crossword.friend.testnet set_solution "{\\"solution\\": \\"near nomicon ref finance\\"}" --accountId friend.testnet\n'))),(0,r.kt)("p",null,"Note that we used NEAR CLI's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/tools/near-cli#near-view"},(0,r.kt)("inlineCode",{parentName:"a"},"view")," command"),", and didn't include an ",(0,r.kt)("inlineCode",{parentName:"p"},"--accountId")," flag. As mentioned earlier, this is because we are not signing a transaction. This second method uses the NEAR CLI ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/tools/near-cli#near-call"},(0,r.kt)("inlineCode",{parentName:"a"},"call")," command")," which does sign a transaction and requires the user to specify a NEAR account that will sign it, using the credentials files we looked at."),(0,r.kt)("p",null,"The last method we have will check the argument against what is stored in state and write a log about whether the crossword solution is correct or incorrect."),(0,r.kt)("p",null,"Correct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'near call crossword.friend.testnet guess_solution \'{"solution": "near nomicon ref finance"}\' --accountId friend.testnet\n')),(0,r.kt)("p",null,"You'll see something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Command line shows log for successful solution guess",src:n(53925).Z,width:"2018",height:"354"})),(0,r.kt)("p",null,"Notice the log we wrote is output as well as a link to NEAR Explorer."),(0,r.kt)("p",null,"Incorrect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'near call crossword.friend.testnet guess_solution \'{"solution": "wrong answers here"}\' --accountId friend.testnet\n')),(0,r.kt)("p",null,"As you can imagine, the above command will show something similar, except the logs will indicate that you've given the wrong solution."),(0,r.kt)("h2",{id:"reset-the-accounts-contract-and-state"},"Reset the account's contract and state"),(0,r.kt)("p",null,"We'll be iterating on this smart contract during this tutorial, and in some cases it's best to start fresh with the NEAR subaccount we created. The pattern to follow is to ",(0,r.kt)("strong",{parentName:"p"},"delete")," the account (sending all remaining testnet \u24c3 to a recipient) and then ",(0,r.kt)("strong",{parentName:"p"},"create the account")," again."),(0,r.kt)("video",{autoPlay:!0,controls:!0,loop:!0},(0,r.kt)("source",{src:l,type:"video/mp4"}),"Sorry, your browser doesn't support embedded videos."),(0,r.kt)("figure",null,(0,r.kt)("figcaption",null,"Deleting a recreating a subaccount will clear the state and give us a fresh start.",(0,r.kt)("br",null),"Animation by ",(0,r.kt)("a",{href:"https://twitter.com/JohnreyBona",target:"_blank"},"iambon.near"))),(0,r.kt)("p",null,"Using NEAR CLI, the commands will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n")),(0,r.kt)("p",null,"The first command deletes ",(0,r.kt)("inlineCode",{parentName:"p"},"crossword.friend.testnet")," and sends the rest of its NEAR to ",(0,r.kt)("inlineCode",{parentName:"p"},"friend.testnet"),"."),(0,r.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,r.kt)("p",null,"So far, we're writing a simplified version of smart contract and approaching the crossword puzzle in a novice way. Remember that blockchain is an open ledger, meaning everyone can see the state of smart contracts and transactions taking place. "),(0,r.kt)("admonition",{title:"How would you do that?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You may hit an RPC endpoint corresponding to ",(0,r.kt)("inlineCode",{parentName:"p"},"view_state")," and see for yourself. Note: this quick example serves as demonstration purposes, but note that the string being returned is Borsh-serialized and contains more info than just the letters."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'curl -d \'{"jsonrpc": "2.0", "method": "query", "id": "see-state", "params": {"request_type": "view_state", "finality": "final", "account_id": "crossword.friend.testnet", "prefix_base64": ""}}\' -H \'Content-Type: application/json\' https://rpc.testnet.near.org\n')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Screenshot of a terminal screen showing a curl request to an RPC endpoint that returns state of a smart contract",src:n(25483).Z,width:"2176",height:"590"})),(0,r.kt)("p",{parentName:"admonition"},"More on this RPC endpoint in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/api/rpc/contracts#view-contract-state"},"NEAR docs"),".")),(0,r.kt)("p",null,"In this section, we saved the crossword solution as plain text, which is likely not a great idea if we want to hide the solution to players of this crossword puzzle. Even though we don't have a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"show_solution")," that returns the struct's ",(0,r.kt)("inlineCode",{parentName:"p"},"crossword_solution")," field, the value is stored transparently in state. We won't get into viewing contract state at this moment, but know it's rather easy ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/api/rpc/contracts#view-contract-state"},"and documented here"),"."),(0,r.kt)("p",null,"The next section will explore hiding the answer from end users playing the crossword puzzle."))}k.isMDXComponent=!0},53925:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cli-guess-solution-69ba10e77171f71a0eccb80730687f5e.png"},25483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rpc-api-view-state-47b18cb2be5020cc96f4616d99eb888d.png"}}]);