var X=Object.defineProperty;var ee=(i,e,t)=>e in i?X(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var l=(i,e,t)=>(ee(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();let R=(i,e)=>{var s;let t=new TextEncoder().encode(i);return i=new TextDecoder().decode(t.slice(0,e)),((s=i.at(-1))==null?void 0:s.charCodeAt(0))===65533?i.slice(0,-1):i};class x{constructor(e){l(this,"___valueListeners",[]);l(this,"___value");l(this,"info");this.___value=e}addListener(e,t){if(this.___valueListeners.push(e),t){let s=this.get;s instanceof Promise?s.then(e):e(s)}return e}removeListener(e){let t=this.___valueListeners.indexOf(e);return t!=-1&&this.___valueListeners.splice(t,1),e}get get(){return this.___value}set set(e){this.___value!==e&&(this.___value=e,this.___update())}___update(){if(this.___valueListeners)for(let e=0,t=this.___valueListeners.length;e<t;e++)try{this.___valueListeners[e](this.___value)}catch(s){console.warn("Failed while calling value listeners ",s)}}compare(e){let t=this.get;return t instanceof Promise?t.then(s=>e!==s):e!==t}get inUse(){return this.___valueListeners.length!==0}hasListener(e){return this.___valueListeners.indexOf(e)!==-1}toJSON(){return this.___value}}class q extends x{constructor(t,s){super(t);l(this,"___limiters");l(this,"___limitersListeners",[]);this.___limiters=s}addLimiterListener(t,s){return this.___limitersListeners.push(t),s&&t(this),t}removeLimiterListener(t){let s=this.___limitersListeners.indexOf(t);return s!=-1&&this.___limitersListeners.splice(s,1),t}___updateLimiter(){if(this.___limitersListeners)for(let t=0,s=this.___limitersListeners.length;t<s;t++)try{this.___limitersListeners[t](this)}catch(n){console.warn("Failed while calling value listeners ",n)}}get limiters(){return this.___limiters}set limiters(t){t?this.___limiters=t:delete this.___limiters,this.___updateLimiter()}checkLimit(t){if(this.___limiters){for(let s=0;s<this.___limiters.length;s++)if(this.___limiters[s].func(t))return!1}return!0}checkLimitReason(t){if(this.___limiters){for(let s=0;s<this.___limiters.length;s++)if(this.___limiters[s].func(t))switch(typeof this.___limiters[s].reason){case"string":return this.___limiters[s].reason;case"function":return this.___limiters[s].reason(t)}}return!0}set set(t){t===this.___value||!this.checkLimit(t)||(this.___value=t,this.___update())}}class k extends q{constructor(t,s=-1/0,n=1/0,r,a){super(t,a);l(this,"_min");l(this,"_max");l(this,"_step");l(this,"halfStep",0);this._min=s,this._max=n,r&&(this._step=r,this.halfStep=r/2)}get min(){return this._min}set min(t){this._min=t;let s=Math.max(this._min,this.___value);this.___value!==s&&(this.___value=s,this.___update()),this.___updateLimiter()}get max(){return this._max}set max(t){this._max=t;let s=Math.min(this._max,this.___value);this.___value!==s&&(this.___value=s,this.___update()),this.___updateLimiter()}get step(){return this._step}set step(t){if(t){this._step=t,this.halfStep=t/2;let s=this.___value%this._step,n=s>this.halfStep?this.___value+(this._step-s):this.___value-s;n!==this.___value&&(this.___value=n,this.___update())}else delete this._step,this.halfStep=0;this.___updateLimiter()}set set(t){if(this._step){let s=t%this._step;t=s>this.halfStep?t+(this._step-s):t-s}t=Math.min(this._max,Math.max(this._min,t)),t!==this.___value&&this.checkLimit(t)&&(this.___value=t,this.___update())}}class S extends q{constructor(t,s,n,r,a){super(t,a);l(this,"_maxLength");l(this,"_maxByteLength");l(this,"___enums");this._maxLength=n,this._maxByteLength=r,this.___enums=s}get enums(){return this.___enums}set enums(t){if(t){if(this.___enums=t,!this.checkEnum(this.___value))for(const s in this.___enums){this.___value=s,this.___update();return}}else delete this.___enums;this.___updateLimiter()}get enum(){if(this.___enums)return this.___enums[this.___value]}checkEnum(t){return!this.___enums||t in this.___enums}get maxLength(){return this._maxLength}set maxLength(t){this._maxLength=t,this._maxLength&&this.___value.length>this._maxLength&&(this.___value=this.___value.slice(0,this._maxLength),this.___update()),this.___updateLimiter()}get maxByteLength(){return this._maxByteLength}set maxByteLength(t){if(this._maxByteLength=t,this._maxByteLength){let s=R(this.___value,this._maxByteLength);this.___value!==s&&(this.___value=s,this.___update())}this.___updateLimiter()}set set(t){this._maxLength&&t.length>this._maxLength&&(t=t.slice(0,this._maxLength)),this._maxByteLength&&(t=R(t,this._maxByteLength)),t!==this.___value&&this.checkLimit(t)&&this.checkEnum(t)&&(this.___value=t,this.___update())}}var te=Object.defineProperty,se=(i,e,t)=>e in i?te(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,L=(i,e,t)=>(se(i,typeof e!="symbol"?e+"":e,t),t);let W={},ie=(i,e,t)=>(W[i]=new I(i,e,t),W[i]);class I{constructor(e,t,s){L(this,"pathID"),L(this,"settings",{}),L(this,"subGroups",{}),L(this,"name"),L(this,"description"),this.pathID=e,this.name=t,this.description=s}makeSubGroup(e,t,s){if(e in this.subGroups){console.warn("Sub group already registered "+e);return}else return this.subGroups[e]=new I(this.pathID+"/"+e,t,s)}makeBooleanSetting(e,t,s,n){if(e in this.settings)throw new Error("Settings already registered "+e);let r=localStorage[this.pathID+"/"+e];if(r)var a=new x(JSON.parse(r));else if(typeof n=="boolean")var a=new x(n);else{var a=new x(!1);n.then(u=>{a.set=u})}return a.info={name:t,description:s},a.addListener(o=>{localStorage[this.pathID+"/"+e]=JSON.stringify(o)},!r),this.settings[e]=a}makeNumberSetting(e,t,s,n,r,a,o,u){if(e in this.settings)throw new Error("Settings already registered "+e);let m=localStorage[this.pathID+"/"+e];if(m)var h=new k(JSON.parse(m),r,a,o,u);else if(typeof n=="number")var h=new k(n,r,a,o,u);else{var h=new k(NaN,r,a,o,u);n.then(D=>{h.set=D})}return h.info={name:t,description:s},h.addListener(C=>{localStorage[this.pathID+"/"+e]=JSON.stringify(C)},!m),this.settings[e]=h}makeStringSetting(e,t,s,n,r,a,o,u){if(e in this.settings)throw new Error("Settings already registered "+e);let m=localStorage[this.pathID+"/"+e];if(m)var h=new S(JSON.parse(m),r,a,o,u);else if(typeof n=="string")var h=new S(n,r,a,o,u);else{var h=new S("",r,a,o,u);n.then(D=>{h.set=D})}return h.info={name:t,description:s},h.addListener(C=>{localStorage[this.pathID+"/"+e]=JSON.stringify(C)},!m),this.settings[e]=h}}class ne{constructor(e,t,s){l(this,"type");l(this,"target");l(this,"data");this.type=e,this.target=t,this.data=s}}class re{constructor(){l(this,"target");l(this,"eventHandler_ListenerStorage",{})}on(e,t){let s=this.eventHandler_ListenerStorage[e];return s?s.indexOf(t)==-1?s.push(t):console.warn("Listener already in handler"):this.eventHandler_ListenerStorage[e]=[t],t}once(e,t){return this.on(e,function(s){return t(s),!0}),t}off(e,t){let s=this.eventHandler_ListenerStorage[e];if(s){let n=s.indexOf(t);n!=-1?s.splice(n,1):console.warn("Listener not in handler")}return t}emit(e,t){let s=this.eventHandler_ListenerStorage[e];if(s&&s.length>0){let n=Object.freeze(new ne(e,this.target||this,t));s.length>1&&(s=[...s]);for(let r=0,a=s.length;r<a;r++)try{s[r](n)&&(s.splice(r,1),a--,r--)}catch(o){console.warn("Failed while dispatching event",o)}}}clear(e){this.eventHandler_ListenerStorage[e]=[]}inUse(e){var t;return Boolean((t=this.eventHandler_ListenerStorage[e])==null?void 0:t.length)}has(e,t){var s;return Boolean(((s=this.eventHandler_ListenerStorage[e])==null?void 0:s.indexOf(t))!==-1)}amount(e){var t;return((t=this.eventHandler_ListenerStorage[e])==null?void 0:t.length)||0}get eventsUserOnly(){return this}}let K=new re,H=K.eventsUserOnly,O=[document],ae=document;K.target={documents:O,mainDocument:ae};let _=i=>{for(let e=0;e<O.length;e++)i(O[e])};var le=Object.defineProperty,he=(i,e,t)=>e in i?le(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,b=(i,e,t)=>(he(i,typeof e!="symbol"?e+"":e,t),t);const oe="@chocolatelibui/theme";let w=ie(oe,"Theme/UI","Settings for UI elements and and color themes"),F={},ce={light:{name:"Light",description:"Don't set touch mode automatically"},dark:{name:"Dark",description:"Change touch mode on first ui interaction"}},g=w.makeStringSetting("theme","Theme","Color theme of UI",window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",ce),ue=w.makeBooleanSetting("autoTheme","Automatic Theme Change","Toggle for automatically changing theme",!0),Y=(i,e,t)=>(F[i]=new T(i,e,t),F[i]);class T{constructor(e,t,s){b(this,"pathID"),b(this,"variables",{}),b(this,"subGroups",{}),b(this,"name"),b(this,"description"),this.pathID=e,this.name=t,this.description=s}makeSubGroup(e,t,s){if(e in this.subGroups)throw new Error("Sub group already registered "+e);return this.subGroups[e]=new T(this.pathID+"/"+e,t,s)}makeVariable(e,t,s,n,r,a,o){if(e in this.variables)throw new Error("Settings already registered "+e);let u="--"+this.pathID+"/"+e,m=this.variables[u]={name:t,desc:s,vars:{light:n,dark:r}};_(h=>{h.documentElement.style.setProperty(u,m.vars[g.get])})}applyThemes(e,t){for(const s in this.variables)e.setProperty(s,this.variables[s].vars[t]);for(const s in this.subGroups)this.subGroups[s].applyThemes(e,t)}}let V=(i,e)=>{for(const t in F)F[t].applyThemes(i.documentElement.style,e)};g.addListener(i=>{_(e=>{V(e,i)})});window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",i=>{ue.get&&(g.set=i.matches?"dark":"light")});H.on("documentAdded",i=>{V(i.data,g.get)});_(i=>{V(i,g.get)});let de={off:{name:"Off",description:"Don't set touch mode automatically"},first:{name:"First Interaction",description:"Change touch mode on first ui interaction"},every:{name:"Every Interaction",description:"Change touch mode on every ui interaction"}},y=w.makeBooleanSetting("touch","Touch Mode","Toggle between touch friendly or mouse friendly UI",!1),M=w.makeStringSetting("autoTouch","Automatic Touch Mode","Mode for automatically changing touch mode","every",de);y.addListener(i=>{_(e=>{A(e,i)})});M.addListener(i=>{_(e=>{G(e,i)})});let A=(i,e)=>{e?i.documentElement.classList.add("touch"):i.documentElement.classList.remove("touch")},B=i=>{switch(i.pointerType){case"touch":y.set=!0;break;case"mouse":case"pen":default:y.set=!1;break}},N=i=>{B(i),_(e=>{e.documentElement.removeEventListener("pointerdown",N)})},G=(i,e)=>{switch(i.documentElement.removeEventListener("pointerdown",N),i.documentElement.removeEventListener("pointerdown",B),e){case"first":i.documentElement.addEventListener("pointerdown",N,{passive:!0});break;case"every":i.documentElement.addEventListener("pointerdown",B,{passive:!0});break}};H.on("documentAdded",i=>{A(i.data,y.get),G(i.data,M.get)});_(i=>{A(i,y.get),G(i,M.get)});let me=w.makeNumberSetting("scale","UI Scale","The scale of the UI",1,.2,4),$=16;me.addListener(i=>{$=i*16,_(e=>{e.documentElement.style.fontSize=$+"px"})});H.on("documentAdded",i=>{i.data.documentElement.style.fontSize=$+"px"});_(i=>{i.documentElement.style.fontSize=$+"px"});let E={50:"#FAFAFA",100:"#F5F5F5",200:"#EEEEEE",300:"#E0E0E0",400:"#BDBDBD",500:"#9E9E9E",600:"#757575",700:"#616161",800:"#424242",900:"#212121"};class _e{constructor(e,t,s){l(this,"type");l(this,"target");l(this,"data");this.type=e,this.target=t,this.data=s}}class pe{constructor(){l(this,"target");l(this,"eventHandler_ListenerStorage",{})}on(e,t){let s=this.eventHandler_ListenerStorage[e];return s?s.indexOf(t)==-1?s.push(t):console.warn("Listener already in handler"):this.eventHandler_ListenerStorage[e]=[t],t}once(e,t){return this.on(e,function(s){return t(s),!0}),t}off(e,t){let s=this.eventHandler_ListenerStorage[e];if(s){let n=s.indexOf(t);return n!=-1?s.splice(n,1):console.warn("Listener not in handler"),t}}emit(e,t){let s=this.eventHandler_ListenerStorage[e];if(s&&s.length>0){let n=Object.freeze(new _e(e,this.target||this,t));s.length>1&&(s=[...s]);for(let r=0,a=s.length;r<a;r++)try{s[r](n)&&(s.splice(r,1),a--,r--)}catch(o){console.warn("Failed while dispatching event",o)}}}clear(e){this.eventHandler_ListenerStorage[e]=[]}inUse(e){var t;return Boolean((t=this.eventHandler_ListenerStorage[e])==null?void 0:t.length)}has(e,t){var s;return Boolean(((s=this.eventHandler_ListenerStorage[e])==null?void 0:s.indexOf(t))!==-1)}amount(e){var t;return((t=this.eventHandler_ListenerStorage[e])==null?void 0:t.length)||0}}var fe=Object.defineProperty,ge=(i,e,t)=>e in i?fe(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,p=(i,e,t)=>(ge(i,typeof e!="symbol"?e+"":e,t),t),f=(i=>(i.write="w",i.read="r",i.none="n",i))(f||{});const ve={w:{name:"Write",description:"Write access to element"},r:{name:"Read",description:"Read access to element"},n:{name:"None",description:"No access to element"}};class Le extends S{constructor(e){super(e,ve)}}class be extends HTMLElement{constructor(...e){super(),p(this,"$connectedObserver"),p(this,"isVisible",!1),p(this,"events",new pe),p(this,"$values"),p(this,"$valueFuncs"),p(this,"$valueConnector"),p(this,"$access",f.write),p(this,"$accessListener"),this.events.target=this}static elementName(){return"@abstract@"}static elementNameSpace(){return"chocolatelibui-core"}connectedCallback(){this.$connectedObserver?this.$connectedObserver.observe(this):(this.events.emit("connect",0),this.isVisible=!0)}disconnectedCallback(){this.$connectedObserver?(this.$connectedObserver.unobserve(this),this.isVisible&&(this.events.emit("connect",1),this.isVisible=!1)):(this.events.emit("connect",1),this.isVisible=!1)}adoptedCallback(){this.events.emit("connect",2)}options(e){return this.access=e.access,this}attachToObserver(e){e?(this.$connectedObserver=e,this.isConnected&&e.observe(this)):this.$connectedObserver&&(this.isConnected&&this.$connectedObserver.unobserve(this),this.isVisible||(this.events.emit("connect",0),this.isVisible=!0),delete this.$connectedObserver)}attachValue(e,t){if(this.$valueFuncs){if(this.$valueFuncs.includes(t))throw"Function is already attached to this element"}else this.$values=[],this.$valueFuncs=[];return this.$valueConnector?this.isVisible&&e.addListener(t):this.$valueConnector=this.events.on("connect",s=>{switch(s.data){case 0:for(let n=0;n<this.$values.length;n++)this.$values[n].addListener(this.$valueFuncs[n],!0);break;case 1:for(let n=0;n<this.$values.length;n++)this.$values[n].removeListener(this.$valueFuncs[n]);break;case 2:for(let n=0;n<this.$values.length;n++)this.$values[n].removeListener(this.$valueFuncs[n]),this.$values[n].addListener(this.$valueFuncs[n],!0)}}),this.$valueFuncs.push(t),this.$values.push(e),t}dettachValue(e){if(this.$valueFuncs){let t=this.$valueFuncs.indexOf(e);t>-1&&(this.isVisible&&this.$values[t].removeListener(e),this.$values.splice(t,1),this.$valueFuncs.splice(t,1),this.$valueFuncs.length===0&&this.events.off("connect",this.$valueConnector))}}get access(){return this.$access}set access(e){this.$accessListener&&(this.dettachValue(this.$accessListener),delete this.$accessListener),typeof e=="object"&&e instanceof Le?this.$accessListener=this.attachValue(e,t=>{this.$accessChange(t),this.$access=t}):e?(this.$accessChange(e),this.$access=e):(this.$accessChange(f.write),this.$access=f.write)}$accessChange(e){switch(e){case f.write:this.inert=!1;break;case f.read:this.inert=!0;break;case f.none:this.setAttribute("inert","none");break}}}const ye=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);var we=/^[a-z](?:[\.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*-(?:[\x2D\.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;let xe=i=>i?/[A-Z]/.test(i)?"Custom element names must not contain uppercase ASCII characters.":i.includes("-")?/^\d/i.test(i)?"Custom element names must not start with a digit.":/^-/i.test(i)?"Custom element names must not start with a hyphen.":we.test(i)?ye.has(i)?`The supplied element name is reserved and can't be used.
See: https://html.spec.whatwg.org/multipage/scripting.html#valid-custom-element-name`:"Unknown fault":"Invalid element name.":"Custom element names must contain a hyphen. Example: unicorn-cake":"Missing element name.",Se=i=>{let e=i.elementNameSpace(),t=i.elementName,s="",n=i;for(;n!==HTMLElement&&e===n.elementNameSpace();){let r=n.elementName();if(n=Object.getPrototypeOf(n),t===n.elementName)throw new Error("Element uses same name as ancestor, abstract classes should return '@abstract@'");if(!r.length)throw new Error("Element doesn't define element name");r!=="@abstract@"&&(s="-"+r+s)}s=e+s;try{customElements.define(s,i)}catch(r){throw r.message.includes("has already been used with this registry")?r:new Error(xe(s)+" "+s)}};const Fe="@chocolatelibui/spinner";let $e="http://www.w3.org/2000/svg",d=(i,e,t)=>{let s=document.createElementNS($e,"circle");return s.setAttribute("cx",String(i)),s.setAttribute("cy",String(e)),s.setAttribute("r",String(t)),s},Ee=Y(Fe,"Spinner","Spinner used as a placeholder for data with and unknown arrival time");Ee.makeVariable("color","Dot color","Color of dots in spinner",E[700],E[300],"Color",void 0);let c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("viewBox","0 0 64 64");c.appendChild(d(32,6,0));c.appendChild(d(45,9.483,0));c.appendChild(d(54.516,19,0));c.appendChild(d(58,32,0));c.appendChild(d(54.516,45,0));c.appendChild(d(45,54.516,0));c.appendChild(d(32,58,0));c.appendChild(d(19,54.516,0));c.appendChild(d(9.483,45,0));c.appendChild(d(6,32,0));c.appendChild(d(9.483,19,0));c.appendChild(d(19,9.483,0));class v extends be{static elementName(){return"dots"}static elementNameSpace(){return"chocolatelibui-spinner"}constructor(){super(),this.appendChild(c.cloneNode(!0))}}Se(v);let Ce=Y("YO","Spinner","Spinner used as a placeholder for data with and unknown arrival time");Ce.makeVariable("color","Dot color","Color of dots in spinner",E[50],E[900],"Color",void 0);let Z=document.body.appendChild(document.createElement("button"));Z.innerHTML="Light Mode";Z.onclick=()=>{g.set="light"};let Q=document.body.appendChild(document.createElement("button"));Q.innerHTML="Dark Mode";Q.onclick=()=>{g.set="dark"};let U=document.createElement("div");document.body.appendChild(U);U.className="tiny";U.appendChild(new v);let P=document.createElement("div");document.body.appendChild(P);P.className="teeny";P.appendChild(new v);let z=document.createElement("div");document.body.appendChild(z);z.className="little";z.appendChild(new v);let J=document.createElement("div");document.body.appendChild(J);J.className="bittle";J.appendChild(new v);let j=document.createElement("div");document.body.appendChild(j);j.className="big";j.appendChild(new v);