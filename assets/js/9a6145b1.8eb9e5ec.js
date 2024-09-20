"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[1731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=l,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={title:"\u7ba1\u63a7SQL\u4f8b\u5916\u7ba1\u7406"},i="\u7ba1\u63a7SQL\u4f8b\u5916`\u4f01\u4e1a\u7248`",o={unversionedId:"user-manual/project/blacklist-manager",id:"user-manual/project/blacklist-manager",title:"\u7ba1\u63a7SQL\u4f8b\u5916\u7ba1\u7406",description:"\u5728\u4f01\u4e1a\u7248\u4e2d\uff0c\u7ba1\u63a7SQL\u4f8b\u5916\u529f\u80fd\u5141\u8bb8\u7528\u6237\u6392\u9664\u90a3\u4e9b\u5728SQL\u7ba1\u63a7\u4e2d\u4e0d\u5173\u952e\u7684\u8bed\u53e5\uff0c\u4f8b\u5982\u4e8b\u52a1\u63a7\u5236\u8bed\u53e5\uff08BEGIN\u3001END\u7b49\uff09\uff0c\u4ece\u800c\u51cf\u5c11\u7ba1\u63a7\u9762\u677f\u4e0a\u7684\u4e0d\u5fc5\u8981\u5e72\u6270\uff0c\u8ba9\u8fd0\u7ef4\u4eba\u5458\u4e13\u6ce8\u4e8e\u8bc6\u522b\u548c\u89e3\u51b3\u6f5c\u5728\u6027\u80fd\u74f6\u9888\u6216\u98ce\u9669\u70b9\u3002",source:"@site/docs/user-manual/project/blacklist-manager.md",sourceDirName:"user-manual/project",slug:"/user-manual/project/blacklist-manager",permalink:"/sqle-docs/docs/user-manual/project/blacklist-manager",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/project/blacklist-manager.md",tags:[],version:"current",frontMatter:{title:"\u7ba1\u63a7SQL\u4f8b\u5916\u7ba1\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u5ba1\u6838SQL\u4f8b\u5916\u7ba1\u7406",permalink:"/sqle-docs/docs/user-manual/project/whitelist-manager"},next:{title:"\u64cd\u4f5c\u8bb0\u5f55",permalink:"/sqle-docs/docs/user-manual/project/operation_records"}},c={},u=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:3},{value:"\u8bbf\u95ee\u7ba1\u63a7SQL\u4f8b\u5916",id:"\u8bbf\u95ee\u7ba1\u63a7sql\u4f8b\u5916",level:4},{value:"\u6dfb\u52a0\u7ba1\u63a7SQL\u4f8b\u5916",id:"\u6dfb\u52a0\u7ba1\u63a7sql\u4f8b\u5916",level:4},{value:"\u67e5\u770b\u548c\u6267\u884c",id:"\u67e5\u770b\u548c\u6267\u884c",level:4}],s={toc:u};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7ba1\u63a7sql\u4f8b\u5916\u4f01\u4e1a\u7248"},"\u7ba1\u63a7SQL\u4f8b\u5916",(0,l.kt)("inlineCode",{parentName:"h1"},"\u4f01\u4e1a\u7248")),(0,l.kt)("p",null,"\u5728\u4f01\u4e1a\u7248\u4e2d\uff0c\u7ba1\u63a7SQL\u4f8b\u5916\u529f\u80fd\u5141\u8bb8\u7528\u6237\u6392\u9664\u90a3\u4e9b\u5728SQL\u7ba1\u63a7\u4e2d\u4e0d\u5173\u952e\u7684\u8bed\u53e5\uff0c\u4f8b\u5982\u4e8b\u52a1\u63a7\u5236\u8bed\u53e5\uff08BEGIN\u3001END\u7b49\uff09\uff0c\u4ece\u800c\u51cf\u5c11\u7ba1\u63a7\u9762\u677f\u4e0a\u7684\u4e0d\u5fc5\u8981\u5e72\u6270\uff0c\u8ba9\u8fd0\u7ef4\u4eba\u5458\u4e13\u6ce8\u4e8e\u8bc6\u522b\u548c\u89e3\u51b3\u6f5c\u5728\u6027\u80fd\u74f6\u9888\u6216\u98ce\u9669\u70b9\u3002"),(0,l.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"\u7528\u6237\u91c7\u96c6\u5230\u7684SQL\u4e2d\u5305\u542b\u65e0\u5173\u6216\u4e0d\u5173\u5fc3\u7684\u8bed\u53e5\uff0c\u5f71\u54cd\u7528\u6237\u5728SQL\u7ba1\u63a7\u5217\u8868\u4e2d\u8bc6\u522b\u548c\u89e3\u51b3\u6f5c\u5728\u95ee\u9898\u3002"),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("h4",{id:"\u8bbf\u95ee\u7ba1\u63a7sql\u4f8b\u5916"},"\u8bbf\u95ee\u7ba1\u63a7SQL\u4f8b\u5916"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u7684\u7ba1\u63a7SQL\u4f8b\u5916\u83dc\u5355\u8fdb\u5165\uff0c\u4e5f\u53ef\u4ee5\u5c06\u4e0d\u5173\u6ce8\u7684SQL\u5feb\u901f\u6dfb\u52a0\u4e3a\u7ba1\u63a7SQL\u4f8b\u5916\u3002")),(0,l.kt)("h4",{id:"\u6dfb\u52a0\u7ba1\u63a7sql\u4f8b\u5916"},"\u6dfb\u52a0\u7ba1\u63a7SQL\u4f8b\u5916"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5217\u8868\u53f3\u4e0a\u89d2\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u7ba1\u63a7SQL\u4f8b\u5916"),"\u6309\u94ae\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5339\u914d\u6a21\u5f0f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6309\u5173\u952e\u5b57\u5339\u914d\uff1a\u5339\u914d\u542b\u6709\u5173\u952e\u5b57\u7684SQL\u8bed\u53e5\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309SQL\u6307\u7eb9\u5339\u914d\uff1a\u901a\u8fc7\u5206\u6790SQL\u67e5\u8be2\u7684\u7ed3\u6784\u7279\u5f81\u751f\u6210\u552f\u4e00\u6807\u8bc6\u7b26\uff08\u6307\u7eb9\uff09\uff0c\u7528\u4e8e\u8bc6\u522b\u548c\u6bd4\u8f83\u67e5\u8be2\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309IP\u5339\u914d\uff1a\u5339\u914d\u7279\u5b9aIP\u5730\u5740\u53d1\u8d77\u7684SQL\u8bed\u53e5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u7f51\u6bb5\u5339\u914d\uff1a\u5339\u914d\u7279\u5b9a\u7f51\u6bb5\u5185\u7684SQL\u8bed\u53e5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u4e3b\u673a\u540d\u5339\u914d\uff1a\u5339\u914d\u7279\u5b9a\u4e3b\u673a\u540d\u7684SQL\u8bed\u53e5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u6570\u636e\u6e90\u5339\u914d\uff1a\u5339\u914d\u7279\u5b9a\u6570\u636e\u6e90\u7684SQL\u8bed\u53e5\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\u63cf\u8ff0\uff1a\u63d0\u4f9b\u8be5\u7ba1\u63a7SQL\u4f8b\u5916\u7684\u5e94\u7528\u573a\u666f\u63cf\u8ff0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\u4f8b\u5916\u5185\u5bb9\uff1a\u8f93\u5165\u9700\u8981\u6392\u9664\u7684SQL\u8bed\u53e5\u6216\u76f8\u5173\u4fe1\u606f\u3002")),(0,l.kt)("h4",{id:"\u67e5\u770b\u548c\u6267\u884c"},"\u67e5\u770b\u548c\u6267\u884c"),(0,l.kt)("p",null,"\u6210\u529f\u6dfb\u52a0\u7ba1\u63a7SQL\u4f8b\u5916\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u5f53\u524d\u9879\u76ee\u4e2d\u67e5\u770b\u6240\u6709\u7684\u9879\u76ee\u7ba1\u63a7SQL\u4f8b\u5916\u53ca\u5176\u5339\u914d\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"blacklist",src:r(6897).Z,width:"1524",height:"863"})),(0,l.kt)("p",null,"SQL\u7ba1\u63a7\u5217\u8868\u5c06\u4e0d\u518d\u51fa\u73b0\u5bf9\u5e94\u7684SQL\u3002"))}p.isMDXComponent=!0},6897:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/blacklist-ff5625bac1f8dbff6dfc841895253ae9.png"}}]);