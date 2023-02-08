"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=c,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),c=n(63366),r=(n(67294),n(3905)),o=["components"],i={id:"creating-accounts",title:"\uacc4\uc815 \uc0dd\uc131"},p=void 0,l={unversionedId:"concepts/basics/accounts/creating-accounts",id:"concepts/basics/accounts/creating-accounts",title:"\uacc4\uc815 \uc0dd\uc131",description:"NEAR \uacc4\uc815\uc744 \ub9cc\ub4dc\ub294 \uac00\uc7a5 \uac04\ub2e8\ud55c \ubc29\ubc95\uc740 NEAR \uc9c0\uac11\uc744 \uc774\uc6a9\ud558\ub294 \uac83\uc774\uc9c0\ub9cc, \ub85c\uceec \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacc4\uc815\uc744 \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/../docs/1.concepts/basics/accounts/creating-accounts.md",sourceDirName:"1.concepts/basics/accounts",slug:"/concepts/basics/accounts/creating-accounts",permalink:"/concepts/basics/accounts/creating-accounts",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/accounts/creating-accounts.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"creating-accounts",title:"\uacc4\uc815 \uc0dd\uc131"},sidebar:"\uac1c\ub150",previous:{title:"\uc0c1\ud0dc",permalink:"/concepts/basics/accounts/state"},next:{title:"\uac1c\uc694",permalink:"/concepts/basics/transactions/overview"}},s={},u=[{value:"NEAR \uc9c0\uac11",id:"near-\uc9c0\uac11",level:2},{value:"\ud14c\uc2a4\ud2b8\ub137",id:"\ud14c\uc2a4\ud2b8\ub137",level:4},{value:"\uba54\uc778\ub137",id:"\uba54\uc778\ub137",level:4},{value:"\ub85c\uceec \uc554\uc2dc\uc801 \uacc4\uc815",id:"\ub85c\uceec-\uc554\uc2dc\uc801-\uacc4\uc815",level:2},{value:"1. near cli\ub97c \uc0ac\uc6a9\ud558\uc5ec ED25519 \ud0a4 \uc30d \uc0dd\uc131\ud558\uae30",id:"1-near-cli\ub97c-\uc0ac\uc6a9\ud558\uc5ec-ed25519-\ud0a4-\uc30d-\uc0dd\uc131\ud558\uae30",level:4},{value:"2. public_key\ub97c \uacc4\uc815 ID\ub85c \ubcc0\ud658\ud558\uae30",id:"converting-a-public-key-to-an-account-id",level:4},{value:"\ub85c\uceec \uba85\uba85\ub41c \uacc4\uc815",id:"\ub85c\uceec-\uba85\uba85\ub41c-\uacc4\uc815",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,c.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"NEAR \uacc4\uc815\uc744 \ub9cc\ub4dc\ub294 \uac00\uc7a5 \uac04\ub2e8\ud55c \ubc29\ubc95\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://mynearwallet.com/"},"NEAR \uc9c0\uac11"),"\uc744 \uc774\uc6a9\ud558\ub294 \uac83\uc774\uc9c0\ub9cc, \ub85c\uceec \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacc4\uc815\uc744 \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"near-\uc9c0\uac11"},"NEAR \uc9c0\uac11"),(0,r.kt)("p",null,"NEAR \uc9c0\uac11\uc740 \uc6f9 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uc9c0\uac11\uc785\ub2c8\ub2e4. \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub098 \ucd94\uac00 \uae30\ub2a5\uc744 \uc124\uce58\ud558\uc9c0 \uc54a\uace0\ub3c4 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\ud14c\uc2a4\ud2b8\ub137"},"\ud14c\uc2a4\ud2b8\ub137"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud14c\uc2a4\ud2b8\ub137"),"\uc5d0\uc11c\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/account-id#named-accounts"},"\uba85\uba85\ub41c \uacc4\uc815"),"\uc744 \uc9c1\uc811 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.mynearwallet.com/create"},"\uc9c0\uac11"),"\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uc774\ub984\uc744 \uc120\ud0dd\ud558\uba74 \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2c8\ubaa8\ub2c9 \uad6c\ubb38\uc744 \uc548\uc804\ud55c \uacf3\uc5d0 \uc800\uc7a5\ud558\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9c8\uc138\uc694."),(0,r.kt)("h4",{id:"\uba54\uc778\ub137"},"\uba54\uc778\ub137"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uba54\uc778\ub137")," ",(0,r.kt)("a",{parentName:"p",href:"https://mynearwallet.com/"},"\uc9c0\uac11"),"\uc5d0\uc11c\ub294, \uba3c\uc800 \uc790\uae08\uc744 \ub123\uc5b4\ub450\uc5b4\uc57c \ud558\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/account-id#implicit-accounts-implicit-accounts"},"\uc554\uc2dc\uc801 \uacc4\uc815"),"\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,r.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/account-id#implicit-accounts-implicit-accounts"},"\uc554\uc2dc\uc801 \uacc4\uc815"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,r.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/account-id#named-accounts"},"\uba85\uba85\ub41c \uacc4\uc815"),"\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4 ."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub85c\uceec-\uc554\uc2dc\uc801-\uacc4\uc815"},"\ub85c\uceec \uc554\uc2dc\uc801 \uacc4\uc815"),(0,r.kt)("p",null,"\uc554\uc2dc\uc801 \uacc4\uc815\uc744 \ub85c\uceec\ub85c \uc0dd\uc131\ud558\ub824\uba74 \ub450 \ub2e8\uacc4\ub97c \uac70\uce69\ub2c8\ub2e4. \uba3c\uc800 \ub85c\uceec\uc5d0\uc11c \ud0a4 \uc30d\uc744 \uc0dd\uc131\ud55c \ub2e4\uc74c \ud574\ub2f9 \uc8fc\uc18c\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"1-near-cli\ub97c-\uc0ac\uc6a9\ud558\uc5ec-ed25519-\ud0a4-\uc30d-\uc0dd\uc131\ud558\uae30"},"1. ",(0,r.kt)("a",{parentName:"h4",href:"/tools/near-cli"},"near cli"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ED25519 \ud0a4 \uc30d \uc0dd\uc131\ud558\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. Generate key pair\nnear generate-key my-new-account\n")),(0,r.kt)("p",null,"\uc0c8 \ud0a4 \uc30d\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.near-credentials/testnet/my-new-account.json"),"\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"converting-a-public-key-to-an-account-id"},"2. public_key\ub97c \uacc4\uc815 ID\ub85c \ubcc0\ud658\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tools/near-cli"},(0,r.kt)("inlineCode",{parentName:"a"},"near-cli")),"\ub97c \ud55c \ubc88 \ub354 \uc0ac\uc6a9\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key"),"\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," \ud30c\uc77c\uc5d0\uc11c \uad00\ub828 NEAR \uacc4\uc815 \uc8fc\uc18c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Open the javascript console of near-cli\nnear repl\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Paste this code in the javascript console\nconst pk58 = 'ed25519:<data>'\nnearAPI.utils.PublicKey.fromString(pk58).data.hexSlice()\n")),(0,r.kt)("p",null,"\ucd9c\ub825 \ubb38\uc790\uc5f4\uc740 16\uc9c4\uc218(",(0,r.kt)("inlineCode",{parentName:"p"},"'")," \uc5c6\uc774) \ud615\ud0dc\uc758 \uacc4\uc815 ID\ub85c, \uc608\ub97c \ub4e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de")," \ud615\ud0dc\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c \uc774 ID\ub97c \ub2e4\ub978 \uc0ac\ub78c\uacfc \uacf5\uc720\ud558\uace0 \ud1a0\ud070 \uc804\uc1a1\uc744 \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacc4\uc815\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \ucd5c\uc18c ",(0,r.kt)("strong",{parentName:"p"},"0.001\u24c3"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\ub2e4\ub978 \uc5b8\uc5b4"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc554\uc2dc\uc801 \uc8fc\uc18c\ub97c \uc720\ucd94\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Python\uc5d0\uc11c\ub294 \ub2e4\uc74c ",(0,r.kt)("inlineCode",{parentName:"p"},"base58")," \ud328\ud0a4\uc9c0 \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4: ",(0,r.kt)("inlineCode",{parentName:"p"},".base58.b58decode(<data>).hex()"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub85c\uceec-\uba85\uba85\ub41c-\uacc4\uc815"},"\ub85c\uceec \uba85\uba85\ub41c \uacc4\uc815"),(0,r.kt)("p",null,"\uba85\uba85\ub41c \uacc4\uc815\uc744 \uc0dd\uc131\ud558\ub824\uba74, \uad00\ub828 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ud558\uc704 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\ub3c4\ub85d \uc694\uccad\ud574\uc57c \ud569\ub2c8\ub2e4: \uba54\uc778\ub137\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"near"),"\uc774\uace0, \ud14c\uc2a4\ud2b8\ub137\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \uc704\ud574 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call testnet create_account \'{"new_account_id": "<account-name>.testnet", "new_public_key": "ed25519:<data>"}\' --deposit 0.00182 --accountId <account-with-funds>\n')),(0,r.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \ud574\uc57c \ud558\ubbc0\ub85c, \uacc4\uc815\uc5d0 \uc785\uae08\uc744 \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\uc804\ub2ec\ud55c \uacf5\uac1c \ud0a4\ub294 \uacc4\uc815\uc758 ",(0,r.kt)("a",{parentName:"p",href:"/concepts/basics/accounts/access-keys#full-access-keys-full-access-keys"},"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4"),"\uac00 \ub429\ub2c8\ub2e4.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\ud558\uc704 \uacc4\uc815"),"\uc758 \uacbd\uc6b0 ",(0,r.kt)("a",{parentName:"p",href:"/tools/near-cli#near-create-account-near-create-account"},"near-cli create-account")," \ubb38\uc11c \ub97c \ud655\uc778 \ud558\uc138\uc694.")))}m.isMDXComponent=!0}}]);