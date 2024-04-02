import{J as Q,K as pe,L,M as _e,N as D,O as ye,P as X,l as be,j as ne,Q as g,d as M,r as z,A as we,o as H,R as Ie,S as xe,b as y,c as b,g as p,e as m,B as F,F as U,E as q,w as Se,t as $e,U as ze,C as ke,D as ie,V as je,G as ae,W as R,X as Ae,k as V,Y as Ce,Z as Ne,$ as B,a0 as Be,a1 as K,a2 as Me,a3 as C,a4 as Te,a5 as E,n as N,f as G,a6 as We,a7 as Oe}from"./entry.SBPb_uOg.js";import{u as Fe}from"./index.C-3ZUY9_.js";import{_ as Re}from"./ProjectCard.5wv15bBX.js";import{_ as J,u as Ee}from"./Button.By1mbhqL.js";import{u as se}from"./asyncData.BlMU2w7B.js";import{q as oe}from"./query.BpnwqCBR.js";import{_ as Le}from"./ArticleCard.Dy2DrddA.js";import{_ as re}from"./Icon.DU6aQc49.js";import"./Avatar.BcYm1mQa.js";import"./preview.CnKGtvmF.js";async function De(e,n){return await He(n).catch(t=>(console.error("Failed to get image meta for "+n,t+""),{width:0,height:0,ratio:0}))}async function He(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((n,i)=>{const t=new Image;t.onload=()=>{const a={width:t.width,height:t.height,ratio:t.width/t.height};n(a)},t.onerror=a=>i(a),t.src=e})}function P(e){return n=>n?e[n]||n:e.missingValue}function Ue({formatter:e,keyMap:n,joinWith:i="/",valueMap:t}={}){e||(e=(s,o)=>`${s}=${o}`),n&&typeof n!="function"&&(n=P(n));const a=t||{};return Object.keys(a).forEach(s=>{typeof a[s]!="function"&&(a[s]=P(a[s]))}),(s={})=>Object.entries(s).filter(([r,c])=>typeof c<"u").map(([r,c])=>{const u=a[r];return typeof u=="function"&&(c=u(s[r])),r=typeof n=="function"?n(r):r,e(r,c)}).join(i)}function x(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function qe(e=""){if(e===void 0||!e.length)return[];const n=new Set;for(const i of e.split(" ")){const t=parseInt(i.replace("x",""));t&&n.add(t)}return Array.from(n)}function Ve(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Je(e){const n={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(t=>t)){const t=i.split(":");t.length!==2?n["1px"]=t[0].trim():n[t[0].trim()]=t[1].trim()}else Object.assign(n,e);return n}function Ye(e){const n={options:e},i=(a,s={})=>le(n,a,s),t=(a,s={},o={})=>i(a,{...o,modifiers:D(s,o.modifiers||{})}).url;for(const a in e.presets)t[a]=(s,o,r)=>t(s,o,{...e.presets[a],...r});return t.options=e,t.getImage=i,t.getMeta=(a,s)=>Ze(n,a,s),t.getSizes=(a,s)=>Ke(n,a,s),n.$img=t,t}async function Ze(e,n,i){const t=le(e,n,{...i});return typeof t.getMeta=="function"?await t.getMeta():await De(e,t.url)}function le(e,n,i){var u,d;if(typeof n!="string"||n==="")throw new TypeError(`input must be a string (received ${typeof n}: ${JSON.stringify(n)})`);if(n.startsWith("data:"))return{url:n};const{provider:t,defaults:a}=Qe(e,i.provider||e.options.provider),s=Xe(e,i.preset);if(n=Q(n)?n:pe(n),!t.supportsAlias)for(const h in e.options.alias)n.startsWith(h)&&(n=L(e.options.alias[h],n.substr(h.length)));if(t.validateDomains&&Q(n)){const h=_e(n).host;if(!e.options.domains.find(w=>w===h))return{url:n}}const o=D(i,s,a);o.modifiers={...o.modifiers};const r=o.modifiers.format;(u=o.modifiers)!=null&&u.width&&(o.modifiers.width=x(o.modifiers.width)),(d=o.modifiers)!=null&&d.height&&(o.modifiers.height=x(o.modifiers.height));const c=t.getImage(n,o,e);return c.format=c.format||r||"",c}function Qe(e,n){const i=e.options.providers[n];if(!i)throw new Error("Unknown provider: "+n);return i}function Xe(e,n){if(!n)return{};if(!e.options.presets[n])throw new Error("Unknown preset: "+n);return e.options.presets[n]}function Ke(e,n,i){var v,k,T,j,W;const t=x((v=i.modifiers)==null?void 0:v.width),a=x((k=i.modifiers)==null?void 0:k.height),s=Je(i.sizes),o=(T=i.densities)!=null&&T.trim()?qe(i.densities.trim()):e.options.densities;Ve(o);const r=t&&a?a/t:0,c=[],u=[];if(Object.keys(s).length>=1){for(const _ in s){const I=ee(_,String(s[_]),a,r,e);if(I!==void 0){c.push({size:I.size,screenMaxWidth:I.screenMaxWidth,media:`(max-width: ${I.screenMaxWidth}px)`});for(const $ of o)u.push({width:I._cWidth*$,src:te(e,n,i,I,$)})}}Ge(c)}else for(const _ of o){const I=Object.keys(s)[0];let $=ee(I,String(s[I]),a,r,e);$===void 0&&($={size:"",screenMaxWidth:0,_cWidth:(j=i.modifiers)==null?void 0:j.width,_cHeight:(W=i.modifiers)==null?void 0:W.height}),u.push({width:_,src:te(e,n,i,$,_)})}Pe(u);const d=u[u.length-1],h=c.length?c.map(_=>`${_.media?_.media+" ":""}${_.size}`).join(", "):void 0,w=h?"w":"x",l=u.map(_=>`${_.src} ${_.width}${w}`).join(", ");return{sizes:h,srcset:l,src:d==null?void 0:d.src}}function ee(e,n,i,t,a){const s=a.options.screens&&a.options.screens[e]||parseInt(e),o=n.endsWith("vw");if(!o&&/^\d+$/.test(n)&&(n=n+"px"),!o&&!n.endsWith("px"))return;let r=parseInt(n);if(!s||!r)return;o&&(r=Math.round(r/100*s));const c=t?Math.round(r*t):i;return{size:n,screenMaxWidth:s,_cWidth:r,_cHeight:c}}function te(e,n,i,t,a){return e.$img(n,{...i.modifiers,width:t._cWidth?t._cWidth*a:void 0,height:t._cHeight?t._cHeight*a:void 0},i)}function Ge(e){var i;e.sort((t,a)=>t.screenMaxWidth-a.screenMaxWidth);let n=null;for(let t=e.length-1;t>=0;t--){const a=e[t];a.media===n&&e.splice(t,1),n=a.media}for(let t=0;t<e.length;t++)e[t].media=((i=e[t+1])==null?void 0:i.media)||""}function Pe(e){e.sort((i,t)=>i.width-t.width);let n=null;for(let i=e.length-1;i>=0;i--){const t=e[i];t.width===n&&e.splice(i,1),n=t.width}}const et=Ue({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,n)=>X(e)+"_"+X(n)}),tt=(e,{modifiers:n={},baseURL:i}={},t)=>{n.width&&n.height&&(n.resize=`${n.width}x${n.height}`,delete n.width,delete n.height);const a=et(n)||"_";return i||(i=L(t.options.nuxt.baseURL,"/_ipx")),{url:L(i,a,ye(e))}},nt=!0,it=!0,at=Object.freeze(Object.defineProperty({__proto__:null,getImage:tt,supportsAlias:it,validateDomains:nt},Symbol.toStringTag,{value:"Module"})),ce={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};ce.providers={ipxStatic:{provider:at,defaults:{}}};const de=()=>{const e=be(),n=ne();return n.$img||n._img||(n._img=Ye({...ce,nuxt:{baseURL:e.app.baseURL}}))},st={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ot=e=>{const n=g(()=>({provider:e.provider,preset:e.preset})),i=g(()=>({width:x(e.width),height:x(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),t=de(),a=g(()=>({...e.modifiers,width:x(e.width),height:x(e.height),format:e.format,quality:e.quality||t.options.quality,background:e.background,fit:e.fit}));return{options:n,attrs:i,modifiers:a}},rt={...st,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},lt=M({name:"NuxtImg",props:rt,emits:["load","error"],setup:(e,n)=>{const i=de(),t=ot(e),a=z(!1),s=g(()=>i.getSizes(e.src,{...t.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...t.modifiers.value,width:x(e.width),height:x(e.height)}})),o=g(()=>{const l={...t.attrs.value,"data-nuxt-img":""};return(!e.placeholder||a.value)&&(l.sizes=s.value.sizes,l.srcset=s.value.srcset),l}),r=g(()=>{let l=e.placeholder;if(l===""&&(l=!0),!l||a.value)return!1;if(typeof l=="string")return l;const v=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return i(e.src,{...t.modifiers.value,width:v[0],height:v[1],quality:v[2]||50,blur:v[3]||3},t.options.value)}),c=g(()=>e.sizes?s.value.src:i(e.src,t.modifiers.value,t.options.value)),u=g(()=>r.value?r.value:c.value);if(e.preload){const l=Object.values(s.value).every(v=>v);we({link:[{rel:"preload",as:"image",nonce:e.nonce,...l?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:u.value}}]})}const d=z(),w=ne().isHydrating;return H(()=>{if(r.value){const l=new Image;l.src=c.value,e.sizes&&(l.sizes=s.value.sizes||"",l.srcset=s.value.srcset),l.onload=v=>{a.value=!0,n.emit("load",v)};return}d.value&&(d.value.complete&&w&&(d.value.getAttribute("data-error")?n.emit("error",new Event("error")):n.emit("load",new Event("load"))),d.value.onload=l=>{n.emit("load",l)},d.value.onerror=l=>{n.emit("error",l)})}),()=>Ie("img",{ref:d,src:u.value,...o.value,...n.attrs})}}),ct={class:"space-y-6"},dt=m("div",{class:"text-center typewriter"},[m("h1",{class:"text-2xl md:text-4xl lg:text-5xl xl:text-6xl"},"This site is under Construction.")],-1),ut={class:"flex justify-center"},gt=m("h1",{class:"text-xl flex justify-center font-bold tracking-tight text-gray-800 dark:text-gray-100"}," Hello! ",-1),mt=m("p",{class:"text-gray-900 dark:text-gray-400 textk` text-justify"},[F(" I'm Sunil Regmi. I am a versatile IT professional with a Master's in Information Technology and a strong background in academia and industry. I have over 3 years of experience in teaching computer programming, AI, and IT-related subjects, coupled with five years of hands-on expertise in full-stack web application development. I hold a passion for AI backed by in-depth knowledge in machine learning and deep learning. I have also worked as an IT Project Manager and I am currently serving as a part-time Tech Consultant and AI Researcher in a research company. I have some publications related on NLP like Nepali speech recognition and exploring large language models for low-resource languages like Nepali. "),m("br"),F("  I also posses a proven track record as a dedicated educator, with experience as a Teaching Assistant and Visiting Lecturer at Kathmandu University. ")],-1),ft=m("p",{class:"text-justify text-gray-900 dark:text-gray-400"},[F("   By day, I'm a AI Research and Developer at "),m("a",{href:"https://www.gdlabs.org.np/",target:"_blank",class:"underline"},"Green Decisions Labs and Research"),F(", and by night (and weekends), I am a freelancer, self-learner, musician and a composer. ")],-1),ht={__name:"Intro",setup(e){return Fe({title:"Sunil Regmi",description:"Hi, I'am Sunil Regmi, skilled IT professional with a Master's in Information Technology, specializing in AI and full-stack web development, currently working as an AI Researcher at Green Decisions Labs while pursuing freelance projects and interests in music."}),(n,i)=>{const t=xe("climate-clock"),a=lt;return y(),b("div",ct,[p(t),dt,m("div",ut,[p(a,{src:"/pp.jpg",alt:"Sunil Regmi",class:"ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 h-40 w-40 hover:scale-110",sizes:"48px sm:64px",placeholder:"",format:"webp"})]),gt,mt,ft])}}},vt=ht,pt=m("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-4"},"FIND ME ON",-1),_t={class:"space-y-5"},yt={class:"text-sm"},bt=m("div",{class:"flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"},null,-1),wt=M({__name:"SocialLinks",setup(e){const n=[{name:"Twitter",url:"",icon:"mdi:twitter"},{name:"GitHub",url:"https://github.com/sunilregmi233",icon:"mdi:github"},{name:"Linkedin",url:"https://www.linkedin.com/in/sunil-regmi-66669413a/",icon:"mdi:linkedin"},{name:"Instagram",url:"https://www.instagram.com/__su.re/",icon:"mdi:instagram"}];return(i,t)=>{const a=ze,s=ke;return y(),b("div",null,[pt,m("div",_t,[(y(),b(U,null,q(n,o=>p(s,{key:o.icon,to:o.url,target:"_blank",external:"",class:"flex items-end gap-4 dark:hover:text-gray-300 group"},{default:Se(()=>[m("span",yt,$e(o.name),1),bt,p(a,{name:o.icon,class:"w-6 h-6"},null,8,["name"])]),_:2},1032,["to"])),64))])])}}}),It=m("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-6"}," FEATURED PROEJCTS ",-1),xt={class:"space-y-4"},St={class:"flex items-center justify-center mt-6 text-sm"},$t=M({__name:"FeaturedProjects",async setup(e){let n,i;const{data:t}=([n,i]=ie(()=>se("projects-home",()=>oe("/projects").limit(3).find())),n=await n,i(),n);return(a,s)=>{const o=Re,r=J;return y(),b("div",null,[It,m("div",xt,[(y(!0),b(U,null,q(ae(t),(c,u)=>(y(),je(o,{key:u,project:c},null,8,["project"]))),128))]),m("div",St,[p(r,{label:"All Projects →",to:"/projects",variant:"link",color:"gray"})])])}}}),zt=m("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-6"}," RECENT ARTICLES ",-1),kt={class:"space-y-16"},jt={class:"flex items-center justify-center mt-6 text-sm"},At=M({__name:"FeaturedArticles",async setup(e){let n,i;const{data:t}=([n,i]=ie(()=>se("articles-home",()=>oe("/articles").sort({published:-1}).limit(3).only(["title","description","published","slug","_path"]).find())),n=await n,i(),n);return(a,s)=>{const o=Le,r=J;return y(),b("div",null,[zt,m("ul",kt,[(y(!0),b(U,null,q(ae(t),(c,u)=>(y(),b("li",{key:u},[p(o,{article:c},null,8,["article"])]))),128))]),m("div",jt,[p(r,{label:"All Articles →",to:"/articles",variant:"link",color:"gray"})])])}}});let Ct=0;function Nt(){return`nuid-${Ct++}`}const Bt=(e,n)=>{const i=R("form-events",void 0),t=R("form-group",void 0),a=R("form-inputs",void 0),s=z(e==null?void 0:e.id);H(()=>{s.value=(e==null?void 0:e.legend)===null||e.legend?void 0:(e==null?void 0:e.id)??Nt(),t&&(t.inputId.value=s.value,a&&(a.value[t.name.value]=s))});const o=z(!1);function r(h,w){i&&i.emit({type:h,path:w})}function c(){r("blur",t==null?void 0:t.name.value),o.value=!0}function u(){r("change",t==null?void 0:t.name.value)}const d=Ae(()=>{(o.value||t!=null&&t.eagerValidation.value)&&r("input",t==null?void 0:t.name.value)},300);return{inputId:s,name:g(()=>(e==null?void 0:e.name)??(t==null?void 0:t.name.value)),size:g(()=>{var w;const h=n.size[t==null?void 0:t.size.value]?t==null?void 0:t.size.value:null;return(e==null?void 0:e.size)??h??((w=n==null?void 0:n.default)==null?void 0:w.size)}),color:g(()=>{var h;return(h=t==null?void 0:t.error)!=null&&h.value?"red":e==null?void 0:e.color}),emitFormBlur:c,emitFormInput:d,emitFormChange:u}},S=Ce(B.ui.strategy,B.ui.input,Ne),Mt=M({components:{UIcon:re},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>S.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(S.size).includes(e)}},color:{type:String,default:()=>S.default.color,validator(e){return[...B.ui.colors,...Object.keys(S.color)].includes(e)}},variant:{type:String,default:()=>S.default.variant,validator(e){return[...Object.keys(S.variant),...Object.values(S.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:n,slots:i}){const{ui:t,attrs:a}=Be("input",K(e,"ui"),S,K(e,"class")),{size:s,rounded:o}=Ee({ui:t,props:e}),{emitFormBlur:r,emitFormInput:c,size:u,color:d,inputId:h,name:w}=Bt(e,S),l=g(()=>s.value||u.value),v=z(D({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),k=z(null),T=()=>{var f;e.autofocus&&((f=k.value)==null||f.focus())},j=f=>{v.value.trim&&(f=f.trim()),(v.value.number||e.type==="number")&&(f=We(f)),n("update:modelValue",f),c()},W=f=>{v.value.lazy||j(f.target.value)},_=f=>{const A=f.target.value;v.value.lazy&&j(A),v.value.trim&&(f.target.value=A.trim())},I=f=>{r(),n("blur",f)};H(()=>{setTimeout(()=>{T()},e.autofocusDelay)});const $=g(()=>{var A,Z;const f=((Z=(A=t.value.color)==null?void 0:A[d.value])==null?void 0:Z[e.variant])||t.value.variant[e.variant];return Me(C(t.value.base,t.value.form,o.value,t.value.placeholder,t.value.size[l.value],e.padded?t.value.padding[l.value]:"p-0",f==null?void 0:f.replaceAll("{color}",d.value),(O.value||i.leading)&&t.value.leading.padding[l.value],(Y.value||i.trailing)&&t.value.trailing.padding[l.value]),e.inputClass)}),O=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),Y=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),ue=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),ge=g(()=>e.loading&&!O.value?e.loadingIcon:e.trailingIcon||e.icon),me=g(()=>C(t.value.icon.leading.wrapper,t.value.icon.leading.pointer,t.value.icon.leading.padding[l.value])),fe=g(()=>C(t.value.icon.base,d.value&&B.ui.colors.includes(d.value)&&t.value.icon.color.replaceAll("{color}",d.value),t.value.icon.size[l.value],e.loading&&t.value.icon.loading)),he=g(()=>C(t.value.icon.trailing.wrapper,t.value.icon.trailing.pointer,t.value.icon.trailing.padding[l.value])),ve=g(()=>C(t.value.icon.base,d.value&&B.ui.colors.includes(d.value)&&t.value.icon.color.replaceAll("{color}",d.value),t.value.icon.size[l.value],e.loading&&!O.value&&t.value.icon.loading));return{ui:t,attrs:a,name:w,inputId:h,input:k,isLeading:O,isTrailing:Y,inputClass:$,leadingIconName:ue,leadingIconClass:fe,leadingWrapperIconClass:me,trailingIconName:ge,trailingIconClass:ve,trailingWrapperIconClass:he,onInput:W,onChange:_,onBlur:I}}}),Tt=["id","name","value","type","required","placeholder","disabled"];function Wt(e,n,i,t,a,s){const o=re;return y(),b("div",{class:N(e.ui.wrapper)},[m("input",Te({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:n[1]||(n[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:n[2]||(n[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Tt),E(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),b("span",{key:0,class:N(e.leadingWrapperIconClass)},[E(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[p(o,{name:e.leadingIconName,class:N(e.leadingIconClass)},null,8,["name","class"])])],2)):G("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),b("span",{key:1,class:N(e.trailingWrapperIconClass)},[E(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[p(o,{name:e.trailingIconName,class:N(e.trailingIconClass)},null,8,["name","class"])])],2)):G("",!0)],2)}const Ot=V(Mt,[["render",Wt]]),Ft={},Rt=Oe('<div class="mb-6 flex items-center gap-3"><div class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"><div class="h-1.5 w-1.5 rounded-full bg-current"></div></div><h2 class="uppercase text-xs font-semibold text-gray-400"> STAY IN TOUCH </h2></div><p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> Get notified when I publish something new, and unsubscribe at any time. </p>',2),Et={class:"flex items-center gap-3 mt-6"};function Lt(e,n){const i=Ot,t=J;return y(),b("div",null,[Rt,m("div",Et,[p(i,{placeholder:"Email Address",icon:"i-heroicons-envelope",class:"flex-1",size:"lg"}),p(t,{label:"Join →",size:"lg",color:"black"})])])}const Dt=V(Ft,[["render",Lt]]),Ht={},Ut={class:"min-h-screen"},qt={class:"space-y-4"};function Vt(e,n){const i=vt,t=wt,a=$t,s=At,o=Dt;return y(),b("main",Ut,[m("div",qt,[p(i),p(t),p(a),p(s),p(o)])])}const nn=V(Ht,[["render",Vt]]);export{nn as default};
