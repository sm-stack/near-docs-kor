"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2327],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"browserConnect",title:"Module: browserConnect",sidebar_label:"browserConnect",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"modules/browserConnect",id:"version-near-api-js@1.1.0/modules/browserConnect",title:"Module: browserConnect",description:"Connect to NEAR using the provided configuration.",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/modules/browserConnect.md",sourceDirName:"modules",slug:"/modules/browserConnect",permalink:"/near-docs-kor/tools/near-api-js/reference/modules/browserConnect",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",sidebarPosition:0,frontMatter:{id:"browserConnect",title:"Module: browserConnect",sidebar_label:"browserConnect",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"account_multisig",permalink:"/near-docs-kor/tools/near-api-js/reference/modules/account_multisig"},next:{title:"connect",permalink:"/near-docs-kor/tools/near-api-js/reference/modules/connect"}},p={},u=[{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"connect",id:"connect",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Connect to NEAR using the provided configuration."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig#networkid"},"networkId")," and ",(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig#nodeurl"},"nodeUrl")," are required."),(0,a.kt)("p",null,"To sign transactions you can also pass: ",(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig#keystore"},"keyStore")),(0,a.kt)("p",null,"Both are passed they are prioritize in that order."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig"},"ConnectConfig")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function initNear() {\n  const near = await connect({\n     networkId: 'testnet',\n     nodeUrl: 'https://rpc.testnet.near.org'\n  })\n}\n")),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig"},"ConnectConfig"))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"connect"},"connect"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"connect"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/near.Near"},(0,a.kt)("inlineCode",{parentName:"a"},"Near")),">"),(0,a.kt)("p",null,"Initialize connection to Near network."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"config")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/near-docs-kor/tools/near-api-js/reference/interfaces/browserConnect.ConnectConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectConfig")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/tools/near-api-js/reference/classes/near.Near"},(0,a.kt)("inlineCode",{parentName:"a"},"Near")),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/browser-connect.ts#L33"},"browser-connect.ts:33")))}f.isMDXComponent=!0}}]);