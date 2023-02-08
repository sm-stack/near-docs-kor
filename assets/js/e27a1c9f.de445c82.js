"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6079],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(k,l(l({ref:e},u),{},{components:a})):n.createElement(k,l({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(t){var e=t.children,a=t.hidden,l=t.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),s=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(t){var e,a,l=t.lazy,m=t.block,d=t.defaultValue,k=t.values,b=t.groupId,f=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,s.l)(h,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(e=null!=d?d:null==(a=g.find((function(t){return t.props.default})))?void 0:a.props.value)?e:g[0].props.value;if(null!==y&&!h.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.U)(),j=v.tabGroupChoices,w=v.setTabGroupChoices,O=(0,r.useState)(y),C=O[0],E=O[1],T=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var A=j[b];null!=A&&A!==C&&h.some((function(t){return t.value===A}))&&E(A)}var D=function(t){var e=t.currentTarget,a=T.indexOf(e),n=h[a].value;n!==C&&(x(e),E(n),null!=b&&w(b,String(n)))},S=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n,r=T.indexOf(t.currentTarget)+1;a=null!=(n=T[r])?n:T[0];break;case"ArrowLeft":var o,l=T.indexOf(t.currentTarget)-1;a=null!=(o=T[l])?o:T[T.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},h.map((function(t){var e=t.value,a=t.label,l=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:function(t){return T.push(t)},onKeyDown:S,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===e})}),null!=a?a:e)}))),l?(0,r.cloneElement)(g.filter((function(t){return t.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function d(t){var e=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(e)},t))}},84750:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=(a(65488),a(85162),["components"]),s={id:"cookbook",title:"Common Use Cases",sidebar_label:"Cookbook"},i=void 0,c={unversionedId:"tools/near-api-js/cookbook",id:"tools/near-api-js/cookbook",title:"Common Use Cases",description:"",source:"@site/../docs/4.tools/near-api-js/cookbook.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/cookbook",permalink:"/tools/near-api-js/cookbook",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/cookbook.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"cookbook",title:"Common Use Cases",sidebar_label:"Cookbook"},sidebar:"develop",previous:{title:"Using JavaScript API",permalink:"/tools/near-api-js/quick-reference"},next:{title:"FAQ",permalink:"/tools/near-api-js/faq"}},u={},p=[],m={toc:p};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The repository contains ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook"},"many recipes")," that you can readily use to solve common case scenarios."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ACCOUNTS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/accounts/create-testnet-account.js"},"Create Account")),(0,o.kt)("td",{parentName:"tr",align:null},"Create ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/accounts/creating-accounts"},"NEAR accounts")," without using NEAR Wallet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/access-keys"},"Access Key Rotation")),(0,o.kt)("td",{parentName:"tr",align:null},"Create and delete ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/accounts/access-keys"},"access keys")," for added security.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"TRANSACTIONS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/get-tx-status.js"},"Get Transaction Status")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets transaction status using a tx hash and associated account/contract ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/get-tx-detail.js"},"Recent Transaction Details")),(0,o.kt)("td",{parentName:"tr",align:null},"Get recent transaction details without using an ",(0,o.kt)("a",{parentName:"td",href:"https://near-indexers.io/docs/projects/near-indexer-framework"},"indexing")," service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/batch-transactions.js"},"Batch Transactions")),(0,o.kt)("td",{parentName:"tr",align:null},"Sign and send multiple ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/transactions/overview"},"transactions"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"UTILS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/deploy-contract.js"},"Deploy Contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Deploys a smart contract using a pre-compiled WASM file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/calculate-gas.js"},"Calculate Gas")),(0,o.kt)("td",{parentName:"tr",align:null},"Calculate ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/transactions/gas"},"gas burnt")," from any contract call.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/get-state.js"},"Read State w/o Account")),(0,o.kt)("td",{parentName:"tr",align:null},"Read state of a contract without instantiating an account.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/wrap-near.js"},"Wrap")," & ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/unwrap-near.js"},"Unwrap"),"  NEAR"),(0,o.kt)("td",{parentName:"tr",align:null},"Wrap and unwrap NEAR using the ",(0,o.kt)("inlineCode",{parentName:"td"},"wrap.near")," smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js"},"Verify Signature")),(0,o.kt)("td",{parentName:"tr",align:null},"Verify a key pair signature.")))))}d.isMDXComponent=!0}}]);