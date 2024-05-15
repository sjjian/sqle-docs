"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[1190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u5feb\u901f\u5f00\u59cb"},l="\u5feb\u901f\u5f00\u59cb",o={unversionedId:"quick-usage",id:"quick-usage",title:"\u5feb\u901f\u5f00\u59cb",description:"\u672c\u6587\u7684\u76ee\u7684\u662f\u8ba9\u5927\u5bb6\u80fd\u5feb\u901f\u4f53\u9a8cSQLE\u7684\u57fa\u7840\u529f\u80fd\uff0c\u5e2e\u52a9\u5927\u5bb6\u5feb\u901f\u4e0a\u624bSQLE\u3002\u4e0b\u9762\u5c06\u6a21\u62df\u4e00\u4e2a\u7b80\u5355\u7684\u65e5\u5e38SQL\u4e0a\u7ebf\u573a\u666f\uff0c\u5f00\u53d1\u4eba\u5458\u63d0\u4ea4SQL\uff0cDBA\u8fdb\u884cSQL\u5ba1\u6838\u5e76\u4e0a\u7ebf\uff0c\u5927\u6982\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a",source:"@site/docs/quick-usage.md",sourceDirName:".",slug:"/quick-usage",permalink:"/sqle-docs/docs/quick-usage",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/quick-usage.md",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb"},sidebar:"tutorialSidebar",previous:{title:"\u5546\u4e1a\u652f\u6301",permalink:"/sqle-docs/docs/support/commercial-support"},next:{title:"\u5b89\u88c5\u8bf4\u660e",permalink:"/sqle-docs/docs/deploy-manual/intro"}},p={},c=[{value:"\u642d\u5efa\u73af\u5883",id:"\u642d\u5efa\u73af\u5883",level:2},{value:"\u914d\u7f6e\u8d44\u6e90",id:"\u914d\u7f6e\u8d44\u6e90",level:2},{value:"\u521b\u5efa\u5168\u5c40\u7528\u6237",id:"\u521b\u5efa\u5168\u5c40\u7528\u6237",level:3},{value:"\u521b\u5efa\u5168\u5c40\u89d2\u8272",id:"\u521b\u5efa\u5168\u5c40\u89d2\u8272",level:3},{value:"\u7ed9\u9879\u76ee\u914d\u7f6eSQL\u5ba1\u6838\u89c4\u5219",id:"\u7ed9\u9879\u76ee\u914d\u7f6esql\u5ba1\u6838\u89c4\u5219",level:3},{value:"\u7ed9\u9879\u76ee\u521b\u5efa\u6570\u636e\u6e90",id:"\u7ed9\u9879\u76ee\u521b\u5efa\u6570\u636e\u6e90",level:3},{value:"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458",id:"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458",level:3},{value:"\u7ed9\u9879\u76ee\u914d\u7f6e\u5ba1\u6279\u6d41\u7a0b\u6a21\u677f",id:"\u7ed9\u9879\u76ee\u914d\u7f6e\u5ba1\u6279\u6d41\u7a0b\u6a21\u677f",level:3},{value:"SQL \u4e0a\u7ebf",id:"sql-\u4e0a\u7ebf",level:2},{value:"\u5f00\u53d1\u7528\u6237 t1 \u63d0\u4ea4\u5de5\u5355",id:"\u5f00\u53d1\u7528\u6237-t1-\u63d0\u4ea4\u5de5\u5355",level:3},{value:"DBA\u7528\u6237 t2 \u4e0a\u7ebf",id:"dba\u7528\u6237-t2-\u4e0a\u7ebf",level:3}],s={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u672c\u6587\u7684\u76ee\u7684\u662f\u8ba9\u5927\u5bb6\u80fd\u5feb\u901f\u4f53\u9a8cSQLE\u7684\u57fa\u7840\u529f\u80fd\uff0c\u5e2e\u52a9\u5927\u5bb6\u5feb\u901f\u4e0a\u624bSQLE\u3002\u4e0b\u9762\u5c06\u6a21\u62df\u4e00\u4e2a\u7b80\u5355\u7684\u65e5\u5e38SQL\u4e0a\u7ebf\u573a\u666f\uff0c\u5f00\u53d1\u4eba\u5458\u63d0\u4ea4SQL\uff0cDBA\u8fdb\u884cSQL\u5ba1\u6838\u5e76\u4e0a\u7ebf\uff0c\u5927\u6982\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458 admin \u6dfb\u52a0\u5168\u5c40\u7528\u6237 t1 \u548c t2\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458 admin \u6dfb\u52a0\u5168\u5c40\u89d2\u8272 dev \u548c dba\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458 admin \u914d\u7f6e\u9879\u76ee\u8d44\u6e90\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u9879\u76ee\u914d\u7f6eSQL\u5ba1\u6838\u89c4\u5219\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6570\u636e\u6e90\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u9879\u76ee\u914d\u7f6e\u4eba\u5458 t1 \u548c t2\uff1b"))),(0,r.kt)("li",{parentName:"ol"},"t1 \u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4ea4SQL\u5ba1\u6838\u5e76\u521b\u5efa\u5de5\u5355\uff1b"),(0,r.kt)("li",{parentName:"ol"},"t2 \u4f5c\u4e3a DBA \u8fdb\u884c\u5ba1\u6838\u5e76\u4e0a\u7ebf\u3002")),(0,r.kt)("h2",{id:"\u642d\u5efa\u73af\u5883"},"\u642d\u5efa\u73af\u5883"),(0,r.kt)("p",null,"\u9996\u5148\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/sqle-docs/docs/deploy-manual/intro"},"\u90e8\u7f72\u6587\u6863"),"\u5feb\u901f\u642d\u5efa\u4e00\u4e2aSQLE\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8d44\u6e90"},"\u914d\u7f6e\u8d44\u6e90"),(0,r.kt)("h3",{id:"\u521b\u5efa\u5168\u5c40\u7528\u6237"},"\u521b\u5efa\u5168\u5c40\u7528\u6237"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u7528\u6237\u4e2d\u5fc3\u754c\u9762\u6dfb\u52a0\u5168\u5c40\u7528\u6237 t1 \u548c t2\uff1b\u70b9\u51fb\u5de6\u4fa7\u83dc\u5355\u680f\u53f3\u4e0b\u5bb6\u7684\u5168\u5c40\u8bbe\u7f6e-\u7528\u6237\u4e2d\u5fc3\u8fdb\u5165\u3002\n",(0,r.kt)("img",{alt:"user-manager",src:n(40411).Z,width:"2940",height:"1600"})),(0,r.kt)("h3",{id:"\u521b\u5efa\u5168\u5c40\u89d2\u8272"},"\u521b\u5efa\u5168\u5c40\u89d2\u8272"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u7528\u6237\u4e2d\u5fc3\u754c\u9762\u6dfb\u52a0\u5168\u5c40\u89d2\u8272 dev \u548c dba\uff0c\u4f7f\u5f97 dev \u81f3\u5c11\u5177\u5907\u6743\u9650",(0,r.kt)("inlineCode",{parentName:"p"},"\u521b\u5efa/\u7f16\u8f91\u5de5\u5355"),", dba \u81f3\u5c11\u5177\u5907\u6743\u9650",(0,r.kt)("inlineCode",{parentName:"p"},"\u67e5\u770b\u4ed6\u4eba\u521b\u5efa\u7684\u5de5\u5355"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u5ba1\u6838/\u9a73\u56de\u5de5\u5355"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0a\u7ebf\u5de5\u5355"),"\u3002\n",(0,r.kt)("img",{alt:"role-manager",src:n(67915).Z,width:"2940",height:"1602"})),(0,r.kt)("h3",{id:"\u7ed9\u9879\u76ee\u914d\u7f6esql\u5ba1\u6838\u89c4\u5219"},"\u7ed9\u9879\u76ee\u914d\u7f6eSQL\u5ba1\u6838\u89c4\u5219"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u6839\u636e\u81ea\u8eab\u516c\u53f8\u7684\u5ba1\u6838\u6807\u51c6\u914d\u7f6e\u5ba1\u6838\u89c4\u5219\uff0c\u672c\u6b21\u8bd5\u7528\u4e0d\u518d\u65b0\u5efa\u89c4\u5219\u6a21\u7248\uff0c\u5c06\u4f7f\u7528\u63d0\u4f9b\u7684\u5168\u5c40\u9ed8\u8ba4\u89c4\u5219\u6a21\u7248\u8fdb\u884c\u6d4b\u8bd5\u3002\u5982\u4f55\u8bbe\u7f6e\u89c4\u5219\u6a21\u7248\uff0c\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/sqle-docs/docs/user-manual/project/rule-template-manager"},"\u89c4\u5219\u6a21\u7248"),"\u3002\n",(0,r.kt)("img",{alt:"project-rule-template",src:n(35562).Z,width:"2940",height:"1604"})),(0,r.kt)("h3",{id:"\u7ed9\u9879\u76ee\u521b\u5efa\u6570\u636e\u6e90"},"\u7ed9\u9879\u76ee\u521b\u5efa\u6570\u636e\u6e90"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u5f55\u5165\u4e00\u4e2aMySQL\u7c7b\u578b\u7684\u6570\u636e\u6e90 ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),"\uff0c\u5e76\u53ef\u4ee5\u7ed1\u5b9a\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u521b\u5efa\u7684\u89c4\u5219\u6a21\u7248\uff0c\u8fd9\u91cc\u7ed1\u5b9a\u7cfb\u7edf\u5185\u7f6e\u7684\u5168\u5c40\u9ed8\u8ba4\u89c4\u5219\u6a21\u7248\u3002\u5982\u4f55\u7ba1\u7406\u6570\u636e\u6e90\uff0c\u53ef\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/sqle-docs/docs/user-manual/project/instance-manager"},"\u6570\u636e\u6e90"),"\u3002\n",(0,r.kt)("img",{alt:"project-instance",src:n(52645).Z,width:"2932",height:"1887"})),(0,r.kt)("h3",{id:"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458"},"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458\uff0c\u672c\u6b21\u7684\u91cd\u70b9\u662f\u8981\u5c06\u4e0a\u8ff0\u521b\u5efa\u7684\u5168\u5c40\u7528\u6237\u6dfb\u52a0\u5230\u9879\u76ee\u5185\uff0c\u7ed9\u7528\u6237 t1 \u6388\u4e88\u6570\u636e\u6e90 ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u89d2\u8272\uff0c\u7ed9\u7528\u6237 t2 \u6388\u4e88\u6570\u636e\u6e90 ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dba")," \u89d2\u8272\u3002\n",(0,r.kt)("img",{alt:"project-member-1",src:n(12009).Z,width:"2940",height:"1602"}),"\n",(0,r.kt)("img",{alt:"project-member-2",src:n(85787).Z,width:"2940",height:"1604"})),(0,r.kt)("h3",{id:"\u7ed9\u9879\u76ee\u914d\u7f6e\u5ba1\u6279\u6d41\u7a0b\u6a21\u677f"},"\u7ed9\u9879\u76ee\u914d\u7f6e\u5ba1\u6279\u6d41\u7a0b\u6a21\u677f"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u7ed9\u9879\u76ee\u53d8\u66f4\u5ba1\u6279\u6d41\u7a0b\u6a21\u677f\uff0c\u6307\u5b9at2\u4f5c\u4e3a\u5ba1\u6838\u4eba\u548c\u4e0a\u7ebf\u4eba\u3002\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(68710).Z,width:"2940",height:"1602"})),(0,r.kt)("h2",{id:"sql-\u4e0a\u7ebf"},"SQL \u4e0a\u7ebf"),(0,r.kt)("h3",{id:"\u5f00\u53d1\u7528\u6237-t1-\u63d0\u4ea4\u5de5\u5355"},"\u5f00\u53d1\u7528\u6237 t1 \u63d0\u4ea4\u5de5\u5355"),(0,r.kt)("p",null,"\u4f7f\u7528 t1 \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u70b9\u51fb\u521b\u5efa\u5de5\u5355\u5373\u53ef\u5bf9\u9879\u76ee\u5185\u6388\u6743\u8fc7\u7684\u6570\u636e\u6e90\u8fdb\u884cSQL\u5ba1\u6838\u4e0a\u7ebf\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u6211\u4eec\u63d0\u4ea4\u4e0b\u56fe\u6240\u793a\u7684SQL\u65f6\uff0c\u81ea\u52a8\u5ba1\u6838\u89e6\u53d1\u4e86\u5ba1\u6838\u5efa\u8bae\uff0c\u5219\u6b64\u65f6\u5de5\u5355\u65e0\u6cd5\u63d0\u4ea4\u9700\u8981\u4fee\u6539SQL\u7b26\u5408\u89c4\u8303\u540e\u518d\u6b21\u63d0\u4ea4\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"project-workflow-1",src:n(75496).Z,width:"2940",height:"1604"}),"\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(70834).Z,width:"2940",height:"1604"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6309\u8981\u6c42\u4f18\u5316SQL\u540e\uff0c\u63d0\u4ea4\u5de5\u5355\u3002")),(0,r.kt)("h3",{id:"dba\u7528\u6237-t2-\u4e0a\u7ebf"},"DBA\u7528\u6237 t2 \u4e0a\u7ebf"),(0,r.kt)("p",null,"\u4f7f\u7528 t2 \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u8fdb\u5165\u7531t1\u63d0\u4ea4\u7684\u4e0a\u7ebf\u5de5\u5355\uff0c\u70b9\u51fb\u5ba1\u6279\u901a\u8fc7\u3002\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(53915).Z,width:"2940",height:"1606"}),"\n\u70b9\u51fb\u6279\u91cf\u7acb\u5373\u4e0a\u7ebf\uff0c\u5b8c\u6210SQL\u4e0a\u7ebf\u64cd\u4f5c\u3002\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(68789).Z,width:"2940",height:"1602"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"SQLE \u652f\u6301\u901a\u8fc7\u90ae\u4ef6\uff0c\u5fae\u4fe1\u4f01\u4e1a\u53f7\u7b49\u9014\u5f84\u63a8\u9001\u5de5\u5355\u901a\u77e5\u3002\u4e5f\u53ef\u4ee5\u914d\u7f6e\u5de5\u5355\u5bf9\u63a5\uff0c\u5728\u9489\u9489\u3001\u98de\u4e66\u4e0a\u8fdb\u884c\u5de5\u5355\u5ba1\u6279")))}d.isMDXComponent=!0},52645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-instance-66d36ba7ed40c85029af1601fd922c16.png"},12009:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-member-1-1a6f1b28a6ffa7124635a7c7e5231689.png"},85787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-member-2-5aba1720898f006c0e8a14da04bbf897.png"},35562:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-rule-template-9d869d0e9df52b3c2b1cc913085ebfb5.png"},68710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-1-eeb9d14476e2f1f304377b32e6081992.png"},75496:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-2-7146c72dbdc6dbe6f5796b43c9d5458f.png"},70834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-3-24645d689a2f6b81dd86b1850ce34987.png"},53915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-5-97306d06f206305240a8f1d50766862c.png"},68789:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-6-64d9e2cff8b8b7bc6368c5f188638074.png"},67915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/role-manager-e9a4fb77a2aa277e0abbe12040a4e220.png"},40411:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/user-manager-d2aabb0a17def319a26192da02191bc7.png"}}]);