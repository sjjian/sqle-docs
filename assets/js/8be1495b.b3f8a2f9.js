"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[2770],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(a),m=l,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2431:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={title:"Eclipse\u5ba1\u6838\u63d2\u4ef6"},i=void 0,p={unversionedId:"dev-manual/auditplugins/eclipse",id:"dev-manual/auditplugins/eclipse",title:"Eclipse\u5ba1\u6838\u63d2\u4ef6",description:"Eclipse\u5ba1\u6838\u63d2\u4ef6\u53ef\u4ee5\u5728\u5f00\u53d1\u9636\u6bb5\u5b9e\u65f6\u8fdb\u884c\u81ea\u52a9\u5f0f\u7684SQL\u5ba1\u6838\uff0c\u786e\u4fddSQL\u5f00\u53d1\u7b26\u5408\u89c4\u8303\u5e76\u6ee1\u8db3\u4e0a\u7ebf\u8981\u6c42\u3002",source:"@site/docs/dev-manual/auditplugins/eclipse.md",sourceDirName:"dev-manual/auditplugins",slug:"/dev-manual/auditplugins/eclipse",permalink:"/sqle-docs/docs/dev-manual/auditplugins/eclipse",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/dev-manual/auditplugins/eclipse.md",tags:[],version:"current",frontMatter:{title:"Eclipse\u5ba1\u6838\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"IDEA\u5ba1\u6838\u63d2\u4ef6",permalink:"/sqle-docs/docs/dev-manual/auditplugins/jetbrains"},next:{title:"\u5982\u4f55\u5bf9\u63a5SQLE",permalink:"/sqle-docs/docs/dev-manual/OpenAPI/dmstoken"}},o={},d=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u83b7\u53d6\u5b89\u88c5\u5305",id:"\u83b7\u53d6\u5b89\u88c5\u5305",level:3},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:3},{value:"\u914d\u7f6e\u63d2\u4ef6",id:"\u914d\u7f6e\u63d2\u4ef6",level:3},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:4},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Eclipse\u5ba1\u6838\u63d2\u4ef6\u53ef\u4ee5\u5728\u5f00\u53d1\u9636\u6bb5\u5b9e\u65f6\u8fdb\u884c\u81ea\u52a9\u5f0f\u7684SQL\u5ba1\u6838\uff0c\u786e\u4fddSQL\u5f00\u53d1\u7b26\u5408\u89c4\u8303\u5e76\u6ee1\u8db3\u4e0a\u7ebf\u8981\u6c42\u3002"),(0,l.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a8\u8350\u4f7f\u7528Java8\u7248\u672c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Eclipse\u63d2\u4ef6\u6700\u4f4e\u9002\u914dEclipse 2015 mars\u7248\u672c"))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u5b89\u88c5\u5305"},"\u83b7\u53d6\u5b89\u88c5\u5305"),(0,l.kt)("p",null,"\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/actiontech/sqle/releases/tag/v3.2401.0"},"https://github.com/actiontech/sqle/releases/tag/v3.2401.0")),(0,l.kt)("h3",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5c06\u4e0b\u8f7d\u7684jar\u5305\uff0c\u590d\u5236\u5230Eclipse\u7f16\u8f91\u5668\u76ee\u5f55\u4e2d\u7684dropins\u6587\u4ef6\u5939\u4e2d\n",(0,l.kt)("img",{alt:"eclipse-install",src:a(1301).Z,width:"1753",height:"902"})),(0,l.kt)("h3",{id:"\u914d\u7f6e\u63d2\u4ef6"},"\u914d\u7f6e\u63d2\u4ef6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u914d\u7f6e\u9875\u9762",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"li"},"Eclipse\u83dc\u5355\u680f"),"-",(0,l.kt)("inlineCode",{parentName:"li"},"Window"),"-",(0,l.kt)("inlineCode",{parentName:"li"},"Preferences"),"-",(0,l.kt)("inlineCode",{parentName:"li"},"SQLE"),"\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165\u8fde\u63a5\u4fe1\u606f",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5728SQLE Addr\u680f\u4e2d\u8f93\u5165SQLE\u670d\u52a1\u7684\u5730\u5740"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9HTTP\u8fde\u63a5\u65b9\u5f0f"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u5165\u767b\u5f55\u4fe1\u606f",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\u65f6\uff0c\u9700\u8981\u586b\u5199\u7528\u4e8e\u767b\u5f55\u7684\u8d26\u5bc6\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9token\u767b\u5f55\u65f6\uff0c\u9700\u8981\u586b\u5199\u5728\u4e2a\u4eba\u4e2d\u5fc3\u751f\u6210\u7684\u8bbf\u95ee\u4ee4\u724c"))),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"li"},"Test Connection"),"\u6309\u94ae\uff0c\u786e\u4fdd\u80fd\u591f\u6210\u529f\u8fde\u63a5\u5230SQLE\u5e76\u83b7\u53d6\u9879\u76ee\u548c\u6570\u636e\u5e93\u7c7b\u578b\u5217\u8868\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5ba1\u6838\u7684\u6570\u636e\u5bf9\u8c61",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u4f9d\u6b21\u9009\u62e9Project\u3001DB Type\u3001Data Source\u548cSchema\u4e0b\u62c9\u6846\uff0c\u914d\u7f6e\u8981\u8fdb\u884c\u5ba1\u6838\u7684\u6570\u636e\u5e93\u4fe1\u606f\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u4fdd\u5b58\u914d\u7f6e",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"li"},"Apply and Close"),"\u6309\u94ae\u4fdd\u5b58\u914d\u7f6e\u5e76\u9000\u51fa\u914d\u7f6e\u754c\u9762\uff0c\u5b8c\u6210\u914d\u7f6e\u3002")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"eclipse-install-edit",src:a(3011).Z,width:"2518",height:"1378"})),(0,l.kt)("h4",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQLE Addr"),(0,l.kt)("td",{parentName:"tr",align:null},"SQLE \u670d\u52a1\u5730\u5740, \u683c\u5f0f\u4e3a IP:Port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8fde\u63a5SQLE\u7684\u65b9\u5f0f\u662f\u901a\u8fc7HTTP\u8fd8\u662fHTTPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55SQLE\u4f7f\u7528\u7684\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55SQLE\u4f7f\u7528\u7684\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Test Connection"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8fde\u63a5\u662f\u5426\u6210\u529f, \u5c06\u5c1d\u8bd5\u767b\u5f55SQLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Project"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB Type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u5176\u4ed6\u914d\u7f6e\u6b63\u786e\u65f6\uff0c\u8be5\u4e0b\u62c9\u83dc\u5355\u5c06\u81ea\u52a8\u83b7\u53d6\u652f\u6301\u5ba1\u6838\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u7c7b\u578b\uff0c\u5e76\u4f7f\u7528\u8be5\u5b9e\u4f8b\u7c7b\u578b\u7684\u5ba1\u6838\u89c4\u5219\u8fdb\u884c\u5ba1\u6838")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Source"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6e90\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Schema"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0")))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,l.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4f7f\u7528\u63d2\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9009\u4e2d\u9700\u8981\u5ba1\u6838\u7684SQL\u8bed\u53e5\uff0c\u53ef\u4ee5\u540c\u65f6\u9009\u4e2d\u591a\u6761\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53f3\u952e\u70b9\u51fb\u9009\u4e2d\u7684SQL\u8bed\u53e5\uff0c\u9009\u62e9","[SQLE SQL Audit]","\uff0c\u63d2\u4ef6\u5c06\u4ee5\u89c6\u56fe\u7684\u5f62\u5f0f\u5c55\u793a\u5ba1\u6838\u7ed3\u679c\u3002\n",(0,l.kt)("img",{alt:"eclipseaudit1",src:a(5642).Z,width:"1872",height:"1108"})),(0,l.kt)("li",{parentName:"ol"},"\u82e5\u8981\u5ba1\u6838MyBatis XML\u6587\u4ef6\u6216SQL\u6587\u4ef6\uff0c\u9009\u4e2d\u5bf9\u5e94\u7684\u6587\u4ef6\uff0c\u53f3\u952e\u70b9\u51fb\uff0c\u9009\u62e9","[SQLE MyBatis Audit]","\u3002\n",(0,l.kt)("img",{alt:"eclipseauditxml",src:a(4855).Z,width:"1872",height:"1108"}))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u8fd8\u652f\u6301\u5bf9\u6587\u4ef6\u5939\u8fdb\u884cSQL\u5ba1\u6838\uff0c\u4f46\u4ec5\u652f\u6301\u5ba1\u6838\u6587\u4ef6\u5939\u4e2d\u7684XML\u6587\u4ef6\u3002")),(0,l.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,l.kt)("p",null,"Eclipse\u4e2d\u4ea7\u751f\u7684\u5ba1\u6838\u64cd\u4f5c\uff0c\u5c06\u540c\u6b65\u8bb0\u5f55\u5230SQLE\u5e73\u53f0\uff0c\u60a8\u53ef\u4ee5\u5728\u5e73\u53f0\u67e5\u770b\u5386\u53f2\u5ba1\u6838\u8bb0\u5f55\u3002"))}c.isMDXComponent=!0},3011:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eclipse-install-edit-7c48915548f9faf8dd8cc42cbf89e7ac.png"},1301:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eclipse-install-a8e392222f77a6bed68ef9d81cceafdc.png"},5642:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eclipseaudit1-016477e4c99d0d73cfb635442793781f.gif"},4855:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eclipseauditxml-0ce4fd1b8fc3b334f7fb5bf9d22ea523.gif"}}]);