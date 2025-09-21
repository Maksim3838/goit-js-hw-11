import{a as m,i as a}from"./assets/vendor-uumJaN6-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",u="52395439-1c1f05bbfb1dbdeee6be85271";async function f(s){const t={key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(p,{params:t})).data}const c=document.querySelector(".form"),l=document.querySelector(".gallery");c.addEventListener("submit",async s=>{s.preventDefault();const t=c.elements["search-text"].value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}l.innerHTML="";try{const o=await f(t);if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=o.hits.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}" target="_blank" rel="noopener noreferrer">
            <img src="${e.webformatURL}" alt="${e.tags}" width="300">
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>
      `).join("");l.innerHTML=n}catch(o){a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(o)}});
//# sourceMappingURL=index.js.map
