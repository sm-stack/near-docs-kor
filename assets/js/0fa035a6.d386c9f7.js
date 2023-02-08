"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],c={sidebar_position:3},i="Creating Accounts",u={unversionedId:"sdk/rust/promises/create-account",id:"sdk/rust/promises/create-account",title:"Creating Accounts",description:"You might want to create an account from a contract for many reasons. One example:",source:"@site/../docs/sdk/rust/promises/create-account.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/create-account",permalink:"/near-docs-kor/sdk/rust/promises/create-account",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/create-account.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"Sending $NEAR",permalink:"/near-docs-kor/sdk/rust/promises/token-tx"},next:{title:"Deploying Contracts",permalink:"/near-docs-kor/sdk/rust/promises/deploy-contract"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-accounts"},"Creating Accounts"),(0,o.kt)("p",null,"You might want to create an account from a contract for many reasons. One example:\nYou want to ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7mO4yN1zjbs&t=2s"},"progressively onboard")," users, hiding the whole concept of NEAR from them at the beginning, and automatically create accounts for them (these could be sub-accounts of your main contract, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"user123.some-cool-game.near"),")."),(0,o.kt)("p",null,"Since an account with no balance is almost unusable, you probably want to combine this with the token transfer from ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/sdk/rust/promises/token-tx"},"the last page"),". You will also need to give the account an access key. Here's a way do it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'Promise::new("subaccount.example.near".parse().unwrap())\n    .create_account()\n    .add_full_access_key(env::signer_account_pk())\n    .transfer(250_000_000_000_000_000_000_000); // 2.5e23yN, 0.25N\n')),(0,o.kt)("p",null,"In the context of a full contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::{env, near_bindgen, AccountId, Balance, Promise};\n\nconst INITIAL_BALANCE: Balance = 250_000_000_000_000_000_000_000; // 2.5e23yN, 0.25N\n\n#[near_bindgen]\npub struct Contract {}\n\n#[near_bindgen]\nimpl Contract {\n    #[private]\n    pub fn create_subaccount(prefix: AccountId) -> Promise {\n        let subaccount_id = AccountId::new_unchecked(\n          format!("{}.{}", prefix, env::current_account_id())\n        );\n        Promise::new(subaccount_id)\n            .create_account()\n            .add_full_access_key(env::signer_account_pk())\n            .transfer(INITIAL_BALANCE)\n    }\n}\n')),(0,o.kt)("p",null,"Things to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"add_full_access_key")," \u2013\xa0This example passes in the public key of the human or app that signed the original transaction that resulted in this function call (",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/near-sdk/3.1.0/near_sdk/env/fn.signer_account_id.html"},(0,o.kt)("inlineCode",{parentName:"a"},"signer_account_pk")),"). You could also use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/near-sdk/latest/near_sdk/struct.Promise.html#method.add_access_key"},(0,o.kt)("inlineCode",{parentName:"a"},"add_access_key"))," to add a Function Call access key that only permits the account to make calls to a predefined set of contract functions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#[private]")," \u2013 if you have a function that spends your contract's funds, you probably want to protect it in some way. This example does so with a perhaps-too-simple ",(0,o.kt)("a",{parentName:"li",href:"/near-docs-kor/sdk/rust/contract-interface/private-methods"},(0,o.kt)("inlineCode",{parentName:"a"},"#[private]"))," macro."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"INITIAL_BALANCE")," uses the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/near-sdk/3.1.0/near_sdk/type.Balance.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Balance"))," type from near-sdk-rs. Today this is a simple alias for ",(0,o.kt)("inlineCode",{parentName:"li"},"u128"),", but in the future may be expanded to have additional functionality, similar to recent ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-rs/pull/471"},"changes to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Gas")," type"),".")))}m.isMDXComponent=!0}}]);