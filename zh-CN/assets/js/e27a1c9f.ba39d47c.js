"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6079],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>j});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),s=a(76775),i=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function k(e){var t,a,r,o,l=e.defaultValue,s=e.queryString,i=void 0!==s&&s,u=e.groupId,p=d(e),k=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:p})})),f=k[0],g=k[1],h=b({queryString:i,groupId:u}),v=h[0],y=h[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),r=a[0],o=a[1],[r,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),j=N[0],w=N[1],E=function(){var e=null!=v?v:j;return m({value:e,tabValues:p})?e:null}();return(0,n.useLayoutEffect)((function(){E&&g(E)}),[E]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),w(e)}),[y,w,p]),tabValues:p}}var f=a(72389);const g="tabList__CuJ",h="tabItem_LNqP";function v(e){var t=e.className,a=e.block,s=e.selectedValue,i=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==s&&(p(t),i(r))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,n=c.indexOf(e.currentTarget)+1;a=null!=(r=c[n])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;a=null!=(o=c[l])?o:c[c.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,r=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var o=a.find((function(e){return e.props.value===r}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function N(e){var t=k(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function j(e){var t=(0,f.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},84750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=(a(74866),a(85162),["components"]),s={id:"cookbook",title:"Common Use Cases",sidebar_label:"Cookbook"},i=void 0,u={unversionedId:"tools/near-api-js/cookbook",id:"tools/near-api-js/cookbook",title:"Common Use Cases",description:"The repository contains many recipes that you can readily use to solve common case scenarios.",source:"@site/../docs/4.tools/near-api-js/cookbook.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/cookbook",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/cookbook",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/cookbook.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"cookbook",title:"Common Use Cases",sidebar_label:"Cookbook"},sidebar:"develop",previous:{title:"Using JavaScript API",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/quick-reference"},next:{title:"FAQ",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/faq"}},c={},p=[],d={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The repository contains ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook"},"many recipes")," that you can readily use to solve common case scenarios."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ACCOUNTS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/accounts/create-testnet-account.js"},"Create Account")),(0,o.kt)("td",{parentName:"tr",align:null},"Create ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/accounts/creating-accounts"},"NEAR accounts")," without using NEAR Wallet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/access-keys"},"Access Key Rotation")),(0,o.kt)("td",{parentName:"tr",align:null},"Create and delete ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/accounts/access-keys"},"access keys")," for added security.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"TRANSACTIONS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/get-tx-status.js"},"Get Transaction Status")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets transaction status using a tx hash and associated account/contract ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/get-tx-detail.js"},"Recent Transaction Details")),(0,o.kt)("td",{parentName:"tr",align:null},"Get recent transaction details without using an ",(0,o.kt)("a",{parentName:"td",href:"https://near-indexers.io/docs/projects/near-indexer-framework"},"indexing")," service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/batch-transactions.js"},"Batch Transactions")),(0,o.kt)("td",{parentName:"tr",align:null},"Sign and send multiple ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/transactions/overview"},"transactions"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"UTILS")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/deploy-contract.js"},"Deploy Contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Deploys a smart contract using a pre-compiled WASM file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/calculate-gas.js"},"Calculate Gas")),(0,o.kt)("td",{parentName:"tr",align:null},"Calculate ",(0,o.kt)("a",{parentName:"td",href:"/concepts/basics/transactions/gas"},"gas burnt")," from any contract call.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/get-state.js"},"Read State w/o Account")),(0,o.kt)("td",{parentName:"tr",align:null},"Read state of a contract without instantiating an account.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/wrap-near.js"},"Wrap")," & ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/unwrap-near.js"},"Unwrap"),"  NEAR"),(0,o.kt)("td",{parentName:"tr",align:null},"Wrap and unwrap NEAR using the ",(0,o.kt)("inlineCode",{parentName:"td"},"wrap.near")," smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js"},"Verify Signature")),(0,o.kt)("td",{parentName:"tr",align:null},"Verify a key pair signature.")))))}m.isMDXComponent=!0}}]);