"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3726],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(r),u=n,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return r?a.createElement(m,s(s({ref:t},d),{},{components:r})):a.createElement(m,s({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},77134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={sidebar_position:3,sidebar_label:"Seed phrase logic",title:"Implementing the seed phrase logic from the necessary libraries"},l="Seed phrase and key derivation",c={unversionedId:"tutorials/crosswords/intermediate/use-seed-phrase",id:"tutorials/crosswords/intermediate/use-seed-phrase",title:"Implementing the seed phrase logic from the necessary libraries",description:"There are two separate things we'll want to do:",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/02-use-seed-phrase.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/use-seed-phrase",permalink:"/near-docs-kor/vi/tutorials/crosswords/intermediate/use-seed-phrase",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/02-use-seed-phrase.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Seed phrase logic",title:"Implementing the seed phrase logic from the necessary libraries"},sidebar:"tutorials",previous:{title:"Solution as seed phrase",permalink:"/near-docs-kor/vi/tutorials/crosswords/intermediate/access-key-solution"},next:{title:"Linkdrop contract",permalink:"/near-docs-kor/vi/tutorials/crosswords/intermediate/linkdrop"}},d={},p=[{value:"near-seed-phrase library",id:"near-seed-phrase-library",level:2},{value:"Generate random seed phrase for new account creation (if the winner doesn&#39;t already have an account)",id:"generate-random-seed-phrase-for-new-account-creation-if-the-winner-doesnt-already-have-an-account",level:2},{value:"Parse solution as seed phrase",id:"parse-solution-as-seed-phrase",level:2},{value:"Key stores",id:"key-stores",level:3}],h={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seed-phrase-and-key-derivation"},"Seed phrase and key derivation"),(0,o.kt)("p",null,"There are two separate things we'll want to do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Create a random seed phrase"),' for the user when they visit the crossword puzzle. This will be used if they win and don\'t have a NEAR account and wish to create one. They can then paste this seed phrase into NEAR Wallet afterward to import their account (which is basically like "logging in" and is currently possible at ',(0,o.kt)("a",{parentName:"li",href:"https://wallet.near.org/recover-seed-phrase"},"https://wallet.near.org/recover-seed-phrase"),")."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Turn the crossword solution into a key pair"),", instead of just hashing it.")),(0,o.kt)("h2",{id:"near-seed-phrase-library"},"near-seed-phrase library"),(0,o.kt)("p",null,"We can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"near-seed-phrase")," package to our project with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install near-seed-phrase --save\n")),(0,o.kt)("admonition",{title:"Code snippets for this chapter",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"At this point in the tutorial, it's more difficult to share code snippets that are both meaningful and meant to be copy/pasted into a project."),(0,o.kt)("p",{parentName:"admonition"},"The snippets provided might differ slightly from the implementation of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/crossword-tutorial-chapter-3"},"completed code for chapter 3"),", which might be the best place to look for the functioning code.")),(0,o.kt)("h2",{id:"generate-random-seed-phrase-for-new-account-creation-if-the-winner-doesnt-already-have-an-account"},"Generate random seed phrase for new account creation (if the winner doesn't already have an account)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { generateSeedPhrase } from 'near-seed-phrase';\n\n// Create a random key in here\nlet seedPhrase = generateSeedPhrase(); // generateSeedPhrase() returns an object {seedPhrase, publicKey, secretKey}\nlocalStorage.setItem('playerKeyPair', JSON.stringify(seedPhrase));\n")),(0,o.kt)("h2",{id:"parse-solution-as-seed-phrase"},"Parse solution as seed phrase"),(0,o.kt)("p",null,"(This security measure prevents front-running.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { parseSeedPhrase } from 'near-seed-phrase';\n// Get the seed phrase from the completed puzzle. \n// The original puzzle creator would have already called this same function with the same inputs and would have \n// already called `AddKey` on this contract to add the key related to this seed phrase. Here, using this deterministic \n// function, the front-end will automatically generate that same key based on the inputs from the winner.\nconst seedPhrase = parseSolutionSeedPhrase(data, gridData); // returns a string of space-separated words\n// Get the public and private key derived from the seed phrase\nconst {secretKey, publicKey} = parseSeedPhrase(seedPhrase);\n\n// Set up the account and connection, acting on behalf of the crossword account\nconst keyStore = new nearAPI.keyStores.InMemoryKeyStore(); // Another type of key\nconst keyPair = nearAPI.utils.key_pair.KeyPair.fromString(secretKey);\nawait keyStore.setKey(nearConfig.networkId, nearConfig.contractName, keyPair);\nnearConfig.keyStore = keyStore;\nconst near = await nearAPI.connect(nearConfig);\nconst crosswordAccount = await near.account(nearConfig.contractName);\n\n// Call the submit_solution method using the discovered function-call access key\nlet transaction = await crosswordAccount.functionCall(\u2026);\n")),(0,o.kt)("p",null,"The last line should look familiar. We did something similar in the last chapter, except we used the ",(0,o.kt)("inlineCode",{parentName:"p"},"WalletConnection"),"'s account to do the function call."),(0,o.kt)("p",null,"This time we're using an ",(0,o.kt)("inlineCode",{parentName:"p"},"InMemoryKeyStore")," instead of the browser, as you can see toward the middle of the snippet."),(0,o.kt)("h3",{id:"key-stores"},"Key stores"),(0,o.kt)("p",null,"We have now used almost all the key stores available in ",(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"UnencryptedFileSystemKeyStore")," \u2014 early on, when we used the NEAR CLI command ",(0,o.kt)("inlineCode",{parentName:"li"},"near login"),", this created a file in our operating system's home directory containing a private, full-access key to our account."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"BrowserLocalStorageKeyStore")," \u2014 in the last chapter, when the user first logs in, the function-call access key is saved in the browser's local storage."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"InMemoryKeyStore")," \u2014 for this chapter, we'll simply use the computer's memory to store the private key derived from the crossword solution.")),(0,o.kt)("admonition",{title:"You can have multiple key stores",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Technically, there's another type of key store called the ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeKeyStore"),"."),(0,o.kt)("p",{parentName:"admonition"},"Say you want to look for private keys in various directories. You can essentially have a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"UnencryptedFileSystemKeyStore")," key stores that look in different places."),(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeKeyStore")," when you might want to look for a private key in more than one place.")))}u.isMDXComponent=!0}}]);