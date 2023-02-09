"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9471],{90346:(e,t,n)=>{n.d(t,{Ey:()=>p,O2:()=>c,SQ:()=>d});var a=n(67294),r=n(74866),o=n(85162),i=n(1841),s=n.n(i),l=n(95665),u=n.n(l);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),a.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return a.createElement(o.Z,{value:e.props.value,label:e.props.value},e)})))}function d(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=n.children,o=n.url,i=n.start,l=n.end,u=n.fname;if("Github"==e.props.mdxType)return p({url:o,start:i,end:l,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return a.createElement(s(),{fname:u,language:t},r);return e}(e,n)})),1==t.length?a.createElement(o.Z,{value:0,label:t[0].props.fname},t[0]):a.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return a.createElement(o.Z,{value:t,label:e.props.fname},e)})))}function p(e){var t=e.url,n=e.start,r=e.end,o=e.language,i=e.fname,s=t+"#";return n&&r&&(s+="L"+n+"-L"+r+"#"),a.createElement(u(),{language:o,fname:i},s)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),s=n(76775),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,a,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,d=p(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),g=f[0],v=f[1],b=h({queryString:l,groupId:u}),k=b[0],y=b[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=T[0],N=T[1],w=function(){var e=null!=k?k:x;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){w&&v(w)}),[w]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),N(e)}),[y,N,d]),tabValues:d}}var g=n(72389);const v="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),l(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function T(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function x(e){var t=(0,g.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},77160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(90346),s=["components"],l={id:"unit-test",title:"Unit Testing"},u=void 0,c={unversionedId:"develop/testing/unit-test",id:"develop/testing/unit-test",title:"Unit Testing",description:"Unit tests allow you to test the contract methods individually. They are suitable to check the storage is updated correctly, and that methods return their expected values. They are written in the contract's language and execute locally.",source:"@site/../docs/2.develop/testing/unit.md",sourceDirName:"2.develop/testing",slug:"/develop/testing/unit-test",permalink:"/near-docs-kor/develop/testing/unit-test",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/testing/unit.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"unit-test",title:"Unit Testing"},sidebar:"develop",previous:{title:"Introduction",permalink:"/near-docs-kor/develop/testing/introduction"},next:{title:"Integration Test",permalink:"/near-docs-kor/develop/testing/integration-test"}},d={},p=[{value:"Snippet I: Testing a Counter",id:"snippet-i-testing-a-counter",level:2},{value:"Snippet II: Modifying the Context",id:"snippet-ii-modifying-the-context",level:2},{value:"\u26a0\ufe0f Limitations",id:"\ufe0f-limitations",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Unit tests allow you to test the contract methods individually. They are suitable to check the storage is updated correctly, and that methods return their expected values. They are written in the contract's language and execute locally."),(0,o.kt)("p",null,"If you used one of our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/docs-examples"},"examples")," as template, then you simply need to navigate to the contract's folder, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test"),". In case you didn't, then we recommend you copy the necessary node files (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),") from one of our templates."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test")," from the root folder of each project to run both unit and ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/develop/testing/integration-test"},"integration")," tests.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"snippet-i-testing-a-counter"},"Snippet I: Testing a Counter"),(0,o.kt)("p",null,"The tests in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/counter-rust"},"Counter Example")," rely on basic functions to check that the ",(0,o.kt)("inlineCode",{parentName:"p"},"increment"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"decrement"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," methods work properly."),(0,o.kt)(i.O2,{mdxType:"CodeTabs"},(0,o.kt)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"48",end:"83",mdxType:"Github"})),(0,o.kt)(i.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,o.kt)(i.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/counter/blob/master/contract/assembly/__tests__/main.spec.ts",start:"5",end:"44",mdxType:"Github"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"snippet-ii-modifying-the-context"},"Snippet II: Modifying the Context"),(0,o.kt)("p",null,"While doing unit testing you can modify the ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/develop/contracts/environment/"},"Environment variables")," through the ",(0,o.kt)("inlineCode",{parentName:"p"},"VMContextBuilder"),". This will enable you to, for example, simulate calls from different users, with specific attached deposit and GAS. Here we present a snippet on how we test the ",(0,o.kt)("inlineCode",{parentName:"p"},"donate")," method from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/donation-rust"},"Donation Example")," by manipulating the ",(0,o.kt)("inlineCode",{parentName:"p"},"predecessor")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"attached_deposit"),"."),(0,o.kt)(i.O2,{mdxType:"CodeTabs"},(0,o.kt)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"58",end:"93",mdxType:"Github"})),(0,o.kt)(i.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,o.kt)(i.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/__tests__/donation.spec.ts",start:"23",end:"56",mdxType:"Github"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ufe0f-limitations"},"\u26a0\ufe0f Limitations"),(0,o.kt)("p",null,"Unit tests are useful to check for code integrity, and detect basic errors on isolated methods. However, since unit tests do not run on a blockchain, there are many things which they cannot detect. Unit tests are not suitable for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Testing ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/develop/contracts/environment/"},"gas")," and ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/develop/contracts/storage"},"storage")," usage"),(0,o.kt)("li",{parentName:"ul"},"Testing ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/develop/contracts/actions"},"transfers")),(0,o.kt)("li",{parentName:"ul"},"Testing ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/develop/contracts/crosscontract"},"cross-contract calls")),(0,o.kt)("li",{parentName:"ul"},"Testing complex interactions, i.e. multiple users depositing money on the contract")),(0,o.kt)("p",null,"For all these cases it is necessary to ",(0,o.kt)("strong",{parentName:"p"},"complement")," unit tests with ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/develop/testing/integration-test"},"integration tests"),"."))}h.isMDXComponent=!0}}]);