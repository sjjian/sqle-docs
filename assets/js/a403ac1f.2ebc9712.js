"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[9567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={title:"\u767b\u5f55\u5bf9\u63a5"},i="\u767b\u5f55\u5bf9\u63a5",u={unversionedId:"user-manual/sys-configuration/login_syn",id:"user-manual/sys-configuration/login_syn",title:"\u767b\u5f55\u5bf9\u63a5",description:"\u5f53\u524d\u767b\u5f55\u5bf9\u63a5\u5df2\u5b9e\u73b0LDAP\u65b9\u5f0f\u53caOauth2.0\u65b9\u5f0f",source:"@site/docs/user-manual/sys-configuration/login_syn.md",sourceDirName:"user-manual/sys-configuration",slug:"/user-manual/sys-configuration/login_syn",permalink:"/sqle-docs/docs/user-manual/sys-configuration/login_syn",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/sys-configuration/login_syn.md",tags:[],version:"current",frontMatter:{title:"\u767b\u5f55\u5bf9\u63a5"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u8bf4\u660e",permalink:"/sqle-docs/docs/user-manual/sys-configuration/intro"},next:{title:"\u6d88\u606f\u63a8\u9001",permalink:"/sqle-docs/docs/user-manual/sys-configuration/message_syn"}},o={},p=[{value:"\u5165\u53e3",id:"\u5165\u53e3",level:2},{value:"\u63a8\u9001\u65b9\u5f0f",id:"\u63a8\u9001\u65b9\u5f0f",level:2},{value:"LDAP",id:"ldap",level:3},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:4},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:4},{value:"\u524d\u7f6e\u64cd\u4f5c",id:"\u524d\u7f6e\u64cd\u4f5c",level:4},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:4},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:4},{value:"OAuth 2.0\u3010\u4f01\u4e1a\u7248\u3011",id:"oauth-20\u4f01\u4e1a\u7248",level:3},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e-1",level:4},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f-1",level:4},{value:"\u524d\u7f6e\u64cd\u4f5c",id:"\u524d\u7f6e\u64cd\u4f5c-1",level:4},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4-1",level:4},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c-1",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u767b\u5f55\u5bf9\u63a5"},"\u767b\u5f55\u5bf9\u63a5"),(0,r.kt)("p",null,"\u5f53\u524d\u767b\u5f55\u5bf9\u63a5\u5df2\u5b9e\u73b0LDAP\u65b9\u5f0f\u53caOauth2.0\u65b9\u5f0f"),(0,r.kt)("h2",{id:"\u5165\u53e3"},"\u5165\u53e3"),(0,r.kt)("p",null,"\u7ba1\u7406\u5458\u8d26\u53f7\uff0c\u70b9\u51fb\u66f4\u591a\u6309\u94ae\uff0c\u70b9\u51fb\u7cfb\u7edf\u8bbe\u7f6e\uff0c\u8df3\u8f6c\u7cfb\u7edf\u8bbe\u7f6e\u9875\u9762\u540e\uff0c\u70b9\u51fb\u201c\u5bf9\u63a5\u767b\u5f55\u201d\u6807\u7b7e"),(0,r.kt)("h2",{id:"\u63a8\u9001\u65b9\u5f0f"},"\u63a8\u9001\u65b9\u5f0f"),(0,r.kt)("h3",{id:"ldap"},"LDAP"),(0,r.kt)("h4",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,"SQLE\u4e2d\u652f\u6301\u901a\u8fc7\u914d\u7f6e\u7684\u65b9\u5f0f\u63a5\u5165LDAP\u7cfb\u7edf, \u5982\u540c\u5176\u4ed6\u7cfb\u7edf\u4e00\u6837\u63a5\u53d7\u7edf\u4e00\u7684\u7528\u6237\u7ba1\u7406, \u4ee5\u4fbf\u4e8e\u7ba1\u7406\u5458\u7ba1\u7406SQLE\u4e2d\u7684\u7528\u6237, \u4e5f\u4f7f\u5f97\u5458\u5de5\u65e0\u9700\u5728\u4f7f\u7528\u4e00\u5957\u516c\u53f8\u5185\u901a\u7528\u8d26\u53f7\u5bc6\u7801\u7684\u540c\u65f6\u5355\u72ec\u8bb0\u5f55SQLE\u7684\u8d26\u53f7\u5bc6\u7801\u3002\n\u5728SQLE\u4e2d, \u5982\u679c\u6b63\u786e\u914d\u7f6e\u5e76\u542f\u7528\u4e86LDAP\u529f\u80fd, \u7528\u6237\u5c31\u53ef\u4ee5\u5728\u767b\u5f55\u754c\u9762\u4f7f\u7528LDAP\u4e2d\u8bb0\u5f55\u7684\u8d26\u53f7\u5bc6\u7801\u8fdb\u884c\u767b\u5f55, SQLE\u4f1a\u5728\u5458\u5de5\u7b2c\u4e00\u6b21\u767b\u5f55\u65f6\u540c\u6b65\u6b64\u5458\u5de5\u7684\u8d26\u53f7\u548c\u90ae\u7bb1, \u5e76\u5728\u4ee5\u540e\u7684\u767b\u5f55\u4e2d\u5747\u901a\u8fc7LDAP\u6821\u9a8c\u6b64\u8d26\u6237"),(0,r.kt)("h4",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u5f53\u7ec4\u7ec7\u914d\u7f6e\u4e86LDAP\u5bf9\u63a5\u767b\u5f55\u7cfb\u7edf\u65f6\uff0c\u5e73\u53f0\u7ba1\u7406\u5458\u53ef\u8fdb\u884c\u76f8\u5173\u914d\u7f6e\u3002"),(0,r.kt)("h4",{id:"\u524d\u7f6e\u64cd\u4f5c"},"\u524d\u7f6e\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5df2\u914d\u7f6eLDAP"),(0,r.kt)("h4",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,r.kt)("p",null,"\u70b9\u51fb\u4fee\u6539\uff0c\u9009\u62e9\u542f\u7528LDAP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LDAP\u670d\u52a1\u5668\u5730\u5740\uff1a\u7528\u4e8eLDAP\u767b\u9646\u65f6SQLE\u627e\u5230LDAP\u670d\u52a1\u5668\u7684\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"LDAP\u670d\u52a1\u5668\u7aef\u53e3\uff1a\u7528\u4e8eLDAP\u767b\u9646\u65f6SQLE\u627e\u5230LDAP\u670d\u52a1\u7684\u5de5\u4f5c\u7aef\u53e3"),(0,r.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u7528\u6237DN\uff1a\u5f53\u7528\u6237\u767b\u5f55\u65f6\u9700\u8981\u5148\u4f7f\u7528\u7ba1\u7406\u7528\u6237\u767b\u5f55\u5230LDAP\u4e2d\u67e5\u627e\u51fa\u767b\u5f55\u7528\u6237\u5728LDAP\u4e2d\u7684DN, \u518d\u4f7f\u7528\u67e5\u627e\u51fa\u7684DN\u548c\u767b\u5f55\u7528\u6237\u586b\u5199\u7684\u5bc6\u7801\u8fdb\u884cLDAP\u767b\u5f55\u6821\u9a8c"),(0,r.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u7528\u6237\u5bc6\u7801\uff1a\u8fde\u63a5\u7528\u6237DN\u767b\u5f55\u65f6\u7684\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6839DN\uff1a\u7528\u4e8e\u9650\u5b9aSQLE\u4e2dLDAP\u767b\u5f55\u7684\u4f5c\u7528\u8303\u56f4"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u5c5e\u6027\u540d\uff1a\u7528\u4e8eLDAP\u7528\u6237\u767b\u5f55\u65f6\u67e5\u8be2\u767b\u5f55\u7528\u6237\u7684DN, LDAP\u4e2d\u6b64\u5c5e\u6027\u5bf9\u5e94\u7684\u503c\u4e5f\u5c06\u7528\u4f5c\u6b64\u7528\u6237\u7b2c\u4e00\u6b21\u767b\u5f55SQLE\u81ea\u52a8\u6ce8\u518c\u65f6\u7684\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u90ae\u7bb1\u5c5e\u6027\u540d\uff1aSQLE\u5c06\u6839\u636e\u6b64\u5c5e\u6027\u540d\u4eceLDAP\u4e2d\u83b7\u53d6\u5230\u7528\u6237\u7684\u90ae\u7bb1, \u5e76\u5c06\u6b64\u90ae\u7bb1\u7528\u4e8e\u6b64\u7528\u6237\u7b2c\u4e00\u6b21\u767b\u5f55SQLE\u81ea\u52a8\u6ce8\u518c\u65f6\u7684\u7528\u6237\u90ae\u7bb1")),(0,r.kt)("h4",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4fee\u6539\u540e\u7528\u6237\u5373\u53ef\u901a\u8fc7LDAP\u8d26\u53f7\u767b\u5f55SQLE\u5e73\u53f0"),(0,r.kt)("h3",{id:"oauth-20\u4f01\u4e1a\u7248"},"OAuth 2.0\u3010\u4f01\u4e1a\u7248\u3011"),(0,r.kt)("h4",{id:"\u529f\u80fd\u8bf4\u660e-1"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,"SQLE\u4e2d\u652f\u6301\u901a\u8fc7\u914d\u7f6e\u7684\u65b9\u5f0f\u63a5\u5165OAuth 2.0\u7cfb\u7edf, \u5982\u540c\u5176\u4ed6\u7cfb\u7edf\u4e00\u6837\u63a5\u53d7\u7edf\u4e00\u7684\u7528\u6237\u7ba1\u7406, \u4ee5\u4fbf\u4e8e\u7ba1\u7406\u5458\u7ba1\u7406SQLE\u4e2d\u7684\u7528\u6237, \u4e5f\u4f7f\u5f97\u5458\u5de5\u65e0\u9700\u5728\u4f7f\u7528\u4e00\u5957\u516c\u53f8\u5185\u901a\u7528\u8d26\u53f7\u5bc6\u7801\u7684\u540c\u65f6\u5355\u72ec\u8bb0\u5f55SQLE\u7684\u8d26\u53f7\u5bc6\u7801"),(0,r.kt)("p",null,"\u5728SQLE\u4e2d, \u5982\u679c\u6b63\u786e\u914d\u7f6e\u5e76\u542f\u7528\u4e86OAuth 2.0\u529f\u80fd, \u7528\u6237\u5c31\u53ef\u4ee5\u5728\u767b\u5f55\u754c\u9762\u4f7f\u7528\u7b2c\u4e09\u65b9\u767b\u5f55, SQLE\u4f1a\u5728\u5458\u5de5\u7b2c\u4e00\u6b21\u767b\u5f55\u65f6\u8981\u6c42\u7528\u6237\u7ed1\u5b9a\u6216\u81ea\u52a8\u521b\u5efa\u4e00\u4e2aSQLE\u7528\u6237, \u5e76\u5728\u4ee5\u540e\u7684\u767b\u5f55\u4e2d\u53ef\u4ee5\u4f7f\u7528OAuth 2.0\u7528\u6237\u767b\u5f55, \u4e5f\u53ef\u4ee5\u7528\u7ed1\u5b9a\u7684SQLE\u7528\u6237\u8d26\u53f7\u5bc6\u7801\u767b\u5f55"),(0,r.kt)("h4",{id:"\u4f7f\u7528\u573a\u666f-1"},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u5f53\u7ec4\u7ec7\u914d\u7f6e\u4e86OAuth 2.0\u5bf9\u63a5\u767b\u5f55\u7cfb\u7edf\u65f6\uff0c\u5e73\u53f0\u7ba1\u7406\u5458\u53ef\u8fdb\u884c\u76f8\u5173\u914d\u7f6e\u3002"),(0,r.kt)("h4",{id:"\u524d\u7f6e\u64cd\u4f5c-1"},"\u524d\u7f6e\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5df2\u914d\u7f6eOAuth 2.0"),(0,r.kt)("h4",{id:"\u64cd\u4f5c\u6b65\u9aa4-1"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,r.kt)("p",null,"\u70b9\u51fb\u4fee\u6539\uff0c\u9009\u62e9\u542f\u7528OAuth 2.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528ID\uff1a\u5e94\u7528\u7684\u552f\u4e00\u6807\u8bc6, \u4ece\u8981\u5bf9\u63a5\u7684\u5e73\u53f0\u7533\u8bf7 , \u5728OAuth2.0\u8ba4\u8bc1\u8fc7\u7a0b\u4e2d\uff0cappid\u7684\u503c\u5373\u4e3aoauth_consumer_key\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5bc6\u94a5\uff1aappid\u5bf9\u5e94\u7684\u5bc6\u94a5\uff0c\u8bbf\u95ee\u7528\u6237\u8d44\u6e90\u65f6\u7528\u6765\u9a8c\u8bc1\u5e94\u7528\u7684\u5408\u6cd5\u6027\u3002\u5728OAuth2.0\u8ba4\u8bc1\u8fc7\u7a0b\u4e2d\uff0cappkey\u7684\u503c\u5373\u4e3aoauth_consumer_secret\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5916\u90e8\u8bbf\u95eeSQLE\u7684\u5730\u5740\uff1a\u683c\u5f0f\u4e3a http(s)://ip:port"),(0,r.kt)("li",{parentName:"ul"},"oauth2\u767b\u5f55\u6388\u6743\u9875\u9762\u5730\u5740\uff1a\u683c\u5f0f\u7c7b\u4f3c\u4e8e http(s)://ip:port/xxx"),(0,r.kt)("li",{parentName:"ul"},"oauth2 access_token \u83b7\u53d6\u5730\u5740\uff1a\u683c\u5f0f\u7c7b\u4f3c\u4e8e http(s)://ip:port/xxx"),(0,r.kt)("li",{parentName:"ul"},"oauth2 user id \u83b7\u53d6\u5730\u5740\uff1a\u683c\u5f0f\u7c7b\u4f3c\u4e8e http(s)://ip:port/xxx"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8d44\u6e90\u8303\u56f4\uff1a\u6b64\u8303\u56f4\u7531\u9a8c\u8bc1\u670d\u52a1\u5668\u5b9a\u4e49"),(0,r.kt)("li",{parentName:"ul"},"access_token\u653e\u7f6e\u4f4d\u7f6e\uff1aSQLE\u4f1a\u5728\u83b7\u53d6\u7528\u6237ID\u65f6\u5c06access_token\u653e\u5728\u8fd9\u4e2akey\u5bf9\u5e94\u7684value\u4e2d, \u6b64\u53c2\u6570\u4f1a\u4f5c\u4e3aget\u8bf7\u6c42\u7684\u53c2\u6570\u53d1\u9001\u7ed9\u7528\u6237ID\u83b7\u53d6\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237ID\u4fdd\u5b58\u4f4d\u7f6e\uff1aSQLE\u4f1a\u5c1d\u8bd5\u4f7f\u7528\u6b64key\u4ece\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u54cd\u5e94\u4e2d\u89e3\u6790\u51fa\u7528\u6237ID,\u7528\u6237ID\u5e94\u5f53\u4e3a\u552f\u4e00ID"),(0,r.kt)("li",{parentName:"ul"},"\u767b\u5f55\u6309\u94ae\u6587\u5b57\uff1a\u7528\u4e8e\u767b\u5f55\u9875\u9762\u6309\u94ae\u63d0\u793a"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\u5e76\u7ed1\u5b9a\u7528\u6237\uff1a\u82e5\u5f00\u542f\uff0c\u5728\u901a\u8fc7OAuth2\u767b\u9646\u65f6\uff0c\u82e5\u8be5\u7528\u6237\u672a\u7ed1\u5b9aSQLE\u7528\u6237\uff0cSQLE\u5219\u4f1a\u6839\u636e\u4eceOAuth2\u670d\u52a1\u7aef\u83b7\u53d6\u7684\u7528\u6237id\u521b\u5efaSQLE\u8d26\u6237\uff0c\u5e76\u4e14\u4e0d\u4f1a\u8df3\u8f6c\u5230\u7ed1\u5b9a\u754c\u9762\uff0c\u800c\u662f\u8fdb\u5165SQLE\u4e3b\u754c\u9762")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'\u5f53\u4ec5\u5141\u8bb8\u5185\u7f51\u8bbf\u95eeSQLE\u670d\u52a1\u65f6\uff0c\u8bf7\u786e\u4fdd\u56de\u8c03\u5730\u5740\u7684\u540e\u7f00\u4e3a"/v1/oauth2/callback"\u3002')),(0,r.kt)("h4",{id:"\u540e\u7eed\u64cd\u4f5c-1"},"\u540e\u7eed\u64cd\u4f5c"),(0,r.kt)("p",null,"\u542f\u7528\u540eSQLE\u767b\u5f55\u754c\u9762\u51fa\u73b0\u5176\u4ed6\u65b9\u5f0f\u8df3\u8f6c\u767b\u5f55\u5165\u53e3\uff0c\u70b9\u51fb\uff0c\u53ef\u8df3\u8f6c\u81f3\u5bf9\u5e94\u767b\u5f55\u9875\u9762"))}c.isMDXComponent=!0}}]);