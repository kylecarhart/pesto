import{n as H,s as gt,D as mt,r as _t,i as yt,t as we,o as wt}from"./scheduler.BbH4ZqYI.js";new URL("sveltekit-internal://");function vt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function bt(e){return e.split("%25").map(decodeURI).join("%25")}function Et(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ge({href:e}){return e.split("#")[0]}const kt=["href","pathname","search","toString","toJSON"];function At(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of kt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const St="/__data.json",Rt=".html__data.json";function It(e){return e.endsWith(".html")?e.replace(/\.html$/,Rt):e.replace(/\/$/,"")+St}function Lt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Pt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Be=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&B.delete(Ae(e)),Be(e,n));const B=new Map;function Ut(e,n){const t=Ae(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&B.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Pt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function xt(e,n,t){if(B.size>0){const r=Ae(e,t),a=B.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);B.delete(r)}}return window.fetch(n,t)}function Ae(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Lt(...a)}"]`}return r}const Tt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Nt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${jt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return me(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return me(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Tt.exec(c),[,h,p,d,g]=u;return n.push({name:d,matcher:g,optional:!!h,rest:!!p,chained:p?l===1&&i[0]==="":!1}),p?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return me(c)}).join("")}).join("")}/?$`),params:n}}function Ot(e){return!/^\([^)]+\)$/.test(e)}function jt(e){return e.slice(1).split("/").filter(Ot)}function $t(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function me(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,u]])=>{const{pattern:h,params:p}=Nt(s),d={id:s,exec:g=>{const f=h.exec(g);if(f)return $t(f,p,r)},errors:[1,...u||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Ke(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function je(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const j=[];function Ct(e,n){return{subscribe:oe(e,n).subscribe}}function oe(e,n=H){let t;const r=new Set;function a(s){if(gt(e,s)&&(e=s,t)){const c=!j.length;for(const l of r)l[1](),j.push(l,e);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(s){a(s(e))}function i(s,c=H){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||H),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}function dn(e,n,t){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=n.length<2;return Ct(t,(i,s)=>{let c=!1;const l=[];let u=0,h=H;const p=()=>{if(u)return;h();const g=n(r?l[0]:l,i,s);o?i(g):h=yt(g)?g:H},d=a.map((g,f)=>mt(g,_=>{l[f]=_,u&=~(1<<f),c&&p()},()=>{u|=1<<f}));return c=!0,p(),function(){_t(d),h(),c=!1}})}function hn(e){return{subscribe:e.subscribe.bind(e)}}var Ge;const P=((Ge=globalThis.__sveltekit_1d8pim1)==null?void 0:Ge.base)??"/pesto";var He;const Vt=((He=globalThis.__sveltekit_1d8pim1)==null?void 0:He.assets)??P,Ft="1722813168483",ze="sveltekit:snapshot",Je="sveltekit:scroll",Ye="sveltekit:states",qt="sveltekit:pageurl",C="sveltekit:history",z="sveltekit:navigation",Q={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},X=location.origin;function We(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Se(){return{x:pageXOffset,y:pageYOffset}}function $(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const $e={...Q,"":Q.hover};function Xe(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Xe(e)}}function ve(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||se(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===X&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function ee(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=$(s,"preload-code")),a===null&&(a=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),t===null&&(t=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Xe(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:$e[r??"off"],preload_data:$e[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function De(e){const n=oe(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Mt(){const{set:e,subscribe:n}=oe(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Vt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ft;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function se(e,n){return e.origin!==X||!e.pathname.startsWith(n)}const Gt=-1,Ht=-2,Bt=-3,Kt=-4,zt=-5,Jt=-6;function pn(e,n){return Qe(JSON.parse(e),n)}function Qe(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Gt)return;if(o===Bt)return NaN;if(o===Kt)return 1/0;if(o===zt)return-1/0;if(o===Jt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const p=Object.create(null);r[o]=p;for(let d=1;d<s.length;d+=2)p[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Ht&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const et=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...et];const Yt=new Set([...et]);[...Yt];function Wt(e){return e.filter(n=>n!=null)}class ie{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class tt{constructor(n,t){this.status=n,this.location=t}}class Re extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Xt="x-sveltekit-invalidated",Zt="x-sveltekit-trailing-slash";function te(e){return e instanceof ie||e instanceof Re?e.status:500}function Qt(e){return e instanceof Re?e.text:"Internal Error"}const O=Ke(Je)??{},J=Ke(ze)??{},x={url:De({}),page:De({}),navigating:oe(null),updated:Mt()};function Ie(e){O[e]=Se()}function en(e,n){let t=e+1;for(;O[t];)delete O[t],t+=1;for(t=n+1;J[t];)delete J[t],t+=1}function F(e){return location.href=e.href,new Promise(()=>{})}function Ce(){}let ce,be,ne,U,Ee,M;const nt=[],re=[];let I=null;const Le=[],tn=[];let D=[],y={branch:[],error:null,url:null},Pe=!1,ae=!1,Ve=!0,Y=!1,G=!1,rt=!1,le=!1,N,A,L,S,q;const K=new Set;let _e;async function gn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),M=e,ce=Dt(e),U=document.documentElement,Ee=n,be=e.nodes[0],ne=e.nodes[1],be(),ne(),A=(a=history.state)==null?void 0:a[C],L=(o=history.state)==null?void 0:o[z],A||(A=L=Date.now(),history.replaceState({...history.state,[C]:A,[z]:L},""));const r=O[A];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await fn(Ee,t):cn(location.href,{replaceState:!0}),ln()}async function nn(){if(await(_e||(_e=Promise.resolve())),!_e)return;_e=null;const e=de(y.url,!0);I=null;const n=q={},t=e&&await Te(e);if(!(!t||n!==q)){if(t.type==="redirect")return fe(new URL(t.location,y.url).href,{},1,n);t.props.page&&(S=t.props.page),y=t.state,at(),N.$set(t.props)}}function at(){nt.length=0,le=!1}function ot(e){re.some(n=>n==null?void 0:n.snapshot)&&(J[e]=re.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function st(e){var n;(n=J[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=re[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Fe(){Ie(A),je(Je,O),ot(L),je(ze,J)}async function fe(e,n,t,r){return Z({type:"goto",url:We(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(le=!0)}})}async function rn(e){if(e.id!==(I==null?void 0:I.id)){const n={};K.add(n),I={id:e.id,token:n,promise:Te({...e,preload:n}).then(t=>(K.delete(n),t.type==="loaded"&&t.state.error&&(I=null),t))}}return I.promise}async function ye(e){const n=ce.find(t=>t.exec(lt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function it(e,n,t){var o;y=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),S=e.props.page,N=new M.root({target:n,props:{...e.props,stores:x,components:re},hydrate:t}),st(L);const a={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(a)),ae=!0}function W({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(P&&(e.pathname===P||e.pathname===P+"/"))s="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);e.pathname=vt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Wt(t).map(d=>d.node.component),page:S}};i!==void 0&&(c.props.form=i);let l={},u=!S,h=0;for(let d=0;d<Math.max(t.length,y.branch.length);d+=1){const g=t[d],f=y.branch[d];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(u=!0),g&&(l={...l,...g.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==S.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?l:S.data}),c}async function Ue({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var u,h,p;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:b}=new URL(_,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:At(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let b;f instanceof Request?(b=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):b=f;const R=new URL(b,t);return s&&d(R.href),R.origin===t.origin&&(b=R.href.slice(t.origin.length)),ae?xt(b,R.href,_):Ut(b,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((p=l.universal)==null?void 0:p.trailingSlash)??(o==null?void 0:o.slash)}}function qe(e,n,t,r,a,o){if(le)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(nt.some(s=>s(new URL(i))))return!0;return!1}function xe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function an(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function Me({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:S,constructors:[]}}}async function Te({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((I==null?void 0:I.id)===e)return K.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let u=null;const h=y.url?e!==y.url.pathname+y.url.search:!1,p=y.route?a.id!==y.route.id:!1,d=an(y.url,t);let g=!1;const f=l.map((m,v)=>{var T;const E=y.branch[v],k=!!(m!=null&&m[0])&&((E==null?void 0:E.loader)!==m[1]||qe(g,p,h,d,(T=E.server)==null?void 0:T.uses,r));return k&&(g=!0),k});if(f.some(Boolean)){try{u=await dt(t,f)}catch(m){const v=await V(m,{url:t,params:r,route:{id:e}});return K.has(o)?Me({error:v,url:t,params:r,route:a}):ue({status:te(m),error:v,url:t,route:a})}if(u.type==="redirect")return u}const _=u==null?void 0:u.nodes;let b=!1;const R=l.map(async(m,v)=>{var he;if(!m)return;const E=y.branch[v],k=_==null?void 0:_[v];if((!k||k.type==="skip")&&m[1]===(E==null?void 0:E.loader)&&!qe(b,p,h,d,(he=E.universal)==null?void 0:he.uses,r))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ue({loader:m[1],url:t,params:r,route:a,parent:async()=>{var Oe;const Ne={};for(let pe=0;pe<v;pe+=1)Object.assign(Ne,(Oe=await R[pe])==null?void 0:Oe.data);return Ne},server_data_node:xe(k===void 0&&m[0]?{type:"skip"}:k??null,m[0]?E==null?void 0:E.server:void 0)})});for(const m of R)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await R[m])}catch(v){if(v instanceof tt)return{type:"redirect",location:v.location};if(K.has(o))return Me({error:await V(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let E=te(v),k;if(_!=null&&_.includes(v))E=v.status??E,k=v.error;else if(v instanceof ie)k=v.body;else{if(await x.updated.check())return await F(t);k=await V(v,{params:r,url:t,route:{id:a.id}})}const T=await ct(m,w,i);return T?W({url:t,params:r,branch:w.slice(0,T.idx).concat(T.node),status:E,error:k,route:a}):await ut(t,{id:a.id},k,E)}else w.push(void 0);return W({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function ct(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ue({status:e,error:n,url:t,route:r}){const a={};let o=null;if(M.server_loads[0]===0)try{const l=await dt(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==X||t.pathname!==location.pathname||Pe)&&await F(t)}const s=await Ue({loader:be,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:xe(o)}),c={node:await ne(),loader:ne,universal:null,server:null,data:null};return W({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function de(e,n){if(!e||se(e,P))return;let t;try{t=M.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=lt(t);for(const a of ce){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:Et(o),url:e}}}function lt(e){return bt(e.slice(P.length)||"/")}function ft({url:e,type:n,intent:t,delta:r}){let a=!1;const o=pt(y,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Y||Le.forEach(s=>s(i)),a?null:o}async function Z({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ce,block:u=Ce}){const h=de(n,!1),p=ft({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!p){u();return}const d=A,g=L;l(),Y=!0,ae&&x.navigating.set(p.navigation),q=c;let f=h&&await Te(h);if(!f){if(se(n,P))return await F(n);f=await ut(n,{id:null},await V(new Re(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,q!==c)return p.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ue({status:500,error:await V(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return fe(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await x.updated.check()&&await F(n);if(at(),Ie(d),ot(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,m={[C]:A+=w,[z]:L+=w,[Ye]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||en(A,L)}if(I=null,f.props.page.state=i,ae){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(tn.map(m=>m(p.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){D=D.filter(v=>!w.includes(v))};w.push(m),D.push(...w)}N.$set(f.props),rt=!0}else it(f,Ee,!1);const{activeElement:_}=document;await we();const b=t?t.scroll:a?Se():null;if(Ve){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==_&&document.activeElement!==document.body;!r&&!R&&ke(),Ve=!0,f.props.page&&(S=f.props.page),Y=!1,e==="popstate"&&st(L),p.fulfil(void 0),D.forEach(w=>w(p.navigation)),x.navigating.set(null)}async function ut(e,n,t,r){return e.origin===X&&e.pathname===location.pathname&&!Pe?await ue({status:r,error:t,url:e,route:n}):await F(e)}function on(){let e;U.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}U.addEventListener("mousedown",n),U.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ye(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Ze(o,U);if(!s)return;const{url:c,external:l,download:u}=ve(s,P);if(l||u)return;const h=ee(s);if(!h.reload)if(i<=h.preload_data){const p=de(c,!1);p&&rn(p)}else i<=h.preload_code&&ye(c.pathname)}function a(){t.disconnect();for(const o of U.querySelectorAll("a")){const{url:i,external:s,download:c}=ve(o,P);if(s||c)continue;const l=ee(o);l.reload||(l.preload_code===Q.viewport&&t.observe(o),l.preload_code===Q.eager&&ye(i.pathname))}}D.push(a),a()}function V(e,n){if(e instanceof ie)return e.body;const t=te(e),r=Qt(e);return M.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function sn(e,n){wt(()=>(e.push(n),()=>{const t=e.indexOf(n);e.splice(t,1)}))}function mn(e){sn(Le,e)}function cn(e,n={}){return e=We(e),e.origin!==X?Promise.reject(new Error("goto: invalid URL")):fe(e,n,0)}function _n(){return le=!0,nn()}async function yn(e){if(e.type==="error"){const n=new URL(location.href),{branch:t,route:r}=y;if(!r)return;const a=await ct(y.branch.length,t,r.errors);if(a){const o=W({url:n,params:y.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});y=o.state,N.$set(o.props),we().then(ke)}}else e.type==="redirect"?fe(e.location,{invalidateAll:!0},0):(N.$set({form:null,page:{...S,form:e.data,status:e.status}}),await we(),N.$set({form:e.data}),e.type==="success"&&ke())}function ln(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Fe(),!Y){const a=pt(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Le.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Fe()}),(n=navigator.connection)!=null&&n.saveData||on(),U.addEventListener("click",async t=>{var p;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ze(t.composedPath()[0],U);if(!r)return;const{url:a,external:o,target:i,download:s}=ve(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ee(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ft({url:a,type:"link"})?Y=!0:t.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ge(location)){const[,d]=y.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(p=r.ownerDocument.getElementById(h))==null||p.scrollIntoView();return}if(G=!0,Ie(A),e(a),!c.replace_state)return;G=!1}t.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),Z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),U.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(se(i,P))return;const s=t.target,c=ee(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),Z({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[C]){const a=t.state[C];if(q={},a===A)return;const o=O[a],i=t.state[Ye]??{},s=new URL(t.state[qt]??location.href),c=t.state[z],l=ge(location)===ge(y.url);if(c===L&&(rt||l)){e(s),O[A]=Se(),o&&scrollTo(o.x,o.y),i!==S.state&&(S={...S,state:i},N.$set({page:S})),A=a;return}const h=a-A;await Z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{A=a,L=c},block:()=>{history.go(-h)},nav_token:q})}else if(!G){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[C]:++A,[z]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){y.url=t,x.page.set({...S,url:t}),x.page.notify()}}async function fn(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){Pe=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=de(c,!1)||{});let l;try{const u=r.map(async(d,g)=>{const f=i[g];return f!=null&&f.uses&&(f.uses=ht(f.uses)),Ue({loader:M.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let b=0;b<g;b+=1)Object.assign(_,(await u[b]).data);return _},server_data_node:xe(f)})}),h=await Promise.all(u),p=ce.find(({id:d})=>d===o.id);if(p){const d=p.layouts;for(let g=0;g<d.length;g++)d[g]||h.splice(g,0,void 0)}l=W({url:c,params:a,branch:h,status:n,error:t,form:s,route:p??null})}catch(u){if(u instanceof tt){await F(new URL(u.location,location.href));return}l=await ue({status:te(u),error:await V(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),it(l,e,!0)}async function dt(e,n){var a;const t=new URL(e);t.pathname=It(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Zt,"1"),t.searchParams.append(Xt,n.map(o=>o?"1":"0").join(""));const r=await Be(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ie(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(p){return Qe(p,{Promise:d=>new Promise((g,f)=>{i.set(d,{fulfil:g,reject:f})})})}let u="";for(;;){const{done:p,value:d}=await s.read();if(p&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const g=u.indexOf(`
`);if(g===-1)break;const f=JSON.parse(u.slice(0,g));if(u=u.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=ht(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:b,error:R}=f,w=i.get(_);i.delete(_),R?w.reject(l(R)):w.fulfil(l(b))}}}})}function ht(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function ke(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function pt(e,n,t,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{Ht as H,Bt as N,Kt as P,Gt as U,zt as a,Jt as b,yn as c,dn as d,mn as e,gn as f,cn as g,_n as i,pn as p,hn as r,x as s,oe as w};
