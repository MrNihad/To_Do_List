(()=>{"use strict";var n={314:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"#nav-bar {\n    /* Fix the position */\n    left: 1vw;\n    top: 1vw;\n    bottom: 1vw; \n    background: var(--navbar-dark-primary);\n    border-radius: 16px;\n    display: flex;\n    flex-direction: column;\n    color: var(--navbar-light-primary);\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    overflow: hidden;\n    user-select: none;\n    height: 90vh;\n}\n\n#nav-bar hr {\n    /* margin: 0; */\n    position: relative;\n    left: -16px;\n    width: calc(100% - 32px);\n    border: none;\n    border-top: solid 1px var(--navbar-dark-secondary);\n}\n#nav-bar a {\n    color: inherit;\n    text-decoration: inherit;\n}\n#nav-header {\n    position: relative;\n    margin-top: 16px;\n    width: var(--navbar-width);\n    left: 16px;\n    width: calc(var(--navbar-width) - 16px);\n    min-height: 40px;\n    background: var(--navbar-dark-primary);\n    border-radius: 16px;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    transition: width 0.2s;\n    font-size: 16pt;\n\n}\n\n  \n#nav-content {\n    margin: -16px 0;\n    padding: 16px 0;\n    position: relative;\n    flex: 1;\n    /* width: var(--navbar-width); */\n    background: var(--navbar-dark-primary);\n    /* box-shadow: 0 0 0 16px var(--navbar-dark-primary); */\n    direction: rtl;\n    overflow-x: hidden;\n    transition: width 0.2s;\n}\n.nav-heading {\n    position: relative;\n    \n    margin-left: 16px;\n    height: 54px;\n    display: flex;\n    align-items: center;\n    direction: ltr;\n    z-index: 1;\n    font-size: 16pt;\n\n}\n.nav-button {\n    position: relative;\n    /* margin-left: 16px; */\n    height: 54px;\n    display: flex;\n    align-items: center;\n    color: var(--navbar-light-secondary);\n    direction: ltr;\n    cursor: pointer;\n    z-index: 1;\n    transition: color 0.2s;\n}\n.nav-button span {\n    transition: opacity 1s;\n}\n.nav-button .fas {\n    transition: min-width 0.2s;\n}\n.nav-button:nth-of-type(1):hover {\n    color: var(--navbar-dark-primary);\n}\n.nav-button:nth-of-type(1):hover ~ #nav-content-highlight {\n    top: 16px;\n}\n.nav-button:nth-of-type(2):hover {\n    color: var(--navbar-dark-primary);\n}\n.nav-button:nth-of-type(2):hover ~ #nav-content-highlight {\n    top: 70px;\n}\n.nav-button:nth-of-type(3):hover {\n    color: var(--navbar-dark-primary);\n}\n.nav-button:nth-of-type(3):hover ~ #nav-content-highlight {\n    top: 124px;\n}\n.nav-button:nth-of-type(4):hover {\n    color: var(--navbar-dark-primary);\n}\n.nav-button:nth-of-type(4):hover ~ #nav-content-highlight {\n    top: 178px;\n}\n.nav-button:nth-of-type(5):hover {\n    color: var(--navbar-dark-primary);\n}\n.nav-button:nth-of-type(5):hover ~ #nav-content-highlight {\n    top: 232px;\n}\n.nav-button:nth-of-type(6):hover {\n    color: var(--navbar-dark-primary);\n}\n.nav-button:nth-of-type(6):hover ~ #nav-content-highlight {\n    top: 286px;\n}\n.nav-button:nth-of-type(7):hover {\n    color: var(--navbar-dark-primary);\n}\n.nav-button:nth-of-type(7):hover ~ #nav-content-highlight {\n    top: 340px;\n}\n.nav-button:nth-of-type(8):hover {\n    color: var(--navbar-dark-primary);\n}\n.nav-button:nth-of-type(8):hover ~ #nav-content-highlight {\n    top: 394px;\n}\n  \n#nav-bar .fas {\n    min-width: 1rem;\n    text-align: center;\n}\n.project{\n    text-align: center;\n}\n",""]);const d=i},426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,":root {\n    --background: #9c88ff;\n    --navbar-width: 256px;\n    --navbar-width-min: 80px;\n    --navbar-dark-primary: #18283b;\n    --navbar-dark-secondary: #2c3e50;\n    --navbar-light-primary: #f5f6fa;\n    --navbar-light-secondary: #8392a5;\n}\n  \nhtml, body {\n  background: var(--background);\n}\n.mainDiv {\n  display: grid;\n  grid-template-columns: minmax(80px, 200px) 1fr; /* Define columns for the grid */\n  gap: 10px; /* Adjust gap as needed */\n   \n  padding: 20px 0\n}\n.mainContent {\n  position: relative;\n  display: grid;\n   /* Align items to the top */\n  \n \n  grid-template-columns:  1fr;\n  /* Align items to the top */\n  gap: 10px; /* Add gap between elements */\n  align-items: center; /* Center horizontally */\n  justify-content: center; \n  \n}\n\n#createTask{\n  width: 160px;\n  height: 60px;\n  margin: auto;\n  \n}\n#createTask {\n  border: none;\n  outline: none;\n  background-color: #6c5ce7;\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  border-radius: 5px;\n  transition: all ease 0.1s;\n  box-shadow: 0px 5px 0px 0px #a29bfe;\n  cursor: pointer;\n}\n\n#createTask:active {\n  transform: translateY(5px);\n  box-shadow: 0px 0px 0px 0px #a29bfe;\n}\n\n\n#content {\n  height: 80vh;\n  width: 100%;\n  /* Add styles for your content */\n  background-color: #c2bbe7; /* Example background color */\n  /* Other styles for your content */\n  grid-column: 1;\n  flex: 1;\n  border-radius: 16px;\n  overflow:auto; \n  text-align:left;\n  \n \n}\n#content div{\n  margin: auto;\n  display: grid;\n  grid-template-columns: (2,2fr);\n  /* margin-left: 16px;*/\n  margin-top: 16px;\n  border-bottom: #18283b 1px solid;\n  \n}\nform {\n  position: absolute;\n  top: -20px; /* Adjust this value to position the form on top of the button */\n  left: 50%; /* Adjust as needed */\n  transform: translateX(-50%);\n  background-color: #b0a6f6;\n  padding: 20px;\n  border: 1px solid black;\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: sans-serif;\n  color: white;\n  \n  border-radius: 10px;\n  box-shadow: 0 0.4px 0.4px rgba(128, 128, 128, 0.109),\n    0 1px 1px rgba(128, 128, 128, 0.155),\n    0 2.1px 2.1px rgba(128, 128, 128, 0.195),\n    0 4.4px 4.4px rgba(128, 128, 128, 0.241),\n    0 12px 12px rgba(128, 128, 128, 0.35);\n\n}\n#removeTask {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background-color: #ff6347;\n  color: #ffffff;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.3s ease-in-out;\n}\n#removeButton{\n  color : 'red'; \n  background : 'none';\n  background-color: #b0a6f6;\n  border: none;\n  cursor : pointer;\n  align-items : 'right';\n}\n#submitButton{\n  border: none;\n  outline: none;\n  background-color: #6c5ce7;\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  border-radius: 5px;\n  transition: all ease 0.1s;\n  box-shadow: 0px 5px 0px 0px #a29bfe;\n  cursor: pointer;\n}\n\n#taskDiv {\n  position: relative;\n  width: 500px;\n  padding: 15px;\n  margin: 10px;\n  background-color: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease-in-out;\n}\n#taskDiv div{\n  align-self: start;\n}\n#taskDiv:hover {\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n#markAsDone {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  width: 20px; /* Set a fixed width for checkbox */\n  height: 20px; /* Set a fixed height for checkbox */\n  background-color: #ffffff; /* Background color when not checked */\n  border: 2px solid #555555; /* Border color */\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.3s ease-in-out;\n}\n\n\n\n\n\n",""]);const d=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),v={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(v);else{var h=r(v,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),d=t(565),c=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),v=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var m=t(314),f={};function b(n,e){if(!e||0===e.length)return;const t=e[e.length-1],o=document.createElement("div");o.setAttribute("id","taskDiv");const r=document.createElement("div");r.textContent=`Name: ${t.taskName}`;const a=document.createElement("div");a.textContent=`Date : ${t.taskDate}`,o.appendChild(r),o.appendChild(a);const i=document.createElement("button");i.innerHTML="&#10060;",i.setAttribute("id","removeTask"),i.addEventListener("click",(function(){n.removeChild(o);const r=e.indexOf(t);-1!==r&&e.splice(r,1)}));const d=document.createElement("button");d.innerHTML="",d.setAttribute("id","markAsDone"),d.addEventListener("click",(function(){const r=e.indexOf(t);t.done=!t.done,t.done&&(d.innerHTML="✓"),-1!==r&&e.splice(r,1),n.removeChild(o)})),o.appendChild(i),o.appendChild(d),n.appendChild(o)}f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let x=[];function g(n,e){e&&0!==e.length&&e.forEach((t=>{const o=document.createElement("div");o.setAttribute("id","taskDiv");const r=document.createElement("div");r.textContent=`Name: ${t.taskName}`;const a=document.createElement("div");a.textContent=`Date : ${t.taskDate}`,o.appendChild(r),o.appendChild(a);const i=document.createElement("button");i.innerHTML="&#10060;",i.setAttribute("id","removeTask"),i.addEventListener("click",(function(){n.removeChild(o);const r=e.indexOf(t);-1!==r&&e.splice(r,1)}));const d=document.createElement("button");d.innerHTML="",d.setAttribute("id","markAsDone"),d.addEventListener("click",(function(){const r=e.indexOf(t);t.done=!t.done,t.done&&(d.innerHTML="✓"),-1!==r&&e.splice(r,1),n.removeChild(o)})),o.appendChild(i),o.appendChild(d),n.appendChild(o)}))}!function(){t();const n=document.getElementById("content"),e=document.querySelector(".mainContent");function t(){const n=document.getElementById("content");for(;n.firstChild;)n.removeChild(n.firstChild)}document.addEventListener("DOMContentLoaded",(()=>{g(n,x)})),document.getElementById("createTask").addEventListener("click",(()=>{!function(n,e){const t=document.createElement("form"),o=document.createElement("label");o.textContent="Task Name: ";const r=document.createElement("input");r.setAttribute("type","text"),o.appendChild(r);const a=document.createElement("label");a.textContent="Date: ";const i=document.createElement("input");i.setAttribute("type","date"),a.appendChild(i);const d=document.createElement("div");d.style.display="flex",d.style.alignItems="center";const c=document.createElement("button");c.textContent="Add Task",c.setAttribute("id","submitButton"),c.addEventListener("click",(function(o){if(o.preventDefault(),""===r.value.trim()||""===i.value)alert("Please fill in all fields.");else{const o={taskName:r.value,taskDate:i.value};x.push(o),b(e,x),t.reset(),n.removeChild(t)}}));const s=document.createElement("button");s.innerHTML="&#10060;",s.setAttribute("id","removeButton"),s.addEventListener("click",(function(){n.removeChild(t)})),d.appendChild(c),d.appendChild(s),t.appendChild(document.createElement("br")),t.appendChild(o),t.appendChild(document.createElement("br")),t.appendChild(a),t.appendChild(document.createElement("br")),t.appendChild(d),n.appendChild(t),b(e)}(e,n)})),document.getElementById("allTask").addEventListener("click",(()=>{t(),g(n,x)})),document.getElementById("cDay").addEventListener("click",(()=>{t(),function(n,e){const t=(new Date).toISOString().split("T")[0];n.innerHTML="",e.forEach((o=>{if(o.taskDate===t){const t=document.createElement("div");t.setAttribute("id","taskDiv");const r=document.createElement("div");r.textContent=`Name: ${o.taskName}`;const a=document.createElement("div");a.textContent=`Date : ${o.taskDate}`,t.appendChild(r),t.appendChild(a);const i=document.createElement("button");i.innerHTML="&#10060;",i.setAttribute("id","removeTask"),i.addEventListener("click",(function(){n.removeChild(t);const r=e.indexOf(o);-1!==r&&e.splice(r,1)}));const d=document.createElement("button");d.innerHTML="",d.setAttribute("id","markAsDone"),d.addEventListener("click",(function(){const r=e.indexOf(o);o.done=!o.done,o.done&&(d.innerHTML="✓"),-1!==r&&e.splice(r,1),n.removeChild(t)})),t.appendChild(i),t.appendChild(d),n.appendChild(t)}}))}(n,x)})),document.getElementById("cWeek").addEventListener("click",(()=>{t(),function(n,e){const t=new Date,o=new Date(t);o.setDate(t.getDate()-t.getDay());const r=new Date(t);r.setDate(t.getDate()+(6-t.getDay())),n.innerHTML="",e.forEach((t=>{const a=new Date(t.taskDate);if(a>=o&&a<=r){const o=document.createElement("div");o.setAttribute("id","taskDiv");const r=document.createElement("div");r.textContent=`Name: ${t.taskName}`;const a=document.createElement("div");a.textContent=`Date : ${t.taskDate}`,o.appendChild(r),o.appendChild(a);const i=document.createElement("button");i.innerHTML="&#10060;",i.setAttribute("id","removeTask"),i.addEventListener("click",(function(){n.removeChild(o);const r=e.indexOf(t);-1!==r&&e.splice(r,1)}));const d=document.createElement("button");d.innerHTML="",d.setAttribute("id","markAsDone"),d.addEventListener("click",(function(){const r=e.indexOf(t);t.done=!t.done,t.done&&(d.innerHTML="✓"),-1!==r&&e.splice(r,1),n.removeChild(o)})),o.appendChild(i),o.appendChild(d),n.appendChild(o)}}))}(n,x)}))}()})()})();