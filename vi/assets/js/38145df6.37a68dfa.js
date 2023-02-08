"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4012],{90346:(e,t,a)=>{a.d(t,{Ey:()=>c,O2:()=>p,SQ:()=>d});var n=a(67294),r=a(65488),l=a(85162),o=a(1841),i=a.n(o),s=a(95665),u=a.n(s);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function d(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,l=a.url,o=a.start,s=a.end,u=a.fname;if("Github"==e.props.mdxType)return c({url:l,start:o,end:s,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return n.createElement(i(),{fname:u,language:t},r);return e}(e,a)})),1==t.length?n.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function c(e){var t=e.url,a=e.start,r=e.end,l=e.language,o=e.fname,i=t+"#";return a&&r&&(i+="L"+a+"-L"+r+"#"),n.createElement(u(),{language:l,fname:o},i)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),u=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,o=e.lazy,c=e.block,m=e.defaultValue,h=e.values,g=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,r.useState)(y),E=T[0],A=T[1],C=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var R=w[g];null!=R&&R!==E&&b.some((function(e){return e.value===R}))&&A(R)}var I=function(e){var t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==E&&(S(t),A(n),null!=g&&x(g,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=C.indexOf(e.currentTarget)+1;a=null!=(n=C[r])?n:C[0];break;case"ArrowLeft":var l,o=C.indexOf(e.currentTarget)-1;a=null!=(l=C[o])?l:C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return C.push(e)},onKeyDown:Z,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},60625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=(a(65488),a(85162),a(90346)),i=["components"],s={id:"hello-near",title:"Hello NEAR"},u=void 0,p={unversionedId:"tutorials/examples/hello-near",id:"tutorials/examples/hello-near",title:"Hello NEAR",description:"",source:"@site/../docs/3.tutorials/examples/hello-near.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/hello-near",permalink:"/near-docs-kor/vi/tutorials/examples/hello-near",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/hello-near.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"hello-near",title:"Hello NEAR"},sidebar:"tutorials",previous:{title:"Examples & Tutorials",permalink:"/near-docs-kor/vi/tutorials/welcome"},next:{title:"Count on NEAR",permalink:"/near-docs-kor/vi/tutorials/examples/count-near"}},d={},c=[{value:"Starting Hello NEAR",id:"starting-hello-near",level:2},{value:"Gitpod",id:"gitpod",level:4},{value:"Create Near App (node)",id:"create-near-app-node",level:4},{value:"Interacting With Hello NEAR",id:"interacting-with-hello-near",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Moving Forward",id:"moving-forward",level:2}],m={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hello NEAR!")," is a friendly decentralized App that stores a greeting message. It is one of the simplest\nsmart contracts you can create in NEAR, and the perfect gateway to introduce yourself in the world of smart\ncontracts."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:a(39170).Z,width:"959",height:"204"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"starting-hello-near"},"Starting Hello NEAR"),(0,l.kt)("p",null,"You have two options to start Hello NEAR:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Recommended:")," use the app through Gitpod (a web-based interactive environment)"),(0,l.kt)("li",{parentName:"ol"},"Start the project locally by using ",(0,l.kt)("inlineCode",{parentName:"li"},"create-near-app"),", our node-based utility.")),(0,l.kt)("h4",{id:"gitpod"},"Gitpod"),(0,l.kt)("p",null,"Hello NEAR is available in gitpod. When selecting one, a new tab will open in your browser with a web-based IDE. Give it a minute to compile and deploy the contract, and then a frontend will pop-up for you to interact with the app (make sure the pop-up window is not blocked)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\ud83c\udf10 JavaScript"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud83e\udd80 Rust"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud83d\ude80 AssemblyScript"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/hello-near-js.git"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/hello-near-rust.git"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/hello-near-as.git"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})))))),(0,l.kt)("h4",{id:"create-near-app-node"},"Create Near App (node)"),(0,l.kt)("p",null,"Hello NEAR can be created locally with the help of ",(0,l.kt)("inlineCode",{parentName:"p"},"create-near-app"),". Follow the snippet bellow to create a local project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-near-app@latest\n")),(0,l.kt)("p",null,"and follow the instructions that appear on the screen."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"interacting-with-hello-near"},"Interacting With Hello NEAR"),(0,l.kt)("p",null,"Go ahead and login with your NEAR account. If you don't have one, you will be able to create one in the moment. Once logged in, change the greeting and see how our Hello NEAR app greets you!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:a(81687).Z,width:"959",height:"540"}),"\n",(0,l.kt)("em",{parentName:"p"},"Frontend of Hello NEAR")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"structure-of-a-dapp"},"Structure of a dApp"),(0,l.kt)("p",null,"Now that you understand what the dApp does, let us take a closer look to its structure:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The frontend code lives in the ",(0,l.kt)("inlineCode",{parentName:"li"},"/frontend")," folder."),(0,l.kt)("li",{parentName:"ol"},"The smart contract code is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"/contract")," folder.")),(0,l.kt)("h3",{id:"contract"},"Contract"),(0,l.kt)("p",null,"The contract presents 2 methods: ",(0,l.kt)("inlineCode",{parentName:"p"},"set_greeting")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"get_greeting"),". The first one stores a ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," in the contract's parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"greeting"),", while the second one retrieves it. By default, the contract returns the message ",(0,l.kt)("inlineCode",{parentName:"p"},'"Hello"'),"."),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/hello-near-js/blob/master/contract/src/contract.ts",start:"3",end:"18",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-rs/blob/main/contract/src/lib.rs",start:"23",end:"36",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"index.ts",url:"https://github.com/near-examples/hello-near-as/blob/main/contract/assembly/index.ts",start:"9",end:"23",mdxType:"Github"}))),(0,l.kt)("h3",{id:"frontend"},"Frontend"),(0,l.kt)("p",null,"The frontend is composed by a single HTML file (",(0,l.kt)("inlineCode",{parentName:"p"},"/index.html"),"). This file defines the components displayed in the screen."),(0,l.kt)("p",null,"The website's logic lives in ",(0,l.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js"),", which communicates with the contract through ",(0,l.kt)("inlineCode",{parentName:"p"},"/near-interface.js"),". You will notice in ",(0,l.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js")," the following code:"),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"10",end:"21",mdxType:"Github"}))),(0,l.kt)("p",null,"It indicates our app, when it starts, to check if the user is already logged in and execute either ",(0,l.kt)("inlineCode",{parentName:"p"},"signedInFlow()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"signedOutFlow()"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"When writing smart contracts it is very important to test all methods exhaustively. In this\nproject you have two types of tests: unit and integration. Before digging in them,\ngo ahead and perform the tests present in the dApp through the command ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn test"),"."),(0,l.kt)("h3",{id:"unit-test"},"Unit test"),(0,l.kt)("p",null,"Unit tests check individual functions in the smart contract. Right now only rust implements unit testing. "),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-rs/blob/main/contract/src/lib.rs",start:"46",end:"58",mdxType:"Github"})),(0,l.kt)(o.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/hello-near-as/blob/main/contract/assembly/__tests__/main.spec.ts",mdxType:"Github"}))),(0,l.kt)("h3",{id:"integration-test"},"Integration test"),(0,l.kt)("p",null,"Integration tests are generally written in javascript. They automatically deploy your contract and execute methods on it. In this way, integration tests simulate interactions from users in a realistic scenario. You will find the integration tests for ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-near")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"integration-tests/"),"."),(0,l.kt)(o.O2,{mdxType:"CodeTabs"},(0,l.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,l.kt)(o.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/hello-near-js/blob/master/integration-tests/src/main.ava.ts",start:"32",end:"43",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"moving-forward"},"Moving Forward"),(0,l.kt)("p",null,"A nice way to learn is by trying to expand the contract. Modify it so that you store one greeting message\n",(0,l.kt)("strong",{parentName:"p"},"per user"),". For this, you will need to use knowledge from the ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/contracts/environment/"},"environment"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/contracts/storage"},"storage")," sections. You can also use the ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tutorials/examples/guest-book"},"guest book"),"\nexample, since it does something similar."))}h.isMDXComponent=!0},39170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-near-banner-af016d03e81a65653c9230b95a05fe4a.png"},81687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-near-887a4eb29d41c071631cfe2fb9247bf1.png"}}]);