"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5320],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>p,SQ:()=>c});var n=a(67294),l=a(65488),r=a(85162),o=a(1841),i=a.n(o),s=a(95665),u=a.n(s);function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(l.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:e.props.value,label:e.props.value},e)})))}function c(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,l=a.children,r=a.url,o=a.start,s=a.end,u=a.fname;if("Github"==e.props.mdxType)return d({url:r,start:o,end:s,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return n.createElement(i(),{fname:u,language:t},l);return e}(e,a)})),1==t.length?n.createElement(r.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(l.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(r.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,l=e.end,r=e.language,o=e.fname,i=t+"#";return a&&l&&(i+="L"+a+"-L"+l+"#"),n.createElement(u(),{language:r,fname:o},i)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),i=a(67392),s=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,g=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,j=w.setTabGroupChoices,C=(0,l.useState)(v),x=C[0],T=C[1],E=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=N[k];null!=S&&S!==x&&y.some((function(e){return e.value===S}))&&T(S)}var I=function(e){var t=e.currentTarget,a=E.indexOf(t),n=y[a].value;n!==x&&(A(t),T(n),null!=k&&j(k,String(n)))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=E.indexOf(e.currentTarget)+1;a=null!=(n=E[l])?n:E[0];break;case"ArrowLeft":var r,o=E.indexOf(e.currentTarget)-1;a=null!=(r=E[o])?r:E[E.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},y.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:R,onFocus:I,onClick:I},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},21690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=a(90346),i=(a(65488),a(85162),["components"]),s={id:"frontend",title:"Build the Web Frontend"},u=void 0,p={unversionedId:"develop/integrate/frontend",id:"develop/integrate/frontend",title:"Build the Web Frontend",description:"",source:"@site/../docs/2.develop/integrate/frontend.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/frontend",permalink:"/near-docs-kor/vi/develop/integrate/frontend",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/frontend.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"frontend",title:"Build the Web Frontend"},sidebar:"develop",previous:{title:"Bug Bounty Program",permalink:"/near-docs-kor/vi/develop/contracts/security/bounty"},next:{title:"Track Real Time Events",permalink:"/near-docs-kor/vi/tools/realtime"}},c={},d=[{value:"Adding NEAR API JS and Wallet Selector",id:"adding-near-api-js-and-wallet-selector",level:2},{value:"Create a Wallet Object",id:"create-a-wallet-object",level:2},{value:"Wallet StartUp",id:"wallet-startup",level:2},{value:"Calling View Methods",id:"calling-view-methods",level:2},{value:"User Sign-In / Sign-Out",id:"user-sign-in--sign-out",level:2},{value:"Function Call Key",id:"function-call-key",level:3},{value:"Calling Change Methods",id:"calling-change-methods",level:2},{value:"Wallet Redirection",id:"wallet-redirection",level:3},{value:"Handling Data Types",id:"handling-data-types",level:2},{value:"Time",id:"time",level:5},{value:"Money",id:"money",level:5},{value:"Leveraging NEAR API JS",id:"leveraging-near-api-js",level:2}],m={toc:d};function h(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once your contract is deployed it is highly likely that you will want to interact with it from a web frontend."),(0,r.kt)("p",null,"For creating a frontend you will leverage two tools:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet Selector"),": Allows the user to use their NEAR wallet in your dApp."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NEAR API JS"),": A suit of tools to interact with the NEAR RPC.")),(0,r.kt)("p",null,"Using those tools you will implement the following flow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Setup")," a wallet selector."),(0,r.kt)("li",{parentName:"ol"},"Load the wallet selector ",(0,r.kt)("strong",{parentName:"li"},"on start-up"),"."),(0,r.kt)("li",{parentName:"ol"},"Ask the user to ",(0,r.kt)("strong",{parentName:"li"},"sign-in")," using a NEAR wallet."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Call methods")," in the contract.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"adding-near-api-js-and-wallet-selector"},"Adding NEAR API JS and Wallet Selector"),(0,r.kt)("p",null,"In order to use ",(0,r.kt)("inlineCode",{parentName:"p"},"near-api-js")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet-selector")," you will need to first add them to your project."),(0,r.kt)("p",null,"The wallet selector has multiple wallet packages to select from, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/wallet-selector#installation-and-usage"},"see in their website"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install \\\n  near-api-js@^0.44.2 \\\n  @near-wallet-selector/core \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/ledger\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Using them in plain HTML"),(0,r.kt)("p",null,"You can add ",(0,r.kt)("inlineCode",{parentName:"p"},"near-api-js")," as a script tag in your html."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.44.2/dist/near-api-js.min.js" integrity="sha256-W5o4c5DRZZXMKjuL41jsaoBpE/UHMkrGvIxN9HcjNSY=" crossorigin="anonymous"><\/script>\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"create-a-wallet-object"},"Create a Wallet Object"),(0,r.kt)("p",null,"In our examples we implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"./near-wallet.js")," module, where we abstracted the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet selector")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," object to simplify using it."),(0,r.kt)("p",null,"To create a wallet, simply import the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," object from the module and initialize it. This ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," will later allows the user to call any contract in NEAR."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"2",end:"8",mdxType:"Github"}))),(0,r.kt)("p",null,"When instantiating the wallet you can choose if you want to ",(0,r.kt)("strong",{parentName:"p"},"create a ",(0,r.kt)("a",{parentName:"strong",href:"/near-docs-kor/vi/concepts/basics/accounts/access-keys#function-call-keys-function-call-keys"},"FunctionCall Key")),"."),(0,r.kt)("p",null,"If you create the key, then your dApp will be able to ",(0,r.kt)("strong",{parentName:"p"},"automatically sign non-payable transactions")," for the user on the specified contract."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wallet-startup"},"Wallet StartUp"),(0,r.kt)("p",null,"In our examples we always implement a simple flow where we start by checking if the user logged-in and act on it. We recommend you to do the same."),(0,r.kt)("p",null,"For this, override the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload")," method with a function that calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.startUp()")," method. Such method returns if the user is already signed-in: "),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"10",end:"21",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"36",end:"52",mdxType:"Github"}))),(0,r.kt)("p",null,"Under the hood (check the ",(0,r.kt)("inlineCode",{parentName:"p"},"near-wallet")," tab) you can see that we are actually setting up the wallet selector, and asking it if the user logged-in already."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"calling-view-methods"},"Calling View Methods"),(0,r.kt)("p",null,"Once the wallet is up we can start calling view methods, i.e. the methods that perform read-only operations."),(0,r.kt)("p",null,"Because of their read-only nature, view methods are ",(0,r.kt)("strong",{parentName:"p"},"free")," to call, and do ",(0,r.kt)("strong",{parentName:"p"},"not require")," the user to be ",(0,r.kt)("strong",{parentName:"p"},"logged in"),"."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"46",end:"46",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"68",end:"81",mdxType:"Github"}))),(0,r.kt)("p",null,"The snippet above shows how we call view methods in our examples. Switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"near-wallet")," tab to see under the hood: we are actually making a ",(0,r.kt)("strong",{parentName:"p"},"direct call to the RPC")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"near-api-js"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"View methods have by default 200 TGAS for execution")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"user-sign-in--sign-out"},"User Sign-In / Sign-Out"),(0,r.kt)("p",null,"In order to interact with non-view methods it is necessary for the user to first sign in using a NEAR wallet."),(0,r.kt)("p",null,"Signing in is as simple as requesting the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," object to ",(0,r.kt)("inlineCode",{parentName:"p"},"signIn"),", the same simplicity applies to signing-out."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"25",end:"26",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"54",end:"66",mdxType:"Github"}))),(0,r.kt)("p",null,"When the user clicks in the button, it will be asked to select a wallet and use it to login."),(0,r.kt)("hr",{class:"subsection"}),(0,r.kt)("h3",{id:"function-call-key"},"Function Call Key"),(0,r.kt)("p",null,"If you instantiated the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," passing an account for the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAccessKeyFor")," parameter, then the wallet will create a ",(0,r.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/concepts/basics/accounts/access-keys#function-call-keys-function-call-keys"},"FunctionCall Key")," and store it in the web's local storage."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"8",end:"8",mdxType:"Github"}))),(0,r.kt)("p",null,"By default, such key enables to expend a maximum of ",(0,r.kt)("inlineCode",{parentName:"p"},"0.25\u24c3")," on GAS calling methods in ",(0,r.kt)("strong",{parentName:"p"},"the specified")," contract ",(0,r.kt)("strong",{parentName:"p"},"without prompting")," the user to sign them."),(0,r.kt)("p",null,"If, on the contrary, you do not create an access key, then the user will be asked to sign every single transaction (except calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"view methods"),", since those are always free)."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please notice that this only applies for ",(0,r.kt)("strong",{parentName:"p"},"non-payable")," methods, if you attach money to any call the user will ",(0,r.kt)("strong",{parentName:"p"},"always")," be redirected to the wallet to confirm the transaction.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"calling-change-methods"},"Calling Change Methods"),(0,r.kt)("p",null,"Once the user logs-in they can start calling change methods. Programmatically, calling change methods is similar to calling view methods, only that now you can attach money to the call, and specify how much GAS you want to use."),(0,r.kt)("p",null,"It is important to notice that, if you ask for money to be attached in the call, then the user will be redirected to the NEAR wallet to accept the transaction."),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"36",end:"36",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"83",end:"103",mdxType:"Github"}))),(0,r.kt)("p",null,"Under the hood (see ",(0,r.kt)("inlineCode",{parentName:"p"},"near-wallet")," tab) we can see that we are actually asking the ",(0,r.kt)("strong",{parentName:"p"},"wallet")," to ",(0,r.kt)("strong",{parentName:"p"},"sign a FunctionCall transaction")," for us."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Remember that you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," to call methods in ",(0,r.kt)("strong",{parentName:"p"},"any")," contract. If you did not asked for a function key to be created, the user will simply be prompt to confirm the transaction.")),(0,r.kt)("hr",{class:"subsection"}),(0,r.kt)("h3",{id:"wallet-redirection"},"Wallet Redirection"),(0,r.kt)("p",null,"If you attach money to a change call, then the user will be redirected to their wallet to accept the transaction. After accepting, the user will be brought back to your website, with the resulting transaction hash being pass as part of the url (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"your-website.com/?transactionHashes=..."),")."),(0,r.kt)("p",null,"If the method invoked returned a result, you can use the transaction hash to retrieve the result from the network. Assuming you created the ",(0,r.kt)("inlineCode",{parentName:"p"},"near")," object as in the ",(0,r.kt)("a",{parentName:"p",href:"#connecting-to-a-contract"},"example above"),", then you query the result by doing:"),(0,r.kt)(o.O2,{mdxType:"CodeTabs"},(0,r.kt)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,r.kt)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/index.js",start:"74",end:"80",mdxType:"Github"}),(0,r.kt)(o.Ey,{fname:"utils.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/near-wallet.js",start:"105",end:"113",mdxType:"Github"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"handling-data-types"},"Handling Data Types"),(0,r.kt)("p",null,"When calling methods in a contract, or receiving results from them, you will need to correctly encode/decode parameters. For this, it is important to know how the contracts encode timestamps (u64) and money amounts (u128)."),(0,r.kt)("h5",{id:"time"},"Time"),(0,r.kt)("p",null,"The block timestamp in a smart contract is encoded using nanoseconds (i.e. 19 digits: ",(0,r.kt)("inlineCode",{parentName:"p"},"1655373910837593990"),"). In contrast, ",(0,r.kt)("inlineCode",{parentName:"p"},"Date.now()")," from javascript returns a timestamp in milliseconds (i.e 13 digits: ",(0,r.kt)("inlineCode",{parentName:"p"},"1655373910837"),"). Make sure to convert between milliseconds and nanoseconds to properly handle time variables."),(0,r.kt)("h5",{id:"money"},"Money"),(0,r.kt)("p",null,"Smart contracts speak in yocto NEAR, where 1\u24c3 = 10^24yocto, and the values are always encoded as ",(0,r.kt)("inlineCode",{parentName:"p"},"strings"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Convert from NEAR to yocto before sending it to the contract using ",(0,r.kt)("inlineCode",{parentName:"li"},"near-api-js.utils.format.parseNearAmount(amount.toString())"),"."),(0,r.kt)("li",{parentName:"ul"},"Convert a response in yoctoNEAR to NEAR using ",(0,r.kt)("inlineCode",{parentName:"li"},"near-api-js.utils.format.formatNearAmount(amount)"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the contract returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance")," instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"U128"),', you will get a "scientific notation" ',(0,r.kt)("inlineCode",{parentName:"p"},"number")," instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"10^6")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'"1000000"'),"). In this case, you can convert the value to NEAR by doing:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function formatAmount(amount) {\n  let formatted = amount.toLocaleString('fullwide', { useGrouping: false })\n  formatted = utils.format.formatNearAmount(formatted)\n  return Math.floor(formatted * 100) / 100\n}\n"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"leveraging-near-api-js"},"Leveraging NEAR API JS"),(0,r.kt)("p",null,"NEAR API JS does not limit itself to simply calling methods in a contract. In fact, you can use it to transform your web-app into a rich user experience. While we will not cover these topics in depth, it is important for you to know that with NEAR API JS you can also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js"},"Sign and verify messages")),": this is very useful to prove that a message was created by the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/transactions/batch-transactions.js"},"Create batch transactions")),": this enables to link multiple ",(0,r.kt)("a",{parentName:"li",href:"/develop/contracts/actions"},"actions")," (e.g. multiple method calls). If one of the transactions fails, then they are all reverted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/create-testnet-account.js"},"Create accounts")),": deploy accounts for your users!")),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"/tools/near-api-js/cookbook"},"cookbook")," to learn how to supercharge your webapp."))}h.isMDXComponent=!0}}]);