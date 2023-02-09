"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3324],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>i,SQ:()=>p});var n=a(67294),r=a(74866),l=a(85162),s=a(1841),u=a.n(s),c=a(95665),o=a.n(c);function i(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,l=a.url,s=a.start,c=a.end,o=a.fname;if("Github"==e.props.mdxType)return d({url:l,start:s,end:c,language:t,fname:o});if("CodeBlock"==e.props.mdxType)return n.createElement(u(),{fname:o,language:t},r);return e}(e,a)})),1==t.length?n.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,r=e.end,l=e.language,s=e.fname,u=t+"#";return a&&r&&(u+="L"+a+"-L"+r+"#"),n.createElement(o(),{language:l,fname:s},u)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),u=a(76775),c=a(91980),o=a(67392),i=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,u.k6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,c._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(l.location.search);t.set(s,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[s,l])]}function f(e){var t,a,n,l,s=e.defaultValue,u=e.queryString,c=void 0!==u&&u,o=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:p})})),g=f[0],v=f[1],b=h({queryString:c,groupId:o}),k=b[0],y=b[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:o}.groupId),a=(0,i.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),T=x[0],E=x[1],w=function(){var e=null!=k?k:T;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){w&&v(w)}),[w]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),E(e)}),[y,E,p]),tabValues:p}}var g=a(72389);const v="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,a=e.block,u=e.selectedValue,c=e.selectValue,o=e.tabValues,i=[],p=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=i.indexOf(t),n=o[a].value;n!==u&&(p(t),c(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=i.indexOf(e.currentTarget)+1;a=null!=(n=i[r])?n:i[0];break;case"ArrowLeft":var l,s=i.indexOf(e.currentTarget)-1;a=null!=(l=i[s])?l:i[i.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},o.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return i.push(e)},onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":u===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var l=a.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function x(e){var t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){var t=(0,g.Z)();return r.createElement(x,(0,n.Z)({key:String(t)},e))}},26716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=(a(74866),a(85162),a(90346)),u=["components"],c={id:"advanced-xcc",title:"Complex Cross Contract Call"},o=void 0,i={unversionedId:"tutorials/examples/advanced-xcc",id:"tutorials/examples/advanced-xcc",title:"Complex Cross Contract Call",description:"This example presents 3 instances of complex cross-contract calls. Particularly, it shows:",source:"@site/../docs/3.tutorials/examples/advanced-xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/advanced-xcc",permalink:"/near-docs-kor/tutorials/examples/advanced-xcc",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/advanced-xcc.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"advanced-xcc",title:"Complex Cross Contract Call"},sidebar:"tutorials",previous:{title:"Frontend Multiple Contracts",permalink:"/near-docs-kor/tutorials/examples/frontend-multiple-contracts"},next:{title:"Self Upgrade & State Migration",permalink:"/near-docs-kor/tutorials/examples/update-contract-migrate-state"}},p={},d=[{value:"Batch Actions",id:"batch-actions",level:2},{value:"Getting the Last Response",id:"getting-the-last-response",level:4},{value:"Calling Multiple Contracts",id:"calling-multiple-contracts",level:2},{value:"Getting All Responses",id:"getting-all-responses",level:4},{value:"Multiple Calls - Same Result Type",id:"multiple-calls---same-result-type",level:2},{value:"Getting All Responses",id:"getting-all-responses-1",level:4}],m={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example presents 3 instances of complex cross-contract calls. Particularly, it shows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"How to batch multiple method calls to a same contract."),(0,l.kt)("li",{parentName:"ol"},"How to call multiple contracts in parallel, each returning a different type."),(0,l.kt)("li",{parentName:"ol"},"Different ways of handling the responses in the callback.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"batch-actions"},"Batch Actions"),(0,l.kt)("p",null,"You can aggregate multiple actions directed towards one same contract into a batched transaction.\nMethods called this way are executed sequentially, with the added benefit that, if one fails then\nthey ",(0,l.kt)("strong",{parentName:"p"},"all get reverted"),"."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs",start:"7",end:"19",mdxType:"Github"}))),(0,l.kt)("h4",{id:"getting-the-last-response"},"Getting the Last Response"),(0,l.kt)("p",null,"In this case, the callback has access to the value returned by the ",(0,l.kt)("strong",{parentName:"p"},"last\naction")," from the chain."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs",start:"21",end:"34",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"calling-multiple-contracts"},"Calling Multiple Contracts"),(0,l.kt)("p",null,"A contract can call multiple other contracts. This creates multiple transactions that execute\nall in parallel. If one of them fails the rest ",(0,l.kt)("strong",{parentName:"p"},"ARE NOT REVERTED"),"."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs",start:"18",end:"56",mdxType:"Github"}))),(0,l.kt)("h4",{id:"getting-all-responses"},"Getting All Responses"),(0,l.kt)("p",null,"In this case, the callback has access to an ",(0,l.kt)("strong",{parentName:"p"},"array of responses"),", which have either the\nvalue returned by each call, or an error message."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs",start:"58",end:"91",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"multiple-calls---same-result-type"},"Multiple Calls - Same Result Type"),(0,l.kt)("p",null,"This example is a particular case of the previous one (",(0,l.kt)("a",{parentName:"p",href:"#2-calling-multiple-contracts"},"2. Calling Multiple Contracts"),").\nIt simply showcases a different way to check the results by directly accessing the ",(0,l.kt)("inlineCode",{parentName:"p"},"promise_result")," array."),(0,l.kt)("p",null,"In this case, we call multiple contracts that will return the same type:"),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs",start:"18",end:"31",mdxType:"Github"}))),(0,l.kt)("h4",{id:"getting-all-responses-1"},"Getting All Responses"),(0,l.kt)("p",null,"In this case, the callback again has access to an ",(0,l.kt)("strong",{parentName:"p"},"array of responses"),", which we can iterate checking the\nresults."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs",start:"33",end:"61",mdxType:"Github"}))))}h.isMDXComponent=!0}}]);