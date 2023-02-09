"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=r(87462),o=r(63366),a=(r(67294),r(3905));const s=r.p+"assets/images/chapter-2-solve-2617d72e43b2f9ddfd70608944530268.gif",i=r.p+"assets/images/puzzle-piggy-bank--r3v.near--rev_rodrigueza-28a18e413cc78664b4c1f4943a743507.png";var l=["components"],c={sidebar_position:1,sidebar_label:"Overview",title:"Highlights of some beginner topics covered."},p="Diving deeper",u={unversionedId:"tutorials/crosswords/beginner/overview",id:"tutorials/crosswords/beginner/overview",title:"Highlights of some beginner topics covered.",description:"In the last chapter we installed Rust and got up and running with a simple smart contract. The contract has a few issues, however, and isn't as powerful as we'd like it to be. For instance, we can only store one crossword puzzle in the smart contract, the frontend is  hardcoded, and we don't offer any incentives to the person who wins.",source:"@site/../docs/3.tutorials/crosswords/02-beginner/00-overview.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/overview",permalink:"/near-docs-kor/vi/tutorials/crosswords/beginner/overview",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/00-overview.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",title:"Highlights of some beginner topics covered."},sidebar:"tutorials",previous:{title:"Add simple frontend",permalink:"/near-docs-kor/vi/tutorials/crosswords/basics/simple-frontend"},next:{title:"Store multiple puzzles",permalink:"/near-docs-kor/vi/tutorials/crosswords/beginner/collections"}},d={},h=[{value:"Completed project",id:"completed-project",level:2}],m={toc:h};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"diving-deeper"},"Diving deeper"),(0,a.kt)("p",null,"In the last chapter we installed Rust and got up and running with a simple smart contract. The contract has a few issues, however, and isn't as powerful as we'd like it to be. For instance, we can only store one crossword puzzle in the smart contract, the frontend is  hardcoded, and we don't offer any incentives to the person who wins."),(0,a.kt)("p",null,"Let's give the smart contract the ability to store multiple crosswords and offer the winner a prize, paid in NEAR."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:i,alt:"Man holding a book full of crossword puzzles, in his other hand he's holding a piggy bank. Art created by r3v.near"}),(0,a.kt)("figcaption",{class:"full-width"},"Art by ",(0,a.kt)("a",{href:"https://twitter.com/rev_rodrigueza",target:"_blank"},"r3v.near"))),(0,a.kt)("br",null),(0,a.kt)("p",null,"In this chapter we'll:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allow the contract to store multiple crossword puzzles"),(0,a.kt)("li",{parentName:"ul"},"Store the positions of the clues in the contract"),(0,a.kt)("li",{parentName:"ul"},"Allow users to log in with a NEAR account"),(0,a.kt)("li",{parentName:"ul"},"Give a prize (in NEAR tokens) to the first person to solve the puzzle"),(0,a.kt)("li",{parentName:"ul"},"Explore using Rust structs and enums"),(0,a.kt)("li",{parentName:"ul"},"more\u2026")),(0,a.kt)("figure",null,(0,a.kt)("img",{src:s,width:"600",alt:"A user fills in the last clue in a crossword puzzle and an overlay appears saying that a transaction is pending"}),(0,a.kt)("figcaption",null,"A user solves the crossword puzzle, interacts with the blockchain, and gets a prize")),(0,a.kt)("p",null,"As we implement the list above, we'll learn key concepts about NEAR:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nomicon.io/RuntimeSpec/Actions.html"},"Actions")),(0,a.kt)("li",{parentName:"ul"},"Full and function-call ",(0,a.kt)("a",{parentName:"li",href:"https://docs.near.org/concepts/basics/account#access-keys"},"access keys")),(0,a.kt)("li",{parentName:"ul"},"NEAR's specialized ",(0,a.kt)("a",{parentName:"li",href:"https://docs.near.org/concepts/storage/data-storage#rust-collection-types"},"Collections")," that are generally preferable to, say, Rust's standard HashMap "),(0,a.kt)("li",{parentName:"ul"},"The flow of logging in to a decentralized app (dApp)"),(0,a.kt)("li",{parentName:"ul"},"more\u2026")),(0,a.kt)("p",null,"Let's jump right in!"),(0,a.kt)("h2",{id:"completed-project"},"Completed project"),(0,a.kt)("p",null,"Here's the final code for this chapter:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near-examples/crossword-tutorial-chapter-2"},"https://github.com/near-examples/crossword-tutorial-chapter-2")))}f.isMDXComponent=!0}}]);