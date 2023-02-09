"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8157],{90346:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>c,SQ:()=>p});var a=n(67294),r=n(74866),o=n(85162),i=n(1841),l=n.n(i),s=n(95665),u=n.n(s);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),a.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return a.createElement(o.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=n.children,o=n.url,i=n.start,s=n.end,u=n.fname;if("Github"==e.props.mdxType)return d({url:o,start:i,end:s,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return a.createElement(l(),{fname:u,language:t},r);return e}(e,n)})),1==t.length?a.createElement(o.Z,{value:0,label:t[0].props.fname},t[0]):a.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return a.createElement(o.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,n=e.start,r=e.end,o=e.language,i=e.fname,l=t+"#";return n&&r&&(l+="L"+n+"-L"+r+"#"),a.createElement(u(),{language:o,fname:i},l)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(76775),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),g=f[0],k=f[1],v=h({queryString:s,groupId:u}),b=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],C=w[1],x=function(){var e=null!=b?b:N;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){x&&k(x)}),[x]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var g=n(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){var t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},46561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(74866),l=n(85162),s=n(90346),u=["components"],c={id:"coin-flip",title:"Coin Flip"},p=void 0,d={unversionedId:"tutorials/examples/coin-flip",id:"tutorials/examples/coin-flip",title:"Coin Flip",description:"Coin Flip is a game where the player tries to guess the outcome of a coin flip. It is one of the simplest contracts implementing random numbers.",source:"@site/../docs/3.tutorials/examples/coin-flip.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/coin-flip",permalink:"/near-docs-kor/zh-CN/tutorials/examples/coin-flip",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/coin-flip.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"coin-flip",title:"Coin Flip"},sidebar:"tutorials",previous:{title:"Cross Contract Call",permalink:"/near-docs-kor/zh-CN/tutorials/examples/xcc"},next:{title:"Factory",permalink:"/near-docs-kor/zh-CN/tutorials/examples/factory"}},m={},h=[{value:"Starting the Game",id:"starting-the-game",level:2},{value:"Interacting With the Counter",id:"interacting-with-the-counter",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Integration test",id:"integration-test",level:3},{value:"A Note On Randomness",id:"a-note-on-randomness",level:2}],f={toc:h};function g(e){var t=e.components,c=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Coin Flip is a game where the player tries to guess the outcome of a coin flip. It is one of the simplest contracts implementing random numbers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(79199).Z,width:"960",height:"255"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"starting-the-game"},"Starting the Game"),(0,o.kt)("p",null,"You have two options to start the example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Recommended:")," use the app through Gitpod (a web-based interactive environment)"),(0,o.kt)("li",{parentName:"ol"},"Clone the project locally .")),(0,o.kt)(i.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,o.kt)("th",{parentName:"tr",align:null},"Clone locally"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/coin-flip-js.git"},(0,o.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/coin-flip-js.git"))))))),(0,o.kt)("p",null,"If you choose Gitpod, a new browser window will open automatically with the code. Give it a minute, and the front-end will pop up (ensure the pop-up window is not blocked)."),(0,o.kt)("p",null,"If you are running the app locally, enter the directory where you cloned it and use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install dependencies, and ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to start it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd coin-flip-js\nyarn\nyarn deploy\nyarn start\n")),(0,o.kt)("p",null,"Your contract will then be ",(0,o.kt)("strong",{parentName:"p"},"compiled")," and ",(0,o.kt)("strong",{parentName:"p"},"deployed")," to an ",(0,o.kt)("strong",{parentName:"p"},"account")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," network. When done, a browser window should open."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"interacting-with-the-counter"},"Interacting With the Counter"),(0,o.kt)("p",null,"Go ahead and log in with your NEAR account. If you don't have one, you can create one on the fly. Once logged in, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"tails")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"heads")," buttons to try to guess the next coin flip outcome."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(79199).Z,width:"960",height:"255"}),"\n",(0,o.kt)("em",{parentName:"p"},"Frontend of the Game")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"structure-of-a-dapp"},"Structure of a dApp"),(0,o.kt)("p",null,"Now that you understand what the dApp does, let us take a closer look to its structure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The frontend code lives in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/frontend")," folder."),(0,o.kt)("li",{parentName:"ol"},"The smart contract code is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/contract")," folder.")),(0,o.kt)("h3",{id:"contract"},"Contract"),(0,o.kt)("p",null,"The contract presents 2 methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"flip_coin"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"points_of"),"."),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/coin-flip-workshop-js/blob/main/contract/src/contract.ts",start:"23",end:"56",mdxType:"Github"}))),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"The frontend is composed by a single HTML file (",(0,o.kt)("inlineCode",{parentName:"p"},"/index.html"),"). This file defines the components displayed in the screen."),(0,o.kt)("p",null,"The website's logic lives in ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js"),", which communicates with the contract through a ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet"),". You will notice in ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets/js/index.js")," the following code:"),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/coin-flip-workshop-js/blob/main/frontend/index.js",start:"10",end:"19",mdxType:"Github"}))),(0,o.kt)("p",null,"It indicates our app, when it starts, to check if the user is already logged in and execute either ",(0,o.kt)("inlineCode",{parentName:"p"},"signedInFlow()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"signedOutFlow()"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"When writing smart contracts, it is very important to test all methods exhaustively. In this\nproject, you have two types: unit and integration tests. Before digging into them,\ngo ahead and perform the tests present in the dApp through the command ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test"),"."),(0,o.kt)("h3",{id:"integration-test"},"Integration test"),(0,o.kt)("p",null,"Integration tests are generally written in JavaScript. They automatically deploy a new\ncontract and execute methods on it. In this way, integration tests simulate interactions\nfrom users in a realistic scenario. You will find the integration tests for the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter"),"\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/integration-tests"),"."),(0,o.kt)(s.O2,{mdxType:"CodeTabs"},(0,o.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,o.kt)(s.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/coin-flip-workshop-js/blob/main/integration-tests/src/main.ava.ts",start:"32",end:"56",mdxType:"Github"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"a-note-on-randomness"},"A Note On Randomness"),(0,o.kt)("p",null,"Randomness in the blockchain is a complex subject. We recommend you to read and investigate about it.\nYou can start with our ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/security/random"},"security page on it"),"."))}g.isMDXComponent=!0},79199:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/coin-flip-54eec9769bd7c2c68778790d69fcd4ab.png"}}]);