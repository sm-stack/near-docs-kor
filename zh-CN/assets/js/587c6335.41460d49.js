"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6016],{90346:(e,t,a)=>{a.d(t,{Ey:()=>h,O2:()=>u,SQ:()=>p});var n=a(67294),r=a(65488),o=a(85162),l=a(1841),s=a.n(l),c=a(95665),i=a.n(c);function u(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(o.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,o=a.url,l=a.start,c=a.end,i=a.fname;if("Github"==e.props.mdxType)return h({url:o,start:l,end:c,language:t,fname:i});if("CodeBlock"==e.props.mdxType)return n.createElement(s(),{fname:i,language:t},r);return e}(e,a)})),1==t.length?n.createElement(o.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(o.Z,{value:t,label:e.props.fname},e)})))}function h(e){var t=e.url,a=e.start,r=e.end,o=e.language,l=e.fname,s=t+"#";return a&&r&&(s+="L"+a+"-L"+r+"#"),n.createElement(i(),{language:o,fname:l},s)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),s=a(67392),c=a(7094),i=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function h(e){var t,a,l=e.lazy,h=e.block,d=e.defaultValue,m=e.values,k=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.U)(),N=y.tabGroupChoices,C=y.setTabGroupChoices,T=(0,r.useState)(w),x=T[0],E=T[1],A=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=N[k];null!=j&&j!==x&&g.some((function(e){return e.value===j}))&&E(j)}var _=function(e){var t=e.currentTarget,a=A.indexOf(t),n=g[a].value;n!==x&&(I(t),E(n),null!=k&&C(k,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=A.indexOf(e.currentTarget)+1;a=null!=(n=A[r])?n:A[0];break;case"ArrowLeft":var o,l=A.indexOf(e.currentTarget)-1;a=null!=(o=A[l])?o:A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},v)},g.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return A.push(e)},onKeyDown:Z,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,l.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},15295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(65488),s=a(85162),c=a(90346),i=["components"],u={id:"escrow",title:"Escrow Contract"},p=void 0,h={unversionedId:"tutorials/examples/escrow",id:"tutorials/examples/escrow",title:"Escrow Contract",description:"",source:"@site/../docs/3.tutorials/examples/escrow.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/escrow",permalink:"/near-docs-kor/zh-CN/tutorials/examples/escrow",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/escrow.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"escrow",title:"Escrow Contract"},sidebar:"tutorials",previous:{title:"Factory",permalink:"/near-docs-kor/zh-CN/tutorials/examples/factory"},next:{title:"Frontend Multiple Contracts",permalink:"/near-docs-kor/zh-CN/tutorials/examples/frontend-multiple-contracts"}},d={},m=[{value:"Starting with the Project",id:"starting-with-the-project",level:2},{value:"Interacting With the Contract",id:"interacting-with-the-contract",level:3},{value:"1. Install Dependencies",id:"1-install-dependencies",level:4},{value:"1. Build the Contracts",id:"1-build-the-contracts",level:4},{value:"2. Deploy the Contracts",id:"2-deploy-the-contracts",level:4},{value:"3. Initialize the Assets Contract",id:"3-initialize-the-assets-contract",level:4},{value:"3. Perform a Purchase on Escrow",id:"3-perform-a-purchase-on-escrow",level:4},{value:"4. Check the Balance of the Buyer Account",id:"4-check-the-balance-of-the-buyer-account",level:4},{value:"5. Approve the Purchase",id:"5-approve-the-purchase",level:4},{value:"Contract",id:"contract",level:3},{value:"Testing",id:"testing",level:2},{value:"Moving Forward",id:"moving-forward",level:2}],k={toc:m};function v(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example provides a simple implementation of an escrow contract, with a timeout callable function that concludes the transaction if the buyer has not provided approval within a given timeframe. "),(0,o.kt)("p",null,"The code also includes an example of how contracts can pass data to each other through cross contract calls, and how the caller contract can handle the result."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example does not have a frontend")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"starting-with-the-project"},"Starting with the Project"),(0,o.kt)("p",null,"You have two options to start using the project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first and recommended is to open the project through Gitpod, which will open a web-based interactive environment with all dependencies installed."),(0,o.kt)("li",{parentName:"ul"},"The second option is to clone the repository locally, for which you will need to install all the ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/develop/prerequisites"},"Prerequisites"),".")),(0,o.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gitpod"),(0,o.kt)("th",{parentName:"tr",align:null},"Clone Locally"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/near-examples/escrow-js"},(0,o.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 ",(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/near-examples/escrow-js.git"))))))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"interacting-with-the-contract"},"Interacting With the Contract"),(0,o.kt)("p",null,"Since this example does not have a frontend, we will interact with it using the ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-cli"},"NEAR CLI")," or writing tests using ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/testing/integration-test"},(0,o.kt)("inlineCode",{parentName:"a"},"workspaces-js")),"."),(0,o.kt)("p",null,"Check the project's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/escrow-js/blob/master/README.md"},"README.md"),". Briefly, you will need to:"),(0,o.kt)("h4",{id:"1-install-dependencies"},"1. Install Dependencies"),(0,o.kt)("p",null,"To install dependencies, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\n")),(0,o.kt)("h4",{id:"1-build-the-contracts"},"1. Build the Contracts"),(0,o.kt)("p",null,"You can build the contracts (creating the ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm")," files that will be deployed to the network) by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"Once finished, check the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/")," folder and you should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"escrow.wasm")," file. This is the file that will be deployed to the network alongside the ",(0,o.kt)("inlineCode",{parentName:"p"},"assets.wasm")," file that is used to manage ownership for assets. "),(0,o.kt)("h4",{id:"2-deploy-the-contracts"},"2. Deploy the Contracts"),(0,o.kt)("p",null,"To deploy the escrow contract to testnet, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near deploy --wasmFile build/escrow.wasm --accountId <your-escrow-testnet-account-id>\n")),(0,o.kt)("p",null,"To deploy the assets contract to testnet, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near deploy --wasmFile build/assets.wasm --accountId <your-assets-testnet-account-id>\n")),(0,o.kt)("h4",{id:"3-initialize-the-assets-contract"},"3. Initialize the Assets Contract"),(0,o.kt)("p",null,"To initialize the assets contract, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call <your-assets-testnet-account-id> init \'{"owner_id": "<your-asset-owner-account-id>", "total_supply": "1000", "escrow_contract_id": "<your-escrow-testnet-account-id>", "asset_price": "100000000000000000000000"}\' --accountId <your-assets-testnet-account-id>\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"asset_price")," is the price of the asset in yoctoNEAR (10^-24 NEAR). In this example, the price is set to 0.1 NEAR."),(0,o.kt)("h4",{id:"3-perform-a-purchase-on-escrow"},"3. Perform a Purchase on Escrow"),(0,o.kt)("p",null,"To perform a purchase on the escrow contract, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call <your-escrow-testnet-account-id> purchase_in_escrow \'{"seller_account_id": "<your-asset-owner-account-id>", "asset_contract_id ": "<your-assets-testnet-account-id>"}\' --accountId <your-account-id> --amount 0.11 --gas=300000000000000\n')),(0,o.kt)("p",null,"Since we set the price of the asset to 0.1 NEAR, we need to send 0.11 NEAR to the escrow contract to cover the price of the asset and gas costs."),(0,o.kt)("h4",{id:"4-check-the-balance-of-the-buyer-account"},"4. Check the Balance of the Buyer Account"),(0,o.kt)("p",null,"To check the asset balance of the buyer account after the escrow purchase, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near view <your-assets-testnet-account-id> get_account_assets \'{"account_id": "<your-account-id>"}\'\n')),(0,o.kt)("p",null,"You may also check the NEAR balance of the seller account, making sure they have not received the payment yet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near state <your-asset-owner-account-id>\n")),(0,o.kt)("h4",{id:"5-approve-the-purchase"},"5. Approve the Purchase"),(0,o.kt)("p",null,"To approve the purchase, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near call <your-escrow-testnet-account-id> approve_purchase '{}' --accountId <your-account-id>\n")),(0,o.kt)("p",null,"Check the NEAR balance of the seller account again, and you should see that they have received the payment."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"contract"},"Contract"),(0,o.kt)("p",null,"The contract exposes methods to purchase assets in escrow and approve or cancel the purchase by the buyer. Additionally, the contract exposes a method to check the creation time of the purchase, and if the purchase has been created a day or longer ago, the contract will approve the purchase without the buyer's input. "),(0,o.kt)(c.O2,{mdxType:"CodeTabs"},(0,o.kt)(c.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,o.kt)(c.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/escrow-js/blob/master/contracts/escrow.js",start:"41",end:"119",mdxType:"Github"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"When writing smart contracts it is critical to test all methods exhaustively. In this\nproject we test the contract methods using ",(0,o.kt)("inlineCode",{parentName:"p"},"workspaces-js"),". Before digging into the tests,\ngo ahead and perform the tests present in the dApp through the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npm test"),". This will run the tests in ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/main.ava.js"),". Test names and outcomes are printed to the console."),(0,o.kt)(c.O2,{mdxType:"CodeTabs"},(0,o.kt)(c.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",mdxType:"Language"},(0,o.kt)(c.Ey,{fname:"main.ava.js",url:"https://github.com/near-examples/escrow-js/blob/master/tests/main.ava.js",start:"4",end:"78",mdxType:"Github"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"moving-forward"},"Moving Forward"),(0,o.kt)("p",null,"A nice way to learn is by trying to expand a contract. Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"escrow-js")," example to use an ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tutorials/nfts/introduction"},"NFT"),"\ncontract!. In this way, you can try to make functionality where a user purchases an NFT in escrow! Remember to correctly ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/crosscontract#callback-method"},"handle the callback"),",\nand to return the money to the user in case of errors."))}v.isMDXComponent=!0}}]);