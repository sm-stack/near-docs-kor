"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:2},s="Collections",d={unversionedId:"sdk/rust/contract-structure/collections",id:"sdk/rust/contract-structure/collections",title:"Collections",description:"When deciding on data structures to use for the data of the application, it is important to minimize the amount of data read and written to storage but also the amount of data serialized and deserialized to minimize the cost of transactions. It is important to understand the tradeoffs of data structures in your smart contract because it can become a bottleneck as the application scales and migrating the state to the new data structures will come at a cost.",source:"@site/../docs/sdk/rust/contract-structure/collections.md",sourceDirName:"sdk/rust/contract-structure",slug:"/sdk/rust/contract-structure/collections",permalink:"/sdk/rust/contract-structure/collections",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-structure/collections.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"near_bindgen",permalink:"/sdk/rust/contract-structure/near-bindgen"},next:{title:"Collections Nesting",permalink:"/sdk/rust/contract-structure/nesting"}},p={},u=[{value:"In-memory <code>HashMap</code> vs persistent <code>UnorderedMap</code>",id:"in-memory-hashmap-vs-persistent-unorderedmap",level:2},{value:"Error prone patterns",id:"error-prone-patterns",level:2},{value:"Pagination with persistent collections",id:"pagination-with-persistent-collections",level:2},{value:"<code>LookupMap</code> vs <code>UnorderedMap</code>",id:"lookupmap-vs-unorderedmap",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Performance",id:"performance",level:3},{value:"Storage space",id:"storage-space",level:3},{value:"<code>LazyOption</code>",id:"lazyoption",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"collections"},"Collections"),(0,o.kt)("p",null,"When deciding on data structures to use for the data of the application, it is important to minimize the amount of data read and written to storage but also the amount of data serialized and deserialized to minimize the cost of transactions. It is important to understand the tradeoffs of data structures in your smart contract because it can become a bottleneck as the application scales and migrating the state to the new data structures will come at a cost."),(0,o.kt)("p",null,"The collections within ",(0,o.kt)("inlineCode",{parentName:"p"},"near-sdk")," are designed to split the data into chunks and defer reading and writing to the store until needed. These data structures will handle the low-level storage interactions and aim to have a similar API to the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/collections/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"std::collections")),"."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"near_sdk::collections")," will be moving to ",(0,o.kt)("inlineCode",{parentName:"p"},"near_sdk::store")," and have updated APIs. If you would like to access these updated structures as they are being implemented, enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable")," feature on ",(0,o.kt)("inlineCode",{parentName:"p"},"near-sdk"),".")),(0,o.kt)("p",null,"It is important to keep in mind that when using ",(0,o.kt)("inlineCode",{parentName:"p"},"std::collections"),", that each time state is loaded, all entries in the data structure will be read eagerly from storage and deserialized. This will come at a large cost for any non-trivial amount of data, so to minimize the amount of gas used the SDK collections should be used in most cases."),(0,o.kt)("p",null,"The most up to date collections and their documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/latest/near_sdk/collections/index.html"},"in the rust docs"),"."),(0,o.kt)("p",null,"The following data structures that exist in the SDK are as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SDK collection"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"th"},"std"),"\xa0","equivalent"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LazyOption<T>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Option<T>")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional value in storage. This value will only be read from storage when interacted with. This value will be ",(0,o.kt)("inlineCode",{parentName:"td"},"Some<T>")," when the value is saved in storage, and ",(0,o.kt)("inlineCode",{parentName:"td"},"None")," if the value at the prefix does not exist.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Vector<T>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Vec<T>")),(0,o.kt)("td",{parentName:"tr",align:null},"A growable array type. The values are sharded in memory and can be used for iterable and indexable values that are dynamically sized.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"LookupMap<K,","\xa0","V>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"HashMap<K,","\xa0","V>")),(0,o.kt)("td",{parentName:"tr",align:null},"This structure behaves as a thin wrapper around the key-value storage available to contracts. This structure does not contain any metadata about the elements in the map, so it is not iterable.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"UnorderedMap<K,","\xa0","V>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"HashMap<K,","\xa0","V>")),(0,o.kt)("td",{parentName:"tr",align:null},"Similar to ",(0,o.kt)("inlineCode",{parentName:"td"},"LookupMap"),", except that it stores additional data to be able to iterate through elements in the data structure.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"TreeMap<K,","\xa0","V>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"BTreeMap<K,","\xa0","V>")),(0,o.kt)("td",{parentName:"tr",align:null},"An ordered equivalent of ",(0,o.kt)("inlineCode",{parentName:"td"},"UnorderedMap"),". The underlying implementation is based on an ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/AVL_tree"},"AVL tree"),". This structure should be used when a consistent order is needed or accessing the min/max keys is needed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LookupSet<T>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HashSet<T>")),(0,o.kt)("td",{parentName:"tr",align:null},"A set, which is similar to ",(0,o.kt)("inlineCode",{parentName:"td"},"LookupMap")," but without storing values, can be used for checking the unique existence of values. This structure is not iterable and can only be used for lookups.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"UnorderedSet<T>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HashSet<T>")),(0,o.kt)("td",{parentName:"tr",align:null},"An iterable equivalent of ",(0,o.kt)("inlineCode",{parentName:"td"},"LookupSet")," which stores additional metadata for the elements contained in the set.")))),(0,o.kt)("h2",{id:"in-memory-hashmap-vs-persistent-unorderedmap"},"In-memory ",(0,o.kt)("inlineCode",{parentName:"h2"},"HashMap")," vs persistent ",(0,o.kt)("inlineCode",{parentName:"h2"},"UnorderedMap")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HashMap")," keeps all data in memory. To access it, the contract needs to deserialize the whole map."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UnorderedMap")," keeps data in persistent storage. To access an element, you only need to deserialize this element.")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"HashMap")," in case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to iterate over all elements in the collection ",(0,o.kt)("strong",{parentName:"li"},"in one function call"),"."),(0,o.kt)("li",{parentName:"ul"},"The number of elements is small or fixed, e.g. less than 10.")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"UnorderedMap")," in case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to access a limited subset of the collection, e.g. one or two elements per call."),(0,o.kt)("li",{parentName:"ul"},"Can't fit the collection into memory.")),(0,o.kt)("p",null,"The reason is ",(0,o.kt)("inlineCode",{parentName:"p"},"HashMap")," deserializes (and serializes) the entire collection in one storage operation.\nAccessing the entire collection is cheaper in gas than accessing all elements through ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," storage operations."),(0,o.kt)("p",null,"Example of ",(0,o.kt)("inlineCode",{parentName:"p"},"HashMap"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'/// Using Default initialization.\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct Contract {\n    pub status_updates: HashMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn set_status(&mut self, status: String) {\n        self.status_updates.insert(env::predecessor_account_id(), status);\n        assert!(self.status_updates.len() <= 10, "Too many messages");\n    }\n\n    pub fn clear(&mut self) {\n        // Effectively iterating through all removing them.\n        self.status_updates.clear();\n    }\n\n    pub fn get_all_updates(self) -> HashMap<AccountId, String> {\n        self.status_updates\n    }\n}\n')),(0,o.kt)("p",null,"Example of ",(0,o.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub status_updates: UnorderedMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new() -> Self {\n        // Initializing `status_updates` with unique key prefix.\n        Self {\n            status_updates: UnorderedMap::new(b\"s\".to_vec()),\n        }\n    }\n\n    pub fn set_status(&mut self, status: String) {\n        self.status_updates.insert(&env::predecessor_account_id(), &status);\n        // Note, don't need to check size, since `UnorderedMap` doesn't store all data in memory.\n    }\n\n    pub fn delete_status(&mut self) {\n        self.status_updates.remove(&env::predecessor_account_id());\n    }\n\n    pub fn get_status(&self, account_id: AccountId) -> Option<String> {\n        self.status_updates.get(&account_id)\n    }\n}\n")),(0,o.kt)("h2",{id:"error-prone-patterns"},"Error prone patterns"),(0,o.kt)("p",null,"Because the values are not kept in memory and are lazily loaded from storage, it's important to make sure if a collection is replaced or removed, that the storage is cleared. In addition, it is important that if the collection is modified, the collection itself is updated in state because most collections will store some metadata."),(0,o.kt)("p",null,"Some error-prone patterns to avoid that cannot be restricted at the type level are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::store::UnorderedMap;\n\nlet mut m = UnorderedMap::<u8, String>::new(b"m");\nm.insert(1, "test".to_string());\nassert_eq!(m.len(), 1);\nassert_eq!(m.get(&1), Some(&"test".to_string()));\n\n// Bug 1: Should not replace any collections without clearing state, this will reset any\n// metadata, such as the number of elements, leading to bugs. If you replace the collection\n// with something with a different prefix, it will be functional, but you will lose any\n// previous data and the old values will not be removed from storage.\nm = UnorderedMap::new(b"m");\nassert!(m.is_empty());\nassert_eq!(m.get(&1), Some(&"test".to_string()));\n\n// Bug 2: Should not use the same prefix as another collection\n// or there will be unexpected side effects.\nlet m2 = UnorderedMap::<u8, String>::new(b"m");\nassert!(m2.is_empty());\nassert_eq!(m2.get(&1), Some(&"test".to_string()));\n\n// Bug 3: forgetting to save the collection in storage. When the collection is attached to\n// the contract state (`self` in `#[near_bindgen]`) this will be done automatically, but if\n// interacting with storage manually or working with nested collections, this is relevant.\nuse near_sdk::store::Vector;\n\n// Simulate roughly what happens during a function call that initializes state.\n{\n    let v = Vector::<u8>::new(b"v");\n    near_sdk::env::state_write(&v);\n}\n\n// Simulate what happens during a function call that just modifies the collection\n// but does not store the collection itself.\n{\n    let mut v: Vector<u8> = near_sdk::env::state_read().unwrap();\n    v.push(1);\n    // The bug is here that the collection itself if not written back\n}\n\nlet v: Vector<u8> = near_sdk::env::state_read().unwrap();\n// This will report as if the collection is empty, even though the element exists\nassert!(v.get(0).is_none());\nassert!(\n    near_sdk::env::storage_read(&[b"v".as_slice(), &0u32.to_le_bytes()].concat()).is_some()\n);\n\n// Bug 4 (only relevant for `near_sdk::store`): These collections will cache writes as well\n// as reads, and the writes are performed on [`Drop`](https://doc.rust-lang.org/std/ops/trait.Drop.html)\n// so if the collection is kept in static memory or something like `std::mem::forget` is used,\n// the changes will not be persisted.\nuse near_sdk::store::LookupSet;\n\nlet mut m: LookupSet<u8> = LookupSet::new(b"l");\nm.insert(1);\nassert!(m.contains(&1));\n\n// This would be the fix, manually flushing the intermediate changes to storage.\n// m.flush();\nstd::mem::forget(m);\n\nm = LookupSet::new(b"l");\nassert!(!m.contains(&1));\n')),(0,o.kt)("h2",{id:"pagination-with-persistent-collections"},"Pagination with persistent collections"),(0,o.kt)("p",null,"Persistent collections such as ",(0,o.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UnorderedSet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," may\ncontain more elements than the amount of gas available to read them all.\nIn order to expose them all through view calls, we can use pagination."),(0,o.kt)("p",null,"This can be done using iterators with ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/iter/struct.Skip.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Skip"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/iter/struct.Take.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Take")),". This will only load elements from storage within the range."),(0,o.kt)("p",null,"Example of pagination for ",(0,o.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub status_updates: UnorderedMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    /// Retrieves multiple elements from the `UnorderedMap`.\n    /// - `from_index` is the index to start from.\n    /// - `limit` is the maximum number of elements to return.\n    pub fn get_updates(&self, from_index: usize, limit: usize) -> Vec<(AccountId, String)> {\n        self.status_updates\n            .iter()\n            .skip(from_index)\n            .take(limit)\n            .collect()\n    }\n}\n")),(0,o.kt)("h2",{id:"lookupmap-vs-unorderedmap"},(0,o.kt)("inlineCode",{parentName:"h2"},"LookupMap")," vs ",(0,o.kt)("inlineCode",{parentName:"h2"},"UnorderedMap")),(0,o.kt)("h3",{id:"functionality"},"Functionality"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UnorderedMap")," supports iteration over keys and values, and also supports pagination. Internally, it has the following structures:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"a map from a key to an index"),(0,o.kt)("li",{parentName:"ul"},"a vector of keys"),(0,o.kt)("li",{parentName:"ul"},"a vector of values"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LookupMap")," only has a map from a key to a value. Without a vector of keys, it doesn't have the ability to iterate over keys.")),(0,o.kt)("h3",{id:"performance"},"Performance"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LookupMap")," has a better performance and stores less data compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"UnorderedMap"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UnorderedMap")," requires ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," storage reads to get the value and ",(0,o.kt)("inlineCode",{parentName:"li"},"3")," storage writes to insert a new entry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LookupMap")," requires only one storage read to get the value and only one storage write to store it.")),(0,o.kt)("h3",{id:"storage-space"},"Storage space"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UnorderedMap")," requires more storage for an entry compared to a ",(0,o.kt)("inlineCode",{parentName:"p"},"LookupMap"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UnorderedMap")," stores the key twice (once in the first map and once in the vector of keys) and value once. It also has a higher constant for storing the length of vectors and prefixes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LookupMap")," stores key and value once.")),(0,o.kt)("h2",{id:"lazyoption"},(0,o.kt)("inlineCode",{parentName:"h2"},"LazyOption")),(0,o.kt)("p",null,"It's a type of persistent collection that only stores a single value.\nThe goal is to prevent a contract from deserializing the given value until it's needed.\nAn example can be a large blob of metadata that is only needed when it's requested in a view call,\nbut not needed for the majority of contract operations."),(0,o.kt)("p",null,"It acts like an ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," that can either hold a value or not and also requires a unique prefix (a key in this case)\nlike other persistent collections."),(0,o.kt)("p",null,"Compared to other collections, ",(0,o.kt)("inlineCode",{parentName:"p"},"LazyOption")," only allows you to initialize the value during initialization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub metadata: LazyOption<Metadata>,\n}\n\n#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct Metadata {\n    data: String,\n    image: Base64Vec,\n    blobs: Vec<String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(metadata: Metadata) -> Self {\n        Self {\n            metadata: LazyOption::new(b"m", Some(metadata)),\n        }\n    }\n\n    pub fn get_metadata(&self) -> Metadata {\n        // `.get()` reads and deserializes the value from the storage. \n        self.metadata.get().unwrap()\n    }\n}\n')))}m.isMDXComponent=!0}}]);