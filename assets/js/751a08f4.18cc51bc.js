"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a,r=n(87462),l=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c=void 0,d={unversionedId:"develop/contracts/environment/table-func.rs",id:"develop/contracts/environment/table-func.rs",title:"table-func.rs",description:"| Function Name          | SDK method                      | Description                                                            |",source:"@site/../docs/2.develop/contracts/environment/table-func.rs.md",sourceDirName:"2.develop/contracts/environment",slug:"/develop/contracts/environment/table-func.rs",permalink:"/develop/contracts/environment/table-func.rs",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/environment/table-func.rs.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{}},p={},u=[],m=(a="TableRsFunc",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),k={toc:u};function g(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{mdxType:"TableRsFunc"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,i.kt)("th",{parentName:"tr",align:null},"SDK method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SHA 256"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::sha256(value)")),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes a sequence of bytes using sha256.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keccak 256"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::keccak256(value)")),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes a sequence of bytes using keccak256.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keccak 512"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::keccak512(value)")),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes a sequence of bytes using keccak512.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SHA 256 (Array)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::sha256_array(value)")),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes the bytes using the SHA-256 hash function. This returns a 32 byte hash.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keccak 256 (Array)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::keccak256_array(value)")),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes the bytes using the Keccak-256 hash function. This returns a 32 byte hash.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keccak 512 (Array)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::keccak512_array(value)")),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes the bytes using the Keccak-512 hash function. This returns a 64 byte hash.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RIPEMD 160 (Array)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::ripemd160_array(value)")),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes the bytes using the RIPEMD-160 hash function. This returns a 20 byte hash.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EC Recover"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::ecrecover(hash, signature, v, malleability_flag)")),(0,i.kt)("td",{parentName:"tr",align:null},"Recovers an ECDSA signer address from a 32-byte message ",(0,i.kt)("inlineCode",{parentName:"td"},"hash")," and a corresponding ",(0,i.kt)("inlineCode",{parentName:"td"},"signature")," along with ",(0,i.kt)("inlineCode",{parentName:"td"},"v")," recovery byte. Takes in an additional flag to check for malleability of the signature which is generally only ideal for transactions. Returns 64 bytes representing the public key if the recovery was successful.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Panic String"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::panic_str(message)")),(0,i.kt)("td",{parentName:"tr",align:null},"Terminates the execution of the program with the UTF-8 encoded message.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Log String"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::log_str(message)")),(0,i.kt)("td",{parentName:"tr",align:null},"Logs the string message. This message is stored on chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Validator Stake"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::validator_stake(account_id)")),(0,i.kt)("td",{parentName:"tr",align:null},"For a given account return its current stake. If the account is not a validator, returns 0.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Validator Total Stake"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env::validator_total_stake()")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the total stake of validators in the current epoch."))))))}g.isMDXComponent=!0}}]);