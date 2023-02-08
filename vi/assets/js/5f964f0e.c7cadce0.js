"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6664],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59585:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"upgrade-contract",title:"Upgrading the Contract",sidebar_label:"Upgrade a Contract"},s=void 0,c={unversionedId:"tutorials/nfts/js/upgrade-contract",id:"tutorials/nfts/js/upgrade-contract",title:"Upgrading the Contract",description:"In this tutorial, you'll build off the work you previously did to implement the minting functionality on a skeleton smart contract. You got to the point where NFTs could be minted, however, the wallet had no way of displaying the tokens since your contract didn't implement the method that the wallet was trying to call.",source:"@site/../docs/3.tutorials/nfts/js/2-upgrade.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/upgrade-contract",permalink:"/near-docs-kor/vi/tutorials/nfts/js/upgrade-contract",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/2-upgrade.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:2,frontMatter:{id:"upgrade-contract",title:"Upgrading the Contract",sidebar_label:"Upgrade a Contract"},sidebar:"tutorials",previous:{title:"Minting",permalink:"/near-docs-kor/vi/tutorials/nfts/js/minting"},next:{title:"Enumeration",permalink:"/near-docs-kor/vi/tutorials/nfts/js/enumeration"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Upgrading contracts overview",id:"upgrading-contracts",level:2},{value:"Modifications to our contract",id:"modifications-to-contract",level:2},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Viewing NFTs in the wallet",id:"viewing-nfts-in-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function m(t){var e=t.components,l=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, you'll build off the work you previously did to implement the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"minting functionality")," on a skeleton smart contract. You got to the point where NFTs could be minted, however, the wallet had no way of displaying the tokens since your contract didn't implement the method that the wallet was trying to call."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The JS-SDK is currently in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,r.kt)("inlineCode",{parentName:"a"},"Alpha"))),". ")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Today you'll learn about deploying patch fixes to smart contracts and you'll use that knowledge to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_tokens_for_owner")," function on the contract you deployed in the previous tutorial."),(0,r.kt)("h2",{id:"upgrading-contracts"},"Upgrading contracts overview"),(0,r.kt)("p",null,"Upgrading contracts, when done right, can be an immensely powerful tool. If done wrong, it can lead to a lot of headaches. It's important to distinguish between the code and state of a smart contract. When a contract is deployed on top of an existing contract, the only thing that changes is the code. The state will remain the same and that's where a lot of developer's issues come to fruition."),(0,r.kt)("p",null,"The NEAR Runtime will read the serialized state from disk and it will attempt to load it using the current contract code. When your code changes, it might not be able to figure out how to do this."),(0,r.kt)("p",null,"You need to strategically upgrade your contracts and make sure that the runtime will be able to read your current state with the new contract code. For more information about upgrading contracts and some best practices, see the NEAR SDK's ",(0,r.kt)("a",{parentName:"p",href:"/sdk/rust/building/prototyping"},"upgrading contracts")," write-up."),(0,r.kt)("h2",{id:"modifications-to-contract"},"Modifications to our contract"),(0,r.kt)("p",null,"In order for the wallet to properly display your NFTs, you need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_tokens_for_owner")," method. This will allow anyone to query for a paginated list of NFTs owned by a given account ID."),(0,r.kt)("p",null,"To accomplish this, let's break it down into some smaller subtasks. First, you need to get access to a list of all token IDs owned by a user. This information can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tokensPerOwner")," data structure. Now that you have a set of token IDs, you need to convert them into ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," objects as that's what you'll be returning from the function."),(0,r.kt)("p",null,"Luckily, you wrote a function ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_token")," which takes a token ID and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_core.ts")," file. As you can guess, in order to get a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," objects, you would need to iterate through the token IDs owned by the user and then convert each token ID into a ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonToken")," and store that in a list."),(0,r.kt)("p",null,"As for the pagination, you can use some basic JavaScript to get that done. Let's move over to the ",(0,r.kt)("inlineCode",{parentName:"p"},"enumeration.ts")," file and implement that logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/enumeration.ts#L47-L82\n")),(0,r.kt)("h2",{id:"redeploying-contract"},"Redeploying the contract"),(0,r.kt)("p",null,"Now that you've implemented the necessary logic for ",(0,r.kt)("inlineCode",{parentName:"p"},"nft_tokens_for_owner"),", it's time to build and re-deploy the contract to your account. Using the build script, deploy the contract as you did in the previous tutorial:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build && near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n")),(0,r.kt)("p",null,"This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," and hit enter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n")),(0,r.kt)("p",null,"Once the contract has been redeployed, let's test and see if the state migrated correctly by running a simple view function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near view $NFT_CONTRACT_ID nft_metadata\n")),(0,r.kt)("p",null,"This should return an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{ spec: 'nft-1.0.0', name: 'NFT Tutorial Contract', symbol: 'GOTEAM' }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Go team!")," At this point, you can now test and see if the new function you wrote works correctly. Let's query for the list of tokens that you own:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near view $NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$NFT_CONTRACT_ID\'", "limit": 5}\'\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example response: "),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[\n  {\n    token_id: 'token-1',\n    owner_id: 'goteam.examples.testnet',\n    metadata: {\n      title: 'My Non Fungible Team Token',\n      description: 'The Team Most Certainly Goes :)',\n      media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif'\n    }\n  }\n]\n")))),(0,r.kt)("h2",{id:"viewing-nfts-in-wallet"},"Viewing NFTs in the wallet"),(0,r.kt)("p",null,"Now that your contract implements the necessary functions that the wallet uses to display NFTs, you should be able to see your tokens on display in the ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/?tab=collectibles"},"collectibles tab"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"filled-nft-in-wallet",src:n(64532).Z,width:"635",height:"432"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, you learned about the basics of ",(0,r.kt)("a",{parentName:"p",href:"#upgrading-contracts"},"upgrading contracts"),". Then, you implemented the necessary ",(0,r.kt)("a",{parentName:"p",href:"#modifications-to-contract"},"modifications to your smart contract")," and ",(0,r.kt)("a",{parentName:"p",href:"#redeploying-contract"},"redeployed it"),". Finally you navigated to the wallet collectibles tab and ",(0,r.kt)("a",{parentName:"p",href:"#viewing-nfts-in-wallet"},"viewed your NFTs"),"."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/enumeration"},"next tutorial"),", you'll implement the remaining functions needed to complete the ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Enumeration.html"},"enumeration")," standard."))}m.isMDXComponent=!0},64532:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/filled-nft-in-wallet-e661209d2dbff2bb2551db943ecfc43b.png"}}]);