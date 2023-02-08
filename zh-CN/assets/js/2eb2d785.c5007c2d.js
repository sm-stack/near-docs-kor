"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8336],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>k});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),l=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},v=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),v=l(n),k=i,f=v["".concat(o,".").concat(k)]||v[k]||u[k]||a;return n?t.createElement(f,d(d({ref:r},s),{},{components:n})):t.createElement(f,d({ref:r},s))}));function k(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,d=new Array(a);d[0]=v;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,d[1]=p;for(var l=2;l<a;l++)d[l]=n[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},90536:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var t=n(87462),i=n(63366),a=(n(67294),n(3905)),d=["components"],p={id:"providers_provider.Chunk",title:"Interface: Chunk",sidebar_label:"Chunk",custom_edit_url:null},o=void 0,l={unversionedId:"interfaces/providers_provider.Chunk",id:"version-near-api-js@1.1.0/interfaces/providers_provider.Chunk",title:"Interface: Chunk",description:"providers/provider.Chunk",source:"@site/near-api-js_versioned_docs/version-near-api-js@1.1.0/interfaces/providers_provider.Chunk.md",sourceDirName:"interfaces",slug:"/interfaces/providers_provider.Chunk",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.Chunk",draft:!1,editUrl:null,tags:[],version:"near-api-js@1.1.0",frontMatter:{id:"providers_provider.Chunk",title:"Interface: Chunk",sidebar_label:"Chunk",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ChangeResult",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ChangeResult"},next:{title:"ChunkHeader",permalink:"/near-docs-kor/zh-CN/tools/near-api-js/reference/interfaces/providers_provider.ChunkHeader"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"balance_burnt",id:"balance_burnt",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"chunk_hash",id:"chunk_hash",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"encoded_length",id:"encoded_length",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"encoded_merkle_root",id:"encoded_merkle_root",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"gas_limit",id:"gas_limit",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"gas_used",id:"gas_used",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"height_created",id:"height_created",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"height_included",id:"height_included",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"outcome_root",id:"outcome_root",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"outgoing_receipts_root",id:"outgoing_receipts_root",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"prev_block_hash",id:"prev_block_hash",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"prev_state_root",id:"prev_state_root",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"rent_paid",id:"rent_paid",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"shard_id",id:"shard_id",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"signature",id:"signature",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"tx_root",id:"tx_root",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"validator_proposals",id:"validator_proposals",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"validator_reward",id:"validator_reward",level:3},{value:"Defined in",id:"defined-in-17",level:4}],v={toc:u};function k(e){var r=e.components,n=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,t.Z)({},v,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/near-docs-kor/zh-CN/tools/near-api-js/reference/modules/providers_provider"},"providers/provider"),".Chunk"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"balance_burnt"},"balance","_","burnt"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"balance","_","burnt"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L175"},"providers/provider.ts:175")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chunk_hash"},"chunk","_","hash"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"chunk","_","hash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L162"},"providers/provider.ts:162")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"encoded_length"},"encoded","_","length"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"encoded","_","length"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L167"},"providers/provider.ts:167")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"encoded_merkle_root"},"encoded","_","merkle","_","root"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"encoded","_","merkle","_","root"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L166"},"providers/provider.ts:166")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gas_limit"},"gas","_","limit"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"gas","_","limit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L172"},"providers/provider.ts:172")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gas_used"},"gas","_","used"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"gas","_","used"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L171"},"providers/provider.ts:171")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"height_created"},"height","_","created"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"height","_","created"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L168"},"providers/provider.ts:168")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"height_included"},"height","_","included"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"height","_","included"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L169"},"providers/provider.ts:169")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"outcome_root"},"outcome","_","root"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"outcome","_","root"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L164"},"providers/provider.ts:164")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"outgoing_receipts_root"},"outgoing","_","receipts","_","root"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"outgoing","_","receipts","_","root"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L176"},"providers/provider.ts:176")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"prev_block_hash"},"prev","_","block","_","hash"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"prev","_","block","_","hash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L163"},"providers/provider.ts:163")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"prev_state_root"},"prev","_","state","_","root"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"prev","_","state","_","root"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L165"},"providers/provider.ts:165")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rent_paid"},"rent","_","paid"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"rent","_","paid"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L173"},"providers/provider.ts:173")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"shard_id"},"shard","_","id"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"shard","_","id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L170"},"providers/provider.ts:170")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signature"},"signature"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"signature"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L179"},"providers/provider.ts:179")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tx_root"},"tx","_","root"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"tx","_","root"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L177"},"providers/provider.ts:177")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"validator_proposals"},"validator","_","proposals"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"validator","_","proposals"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L178"},"providers/provider.ts:178")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"validator_reward"},"validator","_","reward"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"validator","_","reward"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/ef6d7fbf/packages/near-api-js/src/providers/provider.ts#L174"},"providers/provider.ts:174")))}k.isMDXComponent=!0}}]);