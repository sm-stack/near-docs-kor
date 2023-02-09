"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4397],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>u,SQ:()=>p});var n=a(67294),r=a(74866),o=a(85162),l=a(1841),i=a.n(l),c=a(95665),s=a.n(c);function u(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(o.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,o=a.url,l=a.start,c=a.end,s=a.fname;if("Github"==e.props.mdxType)return d({url:o,start:l,end:c,language:t,fname:s});if("CodeBlock"==e.props.mdxType)return n.createElement(i(),{fname:s,language:t},r);return e}(e,a)})),1==t.length?n.createElement(o.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(o.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,r=e.end,o=e.language,l=e.fname,i=t+"#";return a&&r&&(i+="L"+a+"-L"+r+"#"),n.createElement(s(),{language:o,fname:l},i)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(76775),c=a(91980),s=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,c._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,a,n,o,l=e.defaultValue,i=e.queryString,c=void 0!==i&&i,s=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),k=f[0],b=f[1],y=h({queryString:c,groupId:s}),v=y[0],g=y[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,u.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],C=N[1],E=function(){var e=null!=v?v:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),C(e)}),[g,C,p]),tabValues:p}}var k=a(72389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){var t=e.className,a=e.block,i=e.selectedValue,c=e.selectValue,s=e.tabValues,u=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==i&&(p(t),c(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;a=null!=(o=u[l])?o:u[u.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function g(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var o=a.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},92021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=(a(74866),a(85162),a(90346)),i=["components"],c={id:"factory",title:"Factory"},s=void 0,u={unversionedId:"tutorials/examples/factory",id:"tutorials/examples/factory",title:"Factory",description:"A factory is a smart contract that stores a compiled contract on itself, and automatizes deploying it into",source:"@site/../docs/3.tutorials/examples/factory.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/factory",permalink:"/near-docs-kor/tutorials/examples/factory",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/factory.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"factory",title:"Factory"},sidebar:"tutorials",previous:{title:"Coin Flip",permalink:"/near-docs-kor/tutorials/examples/coin-flip"},next:{title:"Escrow Contract",permalink:"/near-docs-kor/tutorials/examples/escrow"}},p={},d=[{value:"Generic Factory",id:"generic-factory",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Build and Deploy the Factory",id:"build-and-deploy-the-factory",level:3},{value:"Deploy the Stored Contract Into a Sub-Account",id:"deploy-the-stored-contract-into-a-sub-account",level:3},{value:"Update the Stored Contract",id:"update-the-stored-contract",level:3},{value:"Factories - Concepts &amp; Limitations",id:"factories---concepts--limitations",level:2},{value:"Automatically Creating Accounts",id:"automatically-creating-accounts",level:3},{value:"The Update Method",id:"the-update-method",level:3}],m={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A factory is a smart contract that stores a compiled contract on itself, and automatizes deploying it into\nsub-accounts."),(0,o.kt)("p",null,"We have two factory examples:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/near-examples/token-factory"},(0,o.kt)("strong",{parentName:"a"},"Token Factory")),": A factory that creates ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/tutorials/fts/introduction"},"fungible tokens")," contracts. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/near-examples/factory-rust"},(0,o.kt)("strong",{parentName:"a"},"A Generic Factory")),": A factory that creates ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/tutorials/examples/donation"},"donation contracts"),", but allows to change the contract it deploys.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In this page we will focus on the Donation factory, to learn more about the token factory visit its repository.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"generic-factory"},"Generic Factory"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/factory-rust/"},"Generic Factory")," presents a contract factory that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creates sub-accounts of itself and deploys its contract on them (",(0,o.kt)("inlineCode",{parentName:"li"},"create_factory_subaccount_and_deploy"),")."),(0,o.kt)("li",{parentName:"ol"},"Can change the stored contract using the ",(0,o.kt)("inlineCode",{parentName:"li"},"update_stored_contract")," method.")),(0,o.kt)(l.O2,{mdxType:"CodeTabs"},(0,o.kt)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,o.kt)(l.Ey,{fname:"deploy.rs",url:"https://github.com/near-examples/factory-rust/blob/main/contract/src/deploy.rs",start:"14",end:"60",mdxType:"Github"}),(0,o.kt)(l.Ey,{fname:"update.rs",url:"https://github.com/near-examples/factory-rust/blob/main/contract/src/manager.rs",start:"5",end:"19",mdxType:"Github"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure you have installed ",(0,o.kt)("a",{parentName:"li",href:"https://rust.org/"},"rust"),"."),(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-cli#setup"},(0,o.kt)("inlineCode",{parentName:"a"},"NEAR CLI")))),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h3",{id:"build-and-deploy-the-factory"},"Build and Deploy the Factory"),(0,o.kt)("p",null,"You can automatically compile and deploy the contract in the NEAR testnet by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy.sh\n")),(0,o.kt)("p",null,"Once finished, check the ",(0,o.kt)("inlineCode",{parentName:"p"},"neardev/dev-account")," file to find the address in which the contract was deployed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ./neardev/dev-account\n# e.g. dev-1659899566943-21539992274727\n")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h3",{id:"deploy-the-stored-contract-into-a-sub-account"},"Deploy the Stored Contract Into a Sub-Account"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create_factory_subaccount_and_deploy")," will create a sub-account of the factory and deploy the\nstored contract on it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call <factory-account> create_factory_subaccount_and_deploy \'{ "name": "sub", "beneficiary": "<account-to-be-beneficiary>"}\' --deposit 1.24 --accountId <account-id> --gas 300000000000000\n')),(0,o.kt)("p",null,"This will create the ",(0,o.kt)("inlineCode",{parentName:"p"},"sub.<factory-account>"),", which will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"donation")," contract deployed on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view sub.<factory-account> get_beneficiary\n# expected response is: <account-to-be-beneficiary>\n")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h3",{id:"update-the-stored-contract"},"Update the Stored Contract"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"update_stored_contract")," enables to change the compiled contract that the factory stores."),(0,o.kt)("p",null,"The method is interesting because it has no declared parameters, and yet it takes\nan input: the new contract to store as a stream of bytes."),(0,o.kt)("p",null,"To use it, we need to transform the contract we want to store into its ",(0,o.kt)("inlineCode",{parentName:"p"},"base64"),"\nrepresentation, and pass the result as input to the method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Use near-cli to update stored contract\nexport BYTES=`cat ./src/to/new-contract/contract.wasm | base64`\nnear call <factory-account> update_stored_contract "$BYTES" --base64 --accountId <factory-account> --gas 30000000000000\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This works because the arguments of a call can be either a ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," object or a ",(0,o.kt)("inlineCode",{parentName:"p"},"String Buffer"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"factories---concepts--limitations"},"Factories - Concepts & Limitations"),(0,o.kt)("p",null,"Factories are an interesting concept, here we further explain some of their implementation aspects,\nas well as their limitations.  "),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h3",{id:"automatically-creating-accounts"},"Automatically Creating Accounts"),(0,o.kt)("p",null,"NEAR accounts can only create sub-accounts of itself, therefore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"factory")," can only create and\ndeploy contracts on its own sub-accounts. "),(0,o.kt)("p",null,"This means that the factory:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Can")," create ",(0,o.kt)("inlineCode",{parentName:"li"},"sub.factory.testnet")," and deploy a contract on it."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Cannot")," create sub-accounts of the ",(0,o.kt)("inlineCode",{parentName:"li"},"predecessor"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Can")," create new accounts (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"account.testnet"),"), but ",(0,o.kt)("strong",{parentName:"li"},"cannot")," deploy contracts on them.")),(0,o.kt)("p",null,"It is important to remember that, while ",(0,o.kt)("inlineCode",{parentName:"p"},"factory.testnet")," can create ",(0,o.kt)("inlineCode",{parentName:"p"},"sub.factory.testnet"),", it has\nno control over it after its creation."),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h3",{id:"the-update-method"},"The Update Method"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"update_stored_contracts")," has a very short implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[private]\npub fn update_stored_contract(&mut self) {\n  self.code = env::input().expect("Error: No input").to_vec();\n}\n')),(0,o.kt)("p",null,"On first sight it looks like the method takes no input parameters, but we can see that its only\nline of code reads from ",(0,o.kt)("inlineCode",{parentName:"p"},"env::input()"),". What is happening here is that ",(0,o.kt)("inlineCode",{parentName:"p"},"update_stored_contract"),"\n",(0,o.kt)("strong",{parentName:"p"},"bypasses")," the step of ",(0,o.kt)("strong",{parentName:"p"},"deserializing the input"),". "),(0,o.kt)("p",null,"You could implement ",(0,o.kt)("inlineCode",{parentName:"p"},"update_stored_contract(&mut self, new_code: Vec<u8>)"),",\nwhich takes the compiled code to store as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vec<u8>"),", but that would trigger the contract to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deserialize the ",(0,o.kt)("inlineCode",{parentName:"li"},"new_code")," variable from the input."),(0,o.kt)("li",{parentName:"ol"},"Sanitize it, making sure it is correctly built.")),(0,o.kt)("p",null,"When dealing with big streams of input data (as is the compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," file to be stored), this process\nof deserializing/checking the input ends up ",(0,o.kt)("strong",{parentName:"p"},"consuming the whole GAS")," for the transaction."))}h.isMDXComponent=!0}}]);