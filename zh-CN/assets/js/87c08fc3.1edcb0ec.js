"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9463],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>c,SQ:()=>p});var n=a(67294),r=a(65488),o=a(85162),l=a(1841),s=a.n(l),i=a(95665),u=a.n(i);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(o.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,o=a.url,l=a.start,i=a.end,u=a.fname;if("Github"==e.props.mdxType)return d({url:o,start:l,end:i,language:t,fname:u});if("CodeBlock"==e.props.mdxType)return n.createElement(s(),{fname:u,language:t},r);return e}(e,a)})),1==t.length?n.createElement(o.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(o.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,r=e.end,o=e.language,l=e.fname,s=t+"#";return a&&r&&(s+="L"+a+"-L"+r+"#"),n.createElement(u(),{language:o,fname:l},s)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),s=a(67392),i=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,g=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),T=N.tabGroupChoices,w=N.setTabGroupChoices,C=(0,r.useState)(y),x=C[0],E=C[1],I=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=T[g];null!=S&&S!==x&&f.some((function(e){return e.value===S}))&&E(S)}var M=function(e){var t=e.currentTarget,a=I.indexOf(t),n=f[a].value;n!==x&&(A(t),E(n),null!=g&&w(g,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var o,l=I.indexOf(e.currentTarget)-1;a=null!=(o=I[l])?o:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},f.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:Z,onFocus:M,onClick:M},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},29949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=(a(1841),a(90346)),s=a(65488),i=a(85162),u=["components"],c={id:"upgrade",title:"Updating Contracts"},p=void 0,d={unversionedId:"develop/upgrade",id:"develop/upgrade",title:"Updating Contracts",description:"",source:"@site/../docs/2.develop/upgrade.md",sourceDirName:"2.develop",slug:"/develop/upgrade",permalink:"/near-docs-kor/zh-CN/develop/upgrade",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/upgrade.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"upgrade",title:"Updating Contracts"},sidebar:"develop",previous:{title:"Deploying and Using",permalink:"/near-docs-kor/zh-CN/develop/deploy"},next:{title:"Locking Accounts",permalink:"/near-docs-kor/zh-CN/develop/lock"}},m={},h=[{value:"Updating Through Tools",id:"updating-through-tools",level:2},{value:"Programmatic Update",id:"programmatic-update",level:2},{value:"How to Invoke Such Method?",id:"how-to-invoke-such-method",level:4},{value:"Migrating the State",id:"migrating-the-state",level:2},{value:"The Migration Method",id:"the-migration-method",level:3},{value:"Example: Guest Book Migration",id:"example-guest-book-migration",level:3},{value:"Update Contract",id:"update-contract",level:4},{value:"Incompatible States",id:"incompatible-states",level:4},{value:"Migrating the State",id:"migrating-the-state-1",level:4}],g={toc:h};function k(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NEAR accounts separate their logic (contract's code) from their state (storage), allowing the code to be changed."),(0,o.kt)("p",null,"Contract's can be updated in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Through tools")," such as ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/tools/near-cli"},"NEAR CLI")," or ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/tools/near-api-js/quick-reference"},"near-api-js")," (if you hold the account's ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/concepts/basics/accounts/access-keys"},"full access key"),")."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Programmatically"),", by implementing a method that ",(0,o.kt)("a",{parentName:"li",href:"#programmatic-update"},"takes the new code and deploys it"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"updating-through-tools"},"Updating Through Tools"),(0,o.kt)("p",null,"Simply re-deploy another contract using your preferred tool, for example, using ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-cli"},"NEAR CLI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# If you already used dev-deploy the same account will be used\nnear dev-deploy --wasmFile <new-contract>\n\n# If you logged in\nnear deploy <account-id> --wasmFile <new-contract>\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"programmatic-update"},"Programmatic Update"),(0,o.kt)("p",null,"A smart contract can also update itself by implementing a method that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Takes the new wasm contract as input"),(0,o.kt)("li",{parentName:"ol"},"Creates a Promise to deploy it on itself")),(0,o.kt)(l.O2,{mdxType:"CodeTabs"},(0,o.kt)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(l.Ey,{fname:"update.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/self-updates/base/src/update.rs",start:"10",end:"28",mdxType:"Github"}))),(0,o.kt)("h4",{id:"how-to-invoke-such-method"},"How to Invoke Such Method?"),(0,o.kt)(s.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Terminal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Load the contract\'s raw bytes\nCONTRACT_BYTES=`cat ./path/to/wasm.wasm | base64`\n\n# Call the update_contract method\nnear call <contract-account> update_contract "$CONTRACT_BYTES" --base64 --accountId <manager-account> --gas 300000000000000\n'))),(0,o.kt)(i.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Load the contract\'s raw bytes\nconst code = fs.readFileSync("./path/to/wasm.wasm");\n\n// Call the update_contract method\nawait wallet.callMethod({contractId: guestBook, method: "update_contract", args: code, gas: "300000000000000"});\n')))),(0,o.kt)("admonition",{title:"DAO Factories",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This is how DAO factories ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao-factory2/src/factory_manager.rs#L60"},"update their contracts"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"migrating-the-state"},"Migrating the State"),(0,o.kt)("p",null,"Since the account's logic (smart contract) is separated from the account's state (storage),\n",(0,o.kt)("strong",{parentName:"p"},"the account's state persists")," when re-deploying a contract."),(0,o.kt)("p",null,"Because of this, ",(0,o.kt)("strong",{parentName:"p"},"adding methods")," or ",(0,o.kt)("strong",{parentName:"p"},"modifying existing ones")," will yield ",(0,o.kt)("strong",{parentName:"p"},"no problems"),"."),(0,o.kt)("p",null,"However, deploying a contract that ",(0,o.kt)("strong",{parentName:"p"},"modifies or removes structures"),"  stored in the state will raise an\nerror: ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot deserialize the contract state"),", in which case you can choose to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use a different account"),(0,o.kt)("li",{parentName:"ol"},"Rollback to the previous contract code"),(0,o.kt)("li",{parentName:"ol"},"Add a method to migrate the contract's state")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h3",{id:"the-migration-method"},"The Migration Method"),(0,o.kt)("p",null,"If you have no option but to migrate the state, then you need to implement a method that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reads the current state of the contract"),(0,o.kt)("li",{parentName:"ol"},"Applies different functions to transform it into the new state"),(0,o.kt)("li",{parentName:"ol"},"Returns the new state")),(0,o.kt)("admonition",{title:"DAO Update",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This is how DAOs ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao2/src/upgrade.rs#L59"},"update themselves"))),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h3",{id:"example-guest-book-migration"},"Example: Guest Book Migration"),(0,o.kt)("p",null,'Imagine you have a Guest Book where you store messages, and the users can pay for such messages\nto be "premium". You keep track of the messages and payments using the following state:'),(0,o.kt)(l.O2,{mdxType:"CodeTabs"},(0,o.kt)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/base/src/lib.rs",start:"9",end:"23",mdxType:"Github"}))),(0,o.kt)("h4",{id:"update-contract"},"Update Contract"),(0,o.kt)("p",null,"At some point you realize that you could keep track of the ",(0,o.kt)("inlineCode",{parentName:"p"},"payments")," inside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PostedMessage")," itself,\nso you change the contract to:"),(0,o.kt)(l.O2,{mdxType:"CodeTabs"},(0,o.kt)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/lib.rs",start:"11",end:"25",mdxType:"Github"}))),(0,o.kt)("h4",{id:"incompatible-states"},"Incompatible States"),(0,o.kt)("p",null,"If you deploy the update into an initialized account the contract will fail to deserialize the account's state,\nbecause:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"There is an extra ",(0,o.kt)("inlineCode",{parentName:"li"},"payments")," vector saved in the state (from the previous contract)"),(0,o.kt)("li",{parentName:"ol"},"The stored ",(0,o.kt)("inlineCode",{parentName:"li"},"PostedMessages")," are missing the ",(0,o.kt)("inlineCode",{parentName:"li"},"payment")," field (as in the previous contract)")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"migrating-the-state-1"},"Migrating the State"),(0,o.kt)("p",null,"To fix the problem, you need to implement a method that goes through the old state, removes the ",(0,o.kt)("inlineCode",{parentName:"p"},"payments")," vector and\nadds the information to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PostedMessages"),":"),(0,o.kt)(l.O2,{mdxType:"CodeTabs"},(0,o.kt)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/migrate.rs",start:"3",end:"45",mdxType:"Github"}))),(0,o.kt)("p",null,"Notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate")," is actually an ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/anatomy#initialization-method"},"initialization method")," that ",(0,o.kt)("strong",{parentName:"p"},"ignores")," the existing state (",(0,o.kt)("inlineCode",{parentName:"p"},"[#init(ignore_state)]"),"), thus being able to execute and rewrite the state."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can follow a migration step by step in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/basic-updates/base"},"official migration example"))))}k.isMDXComponent=!0}}]);