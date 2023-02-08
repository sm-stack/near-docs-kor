"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a,r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_label:"Python tutorial"},p="NEAR Lake indexer basic tutorial",c={unversionedId:"tutorials/indexer/python-lake-indexer",id:"tutorials/indexer/python-lake-indexer",title:"NEAR Lake indexer basic tutorial",description:"frolvanya/near-lake-raw-printer: source code for the tutorial on how to create an indexer that prints block height and number of shards",source:"@site/../docs/3.tutorials/indexer/python-lake-indexer.md",sourceDirName:"3.tutorials/indexer",slug:"/tutorials/indexer/python-lake-indexer",permalink:"/near-docs-kor/vi/tutorials/indexer/python-lake-indexer",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/indexer/python-lake-indexer.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{sidebar_label:"Python tutorial"},sidebar:"tutorials",previous:{title:"Start options",permalink:"/near-docs-kor/vi/tutorials/indexer/lake-start-options"},next:{title:"NFT indexer",permalink:"/near-docs-kor/vi/tutorials/indexer/nft-indexer"}},m={},d=[{value:"Create a project",id:"create-a-project",level:2},{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Import <code>near-lake-framework</code>",id:"import-near-lake-framework",level:2},{value:"Create a config",id:"create-a-config",level:2},{value:"Starting the stream",id:"starting-the-stream",level:2},{value:"All together",id:"all-together",level:2}],u=(a="ProgrammingLanguage",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),k={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"near-lake-indexer-basic-tutorial"},"NEAR Lake indexer basic tutorial"),(0,i.kt)(u,{lang:"python",mdxType:"ProgrammingLanguage"}),(0,i.kt)("admonition",{title:"Source code for the tutorial",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/frolvanya/near-lake-raw-printer"},(0,i.kt)("inlineCode",{parentName:"a"},"frolvanya/near-lake-raw-printer")),": source code for the tutorial on how to create an indexer that prints block height and number of shards")),(0,i.kt)("p",null,"Recently we have ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/near-lake-framework/"},"published a Python version of the NEAR Lake Framework")," on pypi.org"),(0,i.kt)("p",null,"We want to empower you with a basic tutorial on how to use the Python Package. Let's get started!"),(0,i.kt)("h2",{id:"create-a-project"},"Create a project"),(0,i.kt)("p",null,"Create an indexer project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir near-lake-raw-printer && cd near-lake-raw-printer\ntouch main.py\n")),(0,i.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"near-lake-framework")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install near-lake-framework\n")),(0,i.kt)("h2",{id:"import-near-lake-framework"},"Import ",(0,i.kt)("inlineCode",{parentName:"h2"},"near-lake-framework")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," file let's import the necessary dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=main.py",title:"main.py"},"from near_lake_framework import near_primitives, LakeConfig, streamer\n")),(0,i.kt)("p",null,"We've imported the main function ",(0,i.kt)("inlineCode",{parentName:"p"},"streamer")," which will be called to actually run the indexer, ",(0,i.kt)("inlineCode",{parentName:"p"},"near_primitives")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LakeConfig")," type we need to contruct."),(0,i.kt)("h2",{id:"create-a-config"},"Create a config"),(0,i.kt)("p",null,"Add the instantiation of ",(0,i.kt)("inlineCode",{parentName:"p"},"LakeConfig")," below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=main.py",title:"main.py"},'config = LakeConfig.mainnet()\nconfig.start_block_height = 69030747\nconfig.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")\nconfig.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")\n')),(0,i.kt)("p",null,"Just a few words on the config, function ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet()")," has set ",(0,i.kt)("inlineCode",{parentName:"p"},"s3_bucket_name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"s3_region_name")," for mainnet.\nYou can go to ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.near.org"},"NEAR Explorer")," and get ",(0,i.kt)("strong",{parentName:"p"},"the most recent")," block height to set ",(0,i.kt)("inlineCode",{parentName:"p"},"config.start_block_height"),"."),(0,i.kt)("h2",{id:"starting-the-stream"},"Starting the stream"),(0,i.kt)("p",null,"Let's call ",(0,i.kt)("inlineCode",{parentName:"p"},"streamer")," function with the ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=main.py",title:"main.py"},'stream_handle, streamer_messages_queue = streamer(config)\nwhile True:\n    streamer_message = await streamer_messages_queue.get()\n    print(f"Block #{streamer_message.block.header.height} Shards: {len(streamer_message.shards)}")\n')),(0,i.kt)("p",null,"And an actual start of our indexer in the end of the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=main.py",title:"main.py"},"loop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n")),(0,i.kt)("h2",{id:"all-together"},"All together"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=main.py",title:"main.py"},'import asyncio\nimport os\n\nfrom near_lake_framework import LakeConfig, streamer, near_primitives\n\nasync def main():    \n    config = LakeConfig.mainnet()\n    config.start_block_height = 69030747\n    config.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")\n    config.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")\n\n    stream_handle, streamer_messages_queue = streamer(config)\n    while True:\n        streamer_message = await streamer_messages_queue.get()\n        print(f"Block #{streamer_message.block.header.height} Shards: {len(streamer_message.shards)}")\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n')),(0,i.kt)("p",null,"That's it. Now we run ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py\n")),(0,i.kt)("p",null,"You should see something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Received 400 blocks from S3\nBlock #69030747 Shards: 4\nBlock #69030748 Shards: 4\nBlock #69030749 Shards: 4\nBlock #69030750 Shards: 4\nBlock #69030751 Shards: 4\nBlock #69030752 Shards: 4\nBlock #69030753 Shards: 4\nBlock #69030754 Shards: 4\n")),(0,i.kt)("p",null,"You can stop the indexer by pressing CTRL+C"),(0,i.kt)("admonition",{title:"Credentials",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"To be able to access the data from ",(0,i.kt)("a",{parentName:"p",href:"/tools/realtime#near-lake-indexer"},"NEAR Lake")," you need to provide credentials. Please, see the ",(0,i.kt)("a",{parentName:"p",href:"/near-docs-kor/vi/tutorials/indexer/credentials"},"Credentials")," article")),(0,i.kt)("p",null,"You can find the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/frolvanya/near-lake-raw-printer"},"source code for this tutorial on the GitHub"),"."))}h.isMDXComponent=!0}}]);