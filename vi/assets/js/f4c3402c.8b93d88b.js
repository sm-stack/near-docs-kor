"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,c(c({ref:t},p),{},{components:n})):r.createElement(y,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"reentrancy",title:"Reentrancy Attacks"},l=void 0,s={unversionedId:"develop/contracts/security/reentrancy",id:"develop/contracts/security/reentrancy",title:"Reentrancy Attacks",description:"Between a cross-contract call and its callback any method of your contract can be executed. Not taking this into account is one of the main sources of exploits. It is so common that it has its own name: reentrancy attacks.",source:"@site/../docs/2.develop/contracts/security/reentrancy.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/reentrancy",permalink:"/near-docs-kor/vi/develop/contracts/security/reentrancy",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/reentrancy.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"8 thg 2, 2023",frontMatter:{id:"reentrancy",title:"Reentrancy Attacks"},sidebar:"develop",previous:{title:"Front Running",permalink:"/near-docs-kor/vi/develop/contracts/security/frontrunning"},next:{title:"Random Numbers",permalink:"/near-docs-kor/vi/develop/contracts/security/random"}},p={},u=[{value:"Example",id:"example",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Between a cross-contract call and its callback ",(0,o.kt)("strong",{parentName:"p"},"any method of your contract can be executed"),". Not taking this into account is one of the main sources of exploits. It is so common that it has its own name: ",(0,o.kt)("strong",{parentName:"p"},"reentrancy attacks"),"."),(0,o.kt)("p",null,"Always make sure to keep your state in a consistent state after a method finishes executing. Assume that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any method could be executed between a method execution and its callback."),(0,o.kt)("li",{parentName:"ul"},"The same method could be executed again before the callback kicks in.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Imagine that we develop a ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit_and_stake")," with the following ",(0,o.kt)("strong",{parentName:"p"},"wrong logic"),": (1) The user sends us money, (2) we add it to its balance, (3) we try to stake it in a validator, (4) if the staking fails, we remove the balance in the callback. Then, a user could schedule a call to withdraw between (2) and (4), and, if the staking failed, we would send money twice to the user."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*VweWHQYGLBa70uceiWHLQA.png",alt:"img"}),"\n",(0,o.kt)("em",{parentName:"p"},"Between a cross-contract call and the callback anything could happen")),(0,o.kt)("p",null,"Luckily for us the solution is rather simple. Instead of immediately adding the money to our user\u2019s balance, we wait until the callback. There we check, and if the staking went well, then we add it to their balance."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*o0YVDCp_7l-L3njJMGhU4w.png",alt:"img"}),"\n",(0,o.kt)("em",{parentName:"p"},"Correct way to handle deposits in a cross-contract call")))}m.isMDXComponent=!0}}]);