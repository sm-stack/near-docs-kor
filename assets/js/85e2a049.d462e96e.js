"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3563],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27286:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"minting-nft-frontend",title:"Minting NFT Front-end",sidebar_label:"Minting Front-end"},s="NFT Minting Front-end",p={unversionedId:"tutorials/nfts/minting-nft-frontend",id:"tutorials/nfts/minting-nft-frontend",title:"Minting NFT Front-end",description:'In this tutorial you\'ll learn how to create a simple NFT front-end and mint a "Go Team" NFT on the NEAR blockchain straight from your web browser.',source:"@site/../docs/3.tutorials/nfts/simple-nft-minting-example.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minting-nft-frontend",permalink:"/tutorials/nfts/minting-nft-frontend",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/simple-nft-minting-example.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"minting-nft-frontend",title:"Minting NFT Front-end",sidebar_label:"Minting Front-end"},sidebar:"tutorials",previous:{title:"Minting NFTs",permalink:"/tutorials/nfts/minting-nfts"},next:{title:"Minecraft NFTs",permalink:"/tutorials/nfts/minecraft-nfts"}},c={},u=[{value:"App Overview",id:"app-overview",level:2},{value:"Smart Contract code",id:"smart-contract-code",level:2},{value:"Front-end",id:"front-end",level:2},{value:"Start",id:"start",level:3},{value:"Mint button",id:"mint-button",level:3},{value:"Final remarks",id:"final-remarks",level:2}],m={toc:u};function d(t){var e=t.components,l=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nft-minting-front-end"},"NFT Minting Front-end"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'In this tutorial you\'ll learn how to create a simple NFT front-end and mint a "Go Team" NFT on the NEAR blockchain straight from your web browser.')),(0,o.kt)("h2",{id:"app-overview"},"App Overview"),(0,o.kt)("p",null,"The app is fairly simple: the user signs in and hits the ",(0,o.kt)("kbd",null,"Mint NFT"),' button. Once the user hits the mint button, a "Go Team" NFT is minted and sent to their NEAR Wallet.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Front-end",src:n(18078).Z,width:"2142",height:"1026"})),(0,o.kt)("h2",{id:"smart-contract-code"},"Smart Contract code"),(0,o.kt)("p",null,"The code for the NFT smart contract can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/introduction"},"Zero to Hero NFT tutorial"),"'s  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial/tree/main/nft-contract/src"},"GitHub repository"),", under the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,o.kt)("p",null,"The contract methods used in this application are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nft_mint"),": Function used to mint tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"check_token"),": Custom function created to check for the existence of a token. This helps to ensure one token per user.")),(0,o.kt)("h2",{id:"front-end"},"Front-end"),(0,o.kt)("p",null,"The front-end of the contract was implemented using ",(0,o.kt)("inlineCode",{parentName:"p"},"create-near-app"),". ",(0,o.kt)("a",{parentName:"p",href:"https://react-bootstrap.github.io/"},"React Bootstrap")," was used for the styling of the application."),(0,o.kt)("p",null,"To bootstrap your React front-end, run the following command on your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-near-app --frontend react --contract rust\n")),(0,o.kt)("p",null,"Then, simply import the contract files from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch, and you'll have the needed structure to run the application."),(0,o.kt)("h3",{id:"start"},"Start"),(0,o.kt)("p",null,"Upon mounting the application's components, the app checks for the existence of a non-fungible token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/App.js#L24-L46\n")),(0,o.kt)("p",null,"If no prior NFT has been minted, the mint button will be available for use."),(0,o.kt)("h3",{id:"mint-button"},"Mint button"),(0,o.kt)("p",null,"Here is the function behind the mint button. The meta data has been filled out for the user already:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token_id")," is set by the user's account id,"),(0,o.kt)("li",{parentName:"ul"},"and the ",(0,o.kt)("inlineCode",{parentName:"li"},"media")," link is hard-coded to a ",(0,o.kt)("inlineCode",{parentName:"li"},"goteam-gif.gif")," hosted on IPFS.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/Components/MintingTool.js#L7-L23\n")),(0,o.kt)("p",null,"After hitting the ",(0,o.kt)("kbd",null,"Mint NFT")," button the user will be able to check out the newly minted NFT at ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/?tab=collectibles"},"wallet.testnet.near.org"),", under the Wallet's ",(0,o.kt)("inlineCode",{parentName:"p"},"Collectibles")," tab."),(0,o.kt)("h2",{id:"final-remarks"},"Final remarks"),(0,o.kt)("p",null,"You can find the complete application repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial-frontend"},"on GitHub")," to clone and run.\nIn the configuration folder you can see that this smart contract has been deployed to ",(0,o.kt)("inlineCode",{parentName:"p"},"nft-frontend-simple-mint.blockhead.testnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/config.js#L1-L2\n")),(0,o.kt)("p",null,"You can also check out the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.testnet.near.org/accounts/nft-frontend-simple-mint.blockhead.testnet"},"explorer link here")," to see how many individuals have been minting their own ",(0,o.kt)("em",{parentName:"p"},"Go Team")," NFTs. ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Happy Minting!"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Clone and run this example from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/nft-tutorial-frontend"},"https://github.com/near-examples/nft-tutorial-frontend"))))}d.isMDXComponent=!0},18078:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/nft-mint-frontend-8bc5c90aa325d1408f13519e44664aee.png"}}]);