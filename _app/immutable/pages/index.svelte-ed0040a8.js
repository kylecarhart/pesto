import{S as dt,i as gt,s as _t,e as v,t as D,k,c as w,a as A,h as F,d as b,m as E,b as y,g as ht,J as i,K as Et,L as Rt,M as Dt,j as Pt,n as ct,N as Ft,O as J,P as Q,x as L,y as O,z as B,Q as Y,r as M,p as V,C as z}from"../chunks/index-330d2eae.js";function Gt(t){let n,e,p,u,s,d,c,m,r,_;return{c(){n=v("label"),e=v("span"),p=D(t[1]),u=k(),s=v("input"),d=k(),c=v("span"),m=D(t[2]),this.h()},l(I){n=w(I,"LABEL",{class:!0});var o=A(n);e=w(o,"SPAN",{class:!0});var h=A(e);p=F(h,t[1]),h.forEach(b),u=E(o),s=w(o,"INPUT",{type:!0,size:!0,class:!0}),d=E(o),c=w(o,"SPAN",{class:!0});var $=A(c);m=F($,t[2]),$.forEach(b),o.forEach(b),this.h()},h(){y(e,"class","block text-sm font-medium text-slate-700"),y(s,"type","text"),y(s,"size","4"),y(s,"class","mt-1 pl-3 pr-16 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "),y(c,"class","absolute right-3 top-8 text-slate-300 font-extralight"),y(n,"class","relative flex flex-col ")},m(I,o){ht(I,n,o),i(n,e),i(e,p),i(n,u),i(n,s),Et(s,t[0]),i(n,d),i(n,c),i(c,m),r||(_=[Rt(s,"input",t[4]),Rt(s,"input",function(){Dt(t[3])&&t[3].apply(this,arguments)})],r=!0)},p(I,[o]){t=I,o&2&&Pt(p,t[1]),o&1&&s.value!==t[0]&&Et(s,t[0]),o&4&&Pt(m,t[2])},i:ct,o:ct,d(I){I&&b(n),r=!1,Ft(_)}}}function jt(t,n,e){let{amount:p}=n,{label:u}=n,{unit:s}=n,{onInput:d}=n;function c(){p=this.value,e(0,p)}return t.$$set=m=>{"amount"in m&&e(0,p=m.amount),"label"in m&&e(1,u=m.label),"unit"in m&&e(2,s=m.unit),"onInput"in m&&e(3,d=m.onInput)},[p,u,s,d,c]}class W extends dt{constructor(n){super(),gt(this,n,jt,Gt,_t,{amount:0,label:1,unit:2,onInput:3})}}function Ht(t){let n,e,p,u,s,d,c,m,r,_,I,o,h,$,Z,R,x,tt,P,nt,et,S,f,ot,N,it,ut,T,rt,lt,G,pt,mt,j,ft,at;function Lt(a){t[9](a)}let bt={label:"Basil",unit:"g",onInput:t[8]};t[5]!==void 0&&(bt.amount=t[5]),h=new W({props:bt}),J.push(()=>Q(h,"amount",Lt));function Ot(a){t[11](a)}let It={label:"Pine nuts",unit:"g",onInput:t[10]};t[4]!==void 0&&(It.amount=t[4]),R=new W({props:It}),J.push(()=>Q(R,"amount",Ot));function Bt(a){t[13](a)}let vt={label:"Parmesan",unit:"g",onInput:t[12]};t[3]!==void 0&&(vt.amount=t[3]),P=new W({props:vt}),J.push(()=>Q(P,"amount",Bt));function Mt(a){t[15](a)}let wt={label:"Pecorino",unit:"g",onInput:t[14]};t[2]!==void 0&&(wt.amount=t[2]),S=new W({props:wt}),J.push(()=>Q(S,"amount",Mt));function Vt(a){t[17](a)}let yt={label:"Garlic",unit:"cloves",onInput:t[16]};t[1]!==void 0&&(yt.amount=t[1]),N=new W({props:yt}),J.push(()=>Q(N,"amount",Vt));function zt(a){t[19](a)}let kt={label:"Olive Oil",unit:"ml",onInput:t[18]};return t[0]!==void 0&&(kt.amount=t[0]),T=new W({props:kt}),J.push(()=>Q(T,"amount",zt)),{c(){n=v("div"),e=v("h1"),p=D("Pesto Calculator"),u=k(),s=v("p"),d=D(`Type any values into the boxes below to get the correct ratio of ingredients
    for delicious pesto.
    `),c=v("br"),m=k(),r=v("em"),_=D("Tip: 70 grams of basil makes about 1 pound of pasta."),I=k(),o=v("div"),L(h.$$.fragment),Z=k(),L(R.$$.fragment),tt=k(),L(P.$$.fragment),et=k(),L(S.$$.fragment),ot=k(),L(N.$$.fragment),ut=k(),L(T.$$.fragment),lt=k(),G=v("h2"),pt=D("Instructions:"),mt=k(),j=v("p"),ft=D(`In a mortar and pestle, grind nuts and garlic into a paste while adding a
    pinch or two of kosher salt. Add basil leaves to the mortar and grind to a
    very smooth paste (don't skimp on this step). Add the paste to a large bowl
    and combine with grated parmesan and pecorino cheese. Finally, add
    extra-virgin olive oil to your desired consistency.`),this.h()},l(a){n=w(a,"DIV",{class:!0});var l=A(n);e=w(l,"H1",{class:!0});var H=A(e);p=F(H,"Pesto Calculator"),H.forEach(b),u=E(l),s=w(l,"P",{class:!0});var C=A(s);d=F(C,`Type any values into the boxes below to get the correct ratio of ingredients
    for delicious pesto.
    `),c=w(C,"BR",{}),m=E(C),r=w(C,"EM",{});var K=A(r);_=F(K,"Tip: 70 grams of basil makes about 1 pound of pasta."),K.forEach(b),C.forEach(b),I=E(l),o=w(l,"DIV",{class:!0});var g=A(o);O(h.$$.fragment,g),Z=E(g),O(R.$$.fragment,g),tt=E(g),O(P.$$.fragment,g),et=E(g),O(S.$$.fragment,g),ot=E(g),O(N.$$.fragment,g),ut=E(g),O(T.$$.fragment,g),g.forEach(b),lt=E(l),G=w(l,"H2",{class:!0});var U=A(G);pt=F(U,"Instructions:"),U.forEach(b),mt=E(l),j=w(l,"P",{class:!0});var q=A(j);ft=F(q,`In a mortar and pestle, grind nuts and garlic into a paste while adding a
    pinch or two of kosher salt. Add basil leaves to the mortar and grind to a
    very smooth paste (don't skimp on this step). Add the paste to a large bowl
    and combine with grated parmesan and pecorino cheese. Finally, add
    extra-virgin olive oil to your desired consistency.`),q.forEach(b),l.forEach(b),this.h()},h(){y(e,"class","text-2xl py-1"),y(s,"class","text-sm text-slate-600"),y(o,"class","grid sm:grid-cols-2 gap-2 my-8"),y(G,"class","text-md mb-1 font-semibold"),y(j,"class","text-sm text-slate-800"),y(n,"class","py-8 sm:py-12 px-8 sm:px-16 rounded-md bg-white sm:shadow-lg sm:max-w-3xl")},m(a,l){ht(a,n,l),i(n,e),i(e,p),i(n,u),i(n,s),i(s,d),i(s,c),i(s,m),i(s,r),i(r,_),i(n,I),i(n,o),B(h,o,null),i(o,Z),B(R,o,null),i(o,tt),B(P,o,null),i(o,et),B(S,o,null),i(o,ot),B(N,o,null),i(o,ut),B(T,o,null),i(n,lt),i(n,G),i(G,pt),i(n,mt),i(n,j),i(j,ft),at=!0},p(a,[l]){const H={};l&32&&(H.onInput=a[8]),!$&&l&32&&($=!0,H.amount=a[5],Y(()=>$=!1)),h.$set(H);const C={};l&16&&(C.onInput=a[10]),!x&&l&16&&(x=!0,C.amount=a[4],Y(()=>x=!1)),R.$set(C);const K={};l&8&&(K.onInput=a[12]),!nt&&l&8&&(nt=!0,K.amount=a[3],Y(()=>nt=!1)),P.$set(K);const g={};l&4&&(g.onInput=a[14]),!f&&l&4&&(f=!0,g.amount=a[2],Y(()=>f=!1)),S.$set(g);const U={};l&2&&(U.onInput=a[16]),!it&&l&2&&(it=!0,U.amount=a[1],Y(()=>it=!1)),N.$set(U);const q={};l&1&&(q.onInput=a[18]),!rt&&l&1&&(rt=!0,q.amount=a[0],Y(()=>rt=!1)),T.$set(q)},i(a){at||(M(h.$$.fragment,a),M(R.$$.fragment,a),M(P.$$.fragment,a),M(S.$$.fragment,a),M(N.$$.fragment,a),M(T.$$.fragment,a),at=!0)},o(a){V(h.$$.fragment,a),V(R.$$.fragment,a),V(P.$$.fragment,a),V(S.$$.fragment,a),V(N.$$.fragment,a),V(T.$$.fragment,a),at=!1},d(a){a&&b(n),z(h),z(R),z(P),z(S),z(N),z(T)}}}const St=70,At=30,Nt=60,Tt=30,Ct=3,$t=80,st="ratio";function X(t,n){return Math.round(t*n)}function Kt(t,n,e){let p,u,s,d,c,m,r=1;{localStorage.getItem(st)||localStorage.setItem(st,r.toString());const f=parseFloat(localStorage.getItem(st));!isNaN(f)&&f!==0&&(r=f)}function _(f){e(7,r=f),localStorage.setItem(st,f.toString())}const I=()=>_(1/St*p);function o(f){p=f,e(5,p),e(7,r)}const h=()=>_(1/At*u);function $(f){u=f,e(4,u),e(7,r)}const Z=()=>_(1/Nt*s);function R(f){s=f,e(3,s),e(7,r)}const x=()=>_(1/Tt*d);function tt(f){d=f,e(2,d),e(7,r)}const P=()=>_(1/Ct*c);function nt(f){c=f,e(1,c),e(7,r)}const et=()=>_(1/$t*m);function S(f){m=f,e(0,m),e(7,r)}return t.$$.update=()=>{t.$$.dirty&128&&e(5,p=X(r,St)),t.$$.dirty&128&&e(4,u=X(r,At)),t.$$.dirty&128&&e(3,s=X(r,Nt)),t.$$.dirty&128&&e(2,d=X(r,Tt)),t.$$.dirty&128&&e(1,c=X(r,Ct)),t.$$.dirty&128&&e(0,m=X(r,$t))},[m,c,d,s,u,p,_,r,I,o,h,$,Z,R,x,tt,P,nt,et,S]}class Ut extends dt{constructor(n){super(),gt(this,n,Kt,Ht,_t,{})}}function qt(t){let n,e,p;return e=new Ut({}),{c(){n=v("div"),L(e.$$.fragment),this.h()},l(u){n=w(u,"DIV",{class:!0});var s=A(n);O(e.$$.fragment,s),s.forEach(b),this.h()},h(){y(n,"class","bg-slate-50 sm:p-6 sm:flex sm:items-center sm:justify-center sm:h-screen")},m(u,s){ht(u,n,s),B(e,n,null),p=!0},p:ct,i(u){p||(M(e.$$.fragment,u),p=!0)},o(u){V(e.$$.fragment,u),p=!1},d(u){u&&b(n),z(e)}}}class Qt extends dt{constructor(n){super(),gt(this,n,null,qt,_t,{})}}export{Qt as default};