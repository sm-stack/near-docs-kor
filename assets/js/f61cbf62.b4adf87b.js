"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],o={id:"post-processing",title:"Post Processing Tools"},l="Post Processing Tools",c={unversionedId:"sdk/rust/building/post-processing",id:"sdk/rust/building/post-processing",title:"Post Processing Tools",description:"The size of the contract is a critical characteristic. The best way to keep it small is a well-designed minimalistic code with a reduced number of dependencies. It is especially important for large contracts and huge multi-contract dApps that can take a fortune to deploy.",source:"@site/../docs/sdk/rust/building/post-processing-tools.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/post-processing",permalink:"/near-docs-kor/sdk/rust/building/post-processing",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/post-processing-tools.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"post-processing",title:"Post Processing Tools"},sidebar:"sdk",previous:{title:"Rapid Prototyping",permalink:"/near-docs-kor/sdk/rust/building/prototyping"},next:{title:"Reproducible Builds",permalink:"/near-docs-kor/sdk/rust/building/reproducible-builds"}},p={},u=[{value:"Ready to use script",id:"ready-to-use-script",level:2},{value:"Requirements to run the script:",id:"requirements-to-run-the-script",level:3},{value:"WARNING",id:"warning",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-processing-tools"},"Post Processing Tools"),(0,a.kt)("p",null,"The size of the contract is a critical characteristic. The best way to keep it small is a well-designed minimalistic code with a reduced number of dependencies. It is especially important for large contracts and huge multi-contract dApps that can take a fortune to deploy."),(0,a.kt)("p",null,"When you have done your best with the code optimization it is worth reducing the size of the contract by minifying it. "),(0,a.kt)("h2",{id:"ready-to-use-script"},"Ready to use script"),(0,a.kt)("p",null,"We have prepared a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"bash")," script that can be used to minify ",(0,a.kt)("inlineCode",{parentName:"p"},".wasm")," contract file. You can find it ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/blob/master/minifier/minify.sh"},"here"),"."),(0,a.kt)("p",null,"The current approach to minification is the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Snip (i.e. just replace with unreachable instruction) few known fat functions from the standard library (such as float formatting and panic-related) with ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm-snip"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm-gc")," to eliminate all functions reachable from the snipped functions."),(0,a.kt)("li",{parentName:"ol"},"Strip unneeded sections, such as names with ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm-strip"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"binaryen wasm-opt"),", which cleans up the rest.")),(0,a.kt)("h3",{id:"requirements-to-run-the-script"},"Requirements to run the script:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"install ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/wasm-snip/0.4.0/wasm_snip/"},"wasm-snip")," and ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/crate/wasm-gc/0.1.6"},"wasm-gc")," with Cargo:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install wasm-snip wasm-gc\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/binaryen"},"binaryen")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/wabt"},"wabt")," on your system. For Ubuntu and other Debian based Linux distributions run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install binaryen wabt\n")),(0,a.kt)("h2",{id:"warning"},"WARNING"),(0,a.kt)("p",null,"Minification could be rather aggressive, so you must test the contract after minification. Standalone NEAR runtime could be helpful ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nearprotocol/nearcore/tree/master/runtime/near-vm-runner"},"here"),"."))}m.isMDXComponent=!0}}]);