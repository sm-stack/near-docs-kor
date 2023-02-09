"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},I=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),I=l(n),p=a,u=I["".concat(c,".").concat(p)]||I[p]||d[p]||o;return n?r.createElement(u,i(i({ref:t},g),{},{components:n})):r.createElement(u,i({ref:t},g))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=I;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}I.displayName="MDXCreateElement"},7663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>g,toc:()=>I});var r=n(87462),a=n(63366),o=(n(67294),n(3905));const i=n.p+"assets/images/boop-base64-encode-57f1146336e8a4514a80fb207a64c1e3.gif";var s=["components"],c={sidebar_position:6,sidebar_label:"Base64 params, wrap up",title:"Using base64-encoded arguments when we create a new crossword puzzle"},l="Final modifications",g={unversionedId:"tutorials/crosswords/intermediate/base64vecu8",id:"tutorials/crosswords/intermediate/base64vecu8",title:"Using base64-encoded arguments when we create a new crossword puzzle",description:"Let's modify our new_puzzle method a bit, and demonstrate how a smart contract author might use base64-encoded arguments.",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/base64vecu8",permalink:"/near-docs-kor/zh-CN/tutorials/crosswords/intermediate/base64vecu8",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Base64 params, wrap up",title:"Using base64-encoded arguments when we create a new crossword puzzle"},sidebar:"tutorials",previous:{title:"Cross-contract calls, etc.",permalink:"/near-docs-kor/zh-CN/tutorials/crosswords/intermediate/cross-contract-calls"}},d={},I=[{value:"Wrapping up",id:"wrapping-up",level:2}],p={toc:I};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"final-modifications"},"Final modifications"),(0,o.kt)("p",null,"Let's modify our ",(0,o.kt)("inlineCode",{parentName:"p"},"new_puzzle")," method a bit, and demonstrate how a smart contract author might use base64-encoded arguments."),(0,o.kt)("p",null,"In the previous chapter we had a fairly long NEAR CLI command that called the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_puzzle"),", providing it the parameters for all the clues. Having these lengthy parameters on the CLI might get cumbersome. There may be issues needing to escape single or double quotes, and each operating system may wish for a different format on the Terminal or Command Prompt."),(0,o.kt)("p",null,"We're going to send all the arguments as a base64-encoded string, and make this a bit simpler. For this, we're going to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/json_types/struct.Base64VecU8.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Base64VecU8")," from the SDK"),". "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Base64VecU8")," is great for binary payloads"),(0,o.kt)("p",{parentName:"admonition"},"What we're doing makes sense, but it's worth noting that it's perhaps more common to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Base64VecU8")," when sending binary parameters."),(0,o.kt)("p",{parentName:"admonition"},"Read more ",(0,o.kt)("a",{parentName:"p",href:"/sdk/rust/contract-interface/serialization-interface#base64vecu8"},"about it here"),".")),(0,o.kt)("p",null,"First we'll set up a struct for the arguments we're expecting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L111-L117\n")),(0,o.kt)("p",null,"Then we modify our ",(0,o.kt)("inlineCode",{parentName:"p"},"new_puzzle")," method like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L290-L297\n")),(0,o.kt)("p",null,"We can take our original arguments and base64 encode them, using whatever method you prefer. There are plenty of online tool, Terminal commands, and open source applications like ",(0,o.kt)("a",{parentName:"p",href:"https://boop.okat.best"},"Boop"),"."),(0,o.kt)("p",null,"We'll copy this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "answer_pk": "ed25519:7PkKPmVUXcupA5oU8d6TbgyMwzFe8tPV6eV1KGwgo9xg",\n  "dimensions": {\n   "x": 11,\n   "y": 10\n  },\n  "answers": [\n   {\n     "num": 1,\n     "start": {\n       "x": 0,\n       "y": 1\n     },\n     "direction": "Across",\n     "length": 12,\n     "clue": "NEAR transactions are more ______ instead of atomic."\n   },\n   {\n     "num": 2,\n     "start": {\n       "x": 6,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 7,\n     "clue": "In a smart contract, when performing an Action, you use this in Rust."\n   },\n   {\n     "num": 3,\n     "start": {\n       "x": 9,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 6,\n     "clue": "In docs.rs when you search for the near-sdk crate, these items a considered a what: collections, env, json_types."\n   },\n   {\n     "num": 4,\n     "start": {\n       "x": 1,\n       "y": 1\n     },\n     "direction": "Down",\n     "length": 10,\n     "clue": "A series of words that can deterministically generate a private key."\n   },\n   {\n     "num": 5,\n     "start": {\n       "x": 1,\n       "y": 3\n     },\n     "direction": "Across",\n     "length": 3,\n     "clue": "When doing high-level cross-contract calls, we import this that ends in _contract. When calling ourselves in a callback, it is convention to call it THIS_self."\n   },\n   {\n     "num": 6,\n     "start": {\n       "x": 0,\n       "y": 8\n     },\n     "direction": "Across",\n     "length": 8,\n     "clue": "Use this to determine the execution outcome of a cross-contract call or Action."\n   },\n   {\n     "num": 7,\n     "start": {\n       "x": 4,\n       "y": 6\n     },\n     "direction": "Across",\n     "length": 4,\n     "clue": "You chain this syntax onto a promise in order to schedule a callback afterward."\n   }\n  ]\n}\n')),(0,o.kt)("p",null,"and base64 encode it:"),(0,o.kt)("figure",null,(0,o.kt)("img",{src:i,alt:"Animated gif of parameters getting base64 encoded with the program Boop",width:"600"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now we can build and run the new crossword puzzle contract as we have before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'./build.sh\n\nexport NEAR_ACCT=crossword.friend.testnet\nexport PARENT_ACCT=friend.testnet\nnear delete $NEAR_ACCT $PARENT_ACCT\nnear create-account $NEAR_ACCT --masterAccount $PARENT_ACCT\nnear deploy $NEAR_ACCT --wasmFile res/crossword_tutorial_chapter_3.wasm --initFunction new --initArgs \'{"owner_id": "\'$NEAR_ACCT\'", "creator_account": "testnet"}\'\nnear call $NEAR_ACCT new_puzzle \'{\n  "args": "ewogICJhbnN3ZXJfcGsiOiAiZWQyNTUxOTo3UGtLUG1WVVhjdXBBNW9VOGQ2VGJneU13ekZlOHRQVjZlVjFLR3dnbzl4ZyIsCiAgImRpbWVuc2lvbnMiOiB7CiAgICJ4IjogMTEsCiAgICJ5IjogMTAKICB9LAogICJhbnN3ZXJzIjogWwogICB7CiAgICAgIm51bSI6IDEsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAwLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkFjcm9zcyIsCiAgICAgImxlbmd0aCI6IDEyLAogICAgICJjbHVlIjogIk5FQVIgdHJhbnNhY3Rpb25zIGFyZSBtb3JlIF9fX19fXyBpbnN0ZWFkIG9mIGF0b21pYy4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogMiwKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDYsCiAgICAgICAieSI6IDAKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiRG93biIsCiAgICAgImxlbmd0aCI6IDcsCiAgICAgImNsdWUiOiAiSW4gYSBzbWFydCBjb250cmFjdCwgd2hlbiBwZXJmb3JtaW5nIGFuIEFjdGlvbiwgeW91IHVzZSB0aGlzIGluIFJ1c3QuIgogICB9LAogICB7CiAgICAgIm51bSI6IDMsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiA5LAogICAgICAgInkiOiAwCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiA2LAogICAgICJjbHVlIjogIkluIGRvY3MucnMgd2hlbiB5b3Ugc2VhcmNoIGZvciB0aGUgbmVhci1zZGsgY3JhdGUsIHRoZXNlIGl0ZW1zIGEgY29uc2lkZXJlZCBhIHdoYXQ6IGNvbGxlY3Rpb25zLCBlbnYsIGpzb25fdHlwZXMuIgogICB9LAogICB7CiAgICAgIm51bSI6IDQsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAxLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiAxMCwKICAgICAiY2x1ZSI6ICJBIHNlcmllcyBvZiB3b3JkcyB0aGF0IGNhbiBkZXRlcm1pbmlzdGljYWxseSBnZW5lcmF0ZSBhIHByaXZhdGUga2V5LiIKICAgfSwKICAgewogICAgICJudW0iOiA1LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMSwKICAgICAgICJ5IjogMwogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiAzLAogICAgICJjbHVlIjogIldoZW4gZG9pbmcgaGlnaC1sZXZlbCBjcm9zcy1jb250cmFjdCBjYWxscywgd2UgaW1wb3J0IHRoaXMgdGhhdCBlbmRzIGluIF9jb250cmFjdC4gV2hlbiBjYWxsaW5nIG91cnNlbHZlcyBpbiBhIGNhbGxiYWNrLCBpdCBpcyBjb252ZW50aW9uIHRvIGNhbGwgaXQgVEhJU19zZWxmLiIKICAgfSwKICAgewogICAgICJudW0iOiA2LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMCwKICAgICAgICJ5IjogOAogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiA4LAogICAgICJjbHVlIjogIlVzZSB0aGlzIHRvIGRldGVybWluZSB0aGUgZXhlY3V0aW9uIG91dGNvbWUgb2YgYSBjcm9zcy1jb250cmFjdCBjYWxsIG9yIEFjdGlvbi4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogNywKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDQsCiAgICAgICAieSI6IDYKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiQWNyb3NzIiwKICAgICAibGVuZ3RoIjogNCwKICAgICAiY2x1ZSI6ICJZb3UgY2hhaW4gdGhpcyBzeW50YXggb250byBhIHByb21pc2UgaW4gb3JkZXIgdG8gc2NoZWR1bGUgYSBjYWxsYmFjayBhZnRlcndhcmQuIgogICB9CiAgXQp9"\n}\' --accountId $NEAR_ACCT\n')),(0,o.kt)("p",null,"Back at the project root (not in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," directory) we can run our app and see the new crossword puzzle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CONTRACT_NAME=crossword.friend.testnet npm run start\n")),(0,o.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,o.kt)("p",null,"Once you understand cross-contract calls and callbacks and where the logic should go, you can build just about anything on NEAR."),(0,o.kt)("p",null,"This might be a good time for a reminder that this crossword puzzle, which checks permissions to methods based on a public key, is a bit unusual. It's more common to have simple collections or mappings for allowed users, or utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_id")," field we set up. The account and access key system in NEAR is quite powerful, and hopefully this tutorial helps stretch the limits of what's possible, like the seamless onboarding we have with the crossword puzzle."),(0,o.kt)("p",null,"Again, the final code for this chapter:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/near-examples/crossword-tutorial-chapter-3"},"https://github.com/near-examples/crossword-tutorial-chapter-3")),(0,o.kt)("p",null,"Happy hacking!"))}u.isMDXComponent=!0}}]);