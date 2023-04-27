"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[8420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=l,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={title:"\u529f\u80fd\u8bf4\u660e"},o="\u529f\u80fd\u8bf4\u660e",i={unversionedId:"user-manual/sql-workbench/introduction",id:"user-manual/sql-workbench/introduction",title:"\u529f\u80fd\u8bf4\u660e",description:"CloudBeaver Community \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 Web \u6570\u636e\u5e93\u53ef\u89c6\u5316\u7ba1\u7406\u5de5\u5177\uff0c\u652f\u6301 PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, DB2, Firebird, H2, Trino \u7b49\u6570\u636e\u5e93\u3002",source:"@site/docs/user-manual/sql-workbench/introduction.md",sourceDirName:"user-manual/sql-workbench",slug:"/user-manual/sql-workbench/introduction",permalink:"/sqle-docs/docs/user-manual/sql-workbench/introduction",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/packages/docs/user-manual/sql-workbench/introduction.md",tags:[],version:"current",frontMatter:{title:"\u529f\u80fd\u8bf4\u660e"},sidebar:"tutorialSidebar",previous:{title:"\u5916\u90e8\u6570\u636e\u6e90\u540c\u6b65\u3010\u4f01\u4e1a\u7248\u3011",permalink:"/sqle-docs/docs/user-manual/sys-configuration/instance_syn"},next:{title:"\u914d\u7f6e\u65b9\u6cd5",permalink:"/sqle-docs/docs/user-manual/sql-workbench/how-to-configure"}},u={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:3},{value:"\u6b65\u9aa4\u4e00 SQLE\u5e73\u53f0\u914d\u7f6e\u7528\u6237",id:"\u6b65\u9aa4\u4e00-sqle\u5e73\u53f0\u914d\u7f6e\u7528\u6237",level:4},{value:"\u6b65\u9aa4\u4e8c SQLe\u5e73\u53f0\u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f8b\u5ba1\u6838\u7b49\u7ea7",id:"\u6b65\u9aa4\u4e8c-sqle\u5e73\u53f0\u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f8b\u5ba1\u6838\u7b49\u7ea7",level:4},{value:"\u6b65\u9aa4\u4e09 \u767b\u5f55CloudBeaver",id:"\u6b65\u9aa4\u4e09-\u767b\u5f55cloudbeaver",level:4},{value:"\u6b65\u9aa4\u56db \u4e0b\u53d1SQL",id:"\u6b65\u9aa4\u56db-\u4e0b\u53d1sql",level:4},{value:"\u64cd\u4f5c\u7ed3\u679c",id:"\u64cd\u4f5c\u7ed3\u679c",level:3}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,l.kt)("p",null,"CloudBeaver Community \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 Web \u6570\u636e\u5e93\u53ef\u89c6\u5316\u7ba1\u7406\u5de5\u5177\uff0c\u652f\u6301 PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, DB2, Firebird, H2, Trino \u7b49\u6570\u636e\u5e93\u3002"),(0,l.kt)("p",null,"SQLE\u901a\u8fc7\u96c6\u6210CloudBeaver\uff0c\u4f7f\u5f97SQLE\u5177\u5907\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u80fd\u529b\uff0c\u65b9\u4fbf\u5f00\u53d1\u6216DBA\u5728SQLE\u4e2d\u65b9\u4fbf\u5730\u64cd\u4f5c\u6570\u636e\u5e93"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SQL\u5de5\u4f5c\u53f0\u4f1a\u81ea\u52a8\u540c\u6b65SQLe\u7684\u7528\u6237\u4fe1\u606f\u548c\u5b9e\u4f8b\u4fe1\u606f, \u907f\u514d\u65e0\u6743\u9650\u7684\u4eba\u8fdb\u884c\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u53c2\u6570\u914d\u7f6e\u53caSQL\u67e5\u8be2\u5ba1\u6838\u5bf9SQL\u505a\u9650\u5236\u548c\u5ba1\u6838\uff0c\u6709\u6548\u907f\u514d\u4e0d\u5408\u89c4\u7684\u67e5\u8be2")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u5f53\u4e1a\u52a1\u4eba\u5458\u9700\u8981\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u6570\u636e\u68c0\u7d22\u65f6\uff0c\u4e00\u4e9b\u67e5\u8be2SQL\u53ef\u80fd\u4f1a\u9020\u6210\u6570\u636e\u5e93\u6027\u80fd\u95ee\u9898\u751a\u81f3\u592f\u6b7b\u3002\u4f46\u5728\u4f20\u7edf\u7684\u4f7f\u7528\u573a\u666f\u4e2d\uff0cDBA\u5f88\u96be\u5bf9\u4e1a\u52a1\u4eba\u5458\u7684\u884c\u4e3a\u8fdb\u884c\u8ffd\u8e2a\u548c\u7ba1\u63a7\uff0c\u65e0\u6cd5\u9650\u5236\u6709\u95ee\u9898\u7684SQL\u5728\u751f\u4ea7\u73af\u5883\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u56e0\u800cSQLe\u5e73\u53f0\u96c6\u6210CloudBeaver\u6570\u636e\u5e93\u53ef\u89c6\u5316\u7ba1\u7406\u5de5\u5177\uff0c\u6ee1\u8db3\u5728\u7ebfSQL\u67e5\u8be2\u9700\u6c42\u7684\u540c\u65f6\uff0c\u8fdb\u884c\u4e1a\u52a1\u4eba\u5458\u7684\u64cd\u4f5c\u6743\u9650\u63a7\u5236\uff0c\u5e76\u5bf9\u4e1a\u52a1\u4eba\u5458\u7684SQL\u8fdb\u884c\u5ba1\u8ba1\uff0c\u62d2\u7edd\u4e0d\u5408\u89c4\u7684SQL\u8fd0\u884c\u3002"),(0,l.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"\u5b89\u88c5CloudBeaver\u5e76\u5b8c\u6210\u914d\u7f6e\uff0c\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/sqle-docs/docs/user-manual/sql-workbench/how-to-configure"},"sql\u5de5\u4f5c\u53f0\u914d\u7f6e\u65b9\u6cd5"),"\u3002"),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e00-sqle\u5e73\u53f0\u914d\u7f6e\u7528\u6237"},"\u6b65\u9aa4\u4e00 SQLE\u5e73\u53f0\u914d\u7f6e\u7528\u6237"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u6709SQL\u67e5\u8be2\u6743\u9650\u7684\u89d2\u8272"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6210\u5458\u5173\u8054\u81f3\u8be5\u89d2\u8272")),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-sqle\u5e73\u53f0\u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f8b\u5ba1\u6838\u7b49\u7ea7"},"\u6b65\u9aa4\u4e8c SQLe\u5e73\u53f0\u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f8b\u5ba1\u6838\u7b49\u7ea7"),(0,l.kt)("p",null,"\u521b\u5efa/\u4fee\u6539\u4e00\u4e2a\u5b9e\u4f8b, \u5f00\u542fSQL\u67e5\u8be2\uff0c\u5e76\u8bbe\u7f6e\u8fd0\u884c\u67e5\u8be2\u7684\u6700\u9ad8\u5ba1\u6838\u7b49\u7ea7\uff0c\u5e76\u63d0\u4ea4\u4fee\u6539"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL\u67e5\u8be2\u662f\u5426\u9700\u8981\u5ba1\u6838"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5f00\u542f\u6b64\u9879\uff0c\u624d\u4f1a\u5728\u6267\u884cSQL\u67e5\u8be2\u65f6\u8fdb\u884c\u5ba1\u6838")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u67e5\u8be2\u7684\u6700\u9ad8\u5ba1\u6838\u7b49\u7ea7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5ba1\u6838\u7b49\u7ea7\u4f4e\u4e8e\u6216\u7b49\u4e8e\u8fd9\u4e2a\u7b49\u7ea7\u5c06\u4f1a\u653e\u884c, \u9ad8\u4e8e\u8fd9\u4e2a\u7b49\u7ea7\u5c06\u65e0\u6cd5\u6267\u884c")))),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e09-\u767b\u5f55cloudbeaver"},"\u6b65\u9aa4\u4e09 \u767b\u5f55CloudBeaver"),(0,l.kt)("p",null,"\u81ea\u52a8\u767b\u5f55\u8bf4\u660e\uff1a\u5728\u767b\u9646SQLE\u65f6\u4f1a\u68c0\u6d4bCloudBeaver\u662f\u5426\u5904\u4e8e\u767b\u9646\u72b6\u6001, SQLE\u5c06\u4f1a\u81ea\u52a8\u4f7f\u7528\u5f53\u524dSQLE\u7528\u6237\u767b\u5f55CloudBeaver\u3002 "),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u82e5\u5f53\u524d\u7528\u6237\u65e0SQL\u67e5\u8be2\u6743\u9650\uff0c\u5219\u65e0\u6743\u767b\u5f55\u3002")),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u56db-\u4e0b\u53d1sql"},"\u6b65\u9aa4\u56db \u4e0b\u53d1SQL"),(0,l.kt)("p",null,"\u9009\u62e9\u9700\u8981\u64cd\u4f5c\u7684\u6570\u636e\u6e90\uff0c\u5e76\u8f93\u5165SQL\u8bed\u53e5\u70b9\u51fb\u8fd0\u884c\uff0c\u53ef\u67e5\u770bSQL\u67e5\u8be2\u7ed3\u679c"),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u7ed3\u679c"},"\u64cd\u4f5c\u7ed3\u679c"),(0,l.kt)("p",null,"\u5ba1\u6838\u5931\u8d25\u7684SQL\u5c06\u4f1a\u88ab\u62e6\u622a, \u5e76\u62a5\u51fa\u9519\u8bef, \u53ef\u4ee5\u70b9\u51fb\u8be6\u60c5\u67e5\u770b\u9519\u8bef\u8be6\u60c5\n",(0,l.kt)("img",{alt:"error",src:r(2159).Z,width:"1879",height:"873"})),(0,l.kt)("p",null,"\u6309\u8981\u6c42\u4fee\u6539SQL, \u518d\u6b21\u6267\u884c, \u5982\u679c\u5ba1\u6838\u901a\u8fc7\u5c06\u4f1a\u6267\u884c\u5f53\u524dSQL\n",(0,l.kt)("img",{alt:"success",src:r(161).Z,width:"1879",height:"873"})))}d.isMDXComponent=!0},2159:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/error-17b1e3ff87ad8bdc3d99e7fbf391cf8a.png"},161:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/success-6c0e71f4281307e206a26548a793ff8e.png"}}]);