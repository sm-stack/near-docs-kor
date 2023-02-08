"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a,n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],l={sidebar_label:"Getting started"},c="NEAR Lake StateChanges indexer tutorial",p={unversionedId:"tutorials/indexer/near-lake-state-changes-indexer",id:"tutorials/indexer/near-lake-state-changes-indexer",title:"NEAR Lake StateChanges indexer tutorial",description:"near-examples/near-lake-accounts-watcher: source code for a video tutorial on how to use the NEAR Lake Framework",source:"@site/../docs/3.tutorials/indexer/near-lake-state-changes-indexer.md",sourceDirName:"3.tutorials/indexer",slug:"/tutorials/indexer/near-lake-state-changes-indexer",permalink:"/near-docs-kor/tutorials/indexer/near-lake-state-changes-indexer",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/indexer/near-lake-state-changes-indexer.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{sidebar_label:"Getting started"},sidebar:"tutorials",previous:{title:"Autonomous Organizations",permalink:"/near-docs-kor/develop/relevant-contracts/dao"},next:{title:"JS basic tutorial",permalink:"/near-docs-kor/tutorials/indexer/js-lake-indexer"}},d={},u=[],m=(a="ProgrammingLanguage",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"near-lake-statechanges-indexer-tutorial"},"NEAR Lake StateChanges indexer tutorial"),(0,i.kt)(m,{lang:"rust",mdxType:"ProgrammingLanguage"}),(0,i.kt)("admonition",{title:"Source code for the tutorial",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/near-examples/near-lake-accounts-watcher/tree/0.2.0"},(0,i.kt)("inlineCode",{parentName:"a"},"near-examples/near-lake-accounts-watcher")),": source code for a video tutorial on how to use the NEAR Lake Framework")),(0,i.kt)("admonition",{title:"Version 0.2.0",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The video is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-lake-framework"},(0,i.kt)("inlineCode",{parentName:"a"},"near-lake-framework"))," version 0.2.0"),(0,i.kt)("p",{parentName:"admonition"},"At the same time we're keeping the source code up to date with the latest version of the published crate.")),(0,i.kt)("p",null,"We've created a video tutorial to empower the release announcement of ",(0,i.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-lake-framework"},"NEAR Lake Framework"),"."),(0,i.kt)("p",null,"In this tutorial you will build an indexer application to watch for any ",(0,i.kt)("inlineCode",{parentName:"p"},"StateChange"),"s affecting the account or a list of account provided."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GsF7I93K-EQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}k.isMDXComponent=!0}}]);