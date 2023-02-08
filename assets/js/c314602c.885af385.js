"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9471],{90346:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>p,SQ:()=>c});var a=n(67294),r=n(65488),i=n(85162),o=n(1841),s=n.n(o),l=n(95665),u=n.n(l);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),a.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return a.createElement(i.Z,{value:e.props.value,label:e.props.value},e)})))}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=n.children,i=n.url,o=n.start,l=n.end,u=n.fname;if("Github"==e.props.mdxType)return d({url:i,start:o,end:l,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return a.createElement(s(),{fname:u,language:t},r);return e}(e,n)})),1==t.length?a.createElement(i.Z,{value:0,label:t[0].props.fname},t[0]):a.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return a.createElement(i.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,n=e.start,r=e.end,i=e.language,o=e.fname,s=t+"#";return n&&r&&(s+="L"+n+"-L"+r+"#"),a.createElement(u(),{language:i,fname:o},s)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),s=n(67392),l=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,l.U)(),x=T.tabGroupChoices,N=T.setTabGroupChoices,E=(0,r.useState)(y),w=E[0],C=E[1],I=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=x[f];null!=S&&S!==w&&b.some((function(e){return e.value===S}))&&C(S)}var Z=function(e){var t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==w&&(_(t),C(a),null!=f&&N(f,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var i,o=I.indexOf(e.currentTarget)-1;n=null!=(i=I[o])?i:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},77160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(90346),s=["components"],l={id:"unit-test",title:"Unit Testing"},u=void 0,p={unversionedId:"develop/testing/unit-test",id:"develop/testing/unit-test",title:"Unit Testing",description:"",source:"@site/../docs/2.develop/testing/unit.md",sourceDirName:"2.develop/testing",slug:"/develop/testing/unit-test",permalink:"/develop/testing/unit-test",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/testing/unit.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"unit-test",title:"Unit Testing"},sidebar:"develop",previous:{title:"Introduction",permalink:"/develop/testing/introduction"},next:{title:"Integration Test",permalink:"/develop/testing/integration-test"}},c={},d=[{value:"Snippet I: Testing a Counter",id:"snippet-i-testing-a-counter",level:2},{value:"Snippet II: Modifying the Context",id:"snippet-ii-modifying-the-context",level:2},{value:"\u26a0\ufe0f Limitations",id:"\ufe0f-limitations",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unit tests allow you to test the contract methods individually. They are suitable to check the storage is updated correctly, and that methods return their expected values. They are written in the contract's language and execute locally."),(0,i.kt)("p",null,"If you used one of our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/near-examples/docs-examples"},"examples")," as template, then you simply need to navigate to the contract's folder, and use ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test"),". In case you didn't, then we recommend you copy the necessary node files (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),") from one of our templates."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test")," from the root folder of each project to run both unit and ",(0,i.kt)("a",{parentName:"p",href:"/develop/testing/integration-test"},"integration")," tests.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"snippet-i-testing-a-counter"},"Snippet I: Testing a Counter"),(0,i.kt)("p",null,"The tests in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/near-examples/counter-rust"},"Counter Example")," rely on basic functions to check that the ",(0,i.kt)("inlineCode",{parentName:"p"},"increment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"decrement"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," methods work properly."),(0,i.kt)(o.O2,{mdxType:"CodeTabs"},(0,i.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,i.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"48",end:"83",mdxType:"Github"})),(0,i.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,i.kt)(o.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/counter/blob/master/contract/assembly/__tests__/main.spec.ts",start:"5",end:"44",mdxType:"Github"}))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"snippet-ii-modifying-the-context"},"Snippet II: Modifying the Context"),(0,i.kt)("p",null,"While doing unit testing you can modify the ",(0,i.kt)("a",{parentName:"p",href:"/develop/contracts/environment/"},"Environment variables")," through the ",(0,i.kt)("inlineCode",{parentName:"p"},"VMContextBuilder"),". This will enable you to, for example, simulate calls from different users, with specific attached deposit and GAS. Here we present a snippet on how we test the ",(0,i.kt)("inlineCode",{parentName:"p"},"donate")," method from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/near-examples/donation-rust"},"Donation Example")," by manipulating the ",(0,i.kt)("inlineCode",{parentName:"p"},"predecessor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"attached_deposit"),"."),(0,i.kt)(o.O2,{mdxType:"CodeTabs"},(0,i.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,i.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"58",end:"93",mdxType:"Github"})),(0,i.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,i.kt)(o.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/__tests__/donation.spec.ts",start:"23",end:"56",mdxType:"Github"}))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\ufe0f-limitations"},"\u26a0\ufe0f Limitations"),(0,i.kt)("p",null,"Unit tests are useful to check for code integrity, and detect basic errors on isolated methods. However, since unit tests do not run on a blockchain, there are many things which they cannot detect. Unit tests are not suitable for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Testing ",(0,i.kt)("a",{parentName:"li",href:"/develop/contracts/environment/"},"gas")," and ",(0,i.kt)("a",{parentName:"li",href:"/develop/contracts/storage"},"storage")," usage"),(0,i.kt)("li",{parentName:"ul"},"Testing ",(0,i.kt)("a",{parentName:"li",href:"/develop/contracts/actions"},"transfers")),(0,i.kt)("li",{parentName:"ul"},"Testing ",(0,i.kt)("a",{parentName:"li",href:"/develop/contracts/crosscontract"},"cross-contract calls")),(0,i.kt)("li",{parentName:"ul"},"Testing complex interactions, i.e. multiple users depositing money on the contract")),(0,i.kt)("p",null,"For all these cases it is necessary to ",(0,i.kt)("strong",{parentName:"p"},"complement")," unit tests with ",(0,i.kt)("a",{parentName:"p",href:"/develop/testing/integration-test"},"integration tests"),"."))}h.isMDXComponent=!0}}]);