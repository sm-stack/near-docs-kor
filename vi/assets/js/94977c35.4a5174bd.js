"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1037],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,c(c({ref:n},u),{},{components:t})):a.createElement(f,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),r=t(86010);const o="tabItem_Ymn6";function c(e){var n=e.children,t=e.hidden,c=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(87462),r=t(67294),o=t(86010),c=t(12466),s=t(76775),i=t(91980),l=t(67392),u=t(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,s.k6)(),c=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,i._X)(c),(0,r.useCallback)((function(e){if(c){var n=new URLSearchParams(o.location.search);n.set(c,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[c,o])]}function k(e){var n,t,a,o,c=e.defaultValue,s=e.queryString,i=void 0!==s&&s,l=e.groupId,d=p(e),k=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:c,tabValues:d})})),b=k[0],g=k[1],h=f({queryString:i,groupId:l}),_=h[0],y=h[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),t=(0,u.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),N=v[0],w=v[1],T=function(){var e=null!=_?_:N;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),w(e)}),[y,w,d]),tabValues:d}}var b=t(72389);const g="tabList__CuJ",h="tabItem_LNqP";function _(e){var n=e.className,t=e.block,s=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],d=(0,c.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==s&&(d(n),i(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;t=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,c=u.indexOf(e.currentTarget)-1;t=null!=(o=u[c])?o:u[u.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},l.map((function(e){var n=e.value,t=e.label,c=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return u.push(e)},onKeyDown:m,onClick:p},c,{className:(0,o.Z)("tabs__item",h,null==c?void 0:c.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function v(e){var n=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(_,(0,a.Z)({},e,n)),r.createElement(y,(0,a.Z)({},e,n)))}function N(e){var n=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(n)},e))}},17632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),c=t(74866),s=t(85162),i=["components"],l={id:"actions",title:"Transfers & Actions"},u=void 0,d={unversionedId:"develop/contracts/actions",id:"develop/contracts/actions",title:"Transfers & Actions",description:"Smart contracts can perform specific Actions such as transferring NEAR, or calling other contracts.",source:"@site/../docs/2.develop/contracts/actions.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/actions",permalink:"/near-docs-kor/vi/develop/contracts/actions",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/actions.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"actions",title:"Transfers & Actions"},sidebar:"develop",previous:{title:"State & Data Structures",permalink:"/near-docs-kor/vi/develop/contracts/storage"},next:{title:"Cross-Contract Calls",permalink:"/near-docs-kor/vi/develop/contracts/crosscontract"}},p={},m=[{value:"Transfer NEAR \u24c3",id:"transfer-near-\u24dd",level:2},{value:"Function Call",id:"function-call",level:2},{value:"Create a Sub Account",id:"create-a-sub-account",level:2},{value:"Creating Other Accounts",id:"creating-other-accounts",level:4},{value:"Deploy a Contract",id:"deploy-a-contract",level:2},{value:"Add Keys",id:"add-keys",level:2},{value:"Delete Account",id:"delete-account",level:2}],f={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Smart contracts can perform specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Actions")," such as transferring NEAR, or calling other contracts."),(0,o.kt)("p",null,"An important property of ",(0,o.kt)("inlineCode",{parentName:"p"},"Actions")," is that they can be batched together when acting on the same contract. ",(0,o.kt)("strong",{parentName:"p"},"Batched actions")," act as a unit: they execute in the same ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/concepts/basics/transactions/overview#receipt-receipt"},"receipt"),", and if ",(0,o.kt)("strong",{parentName:"p"},"any fails"),", then they ",(0,o.kt)("strong",{parentName:"p"},"all get reverted"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Actions")," can be batched only when they act on the ",(0,o.kt)("strong",{parentName:"p"},"same contract"),". You can batch calling two methods on a contract,\nbut ",(0,o.kt)("strong",{parentName:"p"},"cannot")," call two methods on different contracts.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"transfer-near-\u24dd"},"Transfer NEAR \u24c3"),(0,o.kt)("p",null,"You can send $NEAR from your contract to any other account on the network. The Gas cost for transferring $NEAR is fixed and is based on the protocol's genesis config. Currently, it costs ",(0,o.kt)("inlineCode",{parentName:"p"},"~0.45 TGas"),"."),(0,o.kt)(c.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NearBindgen, NearPromise, call } from 'near-sdk-js'\nimport { AccountId } from 'near-sdk-js/lib/types'\n\n@NearBindgen({})\nclass Contract{\n  @call({})\n  transfer({ to, amount }: { to: AccountId, amount: bigint }) {\n    NearPromise.new(to).transfer(amount);\n  }\n}\n"))),(0,o.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, AccountId, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\n#[near_bindgen]\nimpl Contract {\n  pub fn transfer(&self, to: AccountId, amount: Balance){\n    Promise::new(to).transfer(amount);\n  }\n}\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The only case where a transfer will fail is if the receiver account does ",(0,o.kt)("strong",{parentName:"p"},"not")," exist.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Remember that your balance is used to cover for the contract's storage. When sending money, make sure you always leave enough to cover for future storage needs.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"function-call"},"Function Call"),(0,o.kt)("p",null,"Your smart contract can call methods in another contract. In the snippet bellow we call a method\nin a deployed ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/quickstart-guide"},"Hello NEAR")," contract, and check if everything went\nright in the callback."),(0,o.kt)(c.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { NearBindgen, near, call, bytes, NearPromise } from \'near-sdk-js\'\nimport { AccountId } from \'near-sdk-js/lib/types\'\n\nconst HELLO_NEAR: AccountId = "hello-nearverse.testnet";\nconst NO_DEPOSIT: bigint = BigInt(0);\nconst CALL_GAS: bigint = BigInt("10000000000000");\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  call_method({}): NearPromise {\n    const args = bytes(JSON.stringify({ message: "howdy" }))\n\n    return NearPromise.new(HELLO_NEAR)\n    .functionCall("set_greeting", args, NO_DEPOSIT, CALL_GAS)\n    .then(\n      NearPromise.new(near.currentAccountId())\n      .functionCall("callback", bytes(JSON.stringify({})), NO_DEPOSIT, CALL_GAS)\n    )\n    .asReturn()\n  }\n\n  @call({privateFunction: true})\n  callback({}): boolean {\n    let result, success;\n  \n    try{ result = near.promiseResult(0); success = true }\n    catch{ result = undefined; success = false }\n  \n    if (success) {\n      near.log(`Success!`)\n      return true\n    } else {\n      near.log("Promise failed...")\n      return false\n    }\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, log, Promise, Gas, PromiseError};\nuse serde_json::json;\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst HELLO_NEAR: &str = "hello-nearverse.testnet";\nconst NO_DEPOSIT: u128 = 0;\nconst CALL_GAS: Gas = Gas(5_000_000_000_000);\n\n#[near_bindgen]\nimpl Contract {\n  pub fn call_method(&self){\n    let args = json!({ "message": "howdy".to_string() })\n              .to_string().into_bytes().to_vec();\n\n    Promise::new(HELLO_NEAR.parse().unwrap())\n    .function_call("set_greeting".to_string(), args, NO_DEPOSIT, CALL_GAS)\n    .then(\n      Promise::new(env::current_account_id())\n      .function_call("callback".to_string(), Vec::new(), NO_DEPOSIT, CALL_GAS)\n    );\n  }\n\n  pub fn callback(&self, #[callback_result] result: Result<(), PromiseError>){\n    if result.is_err(){\n        log!("Something went wrong")\n    }else{\n        log!("Message changed")\n    }\n  }\n}\n')))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The snippet showed above is a low level way of calling other methods. We recommend make calls to other contracts as explained in the ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/contracts/crosscontract"},"Cross-contract Calls section"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"create-a-sub-account"},"Create a Sub Account"),(0,o.kt)("p",null,"Your contract can create direct sub accounts of itself, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"user.near")," can create ",(0,o.kt)("inlineCode",{parentName:"p"},"sub.user.near"),"."),(0,o.kt)("p",null,"Accounts do ",(0,o.kt)("strong",{parentName:"p"},"NOT")," have control over their sub-accounts, since they have their own keys. "),(0,o.kt)("p",null,"Sub-accounts are simply useful for organizing your accounts (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"dao.project.near"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"token.project.near"),")."),(0,o.kt)(c.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({payableFunction:true})\n  create({prefix}:{prefix: String}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n  }\n}\n"))),(0,o.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n                          \nconst MIN_STORAGE: Balance = 1_000_000_000_000_000_000_000; //0.001\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create(&self, prefix: String){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE);\n  }\n}\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"  Notice that in the snippet we are transferring some money to the new account for storage")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"  When you create an account from within a contract, it has no keys by default. If you don't explicitly ",(0,o.kt)("a",{parentName:"p",href:"#add-keys"},"add keys")," to it or ",(0,o.kt)("a",{parentName:"p",href:"#deploy-a-contract"},"deploy a contract")," on creation then it will be ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/concepts/basics/accounts/access-keys#locked-accounts"},"locked"),".")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h4",{id:"creating-other-accounts"},"Creating Other Accounts"),(0,o.kt)("p",null,"Accounts can only create immediate sub-accounts of themselves."),(0,o.kt)("p",null,"If your contract wants to create a ",(0,o.kt)("inlineCode",{parentName:"p"},".mainnet")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".testnet")," account, then it needs to ",(0,o.kt)("a",{parentName:"p",href:"#function-call"},"call"),"\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"create_account")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"near")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," root contracts."),(0,o.kt)(c.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { NearBindgen, near, call, bytes, NearPromise } from \'near-sdk-js\'\n\nconst MIN_STORAGE: bigint = BigInt("1820000000000000000000"); //0.00182\u24c3\nconst CALL_GAS: bigint = BigInt("28000000000000");\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_account({account_id, public_key}:{account_id: String, public_key: String}) {\n    const args = bytes(JSON.stringify({ \n      "new_account_id": account_id,\n      "new_public_key": public_key \n    }))\n\n    NearPromise.new("testnet")\n    .functionCall("create_account", args, MIN_STORAGE, CALL_GAS);\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, Promise, Gas, Balance };\nuse serde_json::json;\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst CALL_GAS: Gas = Gas(28_000_000_000_000);\nconst MIN_STORAGE: Balance = 1_820_000_000_000_000_000_000; //0.00182\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_account(&self, account_id: String, public_key: String){\n    let args = json!({\n                "new_account_id": account_id,\n                "new_public_key": public_key,\n              }).to_string().into_bytes().to_vec();\n\n    // Use "near" to create mainnet accounts\n    Promise::new("testnet".parse().unwrap())\n    .function_call("create_account".to_string(), args, MIN_STORAGE, CALL_GAS);\n  }\n}\n')))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"deploy-a-contract"},"Deploy a Contract"),(0,o.kt)("p",null,"When creating an account you can also batch the action of deploying a contract to it. Note that for this, you will need to pre-load the byte-code you want to deploy in your contract."),(0,o.kt)(c.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst MIN_STORAGE: Balance = 1_100_000_000_000_000_000_000_000; //1.1\u24c3\nconst HELLO_CODE: &[u8] = include_bytes!("./hello.wasm");\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_hello(&self, prefix: String){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .deploy_contract(HELLO_CODE.to_vec());\n  }\n}\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If an account with a contract deployed does ",(0,o.kt)("strong",{parentName:"p"},"not")," have any access keys, this is known as a locked contract. When the account is locked, it cannot sign transactions therefore, actions can ",(0,o.kt)("strong",{parentName:"p"},"only")," be performed from ",(0,o.kt)("strong",{parentName:"p"},"within")," the contract code.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"add-keys"},"Add Keys"),(0,o.kt)("p",null,"When you use actions to create a new account, the created account does not have any ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/concepts/basics/accounts/access-keys"},"access keys"),", meaning that it ",(0,o.kt)("strong",{parentName:"p"},"cannot sign transactions")," (e.g. to update its contract, delete itself, transfer money)."),(0,o.kt)("p",null,"There are two options for adding keys to the account:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"add_access_key"),": adds a key that can only call specific methods on a specified contract."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"add_full_access_key"),": adds a key that has full access to the account.")),(0,o.kt)("br",null),(0,o.kt)(c.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\nimport { PublicKey } from 'near-sdk-js/lib/types'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_hello({prefix, public_key}:{prefix: String, public_key: PublicKey}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n    .addFullAccessKey(public_key)\n  }\n}\n"))),(0,o.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance, PublicKey};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst MIN_STORAGE: Balance = 1_100_000_000_000_000_000_000_000; //1.1\u24c3\nconst HELLO_CODE: &[u8] = include_bytes!("./hello.wasm");\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_hello(&self, prefix: String, public_key: PublicKey){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .deploy_contract(HELLO_CODE.to_vec())\n    .add_full_access_key(public_key);\n  }\n}\n')))),(0,o.kt)("p",null,'Notice that what you actually add is a "public key". Whoever holds its private counterpart, i.e. the private-key, will be able to use the newly access key.'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If an account with a contract deployed does ",(0,o.kt)("strong",{parentName:"p"},"not")," have any access keys, this is known as a locked contract. When the account is locked, it cannot sign transactions therefore, actions can ",(0,o.kt)("strong",{parentName:"p"},"only")," be performed from ",(0,o.kt)("strong",{parentName:"p"},"within")," the contract code.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"delete-account"},"Delete Account"),(0,o.kt)("p",null,"There are two scenarios in which you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"delete_account")," action:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As the ",(0,o.kt)("strong",{parentName:"li"},"last")," action in a chain of batched actions."),(0,o.kt)("li",{parentName:"ol"},"To make your smart contract delete its own account.")),(0,o.kt)(c.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\ud83c\udf10 JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\nimport { AccountId } from 'near-sdk-js/lib/types'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_delete({prefix, beneficiary}:{prefix: String, beneficiary: AccountId}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n    .deleteAccount(beneficiary)\n  }\n\n  @call({})\n  self_delete({beneficiary}:{beneficiary: AccountId}) {\n    NearPromise.new(near.currentAccountId())\n    .deleteAccount(beneficiary)\n  }\n}\n"))),(0,o.kt)(s.Z,{value:"\ud83e\udd80 Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance, AccountId};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n                          \nconst MIN_STORAGE: Balance = 1_000_000_000_000_000_000_000; //0.001\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_delete(&self, prefix: String, beneficiary: AccountId){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .delete_account(beneficiary);\n  }\n\n  pub fn self_delete(beneficiary: AccountId){\n    Promise::new(env::current_account_id())\n    .delete_account(beneficiary);\n  }\n}\n')))),(0,o.kt)("admonition",{title:"Token Loss",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If the beneficiary account does not exist the funds will be ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/concepts/basics/token-loss"},(0,o.kt)("strong",{parentName:"a"},"dispersed among validators")),".")),(0,o.kt)("admonition",{title:"Token Loss",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Do ",(0,o.kt)("strong",{parentName:"p"},"not")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," to try fund a new account. Since the account doesn't exist the tokens will be lost.")))}k.isMDXComponent=!0}}]);