"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"contract-size",title:"Reducing Contract Size"},l="Reducing a contract's size",p={unversionedId:"sdk/rust/contract-size",id:"sdk/rust/contract-size",title:"Reducing Contract Size",description:"Advice & examples",source:"@site/../docs/sdk/rust/reduce-size.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/contract-size",permalink:"/sdk/rust/contract-size",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/reduce-size.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"contract-size",title:"Reducing Contract Size"},sidebar:"sdk",previous:{title:"Best Practices",permalink:"/sdk/rust/best-practices"}},c={},m=[{value:"Advice &amp; examples",id:"advice--examples",level:2},{value:"Small wins",id:"small-wins",level:2},{value:"Using flags",id:"using-flags",level:3},{value:"Removing <code>rlib</code> from the manifest",id:"removing-rlib-from-the-manifest",level:3},{value:"Lower-level approach",id:"lower-level-approach",level:2}],d={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reducing-a-contracts-size"},"Reducing a contract's size"),(0,o.kt)("h2",{id:"advice--examples"},"Advice & examples"),(0,o.kt)("p",null,"This page is made for developers familiar with lower-level concepts who wish to reduce their contract size significantly, perhaps at the expense of code readability."),(0,o.kt)("p",null,"Some common scenarios where this approach may be helpful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"contracts intended to be tied to one's account management"),(0,o.kt)("li",{parentName:"ul"},"contracts deployed using a factory"),(0,o.kt)("li",{parentName:"ul"},"future advancements similar to the EVM on NEAR")),(0,o.kt)("p",null,"There have been a few items that may add unwanted bytes to a contract's size when compiled. Some of these may be more easily swapped for other approaches while others require more internal knowledge about system calls."),(0,o.kt)("h2",{id:"small-wins"},"Small wins"),(0,o.kt)("h3",{id:"using-flags"},"Using flags"),(0,o.kt)("p",null,"When compiling a contract make sure to pass flag ",(0,o.kt)("inlineCode",{parentName:"p"},"-C link-arg=-s")," to the rust compiler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release\n")),(0,o.kt)("p",null,"Here is the parameters we use for the most examples in ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[profile.release]\ncodegen-units = 1\nopt-level = "s"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n')),(0,o.kt)("p",null,"You may want to experiment with using ",(0,o.kt)("inlineCode",{parentName:"p"},'opt-level = "z"')," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},'opt-level = "s"')," to see if generates a smaller binary. See more details on this in ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level"},"The Cargo Book Profiles section"),". You may also reference this ",(0,o.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/book/reference/code-size.html#tell-llvm-to-optimize-for-size-instead-of-speed"},"Shrinking .wasm Size")," resource."),(0,o.kt)("h3",{id:"removing-rlib-from-the-manifest"},"Removing ",(0,o.kt)("inlineCode",{parentName:"h3"},"rlib")," from the manifest"),(0,o.kt)("p",null,"Ensure that your manifest (",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),") doesn't contain ",(0,o.kt)("inlineCode",{parentName:"p"},"rlib")," unless it needs to. Some NEAR examples have included this:"),(0,o.kt)("admonition",{title:"Adds unnecessary bloat",type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[lib]\ncrate-type = ["cdylib", "rlib"]\n'))),(0,o.kt)("p",null,"  when it could be:"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[lib]\ncrate-type = ["cdylib"]\n'))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When using the Rust SDK, you may override the default JSON serialization to use ",(0,o.kt)("a",{parentName:"p",href:"https://borsh.io"},"Borsh")," instead. ",(0,o.kt)("a",{parentName:"p",href:"/sdk/rust/contract-interface/serialization-interface#overriding-serialization-protocol-default"},"See this page")," for more information and an example.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When using assertions or guards, avoid using the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," macros like ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert.html"},(0,o.kt)("inlineCode",{parentName:"a"},"assert!")),", ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert_eq.html"},(0,o.kt)("inlineCode",{parentName:"a"},"assert_eq!")),", or ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/macro.assert_ne.html"},(0,o.kt)("inlineCode",{parentName:"a"},"assert_ne!"))," as these may add bloat for information regarding the line number of the error. There are similar issues with ",(0,o.kt)("inlineCode",{parentName:"p"},"unwrap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expect"),", and Rust's ",(0,o.kt)("inlineCode",{parentName:"p"},"panic!()")," macro."),(0,o.kt)("p",{parentName:"li"},"Example of a standard assertion:"),(0,o.kt)("admonition",{parentName:"li",title:"Adds unnecessary bloat",type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(contract_owner, predecessor_account, "ERR_NOT_OWNER");\n'))),(0,o.kt)("p",{parentName:"li"},"when it could be:"),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'if contract_owner != predecessor_account {\n  env::panic(b"ERR_NOT_OWNER");\n}\n'))),(0,o.kt)("p",{parentName:"li"},"Example of removing ",(0,o.kt)("inlineCode",{parentName:"p"},"expect"),":"),(0,o.kt)("admonition",{parentName:"li",title:"Adds unnecessary bloat",type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let owner_id = self.owner_by_id.get(&token_id).expect("Token not found");\n'))),(0,o.kt)("p",{parentName:"li"},"when it could be:"),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'fn expect_token_found<T>(option: Option<T>) -> T {\n  option.unwrap_or_else(|| env::panic_str("Token not found"))\n}\nlet owner_id = expect_token_found(self.owner_by_id.get(&token_id));  \n'))),(0,o.kt)("p",{parentName:"li"},"Example of changing standard ",(0,o.kt)("inlineCode",{parentName:"p"},"panic!()"),":"),(0,o.kt)("admonition",{parentName:"li",title:"Adds unnecessary bloat",type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'panic!("ERR_MSG_HERE"); \n'))),(0,o.kt)("p",{parentName:"li"},"when it could be:"),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'env::panic_str("ERR_MSG_HERE");  \n'))))),(0,o.kt)("h2",{id:"lower-level-approach"},"Lower-level approach"),(0,o.kt)("p",null,"For a ",(0,o.kt)("inlineCode",{parentName:"p"},"no_std")," approach to minimal contracts, observe the following examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/nearcore/tree/1e7c6613f65c23f87adf2c92e3d877f4ffe666ea/runtime/near-test-contracts/tiny-contract-rs"},"Tiny contract")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ilblackdragon/near-eth-gateway/blob/master/proxy/src/lib.rs"},"NEAR ETH Gateway")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/Hy4VBSCqnsE"},"This YouTube video")," where Eugene demonstrates a fungible token in ",(0,o.kt)("inlineCode",{parentName:"li"},"no_std")," mode. The code for this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/core-contracts/pull/88"},"example lives here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/austinabell/nesdie/tree/main/examples"},"Examples using a project called ",(0,o.kt)("inlineCode",{parentName:"a"},"nesdie")),"."),(0,o.kt)("li",{parentName:"ul"},"Note that Aurora has found success using ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/rjson"},"rjson")," as a lightweight JSON serialization crate. It has a smaller footprint than ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/serde"},"serde")," which is currently packaged with the Rust SDK. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/aurora-is-near/aurora-engine/blob/65a1d11fcd16192cc1bda886c62005c603189a24/src/json.rs#L254"},"this example of rjson")," in an Aurora repository, although implementation details will have to be gleaned by the reader and won't be expanded upon here. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/austinabell/nesdie/blob/bb6beb77e32cd54077ac54bf028f262a9dfb6ad0/examples/multisig/src/utils/json/vector.rs#L26-L30"},"This nesdie example")," also uses the ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/miniserde"},"miniserde crate"),", which is another option to consider for folks who choose to avoid using the Rust SDK.")),(0,o.kt)("admonition",{title:"Information on system calls",type:"note"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see what's available from ",(0,o.kt)("code",null,"sys.rs")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/environment/sys.rs\n")))))}u.isMDXComponent=!0}}]);