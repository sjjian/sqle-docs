"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[411],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),i=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=i(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),u=i(a),s=r,N=u["".concat(m,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(N,p(p({ref:e},o),{},{components:a})):n.createElement(N,p({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[u]="string"==typeof t?t:r,p[1]=d;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},53417:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},p="\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",d={unversionedId:"deploy-manual/config",id:"deploy-manual/config",title:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",description:"SQLE\u7684\u914d\u7f6e\u6587\u4ef6\u91c7\u7528yml\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f4d\u4e8eSQLE\u5b89\u88c5\u76ee\u5f55\u4e0b\uff0c\u8def\u5f84\u4e3a./etc/config.yml",source:"@site/docs/deploy-manual/config.md",sourceDirName:"deploy-manual",slug:"/deploy-manual/config",permalink:"/sqle-docs/docs/deploy-manual/config",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/deploy-manual/config.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u8bf4\u660e",permalink:"/sqle-docs/docs/deploy-manual/intro"},next:{title:"\u6e90\u7801\u5b89\u88c5",permalink:"/sqle-docs/docs/deploy-manual/source"}},m={},i=[{value:"\u9ed8\u8ba4\u6587\u4ef6\u53c2\u8003",id:"\u9ed8\u8ba4\u6587\u4ef6\u53c2\u8003",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u901a\u7528\u914d\u7f6e",id:"\u901a\u7528\u914d\u7f6e",level:3},{value:"\u901a\u7528\u914d\u7f6e.api",id:"\u901a\u7528\u914d\u7f6eapi",level:4},{value:"DMS \u914d\u7f6e",id:"dms-\u914d\u7f6e",level:3},{value:"DMS.service.database",id:"dmsservicedatabase",level:4},{value:"DMS.service.log",id:"dmsservicelog",level:4},{value:"DMS.cloudbeaver",id:"dmscloudbeaver",level:4},{value:"SQLE \u914d\u7f6e",id:"sqle-\u914d\u7f6e",level:3},{value:"SQLE.service",id:"sqleservice",level:4},{value:"SQLE.service.database",id:"sqleservicedatabase",level:4}],o={toc:i};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"SQLE\u7684\u914d\u7f6e\u6587\u4ef6\u91c7\u7528yml\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f4d\u4e8eSQLE\u5b89\u88c5\u76ee\u5f55\u4e0b\uff0c\u8def\u5f84\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"./etc/config.yml"))),(0,r.kt)("h2",{id:"\u9ed8\u8ba4\u6587\u4ef6\u53c2\u8003"},"\u9ed8\u8ba4\u6587\u4ef6\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'dms:\n  id: 1\n  api:\n    addr: "0.0.0.0"\n    port: 10000\n    enable_https: false\n    cert_file_path: \'./etc/cert.pem\'\n    key_file_path: \'./etc/key.pem\'\n  secret_key: \'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\'\n  service:\n    database:\n      host: "127.0.0.1"\n      port: 3306\n      username: "root"\n      password: "123456"\n      database: "dms"\n      debug: true\n      auto_migrate: true\n    log:\n      level: DEBUG\n      path: logs\n      max_size_mb: 100\n      max_backup_number: 10\n  cloudbeaver:\n    enable_https: false\n    host: "127.0.0.1"\n    port: 8978\n    admin_user: "cbadmin"\n    admin_password: "123456"\n  database_driver_options:\n    - db_type: MySQL\n      logo_path: "/logo/mysql.png"\n      params:  \n    - db_type: Postgres\n      logo_path: "/static/logo/pg.png"\n      params:   \n    - db_type: Oracle\n      logo_path: "/static/logo/oracle.png"\n      params: [\n       {\n        "key":"service_name",\n        "value":"XE",\n        "desc":"service name",\n        "type":"string"\n       },    \n      ]   \nsqle:\n  id: 1\n  dms_server_address: "http://127.0.0.1:10000"\n  api:\n    addr: "127.0.0.1"\n    port: 10001\n    enable_https: false\n    cert_file_path: \'./etc/cert.pem\'\n    key_file_path: \'./etc/key.pem\'\n  secret_key: \'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\'\n  service:\n    auto_migrate_table: true\n    debug_log: false\n    log_path: \'./logs\'\n    log_max_size_mb: 1024\n    log_max_backup_number: 2\n    plugin_path: \'./plugins\'\n    database:\n      mysql_host: \'127.0.0.1\'\n      mysql_port: 3306\n      mysql_user: \'root\'\n      mysql_password: \'123456\'\n      mysql_schema: \'sqle\'\n')),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u901a\u7528\u914d\u7f6e"},"\u901a\u7528\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"server id\uff0c\u8fa8\u8bc6\u96c6\u7fa4\u8282\u70b9\uff0c\u96c6\u7fa4\u5185\u4e0d\u91cd\u590d\u5373\u53ef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u670d\u52a1\u7684web\u63a5\u53e3\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40AES\u52a0\u5bc6\u79d8\u94a5\uff0c\u5f71\u54cd\u767b\u5f55\u548c\u7528\u6237\u5bc6\u7801\u7b49\u7684\u5b58\u50a8\uff1b",(0,r.kt)("strong",{parentName:"td"},"\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u914d\u7f6e\u8be5\u503c\u66ff\u6362\u6389\u7a0b\u5e8f\u9ed8\u8ba4\u503c\uff0c\u4e0d\u7136\u4f1a\u5b58\u5728\u5b89\u5168\u98ce\u9669"),"\uff1b\u683c\u5f0f\u662f32\u4f4d\u968f\u673a\u5b57\u7b26\u4e32")))),(0,r.kt)("h4",{id:"\u901a\u7528\u914d\u7f6eapi"},"\u901a\u7528\u914d\u7f6e.api"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addr"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u670d\u52a1\u5668\u65f6\u9700\u8981\u7684\u7f51\u7edc\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u670d\u52a1\u7684web\u63a5\u53e3\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_https"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542fhttps\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cert_file_path"),(0,r.kt)("td",{parentName:"tr",align:null},"https \u8bc1\u4e66\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_file_path"),(0,r.kt)("td",{parentName:"tr",align:null},"https \u79c1\u94a5\u8def\u5f84")))),(0,r.kt)("h3",{id:"dms-\u914d\u7f6e"},"DMS \u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u7528\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u7528\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u7528\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloudbeaver"),(0,r.kt)("td",{parentName:"tr",align:null},"SQL\u5de5\u4f5c\u53f0")))),(0,r.kt)("h4",{id:"dmsservicedatabase"},"DMS.service.database"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS \u540e\u7aef\u6570\u636e\u5e93\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS \u540e\u7aef\u6570\u636e\u5e93\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS \u540e\u7aef\u6570\u636e\u5e93\u7528\u6237")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS \u540e\u7aef\u6570\u636e\u5e93\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS \u540e\u7aef\u6570\u636e\u5e93 schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"dmsservicelog"},"DMS.service.log"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"level"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS\u65e5\u5fd7\u7ea7\u522b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS\u65e5\u5fd7\u5b58\u5728\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_size_mb"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_backup_number"),(0,r.kt)("td",{parentName:"tr",align:null},"DMS\u4fdd\u7559\u65e5\u5fd7\u6587\u4ef6\u6570")))),(0,r.kt)("h4",{id:"dmscloudbeaver"},"DMS.cloudbeaver"),(0,r.kt)("p",null,"SQL\u5de5\u4f5c\u53f0\u7684\u914d\u7f6e\uff0c\u914d\u7f6e\u5219\u4ee3\u8868\u5f00\u542fSQL\u5de5\u4f5c\u53f0\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_https"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662fhttps\u8fde\u63a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"cloudbeaver \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"cloudbeaver \u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin_user"),(0,r.kt)("td",{parentName:"tr",align:null},"cloudbeaver \u8d85\u7ea7\u7ba1\u7406\u5458\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin_password"),(0,r.kt)("td",{parentName:"tr",align:null},"cloudbeaver \u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801")))),(0,r.kt)("h3",{id:"sqle-\u914d\u7f6e"},"SQLE \u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u7528\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u7528\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u7528\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1")))),(0,r.kt)("h4",{id:"sqleservice"},"SQLE.service"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auto_migrate_table"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u521b\u5efa\u8868\u7ed3\u6784\uff0c\u521d\u59cb\u5316\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug_log"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u542fdebug\u6a21\u5f0f\uff0c\u6253\u5370\u66f4\u591a\u65e5\u5fd7\uff0c\u4f1a\u6253\u5370\u4e1a\u52a1SQL\uff0c\u5f00\u53d1\u73af\u5883\u53ef\u5f00\u542f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_max_size_mb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u6700\u5927\u5927\u5c0f\uff0c\u5355\u4f4dMB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_max_backup_number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u6587\u4ef6\u6700\u5927\u5907\u4efd\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plugin_path"),(0,r.kt)("td",{parentName:"tr",align:null},"SQL\u5ba1\u6838\u63d2\u4ef6\u7684\u52a0\u8f7d\u5730\u5740")))),(0,r.kt)("h4",{id:"sqleservicedatabase"},"SQLE.service.database"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql_host"),(0,r.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql_port"),(0,r.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql_user"),(0,r.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u6570\u636e\u5e93\u7528\u6237")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql_password"),(0,r.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u6570\u636e\u5e93\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql_schema"),(0,r.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u6570\u636e\u5e93 schema")))),(0,r.kt)("p",null,"\u6570\u636e\u5e93\u63d2\u4ef6\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/sqle-docs/docs/dev-manual/plugins/howtouse"},"\u5982\u4f55\u914d\u7f6e\u6570\u636e\u5e93\u5ba1\u6838\u63d2\u4ef6")))}u.isMDXComponent=!0}}]);