if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>n(e,o),u={module:{uri:o},exports:t,require:l};i[o]=Promise.all(s.map((e=>u[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C9bQTqm9.js",revision:null},{url:"assets/index-DNyegPOc.css",revision:null},{url:"assets/NounsView-Djk3gPJO.js",revision:null},{url:"index.html",revision:"80791704e12a408e6664ff2a650ca59a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon-32x32.png",revision:"aaa88e2603ef53e570341f50a0f3fba2"},{url:"icon-192x192.png",revision:"a6fa053fada7474d56047542a9a5b2ee"},{url:"icon-512x512.png",revision:"b22730e1d507770b6817bf6033713f2c"},{url:"manifest.webmanifest",revision:"d319644489f971d7ead04f0303d3815c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
