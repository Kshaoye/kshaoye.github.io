import{d as l,u as m,o as s,c as g,m as h,b as c,J as d,_,a1 as r,v as i,a2 as y,a3 as C,a4 as A,a5 as b,a6 as k,a7 as v,a8 as D,a9 as w,aa as P,ab as I,ac as R,j as O,z as E,ad as j,ae as K,af as L}from"./chunks/framework.lRpTLXAH.js";import{t as u}from"./chunks/theme.NXPK0x6A.js";const x={class:"comment"},T=l({__name:"Comment",setup(a){const{isDark:e}=m();return(t,n)=>(s(),g("div",x,[h(e)?(s(),c(d("script"),{key:0,src:"https://giscus.app/client.js","data-repo":"Kshaoye/kshaoye.github.io","data-repo-id":"R_kgDOK9I0lg","data-category":"Announcements","data-category-id":"DIC_kwDOK9I0ls4Cefc1","data-mapping":"title","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"bottom","data-theme":"dark","data-lang":"zh-CN",crossorigin:"anonymous","data-loading":"eager",async:""})):(s(),c(d("script"),{key:1,src:"https://giscus.app/client.js","data-repo":"Kshaoye/kshaoye.github.io","data-repo-id":"R_kgDOK9I0lg","data-category":"Announcements","data-category-id":"DIC_kwDOK9I0ls4Cefc1","data-mapping":"title","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"bottom","data-theme":"light","data-lang":"zh-CN",crossorigin:"anonymous","data-loading":"eager",async:""}))]))}}),B=_(T,[["__scopeId","data-v-97a23b9e"]]),S={...u,Layout(){return r(u.Layout,null,{"doc-after":()=>r(B)})}};function f(a){if(a.extends){const e=f(a.extends);return{...e,...a,async enhanceApp(t){e.enhanceApp&&await e.enhanceApp(t),a.enhanceApp&&await a.enhanceApp(t)}}}return a}const o=f(S),z=l({name:"VitePressApp",setup(){const{site:a}=m();return O(()=>{E(()=>{document.documentElement.lang=a.value.lang,document.documentElement.dir=a.value.dir})}),a.value.router.prefetchLinks&&j(),K(),L(),o.setup&&o.setup(),()=>r(o.Layout)}});async function F(){const a=V(),e=N();e.provide(C,a);const t=A(a.route);return e.provide(b,t),e.component("Content",k),e.component("ClientOnly",v),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:e,router:a,siteData:D}),{app:e,router:a,data:t}}function N(){return w(z)}function V(){let a=i,e;return P(t=>{let n=I(t),p=null;return n&&(a&&(e=n),(a||e===n)&&(n=n.replace(/\.js$/,".lean.js")),p=R(()=>import(n),__vite__mapDeps([]))),i&&(a=!1),p},o.NotFound)}i&&F().then(({app:a,router:e,data:t})=>{e.go().then(()=>{y(e.route,t.site),a.mount("#app")})});export{F as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}