"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r,a=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],l={sidebar_label:"Migrating to NEAR Lake framework"},c="Migrating to NEAR Lake Framework",p={unversionedId:"tutorials/indexer/migrating-to-near-lake-framework",id:"tutorials/indexer/migrating-to-near-lake-framework",title:"Migrating to NEAR Lake Framework",description:"We encourage everyone who don't have a hard requirement to use NEAR Indexer Framework consider the migration to NEAR Lake Framework.",source:"@site/../docs/3.tutorials/indexer/migrating-to-near-lake-framework.md",sourceDirName:"3.tutorials/indexer",slug:"/tutorials/indexer/migrating-to-near-lake-framework",permalink:"/tutorials/indexer/migrating-to-near-lake-framework",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/indexer/migrating-to-near-lake-framework.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{sidebar_label:"Migrating to NEAR Lake framework"},sidebar:"develop",previous:{title:"Query the Blockchain History",permalink:"/tools/indexer-for-explorer"},next:{title:"JavaScript SDK",permalink:"/tools/near-sdk-js"}},d={},m=[{value:"Changing the dependencies",id:"changing-the-dependencies",level:2},{value:"Change the clap configs",id:"change-the-clap-configs",level:2},{value:"Replacing the indexer instantiation",id:"replacing-the-indexer-instantiation",level:2},{value:"Imports before",id:"imports-before",level:3},{value:"Imports after",id:"imports-after",level:3},{value:"Creating <code>main()</code>",id:"creating-main",level:3},{value:"Final async main with NEAR Lake Framework stream",id:"final-async-main-with-near-lake-framework-stream",level:3},{value:"Changes in other function related to data types",id:"changes-in-other-function-related-to-data-types",level:2},{value:"<code>listen_blocks</code>",id:"listen_blocks",level:3},{value:"<code>is_tx_receiver_watched()</code>",id:"is_tx_receiver_watched",level:2},{value:"Credentials",id:"credentials",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Diffs",id:"diffs",level:2}],u=(r="ProgrammingLanguage",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:m};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrating-to-near-lake-framework"},"Migrating to NEAR Lake Framework"),(0,o.kt)(u,{lang:"rust",mdxType:"ProgrammingLanguage"}),(0,o.kt)("p",null,"We encourage everyone who don't have a hard requirement to use ",(0,o.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-indexer-framework"},"NEAR Indexer Framework")," consider the migration to ",(0,o.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-lake-framework"},"NEAR Lake Framework"),"."),(0,o.kt)("p",null,"In this tutorial we'll show you how to migrate the project using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/indexer-tx-watcher-example"},"indexer-tx-watcher-example")," as a showcase."),(0,o.kt)("admonition",{title:"Source code",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The source code for the migrated indexer can be found on GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/indexer-tx-watcher-example-lake/tree/0.4.0"},"https://github.com/near-examples/indexer-tx-watcher-example-lake/tree/0.4.0"))),(0,o.kt)("admonition",{title:"Diffs",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We've ",(0,o.kt)("a",{parentName:"p",href:"#diffs"},"posted the diffs for the reference in the end")," of the article, you can scroll down to them if diffs are all you need in order to migrate your indexer")),(0,o.kt)("h2",{id:"changing-the-dependencies"},"Changing the dependencies"),(0,o.kt)("p",null,"First of all we'll start from the dependencies in ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:"title=src/Cargo.toml",title:"src/Cargo.toml"},'\n[package]\nname = "indexer-tx-watcher-example"\nversion = "0.1.0"\nauthors = ["Near Inc <hello@nearprotocol.com>"]\nedition = "2018"\n\n[dependencies]\nactix = "=0.11.0-beta.2"\nactix-rt = "=2.2.0"  # remove it once actix is upgraded to 0.11+\nbase64 = "0.11"\nclap = "3.0.0-beta.1"\nopenssl-probe = { version = "0.1.2" }\nserde = { version = "1", features = ["derive"] }\nserde_json = "1.0.55"\ntokio = { version = "1.1", features = ["sync"] }\ntracing = "0.1.13"\ntracing-subscriber = "0.2.4"\n\nnear-indexer = { git = "https://github.com/near/nearcore", rev = "25b000ae4dd9fe784695d07a3f2e99d82a6f10bd" }\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"edition")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"2021")),(0,o.kt)("li",{parentName:"ul"},"Drop ",(0,o.kt)("inlineCode",{parentName:"li"},"actix")," crates"),(0,o.kt)("li",{parentName:"ul"},"Drop ",(0,o.kt)("inlineCode",{parentName:"li"},"openssl-probe")," crate"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"futures")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"itertools")),(0,o.kt)("li",{parentName:"ul"},"Add features to ",(0,o.kt)("inlineCode",{parentName:"li"},"tokio")," as we will be using tokio runtime"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"tokio-stream")," crate"),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"near-indexer")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"near-lake-framework"))),(0,o.kt)("p",null,"So in the end we'll have this after all:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:"title=src/Cargo.toml",title:"src/Cargo.toml"},'[package]\nname = "indexer-tx-watcher-example"\nversion = "0.1.0"\nauthors = ["Near Inc <hello@nearprotocol.com>"]\nedition = "2021"\n\n[dependencies]\nbase64 = "0.11"\nclap = { version = "3.1.6", features = ["derive"] }\nfutures = "0.3.5"\nserde = { version = "1", features = ["derive"] }\nserde_json = "1.0.55"\nitertools = "0.9.0"\ntokio = { version = "1.1", features = ["sync", "time", "macros", "rt-multi-thread"] }\ntokio-stream = { version = "0.1" }\ntracing = "0.1.13"\ntracing-subscriber = "0.2.4"\n\nnear-lake-framework = "0.4.0"\n\n')),(0,o.kt)("h2",{id:"change-the-clap-configs"},"Change the clap configs"),(0,o.kt)("p",null,"Currently we have structure ",(0,o.kt)("inlineCode",{parentName:"p"},"Opts")," that has a subcommand with ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Init")," command. Since ",(0,o.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-lake-framework"},"NEAR Lake Framework")," doesn't need ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," and config files we don't need ",(0,o.kt)("inlineCode",{parentName:"p"},"Init")," at all. So we need to combine some structures into ",(0,o.kt)("inlineCode",{parentName:"p"},"Opts")," itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/config.rs",title:"src/config.rs"},'...\n/// NEAR Indexer Example\n/// Watches for stream of blocks from the chain\n#[derive(Clap, Debug)]\n#[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]\npub(crate) struct Opts {\n    /// Sets a custom config dir. Defaults to ~/.near/\n    #[clap(short, long)]\n    pub home_dir: Option<std::path::PathBuf>,\n    #[clap(subcommand)]\n    pub subcmd: SubCommand,\n}\n\n#[derive(Clap, Debug)]\npub(crate) enum SubCommand {\n    /// Run NEAR Indexer Example. Start observe the network\n    Run(RunArgs),\n    /// Initialize necessary configs\n    Init(InitConfigArgs),\n}\n\n#[derive(Clap, Debug)]\npub(crate) struct RunArgs {\n    /// account ids to watch for\n    #[clap(long)]\n    pub accounts: String,\n}\n\n#[derive(Clap, Debug)]\npub(crate) struct InitConfigArgs {\n    ...\n}\n...\n')),(0,o.kt)("p",null,"We are going:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Drop ",(0,o.kt)("inlineCode",{parentName:"li"},"InitConfigArgs")," completely"),(0,o.kt)("li",{parentName:"ul"},"Move the content from ",(0,o.kt)("inlineCode",{parentName:"li"},"RunArgs")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Opts")," and then drop ",(0,o.kt)("inlineCode",{parentName:"li"},"RunArgs")),(0,o.kt)("li",{parentName:"ul"},"Drop ",(0,o.kt)("inlineCode",{parentName:"li"},"home_dir")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"Opts")),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"block_height")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Opts")," to know from which block height to start indexing"),(0,o.kt)("li",{parentName:"ul"},"Refactor ",(0,o.kt)("inlineCode",{parentName:"li"},"SubCommand")," to have to variants: mainnet and testnet to define what chain to index"),(0,o.kt)("li",{parentName:"ul"},"And add ",(0,o.kt)("inlineCode",{parentName:"li"},"Clone")," detive to the structs for later")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/config.rs",title:"src/config.rs"},'/// NEAR Indexer Example\n/// Watches for stream of blocks from the chain\n#[derive(Clap, Debug, Clone)]\n#[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]\npub(crate) struct Opts {\n    /// block height to start indexing from\n    #[clap(long)]\n    pub block_height: u64,\n    /// account ids to watch for\n    #[clap(long)]\n    pub accounts: String,\n    #[clap(subcommand)]\n    pub subcmd: SubCommand,\n}\n\n#[derive(Clap, Debug, Clone)]\npub(crate) enum SubCommand {\n    Mainnet,\n    Testnet,\n}\n')),(0,o.kt)("p",null,"In the end of the file we have one implementation we need to replace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/config.rs",title:"src/config.rs"},"...\nimpl From<InitConfigArgs> for near_indexer::InitConfigArgs {\n    ...\n}\n")),(0,o.kt)("p",null,"We want to be able to cast ",(0,o.kt)("inlineCode",{parentName:"p"},"Opts")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"near_lake_framework::LakeConfig"),". So we're going to create a new implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/config.rs",title:"src/config.rs"},'impl From<Opts> for near_lake_framework::LakeConfig {\n    fn from(opts: Opts) -> Self {\n        let mut lake_config =\n            near_lake_framework::LakeConfigBuilder::default().start_block_height(opts.block_height);\n\n        match &opts.subcmd {\n            SubCommand::Mainnet => {\n                lake_config = lake_config.mainnet();\n            }\n            SubCommand::Testnet => {\n                lake_config = lake_config.testnet();\n            }\n        };\n\n        lake_config.build().expect("Failed to build LakeConfig")\n    }\n}\n')),(0,o.kt)("p",null,"And the final move is to change ",(0,o.kt)("inlineCode",{parentName:"p"},"init_logging")," function to remove redundant log subscriptions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/config.rs",title:"src/config.rs"},'\n...\npub(crate) fn init_logging() {\n    let env_filter = EnvFilter::new(\n        "tokio_reactor=info,near=info,stats=info,telemetry=info,indexer_example=info,indexer=info,near-performance-metrics=info",\n    );\n    tracing_subscriber::fmt::Subscriber::builder()\n        .with_env_filter(env_filter)\n        .with_writer(std::io::stderr)\n        .init();\n}\n...\n')),(0,o.kt)("p",null,"Replace it with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/config.rs",title:"src/config.rs"},'...\npub(crate) fn init_logging() {\n    let env_filter = EnvFilter::new("near_lake_framework=info");\n    tracing_subscriber::fmt::Subscriber::builder()\n        .with_env_filter(env_filter)\n        .with_writer(std::io::stderr)\n        .init();\n}\n...\n')),(0,o.kt)("p",null,"Finally we're done with ",(0,o.kt)("inlineCode",{parentName:"p"},"src/config.rs")," and now we can move on to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.rs")),(0,o.kt)("h2",{id:"replacing-the-indexer-instantiation"},"Replacing the indexer instantiation"),(0,o.kt)("p",null,"Since we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"tokio")," runtime and make our ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function asynchronous it's shorted to show the recreating of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function than the process of refactoring."),(0,o.kt)("p",null,"Let's start from import section"),(0,o.kt)("h3",{id:"imports-before"},"Imports before"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"use std::str::FromStr;\n\nuse std::collections::{HashMap, HashSet};\n\nuse clap::Clap;\nuse tokio::sync::mpsc;\nuse tracing::info;\n\nuse configs::{init_logging, Opts, SubCommand};\n\nmod configs;\n")),(0,o.kt)("h3",{id:"imports-after"},"Imports after"),(0,o.kt)("p",null,"We're adding ",(0,o.kt)("inlineCode",{parentName:"p"},"near_lake_framework")," imports and remove redundant import from ",(0,o.kt)("inlineCode",{parentName:"p"},"configs"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"use std::str::FromStr;\n\nuse std::collections::{HashMap, HashSet};\n\nuse clap::Clap;\nuse tokio::sync::mpsc;\nuse tracing::info;\n\nuse near_lake_framework::near_indexer_primitives;\nuse near_lake_framework::LakeConfig;\n\nuse configs::{init_logging, Opts};\n")),(0,o.kt)("h3",{id:"creating-main"},"Creating ",(0,o.kt)("inlineCode",{parentName:"h3"},"main()")),(0,o.kt)("p",null,"Let's create an async ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function, call ",(0,o.kt)("inlineCode",{parentName:"p"},"init_logging")," and read the ",(0,o.kt)("inlineCode",{parentName:"p"},"Opts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_logging();\n\n    let opts: Opts = Opts::parse();\n\n")),(0,o.kt)("p",null,"Let's cast ",(0,o.kt)("inlineCode",{parentName:"p"},"LakeConfig")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"Opts")," and instantiate ",(0,o.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-lake-framework"},"NEAR Lake Framework"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_logging();\n\n    let opts: Opts = Opts::parse();\n\n    let config: LakeConfig = opts.clone().into();\n\n    let (_, stream) = near_lake_framework::streamer(config);\n\n")),(0,o.kt)("p",null,"Copy/paste the code of reading ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," arg to ",(0,o.kt)("inlineCode",{parentName:"p"},"Vec<AccountId"),"> from the old ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_logging();\n\n    let opts: Opts = Opts::parse();\n\n    let config: LakeConfig = opts.clone().into();\n\n    let (_, stream) = near_lake_framework::streamer(config);\n\n    let watching_list = opts\n        .accounts\n        .split(',')\n        .map(|elem| {\n            near_indexer_primitives::types::AccountId::from_str(elem).expect(\"AccountId is invalid\")\n        })\n        .collect();\n")),(0,o.kt)("p",null,"Now we can call ",(0,o.kt)("inlineCode",{parentName:"p"},"listen_blocks")," function we have used before in our indexer while it was built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-indexer-framework"},"NEAR Indexer Framework"),". And return ",(0,o.kt)("inlineCode",{parentName:"p"},"Ok(())")," so our ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," would be happy."),(0,o.kt)("h3",{id:"final-async-main-with-near-lake-framework-stream"},"Final async main with NEAR Lake Framework stream"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_logging();\n\n    let opts: Opts = Opts::parse();\n\n    let config: LakeConfig = opts.clone().into();\n\n    let (_, stream) = near_lake_framework::streamer(config);\n\n    let watching_list = opts\n        .accounts\n        .split(',')\n        .map(|elem| {\n            near_indexer_primitives::types::AccountId::from_str(elem).expect(\"AccountId is invalid\")\n        })\n        .collect();\n\n    listen_blocks(stream, watching_list).await;\n\n    Ok(())\n}\n")),(0,o.kt)("p",null,"We're done. That's pretty much entire ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function. Drop the old one if you haven't yet."),(0,o.kt)("h2",{id:"changes-in-other-function-related-to-data-types"},"Changes in other function related to data types"),(0,o.kt)("p",null,"Along with ",(0,o.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-lake-framework"},"NEAR Lake Framework")," release we have extracted the structures created for indexers into a separate crate. This was done in order to avoid dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"nearcore")," as now you can depend on a separate crate that is already ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/near-indexer-primitives"},"published on crates.io")," or on NEAR Lake Framework that exposes that crate."),(0,o.kt)("h3",{id:"listen_blocks"},(0,o.kt)("inlineCode",{parentName:"h3"},"listen_blocks")),(0,o.kt)("p",null,"A function signature needs to be changed to point to new place for data types"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"async fn listen_blocks(\n    mut stream: mpsc::Receiver<near_indexer::StreamerMessage>,\n    watching_list: Vec<near_indexer::near_primitives::types::AccountId>,\n ) {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"async fn listen_blocks(\n    mut stream: mpsc::Receiver<near_indexer_primitives::StreamerMessage>,\n    watching_list: Vec<near_indexer_primitives::types::AccountId>,\n ) {\n")),(0,o.kt)("p",null,"And another 3 places where ",(0,o.kt)("inlineCode",{parentName:"p"},"near_indexer::near_primitives")," needs to be replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"near_indexer_primitives")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"\nif let near_indexer_primitives::views::ReceiptEnumView::Action {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"if let near_indexer_primitives::views::ReceiptEnumView::Action {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"if let near_indexer_primitives::views::ActionView::FunctionCall {\n")),(0,o.kt)("h2",{id:"is_tx_receiver_watched"},(0,o.kt)("inlineCode",{parentName:"h2"},"is_tx_receiver_watched()")),(0,o.kt)("p",null,"And final change for data types in the function ",(0,o.kt)("inlineCode",{parentName:"p"},"is_tx_receiver_watched()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},"fn is_tx_receiver_watched(\n    tx: &near_indexer_primitives::IndexerTransactionWithOutcome,\n    watching_list: &[near_indexer_primitives::types::AccountId],\n) -> bool {\n    watching_list.contains(&tx.transaction.receiver_id)\n}\n")),(0,o.kt)("h2",{id:"credentials"},"Credentials"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/tutorials/indexer/credentials"},"Configure the Credentials")," in order to access the data from NEAR Lake Framework"),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"And now we have a completely migrated to ",(0,o.kt)("a",{parentName:"p",href:"https://near-indexers.io/docs/projects/near-lake-framework"},"NEAR Lake Framework")," indexer."),(0,o.kt)("p",null,"We are posting the complete diffs for the reference"),(0,o.kt)("h2",{id:"diffs"},"Diffs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=Cargo.toml",title:"Cargo.toml"},'--- a/Cargo.toml\n+++ b/Cargo.toml\n@@ -2,18 +2,18 @@\n name = "indexer-tx-watcher-example"\n version = "0.1.0"\n authors = ["Near Inc <hello@nearprotocol.com>"]\n-edition = "2018"\n+edition = "2021"\n\n [dependencies]\n-actix = "=0.11.0-beta.2"\n-actix-rt = "=2.2.0"  # remove it once actix is upgraded to 0.11+\n base64 = "0.11"\n-clap = "3.0.0-beta.1"\n-openssl-probe = { version = "0.1.2" }\n+clap = { version = "3.1.6", features = ["derive"] }\n+futures = "0.3.5"\n serde = { version = "1", features = ["derive"] }\n serde_json = "1.0.55"\n-tokio = { version = "1.1", features = ["sync"] }\n+itertools = "0.9.0"\n+tokio = { version = "1.1", features = ["sync", "time", "macros", "rt-multi-thread"] }\n+tokio-stream = { version = "0.1" }\n tracing = "0.1.13"\n tracing-subscriber = "0.2.4"\n\n-near-indexer = { git = "https://github.com/near/nearcore", rev = "25b000ae4dd9fe784695d07a3f2e99d82a6f10bd" }\n+near-lake-framework = "0.4.0"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=src/configs.rs",title:"src/configs.rs"},'--- a/src/configs.rs\n+++ b/src/configs.rs\n@@ -1,99 +1,50 @@\n-use clap::Clap;\n+use clap::Parser;\n\n use tracing_subscriber::EnvFilter;\n\n /// NEAR Indexer Example\n /// Watches for stream of blocks from the chain\n-#[derive(Clap, Debug)]\n+#[derive(Parser, Debug, Clone)]\n #[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]\n pub(crate) struct Opts {\n-    /// Sets a custom config dir. Defaults to ~/.near/\n-    #[clap(short, long)]\n-    pub home_dir: Option<std::path::PathBuf>,\n-    #[clap(subcommand)]\n-    pub subcmd: SubCommand,\n-}\n-\n-#[derive(Clap, Debug)]\n-pub(crate) enum SubCommand {\n-    /// Run NEAR Indexer Example. Start observe the network\n-    Run(RunArgs),\n-    /// Initialize necessary configs\n-    Init(InitConfigArgs),\n-}\n-\n-#[derive(Clap, Debug)]\n-pub(crate) struct RunArgs {\n+    /// block height to start indexing from\n+    #[clap(long)]\n+    pub block_height: u64,\n     /// account ids to watch for\n     #[clap(long)]\n     pub accounts: String,\n+    #[clap(subcommand)]\n+    pub subcmd: SubCommand,\n }\n\n-#[derive(Clap, Debug)]\n-pub(crate) struct InitConfigArgs {\n-    /// chain/network id (localnet, testnet, devnet, betanet)\n-    #[clap(short, long)]\n-    pub chain_id: Option<String>,\n-    /// Account ID for the validator key\n-    #[clap(long)]\n-    pub account_id: Option<String>,\n-    /// Specify private key generated from seed (TESTING ONLY)\n-    #[clap(long)]\n-    pub test_seed: Option<String>,\n-    /// Number of shards to initialize the chain with\n-    #[clap(short, long, default_value = "1")]\n-    pub num_shards: u64,\n-    /// Makes block production fast (TESTING ONLY)\n-    #[clap(short, long)]\n-    pub fast: bool,\n-    /// Genesis file to use when initialize testnet (including downloading)\n-    #[clap(short, long)]\n-    pub genesis: Option<String>,\n-    /// Download the verified NEAR genesis file automatically.\n-    #[clap(long)]\n-    pub download_genesis: bool,\n-    /// Specify a custom download URL for the genesis file.\n-    #[clap(long)]\n-    pub download_genesis_url: Option<String>,\n-    /// Download the verified NEAR config file automtically.\n-    #[clap(long)]\n-    pub download_config: bool,\n-    /// Specify a custom download URL for the config file.\n-    #[clap(long)]\n-    pub download_config_url: Option<String>,\n-    /// Specify the boot nodes to bootstrap the network\n-    #[clap(long)]\n-    pub boot_nodes: Option<String>,\n-    /// Specify a custom max_gas_burnt_view limit.\n-    #[clap(long)]\n-    pub max_gas_burnt_view: Option<u64>,\n+#[derive(Parser, Debug, Clone)]\n+pub(crate) enum SubCommand {\n+    Mainnet,\n+    Testnet,\n }\n\n pub(crate) fn init_logging() {\n-    let env_filter = EnvFilter::new(\n-        "tokio_reactor=info,near=info,stats=info,telemetry=info,indexer_example=info,indexer=info,near-performance-metrics=info",\n-    );\n+    let env_filter = EnvFilter::new("near_lake_framework=info");\n     tracing_subscriber::fmt::Subscriber::builder()\n         .with_env_filter(env_filter)\n         .with_writer(std::io::stderr)\n         .init();\n }\n\n-impl From<InitConfigArgs> for near_indexer::InitConfigArgs {\n-    fn from(config_args: InitConfigArgs) -> Self {\n-        Self {\n-            chain_id: config_args.chain_id,\n-            account_id: config_args.account_id,\n-            test_seed: config_args.test_seed,\n-            num_shards: config_args.num_shards,\n-            fast: config_args.fast,\n-            genesis: config_args.genesis,\n-            download_genesis: config_args.download_genesis,\n-            download_genesis_url: config_args.download_genesis_url,\n-            download_config: config_args.download_config,\n-            download_config_url: config_args.download_config_url,\n-            boot_nodes: config_args.boot_nodes,\n-            max_gas_burnt_view: config_args.max_gas_burnt_view,\n-        }\n+impl From<Opts> for near_lake_framework::LakeConfig {\n+    fn from(opts: Opts) -> Self {\n+        let mut lake_config =\n+            near_lake_framework::LakeConfigBuilder::default().start_block_height(opts.block_height);\n+\n+        match &opts.subcmd {\n+            SubCommand::Mainnet => {\n+                lake_config = lake_config.mainnet();\n+            }\n+            SubCommand::Testnet => {\n+                lake_config = lake_config.testnet();\n+            }\n+        };\n+\n+        lake_config.build().expect("Failed to build LakeConfig")\n     }\n }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=src/main.rs",title:"src/main.rs"},'--- a/src/main.rs\n+++ b/src/main.rs\n@@ -2,11 +2,14 @@\n\n use std::collections::{HashMap, HashSet};\n\n-use clap::Clap;\n+use clap::Parser;\n use tokio::sync::mpsc;\n use tracing::info;\n\n-use configs::{init_logging, Opts, SubCommand};\n+use near_lake_framework::near_indexer_primitives;\n+use near_lake_framework::LakeConfig;\n+\n+use configs::{init_logging, Opts};\n\n mod configs;\n\n@@ -15,60 +18,34 @@\n /// We want to catch all *successful* transactions sent to one of the accounts from the list.\n /// In the demo we\'ll just look for them and log them but it might and probably should be extended based on your needs.\n\n-fn main() {\n-    // We use it to automatically search the for root certificates to perform HTTPS calls\n-    // (sending telemetry and downloading genesis)\n-    openssl_probe::init_ssl_cert_env_vars();\n+#[tokio::main]\n+async fn main() -> Result<(), tokio::io::Error> {\n     init_logging();\n\n     let opts: Opts = Opts::parse();\n\n-    let home_dir = opts.home_dir.unwrap_or_else(near_indexer::get_default_home);\n+    let config: LakeConfig = opts.clone().into();\n\n-    match opts.subcmd {\n-        SubCommand::Run(args) => {\n-            // Create the Vec of AccountId from the provided ``--accounts`` to pass it to `listen_blocks`\n-            let watching_list = args\n-                .accounts\n-                .split(\',\')\n-                .map(|elem| {\n-                    near_indexer::near_primitives::types::AccountId::from_str(elem)\n-                        .expect("AccountId is invalid")\n-                })\n-                .collect();\n-\n-            // Inform about indexer is being started and what accounts we\'re watching for\n-            eprintln!(\n-                "Starting indexer transaction watcher for accounts: \\n {:#?}",\n-                &args.accounts\n-            );\n-\n-            // Instantiate IndexerConfig with hardcoded parameters\n-            let indexer_config = near_indexer::IndexerConfig {\n-                home_dir,\n-                sync_mode: near_indexer::SyncModeEnum::FromInterruption,\n-                await_for_node_synced: near_indexer::AwaitForNodeSyncedEnum::WaitForFullSync,\n-            };\n+    let (_, stream) = near_lake_framework::streamer(config);\n\n-            // Boilerplate code to start the indexer itself\n-            let sys = actix::System::new();\n-            sys.block_on(async move {\n-                eprintln!("Actix");\n-                let indexer = near_indexer::Indexer::new(indexer_config);\n-                let stream = indexer.streamer();\n-                actix::spawn(listen_blocks(stream, watching_list));\n-            });\n-            sys.run().unwrap();\n-        }\n-        SubCommand::Init(config) => near_indexer::indexer_init_configs(&home_dir, config.into()),\n-    }\n+    let watching_list = opts\n+        .accounts\n+        .split(\',\')\n+        .map(|elem| {\n+            near_indexer_primitives::types::AccountId::from_str(elem).expect("AccountId is invalid")\n+        })\n+        .collect();\n+\n+    listen_blocks(stream, watching_list).await;\n+\n+    Ok(())\n }\n\n /// The main listener function the will be reading the stream of blocks `StreamerMessage`\n /// and perform necessary checks\n async fn listen_blocks(\n-    mut stream: mpsc::Receiver<near_indexer::StreamerMessage>,\n-    watching_list: Vec<near_indexer::near_primitives::types::AccountId>,\n+    mut stream: mpsc::Receiver<near_indexer_primitives::StreamerMessage>,\n+    watching_list: Vec<near_indexer_primitives::types::AccountId>,\n ) {\n     eprintln!("listen_blocks");\n     // This will be a map of correspondence between transactions and receipts\n@@ -120,7 +97,7 @@\n                         &execution_outcome.receipt.receiver_id,\n                         execution_outcome.execution_outcome.outcome.status\n                     );\n-                    if let near_indexer::near_primitives::views::ReceiptEnumView::Action {\n+                    if let near_indexer_primitives::views::ReceiptEnumView::Action {\n                         signer_id,\n                         ..\n                     } = &execution_outcome.receipt.receipt\n@@ -128,19 +105,20 @@\n                         eprintln!("{}", signer_id);\n                     }\n\n-                    if let near_indexer::near_primitives::views::ReceiptEnumView::Action {\n-                        actions,\n-                        ..\n+                    if let near_indexer_primitives::views::ReceiptEnumView::Action {\n+                        actions, ..\n                     } = execution_outcome.receipt.receipt\n                     {\n                         for action in actions.iter() {\n-                            if let near_indexer::near_primitives::views::ActionView::FunctionCall {\n+                            if let near_indexer_primitives::views::ActionView::FunctionCall {\n                                 args,\n                                 ..\n                             } = action\n                             {\n                                 if let Ok(decoded_args) = base64::decode(args) {\n-                                    if let Ok(args_json) = serde_json::from_slice::<serde_json::Value>(&decoded_args) {\n+                                    if let Ok(args_json) =\n+                                        serde_json::from_slice::<serde_json::Value>(&decoded_args)\n+                                    {\n                                         eprintln!("{:#?}", args_json);\n                                     }\n                                 }\n@@ -156,8 +134,8 @@\n }\n\n fn is_tx_receiver_watched(\n-    tx: &near_indexer::IndexerTransactionWithOutcome,\n-    watching_list: &[near_indexer::near_primitives::types::AccountId],\n+    tx: &near_indexer_primitives::IndexerTransactionWithOutcome,\n+    watching_list: &[near_indexer_primitives::types::AccountId],\n ) -> bool {\n     watching_list.contains(&tx.transaction.receiver_id)\n }\n')))}f.isMDXComponent=!0}}]);