"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6761],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>v});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=d(n),v=i,u=f["".concat(s,".").concat(v)]||f[v]||c[v]||a;return n?t.createElement(u,o(o({ref:r},l),{},{components:n})):t.createElement(u,o({ref:r},l))}));function v(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var d=2;d<a;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69199:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var t=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={id:"providers_provider.Transaction",title:"Interface: Transaction",sidebar_label:"Transaction",custom_edit_url:null},s=void 0,d={unversionedId:"interfaces/providers_provider.Transaction",id:"version-near-api-js@1.1.0/interfaces/providers_provider.Transaction",title:"Interface: Transaction",description:"providers/provider.Transaction",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/providers_provider.Transaction.md",sourceDirName:"interfaces",slug:"/interfaces/providers_provider.Transaction",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.Transaction",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"providers_provider.Transaction",title:"Interface: Transaction",sidebar_label:"Transaction",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"TotalWeight",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.TotalWeight"},next:{title:"ValidatorStakeView",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ValidatorStakeView"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"actions",id:"actions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"hash",id:"hash",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"public_key",id:"public_key",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"receiver_id",id:"receiver_id",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"signature",id:"signature",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"signer_id",id:"signer_id",level:3},{value:"Defined in",id:"defined-in-6",level:4}],f={toc:c};function v(e){var r=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/providers_provider"},"providers/provider"),".Transaction"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"actions"},"actions"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"actions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L183"},"providers/provider.ts:183")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hash"},"hash"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"hash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L184"},"providers/provider.ts:184")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nonce"},"nonce"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"nonce"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BN")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L185"},"providers/provider.ts:185")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"public_key"},"public","_","key"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"public","_","key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L186"},"providers/provider.ts:186")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"receiver_id"},"receiver","_","id"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"receiver","_","id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L187"},"providers/provider.ts:187")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signature"},"signature"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"signature"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L188"},"providers/provider.ts:188")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signer_id"},"signer","_","id"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"signer","_","id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L189"},"providers/provider.ts:189")))}v.isMDXComponent=!0}}]);