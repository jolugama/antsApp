(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{QtHV:function(t,e,o){"use strict";o.r(e),o.d(e,"iosTransitionAnimation",(function(){return f})),o.d(e,"shadow",(function(){return s})),o("54nT"),o("AfW+"),o("aiEM");var a=o("iAHb"),r=(o("kBU6"),o("Uch9"));const n=t=>document.querySelector(`${t}.ion-cloned-element`),s=t=>t.shadowRoot||t,l=t=>t.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]"),i=(t,e)=>{const o=t.querySelectorAll("ion-buttons");for(const a of o){const t=a.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),r=a.querySelector("ion-back-button"),n=a.classList.contains("buttons-collapse"),s="start"===a.slot||""===a.slot;if(null!==r&&s&&(n&&o&&e||!n))return r}return null},c=(t,e,o,r,l,i)=>{const c=e?`calc(100% - ${i.right+4}px)`:`${i.left-4}px`,d=e?"7px":"-7px",f=e?"-4px":"4px",m=e?"-4px":"4px",p=e?"right":"left",y=e?"left":"right",b=o?[{offset:0,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${d}, ${l.top-40}px, 0) scale(2.1)`}]:[{offset:0,opacity:0,transform:`translate3d(${d}, ${l.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`}],u=o?[{offset:0,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`}]:[{offset:0,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`}],$=Object(a.a)(),S=Object(a.a)(),T=n("ion-back-button"),x=s(T).querySelector(".button-text"),g=s(T).querySelector("ion-icon");T.text=r.text,T.mode=r.mode,T.icon=r.icon,T.color=r.color,T.disabled=r.disabled,T.style.setProperty("display","block"),T.style.setProperty("position","fixed"),S.addElement(g),$.addElement(x),$.beforeStyles({"transform-origin":`${p} center`}).beforeAddWrite(()=>{r.style.setProperty("display","none"),T.style.setProperty(p,c)}).afterAddWrite(()=>{r.style.setProperty("display",""),T.style.setProperty("display","none"),T.style.removeProperty(p)}).keyframes(b),S.beforeStyles({"transform-origin":`${y} center`}).keyframes(u),t.addAnimation([$,S])},d=(t,e,o,r,s,l)=>{const i=e?`calc(100% - ${r.right}px)`:`${r.left}px`,c=e?"-18px":"18px",d=e?"right":"left",f=o?[{offset:0,opacity:0,transform:`translate3d(${c}, ${l.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${s.top-2}px, 0) scale(1)`}]:[{offset:0,opacity:.99,transform:`translate3d(0, ${s.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${c}, ${l.top-4}px, 0) scale(0.5)`}],m=n("ion-title"),p=Object(a.a)();m.innerText=r.innerText,m.size=r.size,m.color=r.color,p.addElement(m),p.beforeStyles({"transform-origin":`${d} center`,height:"46px",display:"",position:"relative",[d]:i}).beforeAddWrite(()=>{r.style.setProperty("display","none")}).afterAddWrite(()=>{r.style.setProperty("display",""),m.style.setProperty("display","none")}).keyframes(f),t.addAnimation(p)},f=(t,e)=>{try{const o="cubic-bezier(0.32,0.72,0,1)",n="opacity",f="transform",m="0%",p=.8,y="rtl"===t.ownerDocument.dir,b=y?"-99.5%":"99.5%",u=y?"33%":"-33%",$=e.enteringEl,S=e.leavingEl,T="back"===e.direction,x=$.querySelector(":scope > ion-content"),g=$.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),X=$.querySelectorAll(":scope > ion-header > ion-toolbar"),h=Object(a.a)(),E=Object(a.a)();if(h.addElement($).duration(e.duration||540).easing(e.easing||o).fill("both").beforeRemoveClass("ion-page-invisible"),S&&t){const e=Object(a.a)();e.addElement(t),h.addAnimation(e)}if(x||0!==X.length||0!==g.length?(E.addElement(x),E.addElement(g)):E.addElement($.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),h.addAnimation(E),T?E.beforeClearStyles([n]).fromTo("transform",`translateX(${u})`,`translateX(${m})`).fromTo(n,p,1):E.beforeClearStyles([n]).fromTo("transform",`translateX(${b})`,`translateX(${m})`),x){const t=s(x).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),r=Object(a.a)(),s=Object(a.a)(),l=Object(a.a)();r.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),s.addElement(e).beforeClearStyles([n]).fromTo(n,0,.1),l.addElement(o).beforeClearStyles([n]).fromTo(n,.03,.7),r.addAnimation([s,l]),E.addAnimation([r])}}const A=$.querySelector("ion-header.header-collapse-condense"),{forward:q,backward:j}=((t,e,o,a,r)=>{const n=i(a,o),s=l(r),f=l(a),m=i(r,o),p=null!==n&&null!==s&&!o,y=null!==f&&null!==m&&o;if(p){const a=s.getBoundingClientRect(),r=n.getBoundingClientRect();d(t,e,o,s,a,r),c(t,e,o,n,a,r)}else if(y){const a=f.getBoundingClientRect(),r=m.getBoundingClientRect();d(t,e,o,f,a,r),c(t,e,o,m,a,r)}return{forward:p,backward:y}})(h,y,T,$,S);if(X.forEach(t=>{var e;const o=Object(a.a)();o.addElement(t),h.addAnimation(o);const r=Object(a.a)();r.addElement(t.querySelector("ion-title"));const l=Object(a.a)(),i=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),c=t.closest("ion-header"),d=c&&c.classList.contains("header-collapse-condense-inactive");let f;f=i.filter(T?t=>{const e=t.classList.contains("buttons-collapse");return e&&!d||!e}:t=>!t.classList.contains("buttons-collapse")),l.addElement(f);const p=Object(a.a)();p.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const $=Object(a.a)();$.addElement(s(t).querySelector(".toolbar-background"));const S=Object(a.a)(),x=t.querySelector("ion-back-button");if(x&&S.addElement(x),o.addAnimation([r,l,p,$,S]),l.fromTo(n,.01,1),p.fromTo(n,.01,1),T)d||r.fromTo("transform",`translateX(${u})`,`translateX(${m})`).fromTo(n,.01,1),p.fromTo("transform",`translateX(${u})`,`translateX(${m})`),S.fromTo(n,.01,1);else if(A||r.fromTo("transform",`translateX(${b})`,`translateX(${m})`).fromTo(n,.01,1),p.fromTo("transform",`translateX(${b})`,`translateX(${m})`),$.beforeClearStyles([n,"transform"]),(null===(e=c)||void 0===e?void 0:e.translucent)?$.fromTo("transform",y?"translateX(-100%)":"translateX(100%)","translateX(0px)"):$.fromTo(n,.01,1),q||S.fromTo(n,.01,1),x&&!q){const t=Object(a.a)();t.addElement(s(x).querySelector(".button-text")).fromTo("transform",y?"translateX(-100px)":"translateX(100px)","translateX(0px)"),o.addAnimation(t)}}),S){const t=Object(a.a)(),e=S.querySelector(":scope > ion-content");if(t.addElement(e),t.addElement(S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),h.addAnimation(t),T){t.beforeClearStyles([n]).fromTo("transform",`translateX(${m})`,y?"translateX(-100%)":"translateX(100%)");const e=Object(r.b)(S);h.afterAddWrite(()=>{"normal"===h.getDirection()&&e.style.setProperty("display","none")})}else t.fromTo("transform",`translateX(${m})`,`translateX(${u})`).fromTo(n,1,p);if(e){const o=s(e).querySelector(".transition-effect");if(o){const e=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),s=Object(a.a)(),l=Object(a.a)(),i=Object(a.a)();s.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(e).beforeClearStyles([n]).fromTo(n,.1,0),i.addElement(r).beforeClearStyles([n]).fromTo(n,.7,.03),s.addAnimation([l,i]),t.addAnimation([s])}}S.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(t=>{var e;const o=Object(a.a)();o.addElement(t);const r=Object(a.a)();r.addElement(t.querySelector("ion-title"));const l=Object(a.a)(),i=t.querySelectorAll("ion-buttons,[menuToggle]"),c=t.closest("ion-header"),d=c&&c.classList.contains("header-collapse-condense-inactive"),p=Array.from(i).filter(t=>{const e=t.classList.contains("buttons-collapse");return e&&!d||!e});l.addElement(p);const b=Object(a.a)(),$=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");$.length>0&&b.addElement($);const S=Object(a.a)();S.addElement(s(t).querySelector(".toolbar-background"));const x=Object(a.a)(),g=t.querySelector("ion-back-button");if(g&&x.addElement(g),o.addAnimation([r,l,b,x,S]),h.addAnimation(o),x.fromTo(n,.99,0),l.fromTo(n,.99,0),b.fromTo(n,.99,0),T){if(d||r.fromTo("transform",`translateX(${m})`,y?"translateX(-100%)":"translateX(100%)").fromTo(n,.99,0),b.fromTo("transform",`translateX(${m})`,y?"translateX(-100%)":"translateX(100%)"),S.beforeClearStyles([n,"transform"]),(null===(e=c)||void 0===e?void 0:e.translucent)?S.fromTo("transform","translateX(0px)",y?"translateX(-100%)":"translateX(100%)"):S.fromTo(n,.99,0),g&&!j){const t=Object(a.a)();t.addElement(s(g).querySelector(".button-text")).fromTo("transform",`translateX(${m})`,`translateX(${(y?-124:124)+"px"})`),o.addAnimation(t)}}else d||r.fromTo("transform",`translateX(${m})`,`translateX(${u})`).fromTo(n,.99,0).afterClearStyles([f,n]),b.fromTo("transform",`translateX(${m})`,`translateX(${u})`).afterClearStyles([f,n]),x.afterClearStyles([n]),r.afterClearStyles([n]),l.afterClearStyles([n])})}return h}catch(o){throw o}}}}]);