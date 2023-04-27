"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[4090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u6570\u636e\u6e90\u7ba1\u7406"},i="\u6570\u636e\u6e90\u7ba1\u7406",o={unversionedId:"user-manual/project/instance-manager",id:"user-manual/project/instance-manager",title:"\u6570\u636e\u6e90\u7ba1\u7406",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u8fdb\u884c\u6570\u636e\u6e90\u7ba1\u7406\uff0c\u5305\u62ec\u6570\u636e\u6e90\u7684\u589e\u52a0\u3001\u5220\u9664\u3001\u7f16\u8f91\u64cd\u4f5c\u3002",source:"@site/docs/user-manual/project/instance-manager.md",sourceDirName:"user-manual/project",slug:"/user-manual/project/instance-manager",permalink:"/sqle-docs/docs/user-manual/project/instance-manager",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/packages/docs/user-manual/project/instance-manager.md",tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u6e90\u7ba1\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u9879\u76ee\u3010\u4f01\u4e1a\u7248\u3011",permalink:"/sqle-docs/docs/user-manual/project/project_create"},next:{title:"\u6210\u5458/\u6210\u5458\u7ec4\u7ba1\u7406",permalink:"/sqle-docs/docs/user-manual/project/group_member"}},u={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u6dfb\u52a0\u6570\u636e\u6e90",id:"\u6dfb\u52a0\u6570\u636e\u6e90",level:3},{value:"\u524d\u7f6e\u64cd\u4f5c",id:"\u524d\u7f6e\u64cd\u4f5c",level:4},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:4},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:4},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:3},{value:"\u66f4\u591a\u7ba1\u7406\u529f\u80fd",id:"\u66f4\u591a\u7ba1\u7406\u529f\u80fd",level:3}],p={toc:c};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u6e90\u7ba1\u7406"},"\u6570\u636e\u6e90\u7ba1\u7406"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u8fdb\u884c\u6570\u636e\u6e90\u7ba1\u7406\uff0c\u5305\u62ec\u6570\u636e\u6e90\u7684\u589e\u52a0\u3001\u5220\u9664\u3001\u7f16\u8f91\u64cd\u4f5c\u3002\n\u6570\u636e\u6e90\u662f\u5de5\u5355\u548c\u626b\u63cf\u4efb\u52a1\u7684\u5b9e\u65bd\u5bf9\u8c61\uff0c\u7528\u6237\u5728\u5e73\u53f0\u521b\u5efa\u7684\u5de5\u5355\u548c\u626b\u63cf\u4efb\u52a1\u90fd\u5c06\u9488\u5bf9\u6307\u5b9a\u7684\u6570\u636e\u6e90\u6267\u884c\u3002\u56e0\u800c\u9879\u76ee\u521b\u5efa\u540e\u9700\u8981\u9996\u5148\u914d\u7f6e\u9879\u76ee\u5185\u53ef\u7528\u7684\u6570\u636e\u6e90\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6570\u636e\u6e90\u662fSQLE\u8fde\u5e93\u5ba1\u6838\u7684\u5bf9\u8c61\uff0c\u4efb\u4f55\u5ba1\u6838\u7684\u573a\u666f\u4e0b\u82e5\u53ef\u4ee5\u4e0d\u9009\u6570\u636e\u6e90\u5219\u4ee3\u8868\u5c06\u8fdb\u884c\u8131\u5e93\u5ba1\u6838\u3002")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u5b9e\u9645\u751f\u4ea7\u4e2d\uff0c\u5982\u679c\u9700\u8981\u9488\u5bf9\u67d0\u4e2a\u6570\u636e\u6e90\u4e0b\u53d1SQL\u6216\u521b\u5efa\u626b\u63cf\u4efb\u52a1\uff0c\u9700\u8981\u9996\u5148\u5c06\u6570\u636e\u6e90\u6dfb\u52a0\u81f3SQLE\u5e73\u53f0\uff0c\u6d4b\u8bd5\u8fde\u901a\u6210\u529f\u540e\u624d\u53ef\u521b\u5efa\u5de5\u5355\u3001\u521b\u5efa\u626b\u63cf\u4efb\u52a1\u3002"),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u6570\u636e\u6e90"},"\u6dfb\u52a0\u6570\u636e\u6e90"),(0,a.kt)("h4",{id:"\u524d\u7f6e\u64cd\u4f5c"},"\u524d\u7f6e\u64cd\u4f5c"),(0,a.kt)("p",null,"\u9879\u76ee\u7ba1\u7406\u5458\u8fdb\u5165\u6307\u5b9a\u7684\u9879\u76ee"),(0,a.kt)("h4",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,a.kt)("p",null,"\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u7684\u300c\u6570\u636e\u6e90\u300d\u83dc\u5355\uff0c\u8fdb\u5165\u6570\u636e\u6e90\u7ba1\u7406\u9875\u9762\u540e\uff0c\u70b9\u51fb\u300c\u6dfb\u52a0\u6570\u636e\u6e90\u300d\uff0c\u586b\u5199\u6570\u636e\u6e90\u76f8\u5173\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u540d\u79f0\uff1a\u547d\u540d\u5f53\u524d\u65b0\u5efa\u7684\u6570\u636e\u6e90\uff0c\u5982\uff1aactionsky-test"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u63cf\u8ff0\uff1a\u7528\u6237\u53ef\u5bf9\u6570\u636e\u6e90\u8865\u5145\u66f4\u591a\u63cf\u8ff0\uff0c\u4fbf\u4e8e\u7528\u6237\u901a\u8fc7\u540d\u79f0+\u63cf\u8ff0\u5feb\u901f\u66f4\u7cbe\u51c6\u5730\u533a\u5206\u6570\u636e\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7c7b\u578b\uff1a\u9009\u62e9\u6570\u636e\u5e93\u5b9e\u4f8b\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u7c7b\u578b\uff0c\u5f53\u524d\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b\u5305\u62ec\uff1aPostgreSQL\u3001TiDB\u3001MySQL\u3001DB2\u3001SQL Server\u3001OceanBase For MySQL\u3001Oracle"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5730\u5740\uff1a\u8f93\u5165\u6570\u636e\u5e93\u5b9e\u4f8b\u7684\u8fde\u63a5\u5730\u5740\uff0c\u652f\u6301IP\u5730\u5740\u3001\u57df\u540d\u4e24\u79cd\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7aef\u53e3\uff1a\u8f93\u5165\u6570\u636e\u5e93\u5b9e\u4f8b\u7684\u8fde\u63a5\u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u7528\u6237\uff1a\u8f93\u5165\u6570\u636e\u5e93\u5b9e\u4f8b\u7684\u8fde\u63a5\u7528\u6237\uff0cSQLe\u5728\u6267\u884cSQL\u5ba1\u6838\u4ee5\u53caSQL\u4e0a\u7ebf\u65f6\uff0c\u4f1a\u901a\u8fc7\u8be5\u8fde\u63a5\u7528\u6237\u8bbf\u95ee\u6570\u636e\u5e93\u5b9e\u4f8b\u53ca\u4e0b\u53d1SQL"),(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u7801\uff1a\u8f93\u5165\u6570\u636e\u5e93\u5b9e\u4f8b\u7684\u8fde\u63a5\u7528\u6237\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u89c4\u5219\u6a21\u677f\uff1a\u5ba1\u6838\u89c4\u5219\u6a21\u677f\u5c06\u7528\u4e8e\u521b\u5efa\u5de5\u5355\u65f6\u7684\u5ba1\u6838\u3001\u626b\u63cf\u4efb\u52a1\u7684\u5ba1\u6838\u3001SQL\u67e5\u8be2\u7684\u5ba1\u6838"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u65f6\u95f4\uff1a\u5982\u679c\u914d\u7f6e\u4e86\u8fd0\u7ef4\u65f6\u95f4, \u5de5\u5355\u5c06\u53ea\u80fd\u5728\u8fd0\u7ef4\u65f6\u95f4\u5185\u4e0a\u7ebf(\u7acb\u5373\u4e0a\u7ebf\u548c\u5b9a\u65f6\u4e0a\u7ebf\u90fd\u53d7\u6b64\u5f71\u54cd), \u652f\u6301\u914d\u7f6e\u591a\u4e2a\u8fd0\u7ef4\u65f6\u95f4, \u9ed8\u8ba4\u65e0\u8fd0\u7ef4\u65f6\u95f4,\u5373\u4e0d\u9650\u5236\u4e0a\u7ebf\u65f6\u95f4"),(0,a.kt)("li",{parentName:"ul"},"SQL\u67e5\u8be2\u662f\u5426\u9700\u8981\u5ba1\u6838\uff1a\u9ed8\u8ba4\u4e0d\u5ba1\u6838\uff1b\u5982\u7528\u6237\u9009\u62e9\u5f00\u542f\u8be5\u529f\u80fd\uff0c\u5219\u7528\u6237\u5728SQL\u5de5\u4f5c\u53f0\u4e2d\u63d0\u4ea4\u7684SQL\u8bed\u53e5\uff0c\u5c06\u5339\u914d\u5ba1\u6838\u89c4\u5219\u6a21\u677f\u8fdb\u884cSQL\u5ba1\u6838\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u67e5\u8be2\u7684\u6700\u9ad8\u5ba1\u6838\u7b49\u7ea7\uff1a\u53ea\u6709\u5f00\u542f SQL\u67e5\u8be2\u7684\u5ba1\u6838\u529f\u80fd\u624d\u751f\u6548\uff1b\u652f\u6301\u56db\u79cd\u5ba1\u6838\u7b49\u7ea7\uff1anormal\u3001notice\u3001warn\u3001error\uff0c\u5982\u8bbe\u7f6e\u8fd0\u884c\u67e5\u8be2\u7684\u6700\u9ad8\u5ba1\u6838\u7b49\u7ea7\u4e3awarn\uff0c\u5219\u89e6\u53d1\u4e86warn\u7b49\u7ea7\u89c4\u5219\u4ee5\u4e0a\u7684SQL\u8bed\u53e5\u5c06\u62a5\u9519\uff0c\u5e76\u4e0d\u4e88\u6267\u884c\uff1b\u672a\u89e6\u53d1warn\u7b49\u7ea7\u89c4\u5219\u4ee5\u4e0a\u7684SQL\u8bed\u53e5\u5c06\u88ab\u6267\u884c\u3002")),(0,a.kt)("h4",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u6dfb\u52a0\u6210\u529f\u540e\uff0c\u53ef\u5728\u6570\u636e\u6e90\u5217\u8868\u67e5\u770b\u65b0\u589e\u7684\u6570\u636e\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u53ef\u6839\u636e\u6570\u636e\u6e90\u540d\u79f0\u3001\u6570\u636e\u5e93\u5730\u5740\u3001\u6570\u636e\u5e93\u7c7b\u578b\u3001\u4f7f\u7528\u7684\u5ba1\u6838\u89c4\u5219\u6a21\u677f\u7b5b\u9009\u9879\u8fdb\u884c\u7b5b\u9009\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6570\u636e\u6e90\u5217\u8868",src:r(1003).Z,width:"1213",height:"718"})),(0,a.kt)("h3",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5ba1\u6838\u89c4\u5219\uff1a\u6dfb\u52a0\u6570\u636e\u6e90\u540e\uff0c\u53ef\u9488\u5bf9\u6307\u5b9a\u6570\u636e\u6e90\u521b\u5efa\u9002\u7528\u7684\u5ba1\u6838\u89c4\u5219\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"/sqle-docs/docs/user-manual/project/rule-template-manager"},"\u5ba1\u6838\u89c4\u5219\u6a21\u677f\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6210\u5458/\u6210\u5458\u7ec4\uff1a\u6dfb\u52a0\u6570\u636e\u6e90\u540e\uff0c\u9700\u8981\u5f15\u5165\u6210\u5458/\u6210\u5458\u7ec4\u5bf9\u6570\u636e\u6e90\u8fdb\u884c\u64cd\u4f5c\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"/sqle-docs/docs/user-manual/project/group_member"},"\u6210\u5458/\u6210\u5458\u7ec4\u7ba1\u7406"),"\u3002")),(0,a.kt)("h3",{id:"\u66f4\u591a\u7ba1\u7406\u529f\u80fd"},"\u66f4\u591a\u7ba1\u7406\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u6570\u636e\u6e90\uff1a\u70b9\u51fb\u6570\u636e\u6e90\u5217\u8868\u9875\u9762\u5bf9\u5e94\u6570\u636e\u6e90\u6761\u76ee\u540e\u7684\u3010\u7f16\u8f91\u3011\u6309\u94ae\uff0c\u53ef\u4ee5\u4fee\u6539\u6307\u5b9a\u6570\u636e\u6e90\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9650\u5236\uff1a\u6570\u636e\u6e90\u540d\u79f0\u53ca\u6570\u636e\u5e93\u7c7b\u578b\u4e0d\u652f\u6301\u4fee\u6539\uff0c\u5176\u4ed6\u4fe1\u606f\u5747\u53ef\u4fee\u6539"))),(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u6570\u636e\u6e90\uff1a\u70b9\u51fb\u6570\u636e\u6e90\u5217\u8868\u9875\u9762\u5bf9\u5e94\u6570\u636e\u6e90\u6761\u76ee\u540e\u7684\u3010\u5220\u9664\u3011\u6309\u94ae\uff0c\u53ef\u4ee5\u5220\u9664\u6307\u5b9a\u6570\u636e\u6e90\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9650\u5236\uff1a\u82e5\u6570\u636e\u6e90\u4e0a\u8fd8\u6709\u76f8\u5e94\u5de5\u5355\u672a\u5b8c\u6210\uff0c\u5219\u8be5\u6570\u636e\u6e90\u6682\u65f6\u4e0d\u53ef\u5220\u9664"))),(0,a.kt)("li",{parentName:"ul"},"\u8fde\u901a\u6027\u6d4b\u8bd5\uff1a\u70b9\u51fb\u3010\u66f4\u591a\u3011\u6309\u94ae\uff0c\u9009\u62e9\u8fde\u901a\u6027\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u662f\u5426\u53ef\u4ee5\u7528\u5f53\u524d\u7684\u6570\u636e\u6e90\u5730\u5740\u53ca\u7528\u6237\u5bc6\u7801\u6210\u529f\u8fde\u5165\u6570\u636e\u6e90\u3002")))}s.isMDXComponent=!0},1003:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/instance-manage-39cf9d11233af19a3775f93ed9d9eb07.png"}}]);