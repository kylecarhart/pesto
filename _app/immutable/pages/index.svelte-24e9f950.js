import{S as lt,i as pt,s as ft,e as E,t as Q,k,c as R,a as A,h as W,d as b,m as P,b as I,g as mt,J as l,K as It,L as wt,M as Ot,j as vt,n as rt,N as Tt,O as H,P as U,x as N,y as S,z as B,Q as q,r as O,p as T,C as V}from"../chunks/index-330d2eae.js";function Vt(t){let n,e,p,u,o,c,m,a,i,g;return{c(){n=E("label"),e=E("span"),p=Q(t[1]),u=k(),o=E("input"),c=k(),m=E("span"),a=Q(t[2]),this.h()},l(h){n=R(h,"LABEL",{class:!0});var f=A(n);e=R(f,"SPAN",{class:!0});var $=A(e);p=W($,t[1]),$.forEach(b),u=P(f),o=R(f,"INPUT",{type:!0,size:!0,class:!0}),c=P(f),m=R(f,"SPAN",{class:!0});var L=A(m);a=W(L,t[2]),L.forEach(b),f.forEach(b),this.h()},h(){I(e,"class","block text-sm font-medium text-slate-700"),I(o,"type","text"),I(o,"size","4"),I(o,"class","mt-1 pl-3 pr-16 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "),I(m,"class","absolute right-3 top-8 text-slate-300 font-extralight"),I(n,"class","relative flex flex-col ")},m(h,f){mt(h,n,f),l(n,e),l(e,p),l(n,u),l(n,o),It(o,t[0]),l(n,c),l(n,m),l(m,a),i||(g=[wt(o,"input",t[4]),wt(o,"input",function(){Ot(t[3])&&t[3].apply(this,arguments)})],i=!0)},p(h,[f]){t=h,f&2&&vt(p,t[1]),f&1&&o.value!==t[0]&&It(o,t[0]),f&4&&vt(a,t[2])},i:rt,o:rt,d(h){h&&b(n),i=!1,Tt(g)}}}function zt(t,n,e){let{amount:p}=n,{label:u}=n,{unit:o}=n,{onInput:c}=n;function m(){p=this.value,e(0,p)}return t.$$set=a=>{"amount"in a&&e(0,p=a.amount),"label"in a&&e(1,u=a.label),"unit"in a&&e(2,o=a.unit),"onInput"in a&&e(3,c=a.onInput)},[p,u,o,c,m]}class J extends lt{constructor(n){super(),pt(this,n,zt,Vt,ft,{amount:0,label:1,unit:2,onInput:3})}}function Dt(t){let n,e,p,u,o,c,m,a,i,g,h,f,$,L,w,X,Y,v,Z,x,y,tt,d,C,et,st,z,at,ot,D,it,nt;function Ct(s){t[9](s)}let dt={label:"Basil",unit:"g",onInput:t[8]};t[5]!==void 0&&(dt.amount=t[5]),i=new J({props:dt}),H.push(()=>U(i,"amount",Ct));function $t(s){t[11](s)}let ct={label:"Pine nuts",unit:"g",onInput:t[10]};t[4]!==void 0&&(ct.amount=t[4]),f=new J({props:ct}),H.push(()=>U(f,"amount",$t));function Lt(s){t[13](s)}let _t={label:"Parmesan",unit:"g",onInput:t[12]};t[3]!==void 0&&(_t.amount=t[3]),w=new J({props:_t}),H.push(()=>U(w,"amount",Lt));function Nt(s){t[15](s)}let gt={label:"Pecorino",unit:"g",onInput:t[14]};t[2]!==void 0&&(gt.amount=t[2]),v=new J({props:gt}),H.push(()=>U(v,"amount",Nt));function St(s){t[17](s)}let ht={label:"Garlic",unit:"cloves",onInput:t[16]};t[1]!==void 0&&(ht.amount=t[1]),y=new J({props:ht}),H.push(()=>U(y,"amount",St));function Bt(s){t[19](s)}let bt={label:"Olive Oil",unit:"ml",onInput:t[18]};return t[0]!==void 0&&(bt.amount=t[0]),C=new J({props:bt}),H.push(()=>U(C,"amount",Bt)),{c(){n=E("div"),e=E("h1"),p=Q("Pesto Calculator"),u=k(),o=E("p"),c=Q(`Type any values into the boxes below to get the correct ratio of ingredients\r
    for delicious pesto.`),m=k(),a=E("div"),N(i.$$.fragment),h=k(),N(f.$$.fragment),L=k(),N(w.$$.fragment),Y=k(),N(v.$$.fragment),x=k(),N(y.$$.fragment),d=k(),N(C.$$.fragment),st=k(),z=E("h2"),at=Q("Instructions:"),ot=k(),D=E("p"),it=Q(`In a mortar and pestle, grind nuts and garlic into a paste while adding a\r
    pinch or two of kosher salt. Add basil leaves to the bowl and grind to a\r
    very smooth paste (don't skimp on this step). Added paste to a large bowl\r
    and combine with grated parmesan and pecorino cheese. Finally, add\r
    extra-virgin olive oil to your desired consistency.`),this.h()},l(s){n=R(s,"DIV",{class:!0});var r=A(n);e=R(r,"H1",{class:!0});var M=A(e);p=W(M,"Pesto Calculator"),M.forEach(b),u=P(r),o=R(r,"P",{class:!0});var j=A(o);c=W(j,`Type any values into the boxes below to get the correct ratio of ingredients\r
    for delicious pesto.`),j.forEach(b),m=P(r),a=R(r,"DIV",{class:!0});var _=A(a);S(i.$$.fragment,_),h=P(_),S(f.$$.fragment,_),L=P(_),S(w.$$.fragment,_),Y=P(_),S(v.$$.fragment,_),x=P(_),S(y.$$.fragment,_),d=P(_),S(C.$$.fragment,_),_.forEach(b),st=P(r),z=R(r,"H2",{class:!0});var F=A(z);at=W(F,"Instructions:"),F.forEach(b),ot=P(r),D=R(r,"P",{class:!0});var G=A(D);it=W(G,`In a mortar and pestle, grind nuts and garlic into a paste while adding a\r
    pinch or two of kosher salt. Add basil leaves to the bowl and grind to a\r
    very smooth paste (don't skimp on this step). Added paste to a large bowl\r
    and combine with grated parmesan and pecorino cheese. Finally, add\r
    extra-virgin olive oil to your desired consistency.`),G.forEach(b),r.forEach(b),this.h()},h(){I(e,"class","text-2xl py-1"),I(o,"class","text-sm text-slate-600"),I(a,"class","grid sm:grid-cols-2 gap-2 my-8"),I(z,"class","text-md mb-1 font-semibold"),I(D,"class","text-sm text-slate-800"),I(n,"class","py-8 sm:py-12 px-8 sm:px-16 rounded-md bg-white sm:shadow-lg sm:max-w-3xl")},m(s,r){mt(s,n,r),l(n,e),l(e,p),l(n,u),l(n,o),l(o,c),l(n,m),l(n,a),B(i,a,null),l(a,h),B(f,a,null),l(a,L),B(w,a,null),l(a,Y),B(v,a,null),l(a,x),B(y,a,null),l(a,d),B(C,a,null),l(n,st),l(n,z),l(z,at),l(n,ot),l(n,D),l(D,it),nt=!0},p(s,[r]){const M={};r&32&&(M.onInput=s[8]),!g&&r&32&&(g=!0,M.amount=s[5],q(()=>g=!1)),i.$set(M);const j={};r&16&&(j.onInput=s[10]),!$&&r&16&&($=!0,j.amount=s[4],q(()=>$=!1)),f.$set(j);const _={};r&8&&(_.onInput=s[12]),!X&&r&8&&(X=!0,_.amount=s[3],q(()=>X=!1)),w.$set(_);const F={};r&4&&(F.onInput=s[14]),!Z&&r&4&&(Z=!0,F.amount=s[2],q(()=>Z=!1)),v.$set(F);const G={};r&2&&(G.onInput=s[16]),!tt&&r&2&&(tt=!0,G.amount=s[1],q(()=>tt=!1)),y.$set(G);const ut={};r&1&&(ut.onInput=s[18]),!et&&r&1&&(et=!0,ut.amount=s[0],q(()=>et=!1)),C.$set(ut)},i(s){nt||(O(i.$$.fragment,s),O(f.$$.fragment,s),O(w.$$.fragment,s),O(v.$$.fragment,s),O(y.$$.fragment,s),O(C.$$.fragment,s),nt=!0)},o(s){T(i.$$.fragment,s),T(f.$$.fragment,s),T(w.$$.fragment,s),T(v.$$.fragment,s),T(y.$$.fragment,s),T(C.$$.fragment,s),nt=!1},d(s){s&&b(n),V(i),V(f),V(w),V(v),V(y),V(C)}}}const yt=70,kt=30,Pt=60,Et=30,Rt=3,At=80;function K(t,n){return Math.round(t*n)}function Mt(t,n,e){let p,u,o,c,m,a,i=1;function g(d){e(7,i=d)}const h=()=>g(1/yt*p);function f(d){p=d,e(5,p),e(7,i)}const $=()=>g(1/kt*u);function L(d){u=d,e(4,u),e(7,i)}const w=()=>g(1/Pt*o);function X(d){o=d,e(3,o),e(7,i)}const Y=()=>g(1/Et*c);function v(d){c=d,e(2,c),e(7,i)}const Z=()=>g(1/Rt*m);function x(d){m=d,e(1,m),e(7,i)}const y=()=>g(1/At*a);function tt(d){a=d,e(0,a),e(7,i)}return t.$$.update=()=>{t.$$.dirty&128&&e(5,p=K(i,yt)),t.$$.dirty&128&&e(4,u=K(i,kt)),t.$$.dirty&128&&e(3,o=K(i,Pt)),t.$$.dirty&128&&e(2,c=K(i,Et)),t.$$.dirty&128&&e(1,m=K(i,Rt)),t.$$.dirty&128&&e(0,a=K(i,At))},[a,m,c,o,u,p,g,i,h,f,$,L,w,X,Y,v,Z,x,y,tt]}class jt extends lt{constructor(n){super(),pt(this,n,Mt,Dt,ft,{})}}function Ft(t){let n,e,p;return e=new jt({}),{c(){n=E("div"),N(e.$$.fragment),this.h()},l(u){n=R(u,"DIV",{class:!0});var o=A(n);S(e.$$.fragment,o),o.forEach(b),this.h()},h(){I(n,"class","bg-slate-50 sm:p-6 sm:flex sm:items-center sm:justify-center sm:h-screen")},m(u,o){mt(u,n,o),B(e,n,null),p=!0},p:rt,i(u){p||(O(e.$$.fragment,u),p=!0)},o(u){T(e.$$.fragment,u),p=!1},d(u){u&&b(n),V(e)}}}class Ht extends lt{constructor(n){super(),pt(this,n,null,Ft,ft,{})}}export{Ht as default};
