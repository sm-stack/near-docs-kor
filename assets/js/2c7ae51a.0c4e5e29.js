"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9838],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={sidebar_position:2,sidebar_label:"Set up Rust and a contract skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready"},l="Getting started",u={unversionedId:"tutorials/crosswords/basics/set-up-skeleton",id:"tutorials/crosswords/basics/set-up-skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready",description:"In this tutorial we'll get a testnet account, use NEAR CLI to add a key to our computer's file system, and set up the basic skeleton of a Rust smart contract.",source:"@site/../docs/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/set-up-skeleton",permalink:"/tutorials/crosswords/basics/set-up-skeleton",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Set up Rust and a contract skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready"},sidebar:"tutorials",previous:{title:"Crossword Game Overview",permalink:"/tutorials/crosswords/basics/overview"},next:{title:"Add basic code, create a subaccount, and call methods",permalink:"/tutorials/crosswords/basics/add-functions-call"}},c={},p=[{value:"Getting a testnet account",id:"getting-a-testnet-account",level:2},{value:"Creating a new key on your computer",id:"creating-a-new-key-on-your-computer",level:2},{value:"Setting up Rust",id:"setting-up-rust",level:2},{value:"Install Rust using <code>rustup</code>",id:"install-rust-using-rustup",level:3},{value:"Add Wasm toolchain",id:"add-wasm-toolchain",level:3},{value:"Start writing Rust!",id:"start-writing-rust",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"In this tutorial we'll get a testnet account, use NEAR CLI to add a key to our computer's file system, and set up the basic skeleton of a Rust smart contract."),(0,o.kt)("h2",{id:"getting-a-testnet-account"},"Getting a testnet account"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org"},"NEAR Wallet for testnet")," and register for a free account. For the purposes of this tutorial, you may skip the option to add two-factor authentication if you wish."),(0,o.kt)("admonition",{title:"What just happened?",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you created your NEAR testnet account, a private key was created and placed into your browser's local storage. You may inspect this using developer tools and see it. ")),(0,o.kt)("h2",{id:"creating-a-new-key-on-your-computer"},"Creating a new key on your computer"),(0,o.kt)("p",null,"We'll want to use a command-line interface (CLI) tool to deploy a contract, but at the moment the private key only exists in the browser. Next we'll ",(0,o.kt)("em",{parentName:"p"},"add a new key")," to the testnet account and have this stored locally on our computer as a JSON file. (Yes, you can have multiple keys on your NEAR account, which is quite powerful!)"),(0,o.kt)("p",null,"Let's install NEAR CLI. (Please ensure you ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"have NodeJS")," > 12.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g near-cli\n")),(0,o.kt)("p",null,"You may now run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"near\n")),(0,o.kt)("p",null,"to see various commands, which are covered ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/near-cli"},"in detail here"),"."),(0,o.kt)("p",null,'We\'ll start by "logging in" with this command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"near login\n")),(0,o.kt)("p",null,"This will bring you to NEAR Wallet again where you can confirm the creation of a ",(0,o.kt)("strong",{parentName:"p"},"full-access")," key. We'll get to full-access and function-call access keys later, just know that for powerful actions like \"deploy\" we'll need a full-access key. Follow the instructions from the login command to create a key on your hard drive. This will be located in your operating system's home directory in a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},".near-credentials"),"."),(0,o.kt)("admonition",{title:"How was a key added?",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you typed ",(0,o.kt)("inlineCode",{parentName:"p"},"near login"),', NEAR CLI generated a key pair: a private and public key. It kept the private key tucked away in a JSON file and sent the public key as a URL parameter to NEAR Wallet. The URL is long and contains other info instructing NEAR Wallet to "add a full access key" to the account. Our browser\'s local storage had a key (created when the account was made) that is able to do several things, including adding another key. It took the public key from the URL parameter, used it as an argument, and voil\xe0: the testnet account has an additional key!')),(0,o.kt)("p",null,"You can see the keys associated with your account by running following command, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"friend.testnet")," with your account name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"near keys friend.testnet\n")),(0,o.kt)("h2",{id:"setting-up-rust"},"Setting up Rust"),(0,o.kt)("p",null,"You may have found the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/book"},"online Rust Book"),", which is a great resource for getting started with Rust. However, there are key items that are different when it comes to blockchain development. Namely, that smart contracts are ",(0,o.kt)("a",{parentName:"p",href:"https://learning-rust.github.io/docs/cargo-crates-and-basic-project-structure/#crate"},"technically libraries and not binaries"),", but for now just know that we won't be using some commands commonly found in the Rust Book."),(0,o.kt)("admonition",{title:"We won't be using",type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"cargo run\n")),(0,o.kt)("p",{parentName:"admonition"},"during smart contract development.")),(0,o.kt)("p",null,"Instead, we'll be iterating on our smart contract by building it and running tests."),(0,o.kt)("h3",{id:"install-rust-using-rustup"},"Install Rust using ",(0,o.kt)("inlineCode",{parentName:"h3"},"rustup")),(0,o.kt)("p",null,"Please see the directions from the ",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs/#"},"Rustup site"),". For OS X or Unix, you may use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("p",null,"(Taken from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust installation guide"),")"),(0,o.kt)("h3",{id:"add-wasm-toolchain"},"Add Wasm toolchain"),(0,o.kt)("p",null,"Smart contracts compile to WebAssembly (Wasm) so we'll add the toolchain for Rust."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rustup target add wasm32-unknown-unknown\n")),(0,o.kt)("p",null,"(More info on ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/edition-guide/rust-2018/platform-and-target-support/webassembly-support.html"},"targets and this toolchain here"),".)"),(0,o.kt)("h2",{id:"start-writing-rust"},"Start writing Rust!"),(0,o.kt)("p",null,"There's a basic repository that's helpful to clone or download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/boilerplate-template-rs"},"located here"),". "),(0,o.kt)("p",null,"The first thing we'll do is modify the manifest file at ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'[package]\n-  name = "rust-template"\n+  name = "my-crossword"\nversion = "0.1.0"\n- authors = ["Near Inc <hello@near.org>"]\n+ authors = ["NEAR Friend <friend@example.com>"]\nedition = "2018"\n')),(0,o.kt)("p",null,"By changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," here, we'll be changing the compiled Wasm file's name after running the build script. (",(0,o.kt)("inlineCode",{parentName:"p"},"build.sh")," for OS X and Linux, ",(0,o.kt)("inlineCode",{parentName:"p"},"build.bat")," for Windows.) After running the build script, we can expect to find our compiled Wasm smart contract in ",(0,o.kt)("inlineCode",{parentName:"p"},"res/my_crossword.wasm"),"."),(0,o.kt)("p",null,"Now let's look at our main file, in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/lib.rs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/rust-template/blob/3f3a8cfa19eb4bd15ae1c410fed136c6c7ac97a0/src/lib.rs#L1-L38\n")),(0,o.kt)("p",null,"As you can see, this is a stub that's ready to be filled in. Let's pause and point out a few items:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note the ",(0,o.kt)("a",{parentName:"li",href:"/sdk/rust/contract-structure/near-bindgen"},(0,o.kt)("strong",{parentName:"a"},"near_bindgen")," macro")," is above the struct and the impl"),(0,o.kt)("li",{parentName:"ul"},"Here the main struct is called ",(0,o.kt)("inlineCode",{parentName:"li"},"Contract"),", while in other examples it might be ",(0,o.kt)("inlineCode",{parentName:"li"},"Counter")," or something else. This is purely stylistic, but you may learn more from the link in the previous bullet."),(0,o.kt)("li",{parentName:"ul"},"You may notice the word \"Borsh\" and wonder what that means. This is a binary serializer. Eventually we'll want to save data as ones and zeroes to validators' hard drives, and do it efficiently. We use Borsh for this, as is explained ",(0,o.kt)("a",{parentName:"li",href:"https://borsh.io"},"at this website"),".")),(0,o.kt)("p",null,"Next let's modify this contract little by little\u2026"))}m.isMDXComponent=!0}}]);