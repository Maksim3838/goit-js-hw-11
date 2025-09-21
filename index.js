import{a as f,i as a,S as p}from"./assets/vendor-xwsNXkQR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",y="52395439-1c1f05bbfb1dbdeee6be85271";async function u(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(g,{params:r})).data}const i=document.querySelector(".form"),l=document.querySelector(".gallery");let d;i.addEventListener("submit",async s=>{s.preventDefault();const r=i.elements["search-text"].value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}l.innerHTML="";try{const t=await u(r);if(t.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=t.hits.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" width="300">
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>
      `).join("");l.innerHTML=n,d?d.refresh():d=new p(".gallery a",{captionsData:"alt",captionDelay:250})}catch(t){a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(t)}});const m=document.querySelector(".loader");i.addEventListener("submit",async s=>{s.preventDefault();const r=i.elements["search-text"].value.trim();if(r){m.classList.remove("loader-hidden");try{const t=await u(r);t.hits.length===0?(l.innerHTML="",a.error({title:"Error",message:"No images found!"})):renderGallery(t.hits,l)}catch{a.error({title:"Error",message:"Something went wrong!"})}finally{m.classList.add("loader-hidden")}}});
//# sourceMappingURL=index.js.map
