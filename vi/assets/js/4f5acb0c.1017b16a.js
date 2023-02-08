"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9853],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>u,SQ:()=>m});var n=a(67294),r=a(65488),l=a(85162),o=a(1841),s=a.n(o),c=a(95665),i=a.n(c);function u(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function m(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,l=a.url,o=a.start,c=a.end,i=a.fname;if("Github"==e.props.mdxType)return d({url:l,start:o,end:c,language:t,fname:i});if("CodeBlock"==e.props.mdxType)return n.createElement(s(),{fname:i,language:t},r);return e}(e,a)})),1==t.length?n.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,r=e.end,l=e.language,o=e.fname,s=t+"#";return a&&r&&(s+="L"+a+"-L"+r+"#"),n.createElement(i(),{language:l,fname:o},s)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),s=a(67392),c=a(7094),i=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,p=e.defaultValue,h=e.values,k=e.groupId,b=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:y[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,c.U)(),N=x.tabGroupChoices,T=x.setTabGroupChoices,w=(0,r.useState)(v),C=w[0],E=w[1],S=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=N[k];null!=I&&I!==C&&g.some((function(e){return e.value===I}))&&E(I)}var G=function(e){var t=e.currentTarget,a=S.indexOf(t),n=g[a].value;n!==C&&(A(t),E(n),null!=k&&T(k,String(n)))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=S.indexOf(e.currentTarget)+1;a=null!=(n=S[r])?n:S[0];break;case"ArrowLeft":var l,o=S.indexOf(e.currentTarget)-1;a=null!=(l=S[o])?l:S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:L,onFocus:G,onClick:G},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(1841),s=a(90346),c=["components"],i={id:"crosscontract",title:"Cross-Contract Calls"},u=void 0,m={unversionedId:"develop/contracts/crosscontract",id:"develop/contracts/crosscontract",title:"Cross-Contract Calls",description:"",source:"@site/../docs/2.develop/contracts/crosscontract.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/crosscontract",permalink:"/near-docs-kor/vi/develop/contracts/crosscontract",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/crosscontract.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"crosscontract",title:"Cross-Contract Calls"},sidebar:"develop",previous:{title:"Transfers & Actions",permalink:"/near-docs-kor/vi/develop/contracts/actions"},next:{title:"\u2705 Checklist",permalink:"/near-docs-kor/vi/develop/contracts/security/checklist"}},d={},p=[{value:"Cross-Contract Calls are <strong>Independent</strong>",id:"cross-contract-calls-are-independent",level:4},{value:"Cross-Contract Calls are <strong>Asynchronous</strong>",id:"cross-contract-calls-are-asynchronous",level:4},{value:"Snippet: Querying Information",id:"snippet-querying-information",level:2},{value:"Snippet: Sending Information",id:"snippet-sending-information",level:2},{value:"Promises",id:"promises",level:2},{value:"Callback Method",id:"callback-method",level:2},{value:"Checking Execution Status",id:"checking-execution-status",level:3},{value:"Successful Execution",id:"successful-execution",level:3},{value:"Failed Execution",id:"failed-execution",level:3},{value:"Security Concerns",id:"security-concerns",level:2}],h={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cross-contract calls allow your contract to interact with other deployed contracts. This is useful for:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Querying information from another contract."),(0,l.kt)("li",{parentName:"ol"},"Executing a method in another contract.")),(0,l.kt)("h4",{id:"cross-contract-calls-are-independent"},"Cross-Contract Calls are ",(0,l.kt)("strong",{parentName:"h4"},"Independent")),(0,l.kt)("p",null,"The method in which you make the call and the method in which you receive the result are different."),(0,l.kt)("h4",{id:"cross-contract-calls-are-asynchronous"},"Cross-Contract Calls are ",(0,l.kt)("strong",{parentName:"h4"},"Asynchronous")),(0,l.kt)("p",null,"There is a delay between the call and the callback in which everyone can still interact with your contract."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"snippet-querying-information"},"Snippet: Querying Information"),(0,l.kt)("p",null,"While making your contract, it is likely that you will want to query information from another contract. Below, you can see a basic example in which we query the greeting message from our ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/quickstart-guide"},"Hello NEAR")," example."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"17",end:"39",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"24",end:"49",mdxType:"Github"}),(0,l.kt)(s.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/external.rs",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"10",end:"45",mdxType:"Github"}),(0,l.kt)(s.Ey,{fname:"external.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"snippet-sending-information"},"Snippet: Sending Information"),(0,l.kt)("p",null,"Calling another contract passing information is also a common scenario. Bellow you can see a method that interacts with the ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/quickstart-guide"},"Hello NEAR")," example to change its greeting message."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"41",end:"64",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"51",end:"74",mdxType:"Github"}),(0,l.kt)(s.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/external.rs",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"47",end:"79",mdxType:"Github"}),(0,l.kt)(s.Ey,{fname:"external.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"promises"},"Promises"),(0,l.kt)("p",null,"Cross-contract calls work by creating two promises in the network:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A promise to execute code in the external contract (",(0,l.kt)("inlineCode",{parentName:"li"},"Promise.create"),")."),(0,l.kt)("li",{parentName:"ol"},"A promise to call back a ",(0,l.kt)("strong",{parentName:"li"},"different")," method in your contract with the result (",(0,l.kt)("inlineCode",{parentName:"li"},"Promise.then"),").")),(0,l.kt)("p",null,"Both promises take the same arguments:"),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.CodeBlock,{mdxType:"CodeBlock"},'NearPromise.new("external_address").functionCall("method", bytes(JSON.stringify(arguments)), DEPOSIT, GAS);')),(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.CodeBlock,{mdxType:"CodeBlock"},'external_trait::ext("external_address") .with_attached_deposit(DEPOSIT) .with_static_gas(GAS) .method(arguments);')),(0,l.kt)(s.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.CodeBlock,{mdxType:"CodeBlock"},'ContractPromise.create( "external_address", "method", "encoded_arguments", GAS, DEPOSIT )'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The address of the contract you want to interact with"),(0,l.kt)("li",{parentName:"ul"},"The method that you want to execute"),(0,l.kt)("li",{parentName:"ul"},"The (",(0,l.kt)("strong",{parentName:"li"},"encoded"),") arguments to pass to the method"),(0,l.kt)("li",{parentName:"ul"},"The amount of GAS to use (deducted from the ",(0,l.kt)("strong",{parentName:"li"},"attached Gas"),")"),(0,l.kt)("li",{parentName:"ul"},"The amount of NEAR to attach (deducted from ",(0,l.kt)("strong",{parentName:"li"},"your contract\u2019s balance"),")")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Notice that the callback could be made to ",(0,l.kt)("strong",{parentName:"p"},"any")," contract. This means that, if you want, the result could be potentially handled by another contract.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The fact that you are creating a Promise means that both the cross-contract call and callback will ",(0,l.kt)("strong",{parentName:"p"},"not execute immediately"),". In fact:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"The cross-contract call will execute 1 or 2 blocks after your method finishes ",(0,l.kt)("strong",{parentName:"li"},"correctly"),"."),(0,l.kt)("li",{parentName:"ul"},"The callback will then execute 1 or 2 blocks after the ",(0,l.kt)("strong",{parentName:"li"},"external")," method finishes (",(0,l.kt)("strong",{parentName:"li"},"correctly or not"),")"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"callback-method"},"Callback Method"),(0,l.kt)("p",null,"If your method finishes correctly, then eventually your callback method will execute. This will happen whether the external contract finishes ",(0,l.kt)("strong",{parentName:"p"},"successfully or not"),". We repeat, if your original method finishes correctly, then your callback will ",(0,l.kt)("strong",{parentName:"p"},"always execute"),"."),(0,l.kt)("p",null,"In the callback method you will have access to the result, which contains two important arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status"),": Telling if the external method finished successfully or not"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"buffer"),": Having the value returned by the external method (if any)")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The callback methods in your contract must be public, so it can be called when the second promise executes. However, they should be only callable by ",(0,l.kt)("strong",{parentName:"p"},"your contract"),". Always make sure to make it private by asserting that the ",(0,l.kt)("inlineCode",{parentName:"p"},"predecessor")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"current_account_id"),". In rust this can be achieved using the ",(0,l.kt)("inlineCode",{parentName:"p"},"#[private]")," decorator.")),(0,l.kt)("h3",{id:"checking-execution-status"},"Checking Execution Status"),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"31",end:"38",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"67",end:"73",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"70",end:"78",mdxType:"Github"}),(0,l.kt)(s.Ey,{fname:"external.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/external.ts",start:"9",end:"19",mdxType:"Github"}))),(0,l.kt)("h3",{id:"successful-execution"},"Successful Execution"),(0,l.kt)("p",null,"In case the call finishes successfully, the resulting object will have a ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," of 1, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer")," will have the encoded result (if any). In order to recover the result you need to decode it from the resulting ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer"),":"),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"31",end:"31",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.ts",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"47",end:"47",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"37",end:"37",mdxType:"Github"}))),(0,l.kt)("h3",{id:"failed-execution"},"Failed Execution"),(0,l.kt)("p",null,"If the external method fails (i.e. it panics), then your callback will be ",(0,l.kt)("strong",{parentName:"p"},"executed anyway"),". Here you need to ",(0,l.kt)("strong",{parentName:"p"},"manually rollback")," any changes made in your\ncontract during the original call. Particularly:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If the contract attached NEAR to the call, the funds are sent back to ",(0,l.kt)("strong",{parentName:"li"},"the contract's account"),"."),(0,l.kt)("li",{parentName:"ol"},"If the original method made any state changes (i.e. changed or stored data), they ",(0,l.kt)("strong",{parentName:"li"},"won't be automatically reverted"),".")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"If your original method finishes correctly then the callback executes ",(0,l.kt)("strong",{parentName:"p"},"even if the external method panics"),". Your state will ",(0,l.kt)("strong",{parentName:"p"},"not")," rollback automatically,\nand $NEAR will ",(0,l.kt)("strong",{parentName:"p"},"not")," be returned to the signer automatically. Always make sure to check in the callback if the external method failed, and manually rollback any\noperation if necessary.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"security-concerns"},"Security Concerns"),(0,l.kt)("p",null,"While writing cross-contract calls there is a significant aspect to keep in mind: all the calls are ",(0,l.kt)("strong",{parentName:"p"},"independent")," and ",(0,l.kt)("strong",{parentName:"p"},"asynchronous"),". In other words:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The method in which you make the call and method for the callback are ",(0,l.kt)("strong",{parentName:"li"},"independent"),"."),(0,l.kt)("li",{parentName:"ul"},"There is a ",(0,l.kt)("strong",{parentName:"li"},"delay between the call and the callback"),", in which people can still interact with the contract")),(0,l.kt)("p",null,"This has important implications on how you should handle the callbacks. Particularly:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Make sure you don't leave the contract in a exploitable state between the call and the callback."),(0,l.kt)("li",{parentName:"ol"},"Manually rollback any changes to the state in the callback if the external call failed.")),(0,l.kt)("p",null,"We have a whole ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/contracts/security/callbacks"},"security section")," dedicated to these specific errors, so please go and check it."),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Not following these basic security guidelines could expose your contract to exploits. Please check the ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/contracts/security/callbacks"},"security section"),", and if still in doubt, ",(0,l.kt)("a",{parentName:"p",href:"https://near.chat"},"join us in Discord"),".")))}k.isMDXComponent=!0}}]);