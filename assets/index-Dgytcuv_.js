(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const ne="modulepreload",ie=function(e){return"/"+e},O={},$=function(t,i,a){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(i.map(l=>{if(l=ie(l),l in O)return;O[l]=!0;const p=l.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":ne,p||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),p)return new Promise((g,y)=>{u.addEventListener("load",g),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return r.then(s=>{for(const c of s||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(e,t,i=[])=>{const a=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(r=>{a.setAttribute(r,String(t[r]))}),i.length&&i.forEach(r=>{const o=U(...r);a.appendChild(o)}),a};var re=([e,t,i])=>U(e,t,i);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=e=>Array.from(e.attributes).reduce((t,i)=>(t[i.name]=i.value,t),{}),ae=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",se=e=>e.flatMap(ae).map(i=>i.trim()).filter(Boolean).filter((i,a,r)=>r.indexOf(i)===a).join(" "),ce=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,i,a)=>i.toUpperCase()+a.toLowerCase()),j=(e,{nameAttr:t,icons:i,attrs:a})=>{var w;const r=e.getAttribute(t);if(r==null)return;const o=ce(r),s=i[o];if(!s)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const c=oe(e),[l,p,d]=s,u={...p,"data-lucide":r,...a,...c},g=se(["lucide",`lucide-${r}`,c,a]);g&&Object.assign(u,{class:g});const y=re([l,u,d]);return(w=e.parentNode)==null?void 0:w.replaceChild(y,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",S,[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=["svg",S,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=["svg",S,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=["svg",S,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=["svg",S,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=["svg",S,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=({icons:e={},nameAttr:t="data-lucide",attrs:i={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const a=document.querySelectorAll(`[${t}]`);if(Array.from(a).forEach(r=>j(r,{nameAttr:t,icons:e,attrs:i})),t==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(o=>j(o,{nameAttr:"icon-name",icons:e,attrs:i})))}},H={Pause:ue,Play:de,RotateCcw:pe,SkipBack:fe,SkipForward:me,UploadCloud:le},he=document.querySelector("#app");let W=!1,T=null;const n={documentTitle:"Demo-Text",documentType:"Start",sections:[],words:[],index:0,isPlaying:!1,timer:null,wpm:320,chunkSize:1,punctuationPause:!0,fileLoaded:!1},k="Der Morgen lag still ueber der Stadt. Zwischen den Fenstern wanderte Licht, und jedes Wort bekam fuer einen Atemzug seinen eigenen Platz.";function A(){he.innerHTML=`
    <main class="shell">
      <aside class="sidebar" aria-label="Dokument und Einstellungen">
        <section class="brand-block">
          <div class="brand-mark" aria-hidden="true">F</div>
          <div>
            <p class="eyebrow">PWA Speed Reader</p>
            <h1>FocusFlash</h1>
          </div>
        </section>

        <section class="upload-zone" id="dropZone">
          <input id="fileInput" class="file-input" type="file" accept=".pdf,.epub,.txt,text/plain,application/pdf,application/epub+zip" />
          <label for="fileInput" class="upload-label">
            <i data-lucide="upload-cloud" aria-hidden="true"></i>
            <span>Datei waehlen</span>
          </label>
          <p>PDF, EPUB oder TXT lokal oeffnen</p>
        </section>

        <section class="doc-panel">
          <p class="panel-label">Aktuelles Dokument</p>
          <h2 id="docTitle">${m(n.documentTitle)}</h2>
          <p id="docMeta">${m(qe())}</p>
        </section>

        <section class="settings-panel" aria-label="Lesegeschwindigkeit">
          <div class="setting-heading">
            <label for="wpmRange">Woerter pro Minute</label>
            <output id="wpmOutput" for="wpmRange">${n.wpm}</output>
          </div>
          <input id="wpmRange" type="range" min="120" max="900" step="10" value="${n.wpm}" />

          <div class="segmented" role="group" aria-label="Wortgruppen">
            <button class="segment ${n.chunkSize===1?"active":""}" data-chunk="1" type="button">1</button>
            <button class="segment ${n.chunkSize===2?"active":""}" data-chunk="2" type="button">2</button>
            <button class="segment ${n.chunkSize===3?"active":""}" data-chunk="3" type="button">3</button>
          </div>

          <label class="toggle-row">
            <input id="pauseToggle" type="checkbox" ${n.punctuationPause?"checked":""} />
            <span>Satzzeichen-Pausen</span>
          </label>
        </section>

        <section class="chapters-panel">
          <div class="panel-row">
            <p class="panel-label">Abschnitte</p>
            <span>${n.sections.length||1}</span>
          </div>
          <div id="chapterList" class="chapter-list"></div>
        </section>
      </aside>

      <section class="reader-stage" aria-label="Speed Reading Ansicht">
        <div class="statusbar">
          <div>
            <p class="panel-label">Position</p>
            <strong id="positionLabel">${G()}</strong>
          </div>
          <div class="progress-shell" aria-hidden="true">
            <div id="progressBar" class="progress-bar" style="width: ${Q()}%"></div>
          </div>
        </div>

        <div class="reader-card">
          <div class="focus-marker top" aria-hidden="true"></div>
          <div id="wordDisplay" class="word-display" aria-live="polite"></div>
          <div class="focus-marker bottom" aria-hidden="true"></div>
        </div>

        <div class="transport" aria-label="Lesesteuerung">
          <button class="icon-button" id="rewindButton" type="button" title="Zurueck an den Anfang" aria-label="Zurueck an den Anfang">
            <i data-lucide="rotate-ccw" aria-hidden="true"></i>
          </button>
          <button class="icon-button" id="backButton" type="button" title="Zurueck" aria-label="Zurueck">
            <i data-lucide="skip-back" aria-hidden="true"></i>
          </button>
          <button class="play-button" id="playButton" type="button" title="${n.isPlaying?"Pause":"Start"}" aria-label="${n.isPlaying?"Pause":"Start"}">
            <i data-lucide="${n.isPlaying?"pause":"play"}" aria-hidden="true"></i>
          </button>
          <button class="icon-button" id="forwardButton" type="button" title="Weiter" aria-label="Weiter">
            <i data-lucide="skip-forward" aria-hidden="true"></i>
          </button>
        </div>
      </section>
    </main>
  `,Z({icons:H}),M(),Me(),ge()}function ge(){document.querySelector("#fileInput").addEventListener("change",we),document.querySelector("#wpmRange").addEventListener("input",t=>{n.wpm=Number(t.target.value),document.querySelector("#wpmOutput").textContent=n.wpm}),document.querySelectorAll("[data-chunk]").forEach(t=>{t.addEventListener("click",()=>{n.chunkSize=Number(t.dataset.chunk),document.querySelectorAll("[data-chunk]").forEach(i=>i.classList.remove("active")),t.classList.add("active"),M()})}),document.querySelector("#pauseToggle").addEventListener("change",t=>{n.punctuationPause=t.target.checked}),document.querySelector("#playButton").addEventListener("click",X),document.querySelector("#backButton").addEventListener("click",()=>L(-Math.max(1,n.chunkSize*3))),document.querySelector("#forwardButton").addEventListener("click",()=>L(Math.max(1,n.chunkSize*3))),document.querySelector("#rewindButton").addEventListener("click",()=>{E(),n.index=0,x()});const e=document.querySelector("#dropZone");e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("dragging")}),e.addEventListener("dragleave",()=>e.classList.remove("dragging")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("dragging");const[i]=t.dataTransfer.files;i&&J(i)}),W||(window.addEventListener("keydown",ye),window.addEventListener("resize",x),W=!0)}function ye(e){var t;["INPUT","BUTTON"].includes((t=document.activeElement)==null?void 0:t.tagName)||(e.code==="Space"&&(e.preventDefault(),X()),e.key==="ArrowLeft"&&L(-Math.max(1,n.chunkSize)),e.key==="ArrowRight"&&L(Math.max(1,n.chunkSize)))}async function we(e){const[t]=e.target.files;t&&(await J(t),e.target.value="")}async function J(e){var t;E(),F(`Lese ${e.name} ...`);try{const i=await e.arrayBuffer(),a=(t=e.name.split(".").pop())==null?void 0:t.toLowerCase();let r;e.type==="application/pdf"||a==="pdf"?r=await be(i,e.name):e.type==="application/epub+zip"||a==="epub"?r=await ve(i,e.name):r=await xe(i,e.name);const o=f(r.text);if(!o.length)throw new Error("Diese Datei enthaelt keinen lesbaren Text.");n.documentTitle=r.title||e.name,n.documentType=r.type,n.sections=r.sections.length?r.sections:[{title:"Text",start:0}],n.words=o,n.index=0,n.fileLoaded=!0,A()}catch(i){n.fileLoaded=!1,F(""),Ne(i.message||"Die Datei konnte nicht gelesen werden."),A()}}async function be(e,t){const a=await(await Se()).getDocument({data:e}).promise,r=[],o=[];let s=0;for(let c=1;c<=a.numPages;c+=1){const d=(await(await a.getPage(c)).getTextContent()).items.map(u=>u.str).join(" ");d.trim()&&(r.push({title:`Seite ${c}`,start:s}),s+=f(d).length,o.push(d))}return{title:t.replace(/\.pdf$/i,""),type:"PDF",text:o.join(`

`),sections:r}}async function ve(e,t){var C,z;const{default:i}=await $(async()=>{const{default:h}=await import("./jszip.min-BiHF8TMC.js").then(b=>b.j);return{default:h}},[]),a=await i.loadAsync(e),r=a.file("META-INF/container.xml");if(!r)throw new Error("EPUB-Struktur nicht gefunden.");const o=await r.async("string"),s=R(o),c=_(s,"rootfile"),l=c==null?void 0:c.getAttribute("full-path");if(!l||!a.file(l))throw new Error("EPUB-Inhaltsverzeichnis nicht gefunden.");const p=await a.file(l).async("string"),d=R(p),u=l.includes("/")?l.slice(0,l.lastIndexOf("/")+1):"",g=((z=(C=_(d,"title"))==null?void 0:C.textContent)==null?void 0:z.trim())||t.replace(/\.epub$/i,""),y=new Map;D(d,"item").forEach(h=>{const b=h.getAttribute("id"),v=h.getAttribute("href");b&&v&&y.set(b,{href:Le(u,v),mediaType:h.getAttribute("media-type")||""})});const w=[],q=[];let B=0;const Y=D(d,"itemref");for(const h of Y){const b=h.getAttribute("idref"),v=y.get(b);if(!v||!Ee(v.mediaType))continue;const I=a.file(v.href);if(!I)continue;const ee=await I.async("string"),{title:te,text:P}=ke(ee);P&&(w.push({title:te||`Abschnitt ${w.length+1}`,start:B}),B+=f(P).length,q.push(P))}return{title:g,type:"EPUB",text:q.join(`

`),sections:w}}async function xe(e,t){const i=new TextDecoder("utf-8").decode(e);return{title:t.replace(/\.[^.]+$/,""),type:"Text",text:i,sections:[{title:"Text",start:0}]}}function R(e){const t=new DOMParser().parseFromString(e,"application/xml");if(t.querySelector("parsererror"))throw new Error("Die Datei enthaelt ungueltiges XML.");return t}async function Se(){if(!T){const[e,t]=await Promise.all([$(()=>import("./pdf-BnPRJEQ6.js"),[]),$(()=>import("./pdf.worker-rRTVGHQx.js"),[])]);e.GlobalWorkerOptions.workerSrc=t.default,T=e}return T}function _(e,t){return D(e,t)[0]||null}function D(e,t){return[...e.getElementsByTagName("*")].filter(i=>i.localName===t)}function ke(e){var r,o,s,c;const t=new DOMParser().parseFromString(e,"text/html");t.querySelectorAll("script, style, nav, svg, audio, video").forEach(l=>l.remove());const i=((o=(r=t.querySelector("h1, h2, h3, title"))==null?void 0:r.textContent)==null?void 0:o.replace(/\s+/g," ").trim())||"",a=((c=(s=t.body)==null?void 0:s.textContent)==null?void 0:c.replace(/\s+/g," ").trim())||"";return{title:i,text:a}}function Ee(e){return/xhtml|html|xml/i.test(e)}function Le(e,t){const i=Pe(t).split("#")[0],a=`${e}${i}`.split("/"),r=[];for(const o of a)!o||o==="."||(o===".."?r.pop():r.push(o));return r.join("/")}function Pe(e){try{return decodeURIComponent(e)}catch{return e}}function f(e){return e.replace(/\u00ad/g,"").replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/\s+/g," ").trim().split(" ").map(t=>t.trim()).filter(Boolean)}function M(){const e=document.querySelector("#wordDisplay");if(!e)return;n.words.length||(n.words=f(k));const t=n.words.slice(n.index,n.index+n.chunkSize),i=t[0]||"",a=$e(i),r=i.slice(0,a),o=i.charAt(a)||"",s=i.slice(a+1),c=t.slice(1).join(" ");e.innerHTML=`
    <span class="word-prefix">${m(r)}</span>
    <span class="word-focus">${m(o)}</span>
    <span class="word-suffix">${m(s)}${c?` <em>${m(c)}</em>`:""}</span>
  `,Te(e,t.join(" "))}function Te(e,t){const i=e.clientWidth||720,a=i<520?56:96,r=28,o=i/Math.max(6,t.length*.58);e.style.fontSize=`${Math.max(r,Math.min(a,o))}px`}function $e(e){const t=e.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,"").length;return t<=1?0:t<=5?1:t<=9?2:t<=13?3:4}function X(){n.isPlaying?E():Ae(),K()}function Ae(){n.words.length||(n.words=f(k)),n.index>=n.words.length&&(n.index=0),n.isPlaying=!0,V()}function E(){n.isPlaying=!1,clearTimeout(n.timer),n.timer=null,K()}function V(){if(clearTimeout(n.timer),!n.isPlaying)return;x();const e=n.words[n.index]||"",t=De(e);n.timer=setTimeout(()=>{if(n.index=Math.min(n.index+n.chunkSize,n.words.length),n.index>=n.words.length){E(),x();return}V()},t)}function De(e){const t=6e4/n.wpm;return n.punctuationPause?/[.!?]["')\]]?$/.test(e)?t*1.85:/[,;:]["')\]]?$/.test(e)?t*1.35:t:t}function L(e){E(),n.index=N(n.index+e,0,Math.max(0,n.words.length-1)),x()}function x(){M();const e=document.querySelector("#progressBar"),t=document.querySelector("#positionLabel");e&&(e.style.width=`${Q()}%`),t&&(t.textContent=G())}function K(){const e=document.querySelector("#playButton");e&&(e.title=n.isPlaying?"Pause":"Start",e.setAttribute("aria-label",n.isPlaying?"Pause":"Start"),e.innerHTML=`<i data-lucide="${n.isPlaying?"pause":"play"}" aria-hidden="true"></i>`,Z({icons:H}))}function Me(){const e=document.querySelector("#chapterList");if(!e)return;const t=n.sections.length?n.sections:[{title:"Demo",start:0}];e.innerHTML=t.slice(0,80).map((i,a)=>`
        <button class="chapter-button" type="button" data-start="${i.start}">
          <span>${m(i.title||`Abschnitt ${a+1}`)}</span>
          <small>${Math.round(i.start/Math.max(1,n.words.length)*100)}%</small>
        </button>
      `).join(""),e.querySelectorAll("[data-start]").forEach(i=>{i.addEventListener("click",()=>{E(),n.index=N(Number(i.dataset.start),0,Math.max(0,n.words.length-1)),x()})})}function F(e){const t=document.querySelector("#wordDisplay");t&&(t.innerHTML=`<span class="loading-text">${m(e)}</span>`)}function Ne(e){const t=document.createElement("div");t.className="toast",t.textContent=e,document.body.append(t),setTimeout(()=>t.remove(),4200)}function qe(){const e=n.words.length||f(k).length;return`${n.documentType} · ${e.toLocaleString("de-DE")} Woerter`}function G(){const e=Math.max(1,n.words.length||f(k).length);return`${Math.min(e,n.index+1).toLocaleString("de-DE")} / ${e.toLocaleString("de-DE")}`}function Q(){const e=Math.max(1,n.words.length||f(k).length);return N(n.index/e*100,0,100)}function N(e,t,i){return Math.min(Math.max(e,t),i)}function m(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});n.words=f(k);n.sections=[{title:"Demo",start:0}];A();
