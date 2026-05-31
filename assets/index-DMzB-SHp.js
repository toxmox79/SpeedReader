(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();const ue="modulepreload",de=function(e,t){return new URL(e,t).href},X={},D=function(t,i,r){let o=Promise.resolve();if(i&&i.length>0){const c=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(i.map(u=>{if(u=de(u,r),u in X)return;X[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(!!r)for(let f=c.length-1;f>=0;f--){const y=c[f];if(y.href===u&&(!d||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":ue,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((f,y)=>{p.addEventListener("load",f),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return o.then(c=>{for(const s of c||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(e,t,i=[])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{r.setAttribute(o,String(t[o]))}),i.length&&i.forEach(o=>{const a=ee(...o);r.appendChild(a)}),r};var pe=([e,t,i])=>ee(e,t,i);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=e=>Array.from(e.attributes).reduce((t,i)=>(t[i.name]=i.value,t),{}),ge=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",me=e=>e.flatMap(ge).map(i=>i.trim()).filter(Boolean).filter((i,r,o)=>o.indexOf(i)===r).join(" "),he=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,i,r)=>i.toUpperCase()+r.toLowerCase()),J=(e,{nameAttr:t,icons:i,attrs:r})=>{var f;const o=e.getAttribute(t);if(o==null)return;const a=he(o),c=i[a];if(!c)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=fe(e),[l,u,d]=c,g={...u,"data-lucide":o,...r,...s},w=me(["lucide",`lucide-${o}`,s,r]);w&&Object.assign(g,{class:w});const p=pe([l,g,d]);return(f=e.parentNode)==null?void 0:f.replaceChild(p,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=["svg",h,[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=["svg",h,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=["svg",h,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=["svg",h,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=["svg",h,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=["svg",h,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=["svg",h,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=["svg",h,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=({icons:e={},nameAttr:t="data-lucide",attrs:i={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const r=document.querySelectorAll(`[${t}]`);if(Array.from(r).forEach(o=>J(o,{nameAttr:t,icons:e,attrs:i})),t==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(a=>J(a,{nameAttr:"icon-name",icons:e,attrs:i})))}},ne={FileText:be,Pause:we,Play:Se,RotateCcw:ve,Settings:xe,SkipBack:Pe,SkipForward:Ee,UploadCloud:ye,X:ke},Le=document.querySelector("#app");let K=!1,B=null;const G={system:'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',segoe:'"Segoe UI", Arial, sans-serif',atkinson:'"Atkinson Hyperlegible", "Segoe UI", Arial, sans-serif',georgia:'Georgia, "Times New Roman", serif',mono:'"Cascadia Mono", "Consolas", monospace'},n={documentTitle:"Demo-Text",documentType:"Start",sections:[],pages:[],words:[],index:0,isPlaying:!1,timer:null,wpm:320,chunkSize:1,punctuationPause:!0,settingsOpen:!1,fontFamily:"system",baseFontSize:112,showPageNumber:!0,startPage:1,fileLoaded:!1,loadingMessage:""},A="Der Morgen lag still über der Stadt. Zwischen den Fenstern wanderte Licht, und jedes Wort bekam für einen Atemzug seinen eigenen Platz.";function k(){Le.innerHTML=`
    <main class="app-shell ${n.settingsOpen?"settings-visible":""}">
      <header class="topbar">
        <div class="identity">
          <span class="brand-dot" aria-hidden="true"></span>
          <span>FocusFlash</span>
        </div>
        <div class="top-actions">
          <input id="fileInput" class="file-input" type="file" accept=".pdf,.epub,.txt,text/plain,application/pdf,application/epub+zip" />
          <label class="icon-button" for="fileInput" title="Datei öffnen" aria-label="Datei öffnen">
            <i data-lucide="upload-cloud" aria-hidden="true"></i>
          </label>
          <button class="icon-button" id="settingsButton" type="button" title="Einstellungen" aria-label="Einstellungen">
            <i data-lucide="settings" aria-hidden="true"></i>
          </button>
        </div>
      </header>

      <section class="reader-surface" id="dropZone" aria-label="Speed Reading Ansicht">
        <button class="word-field" id="wordField" type="button" aria-label="${n.isPlaying?"Pausieren":"Lesen starten"}">
          <span class="focus-rule" aria-hidden="true"></span>
          <span id="wordDisplay" class="word-display" aria-live="polite"></span>
        </button>
        <div class="reader-hint" id="readerHint">${m(W())}</div>
        <div class="page-corner" id="pageCorner">${n.showPageNumber?m(ae()):""}</div>
      </section>

      <footer class="quick-controls" aria-label="Lesesteuerung">
        <button class="icon-button" id="rewindButton" type="button" title="Zum Start" aria-label="Zum Start">
          <i data-lucide="rotate-ccw" aria-hidden="true"></i>
        </button>
        <button class="icon-button" id="backButton" type="button" title="Zurück" aria-label="Zurück">
          <i data-lucide="skip-back" aria-hidden="true"></i>
        </button>
        <button class="play-button" id="playButton" type="button" title="${n.isPlaying?"Pause":"Start"}" aria-label="${n.isPlaying?"Pause":"Start"}">
          <i data-lucide="${n.isPlaying?"pause":"play"}" aria-hidden="true"></i>
        </button>
        <button class="icon-button" id="forwardButton" type="button" title="Weiter" aria-label="Weiter">
          <i data-lucide="skip-forward" aria-hidden="true"></i>
        </button>
      </footer>

      <aside class="settings-drawer" aria-label="Einstellungen" aria-hidden="${n.settingsOpen?"false":"true"}">
        <div class="drawer-header">
          <div>
            <p class="eyebrow">Einstellungen</p>
            <h1>${m(n.documentTitle)}</h1>
          </div>
          <button class="icon-button" id="closeSettingsButton" type="button" title="Schließen" aria-label="Schließen">
            <i data-lucide="x" aria-hidden="true"></i>
          </button>
        </div>

        <section class="drop-card">
          <i data-lucide="file-text" aria-hidden="true"></i>
          <div>
            <strong>${m(Ke())}</strong>
            <p>PDF, EPUB oder TXT lokal öffnen</p>
          </div>
        </section>

        <section class="setting-group">
          <div class="setting-row">
            <label for="wpmRange">Wörter pro Minute</label>
            <output id="wpmOutput" for="wpmRange">${n.wpm}</output>
          </div>
          <input id="wpmRange" type="range" min="120" max="900" step="10" value="${n.wpm}" />
        </section>

        <section class="setting-group">
          <div class="setting-row">
            <label for="fontSizeRange">Schriftgröße</label>
            <output id="fontSizeOutput" for="fontSizeRange">${n.baseFontSize}</output>
          </div>
          <input id="fontSizeRange" type="range" min="48" max="180" step="2" value="${n.baseFontSize}" />
        </section>

        <section class="setting-group">
          <label for="fontSelect">Schriftart</label>
          <select id="fontSelect">
            <option value="system" ${n.fontFamily==="system"?"selected":""}>System</option>
            <option value="segoe" ${n.fontFamily==="segoe"?"selected":""}>Segoe UI</option>
            <option value="atkinson" ${n.fontFamily==="atkinson"?"selected":""}>Atkinson Hyperlegible</option>
            <option value="georgia" ${n.fontFamily==="georgia"?"selected":""}>Georgia</option>
            <option value="mono" ${n.fontFamily==="mono"?"selected":""}>Mono</option>
          </select>
        </section>

        <section class="setting-group">
          <label>Wörter je Schritt</label>
          <div class="segmented" role="group" aria-label="Wörter je Schritt">
            <button class="segment ${n.chunkSize===1?"active":""}" data-chunk="1" type="button">1</button>
            <button class="segment ${n.chunkSize===2?"active":""}" data-chunk="2" type="button">2</button>
            <button class="segment ${n.chunkSize===3?"active":""}" data-chunk="3" type="button">3</button>
          </div>
        </section>

        <section class="setting-grid">
          <label class="input-card">
            <span>Startseite</span>
            <input id="startPageInput" type="number" min="1" max="${j()}" value="${n.startPage}" />
          </label>
          <button class="soft-button" id="jumpPageButton" type="button">Startseite anwenden</button>
        </section>

        <section class="setting-group">
          <label class="toggle-row">
            <input id="pageToggle" type="checkbox" ${n.showPageNumber?"checked":""} />
            <span>Seitenzahl anzeigen</span>
          </label>
          <label class="toggle-row">
            <input id="pauseToggle" type="checkbox" ${n.punctuationPause?"checked":""} />
            <span>Satzzeichen-Pausen</span>
          </label>
        </section>

        <section class="chapters-panel">
          <div class="panel-row">
            <p class="eyebrow">Abschnitte</p>
            <span>${n.sections.length||1}</span>
          </div>
          <div id="chapterList" class="chapter-list"></div>
        </section>
      </aside>
    </main>
  `,te({icons:ne}),$(),_e(),$e()}function $e(){document.querySelector("#fileInput").addEventListener("change",ze),document.querySelector("#settingsButton").addEventListener("click",()=>z(!0)),document.querySelector("#closeSettingsButton").addEventListener("click",()=>z(!1)),document.querySelector("#wordField").addEventListener("click",I),document.querySelector("#wpmRange").addEventListener("input",t=>{n.wpm=Number(t.target.value),document.querySelector("#wpmOutput").textContent=n.wpm}),document.querySelector("#fontSizeRange").addEventListener("input",t=>{n.baseFontSize=Number(t.target.value),document.querySelector("#fontSizeOutput").textContent=n.baseFontSize,C(),$()}),document.querySelector("#fontSelect").addEventListener("change",t=>{n.fontFamily=t.target.value,C(),$()}),document.querySelectorAll("[data-chunk]").forEach(t=>{t.addEventListener("click",()=>{n.chunkSize=Number(t.dataset.chunk),k()})}),document.querySelector("#pageToggle").addEventListener("change",t=>{n.showPageNumber=t.target.checked,b()}),document.querySelector("#pauseToggle").addEventListener("change",t=>{n.punctuationPause=t.target.checked}),document.querySelector("#jumpPageButton").addEventListener("click",()=>{const t=Number(document.querySelector("#startPageInput").value);Ue(t)}),document.querySelector("#playButton").addEventListener("click",I),document.querySelector("#backButton").addEventListener("click",()=>T(-Math.max(1,n.chunkSize*3))),document.querySelector("#forwardButton").addEventListener("click",()=>T(Math.max(1,n.chunkSize*3))),document.querySelector("#rewindButton").addEventListener("click",()=>{x(),n.index=M(),b()});const e=document.querySelector("#dropZone");e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("dragging")}),e.addEventListener("dragleave",()=>e.classList.remove("dragging")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("dragging");const[i]=t.dataTransfer.files;i&&ie(i)}),C(),K||(window.addEventListener("keydown",Te),window.addEventListener("resize",b),K=!0)}function Te(e){var t;["INPUT","BUTTON","SELECT"].includes((t=document.activeElement)==null?void 0:t.tagName)||(e.code==="Space"&&(e.preventDefault(),I()),e.key==="ArrowLeft"&&T(-Math.max(1,n.chunkSize)),e.key==="ArrowRight"&&T(Math.max(1,n.chunkSize)),e.key==="Escape"&&n.settingsOpen&&z(!1))}async function ze(e){const[t]=e.target.files;t&&(await ie(t),e.target.value="")}async function ie(e){var t;x(),n.loadingMessage=`Lese ${e.name} ...`,$();try{const i=await e.arrayBuffer(),r=(t=e.name.split(".").pop())==null?void 0:t.toLowerCase();let o;e.type==="application/pdf"||r==="pdf"?o=await Ae(i,e.name):e.type==="application/epub+zip"||r==="epub"?o=await Me(i,e.name):o=await Ne(i,e.name);const a=v(o.text);if(!a.length)throw new Error("Diese Datei enthält keinen lesbaren Text.");n.documentTitle=o.title||e.name,n.documentType=o.type,n.words=a,n.sections=o.sections.length?o.sections:[{title:"Text",start:0}],n.pages=Xe(o.pages,a.length),n.startPage=R(),n.index=M(),n.fileLoaded=!0,n.loadingMessage="",k()}catch(i){n.fileLoaded=!1,n.loadingMessage="",Je(i.message||"Die Datei konnte nicht gelesen werden."),k()}}async function Ae(e,t){const r=await(await Fe()).getDocument({data:e}).promise,o=[],a=[],c=[];let s=0;for(let l=1;l<=r.numPages;l+=1){const d=await(await r.getPage(l)).getTextContent(),g=L(d.items.map(w=>w.str).join(" "));g.trim()&&(o.push({title:`Seite ${l}`,start:s}),a.push({number:l,start:s,title:`Seite ${l}`}),s+=v(g).length,c.push(g))}return{title:t.replace(/\.pdf$/i,""),type:"PDF",text:c.join(`

`),sections:o,pages:a}}async function Me(e,t){var _,U;const{default:i}=await D(async()=>{const{default:S}=await import("./jszip.min-BiHF8TMC.js").then(P=>P.j);return{default:S}},[],import.meta.url),r=await i.loadAsync(e),o=r.file("META-INF/container.xml");if(!o)throw new Error("EPUB-Struktur nicht gefunden.");const a=await o.async("string"),c=Q(a),s=Y(c,"rootfile"),l=s==null?void 0:s.getAttribute("full-path");if(!l||!r.file(l))throw new Error("EPUB-Inhaltsverzeichnis nicht gefunden.");const u=await r.file(l).async("string"),d=Q(u),g=l.includes("/")?l.slice(0,l.lastIndexOf("/")+1):"",w=((U=(_=Y(d,"title"))==null?void 0:_.textContent)==null?void 0:U.trim())||t.replace(/\.epub$/i,""),p=new Map;O(d,"item").forEach(S=>{const P=S.getAttribute("id"),E=S.getAttribute("href");P&&E&&p.set(P,{href:Ce(g,E),mediaType:S.getAttribute("media-type")||""})});const f=[],y=[],H=[];let F=0;const se=O(d,"itemref");for(const S of se){const P=S.getAttribute("idref"),E=p.get(P);if(!E||!Be(E.mediaType))continue;const Z=r.file(E.href);if(!Z)continue;const ce=await Z.async("string"),{title:le,text:q}=qe(ce);if(!q)continue;const V=le||`Abschnitt ${f.length+1}`;f.push({title:V,start:F}),y.push({number:y.length+1,start:F,title:V}),F+=v(q).length,H.push(q)}return{title:w,type:"EPUB",text:H.join(`

`),sections:f,pages:y}}async function Ne(e,t){const i=Oe(e);return{title:t.replace(/\.[^.]+$/,""),type:"Text",text:i,sections:[{title:"Text",start:0}],pages:[{number:1,start:0,title:"Text"}]}}function Q(e){const t=new DOMParser().parseFromString(e,"application/xml");if(t.querySelector("parsererror"))throw new Error("Die Datei enthält ungültiges XML.");return t}async function Fe(){if(!B){const[e,t]=await Promise.all([D(()=>import("./pdf-BnPRJEQ6.js"),[],import.meta.url),D(()=>import("./pdf.worker-BAay3TpF.js"),[],import.meta.url)]);e.GlobalWorkerOptions.workerSrc=t.default,B=e}return B}function Y(e,t){return O(e,t)[0]||null}function O(e,t){return[...e.getElementsByTagName("*")].filter(i=>i.localName===t)}function qe(e){var o,a,c,s;const t=new DOMParser().parseFromString(e,"text/html");t.querySelectorAll("script, style, nav, svg, audio, video").forEach(l=>l.remove());const i=((a=(o=t.querySelector("h1, h2, h3, title"))==null?void 0:o.textContent)==null?void 0:a.replace(/\s+/g," ").trim())||"",r=L(((s=(c=t.body)==null?void 0:c.textContent)==null?void 0:s.replace(/\s+/g," ").trim())||"");return{title:i,text:r}}function Be(e){return/xhtml|html|xml/i.test(e)}function Ce(e,t){const i=De(t).split("#")[0],r=`${e}${i}`.split("/"),o=[];for(const a of r)!a||a==="."||(a===".."?o.pop():o.push(a));return o.join("/")}function De(e){try{return decodeURIComponent(e)}catch{return e}}function Oe(e){const t=new TextDecoder("utf-8",{fatal:!1}).decode(e);return(t.match(/\uFFFD/g)||[]).length?L(new TextDecoder("windows-1252").decode(e)):L(t)}function L(e){return e.normalize("NFC").replace(/\u00ad/g,"").replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/\u00a0/g," ")}function v(e){return L(e).replace(/\s+/g," ").trim().split(" ").map(t=>t.trim()).filter(Boolean)}function $(){const e=document.querySelector("#wordDisplay");if(!e)return;if(n.loadingMessage){e.innerHTML=`<span class="loading-text">${m(n.loadingMessage)}</span>`;return}n.words.length||(n.words=v(A));const t=n.words.slice(n.index,n.index+n.chunkSize),i=t[0]||"",r=je(i),o=i.slice(0,r),a=i.charAt(r)||"",c=i.slice(r+1),s=t.slice(1).join(" ");e.innerHTML=`
    <span class="word-prefix">${m(o)}</span>
    <span class="word-focus">${m(a)}</span>
    <span class="word-suffix">${m(c)}${s?` <em>${m(s)}</em>`:""}</span>
  `,Ie(e)}function Ie(e){const t=document.querySelector("#wordField");if(!t)return;const i=t.getBoundingClientRect(),r=n.baseFontSize,o=18;e.style.fontSize=`${r}px`,e.classList.remove("compact-word");for(let a=r;a>=o;a-=2)if(e.style.fontSize=`${a}px`,!Re(e,i)){a<r*.7&&e.classList.add("compact-word");return}e.style.fontSize=`${o}px`,e.classList.add("compact-word")}function Re(e,t){const i=e.querySelector(".word-prefix"),r=e.querySelector(".word-suffix"),o=36,a=36,c=i&&i.scrollWidth>i.clientWidth+1,s=r&&r.scrollWidth>r.clientWidth+1,l=e.scrollWidth>t.width-o||e.scrollHeight>t.height-a;return!!(c||s||l)}function je(e){const i=[...e.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,"")].length;return i<=1?0:i<=5?1:i<=9?2:i<=13?3:4}function I(){n.isPlaying?x():We(),re()}function We(){n.words.length||(n.words=v(A)),n.index>=n.words.length&&(n.index=M()),n.isPlaying=!0,oe()}function x(){n.isPlaying=!1,clearTimeout(n.timer),n.timer=null,re()}function oe(){if(clearTimeout(n.timer),!n.isPlaying)return;b();const e=n.words[n.index]||"",t=He(e);n.timer=setTimeout(()=>{if(n.index=Math.min(n.index+n.chunkSize,n.words.length),n.index>=n.words.length){x(),b();return}oe()},t)}function He(e){const t=6e4/n.wpm;return n.punctuationPause?/[.!?]["')\]]?$/.test(e)?t*1.85:/[,;:]["')\]]?$/.test(e)?t*1.35:t:t}function T(e){x(),n.index=N(n.index+e,0,Math.max(0,n.words.length-1)),b()}function b(){$();const e=document.querySelector("#pageCorner"),t=document.querySelector("#readerHint");e&&(e.textContent=n.showPageNumber?ae():""),t&&(t.textContent=W())}function re(){const e=document.querySelector("#playButton"),t=document.querySelector("#wordField"),i=document.querySelector("#readerHint");e&&(e.title=n.isPlaying?"Pause":"Start",e.setAttribute("aria-label",n.isPlaying?"Pause":"Start"),e.innerHTML=`<i data-lucide="${n.isPlaying?"pause":"play"}" aria-hidden="true"></i>`,t&&t.setAttribute("aria-label",n.isPlaying?"Pausieren":"Lesen starten"),i&&(i.textContent=W()),te({icons:ne}))}function _e(){const e=document.querySelector("#chapterList");if(!e)return;const t=n.sections.length?n.sections:[{title:"Demo",start:0}];e.innerHTML=t.slice(0,80).map((i,r)=>`
        <button class="chapter-button" type="button" data-start="${i.start}">
          <span>${m(i.title||`Abschnitt ${r+1}`)}</span>
          <small>${Math.round(i.start/Math.max(1,n.words.length)*100)}%</small>
        </button>
      `).join(""),e.querySelectorAll("[data-start]").forEach(i=>{i.addEventListener("click",()=>{x(),n.index=N(Number(i.dataset.start),0,Math.max(0,n.words.length-1)),b(),z(!1)})})}function z(e){n.settingsOpen=e,k()}function Ue(e){x(),n.startPage=N(Math.round(e||R()),R(),j()),n.index=M(),b()}function M(){var e;return((e=Ze(n.startPage))==null?void 0:e.start)||0}function Ze(e){const t=n.pages.length?n.pages:[{number:1,start:0}];return t.find(i=>i.number>=e)||t[t.length-1]}function Ve(){const e=n.pages.length?n.pages:[{number:1,start:0}];let t=e[0];for(const i of e)if(i.start<=n.index)t=i;else break;return t}function R(){return(n.pages.length?n.pages[0].number:1)||1}function j(){return(n.pages.length?n.pages[n.pages.length-1].number:1)||1}function Xe(e,t){return e!=null&&e.length?e.map(i=>({number:Number(i.number)||1,start:N(Number(i.start)||0,0,Math.max(0,t-1)),title:i.title||`Seite ${i.number||1}`})):[{number:1,start:0,title:"Seite 1"}]}function C(){document.documentElement.style.setProperty("--reader-font",G[n.fontFamily]||G.system),document.documentElement.style.setProperty("--reader-base-size",`${n.baseFontSize}px`)}function Je(e){const t=document.createElement("div");t.className="toast",t.textContent=e,document.body.append(t),setTimeout(()=>t.remove(),4200)}function W(){return n.loadingMessage?"Bitte kurz warten":n.isPlaying?"Klicken zum Pausieren":"Klicken zum Starten"}function Ke(){const e=n.words.length||v(A).length;return`${n.documentType} - ${e.toLocaleString("de-DE")} Wörter`}function ae(){const e=Ve().number,t=j();return`Seite ${e.toLocaleString("de-DE")} / ${t.toLocaleString("de-DE")}`}function N(e,t,i){return Math.min(Math.max(e,t),i)}function m(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js",{scope:"./"}).catch(()=>{})});n.words=v(A);n.sections=[{title:"Demo",start:0}];n.pages=[{number:1,start:0,title:"Seite 1"}];k();
