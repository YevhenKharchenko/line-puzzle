import"./assets/header-19c98bbe.js";let i=0;const p=document.querySelectorAll(".gallery-item"),d=document.querySelectorAll(".dot"),y=document.querySelector(".gallery-carousel");document.getElementById("leftArrow").addEventListener("click",()=>{m(-1)});document.getElementById("rightArrow").addEventListener("click",()=>{m(1)});function m(s){i=(i+s+p.length)%p.length,y.style.transform=`translateX(-${i*100}%)`,d.forEach(n=>n.classList.remove("active")),d[i].classList.add("active")}function f(){d[i].classList.add("active")}f();document.querySelector(".play-carousel");const c=document.querySelectorAll(".play-item"),o=document.querySelectorAll(".play-dot");let a=0;document.getElementById("playLeftArrow").addEventListener("click",()=>{u(-1)});document.getElementById("playRightArrow").addEventListener("click",()=>{u(1)});function u(s){c[a].classList.remove("play-active"),o[a%o.length].classList.remove("play-active"),a=(a+s+c.length)%c.length,c[a].classList.add("play-active"),o[a%o.length].classList.add("play-active")}function g(){c[a].classList.add("play-active"),o[a%o.length].classList.add("play-active")}g();document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth>=1440){const n=document.querySelectorAll(".play-item-desktop-1, .play-item-desktop-2, .play-item-desktop-3, .play-item-desktop-4, .play-item-desktop-5, .play-item-desktop-6, .play-item-desktop-7, .play-item-desktop-8"),e=new IntersectionObserver(l=>{l.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("play-item-desktop-1")||t.target.classList.contains("play-item-desktop-2")||t.target.classList.contains("play-item-desktop-3")||t.target.classList.contains("play-item-desktop-7")||t.target.classList.contains("play-item-desktop-8")?t.target.classList.add("animate-left"):(t.target.classList.contains("play-item-desktop-4")||t.target.classList.contains("play-item-desktop-5")||t.target.classList.contains("play-item-desktop-6"))&&t.target.classList.add("animate-right"),e.unobserve(t.target))})},{threshold:.1});n.forEach(l=>{e.observe(l)})}});const r="/line-puzzle/assets/sprite-639c21a7.svg",L=document.querySelectorAll(".faq-top-text");L.forEach(s=>s.addEventListener("click",v));function v(s){const e=s.currentTarget.closest(".faq-list-item");document.querySelectorAll(".faq-list-item").forEach(t=>{t!==e&&(t.classList.remove("faq-open"),t.querySelector(".faq-bottom-text").classList.remove("is-visible"),t.querySelector("use").setAttribute("href",`${r}#icon-plus`))});const l=e.querySelector(".faq-bottom-text");l.classList.toggle("is-visible"),l.classList.contains("is-visible")?(e.classList.add("faq-open"),e.querySelector("use").setAttribute("href",`${r}#icon-minus`)):(e.classList.remove("faq-open"),e.querySelector("use").setAttribute("href",`${r}#icon-plus`))}
//# sourceMappingURL=commonHelpers.js.map
