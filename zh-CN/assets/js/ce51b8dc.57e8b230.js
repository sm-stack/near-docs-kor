"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={sidebar_position:2},l="Reproducible Builds",u={unversionedId:"sdk/rust/building/reproducible-builds",id:"sdk/rust/building/reproducible-builds",title:"Reproducible Builds",description:"Reproducible builds let different people build the same program and get the exact same outputs as one another. It helps users trust that deployed contracts are built correctly and correspond to the source code. To verify your contract user can build it themselves and check that the binaries are identical.",source:"@site/../docs/sdk/rust/building/reproducible-builds.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/reproducible-builds",permalink:"/near-docs-kor/zh-CN/sdk/rust/building/reproducible-builds",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/reproducible-builds.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"Post Processing Tools",permalink:"/near-docs-kor/zh-CN/sdk/rust/building/post-processing"},next:{title:"Integration Tests",permalink:"/near-docs-kor/zh-CN/sdk/rust/testing/integration-tests"}},c={},d=[{value:"Problem",id:"problem",level:2},{value:"CI solution",id:"ci-solution",level:2}],p={toc:d};function b(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reproducible-builds"},"Reproducible Builds"),(0,i.kt)("p",null,"Reproducible builds let different people build the same program and get the exact same outputs as one another. It helps users trust that deployed contracts are built correctly and correspond to the source code. To verify your contract user can build it themselves and check that the binaries are identical."),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"If you will build your contract on two different machines, most likely you will get two similar but not identical binaries. Your build artifact can be affected by the locale, timezone, build path, and billion other factors in your build environment. Rust community has a long story of fighting this issue but still, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rust/labels/A-reproducibility"},"it is not achieved yet"),"."),(0,i.kt)("h2",{id:"ci-solution"},"CI solution"),(0,i.kt)("p",null,"We recommend you to build your contracts with the use of our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/tree/master/contract-builder"},"Contract Builder"),". It's is using Docker, controlled and sharable environment that can be used by both you and your users. Docker image is available ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nearprotocol/contract-builder"},"here"),". The contract built in it will result in a binary that is the same if built on other machines."))}b.isMDXComponent=!0}}]);