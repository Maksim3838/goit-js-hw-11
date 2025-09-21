import{a as m,i as n,S as u}from"./assets/vendor-xwsNXkQR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",d="52395439-1c1f05bbfb1dbdeee6be85271";async function g(s){const r={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(f,{params:r})).data}const l=document.querySelector(".form"),p=document.querySelector(".gallery");let c;l.addEventListener("submit",async s=>{s.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}p.innerHTML="";try{const o=await g(r);if(o.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const a=o.hits.map(e=>`
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
      `).join("");p.innerHTML=a,c?c.refresh():c=new u(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){n.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(o)}});
//# sourceMappingURL=index.js.map
