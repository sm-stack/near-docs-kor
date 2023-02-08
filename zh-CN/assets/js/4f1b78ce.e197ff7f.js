"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const r="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),r=a(86010),l=a(72389),i=a(67392),s=a(7094),c=a(12466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),O=N.tabGroupChoices,T=N.setTabGroupChoices,w=(0,o.useState)(y),A=w[0],C=w[1],D=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=O[f];null!=x&&x!==A&&b.some((function(e){return e.value===x}))&&C(x)}var I=function(e){var t=e.currentTarget,a=D.indexOf(t),n=b[a].value;n!==A&&(E(t),C(n),null!=f&&T(f,String(n)))},z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,o=D.indexOf(e.currentTarget)+1;a=null!=(n=D[o])?n:D[0];break;case"ArrowLeft":var r,l=D.indexOf(e.currentTarget)-1;a=null!=(r=D[l])?r:D[D.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return D.push(e)},onKeyDown:z,onFocus:I,onClick:I},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),l?(0,o.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function m(e){var t=(0,l.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},9207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=a(65488),i=a(85162),s=["components"],c={id:"dao",sidebar_label:"Autonomous Organizations",title:"Decentralized Autonomous Organizations"},p=void 0,u={unversionedId:"develop/relevant-contracts/dao",id:"develop/relevant-contracts/dao",title:"Decentralized Autonomous Organizations",description:"",source:"@site/../docs/2.develop/relevant-contracts/dao.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/dao",permalink:"/near-docs-kor/zh-CN/develop/relevant-contracts/dao",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/dao.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"dao",sidebar_label:"Autonomous Organizations",title:"Decentralized Autonomous Organizations"},sidebar:"tutorials",previous:{title:"Minecraft NFTs",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/minecraft-nfts"},next:{title:"Getting started",permalink:"/near-docs-kor/zh-CN/tutorials/indexer/near-lake-state-changes-indexer"}},d={},m=[{value:"Creating a DAO",id:"creating-a-dao",level:2},{value:"Voting policy",id:"voting-policy",level:3},{value:"Adding a Proposal",id:"adding-a-proposal",level:2},{value:"Acting on a Proposal",id:"acting-on-a-proposal",level:2}],h={toc:m};function f(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Decentralized Autonomous Organizations (DAOs) are self-organized groups that form around common purposes. Membership, decision making,\nand funding are coordinated by publicly voting on proposals through a smart contract. "),(0,r.kt)("p",null,"In contrast with ",(0,r.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/relevant-contracts/ft"},"FT")," and ",(0,r.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/relevant-contracts/nft"},"NFT"),", DAO contract's are not standardized. Because of this, in this page we will use as\nreference the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract"},"sputnik dao implementation"),". The main concepts covered here should\neasily generalizable to other DAO implementations."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"creating-a-dao"},"Creating a DAO"),(0,r.kt)("p",null,"To create a DAO you first need to deploy the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#setup"},"DAO contract factory"),", and initialize it."),(0,r.kt)("p",null,"Once deployed and initialized, you can ask the factory to ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," a new DAO for you. On creation, you will define parameters such as the DAO's name, its purpose, and its council. Defining the right council is important since its members are the ",(0,r.kt)("strong",{parentName:"p"},"only")," accounts allowed to vote on proposals."),(0,r.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# 1. Deploy the contract in a testnet account\nnear dev-deploy <factory-account> --wasmFile=<sputnikdao-factory> --accountId <your-account>\n\n# 2. Initialize factory contract\nnear call <factory-account> new --accountId  <your-account> --gas 100000000000000\n\n# 3. Define a council and create DAO\nexport COUNCIL=\'["<council-member-1>", "<council-member-2>"]\'\nexport ARGS=`echo \'{"config": {"name": "<name>", "purpose": "<purpose>", "metadata":"<metadata>"}, "policy": \'$COUNCIL\'}\' | base64`\n\nnear call  <factory-account> create "{\\"name\\": \\"<name>\\", \\"args\\": \\"$ARGS\\"}" --accountId <your-account> --amount 10 --gas 150000000000000\n')))),(0,r.kt)("h3",{id:"voting-policy"},"Voting policy"),(0,r.kt)("p",null,"Currently, the DAO supports two different types of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#voting-policy"},"voting policies"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenWeight"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleWeight"),". "),(0,r.kt)("p",null,"When the vote policy is ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenWeight"),", the council votes using ",(0,r.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/relevant-contracts/ft"},"tokens"),". The weigh of a vote is the proportion of tokens used for voting over the token's total supply."),(0,r.kt)("p",null,"When the vote policy is ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleWeight(role)"),', the vote weigh is computed as "one over the total number of people with the role".'),(0,r.kt)("p",null,'Both voting policies further include a "threshold" for passing a proposal, which can be a ratio or a fixed number. The ratio indicates that you need a proportion of people/tokens to approve the proposal (e.g. half the people need to vote, and to vote positively). A fixed number indicated that you need a specific number of votes/tokens to pass the proposal (e.g. 3 people/tokens are enough to approve the proposal).'),(0,r.kt)("hr",{class:"subsection"}),(0,r.kt)("h2",{id:"adding-a-proposal"},"Adding a Proposal"),(0,r.kt)("p",null,"By default, anyone can add a proposal to the DAO, but a minimum of 1\u24c3 needs to be attached as a bond. This however can be changed by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions"},"setting roles in the DAO"),". The type of proposals that can be added ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types"},"is predefined"),", and include actions such as:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Adding a member to the council."),(0,r.kt)("li",{parentName:"ol"},"Calling a method in a smart contract."),(0,r.kt)("li",{parentName:"ol"},"Transferring NEAR or a FT to some account.")),(0,r.kt)("p",null,"Each action has its own kind of arguments. The complete list of actions can be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types"},"found here"),"."),(0,r.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call <dao-account> add_proposal \\\n\'{"proposal": {"description": "<description>", "kind": {"<proposalKind>": {"<argument>": "<value>", "<argument>": "<value>"}}}}\' \\\n--accountId proposer.testnet \\\n--amount 1\n\n')))),(0,r.kt)("hr",{class:"subsection"}),(0,r.kt)("h2",{id:"acting-on-a-proposal"},"Acting on a Proposal"),(0,r.kt)("p",null,"Once a proposal is added, ",(0,r.kt)("strong",{parentName:"p"},"council members")," can act on them calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"act_proposal")," method. The available actions are one of the following: AddProposal, RemoveProposal, VoteApprove, VoteReject, VoteRemove, Finalize, or MoveToHub."),(0,r.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call <dao-account> act_proposal \'{"id": <proposal-id>, "action": "<action>"}\' --accountId <a-council-account-id>\n')))),(0,r.kt)("p",null,"Each time somebody acts on the proposal, the DAO checks if the proposal has enough votes to be approved. If the proposal is approve, then the DAO executes the proposal (for example, adding a new member to the council)."))}f.isMDXComponent=!0}}]);