if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let n={};const u=e=>o(e,l),c={module:{uri:l},exports:n,require:u};s[l]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(i(...e),n)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"solid-group"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/solid-group/css/app.59e428b8.css",revision:null},{url:"/solid-group/css/chunk-vendors.1eda7288.css",revision:null},{url:"/solid-group/index.html",revision:"ff3ecb40330044196399458d4ecc549b"},{url:"/solid-group/js/about.6540c6c4.js",revision:null},{url:"/solid-group/js/app.19f8a3c0.js",revision:null},{url:"/solid-group/js/chunk-vendors.483eaadd.js",revision:null},{url:"/solid-group/manifest.json",revision:"b37e16a359e2b12ba4f4bc4ffcf444b5"},{url:"/solid-group/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
