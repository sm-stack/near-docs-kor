"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],l={id:"introduction",title:"Prerequisites"},i=void 0,c={unversionedId:"develop/contracts/introduction",id:"develop/contracts/introduction",title:"Prerequisites",description:"To develop a smart contract you will need to install Node.js. If you further want to use Rust as your main language, then you need to install rustup as well.",source:"@site/../docs/2.develop/contracts/introduction.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/introduction",permalink:"/near-docs-kor/develop/contracts/introduction",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/introduction.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"introduction",title:"Prerequisites"},sidebar:"develop",previous:{title:"What is a Smart Contract?",permalink:"/near-docs-kor/develop/contracts/whatisacontract"},next:{title:"Modules, Types & Structs",permalink:"/near-docs-kor/develop/contracts/basics"}},u={},p=[{value:"Node.js",id:"nodejs",level:2},{value:"Rust and Wasm",id:"rust-and-wasm",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To develop a smart contract you will need to install Node.js. If you further want to use Rust as your main language, then you need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"rustup")," as well."),(0,a.kt)("hr",{class:"subsection"}),(0,a.kt)("h2",{id:"nodejs"},"Node.js"),(0,a.kt)("p",null,"Download and install ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We further recommend to install ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g yarn"),".")),(0,a.kt)("hr",{class:"subsection"}),(0,a.kt)("h2",{id:"rust-and-wasm"},"Rust and Wasm"),(0,a.kt)("p",null,"Follow ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch01-01-installation.html"},"these instructions")," for setting up Rust. Then, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," toolchain which enables compiling Rust to ",(0,a.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"Web Assembly (wasm)"),", the low-level language used by the NEAR platform."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Installing Rust in Linux and MacOS\ncurl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh\nsource $HOME/.cargo/env\n\n# Add the wasm toolchain\nrustup target add wasm32-unknown-unknown\n")))}m.isMDXComponent=!0}}]);