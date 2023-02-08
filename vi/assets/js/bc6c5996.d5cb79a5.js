"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[435],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294),a=t(86010);const l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(87462),a=t(67294),l=t(86010),o=t(72389),i=t(67392),u=t(7094),c=t(12466);const s="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,h=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.l)(w,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==g&&!w.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),E=y.tabGroupChoices,N=y.setTabGroupChoices,O=(0,a.useState)(g),T=O[0],R=O[1],j=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=E[h];null!=C&&C!==T&&w.some((function(e){return e.value===C}))&&R(C)}var x=function(e){var n=e.currentTarget,t=j.indexOf(n),r=w[t].value;r!==T&&(P(n),R(r),null!=h&&N(h,String(r)))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;t=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var l,o=j.indexOf(e.currentTarget)-1;t=null!=(l=j[o])?l:j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},w.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return j.push(e)},onKeyDown:_,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},80890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=t(65488),i=t(85162),u=["components"],c={id:"maintenance-windows",title:"Maintenance Windows"},s=void 0,d={unversionedId:"api/rpc/maintenance-windows",id:"api/rpc/maintenance-windows",title:"Maintenance Windows",description:"",source:"@site/../docs/5.api/rpc/maintenance-windows.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/maintenance-windows",permalink:"/near-docs-kor/vi/api/rpc/maintenance-windows",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/maintenance-windows.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"maintenance-windows",title:"Maintenance Windows"}},p={},m=[{value:"Maintenance windows",id:"maintenance-windows",level:2},{value:"What Could Go Wrong??",id:"what-could-go-wrong",level:4}],f={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The RPC API enables you to query future maintenance windows for a specific validator in current epoch"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"maintenance-windows"},"Maintenance windows"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The maintenance windows for a specific validator are future block height ranges in current epoch, in which the validator does not need produce block or chunk\nIf the provided account is not a validator, then it will return the range from now to the end of the epoch.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method: ",(0,l.kt)("inlineCode",{parentName:"li"},"EXPERIMENTAL_maintenance_windows")),(0,l.kt)("li",{parentName:"ul"},"params:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account_id"))))),(0,l.kt)("p",null,"example:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "maintenance_windows",\n  "params": {\n    "account_id": "node0"\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"http",label:"HTTPie",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=maintenance_windows \\\n  params:=\'{\n    "account_id": "node0"\n  }\'\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example response:"),(0,l.kt)("p",null,"The result will be a list of future maintenance windows in current epoch. For example a window `[1028, 1031]` includes 1028, 1029 and 1030.",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": [\n        [\n            1028,\n            1031\n        ],\n        [\n            1034,\n            1038\n        ],\n    ],\n    "id": "dontcare"\n}\n')))),(0,l.kt)("h4",{id:"what-could-go-wrong"},"What Could Go Wrong??"),(0,l.kt)("p",null,"When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joyent/node-verror"},"verror")," convention for structuring the error response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n')),(0,l.kt)("p",null,"Here is the exhaustive list of the error variants that can be returned by ",(0,l.kt)("inlineCode",{parentName:"p"},"maintenance_windows")," method:"),(0,l.kt)("table",{class:"custom-stripe"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"ERROR_TYPE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.name")),(0,l.kt)("th",null,"ERROR_CAUSE",(0,l.kt)("br",null),(0,l.kt)("code",null,"error.cause.name")),(0,l.kt)("th",null,"Reason"),(0,l.kt)("th",null,"Solution"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"INTERNAL_ERROR"),(0,l.kt)("td",null,"Something went wrong with the node itself or overloaded"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Try again later"),(0,l.kt)("li",null,"Send a request to a different node"),(0,l.kt)("li",null,"Check ",(0,l.kt)("code",null,"error.cause.info")," for more details")))))))}h.isMDXComponent=!0}}]);