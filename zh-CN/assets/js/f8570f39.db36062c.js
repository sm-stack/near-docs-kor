"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9482],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>c,SQ:()=>p});var n=a(67294),r=a(74866),s=a(85162),l=a(1841),o=a.n(l),u=a(95665),i=a.n(u);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(s.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,s=a.url,l=a.start,u=a.end,i=a.fname;if("Github"==e.props.mdxType)return d({url:s,start:l,end:u,language:t,fname:i});if("CodeBlock"==e.props.mdxType)return n.createElement(o(),{fname:i,language:t},r);return e}(e,a)})),1==t.length?n.createElement(s.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(s.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,r=e.end,s=e.language,l=e.fname,o=t+"#";return a&&r&&(o+="L"+a+"-L"+r+"#"),n.createElement(i(),{language:s,fname:l},o)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),s=a(86010),l=a(12466),o=a(76775),u=a(91980),i=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,s=(0,o.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function b(e){var t,a,n,s,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,i=e.groupId,p=d(e),b=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),v=b[0],k=b[1],g=h({queryString:u,groupId:i}),f=g[0],y=g[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),a=(0,c.Nk)(t),n=a[0],s=a[1],[n,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),T=N[0],x=N[1],w=function(){var e=null!=f?f:T;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){w&&k(w)}),[w]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),x(e)}),[y,x,p]),tabValues:p}}var v=a(72389);const k="tabList__CuJ",g="tabItem_LNqP";function f(e){var t=e.className,a=e.block,o=e.selectedValue,u=e.selectValue,i=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==o&&(p(t),u(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;a=null!=(s=c[l])?s:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},i.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var s=a.find((function(e){return e.props.value===n}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=b(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){var t=(0,v.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},28952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),l=a(74866),o=a(85162),u=a(90346),i=["components"],c={id:"basics",title:"Modules, Types & Structs"},p=void 0,d={unversionedId:"develop/contracts/basics",id:"develop/contracts/basics",title:"Modules, Types & Structs",description:"When writing smart contracts you will leverage common programming concepts such:",source:"@site/../docs/2.develop/contracts/basics.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/basics",permalink:"/near-docs-kor/zh-CN/develop/contracts/basics",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/basics.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"basics",title:"Modules, Types & Structs"},sidebar:"develop",previous:{title:"Prerequisites",permalink:"/near-docs-kor/zh-CN/develop/contracts/introduction"},next:{title:"The Contract Class",permalink:"/near-docs-kor/zh-CN/develop/contracts/anatomy"}},m={},h=[{value:"Modules",id:"modules",level:2},{value:"Native Types",id:"native-types",level:2},{value:"SDK Collections",id:"sdk-collections",level:2},{value:"Internal Structures",id:"internal-structures",level:2}],b={toc:h};function v(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When writing smart contracts you will leverage common programming concepts such:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#modules"},"Modules")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#data-types"},"Data types & Collections")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#classes--structures"},"Classes & Structures"))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"modules"},"Modules"),(0,s.kt)("p",null,"Modules help you to organize your code and reuse third-party libraries."),(0,s.kt)("p",null,"The main module you will use in your contract will be the ",(0,s.kt)("strong",{parentName:"p"},"NEAR SDK"),", which: gives you access to the ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/environment/"},"execution environment"),", allows you to ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/crosscontract"},"call other contracts"),", ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/actions"},"transfer tokens"),", and much more."),(0,s.kt)(u.O2,{mdxType:"CodeTabs"},(0,s.kt)(u.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,s.kt)(u.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-js/blob/master/contract/src/contract.ts",start:"1",end:"3",mdxType:"Github"})),(0,s.kt)(u.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,s.kt)(u.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"1",end:"6",mdxType:"Github"})),(0,s.kt)(u.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,s.kt)(u.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/index.ts",start:"1",end:"3",mdxType:"Github"}))),(0,s.kt)("admonition",{title:"Using external libraries",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"As a general rule of thumb for Rust, anything that supports ",(0,s.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," will be compatible with your smart contract.\nHowever, we do have a size limit for a compiled contract binary which is ~4.19 MB, so it is possible that certain large libraries will not be compatible.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"native-types"},"Native Types"),(0,s.kt)("p",null,"When writing contracts you have access to ",(0,s.kt)("strong",{parentName:"p"},"all")," the language's ",(0,s.kt)("strong",{parentName:"p"},"native types"),"."),(0,s.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"number, bigint, string, [], {} ...\n"))),(0,s.kt)(o.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"u8, u16, u32, u64, u128, i8, i16, i32, i64, i128, Vec<T>, HashMap<K,V> ...\n"))),(0,s.kt)(o.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"u8, u16, u32, u64, i8, i16, i32, i64, Array<T>, Map<K,V> ...\n")))),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Always prefer ",(0,s.kt)("strong",{parentName:"p"},"native")," types in the contract's ",(0,s.kt)("strong",{parentName:"p"},"interface"),". The only exception is values larger than ",(0,s.kt)("inlineCode",{parentName:"p"},"52 bytes")," (such as ",(0,s.kt)("inlineCode",{parentName:"p"},"u64")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"u128"),"), for which string-like alternatives are preferred.")),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Always make sure to check for ",(0,s.kt)("strong",{parentName:"p"},"underflow")," and ",(0,s.kt)("strong",{parentName:"p"},"overflow")," errors. For Rust, simply add ",(0,s.kt)("inlineCode",{parentName:"p"},"overflow-checks=true")," in your ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo"),".")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"sdk-collections"},"SDK Collections"),(0,s.kt)("p",null,"Besides the native types, the NEAR SDK implements ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/storage"},"collections")," such as ",(0,s.kt)("inlineCode",{parentName:"p"},"Vector")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),"\nto help you store complex data in the contract's state."),(0,s.kt)(u.O2,{mdxType:"CodeTabs"},(0,s.kt)(u.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,s.kt)(u.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"8",end:"11",mdxType:"Github"})),(0,s.kt)(u.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,s.kt)(u.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"33",end:"36",mdxType:"Github"})),(0,s.kt)(u.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,s.kt)(u.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/storage-as/contract/assembly/index.ts",start:"5",end:"8",mdxType:"Github"}))),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Always prefer ",(0,s.kt)("strong",{parentName:"p"},"SDK collections")," over native ones in the contract's ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/near-docs-kor/zh-CN/develop/contracts/anatomy#defining-the-state"},"attributes (state)")),".")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"internal-structures"},"Internal Structures"),(0,s.kt)("p",null,"You can define and instantiate complex objects through classes and structures. "),(0,s.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,s.kt)(u.Ey,{fname:"model.ts",language:"ts",url:"https://github.com/near-examples/donation-js/blob/master/contract/src/model.ts",start:"3",end:"11",mdxType:"Github"})),(0,s.kt)(o.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,s.kt)(u.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/donation.rs",start:"11",end:"16",mdxType:"Github"}),(0,s.kt)("p",null,"  \ud83e\udd80 Notice that the class is decorated with multiple macros:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"BorshDeserialize")," & ",(0,s.kt)("inlineCode",{parentName:"p"},"BorshSerialize")," allow the structure to be read and\nwritten into the contract's state")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Serialize")," & ",(0,s.kt)("inlineCode",{parentName:"p"},"Deserialize")," allow the structure to be used as an input type and\nreturn type of the contract's methods. "),(0,s.kt)("admonition",{parentName:"li",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you are curious on why the (de)serialization is needed read our ",(0,s.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/serialization"},"serialization documentation")))))),(0,s.kt)(o.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,s.kt)(u.Ey,{fname:"index.ts",language:"ts",url:"https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/model.ts",start:"4",end:"10",mdxType:"Github"}))))}v.isMDXComponent=!0}}]);