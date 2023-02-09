"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(76775),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function h(e){var t,a,n,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,c=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),v=h[0],g=h[1],b=f({queryString:s,groupId:c}),y=b[0],k=b[1],O=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,u.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=O[0],N=O[1],T=function(){var e=null!=y?y:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var v=a(72389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){var t=e.className,a=e.block,i=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;a=null!=(o=u[l])?o:u[u.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var o=a.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function O(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(O,(0,n.Z)({key:String(t)},e))}},9207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(74866),i=a(85162),s=["components"],c={id:"dao",sidebar_label:"Autonomous Organizations",title:"Decentralized Autonomous Organizations"},u=void 0,p={unversionedId:"develop/relevant-contracts/dao",id:"develop/relevant-contracts/dao",title:"Decentralized Autonomous Organizations",description:"Decentralized Autonomous Organizations (DAOs) are self-organized groups that form around common purposes. Membership, decision making,",source:"@site/../docs/2.develop/relevant-contracts/dao.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/dao",permalink:"/near-docs-kor/vi/develop/relevant-contracts/dao",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/dao.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"dao",sidebar_label:"Autonomous Organizations",title:"Decentralized Autonomous Organizations"},sidebar:"tutorials",previous:{title:"Minecraft NFTs",permalink:"/near-docs-kor/vi/tutorials/nfts/minecraft-nfts"},next:{title:"Getting started",permalink:"/near-docs-kor/vi/tutorials/indexer/near-lake-state-changes-indexer"}},d={},m=[{value:"Creating a DAO",id:"creating-a-dao",level:2},{value:"Voting policy",id:"voting-policy",level:3},{value:"Adding a Proposal",id:"adding-a-proposal",level:2},{value:"Acting on a Proposal",id:"acting-on-a-proposal",level:2}],f={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Decentralized Autonomous Organizations (DAOs) are self-organized groups that form around common purposes. Membership, decision making,\nand funding are coordinated by publicly voting on proposals through a smart contract. "),(0,o.kt)("p",null,"In contrast with ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/relevant-contracts/ft"},"FT")," and ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/relevant-contracts/nft"},"NFT"),", DAO contract's are not standardized. Because of this, in this page we will use as\nreference the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract"},"sputnik dao implementation"),". The main concepts covered here should\neasily generalizable to other DAO implementations."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-a-dao"},"Creating a DAO"),(0,o.kt)("p",null,"To create a DAO you first need to deploy the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#setup"},"DAO contract factory"),", and initialize it."),(0,o.kt)("p",null,"Once deployed and initialized, you can ask the factory to ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," a new DAO for you. On creation, you will define parameters such as the DAO's name, its purpose, and its council. Defining the right council is important since its members are the ",(0,o.kt)("strong",{parentName:"p"},"only")," accounts allowed to vote on proposals."),(0,o.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# 1. Deploy the contract in a testnet account\nnear dev-deploy <factory-account> --wasmFile=<sputnikdao-factory> --accountId <your-account>\n\n# 2. Initialize factory contract\nnear call <factory-account> new --accountId  <your-account> --gas 100000000000000\n\n# 3. Define a council and create DAO\nexport COUNCIL=\'["<council-member-1>", "<council-member-2>"]\'\nexport ARGS=`echo \'{"config": {"name": "<name>", "purpose": "<purpose>", "metadata":"<metadata>"}, "policy": \'$COUNCIL\'}\' | base64`\n\nnear call  <factory-account> create "{\\"name\\": \\"<name>\\", \\"args\\": \\"$ARGS\\"}" --accountId <your-account> --amount 10 --gas 150000000000000\n')))),(0,o.kt)("h3",{id:"voting-policy"},"Voting policy"),(0,o.kt)("p",null,"Currently, the DAO supports two different types of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#voting-policy"},"voting policies"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenWeight"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"RoleWeight"),". "),(0,o.kt)("p",null,"When the vote policy is ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenWeight"),", the council votes using ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/relevant-contracts/ft"},"tokens"),". The weigh of a vote is the proportion of tokens used for voting over the token's total supply."),(0,o.kt)("p",null,"When the vote policy is ",(0,o.kt)("inlineCode",{parentName:"p"},"RoleWeight(role)"),', the vote weigh is computed as "one over the total number of people with the role".'),(0,o.kt)("p",null,'Both voting policies further include a "threshold" for passing a proposal, which can be a ratio or a fixed number. The ratio indicates that you need a proportion of people/tokens to approve the proposal (e.g. half the people need to vote, and to vote positively). A fixed number indicated that you need a specific number of votes/tokens to pass the proposal (e.g. 3 people/tokens are enough to approve the proposal).'),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"adding-a-proposal"},"Adding a Proposal"),(0,o.kt)("p",null,"By default, anyone can add a proposal to the DAO, but a minimum of 1\u24c3 needs to be attached as a bond. This however can be changed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions"},"setting roles in the DAO"),". The type of proposals that can be added ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types"},"is predefined"),", and include actions such as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Adding a member to the council."),(0,o.kt)("li",{parentName:"ol"},"Calling a method in a smart contract."),(0,o.kt)("li",{parentName:"ol"},"Transferring NEAR or a FT to some account.")),(0,o.kt)("p",null,"Each action has its own kind of arguments. The complete list of actions can be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types"},"found here"),"."),(0,o.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call <dao-account> add_proposal \\\n\'{"proposal": {"description": "<description>", "kind": {"<proposalKind>": {"<argument>": "<value>", "<argument>": "<value>"}}}}\' \\\n--accountId proposer.testnet \\\n--amount 1\n\n')))),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"acting-on-a-proposal"},"Acting on a Proposal"),(0,o.kt)("p",null,"Once a proposal is added, ",(0,o.kt)("strong",{parentName:"p"},"council members")," can act on them calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"act_proposal")," method. The available actions are one of the following: AddProposal, RemoveProposal, VoteApprove, VoteReject, VoteRemove, Finalize, or MoveToHub."),(0,o.kt)(l.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call <dao-account> act_proposal \'{"id": <proposal-id>, "action": "<action>"}\' --accountId <a-council-account-id>\n')))),(0,o.kt)("p",null,"Each time somebody acts on the proposal, the DAO checks if the proposal has enough votes to be approved. If the proposal is approve, then the DAO executes the proposal (for example, adding a new member to the council)."))}h.isMDXComponent=!0}}]);