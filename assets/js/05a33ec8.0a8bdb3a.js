"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2411],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,l(l({ref:e},u),{},{components:n})):a.createElement(m,l({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41417:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={id:"royalty",title:"Royalty",sidebar_label:"Royalty"},s=void 0,p={unversionedId:"tutorials/nfts/js/royalty",id:"tutorials/nfts/js/royalty",title:"Royalty",description:"In this tutorial you'll continue building your non-fungible token (NFT) smart contract, and learn how to implement perpetual royalties into your NFTs. This will allow people to get a percentage of the purchase price when an NFT is sold.",source:"@site/../docs/3.tutorials/nfts/js/6-royalty.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/royalty",permalink:"/tutorials/nfts/js/royalty",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/6-royalty.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:6,frontMatter:{id:"royalty",title:"Royalty",sidebar_label:"Royalty"},sidebar:"tutorials",previous:{title:"Approvals",permalink:"/tutorials/nfts/js/approvals"},next:{title:"Events",permalink:"/tutorials/nfts/js/events"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Thinking about the problem",id:"thinking-about-the-problem",level:2},{value:"Expanding the current solution",id:"expanding-the-current-solution",level:3},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Internal helper function",id:"internal-helper-function",level:3},{value:"Royalties",id:"royalties",level:3},{value:"Perpetual royalties",id:"perpetual-royalties",level:3},{value:"Adding royalty object to struct implementations",id:"adding-royalty-object-to-struct-implementations",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization and minting",id:"initialization-and-minting",level:3},{value:"NFT payout",id:"nft-payout",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function h(t){var e=t.components,n=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial you'll continue building your non-fungible token (NFT) smart contract, and learn how to implement perpetual royalties into your NFTs. This will allow people to get a percentage of the purchase price when an NFT is sold."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The JS-SDK is currently in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,r.kt)("inlineCode",{parentName:"a"},"Alpha"))),". ")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"By now, you should have a fully fledged NFT contract, except for the royalties support.\nTo get started, either switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"5.approval")," branch from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial-js/"},"GitHub repository"),", or continue your work from the previous tutorials."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout 5.approval\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you wish to see the finished code for this ",(0,r.kt)("em",{parentName:"p"},"Royalty")," tutorial, you can find it on the ",(0,r.kt)("inlineCode",{parentName:"p"},"6.royalty")," branch.")),(0,r.kt)("h2",{id:"thinking-about-the-problem"},"Thinking about the problem"),(0,r.kt)("p",null,"In order to implement the functionality, you first need to understand how NFTs are sold. In the previous tutorial, you saw how someone with an NFT could list it on a marketplace using the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_approve")," function by passing in a message that could be properly decoded. When a user purchases your NFT on the marketplace, what happens?"),(0,r.kt)("p",null,"Using the knowledge you have now, a reasonable conclusion would be to say that the marketplace transfers the NFT to the buyer by performing a cross-contract call and invokes the NFT contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_transfer")," method. Once that function finishes, the marketplace would pay the seller for the correct amount that the buyer paid."),(0,r.kt)("p",null,"Let's now think about how this can be expanded to allow for a cut of the pay going to other accounts that aren't just the seller."),(0,r.kt)("h3",{id:"expanding-the-current-solution"},"Expanding the current solution"),(0,r.kt)("p",null,"Since perpetual royalties will be on a per-token basis, it's safe to assume that you should be changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," structs. You need some way of keeping track of what percentage each account with a royalty should have. If you introduce a map of an account to an integer, that should do the trick."),(0,r.kt)("p",null,"Now, you need some way to relay that information to the marketplace. This method should be able to transfer the NFT exactly like the old solution but with the added benefit of telling the marketplace exactly what accounts should be paid what amounts. If you implement a method that transfers the NFT and then calculates exactly what accounts get paid and to what amount based on a passed-in balance, that should work nicely."),(0,r.kt)("p",null,"This is what the ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Payout"},"royalty standards")," outlined. Let's now move on and modify our smart contract to introduce this behavior."),(0,r.kt)("h2",{id:"modifications-to-the-contract"},"Modifications to the contract"),(0,r.kt)("p",null,"The first thing you'll want to do is add the royalty information to the structs. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-contract/src/metadata.ts")," file and add ",(0,r.kt)("inlineCode",{parentName:"p"},"royalty")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," structs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"royalty: { [accountId: string]: number };\n")),(0,r.kt)("p",null,"Second, you'll want to add ",(0,r.kt)("inlineCode",{parentName:"p"},"royalty")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," struct as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/metadata.ts#L106-L166\n")),(0,r.kt)("h3",{id:"internal-helper-function"},"Internal helper function"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"royaltyToPayout")),(0,r.kt)("p",null,"To simplify the payout calculation, let's add a helper ",(0,r.kt)("inlineCode",{parentName:"p"},"royaltyToPayout")," function to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/internal.ts"),". This will convert a percentage to the actual amount that should be paid. In order to allow for percentages less than 1%, you can give 100% a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"10,000"),". This means that the minimum percentage you can give out is 0.01%, or ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". For example, if you wanted the account ",(0,r.kt)("inlineCode",{parentName:"p"},"benji.testnet")," to have a perpetual royalty of 20%, you would insert the pair ",(0,r.kt)("inlineCode",{parentName:"p"},'"benji.testnet": 2000')," into the payout map."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/internal.ts#L13-L16\n")),(0,r.kt)("p",null,"If you were to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"royaltyToPayout")," function and pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"2000")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"royaltyPercentage")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"amountToPay")," of 1 NEAR, it would return a value of 0.2 NEAR."),(0,r.kt)("h3",{id:"royalties"},"Royalties"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nft_payout")),(0,r.kt)("p",null,"Let's now implement a method to check what accounts will be paid out for an NFT given an amount, or balance. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-contract/src/royalty.ts")," file, and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalNftPayout")," function as shown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/royalty.ts#L7-L53\n")),(0,r.kt)("p",null,"This function will loop through the token's royalty map and take the balance and convert that to a payout using the ",(0,r.kt)("inlineCode",{parentName:"p"},"royaltyToPayout")," function you created earlier. It will give the owner of the token whatever is left from the total royalties. As an example:"),(0,r.kt)("p",null,"You have a token with the following royalty field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Token {\n    owner_id: "damian",\n    royalty: {\n        "benji": 1000,\n        "josh": 500,\n        "mike": 2000\n    }\n}\n')),(0,r.kt)("p",null,"If a user were to call ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_payout")," on the token and pass in a balance of 1 NEAR, it would loop through the token's royalty field and insert the following into the payout object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Payout {\n    payout: {\n        "benji": 0.1 NEAR,\n        "josh": 0.05 NEAR,\n        "mike": 0.2 NEAR\n    }\n}\n')),(0,r.kt)("p",null,"At the very end, it will insert ",(0,r.kt)("inlineCode",{parentName:"p"},"damian")," into the payout object and give him ",(0,r.kt)("inlineCode",{parentName:"p"},"1 NEAR - 0.1 - 0.05 - 0.2 = 0.65 NEAR"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nft_transfer_payout")),(0,r.kt)("p",null,"Now that you know how payouts are calculated, it's time to create the function that will transfer the NFT and return the payout to the marketplace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/royalty.ts#L55-L121\n")),(0,r.kt)("h3",{id:"perpetual-royalties"},"Perpetual royalties"),(0,r.kt)("p",null,"To add support for perpetual royalties, let's edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/mint.ts")," file. First, add an optional parameter for perpetual royalties. This is what will determine what percentage goes to which accounts when the NFT is purchased. You will also need to create and insert the royalty to be put in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/mint.ts#L7-L64\n")),(0,r.kt)("h3",{id:"adding-royalty-object-to-struct-implementations"},"Adding royalty object to struct implementations"),(0,r.kt)("p",null,"Since you've added a new field to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," structs, you need to edit your implementations accordingly. Move to the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-contract/src/internal.ts")," file and edit the part of your ",(0,r.kt)("inlineCode",{parentName:"p"},"internalTransfer")," function that creates the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/internal.ts#L150-L158\n")),(0,r.kt)("p",null,"Once that's finished, move to the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-contract/src/nft_core.ts")," file. You need to edit your implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"internalNftToken")," so that the ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," sends back the new royalty information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/nft_core.ts#L10-L37\n")),(0,r.kt)("p",null,"Next, you can use the CLI to query the new ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_payout")," function and validate that it works correctly."),(0,r.kt)("h2",{id:"redeploying-contract"},"Deploying the contract"),(0,r.kt)("p",null,"As you saw in the previous tutorial, adding changes like these will cause problems when redeploying. Since these changes affect all the other tokens and the state won't be able to automatically be inherited by the new code, simply redeploying the contract will lead to errors. For this reason, you'll create a new sub-account again."),(0,r.kt)("h3",{id:"creating-a-sub-account"},"Creating a sub-account"),(0,r.kt)("p",null,"Run the following command to create a sub-account ",(0,r.kt)("inlineCode",{parentName:"p"},"royalty")," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near create-account royalty.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n")),(0,r.kt)("p",null,"Next, you'll want to export an environment variable for ease of development:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ROYALTY_NFT_CONTRACT_ID=royalty.$NFT_CONTRACT_ID\n")),(0,r.kt)("p",null,"Using the build script, build the deploy the contract as you did in the previous tutorials:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build && near deploy --wasmFile build/nft.wasm --accountId $ROYALTY_NFT_CONTRACT_ID\n")),(0,r.kt)("h3",{id:"initialization-and-minting"},"Initialization and minting"),(0,r.kt)("p",null,"Since this is a new contract, you'll need to initialize and mint a token. Use the following command to initialize the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near call $ROYALTY_NFT_CONTRACT_ID init '{\"owner_id\": \"'$ROYALTY_NFT_CONTRACT_ID'\"}' --accountId $ROYALTY_NFT_CONTRACT_ID\n")),(0,r.kt)("p",null,"Next, you'll need to mint a token. By running this command, you'll mint a token with a token ID ",(0,r.kt)("inlineCode",{parentName:"p"},'"royalty-token"')," and the receiver will be your new account. In addition, you're passing in a map with two accounts that will get perpetual royalties whenever your token is sold."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call $ROYALTY_NFT_CONTRACT_ID nft_mint \'{"token_id": "approval-token", "metadata": {"title": "Approval Token", "description": "testing out the new approval extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$ROYALTY_NFT_CONTRACT_ID\'", "perpetual_royalties": {"benjiman.testnet": 2000, "mike.testnet": 1000, "josh.testnet": 500}}\' --accountId $ROYALTY_NFT_CONTRACT_ID --amount 0.1\n')),(0,r.kt)("p",null,"You can check to see if everything went through properly by calling one of the enumeration functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near view $ROYALTY_NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$ROYALTY_NFT_CONTRACT_ID\'", "limit": 10}\'\n')),(0,r.kt)("p",null,"This should return an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "token_id": "approval-token",\n    "owner_id": "royalty.goteam.examples.testnet",\n    "metadata": {\n      "title": "Approval Token",\n      "description": "testing out the new approval extension of the standard",\n      "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"\n    },\n    "approved_account_ids": {},\n    "royalty": {\n      "josh.testnet": 500,\n      "benjiman.testnet": 2000,\n      "mike.testnet": 1000\n    }\n  }\n]\n')),(0,r.kt)("p",null,"Notice how there's now a royalty field that contains the 3 accounts that will get a combined 35% of all sales of this NFT? Looks like it works! Go team :)"),(0,r.kt)("h3",{id:"nft-payout"},"NFT payout"),(0,r.kt)("p",null,"Let's calculate the payout for the ",(0,r.kt)("inlineCode",{parentName:"p"},'"approval-token"')," NFT, given a balance of 100 yoctoNEAR. It's important to note that the balance being passed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_payout")," function is expected to be in yoctoNEAR."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near view $ROYALTY_NFT_CONTRACT_ID nft_payout \'{"token_id": "approval-token", "balance": "100", "max_len_payout": 100}\'\n')),(0,r.kt)("p",null,"This command should return an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  payout: {\n    'josh.testnet': '5',\n    'royalty.goteam.examples.testnet': '65',\n    'mike.testnet': '10',\n    'benjiman.testnet': '20'\n  }\n}\n")),(0,r.kt)("p",null,"If the NFT was sold for 100 yoctoNEAR, josh would get 5, benji would get 20, mike would get 10, and the owner, in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"royalty.goteam.examples.testnet")," would get the rest: 65."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"At this point you have everything you need for a fully functioning NFT contract to interact with marketplaces.\nThe last remaining standard that you could implement is the events standard. This allows indexers to know what functions are being called and makes it easier and more reliable to keep track of information that can be used to populate the collectibles tab in the wallet for example."),(0,r.kt)("admonition",{title:"remember",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to see the finished code from this tutorial, you can checkout the ",(0,r.kt)("inlineCode",{parentName:"p"},"6.royalty")," branch.")))}h.isMDXComponent=!0}}]);