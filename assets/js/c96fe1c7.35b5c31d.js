"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8752],{90346:(t,e,a)=>{a.d(e,{Ey:()=>m,O2:()=>p,SQ:()=>d});var n=a(67294),r=a(65488),o=a(85162),l=a(1841),i=a.n(l),s=a(95665),u=a.n(s);function p(t){var e=t.children;return Array.isArray(e)||(e=[e]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},e.map((function(t,e){return n.createElement(o.Z,{value:t.props.value,label:t.props.value},t)})))}function d(t){var e=t.children,a=t.language;return Array.isArray(e)||(e=[e]),e=e.map((function(t){return function(t,e){var a=t.props,r=a.children,o=a.url,l=a.start,s=a.end,u=a.fname;if("Github"==t.props.mdxType)return m({url:o,start:l,end:s,language:e,fname:u});if("CodeBlock"==t.props.mdxType)return n.createElement(i(),{fname:u,language:e},r);return t}(t,a)})),1==e.length?n.createElement(o.Z,{value:0,label:e[0].props.fname},e[0]):n.createElement(r.Z,{className:"file-tabs"},e.map((function(t,e){return n.createElement(o.Z,{value:e,label:t.props.fname},t)})))}function m(t){var e=t.url,a=t.start,r=t.end,o=t.language,l=t.fname,i=e+"#";return a&&r&&(i+="L"+a+"-L"+r+"#"),n.createElement(u(),{language:o,fname:l},i)}},85162:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(t){var e=t.children,a=t.hidden,l=t.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),i=a(67392),s=a(7094),u=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(t){var e,a,l=t.lazy,m=t.block,c=t.defaultValue,h=t.values,g=t.groupId,k=t.className,b=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,i.l)(v,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(e=null!=c?c:null==(a=b.find((function(t){return t.props.default})))?void 0:a.props.value)?e:b[0].props.value;if(null!==y&&!v.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,r.useState)(y),C=T[0],E=T[1],I=[],G=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var Z=w[g];null!=Z&&Z!==C&&v.some((function(t){return t.value===Z}))&&E(Z)}var j=function(t){var e=t.currentTarget,a=I.indexOf(e),n=v[a].value;n!==C&&(G(e),E(n),null!=g&&x(g,String(n)))},A=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n,r=I.indexOf(t.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var o,l=I.indexOf(t.currentTarget)-1;a=null!=(o=I[l])?o:I[I.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},v.map((function(t){var e=t.value,a=t.label,l=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:function(t){return I.push(t)},onKeyDown:A,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":C===e})}),null!=a?a:e)}))),l?(0,r.cloneElement)(b.filter((function(t){return t.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function c(t){var e=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(e)},t))}},97059:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(65488),i=a(85162),s=a(90346),u=["components"],p={id:"guest-book",title:"Guest Book"},d=void 0,m={unversionedId:"tutorials/examples/guest-book",id:"tutorials/examples/guest-book",title:"Guest Book",description:"",source:"@site/../docs/3.tutorials/examples/guest-book.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/guest-book",permalink:"/near-docs-kor/tutorials/examples/guest-book",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/guest-book.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"guest-book",title:"Guest Book"},sidebar:"tutorials",previous:{title:"Count on NEAR",permalink:"/near-docs-kor/tutorials/examples/count-near"},next:{title:"Donation",permalink:"/near-docs-kor/tutorials/examples/donation"}},c={},h=[{value:"Starting the Project",id:"starting-the-project",level:2},{value:"Interacting With the Guest Book",id:"interacting-with-the-guest-book",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3}],g={toc:h};function k(t){var e=t.components,p=(0,r.Z)(t,u);return(0,o.kt)("wrapper",(0,n.Z)({},g,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our Guest Book example is a simple app composed by two main components:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A smart contract that stores messages from users, allowing to attach money to them."),(0,o.kt)("li",{parentName:"ol"},"A simple web-based frontend that displays the last 10 messages posted.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(74869).Z,width:"1080",height:"457"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"starting-the-project"},"Starting the Project"),(0,o.kt)("p",null,"You have two options to start using the project. The first and recommended is to use the app through Gitpod, which will open a web-based interactive environment. The second option is to clone the repository locally, for which you will need to install all the ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/develop/prerequisites"},"Prerequisites"),"."),(0,o.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,o.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book-js.git"},(0,o.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book-js")))))),(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,o.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book-rust.git"},(0,o.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83e\udd80 ",(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book-rust")))))),(0,o.kt)(i.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,o.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book.git"},(0,o.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83d\ude80 ",(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book"))))))),(0,o.kt)("p",null,"If you choose Gitpod a new browser window will open automatically with the code, give it a minute and the frontend will pop-up (make sure the pop-up window is not blocked)."),(0,o.kt)("p",null,"If you are running the app locally, enter the directory where you cloned it and use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install dependencies, and ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to start it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd guest-book\nyarn\nyarn deploy\nyarn start\n")),(0,o.kt)("p",null,"Your contract will then be ",(0,o.kt)("strong",{parentName:"p"},"compiled")," and ",(0,o.kt)("strong",{parentName:"p"},"deployed")," to an ",(0,o.kt)("strong",{parentName:"p"},"account")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," network. When done, a browser window should open."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"interacting-with-the-guest-book"},"Interacting With the Guest Book"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(74869).Z,width:"1080",height:"457"}),"\n",(0,o.kt)("em",{parentName:"p"},"Frontend of the Guest Book app")),(0,o.kt)("p",null,'Go ahead and login with your NEAR account. If you don\'t have one, you will be able to create one in the moment. Once logged in,\nyou will be able to sign a message in the guest book. You can further send some money alongside your message. If you attach\nmore than 0.01\u24c3 then your message will be marked as "premium".'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"structure-of-a-dapp"},"Structure of a dApp"),(0,o.kt)("p",null,"Now that you understand what the dApp does, let us take a closer look to its structure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The frontend code lives in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/frontend")," folder."),(0,o.kt)("li",{parentName:"ol"},"The smart contract code is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/contract")," folder.")),(0,o.kt)("h3",{id:"contract"},"Contract"),(0,o.kt)("p",null,"The contract presents 2 methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"add_message")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get_message"),"."),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/guest-book-js/blob/master/contract/src/contract.ts",start:"4",end:"24",mdxType:"Github"})),(0,o.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/guest-book-rust/blob/main/contract/src/lib.rs",start:"29",end:"50",mdxType:"Github"}))),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"The frontend is composed by a single HTML file (",(0,o.kt)("inlineCode",{parentName:"p"},"/index.html"),") and uses REACT. Check ",(0,o.kt)("inlineCode",{parentName:"p"},"/App.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/index.js")," to understand how\ncomponents are displayed in the screen."),(0,o.kt)("p",null,"You will notice in ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js")," the following code:"),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/guest-book-rust/blob/main/frontend/index.js",start:"15",end:"25",mdxType:"Github"}))),(0,o.kt)("p",null,"It setups the necessary variables and starts the app."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"When writing smart contracts it is very important to test all methods exhaustively. In this\nproject you have two types of tests: unit and integration. Before digging in them,\ngo ahead and perform the tests present in the dApp through the command ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test"),"."),(0,o.kt)("h3",{id:"unit-test"},"Unit test"),(0,o.kt)("p",null,"Unit tests check individual functions in the smart contract. Right now only rust implements unit testing. "),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/guest-book-rust/blob/main/contract/src/lib.rs",start:"63",end:"86",mdxType:"Github"}))),(0,o.kt)("h3",{id:"integration-test"},"Integration test"),(0,o.kt)("p",null,"Integration tests are generally written in JavaScript. They automatically deploy your contract and execute methods on it. In this way, integration tests simulate interactions between the contract and the users in a realistic scenario. You will find the integration tests for ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-near")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"integration-tests/"),"."),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/guest-book-js/blob/master/integration-tests/src/main.ava.ts",start:"39",end:"59",mdxType:"Github"}))))}k.isMDXComponent=!0},74869:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/guest-book-b305a87a35cbef2b632ebe289d44f7b2.png"}}]);