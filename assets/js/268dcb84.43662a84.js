"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),k=r,h=p["".concat(s,".").concat(k)]||p[k]||d[k]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),u=n(76775),s=n(91980),i=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function k(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,u.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function m(e){var t,n,a,l,o=e.defaultValue,u=e.queryString,s=void 0!==u&&u,i=e.groupId,d=p(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!k({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),b=m[0],g=m[1],f=h({queryString:s,groupId:i}),v=f[0],N=f[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),T=y[0],R=y[1],_=function(){var e=null!=v?v:T;return k({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){_&&g(_)}),[_]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!k({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),N(e),R(e)}),[N,R,d]),tabValues:d}}var b=n(72389);const g="tabList__CuJ",f="tabItem_LNqP";function v(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,i=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==u&&(d(t),s(a))},k=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;n=null!=(l=c[o])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:k,onClick:p},o,{className:(0,l.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function T(e){var t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},86273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>k});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(74866),u=n(85162),s=["components"],i={id:"block-chunk",title:"Block / Chunk"},c=void 0,d={unversionedId:"api/rpc/block-chunk",id:"api/rpc/block-chunk",title:"Block / Chunk",description:"The RPC API enables you to query the network and get details about specific blocks or chunks.",source:"@site/../docs/5.api/rpc/block-chunk.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/block-chunk",permalink:"/near-docs-kor/api/rpc/block-chunk",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/block-chunk.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"block-chunk",title:"Block / Chunk"},sidebar:"api",previous:{title:"Accounts / Contracts",permalink:"/near-docs-kor/api/rpc/contracts"},next:{title:"Gas",permalink:"/near-docs-kor/api/rpc/gas"}},p={},k=[{value:"Block details",id:"block-details",level:2},{value:"What Could Go Wrong??",id:"what-could-go-wrong",level:4},{value:"Changes in Block",id:"changes-in-block",level:2},{value:"What Could Go Wrong??",id:"what-could-go-wrong-1",level:4},{value:"Chunk Details",id:"chunk-details",level:2},{value:"What Could Go Wrong??",id:"what-could-go-wrong-2",level:4}],h={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The RPC API enables you to query the network and get details about specific blocks or chunks."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"block-details"},"Block details"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Queries network and returns block for given height or hash. You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"finality")," param to return latest block details.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": You may choose to search by a specific block ",(0,l.kt)("em",{parentName:"p"},"or")," finality, you can not choose both."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method: ",(0,l.kt)("inlineCode",{parentName:"li"},"block")),(0,l.kt)("li",{parentName:"ul"},"params:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-finality-param"},(0,l.kt)("inlineCode",{parentName:"a"},"finality"))," ",(0,l.kt)("em",{parentName:"li"},"OR")," ",(0,l.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-block_id-param"},(0,l.kt)("inlineCode",{parentName:"a"},"block_id")))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"finality")," example:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "block",\n  "params": {\n    "finality": "final"\n  }\n}\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const response = await near.connection.provider.block({\n  finality: "final",\n});\n'))),(0,l.kt)(u.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=block \\\n  params:=\'{\n    "finality": "final"\n  }\'\n')))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[block_id]")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "block",\n  "params": {\n    "block_id": 17821130\n  }\n}\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const response = await near.connection.provider.block(17821130);\n"))),(0,l.kt)(u.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=block \\\n  params:='{\n    \"block_id\": 17821130\n  }'\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[block_hash]")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "block",\n  "params": {\n    "block_id": "7nsuuitwS7xcdGnD9JgrE22cRB2vf2VS4yh1N9S71F4d"\n  }\n}\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const response = await near.connection.provider.block(\n  "7nsuuitwS7xcdGnD9JgrE22cRB2vf2VS4yh1N9S71F4d"\n);\n'))),(0,l.kt)(u.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=block \\\n  params:=\'{\n    "block_id": "7nsuuitwS7xcdGnD9JgrE22cRB2vf2VS4yh1N9S71F4d"\n  }\'\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example response:"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "author": "bitcat.pool.f863973.m0",\n    "header": {\n      "height": 17821130,\n      "epoch_id": "7Wr3GFJkYeCxjVGz3gDaxvAMUzXuzG8MjFXTFoAXB6ZZ",\n      "next_epoch_id": "A5AdnxEn7mfHieQ5fRxx9AagCkHNJz6wr61ppEXiWvvh",\n      "hash": "CLo31YCUhzz8ZPtS5vXLFskyZgHV5qWgXinBQHgu9Pyd",\n      "prev_hash": "2yUTTubrv1gJhTUVnHXh66JG3qxStBqySoN6wzRzgdVD",\n      "prev_state_root": "5rSz37fySS8XkVgEy3FAZwUncX4X1thcSpuvCgA6xmec",\n      "chunk_receipts_root": "9ETNjrt6MkwTgSVMMbpukfxRshSD1avBUUa4R4NuqwHv",\n      "chunk_headers_root": "HMpEoBhPvThWZvppLwrXQSSfumVdaDW7WfZoCAPtjPfo",\n      "chunk_tx_root": "7tkzFg8RHBmMw1ncRJZCCZAizgq4rwCftTKYLce8RU8t",\n      "outcome_root": "7tkzFg8RHBmMw1ncRJZCCZAizgq4rwCftTKYLce8RU8t",\n      "chunks_included": 1,\n      "challenges_root": "11111111111111111111111111111111",\n      "timestamp": 1601280114229875635,\n      "timestamp_nanosec": "1601280114229875635",\n      "random_value": "ACdUSF3nehbMTwT7qjUB6Mm4Ynck5TVAWbNH3DR1cjQ7",\n      "validator_proposals": [],\n      "chunk_mask": [true],\n      "gas_price": "100000000",\n      "rent_paid": "0",\n      "validator_reward": "0",\n      "total_supply": "1042339182040791154864822502764857",\n      "challenges_result": [],\n      "last_final_block": "AaxTqjYND5WAKbV2UZaFed6DH1DShN9fEemtnpTsv3eR",\n      "last_ds_final_block": "2yUTTubrv1gJhTUVnHXh66JG3qxStBqySoN6wzRzgdVD",\n      "next_bp_hash": "3ZNEoFYh2CQeJ9dc1pLBeUd1HWG8657j2c1v72ENE45Q",\n      "block_merkle_root": "H3912Nkw6rtamfjsjmafe2uV2p1XmUKDou5ywgxb1gJr",\n      "approvals": [\n        "ed25519:4hNtc9vLhn2PQhktWtLKJV9g8SBfpm6NBT1w4syNFqoKE7ZMts2WwKA9x1ZUSBGVKYCuDGEqogLvwCF25G7e1UR3",\n        "ed25519:2UNmbTqysMMevVPqJEKSq57hkcxVFcAMdGq7CFhpW65yBKFxYwpoziiWsAtARusLn9Sy1eXM7DkGTXwAqFiSooS6",\n        "ed25519:4sumGoW9dnQCsJRpzkd4FQ5NSJypGQRCppWp7eQ9tpsEcJXjHZN8GVTCyeEk19WmbbMEJ5KBNypryyHzaH2gBxd4",\n        "ed25519:3fP2dri6GjYkmHgEqQWWP9GcoQEgakbaUtfr3391tXtYBgxmiJUEymRe54m7D8bQrSJ3LhKD8gTFT7qqdemRnizR",\n        "ed25519:3mwdqSWNm6RiuZAoZhD6pqsirC2cL48nEZAGoKixpqbrsBpAzqV3W2paH4KtQQ4JPLvk5pnzojaint2kNBCcUyq1",\n        "ed25519:D4hMnxqLyQW4Wo29MRNMej887GH46yJXDKNN4es8UDSi9shJ9Y4FcGqkxdV4AZhn1yUjwN5LwfgAgY6fyczk5L3",\n        null,\n        "ed25519:4WCVm4dn88VJxTkUgcvdS7vs34diBqtQY4XWMRctSN1NpbgdkwwVyxg7d2SbGC22SuED7w4nrToMhcpJXrkhkDmF",\n        "ed25519:JqtC7TFP7U14s7YhRKQEqwbc2RUxoctq75mrBdX91f7DuCWsPpe6ZTTnfHPmuJPjTzFHVZTsaQJWzwfSrrgNpnc",\n        "ed25519:ngGUpWc2SyHmMCkWGTNNNfvZAJQ5z7P92JCmDqB7JW3j8fNH6LobvFFXb2zVdssibJKgnjwBj8CRe6qiZtuYQZM",\n        "ed25519:5kzW6RbjukyJZiw9NTzTPPsQdoqN6EecafjVFEoWmTxQ4uSv1uSXhQYcHK2eq4m84oMmPABQDz2mm73Qx8mDdCQX",\n        "ed25519:5wHnuuxwJJiZ4bXNq5cESnr4YovFU2yaUcuHRDUw3DnLoxkqc15CsegoyUSQKEwtCZ4yETv8Z9QcD6Wr9zHV4AUk",\n        "ed25519:3F9XzWBxto31e8RAcBShAJBzJPgSJQsWbPXR38AfQnJn6AiveGz3JjebQm9Ye63BrnNA57QrPshwknxpzSrcNEZW",\n        "ed25519:2g5s4SKsHt9PMdekkDqVtwwtz14v4edhqdBX1MYA8tB6nDpj3vDCDCTy9pEU8dX31PoQe5ygnf88aTZukMBMK1Yt",\n        "ed25519:3Xz4jqhdyS3qs6xTmWdgjwt5gJraU5czMA89hPhmvbAN4aA7SUKL1HkevpmutRQqqxe7c7uCFeGiDHvDcxhhmD8W",\n        null,\n        "ed25519:55xs3vwPEys39egf9Z8SNyn1JsHPRMgj9HCX1GE7GJsVTcAuutQUCo91E12ZdXkuToYRXb9KzoT8n9XQRCNuLpwY",\n        null,\n        "ed25519:28JrFw7KnhnQPN89qZnnw17KDBjS6CDN7zB1hTg7KGg8qQPoCzakz9DNnaSnx39ji7e2fQSpZt4cNJaD7K7Yu7yo",\n        "ed25519:41hAr5qhtvUYpdD2NK9qqTVnpG325ZoAiwrcmk1MJH7fdpxm7oSKXvXZqh7bTmPhv61hH2RpHnhcGuN4QqLzK2zt",\n        "ed25519:4QacMsQ5FJgvecAYDFq8QBh19BBjh4qU8oeD5bV7p6Zhhu3e6r2iSHTvDBU2Q62RZAaWQQkkEwDUC9rsXdkGVhAt",\n        "ed25519:27smtCZ3WobEvBuD5DggY6kkGxjB9qRVY6kPixgwqvBT1eKbRVoV8cLj1z51S8RTcp7YzAr1vhHJUHgksatR9Udz",\n        "ed25519:4wspCWoAbhYxb3th2eX6ZXvKep1Fsco7mFP5zBodXBR8Wr344ANXSUCri3gUgNCCSoQ2CKSdqDEsvE6Y2jQ9hmbB",\n        "ed25519:46XpYf9ZB9gjDfdnJLHqqhYJpQCuvCgB9tzKWS88GANMCb2j9BM3KXyjaEzynSsaPK8VrKFXQuTsTzgQSeo9cWGW",\n        null,\n        "ed25519:Y5ehsrhEpTRGjG6fHJHsEXj2NYPGMmKguiJHXP7TqsCWHBvNzaJbieR7UDp78hJ1ib7C18J5MB2kCzTXBCF9c3b",\n        "ed25519:3P9363Dc8Kqvgjt3TsNRncUrncCHid7aSRnuySjF4JYmQbApkAxomyMu8xm9Rgo3mj9rqXb16PM7Xjn7hKP6TyVr",\n        null,\n        null,\n        "ed25519:65ATjGsigZ3vMp7sGcp1c4ptxoqhHPkBeAaZ5GWJguVDLyrRLPJrtXhLGjH9DpXd7CZswjyMYq5aRtorLnmmJ7GW",\n        null,\n        "ed25519:5SvqSViXbtsLoFMdtCufyyDgZnrEK7LheFi38X5M2ic17gfV5cz37r85RyixjUv98MbAmgVdmkxVFDGfSbeoHW7X",\n        null,\n        null,\n        "ed25519:2n3fQiBEiDKkB84biXWyQmvnupKX7B8faugY37jVi8hVXuWLggJmaEjqub511RCYwFnwW1RBxYpuJQ455KaniCd4",\n        "ed25519:2K9xKFLJ2fW74tddXtghFGFurKWomAqaJmkKYVZKHQT6zHe5wNSYT3vzMotLQcez5JD1Ta57N9zQ4H1RysB2s5DZ",\n        null,\n        null,\n        "ed25519:3qeCRtcLAqLtQ2YSQLcHDa26ykKX1BvAhP9jshLLYapxSEGGgZJY8sU72p9E78AkXwHP3X2Eq74jvts7gTRzNgMg",\n        null,\n        "ed25519:2czSQCF8wBDomEeSdDRH4gFoyJrp2ppZqR6JDaDGoYpaFkpWxZf2oGDkKfQLZMbfvU6LXkQjJssVHcLCJRMzG8co"\n      ],\n      "signature": "ed25519:58sdWd6kxzhQdCGvHzxqvdtDLJzqspe74f3gytnqdxDLHf4eesXi7B3nYq2YaosCHZJYmcR4HPHKSoFm3WE4MbxT",\n      "latest_protocol_version": 35\n    },\n    "chunks": [\n      {\n        "chunk_hash": "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22",\n        "prev_block_hash": "2yUTTubrv1gJhTUVnHXh66JG3qxStBqySoN6wzRzgdVD",\n        "outcome_root": "11111111111111111111111111111111",\n        "prev_state_root": "HqWDq3f5HJuWnsTfwZS6jdAUqDjGFSTvjhb846vV27dx",\n        "encoded_merkle_root": "9zYue7drR1rhfzEEoc4WUXzaYRnRNihvRoGt1BgK7Lkk",\n        "encoded_length": 8,\n        "height_created": 17821130,\n        "height_included": 17821130,\n        "shard_id": 0,\n        "gas_used": 0,\n        "gas_limit": 1000000000000000,\n        "rent_paid": "0",\n        "validator_reward": "0",\n        "balance_burnt": "0",\n        "outgoing_receipts_root": "H4Rd6SGeEBTbxkitsCdzfu9xL9HtZ2eHoPCQXUeZ6bW4",\n        "tx_root": "11111111111111111111111111111111",\n        "validator_proposals": [],\n        "signature": "ed25519:4iPgpYAcPztAvnRHjfpegN37Rd8dTJKCjSd1gKAPLDaLcHUySJHjexMSSfC5iJVy28vqF9VB4psz13x2nt92cbR7"\n      }\n    ]\n  },\n  "id": "dontcare"\n}\n')))),(0,l.kt)("h4",{id:"what-could-go-wrong"},"What Could Go Wrong??"),(0,l.kt)("p",null,"When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joyent/node-verror"},"verror")," convention for structuring the error response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Heads up")),(0,l.kt)("p",{parentName:"blockquote"},"The fields ",(0,l.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," in the structure above are considered legacy ones and might be deprecated in the future. Please, don't rely on them.")),(0,l.kt)("p",null,"Here is the exhaustive list of the error variants that can be returned by ",(0,l.kt)("inlineCode",{parentName:"p"},"block")," method:"),(0,l.kt)("table",{class:"custom-stripe"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"ERROR_TYPE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.name")),(0,l.kt)("th",null,"ERROR_CAUSE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.cause.name")),(0,l.kt)("th",null,"Reason"),(0,l.kt)("th",null,"Solution"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"HANDLER_ERROR"),(0,l.kt)("td",null,"UNKNOWN_BLOCK"),(0,l.kt)("td",null,"The requested block has not been produced yet or it has been garbage-collected (cleaned up to save space on the RPC node)"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Check that the requested block is legit"),(0,l.kt)("li",null,"If the block had been produced more than 5 epochs ago, try to send your request to ",(0,l.kt)("a",{href:"https://near-nodes.io/intro/node-types#archival-node"},"an archival node"))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NOT_SYNCED_YET"),(0,l.kt)("td",null,"The node is still syncing and the requested block is not in the database yet"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Wait until the node finish syncing"),(0,l.kt)("li",null,"Send a request to a different node which is synced")))),(0,l.kt)("tr",{class:"stripe"},(0,l.kt)("td",null,"REQUEST_VALIDATION_ERROR"),(0,l.kt)("td",null,"PARSE_ERROR"),(0,l.kt)("td",null,"Passed arguments can't be parsed by JSON RPC server (missing arguments, wrong format, etc.)"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Check the arguments passed and pass the correct ones"),(0,l.kt)("li",null,"Check ",(0,l.kt)("code",null,"error.cause.info")," for more details")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"Something went wrong with the node itself or overloaded"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Try again later"),(0,l.kt)("li",null,"Send a request to a different node"),(0,l.kt)("li",null,"Check ",(0,l.kt)("code",null,"error.cause.info")," for more details")))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"changes-in-block"},"Changes in Block"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns changes in block for given block height or hash. You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"finality")," param to return latest block details.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": You may choose to search by a specific block ",(0,l.kt)("em",{parentName:"p"},"or")," finality, you can not choose both."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method: ",(0,l.kt)("inlineCode",{parentName:"li"},"EXPERIMENTAL_changes_in_block")),(0,l.kt)("li",{parentName:"ul"},"params:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-finality-param"},(0,l.kt)("inlineCode",{parentName:"a"},"finality"))," ",(0,l.kt)("em",{parentName:"li"},"OR")," ",(0,l.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-block_id-param"},(0,l.kt)("inlineCode",{parentName:"a"},"block_id")))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"finality")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_changes_in_block",\n  "params": {\n    "finality": "final"\n  }\n}\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const response = await near.connection.provider.experimental_changes_in_block({\n  finality: "final",\n});\n'))),(0,l.kt)(u.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_changes_in_block \\\n  params:=\'{\n    "finality": "final"\n  }\'\n')))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[block_id]")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_changes_in_block",\n  "params": {\n    "block_id": 17821135\n  }\n}\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const response = await near.connection.provider.experimental_changes_in_block(\n  17821135\n);\n"))),(0,l.kt)(u.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_changes_in_block \\\n  params:='{\n    \"block_id\": 17821135\n  }'\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"block_hash")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_changes_in_block",\n  "params": {\n    "block_id": "81k9ked5s34zh13EjJt26mxw5npa485SY4UNoPi6yYLo"\n  }\n}\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const response = await near.connection.provider.experimental_changes_in_block(\n  "81k9ked5s34zh13EjJt26mxw5npa485SY4UNoPi6yYLo"\n);\n'))),(0,l.kt)(u.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_changes_in_block \\\n  params:=\'{\n    "block_id": "81k9ked5s34zh13EjJt26mxw5npa485SY4UNoPi6yYLo"\n  }\'\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example response: "),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "block_hash": "81k9ked5s34zh13EjJt26mxw5npa485SY4UNoPi6yYLo",\n    "changes": [\n      {\n        "type": "account_touched",\n        "account_id": "lee.testnet"\n      },\n      {\n        "type": "contract_code_touched",\n        "account_id": "lee.testnet"\n      },\n      {\n        "type": "access_key_touched",\n        "account_id": "lee.testnet"\n      }\n    ]\n  },\n  "id": "dontcare"\n}\n')))),(0,l.kt)("h4",{id:"what-could-go-wrong-1"},"What Could Go Wrong??"),(0,l.kt)("p",null,"When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joyent/node-verror"},"verror")," convention for structuring the error response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Heads up")),(0,l.kt)("p",{parentName:"blockquote"},"The fields ",(0,l.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," in the structure above are considered legacy ones and might be deprecated in the future. Please, don't rely on them.")),(0,l.kt)("p",null,"Here is the exhaustive list of the error variants that can be returned by ",(0,l.kt)("inlineCode",{parentName:"p"},"EXPERIMENTAL_changes_in_block")," method:"),(0,l.kt)("table",{class:"custom-stripe"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"ERROR_TYPE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.name")),(0,l.kt)("th",null,"ERROR_CAUSE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.cause.name")),(0,l.kt)("th",null,"Reason"),(0,l.kt)("th",null,"Solution"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"HANDLER_ERROR"),(0,l.kt)("td",null,"UNKNOWN_BLOCK"),(0,l.kt)("td",null,"The requested block has not been produced yet or it has been garbage-collected (cleaned up to save space on the RPC node)"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Check that the requested block is legit"),(0,l.kt)("li",null,"If the block had been produced more than 5 epochs ago, try to send your request to ",(0,l.kt)("a",{href:"https://near-nodes.io/intro/node-types#archival-node"},"an archival node"))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NOT_SYNCED_YET"),(0,l.kt)("td",null,"The node is still syncing and the requested block is not in the database yet"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Wait until the node finish syncing"),(0,l.kt)("li",null,"Send a request to a different node which is synced")))),(0,l.kt)("tr",{class:"stripe"},(0,l.kt)("td",null,"REQUEST_VALIDATION_ERROR"),(0,l.kt)("td",null,"PARSE_ERROR"),(0,l.kt)("td",null,"Passed arguments can't be parsed by JSON RPC server (missing arguments, wrong format, etc.)"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Check the arguments passed and pass the correct ones"),(0,l.kt)("li",null,"Check ",(0,l.kt)("code",null,"error.cause.info")," for more details")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"Something went wrong with the node itself or overloaded"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Try again later"),(0,l.kt)("li",null,"Send a request to a different node"),(0,l.kt)("li",null,"Check ",(0,l.kt)("code",null,"error.cause.info")," for more details")))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"chunk-details"},"Chunk Details"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns details of a specific chunk. You can run a ",(0,l.kt)("a",{parentName:"p",href:"/api/rpc/setup#block-details"},"block details")," query to get a valid chunk hash.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method: ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")),(0,l.kt)("li",{parentName:"ul"},"params:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chunk_id")," ",(0,l.kt)("em",{parentName:"li"},"OR")," ",(0,l.kt)("a",{parentName:"li",href:"/api/rpc/setup#using-block_id-param"},(0,l.kt)("inlineCode",{parentName:"a"},"block_id"),", ",(0,l.kt)("inlineCode",{parentName:"a"},"shard_id")))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chunk_id")," example:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "chunk",\n  "params": {"chunk_id": "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22"}\n}\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const response = await near.connection.provider.chunk({\n  chunk_id: "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22"\n});\n'))),(0,l.kt)(u.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 method=chunk params:=\'{"chunk_id": "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22"}\' id=dontcare\n')))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"block_id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"shard_id")," example:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "chunk",\n  "params": {"block_id": 58934027, "shard_id": 0}\n}\n'))),(0,l.kt)(u.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const response = await near.connection.provider.chunk({\n  block_id: 58934027, shard_id: 0\n});\n"))),(0,l.kt)(u.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 method=chunk params:=\'{"block_id": 58934027, "shard_id": 0}\' id=dontcare\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example response: "),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "author": "bitcat.pool.f863973.m0",\n    "header": {\n      "chunk_hash": "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22",\n      "prev_block_hash": "2yUTTubrv1gJhTUVnHXh66JG3qxStBqySoN6wzRzgdVD",\n      "outcome_root": "11111111111111111111111111111111",\n      "prev_state_root": "HqWDq3f5HJuWnsTfwZS6jdAUqDjGFSTvjhb846vV27dx",\n      "encoded_merkle_root": "9zYue7drR1rhfzEEoc4WUXzaYRnRNihvRoGt1BgK7Lkk",\n      "encoded_length": 8,\n      "height_created": 17821130,\n      "height_included": 17821130,\n      "shard_id": 0,\n      "gas_used": 0,\n      "gas_limit": 1000000000000000,\n      "rent_paid": "0",\n      "validator_reward": "0",\n      "balance_burnt": "0",\n      "outgoing_receipts_root": "H4Rd6SGeEBTbxkitsCdzfu9xL9HtZ2eHoPCQXUeZ6bW4",\n      "tx_root": "11111111111111111111111111111111",\n      "validator_proposals": [],\n      "signature": "ed25519:4iPgpYAcPztAvnRHjfpegN37Rd8dTJKCjSd1gKAPLDaLcHUySJHjexMSSfC5iJVy28vqF9VB4psz13x2nt92cbR7"\n    },\n    "transactions": [],\n    "receipts": []\n  },\n  "id": "dontcare"\n}\n')))),(0,l.kt)("h4",{id:"what-could-go-wrong-2"},"What Could Go Wrong??"),(0,l.kt)("p",null,"When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joyent/node-verror"},"verror")," convention for structuring the error response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Heads up")),(0,l.kt)("p",{parentName:"blockquote"},"The fields ",(0,l.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," in the structure above are considered legacy ones and might be deprecated in the future. Please, don't rely on them.")),(0,l.kt)("p",null,"Here is the exhaustive list of the error variants that can be returned by ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk")," method:"),(0,l.kt)("table",{class:"custom-stripe"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"ERROR_TYPE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.name")),(0,l.kt)("th",null,"ERROR_CAUSE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.cause.name")),(0,l.kt)("th",null,"Reason"),(0,l.kt)("th",null,"Solution"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"4"},"HANDLER_ERROR"),(0,l.kt)("td",null,"UNKNOWN_BLOCK"),(0,l.kt)("td",null,"The requested block has not been produced yet or it has been garbage-collected (cleaned up to save space on the RPC node)"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Check that the requested block is legit"),(0,l.kt)("li",null,"If the block had been produced more than 5 epochs ago, try to send your request to ",(0,l.kt)("a",{href:"https://near-nodes.io/intro/node-types#archival-node"},"an archival node"))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"UNKNOWN_CHUNK"),(0,l.kt)("td",null,"The requested chunk can't be found in a database"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Check that the requested chunk is legit"),(0,l.kt)("li",null,"If the chunk had been produced more than 5 epochs ago, try to send your request to an archival node")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"INVALID_SHARD_ID"),(0,l.kt)("td",null,"Provided ",(0,l.kt)("code",null,"shard_id")," does not exist"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Provide ",(0,l.kt)("code",null,"shard_id")," for an existing shard")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NOT_SYNCED_YET"),(0,l.kt)("td",null,"The node is still syncing and the requested chunk is not in the database yet"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Wait until the node finish syncing"),(0,l.kt)("li",null,"Send a request to a different node which is synced")))),(0,l.kt)("tr",{class:"stripe"},(0,l.kt)("td",null,"REQUEST_VALIDATION_ERROR"),(0,l.kt)("td",null,"PARSE_ERROR"),(0,l.kt)("td",null,"Passed arguments can't be parsed by JSON RPC server (missing arguments, wrong format, etc.)"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Check the arguments passed and pass the correct ones"),(0,l.kt)("li",null,"Check ",(0,l.kt)("code",null,"error.cause.info")," for more details")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"Something went wrong with the node itself or overloaded"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Try again later"),(0,l.kt)("li",null,"Send a request to a different node"),(0,l.kt)("li",null,"Check ",(0,l.kt)("code",null,"error.cause.info")," for more details")))))),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);