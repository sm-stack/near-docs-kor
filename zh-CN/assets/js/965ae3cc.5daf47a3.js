"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4420],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),h=c(n),m=o,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(p,r(r({ref:e},d),{},{components:n})):a.createElement(p,r({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31760:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"minting",title:"Minting",sidebar_label:"Minting"},s=void 0,c={unversionedId:"tutorials/nfts/js/minting",id:"tutorials/nfts/js/minting",title:"Minting",description:"This is the first of many tutorials in a series where you'll be creating a complete NFT smart contract from scratch that conforms with all the NEAR NFT standards. Today you'll learn how to create the logic needed to mint NFTs and have them show up in your NEAR wallet. You will be modifying a bare-bones skeleton smart contract by filling in the necessary code snippets needed to add minting functionalities.",source:"@site/../docs/3.tutorials/nfts/js/2-minting.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/minting",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/js/minting",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/2-minting.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",sidebarPosition:2,frontMatter:{id:"minting",title:"Minting",sidebar_label:"Minting"},sidebar:"tutorials",previous:{title:"Contract Architecture",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/js/skeleton"},next:{title:"Upgrade a Contract",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/js/upgrade-contract"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the skeleton contract",id:"what-does-minting-mean",level:2},{value:"Storing information on the contract",id:"storing-information",level:3},{value:"Constructor Function",id:"constructor-function",level:4},{value:"Metadata and token information",id:"metadata-and-token-info",level:3},{value:"Function for querying contract metadata",id:"function-for-querying-contract-metadata",level:4},{value:"Minting Logic",id:"minting-logic",level:3},{value:"Querying for token information",id:"querying-for-token-information",level:3},{value:"Interacting with the contract on-chain",id:"interacting-with-the-contract-on-chain",level:2},{value:"Deploying the contract",id:"deploy-the-contract",level:3},{value:"Initializing the contract",id:"initialize-contract",level:3},{value:"Viewing the contract&#39;s metadata",id:"viewing-the-contracts-metadata",level:3},{value:"Minting our first NFT",id:"minting-our-first-nft",level:3},{value:"Viewing information about the NFT",id:"viewing-information-about-the-nft",level:3},{value:"Viewing your NFTs in the wallet",id:"viewing-your-nfts-in-the-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Next Steps",id:"next-steps",level:2}],h={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the first of many tutorials in a series where you'll be creating a complete NFT smart contract from scratch that conforms with all the NEAR ",(0,i.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/"},"NFT standards"),". Today you'll learn how to create the logic needed to mint NFTs and have them show up in your NEAR wallet. You will be modifying a bare-bones ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/skeleton"},"skeleton smart contract")," by filling in the necessary code snippets needed to add minting functionalities."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The JS-SDK is currently in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,i.kt)("inlineCode",{parentName:"a"},"Alpha"))),". ")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"To get started, switch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"1.skeleton")," branch in our repo. If you haven't cloned the repository, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/skeleton"},"Contract Architecture")," to get started."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git checkout 1.skeleton\n")),(0,i.kt)("p",null,"If you wish to see the finished code for the minting portion of the tutorial, that can be found on the ",(0,i.kt)("inlineCode",{parentName:"p"},"2.minting")," branch."),(0,i.kt)("h2",{id:"what-does-minting-mean"},"Modifications to the skeleton contract"),(0,i.kt)("p",null,"In order to implement the logic needed for minting, we should break it up into smaller tasks and handle those one-by-one. Let's step back and think about the best way to do this by asking ourselves a simple question: what does it mean to mint an NFT?"),(0,i.kt)("p",null,"To mint a non-fungible token, in the most simple way possible, a contract needs to be able to associate a token with an owner on the blockchain. This means you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A way to keep track of tokens and other information on the contract."),(0,i.kt)("li",{parentName:"ul"},"A way to store information for each token such as ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata")," (more on that later)."),(0,i.kt)("li",{parentName:"ul"},"A way to link a token with an owner.")),(0,i.kt)("p",null,"That's it! We've now broken down the larger problem into some smaller, less daunting, subtasks. Let's start by tackling the first and work our way through the rest."),(0,i.kt)("h3",{id:"storing-information"},"Storing information on the contract"),(0,i.kt)("p",null,"Start by navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"nft-contract/src/index.ts")," and filling in some of the code blocks.\nYou need to be able to store important information on the contract such as the list of tokens that an account has."),(0,i.kt)("p",null,"The first thing to do is add the information to the contract class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/index.ts#L16-L22\n")),(0,i.kt)("p",null,"This allows you to get the information stored in these data structures from anywhere in the contract. The code above has created 3 token specific storages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tokensPerOwner"),": allows you to keep track of the tokens owned by any account. It will map the account address to a set of token ID strings owned by that account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tokensById"),": returns all the information about a specific token. It will map a token ID string to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Token")," object. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tokenMetadataById"),": returns just the metadata for a specific token. It wil map a token ID string to a ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenMetadata")," object.")),(0,i.kt)("p",null,"In addition, you'll keep track of the owner of the contract as well as the metadata for the contract."),(0,i.kt)("h4",{id:"constructor-function"},"Constructor Function"),(0,i.kt)("p",null,"Next, you'll add the logic to the constructor function. This function needs to be invoked when you first deploy the contract. It will initialize all the contract's fields that you've defined above with default values.\nWe've added the ",(0,i.kt)("inlineCode",{parentName:"p"},"ownerId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," fields as parameters to the function because those are the only ones that can be customized."),(0,i.kt)("p",null,"This function will default all the collections to be empty and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," equal to what you pass in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/index.ts#L24-L43\n")),(0,i.kt)("p",null,"More often than not when doing development, you'll need to deploy contracts several times. You can imagine that it might get tedious to have to pass in metadata every single time you want to initialize the contract. For this reason, the metadata has been defaulted with some initial data if it wasn't passed in by the user."),(0,i.kt)("h3",{id:"metadata-and-token-info"},"Metadata and token information"),(0,i.kt)("p",null,"Now that you've defined what information to store on the contract itself and you've defined some ways to initialize the contract, you need to define what information should go in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Token"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenMetadata"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTContractMetadata")," data types."),(0,i.kt)("p",null,"Let's switch over to the ",(0,i.kt)("inlineCode",{parentName:"p"},"nft-contract/src/metadata.ts")," file as this is where that information will go. If you look at the ",(0,i.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Metadata.html"},"standards for metadata"),", you'll find all the necessary information that you need to store for both ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenMetadata")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTContractMetadata"),". Simply fill in the following code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts#L12-L104\n")),(0,i.kt)("p",null,"This now leaves you with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Token")," struct and something called a ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonToken"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Token")," struct will hold all the information directly related to the token excluding the metadata. The metadata, if you remember, is stored in a map on the contract in a data structured called ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenMetadataById"),". This allows you to quickly get the metadata for any token by simply passing in the token's ID."),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"Token")," struct, you'll just keep track of the owner for now."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts#L106-L117\n")),(0,i.kt)("p",null,"The purpose of the ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonToken")," is to hold all the information for an NFT that you want to send back as JSON whenever someone does a view call. This means you'll want to store the owner, token ID, and metadata."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts#L119-L141\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Some of you might be thinking ",(0,i.kt)("em",{parentName:"p"},"\"how come we don't just store all the information in the ",(0,i.kt)("inlineCode",{parentName:"em"},"Token"),' struct?"'),".\nThe reason behind this is that it's actually more efficient to construct the JSON token on the fly only when you need it rather than storing all the information in the token struct.\nIn addition, some operations might only need the metadata for a token and so having the metadata in a separate data structure is more optimal.")),(0,i.kt)("h4",{id:"function-for-querying-contract-metadata"},"Function for querying contract metadata"),(0,i.kt)("p",null,"Now that you've defined some of the types that were used in the previous section, let's move on and create the first view function ",(0,i.kt)("inlineCode",{parentName:"p"},"internalNftMetadata"),". This will allow users to query for the contract's metadata as per the ",(0,i.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Metadata.html"},"metadata standard"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts#L143-L150\n")),(0,i.kt)("p",null,"This function will get the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," object from the contract which is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTContractMetadata")," and will return it."),(0,i.kt)("p",null,"Just like that, you've completed the first two tasks and are ready to move onto last part of the tutorial."),(0,i.kt)("h3",{id:"minting-logic"},"Minting Logic"),(0,i.kt)("p",null,"Now that all the information and types are defined, let's start brainstorming how the minting logic will play out. In the end, you need to link a ",(0,i.kt)("inlineCode",{parentName:"p"},"Token")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenId")," to a specific owner. Let's look back at a couple data structures that might be useful:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"//keeps track of all the token IDs for a given account\ntokensPerOwner: LookupMap<AccountId, UnorderedSet<TokenId>>;\n\n//keeps track of the token struct for a given token ID\ntokensById: LookupMap<TokenId, Token>;\n\n//keeps track of the token metadata for a given token ID\ntokenMetadataById: UnorderedMap<TokenId, TokenMetadata>;\n")),(0,i.kt)("p",null,"Looking at these data structures, you could do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the token ID into the set of tokens that the receiver owns. This will be done on the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokensPerOwner")," field."),(0,i.kt)("li",{parentName:"ul"},"Create a token object and map the token ID to that token object in the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokensById")," field."),(0,i.kt)("li",{parentName:"ul"},"Map the token ID to it's metadata using the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenMetadataById"),".")),(0,i.kt)("p",null,"With those steps outlined, it's important to take into consideration the storage costs of minting NFTs. Since you're adding bytes to the contract by creating entries in the data structures, the contract needs to cover the storage costs. If you just made it so any user could go and mint an NFT for free, that system could easily be abused and users could essentially \"drain\" the contract of all it's funds by minting thousands of NFTs. For this reason, you'll make it so that users need to attach a deposit to the call to cover the cost of storage. You'll measure the initial storage usage before anything was added and you'll measure the final storage usage after all the logic is finished. Then you'll make sure that the user has attached enough $NEAR to cover that cost and refund them if they've attached too much."),(0,i.kt)("p",null,"Now that you've got a good understanding of how everything should play out, let's fill in the necessary code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/mint.ts#L7-L44\n")),(0,i.kt)("p",null,"You'll notice that we're using some internal methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"refundDeposit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"internalAddTokenToOwner"),". We've described the function of ",(0,i.kt)("inlineCode",{parentName:"p"},"refundDeposit")," and as for ",(0,i.kt)("inlineCode",{parentName:"p"},"internalAddTokenToOwner"),", this will add a token to the set of tokens an account owns for the contract's ",(0,i.kt)("inlineCode",{parentName:"p"},"tokensPerOwner")," data structure. You can create these functions in a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"internal.ts"),". Go ahead and create the file. Your new contract architecture should look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nft-contract\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 approval.ts\n    \u251c\u2500\u2500 enumeration.ts\n    \u251c\u2500\u2500 internal.ts\n    \u251c\u2500\u2500 lib.ts\n    \u251c\u2500\u2500 metadata.ts\n    \u251c\u2500\u2500 mint.ts\n    \u251c\u2500\u2500 nft_core.ts\n    \u2514\u2500\u2500 royalty.ts\n")),(0,i.kt)("p",null,"Add the following to your newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"internal.ts")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/internal.ts#L1-L54\n")),(0,i.kt)("p",null,"At this point, the core logic is all in place so that you can mint NFTs. You can use the function ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_mint")," which takes the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"token_id"),": the ID of the token you're minting (as a string)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"metadata"),": the metadata for the token that you're minting (of type ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenMetadata")," which is found in the ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata.ts")," file)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"receiver_id"),": specifies who the owner of the token will be.")),(0,i.kt)("p",null,"Behind the scenes, the function will:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Call the internal mint function."),(0,i.kt)("li",{parentName:"ol"},"Calculate the initial storage before adding anything to the contract"),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Token")," object with the owner ID"),(0,i.kt)("li",{parentName:"ol"},"Link the token ID to the newly created token object by inserting them into the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokensById")," field."),(0,i.kt)("li",{parentName:"ol"},"Link the token ID to the passed in metadata by inserting them into the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenMetadataById")," field."),(0,i.kt)("li",{parentName:"ol"},"Add the token ID to the list of tokens that the owner owns by calling the ",(0,i.kt)("inlineCode",{parentName:"li"},"internalAddTokenToOwner")," function."),(0,i.kt)("li",{parentName:"ol"},"Calculate the final and net storage to make sure that the user has attached enough NEAR to the call in order to cover those costs.")),(0,i.kt)("h3",{id:"querying-for-token-information"},"Querying for token information"),(0,i.kt)("p",null,"If you were to go ahead and deploy this contract, initialize it, and mint an NFT, you would have no way of knowing or querying for the information about the token you just minted. Let's quickly add a way to query for the information of a specific NFT. You'll move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"nft-contract/src/nft_core.ts")," file and edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"internalNftToken")," function."),(0,i.kt)("p",null,"It will take a token ID as a parameter and return the information for that token. The ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonToken")," contains the token ID, the owner ID, and the token's metadata."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/nft_core.ts#L10-L35\n")),(0,i.kt)("p",null,"With that finished, it's finally time to build and deploy the contract so you can mint your first NFT."),(0,i.kt)("h2",{id:"interacting-with-the-contract-on-chain"},"Interacting with the contract on-chain"),(0,i.kt)("p",null,"Now that the logic for minting is complete and you've added a way to query for information about specific tokens, it's time to build and deploy your contract to the blockchain."),(0,i.kt)("h3",{id:"deploy-the-contract"},"Deploying the contract"),(0,i.kt)("p",null,"We've included a very simple way to build the smart contracts throughout this tutorial using ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),". The following command will build the contract and copy over the ",(0,i.kt)("inlineCode",{parentName:"p"},".wasm")," file to a folder ",(0,i.kt)("inlineCode",{parentName:"p"},"build/nft.wasm"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build:nft\n")),(0,i.kt)("p",null,"For deployment, you will need a NEAR account with the keys stored on your local machine. Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/"},"NEAR wallet")," site and create an account."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please ensure that you deploy the contract to an account with no pre-existing contracts. It's easiest to simply create a new account or create a sub-account for this tutorial.")),(0,i.kt)("p",null,"Log in to your newly created account with ",(0,i.kt)("inlineCode",{parentName:"p"},"near-cli")," by running the following command in your terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"near login\n")),(0,i.kt)("p",null,"To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_ACCOUNT_NAME")," with the account name you just logged in with including the ",(0,i.kt)("inlineCode",{parentName:"p"},".testnet")," portion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export NFT_CONTRACT_ID="YOUR_ACCOUNT_NAME"\n')),(0,i.kt)("p",null,"Test that the environment variable is set correctly by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo $NFT_CONTRACT_ID\n")),(0,i.kt)("p",null,"Verify that the correct account ID is printed in the terminal. If everything looks correct you can now deploy your contract.\nIn the root of your NFT project run the following command to deploy your smart contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n")),(0,i.kt)("p",null,"At this point, the contract should have been deployed to your account and you're ready to move onto testing and minting NFTs."),(0,i.kt)("h3",{id:"initialize-contract"},"Initializing the contract"),(0,i.kt)("p",null,"The very first thing you need to do once the contract has been deployed is to initialize it. For simplicity, let's call the default metadata initialization function you wrote earlier so that you don't have to type the metadata manually in the CLI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"near call $NFT_CONTRACT_ID init '{\"owner_id\": \"'$NFT_CONTRACT_ID'\"}' --accountId $NFT_CONTRACT_ID\n")),(0,i.kt)("p",null,"You've just initialized the contract with some default metadata and set your account ID as the owner. At this point, you're ready to call your first view function."),(0,i.kt)("h3",{id:"viewing-the-contracts-metadata"},"Viewing the contract's metadata"),(0,i.kt)("p",null,"Now that the contract has been initialized, you can call some of the functions you wrote earlier. More specifically, let's test out the function that returns the contract's metadata:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"near view $NFT_CONTRACT_ID nft_metadata\n")),(0,i.kt)("p",null,"This should return an output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"{ spec: 'nft-1.0.0', name: 'NFT Tutorial Contract', symbol: 'GOTEAM' }\n")),(0,i.kt)("p",null,"At this point, you're ready to move on and mint your first NFT."),(0,i.kt)("h3",{id:"minting-our-first-nft"},"Minting our first NFT"),(0,i.kt)("p",null,"Let's now call the minting function that you've created. This requires a ",(0,i.kt)("inlineCode",{parentName:"p"},"token_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),". If you look back at the ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenMetadata")," struct you created earlier, there are many fields that could potentially be stored on-chain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts#L91-L102\n")),(0,i.kt)("p",null,"Let's mint an NFT with a title, description, and media to start. The media field can be any URL pointing to a media file. We've got an excellent GIF to mint but if you'd like to mint a custom NFT, simply replace our media link with one of your choosing. If you run the following command, it will mint an NFT with the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"token_id"),': "token-1"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"metadata"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"title"),': "My Non Fungible Team Token"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"description"),': "The Team Most Certainly Goes :)"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"media"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"receiver_id"),": \"'$NFT_CONTRACT_ID'\"")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'near call $NFT_CONTRACT_ID nft_mint \'{"token_id": "token-1", "metadata": {"title": "My Non Fungible Team Token", "description": "The Team Most Certainly Goes :)", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$NFT_CONTRACT_ID\'"}\' --accountId $NFT_CONTRACT_ID --amount 0.1\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," flag is specifying how much NEAR to attach to the call. Since you need to pay for storage, 0.1 NEAR is attached and you'll get refunded any excess that is unused at the end.")),(0,i.kt)("h3",{id:"viewing-information-about-the-nft"},"Viewing information about the NFT"),(0,i.kt)("p",null,"Now that the NFT has been minted, you can check and see if everything went correctly by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_token")," function.\nThis should return a ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonToken")," which should contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"token_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"owner_id"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'near view $NFT_CONTRACT_ID nft_token \'{"token_id": "token-1"}\'\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example response: "),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  token_id: 'token-1',\n  owner_id: 'goteam.examples.testnet',\n  metadata: {\n    title: 'My Non Fungible Team Token',\n    description: 'The Team Most Certainly Goes :)',\n    media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif'\n  }\n}\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Go team!")," You've now verified that everything works correctly and it's time to view your freshly minted NFT in the NEAR wallet's collectibles tab!"),(0,i.kt)("h2",{id:"viewing-your-nfts-in-the-wallet"},"Viewing your NFTs in the wallet"),(0,i.kt)("p",null,"If you navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/?tab=collectibles"},"collectibles tab")," in the NEAR wallet, this should list all the NFTs that you own. Currently, It should be empty."),(0,i.kt)("p",null,"We've got a problem. The wallet correctly picked up that you minted an NFT, however, the contract doesn't implement the specific view function that is being called. Behind the scenes, the wallet is trying to call ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_tokens_for_owner")," to get a list of all the NFTs owned by your account on the contract. The only function you've created, however, is the ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_token")," function. It wouldn't be very efficient for the wallet to call ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_token")," for every single NFT that a user has to get information and so they try to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_tokens_for_owner")," function instead."),(0,i.kt)("p",null,"In the next tutorial, you'll learn about how to deploy a patch fix to a pre-existing contract so that you can view the NFT in the wallet."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this tutorial, you went through the basics of setting up and understand the logic behind minting NFTs on the blockchain using a skeleton contract."),(0,i.kt)("p",null,"You first looked at ",(0,i.kt)("a",{parentName:"p",href:"#what-does-minting-mean"},"what it means")," to mint NFTs and how to break down the problem into more feasible chunks. You then started modifying the skeleton contract chunk by chunk starting with solving the problem of ",(0,i.kt)("a",{parentName:"p",href:"#storing-information"},"storing information / state")," on the contract. You then looked at what to put in the ",(0,i.kt)("a",{parentName:"p",href:"#metadata-and-token-info"},"metadata and token information"),". Finally, you looked at the logic necessary for ",(0,i.kt)("a",{parentName:"p",href:"#minting-logic"},"minting NFTs"),"."),(0,i.kt)("p",null,"After the contract was written, it was time to deploy to the blockchain. You ",(0,i.kt)("a",{parentName:"p",href:"#deploy-the-contract"},"deployed the contract")," and ",(0,i.kt)("a",{parentName:"p",href:"#initialize-contract"},"initialized it"),". Finally, you ",(0,i.kt)("a",{parentName:"p",href:"#minting-our-first-nft"},"minted your very first NFT")," and saw that some changes are needed before you can view it in the wallet."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/upgrade-contract"},"next tutorial"),", you'll find out how to deploy a patch fix and what that means so that you can view your NFTs in the wallet."))}m.isMDXComponent=!0}}]);