import{r as u,a8 as d,b as h,c as b,e as f,t as p,G as y}from"./entry.B8TWYMWY.js";const x={class:"px-4 py-8 flex items-center justify-center"},s="abcdefghijklmnopqrstuvwxyz",_={__name:"HackerButton",props:{label:String},setup(l){const t=l,r=u(t.label);function c(e){return Array.from({length:e},()=>s[Math.floor(Math.random()*s.length)]).join("")}async function i(e){let a="";for(let n=0;n<e.length;n++)await new Promise(m=>setTimeout(m,50)),a+=e.charAt(n),r.value=a+c(e.length-a.length)}function o(){i(t.label)}const g=()=>{o(),setTimeout(()=>console.log("Submitted"),t.label.length*50)};return d(()=>t.label,e=>{r.value=e}),(e,a)=>(h(),b("div",x,[f("button",{type:"button",class:"rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950 relative font-mono",onClick:g,onMouseenter:o},p(y(r)),33)]))}};export{_ as default};
