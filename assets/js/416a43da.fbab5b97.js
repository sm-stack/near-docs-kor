"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4670],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62550:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"introduction",title:"Fungible Tokens Zero to Hero",sidebar_label:"Introduction"},s=void 0,u={unversionedId:"tutorials/fts/introduction",id:"tutorials/fts/introduction",title:"Fungible Tokens Zero to Hero",description:"In this Zero to Hero series, you'll find a set of tutorials covering every aspect of a fungible token (FT) smart contract.",source:"@site/../docs/3.tutorials/fts/0-intro.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/introduction",permalink:"/near-docs-kor/tutorials/fts/introduction",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/0-intro.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:0,frontMatter:{id:"introduction",title:"Fungible Tokens Zero to Hero",sidebar_label:"Introduction"},sidebar:"tutorials",previous:{title:"Lazy Minting, Collections, and More!",permalink:"/near-docs-kor/tutorials/nfts/series"},next:{title:"Pre-deployed Contract",permalink:"/near-docs-kor/tutorials/fts/predeployed-contract"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:c};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In this ",(0,o.kt)("em",{parentName:"p"},"Zero to Hero")," series, you'll find a set of tutorials covering every aspect of a fungible token (FT) smart contract.\nYou'll start by interacting with a pre-deployed contract and by the end you'll have built a fully-fledged FT smart contract that supports every extension of the standards.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To complete these tutorials successfully, you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/develop/prerequisites"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/basics/accounts/creating-accounts"},"A NEAR TestNet account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/near-cli#setup"},"NEAR-CLI"))),(0,o.kt)("admonition",{title:"New to Rust?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are new to Rust and want to dive into smart contract development, our ",(0,o.kt)("a",{parentName:"p",href:"/develop/quickstart-guide"},"Quick-start guide")," is a great place to start.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"These are the steps that will bring you from ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Zero"))," to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Hero"))," in no time! \ud83d\udcaa"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Step"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/fts/predeployed-contract"},"Pre-deployed contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Receive FTs without the need to code, create, or deploy a smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/fts/skeleton"},"Contract architecture")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn the basic architecture of the FT smart contract and compile the code.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/fts/defining-a-token"},"Defining a Token")),(0,o.kt)("td",{parentName:"tr",align:null},"Flesh out what it means to have a FT and how you can customize your own")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/fts/circulating-supply"},"Circulating Supply")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn how to create an initial supply and have the token show up in your wallet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/fts/registering-accounts"},"Registering Accounts")),(0,o.kt)("td",{parentName:"tr",align:null},"Explore how you can implement and understand the storage management standard to avoid malicious users from draining your funds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/fts/transfers"},"Transferring FTs")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn how to transfer FTs and discover some of the true powers that the core standard brings")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/tutorials/fts/marketplace"},"Marketplace")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn about how common marketplaces operate on NEAR and dive into some of the code that allows buying and selling NFTs by using Fungible Tokens")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Ready to start? Jump to the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fts/predeployed-contract"},"Pre-deployed Contract")," tutorial and begin your learning journey!"),(0,o.kt)("p",null,"If you already know about fungible tokens and smart contracts, feel free to skip and jump directly to the tutorial of your interest. The tutorials have been designed so you can start at any given point!"),(0,o.kt)("admonition",{title:"Questions?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udc49  Join us on ",(0,o.kt)("a",{parentName:"p",href:"https://near.chat/"},"Discord")," and let us know in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#development")," channels. \ud83d\udc48"),(0,o.kt)("p",{parentName:"admonition"},"We also host daily ",(0,o.kt)("a",{parentName:"p",href:"https://near.org/office-hours/"},"Office Hours")," live where the DevRel team will answer any questions you may have. \ud83e\udd14"),(0,o.kt)("p",{parentName:"admonition"},"Monday \u2013 Friday 11AM \u2013 12PM Pacific (6PM \u2013 7PM UTC)")))}m.isMDXComponent=!0}}]);