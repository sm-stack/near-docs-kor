"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(i,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],l={id:"lock",title:"Locking Accounts"},i=void 0,p={unversionedId:"develop/lock",id:"develop/lock",title:"Locking Accounts",description:"Removing all full access keys from an account will effectively lock it.",source:"@site/../docs/2.develop/lock.md",sourceDirName:"2.develop",slug:"/develop/lock",permalink:"/near-docs-kor/vi/develop/lock",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/lock.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"lock",title:"Locking Accounts"},sidebar:"develop",previous:{title:"Updating Contracts",permalink:"/near-docs-kor/vi/develop/upgrade"},next:{title:"Security",permalink:"/near-docs-kor/vi/develop/contracts/security/welcome"}},s={},u=[{value:"How to Lock an Account",id:"how-to-lock-an-account",level:4},{value:"Why Locking an Account",id:"why-locking-an-account",level:4}],d={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Removing all ",(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/near-cli#near-delete-key-near-delete-key"},"full access keys")," from an account will effectively ",(0,a.kt)("strong",{parentName:"p"},"lock it"),"."),(0,a.kt)("p",null,"When an account is locked nobody can perform transactions in the account's name (e.g. update the code or transfer money)."),(0,a.kt)("h4",{id:"how-to-lock-an-account"},"How to Lock an Account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"near keys <dev-account>\n# result: [access_key: {\"nonce\": ..., \"public_key\": '<key>'}]\n\nnear delete-key <dev-account> '<key>'\n")),(0,a.kt)("h4",{id:"why-locking-an-account"},"Why Locking an Account"),(0,a.kt)("p",null,"Locking an account brings more reassurance to end-users, since they know no external actor will be able to manipulate the account's\ncontract or balance."),(0,a.kt)("admonition",{title:"Upgrading Locked Contracts",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please do note that, while no external actor can update the contract, the contract ",(0,a.kt)("strong",{parentName:"p"},"can still upgrade itself"),". See ",(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/upgrade#programmatic-update"},"this article")," for details.")))}k.isMDXComponent=!0}}]);