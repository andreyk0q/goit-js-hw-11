import{a as m,S as p,i as a}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g=void 0,y=m.create({baseURL:"https://pixabay.com/api/"});function h(o){return y.get("",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img class="gallery-image" src="${n}" alt="${e}" loading="lazy" />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t}</p>
    <p class="info-item"><b>Views</b> ${s}</p>
    <p class="info-item"><b>Comments</b> ${d}</p>
    <p class="info-item"><b>Downloads</b> ${f}</p>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function q(){c.classList.remove("is-hidden")}function E(){c.classList.add("is-hidden")}const u=document.querySelector(".form"),v=document.querySelector('input[name="search-text"]');u.addEventListener("submit",w);function w(o){o.preventDefault();const r=v.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}S(),q(),h(r).then(n=>{const i=n.hits;if(!i.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{E(),u.reset()})}
//# sourceMappingURL=index.js.map
