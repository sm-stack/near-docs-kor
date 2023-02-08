"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"defining-a-token",title:"Defining a Fungible Token",sidebar_label:"Defining Your Token"},s=void 0,c={unversionedId:"tutorials/fts/defining-a-token",id:"tutorials/fts/defining-a-token",title:"Defining a Fungible Token",description:"This is the first of many tutorials in a series where you'll be creating a complete FT smart contract from scratch that conforms with all the NEAR FT standards. Today you'll learn what a Fungible Token is and how you can define one on the NEAR blockchain. You will be modifying a bare-bones skeleton smart contract by filling in the necessary code snippets needed to add this functionality.",source:"@site/../docs/3.tutorials/fts/2-define-a-token.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/defining-a-token",permalink:"/near-docs-kor/vi/tutorials/fts/defining-a-token",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/2-define-a-token.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:2,frontMatter:{id:"defining-a-token",title:"Defining a Fungible Token",sidebar_label:"Defining Your Token"},sidebar:"tutorials",previous:{title:"Contract Architecture",permalink:"/near-docs-kor/vi/tutorials/fts/skeleton"},next:{title:"Circulating Supply",permalink:"/near-docs-kor/vi/tutorials/fts/circulating-supply"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the skeleton contract",id:"modifications",level:2},{value:"Defining a fungible token",id:"defining-a-fungible-token",level:3},{value:"Initialization Functions",id:"initialization-functions",level:4},{value:"Interacting with the contract on-chain",id:"interacting-with-the-contract-on-chain",level:2},{value:"Deploying the contract",id:"deploy-the-contract",level:3},{value:"Creating the fungible token",id:"initialize-contract",level:3},{value:"Viewing the contract&#39;s metadata",id:"viewing-the-contracts-metadata",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Next Steps",id:"next-steps",level:2}],h={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the first of many tutorials in a series where you'll be creating a complete FT smart contract from scratch that conforms with all the NEAR ",(0,i.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core"},"FT standards"),". Today you'll learn what a Fungible Token is and how you can define one on the NEAR blockchain. You will be modifying a bare-bones ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/fts/skeleton"},"skeleton smart contract")," by filling in the necessary code snippets needed to add this functionality."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"To get started, switch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"1.skeleton")," folder in our repo. If you haven't cloned the repository, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/fts/skeleton"},"Contract Architecture")," to get started."),(0,i.kt)("p",null,"If you wish to see the finished code for this portion of the tutorial, that can be found on the ",(0,i.kt)("inlineCode",{parentName:"p"},"2.defining-a-token")," folder."),(0,i.kt)("h2",{id:"modifications"},"Modifications to the skeleton contract"),(0,i.kt)("p",null,"At its very core, a fungible token is an exchangeable asset that ",(0,i.kt)("strong",{parentName:"p"},"is divisible")," but is ",(0,i.kt)("strong",{parentName:"p"},"not unique"),". For example, if Benji had 1 Canadian dollar, it would be worth the exact same as Matt's Canadian dollar. Both their dollars are fungible and exchangeable. In this case, the fungible token is the canadian dollar. All fiat currencies are fungible and exchangeable."),(0,i.kt)("p",null,"Non-fungible tokens, on the other hand, are ",(0,i.kt)("strong",{parentName:"p"},"unique")," and ",(0,i.kt)("strong",{parentName:"p"},"indivisible")," such as a house or a car. You ",(0,i.kt)("strong",{parentName:"p"},"cannot")," have another asset that is exactly the same. Even if you had a specific car model, such as a Corvette 1963 C2 Stingray, each car would have a separate serial number with a different number of kilometers driven etc..."),(0,i.kt)("p",null,"Now that you understand what a fungible token is, let's look at how you can define one in the contract itself."),(0,i.kt)("h3",{id:"defining-a-fungible-token"},"Defining a fungible token"),(0,i.kt)("p",null,"Start by navigating to the ",(0,i.kt)("inlineCode",{parentName:"p"},"1.skeleton/src/metadata.rs")," file. This is where you'll define the metadata for the fungible token itself. There are several ways NEAR allows you to customize your token, all of which are found in the ",(0,i.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core#metadata"},"metadata")," standard. Let's break them up into the optional and non-optional portions."),(0,i.kt)("p",null,"Required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"spec"),": Indicates the version of the standard the contract is using. This should be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"ft-1.0.0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),': The human readable name of the token such as "Wrapped NEAR" or "TEAM Tokens".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"symbol"),": The abbreviation of the token such as ",(0,i.kt)("inlineCode",{parentName:"li"},"wNEAR")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"gtNEAR"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"decimals"),": used in frontends to show the proper significant digits of a token. This concept is explained well in this ",(0,i.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/3.x/erc20#a-note-on-decimals"},"OpenZeppelin post"),".")),(0,i.kt)("p",null,"Optional:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"icon"),": The image for the token (must be a ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs"},"data URL"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reference"),": A link to any supplementary JSON details for the token stored off-chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reference_hash"),": A hash of the referenced JSON.")),(0,i.kt)("p",null,"With this finished, you can now add these fields to the metadata in the contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/metadata.rs#L8-L18\n")),(0,i.kt)("p",null,"Now that you've defined what the metadata will look like, you need someway to store it on the contract. Switch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"1.skeleton/src/lib.rs")," file and add the following to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract")," struct. You'll want to store the metadata on the contract under the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs#L18-L23\n")),(0,i.kt)("p",null,"You've now defined ",(0,i.kt)("em",{parentName:"p"},"where")," the metadata will live but you'll also need someway to pass in the metadata itself. This is where the initialization function comes into play."),(0,i.kt)("h4",{id:"initialization-functions"},"Initialization Functions"),(0,i.kt)("p",null,"You'll now create what's called an initialization function; you can name it ",(0,i.kt)("inlineCode",{parentName:"p"},"new"),". This function needs to be invoked when you first deploy the contract. It will initialize all the contract's fields that you've defined with default values. It's important to note that you ",(0,i.kt)("strong",{parentName:"p"},"cannot")," call these methods more than once."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs#L56-L72\n")),(0,i.kt)("p",null,"More often than not when doing development, you'll need to deploy contracts several times. You can imagine that it might get tedious to have to pass in metadata every single time you want to initialize the contract. For this reason, let's create a function that can initialize the contract with a set of default ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),". You can call it ",(0,i.kt)("inlineCode",{parentName:"p"},"new_default_meta"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs#L36-L52\n")),(0,i.kt)("p",null,"This function is simply calling the previous ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," function and passing in some default metadata behind the scenes."),(0,i.kt)("p",null,"At this point, you've defined the metadata for your fungible tokens and you've created a way to store this information on the contract. The last step is to introduce a getter that will query for and return the metadata. Switch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"1.skeleton/src/metadata.rs")," file and add the following code to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ft_metadata")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/metadata.rs#L20-L30\n")),(0,i.kt)("p",null,"This function will get the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," object from the contract which is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"FungibleTokenMetadata")," and will return it."),(0,i.kt)("h2",{id:"interacting-with-the-contract-on-chain"},"Interacting with the contract on-chain"),(0,i.kt)("p",null,"Now that the logic for defining a custom fungible token is complete and you've added a way to query for the metadata, it's time to build and deploy your contract to the blockchain."),(0,i.kt)("h3",{id:"deploy-the-contract"},"Deploying the contract"),(0,i.kt)("p",null,"We've included a very simple way to build the smart contracts throughout this tutorial using a bash script. The following command will build the contract and copy over the ",(0,i.kt)("inlineCode",{parentName:"p"},".wasm")," file to a folder ",(0,i.kt)("inlineCode",{parentName:"p"},"out/contract.wasm"),". The build script can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"1.skeleton/build.sh")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd 1.skeleton && ./build.sh && cd ..\n")),(0,i.kt)("p",null,"There will be a list of warnings on your console, but as the tutorial progresses, these warnings will go away. You should now see the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"out/")," with the file ",(0,i.kt)("inlineCode",{parentName:"p"},"contract.wasm")," inside. This is what we will be deploying to the blockchain."),(0,i.kt)("p",null,"For deployment, you will need a NEAR account with the keys stored on your local machine. Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/"},"NEAR wallet")," site and create an account."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please ensure that you deploy the contract to an account with no pre-existing contracts. It's easiest to simply create a new account or create a sub-account for this tutorial.")),(0,i.kt)("p",null,"Log in to your newly created account with ",(0,i.kt)("inlineCode",{parentName:"p"},"near-cli")," by running the following command in your terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"near login\n")),(0,i.kt)("p",null,"To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_ACCOUNT_NAME")," with the account name you just logged in with including the ",(0,i.kt)("inlineCode",{parentName:"p"},".testnet")," portion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export FT_CONTRACT_ID="YOUR_ACCOUNT_NAME"\n')),(0,i.kt)("p",null,"Test that the environment variable is set correctly by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo $FT_CONTRACT_ID\n")),(0,i.kt)("p",null,"Verify that the correct account ID is printed in the terminal. If everything looks correct you can now deploy your contract.\nIn the root of your FT project run the following command to deploy your smart contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"near deploy --wasmFile out/contract.wasm --accountId $FT_CONTRACT_ID\n")),(0,i.kt)("p",null,"At this point, the contract should have been deployed to your account and you're ready to move onto creating your personalized fungible token."),(0,i.kt)("h3",{id:"initialize-contract"},"Creating the fungible token"),(0,i.kt)("p",null,"The very first thing you need to do once the contract has been deployed is to initialize it. For simplicity, let's call the default metadata initialization function you wrote earlier so that you don't have to type the metadata manually in the CLI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'near call $FT_CONTRACT_ID new_default_meta \'{"owner_id": "\'$FT_CONTRACT_ID\'", "total_supply": "0"}\' --accountId $FT_CONTRACT_ID\n')),(0,i.kt)("h3",{id:"viewing-the-contracts-metadata"},"Viewing the contract's metadata"),(0,i.kt)("p",null,"Now that the contract has been initialized, you can query for the metadata by calling the function you wrote earlier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"near view $FT_CONTRACT_ID ft_metadata\n")),(0,i.kt)("p",null,"This should return an output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  spec: 'ft-1.0.0',\n  name: 'Team Token FT Tutorial',\n  symbol: 'gtNEAR',\n  icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/\n        /*\n        ...lots of base64 data...\n        */\n        j4Mvhy9H9NlnieJ4iwoo9ZlyLGx4pnrPWeB4CVGRZZcJ7Vohwhi0z5MJY4cVL4MdP/Z',\n  reference: null,\n  reference_hash: null,\n  decimals: 24\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Go team!")," You've now verified that everything works correctly and you've defined your own fungible token!"),(0,i.kt)("p",null,"In the next tutorial, you'll learn about how to create a total supply and view the tokens in the wallet."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this tutorial, you went through the basics of setting up and understanding the logic behind creating a fungible token on the blockchain using a skeleton contract."),(0,i.kt)("p",null,"You first looked at ",(0,i.kt)("a",{parentName:"p",href:"#modifications"},"what a fungible token is")," and how it differs from a non-fungible token. You then learned how to customize and create your own fungible tokens and how you could modify the skeleton contract to achieve this. Finally you built and deployed the contract and interacted with it using the NEAR CLI."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/fts/circulating-supply"},"next tutorial"),", you'll find out how to create an initial supply of tokens and have them show up in the NEAR wallet."))}p.isMDXComponent=!0}}]);