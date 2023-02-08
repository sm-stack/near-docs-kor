"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8392],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=d(r),u=n,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return r?a.createElement(k,o(o({ref:e},c),{},{components:r})):a.createElement(k,o({ref:e},c))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9051:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"providers",title:"RPC Providers"},p=void 0,d={unversionedId:"api/rpc/providers",id:"api/rpc/providers",title:"RPC Providers",description:"There are multiple RPC providers from which you can choose from. These providers will work as intermediaries to help you interact with the NEAR network.",source:"@site/../docs/5.api/rpc/providers.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/providers",permalink:"/api/rpc/providers",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/providers.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"providers",title:"RPC Providers"},sidebar:"api",previous:{title:"Home",permalink:"/api/rpc/introduction"},next:{title:"Setup",permalink:"/api/rpc/setup"}},c={},m=[],s={toc:m};function u(t){var e=t.components,r=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are multiple RPC providers from which you can choose from. These providers will work as intermediaries to help you interact with the NEAR network.\nDepending on where the provider is located you'll experience different latency levels. You can potentially use multiple providers for redundancy and\nbalancing."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Endpoint Root"),(0,i.kt)("th",{parentName:"tr",align:null},"Provider"),(0,i.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://rpc.mainnet.near.org")),(0,i.kt)("td",{parentName:"tr",align:null},"NEAR"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/rpc/setup"},"You are there!"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://near-mainnet.api.pagoda.co/rpc/v1")),(0,i.kt)("td",{parentName:"tr",align:null},"Pagoda"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.pagoda.co/console"},"https://www.pagoda.co/console"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://near-mainnet.infura.io/v3/")),(0,i.kt)("td",{parentName:"tr",align:null},"Infura"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.infura.io/infura/networks/near"},"https://docs.infura.io/infura/networks/near"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://rpc.dev.gateway.fm/v1/near/")),(0,i.kt)("td",{parentName:"tr",align:null},"Gateway.fm"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://gateway.fm/"},"https://gateway.fm/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://rpc.ankr.com/near")),(0,i.kt)("td",{parentName:"tr",align:null},"ankr.com"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.ankr.com/docs/build-blockchain/chains/v2/near/"},"https://www.ankr.com/docs/build-blockchain/chains/v2/near/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://public-rpc.blockpi.io/http/near")),(0,i.kt)("td",{parentName:"tr",align:null},"BlockPi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://chains.blockpi.io/#/near"},"https://chains.blockpi.io/#/near"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"figment.io"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.figment.io/guides/staking-api/near/delegate/"},"https://docs.figment.io/guides/staking-api/near/delegate/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Chainstack"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://chainstack.com/build-better-with-near/"},"https://chainstack.com/build-better-with-near/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"QuickNode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.quicknode.com/chains/near"},"https://www.quicknode.com/chains/near"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://near-mainnet-rpc.allthatnode.com:3030")),(0,i.kt)("td",{parentName:"tr",align:null},"All That Node"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.allthatnode.com/protocols/near/"},"https://docs.allthatnode.com/protocols/near/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://getblock.io/nodes/near/")),(0,i.kt)("td",{parentName:"tr",align:null},"GetBlock"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://getblock.io/nodes/near/"},"https://getblock.io/nodes/near/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://bit.do/freeapikey-near")),(0,i.kt)("td",{parentName:"tr",align:null},"NOWNodes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://nownodes.io/"},"https://nownodes.io/"))))))}u.isMDXComponent=!0}}]);