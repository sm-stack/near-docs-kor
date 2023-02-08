"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2926],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),i=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=i(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=i(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,c(c({ref:e},p),{},{components:n})):a.createElement(h,c({ref:e},p))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74641:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),c=["components"],s={id:"contract",title:"Contract",sidebar_label:"Contract"},l=void 0,i={unversionedId:"tools/near-api-js/contract",id:"tools/near-api-js/contract",title:"Contract",description:"When you instantiate an instance of Contract you need to specify the names of the functions you have on your smart contract.",source:"@site/../docs/4.tools/near-api-js/naj-contract.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/contract",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/contract",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/naj-contract.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"contract",title:"Contract",sidebar_label:"Contract"}},p={},m=[{value:"Load Contract",id:"load-contract",level:3},{value:"Call Contract",id:"call-contract",level:3}],d=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}},u=d("Tabs"),h=d("TabItem"),f={toc:m};function y(t){var e=t.components,n=(0,o.Z)(t,c);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you instantiate an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," you need to specify the names of the functions you have on your smart contract.\nThen the new instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," will have methods with the same names as your smart contract functions.\nFor example if you deployed a contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"my_smart_contract_function")," function on it, then this will work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const contract = new Contract(account, {\n  changeMethods: ["my_smart_contract_function"], // your smart-contract has a function `my_smart_contract_function`\n  sender: account\n});\n// `contract` object has `my_smart_contract_function` function on it: \ncontract.my_smart_contract_function()\n')),(0,r.kt)("h3",{id:"load-contract"},"Load Contract"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(h,{value:"Standard",label:"Standard",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { Contract } = nearAPI;\n\nconst contract = new Contract(\n  account, // the account object that is connecting\n  "example-contract.testnet",\n  {\n    // name of contract you\'re connecting to\n    viewMethods: ["getMessages"], // view methods do not change state but usually return a value\n    changeMethods: ["addMessage"], // change methods modify state\n  }\n);\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/contract.Contract"},(0,r.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," Class ",(0,r.kt)("inlineCode",{parentName:"a"},"Contract")))),(0,r.kt)(h,{value:"wallet",label:"Using Wallet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { Contract } = nearAPI;\n\nconst contract = new Contract(\n  wallet.account(), // the account object that is connecting\n  "example-contract.testnet",\n  {\n    // name of contract you\'re connecting to\n    viewMethods: ["getMessages"], // view methods do not change state but usually return a value\n    changeMethods: ["addMessage"], // change methods modify state\n  }\n);\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/contract.Contract"},(0,r.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," Class ",(0,r.kt)("inlineCode",{parentName:"a"},"Contract"))))),(0,r.kt)("h3",{id:"call-contract"},"Call Contract"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(h,{value:"method",label:"Change Method",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const contract = new Contract(\n  account,\n  "example-contract.testnet",\n  {\n    changeMethods: ["method_name"],\n  }\n);\nawait contract.method_name(\n  {\n    arg_name: "value", // argument name and value - pass empty object if no args required\n  },\n  "300000000000000", // attached GAS (optional)\n  "1000000000000000000000000" // attached deposit in yoctoNEAR (optional)\n);\n'))),(0,r.kt)(h,{value:"callback",label:"Change Method w/ callbackUrl and meta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const contract = new Contract(\n  account,\n  "example-contract.testnet",\n  {\n    changeMethods: ["method_name"],\n  }\n);\nawait contract.method_name(\n  {\n    callbackUrl: \'https://example.com/callback\', // callbackUrl after the transaction approved (optional)\n    meta: \'some info\', // meta information NEAR Wallet will send back to the application. `meta` will be attached to the `callbackUrl` as a url param\n    args: {\n        arg_name: "value" // argument name and value - pass empty object if no args required\n    },\n    gas: 300000000000000, // attached GAS (optional)\n    amount: 1000000000000000000000000 // attached deposit in yoctoNEAR (optional)\n  }\n);\n'))),(0,r.kt)(h,{value:"view",label:"View Method",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const contract = new Contract(\n  account,\n  "example-contract.testnet",\n  {\n    viewMethods: ["view_method_name"],\n  }\n);\nconst response = await contract.view_method_name();\n'))),(0,r.kt)(h,{value:"args",label:"View Method w/ args",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const contract = new Contract(\n  account,\n  "example-contract.testnet",\n  {\n    viewMethods: ["view_method_name"],\n  }\n);\nconst response = await contract.view_method_name({ arg_name: "arg_value" });\n')))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://near.github.io/near-api-js/classes/contract.Contract"},(0,r.kt)("span",{class:"typedoc-icon typedoc-icon-class"})," Class ",(0,r.kt)("inlineCode",{parentName:"a"},"Contract"))))}y.isMDXComponent=!0}}]);