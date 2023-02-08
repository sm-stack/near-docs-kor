"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6566],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=i.createContext({}),c=function(e){var r=i.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return i.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=n,v=u["".concat(p,".").concat(f)]||u[f]||d[f]||s;return t?i.createElement(v,a(a({ref:r},l),{},{components:t})):i.createElement(v,a({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var c=2;c<s;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3457:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(87462),n=t(63366),s=(t(67294),t(3905)),a=["components"],o={id:"providers_provider.ViewAccessKeyListRequest",title:"Interface: ViewAccessKeyListRequest",sidebar_label:"ViewAccessKeyListRequest",custom_edit_url:null},p=void 0,c={unversionedId:"interfaces/providers_provider.ViewAccessKeyListRequest",id:"version-near-api-js@1.1.0/interfaces/providers_provider.ViewAccessKeyListRequest",title:"Interface: ViewAccessKeyListRequest",description:"providers/provider.ViewAccessKeyListRequest",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/providers_provider.ViewAccessKeyListRequest.md",sourceDirName:"interfaces",slug:"/interfaces/providers_provider.ViewAccessKeyListRequest",permalink:"/tools/near-api-js/reference/interfaces/providers_provider.ViewAccessKeyListRequest",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"providers_provider.ViewAccessKeyListRequest",title:"Interface: ViewAccessKeyListRequest",sidebar_label:"ViewAccessKeyListRequest",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ValidatorStakeView",permalink:"/tools/near-api-js/reference/interfaces/providers_provider.ValidatorStakeView"},next:{title:"ViewAccessKeyRequest",permalink:"/tools/near-api-js/reference/interfaces/providers_provider.ViewAccessKeyRequest"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"account_id",id:"account_id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"request_type",id:"request_type",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:d};function f(e){var r=e.components,t=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/tools/near-api-js/reference/modules/providers_provider"},"providers/provider"),".ViewAccessKeyListRequest"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"account_id"},"account","_","id"),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"account","_","id"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L398"},"providers/provider.ts:398")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"request_type"},"request","_","type"),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"request","_","type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"view_access_key_list"')),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L397"},"providers/provider.ts:397")))}f.isMDXComponent=!0}}]);