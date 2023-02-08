"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=n(35148);const o=n.p+"assets/images/enum-a-d-block--eizaconiendo.near--eiza_coniendo-b07ea31befc5e196552b3c84bb924974.png";var l=["components"],u={sidebar_position:3,sidebar_label:"Using structs and enums",title:"How to think about structs and enums when writing a Rust smart contract on NEAR"},c="Structs and enums",d={unversionedId:"tutorials/crosswords/beginner/structs-enums",id:"tutorials/crosswords/beginner/structs-enums",title:"How to think about structs and enums when writing a Rust smart contract on NEAR",description:"",source:"@site/../docs/3.tutorials/crosswords/02-beginner/02-structs-enums.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/structs-enums",permalink:"/near-docs-kor/vi/tutorials/crosswords/beginner/structs-enums",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/02-structs-enums.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Using structs and enums",title:"How to think about structs and enums when writing a Rust smart contract on NEAR"},sidebar:"tutorials",previous:{title:"Store multiple puzzles",permalink:"/near-docs-kor/vi/tutorials/crosswords/beginner/collections"},next:{title:"Actions and sending NEAR",permalink:"/near-docs-kor/vi/tutorials/crosswords/beginner/actions"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Structs",id:"structs",level:3},{value:"Enums",id:"enums",level:3},{value:"Using structs",id:"using-structs",level:2},{value:"Storing contract state",id:"storing-contract-state",level:3},{value:"Returning data",id:"returning-data",level:3},{value:"Using returned objects in a callback",id:"using-returned-objects-in-a-callback",level:3},{value:"Using enums",id:"using-enums",level:2}],h={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"structs-and-enums"},"Structs and enums"),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("h3",{id:"structs"},"Structs"),(0,s.kt)("p",null,"If you're not familiar with Rust, it may be confusing that there are no classes or inheritance like other programming languages. We'll be exploring how to ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch05-01-defining-structs.html"},"use structs"),", which are someone similar to classes, but perhaps simpler."),(0,s.kt)("p",null,"Remember that there will be only one struct that gets the ",(0,s.kt)("a",{parentName:"p",href:"/sdk/rust/contract-structure/near-bindgen"},(0,s.kt)("inlineCode",{parentName:"a"},"#[near_bindgen]")," macro")," placed on it; our primary struct or singleton if you wish. Oftentimes the primary struct will contain additional structs that may, in turn, contain more structs in a neat and orderly way. You may also have structs that are used to return data to an end user, like a frontend. We'll be covering both of these cases in this chapter."),(0,s.kt)("h3",{id:"enums"},"Enums"),(0,s.kt)("p",null,"Enums are short for enumerations, and can be particularly useful if you have entities in your smart contract that transition to different states. For example, say you have a series of blockchain games where players can join, battle, and win. There might be an enumeration for  ",(0,s.kt)("inlineCode",{parentName:"p"},"AcceptingPlayers"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"GameInProgress"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"GameCompleted"),". Enums are also used to define discrete types of concept, like months in a year."),(0,s.kt)("p",null,"For our crossword puzzle, one example of an enum is the direction of the clue: either across (A) or down (D) as illustrated below. These are the only two options."),(0,s.kt)("figure",null,(0,s.kt)("img",{src:o,alt:"Children's toy of a box that has blocks that only fit certain shapes, resembling the letters A and D. Art created by eizaconiendo.near",width:"600"}),(0,s.kt)("figcaption",null,"Art by ",(0,s.kt)("a",{href:"https://twitter.com/eiza_coniendo",target:"_blank"},"eizaconiendo.near"))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Rust has an interesting feature where enums can contain additional data. You can see ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/custom_types/enum.html"},"examples of that here"),"."),(0,s.kt)("h2",{id:"using-structs"},"Using structs"),(0,s.kt)("h3",{id:"storing-contract-state"},"Storing contract state"),(0,s.kt)("p",null,"We're going to introduce several structs all at once. These structs are addressing a need from the previous chapter, where the puzzle itself was hardcoded and looked like this:"),(0,s.kt)("img",{src:i.Z,alt:"Basic crossword puzzle from chapter 1",width:"600"}),(0,s.kt)("p",null,"In this chapter, we want the ability to add multiple, custom crossword puzzles. This means we'll be storing information about the clues in the contract state. Think of a grid where there are x and y coordinates for where a clue starts. We'll also want to specify:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Clue number"),(0,s.kt)("li",{parentName:"ol"},"Whether it's ",(0,s.kt)("strong",{parentName:"li"},"across")," or ",(0,s.kt)("strong",{parentName:"li"},"down")),(0,s.kt)("li",{parentName:"ol"},"The length, or number of letters in the answer")),(0,s.kt)("p",null,"Let's dive right in, starting with our primary struct:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Crossword {\n    puzzles: LookupMap<String, Puzzle>,  // \u27f5 Puzzle is a struct we're defining\n    unsolved_puzzles: UnorderedSet<String>,\n}\n")),(0,s.kt)("admonition",{title:"Let's ignore a couple of things\u2026",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"For now, let's ignore the macros about the structs that begin with ",(0,s.kt)("inlineCode",{parentName:"p"},"derive")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"serde"),".")),(0,s.kt)("p",null,"Look at the fields inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"Crossword")," struct above, and you'll see a couple types. ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," is a part of Rust's standard library, but ",(0,s.kt)("inlineCode",{parentName:"p"},"Puzzle")," is something we've created:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(BorshDeserialize, BorshSerialize, Debug)]\npub struct Puzzle {\n    status: PuzzleStatus,  // \u27f5 An enum we'll get to soon\n    /// Use the CoordinatePair assuming the origin is (0, 0) in the top left side of the puzzle.\n    answer: Vec<Answer>,  // \u27f5 Another struct we've defined\n}\n")),(0,s.kt)("p",null,"Let's focus on the ",(0,s.kt)("inlineCode",{parentName:"p"},"answer")," field here, which is a vector of ",(0,s.kt)("inlineCode",{parentName:"p"},"Answer"),'s. (A vector is nothing fancy, just a bunch of items or a "growable array" as described in the ',(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/vec/struct.Vec.html"},"standard Rust documentation"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(BorshDeserialize, BorshSerialize, Deserialize, Serialize, Debug)]\n#[serde(crate = \"near_sdk::serde\")]\npub struct Answer {\n    num: u8,\n    start: CoordinatePair,  // \u27f5 Another struct we've defined\n    direction: AnswerDirection,  // \u27f5 An enum we'll get to soon\n    length: u8,\n    clue: String,\n}\n")),(0,s.kt)("p",null,"Now let's take a look at the last struct we'e defined, that has cascaded down from fields on our primary struct: the ",(0,s.kt)("inlineCode",{parentName:"p"},"CoordinatePair"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(BorshDeserialize, BorshSerialize, Deserialize, Serialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub struct CoordinatePair {\n    x: u8,\n    y: u8,\n}\n')),(0,s.kt)("admonition",{title:"Summary of the structs shown",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"There are a handful of structs here, and this will be a typical pattern when we use structs to store contract state."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre"},"Crossword \u27f5 primary struct with #[near_bindgen]\n\u2514\u2500\u2500 Puzzle\n   \u2514\u2500\u2500 Answer\n      \u2514\u2500\u2500 CoordinatePair\n"))),(0,s.kt)("h3",{id:"returning-data"},"Returning data"),(0,s.kt)("p",null,"Since we're going to have multiple crossword puzzles that have their own, unique clues and positions in a grid, we'll want to return puzzle objects to a frontend.  "),(0,s.kt)("admonition",{title:"Quick note on return values",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"By default, return values are serialized in JSON unless explicitly directed to use Borsh for binary serialization."),(0,s.kt)("p",{parentName:"admonition"},"For example, if we call this function:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn return_some_words() -> Vec<String> {\n    vec!["crossword".to_string(), "puzzle".to_string()]\n}\n')),(0,s.kt)("p",{parentName:"admonition"},"The return value would be a JSON array:"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},'["crossword", "puzzle"]')),(0,s.kt)("p",{parentName:"admonition"},"While somewhat advanced, you can learn more about ",(0,s.kt)("a",{parentName:"p",href:"/sdk/rust/contract-interface/serialization-interface#overriding-serialization-protocol-default"},"changing the serialization here"),".")),(0,s.kt)("p",null,"We have a struct called ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonPuzzle")," that differs from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Puzzle")," struct we've shown. It has one difference: the addition of the ",(0,s.kt)("inlineCode",{parentName:"p"},"solution_hash")," field."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct JsonPuzzle {\n    /// The human-readable (not in bytes) hash of the solution\n    solution_hash: String,  // \u27f5 this field is not contained in the Puzzle struct\n    status: PuzzleStatus,\n    answer: Vec<Answer>,\n}\n')),(0,s.kt)("p",null,"This is handy because our primary struct has a key-value pair where the key is the solution hash (as a ",(0,s.kt)("inlineCode",{parentName:"p"},"String"),") and the value is the ",(0,s.kt)("inlineCode",{parentName:"p"},"Puzzle")," struct."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Crossword {\n    puzzles: LookupMap<String, Puzzle>,\n    //               key \u2197        \u2196 value\n    \u2026\n")),(0,s.kt)("p",null,"Our ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonPuzzle")," struct returns the information from both the key and the value."),(0,s.kt)("p",null,"We can move on from this topic, but suffice it to say, sometimes it's helpful to have structs where the intended use is to return data in a more meaningful way than might exist from the structs used to store contract data."),(0,s.kt)("h3",{id:"using-returned-objects-in-a-callback"},"Using returned objects in a callback"),(0,s.kt)("p",null,"Don't be alarmed if this section feels confusing at this point, but know we'll cover Promises and callbacks later."),(0,s.kt)("p",null,'Without getting into detail, a contract may want to make a cross-contract call and "do something" with the return value. Sometimes this return value is an object we\'re expecting, so we can define a struct with the expected fields to capture the value. In other programming languages this may be referred to as "casting" or "marshaling" the value.'),(0,s.kt)("p",null,"A real-world example of this might be the ",(0,s.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/StorageManagement.html"},"Storage Management standard"),", as used in a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/near-examples/FT"},"fungible token"),"."),(0,s.kt)("p",null,"Let's say a smart contract wants to determine if ",(0,s.kt)("inlineCode",{parentName:"p"},"alice.near"),' is "registered" on the ',(0,s.kt)("inlineCode",{parentName:"p"},"nDAI")," token. More technically, does ",(0,s.kt)("inlineCode",{parentName:"p"},"alice.near")," have a key-value pair for herself in the fungible token contract."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct StorageBalance {\n    pub total: U128,\n    pub available: U128,\n}\n\n// \u2026\n// Logic that calls the nDAI token contract, asking for alice.near\'s storage balance.\n// \u2026\n\n#[private]\npub fn my_callback(&mut self, #[callback] storage_balance: StorageBalance) {\n    // \u2026\n}\n')),(0,s.kt)("p",null,"The crossword puzzle will eventually use a cross-contract call and callback, so we can look forward to that. For now just know that if your contract expects to receive a return value that's not a primitive (unsigned integer, string, etc.) and is more complex, you may use a struct to give it the proper type."),(0,s.kt)("h2",{id:"using-enums"},"Using enums"),(0,s.kt)("p",null,"In the section above, we saw two fields in the structs that had an enum type:"),(0,s.kt)("p",null,"1.",(0,s.kt)("inlineCode",{parentName:"p"},"AnswerDirection")," \u2014 this is the simplest type of enum, and will look familiar from other programming languages. It provides the only two options for how a clue in oriented in a crossword puzzle: across and down.  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(BorshDeserialize, BorshSerialize, Deserialize, Serialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub enum AnswerDirection {\n    Across,\n    Down,\n}\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"PuzzleStatus")," \u2014 this enum can actually store a string inside the ",(0,s.kt)("inlineCode",{parentName:"li"},"Solved")," structure. (Note that we could have simply stored a string instead of having a structure, but a structure might make this easier to read.)")),(0,s.kt)("p",null,'As we improve our crossword puzzle, the idea is to give the winner of the crossword puzzle (the first person to solve it) the ability to write a memo. (For example: "Took me forever to get clue six!", "Alice rules!" or whatever.)'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(BorshDeserialize, BorshSerialize, Deserialize, Serialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub enum PuzzleStatus {\n    Unsolved,\n    Solved { memo: String },\n}\n')))}g.isMDXComponent=!0},35148:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/basics-crossword-2f471ec61520f252fe4526be2c4ff72c.jpg"}}]);