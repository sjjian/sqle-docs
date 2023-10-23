"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[6660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),k=l,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const o={title:"\u4e0a\u7ebf\u5de5\u5355"},a="\u4e0a\u7ebf\u5de5\u5355",i={unversionedId:"user-manual/project/workflow/exec-workflow",id:"version-v2/user-manual/project/workflow/exec-workflow",title:"\u4e0a\u7ebf\u5de5\u5355",description:"\u672c\u7ae0\u8be6\u7ec6\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u8fdb\u884c\u4e0a\u7ebf\u3002",source:"@site/versioned_docs/version-v2/user-manual/project/workflow/exec-workflow.md",sourceDirName:"user-manual/project/workflow",slug:"/user-manual/project/workflow/exec-workflow",permalink:"/sqle-docs/docs/v2/user-manual/project/workflow/exec-workflow",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v2/user-manual/project/workflow/exec-workflow.md",tags:[],version:"v2",frontMatter:{title:"\u4e0a\u7ebf\u5de5\u5355"},sidebar:"version-v2/tutorialSidebar",previous:{title:"\u5ba1\u6838\u5de5\u5355",permalink:"/sqle-docs/docs/v2/user-manual/project/workflow/audit-workflow"},next:{title:"\u529f\u80fd\u8bf4\u660e",permalink:"/sqle-docs/docs/v2/user-manual/project/audit_task/intro"}},u={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:3},{value:"\u6b65\u9aa4\u4e00 \u8fdb\u5165\u5f85\u4e0a\u7ebf\u7684\u5de5\u5355",id:"\u6b65\u9aa4\u4e00-\u8fdb\u5165\u5f85\u4e0a\u7ebf\u7684\u5de5\u5355",level:4},{value:"\u6b65\u9aa4\u4e8c \u8bbe\u7f6e\u5de5\u5355\u4e0a\u7ebf",id:"\u6b65\u9aa4\u4e8c-\u8bbe\u7f6e\u5de5\u5355\u4e0a\u7ebf",level:4},{value:"1.\u6279\u91cf\u7acb\u5373\u4e0a\u7ebf",id:"1\u6279\u91cf\u7acb\u5373\u4e0a\u7ebf",level:5},{value:"2.\u5355\u4e2a\u6570\u636e\u6e90\u7acb\u5373\u4e0a\u7ebf",id:"2\u5355\u4e2a\u6570\u636e\u6e90\u7acb\u5373\u4e0a\u7ebf",level:5},{value:"3.\u5355\u4e2a\u6570\u636e\u6e90\u5b9a\u65f6\u4e0a\u7ebf",id:"3\u5355\u4e2a\u6570\u636e\u6e90\u5b9a\u65f6\u4e0a\u7ebf",level:5},{value:"4.\u6807\u8bb0\u4e3a\u4eba\u5de5\u4e0a\u7ebf",id:"4\u6807\u8bb0\u4e3a\u4eba\u5de5\u4e0a\u7ebf",level:5},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3}],p={toc:c};function s(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e0a\u7ebf\u5de5\u5355"},"\u4e0a\u7ebf\u5de5\u5355"),(0,l.kt)("p",null,"\u672c\u7ae0\u8be6\u7ec6\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u8fdb\u884c\u4e0a\u7ebf\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece\u6570\u636e\u6e90\u89d2\u5ea6\uff0c\u652f\u6301\u591a\u6570\u636e\u6e90\u540c\u65f6\u4e0a\u7ebf\u3001\u5355\u6570\u636e\u6e90\u5206\u522b\u4e0a\u7ebf\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u4e0a\u7ebf\u65f6\u95f4\u89d2\u5ea6\uff0c\u652f\u6301\u7acb\u5373\u4e0a\u7ebf\u3001\u5b9a\u65f6\u4e0a\u7ebf\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u4e0a\u7ebf\u65b9\u5f0f\u89d2\u5ea6\uff0c\u652f\u6301\u5e73\u53f0\u76f4\u63a5\u4e0a\u7ebf\uff0c\u4e5f\u652f\u6301\u540e\u53f0\u6267\u884c\u540e\uff0c\u7ebf\u4e0a\u6807\u8bb0\u4e3a\u4eba\u5de5\u4e0a\u7ebf\uff1b")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u5b9e\u9645\u751f\u4ea7\u4e2d\u4e0a\u7ebf\u73af\u8282\u4e5f\u4f1a\u5b58\u5728\u4e1a\u52a1\u53d8\u66f4\u7b49\u8bf8\u591a\u60c5\u51b5\uff0c\u9664\u4e86\u5bf9\u5de5\u5355\u505a\u6574\u4f53\u4e0a\u7ebf\u64cd\u4f5c\u5916\uff0c\u8fd8\u5b58\u5728\u4ee5\u4e0b\u9700\u6c42\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u6839\u636e\u6570\u636e\u6e90\u5206\u522b\u4e0a\u7ebf\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u907f\u5f00\u4e1a\u52a1\u9ad8\u5cf0\u671f\uff0c\u5728\u6307\u5b9a\u65f6\u95f4\u4e0a\u7ebf\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u5728\u540e\u53f0\u6267\u884cSQL\uff0c\u9700\u8981\u7ebf\u4e0a\u6807\u8bb0\u4e3a\u4eba\u5de5\u4e0a\u7ebf\uff1b")),(0,l.kt)("p",null,"\u4e3a\u6b64\uff0cSQLE\u5e73\u53f0\u4e5f\u63d0\u4f9b\u4e86\u591a\u79cd\u4e0a\u7ebf\u65b9\u5f0f\uff0c\u6ee1\u8db3\u7528\u6237\u7684\u4e0a\u7ebf\u9700\u6c42\u3002"),(0,l.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"\u5de5\u5355\u72b6\u6001\u4e3a\u5f85\u4e0a\u7ebf\uff1b"),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e00-\u8fdb\u5165\u5f85\u4e0a\u7ebf\u7684\u5de5\u5355"},"\u6b65\u9aa4\u4e00 \u8fdb\u5165\u5f85\u4e0a\u7ebf\u7684\u5de5\u5355"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e00\uff1a\u4e0a\u7ebf\u64cd\u4f5c\u4eba\u53ef\u5728dashboard\u4e2d\u70b9\u51fb\u201c\u9700\u4e0a\u7ebf\u201d\u6807\u7b7e\uff0c\u67e5\u770b\u5f53\u524d\u9700\u8981\u4e0a\u7ebf\u7684\u5de5\u5355\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e8c\uff1a\u4e0a\u7ebf\u64cd\u4f5c\u4eba\u4e5f\u53ef\u5728\u9879\u76ee\u7684\u5de5\u5355\u5217\u8868\u4e2d\uff0c\u7b5b\u9009\u5de5\u5355\u72b6\u6001\u4e3a\u201c\u5f85\u4e0a\u7ebf\u201d\u7684\u5de5\u5355\uff0c\u67e5\u770b\u5f53\u524d\u9700\u8981\u4e0a\u7ebf\u7684\u5de5\u5355\uff1b")),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-\u8bbe\u7f6e\u5de5\u5355\u4e0a\u7ebf"},"\u6b65\u9aa4\u4e8c \u8bbe\u7f6e\u5de5\u5355\u4e0a\u7ebf"),(0,l.kt)("p",null,"\u6839\u636e\u4f7f\u7528\u573a\u666f\uff0c\u533a\u5206\u4e3a\u4ee5\u4e0b\u56db\u79cd\u5de5\u5355\u4e0a\u7ebf\u65b9\u5f0f\uff1b"),(0,l.kt)("h5",{id:"1\u6279\u91cf\u7acb\u5373\u4e0a\u7ebf"},"1.\u6279\u91cf\u7acb\u5373\u4e0a\u7ebf"),(0,l.kt)("p",null,"\u9488\u5bf9\u4e00\u4e2a\u5de5\u5355\u5185\u6d89\u53ca\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u4e14\u591a\u4e2a\u6570\u636e\u6e90\u9700\u8981\u540c\u65f6\u7acb\u5373\u4e0a\u7ebf\u7684\uff0c\u70b9\u51fb\u6279\u91cf\u4e0a\u7ebf\uff0c\u5e73\u53f0\u5c06\u5bf9\u5de5\u5355\u5185\u6d89\u53ca\u7684\u6240\u6709\u6570\u636e\u6e90\u6267\u884c\u4e0a\u7ebf\u64cd\u4f5c\uff1b"),(0,l.kt)("h5",{id:"2\u5355\u4e2a\u6570\u636e\u6e90\u7acb\u5373\u4e0a\u7ebf"},"2.\u5355\u4e2a\u6570\u636e\u6e90\u7acb\u5373\u4e0a\u7ebf"),(0,l.kt)("p",null,"\u70b9\u51fb\u7acb\u5373\u4e0a\u7ebf\u540e\uff0c\u5e73\u53f0\u5c06\u7acb\u5373\u8fde\u5165\u6307\u5b9a\u6570\u636e\u6e90\uff0c\u5e76\u6267\u884cSQL\u53d8\u66f4\uff1b"),(0,l.kt)("h5",{id:"3\u5355\u4e2a\u6570\u636e\u6e90\u5b9a\u65f6\u4e0a\u7ebf"},"3.\u5355\u4e2a\u6570\u636e\u6e90\u5b9a\u65f6\u4e0a\u7ebf"),(0,l.kt)("p",null,"\u70b9\u51fb\u5b9a\u65f6\u4e0a\u7ebf\uff0c\u5e76\u8bbe\u7f6e\u4e0a\u7ebf\u65f6\u95f4\uff0c\u5e73\u53f0\u5c06\u4e8e\u6307\u5b9a\u65f6\u95f4\u4e0a\u7ebfSQL\uff1b\n\u7528\u6237\u4e5f\u53ef\u53d6\u6d88\u5b9a\u65f6\u4e0a\u7ebf\uff0c\u91cd\u65b0\u8bbe\u7f6e\u4e0a\u7ebf\u65b9\u5f0f\u3002"),(0,l.kt)("h5",{id:"4\u6807\u8bb0\u4e3a\u4eba\u5de5\u4e0a\u7ebf"},"4.\u6807\u8bb0\u4e3a\u4eba\u5de5\u4e0a\u7ebf"),(0,l.kt)("p",null,"\u9488\u5bf9\u5df2\u7ecf\u7ebf\u4e0b\u6267\u884c\u8fc7\u7684\u5de5\u5355SQL\uff0c\u7528\u6237\u53ef\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"p"},"\u6807\u8bb0\u4e3a\u4eba\u5de5\u4e0a\u7ebf"),"\u6309\u94ae\uff0c\u5207\u6362\u5de5\u5355\u72b6\u6001\uff1b"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0a\u7ebf\u4eba\u4ecd\u53ef\u9009\u62e9\u5168\u90e8\u9a73\u56de\uff1a\u7528\u6237\u5224\u5b9a\u5de5\u5355\u4e2d\u5b58\u5728\u4e0d\u5408\u89c4\u3001\u6027\u80fd\u95ee\u9898\u7b49SQL\u8bed\u53e5\u65f6\uff0c\u5219\u53ef\u70b9\u51fb\u5168\u90e8\u9a73\u56de\uff0c\u8ba9\u5de5\u5355\u521b\u5efa\u4eba\u4fee\u6b63\u540e\u518d\u6b21\u8fdb\u5165\u5ba1\u6838\u6d41\u7a0b\u3002")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u9488\u5bf9\u4e0a\u7ebf\u4e2d\u7684\u5de5\u5355\uff0c\u7528\u6237\u53ef\u70b9\u51fb\u201c\u4e2d\u6b62\u4e0a\u7ebf\u201d\u6309\u94ae\uff0c\u4e2d\u65ad\u4e0a\u7ebf\u6d41\u7a0b\uff0c\u4ee5\u907f\u514d\u5f53\u524d\u7684\u4e0a\u7ebf\u64cd\u4f5c\u5f71\u54cd\u6b63\u5e38\u4e1a\u52a1\u3002")),(0,l.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"result",src:r(6782).Z,width:"822",height:"470"})))}s.isMDXComponent=!0},6782:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/audit-result-296900480b036ad8ac87885021551589.png"}}]);