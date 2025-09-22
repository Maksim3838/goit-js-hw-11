import{a as f,S as p,i as a}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",g="52395439-1c1f05bbfb1dbdeee6be85271";async function y(s){const t={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:t})).data}let c;const u=document.querySelector(".loader");function h(s){s.innerHTML=""}function b(){u.classList.remove("loader-hidden")}function L(){u.classList.add("loader-hidden")}function w(s,t,o=!0){const n=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags.replace(/"/g,"&quot;")}" width="300">
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");o?t.innerHTML=n:t.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new p(".gallery a",{captionsData:"alt",captionDelay:250})}const l=document.querySelector(".form"),d=document.querySelector(".gallery");l.addEventListener("submit",async s=>{s.preventDefault();const t=l.elements["search-text"].value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}h(d),b();try{const o=await y(t);if(o.hits.length===0){a.error({title:"Error",message:"No images found. Please try again!",position:"topRight"});return}w(o.hits,d,!0)}catch(o){a.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"}),console.error(o)}finally{L()}});
//# sourceMappingURL=index.js.map
