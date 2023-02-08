"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},s=void 0,c={unversionedId:"tutorials/fts/predeployed-contract",id:"tutorials/fts/predeployed-contract",title:"Pre-deployed Contract",description:"Learn how to easily receive fungible tokens without doing any software development by using a readily-available FT smart contract.",source:"@site/../docs/3.tutorials/fts/0-predeployed.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/predeployed-contract",permalink:"/near-docs-kor/zh-CN/tutorials/fts/predeployed-contract",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/0-predeployed.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",sidebarPosition:0,frontMatter:{id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},sidebar:"tutorials",previous:{title:"Introduction",permalink:"/near-docs-kor/zh-CN/tutorials/fts/introduction"},next:{title:"Contract Architecture",permalink:"/near-docs-kor/zh-CN/tutorials/fts/skeleton"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using the FT contract",id:"using-the-ft-contract",level:2},{value:"Setup",id:"setup",level:3},{value:"Receiving Fungible Tokens",id:"receiving-fungible-tokens",level:3},{value:"Final remarks",id:"final-remarks",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Learn how to easily receive fungible tokens without doing any software development by using a readily-available FT smart contract.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To complete this tutorial successfully, you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/basics/accounts/creating-accounts"},"A NEAR TestNet account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/near-cli#setup"},"NEAR-CLI"))),(0,o.kt)("h2",{id:"using-the-ft-contract"},"Using the FT contract"),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Log in to your newly created account with ",(0,o.kt)("inlineCode",{parentName:"li"},"near-cli")," by running the following command in your terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near login\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set an environment variable for your account ID to make it easy to copy and paste commands from this tutorial:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export NEARID=YOUR_ACCOUNT_NAME\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_ACCOUNT_NAME")," with the account name you just logged in with including the ",(0,o.kt)("inlineCode",{parentName:"p"},".testnet"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test that the environment variable is set correctly by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo $NEARID\n")),(0,o.kt)("h3",{id:"receiving-fungible-tokens"},"Receiving Fungible Tokens"),(0,o.kt)("p",null,"NEAR has deployed a new Fungible Token contract to the account ",(0,o.kt)("inlineCode",{parentName:"p"},"ft.predeployed.examples.testnet")," which allows users to freely receive some ",(0,o.kt)("inlineCode",{parentName:"p"},"gtNEAR")," - a new fungible token aimed to promote the power of teamwork! Each ",(0,o.kt)("inlineCode",{parentName:"p"},"gtNEAR")," is equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"1e24 yocto-gtNEAR")," similar to how 1 $NEAR is equal to 1e24 yoctoNEAR."),(0,o.kt)("p",null,"Using this pre-deployed contract, let's get some gtNEAR!"),(0,o.kt)("p",null,"Start by calling the method ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_mint")," which is a custom function implemented on this contract in order to send your account some ",(0,o.kt)("inlineCode",{parentName:"p"},"gtNEAR"),"! The following command will send ",(0,o.kt)("inlineCode",{parentName:"p"},"0.01 gtNEAR")," to your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call ft.predeployed.examples.testnet ft_mint \'{"account_id": "\'$NEARID\'", "amount": "10000000000000000000000"}\' --accountId $NEARID\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example response: "),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'Log [ft.predeployed.examples.testnet]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_mint","data":[{"owner_id":"benjiman.testnet","amount":"10000000000000000000000","memo":"FTs Minted"}]}\nTransaction Id Fhqa8YDLKxnxM9jjHCPN4hn1w1RKESYrav3kwDjhWWUu\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/Fhqa8YDLKxnxM9jjHCPN4hn1w1RKESYrav3kwDjhWWUu\n\'\'\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To view tokens owned by an account you can call the FT contract with the following ",(0,o.kt)("inlineCode",{parentName:"li"},"near-cli")," command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view ft.predeployed.examples.testnet ft_balance_of '{\"account_id\": \"'$NEARID'\"}'\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example response: "),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"'2250000000000000000000'\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Congratulations! You just received your first Team Tokens on the NEAR blockchain!"))," \ud83c\udf89"),(0,o.kt)("p",null,"\ud83d\udc49 Now try going to your ",(0,o.kt)("a",{parentName:"p",href:"http://wallet.testnet.near.org"},"NEAR Wallet"),' and view your FTs in the "Balances" tab. \ud83d\udc48 '),(0,o.kt)("admonition",{title:"Pre-deployed Contract",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The contract used in this section has been modified such that you can infinitely get ",(0,o.kt)("inlineCode",{parentName:"p"},"gtNEAR")," by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ft_mint"),". This function is not part of the FT ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core"},"standards")," and has been implemented for the purpose of this tutorial.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"final-remarks"},"Final remarks"),(0,o.kt)("p",null,"This basic example illustrates all the required steps to call an FT smart contract on NEAR and receive your own fungible tokens."),(0,o.kt)("p",null,"Now that you're familiar with the process, you can jump to ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fts/skeleton"},"Contract Architecture")," and learn more about the smart contract structure and how you can build your own FT contract from the ground up."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Happy minting!"))," \ud83e\ude99"),(0,o.kt)("admonition",{title:"Versioning for this article",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"At the time of this writing, this example works with the following versions:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"near-cli: ",(0,o.kt)("inlineCode",{parentName:"li"},"3.4.0")))))}m.isMDXComponent=!0}}]);