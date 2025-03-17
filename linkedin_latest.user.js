// ==UserScript==
// @name       [FT] LinkedIn
// @namespace  https://github.com/folktroll/
// @version    25.3.17.1306
// @author     Folky
// @license    MIT
// @icon       https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/240px-Linkedin_icon.svg.png
// @updateURL  https://raw.githubusercontent.com/Folktroll/uscripts/refs/heads/main/linkedin_latest.user.js
// @match      https://*.linkedin.com/*
// @match      https://linkedin.com/*
// @grant      GM.xmlHttpRequest
// @grant      GM_addStyle
// @grant      GM_getResourceText
// @grant      GM_getValue
// @grant      GM_registerMenuCommand
// @grant      GM_setClipboard
// @grant      GM_setValue
// @run-at     document-start
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const i=document.createElement("style");i.textContent=t,document.head.append(i)})(" .toastify{padding:12px 20px;color:#fff;display:inline-block;box-shadow:0 3px 6px -1px #0000001f,0 10px 36px -4px #4d60e84d;background:-webkit-linear-gradient(315deg,#73a5ff,#5477f5);background:linear-gradient(135deg,#73a5ff,#5477f5);position:fixed;opacity:0;transition:all .4s cubic-bezier(.215,.61,.355,1);border-radius:2px;cursor:pointer;text-decoration:none;max-width:calc(50% - 20px);z-index:2147483647}.toastify.on{opacity:1}.toast-close{background:transparent;border:0;color:#fff;cursor:pointer;font-family:inherit;font-size:1em;opacity:.4;padding:0 5px}.toastify-right{right:15px}.toastify-left{left:15px}.toastify-top{top:-150px}.toastify-bottom{bottom:-150px}.toastify-rounded{border-radius:25px}.toastify-avatar{width:1.5em;height:1.5em;margin:-7px 5px;border-radius:2px}.toastify-center{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content;max-width:-moz-fit-content}@media only screen and (max-width: 360px){.toastify-right,.toastify-left{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content}} ");

(function () {
	'use strict';

	function q(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var x={exports:{}};var F=x.exports,N;function $(){return N||(N=1,function(o){(function(t,e){o.exports?o.exports=e():t.Toastify=e();})(F,function(t){var e=function(s){return new e.lib.init(s)},i="1.12.0";e.defaults={oldestFirst:true,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:false,close:false,gravity:"toastify-top",positionLeft:false,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:true,onClick:function(){},offset:{x:0,y:0},escapeMarkup:true,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:i,constructor:e,init:function(s){return s||(s={}),this.options={},this.toastElement=null,this.options.text=s.text||e.defaults.text,this.options.node=s.node||e.defaults.node,this.options.duration=s.duration===0?0:s.duration||e.defaults.duration,this.options.selector=s.selector||e.defaults.selector,this.options.callback=s.callback||e.defaults.callback,this.options.destination=s.destination||e.defaults.destination,this.options.newWindow=s.newWindow||e.defaults.newWindow,this.options.close=s.close||e.defaults.close,this.options.gravity=s.gravity==="bottom"?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=s.positionLeft||e.defaults.positionLeft,this.options.position=s.position||e.defaults.position,this.options.backgroundColor=s.backgroundColor||e.defaults.backgroundColor,this.options.avatar=s.avatar||e.defaults.avatar,this.options.className=s.className||e.defaults.className,this.options.stopOnFocus=s.stopOnFocus===void 0?e.defaults.stopOnFocus:s.stopOnFocus,this.options.onClick=s.onClick||e.defaults.onClick,this.options.offset=s.offset||e.defaults.offset,this.options.escapeMarkup=s.escapeMarkup!==void 0?s.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=s.ariaLive||e.defaults.ariaLive,this.options.style=s.style||e.defaults.style,s.backgroundColor&&(this.options.style.background=s.backgroundColor),this},buildToast:function(){if(!this.options)throw "Toastify is not initialized";var s=document.createElement("div");s.className="toastify on "+this.options.className,this.options.position?s.className+=" toastify-"+this.options.position:this.options.positionLeft===true?(s.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):s.className+=" toastify-right",s.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)s.style[a]=this.options.style[a];if(this.options.ariaLive&&s.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)s.appendChild(this.options.node);else if(this.options.escapeMarkup?s.innerText=this.options.text:s.innerHTML=this.options.text,this.options.avatar!==""){var d=document.createElement("img");d.src=this.options.avatar,d.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===true?s.appendChild(d):s.insertAdjacentElement("afterbegin",d);}if(this.options.close===true){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(p){p.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue);}.bind(this));var l=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===true)&&l>360?s.insertAdjacentElement("afterbegin",c):s.appendChild(c);}if(this.options.stopOnFocus&&this.options.duration>0){var u=this;s.addEventListener("mouseover",function(p){window.clearTimeout(s.timeOutValue);}),s.addEventListener("mouseleave",function(){s.timeOutValue=window.setTimeout(function(){u.removeElement(s);},u.options.duration);});}if(typeof this.options.destination<"u"&&s.addEventListener("click",function(p){p.stopPropagation(),this.options.newWindow===true?window.open(this.options.destination,"_blank"):window.location=this.options.destination;}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&s.addEventListener("click",function(p){p.stopPropagation(),this.options.onClick();}.bind(this)),typeof this.options.offset=="object"){var f=n("x",this.options),h=n("y",this.options),y=this.options.position=="left"?f:"-"+f,m=this.options.gravity=="toastify-top"?h:"-"+h;s.style.transform="translate("+y+","+m+")";}return s},showToast:function(){this.toastElement=this.buildToast();var s;if(typeof this.options.selector=="string"?s=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?s=this.options.selector:s=document.body,!s)throw "Root element is not defined";var a=e.defaults.oldestFirst?s.firstChild:s.lastChild;return s.insertBefore(this.toastElement,a),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement);}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement);},removeElement:function(s){s.className=s.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),s.parentNode&&s.parentNode.removeChild(s),this.options.callback.call(s),e.reposition();}.bind(this),400);}},e.reposition=function(){for(var s={top:15,bottom:15},a={top:15,bottom:15},d={top:15,bottom:15},c=document.getElementsByClassName("toastify"),l,u=0;u<c.length;u++){r(c[u],"toastify-top")===true?l="toastify-top":l="toastify-bottom";var f=c[u].offsetHeight;l=l.substr(9,l.length-1);var h=15,y=window.innerWidth>0?window.innerWidth:screen.width;y<=360?(c[u].style[l]=d[l]+"px",d[l]+=f+h):r(c[u],"toastify-left")===true?(c[u].style[l]=s[l]+"px",s[l]+=f+h):(c[u].style[l]=a[l]+"px",a[l]+=f+h);}return this};function n(s,a){return a.offset[s]?isNaN(a.offset[s])?a.offset[s]:a.offset[s]+"px":"0px"}function r(s,a){return !s||typeof a!="string"?false:!!(s.className&&s.className.trim().split(/\s+/gi).indexOf(a)>-1)}return e.lib.init.prototype=e.lib,e});}(x)),x.exports}var H=$();const _=q(H);function V(o){const t=o.trim();if(!t)return new Headers;const e=t.split(`\r
`).map(i=>{let n=i.split(":");return [n[0].trim(),n[1].trim()]});return new Headers(e)}function z(o,t){const e=V(t.responseHeaders),i=typeof t.response=="string"?new Blob([t.response],{type:e.get("Content-Type")||"text/plain"}):t.response;return new S(i,{statusCode:t.status,statusText:t.statusText,headers:e,finalUrl:t.finalUrl,redirected:t.finalUrl===o.url})}class S{constructor(t,e){this.rawBody=t,this.init=e,this.body=t.stream();const{headers:i,statusCode:n,statusText:r,finalUrl:s,redirected:a}=e;this.headers=i,this.status=n,this.statusText=r,this.url=s,this.type="basic",this.redirected=a,this._bodyUsed=false;}get bodyUsed(){return this._bodyUsed}get ok(){return this.status<300}arrayBuffer(){if(this.bodyUsed)throw new TypeError("Failed to execute 'arrayBuffer' on 'Response': body stream already read");return this._bodyUsed=true,this.rawBody.arrayBuffer()}blob(){if(this.bodyUsed)throw new TypeError("Failed to execute 'blob' on 'Response': body stream already read");return this._bodyUsed=true,Promise.resolve(this.rawBody.slice(0,this.rawBody.size,this.rawBody.type))}clone(){if(this.bodyUsed)throw new TypeError("Failed to execute 'clone' on 'Response': body stream already read");return new S(this.rawBody,this.init)}formData(){if(this.bodyUsed)throw new TypeError("Failed to execute 'formData' on 'Response': body stream already read");return this._bodyUsed=true,this.rawBody.text().then(W)}async json(){if(this.bodyUsed)throw new TypeError("Failed to execute 'json' on 'Response': body stream already read");return this._bodyUsed=true,JSON.parse(await this.rawBody.text())}text(){if(this.bodyUsed)throw new TypeError("Failed to execute 'text' on 'Response': body stream already read");return this._bodyUsed=true,this.rawBody.text()}async bytes(){if(this.bodyUsed)throw new TypeError("Failed to execute 'bytes' on 'Response': body stream already read");return this._bodyUsed=true,new Uint8Array(await this.rawBody.arrayBuffer())}}function W(o){const t=new FormData;return o.trim().split("&").forEach(function(e){if(e){const i=e.split("="),n=i.shift()?.replace(/\+/g," "),r=i.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(r));}}),t}async function X(o,t){const e=new Request(o,t);let i;return t?.body&&(i=await e.text()),await Y(e,t,i)}function Y(o,t,e){return new Promise((i,n)=>{if(o.signal&&o.signal.aborted)return n(new DOMException("Aborted","AbortError"));GM.xmlHttpRequest({url:o.url,method:Q(o.method.toUpperCase()),headers:Object.fromEntries(new Headers(t?.headers).entries()),data:e,responseType:"blob",onload(r){try{i(z(o,r));}catch(s){n(s);}},onabort(){n(new DOMException("Aborted","AbortError"));},ontimeout(){n(new TypeError("Network request failed, timeout"));},onerror(r){n(new TypeError("Failed to fetch: "+r.finalUrl));}});})}const J=["GET","POST","PUT","DELETE","PATCH","HEAD","TRACE","OPTIONS","CONNECT"];function Z(o,t){return o.includes(t)}function Q(o){if(Z(J,o))return o;throw new Error(`unsupported http method ${o}`)}function g(){return g=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)({}).hasOwnProperty.call(e,i)&&(o[i]=e[i]);}return o},g.apply(null,arguments)}const L=navigator.userAgent.includes("Macintosh"),ee=["m","c","s","a"],I={ctrl:"c",control:"c",shift:"s",alt:"a",meta:"m",cmd:"m"},te=g({},I,{c:"c",s:"s",a:"a",m:"m",cm:L?"m":"c",ctrlcmd:L?"m":"c"}),oe={arrowup:"up",arrowdown:"down",arrowleft:"left",arrowright:"right",cr:"enter",escape:"esc"," ":"space"};function D(){return {children:new Map,shortcuts:new Set}}function se(o,t,e){let i=o;for(const n of t){let r=i.children.get(n);r||(r=D(),i.children.set(n,r)),i=r;}i.shortcuts.add(e);}function ie(o,t){let e=o;for(const i of t)if(e=e.children.get(i),!e)break;return e}function ne(o,t,e){let i=o;const n=[i];for(const s of t){if(i=i.children.get(s),!i)return;n.push(i);}e?i.shortcuts.delete(e):i.shortcuts.clear();let r=n.length-1;for(;r>0&&(i=n[r],!(i.shortcuts.size||i.children.size));)n[r-1].children.delete(t[r-1]),r-=1;}function re(o){const t=[],e=(i,n=0)=>{for(const[r,s]of i.children.entries())t.push(["  ".repeat(n),r,s.shortcuts.size?` (${s.shortcuts.size})`:""].join("")),e(s,n+1);};return e(o),t.join(`
`)}class ae{constructor(t){this.listeners=[],this.value=t;}get(){return this.value}set(t){this.value=t,this.listeners.forEach(e=>e(t));}subscribe(t){return this.listeners.push(t),t(this.value),()=>this.unsubscribe(t)}unsubscribe(t){const e=this.listeners.indexOf(t);e>=0&&this.listeners.splice(e,1);}}function v(o){const{caseSensitive:t,modifierState:e}=o;let{base:i}=o;(!t||i.length>1)&&(i=i.toLowerCase()),i=oe[i]||i;const n=[...ee.filter(r=>e[r]),i].filter(Boolean).join("-");return `${t?"":"i:"}${n}`}function le(o){const t=o.split(/-(.)/),e=[t[0]];for(let i=1;i<t.length;i+=2)e.push(t[i]+t[i+1]);return e}function ce(o,t){const e=le(o),i=e.pop(),n={};for(const r of e){const s=te[r.toLowerCase()];if(!s)throw new Error(`Unknown modifier key: ${r}`);n[s]=true;}return t&&(t=!(n.a||n.s)),{base:i,modifierState:n,caseSensitive:t}}function de(o){return Array.isArray(o)?o:o.split(/\s+/)}function ue(o,t){return de(o).map(e=>ce(e,t))}function fe(o){return o.split("&&").map(t=>{if(t=t.trim(),!!t)return t[0]==="!"?{not:true,field:t.slice(1).trim()}:{not:false,field:t}}).filter(Boolean)}class C{constructor(t){this._context={},this._conditionData={},this._data=[],this._root=D(),this.sequence=new ae([]),this._timer=0,this._reset=()=>{this._cur=void 0,this.sequence.set([]),this._resetTimer();},this.handleKey=e=>{if(!e.key||I[e.key.toLowerCase()])return;this._resetTimer();const i=[v({base:e.key,modifierState:{c:e.ctrlKey,m:e.metaKey},caseSensitive:true}),v({base:e.code,modifierState:{c:e.ctrlKey,s:e.shiftKey,a:e.altKey,m:e.metaKey},caseSensitive:false}),v({base:e.key,modifierState:{c:e.ctrlKey,s:e.shiftKey,a:e.altKey,m:e.metaKey},caseSensitive:false})],n=this._handleKeyOnce(i,false);n&&(e.preventDefault(),n===2&&this._reset()),this._timer=window.setTimeout(this._reset,this.options.sequenceTimeout);},this.options=g({},C.defaultOptions,t);}_resetTimer(){this._timer&&(window.clearTimeout(this._timer),this._timer=0);}_addCondition(t){let e=this._conditionData[t];if(!e){const i=fe(t);e={count:0,value:i,result:this._evalCondition(i)},this._conditionData[t]=e;}e.count+=1;}_removeCondition(t){const e=this._conditionData[t];e&&(e.count-=1,e.count||delete this._conditionData[t]);}_evalCondition(t){return t.every(e=>{let i=this._context[e.field];return e.not&&(i=!i),i})}_checkShortcut(t){const e=t.condition&&this._conditionData[t.condition],i=!e||e.result;t.enabled!==i&&(t.enabled=i,this._enableShortcut(t));}_enableShortcut(t){(t.enabled?se:ne)(this._root,t.sequence,t);}enable(){this.disable(),document.addEventListener("keydown",this.handleKey);}disable(){document.removeEventListener("keydown",this.handleKey);}register(t,e,i){const{caseSensitive:n,condition:r}=g({caseSensitive:false},i),a={sequence:ue(t,n).map(d=>v(d)),condition:r,callback:e,enabled:false,caseSensitive:n};return r&&this._addCondition(r),this._checkShortcut(a),this._data.push(a),()=>{const d=this._data.indexOf(a);d>=0&&(this._data.splice(d,1),r&&this._removeCondition(r),a.enabled=false,this._enableShortcut(a));}}setContext(t,e){this._context[t]=e;for(const i of Object.values(this._conditionData))i.result=this._evalCondition(i.value);for(const i of this._data)this._checkShortcut(i);}_handleKeyOnce(t,e){var i,n;let r=this._cur;if((e||!r)&&(e=true,r=this._root),r){let a;for(const d of t)if(a=ie(r,[d]),a){this.sequence.set([...this.sequence.get(),d]);break}r=a;}this._cur=r;const[s]=[...((i=r)==null?void 0:i.shortcuts)||[]];if(!e&&!s&&!((n=r)!=null&&n.children.size))return this._reset(),this._handleKeyOnce(t,true);if(s){try{s.callback();}catch{}return 2}return this._cur?1:0}repr(){return re(this._root)}}C.defaultOptions={sequenceTimeout:500};let w;function he(){return w||(w=new C,w.enable()),w}const pe=(...o)=>he().register(...o);var G={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},ye=Object.keys(G).join("|"),me=new RegExp(ye,"g");const ge=o=>G[o],be=o=>o.replace(me,ge);var ve=typeof GM_addStyle<"u"?GM_addStyle:void 0,we=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,xe=typeof GM_getValue<"u"?GM_getValue:void 0,k=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,b=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,Ee=typeof GM_setValue<"u"?GM_setValue:void 0;(function(){if(globalThis.trustedTypes&&trustedTypes.createPolicy&&!trustedTypes.defaultPolicy){const o=t=>t;trustedTypes.createPolicy("default",{createHTML:o,createScriptURL:o,createScript:o});}})();const E={};let P=document.location.href;const Ce={"Daglig leder":"CEO","Styrets leder":"Chairman",Styremedlem:"Board Member",Varamedlem:"Deputy Board Member",Nestleder:"Deputy Chairman","Verkställande direktör":"CEO",Ordförande:"Chairman",Ledamot:"Board Member",Suppleant:"Deputy Board Member","Extern verkställande direktör":"CEO","Extern vice verkställande direktör":"Deputy CEO",Owner:"owner",Founder:"founder",gründer:"founder",salgssjef:"Sales Manager",salgsleder:"Sales Manager",salgsrepresentant:"Sales Representative","salgs representant":"Sales Representative",markedssjef:"Marketing Manager",Avdelingsleder:"Head of Department",Gruppeleder:"Team Leader",Rådgiver:"Adviser",Analytiker:"Analyst","Member of the Board":"Board Member",Styreleder:"Chairman","Administrerende direktør":"CEO","Adm. dir.":"CEO",prosjektleder:"Project Manager",Prosjektleder:"Project Manager","Teknisk sjef":"Technical Manager",Salgsdirektor:"Sales Director",Avdelingssjef:"Head of Department",Økonomisjef:"Finance Manager",Okonomisjef:"Finance Manager"},ke={AE:"Ae"},T=()=>xe("apiKey")??"",_e=()=>{const o=T();return o.length===152?true:(console.log("Invalid API key length:",o.length),false)};k(`${_e()?"😎":"😞"} Set API key`,()=>{const o=prompt("API key:",T());Ee("apiKey",o),console.log("New API key set.");});ve(we("toastifyCSS")+"div.toastify { margin-top: 120px; width: inherit; font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif; }");pe("a-c-c",()=>{const o=O();if(o===void 0){console.log("No profile found.");return}const t=_({text:`👍 ${o.name}: ${o.totalExp} positions`,duration:1e4,gravity:"bottom",stopOnFocus:true,style:{padding:"5px",background:"rgb(0, 65, 130, 0.9)",color:"#ddd","font-weight":"500","border-radius":"50px","min-width":"300px","text-align":"center","font-variant":"small-caps"},onClick:()=>{b(o?.copyStr??""),t.hideToast();}});t.showToast(),b(o?.copyStr??"");});const j=()=>document.location.pathname.split("/")?.at(2),O=()=>{const o=j();if(o===void 0)return;Object.prototype.hasOwnProperty.call(E,`${o}`)||(console.log("Creating empty profile cache"),E[o]={totalExp:0,copyStr:""});const t=E?.[o]??void 0;return console.log("Current profile:",t),t},A=async()=>{if(console.log("fetchData()"),!document.location.href.includes("linkedin.com/in")||document.location.href.includes(".html"))return;const o=T();if(o===""){_({text:"😞 Missing API key",duration:3e3,gravity:"bottom"}).showToast();return}const t=O();if(t===void 0){console.log("No profile found.");return}if(t.copyStr.length>0){K(),console.log("Already scraped.");return}const e=j();if(e===void 0){console.log("Invalid profile URL");return}const i=decodeURIComponent(e);if(i.length>0)console.log("Slug:",i);else {console.log("No slug specified");return}console.log("Start fetching:",`https://www.linkedin.com/in/${i}/`);const n=await X(`https://www.linkedin.com/in/${i}/`,{method:"GET",headers:{"Content-Type":"text/html; charset=utf-8","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",Cookie:`li_at=${o}`,"Accept-Encoding":"gzip, deflate, br"}});if(!n.ok){console.error("Error:",n.status,n.statusText);return}const r=await n.text();let s;const a=new globalThis.DOMParser;try{s=a.parseFromString(r,"text/html");}catch(l){console.log("Err:",l);return}console.log("Success:",s,n,r);const d=s?.querySelector("section.experience-container > ol");let c="";console.log("doc:",s),console.log("exp:",d),console.log("exp1:",s?.querySelector("section")),console.log("exp2:",s?.querySelector("body"));for(const l of d?.querySelectorAll(":scope > li.profile-entity-lockup")??[]){let u=l.querySelector("a div.body-medium-bold > span")?.textContent?.trim()??"";const f=l.querySelector("a div.body-small > span")?.textContent?.trim()??"",h=l.querySelectorAll("div.body-small:nth-child(3) > span.body-small"),y=`${h[0]?.textContent??""}${h[1]?.textContent??""}`;if(f==="")for(const m of l.querySelectorAll("li.profile-entity-lockup")??[]){u===""&&(u=m.querySelector("li div.body-small")?.textContent?.trim()??"");const p=m.querySelector("li div.body-medium-bold:nth-child(1)")?.textContent?.trim()??"",U=m.querySelectorAll("li div.body-small > span.body-small"),B=`${U[0]?.textContent??""}${U[1]?.textContent??""}`;c+=R(u,p,B);}else c+=R(u,f,y);}if(c===""){console.log("Проблем с извличането. exp:",d);return}t.name=s?.querySelector("h1.heading-large")?.textContent?.trim()??"Unknown",t.copyStr=Se(c),t.totalExp=t.copyStr.split(`\r
`).length-1,K(),k(`${t.name}: Copy all ${t.totalExp} positions`,()=>{b(t.copyStr);}),k(`${t.name}: Retry scraping`,()=>{A(),b(t.copyStr);});},R=(o,t,e)=>{o.includes("·")&&(o=o.slice(0,Math.max(0,o.indexOf("·"))).trim()),e.includes("·")&&(e=e.slice(0,Math.max(0,e.indexOf("·"))).trim()),t=t.replaceAll(/[_]+/g,""),e=e.replaceAll(/[^0-9-]+/g,""),e=e.replace(/(\d{4})-\1/,"$1");let i=`- ${o.trim()}, ${t.trim()}, ${e.trim()??"n/a"}`;return i=i.replaceAll(/\s+/g," ")+`\r
`,i},Se=o=>{for(const[t,e]of Object.entries(Ce))o=o.replaceAll(t,e);o=be(o);for(const[t,e]of Object.entries(ke))o=o.replaceAll(t,e);return o},K=()=>{console.log("🍺 Profiles info:",E);const o=O();if(o===void 0){console.log("No profile found.");return}console.log("Text is ready:",o.copyStr);const t=_({text:`<b><i>${o.name}</i></b>: ${o.totalExp} exp.`,duration:1e4,stopOnFocus:true,escapeMarkup:false,close:false,gravity:"top",position:"right",style:{padding:"10px",background:"rgb(5, 118, 66, 0.8)",color:"#ddd","font-weight":"500","border-radius":"50px","min-width":"300px","text-align":"center","font-variant":"small-caps",selector:"div.application-outlet"},onClick:function(){b(o.copyStr),t.hideToast();}});t.showToast();};window.addEventListener("load",()=>{new MutationObserver(()=>{P!==document.location.href&&(P=document.location.href,console.log("URL Changed!"),A());}).observe(document.body,{subtree:true,childList:true});});const Te=history.pushState,Oe=history.replaceState;history.pushState=function(...o){Te.apply(this,o),M();};history.replaceState=function(...o){Oe.apply(this,o),M();};function M(){console.log("URL changed:",globalThis.location.href);}globalThis.addEventListener("popstate",M);A();

})();