"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6079],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),c=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=c(a),d=n,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(k,l(l({ref:e},u),{},{components:a})):r.createElement(k,l({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(t){var e=t.children,a=t.hidden,l=t.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>d});var r=a(87462),n=a(67294),o=a(86010),l=a(72389),s=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(t){var e,a,l=t.lazy,m=t.block,d=t.defaultValue,k=t.values,b=t.groupId,f=t.className,g=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,s.l)(h,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(e=null!=d?d:null==(a=g.find((function(t){return t.props.default})))?void 0:a.props.value)?e:g[0].props.value;if(null!==y&&!h.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.U)(),j=v.tabGroupChoices,w=v.setTabGroupChoices,C=(0,n.useState)(y),O=C[0],E=C[1],T=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var A=j[b];null!=A&&A!==O&&h.some((function(t){return t.value===A}))&&E(A)}var D=function(t){var e=t.currentTarget,a=T.indexOf(e),r=h[a].value;r!==O&&(x(e),E(r),null!=b&&w(b,String(r)))},S=function(t){var e,a=null;switch(t.key){case"ArrowRight":var r,n=T.indexOf(t.currentTarget)+1;a=null!=(r=T[n])?r:T[0];break;case"ArrowLeft":var o,l=T.indexOf(t.currentTarget)-1;a=null!=(o=T[l])?o:T[T.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},h.map((function(t){var e=t.value,a=t.label,l=t.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:function(t){return T.push(t)},onKeyDown:S,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===e})}),null!=a?a:e)}))),l?(0,n.cloneElement)(g.filter((function(t){return t.props.value===O}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==O})}))))}function d(t){var e=(0,l.Z)();return n.createElement(m,(0,r.Z)({key:String(e)},t))}},84750:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=(a(65488),a(85162),["components"]),s={id:"cookbook",title:"Common Use Cases",sidebar_label:"Cookbook"},i=void 0,c={unversionedId:"tools/near-api-js/cookbook",id:"tools/near-api-js/cookbook",title:"Common Use Cases",description:"",source:"@site/../docs/4.tools/near-api-js/cookbook.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/cookbook",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/cookbook",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/cookbook.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"cookbook",title:"Common Use Cases",sidebar_label:"Cookbook"},sidebar:"develop",previous:{title:"Using JavaScript API",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/quick-reference"},next:{title:"FAQ",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/faq"}},u={},p=[],m={toc:p};function d(t){var e=t.components,a=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The repository contains ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook"},"many recipes")," that you can readily use to solve common case scenarios."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ACCOUNTS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/accounts/create-testnet-account.js"},"Create Account")),(0,o.kt)("td",{parentName:"tr",align:null},"Create ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/accounts/creating-accounts"},"NEAR accounts")," without using NEAR Wallet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/access-keys"},"Access Key Rotation")),(0,o.kt)("td",{parentName:"tr",align:null},"Create and delete ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/accounts/access-keys"},"access keys")," for added security.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"TRANSACTIONS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/get-tx-status.js"},"Get Transaction Status")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets transaction status using a tx hash and associated account/contract ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/get-tx-detail.js"},"Recent Transaction Details")),(0,o.kt)("td",{parentName:"tr",align:null},"Get recent transaction details without using an ",(0,o.kt)("a",{parentName:"td",href:"https://near-indexers.io/docs/projects/near-indexer-framework"},"indexing")," service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/batch-transactions.js"},"Batch Transactions")),(0,o.kt)("td",{parentName:"tr",align:null},"Sign and send multiple ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/transactions/overview"},"transactions"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"UTILS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/deploy-contract.js"},"Deploy Contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Deploys a smart contract using a pre-compiled WASM file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/calculate-gas.js"},"Calculate Gas")),(0,o.kt)("td",{parentName:"tr",align:null},"Calculate ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/transactions/gas"},"gas burnt")," from any contract call.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/get-state.js"},"Read State w/o Account")),(0,o.kt)("td",{parentName:"tr",align:null},"Read state of a contract without instantiating an account.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/wrap-near.js"},"Wrap")," & ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/unwrap-near.js"},"Unwrap"),"  NEAR"),(0,o.kt)("td",{parentName:"tr",align:null},"Wrap and unwrap NEAR using the ",(0,o.kt)("inlineCode",{parentName:"td"},"wrap.near")," smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js"},"Verify Signature")),(0,o.kt)("td",{parentName:"tr",align:null},"Verify a key pair signature.")))))}d.isMDXComponent=!0}}]);