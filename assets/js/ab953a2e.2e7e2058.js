"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5521],{90346:(e,t,n)=>{n.d(t,{Ey:()=>c,O2:()=>p,SQ:()=>d});var a=n(67294),r=n(65488),l=n(85162),o=n(1841),i=n.n(o),s=n(95665),u=n.n(s);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),a.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return a.createElement(l.Z,{value:e.props.value,label:e.props.value},e)})))}function d(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=n.children,l=n.url,o=n.start,s=n.end,u=n.fname;if("Github"==e.props.mdxType)return c({url:l,start:o,end:s,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return a.createElement(i(),{fname:u,language:t},r);return e}(e,n)})),1==t.length?a.createElement(l.Z,{value:0,label:t[0].props.fname},t[0]):a.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return a.createElement(l.Z,{value:t,label:e.props.fname},e)})))}function c(e){var t=e.url,n=e.start,r=e.end,l=e.language,o=e.fname,i=t+"#";return n&&r&&(i+="L"+n+"-L"+r+"#"),a.createElement(u(),{language:l,fname:o},i)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,m=e.defaultValue,h=e.values,g=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),x=N.tabGroupChoices,w=N.setTabGroupChoices,C=(0,r.useState)(y),T=C[0],E=C[1],I=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=x[g];null!=S&&S!==T&&v.some((function(e){return e.value===S}))&&E(S)}var A=function(e){var t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==T&&(Z(t),E(a),null!=g&&w(g,String(a)))},G=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var l,o=I.indexOf(e.currentTarget)-1;n=null!=(l=I[o])?l:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:G,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},16351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(65488),i=n(85162),s=n(90346),u=["components"],p={id:"count-near",title:"Count on NEAR"},d=void 0,c={unversionedId:"tutorials/examples/count-near",id:"tutorials/examples/count-near",title:"Count on NEAR",description:"",source:"@site/../docs/3.tutorials/examples/count-near.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/count-near",permalink:"/near-docs-kor/tutorials/examples/count-near",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/count-near.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"count-near",title:"Count on NEAR"},sidebar:"tutorials",previous:{title:"Hello NEAR",permalink:"/near-docs-kor/tutorials/examples/hello-near"},next:{title:"Guest Book",permalink:"/near-docs-kor/tutorials/examples/guest-book"}},m={},h=[{value:"Starting the Counter",id:"starting-the-counter",level:2},{value:"Interacting With the Counter",id:"interacting-with-the-counter",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Moving Forward",id:"moving-forward",level:2}],g={toc:h};function k(e){var t=e.components,p=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Our counter example is a friendly decentralized app that stores a number and exposes methods to ",(0,l.kt)("inlineCode",{parentName:"p"},"increment"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"decrement"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"reset")," it."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(13584).Z,width:"935",height:"248"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"starting-the-counter"},"Starting the Counter"),(0,l.kt)("p",null,"You have two options to start the Counter:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Recommended:")," use the app through Gitpod (a web-based interactive environment)"),(0,l.kt)("li",{parentName:"ol"},"Clone the project locally .")),(0,l.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,l.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/js-counter.git"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,l.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/js-counter.git")))))),(0,l.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,l.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/rust-counter.git"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83e\udd80 ",(0,l.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/rust-counter.git")))))),(0,l.kt)(i.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,l.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/counter.git"},(0,l.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\ude80 ",(0,l.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/counter.git"))))))),(0,l.kt)("p",null,"If you choose Gitpod, a new browser window will open automatically with the code. Give it a minute, and the frontend will pop up (ensure the pop-up window is not blocked)."),(0,l.kt)("p",null,"If you are running the app locally, enter the directory where you cloned it and use ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," to install dependencies, and ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn start")," to start it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd counter\nyarn\nyarn deploy\nyarn start\n")),(0,l.kt)("p",null,"Your contract will then be ",(0,l.kt)("strong",{parentName:"p"},"compiled")," and ",(0,l.kt)("strong",{parentName:"p"},"deployed")," to an ",(0,l.kt)("strong",{parentName:"p"},"account")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"testnet")," network. When done, a browser window should open."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"interacting-with-the-counter"},"Interacting With the Counter"),(0,l.kt)("p",null,"Go ahead and login with your NEAR account. If you don't have one, you will be able to create one in the moment. Once logged in, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," buttons to increase and decrease the counter. Then, use the Gameboy buttons to reset it and make the counter blink an eye!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(64447).Z,width:"935",height:"526"}),"\n",(0,l.kt)("em",{parentName:"p"},"Frontend of the Counter")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"structure-of-a-dapp"},"Structure of a dApp"),(0,l.kt)("p",null,"Now that you understand what the dApp does, let us take a closer look to its structure:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The frontend code lives in the ",(0,l.kt)("inlineCode",{parentName:"li"},"/frontend")," folder."),(0,l.kt)("li",{parentName:"ol"},"The smart contract code is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"/contract")," folder.")),(0,l.kt)("h3",{id:"contract"},"Contract"),(0,l.kt)("p",null,"The contract presents 4 methods: ",(0,l.kt)("inlineCode",{parentName:"p"},"get_num"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"increment"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"decrement"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"reset"),". The method ",(0,l.kt)("inlineCode",{parentName:"p"},"get_num")," retrieves the current value, and the rest modify it."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/js-counter/blob/master/contract/src/contract.ts",start:"3",end:"29",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"5",end:"36",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"index.ts",url:"https://github.com/near-examples/counter/blob/master/contract/assembly/index.ts",mdxType:"Github"}))),(0,l.kt)("h3",{id:"frontend"},"Frontend"),(0,l.kt)("p",null,"The frontend is composed by a single HTML file (",(0,l.kt)("inlineCode",{parentName:"p"},"/index.html"),"). This file defines the components displayed in the screen."),(0,l.kt)("p",null,"The website's logic lives in ",(0,l.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js"),", which communicates with the contract through ",(0,l.kt)("inlineCode",{parentName:"p"},"/near-interface.js"),". You will notice in ",(0,l.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js")," the following code:"),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/js-counter/blob/master/frontend/index.js",start:"10",end:"21",mdxType:"Github"}))),(0,l.kt)("p",null,"It indicates our app, when it starts, to check if the user is already logged in and execute either ",(0,l.kt)("inlineCode",{parentName:"p"},"signedInFlow()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"signedOutFlow()"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"When writing smart contracts it is very important to test all methods exhaustively. In this\nproject you have two types of tests: unit and integration. Before digging in them,\ngo ahead and perform the tests present in the dApp through the command ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn test"),"."),(0,l.kt)("h3",{id:"unit-test"},"Unit test"),(0,l.kt)("p",null,"Unit tests check individual functions in the smart contract. Right now only Rust implements unit testing. "),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"48",end:"69",mdxType:"Github"})),(0,l.kt)(s.SQ,{value:"\ud83d\ude80 AssemblyScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"main.spec.ts",url:"https://github.com/near-examples/counter/blob/master/contract/assembly/__tests__/main.spec.ts",start:"5",end:"44",mdxType:"Github"}))),(0,l.kt)("h3",{id:"integration-test"},"Integration test"),(0,l.kt)("p",null,"Integration tests are generally written in javascript. They automatically deploy a new\ncontract and execute methods on it. In this way, integration tests simulate interactions\nfrom users in a realistic scenario. You will find the integration tests for the ",(0,l.kt)("inlineCode",{parentName:"p"},"counter"),"\nin ",(0,l.kt)("inlineCode",{parentName:"p"},"tests/integration-tests"),"."),(0,l.kt)(s.O2,{mdxType:"CodeTabs"},(0,l.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,l.kt)(s.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/js-counter/blob/master/integration-tests/src/main.ava.ts",start:"37",end:"61",mdxType:"Github"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"moving-forward"},"Moving Forward"),(0,l.kt)("p",null,"A nice way to learn is by trying to expand the contract. Modify it by adding a parameter to ",(0,l.kt)("inlineCode",{parentName:"p"},"increment")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"decrement"),",\nso the user can choose by how much to change the value. For this, you will need to use knowledge from the ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/develop/contracts/anatomy"},"anatomy"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/near-docs-kor/develop/contracts/storage"},"storage")," sections."))}k.isMDXComponent=!0},13584:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/count-on-near-banner-2df2978ef988be400aafd5e0f99878be.png"},64447:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/count-on-near-4c3bca89fb498ba9e02547eeb320d02a.png"}}]);