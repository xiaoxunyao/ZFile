var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,s)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,i=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&o(e,n,t[n]);if(s)for(var n of s(t))r.call(t,n)&&o(e,n,t[n]);return e},l=(e,s)=>t(e,n(s)),c=(e,t,n)=>new Promise(((s,a)=>{var r=e=>{try{i(n.next(e))}catch(t){a(t)}},o=e=>{try{i(n.throw(e))}catch(t){a(t)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(r,o);i((n=n.apply(e,t)).next())}));import{d as u,r as p,a as d,p as m,b as h,i as _,w as g,u as f,c as P,t as E,e as T,f as v,g as b,h as I,j as O,k as L,o as w,l as y,m as A,n as M,q as R,s as D,v as k,_ as V,x as j,y as S,z as x,A as U,B,C as G,D as $,V as z,E as C,F as N,N as q,G as F,H,I as Z,J as W,K,L as Y,M as J,O as Q,P as X,Q as ee,R as te,S as ne,T as se,U as ae,W as re,X as oe,Y as ie,Z as le,$ as ce,a0 as ue,a1 as pe,a2 as de,a3 as me,a4 as he}from"./vendor.37e0cd1a.js";let _e;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,s);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),a(l)},onload(){n(self[t].moduleMap[o]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/zfile/assets/");const ge={},fe=function(e,t){if(!t)return e();if(void 0===_e){const e=document.createElement("link").relList;_e=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in ge)return;ge[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":_e,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},Pe=(e,t={})=>{const{timeout:n=3e4}=t;return u({loader:e,timeout:n})},Ee=Symbol("context");function Te(){const e=h(!1),t=_(Ee);return g((()=>{e.value=f(t.smallScreen)})),e}Pe((()=>fe((()=>Promise.resolve().then((function(){return be}))),void 0)));var ve=P({name:"AppContextProvider",inheritAttrs:!1,props:{smallScreen:{type:Boolean,default:!1}},setup(e){const{smallScreen:t}=E(e);!function(e=Symbol(),t,n){if(!t)return;const{readonly:s=!0}=n,a=p(t),r=s?d(a):a;m(e,r)}(Ee,{smallScreen:t},{})}});ve.render=function(e,t,n,s,a,r){return T(e.$slots,"default")};var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve});const Ie="sun";function Oe(){const{VITE_GLOB_APP_NAME:e}=function(){const e="__APP__ZFile".toUpperCase(),{VITE_GLOB_APP_TITLE:t,VITE_GLOB_APP_NAME:n}=window[e];return/^[a-zA-Z_]*$/.test(n)||console.warn("VITE_GLOB_APP_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running."),{VITE_GLOB_APP_TITLE:t,VITE_GLOB_APP_NAME:n}}(),{currentRoute:t}=v(),{t:n}=b(),s=I();O((()=>t.value.path),(()=>{var a;const r=f(t);if("Redirect"===r.name)return;const o=n(null==(a=null==r?void 0:r.meta)?void 0:a.title);s.value=o?` ${o} - ${e} `:`${e}`}),{immediate:!0})}const Le=e=>"[object Object]"===Object.prototype.toString.call(e),we=(e,t=0)=>{const n=e-t+1;if(n<=0)return void console.warn("'start' should not to be greater then 'len'");const s=new Array(n);let a=0;for(;a<n;)s[a]=a+++t;return s},ye=(e,t)=>{let n;return(...s)=>{n&&(clearTimeout(n),n=null),n=setTimeout((()=>{e.apply(void 0,s.slice()),clearTimeout(n),n=null}),t)}},Ae=(e,t,n)=>{let s;return(...a)=>{s?null==n||n():(e.apply(void 0,a.slice()),s=setTimeout((()=>{clearTimeout(s),s=null}),t))}};function Me(e){const t=(e=>e?L(e)?f(e):e:document.documentElement)(e),n=p([document.documentElement.clientWidth,document.documentElement.clientHeight]),s=new ResizeObserver((e=>{const t=e&&e[0];n[0]=t.contentRect.width,n[1]=t.contentRect.height}));return w((()=>{s.observe(t)})),y((()=>{s.disconnect()})),n}const Re=A([M,R,D,k,V,j,S,x,U,B,G,$]),De={Input:{borderFocus:"1px solid rgb(107, 196, 255)"},Spin:{}};var ke=P({name:"App",components:{AppContextProvider:ve},setup(){Oe();const e=h(!1),t=Me(),n=ne((()=>se().getters["themeModule/getDark"]));return O((()=>t[0]),(t=>{e.value=t<1024}),{immediate:!0}),{darkTheme:Re,smallScreen:e,isDark:n,themeOverrides:De}}});ke.render=function(e,t,n,s,a,r){const o=ae("router-view"),i=ae("AppContextProvider"),l=ae("n-message-provider"),c=ae("n-config-provider");return re(),oe(c,{theme:e.isDark?e.darkTheme:"","theme-overrides":e.themeOverrides},{default:ie((()=>[le(l,null,{default:ie((()=>[le(i,{"small-screen":e.smallScreen},{default:ie((()=>[le(o)])),_:1},8,["small-screen"])])),_:1})])),_:1},8,["theme","theme-overrides"])};let Ve;const je={zh:{loginpage:"登录",installpage:"启动",mainpage:"主页",login:"登录",account:{user:"账号",pw:"密码"},lg_ph:{user:"请输入账号",pw:"请输入密码"},lg_button:"登录",title:"使你的服务器管理更高效",tablle:{header:{name:"文件名",time:"时间",size:"大小"}}},en:{loginpage:"Login",installpage:"Install",mainpage:"Main",login:"Login",account:{user:"account",pw:"password"},lg_ph:{user:"please input account",pw:"please input password"},lg_button:"login",title:"manage server more efficiently",tablle:{header:{name:"name",time:"time",size:"size"}}}};var Se,xe;(xe=Se||(Se={})).ZH="1",xe.EN="2";const Ue=[{label:"中文",key:"1"},{label:"English",key:"2"}],Be=e=>t=>{t===Se.ZH?e.value="zh":t===Se.EN&&(e.value="en")};function Ge(e){return c(this,null,(function*(){Ve=ce({locale:"zh",fallbackLocale:"en",messages:je,silentTranslationWarn:!0,missingWarn:!1,silentFallbackWarn:!0}),e.use(Ve)}))}function $e(){const e=b(),t=e.t;return l(i({},e),{t:t})}const ze={namespaced:!0,state:()=>{const e=localStorage.getItem("APP_DARK_MODE");return{isDark:!(!e||"true"!==e)}},getters:{getDark:e=>e.isDark},mutations:{changeMode(e){e.isDark=!e.isDark}}};class Ce{constructor(e){this.options=e,this.axiosInstance=ue.create(e)}getAxios(){return this.axiosInstance}setHeader(e){this.axiosInstance&&Object.assign(this.axiosInstance.defaults.headers,e)}setReqInterceptor(e,t){this.axiosInstance.interceptors.request.use(e,t)}setResInterceptor(e,t){this.axiosInstance.interceptors.response.use(e,t)}get(e){return this.request(l(i({},e),{method:"GET"}))}post(e){return this.request(l(i({},e),{method:"POST"}))}put(e){return this.request(l(i({},e),{method:"PUT"}))}delete(e){return this.request(l(i({},e),{method:"DELETE"}))}request(e){return new Promise(((t,n)=>{this.axiosInstance.request(e).then((e=>{t(e)})).catch((e=>{n(e)}))}))}}const Ne=class{addPending(e){this.removePending(e);const t=this.getPendingUrl(e);e.cancelToken=e.cancelToken||new ue.CancelToken((e=>{Ne.pendingMap.has(t)||Ne.pendingMap.set(t,e)}))}removePending(e){const t=this.getPendingUrl(e);if(Ne.pendingMap.has(t)){const e=Ne.pendingMap.get(t);e&&e(t),Ne.pendingMap.delete(t)}}getPendingUrl(e){return e.method+"&"+e.url}reset(){Ne.pendingMap=new Map}};let qe=Ne;qe.pendingMap=new Map;const Fe={baseURL:"http://1.15.153.38:4799/zfile",timeout:0},He=new Ce(i({},Fe));He.setResInterceptor((e=>e.data),(e=>(console.warn("err",e),Promise.reject(e))));const Ze=new Ce(i({},Fe)),We=new qe;Ze.setReqInterceptor((e=>(We.addPending(e),e)),(e=>Promise.reject(e))),Ze.setResInterceptor((e=>(We.removePending(e),e.data)),(e=>(console.warn("err",e),Promise.reject(e))));const Ke=e=>(e=Number(e))>=200&&e<300,Ye=/^.*\/$/,Je=/^\/.*$/,Qe=e=>(Ye.test(e)||(e+="/"),e),Xe=e=>(Je.test(e)||(e="/"+e),e),et=(e,t="main")=>{const n=new RegExp(`^\\/${t}\\/?`);return Qe(Xe(e.replace(n,"")))},tt=(e,t,n,s)=>He.post({url:"file/upload",params:{rootPath:n},data:t,headers:{"Content-Type":"multipart/form-data;charset=UTF-8"},onUploadProgress(t){console.log(t),s(Math.floor(100*t.loaded/t.total),{},e)}}),nt=()=>Ze.get({url:"user/signOut"}),st=e=>(e=Xe(e),Ze.get({url:"file/download",params:{downPath:e},responseType:"blob"})),at=pe({modules:{themeModule:ze,fileSys:{namespaced:!0,state:()=>({current:{}}),getters:{curDirGetter(e){var t;return null==(t=e.current)?void 0:t.info}},mutations:{initialMutation(e,t){e.current=t},newDirMutation(e){var t;null==(t=e.current.info)||t.unshift({fileType:"Directory",fileName:"新建文件夹"})},deleteDirMutation(e,t=0){var n;null==(n=e.current.info)||n.splice(t,1)}},actions:{checkDirAction(e,t){return c(this,arguments,(function*({commit:e},t){const{status:n,message:s}=yield(e=>(e=Xe(e),Ze.get({url:"base/see",params:{path:e}})))(t);return Ke(n)&&e("initialMutation",{path:t,info:s}),s}))},mkdirAction(e,t){return c(this,arguments,(function*({dispatch:e},t){const{status:n}=yield(e=>Ze.post({url:"file/mkdir",data:e}))(t);Ke(n)&&e("checkDirAction",t.address)}))}}}}}),rt=[{path:"/",name:"Redirect",redirect:"/login",meta:{title:"Redirect"}},{path:"/login",name:"Login",component:()=>fe((()=>__import__("./Login.5db901bb.js")),["/zfile/assets/Login.5db901bb.js","/zfile/assets/Login.78867955.css","/zfile/assets/vendor.37e0cd1a.js","/zfile/assets/index.9363d682.js","/zfile/assets/index.0ad7d8af.css"]),meta:{title:"loginpage"}},{path:"/install",name:"Install",component:()=>fe((()=>__import__("./Install.d0117914.js")),["/zfile/assets/Install.d0117914.js","/zfile/assets/Install.e954acd5.css","/zfile/assets/vendor.37e0cd1a.js","/zfile/assets/index.d0aaf553.js","/zfile/assets/index.d21c5da7.css","/zfile/assets/logo.1a86dcf3.js"]),meta:{title:"installpage"}},{path:"/main/:path*",name:"Main",component:()=>fe((()=>__import__("./Main.329ef346.js")),["/zfile/assets/Main.329ef346.js","/zfile/assets/Main.97e22603.css","/zfile/assets/index.9363d682.js","/zfile/assets/index.0ad7d8af.css","/zfile/assets/vendor.37e0cd1a.js","/zfile/assets/_utils.29a066cb.js","/zfile/assets/logo.1a86dcf3.js"]),meta:{title:"mainpage"}}],ot=de({history:me("/"),routes:rt});ot.beforeEach(((e,t,n)=>c(this,null,(function*(){n()})))),setTimeout((function(){return c(this,null,(function*(){!function(){const{VITE_GLOB_APP_NAME:e,VITE_GLOB_APP_TITLE:t}={VITE_PUBLIC_PATH:"/zfile",VITE_LEGACY:"true",VITE_OUT_DIR:"./dist",VITE_DROP_CONSOLE:"false",VITE_HTML_SMALL:"true",VITE_BASE_URL:"http://1.15.153.38:4799/zfile",VITE_PORT:"8000",VITE_GLOB_APP_TITLE:"ZFile",VITE_GLOB_APP_NAME:"ZFile",VITE_GITHUB:"https://github.com/xiaoxunyao/ZFile",BASE_URL:"/zfile/",MODE:"production",DEV:!1,PROD:!0};Object.defineProperty(window,`__APP__${e}`.toUpperCase(),{value:{VITE_GLOB_APP_TITLE:t,VITE_GLOB_APP_NAME:e},configurable:!1,writable:!1})}();const e=he(ke);Ge(e),e.use(ot),function(e){const t=C({components:[N,q,F,H,Z,W,K,Y,J,Q,X,ee,te]});e.use(t),e.use(z)}(e),e.use(at),yield ot.isReady(),e.mount("#app")}))}),0);export{Ie as P,fe as _,Te as a,Be as b,Pe as c,Ae as d,Le as e,tt as f,st as g,et as h,Ke as i,Ee as k,Qe as m,Ze as n,Ue as o,we as r,nt as s,ye as t,$e as u};
