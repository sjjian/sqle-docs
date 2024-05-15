"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[5336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"SQL\u6587\u4ef6\u626b\u63cf"},l=void 0,o={unversionedId:"user-manual/project/audit_task/SQLfile_audit",id:"version-v2/user-manual/project/audit_task/SQLfile_audit",title:"SQL\u6587\u4ef6\u626b\u63cf",description:"\u672c\u8282\u4ecb\u7ecdSQL\u6587\u4ef6\u626b\u63cf\u7684\u5e94\u7528\u573a\u666f\u53ca\u914d\u7f6e\u65b9\u6cd5\u3002",source:"@site/versioned_docs/version-v2/user-manual/project/audit_task/SQLfile_audit.md",sourceDirName:"user-manual/project/audit_task",slug:"/user-manual/project/audit_task/SQLfile_audit",permalink:"/sqle-docs/docs/v2/user-manual/project/audit_task/SQLfile_audit",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v2/user-manual/project/audit_task/SQLfile_audit.md",tags:[],version:"v2",frontMatter:{title:"SQL\u6587\u4ef6\u626b\u63cf"},sidebar:"version-v2/tutorialSidebar",previous:{title:"MyBatis\u626b\u63cf",permalink:"/sqle-docs/docs/v2/user-manual/project/audit_task/mybatis"},next:{title:"\u5e94\u7528\u7a0b\u5e8fSQL\u6293\u53d6\u3010\u4f01\u4e1a\u7248\u3011",permalink:"/sqle-docs/docs/v2/user-manual/project/audit_task/java_application_audit"}},s={},u=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1",id:"\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1",level:3},{value:"\u6267\u884cScannerd\u6587\u4ef6",id:"\u6267\u884cscannerd\u6587\u4ef6",level:3},{value:"\u5e73\u53f0\u67e5\u770b\u6267\u884c\u7ed3\u679c",id:"\u5e73\u53f0\u67e5\u770b\u6267\u884c\u7ed3\u679c",level:3}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecdSQL\u6587\u4ef6\u626b\u63cf\u7684\u5e94\u7528\u573a\u666f\u53ca\u914d\u7f6e\u65b9\u6cd5\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5e73\u53f0\u5df2\u652f\u6301\u7684\u6240\u6709\u6570\u636e\u6e90\u7c7b\u578b\u5747\u652f\u6301SQL\u6587\u4ef6\u626b\u63cf")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u5f53\u7528\u6237\u9700\u8981\u5728\u6279\u91cf\u6267\u884cSQL\u524d\u626b\u63cfSQL\uff0c\u53d1\u73b0\u6f5c\u5728\u7684\u5b89\u5168\u6f0f\u6d1e\u3001\u63d0\u9ad8\u6570\u636e\u5e93\u6027\u80fd\u53ca\u6570\u636e\u5e93\u5f00\u53d1\u8d28\u91cf\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528SQL\u6587\u4ef6\u8fdb\u884c\u6279\u91cf\u626b\u63cf\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("p",null,"\u5728\u540e\u7aef\u73af\u5883\u4e2d\u51c6\u5907SQL\u6587\u4ef6"),(0,a.kt)("h3",{id:"\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1"},"\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1"),(0,a.kt)("p",null,"\u8fdb\u5165\u667a\u80fd\u626b\u63cf\u4efb\u52a1\u5217\u8868\uff0c\u70b9\u51fb\u65b0\u5efa\uff0c\u9009\u62e9SQL\u6587\u4ef6\u626b\u63cf\u4efb\u52a1\u7c7b\u578b\u3002"),(0,a.kt)("h3",{id:"\u6267\u884cscannerd\u6587\u4ef6"},"\u6267\u884cScannerd\u6587\u4ef6"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u4f7f\u7528rpm\u6216docker\u90e8\u7f72\u7684\u60c5\u51b5\u4e0b\uff0cscannerd\u901a\u5e38\u5728SQLE\u7684bin\u76ee\u5f55\u4e0b\u3002")),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'./scannerd sqlfile -H127.0.0.1 -N"SQLfile" -P"10000" -J"default" -D/root/sqle/sqle/cmd/scannerd/scanners/mybatis/testdata/ -A"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcG4iOiJ0ZXN0MDcyNCIsImV4cCI6MTcyMTcyODU0NywibmFtZSI6ImFkbWluIn0.CojdTvBkr-iN_26tWI-Kr6mMnJt1NIDr-Y3v7m9ySuM"\n')),(0,a.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-J, --project\uff1a\u8bf4\u660e\u626b\u63cf\u4efb\u52a1\u6240\u5728\u9879\u76ee\uff0c\u4f8b\u5982\u201cdefault\u201d\uff1b"),(0,a.kt)("li",{parentName:"ul"},"-H, --host string\uff1a\u6307\u5b9aSQLE\u4e3b\u673a\u6240\u5728\u5730\u5740\uff1b"),(0,a.kt)("li",{parentName:"ul"},"-P, --port string\uff1a\u6307\u5b9aSQLE\u6240\u5728\u7aef\u53e3\uff1b"),(0,a.kt)("li",{parentName:"ul"},"-N, --name string\uff1a\u6307\u5b9a\u626b\u63cf\u4efb\u52a1\u540d\u79f0\uff0cscannerd\u4f1a\u5c06\u83b7\u5f97\u7684SQL\u4f20\u81f3\u6307\u5b9a\u7684\u4efb\u52a1\u6c60\u4e2d\u5ba1\u6838\uff1b"),(0,a.kt)("li",{parentName:"ul"},"-D, --dir string\uff1a\u6307\u5b9a\u8981\u626b\u63cf\u7684SQL\u6587\u4ef6\u8def\u5f84\uff1b"),(0,a.kt)("li",{parentName:"ul"},"-A, --token string\uff1a\u8f93\u5165\u626b\u63cf\u4efb\u52a1\u51ed\u8bc1token\uff1b"),(0,a.kt)("li",{parentName:"ul"},"-K, --skip-sql-file-audit\uff1a\u53ea\u4e0a\u4f20sql\uff0c\u4e0d\u5ba1\u6838sql\uff1b"),(0,a.kt)("li",{parentName:"ul"},"-S, --skip-error-sql-file; \u8df3\u8fc7\u65e0\u6cd5\u89e3\u6790\u7684sql\u6587\u4ef6\uff1b")),(0,a.kt)("p",null,"\u83b7\u5f97\u6267\u884c\u7ed3\u679c\uff1a\n",(0,a.kt)("img",{alt:"sqlfile_audit",src:r(89813).Z,width:"1359",height:"563"})),(0,a.kt)("h3",{id:"\u5e73\u53f0\u67e5\u770b\u6267\u884c\u7ed3\u679c"},"\u5e73\u53f0\u67e5\u770b\u6267\u884c\u7ed3\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u8fdb\u5165\u626b\u63cf\u4efb\u52a1\u8be6\u60c5\uff0c\u53ef\u4ee5\u67e5\u770bSQLw\u6587\u4ef6\u4e2d\u5df2\u91c7\u96c6\u5230\u7684SQL\u4fe1\u606f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"li"},"\u7acb\u5373\u5ba1\u6838"),"\uff0c\u53ef\u4ee5\u5728\u626b\u63cf\u4efb\u52a1\u62a5\u544a\u4e2d\u83b7\u53d6\u5f53\u524dSQL\u7684\u5ba1\u6838\u7ed3\u679c\uff1b\n",(0,a.kt)("img",{alt:"sqlfile_result",src:r(88210).Z,width:"1920",height:"894"}))))}p.isMDXComponent=!0},89813:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sqlfile_audit-3ac0fc28a24301079040d2f84c9ad22b.png"},88210:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sqlfile_result-282860c7ba4169befe1fe7918eae4b00.png"}}]);