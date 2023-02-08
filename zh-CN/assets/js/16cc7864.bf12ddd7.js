"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"core",title:"Core",sidebar_label:"Core"},s=void 0,c={unversionedId:"tutorials/nfts/js/core",id:"tutorials/nfts/js/core",title:"Core",description:"In this tutorial you'll learn how to implement the core standards into your smart contract. If you're joining us for the first time, feel free to clone this repo and checkout the 3.enumeration branch to follow along.",source:"@site/../docs/3.tutorials/nfts/js/4-core.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/core",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/js/core",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/4-core.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",sidebarPosition:4,frontMatter:{id:"core",title:"Core",sidebar_label:"Core"},sidebar:"tutorials",previous:{title:"Enumeration",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/js/enumeration"},next:{title:"Approvals",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/js/approvals"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Transfer function",id:"transfer-function",level:3},{value:"Internal helper functions",id:"internal-helper-functions",level:3},{value:"assertOneYocto",id:"assertoneyocto",level:4},{value:"internal_transfer",id:"internal_transfer",level:4},{value:"Transfer call function",id:"transfer-call-function",level:3},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Testing the new changes",id:"testing-changes",level:2},{value:"Testing the transfer function",id:"testing-the-transfer-function",level:3},{value:"Testing the transfer call function",id:"testing-the-transfer-call-function",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial you'll learn how to implement the ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Core.html"},"core standards")," into your smart contract. If you're joining us for the first time, feel free to clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial"},"this repo")," and checkout the ",(0,r.kt)("inlineCode",{parentName:"p"},"3.enumeration")," branch to follow along."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The JS-SDK is currently in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,r.kt)("inlineCode",{parentName:"a"},"Alpha"))),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout 3.enumeration\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you wish to see the finished code for this ",(0,r.kt)("em",{parentName:"p"},"Core")," tutorial, you can find it on the ",(0,r.kt)("inlineCode",{parentName:"p"},"4.core")," branch.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Up until this point, you've created a simple NFT smart contract that allows users to mint tokens and view information using the ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Enumeration.html"},"enumeration standards"),". Today, you'll expand your smart contract to allow for users to not only mint tokens, but transfer them as well."),(0,r.kt)("p",null,"As we did in the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"minting tutorial"),", let's break down the problem into multiple subtasks to make our lives easier. When a token is minted, information is stored in 3 places:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tokensPerOwner"),": set of tokens for each account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tokensById"),": maps a token ID to a ",(0,r.kt)("inlineCode",{parentName:"li"},"Token")," object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tokenMetadataById"),": maps a token ID to its metadata.")),(0,r.kt)("p",null,"Let's now consider the following scenario. If Benji owns token A and wants to transfer it to Mike as a birthday gift, what should happen? First of all, token A should be removed from Benji's set of tokens and added to Mike's set of tokens."),(0,r.kt)("p",null,"If that's the only logic you implement, you'll run into some problems. If you were to do a ",(0,r.kt)("inlineCode",{parentName:"p"},"view")," call to query for information about that token after it's been transferred to Mike, it would still say that Benji is the owner."),(0,r.kt)("p",null,"This is because the contract is still mapping the token ID to the old ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," object that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner_id")," field set to Benji's account ID. You still have to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"tokensById")," data structure so that the token ID maps to a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," object which has Mike as the owner."),(0,r.kt)("p",null,"With that being said, the final process for when an owner transfers a token to a receiver should be the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove the token from the owner's set."),(0,r.kt)("li",{parentName:"ul"},"Add the token to the receiver's set."),(0,r.kt)("li",{parentName:"ul"},"Map a token ID to a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Token")," object containing the correct owner.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You might be curious as to why we don't edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenMetadataById")," field. This is because no matter who owns the token, the token ID will always map to the same metadata. The metadata should never change and so we can just leave it alone.")),(0,r.kt)("p",null,"At this point, you're ready to move on and make the necessary modifications to your smart contract."),(0,r.kt)("h2",{id:"modifications-to-the-contract"},"Modifications to the contract"),(0,r.kt)("p",null,"Let's start our journey in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-contract/src/nft_core.ts")," file."),(0,r.kt)("h3",{id:"transfer-function"},"Transfer function"),(0,r.kt)("p",null,"You'll start by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer")," logic. This function will transfer the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver_id")," with an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"Happy Birthday Mike!"'),". The core logic will be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalNftTransfer")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts#L37-L64\n")),(0,r.kt)("p",null,"There are a couple things to notice here. Firstly, we've introduced a new method called ",(0,r.kt)("inlineCode",{parentName:"p"},"assertOneYocto()"),". This method will ensure that the user has attached exactly one yoctoNEAR to the call. If a function requires a deposit, you need a full access key to sign that transaction. By adding the one yoctoNEAR deposit requirement, you're essentially forcing the user to sign the transaction with a full access key."),(0,r.kt)("p",null,"Since the transfer function is potentially transferring very valuable assets, you'll want to make sure that whoever is calling the function has a full access key."),(0,r.kt)("p",null,"Secondly, we've introduced an ",(0,r.kt)("inlineCode",{parentName:"p"},"internalTransfer")," method. This will perform all the logic necessary to transfer an NFT."),(0,r.kt)("h3",{id:"internal-helper-functions"},"Internal helper functions"),(0,r.kt)("p",null,"Let's quickly move over to the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-contract/src/internal.ts")," file so that you can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"assertOneYocto()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"internalTransfer")," methods."),(0,r.kt)("p",null,"Let's start with the easier one, ",(0,r.kt)("inlineCode",{parentName:"p"},"assertOneYocto()"),"."),(0,r.kt)("h4",{id:"assertoneyocto"},"assertOneYocto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts#L38-L41\n")),(0,r.kt)("h4",{id:"internal_transfer"},"internal_transfer"),(0,r.kt)("p",null,"It's now time to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalTransfer")," function which is the core of this tutorial. This function will take the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"senderId"),": the account that's attempting to transfer the token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"receiverId"),": the account that's receiving the token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tokenId"),": the token ID being transferred."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"memo"),": an optional memo to include.")),(0,r.kt)("p",null,"The first thing you'll want to do is to make sure that the sender is authorized to transfer the token. In this case, you'll just make sure that the sender is the owner of the token. You'll do that by getting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," object using the ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," and making sure that the sender is equal to the token's ",(0,r.kt)("inlineCode",{parentName:"p"},"owner_id"),"."),(0,r.kt)("p",null,"Second, you'll remove the token ID from the sender's list and add the token ID to the receiver's list of tokens. Finally, you'll create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," object with the receiver as the owner and remap the token ID to that newly created object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts#L80-L114\n")),(0,r.kt)("p",null,"You've previously implemented functionality for adding a token ID to an owner's set but you haven't created the functionality for removing a token ID from an owner's set. Let's do that now by created a new function called ",(0,r.kt)("inlineCode",{parentName:"p"},"internalRemoveTokenFromOwner")," which we'll place right above our ",(0,r.kt)("inlineCode",{parentName:"p"},"internalTransfer")," and below the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalAddTokenToOwner")," function."),(0,r.kt)("p",null,"In the remove function, you'll get the set of tokens for a given account ID and then remove the passed in token ID. If the account's set is empty after the removal, you'll simply remove the account from the ",(0,r.kt)("inlineCode",{parentName:"p"},"tokensPerOwner")," data structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts#L60-L78\n")),(0,r.kt)("p",null,"With these internal functions complete, the logic for transferring NFTs is finished. It's now time to move on and implement ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer_call"),", one of the most integral yet complicated functions of the standard."),(0,r.kt)("h3",{id:"transfer-call-function"},"Transfer call function"),(0,r.kt)("p",null,"Let's consider the following scenario. An account wants to transfer an NFT to a smart contract for performing a service. The traditional approach would be to use an approval management system, where the receiving contract is granted the ability to transfer the NFT to themselves after completion. You'll learn more about the approval management system in the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/approvals"},"approvals section")," of the tutorial series."),(0,r.kt)("p",null,"This allowance workflow takes multiple transactions. If we introduce a \u201ctransfer and call\u201d workflow baked into a single transaction, the process can be greatly improved."),(0,r.kt)("p",null,"For this reason, we have a function ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer_call")," which will transfer an NFT to a receiver and also call a method on the receiver's contract all in the same transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts#L66-L125\n")),(0,r.kt)("p",null,"The function will first assert that the caller attached exactly 1 yocto for security purposes. It will then transfer the NFT using ",(0,r.kt)("inlineCode",{parentName:"p"},"internalTransfer")," and start the cross contract call. It will call the method ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver_id"),"'s contract which returns a promise. After the promise finishes executing, the function ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_resolve_transfer")," is called. This is a very common workflow when dealing with cross contract calls. You first initiate the call and wait for it to finish executing. You then invoke a function that resolves the result of the promise and act accordingly."),(0,r.kt)("p",null,"In our case, when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_on_transfer"),", that function will return whether or not you should return the NFT to it's original owner in the form of a boolean. This is logic will be executed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalResolveTransfer")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts#L127-L187\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," returned true, you should send the token back to it's original owner. On the contrary, if false was returned, no extra logic is needed. As for the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_resolve_transfer"),", the standard dictates that the function should return a boolean indicating whether or not the receiver successfully received the token or not."),(0,r.kt)("p",null,"This means that if ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," returned true, you should return false. This is because if the token is being returned to its original owner. The ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver_id")," didn't successfully receive the token in the end. On the contrary, if ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," returned false, you should return true since we don't need to return the token and thus the ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver_id")," successfully owns the token."),(0,r.kt)("p",null,"With that finished, you've now successfully added the necessary logic to allow users to transfer NFTs. It's now time to deploy and do some testing."),(0,r.kt)("h2",{id:"redeploying-contract"},"Redeploying the contract"),(0,r.kt)("p",null,"Using the build script, build and deploy the contract as you did in the previous tutorials:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build && near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n")),(0,r.kt)("p",null,"This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," and hit enter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't completed the previous tutorials and are just following along with this one, simply create an account and login with your CLI using ",(0,r.kt)("inlineCode",{parentName:"p"},"near login"),". You can then export an environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"export NFT_CONTRACT_ID=YOUR_ACCOUNT_ID_HERE"),".")),(0,r.kt)("h2",{id:"testing-changes"},"Testing the new changes"),(0,r.kt)("p",null,"Now that you've deployed a patch fix to the contract, it's time to move onto testing. Using the previous NFT contract where you had minted a token to yourself, you can test the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer")," method. If you transfer the NFT, it should be removed from your account's collectibles displayed in the wallet. In addition, if you query any of the enumeration functions, it should show that you are no longer the owner."),(0,r.kt)("p",null,"Let's test this out by transferring an NFT to the account ",(0,r.kt)("inlineCode",{parentName:"p"},"benjiman.testnet")," and seeing if the NFT is no longer owned by you."),(0,r.kt)("h3",{id:"testing-the-transfer-function"},"Testing the transfer function"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This means that the NFT won't be recoverable unless the account ",(0,r.kt)("inlineCode",{parentName:"p"},"benjiman.testnet")," transfers it back to you. If you don't want your NFT lost, make a new account and transfer the token to that account instead.")),(0,r.kt)("p",null,"If you run the following command, it will transfer the token ",(0,r.kt)("inlineCode",{parentName:"p"},'"token-1"')," to the account ",(0,r.kt)("inlineCode",{parentName:"p"},"benjiman.testnet")," with the memo ",(0,r.kt)("inlineCode",{parentName:"p"},'"Go Team :)"'),". Take note that you're also attaching exactly 1 yoctoNEAR by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--depositYocto")," flag. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you used a different token ID in the previous tutorials, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"token-1")," with your token ID.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call $NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "token-1", "memo": "Go Team :)"}\' --accountId $NFT_CONTRACT_ID --depositYocto 1\n')),(0,r.kt)("p",null,"If you now query for all the tokens owned by your account, that token should be missing. Similarly, if you query for the list of tokens owned by ",(0,r.kt)("inlineCode",{parentName:"p"},"benjiman.testnet"),", that account should now own your NFT."),(0,r.kt)("h3",{id:"testing-the-transfer-call-function"},"Testing the transfer call function"),(0,r.kt)("p",null,"Now that you've tested the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer")," function, it's time to test the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer_call")," function. If you try to transfer an NFT to a receiver that does ",(0,r.kt)("strong",{parentName:"p"},"not")," implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," function, the contract will panic and the NFT will ",(0,r.kt)("strong",{parentName:"p"},"not")," be transferred. Let's test this functionality below."),(0,r.kt)("p",null,"First mint a new NFT that will be used to test the transfer call functionality."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call $NFT_CONTRACT_ID nft_mint \'{"token_id": "token-2", "metadata": {"title": "NFT Tutorial Token", "description": "Testing the transfer call function", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$NFT_CONTRACT_ID\'"}\' --accountId $NFT_CONTRACT_ID --amount 0.1\n')),(0,r.kt)("p",null,"Now that you've minted the token, you can try to transfer the NFT to the account ",(0,r.kt)("inlineCode",{parentName:"p"},"no-contract.testnet")," which as the name suggests, doesn't have a contract. This means that the receiver doesn't implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," function and the NFT should remain yours after the transaction is complete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call $NFT_CONTRACT_ID nft_transfer_call \'{"receiver_id": "no-contract.testnet", "token_id": "token-2", "msg": "foo"}\' --accountId $NFT_CONTRACT_ID --depositYocto 1 --gas 200000000000000\n')),(0,r.kt)("p",null,"If you query for your tokens, you should still have ",(0,r.kt)("inlineCode",{parentName:"p"},"token-2")," and at this point, you're finished!"),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, you learned how to expand an NFT contract past the minting functionality and you added ways for users to transfer NFTs. You ",(0,r.kt)("a",{parentName:"p",href:"#introduction"},"broke down")," the problem into smaller, more digestible subtasks and took that information and implemented both the ",(0,r.kt)("a",{parentName:"p",href:"#transfer-function"},"NFT transfer")," and ",(0,r.kt)("a",{parentName:"p",href:"#transfer-call-function"},"NFT transfer call")," functions. In addition, you deployed another ",(0,r.kt)("a",{parentName:"p",href:"#redeploying-contract"},"patch fix")," to your smart contract and ",(0,r.kt)("a",{parentName:"p",href:"#testing-changes"},"tested")," the transfer functionality."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/approvals"},"next tutorial"),", you'll learn about the approval management system and how you can approve others to transfer tokens on your behalf."))}d.isMDXComponent=!0}}]);