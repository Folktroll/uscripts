// ==UserScript==
// @name       [FT] LinkedIn
// @namespace  https://github.com/folktroll/
// @version    25.3.16.1228
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
// @run-at     document-end
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const i=document.createElement("style");i.textContent=t,document.head.append(i)})(" .toastify{padding:12px 20px;color:#fff;display:inline-block;box-shadow:0 3px 6px -1px #0000001f,0 10px 36px -4px #4d60e84d;background:-webkit-linear-gradient(315deg,#73a5ff,#5477f5);background:linear-gradient(135deg,#73a5ff,#5477f5);position:fixed;opacity:0;transition:all .4s cubic-bezier(.215,.61,.355,1);border-radius:2px;cursor:pointer;text-decoration:none;max-width:calc(50% - 20px);z-index:2147483647}.toastify.on{opacity:1}.toast-close{background:transparent;border:0;color:#fff;cursor:pointer;font-family:inherit;font-size:1em;opacity:.4;padding:0 5px}.toastify-right{right:15px}.toastify-left{left:15px}.toastify-top{top:-150px}.toastify-bottom{bottom:-150px}.toastify-rounded{border-radius:25px}.toastify-avatar{width:1.5em;height:1.5em;margin:-7px 5px;border-radius:2px}.toastify-center{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content;max-width:-moz-fit-content}@media only screen and (max-width: 360px){.toastify-right,.toastify-left{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content}} ");

(function () {
	'use strict';

	function G(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var k={exports:{}};var q=k.exports,A;function D(){return A||(A=1,function(i){(function(t,e){i.exports?i.exports=e():t.Toastify=e();})(q,function(t){var e=function(o){return new e.lib.init(o)},s="1.12.0";e.defaults={oldestFirst:true,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:false,close:false,gravity:"toastify-top",positionLeft:false,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:true,onClick:function(){},offset:{x:0,y:0},escapeMarkup:true,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:s,constructor:e,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||e.defaults.text,this.options.node=o.node||e.defaults.node,this.options.duration=o.duration===0?0:o.duration||e.defaults.duration,this.options.selector=o.selector||e.defaults.selector,this.options.callback=o.callback||e.defaults.callback,this.options.destination=o.destination||e.defaults.destination,this.options.newWindow=o.newWindow||e.defaults.newWindow,this.options.close=o.close||e.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=o.positionLeft||e.defaults.positionLeft,this.options.position=o.position||e.defaults.position,this.options.backgroundColor=o.backgroundColor||e.defaults.backgroundColor,this.options.avatar=o.avatar||e.defaults.avatar,this.options.className=o.className||e.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?e.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||e.defaults.onClick,this.options.offset=o.offset||e.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||e.defaults.ariaLive,this.options.style=o.style||e.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw "Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===true?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===true?o.appendChild(l):o.insertAdjacentElement("afterbegin",l);}if(this.options.close===true){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(h){h.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue);}.bind(this));var d=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===true)&&d>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c);}if(this.options.stopOnFocus&&this.options.duration>0){var u=this;o.addEventListener("mouseover",function(h){window.clearTimeout(o.timeOutValue);}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){u.removeElement(o);},u.options.duration);});}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(h){h.stopPropagation(),this.options.newWindow===true?window.open(this.options.destination,"_blank"):window.location=this.options.destination;}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(h){h.stopPropagation(),this.options.onClick();}.bind(this)),typeof this.options.offset=="object"){var p=r("x",this.options),f=r("y",this.options),m=this.options.position=="left"?p:"-"+p,v=this.options.gravity=="toastify-top"?f:"-"+f;o.style.transform="translate("+m+","+v+")";}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw "Root element is not defined";var a=e.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement);}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement);},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),e.reposition();}.bind(this),400);}},e.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),d,u=0;u<c.length;u++){n(c[u],"toastify-top")===true?d="toastify-top":d="toastify-bottom";var p=c[u].offsetHeight;d=d.substr(9,d.length-1);var f=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(c[u].style[d]=l[d]+"px",l[d]+=p+f):n(c[u],"toastify-left")===true?(c[u].style[d]=o[d]+"px",o[d]+=p+f):(c[u].style[d]=a[d]+"px",a[d]+=p+f);}return this};function r(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function n(o,a){return !o||typeof a!="string"?false:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return e.lib.init.prototype=e.lib,e});}(k)),k.exports}var R=D();const O=G(R);function y(){return y=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)({}).hasOwnProperty.call(e,s)&&(i[s]=e[s]);}return i},y.apply(null,arguments)}const T=navigator.userAgent.includes("Macintosh"),$=["m","c","s","a"],I={ctrl:"c",control:"c",shift:"s",alt:"a",meta:"m",cmd:"m"},V=y({},I,{c:"c",s:"s",a:"a",m:"m",cm:T?"m":"c",ctrlcmd:T?"m":"c"}),z={arrowup:"up",arrowdown:"down",arrowleft:"left",arrowright:"right",cr:"enter",escape:"esc"," ":"space"};function P(){return {children:new Map,shortcuts:new Set}}function F(i,t,e){let s=i;for(const r of t){let n=s.children.get(r);n||(n=P(),s.children.set(r,n)),s=n;}s.shortcuts.add(e);}function B(i,t){let e=i;for(const s of t)if(e=e.children.get(s),!e)break;return e}function H(i,t,e){let s=i;const r=[s];for(const o of t){if(s=s.children.get(o),!s)return;r.push(s);}e?s.shortcuts.delete(e):s.shortcuts.clear();let n=r.length-1;for(;n>0&&(s=r[n],!(s.shortcuts.size||s.children.size));)r[n-1].children.delete(t[n-1]),n-=1;}function W(i){const t=[],e=(s,r=0)=>{for(const[n,o]of s.children.entries())t.push(["  ".repeat(r),n,o.shortcuts.size?` (${o.shortcuts.size})`:""].join("")),e(o,r+1);};return e(i),t.join(`
`)}class X{constructor(t){this.listeners=[],this.value=t;}get(){return this.value}set(t){this.value=t,this.listeners.forEach(e=>e(t));}subscribe(t){return this.listeners.push(t),t(this.value),()=>this.unsubscribe(t)}unsubscribe(t){const e=this.listeners.indexOf(t);e>=0&&this.listeners.splice(e,1);}}function b(i){const{caseSensitive:t,modifierState:e}=i;let{base:s}=i;(!t||s.length>1)&&(s=s.toLowerCase()),s=z[s]||s;const r=[...$.filter(n=>e[n]),s].filter(Boolean).join("-");return `${t?"":"i:"}${r}`}function Y(i){const t=i.split(/-(.)/),e=[t[0]];for(let s=1;s<t.length;s+=2)e.push(t[s]+t[s+1]);return e}function Z(i,t){const e=Y(i),s=e.pop(),r={};for(const n of e){const o=V[n.toLowerCase()];if(!o)throw new Error(`Unknown modifier key: ${n}`);r[o]=true;}return t&&(t=!(r.a||r.s)),{base:s,modifierState:r,caseSensitive:t}}function J(i){return Array.isArray(i)?i:i.split(/\s+/)}function Q(i,t){return J(i).map(e=>Z(e,t))}function ee(i){return i.split("&&").map(t=>{if(t=t.trim(),!!t)return t[0]==="!"?{not:true,field:t.slice(1).trim()}:{not:false,field:t}}).filter(Boolean)}class C{constructor(t){this._context={},this._conditionData={},this._data=[],this._root=P(),this.sequence=new X([]),this._timer=0,this._reset=()=>{this._cur=void 0,this.sequence.set([]),this._resetTimer();},this.handleKey=e=>{if(!e.key||I[e.key.toLowerCase()])return;this._resetTimer();const s=[b({base:e.key,modifierState:{c:e.ctrlKey,m:e.metaKey},caseSensitive:true}),b({base:e.code,modifierState:{c:e.ctrlKey,s:e.shiftKey,a:e.altKey,m:e.metaKey},caseSensitive:false}),b({base:e.key,modifierState:{c:e.ctrlKey,s:e.shiftKey,a:e.altKey,m:e.metaKey},caseSensitive:false})],r=this._handleKeyOnce(s,false);r&&(e.preventDefault(),r===2&&this._reset()),this._timer=window.setTimeout(this._reset,this.options.sequenceTimeout);},this.options=y({},C.defaultOptions,t);}_resetTimer(){this._timer&&(window.clearTimeout(this._timer),this._timer=0);}_addCondition(t){let e=this._conditionData[t];if(!e){const s=ee(t);e={count:0,value:s,result:this._evalCondition(s)},this._conditionData[t]=e;}e.count+=1;}_removeCondition(t){const e=this._conditionData[t];e&&(e.count-=1,e.count||delete this._conditionData[t]);}_evalCondition(t){return t.every(e=>{let s=this._context[e.field];return e.not&&(s=!s),s})}_checkShortcut(t){const e=t.condition&&this._conditionData[t.condition],s=!e||e.result;t.enabled!==s&&(t.enabled=s,this._enableShortcut(t));}_enableShortcut(t){(t.enabled?F:H)(this._root,t.sequence,t);}enable(){this.disable(),document.addEventListener("keydown",this.handleKey);}disable(){document.removeEventListener("keydown",this.handleKey);}register(t,e,s){const{caseSensitive:r,condition:n}=y({caseSensitive:false},s),a={sequence:Q(t,r).map(l=>b(l)),condition:n,callback:e,enabled:false,caseSensitive:r};return n&&this._addCondition(n),this._checkShortcut(a),this._data.push(a),()=>{const l=this._data.indexOf(a);l>=0&&(this._data.splice(l,1),n&&this._removeCondition(n),a.enabled=false,this._enableShortcut(a));}}setContext(t,e){this._context[t]=e;for(const s of Object.values(this._conditionData))s.result=this._evalCondition(s.value);for(const s of this._data)this._checkShortcut(s);}_handleKeyOnce(t,e){var s,r;let n=this._cur;if((e||!n)&&(e=true,n=this._root),n){let a;for(const l of t)if(a=B(n,[l]),a){this.sequence.set([...this.sequence.get(),l]);break}n=a;}this._cur=n;const[o]=[...((s=n)==null?void 0:s.shortcuts)||[]];if(!e&&!o&&!((r=n)!=null&&r.children.size))return this._reset(),this._handleKeyOnce(t,true);if(o){try{o.callback();}catch{}return 2}return this._cur?1:0}repr(){return W(this._root)}}C.defaultOptions={sequenceTimeout:500};let w;function te(){return w||(w=new C,w.enable()),w}const oe=(...i)=>te().register(...i);var U={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},ie=Object.keys(U).join("|"),se=new RegExp(ie,"g");const ne=i=>U[i],re=i=>i.replace(se,ne);var ae=typeof GM<"u"?GM:void 0,le=typeof GM_addStyle<"u"?GM_addStyle:void 0,ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,de=typeof GM_getValue<"u"?GM_getValue:void 0,x=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,g=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,ue=typeof GM_setValue<"u"?GM_setValue:void 0;const _={};let N=document.location.href;const fe={"Daglig leder":"CEO","Styrets leder":"Chairman",Styremedlem:"Board Member",Varamedlem:"Deputy Board Member",Nestleder:"Deputy Chairman","Verkställande direktör":"CEO",Ordförande:"Chairman",Ledamot:"Board Member",Suppleant:"Deputy Board Member","Extern verkställande direktör":"CEO","Extern vice verkställande direktör":"Deputy CEO",Owner:"owner",Founder:"founder",gründer:"founder",salgssjef:"Sales Manager",salgsleder:"Sales Manager",salgsrepresentant:"Sales Representative","salgs representant":"Sales Representative",markedssjef:"Marketing Manager",Avdelingsleder:"Head of Department",Gruppeleder:"Team Leader",Rådgiver:"Adviser",Analytiker:"Analyst","Member of the Board":"Board Member",Styreleder:"Chairman","Administrerende direktør":"CEO","Adm. dir.":"CEO",prosjektleder:"Project Manager",Prosjektleder:"Project Manager","Teknisk sjef":"Technical Manager",Salgsdirektor:"Sales Director",Avdelingssjef:"Head of Department",Økonomisjef:"Finance Manager",Okonomisjef:"Finance Manager"},pe={AE:"Ae"},S=()=>de("apiKey")??"",he=()=>{const i=S();return i.length>64&&(i.match(/_/g)??[]).length>0?true:(console.warn("Invalid API key:",i),false)};x(`${he()?"😎":"😞"} Set API key`,()=>{const i=prompt("API key:",S());ue("apiKey",i),console.log("New API key set.");});le(ce("toastifyCSS")+"div.toastify { margin-top: 120px; width: inherit; font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif; }");oe("a-c-c",()=>{const i=E();if(i===void 0){console.log("No profile found.");return}const t=O({text:`👍 ${i.name}: ${i.totalExp} positions`,duration:1e4,gravity:"bottom",stopOnFocus:true,style:{padding:"5px",background:"rgb(0, 65, 130, 0.9)",color:"#ddd","font-weight":"500","border-radius":"50px","min-width":"300px","text-align":"center","font-variant":"small-caps"},onClick:()=>{g(i?.copyStr??""),t.hideToast();}});t.showToast(),g(i?.copyStr??"");});const j=()=>document.location.pathname.split("/")?.at(2),E=()=>{const i=j();if(i===void 0)return;Object.prototype.hasOwnProperty.call(_,`${i}`)||(console.log("Creating empty profile cache"),_[i]={totalExp:0,copyStr:""});const t=_?.[i]??void 0;return console.log("Current profile:",t),t},M=()=>{const i=S();if(i===""){O({text:"😞 Missing API key",duration:3e3,gravity:"bottom"}).showToast();return}else console.log("API key:",i);const t=E();if(t===void 0){console.log("No profile found.");return}if(t.copyStr.length>0){K(),console.log("Already scraped.");return}const e=j();if(e===void 0){console.log("Invalid profile URL");return}const s=decodeURIComponent(e);if(s.length>0)console.log("Slug:",s);else {console.log("No slug specified");return}ae.xmlHttpRequest({method:"GET",url:`https://www.linkedin.com/in/${s}/`,headers:{"Content-Type":"text/html; charset=utf-8","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",Cookie:`li_at=${i}`,"Accept-Encoding":"gzip, deflate, br"},onload:r=>{const o=new DOMParser().parseFromString(r?.responseText??"","text/html"),a=o?.querySelector("section.experience-container > ol");let l="";for(const c of a?.querySelectorAll(":scope > li.profile-entity-lockup")??[]){const d=c.querySelector("a div.body-medium-bold > span")?.textContent?.trim()??"",u=c.querySelector("a div.body-small > span")?.textContent?.trim()??"",p=c.querySelector("div.body-small:nth-child(3)")?.textContent?.replace(/\s+/g," ")?.trim()??"";if(u==="")for(const f of c.querySelectorAll("li.role-container")??[]){const m=f.querySelector("div.body-small-bold > span")?.textContent?.trim()??"",v=f.querySelectorAll("div.body-small > span.body-small"),h=`${v[0]?.textContent??""}${v[1]?.textContent??""}`;l+=L(d,m,h);}else l+=L(d,u,p);}if(l===""){console.log("Проблем с извличането. exp:",a);return}t.name=o?.querySelector("h1.heading-large")?.textContent?.trim()??"Unknown",t.copyStr=me(l),t.totalExp=t.copyStr.split(`\r
`).length-1,K(),x(`${t.name}: Copy all ${t.totalExp} positions`,()=>{g(t.copyStr);}),x(`${t.name}: Retry scraping`,()=>{M(),g(t.copyStr);});}});},L=(i,t,e)=>{i.includes("·")&&(i=i.slice(0,Math.max(0,i.indexOf("·"))).trim()),e.includes("·")&&(e=e.slice(0,Math.max(0,e.indexOf("·"))).trim()),t=t.replaceAll(/[_]+/g,""),e=e.replaceAll(/[^0-9-]+/g,""),e=e.replace(/(\d{4})-\1/,"$1");let s=`- ${i.trim()}, ${t.trim()}, ${e.trim()??"n/a"}`;return s=s.replaceAll(/\s+/g," ")+`\r
`,s},me=i=>{for(const[t,e]of Object.entries(fe))i=i.replaceAll(t,e);i=re(i);for(const[t,e]of Object.entries(pe))i=i.replaceAll(t,e);return i},K=()=>{console.log("🍺 Profiles info:",_);const i=E();if(i===void 0){console.log("No profile found.");return}console.log("Text is ready:",i.copyStr);const t=O({text:`<b><i>${i.name}</i></b>: ${i.totalExp} exp.`,duration:1e4,stopOnFocus:true,escapeMarkup:false,close:false,gravity:"top",position:"right",style:{padding:"10px",background:"rgb(5, 118, 66, 0.8)",color:"#ddd","font-weight":"500","border-radius":"50px","min-width":"300px","text-align":"center","font-variant":"small-caps",selector:"div.application-outlet"},onClick:function(){g(i.copyStr),t.hideToast();}});t.showToast();};window.addEventListener("load",()=>{new MutationObserver(()=>{document.location.href.includes("linkedin.com/in")&&N!==document.location.href&&(N=document.location.href,console.log("URL Changed!"),M());}).observe(document.body,{subtree:true,childList:true});});M();

})();