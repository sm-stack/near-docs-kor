"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),c=n(7094),s=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,c.U)(),N=_.tabGroupChoices,w=_.setTabGroupChoices,O=(0,a.useState)(y),T=O[0],E=O[1],j=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=N[h];null!=C&&C!==T&&k.some((function(e){return e.value===C}))&&E(C)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),r=k[n].value;r!==T&&(x(t),E(r),null!=h&&w(h,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,l=j.indexOf(e.currentTarget)-1;n=null!=(o=j[l])?o:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(65488),i=n(85162),c=["components"],s={id:"epoch",title:"\uc5d0\ud3ec\ud06c"},u=void 0,p={unversionedId:"concepts/basics/epoch",id:"concepts/basics/epoch",title:"\uc5d0\ud3ec\ud06c",description:"",source:"@site/../docs/1.concepts/basics/epoch.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/epoch",permalink:"/near-docs-kor/zh-CN/concepts/basics/epoch",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/epoch.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"epoch",title:"\uc5d0\ud3ec\ud06c"},sidebar:"\uac1c\ub150",previous:{title:"\ub124\ud2b8\uc6cc\ud06c",permalink:"/near-docs-kor/zh-CN/concepts/basics/networks"},next:{title:"\uc778\ub371\uc11c \uc18c\uac1c",permalink:"/near-docs-kor/zh-CN/concepts/advanced/indexers"}},d={},m=[],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc5d0\ud3ec\ud06c"),"\ub294 \ub124\ud2b8\uc6cc\ud06c\uc758 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \uc77c\uc815\ud558\uac8c \uc720\uc9c0\ub418\ub294 \uc2dc\uac04 \ub2e8\uc704\uc785\ub2c8\ub2e4. \uc774\ub294 \ube14\ub85d \ub2e8\uc704\ub85c \uce21\uc815\ub429\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testnet"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"li"},"mainnet")," \ub458 \ub2e4 43,200 \ube14\ub85d\uc758 \uc5d0\ud3ec\ud06c \uae30\uac04\uc744 \uac16\uc2b5\ub2c8\ub2e4. \uc774\uc0c1\uc801\uc73c\ub85c\ub294 \ube14\ub85d\uc774 1\ucd08\ub9c8\ub2e4 \uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc5d0, \uc5d0\ud3ec\ud06c\ub294 \uc57d 12\uc2dc\uac04 \ub3d9\uc548 \uc9c0\uc18d\ub429\ub2c8\ub2e4(\uc2e4\uc81c\ub85c \uc0dd\uc131\ud558\ub294 \ub370 \uc57d\uac04 \ub354 \uc624\ub798 \uac78\ub9bc)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/api/rpc/setup#protocol-config"},(0,o.kt)("inlineCode",{parentName:"a"},"protocol_config")))," RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ucffc\ub9ac\ud558\uace0 ",(0,o.kt)("inlineCode",{parentName:"li"},"epoch_length"),"\ub97c \uac80\uc0c9\ud558\uc5ec \uc774 \uc124\uc815\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ucc38\uace0:")," ",(0,o.kt)("a",{parentName:"p",href:"https://near-nodes.io/intro/node-types#archival-node"},"\ubcf4\uad00 \ub178\ub4dc"),"\uac00 \uc544\ub2cc \ub178\ub4dc\ub294 5 \uc5d0\ud3ec\ud06c(~2.5\uc77c) \ud6c4\uc5d0 \ube14\ub85d\uc744 \uc218\uc9d1\ud569\ub2c8\ub2e4 ."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc608\uc2dc:")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_protocol_config",\n  "params": {\n    "finality": "final"\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_protocol_config \\\n  params:=\'{\n    "finality": "final"\n  }\'\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc751\ub2f5 \uc608\uc2dc:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "protocol_version": 44,\n        "genesis_time": "2020-07-21T16:55:51.591948Z",\n        "chain_id": "mainnet",\n        "genesis_height": 9820210,\n        "num_block_producer_seats": 100,\n        "num_block_producer_seats_per_shard": [\n            100\n        ],\n        "avg_hidden_validator_seats_per_shard": [\n            0\n        ],\n        "dynamic_resharding": false,\n        "protocol_upgrade_stake_threshold": [\n            4,\n            5\n        ],\n        "epoch_length": 43200,\n        "gas_limit": 1000000000000000,\n        "min_gas_price": "1000000000",\n        "max_gas_price": "10000000000000000000000",\n        "block_producer_kickout_threshold": 90,\n        "chunk_producer_kickout_threshold": 90,\n\n// ---- snip ----\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/wiki/blob/master/Archive/validators/faq.md#what-is-an-epoch"},"\ubc38\ub9ac\ub370\uc774\ud130 FAQ"),"\uc5d0\uc11c \uc5d0\ud3ec\ud06c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c \uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4 ."),(0,o.kt)("admonition",{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip"},(0,o.kt)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol"},(0,o.kt)("h8",null,"StackOverflow\uc5d0 \ubb3c\uc5b4\ubcf4\uc138\uc694!"))))}h.isMDXComponent=!0}}]);