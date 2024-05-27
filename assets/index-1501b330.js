import{a as e,aF as t,f as n,d as r,j as o,u as s,l as i,c as a,y as c,J as u,F as l,n as f,E as d}from"./index-d48202c0.js";let h=!1;const p={name:"Skeleton",common:t,self:e=>{const{heightSmall:t,heightMedium:n,heightLarge:r,borderRadius:o}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:o,heightSmall:t,heightMedium:n,heightLarge:r}}},m=n([r("skeleton","\n height: 1em;\n width: 100%;\n transition: background-color .3s var(--n-bezier);\n transition:\n --n-color-start .3s var(--n-bezier),\n --n-color-end .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);\n background-color: var(--n-color-start);\n "),n("@keyframes skeleton-loading","\n 0% {\n background: var(--n-color-start);\n }\n 40% {\n background: var(--n-color-end);\n }\n 80% {\n background: var(--n-color-start);\n }\n 100% {\n background: var(--n-color-start);\n }\n ")]),g=o({name:"Skeleton",inheritAttrs:!1,props:Object.assign(Object.assign({},i.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),setup(t){!function(){if(e&&window.CSS&&!h&&(h=!0,"registerProperty"in(null===window||void 0===window?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch(t){}}();const{mergedClsPrefixRef:n}=s(t),r=i("Skeleton","-skeleton",m,p,t,n);return{mergedClsPrefix:n,style:a((()=>{var e,n;const o=r.value,{common:{cubicBezierEaseInOut:s}}=o,i=o.self,{color:a,colorEnd:c,borderRadius:u}=i;let l;const{circle:h,sharp:p,round:m,width:g,height:y,size:b,text:w,animated:E}=t;void 0!==b&&(l=i[f("height",b)]);const O=h?null!==(e=null!=g?g:y)&&void 0!==e?e:l:g,S=null!==(n=h&&null!=g?g:y)&&void 0!==n?n:l;return{display:w?"inline-block":"",verticalAlign:w?"-0.125em":"",borderRadius:h?"50%":m?"4096px":p?"":u,width:"number"==typeof O?d(O):O,height:"number"==typeof S?d(S):S,animation:E?"":"none","--n-bezier":s,"--n-color-start":a,"--n-color-end":c}}))}},render(){const{repeat:e,style:t,mergedClsPrefix:n,$attrs:r}=this,o=c("div",u({class:`${n}-skeleton`,style:t},r));return e>1?c(l,null,Array.apply(null,{length:e}).map((e=>[o,"\n"]))):o}});function y(e,t){return function(){return e.apply(t,arguments)}}const{toString:b}=Object.prototype,{getPrototypeOf:w}=Object,E=(O=Object.create(null),e=>{const t=b.call(e);return O[t]||(O[t]=t.slice(8,-1).toLowerCase())});var O;const S=e=>(e=e.toLowerCase(),t=>E(t)===e),R=e=>t=>typeof t===e,{isArray:A}=Array,v=R("undefined");const T=S("ArrayBuffer");const j=R("string"),x=R("function"),C=R("number"),N=e=>null!==e&&"object"==typeof e,P=e=>{if("object"!==E(e))return!1;const t=w(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},k=S("Date"),B=S("File"),U=S("Blob"),_=S("FileList"),L=S("URLSearchParams");function F(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),A(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function D(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,q=e=>!v(e)&&e!==z;const I=(M="undefined"!=typeof Uint8Array&&w(Uint8Array),e=>M&&e instanceof M);var M;const H=S("HTMLFormElement"),J=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),$=S("RegExp"),V=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},W="abcdefghijklmnopqrstuvwxyz",K="0123456789",G={DIGIT:K,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+K};const X={isArray:A,isArrayBuffer:T,isBuffer:function(e){return null!==e&&!v(e)&&null!==e.constructor&&!v(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||b.call(e)===t||x(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&T(e.buffer),t},isString:j,isNumber:C,isBoolean:e=>!0===e||!1===e,isObject:N,isPlainObject:P,isUndefined:v,isDate:k,isFile:B,isBlob:U,isRegExp:$,isFunction:x,isStream:e=>N(e)&&x(e.pipe),isURLSearchParams:L,isTypedArray:I,isFileList:_,forEach:F,merge:function e(){const{caseless:t}=q(this)&&this||{},n={},r=(r,o)=>{const s=t&&D(n,o)||o;P(n[s])&&P(r)?n[s]=e(n[s],r):P(r)?n[s]=e({},r):A(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&F(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(F(t,((t,r)=>{n&&x(t)?e[r]=y(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&w(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:E,kindOfTest:S,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(A(e))return e;let t=e.length;if(!C(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:H,hasOwnProperty:J,hasOwnProp:J,reduceDescriptors:V,freezeMethods:e=>{V(e,((t,n)=>{if(x(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];x(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return A(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:D,global:z,isContextDefined:q,ALPHABET:G,generateString:(e=16,t=G.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&x(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(N(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=A(e)?[]:{};return F(e,((e,t)=>{const s=n(e,r+1);!v(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)}};function Q(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}X.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Z=Q.prototype,Y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Y[e]={value:e}})),Object.defineProperties(Q,Y),Object.defineProperty(Z,"isAxiosError",{value:!0}),Q.from=(e,t,n,r,o,s)=>{const i=Object.create(Z);return X.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Q.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function ee(e){return X.isPlainObject(e)||X.isArray(e)}function te(e){return X.endsWith(e,"[]")?e.slice(0,-2):e}function ne(e,t,n){return e?e.concat(t).map((function(e,t){return e=te(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const re=X.toFlatObject(X,{},null,(function(e){return/^is[A-Z]/.test(e)}));function oe(e,t,n){if(!X.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=X.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!X.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&X.isSpecCompliantForm(t);if(!X.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(X.isDate(e))return e.toISOString();if(!a&&X.isBlob(e))throw new Q("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(e)||X.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(X.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(X.isArray(e)&&function(e){return X.isArray(e)&&!e.some(ee)}(e)||(X.isFileList(e)||X.endsWith(n,"[]"))&&(a=X.toArray(e)))return n=te(n),a.forEach((function(e,r){!X.isUndefined(e)&&null!==e&&t.append(!0===i?ne([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!ee(e)||(t.append(ne(o,n,s),c(e)),!1)}const l=[],f=Object.assign(re,{defaultVisitor:u,convertValue:c,isVisitable:ee});if(!X.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!X.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),X.forEach(n,(function(n,s){!0===(!(X.isUndefined(n)||null===n)&&o.call(t,n,X.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ie(e,t){this._pairs=[],e&&oe(e,this,t)}const ae=ie.prototype;function ce(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ue(e,t,n){if(!t)return e;const r=n&&n.encode||ce,o=n&&n.serialize;let s;if(s=o?o(t,n):X.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}ae.append=function(e,t){this._pairs.push([e,t])},ae.toString=function(e){const t=e?function(t){return e.call(this,t,se)}:se;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const le=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){X.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},de={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ie,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function he(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&X.isArray(r)?r.length:s,a)return X.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&X.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&X.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(X.isFormData(e)&&X.isFunction(e.entries)){const n={};return X.forEachEntry(e,((e,r)=>{t(function(e){return X.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const pe={"Content-Type":void 0};const me={transitional:fe,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=X.isObject(e);o&&X.isHTMLForm(e)&&(e=new FormData(e));if(X.isFormData(e))return r&&r?JSON.stringify(he(e)):e;if(X.isArrayBuffer(e)||X.isBuffer(e)||X.isStream(e)||X.isFile(e)||X.isBlob(e))return e;if(X.isArrayBufferView(e))return e.buffer;if(X.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return oe(e,new de.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return de.isNode&&X.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=X.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return oe(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(X.isString(e))try{return(t||JSON.parse)(e),X.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||me.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&X.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw Q.from(o,Q.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};X.forEach(["delete","get","head"],(function(e){me.headers[e]={}})),X.forEach(["post","put","patch"],(function(e){me.headers[e]=X.merge(pe)}));const ge=me,ye=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),be=Symbol("internals");function we(e){return e&&String(e).trim().toLowerCase()}function Ee(e){return!1===e||null==e?e:X.isArray(e)?e.map(Ee):String(e)}function Oe(e,t,n,r,o){return X.isFunction(r)?r.call(this,t,n):(o&&(t=n),X.isString(t)?X.isString(r)?-1!==t.indexOf(r):X.isRegExp(r)?r.test(t):void 0:void 0)}class Se{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=we(t);if(!o)throw new Error("header name must be a non-empty string");const s=X.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Ee(e))}const s=(e,t)=>X.forEach(e,((e,n)=>o(e,n,t)));return X.isPlainObject(e)||e instanceof this.constructor?s(e,t):X.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ye[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=we(e)){const n=X.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(X.isFunction(t))return t.call(this,e,n);if(X.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=we(e)){const n=X.findKey(this,e);return!(!n||void 0===this[n]||t&&!Oe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=we(e)){const o=X.findKey(n,e);!o||t&&!Oe(0,n[o],o,t)||(delete n[o],r=!0)}}return X.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Oe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return X.forEach(this,((r,o)=>{const s=X.findKey(n,o);if(s)return t[s]=Ee(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Ee(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return X.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&X.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[be]=this[be]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=we(e);t[r]||(!function(e,t){const n=X.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return X.isArray(e)?e.forEach(r):r(e),this}}Se.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),X.freezeMethods(Se.prototype),X.freezeMethods(Se);const Re=Se;function Ae(e,t){const n=this||ge,r=t||n,o=Re.from(r.headers);let s=r.data;return X.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ve(e){return!(!e||!e.__CANCEL__)}function Te(e,t,n){Q.call(this,null==e?"canceled":e,Q.ERR_CANCELED,t,n),this.name="CanceledError"}X.inherits(Te,Q,{__CANCEL__:!0});const je=de.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),X.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),X.isString(r)&&i.push("path="+r),X.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function xe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ce=de.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=X.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Ne(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Pe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=Re.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}X.isFormData(r)&&(de.isStandardBrowserEnv||de.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=xe(e.baseURL,e.url);function l(){if(!c)return;const r=Re.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Q("Request failed with status code "+n.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ue(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new Q("Request aborted",Q.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new Q("Network Error",Q.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||fe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Q(t,r.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,e,c)),c=null},de.isStandardBrowserEnv){const t=(e.withCredentials||Ce(u))&&e.xsrfCookieName&&je.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&X.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),X.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Ne(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ne(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new Te(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===de.protocols.indexOf(f)?n(new Q("Unsupported protocol "+f+":",Q.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};X.forEach(Pe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const ke={getAdapter:e=>{e=X.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=X.isString(n)?Pe[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new Q(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(X.hasOwnProp(Pe,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!X.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Pe};function Be(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Te(null,e)}function Ue(e){Be(e),e.headers=Re.from(e.headers),e.data=Ae.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ke.getAdapter(e.adapter||ge.adapter)(e).then((function(t){return Be(e),t.data=Ae.call(e,e.transformResponse,t),t.headers=Re.from(t.headers),t}),(function(t){return ve(t)||(Be(e),t&&t.response&&(t.response.data=Ae.call(e,e.transformResponse,t.response),t.response.headers=Re.from(t.response.headers))),Promise.reject(t)}))}const _e=e=>e instanceof Re?e.toJSON():e;function Le(e,t){t=t||{};const n={};function r(e,t,n){return X.isPlainObject(e)&&X.isPlainObject(t)?X.merge.call({caseless:n},e,t):X.isPlainObject(t)?X.merge({},t):X.isArray(t)?t.slice():t}function o(e,t,n){return X.isUndefined(t)?X.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!X.isUndefined(t))return r(void 0,t)}function i(e,t){return X.isUndefined(t)?X.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(_e(e),_e(t),!0)};return X.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);X.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Fe="1.3.4",De={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{De[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ze={};De.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Fe+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new Q(r(o," has been removed"+(t?" in "+t:"")),Q.ERR_DEPRECATED);return t&&!ze[o]&&(ze[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const qe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new Q("option "+s+" must be "+n,Q.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Q("Unknown option "+s,Q.ERR_BAD_OPTION)}},validators:De},Ie=qe.validators;class Me{constructor(e){this.defaults=e,this.interceptors={request:new le,response:new le}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Le(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&qe.assertOptions(n,{silentJSONParsing:Ie.transitional(Ie.boolean),forcedJSONParsing:Ie.transitional(Ie.boolean),clarifyTimeoutError:Ie.transitional(Ie.boolean)},!1),void 0!==r&&qe.assertOptions(r,{encode:Ie.function,serialize:Ie.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&X.merge(o.common,o[t.method]),s&&X.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Re.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ue.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{u=Ue.call(this,d)}catch(h){return Promise.reject(h)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return ue(xe((e=Le(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}X.forEach(["delete","get","head","options"],(function(e){Me.prototype[e]=function(t,n){return this.request(Le(n||{},{method:e,url:t,data:(n||{}).data}))}})),X.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Le(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Me.prototype[e]=t(),Me.prototype[e+"Form"]=t(!0)}));const He=Me;class Je{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Te(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Je((function(t){e=t})),cancel:e}}}const $e=Je;const Ve={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ve).forEach((([e,t])=>{Ve[t]=e}));const We=Ve;const Ke=function e(t){const n=new He(t),r=y(He.prototype.request,n);return X.extend(r,He.prototype,n,{allOwnKeys:!0}),X.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Le(t,n))},r}(ge);Ke.Axios=He,Ke.CanceledError=Te,Ke.CancelToken=$e,Ke.isCancel=ve,Ke.VERSION=Fe,Ke.toFormData=oe,Ke.AxiosError=Q,Ke.Cancel=Ke.CanceledError,Ke.all=function(e){return Promise.all(e)},Ke.spread=function(e){return function(t){return e.apply(null,t)}},Ke.isAxiosError=function(e){return X.isObject(e)&&!0===e.isAxiosError},Ke.mergeConfig=Le,Ke.AxiosHeaders=Re,Ke.formToJSON=e=>he(X.isHTMLForm(e)?new FormData(e):e),Ke.HttpStatusCode=We,Ke.default=Ke;const Ge=Ke;Ge.defaults.baseURL="https://hot-api.ohahah.com/",Ge.defaults.timeout=3e4,Ge.defaults.headers={"Content-Type":"application/json"},Ge.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=t),e}),(e=>($message.error("请求失败，请稍后重试"),Promise.reject(e)))),Ge.interceptors.response.use((e=>e.data),(e=>{if($loadingBar.error(),e.response){let t=e.response.data;switch(e.response.status){case 401:$message.error(t.message?t.message:"请登录后使用");break;case 301:$message.error(t.message?t.message:"请求路径发生跳转");break;case 403:$message.error(t.message?t.message:"暂无访问权限");break;case 404:$message.error(t.message?t.message:"请求资源不存在");break;case 500:$message.error(t.message?t.message:"内部服务器错误");break;default:$message.error(t.message?t.message:"请求失败，请稍后重试")}}else $message.error(data.message?data.message:"请求失败，请稍后重试");return Promise.reject(e)}));const Xe=(e,t)=>Ge({method:"GET",url:`/${e}${t?"/new":""}`});export{g as _,Xe as g};
