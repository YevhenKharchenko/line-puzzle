import"./assets/header-06b42126.js";let m=0;const C=document.querySelectorAll(".gallery-item"),S=document.querySelectorAll(".dot"),d=document.querySelector(".gallery-carousel");document.getElementById("leftArrow").addEventListener("click",()=>{v(-1)});document.getElementById("rightArrow").addEventListener("click",()=>{v(1)});function v(e){m=(m+e+C.length)%C.length,d.style.transform=`translateX(-${m*100}%)`,S.forEach(n=>n.classList.remove("active")),S[m].classList.add("active")}function F(){S[m].classList.add("active")}F();let y,h,i=!1;function A(){y>h?v(1):y<h&&v(-1)}d.addEventListener("touchstart",e=>{y=e.touches[0].clientX,i=!0});d.addEventListener("touchmove",e=>{i&&(h=e.touches[0].clientX)});d.addEventListener("touchend",()=>{i&&(A(),i=!1)});d.addEventListener("mousedown",e=>{y=e.clientX,i=!0,e.preventDefault()});d.addEventListener("mousemove",e=>{i&&(h=e.clientX)});d.addEventListener("mouseup",()=>{i&&(A(),i=!1)});d.addEventListener("mouseleave",()=>{i&&(A(),i=!1)});const l=document.querySelector(".play-carousel"),D=document.querySelectorAll(".play-item"),g=document.querySelectorAll(".play-dot");let f=0;document.getElementById("playLeftArrow").addEventListener("click",()=>{E(-1)});document.getElementById("playRightArrow").addEventListener("click",()=>{E(1)});function E(e){f=(f+e+D.length)%D.length,l.style.transition="transform 0.5s ease-in-out",l.style.transform=`translateX(-${f*100}%)`,g.forEach(n=>n.classList.remove("play-active")),g[f%g.length].classList.add("play-active")}function P(){g[f].classList.add("play-active")}P();let k,q,a=!1;function b(){k>q?E(1):k<q&&E(-1)}l.addEventListener("touchstart",e=>{k=e.touches[0].clientX,a=!0});l.addEventListener("touchmove",e=>{a&&(q=e.touches[0].clientX)});l.addEventListener("touchend",()=>{a&&(b(),a=!1)});l.addEventListener("mousedown",e=>{k=e.clientX,a=!0,e.preventDefault()});l.addEventListener("mousemove",e=>{a&&(q=e.clientX)});l.addEventListener("mouseup",()=>{a&&(b(),a=!1)});l.addEventListener("mouseleave",()=>{a&&(b(),a=!1)});document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth>=1440){const n=document.querySelectorAll(".play-item-desktop-1, .play-item-desktop-2, .play-item-desktop-3, .play-item-desktop-4, .play-item-desktop-5, .play-item-desktop-6, .play-item-desktop-7, .play-item-desktop-8"),s=new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("play-item-desktop-1")||t.target.classList.contains("play-item-desktop-2")||t.target.classList.contains("play-item-desktop-3")||t.target.classList.contains("play-item-desktop-7")||t.target.classList.contains("play-item-desktop-8")?t.target.classList.add("animate-left"):(t.target.classList.contains("play-item-desktop-4")||t.target.classList.contains("play-item-desktop-5")||t.target.classList.contains("play-item-desktop-6"))&&t.target.classList.add("animate-right"),s.unobserve(t.target))})},{threshold:.1});n.forEach(r=>{s.observe(r)})}});const w="/line-puzzle/assets/sprite-68039290.svg",T=document.querySelectorAll(".faq-top-text");T.forEach(e=>e.addEventListener("click",N));function N(e){const s=e.currentTarget.closest(".faq-list-item");document.querySelectorAll(".faq-list-item").forEach(t=>{t!==s&&(t.classList.remove("faq-open"),t.querySelector(".faq-bottom-text").classList.remove("is-visible"),t.querySelector("use").setAttribute("href",`${w}#icon-plus`))});const r=s.querySelector(".faq-bottom-text");r.classList.toggle("is-visible"),r.classList.contains("is-visible")?(s.classList.add("faq-open"),s.querySelector("use").setAttribute("href",`${w}#icon-minus`)):(s.classList.remove("faq-open"),s.querySelector("use").setAttribute("href",`${w}#icon-plus`))}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".animated-number");let n=!1;function s(){e.forEach(c=>{const o=parseFloat(c.getAttribute("data-target")),u=Number.isInteger(o),p=2e3,$=60,X=p/1e3*$,B=o/X;let L=0,I=0;const x=()=>{L+=B,I++,L>=o||I>=X?c.textContent=u?o.toLocaleString("uk-UA"):o.toFixed(1).replace(".",",").toLocaleString("uk-UA"):(c.textContent=u?Math.ceil(L).toLocaleString("uk-UA"):L.toFixed(1).replace(".",",").toLocaleString("uk-UA"),requestAnimationFrame(x))};x()})}function r(){e.forEach(c=>{c.textContent="0"})}function t(){const c=document.querySelector(".animated-number"),o=c.offsetTop,u=c.offsetHeight,p=window.scrollY+window.innerHeight;p>=o&&window.scrollY<=o+u&&!n?(s(),n=!0):(window.scrollY>o+u||p<o)&&(n=!1,r())}window.addEventListener("scroll",t),window.addEventListener("load",t)});
//# sourceMappingURL=commonHelpers.js.map
