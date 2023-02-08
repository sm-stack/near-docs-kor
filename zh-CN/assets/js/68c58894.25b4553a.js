"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(87462),o=n(63366),r=(n(67294),n(3905));const s=n.p+"assets/images/puzzle-frontrun-db0d8c3025880af973d7d609016c1c20.png",i=n.p+"assets/images/safe-with-access-key--soulless.near--ZeroSerotonin__-af26c6ef39073c0cdfee357ed9c9c682.png";var l=["components"],c={sidebar_position:2,sidebar_label:"Solution as seed phrase",title:"Replacing the solution hash with an access key"},u="Replacing our solution hash",d={unversionedId:"tutorials/crosswords/intermediate/access-key-solution",id:"tutorials/crosswords/intermediate/access-key-solution",title:"Replacing the solution hash with an access key",description:"",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/01-access-key-solution.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/access-key-solution",permalink:"/near-docs-kor/zh-CN/tutorials/crosswords/intermediate/access-key-solution",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/01-access-key-solution.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Solution as seed phrase",title:"Replacing the solution hash with an access key"},sidebar:"tutorials",previous:{title:"Overview",permalink:"/near-docs-kor/zh-CN/tutorials/crosswords/intermediate/overview"},next:{title:"Seed phrase logic",permalink:"/near-docs-kor/zh-CN/tutorials/crosswords/intermediate/use-seed-phrase"}},p={},h=[{value:"Why?",id:"why",level:2},{value:"How?",id:"how",level:2},{value:"Onboarding",id:"onboarding",level:2}],m={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"replacing-our-solution-hash"},"Replacing our solution hash"),(0,r.kt)("p",null,"So far in this tutorial, the user sends the plaintext solution to the crossword puzzle smart contract, where it's hashed and compared with the known answer."),(0,r.kt)("p",null,"This works, but we might want to be more careful and avoid sending the plaintext solution."),(0,r.kt)("h2",{id:"why"},"Why?"),(0,r.kt)("p",null,"Blockchains rely on many computers processing transactions. When you send a transaction to the blockchain, it doesn't immediately get processed. In some Layer 1 blockchains it can take minutes or longer. On NEAR transactions settle within a couple seconds, but nonetheless there's a small period of waiting time."),(0,r.kt)("p",null,"When we previously sent the crossword puzzle solution in plain text (via the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"solution")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"submit_solution"),") it means it's visible to everyone before it gets processed."),(0,r.kt)("p",null,"At the time of this writing, there haven't been outstanding incidents of validators \"front-running\" transactions, but it's something to be aware of. Front-running is when a validator sees a transaction that might be profitable and does it themselves."),(0,r.kt)("p",null,"There have been several incidents of this and it continues to be an issue."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:s,alt:"Tweet talking about a puzzle where tens of thousands of dollars were taken because of a frontrun attack",width:"600"}),(0,r.kt)("figcaption",null,"Real-life example of a puzzle being front-run.",(0,r.kt)("br",null),"Read ",(0,r.kt)("a",{href:"https://twitter.com/_anishagnihotri/status/1444113372715356162",target:"_blank"},"Anish Agnihotri's thread"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"how"},"How?"),(0,r.kt)("p",null,"We're doing to do something unique \u2014 and frankly unusual \u2014 with our crossword puzzle. We're going to use function-call access keys in a new way."),(0,r.kt)("p",null,"Our crossword puzzle smart contract will add a function-call access key to itself. The private key is derived from the solution, used as a seed phrase."),(0,r.kt)("admonition",{title:"What's a seed phrase, again?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A private key is essentially a very large number. So large that the number of possible private keys is approaching the estimated number of atoms in the known universe."),(0,r.kt)("p",{parentName:"admonition"},"It would be pretty long if we wrote it down, so it's often made human-readable with numbers and letters. However, even the human-readable version is hard to memorize and prone to mistakes."),(0,r.kt)("p",{parentName:"admonition"},"A seed phrase is a series of words (usually 12 or 24 words) that create a private key. (There's actually a ",(0,r.kt)("a",{parentName:"p",href:"https://learnmeabitcoin.com/technical/mnemonic"},"bit more to it"),".)"),(0,r.kt)("p",{parentName:"admonition"},"Seed phrases typically use a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md"},"BIP-30 wordlist"),", but ",(0,r.kt)("em",{parentName:"p"},"they do not need to")," use a wordlist or have a certain number of words. As long as the words create entropy, a crossword puzzle solution can act as a deterministic seed phrase.")),(0,r.kt)("p",null,"So when we add a new puzzle, we'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AddKey")," Action to add a limited, function-call access key can that ",(0,r.kt)("em",{parentName:"p"},"only")," call the ",(0,r.kt)("inlineCode",{parentName:"p"},"submit_solution")," method."),(0,r.kt)("p",null,'The first user to solve the puzzle will essentially "discover" the private key and call that method. Think of it like a safe that contains a function-call access key.'),(0,r.kt)("figure",null,(0,r.kt)("img",{src:i,alt:"A small safe with a padlock containing words to a seed phrase, and you can see through the safe, showing it holds a function-call access key. Art created by soulless.near."}),(0,r.kt)("figcaption",{className:"full-width"},"Open the safe using answers to the puzzle, revealing the function-call access key.",(0,r.kt)("br",null),"Art by ",(0,r.kt)("a",{href:"https://twitter.com/ZeroSerotonin__",target:"_blank"},"soulless.near"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Our method ",(0,r.kt)("inlineCode",{parentName:"p"},"submit_solution")," no longer needs to hash the plaintext answer, but instead looks at the key that signed this transaction. Cool, huh!"),(0,r.kt)("h2",{id:"onboarding"},"Onboarding"),(0,r.kt)("p",null,"In the previous chapter we implemented login to the crossword, but this requires a person to have a NEAR account."),(0,r.kt)("p",null,"If the end user is discovering a key that exists on the crossword contract, they don't even need a NEAR account, right? Well, that's partly accurate, but we'll still need to send the prize in NEAR somewhere."),(0,r.kt)("p",null,"What if we could make the winner an account on the fly? Is that possible? Yes, and that's what we're going to do in this chapter."))}f.isMDXComponent=!0}}]);