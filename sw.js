if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const t=e=>n(e,s),c={module:{uri:s},exports:f,require:t};i[s]=Promise.all(o.map((e=>c[e]||t(e)))).then((e=>(r(...e),f)))}}define(["./workbox-9389b117"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon-16x16.png",revision:"a07d971ae80a2bb96fcbabafc6be5954"},{url:"favicon-32x32.png",revision:"a70ed17e6b4f7f1fc4c7efe9ed4a4a0f"},{url:"favicon.ico",revision:"59c7342737f8e856dd8e3ab1971d058b"},{url:"index.html",revision:"105b35b157824116626dc35282f55db4"},{url:"logo192.png",revision:"a6fa053fada7474d56047542a9a5b2ee"},{url:"logo512.png",revision:"b22730e1d507770b6817bf6033713f2c"},{url:"manifest.json",revision:"492c3cf58d2385b2ba3512502b91b4c6"},{url:"metadata.json",revision:"37cb2e8fcdd3b2523b9bd2f4b09087db"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
