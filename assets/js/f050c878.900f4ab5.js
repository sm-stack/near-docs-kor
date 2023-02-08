"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={id:"introduction"},i="Getting Started",c={unversionedId:"sdk/rust/introduction",id:"sdk/rust/introduction",title:"Getting Started",description:"Install Rust and Wasm toolchain",source:"@site/../docs/sdk/rust/intro.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/introduction",permalink:"/sdk/rust/introduction",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/intro.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"introduction"},sidebar:"sdk",previous:{title:"NEAR SDKs",permalink:"/sdk/welcome"},next:{title:"near_bindgen",permalink:"/sdk/rust/contract-structure/near-bindgen"}},p={},u=[{value:"Install Rust and Wasm toolchain",id:"install-rust-and-wasm-toolchain",level:2},{value:"Create a new project",id:"create-a-new-project",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"install-rust-and-wasm-toolchain"},"Install Rust and Wasm toolchain"),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch01-01-installation.html"},"these instructions")," for setting up Rust."),(0,o.kt)("p",null,"To install Rust on Linux or MacOS, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh\n\nsource $HOME/.cargo/env\n")),(0,o.kt)("p",null,"Then, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," toolchain. This toolchain is required because the contracts that we will build will be compiled to ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"Wasm")," to run on the NEAR blockchain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-unknown-unknown\n")),(0,o.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,o.kt)("p",null,"The best way to create a new NEAR app connected with a frontend is through ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/create-near-app"},"create-near-app"),". When initializing the project, be sure to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"--contract=rust")," flag to use the Rust SDK. Add ",(0,o.kt)("inlineCode",{parentName:"p"},"--frontend=react")," to use react. Default is vanilla HTML."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-near-app my-project --contract rust --frontend none --tests rust\n")),(0,o.kt)("p",null,"If you only wish to develop and deploy a Rust contract, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/rust-status-message"},"status message example")," is great to use as a template or through ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cargo-generate/cargo-generate"},"cargo-generate"),"."),(0,o.kt)("p",null,"To initialize a new project with ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-generate"),", run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-generate --features vendored-openssl\n\ncargo generate --git https://github.com/near-examples/rust-status-message --name my-project\ncd my-project\n")),(0,o.kt)("p",null,"If you would like to generate a new crate manually with ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo new --lib <crate-name>"),", make sure you include the following configuration in the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nnear-sdk = "4.0.0"\n\n[lib]\ncrate-type = ["cdylib"]\n\n[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\n# Opt into extra safety checks on arithmetic operations https://stackoverflow.com/a/64136471/249801\noverflow-checks = true\n')))}m.isMDXComponent=!0}}]);