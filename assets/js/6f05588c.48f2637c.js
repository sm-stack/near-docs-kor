"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),h=l,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=["components"],i={id:"simple-fts",title:"Minting FTs (Simple)"},s=void 0,u={unversionedId:"tutorials/fts/simple-fts",id:"tutorials/fts/simple-fts",title:"Minting FTs (Simple)",description:"In this tutorial, you'll learn how to easily create your own Fungible Tokens (FT) without doing any software development by using a readily-available smart contract.",source:"@site/../docs/3.tutorials/fts/simple-fts.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/simple-fts",permalink:"/tutorials/fts/simple-fts",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/simple-fts.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"simple-fts",title:"Minting FTs (Simple)"},sidebar:"tutorials",previous:{title:"Fungible Tokens",permalink:"/develop/relevant-contracts/ft"},next:{title:"Non Fungible Tokens",permalink:"/develop/relevant-contracts/nft"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Wallet",id:"wallet",level:3},{value:"Using the FT contract",id:"using-the-ft-contract",level:2},{value:"Minting your FTs",id:"minting-your-fts",level:3},{value:"Checking your Wallet",id:"checking-your-wallet",level:3},{value:"Final remarks",id:"final-remarks",level:2},{value:"Versioning for this article",id:"versioning-for-this-article",level:2}],m={toc:p};function h(e){var t=e.components,i=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, you'll learn how to easily create your own Fungible Tokens (FT) without doing any software development by using a readily-available smart contract.\nThis article will show you how to use an existing ",(0,r.kt)("a",{parentName:"p",href:"#fungible-token-contract"},"FT smart contract"),", and you'll learn ",(0,r.kt)("a",{parentName:"p",href:"#minting-your-fts"},"how to mint")," fungible tokens and ",(0,r.kt)("a",{parentName:"p",href:"#checking-your-wallet"},"view them")," in your Wallet."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To complete this tutorial successfully, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#wallet"},"A NEAR account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/tools/near-cli#setup"},"NEAR command-line interface")," (",(0,r.kt)("inlineCode",{parentName:"li"},"near-cli"),")")),(0,r.kt)("h3",{id:"wallet"},"Wallet"),(0,r.kt)("p",null,"To store your fungible tokens you'll need a ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/"},"NEAR Wallet"),".\nIf you don't have one yet, you can create one easily by following ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/create"},"these instructions"),"."),(0,r.kt)("p",null,"Once you have your Wallet account, you can click on the ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/?tab=balances"},"Balances Tab")," where all your Fungible Tokens will be listed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wallet",src:n(63450).Z,width:"1344",height:"1228"})),(0,r.kt)("h2",{id:"using-the-ft-contract"},"Using the FT contract"),(0,r.kt)("p",null,"Now that you have all the tools in place, you're ready to start using the FT smart contract to ",(0,r.kt)("a",{parentName:"p",href:"#minting-your-fts"},"mint your FTs"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you don't have the command line interface, please ",(0,r.kt)("a",{parentName:"p",href:"/tools/near-cli#setup"},"follow these steps"),".")),(0,r.kt)("p",null,"Ensure you have credentials stored locally for the ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," account you will be using to mint tokens with by running the following ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli")," command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near login\n")),(0,r.kt)("p",null,"To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_ACCOUNT_NAME")," with the account name you just logged in with including the ",(0,r.kt)("inlineCode",{parentName:"p"},".testnet"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ID=YOUR_ACCOUNT_NAME\n")),(0,r.kt)("p",null,"Test that the environment variable is set correctly by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo $ID\n")),(0,r.kt)("h3",{id:"minting-your-fts"},"Minting your FTs"),(0,r.kt)("p",null,"NEAR has already deployed a contract to the account ",(0,r.kt)("inlineCode",{parentName:"p"},"ft.examples.testnet")," which allows anyone to freely mint ",(0,r.kt)("inlineCode",{parentName:"p"},"TeamTokens"),". This is the account you'll be interacting with to mint your fungible tokens."),(0,r.kt)("p",null,"Now let's mint some tokens! The command below will mint ",(0,r.kt)("inlineCode",{parentName:"p"},"25")," TeamTokens to your account.\nIf you look carefully, the ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver_id")," defines the new owner of the tokens you are minting, while ",(0,r.kt)("inlineCode",{parentName:"p"},"--accountId")," specifies which accounted will be used to sign and pay for this transaction.\nAlso, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"--deposit")," flag which attaches ",(0,r.kt)("inlineCode",{parentName:"p"},".001")," $NEAR to the call to ",(0,r.kt)("a",{parentName:"p",href:"/concepts/storage/storage-staking"},"pay for storage")," on the fungible token contract. The amount is slightly less than this but you will be refunded the difference. (See the transaction in your wallet) The amount of tokens to be minted is set to 25 but you can increase this value up to 1000."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call ft.examples.testnet ft_mint \'{"receiver_id": "\'$ID\'", "amount": "25"}\' --deposit 0.1 --accountId $ID\n')),(0,r.kt)("p",null,"After minting your tokens you can query the contract to view the balance of any accountId passed. This is done by performing a contract ",(0,r.kt)("inlineCode",{parentName:"p"},"view")," call and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ft_balance_of")," endpoint on the fungible token contract. Run the following in your terminal to view the balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near view ft.examples.testnet ft_balance_of '{\"account_id\": \"'$ID'\"}'\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example response: "),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'View call: ft.examples.testnet.ft_balance_of({"account_id": "benji_test.testnet"})\n\'25\'\n')))),(0,r.kt)("h3",{id:"checking-your-wallet"},"Checking your Wallet"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"After you mint your fungible token you can ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org"},"view it in your NEAR Wallet"),"!")),(0,r.kt)("blockquote",null,(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Wallet with token",src:n(46271).Z,width:"675",height:"703"})),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Congratulations! You just minted your first Fungible Token on the NEAR blockchain!"))," \ud83c\udf89"),(0,r.kt)("h2",{id:"final-remarks"},"Final remarks"),(0,r.kt)("p",null,"This basic example illustrates all the required steps to call a FT smart contract on NEAR and start minting your own fungible tokens."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Happy minting!"))," \ud83e\ude99"),(0,r.kt)("h2",{id:"versioning-for-this-article"},"Versioning for this article"),(0,r.kt)("p",null,"At the time of this writing, this example works with the following versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"near-cli: ",(0,r.kt)("inlineCode",{parentName:"li"},"2.1.1"))))}h.isMDXComponent=!0},63450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/empty-wallet-ft-tab-584f71775a4272f699eaed7d0d441c10.png"},46271:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/teamtoken-c5302057132cb55093a695e70690b34d.png"}}]);