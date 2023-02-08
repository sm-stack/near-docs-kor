"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9425],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(k,l(l({ref:e},u),{},{components:r})):n.createElement(k,l({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},83368:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"introduction",title:"NFT Zero to Hero",sidebar_label:"Introduction"},s=void 0,p={unversionedId:"tutorials/nfts/introduction",id:"tutorials/nfts/introduction",title:"NFT Zero to Hero",description:"In this Zero to Hero series, you'll find a set of tutorials that will cover every aspect of a non-fungible token (NFT) smart contract.",source:"@site/../docs/3.tutorials/nfts/0-intro.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/introduction",permalink:"/tutorials/nfts/introduction",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/0-intro.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:0,frontMatter:{id:"introduction",title:"NFT Zero to Hero",sidebar_label:"Introduction"},sidebar:"tutorials",previous:{title:"Marketplace",permalink:"/tutorials/nfts/js/marketplace"},next:{title:"Pre-deployed Contract",permalink:"/tutorials/nfts/predeployed-contract"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:d};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In this ",(0,o.kt)("em",{parentName:"p"},"Zero to Hero")," series, you'll find a set of tutorials that will cover every aspect of a non-fungible token (NFT) smart contract.\nYou'll start by minting an NFT using a pre-deployed contract and by the end you'll end up building a fully-fledged NFT smart contract that supports every extension.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To complete these tutorials successfully, you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/develop/prerequisites"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wallet.testnet.near.org/create"},"A NEAR Wallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/near-cli#setup"},"NEAR-CLI"))),(0,o.kt)("admonition",{title:"New to Rust?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are new to Rust and want to dive into smart contract development, our ",(0,o.kt)("a",{parentName:"p",href:"/develop/quickstart-guide"},"Quick-start guide")," is a great place to start.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"These are the steps that will bring you from ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Zero"))," to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Hero"))," in no time! \ud83d\udcaa"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Step"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/predeployed-contract"},"Pre-deployed contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Mint an NFT without the need to code, create, or deploy a smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/skeleton"},"Contract architecture")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn the basic architecture of the NFT smart contract and compile code.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/minting"},"Minting")),(0,o.kt)("td",{parentName:"tr",align:null},"Flesh out the skeleton so the smart contract can mint a non-fungible token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/upgrade-contract"},"Upgrade a contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Discover the process to upgrade an existing smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/enumeration"},"Enumeration")),(0,o.kt)("td",{parentName:"tr",align:null},"Explore enumeration methods that can be used to return the smart contract's states.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/core"},"Core")),(0,o.kt)("td",{parentName:"tr",align:null},"Extend the NFT contract using the core standard which allows token transfer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/approvals"},"Approvals")),(0,o.kt)("td",{parentName:"tr",align:null},"Expand the contract allowing other accounts to transfer NFTs on your behalf.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/royalty"},"Royalty")),(0,o.kt)("td",{parentName:"tr",align:null},"Add NFT royalties allowing for a set percentage to be paid out to the token creator.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/nfts/marketplace"},"Marketplace")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn about how common marketplaces operate on NEAR and dive into some of the code that allows buying and selling NFTs")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Ready to start? Jump to the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/nfts/predeployed-contract"},"Pre-deployed Contract")," tutorial and begin your learning journey!"),(0,o.kt)("p",null,"If you already know about non-fungible tokens and smart contracts, feel free to skip and jump directly to the tutorial of your interest. The tutorials have been designed so you can start at any given point!"),(0,o.kt)("admonition",{title:"Questions?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udc49  Join us on ",(0,o.kt)("a",{parentName:"p",href:"https://near.chat/"},"Discord")," and let us know in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#development")," channels. \ud83d\udc48"),(0,o.kt)("p",{parentName:"admonition"},"We also host daily ",(0,o.kt)("a",{parentName:"p",href:"https://near.org/office-hours/"},"Office Hours")," live where the DevRel team will answer any questions you may have. \ud83e\udd14"),(0,o.kt)("p",{parentName:"admonition"},"Monday \u2013 Friday 11AM \u2013 12PM Pacific (6PM \u2013 7PM UTC)")))}m.isMDXComponent=!0}}]);