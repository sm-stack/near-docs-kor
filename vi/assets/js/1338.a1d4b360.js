/*! For license information please see 1338.a1d4b360.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[1338],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||h[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1841:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(67294)),a=r(n(95665)),s=r(n(70452));e.exports=(s.default,e=>e.reference?o.default.createElement(a.default,{...e}):o.default.createElement(s.default,{...e}))},95665:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.codeReducer=t.parseReference=void 0;const i=n(8575),c=a(n(67294)),l=s(n(70452)),u={code:"loading...",error:null,loading:null},h={fontSize:".9em",fontWeight:600,color:"#0E75DD",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"};function p(e){const t=e.slice(e.indexOf("https"),-1),[n,r]=t.split("#"),o=globalThis||{};o.URL||(o.URL=i.URL);const[a,s,c,l,...u]=new o.URL(n).pathname.split("/").slice(1),[h,p]=r?r.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${a}/${s}/${l}/${u.join("/")}`,fromLine:h,toLine:p,title:u.join("/")}}function f(e,{type:t,value:n}){switch(t){case"reset":return u;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:n,loading:!1};case"error":return{...e,error:n,loading:!1};default:return e}}t.parseReference=p,t.codeReducer=f,t.default=function(e){var t,n,r;const[o,a]=c.useReducer(f,u),s=p(e.children);!1!==o.loading&&async function({url:e,fromLine:t,toLine:n},r){let o;try{o=await fetch(e)}catch(i){return r({type:"error",value:i})}if(200!==o.status)return r({type:"error",value:await o.text()});const a=(await o.text()).split("\n").slice(t,(n||t)+1),s=a.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);r({type:"loaded",value:a.map((e=>e.slice(s))).join("\n")})}(s,a);const i=null===(t=e.metastring)||void 0===t?void 0:t.match(/title="(?<title>.*)"/),m={...e,metastring:(null===(n=null==i?void 0:i.groups)||void 0===n?void 0:n.title)?` title="${null===(r=null==i?void 0:i.groups)||void 0===r?void 0:r.title}"`:` title="${s.title}"`,children:u.code};return c.default.createElement("div",null,c.default.createElement(l.default,{...m},o.code),c.default.createElement("div",{style:h},c.default.createElement("a",{href:e.children,target:"_blank"},"See full example on GitHub")))}},70452:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>X});var r=n(87462),o=n(63366),a=n(67294),s=n(72389),i=n(86010),c=n(92949),l=n(86668);function u(){var e=(0,l.L)().prism,t=(0,c.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var h=n(35281),p=n(87099),f=n(87594),m=n.n(f),d=(0,p.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),v=(0,p.Z)(/\{([\d,-]+)\}/,{range:1}),g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){var n=e.map((function(e){var n=g[e],r=n.start,o=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function b(e,t){var n=e.replace(/\n$/,""),r=t.language,o=t.magicComments,a=t.metastring;if(a&&v.test(a)){var s=a.match(v).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var i=o[0].className,c=m()(s).filter((function(e){return e>0})).map((function(e){return[e-1,[i]]}));return{lineClassNames:Object.fromEntries(c),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(g),t)}}(r,o),u=n.split("\n"),h=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),f=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),d=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),b=0;b<u.length;){var k=u[b].match(l);if(k){var j=k.slice(1).find((function(e){return void 0!==e}));p[j]?h[p[j]].range+=b+",":f[j]?h[f[j]].start=b:d[j]&&(h[d[j]].range+=h[d[j]].start+"-"+(b-1)+","),u.splice(b,1)}else b+=1}n=u.join("\n");var O={};return Object.entries(h).forEach((function(e){var t=e[0],n=e[1].range;m()(n).forEach((function(e){null!=O[e]||(O[e]=[]),O[e].push(t)}))})),{lineClassNames:O,code:n}}const k="codeBlockContainer_Ckt0";var j=["as"];function O(e){var t=e.as,n=(0,o.Z)(e,j),s=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(u());return a.createElement(t,(0,r.Z)({},n,{style:s,className:(0,i.Z)(n.className,k,h.k.common.codeBlock)}))}const E={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function w(e){var t=e.children,n=e.className;return a.createElement(O,{as:"pre",tabIndex:0,className:(0,i.Z)(E.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:E.codeBlockLines},t))}var C=n(69688),x={attributes:!0,characterData:!0,childList:!0,subtree:!0};function N(e,t){var n=(0,a.useState)(),r=n[0],o=n[1],s=(0,a.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((function(){s()}),[s]),function(e,t,n){void 0===n&&(n=x);var r=(0,C.zX)(t),o=(0,C.Ql)(n);(0,a.useEffect)((function(){var t=new MutationObserver(r);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,r,o])}(r,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var L={Prism:n(87410).Z,theme:B};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}var A=/\r\n|\r|\n/,P=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},T=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=I({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=I({},n,{backgroundColor:null}),o};function R(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const D=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?T(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=I({},R(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?I({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),_(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),_(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=I({},R(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?I({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),_(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,i=[],c=[i];s>-1;){for(;(a=r[s]++)<o[s];){var l=void 0,u=t[s],h=n[s][a];if("string"==typeof h?(u=s>0?u:["plain"],l=h):(u=S(u,h.type),h.alias&&(u=S(u,h.alias)),l=h.content),"string"==typeof l){var p=l.split(A),f=p.length;i.push({types:u,content:p[0]});for(var m=1;m<f;m++)P(i),c.push(i=[]),i.push({types:u,content:p[m]})}else s++,t.push(u),n.push(l),r.push(0),o.push(l.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return P(i),c}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),Z="codeLine_lJS_",q="codeLineNumber_Tfdd",M="codeLineContent_feaV";function U(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,s=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var l=s({line:t,className:(0,i.Z)(n,o&&Z)}),u=t.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))}));return a.createElement("span",l,o?a.createElement(a.Fragment,null,a.createElement("span",{className:q}),a.createElement("span",{className:M},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var z=n(95999);const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function $(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],s=r[1],c=(0,a.useRef)(void 0),l=(0,a.useCallback)((function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(t),s(!0),c.current=window.setTimeout((function(){s(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,H.copyButton,o&&H.copyButtonCopied),onClick:l},a.createElement("span",{className:H.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:H.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:H.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const W="wordWrapButtonIcon_Bwma",F="wordWrapButtonEnabled_EoeP";function V(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,r&&F),"aria-label":o,title:o},a.createElement("svg",{className:W,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function G(e){var t,n,o,s,c,h,p,f,m,v,g,y=e.children,k=e.className,j=void 0===k?"":k,w=e.metastring,C=e.title,x=e.showLineNumbers,B=e.language,_=(0,l.L)().prism,I=_.defaultLanguage,A=_.magicComments,P=null!=(t=null!=B?B:null==(n=j.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:I,S=u(),T=(o=(0,a.useState)(!1),s=o[0],c=o[1],h=(0,a.useState)(!1),p=h[0],f=h[1],m=(0,a.useRef)(null),v=(0,a.useCallback)((function(){var e=m.current.querySelector("code");s?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),c((function(e){return!e}))}),[m,s]),g=(0,a.useCallback)((function(){var e=m.current,t=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");f(t)}),[m]),N(m,g),(0,a.useEffect)((function(){g()}),[s,g]),(0,a.useEffect)((function(){return window.addEventListener("resize",g,{passive:!0}),function(){window.removeEventListener("resize",g)}}),[g]),{codeBlockRef:m,isEnabled:s,isCodeScrollable:p,toggle:v}),R=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(d))?void 0:n.groups.title)?t:""}(w)||C,Z=b(y,{metastring:w,language:P,magicComments:A}),q=Z.lineClassNames,M=Z.code,z=null!=x?x:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(w);return a.createElement(O,{as:"div",className:(0,i.Z)(j,P&&!j.includes("language-"+P)&&"language-"+P)},R&&a.createElement("div",{className:E.codeBlockTitle},R),a.createElement("div",{className:E.codeBlockContent},a.createElement(D,(0,r.Z)({},L,{theme:S,code:M,language:null!=P?P:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:T.codeBlockRef,className:(0,i.Z)(t,E.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,i.Z)(E.codeBlockLines,z&&E.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(U,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:q[t],showLineNumbers:z})}))))})),a.createElement("div",{className:E.buttonGroup},(T.isEnabled||T.isCodeScrollable)&&a.createElement(V,{className:E.codeButton,onClick:function(){return T.toggle()},isEnabled:T.isEnabled}),a.createElement($,{className:E.codeButton,code:M}))))}var K=["children"];function X(e){var t=e.children,n=(0,o.Z)(e,K),i=(0,s.Z)(),c=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof c?G:w;return a.createElement(l,(0,r.Z)({key:String(i)},n),c)}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},74971:function(e,t,n){var r;e=n.nmd(e),function(o){t&&t.nodeType,e&&e.nodeType;var a="object"==typeof n.g&&n.g;a.global!==a&&a.window!==a&&a.self;var s,i=2147483647,c=36,l=/^xn--/,u=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=Math.floor,m=String.fromCharCode;function d(e){throw RangeError(p[e])}function v(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function g(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+v((e=e.replace(h,".")).split("."),t).join(".")}function y(e){for(var t,n,r=[],o=0,a=e.length;o<a;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<a?56320==(64512&(n=e.charCodeAt(o++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),o--):r.push(t);return r}function b(e){return v(e,(function(e){var t="";return e>65535&&(t+=m((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=m(e)})).join("")}function k(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function j(e,t,n){var r=0;for(e=n?f(e/700):e>>1,e+=f(e/t);e>455;r+=c)e=f(e/35);return f(r+36*e/(e+38))}function O(e){var t,n,r,o,a,s,l,u,h,p,m,v=[],g=e.length,y=0,k=128,O=72;for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&d("not-basic"),v.push(e.charCodeAt(r));for(o=n>0?n+1:0;o<g;){for(a=y,s=1,l=c;o>=g&&d("invalid-input"),((u=(m=e.charCodeAt(o++))-48<10?m-22:m-65<26?m-65:m-97<26?m-97:c)>=c||u>f((i-y)/s))&&d("overflow"),y+=u*s,!(u<(h=l<=O?1:l>=O+26?26:l-O));l+=c)s>f(i/(p=c-h))&&d("overflow"),s*=p;O=j(y-a,t=v.length+1,0==a),f(y/t)>i-k&&d("overflow"),k+=f(y/t),y%=t,v.splice(y++,0,k)}return b(v)}function E(e){var t,n,r,o,a,s,l,u,h,p,v,g,b,O,E,w=[];for(g=(e=y(e)).length,t=128,n=0,a=72,s=0;s<g;++s)(v=e[s])<128&&w.push(m(v));for(r=o=w.length,o&&w.push("-");r<g;){for(l=i,s=0;s<g;++s)(v=e[s])>=t&&v<l&&(l=v);for(l-t>f((i-n)/(b=r+1))&&d("overflow"),n+=(l-t)*b,t=l,s=0;s<g;++s)if((v=e[s])<t&&++n>i&&d("overflow"),v==t){for(u=n,h=c;!(u<(p=h<=a?1:h>=a+26?26:h-a));h+=c)E=u-p,O=c-p,w.push(m(k(p+E%O,0))),u=f(E/O);w.push(m(k(u,0))),a=j(n,b,r==o),n=0,++r}++n,++t}return w.join("")}s={version:"1.3.2",ucs2:{decode:y,encode:b},decode:O,encode:E,toASCII:function(e){return g(e,(function(e){return u.test(e)?"xn--"+E(e):e}))},toUnicode:function(e){return g(e,(function(e){return l.test(e)?O(e.slice(4).toLowerCase()):e}))}},void 0===(r=function(){return s}.call(t,n,t,e))||(e.exports=r)}()},62587:e=>{"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,n,r,o){n=n||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(n);var i=1e3;o&&"number"==typeof o.maxKeys&&(i=o.maxKeys);var c=e.length;i>0&&c>i&&(c=i);for(var l=0;l<c;++l){var u,h,p,f,m=e[l].replace(s,"%20"),d=m.indexOf(r);d>=0?(u=m.substr(0,d),h=m.substr(d+1)):(u=m,h=""),p=decodeURIComponent(u),f=decodeURIComponent(h),t(a,p)?Array.isArray(a[p])?a[p].push(f):a[p]=[a[p],f]:a[p]=f}return a}},12361:e=>{"use strict";var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,n,r,o){return n=n||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(o){var a=encodeURIComponent(t(o))+r;return Array.isArray(e[o])?e[o].map((function(e){return a+encodeURIComponent(t(e))})).join(n):a+encodeURIComponent(t(e[o]))})).join(n):o?encodeURIComponent(t(o))+r+encodeURIComponent(t(e)):""}},17673:(e,t,n)=>{"use strict";t.decode=t.parse=n(62587),t.encode=t.stringify=n(12361)},8575:(e,t,n)=>{"use strict";var r=n(74971),o=n(62502);function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=b,t.resolve=function(e,t){return b(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?b(e,!1,!0).resolveObject(t):t},t.format=function(e){o.isString(e)&&(e=b(e));return e instanceof a?e.format():a.prototype.format.call(e)},t.Url=a;var s=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(l),h=["%","/","?",";","#"].concat(u),p=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=n(17673);function b(e,t,n){if(e&&o.isObject(e)&&e instanceof a)return e;var r=new a;return r.parse(e,t,n),r}a.prototype.parse=function(e,t,n){if(!o.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var a=e.indexOf("?"),i=-1!==a&&a<e.indexOf("#")?"?":"#",l=e.split(i);l[0]=l[0].replace(/\\/g,"/");var b=e=l.join(i);if(b=b.trim(),!n&&1===e.split("#").length){var k=c.exec(b);if(k)return this.path=b,this.href=b,this.pathname=k[1],k[2]?(this.search=k[2],this.query=t?y.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var j=s.exec(b);if(j){var O=(j=j[0]).toLowerCase();this.protocol=O,b=b.substr(j.length)}if(n||j||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var E="//"===b.substr(0,2);!E||j&&v[j]||(b=b.substr(2),this.slashes=!0)}if(!v[j]&&(E||j&&!g[j])){for(var w,C,x=-1,N=0;N<p.length;N++){-1!==(B=b.indexOf(p[N]))&&(-1===x||B<x)&&(x=B)}-1!==(C=-1===x?b.lastIndexOf("@"):b.lastIndexOf("@",x))&&(w=b.slice(0,C),b=b.slice(C+1),this.auth=decodeURIComponent(w)),x=-1;for(N=0;N<h.length;N++){var B;-1!==(B=b.indexOf(h[N]))&&(-1===x||B<x)&&(x=B)}-1===x&&(x=b.length),this.host=b.slice(0,x),b=b.slice(x),this.parseHost(),this.hostname=this.hostname||"";var L="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!L)for(var _=this.hostname.split(/\./),I=(N=0,_.length);N<I;N++){var A=_[N];if(A&&!A.match(f)){for(var P="",S=0,T=A.length;S<T;S++)A.charCodeAt(S)>127?P+="x":P+=A[S];if(!P.match(f)){var R=_.slice(0,N),D=_.slice(N+1),Z=A.match(m);Z&&(R.push(Z[1]),D.unshift(Z[2])),D.length&&(b="/"+D.join(".")+b),this.hostname=R.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),L||(this.hostname=r.toASCII(this.hostname));var q=this.port?":"+this.port:"",M=this.hostname||"";this.host=M+q,this.href+=this.host,L&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!d[O])for(N=0,I=u.length;N<I;N++){var U=u[N];if(-1!==b.indexOf(U)){var z=encodeURIComponent(U);z===U&&(z=escape(U)),b=b.split(U).join(z)}}var H=b.indexOf("#");-1!==H&&(this.hash=b.substr(H),b=b.slice(0,H));var $=b.indexOf("?");if(-1!==$?(this.search=b.substr($),this.query=b.substr($+1),t&&(this.query=y.parse(this.query)),b=b.slice(0,$)):t&&(this.search="",this.query={}),b&&(this.pathname=b),g[O]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){q=this.pathname||"";var W=this.search||"";this.path=q+W}return this.href=this.format(),this},a.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",a=!1,s="";this.host?a=e+this.host:this.hostname&&(a=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(s=y.stringify(this.query));var i=this.search||s&&"?"+s||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||g[t])&&!1!==a?(a="//"+(a||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):a||(a=""),r&&"#"!==r.charAt(0)&&(r="#"+r),i&&"?"!==i.charAt(0)&&(i="?"+i),t+a+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(i=i.replace("#","%23"))+r},a.prototype.resolve=function(e){return this.resolveObject(b(e,!1,!0)).format()},a.prototype.resolveObject=function(e){if(o.isString(e)){var t=new a;t.parse(e,!1,!0),e=t}for(var n=new a,r=Object.keys(this),s=0;s<r.length;s++){var i=r[s];n[i]=this[i]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var c=Object.keys(e),l=0;l<c.length;l++){var u=c[l];"protocol"!==u&&(n[u]=e[u])}return g[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!g[e.protocol]){for(var h=Object.keys(e),p=0;p<h.length;p++){var f=h[p];n[f]=e[f]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||v[e.protocol])n.pathname=e.pathname;else{for(var m=(e.pathname||"").split("/");m.length&&!(e.host=m.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),n.pathname=m.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var d=n.pathname||"",y=n.search||"";n.path=d+y}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var b=n.pathname&&"/"===n.pathname.charAt(0),k=e.host||e.pathname&&"/"===e.pathname.charAt(0),j=k||b||n.host&&e.pathname,O=j,E=n.pathname&&n.pathname.split("/")||[],w=(m=e.pathname&&e.pathname.split("/")||[],n.protocol&&!g[n.protocol]);if(w&&(n.hostname="",n.port=null,n.host&&(""===E[0]?E[0]=n.host:E.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===m[0]?m[0]=e.host:m.unshift(e.host)),e.host=null),j=j&&(""===m[0]||""===E[0])),k)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,E=m;else if(m.length)E||(E=[]),E.pop(),E=E.concat(m),n.search=e.search,n.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(w)n.hostname=n.host=E.shift(),(L=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=L.shift(),n.host=n.hostname=L.shift());return n.search=e.search,n.query=e.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!E.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var C=E.slice(-1)[0],x=(n.host||e.host||E.length>1)&&("."===C||".."===C)||""===C,N=0,B=E.length;B>=0;B--)"."===(C=E[B])?E.splice(B,1):".."===C?(E.splice(B,1),N++):N&&(E.splice(B,1),N--);if(!j&&!O)for(;N--;N)E.unshift("..");!j||""===E[0]||E[0]&&"/"===E[0].charAt(0)||E.unshift(""),x&&"/"!==E.join("/").substr(-1)&&E.push("");var L,_=""===E[0]||E[0]&&"/"===E[0].charAt(0);w&&(n.hostname=n.host=_?"":E.length?E.shift():"",(L=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=L.shift(),n.host=n.hostname=L.shift()));return(j=j||n.host&&E.length)&&!_&&E.unshift(""),E.length?n.pathname=E.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},a.prototype.parseHost=function(){var e=this.host,t=i.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},62502:e=>{"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}}}]);