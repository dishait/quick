import{a as h,o,b as t,F as r,r as l,u as y,q as m,c as v,w as k,e as s,f as x,t as d,h as w,_ as b}from"./entry.dbbb1ff3.js";import{u as B}from"./asyncData.9921093e.js";import"./entry.b047ce84.js";const j={class:"grid gap-5 grid-cols-1",lg:"grid-cols-3",md:"grid-cols-2"},C={hover:"shadow-md",dark:"shadow-gray-900","dark:hover":"shadow-gray-500/50",class:"cursor-pointer shadow transition-shadow p-5 pb-6 rounded-lg space-y-3 relative"},N={class:"absolute top-2 right-2 space-x-1"},q={class:"text-lg text-gray-900",dark:"text-gray-100"},D={class:"text-sm text-gray-500"},A=h({__name:"block-open",setup(F){const{data:p}=B("/config/open",()=>m("/config").only("open").findOne()),_={vue:"vscode-icons:file-type-vue",ts:"vscode-icons:file-type-typescript-official",typescript:"vscode-icons:file-type-typescript-official",vite:"logos:vitejs",deno:"vscode-icons:file-type-light-deno",go:"skill-icons:golang",golang:"skill-icons:golang",node:"logos:nodejs-icon",nodejs:"logos:nodejs-icon",naive:"logos:naiveui",naiveui:"logos:naiveui",electron:"logos:electron"};function g(n){return n?n.map(a=>_[a]).filter(Boolean):[]}return(n,a)=>{var i;const u=w,f=b;return o(),t("div",j,[(o(!0),t(r,null,l((i=y(p))==null?void 0:i.open,e=>(o(),v(f,{key:e.href,to:e.href,target:"__blank"},{default:k(()=>[s("div",C,[s("div",N,[(o(!0),t(r,null,l(g(e.icons),c=>(o(),t("span",{key:c},[x(u,{name:c},null,8,["name"])]))),128))]),s("h3",q,d(e.title),1),s("p",D,d(e.desc),1)])]),_:2},1032,["to"]))),128))])}}});export{A as default};