(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const u=document.querySelector(".context-menu-backdrop"),L=document.querySelector(".nav-btn"),v=document.querySelector(".close-btn");L.addEventListener("click",g);function g(){u.classList.add("is-open"),document.body.classList.add("screen-freeze")}v.addEventListener("click",h);function h(){u.classList.remove("is-open"),document.body.classList.remove("screen-freeze")}document.querySelector(".context-menu-backdrop").addEventListener("click",E);function E(o){(o.target.nodeName==="A"||o.target.classList.contains("context-menu-backdrop"))&&(u.classList.remove("is-open"),document.body.classList.remove("screen-freeze"))}let c=0;const r=document.querySelectorAll(".gallery-item"),d=document.querySelectorAll(".dot");document.getElementById("leftArrow").addEventListener("click",()=>{y(-1)});document.getElementById("rightArrow").addEventListener("click",()=>{y(1)});function y(o){r[c].classList.remove("active"),d[c].classList.remove("active"),c=(c+o+r.length)%r.length,r[c].classList.add("active"),d[c].classList.add("active")}function b(){r[c].classList.add("active"),d[c].classList.add("active")}b();document.querySelector(".play-carousel");const l=document.querySelectorAll(".play-item"),s=document.querySelectorAll(".play-dot");let n=0;document.getElementById("playLeftArrow").addEventListener("click",()=>{f(-1)});document.getElementById("playRightArrow").addEventListener("click",()=>{f(1)});function f(o){l[n].classList.remove("play-active"),s[n%s.length].classList.remove("play-active"),n=(n+o+l.length)%l.length,l[n].classList.add("play-active"),s[n%s.length].classList.add("play-active")}function q(){l[n].classList.add("play-active"),s[n%s.length].classList.add("play-active")}q();
//# sourceMappingURL=main-dfc4538d.js.map