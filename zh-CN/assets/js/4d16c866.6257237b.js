"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5536],{90346:(e,t,a)=>{a.d(t,{Ey:()=>d,O2:()=>u,SQ:()=>p});var n=a(67294),r=a(65488),i=a(85162),o=a(1841),l=a.n(o),s=a(95665),c=a.n(s);function u(e){var t=e.children;return Array.isArray(t)||(t=[t]),n.createElement(r.Z,{className:"language-tabs",groupId:"code-tabs"},t.map((function(e,t){return n.createElement(i.Z,{value:e.props.value,label:e.props.value},e)})))}function p(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,r=a.children,i=a.url,o=a.start,s=a.end,c=a.fname;if("Github"==e.props.mdxType)return d({url:i,start:o,end:s,language:t,fname:c});if("CodeBlock"==e.props.mdxType)return n.createElement(l(),{fname:c,language:t},r);return e}(e,a)})),1==t.length?n.createElement(i.Z,{value:0,label:t[0].props.fname},t[0]):n.createElement(r.Z,{className:"file-tabs"},t.map((function(e,t){return n.createElement(i.Z,{value:t,label:e.props.fname},e)})))}function d(e){var t=e.url,a=e.start,r=e.end,i=e.language,o=e.fname,l=t+"#";return a&&r&&(l+="L"+a+"-L"+r+"#"),n.createElement(c(),{language:i,fname:o},l)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),o=a(72389),l=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),T=N.tabGroupChoices,C=N.setTabGroupChoices,w=(0,r.useState)(y),x=w[0],z=w[1],I=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=T[k];null!=E&&E!==x&&v.some((function(e){return e.value===E}))&&z(E)}var Z=function(e){var t=e.currentTarget,a=I.indexOf(t),n=v[a].value;n!==x&&(S(t),z(n),null!=k&&C(k,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var i,o=I.indexOf(e.currentTarget)-1;a=null!=(i=I[o])?i:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},v.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},45914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(65488),l=a(85162),s=a(90346),c=["components"],u={id:"anatomy",title:"The Contract Class"},p=void 0,d={unversionedId:"develop/contracts/anatomy",id:"develop/contracts/anatomy",title:"The Contract Class",description:"",source:"@site/../docs/2.develop/contracts/anatomy.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/anatomy",permalink:"/near-docs-kor/zh-CN/develop/contracts/anatomy",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/anatomy.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{id:"anatomy",title:"The Contract Class"},sidebar:"develop",previous:{title:"Modules, Types & Structs",permalink:"/near-docs-kor/zh-CN/develop/contracts/basics"},next:{title:"Environment",permalink:"/near-docs-kor/zh-CN/develop/contracts/environment/"}},m={},h=[{value:"Defining the Contract",id:"defining-the-contract",level:2},{value:"The State",id:"the-state",level:3},{value:"Initializing the State",id:"initializing-the-state",level:2},{value:"Initialization Method",id:"initialization-method",level:3},{value:"Default State",id:"default-state",level:3},{value:"Interface",id:"interface",level:2},{value:"Public Methods",id:"public-methods",level:3},{value:"Private Methods",id:"private-methods",level:3},{value:"Payable Methods",id:"payable-methods",level:3},{value:"Input &amp; Return Types",id:"input--return-types",level:3}],k={toc:h};function b(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Your contract's logic and state (storage) is defined by the ",(0,i.kt)("a",{parentName:"p",href:"#near-bindgen"},"main class"),", in which:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The attributes define the ",(0,i.kt)("a",{parentName:"li",href:"#defining-the-state"},"contract's state")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"#initializing-the-state"},"initialization methods")," define how to initialize the contract's state"),(0,i.kt)("li",{parentName:"ol"},"The public methods act as the contract's interface with the rest of the network")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"defining-the-contract"},"Defining the Contract"),(0,i.kt)("p",null,"The contract is just another class, with its own attributes and methods. To ",(0,i.kt)("strong",{parentName:"p"},"differentiate it")," from other\ninternal classes simply decorate it using the ",(0,i.kt)("a",{parentName:"p",href:"#decorators--macros"},(0,i.kt)("inlineCode",{parentName:"a"},"NEAR Bindgen")," decorator/macro"),"."),(0,i.kt)(s.O2,{mdxType:"CodeTabs"},(0,i.kt)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",mdxType:"Language"},(0,i.kt)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-js/blob/master/contract/src/contract.ts",start:"6",end:"9",mdxType:"Github"})),(0,i.kt)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",mdxType:"Language"},(0,i.kt)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"7",end:"12",mdxType:"Github"}))),(0,i.kt)("p",null,"Under the hood, the ",(0,i.kt)("inlineCode",{parentName:"p"},"NEAR Bindgen")," decorator/macro traverses the class, generating the necessary code to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Transform the code into a valid NEAR contract."),(0,i.kt)("li",{parentName:"ol"},"Expose public methods, so they can be called externally."),(0,i.kt)("li",{parentName:"ol"},"Serialize objects for internal storage and communication with external actors.")),(0,i.kt)("hr",{class:"subsection"}),(0,i.kt)("h3",{id:"the-state"},"The State"),(0,i.kt)("p",null,"Each account has its own state (storage), which ",(0,i.kt)("strong",{parentName:"p"},"only they can modify")," but ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-cli#near-view-state-near-view-state"},"anyone can see"),"."),(0,i.kt)("p",null,"The state is defined and modified through the ",(0,i.kt)("strong",{parentName:"p"},"main class' attributes"),"."),(0,i.kt)("p",null,"Contracts ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/storage#storage-cost"},(0,i.kt)("strong",{parentName:"a"},"pay for their storage"))," by locking part of their balance. Currently it costs ",(0,i.kt)("strong",{parentName:"p"},"~1 \u24c3")," to store ",(0,i.kt)("strong",{parentName:"p"},"100kb")),(0,i.kt)("admonition",{title:"Key-Value Storage",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The contract actually uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"key-value")," storage to persist values. This however is abstracted from you\nby the SDK through ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/serialization"},"serialization"),".")),(0,i.kt)("admonition",{title:"Prefer SDK Collections",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When defining attributes, ",(0,i.kt)("strong",{parentName:"p"},"always prefer ",(0,i.kt)("a",{parentName:"strong",href:"/near-docs-kor/zh-CN/develop/contracts/storage"},"SDK collections"))," over native ones, since they are optimized for ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/serialization"},"serialization"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"initializing-the-state"},"Initializing the State"),(0,i.kt)("p",null,"There are two ways to initialize the account's state, and they can co-exist:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An ",(0,i.kt)("strong",{parentName:"li"},"initialization method")," that receives the attributes needed for the state"),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("strong",{parentName:"li"},"default state"),", which will be used until ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," is invoked, or a method writes into the state")),(0,i.kt)("hr",{class:"subsection"}),(0,i.kt)("h3",{id:"initialization-method"},"Initialization Method"),(0,i.kt)("p",null,"To define an initialization method simply decorate it with the ",(0,i.kt)("a",{parentName:"p",href:"#decorators--macros"},"initialization macro"),"."),(0,i.kt)("p",null,"The method will now be able to define the initial state's values, raising an error if invoked\nwhile ",(0,i.kt)("strong",{parentName:"p"},"the state is already initialized"),"."),(0,i.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,i.kt)(s.Ey,{fname:"contract.ts",language:"ts",url:"https://github.com/near-examples/donation-js/blob/master/contract/src/contract.ts",start:"11",end:"14",mdxType:"Github"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To make the initialization mandatory use ",(0,i.kt)("inlineCode",{parentName:"p"},"@NearBindgen({requireInit: true})"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In JavaScript you ",(0,i.kt)("strong",{parentName:"p"},"must always")," define a ",(0,i.kt)("a",{parentName:"p",href:"#default-state"},"default state")))),(0,i.kt)(l.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,i.kt)(s.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"25",end:"32",mdxType:"Github"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To make the initialization mandatory use ",(0,i.kt)("inlineCode",{parentName:"p"},"#[derive(PanicOnDefault)]")," in the contract's structure"))),(0,i.kt)(l.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'  // Public - init function, define the beneficiary of donations\n  export function init(beneficiary: string): void {\n    assert(context.predecessor == context.contractName, "Method new is private");\n    set_beneficiary(beneficiary);\n  }\n')),(0,i.kt)("p",null,"  \ud83d\ude80 - AssemblyScript has no ",(0,i.kt)("inlineCode",{parentName:"p"},"#[init]")," macro, and any method can be called multiple times. Limit this by adding a flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const initialized: bool = storage.getPrimitive<bool>('init', false)\n  assert(!initialized, \"Already initialized\")\n  storage.set<bool>('init', true)\n")))),(0,i.kt)("hr",{class:"subsection"}),(0,i.kt)("h3",{id:"default-state"},"Default State"),(0,i.kt)("p",null,"Contracts can define a ",(0,i.kt)("strong",{parentName:"p"},"default state")," to use if no initialize method is called. This is, if any method is invoked\nbefore an ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," happens, the contract will use the default values."),(0,i.kt)("p",null,"Once any method writes into the state, the state will be considered initialized."),(0,i.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,i.kt)(s.Ey,{fname:"contract.ts",language:"ts",url:"https://github.com/near-examples/donation-js/blob/master/contract/src/contract.ts",start:"6",end:"9",mdxType:"Github"}),(0,i.kt)("p",null,"  \ud83c\udf10 In JavaScript, the default state is defined by the initialization parameters in the class definition."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In Javascript you ",(0,i.kt)("strong",{parentName:"p"},"must always")," assign values to ",(0,i.kt)("strong",{parentName:"p"},"all the class' parameters"),". This ensures they get correctly ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/serialization"},"deserialized")," to their intended type."))),(0,i.kt)(l.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,i.kt)(s.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"14",end:"21",mdxType:"Github"}))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("p",null,"All the ",(0,i.kt)("strong",{parentName:"p"},"public methods")," are exposed to the network as the contract's interface."),(0,i.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@NearBindgen({})\nclass Contract {\n\n  @initialize({ ... })\n  init({ ... }) { /* public `init` method */ }\n\n  @view({})\n  get_message({ ...  }) { /* public `view` method */ }\n\n  @call({})\n  add_message({ ... }) { /* public `call` method */ }\n\n  private internal_search( ... ) { /* private internal method */ }\n\n  @call({privateFunction: true})\n  set_owner({ ... }) { /* public, panics when caller is not the contract's account */ }\n}\n"))),(0,i.kt)(l.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\nimpl Contract {\n  #[init]\n  pub fn init( ... ) -> Self { /* public `init` method */ }\n  pub fn get_message(&self, ... ) { /* public `view` method */ }\n  pub fn add_message(&mut self, ... ) { /* public `call` method */ }\n  fn internal_search(&self, ... ) { /* private internal method */ }\n\n  #[private]\n  pub fn set_owner(&mut self, ... ) { /* public, panics when caller is not the contract's account */ }\n}\n"))),(0,i.kt)(l.Z,{value:"\ud83d\ude80 AssemblyScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export function get_message({ ...  }) { ... }\nexport function set_owner({ ... }) { ... }\nexport function add_message({ ... }) { ... }\nprivate function internal_search( ... ) { ... }\n")))),(0,i.kt)("hr",{class:"subsection"}),(0,i.kt)("h3",{id:"public-methods"},"Public Methods"),(0,i.kt)("p",null,"Public methods can be categorized in three types: ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," methods, ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," methods, and ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," methods."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Init Methods"),": They define how to initialize the state of the contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View Methods"),": Do ",(0,i.kt)("strong",{parentName:"li"},"not mutate")," the state ",(0,i.kt)("strong",{parentName:"li"},"nor call")," other contracts. They can\nbe called for free by everyone, ",(0,i.kt)("strong",{parentName:"li"},"without needing")," a NEAR account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Call Methods"),": They can mutate the state and perform ",(0,i.kt)("a",{parentName:"li",href:"/near-docs-kor/zh-CN/develop/contracts/actions"},"actions")," such\nas calling other contracts.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"By default ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," methods have ",(0,i.kt)("inlineCode",{parentName:"p"},"200TGas")," to execute, to increase this you can simple invoke them\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," methods")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"By default ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," methods are public, make sure to ",(0,i.kt)("a",{parentName:"p",href:"#private-methods"},"decorate them as ",(0,i.kt)("inlineCode",{parentName:"a"},"private")),", or ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/deploy#initializing-the-contract"},"batch call the initialization on deploy"))),(0,i.kt)("hr",{class:"subsection"}),(0,i.kt)("h3",{id:"private-methods"},"Private Methods"),(0,i.kt)("p",null,"Sometimes you will want some methods to remain public, but only be callable by the contract's\naccount. Such is the case for example of ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/crosscontract#callback-method"},"cross-contract callbacks"),"."),(0,i.kt)("p",null,"For this, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"private")," macro/decorator."),(0,i.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@call({privateFunction: true})\ncallback( ... ){\n  // this method can only be called by the contract's account\n}\n"))),(0,i.kt)(l.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[private]\npub fn callback(&mut self, ... ){\n  // this method can only be called by the contract's account\n}\n")))),(0,i.kt)("hr",{class:"subsection"}),(0,i.kt)("h3",{id:"payable-methods"},"Payable Methods"),(0,i.kt)("p",null,"By default ",(0,i.kt)("strong",{parentName:"p"},"all methods panic")," if a user ",(0,i.kt)("strong",{parentName:"p"},"attaches money")," while calling them. To enable a\nmethod to receive money use the payable decorator."),(0,i.kt)(o.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@call({payableFunction: true})\ndeposit_and_stake( ... ){\n  // this method can receive money from the user\n}\n"))),(0,i.kt)(l.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[payable]\npub fn deposit_and_stake(&mut self, ... ){\n  // this method can receive money from the user\n}\n")))),(0,i.kt)("hr",{class:"subsection"}),(0,i.kt)("h3",{id:"input--return-types"},"Input & Return Types"),(0,i.kt)("p",null,"The contract can receive and return any ",(0,i.kt)("inlineCode",{parentName:"p"},"native type"),", including complex structures. However,\nsince contracts communicate through their interface ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/develop/contracts/serialization"},"using JSON"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always prefer ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"native types"))," over ",(0,i.kt)("inlineCode",{parentName:"li"},"SDK Collections")," in the input & return types."),(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"u64"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"u128")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"strings")," (",(0,i.kt)("inlineCode",{parentName:"li"},"U64"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"U128")," in the Rust SDK).")))}b.isMDXComponent=!0}}]);