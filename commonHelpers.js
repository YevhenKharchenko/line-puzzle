import"./assets/header-ee1ac4d7.js";let m=0;const w=document.querySelectorAll(".gallery-item"),k=document.querySelectorAll(".dot"),r=document.querySelector(".gallery-carousel");document.getElementById("leftArrow").addEventListener("click",()=>{L(-1)});document.getElementById("rightArrow").addEventListener("click",()=>{L(1)});function L(e){m=(m+e+w.length)%w.length,r.style.transform=`translateX(-${m*100}%)`,k.forEach(a=>a.classList.remove("active")),k[m].classList.add("active")}function C(){k[m].classList.add("active")}C();let y,v,n=!1;function q(){y>v?L(1):y<v&&L(-1)}r.addEventListener("touchstart",e=>{y=e.touches[0].clientX,n=!0});r.addEventListener("touchmove",e=>{n&&(v=e.touches[0].clientX)});r.addEventListener("touchend",()=>{n&&(q(),n=!1)});r.addEventListener("mousedown",e=>{y=e.clientX,n=!0,e.preventDefault()});r.addEventListener("mousemove",e=>{n&&(v=e.clientX)});r.addEventListener("mouseup",()=>{n&&(q(),n=!1)});r.addEventListener("mouseleave",()=>{n&&(q(),n=!1)});document.querySelector(".play-carousel");const p=document.querySelectorAll(".play-item"),d=document.querySelectorAll(".play-dot");let c=0;document.getElementById("playLeftArrow").addEventListener("click",()=>{b(-1)});document.getElementById("playRightArrow").addEventListener("click",()=>{b(1)});function b(e){p[c].classList.remove("play-active"),d[c%d.length].classList.remove("play-active"),c=(c+e+p.length)%p.length,p[c].classList.add("play-active"),d[c%d.length].classList.add("play-active")}function D(){p[c].classList.add("play-active"),d[c%d.length].classList.add("play-active")}D();document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth>=1440){const a=document.querySelectorAll(".play-item-desktop-1, .play-item-desktop-2, .play-item-desktop-3, .play-item-desktop-4, .play-item-desktop-5, .play-item-desktop-6, .play-item-desktop-7, .play-item-desktop-8"),s=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("play-item-desktop-1")||t.target.classList.contains("play-item-desktop-2")||t.target.classList.contains("play-item-desktop-3")||t.target.classList.contains("play-item-desktop-7")||t.target.classList.contains("play-item-desktop-8")?t.target.classList.add("animate-left"):(t.target.classList.contains("play-item-desktop-4")||t.target.classList.contains("play-item-desktop-5")||t.target.classList.contains("play-item-desktop-6"))&&t.target.classList.add("animate-right"),s.unobserve(t.target))})},{threshold:.1});a.forEach(i=>{s.observe(i)})}});const h="/line-puzzle/assets/sprite-9164be53.svg",X=document.querySelectorAll(".faq-top-text");X.forEach(e=>e.addEventListener("click",B));function B(e){const s=e.currentTarget.closest(".faq-list-item");document.querySelectorAll(".faq-list-item").forEach(t=>{t!==s&&(t.classList.remove("faq-open"),t.querySelector(".faq-bottom-text").classList.remove("is-visible"),t.querySelector("use").setAttribute("href",`${h}#icon-plus`))});const i=s.querySelector(".faq-bottom-text");i.classList.toggle("is-visible"),i.classList.contains("is-visible")?(s.classList.add("faq-open"),s.querySelector("use").setAttribute("href",`${h}#icon-minus`)):(s.classList.remove("faq-open"),s.querySelector("use").setAttribute("href",`${h}#icon-plus`))}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".animated-number");let a=!1;function s(){e.forEach(l=>{const o=parseFloat(l.getAttribute("data-target")),u=Number.isInteger(o),f=2e3,I=60,E=f/1e3*I,x=o/E;let g=0,A=0;const S=()=>{g+=x,A++,g>=o||A>=E?l.textContent=u?o.toLocaleString("uk-UA"):o.toFixed(1).replace(".",",").toLocaleString("uk-UA"):(l.textContent=u?Math.ceil(g).toLocaleString("uk-UA"):g.toFixed(1).replace(".",",").toLocaleString("uk-UA"),requestAnimationFrame(S))};S()})}function i(){e.forEach(l=>{l.textContent="0"})}function t(){const l=document.querySelector(".animated-number"),o=l.offsetTop,u=l.offsetHeight,f=window.scrollY+window.innerHeight;f>=o&&window.scrollY<=o+u&&!a?(s(),a=!0):(window.scrollY>o+u||f<o)&&(a=!1,i())}window.addEventListener("scroll",t),window.addEventListener("load",t)});
//# sourceMappingURL=commonHelpers.js.map