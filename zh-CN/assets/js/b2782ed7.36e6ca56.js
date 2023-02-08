"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[956],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={sidebar_label:"Credentials"},s="Credentials",c={unversionedId:"tutorials/indexer/credentials",id:"tutorials/indexer/credentials",title:"Credentials",description:"Please, keep in mind, currently using the AWS Credentials is the only way to access the data provided by NEAR Lake ecosystem. But it is about to change with Pagoda DevConsole release. Stay tuned!",source:"@site/../docs/3.tutorials/indexer/credentials.md",sourceDirName:"3.tutorials/indexer",slug:"/tutorials/indexer/credentials",permalink:"/near-docs-kor/zh-CN/tutorials/indexer/credentials",draft:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/indexer/credentials.md",tags:[],version:"current",lastUpdatedBy:"[sm-stack]",lastUpdatedAt:1675844989,formattedLastUpdatedAt:"2023\u5e742\u67088\u65e5",frontMatter:{sidebar_label:"Credentials"},sidebar:"tutorials",previous:{title:"NFT indexer for Python",permalink:"/near-docs-kor/zh-CN/tutorials/indexer/python-nft-indexer"},next:{title:"Introduction",permalink:"/near-docs-kor/zh-CN/tutorials/nfts/js/introduction"}},d={},u=[{value:"AWS S3 Credentials",id:"aws-s3-credentials",level:3},{value:"Environment varibales",id:"environment-varibales",level:4}],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"credentials"},"Credentials"),(0,o.kt)("admonition",{title:"DevConsole",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please, keep in mind, currently using the AWS Credentials is the only way to access the data provided by ",(0,o.kt)("a",{parentName:"p",href:"/tools/realtime#near-lake-indexer"},"NEAR Lake")," ecosystem. But it is about to change with Pagoda DevConsole release. Stay tuned!")),(0,o.kt)("p",null,"To access the data provided by ",(0,o.kt)("a",{parentName:"p",href:"/tools/realtime#near-lake-indexer"},"NEAR Lake")," you need to provide valid AWS credentials in order to be charged by the AWS for the S3 usage."),(0,o.kt)("h3",{id:"aws-s3-credentials"},"AWS S3 Credentials"),(0,o.kt)("p",null,"To be able to get objects from the AWS S3 bucket you need to provide the AWS credentials."),(0,o.kt)("p",null,"AWS default profile configuration with aws configure looks similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"~/.aws/credentials\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[default]\naws_access_key_id=AKIAIOSFODNN7EXAMPLE\naws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"AWS docs: Configuration and credential file settings")),(0,o.kt)("h4",{id:"environment-varibales"},"Environment varibales"),(0,o.kt)("p",null,"Alternatively, you can provide your AWS credentials via environment variables with constant names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE\n$ AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n$ AWS_DEFAULT_REGION=eu-central-1\n")))}f.isMDXComponent=!0}}]);