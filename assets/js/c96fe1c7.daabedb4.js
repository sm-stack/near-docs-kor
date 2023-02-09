"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8752],{90346:(e,t,a)=>{a.d(t,{Ey:()=>c,O2:()=>p,SQ:()=>d});var n=a(67294),r=a(74866),o=a(85162),l=a(1841),i=a.n(l),s=a(95665),u=a.n(s);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(o.Z,{value:e.props.value,label:e.props.value},e)})))}function d(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,o=a.url,l=a.start,s=a.end,u=a.fname;if("Github"==e.props.mdxType)return c({url:o,start:l,end:s,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return n.createElement(i(),{fname:u,language:t},r);return e}(e,a)})),1==t.length?n.createElement(o.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(o.Z,{value:t,label:e.props.fname},e)})))}function c(e){var t=e.url,a=e.start,r=e.end,o=e.language,l=e.fname,i=t+"#";return a&&r&&(i+="L"+a+"-L"+r+"#"),n.createElement(u(),{language:o,fname:l},i)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(76775),s=a(91980),u=a(67392),p=a(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,a,n,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,d=c(e),g=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:d})})),k=g[0],b=g[1],f=h({queryString:s,groupId:u}),v=f[0],y=f[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,p.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],x=N[1],T=function(){var e=null!=v?v:w;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),x(e)}),[y,x,d]),tabValues:d}}var k=a(72389);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){var t=e.className,a=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var o,l=p.indexOf(e.currentTarget)-1;a=null!=(o=p[l])?o:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var o=a.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},97059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(74866),i=a(85162),s=a(90346),u=["components"],p={id:"guest-book",title:"Guest Book"},d=void 0,c={unversionedId:"tutorials/examples/guest-book",id:"tutorials/examples/guest-book",title:"Guest Book",description:"Our Guest Book example is a simple app composed by two main components:",source:"@site/../docs/3.tutorials/examples/guest-book.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/guest-book",permalink:"/near-docs-kor/tutorials/examples/guest-book",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/guest-book.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"guest-book",title:"Guest Book"},sidebar:"tutorials",previous:{title:"Count on NEAR",permalink:"/near-docs-kor/tutorials/examples/count-near"},next:{title:"Donation",permalink:"/near-docs-kor/tutorials/examples/donation"}},m={},h=[{value:"Starting the Project",id:"starting-the-project",level:2},{value:"Interacting With the Guest Book",id:"interacting-with-the-guest-book",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3}],g={toc:h};function k(e){var t=e.components,p=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our Guest Book example is a simple app composed by two main components:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A smart contract that stores messages from users, allowing to attach money to them."),(0,o.kt)("li",{parentName:"ol"},"A simple web-based frontend that displays the last 10 messages posted.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(74869).Z,width:"1080",height:"457"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"starting-the-project"},"Starting the Project"),(0,o.kt)("p",null,"You have two options to start using the project. The first and recommended is to use the app through Gitpod, which will open a web-based interactive environment. The second option is to clone the repository locally, for which you will need to install all the ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/develop/prerequisites"},"Prerequisites"),"."),(0,o.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,o.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book-js.git"},(0,o.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book-js")))))),(0,o.kt)(i.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,o.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book-rust.git"},(0,o.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83e\udd80 ",(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book-rust")))))),(0,o.kt)(i.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,o.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/guest-book.git"},(0,o.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83d\ude80 ",(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/guest-book"))))))),(0,o.kt)("p",null,"If you choose Gitpod a new browser window will open automatically with the code, give it a minute and the frontend will pop-up (make sure the pop-up window is not blocked)."),(0,o.kt)("p",null,"If you are running the app locally, enter the directory where you cloned it and use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install dependencies, and ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to start it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd guest-book\nyarn\nyarn deploy\nyarn start\n")),(0,o.kt)("p",null,"Your contract will then be ",(0,o.kt)("strong",{parentName:"p"},"compiled")," and ",(0,o.kt)("strong",{parentName:"p"},"deployed")," to an ",(0,o.kt)("strong",{parentName:"p"},"account")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," network. When done, a browser window should open."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"interacting-with-the-guest-book"},"Interacting With the Guest Book"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(74869).Z,width:"1080",height:"457"}),"\n",(0,o.kt)("em",{parentName:"p"},"Frontend of the Guest Book app")),(0,o.kt)("p",null,'Go ahead and login with your NEAR account. If you don\'t have one, you will be able to create one in the moment. Once logged in,\nyou will be able to sign a message in the guest book. You can further send some money alongside your message. If you attach\nmore than 0.01\u24c3 then your message will be marked as "premium".'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"structure-of-a-dapp"},"Structure of a dApp"),(0,o.kt)("p",null,"Now that you understand what the dApp does, let us take a closer look to its structure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The frontend code lives in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/frontend")," folder."),(0,o.kt)("li",{parentName:"ol"},"The smart contract code is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/contract")," folder.")),(0,o.kt)("h3",{id:"contract"},"Contract"),(0,o.kt)("p",null,"The contract presents 2 methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"add_message")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get_message"),"."),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/guest-book-js/blob/master/contract/src/contract.ts",start:"4",end:"24",mdxType:"Github"})),(0,o.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/guest-book-rust/blob/main/contract/src/lib.rs",start:"29",end:"50",mdxType:"Github"}))),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"The frontend is composed by a single HTML file (",(0,o.kt)("inlineCode",{parentName:"p"},"/index.html"),") and uses REACT. Check ",(0,o.kt)("inlineCode",{parentName:"p"},"/App.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/index.js")," to understand how\ncomponents are displayed in the screen."),(0,o.kt)("p",null,"You will notice in ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js")," the following code:"),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/guest-book-rust/blob/main/frontend/index.js",start:"15",end:"25",mdxType:"Github"}))),(0,o.kt)("p",null,"It setups the necessary variables and starts the app."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"When writing smart contracts it is very important to test all methods exhaustively. In this\nproject you have two types of tests: unit and integration. Before digging in them,\ngo ahead and perform the tests present in the dApp through the command ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test"),"."),(0,o.kt)("h3",{id:"unit-test"},"Unit test"),(0,o.kt)("p",null,"Unit tests check individual functions in the smart contract. Right now only rust implements unit testing. "),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/guest-book-rust/blob/main/contract/src/lib.rs",start:"63",end:"86",mdxType:"Github"}))),(0,o.kt)("h3",{id:"integration-test"},"Integration test"),(0,o.kt)("p",null,"Integration tests are generally written in JavaScript. They automatically deploy your contract and execute methods on it. In this way, integration tests simulate interactions between the contract and the users in a realistic scenario. You will find the integration tests for ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-near")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"integration-tests/"),"."),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/guest-book-js/blob/master/integration-tests/src/main.ava.ts",start:"39",end:"59",mdxType:"Github"}))))}k.isMDXComponent=!0},74869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guest-book-b305a87a35cbef2b632ebe289d44f7b2.png"}}]);