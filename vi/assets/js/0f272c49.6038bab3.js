"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return a?n.createElement(m,l(l({ref:t},h),{},{components:a})):n.createElement(m,l({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},78222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"marketplace",title:"Integrating FT Payments into an NFT Marketplace",sidebar_label:"Adding FTs to a Marketplace"},s=void 0,c={unversionedId:"tutorials/fts/marketplace",id:"tutorials/fts/marketplace",title:"Integrating FT Payments into an NFT Marketplace",description:"In this tutorial, you'll learn the basics of how an NFT marketplace contract works and how you can modify it to allow for purchasing NFTs using Fungible Tokens. In the previous tutorials, you went through and created a fully fledged FT contract that incorporates all the standards found in the FT standard.",source:"@site/../docs/3.tutorials/fts/6-marketplace.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/marketplace",permalink:"/near-docs-kor/vi/tutorials/fts/marketplace",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/6-marketplace.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:6,frontMatter:{id:"marketplace",title:"Integrating FT Payments into an NFT Marketplace",sidebar_label:"Adding FTs to a Marketplace"},sidebar:"tutorials",previous:{title:"Transferring FTs",permalink:"/near-docs-kor/vi/tutorials/fts/transfers"},next:{title:"Crossword Game Overview",permalink:"/near-docs-kor/vi/tutorials/crosswords/basics/overview"}},h={},u=[{value:"Introduction",id:"introduction",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Understanding the contract",id:"understanding-the-contract",level:2},{value:"Purchasing Flow",id:"purchasing-flow",level:3},{value:"Looking at the Code",id:"looking-at-the-code",level:2},{value:"Main Library File",id:"main-library-file",level:3},{value:"Initialization function",id:"initialization-function",level:3},{value:"Storage management model",id:"storage-management-model",level:3},{value:"FT Deposits",id:"ft-deposits",level:2},{value:"Purchasing NFTs",id:"purchasing-nfts",level:2},{value:"View Methods",id:"view-methods",level:2},{value:"Testing",id:"testing",level:2},{value:"Deploying and Initializing the Contracts",id:"deploying-and-initializing-the-contracts",level:3},{value:"Placing a Token For Sale",id:"placing-a-token-for-sale",level:3},{value:"Deposit FTs into the Marketplace",id:"deposit-fts-into-the-marketplace",level:3},{value:"Purchasing the NFT",id:"purchasing-the-nft",level:3},{value:"Withdrawing the Excess Deposits",id:"withdrawing-the-excess-deposits",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, you'll learn the basics of how an NFT marketplace contract works and how you can modify it to allow for purchasing NFTs using Fungible Tokens. In the previous tutorials, you went through and created a fully fledged FT contract that incorporates all the standards found in the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core"},"FT standard"),". "),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Throughout this tutorial, you'll learn how a marketplace contract could work on NEAR. This is meant to be an example and there is no canonical implementation. Feel free to branch off and modify this contract to meet your specific needs."),(0,o.kt)("p",null,"Using the same repository as the previous tutorials, if you visit the ",(0,o.kt)("inlineCode",{parentName:"p"},"market-contract")," directory, you should have the necessary files to complete the tutorial."),(0,o.kt)("h2",{id:"file-structure"},"File structure"),(0,o.kt)("p",null,"This directory contains both the build script, dependencies as well as the actual contract code as outlined below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"market-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 external.rs\n    \u251c\u2500\u2500 ft_balances.rs\n    \u251c\u2500\u2500 internal.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 nft_callbacks.rs\n    \u251c\u2500\u2500 sale.rs\n    \u2514\u2500\u2500 sale_views.rs\n")),(0,o.kt)("p",null,"Let's start by building both the finished FT contract and the marketplace contract. Make sure you're in the root directory and run the following command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build && cd market-contract && ./build.sh && cd ..\n")),(0,o.kt)("p",null,"This will install the dependencies for the marketplace contract as well as the FT contract. In addition, it will compile them to ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," such that your ",(0,o.kt)("inlineCode",{parentName:"p"},"ft-tutorial/out")," directory looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ft-tutorial\n\u2514\u2500\u2500 out\n    \u251c\u2500\u2500 contract.wasm\n    \u251c\u2500\u2500 nft-contract.wasm\n    \u2514\u2500\u2500 market.wasm\n")),(0,o.kt)("p",null,"Note that there's also a pre-build nft contract wasm file in the directory which you'll use to place the NFTs for sale."),(0,o.kt)("h2",{id:"understanding-the-contract"},"Understanding the contract"),(0,o.kt)("p",null,"The marketplace contract used in this tutorial is a modified version of the contract created at the end of the NFT zero to hero tutorial. If you'd like to learn about the backbone of how the NFTs are put for sale and the process by which they are minted / sold, check out the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/marketplace"},"NFT zero to hero tutorial"),"."),(0,o.kt)("p",null,"The core functionalities are the same in the sense that both this contract and the marketplace contract built in the NFT zero to hero have the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can put NFTs for sale and specify sale conditions"),(0,o.kt)("li",{parentName:"ul"},"Users must pay for storage deposit to put NFTs for sale and they can withdraw the storage at any time"),(0,o.kt)("li",{parentName:"ul"},"Users can update the price of an NFT or remove the sale entirely"),(0,o.kt)("li",{parentName:"ul"},"Buyers can purchase the NFTs by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"offer"),".")),(0,o.kt)("p",null,"The only difference is that this marketplace has removed the ability to purchase NFTs for ",(0,o.kt)("inlineCode",{parentName:"p"},"$NEAR")," and instead allows users to buy them with Fungible Tokens. The fungible token is specified when the contract is initialized and only ",(0,o.kt)("strong",{parentName:"p"},"1 type of fungible token")," can be used to purchase NFTs. You can't, for example, offer 100 Team Tokens for an NFT and 5000 Mike Tokens for another."),(0,o.kt)("p",null,"In addition, the marketplace does ",(0,o.kt)("strong",{parentName:"p"},"not")," support royalties. This is because FT transfers are less Gas efficient than regular $NEAR transfers. In addition, each user would have to be registered and it's much easier to say \"hey seller, make sure you're registered before your NFT is sold\" rather than enforcing that the seller and ",(0,o.kt)("strong",{parentName:"p"},"all")," accounts in the payout object are registered. When an NFT is sold, the entire price is sent directly to the seller."),(0,o.kt)("h3",{id:"purchasing-flow"},"Purchasing Flow"),(0,o.kt)("p",null,'In order to purchase an NFT, the contract utilizes the "transfer and call" workflow that the FT contract provides. The marketplace contract implements the ',(0,o.kt)("inlineCode",{parentName:"p"},"ft_on_transfer")," method that is called whenever someone transfers FTs to the marketplace contract."),(0,o.kt)("p",null,"The marketplace keeps track of a balance for each user that outlines how many FTs they've sent to the contract. Each time ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_on_transfer")," is called, the marketplace contract will update the balance for the user. When that user wishes to purchase an NFT, they call ",(0,o.kt)("inlineCode",{parentName:"p"},"offer")," and pass in the amount of tokens they're willing to spend. The marketplace will then decrement from their balance and transfer the NFT to the buyer / send the FTs to the seller."),(0,o.kt)("p",null,"It's important to note that the seller ",(0,o.kt)("strong",{parentName:"p"},"must")," be registered in the FT contract before a sale is made otherwise the ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_transfer")," method will panic and the seller won't receive any tokens."),(0,o.kt)("h2",{id:"looking-at-the-code"},"Looking at the Code"),(0,o.kt)("p",null,"Most of the code is the same as what's been outlined in the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/marketplace"},"NFT zero to hero tutorial")," but we'll go through a refresher in case you're new or have forgotten some of the details."),(0,o.kt)("h3",{id:"main-library-file"},"Main Library File"),(0,o.kt)("p",null,"Starting at the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.rs")," file, this outlines what information is stored on the contract as well as some other crucial functions that you'll learn about below."),(0,o.kt)("h3",{id:"initialization-function"},"Initialization function"),(0,o.kt)("p",null,"The first function you'll look at is the initialization function. This takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_id")," as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_id")," as the parameters and will default all the storage collections to their default values. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_id")," outlines the account ID for the fungible token that the contract will allow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/market-contract/src/lib.rs#L94-L118\n")),(0,o.kt)("h3",{id:"storage-management-model"},"Storage management model"),(0,o.kt)("p",null,"Next, let's talk about the storage management model chosen for this contract. Users will need to deposit $NEAR onto the marketplace to cover the storage costs. Whenever someone puts an NFT for sale, the marketplace needs to store that information which costs $NEAR. Users can either deposit a large amount of $NEAR so that they never have to worry about storage again or they can deposit the minimum amount to cover 1 sale on an as-needed basis."),(0,o.kt)("p",null,"You might be thinking about the scenario when a sale is purchased. What happens to the storage that is now being released on the contract? This is why we have a storage withdrawal function. This allows users to withdraw any excess storage that is not being used. Let's go through some scenarios to understand the logic. The required storage for 1 sale is 0.01 NEAR on the marketplace contract."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scenario A")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Benji wants to list his NFT on the marketplace but has never paid for storage. "),(0,o.kt)("li",{parentName:"ul"},"He deposits exactly 0.01 NEAR using the ",(0,o.kt)("inlineCode",{parentName:"li"},"storage_deposit")," method. This will cover 1 sale."),(0,o.kt)("li",{parentName:"ul"},"He lists his NFT on the marketplace and is now using up 1 out of his prepaid 1 sales and has no more storage left. If he were to call ",(0,o.kt)("inlineCode",{parentName:"li"},"storage_withdraw"),", nothing would happen."),(0,o.kt)("li",{parentName:"ul"},"Dorian loves his NFT and quickly purchases it before anybody else can. This means that Benji's sale has now been taken down (since it was purchased) and Benji is using up 0 out of his prepaid 1 sales. In other words, he has an excess of 1 sale or 0.01 NEAR."),(0,o.kt)("li",{parentName:"ul"},"Benji can now call ",(0,o.kt)("inlineCode",{parentName:"li"},"storage_withdraw")," and will be transferred his 0.01 NEAR back. On the contract's side, after withdrawing, he will have 0 sales paid for and will need to deposit storage before trying to list anymore NFTs.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scenario B")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dorian owns one hundred beautiful NFTs and knows that he wants to list all of them."),(0,o.kt)("li",{parentName:"ul"},"To avoid having to call ",(0,o.kt)("inlineCode",{parentName:"li"},"storage_deposit")," everytime he wants to list an NFT, he calls it once. Since Dorian is a baller, he attaches 10 NEAR which is enough to cover 1000 sales. He now has an excess of 9 NEAR or 900 sales."),(0,o.kt)("li",{parentName:"ul"},"Dorian needs the 9 NEAR for something else but doesn't want to take down his 100 listings. Since he has an excess of 9 NEAR, he can easily withdraw and still have his 100 listings. After calling ",(0,o.kt)("inlineCode",{parentName:"li"},"storage_withdraw")," and being transferred 9 NEAR, he will have an excess of 0 sales.")),(0,o.kt)("p",null,"With this behavior in mind, the following two functions outline the logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/market-contract/src/lib.rs#L120-L183\n")),(0,o.kt)("p",null,"In this contract, the storage required for each sale is 0.01 NEAR but you can query that information using the ",(0,o.kt)("inlineCode",{parentName:"p"},"storage_minimum_balance")," function. In addition, if you wanted to check how much storage a given account has paid, you can query the ",(0,o.kt)("inlineCode",{parentName:"p"},"storage_balance_of")," function."),(0,o.kt)("h2",{id:"ft-deposits"},"FT Deposits"),(0,o.kt)("p",null,"If you want to learn more about how NFTs are put for sale, check out the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/marketplace"},"NFT zero to hero tutorial"),". Once NFTs are put for sale, the owner has three options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update the price of the NFT"),(0,o.kt)("li",{parentName:"ul"},"Remove the sale from the marketplace"),(0,o.kt)("li",{parentName:"ul"},"Wait for somebody to purchase it")),(0,o.kt)("p",null,"In order to purchase NFTs, buyers need to deposit FTs in the contract and call the ",(0,o.kt)("inlineCode",{parentName:"p"},"offer")," function. All the logic for FT deposits is outlined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/ft_balances.rs")," file. Starting with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_on_approve")," function, this is called when a user transfers FTs to the marketplace contract. The logic can be seen below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/market-contract/src/ft_balances.rs#L35-L77\n")),(0,o.kt)("p",null,"Once FTs are deposited into the contract, users can either withdraw their FTs or they can use them to purchase NFTs. The withdrawing flow is outlined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_withdraw")," function. It's important to note that you should decrement the user's balance ",(0,o.kt)("strong",{parentName:"p"},"before")," calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_transfer")," function to avoid a common exploit scenario where a user spams the ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_withdraw"),". If you were to decrement their balance in the callback function (if the transfer was successful), they could spam the ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_withdraw")," during the time it takes the callback function to execute. A better pattern is to decrement their balance before the transfer and then if the promise was *",(0,o.kt)("em",{parentName:"p"},"unsuccessful"),", revert the balance back to what it was before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/market-contract/src/ft_balances.rs#L79-L149\n")),(0,o.kt)("h2",{id:"purchasing-nfts"},"Purchasing NFTs"),(0,o.kt)("p",null,"Now that you're familiar with the process of both adding storage and depositing FTs on the marketplace, let's go through what you can do once a sale has been listed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"src/sale.rs")," file outlines the functions for updating the price, removing, and purchasing NFTs. In this tutorial, we'll focus ",(0,o.kt)("strong",{parentName:"p"},"only")," on the purchasing flow. If you'd like to learn about the sale objects, updating the price, and removing a sale, check out the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/marketplace"},"NFT zero to hero tutorial"),"."),(0,o.kt)("p",null,"For purchasing NFTs, you must call the ",(0,o.kt)("inlineCode",{parentName:"p"},"offer")," function. It takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_contract_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id"),", and the amount you wish to offer as parameters. Behind the scenes, this function will make sure your offer amount is greater than the list price and also that you have enough FTs deposited. It will then call a private method ",(0,o.kt)("inlineCode",{parentName:"p"},"process_purchase")," which will perform a cross-contract call to the NFT contract to invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_transfer")," function where the NFT will be transferred to the seller. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/market-contract/src/sale.rs#L67-L144\n")),(0,o.kt)("p",null,"Once the transfer is complete, the contract will call ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve_purchase")," where it will check the status of the transfer.If the transfer succeeded, it will send the FTs to the seller. If the transfer didn't succeed, it will increment the buyer's FT balance (acting as a refund)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/market-contract/src/sale.rs#L146-L192\n")),(0,o.kt)("h2",{id:"view-methods"},"View Methods"),(0,o.kt)("p",null,"There are several view functions that the marketplace contract exposes. All of these functions are the same as the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/marketplace"},"NFT zero to hero tutorial")," except for one extra function we've added. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/ft_balances.rs")," file, we've added the ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_balance_of")," function. This function returns the balance of a given account."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Now that you ",(0,o.kt)("em",{parentName:"p"},"hopefully")," have a good understanding of how the marketplace contract works and how you can use the powers of the FT standard to purchase NFTs, let's move onto testing everything. "),(0,o.kt)("h3",{id:"deploying-and-initializing-the-contracts"},"Deploying and Initializing the Contracts"),(0,o.kt)("p",null,"The first thing you'll want to do is deploy a new FT, NFT, and marketplace contract. Start by building and then you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"dev-accounts")," to quickly deploy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build && cd market-contract && ./build.sh && cd ..\n")),(0,o.kt)("p",null,"To deploy the FT contract and export an environment variable, run the following command. If you've already been using dev-accounts, attach the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag at the end of the dev-deploy command to force create a new one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"near dev-deploy out/contract.wasm && export FT_CONTRACT=$(cat neardev/dev-account)\n")),(0,o.kt)("p",null,"Next, you'll deploy the NFT and marketplace contracts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"near dev-deploy out/market.wasm -f && export MARKETPLACE_CONTRACT=$(cat neardev/dev-account) && near dev-deploy out/nft-contract.wasm -f && export NFT_CONTRACT=$(cat neardev/dev-account)\n")),(0,o.kt)("p",null,"Check and see if your environment variables are all correct by running the following command. Each output should be different."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo $FT_CONTRACT && echo $MARKETPLACE_CONTRACT && echo $NFT_CONTRACT\n")),(0,o.kt)("p",null,"An example output is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dev-1660831615048-16894106456797\ndev-1660831638497-73655245450834\ndev-1660831648913-23890994169259\n")),(0,o.kt)("p",null,"Once that's finished, go ahead and initialize each contract by running the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $FT_CONTRACT new_default_meta \'{"owner_id": "\'$FT_CONTRACT\'", "total_supply": "1000000000000000000000000000"}\' --accountId $FT_CONTRACT\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $MARKETPLACE_CONTRACT new \'{"owner_id": "\'$MARKETPLACE_CONTRACT\'", "ft_id": "\'$FT_CONTRACT\'"}\' --accountId $MARKETPLACE_CONTRACT\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near call $NFT_CONTRACT new_default_meta '{\"owner_id\": \"'$NFT_CONTRACT'\"}' --accountId $NFT_CONTRACT\n")),(0,o.kt)("p",null,"Let's check if each contract was initialized correctly. You can do this by checking the metadata of the FT and NFT contracts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $FT_CONTRACT ft_metadata && near view $NFT_CONTRACT nft_metadata\n")),(0,o.kt)("p",null,"In addition, you can check the sales of the marketplace contract and it should return 0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $MARKETPLACE_CONTRACT get_supply_sales\n")),(0,o.kt)("h3",{id:"placing-a-token-for-sale"},"Placing a Token For Sale"),(0,o.kt)("p",null,"Now that the marketplace and NFT contracts are initialized, let's place a token for sale. Start by creating a new buyer and seller account by running the following command. In this case, we'll create a sub-account of the FT contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near create-account buyer.$FT_CONTRACT --masterAccount $FT_CONTRACT --initialBalance 25 && export BUYER_ID=buyer.$FT_CONTRACT\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near create-account seller.$FT_CONTRACT --masterAccount $FT_CONTRACT --initialBalance 25 && export SELLER_ID=seller.$FT_CONTRACT\n")),(0,o.kt)("p",null,"Check if everything went well by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo $BUYER_ID && echo $SELLER_ID\n")),(0,o.kt)("p",null,"This should return something similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"buyer.dev-1660831615048-16894106456797\nseller.dev-1660831615048-16894106456797\n")),(0,o.kt)("p",null,"The next thing you'll want to do is mint a token to the seller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $NFT_CONTRACT nft_mint \'{"token_id": "market-token", "metadata": {"title": "Marketplace Token", "description": "testing out the marketplace", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$SELLER_ID\'"}\' --accountId $NFT_CONTRACT --amount 0.1\n')),(0,o.kt)("p",null,"Now you'll need to place the token for sale. This requires paying for storage as well as calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_approve")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near call $MARKETPLACE_CONTRACT storage_deposit --accountId $SELLER_ID --amount 0.1\n")),(0,o.kt)("p",null,"In this case, we'll place the token for sale for ",(0,o.kt)("inlineCode",{parentName:"p"},"10 gtNEAR"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $NFT_CONTRACT nft_approve \'{"token_id": "market-token", "account_id": "\'$MARKETPLACE_CONTRACT\'", "msg": "{\\"sale_conditions\\":\\"10000000000000000000000000\\"}"}\' --accountId $SELLER_ID --amount 0.1\n')),(0,o.kt)("p",null,"If you now query for the supply of sales again on the marketplace, it should be 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $MARKETPLACE_CONTRACT get_supply_sales\n")),(0,o.kt)("p",null,"In addition, if you query for the sales by the owner ID, it should reflect the ",(0,o.kt)("inlineCode",{parentName:"p"},"10 gtNEAR")," price."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $MARKETPLACE_CONTRACT get_sales_by_owner_id '{\"account_id\": \"'$SELLER_ID'\"}'\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[\n  {\n    owner_id: 'seller.dev-1660831615048-16894106456797',\n    approval_id: 0,\n    nft_contract_id: 'dev-1660831648913-23890994169259',\n    token_id: 'market-token',\n    sale_conditions: '10000000000000000000000000'\n  }\n]\n")),(0,o.kt)("h3",{id:"deposit-fts-into-the-marketplace"},"Deposit FTs into the Marketplace"),(0,o.kt)("p",null,"Now that you have an NFT up for sale for ",(0,o.kt)("inlineCode",{parentName:"p"},"10 gtNEAR")," on the marketplace contract, the buyer needs to deposit some FTs. The first thing you need to do is register both the marketplace contract and the buyer on the FT contract otherwise you won't be able to transfer any FTs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near call $FT_CONTRACT storage_deposit '{\"account_id\": \"'$MARKETPLACE_CONTRACT'\"}' --accountId $FT_CONTRACT --amount 0.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near call $FT_CONTRACT storage_deposit '{\"account_id\": \"'$BUYER_ID'\"}' --accountId $FT_CONTRACT --amount 0.1\n")),(0,o.kt)("p",null,"After this, you should transfer the buyer some FTs so that they can deposit at least ",(0,o.kt)("inlineCode",{parentName:"p"},"10 gtNEAR"),". Lets start with 50 ",(0,o.kt)("inlineCode",{parentName:"p"},"gtNEAR"),". Run the following command to send the buyer FTs on behalf of the FT contract owner."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $FT_CONTRACT ft_transfer \'{"receiver_id": "\'$BUYER_ID\'", "amount": "50000000000000000000000000", "memo": "Go Team!"}\' --accountId $FT_CONTRACT --depositYocto 1\n')),(0,o.kt)("p",null,"You'll now need to deposit those tokens into the marketplace contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $FT_CONTRACT ft_transfer_call \'{"receiver_id": "\'$MARKETPLACE_CONTRACT\'", "amount": "50000000000000000000000000", "msg": "Wooooooo!"}\' --accountId $BUYER_ID --depositYocto 1 --gas 200000000000000\n')),(0,o.kt)("p",null,"If you now query for your balance on the marketplace contract, it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"50 gtNEAR"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $MARKETPLACE_CONTRACT ft_deposits_of '{\"account_id\": \"'$BUYER_ID'\"}'\n")),(0,o.kt)("h3",{id:"purchasing-the-nft"},"Purchasing the NFT"),(0,o.kt)("p",null,"Now that the buyer has deposited FTs into the marketplace and the token is up for sale, let's go ahead and make an offer! If you try to offer more FTs than what you have, the contract will panic. Similarly, if you try to offer lower than the sale price, the contract will also panic. Since the sale price is ",(0,o.kt)("inlineCode",{parentName:"p"},"10 gtNEAR"),", let's try to offer ",(0,o.kt)("inlineCode",{parentName:"p"},"20 gtNEAR")," and see what happens. The expected outcome is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The NFT will be transferred to the buyer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"20 gtNEAR")," will be sent to the seller"),(0,o.kt)("li",{parentName:"ul"},"The buyer will have ",(0,o.kt)("inlineCode",{parentName:"li"},"30 gtNEAR")," left to withdraw.")),(0,o.kt)("p",null,"There is one thing we're forgetting, however. We need to make sure that the seller is registered on the FT contract so let's go ahead and do that now."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near call $FT_CONTRACT storage_deposit '{\"account_id\": \"'$SELLER_ID'\"}' --accountId $FT_CONTRACT --amount 0.1\n")),(0,o.kt)("p",null,"Now let's make an offer!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $MARKETPLACE_CONTRACT offer \'{"nft_contract_id": "\'$NFT_CONTRACT\'", "token_id": "market-token", "amount": "20000000000000000000000000"}\' --accountId $BUYER_ID --depositYocto 1 --gas 300000000000000\n')),(0,o.kt)("p",null,"If everything went well, you should see 2 events in your terminal. One event is the NFT transfer coming from the NFT contract when the token was transferred from the seller to the buyer. The other event is the FT transfer for when the seller receives their fungible tokens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Log [dev-1660831638497-73655245450834]: Memo: payout from market\nLog [dev-1660831638497-73655245450834]: EVENT_JSON:{"standard":"nep171","version":"nft-1.0.0","event":"nft_transfer","data":[{"authorized_id":"dev-1660831638497-73655245450834","old_owner_id":"seller.dev-1660831615048-16894106456797","new_owner_id":"buyer.dev-1660831615048-16894106456797","token_ids":["market-token"],"memo":"payout from market"}]}\nReceipt: BBvHig5zg1n2vmxFPTpxED4FNCAU1ZzZ3H8EBqqaeRw5\nLog [dev-1660831638497-73655245450834]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"dev-1660831638497-73655245450834","new_owner_id":"seller.dev-1660831615048-16894106456797","amount":"20000000000000000000000000","memo":"Sale from marketplace"}]}\n')),(0,o.kt)("p",null,"Let's call some view methods to double check if everything went well. First let's check if the seller now has ",(0,o.kt)("inlineCode",{parentName:"p"},"20 gtNEAR"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $FT_CONTRACT ft_balance_of '{\"account_id\": \"'$SELLER_ID'\"}'\n")),(0,o.kt)("p",null,"Next, let's check if the buyer has ",(0,o.kt)("inlineCode",{parentName:"p"},"30 gtNEAR")," left to withdraw."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $MARKETPLACE_CONTRACT ft_deposits_of '{\"account_id\": \"'$BUYER_ID'\"}'\n")),(0,o.kt)("p",null,"Finally, let's check if the NFT is now owned by the buyer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near view $NFT_CONTRACT nft_token \'{"token_id": "market-token"}\'\n')),(0,o.kt)("h3",{id:"withdrawing-the-excess-deposits"},"Withdrawing the Excess Deposits"),(0,o.kt)("p",null,"Now that the buyer purchased the NFT with ",(0,o.kt)("inlineCode",{parentName:"p"},"20 gtNEAR"),", they should have ",(0,o.kt)("inlineCode",{parentName:"p"},"30 gtNEAR")," left to withdraw. If they withdraw the tokens, they should be left with a balance of ",(0,o.kt)("inlineCode",{parentName:"p"},"30 gtNEAR")," on the FT contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $MARKETPLACE_CONTRACT ft_withdraw \'{"amount": "30000000000000000000000000"}\' --accountId $BUYER_ID --depositYocto 1 --gas 300000000000000\n')),(0,o.kt)("p",null,"If you now query for the buyer's balance, it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"30 gtNEAR"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $FT_CONTRACT ft_balance_of '{\"account_id\": \"'$BUYER_ID'\"}'\n")),(0,o.kt)("p",null,"And just like that you're finished! You went through and put an NFT up for sale and purchased it using fungible tokens! ",(0,o.kt)("strong",{parentName:"p"},"Go team \ud83d\ude80")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this tutorial, you learned about the basics of a marketplace contract and how it works. You went through the core logic both at a high level and looked at the code. You deployed an NFT, marketplace, and FT contract, initialized them all and then put an NFT for sale and sold it for fungible tokens! What an amazing experience! Go forth and expand these contracts to meet whatever needs you have. The world is your oyster and thank you so much for following along with this tutorial series. Don't hesitate to ask for help or clarification on anything in our discord or social media channels. ",(0,o.kt)("strong",{parentName:"p"},"Go Team!")))}d.isMDXComponent=!0}}]);