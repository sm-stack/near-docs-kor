"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8921],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30543:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"introduction",title:"NFT Zero to Hero JavaScript Edition",sidebar_label:"Introduction"},s=void 0,p={unversionedId:"tutorials/nfts/js/introduction",id:"tutorials/nfts/js/introduction",title:"NFT Zero to Hero JavaScript Edition",description:"In this Zero to Hero series, you'll find a set of tutorials that will cover every aspect of a non-fungible token (NFT) smart contract.",source:"@site/../docs/3.tutorials/nfts/js/0-intro.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/introduction",permalink:"/tutorials/nfts/js/introduction",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/0-intro.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:0,frontMatter:{id:"introduction",title:"NFT Zero to Hero JavaScript Edition",sidebar_label:"Introduction"},sidebar:"tutorials",previous:{title:"Credentials",permalink:"/tutorials/indexer/credentials"},next:{title:"Pre-deployed Contract",permalink:"/tutorials/nfts/js/predeployed-contract"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In this ",(0,o.kt)("em",{parentName:"p"},"Zero to Hero")," series, you'll find a set of tutorials that will cover every aspect of a non-fungible token (NFT) smart contract.\nYou'll start by minting an NFT using a pre-deployed contract and by the end you'll end up building a fully-fledged NFT smart contract that supports every extension.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The JS-SDK is currently in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/near/near-sdk-js/releases/"},(0,o.kt)("inlineCode",{parentName:"a"},"Alpha"))),". "),(0,o.kt)("p",{parentName:"admonition"},"The JavaScript runtime has not been fully audited. For creating smart contracts that hold value please use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs"},(0,o.kt)("inlineCode",{parentName:"a"},"near-sdk-rs")),".\n")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To complete these tutorials successfully, you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/develop/prerequisites#nodejs"},"Node.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wallet.testnet.near.org/create"},"A NEAR Wallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/near-cli#setup"},"NEAR-CLI"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"These are the steps that will bring you from ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Zero"))," to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Hero"))," in no time! \ud83d\udcaa"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Step"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/predeployed-contract"},"Pre-deployed contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Mint an NFT without the need to code, create, or deploy a smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/skeleton"},"Contract architecture")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn the basic architecture of the NFT smart contract and compile code.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/minting"},"Minting")),(0,o.kt)("td",{parentName:"tr",align:null},"Flesh out the skeleton so the smart contract can mint a non-fungible token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/upgrade-contract"},"Upgrade a contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Discover the process to upgrade an existing smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/enumeration"},"Enumeration")),(0,o.kt)("td",{parentName:"tr",align:null},"Explore enumeration methods that can be used to return the smart contract's states.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/core"},"Core")),(0,o.kt)("td",{parentName:"tr",align:null},"Extend the NFT contract using the core standard which allows token transfer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/approvals"},"Approvals")),(0,o.kt)("td",{parentName:"tr",align:null},"Expand the contract allowing other accounts to transfer NFTs on your behalf.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/royalty"},"Royalty")),(0,o.kt)("td",{parentName:"tr",align:null},"Add NFT royalties allowing for a set percentage to be paid out to the token creator.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/events"},"Events")),(0,o.kt)("td",{parentName:"tr",align:null},"in this tutorial you'll explore the events extension, allowing the contract to react on certain events.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/js/marketplace"},"Marketplace")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn about how common marketplaces operate on NEAR and dive into some of the code that allows buying and selling NFTs")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Ready to start? Jump to the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/js/predeployed-contract"},"Pre-deployed Contract")," tutorial and begin your learning journey!"),(0,o.kt)("p",null,"If you already know about non-fungible tokens and smart contracts, feel free to skip and jump directly to the tutorial of your interest. The tutorials have been designed so you can start at any given point!"),(0,o.kt)("admonition",{title:"Questions?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udc49  Join us on ",(0,o.kt)("a",{parentName:"p",href:"https://near.chat/"},"Discord")," and let us know in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#development")," channels. \ud83d\udc48"),(0,o.kt)("p",{parentName:"admonition"},"We also host daily ",(0,o.kt)("a",{parentName:"p",href:"https://near.org/office-hours/"},"Office Hours")," live where the DevRel team will answer any questions you may have. \ud83e\udd14"),(0,o.kt)("p",{parentName:"admonition"},"Monday \u2013 Friday 11AM \u2013 12PM Pacific (6PM \u2013 7PM UTC)")))}m.isMDXComponent=!0}}]);