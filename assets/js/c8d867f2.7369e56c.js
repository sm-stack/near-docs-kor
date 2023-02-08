"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"indexing",title:"Indexing Solutions on NEAR",sidebar_label:"\ud83d\udd0e Indexing Solutions"},p="Indexing Solutions on NEAR",l={unversionedId:"tools/indexing",id:"tools/indexing",title:"Indexing Solutions on NEAR",description:"Here's a quick overview of Indexer projects on the NEAR ecosystem:",source:"@site/../docs/4.tools/indexing-tools.md",sourceDirName:"4.tools",slug:"/tools/indexing",permalink:"/near-docs-kor/tools/indexing",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/indexing-tools.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"indexing",title:"Indexing Solutions on NEAR",sidebar_label:"\ud83d\udd0e Indexing Solutions"},sidebar:"develop",previous:{title:"\ud83d\udd17 Explorers",permalink:"/near-docs-kor/tools/explorer"},next:{title:"\ud83d\udd2e Oracles",permalink:"/near-docs-kor/develop/relevant-contracts/oracles"}},c={},d=[],m={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"indexing-solutions-on-near"},"Indexing Solutions on NEAR"),(0,o.kt)("p",null,"Here's a quick overview of Indexer projects on the NEAR ecosystem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/concepts/advanced/near-indexer-framework"},"NEAR Indexer Framework"),': a micro-framework providing you with a "live" stream of blocks. Useful to handle on-chain real-time "events".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/indexer-for-explorer"},"NEAR Indexer for Explorer"),": an indexer built on top of the indexer microframework. It watches and stores all events/data from the blockchain to a ",(0,o.kt)("strong",{parentName:"p"},"PostgreSQL database"),".\nYou can clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-indexer-for-explorer"},"GitHub repository")," and customize your own indexer solution.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/concepts/advanced/near-lake-framework"},"NEAR Lake Framework"),": a companion library to NEAR Lake. It allows you to build your own indexer that watches a stream of blocks ",(0,o.kt)("strong",{parentName:"p"},"from a NEAR Lake data source")," and allows you to ",(0,o.kt)("strong",{parentName:"p"},"create your own logic to process that data"),". Keep in mind this is ",(0,o.kt)("strong",{parentName:"p"},"probably the one you want to use for future projects"),", instead of the Indexer Framework. Read ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/concepts/advanced/near-indexer-framework#why-is-it-better-than-near-indexer-framework"},"why is better"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/concepts/advanced/near-lake-framework"},"NEAR Lake Indexer"),": an indexer built on top of the indexer\nmicroframework. It watches the blockchain and stores all events/data from the blockchain as ",(0,o.kt)("strong",{parentName:"p"},"JSON files on AWS S3 or S3 compatible storage"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.pagoda.co/near-lake"},"Pagoda NEAR Lake"),": with this fully managed solution by ",(0,o.kt)("a",{parentName:"p",href:"https://pagoda.co"},"Pagoda Inc."),", you don't need to run your own NEAR Lake Nodes and AWS S3 buckets.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/en/cookbook/near/"},"The Graph"),": development tools to process blockchain events and make the resulting data easily available via a GraphQL API, known individually as a subgraph. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphprotocol/graph-node"},"Graph Node")," is able to process NEAR events, which means that NEAR developers can build subgraphs to index their smart contracts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://getblock.io/explorers/near/blocks/"},"GetBlock"),": developer tools offering a simple and reliable API access to multiple blockchains including NEAR Protocol.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://api.nearblocks.io/api-docs/#/"},"NearBlocks"),": build precise & reliable dApps with NearBlocks APIs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://nearsmart.events/"},"NEAR Smart Events"),": started during ",(0,o.kt)("a",{parentName:"p",href:"https://devpost.com/software/near-smart-events"},"METABUILD III")," hackathon, this tool lets you react to NEAR on-chain complex events, without using code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/octopus-network/octopus-near-indexer-s3"},"Octopus Network NEAR Indexer"),": an indexing solution based on NEAR Lake framework.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.covalenthq.com/docs/networks/aurora/"},"Covalent"),": for ",(0,o.kt)("a",{parentName:"p",href:"https://aurora.dev/"},"Aurora EVM")," indexing, Covalent provides a unified API bringing visibility to billions of Web3 data points."))))}u.isMDXComponent=!0}}]);