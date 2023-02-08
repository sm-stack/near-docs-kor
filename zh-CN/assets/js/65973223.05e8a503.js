"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={id:"runtime",title:"\ub7f0\ud0c0\uc784"},l=void 0,p={unversionedId:"concepts/basics/runtime",id:"concepts/basics/runtime",title:"\ub7f0\ud0c0\uc784",description:"\uc774 \uc139\uc158\uc5d0\ub294 \ud575\uc2ec \ub7f0\ud0c0\uc784, \uc791\ub3d9 \ubc29\uc2dd \ubc0f \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \ud0d0\uc0c9\ud558\ub294 \ube44\ub514\uc624\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/1.concepts/basics/runtime.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/runtime",permalink:"/near-docs-kor/zh-CN/concepts/basics/runtime",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/runtime.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"runtime",title:"\ub7f0\ud0c0\uc784"},sidebar:"\uac1c\ub150",previous:{title:"Lake \ud504\ub808\uc784\uc6cc\ud06c",permalink:"/near-docs-kor/zh-CN/concepts/advanced/near-lake-framework"},next:{title:"\uc0ac\uc591",permalink:"/near-docs-kor/zh-CN/concepts/advanced/specification"}},s={},u=[{value:"\ub7f0\ud0c0\uc784 \uac1c\uc694 #runtime-overview}",id:"\ub7f0\ud0c0\uc784-\uac1c\uc694-runtime-overview",level:2},{value:"\ub7f0\ud0c0\uc784 \uc791\uc5c5 \ubc0f \ub370\uc774\ud130 Receipt",id:"runtime-action-and-data-receipts",level:2},{value:"\ub7f0\ud0c0\uc784 \uc0c1\ud0dc",id:"runtime-state",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\ub294 \ud575\uc2ec \ub7f0\ud0c0\uc784, \uc791\ub3d9 \ubc29\uc2dd \ubc0f \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \ud0d0\uc0c9\ud558\ub294 \ube44\ub514\uc624\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\ub7f0\ud0c0\uc784-\uac1c\uc694-runtime-overview"},"\ub7f0\ud0c0\uc784 \uac1c\uc694 #runtime-overview}"),(0,i.kt)("p",null,"NEAR \ub7f0\ud0c0\uc784\uc758 \uc2ec\ud654 \ucf54\ub4dc \uac1c\uc694\uc785\ub2c8\ub2e4."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/Xi_8PapFCjo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"runtime-action-and-data-receipts"},"\ub7f0\ud0c0\uc784 \uc791\uc5c5 \ubc0f \ub370\uc774\ud130 Receipt"),(0,i.kt)("p",null,"NEAR Runtime\uc774 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc2ec\uce35 \ucf54\ub4dc \uac80\ud1a0\uc785\ub2c8\ub2e4."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/RBb3rJGtqOE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"runtime-state"},"\ub7f0\ud0c0\uc784 \uc0c1\ud0dc"),(0,i.kt)("p",null,"NEAR \ub7f0\ud0c0\uc784\uc774 \ud574\ub2f9 \uc0c1\ud0dc\uc640 \ud568\uaed8 \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud55c \uc2ec\uce35 \uac1c\uc694\uc785\ub2c8\ub2e4."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/JCkSNL4ie1U",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0}}]);