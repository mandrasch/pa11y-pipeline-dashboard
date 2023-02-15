import{S as Z,i as $,s as x,a as w,k,q as g,J as ee,h as n,c as I,l as S,m as P,r as A,p as N,n as O,b as z,H as i,C as V,K as X,e as Y,u as T}from"../../chunks/index-ef058416.js";function F(f,e,r){const o=f.slice();return o[1]=e[r][0],o[2]=e[r][1],o}function G(f,e,r){const o=f.slice();return o[5]=e[r],o}function te(f){let e,r,o,h,u=f[2].length+"",v,C,_,b=f[2],c=[];for(let s=0;s<b.length;s+=1)c[s]=Q(G(f,b,s));return{c(){e=k("details"),r=k("summary"),o=g("Problems found: "),h=k("span"),v=g(u),C=w();for(let s=0;s<c.length;s+=1)c[s].c();_=w(),this.h()},l(s){e=S(s,"DETAILS",{});var a=P(e);r=S(a,"SUMMARY",{class:!0});var t=P(r);o=A(t,"Problems found: "),h=S(t,"SPAN",{style:!0});var y=P(h);v=A(y,u),y.forEach(n),t.forEach(n),C=I(a);for(let D=0;D<c.length;D+=1)c[D].l(a);a.forEach(n),_=I(s),this.h()},h(){N(h,"color","red"),O(r,"class","svelte-kzbdbp")},m(s,a){z(s,e,a),i(e,r),i(r,o),i(r,h),i(h,v),i(e,C);for(let t=0;t<c.length;t+=1)c[t].m(e,null);z(s,_,a)},p(s,a){if(a&1&&u!==(u=s[2].length+"")&&T(v,u),a&1){b=s[2];let t;for(t=0;t<b.length;t+=1){const y=G(s,b,t);c[t]?c[t].p(y,a):(c[t]=Q(y),c[t].c(),c[t].m(e,null))}for(;t<c.length;t+=1)c[t].d(1);c.length=b.length}},d(s){s&&n(e),X(c,s),s&&n(_)}}}function le(f){let e,r;return{c(){e=k("span"),r=g("All good, congratulations! 🥳"),this.h()},l(o){e=S(o,"SPAN",{style:!0});var h=P(e);r=A(h,"All good, congratulations! 🥳"),h.forEach(n),this.h()},h(){N(e,"color","darkgreen"),N(e,"font-weight","bold")},m(o,h){z(o,e,h),i(e,r)},p:V,d(o){o&&n(e)}}}function Q(f){let e,r,o=f[5].type.charAt(0).toUpperCase()+f[5].type.slice(1)+"",h,u,v=f[5].code+"",C,_,b,c=f[5].message+"",s,a,t,y,D,M=f[5].context+"",H,U,L,d,l=f[5].runner+"",E,p;return{c(){e=k("article"),r=k("header"),h=g(o),u=g(": "),C=g(v),_=w(),b=k("p"),s=g(c),a=w(),t=k("pre"),y=g("                 "),D=k("code"),H=g(M),U=w(),L=k("small"),d=g("Runner: "),E=g(l),p=w(),this.h()},l(R){e=S(R,"ARTICLE",{});var m=P(e);r=S(m,"HEADER",{});var j=P(r);h=A(j,o),u=A(j,": "),C=A(j,v),j.forEach(n),_=I(m),b=S(m,"P",{});var q=P(b);s=A(q,c),q.forEach(n),a=I(m),t=S(m,"PRE",{class:!0});var J=P(t);y=A(J,"                 "),D=S(J,"CODE",{class:!0});var K=P(D);H=A(K,M),K.forEach(n),J.forEach(n),U=I(m),L=S(m,"SMALL",{});var B=P(L);d=A(B,"Runner: "),E=A(B,l),B.forEach(n),p=I(m),m.forEach(n),this.h()},h(){O(D,"class","svelte-kzbdbp"),O(t,"class","svelte-kzbdbp")},m(R,m){z(R,e,m),i(e,r),i(r,h),i(r,u),i(r,C),i(e,_),i(e,b),i(b,s),i(e,a),i(e,t),i(t,y),i(t,D),i(D,H),i(e,U),i(e,L),i(L,d),i(L,E),i(e,p)},p(R,m){m&1&&o!==(o=R[5].type.charAt(0).toUpperCase()+R[5].type.slice(1)+"")&&T(h,o),m&1&&v!==(v=R[5].code+"")&&T(C,v),m&1&&c!==(c=R[5].message+"")&&T(s,c),m&1&&M!==(M=R[5].context+"")&&T(H,M),m&1&&l!==(l=R[5].runner+"")&&T(E,l)},d(R){R&&n(e)}}}function W(f){let e,r,o,h=f[1].replace("https://","").slice(0,-1)+"",u,v,C,_;function b(a,t){return a[2].length===0?le:te}let c=b(f),s=c(f);return{c(){e=k("h2"),r=g("Site: "),o=k("a"),u=g(h),C=w(),s.c(),_=Y(),this.h()},l(a){e=S(a,"H2",{class:!0});var t=P(e);r=A(t,"Site: "),o=S(t,"A",{href:!0});var y=P(o);u=A(y,h),y.forEach(n),t.forEach(n),C=I(a),s.l(a),_=Y(),this.h()},h(){O(o,"href",v=f[1]),O(e,"class","svelte-kzbdbp")},m(a,t){z(a,e,t),i(e,r),i(e,o),i(o,u),z(a,C,t),s.m(a,t),z(a,_,t)},p(a,t){t&1&&h!==(h=a[1].replace("https://","").slice(0,-1)+"")&&T(u,h),t&1&&v!==(v=a[1])&&O(o,"href",v),c===(c=b(a))&&s?s.p(a,t):(s.d(1),s=c(a),s&&(s.c(),s.m(_.parentNode,_)))},d(a){a&&n(e),a&&n(C),s.d(a),a&&n(_)}}}function se(f){let e,r,o,h,u,v,C,_,b,c,s,a,t,y,D,M,H,U,L=Object.entries(f[0].pa11yResults.results),d=[];for(let l=0;l<L.length;l+=1)d[l]=W(F(f,L,l));return{c(){e=w(),r=k("h1"),o=g("pa11y pipeline dashboard"),h=w(),u=k("p"),v=g(`Disclaimer: Automated accessibility testing is not enough. Please always test with screenreaders
	and other tools.`),C=w(),_=k("small"),b=g(`Both html code sniffer (htmlcs) and axe-core are currently used for testing, this can lead to
	duplicate error messages.`),c=w();for(let l=0;l<d.length;l+=1)d[l].c();s=w(),a=k("div"),t=k("p"),y=k("a"),D=g("Imprint & privacy"),M=g(` |
		`),H=k("a"),U=g("Source Code"),this.h()},l(l){ee("svelte-1yl3l3e",document.head).forEach(n),e=I(l),r=S(l,"H1",{style:!0});var p=P(r);o=A(p,"pa11y pipeline dashboard"),p.forEach(n),h=I(l),u=S(l,"P",{style:!0});var R=P(u);v=A(R,`Disclaimer: Automated accessibility testing is not enough. Please always test with screenreaders
	and other tools.`),R.forEach(n),C=I(l),_=S(l,"SMALL",{});var m=P(_);b=A(m,`Both html code sniffer (htmlcs) and axe-core are currently used for testing, this can lead to
	duplicate error messages.`),m.forEach(n),c=I(l);for(let B=0;B<d.length;B+=1)d[B].l(l);s=I(l),a=S(l,"DIV",{style:!0});var j=P(a);t=S(j,"P",{});var q=P(t);y=S(q,"A",{href:!0});var J=P(y);D=A(J,"Imprint & privacy"),J.forEach(n),M=A(q,` |
		`),H=S(q,"A",{href:!0});var K=P(H);U=A(K,"Source Code"),K.forEach(n),q.forEach(n),j.forEach(n),this.h()},h(){document.title="pa11y pipeline dashboard",N(r,"margin-top","50px"),N(r,"margin-bottom","10px"),N(r,"font-size","2.5rem"),N(u,"color","#666"),O(y,"href","https://matthias-andrasch.eu/blog/impressum-datenschutz/"),O(H,"href","https://github.com/mandrasch/pa11y-pipeline-dashboard"),N(a,"margin-top","70px"),N(a,"text-align","center")},m(l,E){z(l,e,E),z(l,r,E),i(r,o),z(l,h,E),z(l,u,E),i(u,v),z(l,C,E),z(l,_,E),i(_,b),z(l,c,E);for(let p=0;p<d.length;p+=1)d[p].m(l,E);z(l,s,E),z(l,a,E),i(a,t),i(t,y),i(y,D),i(t,M),i(t,H),i(H,U)},p(l,[E]){if(E&1){L=Object.entries(l[0].pa11yResults.results);let p;for(p=0;p<L.length;p+=1){const R=F(l,L,p);d[p]?d[p].p(R,E):(d[p]=W(R),d[p].c(),d[p].m(s.parentNode,s))}for(;p<d.length;p+=1)d[p].d(1);d.length=L.length}},i:V,o:V,d(l){l&&n(e),l&&n(r),l&&n(h),l&&n(u),l&&n(C),l&&n(_),l&&n(c),X(d,l),l&&n(s),l&&n(a)}}}function ae(f,e,r){let{data:o}=e;return f.$$set=h=>{"data"in h&&r(0,o=h.data)},[o]}class oe extends Z{constructor(e){super(),$(this,e,ae,se,x,{data:0})}}export{oe as default};