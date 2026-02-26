import{a as q,S as E,i}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const P=void 0,M=q.create({baseURL:"https://pixabay.com/api/"});async function p(o,r){return(await M.get("",{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),R=new E(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const r=o.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:l,comments:S,downloads:v})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${n}"
      alt="${e}"
      loading="lazy"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b><span>${t}</span></p>
    <p class="info-item"><b>Views</b><span>${l}</span></p>
    <p class="info-item"><b>Comments</b><span>${S}</span></p>
    <p class="info-item"><b>Downloads</b><span>${v}</span></p>
  </div>
</li>`).join("");f.insertAdjacentHTML("beforeend",r),R.refresh()}function $(){f.innerHTML=""}function h(){m.classList.remove("is-hidden")}function b(){m.classList.add("is-hidden")}function L(){g.classList.remove("is-hidden")}function c(){g.classList.add("is-hidden")}const w=document.querySelector(".form"),B=document.querySelector('input[name="search-text"]'),x=document.querySelector(".load-more");let u="",a=1,d=0;w.addEventListener("submit",O);x.addEventListener("click",I);async function O(o){o.preventDefault();const r=B.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}u=r,a=1,$(),c(),h();try{const n=await p(u,a),s=n.hits;if(!s.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s),d=Math.ceil(n.totalHits/15),a<d?L():(c(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b(),w.reset()}}async function I(){a+=1,c(),h();try{const o=await p(u,a);y(o.hits),A(),a<d?L():(c(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}}function A(){const o=document.querySelector(".gallery-item");if(!o)return;const{height:r}=o.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
