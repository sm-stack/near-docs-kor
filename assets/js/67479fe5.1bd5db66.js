"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=r(39654),c=["components"],l={sidebar_position:1,sidebar_label:"Overview",title:"Intermediate concepts (cross-contract calls and more)"},i="Intermediate concepts",p={unversionedId:"tutorials/crosswords/intermediate/overview",id:"tutorials/crosswords/intermediate/overview",title:"Intermediate concepts (cross-contract calls and more)",description:"This chapter will go a bit faster than the previous ones.",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/00-overview.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/overview",permalink:"/near-docs-kor/tutorials/crosswords/intermediate/overview",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/00-overview.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",title:"Intermediate concepts (cross-contract calls and more)"},sidebar:"tutorials",previous:{title:"Access keys and login 2/2",permalink:"/near-docs-kor/tutorials/crosswords/beginner/logging-in-implementation"},next:{title:"Solution as seed phrase",permalink:"/near-docs-kor/tutorials/crosswords/intermediate/access-key-solution"}},d={},u=[{value:"Cross-contract calls",id:"cross-contract-calls",level:2},{value:"Access keys",id:"access-keys",level:2},{value:"Completed project",id:"completed-project",level:2}],m={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intermediate-concepts"},"Intermediate concepts"),(0,o.kt)("p",null,"This chapter will go a bit faster than the previous ones."),(0,o.kt)("p",null,"We're going to be covering an important part of smart contract development: cross-contract calls."),(0,o.kt)("h2",{id:"cross-contract-calls"},"Cross-contract calls"),(0,o.kt)("p",null,"A cross-contract call is when a smart contract calls another smart contract. For instance, if ",(0,o.kt)("inlineCode",{parentName:"p"},"alice.near")," calls contract A, and contract A makes a call to contract B."),(0,o.kt)("p",null,"NEAR has asynchronous transactions, and some cross-contract calls will have callbacks in order to determine the result of the call. This works a bit different from other blockchains, as we'll explain more in this chapter."),(0,o.kt)("h2",{id:"access-keys"},"Access keys"),(0,o.kt)("p",null,'Last chapter covered access keys, and we implemented a login system where a user "logs in" by adding a function-call access key to their account which is tied to the crossword puzzle dApp.'),(0,o.kt)("p",null,"Login is a common use case for access keys, but let's think bigger!"),(0,o.kt)("p",null,"Remember the two (smaller, gray) function-call access keys from the keychain illustration?"),(0,o.kt)("figure",null,(0,o.kt)("img",{src:s.Z,width:"600",alt:"A keychain with three keys. A large, gold key represents the full-access keys on NEAR. The two other keys are gray and smaller, and have detachable latches on them. They represent function-call access key. Art created by alcantara_gabriel.near"}),(0,o.kt)("figcaption",null,"Art by ",(0,o.kt)("a",{href:"https://twitter.com/Bagriel_5_10",target:"_blank"},"alcantara_gabriel.near"))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Notice that they have a clasp to make them removable."),(0,o.kt)("p",null,"While it's unlikely you'll want to give another person a full-access key, there are times when you could give a function-call access key to another person or make it public. Why? This can help enable a smooth onboarding experience, as we'll do soon."),(0,o.kt)("h2",{id:"completed-project"},"Completed project"),(0,o.kt)("p",null,"Here's the final code for this chapter:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/crossword-tutorial-chapter-3"},"https://github.com/near-examples/crossword-tutorial-chapter-3")))}h.isMDXComponent=!0},39654:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/keys-cartoon-good--alcantara_gabriel.near--Bagriel_5_10-25f5521a242db4d310be7de1dd937aa2.png"}}]);