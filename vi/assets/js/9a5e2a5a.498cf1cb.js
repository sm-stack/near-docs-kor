"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"registering-accounts",title:"Registering Accounts",sidebar_label:"Registering Accounts"},l=void 0,c={unversionedId:"tutorials/fts/registering-accounts",id:"tutorials/fts/registering-accounts",title:"Registering Accounts",description:"In the previous tutorial, you looked at how to mint an initial circulating supply of tokens and how you could log events as per the events standard. You then deployed the contract and saw the FTs in your wallet balance. In this tutorial, you'll learn about the storage management standard and how you can register accounts in your FT contract in order to prevent a malicious party from draining your contract of all its funds.",source:"@site/../docs/3.tutorials/fts/4.storage.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/registering-accounts",permalink:"/near-docs-kor/vi/tutorials/fts/registering-accounts",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/4.storage.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:4,frontMatter:{id:"registering-accounts",title:"Registering Accounts",sidebar_label:"Registering Accounts"},sidebar:"tutorials",previous:{title:"Circulating Supply",permalink:"/near-docs-kor/vi/tutorials/fts/circulating-supply"},next:{title:"Transferring FTs",permalink:"/near-docs-kor/vi/tutorials/fts/transfers"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Storage Management Standard",id:"storage-management-standard",level:3},{value:"Modifications to the Contract",id:"modifications-to-the-contract",level:2},{value:"Implementing Storage Standard",id:"implementing-storage-standard",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous tutorial, you looked at how to mint an initial circulating supply of tokens and how you could log events as per the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event"},"events standard"),". You then deployed the contract and saw the FTs in your wallet balance. In this tutorial, you'll learn about the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/StorageManagement"},"storage management")," standard and how you can register accounts in your FT contract in order to prevent a malicious party from draining your contract of all its funds."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Whenever a new person receives any fungible tokens, they're added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," lookup map on the contract. By doing this, you're adding bytes to the contract. If you made it so any user could receive FTs for free, that system could easily be abused. Users could essentially \"drain\" the contract of all it's funds by sending small amounts of FTs to many accounts. For this reason, you'll want to charge users for the information they're storing and the bytes they're using on the contract. This way of charging users, however, should be standardized so it works across all contracts."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Enter the ",(0,o.kt)("a",{parentName:"em",href:"https://nomicon.io/Standards/StorageManagement"},"storage management")," standard")),(0,o.kt)("img",{width:"65%",src:"/docs/assets/fts/storage-standard-meme.png"}),(0,o.kt)("h3",{id:"storage-management-standard"},"Storage Management Standard"),(0,o.kt)("p",null,"The storage management standard is a set of rules that govern how a contract should charge users for storage. It outlines functions and behaviors such that all contracts implementing the standard are interoperable with each other. The 3 functions you'll need to implement are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"storage_deposit"))," - Allows a user to deposit some amount of storage to the contract. If the user over deposits, they're refunded for the excess $NEAR."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"storage_balance_of"))," - Query for the storage paid by a given user"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"storage_balance_bounds"))," - Query for the minimum and maximum amount of storage needed to interact with a given contract.")),(0,o.kt)("p",null,"With these functions outlined, you could make a reasonable assumption that the flow would be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If a user doesn't exist on the contract, they need to deposit some storage to cover the bytes they use."),(0,o.kt)("li",{parentName:"ol"},"Once the user deposits $NEAR via the ",(0,o.kt)("inlineCode",{parentName:"li"},"storage_deposit")," function, they're free to interact with the contract.")),(0,o.kt)("p",null,"You might be asking yourself what the deposit amount should be. There are two ways you can go about getting this information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dynamically calculate the bytes every individual user would take up in the ",(0,o.kt)("inlineCode",{parentName:"li"},"storage_deposit")," function by inserting them into ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts")," map, measuring the bytes, and then removing them from the map after."),(0,o.kt)("li",{parentName:"ul"},"Calculate the bytes for inserting a largest possible account ID once upon initializing the contract and simply charge every user the same amount.")),(0,o.kt)("p",null,"For the purpose of simplicity, we'll assume the second method."),(0,o.kt)("h2",{id:"modifications-to-the-contract"},"Modifications to the Contract"),(0,o.kt)("p",null,'This "bytes for longest account ID" should be stored in the contract\'s state such that we can pull the value during the ',(0,o.kt)("inlineCode",{parentName:"p"},"storage_deposit")," function and ensure the user attaches enough $NEAR. Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," file and add the following code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," struct. If you're just joining us now, you can find the skeleton code for this tutorial in the ",(0,o.kt)("inlineCode",{parentName:"p"},"3.initial-supply")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/lib.rs#L21-L35\n")),(0,o.kt)("p",null,"You'll now need a way to calculate this amount which will be done in the initialization function. Move to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/internal.rs")," file and add the following private function ",(0,o.kt)("inlineCode",{parentName:"p"},"measure_bytes_for_longest_account_id")," which will add the longest possible account ID and remove it while measuring how many bytes the operation took. It will then set the ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes_for_longest_account_id")," field to the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L36-L45\n")),(0,o.kt)("p",null,"You'll also want to create a function for \"registering\" an account after they've paid for storage. To do this, you can simply insert them into the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts"),' map with a balance of 0. This way, you know that any account currently in the map is considered "registered" and have paid for storage. Any account that attempts to receive FTs must be in the map with a balance of 0 or greater. If they aren\'t, the contract should throw.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L29-L34\n")),(0,o.kt)("p",null,"Let's also create a function to panic with a custom message if the user doesn't exist yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L5-L14\n")),(0,o.kt)("p",null,"Now when you call the ",(0,o.kt)("inlineCode",{parentName:"p"},"internal_deposit")," function, rather than defaulting the user's balance to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," if they don't exist yet via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let balance = self.accounts.get(&account_id).unwrap_or(0);\n")),(0,o.kt)("p",null,"You can replace it with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L16-L27\n")),(0,o.kt)("p",null,"With this finished, your ",(0,o.kt)("inlineCode",{parentName:"p"},"internal.rs")," should look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use near_sdk::{require};\n\nuse crate::*;\n\nimpl Contract {\n    pub(crate) fn internal_unwrap_balance_of(&self, account_id: &AccountId) -> Balance {\n      ...\n    }\n\n    pub(crate) fn internal_deposit(&mut self, account_id: &AccountId, amount: Balance) {\n      ...\n    }\n\n    pub(crate) fn internal_register_account(&mut self, account_id: &AccountId) {\n      ...\n    }\n\n    pub(crate) fn measure_bytes_for_longest_account_id(&mut self) {\n      ...\n    }\n}\n")),(0,o.kt)("p",null,"There's only one problem you need to solve with this. When initializing the contract, the implementation will throw. This is because you call ",(0,o.kt)("inlineCode",{parentName:"p"},"internal_deposit")," and the owner doesn't have a balance yet. To fix this, let's modify the initialization function to register the owner before depositing the FTs in their account. In addition, you should measure the bytes for the registration in this function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/lib.rs#L66-L106\n")),(0,o.kt)("h3",{id:"implementing-storage-standard"},"Implementing Storage Standard"),(0,o.kt)("p",null,"With this finished, you're now ready to implement the storage management standard. If you remember, the three functions you'll be implementing, we can break each down into their core functionality and decide how to proceed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"storage_balance_bounds"))," - Query for the minimum and maximum amount of storage needed to interact with a given contract.")),(0,o.kt)("p",null,"Since you're creating a fungible token contract and the storage price won't change (unless the $NEAR cost per byte changes), the minimum and maximum storage costs should be the same. These values should be equal to the amount of bytes for the longest account ID you calculated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"measure_bytes_for_longest_account_id")," function multiplied by the current $NEAR price per byte. Switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/storage.rs")," file to get started."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs#L119-L129\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"storage_balance_of"))," - Query for the storage paid by a given user.")),(0,o.kt)("p",null,"As we mentioned earlier, you can tell if somebody has paid for storage by checking if they're in the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," map. If they are, you know that they've paid the amount returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"storage_balance_bounds"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs#L131-L138\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"storage_deposit"))," - Allows a user to deposit some amount of storage to the contract. If the user over deposits, they're refunded for the excess $NEAR.")),(0,o.kt)("p",null,"In order to implement this logic, you first need to get the attached deposit. You'll also need to ensure that the user hasn't already paid for storage (i.e. they're in the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," map). If they are, simply refund the caller for the $NEAR they attached to the call."),(0,o.kt)("p",null,"If the user isn't registered yet, you should get the storage cost by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"storage_balance_bounds")," and make sure they've attached enough to cover that amount. Once this if finished, you can register them and refund any excess $NEAR."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs#L78-L117\n")),(0,o.kt)("p",null,"With this finished, you're ready to build and deploy the contract!"),(0,o.kt)("h2",{id:"redeploying-contract"},"Deploying the contract"),(0,o.kt)("p",null,"Since the current contract you have is already initialized, let's create a sub-account and deploy to again."),(0,o.kt)("h3",{id:"creating-a-sub-account"},"Creating a sub-account"),(0,o.kt)("p",null,"Run the following command to create a sub-account ",(0,o.kt)("inlineCode",{parentName:"p"},"storage")," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near create-account storage.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 25\n")),(0,o.kt)("p",null,"Next, you'll want to export an environment variable for ease of development:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export STORAGE_FT_CONTRACT_ID=storage.$FT_CONTRACT_ID\n")),(0,o.kt)("p",null,"Using the build script, build the deploy the contract as you did in the previous tutorials:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd 1.skeleton && ./build.sh && cd .. && near deploy --wasmFile out/contract.wasm --accountId $STORAGE_FT_CONTRACT_ID\n")),(0,o.kt)("h3",{id:"initialization"},"Initialization"),(0,o.kt)("p",null,"Now that the contract is deployed, it's time to initialize it and mint the total supply. Let's once again create an initial supply of 1000 ",(0,o.kt)("inlineCode",{parentName:"p"},"gtNEAR"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call $STORAGE_FT_CONTRACT_ID new_default_meta \'{"owner_id": "\'$STORAGE_FT_CONTRACT_ID\'", "total_supply": "1000000000000000000000000000"}\' --accountId $STORAGE_FT_CONTRACT_ID\n')),(0,o.kt)("p",null,"If you now query for the storage paid by the owner, you should see that they're registered!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $STORAGE_FT_CONTRACT_ID storage_balance_of '{\"account_id\": \"'$STORAGE_FT_CONTRACT_ID'\"}'\n")),(0,o.kt)("p",null,"This should return a struct. The Total amount is roughly ",(0,o.kt)("inlineCode",{parentName:"p"},"0.00125 $NEAR")," to register and the user has 0 available $NEAR since it's all being used up to pay for registration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{ total: '1250000000000000000000', available: '0' }\n")),(0,o.kt)("p",null,"You can also query for the storage balance required to interact with the contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view $STORAGE_FT_CONTRACT_ID storage_balance_bounds\n")),(0,o.kt)("p",null,"You'll see that it returns the same amount as the ",(0,o.kt)("inlineCode",{parentName:"p"},"storage_balance_of")," query above with the min equal to the max:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{ min: '1250000000000000000000', max: '1250000000000000000000' }\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Today you went through and created the logic for registering users on the contract. This logic adheres to the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/StorageManagement"},"storage management standard")," and is customized to meet our needs when writing a FT contract. You then built, deployed, and tested those changes. In the ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tutorials/fts/transfers"},"next tutorial"),", you'll look at the basics of how to transfer FTs to other users."))}h.isMDXComponent=!0}}]);