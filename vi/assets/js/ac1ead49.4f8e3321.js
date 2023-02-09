"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(76775),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,c=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),k=h[0],v=h[1],g=f({queryString:s,groupId:c}),N=g[0],b=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=y[0],w=y[1],F=function(){var e=null!=N?N:T;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){F&&v(F)}),[F]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),b(e),w(e)}),[b,w,p]),tabValues:p}}var k=n(72389);const v="tabList__CuJ",g="tabItem_LNqP";function N(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function T(e){var t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},82025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(74866),l=n(85162),s=["components"],c={id:"nft",title:"Non Fungible Tokens"},u=void 0,p={unversionedId:"develop/relevant-contracts/nft",id:"develop/relevant-contracts/nft",title:"Non Fungible Tokens",description:"In contrast with fungible tokens, non-fungible tokens (NFT) are unitary and therefore unique. This makes NFTs ideal to represent ownership of assets such as a piece of digital content, or a ticket for an event.",source:"@site/../docs/2.develop/relevant-contracts/nft.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/nft",permalink:"/near-docs-kor/vi/develop/relevant-contracts/nft",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/nft.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"nft",title:"Non Fungible Tokens"},sidebar:"tutorials",previous:{title:"Minting FTs (Simple)",permalink:"/near-docs-kor/vi/tutorials/fts/simple-fts"},next:{title:"Minting NFTs",permalink:"/near-docs-kor/vi/tutorials/nfts/minting-nfts"}},d={},m=[{value:"Minting an NFT",id:"minting-an-nft",level:2},{value:"Minting Collections",id:"minting-collections",level:3},{value:"Royalties",id:"royalties",level:3},{value:"Querying Metadata",id:"querying-metadata",level:2},{value:"Approving Users",id:"approving-users",level:2},{value:"Transferring an NFT",id:"transferring-an-nft",level:2},{value:"Attaching NFTs to a Call",id:"attaching-nfts-to-a-call",level:2},{value:"How Does it Work?",id:"how-does-it-work",level:3},{value:"The nft_on_transfer method",id:"the-nft_on_transfer-method",level:4},{value:"Events",id:"events",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In contrast with ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/develop/relevant-contracts/ft"},"fungible tokens"),", non-fungible tokens (NFT) are unitary and therefore unique. This makes NFTs ideal to represent ownership of assets such as a piece of digital content, or a ticket for an event."),(0,o.kt)("p",null,"As with fungible tokens, NFTs are ",(0,o.kt)("strong",{parentName:"p"},"not stored")," in the user's wallet, instead, each NFT lives in a ",(0,o.kt)("strong",{parentName:"p"},"NFT contract"),". The NFT contract works as a bookkeeper, this is: it is in charge of handling the creation, storage and transfers of NFTs."),(0,o.kt)("p",null,"In order for a contract to be considered a NFT-contract it has to follow the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken"},(0,o.kt)("strong",{parentName:"a"},"NEP-171 and NEP-177 standards")),". The ",(0,o.kt)("strong",{parentName:"p"},"NEP-171")," & ",(0,o.kt)("strong",{parentName:"p"},"NEP-177")," standards explain the ",(0,o.kt)("strong",{parentName:"p"},"minimum interface")," required to be implemented, as well as the expected functionality."),(0,o.kt)("admonition",{title:"Reference Implementation",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We provide a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/NFT"},"reference implementation")," ready to be deployed and use.")),(0,o.kt)("admonition",{title:"NFT & Marketplaces",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Be mindful of not confusing an NFT with an NFT-marketplace. NFT simply store information (metadata), while NFT-marketplaces are contracts where NFT can be listed and exchanged for a price.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"minting-an-nft"},"Minting an NFT"),(0,o.kt)("p",null,"In order to create a new NFT (a.k.a. mint it) you need first to deploy an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/NFT"},"NFT contract")," and initialize it with an ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),". Currently, the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," simply sets an internal variable (",(0,o.kt)("inlineCode",{parentName:"p"},"Contract.owner_id"),"), meaning it is ",(0,o.kt)("strong",{parentName:"p"},"NOT the default owner")," of all minted NFTs."),(0,o.kt)("p",null,"Once deployed and initialized, you can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_mint")," method. You will need to pass as parameters a unique id, an owner, the token's metadata, and (optionally) royalties. The metadata will include information such as the title, a description, and an URL to associated media."),(0,o.kt)(i.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# 1. Deploy the contract in a testnet account\nnear dev-deploy --wasmFile non_fungible_token.wasm\n\n# 2. Initialize NFT contract\n\n# 3. Mint an NFT\nnear call <nft-contract> nft_mint \'{"token_id": "<token-unique-id>", "receiver_id": "<nft-owner-account>", "token_metadata": {"title": "<title>", "description": "<description>", "media": "<url>" }, "royalties": {"<account>" : <percentage>, "<account>" : <percentage>}}\' --accountId <your-account>\n\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata"},"metadata standard")," for the full list of ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenMetadata")," parameters.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Implement ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event"},"events")," to be able to ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/realtime"},"track NFT mints in real time"),".")),(0,o.kt)("h3",{id:"minting-collections"},"Minting Collections"),(0,o.kt)("p",null,"Many times people want to create multiple 100 copies of an NFT (this is called a collection). In such cases, what you actually need to do is to mint 100 different NFTs with the same metadata (but different ",(0,o.kt)("inlineCode",{parentName:"p"},"token-id"),")."),(0,o.kt)("h3",{id:"royalties"},"Royalties"),(0,o.kt)("p",null,"You might have noticed that one of the parameters is a structure called royalties. Royalties enable you to create a list of users that should get paid when the token is sell in a marketplace. For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"anna")," has ",(0,o.kt)("inlineCode",{parentName:"p"},"5%")," of royalties, each time the NFT is sell, ",(0,o.kt)("inlineCode",{parentName:"p"},"anna")," should get a 5% of the selling price."),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"querying-metadata"},"Querying Metadata"),(0,o.kt)("p",null,"You can query the NFT's metadata by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_metadata"),"."),(0,o.kt)(i.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"near view <nft-contract> nft_metadata\n")))),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"approving-users"},"Approving Users"),(0,o.kt)("p",null,"You can authorize other users to transfer an NFT you own. This is useful, for example, to enable listing your NFT in a marketplace. In such scenario, you ",(0,o.kt)("strong",{parentName:"p"},"trust")," that the marketplace will only transfer the NFT upon receiving a certain amount of money in exchange."),(0,o.kt)(i.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call <nft-contract> nft_approve \'{\n "token_id": "<token-unique-id>",\n "account_id": "<authorized-account>",\n "msg": "<json-structure>"\n}\' --accountId <your-account> --depositYocto 1\n\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," parameter is included, then a cross-contract call will be made to ",(0,o.kt)("inlineCode",{parentName:"p"},"<authorized_account>.nft_on_approve(msg)"),". Which in turn will make a callback to ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_resolve_transfer")," in your NFT contract.")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"transferring-an-nft"},"Transferring an NFT"),(0,o.kt)("p",null,"Transferring an NFT can happen in two scenarios: (1) you ask to transfer an NFT, and (2) an authorized account asks to transfer the NFT. In both cases, it is necessary to invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_transfer")," method, indicating the token id, the receiver, and an (optionally) an ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement"},"approval_id"),"."),(0,o.kt)(i.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call <nft-contract> nft_transfer \'{"receiver_id": "<receiver-account>", "token_id": "<token-unique-id>"}\' --accountId <your-account> --depositYocto 1\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Implement ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event"},"events")," to be able to ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/realtime"},"track NFT transfers in real time"),".")),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"attaching-nfts-to-a-call"},"Attaching NFTs to a Call"),(0,o.kt)("p",null,"Natively, only NEAR tokens (\u24c3) can be attached to a method calls. However, the NFT standard enables to attach a non-fungible tokens in a call by using the NFT-contract as intermediary. This means that, instead of you attaching tokens directly to the call, you ask the NFT-contract to do both a transfer and a method call in your name."),(0,o.kt)(i.Z,{className:"language-tabs",groupId:"code-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"NEAR CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'near call <nft-contract> nft_transfer_call \'{"receiver_id": "<receiver-contract>", "token_id": "<token_id>", "msg": "<a-string-message>"}\' --accountId <your-account> --depositYocto 1\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Optionally, a ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core#nft-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"memo")," parameter")," can be passed to provide more information to your contract.")),(0,o.kt)("h3",{id:"how-does-it-work"},"How Does it Work?"),(0,o.kt)("p",null,"Assume you want to attach an NFT (\ud83c\udfab) to a call on the receiver contract. The workflow is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You call ",(0,o.kt)("inlineCode",{parentName:"li"},"nft_transfer_call")," in the NFT-contract passing: the receiver, a message, and the token-id of \ud83c\udfab."),(0,o.kt)("li",{parentName:"ol"},"The NFT contract transfers the NFT \ud83c\udfab to the receiver."),(0,o.kt)("li",{parentName:"ol"},"The NFT contract calls ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"receiver.nft_on_transfer(sender, token-owner, token-id, msg)")),"."),(0,o.kt)("li",{parentName:"ol"},"The NFT contract handles errors in the ",(0,o.kt)("inlineCode",{parentName:"li"},"nft_resolve_transfer")," callback."),(0,o.kt)("li",{parentName:"ol"},"The NFT contract returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," if it succeeded.")),(0,o.kt)("h4",{id:"the-nft_on_transfer-method"},"The nft_on_transfer method"),(0,o.kt)("p",null,"From the workflow above it follows that the receiver we want to call needs to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," method. When executed, such method will know:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Who is sending the NFT, since it is a parameter"),(0,o.kt)("li",{parentName:"ul"},"Who is the current owner, since it is a parameter"),(0,o.kt)("li",{parentName:"ul"},"Which NFT was transferred, since it is a parameter."),(0,o.kt)("li",{parentName:"ul"},"If there are any parameters encoded as a message")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," ",(0,o.kt)("strong",{parentName:"p"},"must return true")," if the NFT has to be ",(0,o.kt)("strong",{parentName:"p"},"returned to the sender"),"."),(0,o.kt)("hr",{class:"subsection"}),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"You can track real time events (such as transfers) by implementing the ",(0,o.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event"},"NFT Event Standards"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"Events")," are simple to use, because they are just login messages formatted in a standardize way. Since these logged messages are public, a service\ncan then be built to ",(0,o.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tools/realtime"},"track them in real time"),"."))}h.isMDXComponent=!0}}]);