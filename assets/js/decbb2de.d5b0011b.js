"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return r?o.createElement(f,n(n({ref:t},p),{},{components:r})):o.createElement(f,n({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,n=new Array(s);n[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,n[1]=i;for(var c=2;c<s;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>w,frontMatter:()=>p,metadata:()=>d,toc:()=>f});var o=r(87462),a=r(63366),s=(r(67294),r(3905)),n=r(35148);const i=r.p+"assets/images/rust-scary--ksart.near-975e8b677340632dc794cde723ad74ff.png",l=r.p+"assets/images/rust-good--ksart.near-8901bcac2bb83ad4da893bae9e0ca4f0.png";var c=["components"],p={id:"overview",sidebar_position:1,sidebar_label:"Crossword Game Overview",title:"Basics overview laying out what will be accomplished in this first section."},u="Basics overview",d={unversionedId:"tutorials/crosswords/basics/overview",id:"tutorials/crosswords/basics/overview",title:"Basics overview laying out what will be accomplished in this first section.",description:"This first chapter of the crossword puzzle tutorial will introduce fundamental concepts to smart contract development in a beginner-friendly way. By the end of this chapter you'll have a proof-of-concept contract that can be interacted with via NEAR CLI and a simple frontend that uses the near-api-js library.",source:"@site/../docs/3.tutorials/crosswords/01-basics/00-overview.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/overview",permalink:"/near-docs-kor/tutorials/crosswords/basics/overview",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/00-overview.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:1,frontMatter:{id:"overview",sidebar_position:1,sidebar_label:"Crossword Game Overview",title:"Basics overview laying out what will be accomplished in this first section."},sidebar:"tutorials",previous:{title:"Adding FTs to a Marketplace",permalink:"/near-docs-kor/tutorials/fts/marketplace"},next:{title:"Set up Rust and a contract skeleton",permalink:"/near-docs-kor/tutorials/crosswords/basics/set-up-skeleton"}},h={},f=[{value:"It&#39;s not as bad as you think",id:"its-not-as-bad-as-you-think",level:2},{value:"Assumptions for this first chapter",id:"assumptions-for-this-first-chapter",level:2},{value:"Completed project",id:"completed-project",level:2},{value:"How it works",id:"how-it-works",level:2}],m={toc:f};function w(e){var t=e.components,r=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"basics-overview"},"Basics overview"),(0,s.kt)("p",null,"This first chapter of the crossword puzzle tutorial will introduce fundamental concepts to smart contract development in a beginner-friendly way. By the end of this chapter you'll have a proof-of-concept contract that can be interacted with via ",(0,s.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/near-cli"},"NEAR CLI")," and a simple frontend that uses the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/near-api-js"},(0,s.kt)("inlineCode",{parentName:"a"},"near-api-js")," library"),"."),(0,s.kt)("h2",{id:"its-not-as-bad-as-you-think"},"It's not as bad as you think"),(0,s.kt)("p",null,"Rust is a serious systems programming language. There are pointers, lifetimes, macros, and other things that may look foreign. Don't worry if this is how you feel:"),(0,s.kt)("figure",null,(0,s.kt)("img",{src:i,alt:"Programmer looking at Rust code and looking worried. Art created by ksart.near",width:"600"}),(0,s.kt)("figcaption",null,"Art by ",(0,s.kt)("a",{href:"https://twitter.com/ksartworks",target:"_blank"},"ksart.near"))),(0,s.kt)("br",null),(0,s.kt)("p",null,"The good news is the Rust SDK takes care of a lot of the heavy lifting."),(0,s.kt)("p",null,"We'll also have the compiler on our side, often telling us exactly what went wrong and offering suggestions. As we go through this tutorial, you'll begin to see patterns that we'll use over and over again."),(0,s.kt)("p",null,"So don't worry, writing smart contracts in Rust on NEAR doesn't require a heavy engineering background."),(0,s.kt)("img",{src:l,alt:"Programmer looking quite relieved at the Rust code from the NEAR SDK. Art created by ksart.near",width:"600"}),(0,s.kt)("h2",{id:"assumptions-for-this-first-chapter"},"Assumptions for this first chapter"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There will be only one crossword puzzle with one solution."),(0,s.kt)("li",{parentName:"ul"},"The user solving the crossword puzzle will not be able to know the solution."),(0,s.kt)("li",{parentName:"ul"},"Only the author of the crossword puzzle smart contract can set the solution.")),(0,s.kt)("h2",{id:"completed-project"},"Completed project"),(0,s.kt)("p",null,"Here's the final code for this chapter:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near-examples/crossword-tutorial-chapter-1"},"https://github.com/near-examples/crossword-tutorial-chapter-1")),(0,s.kt)("h2",{id:"how-it-works"},"How it works"),(0,s.kt)("img",{src:n.Z,alt:"Basic crossword puzzle",width:"600"}),(0,s.kt)("p",null,"We'll have a rule about how to get the words in the proper order. We collect words in ascending order by number, and if there's and across and a down for a number, the across goes first."),(0,s.kt)("p",null,"So in the image above, the solution will be ",(0,s.kt)("strong",{parentName:"p"},"near nomicon ref finance"),". "),(0,s.kt)("p",null,"Let's begin!"))}w.isMDXComponent=!0},35148:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/basics-crossword-2f471ec61520f252fe4526be2c4ff72c.jpg"}}]);