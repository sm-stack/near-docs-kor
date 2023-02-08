"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"minting-nfts",title:"Minting NFTs",sidebar_label:"Minting NFTs"},s=void 0,c={unversionedId:"tutorials/nfts/minting-nfts",id:"tutorials/nfts/minting-nfts",title:"Minting NFTs",description:"In this tutorial you'll learn how to easily create your own NFTs without doing any software development by using a readily-available smart contract and a decentralized storage solution like IPFS.",source:"@site/../docs/3.tutorials/nfts/minting-nfts.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minting-nfts",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/minting-nfts",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/minting-nfts.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"minting-nfts",title:"Minting NFTs",sidebar_label:"Minting NFTs"},sidebar:"tutorials",previous:{title:"Non Fungible Tokens",permalink:"/near-docs-kor/zh-CN/develop/relevant-contracts/nft"},next:{title:"Minting Front-end",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/minting-nft-frontend"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Wallet",id:"wallet",level:2},{value:"IPFS",id:"ipfs",level:2},{value:"Uploading the image",id:"uploading-the-image",level:3},{value:"Steps",id:"steps",level:4},{value:"Non-fungible Token contract",id:"non-fungible-token-contract",level:2},{value:"Clone the NFT repository",id:"clone-the-nft-repository",level:3},{value:"Explore the smart contract",id:"explore-the-smart-contract",level:3},{value:"Contract Struct",id:"contract-struct",level:4},{value:"Minting",id:"minting",level:4},{value:"Building the contract",id:"building-the-contract",level:3},{value:"Testing the contract",id:"testing-the-contract",level:3},{value:"Using the NFT contract",id:"using-the-nft-contract",level:2},{value:"Deploying the contract",id:"deploying-the-contract",level:3},{value:"Minting your NFTs",id:"minting-your-nfts",level:3},{value:"Final remarks",id:"final-remarks",level:2},{value:"Blockcraft - a Practical Extension",id:"blockcraft---a-practical-extension",level:2},{value:"Versioning for this article",id:"versioning-for-this-article",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial you'll learn how to easily create your own NFTs without doing any software development by using a readily-available smart contract and a decentralized storage solution like ",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS"),"."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This article will guide you in setting up an ",(0,o.kt)("a",{parentName:"p",href:"#non-fungible-token-contract"},"NFT smart contract"),", and show you ",(0,o.kt)("a",{parentName:"p",href:"#building-the-contract"},"how to build"),", ",(0,o.kt)("a",{parentName:"p",href:"#testing-the-contract"},"test")," and ",(0,o.kt)("a",{parentName:"p",href:"#deploying-the-contract"},"deploy")," your NFT contract on NEAR.\nOnce the contract is deployed, you'll learn ",(0,o.kt)("a",{parentName:"p",href:"#minting-your-nfts"},"how to mint")," non-fungible tokens from media files ",(0,o.kt)("a",{parentName:"p",href:"#uploading-the-image"},"stored on IPFS")," and view them in your Wallet."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To complete this tutorial successfully, you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/develop/prerequisites"},"Rust toolchain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#wallet"},"A NEAR account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#uploading-the-image"},"nft.storage account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/near-cli#setup"},"NEAR command-line interface")," (",(0,o.kt)("inlineCode",{parentName:"li"},"near-cli"),")")),(0,o.kt)("h2",{id:"wallet"},"Wallet"),(0,o.kt)("p",null,"To store your non-fungible tokens you'll need a ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/"},"NEAR Wallet"),".\nIf you don't have one yet, you can create one easily by following ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/create"},"these instructions"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," for this tutorial we'll use a ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," wallet account. The ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," network is free and there's no need to deposit funds.")),(0,o.kt)("p",null,"Once you have your Wallet account, you can click on the ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/?tab=collectibles"},"Collectibles")," tab where all your NFTs will be listed:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wallet",src:n(98411).Z,width:"2460",height:"1080"})),(0,o.kt)("h2",{id:"ipfs"},"IPFS"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"InterPlanetary File System")," (IPFS) is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices."),(0,o.kt)("h3",{id:"uploading-the-image"},"Uploading the image"),(0,o.kt)("p",null,"To upload the NFT image, we are going to use the free ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/#getting-started"},"NFT Storage")," service\nbuilt specifically for storing off-chain NFT data.\nNFT Storage offers free decentralized storage and bandwidth for NFTs on ",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://filecoin.io/"},"Filecoin"),"."),(0,o.kt)("h4",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/login/"},"Register an account")," and log in to ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/login/"},"nft.storage"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/files/"},"Files")," section, and click on the ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/new-file/"},"Upload")," button."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"nft.storage",src:n(51821).Z,width:"1481",height:"609"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you have uploaded your file, you'll get a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"CID")," for your content, and a URL like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"https://bafyreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," check the ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/api-docs/"},"NFT.Storage Docs")," for information on uploading multiple files and available API endpoints.")),(0,o.kt)("h2",{id:"non-fungible-token-contract"},"Non-fungible Token contract"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/NFT"},"This repository")," includes an example implementation of a ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken"},"non-fungible token")," contract which uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/tree/master/near-contract-standards"},"near-contract-standards")," and simulation tests."),(0,o.kt)("h3",{id:"clone-the-nft-repository"},"Clone the NFT repository"),(0,o.kt)("p",null,"In your terminal run the following command to clone the NFT repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/near-examples/NFT\n")),(0,o.kt)("h3",{id:"explore-the-smart-contract"},"Explore the smart contract"),(0,o.kt)("p",null,"The source code for this contract can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"nft/src/lib.rs"),". This contract contains logic which follows the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken"},"NEP-171 standard")," (NEAR Enhancement Proposal) and the implementation of this standard which can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/near-contract-standards/src/non_fungible_token/core/core_impl.rs"},"here"),"."),(0,o.kt)("p",null,"At first, the code can be a bit overwhelming, but if we only consider the aspects involved with minting, we can break it down into 2 main categories - the contract struct and the minting process."),(0,o.kt)("h4",{id:"contract-struct"},"Contract Struct"),(0,o.kt)("p",null,"The contract keeps track of two pieces of information - ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata"),". For the purpose of this tutorial we will only deal with the ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    tokens: NonFungibleToken,\n    metadata: LazyOption<NFTContractMetadata>,\n}\n")),(0,o.kt)("p",null,"The tokens are of type ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFungibleToken")," which come from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/near-contract-standards/src/non_fungible_token/core/core_impl.rs"},"core standards"),". There are several fields that make up the struct but for the purpose of this tutorial, we'll only be concerned with the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_by_id")," field. This keeps track of the owner for any given token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct NonFungibleToken {\n    // owner of contract\n    pub owner_id: AccountId,\n\n    // keeps track of the owner for any given token ID.\n    pub owner_by_id: TreeMap<TokenId, AccountId>,\n\n    ...\n}\n")),(0,o.kt)("p",null,"Now that we've explored behind the scenes and where the data is being kept, let's move to the minting functionality."),(0,o.kt)("h4",{id:"minting"},"Minting"),(0,o.kt)("p",null,"In order for a token to be minted you will need to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_mint")," function. There are three arguments that are passed to this function:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token_id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"receiver_id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token_metadata"))),(0,o.kt)("p",null,"This function executes ",(0,o.kt)("inlineCode",{parentName:"p"},"self.tokens.mint")," which calls the mint function in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/near-contract-standards/src/non_fungible_token/core/core_impl.rs"},"core standards")," creating a record of the token with the owner being ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver_id"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[payable]\npub fn nft_mint(\n    &mut self,\n    token_id: TokenId,\n    receiver_id: ValidAccountId,\n    token_metadata: TokenMetadata,\n) -> Token {\n    self.tokens.mint(token_id, receiver_id, Some(token_metadata))\n}\n")),(0,o.kt)("p",null,"This creates that record by inserting the token into the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_by_id")," data structure that we mentioned in the previous section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"self.owner_by_id.insert(&token_id, &owner_id);\n")),(0,o.kt)("h3",{id:"building-the-contract"},"Building the contract"),(0,o.kt)("p",null,"To build your contract run the following command in your terminal which builds your contract using Rust's ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/build.sh\n")),(0,o.kt)("p",null,"This will generate WASM binaries into your ",(0,o.kt)("inlineCode",{parentName:"p"},"res/")," directory. This WASM file is the smart contract we'll be deploying onto the NEAR blockchain."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," If you run into errors make sure you have ",(0,o.kt)("a",{parentName:"p",href:"/develop/prerequisites"},"Rust installed")," and are in the root directory of the NFT example.")),(0,o.kt)("h3",{id:"testing-the-contract"},"Testing the contract"),(0,o.kt)("p",null,"Written in the smart contract there are pre-written tests that you can run. Run the following command in your terminal to perform these simple tests to verify that your contract code is working."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test -- --nocapture\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," the more complex simulation tests aren't performed with this command but you can find them in ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/sim"),".")),(0,o.kt)("h2",{id:"using-the-nft-contract"},"Using the NFT contract"),(0,o.kt)("p",null,"Now that you have successfully built and tested the NFT smart contract, you're ready to ",(0,o.kt)("a",{parentName:"p",href:"#deploying-the-contract"},"deploy it"),"\nand start using it ",(0,o.kt)("a",{parentName:"p",href:"#minting-your-nfts"},"mint your NFTs"),"."),(0,o.kt)("h3",{id:"deploying-the-contract"},"Deploying the contract"),(0,o.kt)("p",null,"This smart contract will be deployed to your NEAR account. Because NEAR allows the ability to upgrade contracts on the same account, initialization functions must be cleared."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you'd like to run this example on a NEAR account that has had prior contracts deployed, please use the ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli")," command ",(0,o.kt)("inlineCode",{parentName:"p"},"near delete")," and then recreate it in Wallet. To create (or recreate) an account, please follow the directions in ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org"},"Test Wallet")," or (",(0,o.kt)("a",{parentName:"p",href:"https://wallet.near.org/"},"NEAR Wallet")," if we're using ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),").")),(0,o.kt)("p",null,"Log in to your newly created account with ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli")," by running the following command in your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near login\n")),(0,o.kt)("p",null,"To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_ACCOUNT_NAME")," with the account name you just logged in with including the ",(0,o.kt)("inlineCode",{parentName:"p"},".testnet")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},".near")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export ID=YOUR_ACCOUNT_NAME\n")),(0,o.kt)("p",null,"Test that the environment variable is set correctly by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo $ID\n")),(0,o.kt)("p",null,"Verify that the correct account ID is printed in the terminal. If everything looks correct you can now deploy your contract.\nIn the root of your NFT project run the following command to deploy your smart contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near deploy --wasmFile res/non_fungible_token.wasm --accountId $ID\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example response: "),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Starting deployment. Account id: ex-1.testnet, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: res/non_fungible_token.wasm\nTransaction Id E1AoeTjvuNbDDdNS9SqKfoWiZT95keFrRUmsB65fVZ52\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/E1AoeTjvuNbDDdNS9SqKfoWiZT95keFrRUmsB65fVZ52\nDone deploying to ex-1.testnet\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," For ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," you will need to prepend your command with ",(0,o.kt)("inlineCode",{parentName:"p"},"NEAR_ENV=mainnet"),". ",(0,o.kt)("a",{parentName:"p",href:"/tools/near-cli#network-selection"},"See here")," for more information.")),(0,o.kt)("h3",{id:"minting-your-nfts"},"Minting your NFTs"),(0,o.kt)("p",null,"A smart contract can define an initialization method that can be used to set the contract's initial state.\nIn our case, we need to initialize the NFT contract before usage. For now, we'll initialize it with the default metadata."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," each account has a data area called ",(0,o.kt)("inlineCode",{parentName:"p"},"storage"),", which is persistent between function calls and transactions.\nFor example, when you initialize a contract, the initial state is saved in the persistent storage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near call $ID new_default_meta '{\"owner_id\": \"'$ID'\"}' --accountId $ID\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," you can find more info about the NFT metadata at ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Metadata.html"},"nomicon.io"),".")),(0,o.kt)("p",null,"You can then view the metadata by running the following ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $ID nft_metadata\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example response: "),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "spec": "nft-1.0.0",\n  "name": "Example NEAR non-fungible token",\n  "symbol": "EXAMPLE",\n  "icon": "data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 288 288\'%3E%3Cg id=\'l\' data-name=\'l\'%3E%3Cpath d=\'M187.58,79.81l-30.1,44.69a3.2,3.2,0,0,0,4.75,4.2L191.86,103a1.2,1.2,0,0,1,2,.91v80.46a1.2,1.2,0,0,1-2.12.77L102.18,77.93A15.35,15.35,0,0,0,90.47,72.5H87.34A15.34,15.34,0,0,0,72,87.84V201.16A15.34,15.34,0,0,0,87.34,216.5h0a15.35,15.35,0,0,0,13.08-7.31l30.1-44.69a3.2,3.2,0,0,0-4.75-4.2L96.14,186a1.2,1.2,0,0,1-2-.91V104.61a1.2,1.2,0,0,1,2.12-.77l89.55,107.23a15.35,15.35,0,0,0,11.71,5.43h3.13A15.34,15.34,0,0,0,216,201.16V87.84A15.34,15.34,0,0,0,200.66,72.5h0A15.35,15.35,0,0,0,187.58,79.81Z\'/%3E%3C/g%3E%3C/svg%3E",\n  "base_uri": null,\n  "reference": null,\n  "reference_hash": null\n}\n')))),(0,o.kt)("p",null,"Now let's mint our first token! The following command will mint one copy of your NFT. Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"media")," url with the one you ",(0,o.kt)("a",{parentName:"p",href:"#uploading-the-image"},"uploaded to IPFS")," earlier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $ID nft_mint \'{"token_id": "0", "receiver_id": "\'$ID\'", "token_metadata": { "title": "Some Art", "description": "My NFT media", "media": "https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/", "copies": 1}}\' --accountId $ID --deposit 0.1\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example response: "),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_id": "0",\n  "owner_id": "dev-xxxxxx-xxxxxxx",\n  "metadata": {\n    "title": "Some Art",\n    "description": "My NFT media",\n    "media": "https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/",\n    "media_hash": null,\n    "copies": 1,\n    "issued_at": null,\n    "expires_at": null,\n    "starts_at": null,\n    "updated_at": null,\n    "extra": null,\n    "reference": null,\n    "reference_hash": null\n  },\n  "approved_account_ids": {}\n}\n')))),(0,o.kt)("p",null,"To view tokens owned by an account you can call the NFT contract with the following ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $ID nft_tokens_for_owner '{\"account_id\": \"'$ID'\"}'\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example response: "),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "token_id": "0",\n    "owner_id": "dev-xxxxxx-xxxxxxx",\n    "metadata": {\n      "title": "Some Art",\n      "description": "My NFT media",\n      "media": "https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("br",null),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," after you mint your first non-fungible token, you can ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/?tab=collectibles"},"view it in your Wallet"),":"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Wallet with token",src:n(97652).Z,width:"1670",height:"1174"})),(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Congratulations! You just minted your first NFT token on the NEAR blockchain!"))," \ud83c\udf89"),(0,o.kt)("h2",{id:"final-remarks"},"Final remarks"),(0,o.kt)("p",null,"This basic example illustrates all the required steps to deploy an NFT smart contract, store media files on IPFS,\nand start minting your own non-fungible tokens."),(0,o.kt)("p",null,"Now that you're familiar with the process, you can check out our ",(0,o.kt)("a",{parentName:"p",href:"https://examples.near.org/NFT"},"NFT Example")," and learn more about the smart contract code and how you can transfer minted tokens to other accounts.\nFinally, if you are new to Rust and want to dive into smart contract development, our ",(0,o.kt)("a",{parentName:"p",href:"/develop/quickstart-guide"},"Quick-start guide")," is a great place to start."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Happy minting!"))," \ud83e\ude99"),(0,o.kt)("h2",{id:"blockcraft---a-practical-extension"},"Blockcraft - a Practical Extension"),(0,o.kt)("p",null,"If you'd like to learn how to use Minecraft to mint NFTs and copy/paste builds across different worlds while storing all your data on-chain, be sure to check out our ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/minecraft-nfts"},"Minecraft tutorial")),(0,o.kt)("h2",{id:"versioning-for-this-article"},"Versioning for this article"),(0,o.kt)("p",null,"At the time of this writing, this example works with the following versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cargo: ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo 1.54.0 (5ae8d74b3 2021-06-22)")),(0,o.kt)("li",{parentName:"ul"},"rustc: ",(0,o.kt)("inlineCode",{parentName:"li"},"rustc 1.54.0 (a178d0322 2021-07-26)")),(0,o.kt)("li",{parentName:"ul"},"near-cli: ",(0,o.kt)("inlineCode",{parentName:"li"},"2.1.1"))))}m.isMDXComponent=!0},51821:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft-storage-4a42a724bcd3e29196d2f6320aa8d6a3.png"},97652:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft-wallet-token-33fe7fef18505463df1083200529c6be.png"},98411:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft-wallet-589fe036ad45cc49d775f43514d7fe75.png"}}]);