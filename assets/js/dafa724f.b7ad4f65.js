"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8583],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(c,o(o({ref:e},u),{},{components:n})):a.createElement(c,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33389:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"skeleton",title:"Skeleton and JavaScript Architecture",sidebar_label:"Contract Architecture"},s=void 0,p={unversionedId:"tutorials/nfts/js/skeleton",id:"tutorials/nfts/js/skeleton",title:"Skeleton and JavaScript Architecture",description:"In this article, you'll learn about the basic architecture behind the NFT contract that you'll develop while following this \"Zero to Hero\" series.",source:"@site/../docs/3.tutorials/nfts/js/1-skeleton.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/skeleton",permalink:"/near-docs-kor/tutorials/nfts/js/skeleton",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:1,frontMatter:{id:"skeleton",title:"Skeleton and JavaScript Architecture",sidebar_label:"Contract Architecture"},sidebar:"tutorials",previous:{title:"Pre-deployed Contract",permalink:"/near-docs-kor/tutorials/nfts/js/predeployed-contract"},next:{title:"Minting",permalink:"/near-docs-kor/tutorials/nfts/js/minting"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Source files",id:"source-files",level:3},{value:"<code>approval.ts</code>",id:"approvalts",level:2},{value:"<code>enumeration.ts</code>",id:"enumerationts",level:2},{value:"<code>metadata.ts</code>",id:"metadatats",level:2},{value:"<code>mint.ts</code>",id:"mintts",level:2},{value:"<code>nft_core.ts</code>",id:"nft_corets",level:2},{value:"<code>royalty.ts</code>",id:"royaltyts",level:2},{value:"<code>index.ts</code>",id:"indexts",level:2},{value:"Building the skeleton",id:"building-the-skeleton",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In this article, you'll learn about the basic architecture behind the NFT contract that you'll develop while following this ",(0,l.kt)("em",{parentName:"p"},'"Zero to Hero"')," series.\nYou'll discover the contract's layout and you'll see how the JavaScript files are structured in order to build a feature-complete smart contract.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The JS-SDK is currently in ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,l.kt)("inlineCode",{parentName:"a"},"Alpha"))),". ")),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"This tutorial presents the code skeleton for the NFT smart contract and its file structure.\nYou'll find how all the functions are laid out as well as the missing JS code that needs to be filled in.\nOnce every file and function has been covered, you'll go through the process of building the mock-up contract to confirm that everything is working correctly."),(0,l.kt)("h2",{id:"file-structure"},"File structure"),(0,l.kt)("p",null,"Following a regular ",(0,l.kt)("a",{parentName:"p",href:"https://www.javascript.com/"},"JavaScript")," project, the file structure for this smart contract has:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," file to define the packages and scripts used in the project."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src")," folder where all the JavaScript source files are stored"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build")," folder where the compiled ",(0,l.kt)("inlineCode",{parentName:"li"},"wasm")," will output to.")),(0,l.kt)("h3",{id:"source-files"},"Source files"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"File"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#approvalts"},"approval.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"Has the internal functions that controls the access and transfers of non-fungible tokens.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#enumerationts"},"enumeration.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the internal methods to query for NFT tokens and their owners.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#indexts"},"index.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"Holds the exposed smart contract functions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#metadatats"},"metadata.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the token and metadata structures.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mintts"},"mint.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the internal token minting logic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nft_corets"},"nft_core.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"Has the internal core logic that allows you to transfer NFTs between users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#royaltyts"},"royalty.ts")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the internal payout-related functions.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nft-tutorial-js\n\u2514\u2500\u2500 src\n    market-contract\n    nft-contract\n    \u251c\u2500\u2500 approval.ts\n    \u251c\u2500\u2500 enumeration.ts\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 metadata.ts\n    \u251c\u2500\u2500 mint.ts\n    \u251c\u2500\u2500 nft_core.ts\n    \u2514\u2500\u2500 royalty.ts\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Explore the code in our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial-js/tree/1.skeleton"},"GitHub repository"),".")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"approvalts"},(0,l.kt)("inlineCode",{parentName:"h2"},"approval.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This allows people to approve other accounts to transfer NFTs on their behalf.")),(0,l.kt)("p",null,"This file contains the internal logic that complies with the standard's ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html"},"approvals management")," extension. Here is a breakdown of the methods and their functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftApprove")),(0,l.kt)("td",{parentName:"tr",align:null},"Approves an account ID to transfer a token on your behalf. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_approve"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftIsApproved")),(0,l.kt)("td",{parentName:"tr",align:null},"Checks if the input account has access to approve the token ID. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_is_approved"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftRevoke")),(0,l.kt)("td",{parentName:"tr",align:null},"Revokes a specific account from transferring the token on your behalf. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_revoke"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftRevokeAll")),(0,l.kt)("td",{parentName:"tr",align:null},"Revokes all accounts from transferring the token on your behalf. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_revoke_all"),".")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/approval.ts#L9-L69\n")),(0,l.kt)("p",null,"You'll learn more about these functions in the ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/approvals"},"approvals section")," of the Zero to Hero series."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"enumerationts"},(0,l.kt)("inlineCode",{parentName:"h2"},"enumeration.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This file provides the internal functions needed to view information about NFTs, and follows the standard's ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Enumeration.html"},"enumeration")," extension.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTotalSupply")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the total amount of NFTs stored on the contract. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_total_supply"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTokens")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a paginated list of NFTs stored on the contract regardless of their owner. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_tokens"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftSupplyForOwner")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows you view the total number of NFTs owned by any given user. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_supply_for_owner"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTokensForOwner")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a paginated list of NFTs owned by any given user. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_tokens_for_owner"),".")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/enumeration.ts#L8-L62\n")),(0,l.kt)("p",null,"You'll learn more about these functions in the ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/enumeration"},"enumeration section")," of the tutorial series."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"metadatats"},(0,l.kt)("inlineCode",{parentName:"h2"},"metadata.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This file is used to keep track of the information to be stored for tokens, and metadata.\nIn addition, you can define a function to view the contract's metadata which is part of the standard's ",(0,l.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/NonFungibleToken/Metadata.html"},"metadata")," extension.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"TokenMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"This structure defines the metadata that can be stored for each token. (title, description, media, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Token")),(0,l.kt)("td",{parentName:"tr",align:null},"This structure outlines what information will be stored on the contract for each token.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"JsonToken")),(0,l.kt)("td",{parentName:"tr",align:null},"When querying information about NFTs through view calls, the return information is stored in this JSON token.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"This function allows users to query for the contact's internal metadata. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_metadata"),".")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/metadata.ts#L12-L46\n")),(0,l.kt)("p",null,"You'll learn more about these functions in the ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"minting section")," of the tutorial series."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"mintts"},(0,l.kt)("inlineCode",{parentName:"h2"},"mint.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Contains the internal token minting logic.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftMint")),(0,l.kt)("td",{parentName:"tr",align:null},"This function mints a non-fungible token. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_mint"),".")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/mint.ts#L7-L23\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nft_corets"},(0,l.kt)("inlineCode",{parentName:"h2"},"nft_core.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Core logic that allows you to transfer NFTs between users.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTransfer")),(0,l.kt)("td",{parentName:"tr",align:null},"Transfers an NFT to a receiver ID. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_transfer"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTransferCall")),(0,l.kt)("td",{parentName:"tr",align:null},"Transfers an NFT to a receiver and calls a function on the receiver ID's contract. The function returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if the token was transferred from the sender's account. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_transfer_call"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftToken")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to query for the information about a specific NFT. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_token"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftResolveTransfer")),(0,l.kt)("td",{parentName:"tr",align:null},"When you start the ",(0,l.kt)("inlineCode",{parentName:"td"},"nft_transfer_call")," and transfer an NFT, the standard dictates that you should also call a method on the receiver's contract. If the receiver needs you to return the NFT to the sender (as per the return value of the ",(0,l.kt)("inlineCode",{parentName:"td"},"nft_on_transfer")," method), this function allows you to execute that logic. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_resolve_transfer"),".")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/nft_core.ts#L10-L85\n")),(0,l.kt)("p",null,"You'll learn more about these functions in the ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"minting section")," of the tutorial series."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"royaltyts"},(0,l.kt)("inlineCode",{parentName:"h2"},"royalty.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Contains the internal payout-related functions.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftPayout")),(0,l.kt)("td",{parentName:"tr",align:null},"This internal method calculates the payout for a given token. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_payout"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"internalNftTransferPayout")),(0,l.kt)("td",{parentName:"tr",align:null},"Internal method to transfer the token to the receiver ID and return the payout object that should be paid for a given balance. Called during ",(0,l.kt)("strong",{parentName:"td"},"nft_transfer_payout"),".")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/royalty.ts#L7-L45\n")),(0,l.kt)("p",null,"You'll learn more about these functions in the ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/royalty"},"royalty section")," of the tutorial series."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"indexts"},(0,l.kt)("inlineCode",{parentName:"h2"},"index.ts")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This file outlines the smart contract class and what information it stores and keeps track of. In addition, it exposes all public facing methods that are callable by the user.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"init")),(0,l.kt)("td",{parentName:"tr",align:null},"Constructor function used to initialize the contract with some metadata and default state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_mint")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal mint function to mint an NFT.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_token")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to query for info on a specific NFT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to transfer an NFT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer_call")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to transfer an NFT and call ",(0,l.kt)("inlineCode",{parentName:"td"},"nft_on_transfer")," on the receiver's contract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_resolve_transfer")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to resolve the transfer call promise.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_is_approved")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to check whether someone is approved for an NFT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_approve")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to approve someone to transfer your NFT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_payout")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to query for the payout object for an NFT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_transfer_payout")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to transfer an NFT and return the payout object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_revoke")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to revoke someone access to transfer your NFT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_revoke_all")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to revoke everyone's access to transfer your NFT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_total_supply")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to query the total supply of NFTs on the contract.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_tokens")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to paginate through NFTs on the contract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_tokens_for_owner")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to paginate through NFTs for a given owner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_supply_for_owner")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to query for the total number of NFTs owned by someone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nft_metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the internal function to query for the contract's metadata")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/index.ts#L16-L157\n")),(0,l.kt)("p",null,"You'll learn more about these functions in the ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"minting section")," of the tutorial series."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"building-the-skeleton"},"Building the skeleton"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you haven't cloned the main repository yet, open a terminal and run:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/near-examples/nft-tutorial-js/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Next, switch to the ",(0,l.kt)("inlineCode",{parentName:"li"},"1.skeleton")," branch. "),(0,l.kt)("li",{parentName:"ul"},"Install the dependencies (including the JS SDK): ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn")),(0,l.kt)("li",{parentName:"ul"},"Build the contract with ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn build"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/near-examples/nft-tutorial-js/\ncd nft-tutorial-js\ngit checkout 1.skeleton\nyarn && yarn build\n")),(0,l.kt)("p",null,"Once this finishes, the ",(0,l.kt)("inlineCode",{parentName:"p"},"nft-tutorial-js/build")," directory should contain the ",(0,l.kt)("inlineCode",{parentName:"p"},"nft.wasm")," smart contract!"),(0,l.kt)("p",null,"Building the skeleton is useful to validate that everything works properly and that you'll be able to compile improved versions of this NFT contract in the upcoming tutorials."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"You've seen the layout of this NFT smart contract, and how all the functions are laid out across the different source files.\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),", you've been able to compile the contract, and you'll start fleshing out this skeleton in the next ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/minting"},"Minting tutorial"),"."),(0,l.kt)("admonition",{title:"Versioning for this article",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"At the time of this writing, this example works with the following versions:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"near-sdk-js: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.4.0-5")))))}k.isMDXComponent=!0}}]);