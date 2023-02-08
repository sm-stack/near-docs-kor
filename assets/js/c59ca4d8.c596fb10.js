"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5666],{90346:(t,e,a)=>{a.d(e,{Ey:()=>d,O2:()=>u,SQ:()=>p});var n=a(67294),r=a(65488),l=a(85162),o=a(1841),s=a.n(o),i=a(95665),c=a.n(i);function u(t){var e=t.children;return Array.isArray(e)||(e=[e]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},e.map((function(t,e){return n.createElement(l.Z,{value:t.props.value,label:t.props.value},t)})))}function p(t){var e=t.children,a=t.language;return Array.isArray(e)||(e=[e]),e=e.map((function(t){return function(t,e){var a=t.props,r=a.children,l=a.url,o=a.start,i=a.end,c=a.fname;if("Github"==t.props.mdxType)return d({url:l,start:o,end:i,language:e,fname:c});if("CodeBlock"==t.props.mdxType)return n.createElement(s(),{fname:c,language:e},r);return t}(t,a)})),1==e.length?n.createElement(l.Z,{value:0,label:e[0].props.fname},e[0]):n.createElement(r.Z,{className:"file-tabs"},e.map((function(t,e){return n.createElement(l.Z,{value:e,label:t.props.fname},t)})))}function d(t){var e=t.url,a=t.start,r=t.end,l=t.language,o=t.fname,s=e+"#";return a&&r&&(s+="L"+a+"-L"+r+"#"),n.createElement(c(),{language:l,fname:o},s)}},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(t){var e=t.children,a=t.hidden,o=t.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(t){var e,a,o=t.lazy,d=t.block,m=t.defaultValue,h=t.values,g=t.groupId,k=t.className,v=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,s.l)(b,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(e=null!=m?m:null==(a=v.find((function(t){return t.props.default})))?void 0:a.props.value)?e:v[0].props.value;if(null!==y&&!b.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),x=N.tabGroupChoices,C=N.setTabGroupChoices,w=(0,r.useState)(y),T=w[0],E=w[1],I=[],A=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var Z=x[g];null!=Z&&Z!==T&&b.some((function(t){return t.value===Z}))&&E(Z)}var G=function(t){var e=t.currentTarget,a=I.indexOf(e),n=b[a].value;n!==T&&(A(e),E(n),null!=g&&C(g,String(n)))},S=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n,r=I.indexOf(t.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var l,o=I.indexOf(t.currentTarget)-1;a=null!=(l=I[o])?l:I[I.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},b.map((function(t){var e=t.value,a=t.label,o=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(t){return I.push(t)},onKeyDown:S,onFocus:G,onClick:G},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===e})}),null!=a?a:e)}))),o?(0,r.cloneElement)(v.filter((function(t){return t.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function m(t){var e=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(e)},t))}},88290:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(65488),s=a(85162),i=a(90346),c=["components"],u={id:"xcc",title:"Cross Contract Call"},p=void 0,d={unversionedId:"tutorials/examples/xcc",id:"tutorials/examples/xcc",title:"Cross Contract Call",description:"",source:"@site/../docs/3.tutorials/examples/xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/xcc",permalink:"/tutorials/examples/xcc",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/xcc.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"xcc",title:"Cross Contract Call"},sidebar:"tutorials",previous:{title:"Donation",permalink:"/tutorials/examples/donation"},next:{title:"Coin Flip",permalink:"/tutorials/examples/coin-flip"}},m={},h=[{value:"Starting with the Project",id:"starting-with-the-project",level:2},{value:"Interacting With the Contract",id:"interacting-with-the-contract",level:3},{value:"1. Build and Deploy the Contract",id:"1-build-and-deploy-the-contract",level:4},{value:"2. Get the Greeting",id:"2-get-the-greeting",level:4},{value:"Contract",id:"contract",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Moving Forward",id:"moving-forward",level:2},{value:"Advanced Cross Contract Calls",id:"advanced-cross-contract-calls",level:3}],g={toc:h};function k(t){var e=t.components,a=(0,r.Z)(t,c);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example performs the simplest cross-contract call possible: it calls our ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/examples/hello-near"},"Hello NEAR")," example to set and retrieve a greeting.\nIt is one of the simplest examples on making a cross-contract call, and the perfect gateway to the world of interoperative contracts."),(0,l.kt)("admonition",{title:"Advanced Cross-Contract Calls",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Check the tutorial on how to perform cross-contract calls ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/examples/advanced-xcc"},"in batches and in parallel"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"starting-with-the-project"},"Starting with the Project"),(0,l.kt)("p",null,"You have two options to start using the project. The first and recommended is to use the app through Gitpod, which will open a web-based interactive environment. The second option is to clone the repository locally, for which you will need to install all the ",(0,l.kt)("a",{parentName:"p",href:"/develop/prerequisites"},"Prerequisites"),"."),(0,l.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,l.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/cross-contract-hello-js"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,l.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/cross-contract-hello-js.git")))))),(0,l.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,l.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/cross-contract-hello-rust"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83e\udd80 ",(0,l.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/cross-contract-hello-rust.git")))))),(0,l.kt)(s.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,l.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\ude80 ",(0,l.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/docs-examples")," -> cross-contract-hello-as")))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"interacting-with-the-contract"},"Interacting With the Contract"),(0,l.kt)("p",null,"Since this example does not have a frontend, we will interact with it through the ",(0,l.kt)("a",{parentName:"p",href:"/tools/near-cli"},"NEAR CLI"),"."),(0,l.kt)("p",null,"Check the README.md. Briefly, you will need to:"),(0,l.kt)("h4",{id:"1-build-and-deploy-the-contract"},"1. Build and Deploy the Contract"),(0,l.kt)("p",null,"You can automatically compile and deploy the contract in the NEAR testnet by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy.sh\n")),(0,l.kt)("p",null,"Once finished, check the ",(0,l.kt)("inlineCode",{parentName:"p"},"neardev/dev-account")," file to find the address in which the contract was deployed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat ./neardev/dev-account # e.g. dev-1659899566943-21539992274727\n")),(0,l.kt)("h4",{id:"2-get-the-greeting"},"2. Get the Greeting"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"query_greeting")," performs a cross-contract call, calling the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_greeting()")," method from ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-nearverse.testnet"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Call")," methods can only be invoked using a NEAR account, since the account needs to pay GAS for the transaction."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Use near-cli to ask the contract to query the greeting\nnear call <dev-account> query_greeting --accountId <dev-account>\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"contract"},"Contract"),(0,l.kt)("p",null,"The contract exposes methods to query the greeting and change it. These methods do nothing but calling ",(0,l.kt)("inlineCode",{parentName:"p"},"get_greeting")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"set_greeting")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-near")," example."),(0,l.kt)(i.O2,{mdxType:"CodeTabs"},(0,l.kt)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"17",end:"39",mdxType:"Github"})),(0,l.kt)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"24",end:"49",mdxType:"Github"})),(0,l.kt)(i.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(i.Ey,{fname:"index.ts",url:"https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts",start:"11",end:"45",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"When writing smart contracts it is very important to test all methods exhaustively. In this\nproject you have two types of tests: unit and integration. Before digging in them,\ngo ahead and perform the tests present in the dApp through the command ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn test"),"."),(0,l.kt)("h3",{id:"unit-test"},"Unit test"),(0,l.kt)("p",null,"Unit tests check individual functions in the smart contract. They are written in the\nsame language as the smart contract is. "),(0,l.kt)("p",null,"Since this example handles Cross-contract calls, in the unit tests we only test the ",(0,l.kt)("inlineCode",{parentName:"p"},"initialize"),"\nmethod works. This is because unit tests are ",(0,l.kt)("strong",{parentName:"p"},"cannot test")," cross-contract calls."),(0,l.kt)("h3",{id:"integration-test"},"Integration test"),(0,l.kt)("p",null,"In this project in particular, the integration tests first deploy the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-near")," contract. Then,\nthey test that the cross-contract call correctly sets and retrieves the message. You will find the integration tests\nin ",(0,l.kt)("inlineCode",{parentName:"p"},"integration-tests/"),"."),(0,l.kt)(i.O2,{mdxType:"CodeTabs"},(0,l.kt)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"rust",mdxType:"Language"},(0,l.kt)(i.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/integration-tests/src/main.ava.ts",start:"9",end:"59",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"moving-forward"},"Moving Forward"),(0,l.kt)("p",null,"A nice way to learn is by trying to expand a contract. Modify the cross contract example to use the ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/examples/guest-book"},"guest-book"),"\ncontract!. In this way, you can try to make a cross-contract call that attaches money. Remember to correctly ",(0,l.kt)("a",{parentName:"p",href:"/develop/contracts/crosscontract#callback-method"},"handle the callback"),",\nand to return the money to the user in case of error."),(0,l.kt)("h3",{id:"advanced-cross-contract-calls"},"Advanced Cross Contract Calls"),(0,l.kt)("p",null,"Your contract can perform multiple cross-contract calls in simultaneous, creating promises that execute in parallel, or as a batch transaction. Check the ",(0,l.kt)("a",{parentName:"p",href:"/tutorials/examples/advanced-xcc"},"advanced cross contract calls\ntutorial")," to learn more."))}k.isMDXComponent=!0}}]);