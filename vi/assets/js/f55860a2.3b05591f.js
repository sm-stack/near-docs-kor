"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"events",title:"Events",sidebar_label:"Events"},s=void 0,d={unversionedId:"tutorials/nfts/js/events",id:"tutorials/nfts/js/events",title:"Events",description:"In this tutorial, you'll learn about the events standard and how to implement it in your smart contract.",source:"@site/../docs/3.tutorials/nfts/js/7-events.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/events",permalink:"/near-docs-kor/vi/tutorials/nfts/js/events",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/7-events.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:7,frontMatter:{id:"events",title:"Events",sidebar_label:"Events"},sidebar:"tutorials",previous:{title:"Royalty",permalink:"/near-docs-kor/vi/tutorials/nfts/js/royalty"},next:{title:"Marketplace",permalink:"/near-docs-kor/vi/tutorials/nfts/js/marketplace"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding the use case",id:"understanding-the-use-case",level:2},{value:"The problem",id:"the-problem",level:3},{value:"The solution",id:"the-solution",level:3},{value:"Examples",id:"examples",level:3},{value:"Scenario A - simple mint",id:"scenario-a---simple-mint",level:4},{value:"Scenario B - batch mint",id:"scenario-b---batch-mint",level:4},{value:"Scenario C - transfer NFTs",id:"scenario-c---transfer-nfts",level:4},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Logging minted tokens",id:"logging-minted-tokens",level:3},{value:"Logging transfers",id:"logging-transfers",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization and minting",id:"initialization-and-minting",level:3},{value:"Transferring",id:"transferring",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, you'll learn about the ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Event.html"},"events standard")," and how to implement it in your smart contract."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The JS-SDK is currently in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,r.kt)("inlineCode",{parentName:"a"},"Alpha"))),". ")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"To get started, either switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"6.royalty")," branch from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial/"},"GitHub repository"),", or continue your work from the previous tutorials."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout 6.royalty\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you wish to see the finished code for this ",(0,r.kt)("em",{parentName:"p"},"Events")," tutorial, you can find it on the ",(0,r.kt)("inlineCode",{parentName:"p"},"7.events")," branch.")),(0,r.kt)("h2",{id:"understanding-the-use-case"},"Understanding the use case"),(0,r.kt)("p",null,"Have you ever wondered how the wallet knows which NFTs you own and how it can display them in the ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/?tab=collectibles"},"collectibles tab"),"? Originally, an ",(0,r.kt)("a",{parentName:"p",href:"/tools/indexer-for-explorer"},"indexer")," was used and it listened for any functions starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_")," on your account. These contracts were then flagged on your account as likely NFT contracts. "),(0,r.kt)("p",null,"When you navigated to your collectibles tab, the wallet would then query all those contracts for the list of NFTs you owned using the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_tokens_for_owner")," function you saw in the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/enumeration"},"enumeration tutorial"),"."),(0,r.kt)("h3",{id:"the-problem"},"The problem"),(0,r.kt)("p",null,"This method of flagging contracts was not reliable as each NFT-driven application might have its own way of minting or transferring NFTs. In addition, it's common for apps to transfer or mint many tokens at a time using batch functions. "),(0,r.kt)("h3",{id:"the-solution"},"The solution"),(0,r.kt)("p",null,"A standard was introduced so that smart contracts could emit an event anytime NFTs were transferred, minted, or burnt. This event was in the form of a log. No matter how a contract implemented the functionality, an indexer could now listen for those standardized logs."),(0,r.kt)("p",null,"As per the standard, you need to implement a logging functionality that gets fired when NFTs are transferred or minted. In this case, the contract doesn't support burning so you don't need to worry about that for now."),(0,r.kt)("p",null,"It's important to note the standard dictates that the log should begin with ",(0,r.kt)("inlineCode",{parentName:"p"},'"EVENT_JSON:"'),". The structure of your log should, however, always contain the 3 following things: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"standard"),": the current name of the standard (e.g. nep171)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"version"),": the version of the standard you're using (e.g. 1.0.0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"event"),": a list of events you're emitting.")),(0,r.kt)("p",null,"The event interface differs based on whether you're recording transfers or mints. The interface for both events is outlined below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transfer events"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Optional")," - ",(0,r.kt)("strong",{parentName:"li"},"authorized_id"),": the account approved to transfer on behalf of the owner."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"old_owner_id"),": the old owner of the NFT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"new_owner_id"),": the new owner that the NFT is being transferred to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"token_ids"),": a list of NFTs being transferred."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Optional")," - ",(0,r.kt)("strong",{parentName:"li"},"memo"),": an optional message to include with the event.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minting events"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"owner_id"),": the owner that the NFT is being minted to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"token_ids"),": a list of NFTs being transferred."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Optional")," - ",(0,r.kt)("strong",{parentName:"li"},"memo"),": an optional message to include with the event.")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"In order to solidify your understanding of the standard, let's walk through three scenarios and see what the logs should look like."),(0,r.kt)("h4",{id:"scenario-a---simple-mint"},"Scenario A - simple mint"),(0,r.kt)("p",null,"In this scenario, Benji wants to mint an NFT to Mike with a token ID ",(0,r.kt)("inlineCode",{parentName:"p"},'"team-token"')," and he doesn't include a message. The log should look as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token"]}\n  ]\n}\n')),(0,r.kt)("h4",{id:"scenario-b---batch-mint"},"Scenario B - batch mint"),(0,r.kt)("p",null,"In this scenario, Benji wants to perform a batch mint. He will mint an NFT to Mike, Damian, Josh, and Dorian. Dorian, however, will get two NFTs. Each token ID will be ",(0,r.kt)("inlineCode",{parentName:"p"},'"team-token"')," followed by an incrementing number. The log is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token0"]},\n    {"owner_id": "damian.testnet", "token_ids": ["team-token1"]},\n    {"owner_id": "josh.testnet", "token_ids": ["team-token2"]}\n    {"owner_id": "dorian.testnet", "token_ids": ["team-token3", "team-token4"]},\n  ]\n}\n')),(0,r.kt)("h4",{id:"scenario-c---transfer-nfts"},"Scenario C - transfer NFTs"),(0,r.kt)("p",null,"In this scenario, Mike is transferring both his team tokens to Josh. The log should look as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_transfer",\n  "data": [\n    {"old_owner_id": "mike.testnet", "new_owner_id": "josh.testnet", "token_ids": ["team-token", "team-token0"], "memo": "Go Team!"}\n  ]\n}\n')),(0,r.kt)("h2",{id:"modifications-to-the-contract"},"Modifications to the contract"),(0,r.kt)("p",null,"At this point, you should have a good understanding of what the end goal should be so let's get to work!"),(0,r.kt)("h3",{id:"logging-minted-tokens"},"Logging minted tokens"),(0,r.kt)("p",null,"Since the contract will only be minting tokens in one place, it's trivial where you should place the log. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-contract/src/mint.ts")," file and navigate to the bottom of the file. This is where you'll construct the log for minting. Anytime someone successfully mints an NFT, it will now correctly emit a log."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Construct the mint log as per the events standard.\nlet nftMintLog = {\n    // Standard name ("nep171").\n    standard: NFT_STANDARD_NAME,\n    // Version of the standard ("nft-1.0.0").\n    version: NFT_METADATA_SPEC,\n    // The data related with the event stored in a vector.\n    event: "nft_mint",\n    data: [\n        {\n            // Owner of the token.\n            owner_id: token.owner_id,\n            // Vector of token IDs that were minted.\n            token_ids: [tokenId],\n        }\n    ]\n}\n\n// Log the json.\nnear.log(`EVENT_JSON:${JSON.stringify(nftMintLog)}`);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/7.events/src/nft-contract/mint.ts#L7-L85\n")),(0,r.kt)("h3",{id:"logging-transfers"},"Logging transfers"),(0,r.kt)("p",null,"Let's open the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-contract/src/internal.ts")," file and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalTransfer")," function. This is the location where you'll build your transfer logs. Whenever an NFT is transferred, this function is called and so you'll correctly be logging the transfers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Construct the transfer log as per the events standard.\nlet nftTransferLog = {\n    // Standard name ("nep171").\n    standard: NFT_STANDARD_NAME,\n    // Version of the standard ("nft-1.0.0").\n    version: NFT_METADATA_SPEC,\n    // The data related with the event stored in a vector.\n    event: "nft_transfer",\n    data: [\n        {\n            // The optional authorized account ID to transfer the token on behalf of the old owner.\n            authorized_id: authorizedId,\n            // The old owner\'s account ID.\n            old_owner_id: token.owner_id,\n            // The account ID of the new owner of the token.\n            new_owner_id: receiverId,\n            // A vector containing the token IDs as strings.\n            token_ids: [tokenId],\n            // An optional memo to include.\n            memo,\n        }\n    ]\n}\n\n// Log the serialized json.\nnear.log(`EVENT_JSON:${JSON.stringify(nftTransferLog)}`);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/7.events/src/nft-contract/internal.ts#L113-L205\n")),(0,r.kt)("p",null,"This solution, unfortunately, has an edge case which will break things. If an NFT is transferred via the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer_call")," function, there's a chance that the transfer will be reverted if the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Taking a look at the logic for ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer_call"),", you can see why this is a problem."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer_call")," is invoked, it will: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"internalTransfer")," to perform the actual transfer logic."),(0,r.kt)("li",{parentName:"ul"},"Initiate a cross-contract call and invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"nft_on_transfer")," function."),(0,r.kt)("li",{parentName:"ul"},"Resolve the promise and perform logic in ",(0,r.kt)("inlineCode",{parentName:"li"},"internalResolveTransfer"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This will either return true meaning the transfer went fine or it will revert the transfer and return false.")))),(0,r.kt)("p",null,"If you only place the log in the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalTransfer")," function, the log will be emitted and the indexer will think that the NFT was transferred. If the transfer is reverted during ",(0,r.kt)("inlineCode",{parentName:"p"},"internalResolveTransfer"),", however, that event should ",(0,r.kt)("strong",{parentName:"p"},"also")," be emitted. Anywhere that an NFT ",(0,r.kt)("strong",{parentName:"p"},"could")," be transferred, we should add logs. Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalResolveTransfer")," with the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/7.events/src/nft-contract/nft_core.ts#L138-L242\n")),(0,r.kt)("p",null,"With that finished, you've successfully implemented the events standard and it's time to start testing."),(0,r.kt)("h2",{id:"redeploying-contract"},"Deploying the contract"),(0,r.kt)("p",null,"For the purpose of readability and ease of development, instead of redeploying the contract to the same account, let's create a sub-account and deploy to that instead. You could have deployed to the same account as none of the changes you implemented in this tutorial would have caused errors."),(0,r.kt)("h3",{id:"creating-a-sub-account"},"Creating a sub-account"),(0,r.kt)("p",null,"Run the following command to create a sub-account ",(0,r.kt)("inlineCode",{parentName:"p"},"events")," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near create-account events.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n")),(0,r.kt)("p",null,"Next, you'll want to export an environment variable for ease of development:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export EVENTS_NFT_CONTRACT_ID=events.$NFT_CONTRACT_ID\n")),(0,r.kt)("p",null,"Using the build script, build the deploy the contract as you did in the previous tutorials:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build && near deploy --wasmFile build/nft.wasm --accountId $EVENTS_NFT_CONTRACT_ID\n")),(0,r.kt)("h3",{id:"initialization-and-minting"},"Initialization and minting"),(0,r.kt)("p",null,"Since this is a new contract, you'll need to initialize and mint a token. Use the following command to initialize the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near call $EVENTS_NFT_CONTRACT_ID init '{\"owner_id\": \"'$EVENTS_NFT_CONTRACT_ID'\"}' --accountId $EVENTS_NFT_CONTRACT_ID\n")),(0,r.kt)("p",null,"Next, you'll need to mint a token. By running this command, you'll mint a token with a token ID ",(0,r.kt)("inlineCode",{parentName:"p"},'"events-token"')," and the receiver will be your new account. In addition, you're passing in a map with two accounts that will get perpetual royalties whenever your token is sold."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call $EVENTS_NFT_CONTRACT_ID nft_mint \'{"token_id": "events-token", "metadata": {"title": "Events Token", "description": "testing out the new events extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$EVENTS_NFT_CONTRACT_ID\'"}\' --accountId $EVENTS_NFT_CONTRACT_ID --amount 0.1\n')),(0,r.kt)("p",null,"You can check to see if everything went through properly by looking at the output in your CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Doing account.functionCall()\nReceipts: F4oxNfv54cqwUwLUJ7h74H1iE66Y3H7QDfZMmGENwSxd, BJxKNFRuLDdbhbGeLA3UBSbL8UicU7oqHsWGink5WX7S\n    Log [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_mint","data":[{"owner_id":"events.goteam.examples.testnet","token_ids":["events-token"]}]}\nTransaction Id 4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\n\'\'\n')),(0,r.kt)("p",null,"You can see that the event was properly logged!"),(0,r.kt)("h3",{id:"transferring"},"Transferring"),(0,r.kt)("p",null,"You can now test if your transfer log works as expected by sending ",(0,r.kt)("inlineCode",{parentName:"p"},"benjiman.testnet")," your NFT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call $EVENTS_NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "events-token", "memo": "Go Team :)", "approval_id": 0}\' --accountId $EVENTS_NFT_CONTRACT_ID --depositYocto 1\n')),(0,r.kt)("p",null,"This should return an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Doing account.functionCall()\nReceipts: EoqBxrpv9Dgb8KqK4FdeREawVVLWepEUR15KPNuZ4fGD, HZ4xQpbgc8EfU3PiV72LvfXb2f3dVC1n9aVTbQds9zfR\n    Log [events.goteam.examples.testnet]: Memo: Go Team :)\n    Log [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_transfer","data":[{"authorized_id":"events.goteam.examples.testnet","old_owner_id":"events.goteam.examples.testnet","new_owner_id":"benjiman.testnet","token_ids":["events-token"],"memo":"Go Team :)"}]}\nTransaction Id 4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\n\'\'\n')),(0,r.kt)("p",null,"Hurray! At this point, your NFT contract is fully complete and the events standard has been implemented."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Today you went through the ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Event.html"},"events standard")," and implemented the necessary logic in your smart contract. You created events for ",(0,r.kt)("a",{parentName:"p",href:"#logging-minted-tokens"},"minting")," and ",(0,r.kt)("a",{parentName:"p",href:"#logging-transfers"},"transferring")," NFTs. You then deployed and ",(0,r.kt)("a",{parentName:"p",href:"#initialization-and-minting"},"tested")," your changes by minting and transferring NFTs."),(0,r.kt)("p",null,"In the next tutorial, you'll look at the basics of a marketplace contract and how it was built."))}m.isMDXComponent=!0}}]);