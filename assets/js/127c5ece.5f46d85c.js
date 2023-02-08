"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1209],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),f=i,v=c["".concat(s,".").concat(f)]||c[f]||u[f]||a;return t?n.createElement(v,o(o({ref:r},d),{},{components:t})):n.createElement(v,o({ref:r},d))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},15383:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],p={id:"providers_provider.ViewStateRequest",title:"Interface: ViewStateRequest",sidebar_label:"ViewStateRequest",custom_edit_url:null},s=void 0,l={unversionedId:"interfaces/providers_provider.ViewStateRequest",id:"version-near-api-js@1.1.0/interfaces/providers_provider.ViewStateRequest",title:"Interface: ViewStateRequest",description:"providers/provider.ViewStateRequest",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/providers_provider.ViewStateRequest.md",sourceDirName:"interfaces",slug:"/interfaces/providers_provider.ViewStateRequest",permalink:"/tools/near-api-js/reference/interfaces/providers_provider.ViewStateRequest",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"providers_provider.ViewStateRequest",title:"Interface: ViewStateRequest",sidebar_label:"ViewStateRequest",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ViewCodeRequest",permalink:"/tools/near-api-js/reference/interfaces/providers_provider.ViewCodeRequest"},next:{title:"ViewStateResult",permalink:"/tools/near-api-js/reference/interfaces/providers_provider.ViewStateResult"}},d={},u=[{value:"Properties",id:"properties",level:2},{value:"account_id",id:"account_id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"prefix_base64",id:"prefix_base64",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"request_type",id:"request_type",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:u};function f(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tools/near-api-js/reference/modules/providers_provider"},"providers/provider"),".ViewStateRequest"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"account_id"},"account","_","id"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"account","_","id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L386"},"providers/provider.ts:386")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"prefix_base64"},"prefix","_","base64"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"prefix","_","base64"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L387"},"providers/provider.ts:387")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"request_type"},"request","_","type"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"request","_","type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"view_state"')),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L385"},"providers/provider.ts:385")))}f.isMDXComponent=!0}}]);