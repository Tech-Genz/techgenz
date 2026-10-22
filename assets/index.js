(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function e_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kd={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx;function mE(){if(jx)return nl;jx=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return nl.Fragment=n,nl.jsx=a,nl.jsxs=a,nl}var kx;function gE(){return kx||(kx=1,Kd.exports=mE()),Kd.exports}var v=gE(),Qd={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx;function xE(){if(Xx)return st;Xx=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function R(w){return w===null||typeof w!="object"?null:(w=M&&w[M]||w["@@iterator"],typeof w=="function"?w:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,_={};function L(w,G,oe){this.props=w,this.context=G,this.refs=_,this.updater=oe||A}L.prototype.isReactComponent={},L.prototype.setState=function(w,G){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,G,"setState")},L.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function P(){}P.prototype=L.prototype;function U(w,G,oe){this.props=w,this.context=G,this.refs=_,this.updater=oe||A}var K=U.prototype=new P;K.constructor=U,E(K,L.prototype),K.isPureReactComponent=!0;var V=Array.isArray;function I(){}var j={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function N(w,G,oe){var se=oe.ref;return{$$typeof:o,type:w,key:G,ref:se!==void 0?se:null,props:oe}}function F(w,G){return N(w.type,G,w.props)}function le(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function te(w){var G={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(oe){return G[oe]})}var fe=/\/+/g;function de(w,G){return typeof w=="object"&&w!==null&&w.key!=null?te(""+w.key):G.toString(36)}function k(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(I,I):(w.status="pending",w.then(function(G){w.status==="pending"&&(w.status="fulfilled",w.value=G)},function(G){w.status==="pending"&&(w.status="rejected",w.reason=G)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function ae(w,G,oe,se,Te){var Ne=typeof w;(Ne==="undefined"||Ne==="boolean")&&(w=null);var ge=!1;if(w===null)ge=!0;else switch(Ne){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(w.$$typeof){case o:case n:ge=!0;break;case y:return ge=w._init,ae(ge(w._payload),G,oe,se,Te)}}if(ge)return Te=Te(w),ge=se===""?"."+de(w,0):se,V(Te)?(oe="",ge!=null&&(oe=ge.replace(fe,"$&/")+"/"),ae(Te,G,oe,"",function(Ke){return Ke})):Te!=null&&(le(Te)&&(Te=F(Te,oe+(Te.key==null||w&&w.key===Te.key?"":(""+Te.key).replace(fe,"$&/")+"/")+ge)),G.push(Te)),1;ge=0;var Me=se===""?".":se+":";if(V(w))for(var we=0;we<w.length;we++)se=w[we],Ne=Me+de(se,we),ge+=ae(se,G,oe,Ne,Te);else if(we=R(w),typeof we=="function")for(w=we.call(w),we=0;!(se=w.next()).done;)se=se.value,Ne=Me+de(se,we++),ge+=ae(se,G,oe,Ne,Te);else if(Ne==="object"){if(typeof w.then=="function")return ae(k(w),G,oe,se,Te);throw G=String(w),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return ge}function Z(w,G,oe){if(w==null)return w;var se=[],Te=0;return ae(w,se,"","",function(Ne){return G.call(oe,Ne,Te++)}),se}function _e(w){if(w._status===-1){var G=w._result,oe=G();oe.then(function(se){(w._status===0||w._status===-1)&&(w._status=1,w._result=se,oe.status===void 0&&(oe.status="fulfilled",oe.value=se))},function(se){(w._status===0||w._status===-1)&&(w._status=2,w._result=se,oe.status===void 0&&(oe.status="rejected",oe.reason=se))}),w._status===-1&&(w._status=0,w._result=oe)}if(w._status===1)return w._result.default;throw w._result}var Se=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function be(w){var G=j.T,oe={};oe.types=G!==null?G.types:null,j.T=oe;try{var se=w(),Te=j.S;Te!==null&&Te(oe,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(I,Se)}catch(Ne){Se(Ne)}finally{G!==null&&oe.types!==null&&(G.types=oe.types),j.T=G}}function je(w){var G=j.T;if(G!==null){var oe=G.types;oe===null?G.types=[w]:oe.indexOf(w)===-1&&oe.push(w)}else be(je.bind(null,w))}var ze={map:Z,forEach:function(w,G,oe){Z(w,function(){G.apply(this,arguments)},oe)},count:function(w){var G=0;return Z(w,function(){G++}),G},toArray:function(w){return Z(w,function(G){return G})||[]},only:function(w){if(!le(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return st.Activity=m,st.Children=ze,st.Component=L,st.Fragment=a,st.Profiler=c,st.PureComponent=U,st.StrictMode=s,st.Suspense=p,st.ViewTransition=S,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,st.__COMPILER_RUNTIME={__proto__:null,c:function(w){return j.H.useMemoCache(w)}},st.addTransitionType=je,st.cache=function(w){return function(){return w.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(w,G,oe){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var se=E({},w.props),Te=w.key;if(G!=null)for(Ne in G.key!==void 0&&(Te=""+G.key),G)!D.call(G,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&G.ref===void 0||(se[Ne]=G[Ne]);var Ne=arguments.length-2;if(Ne===1)se.children=oe;else if(1<Ne){for(var ge=Array(Ne),Me=0;Me<Ne;Me++)ge[Me]=arguments[Me+2];se.children=ge}return N(w.type,Te,se)},st.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},st.createElement=function(w,G,oe){var se,Te={},Ne=null;if(G!=null)for(se in G.key!==void 0&&(Ne=""+G.key),G)D.call(G,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(Te[se]=G[se]);var ge=arguments.length-2;if(ge===1)Te.children=oe;else if(1<ge){for(var Me=Array(ge),we=0;we<ge;we++)Me[we]=arguments[we+2];Te.children=Me}if(w&&w.defaultProps)for(se in ge=w.defaultProps,ge)Te[se]===void 0&&(Te[se]=ge[se]);return N(w,Ne,Te)},st.createRef=function(){return{current:null}},st.forwardRef=function(w){return{$$typeof:h,render:w}},st.isValidElement=le,st.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:_e}},st.memo=function(w,G){return{$$typeof:x,type:w,compare:G===void 0?null:G}},st.startTransition=be,st.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},st.use=function(w){return j.H.use(w)},st.useActionState=function(w,G,oe){return j.H.useActionState(w,G,oe)},st.useCallback=function(w,G){return j.H.useCallback(w,G)},st.useContext=function(w){return j.H.useContext(w)},st.useDebugValue=function(){},st.useDeferredValue=function(w,G){return j.H.useDeferredValue(w,G)},st.useEffect=function(w,G){return j.H.useEffect(w,G)},st.useEffectEvent=function(w){return j.H.useEffectEvent(w)},st.useId=function(){return j.H.useId()},st.useImperativeHandle=function(w,G,oe){return j.H.useImperativeHandle(w,G,oe)},st.useInsertionEffect=function(w,G){return j.H.useInsertionEffect(w,G)},st.useLayoutEffect=function(w,G){return j.H.useLayoutEffect(w,G)},st.useMemo=function(w,G){return j.H.useMemo(w,G)},st.useOptimistic=function(w,G){return j.H.useOptimistic(w,G)},st.useReducer=function(w,G,oe){return j.H.useReducer(w,G,oe)},st.useRef=function(w){return j.H.useRef(w)},st.useState=function(w){return j.H.useState(w)},st.useSyncExternalStore=function(w,G,oe){return j.H.useSyncExternalStore(w,G,oe)},st.useTransition=function(){return j.H.useTransition()},st.version="19.3.1",st}var qx;function Tp(){return qx||(qx=1,Qd.exports=xE()),Qd.exports}var mt=Tp();const vE=e_(mt);var Jd={exports:{}},il={},$d={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx;function _E(){return Yx||(Yx=1,(function(o){function n(k,ae){var Z=k.length;k.push(ae);e:for(;0<Z;){var _e=Z-1>>>1,Se=k[_e];if(0<c(Se,ae))k[_e]=ae,k[Z]=Se,Z=_e;else break e}}function a(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var ae=k[0],Z=k.pop();if(Z!==ae){k[0]=Z;e:for(var _e=0,Se=k.length,be=Se>>>1;_e<be;){var je=2*(_e+1)-1,ze=k[je],w=je+1,G=k[w];if(0>c(ze,Z))w<Se&&0>c(G,ze)?(k[_e]=G,k[w]=Z,_e=w):(k[_e]=ze,k[je]=Z,_e=je);else if(w<Se&&0>c(G,Z))k[_e]=G,k[w]=Z,_e=w;else break e}}return ae}function c(k,ae){var Z=k.sortIndex-ae.sortIndex;return Z!==0?Z:k.id-ae.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],x=[],y=1,m=null,S=3,M=!1,R=!1,A=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(k){for(var ae=a(x);ae!==null;){if(ae.callback===null)s(x);else if(ae.startTime<=k)s(x),ae.sortIndex=ae.expirationTime,n(p,ae);else break;ae=a(x)}}function K(k){if(A=!1,U(k),!R)if(a(p)!==null)R=!0,V||(V=!0,le());else{var ae=a(x);ae!==null&&de(K,ae.startTime-k)}}var V=!1,I=-1,j=5,D=-1;function N(){return E?!0:!(o.unstable_now()-D<j)}function F(){if(E=!1,V){var k=o.unstable_now();D=k;var ae=!0;try{e:{R=!1,A&&(A=!1,L(I),I=-1),M=!0;var Z=S;try{t:{for(U(k),m=a(p);m!==null&&!(m.expirationTime>k&&N());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,S=m.priorityLevel;var Se=_e(m.expirationTime<=k);if(k=o.unstable_now(),typeof Se=="function"){m.callback=Se,U(k),ae=!0;break t}m===a(p)&&s(p),U(k)}else s(p);m=a(p)}if(m!==null)ae=!0;else{var be=a(x);be!==null&&de(K,be.startTime-k),ae=!1}}break e}finally{m=null,S=Z,M=!1}ae=void 0}}finally{ae?le():V=!1}}}var le;if(typeof P=="function")le=function(){P(F)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,fe=te.port2;te.port1.onmessage=F,le=function(){fe.postMessage(null)}}else le=function(){_(F,0)};function de(k,ae){I=_(function(){k(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(k){switch(S){case 1:case 2:case 3:var ae=3;break;default:ae=S}var Z=S;S=ae;try{return k()}finally{S=Z}},o.unstable_requestPaint=function(){E=!0},o.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Z=S;S=k;try{return ae()}finally{S=Z}},o.unstable_scheduleCallback=function(k,ae,Z){var _e=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?_e+Z:_e):Z=_e,k){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,k={id:y++,callback:ae,priorityLevel:k,startTime:Z,expirationTime:Se,sortIndex:-1},Z>_e?(k.sortIndex=Z,n(x,k),a(p)===null&&k===a(x)&&(A?(L(I),I=-1):A=!0,de(K,Z-_e))):(k.sortIndex=Se,n(p,k),R||M||(R=!0,V||(V=!0,le()))),k},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(k){var ae=S;return function(){var Z=S;S=ae;try{return k.apply(this,arguments)}finally{S=Z}}}})(eh)),eh}var Wx;function yE(){return Wx||(Wx=1,$d.exports=_E()),$d.exports}var th={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx;function SE(){if(Zx)return Un;Zx=1;var o=Tp();function n(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(y,m,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:y,containerInfo:m,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(y){return{$$typeof:f,_reason:y}},Un.createPortal=function(y,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return h(y,m,null,S)},Un.flushSync=function(y){var m=p.T,S=s.p;try{if(p.T=null,s.p=2,y)return y()}finally{p.T=m,s.p=S,s.d.f()}},Un.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(y,m))},Un.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Un.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var S=m.as,M=x(S,m.crossOrigin),R=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?s.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:R,fetchPriority:A}):S==="script"&&s.d.X(y,{crossOrigin:M,integrity:R,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=x(m.as,m.crossOrigin);s.d.M(y,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(y)},Un.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,M=x(S,m.crossOrigin);s.d.L(y,S,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(y,m){if(typeof y=="string")if(m){var S=x(m.as,m.crossOrigin);s.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(y)},Un.requestFormReset=function(y){s.d.r(y)},Un.unstable_batchedUpdates=function(y,m){return y(m)},Un.useFormState=function(y,m,S){return p.H.useFormState(y,m,S)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.1",Un}var Kx;function EE(){if(Kx)return th.exports;Kx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),th.exports=SE(),th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qx;function ME(){if(Qx)return il;Qx=1;var o=yE(),n=Tp(),a=EE();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,i=t;i&&!i.alternate;)t=i,(t.flags&4098)!==0&&(e=t.return),i=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(s(188))}function x(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var i=e,r=t;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return p(l),e;if(u===r)return p(l),t;u=u.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=u;else{for(var g=!1,b=l.child;b;){if(b===i){g=!0,i=l,r=u;break}if(b===r){g=!0,r=l,i=u;break}b=b.sibling}if(!g){for(b=u.child;b;){if(b===i){g=!0,i=u,r=l;break}if(b===r){g=!0,r=u,i=l;break}b=b.sibling}if(!g)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}function m(e,t,i,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&i(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,i,r,l,u))return!0;e=e.sibling}return!1}function S(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function R(e){var t=[null,null],i=S(e);return i===null||A(t,e,i.child,{foundSelf:!1}),t}function A(e,t,i,r){for(;i!==null;){if(i===t)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return e[1]=i,!0;e[0]=i}else if((i.tag!==22||i.memoizedState===null)&&A(e,t,i.child,r))return!0;i=i.sibling}return!1}function E(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,L=null;function P(e,t,i){return e===i?!0:e===t?(_=e,!0):!1}function U(e,t,i){return e===i?(L=e,!1):e===t?(L!==null&&(_=e),!0):!1}function K(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function V(e,t,i){for(var r=0,l=e;l;l=i(l))r++;l=0;for(var u=t;u;u=i(u))l++;for(;0<r-l;)e=i(e),r--;for(;0<l-r;)t=i(t),l--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=i(e),t=i(t)}return null}var I=Object.assign,j=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),fe=Symbol.for("react.consumer"),de=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),je=Symbol.for("react.legacy_hidden"),ze=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),G=Symbol.for("react.recoverable"),oe=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case te:return"Profiler";case le:return"StrictMode";case ae:return"Suspense";case Z:return"SuspenseList";case be:return"Activity";case w:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case de:return e.displayName||"Context";case fe:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _e:return t=e.displayName||null,t!==null?t:Ne(e.type)||"Memo";case Se:t=e._payload,e=e._init;try{return Ne(e(t))}catch{}}return null}var ge=Array.isArray,Me=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ke={pending:!1,data:null,method:null,action:null},B=[],Xt=-1;function Je(e){return{current:e}}function qe(e){0>Xt||(e.current=B[Xt],B[Xt]=null,Xt--)}function Ce(e,t){Xt++,B[Xt]=e.current,e.current=t}var dt=Je(null),Ye=Je(null),O=Je(null),T=Je(null);function ne(e,t){switch(Ce(O,t),Ce(Ye,e),Ce(dt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jg(t),e=$g(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}qe(dt),Ce(dt,e)}function ve(){qe(dt),qe(Ye),qe(O)}function Ee(e){var t=e.memoizedState;t!==null&&(Ls._currentValue=t.memoizedState,Ce(T,e)),t=dt.current;var i=$g(t,e.type);t!==i&&(Ce(Ye,e),Ce(dt,i))}function xe(e){Ye.current===e&&(qe(dt),qe(Ye)),T.current===e&&(qe(T),Ls._currentValue=Ke)}var We,Ie;function He(e){if(We===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);We=t&&t[1]||"",Ie=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+e+Ie}var xt=!1;function Re(e,t){if(!e||xt)return"";xt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(Le){var q=Le}Reflect.construct(e,[],me)}else{try{me.call()}catch(Le){q=Le}me=!1;try{var ee=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),me=!0,new e}finally{me&&(ee!==void 0?Object.defineProperty(e.prototype,"props",ee):delete e.prototype.props)}}}else{try{throw Error()}catch(Le){q=Le}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(Le){if(Le&&q&&typeof Le.stack=="string")return[Le.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],b=u[1];if(g&&b){var z=g.split(`
`),W=b.split(`
`);for(l=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;if(r===z.length||l===W.length)for(r=z.length-1,l=W.length-1;1<=r&&0<=l&&z[r]!==W[l];)l--;for(;1<=r&&0<=l;r--,l--)if(z[r]!==W[l]){if(r!==1||l!==1)do if(r--,l--,0>l||z[r]!==W[l]){var ie=`
`+z[r].replace(" at new "," at ");return e.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",e.displayName)),ie}while(1<=r&&0<=l);break}}}finally{xt=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?He(i):""}function Xe(e,t){switch(e.tag){case 26:case 27:case 5:return He(e.type);case 16:return He("Lazy");case 13:return e.child!==t&&t!==null?He("Suspense Fallback"):He("Suspense");case 19:return He("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return He("Activity");case 30:return He("ViewTransition");default:return""}}function nt(e){try{var t="",i=null;do t+=Xe(e,i),i=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var at=Object.prototype.hasOwnProperty,ke=o.unstable_scheduleCallback,gt=o.unstable_cancelCallback,lt=o.unstable_shouldYield,It=o.unstable_requestPaint,X=o.unstable_now,Be=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,ye=o.unstable_UserBlockingPriority,Fe=o.unstable_NormalPriority,Ge=o.unstable_LowPriority,ot=o.unstable_IdlePriority,Jt=o.log,vn=o.unstable_setDisableYieldValue,bt=null,Zt=null;function _n(e){if(typeof Jt=="function"&&vn(e),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(bt,e)}catch{}}var Ln=Math.clz32?Math.clz32:uo,xl=Math.log,Yi=Math.LN2;function uo(e){return e>>>=0,e===0?32:31-(xl(e)/Yi|0)|0}var dr=256,hr=262144,Wi=4194304;function Li(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,t,i){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~u,r!==0?l=Li(r):(g&=b,g!==0?l=Li(g):i||(i=b&~e,i!==0&&(l=Li(i))))):(b=r&~u,b!==0?l=Li(b):g!==0?l=Li(g):i||(i=r&~e,i!==0&&(l=Li(i)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,i=t&-t,u>=i||u===32&&(i&4194048)!==0)?t:l}function Ta(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fo(e,t){(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ln(i),l=1<<r;t|=e[r],i&=~l}return t}function Mu(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vl(){var e=Wi;return Wi<<=1,(Wi&62914560)===0&&(Wi=4194304),e}function ho(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function pr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bu(e,t,i,r,l,u){var g=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,W=e.hiddenUpdates;for(i=g&~i;0<i;){var ie=31-Ln(i),me=1<<ie;b[ie]=0,z[ie]=-1;var q=W[ie];if(q!==null)for(W[ie]=null,ie=0;ie<q.length;ie++){var ee=q[ie];ee!==null&&(ee.lane&=-536870913)}i&=~me}r!==0&&_l(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(g&~t))}function _l(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ln(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|i&261930}function C(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-Ln(i),l=1<<r;l&t|e[r]&t&&(e[r]|=t),i&=~l}}function Q(e,t){var i=t&-t;return i=(i&42)!==0?1:re(i),(i&(e.suspendedLanes|t))!==0?0:i}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function J(){var e=we.p;return e!==0?e:(e=window.event,e===void 0?32:Px(e.type))}function Ae(e,t){var i=we.p;try{return we.p=e,t()}finally{we.p=i}}var Ue=Math.random().toString(36).slice(2),De="__reactFiber$"+Ue,Oe="__reactProps$"+Ue,tt="__reactContainer$"+Ue,rt="__reactEvents$"+Ue,et="__reactListeners$"+Ue,Tt="__reactHandles$"+Ue,Rt="__reactResources$"+Ue,qt="__reactMarker$"+Ue,Gt="__reactLoad$"+Ue;function vt(e){delete e[De],delete e[Oe],delete e[et],delete e[Tt]}function Qe(e){var t;if(t=e[De])return t;for(var i=e.parentNode;i;){if(t=i[tt]||i[De]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=gx(e);e!==null;){if(i=e[De])return i;e=gx(e)}return t}e=i,i=e.parentNode}return null}function $t(e){if(e=e[De]||e[tt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function yn(e){var t=e[Rt];return t||(t=e[Rt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Kt(e){e[qt]=!0}function On(e){e[Gt]=void 0}var Aa=new Set,Vt={};function ln(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Vt[e]=t,e=0;e<t.length;e++)Aa.add(t[e])}var Tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),An={},Kr={};function Ki(e){return at.call(Kr,e)?!0:at.call(An,e)?!1:Tn.test(e)?Kr[e]=!0:(An[e]=!0,!1)}var Ct=!1;function Bp(){var e=Ct;return Ct=!1,e}function yl(e,t,i){if(Ki(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,i)}}function Sl(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,i)}}function Qi(e,t,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,r)}}function Jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z_(e,t,i){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,u.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tu(e){if(!e._valueTracker){var t=Fp(e)?"checked":"value";e._valueTracker=z_(e,t,""+e[t])}}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=Fp(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}var P_=/[\n"\\]/g;function li(e){return e.replace(P_,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Au(e,t,i,r,l,u,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Jn(t)):e.value!==""+Jn(t)&&(e.value=""+Jn(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?g==="number"&&e.value==t?wu(e,Jn(e.value)):wu(e,Jn(t)):i!=null?wu(e,Jn(i)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Jn(b):e.removeAttribute("name")}function Gp(e,t,i,r,l,u,g,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Tu(e);return}i=i!=null?""+Jn(i):"",t=t!=null?""+Jn(t):i,b||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Tu(e)}function wu(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Qr(e,t,i,r){if(e=e.options,t){t={};for(var l=0;l<i.length;l++)t["$"+i[l]]=!0;for(i=0;i<e.length;i++)l=t.hasOwnProperty("$"+e[i].value),e[i].selected!==l&&(e[i].selected=l),l&&r&&(e[i].defaultSelected=!0)}else{for(i=""+Jn(i),t=null,l=0;l<e.length;l++){if(e[l].value===i){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Vp(e,t,i){if(t!=null&&(t=""+Jn(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Jn(i):""}function jp(e,t,i,r){if(t==null){if(r!=null){if(i!=null)throw Error(s(92));if(ge(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),t=i}i=Jn(t),e.defaultValue=i,r=e.textContent,r===i&&r!==""&&r!==null&&(e.value=r),Tu(e)}function Jr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var I_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kp(e,t,i){var r=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,i):typeof i!="number"||i===0||I_.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function Xp(e,t,i){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",Ct=!0);for(var l in t)r=t[l],t.hasOwnProperty(l)&&i[l]!==r&&(kp(e,l,r),Ct=!0)}else for(var u in t)t.hasOwnProperty(u)&&kp(e,u,t[u])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(e){return F_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Oi(){}var Cu=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,es=null;function qp(e){var t=$t(e);if(t&&(e=t.stateNode)){var i=e[Oe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Au(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+li(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var l=r[Oe]||null;if(!l)throw Error(s(90));Au(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<i.length;t++)r=i[t],r.form===e.form&&Hp(r)}break e;case"textarea":Vp(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Qr(e,!!i.multiple,t,!1)}}}var Du=!1;function Yp(e,t,i){if(Du)return e(t,i);Du=!0;try{var r=e(t);return r}finally{if(Du=!1,($r!==null||es!==null)&&(Ec(),$r&&(t=$r,e=es,es=$r=null,qp(t),e)))for(t=0;t<e.length;t++)qp(e[t])}}function po(e,t){var i=e.stateNode;if(i===null)return null;var r=i[Oe]||null;if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,t,typeof i));return i}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(Ji)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Uu=!1}var wa=null,Lu=null,Ml=null;function Wp(){if(Ml)return Ml;var e,t=Lu,i=t.length,r,l="value"in wa?wa.value:wa.textContent,u=l.length;for(e=0;e<i&&t[e]===l[e];e++);var g=i-e;for(r=1;r<=g&&t[i-r]===l[u-r];r++);return Ml=l.slice(e,1<r?1-r:void 0)}function bl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Zp(){return!1}function Bn(e){function t(i,r,l,u,g){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(i=e[b],this[b]=i?i(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Tl:Zp,this.isPropagationStopped=Zp,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Bn(Ra),go=I({},Ra,{view:0,detail:0}),H_=Bn(go),Ou,zu,xo,wl=I({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Ou=e.screenX-xo.screenX,zu=e.screenY-xo.screenY):zu=Ou=0,xo=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:zu}}),Kp=Bn(wl),G_=I({},wl,{dataTransfer:0}),V_=Bn(G_),j_=I({},go,{relatedTarget:0}),Pu=Bn(j_),k_=I({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),X_=Bn(k_),q_=I({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y_=Bn(q_),W_=I({},Ra,{data:0}),Qp=Bn(W_),Z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q_[e])?!!t[e]:!1}function Iu(){return J_}var $_=I({},go,{key:function(e){if(e.key){var t=Z_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ey=Bn($_),ty=I({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Bn(ty),ny=I({},Ra,{submitter:0}),iy=Bn(ny),ay=I({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),ry=Bn(ay),sy=I({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=Bn(sy),ly=I({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Bn(ly),uy=I({},Ra,{newState:0,oldState:0,source:0}),fy=Bn(uy),dy=[9,13,27,32],Bu=Ji&&"CompositionEvent"in window,vo=null;Ji&&"documentMode"in document&&(vo=document.documentMode);var hy=Ji&&"TextEvent"in window&&!vo,$p=Ji&&(!Bu||vo&&8<vo&&11>=vo),em=" ",tm=!1;function nm(e,t){switch(e){case"keyup":return dy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ts=!1;function py(e,t){switch(e){case"compositionend":return im(t);case"keypress":return t.which!==32?null:(tm=!0,em);case"textInput":return e=t.data,e===em&&tm?null:e;default:return null}}function my(e,t){if(ts)return e==="compositionend"||!Bu&&nm(e,t)?(e=Wp(),Ml=Lu=wa=null,ts=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $p&&t.locale!=="ko"?null:t.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gy[e.type]:t==="textarea"}function rm(e,t,i,r){$r?es?es.push(r):es=[r]:$r=r,t=Rc(t,"onChange"),0<t.length&&(i=new Al("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var _o=null,yo=null;function xy(e){qg(e,0)}function Rl(e){var t=St(e);if(Hp(t))return e}function sm(e,t){if(e==="change")return t}var om=!1;if(Ji){var Fu;if(Ji){var Hu="oninput"in document;if(!Hu){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Hu=typeof lm.oninput=="function"}Fu=Hu}else Fu=!1;om=Fu&&(!document.documentMode||9<document.documentMode)}function cm(){_o&&(_o.detachEvent("onpropertychange",um),yo=_o=null)}function um(e){if(e.propertyName==="value"&&Rl(yo)){var t=[];rm(t,yo,e,Nu(e)),Yp(xy,t)}}function vy(e,t,i){e==="focusin"?(cm(),_o=t,yo=i,_o.attachEvent("onpropertychange",um)):e==="focusout"&&cm()}function _y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(yo)}function yy(e,t){if(e==="click")return Rl(t)}function Sy(e,t){if(e==="input"||e==="change")return Rl(t)}function Ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $n=typeof Object.is=="function"?Object.is:Ey;function So(e,t){if($n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!at.call(t,l)||!$n(e[l],t[l]))return!1}return!0}function Gu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dm(e,t){var i=fm(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=fm(i)}}function hm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gu(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Gu(e.document)}return t}function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var My=Ji&&"documentMode"in document&&11>=document.documentMode,ns=null,ju=null,Eo=null,ku=!1;function mm(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ku||ns==null||ns!==Gu(r)||(r=ns,"selectionStart"in r&&Vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&So(Eo,r)||(Eo=r,r=Rc(ju,"onSelect"),0<r.length&&(t=new Al("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=ns)))}function mr(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var is={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Xu={},gm={};Ji&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function gr(e){if(Xu[e])return Xu[e];if(!is[e])return e;var t=is[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in gm)return Xu[e]=t[i];return e}var xm=gr("animationend"),vm=gr("animationiteration"),_m=gr("animationstart"),by=gr("transitionrun"),Ty=gr("transitionstart"),Ay=gr("transitioncancel"),ym=gr("transitionend"),Sm=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Si(e,t){Sm.set(e,t),ln(t,[e])}var wy=0;function $i(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ti.identifierPrefix;var i=wy++;return e="_"+e+"t_"+i.toString(32)+"_",t.autoName=e}function Em(e){if(e==null||typeof e=="string")return e;var t=null,i=Ms;if(i!==null)for(var r=0;r<i.length;r++){var l=e[i[r]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function ea(e,t){return e=Em(e),t=Em(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],as=0,Yu=0;function Nl(){for(var e=as,t=Yu=as=0;t<e;){var i=ci[t];ci[t++]=null;var r=ci[t];ci[t++]=null;var l=ci[t];ci[t++]=null;var u=ci[t];if(ci[t++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}u!==0&&Mm(i,l,u)}}function Dl(e,t,i,r){ci[as++]=e,ci[as++]=t,ci[as++]=i,ci[as++]=r,Yu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Wu(e,t,i,r){return Dl(e,t,i,r),Ul(e)}function xr(e,t){return Dl(e,null,null,t),Ul(e)}function Mm(e,t,i){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i);for(var l=!1,u=e.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Ln(i),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[t]:r.push(t),t.lane=i|536870912),u):null}function Ul(e){if(50<ko)throw ko=0,Sc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var rs={};function Ry(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,t,i,r){return new Ry(e,t,i,r)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,t){var i=e.alternate;return i===null?(i=kn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&1206910976,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function bm(e,t){e.flags&=1206910978;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ll(e,t,i,r,l,u){var g=0;if(r=e,typeof r=="function")Zu(r)&&(g=1);else if(typeof r=="string")g=nE(e,i,dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case be:return e=kn(31,i,t,l),e.elementType=be,e.lanes=u,e;case F:return vr(i.children,l,u,t);case le:g=8,l|=24;break;case te:return e=kn(12,i,t,l|2),e.elementType=te,e.lanes=u,e;case ae:return e=kn(13,i,t,l),e.elementType=ae,e.lanes=u,e;case Z:return e=kn(19,i,t,l),e.elementType=Z,e.lanes=u,e;case je:case w:return e=l|32,e=kn(30,i,t,e),e.elementType=w,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case de:g=10;break e;case fe:g=9;break e;case k:g=11;break e;case _e:g=14;break e;case Se:g=16,r=null;break e}g=29,i=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=kn(g,i,t,l),t.elementType=e,t.type=r,t.lanes=u,t}function vr(e,t,i,r){return e=kn(7,e,r,t),e.lanes=i,e}function Ku(e,t,i){return e=kn(6,e,null,t),e.lanes=i,e}function Tm(e){var t=kn(18,null,null,0);return t.stateNode=e,t}function Qu(e,t,i){return t=kn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Am=new WeakMap;function ui(e,t){if(typeof e=="object"&&e!==null){var i=Am.get(e);return i!==void 0?i:(t={value:e,source:t,stack:nt(t)},Am.set(e,t),t)}return{value:e,source:t,stack:nt(t)}}var ss=[],os=0,Ol=null,Mo=0,fi=[],di=0,Ca=null,zi=1,Pi="";function na(e,t){ss[os++]=Mo,ss[os++]=Ol,Ol=e,Mo=t}function wm(e,t,i){fi[di++]=zi,fi[di++]=Pi,fi[di++]=Ca,Ca=e;var r=zi;e=Pi;var l=32-Ln(r)-1;r&=~(1<<l),i+=1;var u=32-Ln(t)+l;if(30<u){var g=l-l%5;u=(r&(1<<g)-1).toString(32),r>>=g,l-=g,zi=1<<32-Ln(t)+l|i<<l|r,Pi=u+e}else zi=1<<u|i<<l|r,Pi=e}function zl(e){e.return!==null&&(na(e,1),wm(e,1,0))}function Ju(e){for(;e===Ol;)Ol=ss[--os],ss[os]=null,Mo=ss[--os],ss[os]=null;for(;e===Ca;)Ca=fi[--di],fi[di]=null,Pi=fi[--di],fi[di]=null,zi=fi[--di],fi[di]=null}function Rm(e,t){fi[di++]=zi,fi[di++]=Pi,fi[di++]=Ca,zi=t.id,Pi=t.overflow,Ca=e}var Sn=null,Yt=null,pt=!1,Na=null,hi=!1,$u=Error(s(519));function Da(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(ui(t,e)),$u}function Cm(e){var t=e.stateNode,i=e.type,r=e.memoizedProps;switch(t[De]=e,t[Oe]=r,i){case"dialog":yt("cancel",t),yt("close",t);break;case"iframe":case"object":case"embed":yt("load",t);break;case"video":case"audio":for(i=0;i<qo.length;i++)yt(qo[i],t);break;case"source":yt("error",t);break;case"img":case"image":case"link":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"input":yt("invalid",t),Gp(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":yt("invalid",t);break;case"textarea":yt("invalid",t),jp(t,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||r.suppressHydrationWarning===!0||Kg(t.textContent,i)?(r.popover!=null&&(yt("beforetoggle",t),yt("toggle",t)),r.onScroll!=null&&yt("scroll",t),r.onScrollEnd!=null&&yt("scrollend",t),r.onClick!=null&&(t.onclick=Oi),t=!0):t=!1,t||Da(e,!0)}function Pl(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Sn=Sn.return}}function ls(e){if(e!==Sn)return!1;if(!pt)return Pl(e),pt=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Nd(e.type,e.memoizedProps)),i=!i),i&&Yt&&Da(e),Pl(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=mx(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=mx(e)}else t===27?(t=Yt,Ya(e.type)?(e=Fd,Fd=null,Yt=e):Yt=t):Yt=Sn?mi(e.stateNode.nextSibling):null;return!0}function _r(){Yt=Sn=null,pt=!1}function ef(){var e=Na;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Na=null),e}function bo(e){Na===null?Na=[e]:Na.push(e)}var tf=Je(null),yr=null,ia=null;function Ua(e,t,i){Ce(tf,t._currentValue),t._currentValue=i}function aa(e){e._currentValue=tf.current,qe(tf)}function Il(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function nf(e,t,i,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var g=l.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=l;for(var z=0;z<t.length;z++)if(b.context===t[z]){u.lanes|=i,b=u.alternate,b!==null&&(b.lanes|=i),Il(u.return,i,e),r||(g=null);break e}u=b.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=i,u=g.alternate,u!==null&&(u.lanes|=i),Il(g,i,e),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,g=l.alternate,g!==null&&(g.lanes|=i),Il(l.return,i,e),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===e){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Sr(e,t,i,r){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=l.type;$n(l.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(l===T.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ls):e=[Ls])}l=l.return}return e!==null&&nf(t,e,i,r),t.flags|=262144,e!==null}function Bl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Er(e){yr=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Nm(yr,e)}function Fl(e,t){return yr===null&&Er(e),Nm(e,t)}function Nm(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},ia===null){if(e===null)throw Error(s(308));ia=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ia=ia.next=t;return i}var Cy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},Ny=o.unstable_scheduleCallback,Dy=o.unstable_NormalPriority,cn={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new Cy,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&Ny(Dy,function(){e.controller.abort()})}function Dm(e,t){if((e.pendingLanes&4194048)!==0){var i=e.transitionTypes;for(i===null&&(i=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];i.indexOf(r)===-1&&i.push(r)}}}var Ao=null;function Uy(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var wo=null,rf=0,Mr=0,cs=null;function Ly(e,t){if(wo===null){var i=wo=[];rf=0,Mr=Sd(),cs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return rf++,t.then(Um,Um),t}function Um(){if(--rf===0&&(Ao=null,wo!==null)){cs!==null&&(cs.status="fulfilled");var e=wo;wo=null,Mr=0,cs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Oy(e,t){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<i.length;l++)(0,i[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Lm=Me.S;Me.S=function(e,t){if(Tg=X(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ly(e,t),Ao!==null)for(var i=ws;i!==null;)Dm(i,Ao),i=i.next;if(i=e.types,i!==null){for(var r=ws;r!==null;)Dm(r,i),r=r.next;if(Mr!==0){r=Ao,r===null&&(r=Ao=[]);for(var l=0;l<i.length;l++){var u=i[l];r.indexOf(u)===-1&&r.push(u)}}}Lm!==null&&Lm(e,t)};var br=Je(null);function sf(){var e=br.current;return e!==null?e:jt.pooledCache}function Hl(e,t){t===null?Ce(br,br.current):Ce(br,t.pool)}function Om(){var e=sf();return e===null?null:{parent:cn._currentValue,pool:e}}var us=Error(s(460)),of=Error(s(474)),Gl=Error(s(542)),Vl={then:function(){}};function zm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pm(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(Oi,Oi),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bm(e),e===void 0&&!("reason"in t)?Error(s(600)):e;default:if(typeof t.status=="string")t.then(Oi,Oi);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bm(e),e}throw Ar=t,us}}function Tr(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ar=i,us):i}}var Ar=null;function Im(){if(Ar===null)throw Error(s(459));var e=Ar;return Ar=null,e}function Bm(e){if(e===us||e===Gl)throw Error(s(483))}var fs=null,Ro=0;function jl(e){var t=Ro;return Ro+=1,fs===null&&(fs=[]),Pm(fs,e,t)}function La(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function kl(e,t){throw t.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fm(e){function t(Y,H){if(e){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function i(Y,H){if(!e)return null;for(;H!==null;)t(Y,H),H=H.sibling;return null}function r(Y){for(var H=new Map;Y!==null;)Y.key===null?H.set(Y.index,Y):H.set(Y.key,Y),Y=Y.sibling;return H}function l(Y,H){return Y=ta(Y,H),Y.index=0,Y.sibling=null,Y}function u(Y,H,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=134217730,H)):(Y.flags|=1048576,H)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=134217730),Y}function b(Y,H,$,pe){return H===null||H.tag!==6?(H=Ku($,Y.mode,pe),H.return=Y,H):(H=l(H,$),H.return=Y,H)}function z(Y,H,$,pe){var Ve=$.type;return Ve===F?(Y=ie(Y,H,$.props.children,pe,$.key),La(Y,$),Y):H!==null&&(H.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Se&&Tr(Ve)===H.type)?(H=l(H,$.props),La(H,$),H.return=Y,H):(H=Ll($.type,$.key,$.props,null,Y.mode,pe),La(H,$),H.return=Y,H)}function W(Y,H,$,pe){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=Qu($,Y.mode,pe),H.return=Y,H):(H=l(H,$.children||[]),H.return=Y,H)}function ie(Y,H,$,pe,Ve){return H===null||H.tag!==7?(H=vr($,Y.mode,pe,Ve),H.return=Y,H):(H=l(H,$),H.return=Y,H)}function me(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Ku(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return $=Ll(H.type,H.key,H.props,null,Y.mode,$),La($,H),$.return=Y,$;case N:return H=Qu(H,Y.mode,$),H.return=Y,H;case Se:return H=Tr(H),me(Y,H,$)}if(ge(H)||se(H))return H=vr(H,Y.mode,$,null),H.return=Y,H;if(typeof H.then=="function")return me(Y,jl(H),$);if(H.$$typeof===de)return me(Y,Fl(Y,H),$);kl(Y,H)}return null}function q(Y,H,$,pe){var Ve=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ve!==null?null:b(Y,H,""+$,pe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return $.key===Ve?z(Y,H,$,pe):null;case N:return $.key===Ve?W(Y,H,$,pe):null;case Se:return $=Tr($),q(Y,H,$,pe)}if(ge($)||se($))return Ve!==null?null:ie(Y,H,$,pe,null);if(typeof $.then=="function")return q(Y,H,jl($),pe);if($.$$typeof===de)return q(Y,H,Fl(Y,$),pe);kl(Y,$)}return null}function ee(Y,H,$,pe,Ve){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Y=Y.get($)||null,b(H,Y,""+pe,Ve);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case D:return Y=Y.get(pe.key===null?$:pe.key)||null,z(H,Y,pe,Ve);case N:return Y=Y.get(pe.key===null?$:pe.key)||null,W(H,Y,pe,Ve);case Se:return pe=Tr(pe),ee(Y,H,$,pe,Ve)}if(ge(pe)||se(pe))return Y=Y.get($)||null,ie(H,Y,pe,Ve,null);if(typeof pe.then=="function")return ee(Y,H,$,jl(pe),Ve);if(pe.$$typeof===de)return ee(Y,H,$,Fl(H,pe),Ve);kl(H,pe)}return null}function Le(Y,H,$,pe){for(var Ve=null,Mt=null,$e=H,it=H=0,dn=null;$e!==null&&it<$.length;it++){$e.index>it?(dn=$e,$e=null):dn=$e.sibling;var wt=q(Y,$e,$[it],pe);if(wt===null){$e===null&&($e=dn);break}e&&$e&&wt.alternate===null&&t(Y,$e),H=u(wt,H,it),Mt===null?Ve=wt:Mt.sibling=wt,Mt=wt,$e=dn}if(it===$.length)return i(Y,$e),pt&&na(Y,it),Ve;if($e===null){for(;it<$.length;it++)$e=me(Y,$[it],pe),$e!==null&&(H=u($e,H,it),Mt===null?Ve=$e:Mt.sibling=$e,Mt=$e);return pt&&na(Y,it),Ve}for($e=r($e);it<$.length;it++)dn=ee($e,Y,it,$[it],pe),dn!==null&&(e&&(wt=dn.alternate,wt!==null&&$e.delete(wt.key===null?it:wt.key)),H=u(dn,H,it),Mt===null?Ve=dn:Mt.sibling=dn,Mt=dn);return e&&$e.forEach(function(Ja){return t(Y,Ja)}),pt&&na(Y,it),Ve}function Ze(Y,H,$,pe){if($==null)throw Error(s(151));for(var Ve=null,Mt=null,$e=H,it=H=0,dn=null,wt=$.next();$e!==null&&!wt.done;it++,wt=$.next()){$e.index>it?(dn=$e,$e=null):dn=$e.sibling;var Ja=q(Y,$e,wt.value,pe);if(Ja===null){$e===null&&($e=dn);break}e&&$e&&Ja.alternate===null&&t(Y,$e),H=u(Ja,H,it),Mt===null?Ve=Ja:Mt.sibling=Ja,Mt=Ja,$e=dn}if(wt.done)return i(Y,$e),pt&&na(Y,it),Ve;if($e===null){for(;!wt.done;it++,wt=$.next())wt=me(Y,wt.value,pe),wt!==null&&(H=u(wt,H,it),Mt===null?Ve=wt:Mt.sibling=wt,Mt=wt);return pt&&na(Y,it),Ve}for($e=r($e);!wt.done;it++,wt=$.next())wt=ee($e,Y,it,wt.value,pe),wt!==null&&(e&&(dn=wt.alternate,dn!==null&&$e.delete(dn.key===null?it:dn.key)),H=u(wt,H,it),Mt===null?Ve=wt:Mt.sibling=wt,Mt=wt);return e&&$e.forEach(function(pE){return t(Y,pE)}),pt&&na(Y,it),Ve}function ut(Y,H,$,pe){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case D:e:{for(var Ve=$.key;H!==null;){if(H.key===Ve){if(Ve=$.type,Ve===F){if(H.tag===7){i(Y,H.sibling),pe=l(H,$.props.children),La(pe,$),pe.return=Y,Y=pe;break e}}else if(H.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Se&&Tr(Ve)===H.type){i(Y,H.sibling),pe=l(H,$.props),La(pe,$),pe.return=Y,Y=pe;break e}i(Y,H);break}else t(Y,H);H=H.sibling}$.type===F?(pe=vr($.props.children,Y.mode,pe,$.key),La(pe,$),pe.return=Y,Y=pe):(pe=Ll($.type,$.key,$.props,null,Y.mode,pe),La(pe,$),pe.return=Y,Y=pe)}return g(Y);case N:e:{for(Ve=$.key;H!==null;){if(H.key===Ve)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){i(Y,H.sibling),pe=l(H,$.children||[]),pe.return=Y,Y=pe;break e}else{i(Y,H);break}else t(Y,H);H=H.sibling}pe=Qu($,Y.mode,pe),pe.return=Y,Y=pe}return g(Y);case Se:return $=Tr($),ut(Y,H,$,pe)}if(ge($))return Le(Y,H,$,pe);if(se($)){if(Ve=se($),typeof Ve!="function")throw Error(s(150));return $=Ve.call($),Ze(Y,H,$,pe)}if(typeof $.then=="function")return ut(Y,H,jl($),pe);if($.$$typeof===de)return ut(Y,H,Fl(Y,$),pe);kl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,H!==null&&H.tag===6?(i(Y,H.sibling),pe=l(H,$),pe.return=Y,Y=pe):(i(Y,H),pe=Ku($,Y.mode,pe),pe.return=Y,Y=pe),g(Y)):i(Y,H)}return function(Y,H,$,pe){try{Ro=0;var Ve=ut(Y,H,$,pe);return fs=null,Ve}catch($e){if($e===us||$e===Gl)throw $e;var Mt=kn(29,$e,null,Y.mode);return Mt.lanes=pe,Mt.return=Y,Mt}finally{}}}var wr=Fm(!0),Hm=Fm(!1),Oa=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Dt&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=Ul(e),Mm(e,null,i),t}return Dl(e,r,t,i),Ul(e)}function Co(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,C(e,i)}}function uf(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=g:u=u.next=g,i=i.next}while(i!==null);u===null?l=u=t:u=u.next=t}else l=u=t;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var ff=!1;function No(){if(ff){var e=cs;if(e!==null)throw e}}function Do(e,t,i,r){ff=!1;var l=e.updateQueue;Oa=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var z=b,W=z.next;z.next=null,g===null?u=W:g.next=W,g=z;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,b=ie.lastBaseUpdate,b!==g&&(b===null?ie.firstBaseUpdate=W:b.next=W,ie.lastBaseUpdate=z))}if(u!==null){var me=l.baseState;g=0,ie=W=z=null,b=u;do{var q=b.lane&-536870913,ee=q!==b.lane;if(ee?(Et&q)===q:(r&q)===q){q!==0&&q===Mr&&(ff=!0),ie!==null&&(ie=ie.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Le=e,Ze=b;q=t;var ut=i;switch(Ze.tag){case 1:if(Le=Ze.payload,typeof Le=="function"){me=Le.call(ut,me,q);break e}me=Le;break e;case 3:Le.flags=Le.flags&-65537|128;case 0:if(Le=Ze.payload,q=typeof Le=="function"?Le.call(ut,me,q):Le,q==null)break e;me=I({},me,q);break e;case 2:Oa=!0}}q=b.callback,q!==null&&(e.flags|=64,ee&&(e.flags|=8192),ee=l.callbacks,ee===null?l.callbacks=[q]:ee.push(q))}else ee={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ie===null?(W=ie=ee,z=me):ie=ie.next=ee,g|=q;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;ee=b,b=ee.next,ee.next=null,l.lastBaseUpdate=ee,l.shared.pending=null}}while(!0);ie===null&&(z=me),l.baseState=z,l.firstBaseUpdate=W,l.lastBaseUpdate=ie,u===null&&(l.shared.lanes=0),ja|=g,e.lanes=g,e.memoizedState=me}}function Gm(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Vm(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Gm(i[e],t)}var Ia=Je(null),Xl=Je(0);function jm(e,t){e=ca,Ce(Xl,e),Ce(Ia,t),ca=e|t.baseLanes}function df(){Ce(Xl,ca),Ce(Ia,Ia.current)}function hf(){ca=Xl.current,qe(Ia),qe(Xl)}var Rn=Je(null),zn=null;function Ba(e){var t=e.alternate;Ce(Cn,Cn.current&1),Ce(Rn,e),zn===null&&(t===null||Ia.current!==null||t.memoizedState!==null)&&(zn=e)}function pf(e){Ce(Cn,Cn.current),Ce(Rn,e),zn===null&&(zn=e)}function km(e){e.tag===22?(Ce(Cn,Cn.current),Ce(Rn,e),zn===null&&(zn=e)):Fa()}function Fa(){Ce(Cn,Cn.current),Ce(Rn,Rn.current)}function ei(e){qe(Rn),zn===e&&(zn=null),qe(Cn)}var Cn=Je(0);function Uo(e,t){Ce(Rn,Rn.current),Ce(Cn,t)}function mf(e){qe(Cn),qe(Rn),zn===e&&(zn=null)}function ql(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Id(i)||Bd(i)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=0,ct=null,Bt=null,un=null,Yl=!1,ds=!1,Rr=!1,Wl=0,Lo=0,hs=null,zy=0;function nn(){throw Error(s(321))}function gf(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!$n(e[i],t[i]))return!1;return!0}function xf(e,t,i,r,l,u){return ra=u,ct=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Me.H=e===null||e.memoizedState===null?w0:R0,Rr=!1,u=i(r,l),Rr=!1,ds&&(u=qm(t,i,r,l)),Xm(e),u}function Xm(e){Me.H=tc;var t=Bt!==null&&Bt.next!==null;if(ra=0,un=Bt=ct=null,Yl=!1,Lo=0,hs=null,t)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Bl(e)&&(fn=!0))}function qm(e,t,i,r){ct=e;var l=0;do{if(ds&&(hs=null),Lo=0,ds=!1,25<=l)throw Error(s(301));if(l+=1,un=Bt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Me.H=jy,u=t(i,r)}while(ds);return u}function Py(){var e=Me.H,t=e.useState()[0];return t=typeof t.then=="function"?Oo(t):t,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(ct.flags|=1024),t}function vf(){var e=Wl!==0;return Wl=0,e}function _f(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function yf(e){if(Yl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yl=!1}ra=0,un=Bt=ct=null,ds=!1,Lo=Wl=0,hs=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ct.memoizedState=un=e:un=un.next=e,un}function sn(){if(Bt===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var t=un===null?ct.memoizedState:un.next;if(t!==null)un=t,Bt=e;else{if(e===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},un===null?ct.memoizedState=un=e:un=un.next=e}return un}function Zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(e){var t=Lo;return Lo+=1,hs===null&&(hs=[]),e=Pm(hs,e,t),t=ct,(un===null?t.memoizedState:un.next)===null&&(t=t.alternate,Me.H=t===null||t.memoizedState===null?w0:R0),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oo(e);if(e.$$typeof===G)return;if(e.$$typeof===de)return wn(e)}throw Error(s(438,String(e)))}function Sf(e){var t=null,i=ct.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var r=ct.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Zl(),ct.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),r=0;r<e;r++)i[r]=ze;return t.index++,i}function sa(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=sn();return Ef(t,Bt,e)}function Ef(e,t,i){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}t.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var b=g=null,z=null,W=t,ie=!1;do{var me=W.lane&-536870913;if(me!==W.lane?(Et&me)===me:(ra&me)===me){var q=W.revertLane;if(q===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),me===Mr&&(ie=!0);else if((ra&q)===q){W=W.next,q===Mr&&(ie=!0);continue}else me={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},z===null?(b=z=me,g=u):z=z.next=me,ct.lanes|=q,ja|=q;me=W.action,Rr&&i(u,me),u=W.hasEagerState?W.eagerState:i(u,me)}else q={lane:me,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},z===null?(b=z=q,g=u):z=z.next=q,ct.lanes|=me,ja|=me;W=W.next}while(W!==null&&W!==t);if(z===null?g=u:z.next=b,!$n(u,e.memoizedState)&&(fn=!0,ie&&(i=cs,i!==null)))throw i;e.memoizedState=u,e.baseState=g,e.baseQueue=z,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mf(e){var t=sn(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var r=i.dispatch,l=i.pending,u=t.memoizedState;if(l!==null){i.pending=null;var g=l=l.next;do u=e(u,g.action),g=g.next;while(g!==l);$n(u,t.memoizedState)||(fn=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,r]}function Ym(e,t,i){var r=ct,l=sn(),u=pt;if(u){if(i===void 0)throw Error(s(407));i=i()}else i=t();var g=!$n((Bt||l).memoizedState,i);if(g&&(l.memoizedState=i,fn=!0),l=l.queue,Af(Km.bind(null,r,l,e),[e]),e=l.getSnapshot!==t||g||un!==null&&(un.memoizedState.tag&1)!==0,ps(e?9:8,{destroy:void 0},Zm.bind(null,r,l,i,t),null),e){if(r.flags|=2048,jt===null)throw Error(s(349));u||(ra&127)!==0||Wm(r,t,i)}return i}function Wm(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ct.updateQueue,t===null?(t=Zl(),ct.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Zm(e,t,i,r){t.value=i,t.getSnapshot=r,Qm(t)&&Jm(e)}function Km(e,t,i){return i(function(){Qm(t)&&Jm(e)})}function Qm(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!$n(e,i)}catch{return!0}}function Jm(e){var t=xr(e,2);t!==null&&Wn(t,e,2)}function bf(e){var t=Fn();if(typeof e=="function"){var i=e;if(e=i(),Rr){_n(!0);try{i()}finally{_n(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function $m(e,t,i,r){return e.baseState=i,Ef(e,Bt,typeof r=="function"?r:sa)}function Iy(e,t,i,r,l){if(ec(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};Me.T!==null?i(!0):u.isTransition=!1,r(u),i=t.pending,i===null?(u.next=t.pending=u,e0(t,u)):(u.next=i.next,t.pending=i.next=u)}}function e0(e,t){var i=t.action,r=t.payload,l=e.state;if(t.isTransition){var u=Me.T,g={};g.types=u!==null?u.types:null,Me.T=g;try{var b=i(l,r),z=Me.S;z!==null&&z(g,b),t0(e,t,b)}catch(W){Tf(e,t,W)}finally{u!==null&&g.types!==null&&(u.types=g.types),Me.T=u}}else try{u=i(l,r),t0(e,t,u)}catch(W){Tf(e,t,W)}}function t0(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){n0(e,t,r)},function(r){return Tf(e,t,r)}):n0(e,t,i)}function n0(e,t,i){t.status="fulfilled",t.value=i,i0(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,e0(e,i)))}function Tf(e,t,i){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=i,i0(t),t=t.next;while(t!==r)}e.action=null}function i0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function a0(e,t){return t}function r0(e,t){if(pt){var i=jt.formState;if(i!==null){e:{var r=ct;if(pt){if(Yt){t:{for(var l=Yt,u=hi;l.nodeType!==8;){if(!u){l=null;break t}if(l=mi(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Yt=mi(l.nextSibling),r=l.data==="F!";break e}}Da(r)}r=!1}r&&(t=i[0])}}return i=Fn(),i.memoizedState=i.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a0,lastRenderedState:t},i.queue=r,i=b0.bind(null,ct,r),r.dispatch=i,r=bf(!1),u=Df.bind(null,ct,!1,r.queue),r=Fn(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,i=Iy.bind(null,ct,l,u,i),l.dispatch=i,r.memoizedState=e,[t,i,!1]}function s0(e){var t=sn();return o0(t,Bt,e)}function o0(e,t,i){if(t=Ef(e,t,a0)[0],e=Ql(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Oo(t)}catch(g){throw g===us?Gl:g}else r=t;t=sn();var l=t.queue,u=l.dispatch;return i!==t.memoizedState&&(ct.flags|=2048,ps(9,{destroy:void 0},By.bind(null,l,i),null)),[r,u,e]}function By(e,t){e.action=t}function l0(e){var t=sn(),i=Bt;if(i!==null)return o0(t,i,e);sn(),t=t.memoizedState,i=sn();var r=i.queue.dispatch;return i.memoizedState=e,[t,r,!1]}function ps(e,t,i,r){return e={tag:e,create:i,deps:r,inst:t,next:null},t=ct.updateQueue,t===null&&(t=Zl(),ct.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e),e}function c0(){return sn().memoizedState}function Jl(e,t,i,r){var l=Fn();ct.flags|=e,l.memoizedState=ps(1|t,{destroy:void 0},i,r===void 0?null:r)}function $l(e,t,i,r){var l=sn();r=r===void 0?null:r;var u=l.memoizedState.inst;Bt!==null&&r!==null&&gf(r,Bt.memoizedState.deps)?l.memoizedState=ps(t,u,i,r):(ct.flags|=e,l.memoizedState=ps(1|t,u,i,r))}function u0(e,t){Jl(8390656,8,e,t)}function Af(e,t){$l(2048,8,e,t)}function Fy(e){ct.flags|=4;var t=ct.updateQueue;if(t===null)t=Zl(),ct.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function f0(e){var t=sn().memoizedState;return Fy({ref:t,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function d0(e,t){return $l(4,2,e,t)}function h0(e,t){return $l(4,4,e,t)}function p0(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function m0(e,t,i){i=i!=null?i.concat([e]):null,$l(4,4,p0.bind(null,t,e),i)}function wf(){}function g0(e,t){var i=sn();t=t===void 0?null:t;var r=i.memoizedState;return t!==null&&gf(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function x0(e,t){var i=sn();t=t===void 0?null:t;var r=i.memoizedState;if(t!==null&&gf(t,r[1]))return r[0];if(r=e(),Rr){_n(!0);try{e()}finally{_n(!1)}}return i.memoizedState=[r,t],r}function Rf(e,t,i){return i===void 0||(ra&1073741824)!==0&&(Et&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=wg(),ct.lanes|=e,ja|=e,i)}function v0(e,t,i,r){return $n(i,t)?i:Ia.current!==null?(e=Rf(e,i,r),$n(e,t)||(fn=!0),e):(ra&106)===0||(ra&1073741824)!==0&&(Et&261930)===0?(fn=!0,e.memoizedState=i):(e=wg(),ct.lanes|=e,ja|=e,t)}function _0(e,t,i,r,l){var u=we.p;we.p=u!==0&&8>u?u:8;var g=Me.T,b={};b.types=g!==null?g.types:null,Me.T=b,Df(e,!1,t,i);try{var z=l(),W=Me.S;if(W!==null&&W(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=Oy(z,r);zo(e,t,ie,ai(e))}else zo(e,t,r,ai(e))}catch(me){zo(e,t,{then:function(){},status:"rejected",reason:me},ai())}finally{we.p=u,g!==null&&b.types!==null&&(g.types=b.types),Me.T=g}}function Hy(){}function Cf(e,t,i,r){if(e.tag!==5)throw Error(s(476));var l=y0(e).queue;_0(e,l,t,Ke,i===null?Hy:function(){return S0(e),i(r)})}function y0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ke,baseState:Ke,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:Ke},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function S0(e){var t=y0(e);t.next===null&&(t=e.alternate.memoizedState),zo(e,t.next.queue,{},ai())}function Nf(){return wn(Ls)}function E0(){return sn().memoizedState}function M0(){return sn().memoizedState}function Gy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=ai();e=za(i);var r=Pa(t,e,i);r!==null&&(Wn(r,t,i),Co(r,t,i)),t={cache:af()},e.payload=t;return}t=t.return}}function Vy(e,t,i){var r=ai();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ec(e)?T0(t,i):(i=Wu(e,t,i,r),i!==null&&(Wn(i,e,r),A0(i,t,r)))}function b0(e,t,i){var r=ai();zo(e,t,i,r)}function zo(e,t,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ec(e))T0(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var g=t.lastRenderedState,b=u(g,i);if(l.hasEagerState=!0,l.eagerState=b,$n(b,g))return Dl(e,t,l,0),jt===null&&Nl(),!1}catch{}finally{}if(i=Wu(e,t,l,r),i!==null)return Wn(i,e,r),A0(i,t,r),!0}return!1}function Df(e,t,i,r){if(r={lane:2,revertLane:Sd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ec(e)){if(t)throw Error(s(479))}else t=Wu(e,i,r,2),t!==null&&Wn(t,e,2)}function ec(e){var t=e.alternate;return e===ct||t!==null&&t===ct}function T0(e,t){ds=Yl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function A0(e,t,i){if((i&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,C(e,i)}}var tc={readContext:wn,use:Kl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn,useEffectEvent:nn},w0={readContext:wn,use:Kl,useCallback:function(e,t){return Fn().memoizedState=[e,t===void 0?null:t],e},useContext:wn,useEffect:u0,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,Jl(4194308,4,p0.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Jl(4194308,4,e,t)},useInsertionEffect:function(e,t){Jl(4,2,e,t)},useMemo:function(e,t){var i=Fn();t=t===void 0?null:t;var r=e();if(Rr){_n(!0);try{e()}finally{_n(!1)}}return i.memoizedState=[r,t],r},useReducer:function(e,t,i){var r=Fn();if(i!==void 0){var l=i(t);if(Rr){_n(!0);try{i(t)}finally{_n(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=Vy.bind(null,ct,e),[r.memoizedState,e]},useRef:function(e){var t=Fn();return e={current:e},t.memoizedState=e},useState:function(e){e=bf(e);var t=e.queue,i=b0.bind(null,ct,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:wf,useDeferredValue:function(e,t){var i=Fn();return Rf(i,e,t)},useTransition:function(){var e=bf(!1);return e=_0.bind(null,ct,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var r=ct,l=Fn();if(pt){if(i===void 0)throw Error(s(407));i=i()}else{if(i=t(),jt===null)throw Error(s(349));(Et&127)!==0||Wm(r,t,i)}l.memoizedState=i;var u={value:i,getSnapshot:t};return l.queue=u,u0(Km.bind(null,r,u,e),[e]),r.flags|=2048,ps(9,{destroy:void 0},Zm.bind(null,r,u,i,t),null),i},useId:function(){var e=Fn(),t=jt.identifierPrefix;if(pt){var i=Pi,r=zi;i=(r&~(1<<32-Ln(r)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Wl++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=zy++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Nf,useFormState:r0,useActionState:r0,useOptimistic:function(e){var t=Fn();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=Df.bind(null,ct,!0,i),i.dispatch=t,[e,t]},useMemoCache:Sf,useCacheRefresh:function(){return Fn().memoizedState=Gy.bind(null,ct)},useEffectEvent:function(e){var t=Fn(),i={impl:e};return t.memoizedState=i,function(){if((Dt&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},R0={readContext:wn,use:Kl,useCallback:g0,useContext:wn,useEffect:Af,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:x0,useReducer:Ql,useRef:c0,useState:function(){return Ql(sa)},useDebugValue:wf,useDeferredValue:function(e,t){var i=sn();return v0(i,Bt.memoizedState,e,t)},useTransition:function(){var e=Ql(sa)[0],t=sn().memoizedState;return[typeof e=="boolean"?e:Oo(e),t]},useSyncExternalStore:Ym,useId:E0,useHostTransitionStatus:Nf,useFormState:s0,useActionState:s0,useOptimistic:function(e,t){var i=sn();return $m(i,Bt,e,t)},useMemoCache:Sf,useCacheRefresh:M0,useEffectEvent:f0},jy={readContext:wn,use:Kl,useCallback:g0,useContext:wn,useEffect:Af,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:x0,useReducer:Mf,useRef:c0,useState:function(){return Mf(sa)},useDebugValue:wf,useDeferredValue:function(e,t){var i=sn();return Bt===null?Rf(i,e,t):v0(i,Bt.memoizedState,e,t)},useTransition:function(){var e=Mf(sa)[0],t=sn().memoizedState;return[typeof e=="boolean"?e:Oo(e),t]},useSyncExternalStore:Ym,useId:E0,useHostTransitionStatus:Nf,useFormState:l0,useActionState:l0,useOptimistic:function(e,t){var i=sn();return Bt!==null?$m(i,Bt,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:M0,useEffectEvent:f0};function Uf(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:I({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Lf={enqueueSetState:function(e,t,i){e=e._reactInternals;var r=ai(),l=za(r);l.payload=t,i!=null&&(l.callback=i),t=Pa(e,l,r),t!==null&&(Wn(t,e,r),Co(t,e,r))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=ai(),l=za(r);l.tag=1,l.payload=t,i!=null&&(l.callback=i),t=Pa(e,l,r),t!==null&&(Wn(t,e,r),Co(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=ai(),r=za(i);r.tag=2,t!=null&&(r.callback=t),t=Pa(e,r,i),t!==null&&(Wn(t,e,i),Co(t,e,i))}};function C0(e,t,i,r,l,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,g):t.prototype&&t.prototype.isPureReactComponent?!So(i,r)||!So(l,u):!0}function N0(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&Lf.enqueueReplaceState(t,t.state,null)}function Cr(e,t){var i=t;if("ref"in t){i={};for(var r in t)r!=="ref"&&(i[r]=t[r])}if(e=e.defaultProps){i===t&&(i=I({},i));for(var l in e)i[l]===void 0&&(i[l]=e[l])}return i}function D0(e){Cl(e)}function U0(e){console.error(e)}function L0(e){Cl(e)}function nc(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function O0(e,t,i){try{var r=e.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Of(e,t,i){return i=za(i),i.tag=3,i.payload={element:null},i.callback=function(){nc(e,t)},i}function z0(e){return e=za(e),e.tag=3,e}function P0(e,t,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){O0(t,i,r)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){O0(t,i,r),typeof l!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function ky(e,t,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=i.alternate,t!==null&&Sr(t,i,l,!0),i=Rn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return zn===null?Mc():i.alternate===null&&an===0&&(an=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Vl?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([r]):t.add(r),vd(e,r,l)),!1;case 22:return i.flags|=65536,r===Vl?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([r]):i.add(r)),vd(e,r,l)),!1}throw Error(s(435,i.tag))}return vd(e,r,l),Mc(),!1}if(pt)return t=Rn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==$u&&(e=Error(s(422),{cause:r}),bo(ui(e,i)))):(r!==$u&&(t=Error(s(423),{cause:r}),bo(ui(t,i))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=ui(r,i),l=Of(e.stateNode,r,l),uf(e,l),an!==4&&(an=2)),!1;var u=Error(s(520),{cause:r});if(u=ui(u,i),jo===null?jo=[u]:jo.push(u),an!==4&&(an=2),t===null)return!0;r=ui(r,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=l&-l,i.lanes|=e,e=Of(i.stateNode,r,e),uf(i,e),!1;case 1:if(t=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ka===null||!ka.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=z0(l),P0(l,e,i,r),uf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var zf=Error(s(461)),fn=!1;function mn(e,t,i,r){t.child=e===null?Hm(t,null,i,r):wr(t,e.child,i,r)}function I0(e,t,i,r,l){i=i.render;var u=t.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return Er(t),r=xf(e,t,i,g,u,l),b=vf(),e!==null&&!fn?(_f(e,t,l),oa(e,t,l)):(pt&&b&&zl(t),t.flags|=1,mn(e,t,r,l),t.child)}function B0(e,t,i,r,l){if(e===null){var u=i.type;return typeof u=="function"&&!Zu(u)&&u.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=u,F0(e,t,u,r,l)):(e=Ll(i.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!jf(e,l)){var g=u.memoizedProps;if(i=i.compare,i=i!==null?i:So,i(g,r)&&e.ref===t.ref)return oa(e,t,l)}return t.flags|=1,e=ta(u,r),e.ref=t.ref,e.return=t,t.child=e}function F0(e,t,i,r,l){if(e!==null){var u=e.memoizedProps;if(So(u,r)&&e.ref===t.ref)if(fn=!1,t.pendingProps=r=u,jf(e,l))(e.flags&131072)!==0&&(fn=!0);else return t.lanes=e.lanes,oa(e,t,l)}return Pf(e,t,i,r,l)}function H0(e,t,i,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(r=t.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,t.child=null;return G0(e,t,u,i,r)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hl(t,u!==null?u.cachePool:null),u!==null?jm(t,u):df(),km(t);else return r=t.lanes=536870912,G0(e,t,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(Hl(t,u.cachePool),jm(t,u),Fa(),t.memoizedState=null):(e!==null&&Hl(t,null),df(),Fa());return mn(e,t,l,i),t.child}function Po(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function G0(e,t,i,r,l){var u=sf();return u=u===null?null:{parent:cn._currentValue,pool:u},t.memoizedState={baseLanes:i,cachePool:u},e!==null&&Hl(t,null),df(),km(t),e!==null&&Sr(e,t,r,!0),t.childLanes=l,null}function ic(e,t){return t=ac({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function V0(e,t,i){return wr(t,e.child,null,i),e=ic(t,t.pendingProps),e.flags|=2,ei(t),t.memoizedState=null,e}function Xy(e,t,i){var r=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pt){if(r.mode==="hidden")return e=ic(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Po(null,e);if(pf(t),(e=Yt)?(e=px(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=Tm(e),i.return=t,t.child=i,Sn=t,Yt=null)):e=null,e===null)throw Da(t);return t.lanes=536870912,null}return ic(t,r)}var u=e.memoizedState;if(u!==null){var g=u.dehydrated;if(pf(t),l)if(t.flags&256)t.flags&=-257,t=V0(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(fn||Sr(e,t,i,!1),l=(i&e.childLanes)!==0,fn||l){if(Ia.current===null){if(r=jt,r!==null&&(g=Q(r,i),g!==0&&g!==u.retryLane))throw u.retryLane=g,xr(e,g),Wn(r,e,g),zf;Mc()}t=V0(e,t,i)}else e=u.treeContext,Yt=mi(g.nextSibling),Sn=t,pt=!0,Na=null,hi=!1,e!==null&&Rm(t,e),t=ic(t,r),t.flags|=134221824;return t}return e=ta(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ms(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Pf(e,t,i,r,l){return Er(t),i=xf(e,t,i,r,void 0,l),r=vf(),e!==null&&!fn?(_f(e,t,l),oa(e,t,l)):(pt&&r&&zl(t),t.flags|=1,mn(e,t,i,l),t.child)}function j0(e,t,i,r,l,u){return Er(t),t.updateQueue=null,i=qm(t,r,i,l),Xm(e),r=vf(),e!==null&&!fn?(_f(e,t,u),oa(e,t,u)):(pt&&r&&zl(t),t.flags|=1,mn(e,t,i,u),t.child)}function k0(e,t,i,r,l){if(Er(t),t.stateNode===null){var u=rs,g=i.contextType;typeof g=="object"&&g!==null&&(u=wn(g)),u=new i(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Lf,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},lf(t),g=i.contextType,u.context=typeof g=="object"&&g!==null?wn(g):rs,u.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Uf(t,i,g,r),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&Lf.enqueueReplaceState(u,u.state,null),Do(t,r,u,l),No(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,z=Cr(i,b);u.props=z;var W=u.context,ie=i.contextType;g=rs,typeof ie=="object"&&ie!==null&&(g=wn(ie));var me=i.getDerivedStateFromProps;ie=typeof me=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,ie||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||W!==g)&&N0(t,u,r,g),Oa=!1;var q=t.memoizedState;u.state=q,Do(t,r,u,l),No(),W=t.memoizedState,b||q!==W||Oa?(typeof me=="function"&&(Uf(t,i,me,r),W=t.memoizedState),(z=Oa||C0(t,i,z,r,q,W,g))?(ie||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=W),u.props=r,u.state=W,u.context=g,r=z):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,cf(e,t),g=t.memoizedProps,ie=Cr(i,g),u.props=ie,me=t.pendingProps,q=u.context,W=i.contextType,z=rs,typeof W=="object"&&W!==null&&(z=wn(W)),b=i.getDerivedStateFromProps,(W=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==me||q!==z)&&N0(t,u,r,z),Oa=!1,q=t.memoizedState,u.state=q,Do(t,r,u,l),No();var ee=t.memoizedState;g!==me||q!==ee||Oa||e!==null&&e.dependencies!==null&&Bl(e.dependencies)?(typeof b=="function"&&(Uf(t,i,b,r),ee=t.memoizedState),(ie=Oa||C0(t,i,ie,r,q,ee,z)||e!==null&&e.dependencies!==null&&Bl(e.dependencies))?(W||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ee,z),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ee,z)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ee),u.props=r,u.state=ee,u.context=z,r=ie):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,ms(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=wr(t,e.child,null,l),t.child=wr(t,null,i,l)):mn(e,t,i,l),t.memoizedState=u.state,e=t.child):e=oa(e,t,l),e}function X0(e,t,i,r){return _r(),t.flags|=256,mn(e,t,i,r),t.child}var If={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(e){return{baseLanes:e,cachePool:Om()}}function Ff(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=ii),e}function q0(e,t,i){var r=t.pendingProps,l=!1,u=(t.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(pt){if(l?Ba(t):Fa(),(e=Yt)?(e=px(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=Tm(e),i.return=t,t.child=i,Sn=t,Yt=null)):e=null,e===null)throw Da(t);return Bd(e)?t.lanes=32:t.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Fa(),l=t.mode,u=ac({mode:"hidden",children:u},l),r=vr(r,l,i,null),u.return=t,r.return=t,u.sibling=r,t.child=u,r=t.child,r.memoizedState=Bf(i),r.childLanes=Ff(e,g,i),t.memoizedState=If,Po(null,r)):(Ba(t),Hf(t,u))}var b=e.memoizedState;if(b!==null){var z=b.dehydrated;if(z!==null)return qy(e,t,u,g,r,z,b,i)}return l?(Fa(),l=r.fallback,u=t.mode,b=e.child,z=b.sibling,r=ta(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&1206910976,z!==null?l=ta(z,l):(l=vr(l,u,i,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,Po(null,r),r=t.child,l=e.child.memoizedState,l===null?l=Bf(i):(u=l.cachePool,u!==null?(b=cn._currentValue,u=u.parent!==b?{parent:b,pool:b}:u):u=Om(),l={baseLanes:l.baseLanes|i,cachePool:u}),r.memoizedState=l,r.childLanes=Ff(e,g,i),t.memoizedState=If,Po(e.child,r)):(Ba(t),i=e.child,e=i.sibling,i=ta(i,{mode:"visible",children:r.children}),i.return=t,i.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=i,t.memoizedState=null,i)}function Hf(e,t){return t=ac({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ac(e,t){return e=kn(22,e,null,t),e.lanes=0,e}function rc(e,t,i){return wr(t,e.child,null,i),e=Hf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qy(e,t,i,r,l,u,g,b){if(i)return t.flags&256?(Ba(t),t.flags&=-257,rc(e,t,b)):t.memoizedState!==null?(Fa(),t.child=e.child,t.flags|=128,null):(Fa(),u=l.fallback,g=t.mode,l=ac({mode:"visible",children:l.children},g),u=vr(u,g,b,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,wr(t,e.child,null,b),l=t.child,l.memoizedState=Bf(b),l.childLanes=Ff(e,r,b),t.memoizedState=If,Po(null,l));if(Ba(t),Bd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,bo({value:l,source:null,stack:null})),rc(e,t,b)}if(fn||Sr(e,t,b,!1),r=(b&e.childLanes)!==0,fn||r){if(Ia.current!==null)return rc(e,t,b);if(r=jt,r!==null&&(l=Q(r,b),l!==0&&l!==g.retryLane))throw g.retryLane=l,xr(e,l),Wn(r,e,l),zf;return Id(u)||Mc(),rc(e,t,b)}return Id(u)?(t.flags|=192,t.child=e.child,null):(e=g.treeContext,Yt=mi(u.nextSibling),Sn=t,pt=!0,Na=null,hi=!1,e!==null&&Rm(t,e),t=Hf(t,l.children),t.flags|=134221824,t)}function Y0(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,i)}function W0(e){for(var t=null;e!==null;){var i=e.alternate;i!==null&&ql(i)===null&&(t=e),e=e.sibling}return t}function sc(e,t,i,r,l,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:u}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=i,g.tailMode=l,g.treeForkCount=u)}function Gf(e){var t=e.child;for(e.child=null;t!==null;){var i=t.sibling;t.sibling=e.child,e.child=t,t=i}}function Vf(e,t,i){var r=t.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var g=Cn.current;if(t.flags&128)return Uo(t,g),null;var b=(g&2)!==0;if(b?(g=g&1|2,t.flags|=128):g&=1,Uo(t,g),l==="backwards"&&e!==null?(Gf(e),mn(e,t,r,i),Gf(e)):mn(e,t,r,i),r=pt?Mo:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Y0(e,i,t);else if(e.tag===19)Y0(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":i=W0(t.child),i===null?(l=t.child,t.child=null):(l=i.sibling,i.sibling=null,Gf(t)),sc(t,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(i=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ql(e)===null){t.child=l;break}e=l.sibling,l.sibling=i,i=l,l=e}sc(t,!0,i,null,u,r);break;case"together":sc(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:i=W0(t.child),i===null?(l=t.child,t.child=null):(l=i.sibling,i.sibling=null),sc(t,!1,l,i,u,r)}return t.child}function Z0(e,t,i){var r=t.pendingProps;return Ua(t,t.type,r.value),mn(e,t,r.children,i),t.child}function oa(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(Sr(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,i=ta(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=ta(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function jf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Bl(e)))}function Yy(e,t,i){switch(t.tag){case 3:ne(t,t.stateNode.containerInfo),Ua(t,cn,e.memoizedState.cache),_r();break;case 27:case 5:Ee(t);break;case 4:ne(t,t.stateNode.containerInfo);break;case 10:Ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pf(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ba(t),t.flags|=128,null;r=Sr(e,t,i,!1);var l=t.child.childLanes;return r||(i&l)!==0?q0(e,t,i):(Ba(t),e=oa(e,t,i),e!==null?e.sibling:null)}Ba(t);break;case 19:if(t.flags&128)return Vf(e,t,i);if(l=(e.flags&128)!==0,r=(i&t.childLanes)!==0,r||(Sr(e,t,i,!1),r=(i&t.childLanes)!==0),l){if(r)return Vf(e,t,i);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uo(t,Cn.current),r)break;return null;case 22:return t.lanes=0,H0(e,t,i,t.pendingProps);case 24:Ua(t,cn,e.memoizedState.cache)}return oa(e,t,i)}function K0(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)fn=!0;else{if(!jf(e,i)&&(t.flags&128)===0)return fn=!1,Yy(e,t,i);fn=(e.flags&131072)!==0}else fn=!1,pt&&(t.flags&1048576)!==0&&wm(t,Mo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Tr(t.elementType),t.type=e,typeof e=="function")Zu(e)?(r=Cr(e,r),t.tag=1,t=k0(null,t,e,r,i)):(t.tag=0,t=Pf(null,t,e,r,i));else{if(e!=null){var l=e.$$typeof;if(l===k){t.tag=11,t=I0(null,t,e,r,i);break e}else if(l===_e){t.tag=14,t=B0(null,t,e,r,i);break e}else if(l===de){t.tag=10,t.type=e,t=Z0(null,t,i);break e}}throw t=Ne(e)||e,Error(s(306,t,""))}}return t;case 0:return Pf(e,t,t.type,t.pendingProps,i);case 1:return r=t.type,l=Cr(r,t.pendingProps),k0(e,t,r,l,i);case 3:e:{if(ne(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var u=t.memoizedState;l=u.element,cf(e,t),Do(t,r,null,i);var g=t.memoizedState;if(r=g.cache,Ua(t,cn,r),r!==u.cache&&nf(t,[cn],i,!0),No(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=X0(e,t,r,i);break e}else if(r!==l){l=ui(Error(s(424)),t),bo(l),t=X0(e,t,r,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Yt=mi(e.firstChild),Sn=t,pt=!0,Na=null,hi=!0,i=Hm(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(_r(),r===l){t=oa(e,t,i);break e}mn(e,t,r,i)}t=t.child}return t;case 26:return ms(e,t),e===null?(i=Sx(t.type,null,t.pendingProps,null))?t.memoizedState=i:pt||(t.stateNode=ex(t.type,t.pendingProps,O.current,t)):t.memoizedState=Sx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ee(t),e===null&&pt&&(r=t.stateNode=xx(t.type,t.pendingProps,O.current),Sn=t,hi=!0,l=Yt,Ya(t.type)?(Fd=l,Yt=mi(r.firstChild)):Yt=l),mn(e,t,t.pendingProps.children,i),ms(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pt&&((l=r=Yt)&&(r=GS(r,t.type,t.pendingProps,hi),r!==null?(t.stateNode=r,Sn=t,Yt=mi(r.firstChild),hi=!1,l=!0):l=!1),l||Da(t)),Ee(t),l=t.type,u=t.pendingProps,g=e!==null?e.memoizedProps:null,r=u.children,Nd(l,u)?r=null:g!==null&&Nd(l,g)&&(t.flags|=32),t.memoizedState!==null&&(l=xf(e,t,Py,null,null,i),Ls._currentValue=l),ms(e,t),mn(e,t,r,i),t.child;case 6:return e===null&&pt&&((e=i=Yt)&&(i=VS(i,t.pendingProps,hi),i!==null?(t.stateNode=i,Sn=t,Yt=null,e=!0):e=!1),e||Da(t)),null;case 13:return q0(e,t,i);case 4:return ne(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,i):mn(e,t,r,i),t.child;case 11:return I0(e,t,t.type,t.pendingProps,i);case 7:return r=t.pendingProps,ms(e,t),mn(e,t,r,i),t.child;case 8:return mn(e,t,t.pendingProps.children,i),t.child;case 12:return mn(e,t,t.pendingProps.children,i),t.child;case 10:return Z0(e,t,i);case 9:return l=t.type._context,r=t.pendingProps.children,Er(t),l=wn(l),r=r(l),t.flags|=1,mn(e,t,r,i),t.child;case 14:return B0(e,t,t.type,t.pendingProps,i);case 15:return F0(e,t,t.type,t.pendingProps,i);case 19:return Vf(e,t,i);case 31:return Xy(e,t,i);case 22:return H0(e,t,i,t.pendingProps);case 24:return Er(t),r=wn(cn),e===null?(l=sf(),l===null&&(l=jt,u=af(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),t.memoizedState={parent:r,cache:l},lf(t),Ua(t,cn,l)):((e.lanes&i)!==0&&(cf(e,t),Do(t,null,null,i),No()),l=e.memoizedState,u=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ua(t,cn,r)):(r=u.cache,Ua(t,cn,r),r!==l.cache&&nf(t,[cn],i,!0))),mn(e,t,t.pendingProps.children,i),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!=="auto"?t.flags|=e===null?18882560:18874368:pt&&zl(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:ms(e,t),mn(e,t,r.children,i),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function la(e){e.flags|=4}function kf(e,t,i,r,l){var u;if((u=(e.mode&32)!==0)&&(u=i===null?Tx(t,r):Tx(t,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Dg())e.flags|=8192;else throw Ar=Vl,of}else e.flags&=-16777217}function Q0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ax(t))if(Dg())e.flags|=8192;else throw Ar=Vl,of}function oc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vl():536870912,e.lanes|=t,ys|=t)}function Io(e,t){if(!pt)switch(e.tailMode){case"visible":break;case"collapsed":for(var i=e.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null}}function Wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var l=e.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function Wy(e,t,i){var r=t.pendingProps;switch(Ju(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(t),null;case 1:return Wt(t),null;case 3:return i=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),aa(cn),ve(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ls(t)?la(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ef())),Wt(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(la(t),u!==null?(Wt(t),Q0(t,u)):(Wt(t),kf(t,l,null,r,i))):u?u!==e.memoizedState?(la(t),Wt(t),Q0(t,u)):(Wt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&la(t),Wt(t),kf(t,l,e,r,i)),null;case 27:if(xe(t),i=O.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&la(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Wt(t),t.subtreeFlags&=-33554433,null}e=dt.current,ls(t)?Cm(t):(e=xx(l,r,i),t.stateNode=e,la(t))}return Wt(t),t.subtreeFlags&=-33554433,null;case 5:if(xe(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&la(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Wt(t),t.subtreeFlags&=-33554433,null}if(u=dt.current,ls(t))Cm(t);else{var g=Wo(O.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}u[De]=t,u[Oe]=r;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=u;e:switch(Dn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&la(t)}}return Wt(t),t.subtreeFlags&=-33554433,kf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&la(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=O.current,ls(t)){if(e=t.stateNode,i=t.memoizedProps,r=null,l=Sn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[De]=t,e=!!(e.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Kg(e.nodeValue,i)),e||Da(t,!0)}else e=Wo(e).createTextNode(r),e[De]=t,t.stateNode=e}return Wt(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(r=ls(t),i!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[De]=t}else _r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Wt(t),e=!1}else i=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(ei(t),t):(ei(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Wt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ls(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[De]=t}else _r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Wt(t),l=!1}else l=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(ei(t),t):(ei(t),null)}return ei(t),(t.flags&128)!==0?(t.lanes=i,t):(i=r!==null,e=e!==null&&e.memoizedState!==null,i&&(r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),oc(t,t.updateQueue),Wt(t),null);case 4:return ve(),e===null&&Td(t.stateNode.containerInfo),t.flags|=67108864,Wt(t),null;case 10:return aa(t.type),Wt(t),null;case 19:if(mf(t),r=t.memoizedState,r===null)return Wt(t),null;if(l=(t.flags&128)!==0,u=r.rendering,u===null)if(l)Io(r,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ql(e),u!==null){for(t.flags|=128,Io(r,!1),e=u.updateQueue,t.updateQueue=e,oc(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)bm(i,e),i=i.sibling;return Uo(t,Cn.current&1|2),pt&&na(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&X()>_c&&(t.flags|=128,l=!0,Io(r,!1),t.lanes=4194304)}else{if(!l)if(e=ql(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,oc(t,e),Io(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!pt)return Wt(t),null}else 2*X()-r.renderingStartTime>_c&&i!==536870912&&(t.flags|=128,l=!0,Io(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(i=e;i!==null;){if(i.alternate!==null){i=!1;break e}i=i.sibling}i=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=X(),e.sibling=null,u=Cn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||pt?Uo(t,u):(i=u,Ce(Rn,t),Ce(Cn,i),zn===null&&(zn=t)),pt&&na(t,r.treeForkCount),e}return Wt(t),null;case 22:case 23:return ei(t),hf(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(i&536870912)!==0&&(t.flags&128)===0&&(Wt(t),t.subtreeFlags&6&&(t.flags|=8192)):Wt(t),i=t.updateQueue,i!==null&&oc(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==i&&(t.flags|=2048),e!==null&&qe(br),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),aa(cn),Wt(t),null;case 25:return null;case 30:return t.flags|=33554432,Wt(t),null}throw Error(s(156,t.tag))}function Zy(e,t){switch(Ju(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(cn),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(ei(t),t.alternate===null)throw Error(s(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ei(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return mf(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ve(),null;case 10:return aa(t.type),null;case 22:case 23:return ei(t),hf(),e!==null&&qe(br),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(cn),null;case 25:return null;default:return null}}function J0(e,t){switch(Ju(t),t.tag){case 3:aa(cn),ve();break;case 26:case 27:case 5:xe(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&ei(t);break;case 13:ei(t);break;case 19:mf(t);break;case 10:aa(t.type);break;case 22:case 23:ei(t),hf(),e!==null&&qe(br);break;case 24:aa(cn)}}function Bo(e,t){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&e)===e){r=void 0;var u=i.create,g=i.inst;r=u(),g.destroy=r}i=i.next}while(i!==l)}}catch(b){zt(t,t.return,b)}}function Ha(e,t,i){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,l=t;var z=i,W=b;try{W()}catch(ie){zt(l,z,ie)}}}r=r.next}while(r!==u)}}catch(ie){zt(t,t.return,ie)}}function $0(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{Vm(t,i)}catch(r){zt(e,e.return,r)}}}function eg(e,t,i){i.props=Cr(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(r){zt(e,t,r)}}function Ii(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=$i(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=ox(u)),r=l.ref;break;case 7:if(e.stateNode===null){var g=new ri(e);m(e.child,!1,FS,g,void 0,void 0),e.stateNode=g}r=e.stateNode;break;default:r=e.stateNode}typeof i=="function"?e.refCleanup=i(r):i.current=r}}catch(b){zt(e,t,b)}}function Nn(e,t){var i=e.ref,r=e.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){zt(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){zt(e,t,l)}else i.current=null}function lc(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var i=0;i<t.length;i++)hx(e.stateNode,t[i])}function tg(e){for(var t=e.return;t!==null&&(qf(t)&&hx(e.stateNode,t.stateNode),!Xf(t));)t=t.return}function Fo(e){for(var t=e.return;t!==null&&(qf(t)&&HS(e.stateNode,t.stateNode),!Xf(t));)t=t.return}function Xf(e){return e.tag===5||e.tag===3||e.tag===27}function qf(e){return e&&e.tag===7&&e.stateNode!==null}function Yf(e){var t=e.type,i=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break e;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){zt(e,e.return,l)}}function Wf(e,t,i){try{var r=e.stateNode;SS(r,e.type,i,t),r[Oe]=t}catch(l){zt(e,e.return,l)}}function ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Zf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,t,i,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(l),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Oi)),lc(e,r),Ct=!0;else if(l!==4&&(l===27&&(lc(e,r),r=null,Ya(e.type)&&(i=e.stateNode,t=null)),e=e.child,e!==null))for(Kf(e,t,i,r),e=e.sibling;e!==null;)Kf(e,t,i,r),e=e.sibling}function cc(e,t,i,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?i.insertBefore(l,t):i.appendChild(l),lc(e,r),Ct=!0;else if(l!==4&&(l===27&&(lc(e,r),r=null,Ya(e.type)&&(i=e.stateNode)),e=e.child,e!==null))for(cc(e,t,i,r),e=e.sibling;e!==null;)cc(e,t,i,r),e=e.sibling}function ig(e){var t=e.stateNode,i=e.memoizedProps;try{for(var r=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Dn(t,r,i),t[De]=e,t[Oe]=i}catch(u){zt(e,e.return,u)}}var uc=!1,ti=null;function ag(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(uc=!0)}var Bi=null;function rg(){var e=Bi;return Bi=null,e}var Xn=0;function gs(e,t,i,r,l){return Xn=0,sg(e.child,t,i,r,l)}function sg(e,t,i,r,l){for(var u=!1;e!==null;){if(e.tag===5){var g=e.stateNode;if(r!==null){var b=Ld(g);r.push(b),b.view&&(u=!0)}else u||Ld(g).view&&(u=!0);uc=!0,rx(g,Xn===0?t:t+"_"+Xn,i),Xn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||sg(e.child,t,i,r,l)&&(u=!0));e=e.sibling}return u}function Fi(e,t){for(;e!==null;)e.tag===5?sx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Fi(e.child,t)),e=e.sibling}function fc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(fc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(s(544));var i=t.name;t=ea(t.default,t.share),t!=="none"&&(gs(e,i,t,null,!1)||Fi(e.child,!1))}e=e.sibling}}function Qf(e,t){if(e.tag===30){var i=e.stateNode,r=e.memoizedProps,l=$i(r,i),u=ea(r.default,i.paired?r.share:r.enter);u!=="none"?gs(e,l,u,null,!1)?(fc(e),i.paired||t||bs(e,r.onEnter)):Fi(e.child,!1):fc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Qf(e,t),e=e.sibling;else fc(e)}function Jf(e){if(ti!==null&&ti.size!==0){var t=ti;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var i=e.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=t.get(r);if(l!==void 0){var u=ea(i.default,i.share);if(u!=="none"&&(gs(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,bs(e,i.onShare)):Fi(e.child,!1)),t.delete(r),t.size===0)break}}}Jf(e)}e=e.sibling}}}function $f(e){if(e.tag===30){var t=e.memoizedProps,i=$i(t,e.stateNode),r=ti!==null?ti.get(i):void 0,l=ea(t.default,r!==void 0?t.share:t.exit);l!=="none"&&(gs(e,i,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ti.delete(i),bs(e,t.onShare)):bs(e,t.onExit):Fi(e.child,!1)),ti!==null&&Jf(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)$f(e),e=e.sibling;else ti!==null&&Jf(e)}function og(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,i=$i(t,e.stateNode);t=ea(t.default,t.update),e.flags&=-5,t!=="none"&&gs(e,i,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&og(e);e=e.sibling}}function ed(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Fi(e.child,!1))}ed(e)}e=e.sibling}}function dc(e){if(e.tag===30)e.stateNode.paired=null,Fi(e.child,!1),ed(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)dc(e),e=e.sibling;else ed(e)}function lg(e){for(e=e.child;e!==null;)e.tag===30?Fi(e.child,!1):(e.subtreeFlags&33554432)!==0&&lg(e),e=e.sibling}function td(e,t,i,r,l,u,g){for(var b=!1;t!==null;){if(t.tag===5){var z=t.stateNode;if(u!==null&&Xn<u.length){var W=u[Xn],ie=Ld(z);(W.view||ie.view)&&(b=!0);var me;if(me=(e.flags&4)===0)if(ie.clip)me=!0;else{me=W.rect;var q=ie.rect;me=me.y!==q.y||me.x!==q.x||me.height!==q.height||me.width!==q.width}me&&(e.flags|=4),ie.abs?ie=!W.abs:(W=W.rect,ie=ie.rect,ie=W.height!==ie.height||W.width!==ie.width),ie&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&rx(z,Xn===0?i:i+"_"+Xn,l),b&&(e.flags&4)!==0||(Bi===null&&(Bi=[]),Bi.push(z,Xn===0?r:r+"_"+Xn,t.memoizedProps)),Xn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&g?e.flags|=t.flags&32:td(e,t.child,i,r,l,u,g)&&(b=!0));t=t.sibling}return b}function cg(e,t){for(e=e.child;e!==null;){if(e.tag===30){var i=e.memoizedProps,r=e.stateNode,l=$i(i,r),u=ea(i.default,i.update),g;g=e.memoizedState,e.memoizedState=null,r=e;var b=e.child;Xn=0,l=td(r,b,l,l,u,g,!1),(e.flags&4)!==0&&l&&bs(e,i.onUpdate)}else(e.subtreeFlags&33554432)!==0&&cg(e);e=e.sibling}}var En=!1,Ut=!1,Hi=!1,nd=!1,ug=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Gi=!1,Ho=!1,hc=!1,id=!1;function Ky(e,t,i){if(e=e.containerInfo,Rd=Os,e=pm(e),Vu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break e}var b=0,z=-1,W=-1,ie=0,me=0,q=e,ee=null;t:for(;;){for(var Le;q!==r||u!==0&&q.nodeType!==3||(z=b+u),q!==g||l!==0&&q.nodeType!==3||(W=b+l),q.nodeType===3&&(b+=q.nodeValue.length),(Le=q.firstChild)!==null;)ee=q,q=Le;for(;;){if(q===e)break t;if(ee===r&&++ie===u&&(z=b),ee===g&&++me===l&&(W=b),(Le=q.nextSibling)!==null)break;q=ee,ee=q.parentNode}q=Le}r=z===-1||W===-1?null:{start:z,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(Cd={focusedElem:e,selectionRange:r},Os=!1,i=(i&335544064)===i,Mn=t,t=i?9270:1024;Mn!==null;){if(e=Mn,i&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)i&&$f(r[u]);if(e.alternate===null&&(e.flags&2)!==0)i&&ag(e),pc(i);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&$f(r),pc(i);continue}else if(r!==null&&r.memoizedState!==null){i&&ag(e),pc(i);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,Mn=r):(i&&og(e),pc(i))}}ti=null}function pc(e){for(;Mn!==null;){var t=Mn,i=e,r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var u=t.stateNode;try{var g=Cr(t.type,l);i=u.getSnapshotBeforeUpdate(g,r),u.__reactInternalSnapshotBeforeUpdate=i}catch(b){zt(t,t.return,b)}}break;case 3:if((l&1024)!==0){if(r=t.stateNode.containerInfo,i=r.nodeType,i===9)Pd(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Pd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=$i(r.memoizedProps,r.stateNode),l=t.memoizedProps,l=ea(l.default,l.update),l!=="none"&&gs(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,Mn=r;break}Mn=t.return}}function fg(e,t,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(e,i),r&4&&Bo(5,i);break;case 1:if(Vi(e,i),r&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(g){zt(i,i.return,g)}else{var l=Cr(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){zt(i,i.return,g)}}r&64&&$0(i),r&512&&Ii(i,i.return);break;case 3:if(Vi(e,i),r&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Vm(e,t)}catch(g){zt(i,i.return,g)}}break;case 27:t===null&&r&4&&ig(i);case 26:case 5:Vi(e,i),t===null&&r&4&&Yf(i),r&512&&Ii(i,i.return);break;case 12:Vi(e,i);break;case 31:Vi(e,i),r&4&&mg(e,i);break;case 13:Vi(e,i),r&4&&gg(e,i),r&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=lS.bind(null,i),jS(e,i))));break;case 22:if(r=i.memoizedState!==null||En,!r){var u=t!==null&&t.memoizedState!==null||Ut;t=En,l=Ut,En=r,(Ut=u)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),bi(e,i,r)):Vi(e,i),En=t,Ut=l}break;case 30:Vi(e,i),r&512&&Ii(i,i.return);break;case 7:r&512&&Ii(i,i.return);default:Vi(e,i)}}function ad(e,t){for(e=e.child;e!==null;)dg(e,t),e=e.sibling}function dg(e,t){switch(e.tag){case 5:case 26:try{var i=e.stateNode;if(t){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(z){zt(e,e.return,z)}rd(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Ct=!0}catch(z){zt(e,e.return,z)}break;case 18:try{var b=e.stateNode;t?ax(b,!0):ax(e.stateNode,!1)}catch(z){zt(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&ad(e,t);break;default:ad(e,t)}}function rd(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var i=e,r=t;switch(i.tag){case 4:dg(i,r);break e;case 22:i.memoizedState===null&&rd(i,r);break e;default:rd(i,r)}}e=e.sibling}}function hg(e){var t=e.alternate;t!==null&&(e.alternate=null,hg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,qn=!1;function Ei(e,t,i){for(i=i.child;i!==null;)pg(e,t,i),i=i.sibling}function pg(e,t,i){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(bt,i)}catch{}switch(i.tag){case 26:Ut||Nn(i,t),Ei(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ut&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ut||Nn(i,t),Fo(i);var r=en,l=qn;Ya(i.type)&&(en=i.stateNode,qn=!1),Ei(e,t,i),vx(i.stateNode,i.type,i.memoizedProps),en=r,qn=l;break;case 5:Ut||Nn(i,t),Fo(i);case 6:if(i.tag===6&&Fo(i),r=en,l=qn,en=null,Ei(e,t,i),en=r,qn=l,en!==null)if(qn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(i.stateNode),Ct=!0}catch(u){zt(i,t,u)}else try{en.removeChild(i.stateNode),Ct=!0}catch(u){zt(i,t,u)}break;case 18:en!==null&&(qn?(e=en,ix(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),zs(e)):ix(en,i.stateNode));break;case 4:r=en,l=qn,en=i.stateNode.containerInfo,qn=!0,Ei(e,t,i),en=r,qn=l;break;case 0:case 11:case 14:case 15:Ha(2,i,t),Ut||Ha(4,i,t),Ei(e,t,i);break;case 1:Ut||(Nn(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"&&eg(i,t,r)),Ei(e,t,i);break;case 21:Ei(e,t,i);break;case 22:Ut=(r=Ut)||i.memoizedState!==null,Ei(e,t,i),Ut=r;break;case 30:Nn(i,t),Ei(e,t,i);break;case 7:Ut||Nn(i,t),Ei(e,t,i);break;default:Ei(e,t,i)}}function mg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zs(e)}catch(i){zt(t,t.return,i)}}}function gg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zs(e)}catch(i){zt(t,t.return,i)}}function Qy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ug),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ug),t;default:throw Error(s(435,e.tag))}}function mc(e,t){var i=Qy(e);t.forEach(function(r){if(!i.has(r)){i.add(r);var l=cS.bind(null,e,r);r.then(l,l)}})}function Hn(e,t,i){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],g=e,b=t,z=b;e:for(;z!==null;){switch(z.tag){case 27:if(Ya(z.type)){en=z.stateNode,qn=!1;break e}break;case 5:en=z.stateNode,qn=!1;break e;case 3:case 4:en=z.stateNode.containerInfo,qn=!0;break e}z=z.return}if(en===null)throw Error(s(160));pg(g,b,u),en=null,qn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)xg(t,e,i),t=t.sibling}var Mi=null;function xg(e,t,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var g=r[u];g.ref.impl=g.nextImpl}Hn(t,e,i),Gn(e),l&4&&(Ha(3,e,e.return),Bo(3,e),Ha(5,e,e.return));break;case 1:Hn(t,e,i),Gn(e),l&512&&(Ut||r===null||Nn(r,r.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?t:i.concat(t))));break;case 26:if(u=Mi,Hn(t,e,i),Gn(e),l&512&&(Ut||r===null||Nn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=e.memoizedState,r===null)if(i===null)if(e.stateNode===null)if(En)e.stateNode=ex(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,i=e.memoizedProps,l=u.ownerDocument||u;t:switch(t){case"title":r=l.getElementsByTagName("title")[0],(!r||r[qt]||r[De]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(t),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,t,i),r[De]=e,Kt(r),t=r;break e;case"link":if(u=bx("link","href",l).get(t+(i.href||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(g,1);break t}}r=l.createElement(t),Dn(r,t,i),l.head.appendChild(r);break;case"meta":if(u=bx("meta","content",l).get(t+(i.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(g,1);break t}}r=l.createElement(t),Dn(r,t,i),l.head.appendChild(r);break;default:throw Error(s(468,t))}r[De]=e,Kt(r),t=r}e.stateNode=t}else En||jd(u,e.type,e.stateNode);else e.stateNode=Mx(u,i,e.memoizedProps);else l!==i?(l===null?(t=r.stateNode,t===null||Ut||t.parentNode.removeChild(t)):l.count--,i===null?En||jd(u,e.type,e.stateNode):Mx(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Wf(e,e.memoizedProps,r.memoizedProps);break;case 27:Hn(t,e,i),Gn(e),l&512&&(Ut||r===null||Nn(r,r.return)),r!==null&&l&4&&Wf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Hi,Hi=!1,Hn(t,e,i),Hi=u,Gn(e),l&512&&(Ut||r===null||Nn(r,r.return)),e.flags&32){t=e.stateNode;try{Jr(t,""),Ct=!0}catch(ie){zt(e,e.return,ie)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,Wf(e,t,r!==null?r.memoizedProps:t)),l&1024&&(nd=!0);break;case 6:if(Hn(t,e,i),Gn(e),l&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,i=e.stateNode;try{i.nodeValue=t,Ct=!0}catch(ie){zt(e,e.return,ie)}}break;case 3:if(Ct=!1,Nc=null,u=Mi,Mi=Zo(t.containerInfo),Hn(t,e,i),Mi=u,Gn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(t.containerInfo)}catch(ie){zt(e,e.return,ie)}nd&&(nd=!1,vg(e)),Ct=!1;break;case 4:l=Hi,Hi=En,r=Bp(),u=Mi,Mi=Zo(e.stateNode.containerInfo),Hn(t,e,i),Gn(e),Mi=u,Ct&&Ho&&(hc=!0),Ct=r,Hi=l;break;case 12:Hn(t,e,i),Gn(e);break;case 31:Hn(t,e,i),Gn(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,mc(e,t)));break;case 13:Hn(t,e,i),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vc=X()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,mc(e,t)));break;case 22:u=e.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var b=En,z=Ut,W=Hi;En=b||u,Hi=W||u,Ut=z||g,Hn(t,e,i),Ut=z,Hi=W,En=b,Gn(e),l&8192&&(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,!u||r===null||g||En||Ut||(t=g||Ut,i=En,r=Ut,En=u||En,Ut=t,Ga(e,2),En=i,Ut=r),!u&&Hi||ad(e,u)),l&4&&(t=e.updateQueue,t!==null&&(i=t.retryQueue,i!==null&&(t.retryQueue=null,mc(e,i))));break;case 19:Hn(t,e,i),Gn(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,mc(e,t)));break;case 30:l&512&&(Ut||r===null||Nn(r,r.return)),l=Bp(),u=Ho,g=(i&335544064)===i,b=e.memoizedProps,Ho=g&&ea(b.default,b.update)!=="none",Hn(t,e,i),Gn(e),g&&r!==null&&Ct&&(e.flags|=4),Ho=u,Ct=l;break;case 21:break;case 7:l&512&&(Ut||r===null||Nn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Hn(t,e,i),Gn(e)}}function Gn(e){var t=e.flags;if(t&2){try{for(var i,r=e.return;r!==null;){if(ng(r)){i=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(qf(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(Xf(l))break;l=l.return}var g=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var b=i.stateNode,z=Zf(e);cc(e,z,b,g);break;case 5:var W=i.stateNode;i.flags&32&&(Jr(W,""),i.flags&=-33);var ie=Zf(e);cc(e,ie,W,g);break;case 3:case 4:var me=i.stateNode.containerInfo,q=Zf(e);Kf(e,q,me,g);break;default:throw Error(s(161))}}catch(ee){zt(e,e.return,ee)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vg(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Os=!0,t.reset(),Os=!1),e=e.sibling}}function xs(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)_g(t,e),t=t.sibling;else cg(t)}function _g(e,t){var i=e.alternate;if(i===null)Qf(e,!1);else switch(e.tag){case 3:if(id=Gi=!1,rg(),xs(t,e),!Gi&&!hc){if(e=Bi,e!==null)for(var r=0;r<e.length;r+=3){i=e[r];var l=e[r+1];sx(i,e[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),id=!0}Bi=null;break;case 5:xs(t,e);break;case 4:r=Gi,Gi=!1,xs(t,e),Gi&&(hc=!0),Gi=r;break;case 22:e.memoizedState===null&&(i.memoizedState!==null?Qf(e,!1):xs(t,e));break;case 30:r=Gi,l=rg(),Gi=!1,xs(t,e),Gi&&(e.flags|=4);var u=e.memoizedProps,g=e.stateNode;t=$i(u,g),g=$i(i.memoizedProps,g);var b=ea(u.default,u.update);b==="none"?t=!1:(u=i.memoizedState,i.memoizedState=null,i=e.child,Xn=0,t=td(e,i,t,g,b,u,!0),Xn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(bs(e,e.memoizedProps.onUpdate),Bi=l):l!==null&&(l.push.apply(l,Bi),Bi=l),Gi=(e.flags&32)!==0?!0:r;break;default:xs(t,e)}}function Vi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fg(e,t.alternate,t),t=t.sibling}function Ga(e,t){for(e=e.child;e!==null;){var i=e,r=t;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Ga(i,r);break;case 1:Nn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&eg(i,i.return,l),Ga(i,r);break;case 27:(r&2)!==0&&vx(i.stateNode,i.type,i.memoizedProps);case 5:Nn(i,i.return),i.tag!==5&&i.tag!==27||Fo(i),Ga(i,r);break;case 6:Fo(i);break;case 26:Nn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ut||l.parentNode.removeChild(l),Ga(i,r);break;case 22:i.memoizedState===null&&Ga(i,r);break;case 30:Nn(i,i.return),Ga(i,r);break;case 7:Nn(i,i.return);default:Ga(i,r)}e=e.sibling}}function bi(e,t,i){for(i=(t.subtreeFlags&8772)!==0?i:i&-2,t=t.child;t!==null;){var r=t.alternate,l=e,u=t,g=u.flags,b=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:bi(l,u,i),Bo(4,u);break;case 1:if(bi(l,u,i),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ie){zt(r,r.return,ie)}if(r=u,l=r.updateQueue,l!==null){var z=r.stateNode;try{var W=l.shared.hiddenCallbacks;if(W!==null)for(l.shared.hiddenCallbacks=null,l=0;l<W.length;l++)Gm(W[l],z)}catch(ie){zt(r,r.return,ie)}}b&&g&64&&$0(u),Ii(u,u.return);break;case 27:(i&2)!==0&&ig(u);case 5:u.tag!==5&&u.tag!==27||tg(u),bi(l,u,i),b&&r===null&&g&4&&Yf(u),Ii(u,u.return);break;case 6:tg(u);break;case 26:z=u.stateNode,u.memoizedState!==null||z===null||En||jd(Zo(z.ownerDocument),u.type,z),bi(l,u,i),b&&r===null&&g&4&&Yf(u),Ii(u,u.return);break;case 12:bi(l,u,i);break;case 31:bi(l,u,i),b&&g&4&&mg(l,u);break;case 13:bi(l,u,i),b&&g&4&&gg(l,u);break;case 22:u.memoizedState===null&&bi(l,u,i),Ii(u,u.return);break;case 30:bi(l,u,i),Ii(u,u.return);break;case 7:Ii(u,u.return);default:bi(l,u,i)}t=t.sibling}}function sd(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&To(i))}function od(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&To(e))}function pi(e,t,i,r){var l=(i&335544064)===i;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)yg(e,t,i,r),t=t.sibling;else l&&lg(t)}function yg(e,t,i,r){var l=(i&335544064)===i;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&dc(t);var u=t.flags;switch(t.tag){case 0:case 11:case 15:pi(e,t,i,r),u&2048&&Bo(9,t);break;case 1:pi(e,t,i,r);break;case 3:pi(e,t,i,r),l&&id&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,t.alternate!==null&&(u=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==u&&(t.refCount++,u!=null&&To(u)));break;case 12:if(u&2048){pi(e,t,i,r),u=t.stateNode;try{var g=t.memoizedProps,b=g.id,z=g.onPostCommit;typeof z=="function"&&z(b,t.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(W){zt(t,t.return,W)}}else pi(e,t,i,r);break;case 31:pi(e,t,i,r);break;case 13:pi(e,t,i,r);break;case 23:break;case 22:g=t.stateNode,b=t.alternate,t.memoizedState!==null?(l&&b!==null&&b.memoizedState===null&&dc(b),g._visibility&2?pi(e,t,i,r):Go(e,t)):(l&&b!==null&&b.memoizedState!==null&&dc(t),g._visibility&2?pi(e,t,i,r):(g._visibility|=2,vs(e,t,i,r,(t.subtreeFlags&10256)!==0||!1))),u&2048&&sd(b,t);break;case 24:pi(e,t,i,r),u&2048&&od(t.alternate,t);break;case 30:l&&(u=t.alternate,u!==null&&(Fi(u.child,!0),Fi(t.child,!0))),pi(e,t,i,r);break;default:pi(e,t,i,r)}}function vs(e,t,i,r,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,g=t,b=i,z=r,W=g.flags;switch(g.tag){case 0:case 11:case 15:vs(u,g,b,z,l),Bo(8,g);break;case 23:break;case 22:var ie=g.stateNode;g.memoizedState!==null?ie._visibility&2?vs(u,g,b,z,l):Go(u,g):(ie._visibility|=2,vs(u,g,b,z,l)),l&&W&2048&&sd(g.alternate,g);break;case 24:vs(u,g,b,z,l),l&&W&2048&&od(g.alternate,g);break;default:vs(u,g,b,z,l)}t=t.sibling}}function Go(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,r=t,l=r.flags;switch(r.tag){case 22:Go(i,r),l&2048&&sd(r.alternate,r);break;case 24:Go(i,r),l&2048&&od(r.alternate,r);break;default:Go(i,r)}t=t.sibling}}var Nr=8192;function Dr(e,t,i){if(e.subtreeFlags&Nr)for(e=e.child;e!==null;)Sg(e,t,i),e=e.sibling}function Sg(e,t,i){switch(e.tag){case 26:Dr(e,t,i),e.flags&Nr&&(e.memoizedState!==null?iE(i,Mi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Rx(i,e)));break;case 5:Dr(e,t,i),e.flags&Nr&&(e=e.stateNode,(t&335544128)===t&&Rx(i,e));break;case 3:case 4:var r=Mi;Mi=Zo(e.stateNode.containerInfo),Dr(e,t,i),Mi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Nr,Nr=16777216,Dr(e,t,i),Nr=r):Dr(e,t,i));break;case 30:if((e.flags&Nr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ti===null&&(ti=new Map),ti.set(r,l)}Dr(e,t,i);break;default:Dr(e,t,i)}}function Eg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Vo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];Mn=r,bg(r,e)}Eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gc(e)):Vo(e);break;default:Vo(e)}}function gc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];Mn=r,bg(r,e)}Eg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ha(8,t,t.return),gc(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,gc(t));break;default:gc(t)}e=e.sibling}}function bg(e,t){for(;Mn!==null;){var i=Mn;switch(i.tag){case 0:case 11:case 15:Ha(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:To(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,Mn=r;else e:for(i=e;Mn!==null;){r=Mn;var l=r.sibling,u=r.return;if(hg(r),r===i){Mn=null;break e}if(l!==null){l.return=u,Mn=l;break e}Mn=u}}}var Jy={getCacheForType:function(e){var t=wn(cn),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return wn(cn).controller.signal}},$y=typeof WeakMap=="function"?WeakMap:Map,Dt=0,jt=null,_t=null,Et=0,Ot=0,ni=null,Va=!1,_s=!1,ld=!1,ca=0,an=0,ja=0,Ur=0,xc=0,ii=0,ys=0,jo=null,Yn=null,cd=!1,vc=0,Tg=0,_c=1/0,yc=null,ka=null,tn=0,Ti=null,Lr=null,ji=0,ud=0,fd=null,Ag=null,Ss=null,Es=null,Ms=null,ko=0,Sc=null;function ai(){return(Dt&2)!==0&&Et!==0?Et&-Et:Me.T!==null?Sd():J()}function wg(){if(ii===0)if((Et&536870912)===0||pt){var e=hr;hr<<=1,(hr&3932160)===0&&(hr=262144),ii=e}else ii=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ii}function bs(e,t){if(t!=null){var i=e.stateNode,r=i.ref;r===null&&(r=i.ref=ox($i(e.memoizedProps,i))),Es===null&&(Es=[]),Es.push(t.bind(null,r))}}function Wn(e,t,i){(e===jt&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)&&(Ts(e,0),Xa(e,Et,ii,!1)),pr(e,i),((Dt&2)===0||e!==jt)&&(e===jt&&((Dt&2)===0&&(Ur|=i),an===4&&Xa(e,Et,ii,!1)),ki(e))}function Rg(e,t,i){if((Dt&6)!==0)throw Error(s(327));var r=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Ta(e,t),l=r?nS(e,t):hd(e,t,!0),u=r;do{if(l===0){_s&&!r&&Xa(e,t,0,!1);break}else{if(i=e.current.alternate,u&&!eS(i)){l=hd(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var b=e;l=jo;var z=b.current.memoizedState.isDehydrated;if(z&&(Ts(b,g).flags|=256),g=hd(b,g,!1),g!==2&&g!==6){if(ld&&!z){b.errorRecoveryDisabledLanes|=u,Ur|=u,l=4;break e}u=Yn,Yn=l,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}l=g}if(u=!1,l!==2)continue}}if(l===1){Ts(e,0),Xa(e,t,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Xa(r,t,ii,!Va);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=vc+300-X(),10<l)){if(Xa(r,t,ii,!Va),Zi(r,0,!0)!==0)break e;ji=t,r.timeoutHandle=Ud(Cg.bind(null,r,i,Yn,yc,cd,t,ii,Ur,ys,Va,u,"Throttled",-0,0),l);break e}Cg(r,i,Yn,yc,cd,t,ii,Ur,ys,Va,u,null,-0,0)}}break}while(!0);ki(e)}function Cg(e,t,i,r,l,u,g,b,z,W,ie,me,q,ee){e.timeoutHandle=-1;var Le=t.subtreeFlags,Ze=(u&335544064)===u;if(me=null,(Ze||Le&8192||(Le&16785408)===16785408)&&(me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},ti=null,Sg(t,u,me),Ze&&(Le=me,Ze=e.containerInfo,Ze=(Ze.nodeType===9?Ze:Ze.ownerDocument).__reactViewTransition,Ze!=null&&(Le.count++,Le.waitingForViewTransition=!0,Le=Jo.bind(Le),Ze.finished.then(Le,Le))),Le=(u&62914560)===u?vc-X():(u&4194048)===u?Tg-X():0,Le=aE(me,Le),Le!==null)){ji=u,e.cancelPendingCommit=Le(Ig.bind(null,e,t,u,i,r,l,g,b,z,W,ie,me,null,q,ee)),Xa(e,u,g,!W);return}Ig(e,t,u,i,r,l,g,b,z,W,ie,me)}function eS(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],u=l.getSnapshot;l=l.value;try{if(!$n(u(),l))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(e,t,i,r){t=fo(e,t),t&=~xc,t&=~Ur,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var u=31-Ln(l),g=1<<u;r[u]=-1,l&=~g}i!==0&&_l(e,i,t)}function Ec(){return(Dt&6)===0?(Xo(0),!1):!0}function dd(){if(_t!==null){if(Ot===0)var e=_t.return;else e=_t,ia=yr=null,yf(e),fs=null,Ro=0,e=_t;for(;e!==null;)J0(e.alternate,e),e=e.return;_t=null}}function Ts(e,t){var i=e.timeoutHandle;return i!==-1&&(e.timeoutHandle=-1,bS(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),ji=0,dd(),jt=e,_t=i=ta(e.current,null),Et=t,Ot=0,ni=null,Va=!1,_s=Ta(e,t),ld=!1,ys=ii=xc=Ur=ja=an=0,Yn=jo=null,cd=!1,ca=fo(e,t),Nl(),i}function Ng(e,t){ct=null,Me.H=tc,t===us||t===Gl?(t=Im(),Ot=3):t===of?(t=Im(),Ot=4):Ot=t===zf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ni=t,_t===null&&(an=1,nc(e,ui(t,e.current)))}function Dg(){var e=Rn.current;return e===null?!0:(Et&4194048)===Et?zn===null:(Et&62914560)===Et||(Et&536870912)!==0?e===zn:!1}function Ug(){var e=Me.H;return Me.H=tc,e===null?tc:e}function Lg(){var e=Me.A;return Me.A=Jy,e}function Mc(){an=4,Va||(Et&4194048)!==Et&&Rn.current!==null||(_s=!0),(ja&134217727)===0&&(Ur&134217727)===0||jt===null||Xa(jt,Et,ii,!1)}function hd(e,t,i){var r=Dt;Dt|=2;var l=Ug(),u=Lg();(jt!==e||Et!==t)&&(yc=null,Ts(e,t)),t=!1;var g=an;e:do try{if(Ot!==0&&_t!==null){var b=_t,z=ni;switch(Ot){case 8:dd(),g=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(t=!0);var W=Ot;if(Ot=0,ni=null,As(e,b,z,W),i&&_s){g=0;break e}break;default:W=Ot,Ot=0,ni=null,As(e,b,z,W)}}tS(),g=an;break}catch(ie){Ng(e,ie)}while(!0);return t&&e.shellSuspendCounter++,ia=yr=null,Dt=r,Me.H=l,Me.A=u,_t===null&&(jt=null,Et=0,Nl()),g}function tS(){for(;_t!==null;)Og(_t)}function nS(e,t){var i=Dt;Dt|=2;var r=Ug(),l=Lg();jt!==e||Et!==t?(yc=null,_c=X()+500,Ts(e,t)):_s=Ta(e,t);e:do try{if(Ot!==0&&_t!==null){t=_t;var u=ni;t:switch(Ot){case 1:Ot=0,ni=null,As(e,t,u,1);break;case 2:case 9:if(zm(u)){Ot=0,ni=null,zg(t);break}t=function(){Ot!==2&&Ot!==9||jt!==e||(Ot=7),ki(e)},u.then(t,t);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:zm(u)?(Ot=0,ni=null,zg(t)):(Ot=0,ni=null,As(e,t,u,7));break;case 5:var g=null;switch(_t.tag){case 26:g=_t.memoizedState;case 5:case 27:var b=_t;if(g?Ax(g):b.stateNode.complete){Ot=0,ni=null;var z=b.sibling;if(z!==null)_t=z;else{var W=b.return;W!==null?(_t=W,bc(W)):_t=null}break t}}Ot=0,ni=null,As(e,t,u,5);break;case 6:Ot=0,ni=null,As(e,t,u,6);break;case 8:dd(),an=6;break e;default:throw Error(s(462))}}iS();break}catch(ie){Ng(e,ie)}while(!0);return ia=yr=null,Me.H=r,Me.A=l,Dt=i,_t!==null?0:(jt=null,Et=0,Nl(),an)}function iS(){for(;_t!==null&&!lt();)Og(_t)}function Og(e){var t=K0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,t===null?bc(e):_t=t}function zg(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=j0(i,t,t.pendingProps,t.type,void 0,Et);break;case 11:t=j0(i,t,t.pendingProps,t.type.render,t.ref,Et);break;case 5:yf(t);var r=t;r===Sn&&(pt?(Pl(r),r.tag===5&&r.stateNode!=null&&(Yt=r.stateNode)):(Pl(r),pt=!0));default:J0(i,t),t=_t=bm(t,ca),t=K0(i,t,ca)}e.memoizedProps=e.pendingProps,t===null?bc(e):_t=t}function As(e,t,i,r){ia=yr=null,yf(t),fs=null,Ro=0;var l=t.return;try{if(ky(e,l,t,i,Et)){an=1,nc(e,ui(i,e.current)),_t=null;return}}catch(u){if(l!==null)throw _t=l,u;an=1,nc(e,ui(i,e.current)),_t=null;return}t.flags&32768?(pt||r===1?e=!0:_s||(Et&536870912)!==0?e=!1:(Va=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pg(t,e)):bc(t)}function bc(e){var t=e;do{if((t.flags&32768)!==0){Pg(t,Va);return}e=t.return;var i=Wy(t.alternate,t,ca);if(i!==null){_t=i;return}if(t=t.sibling,t!==null){_t=t;return}_t=t=e}while(t!==null);an===0&&(an=5)}function Pg(e,t){do{var i=Zy(e.alternate,e);if(i!==null){i.flags&=32767,_t=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){_t=e;return}_t=e=i}while(e!==null);an=6,_t=null}function Ig(e,t,i,r,l,u,g,b,z,W,ie,me){e.cancelPendingCommit=null;do Tc();while(tn!==0);if((Dt&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===jt&&(_t=jt=null,Et=0),Lr=t,Ti=e,ji=i,fd=l,Ag=r,aS(e,t,i,g,b,z,me)}}function aS(e,t,i,r,l,u,g){var b=t.lanes|t.childLanes;if(ud=b,b|=Yu,bu(e,i,b,r,l,u),Es=null,(i&335544064)===i?(Ms=Uy(e),r=10262):(Ms=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,uS(Fe,function(){return xd(),null})):(e.callbackNode=null,e.callbackPriority=0),uc=!1,r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=Me.T,Me.T=null,l=we.p,we.p=2,u=Dt,Dt|=4;try{Ky(e,t,i)}finally{Dt=u,we.p=l,Me.T=r}}tn=1,uc?Ss=NS(g,e.containerInfo,Ms,pd,md,sS,gd,xd,rS):(pd(),md(),gd())}function rS(e){if(tn!==0){var t=Ti.onRecoverableError;t(e,{componentStack:null})}}function sS(){tn===3&&(tn=0,_g(Lr,Ti),tn=4)}function pd(){if(tn===1){tn=0;var e=Ti,t=Lr,i=ji,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=Me.T,Me.T=null;var l=we.p;we.p=2;var u=Dt;Dt|=4;try{Ho=hc=!1,xg(t,e,i),i=Cd;var g=pm(e.containerInfo),b=i.focusedElem,z=i.selectionRange;if(g!==b&&b&&b.ownerDocument&&hm(b.ownerDocument.documentElement,b)){if(z!==null&&Vu(b)){var W=z.start,ie=z.end;if(ie===void 0&&(ie=W),"selectionStart"in b)b.selectionStart=W,b.selectionEnd=Math.min(ie,b.value.length);else{var me=b.ownerDocument||document,q=me&&me.defaultView||window;if(q.getSelection){var ee=q.getSelection(),Le=b.textContent.length,Ze=Math.min(z.start,Le),ut=z.end===void 0?Ze:Math.min(z.end,Le);!ee.extend&&Ze>ut&&(g=ut,ut=Ze,Ze=g);var Y=dm(b,Ze),H=dm(b,ut);if(Y&&H&&(ee.rangeCount!==1||ee.anchorNode!==Y.node||ee.anchorOffset!==Y.offset||ee.focusNode!==H.node||ee.focusOffset!==H.offset)){var $=me.createRange();$.setStart(Y.node,Y.offset),ee.removeAllRanges(),Ze>ut?(ee.addRange($),ee.extend(H.node,H.offset)):($.setEnd(H.node,H.offset),ee.addRange($))}}}}for(me=[],ee=b;ee=ee.parentNode;)ee.nodeType===1&&me.push({element:ee,left:ee.scrollLeft,top:ee.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<me.length;b++){var pe=me[b];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}Os=!!Rd,Cd=Rd=null}finally{Dt=u,we.p=l,Me.T=r}}e.current=t,tn=2}}function md(){if(tn===2){tn=0;var e=Ti,t=Lr,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=Me.T,Me.T=null;var r=we.p;we.p=2;var l=Dt;Dt|=4;try{fg(e,t.alternate,t)}finally{Dt=l,we.p=r,Me.T=i}}tn=3}}function gd(){if(tn===4||tn===3){tn=0;var e=Ss;Ss=null,It();var t=Ti,i=Lr,r=ji,l=Ag,u=(r&335544064)===r?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?tn=5:(tn=0,Lr=Ti=null,Bg(t,t.pendingLanes)),u=t.pendingLanes,u===0&&(ka=null),ce(r),i=i.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(bt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Me.T,u=we.p,we.p=2,Me.T=null;try{for(var g=t.onRecoverableError,b=0;b<l.length;b++){var z=l[b];g(z.value,{componentStack:z.stack})}}finally{Me.T=i,we.p=u}}if(l=Es,g=Ms,Ms=null,l!==null&&(Es=null,g===null&&(g=[]),e!==null))for(z=0;z<l.length;z++)i=(0,l[z])(g),i!==void 0&&e.finished.finally(i);(ji&3)!==0&&Tc(),ki(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===Sc?ko++:(ko=0,Sc=t):(ko=0,Sc=null),Xo(0)}}function Bg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,To(t)))}function Tc(){return Ss!==null&&(Ss.skipTransition(),Ss=null),pd(),md(),gd(),xd()}function xd(){if(tn!==5)return!1;var e=Ti,t=ud;ud=0;var i=ce(ji),r=Me.T,l=we.p;try{we.p=32>i?32:i,Me.T=null,i=fd,fd=null;var u=Ti,g=ji;if(tn=0,Lr=Ti=null,ji=0,(Dt&6)!==0)throw Error(s(331));var b=Dt;if(Dt|=4,Mg(u.current),yg(u,u.current,g,i),Dt=b,Xo(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(bt,u)}catch{}return!0}finally{we.p=l,Me.T=r,Bg(e,t)}}function Fg(e,t,i){t=ui(i,t),t=Of(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(pr(e,2),ki(e))}function zt(e,t,i){if(e.tag===3)Fg(e,e,i);else for(;t!==null;){if(t.tag===3){Fg(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ka===null||!ka.has(r))){e=ui(i,e),i=z0(2),r=Pa(t,i,2),r!==null&&(P0(i,r,t,e),pr(r,2),ki(r));break}}t=t.return}}function vd(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new $y;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(i)||(ld=!0,l.add(i),e=oS.bind(null,e,t,i),t.then(e,e))}function oS(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,jt===e&&(Et&i)===i&&((an===4||an===3&&(Et&62914560)===Et&&300>X()-vc)&&(Dt&2)===0?Ts(e,0):xc|=i,ys===Et&&(ys=0)),ki(e)}function Hg(e,t){t===0&&(t=vl()),e=xr(e,t),e!==null&&(pr(e,t),ki(e))}function lS(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Hg(e,i)}function cS(e,t){var i=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),Hg(e,i)}function uS(e,t){return ke(e,t)}var ws=null,Rs=null,_d=!1,Ac=!1,yd=!1,qa=0;function ki(e){e!==Rs&&e.next===null&&(Rs===null?ws=Rs=e:Rs=Rs.next=e),Ac=!0,_d||(_d=!0,dS())}function Xo(e,t){if(!yd&&Ac){yd=!0;do for(var i=!1,r=ws;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var g=r.suspendedLanes,b=r.pingedLanes;u=(1<<31-Ln(42|e)+1)-1,u&=l&~(g&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,kg(r,u))}else u=Et,u=Zi(r,r===jt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ta(r,u)||(i=!0,kg(r,u));r=r.next}while(i);yd=!1}}function fS(){Gg()}function Gg(){Ac=_d=!1;var e=0;qa!==0&&MS()&&(e=qa);for(var t=X(),i=null,r=ws;r!==null;){var l=r.next,u=Vg(r,t);u===0?(r.next=null,i===null?ws=l:i.next=l,l===null&&(Rs=i)):(i=r,(e!==0||(u&3)!==0)&&(Ac=!0)),r=l}tn!==0&&tn!==5||Xo(e),qa!==0&&(qa=0)}function Vg(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var g=31-Ln(u),b=1<<g,z=l[g];z===-1?((b&i)===0||(b&r)!==0)&&(l[g]=Mu(b,t)):z<=t&&(e.expiredLanes|=b),u&=~b}if(t=jt,i=Et,i=Zi(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,i===0||e===t&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&gt(r),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Ta(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(r!==null&&gt(r),ce(i)){case 2:case 8:i=ye;break;case 32:i=Fe;break;case 268435456:i=ot;break;default:i=Fe}return r=jg.bind(null,e),i=ke(i,r),e.callbackPriority=t,e.callbackNode=i,t}return r!==null&&r!==null&&gt(r),e.callbackPriority=2,e.callbackNode=null,2}function jg(e,t){if(tn!==0&&tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Tc()&&e.callbackNode!==i)return null;var r=Et;return r=Zi(e,e===jt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Rg(e,r,t),Vg(e,X()),e.callbackNode!=null&&e.callbackNode===i?jg.bind(null,e):null)}function kg(e,t){if(Tc())return null;Rg(e,t,!0)}function dS(){TS(function(){(Dt&6)!==0?ke(he,fS):Gg()})}function Sd(){if(qa===0){var e=Mr;e===0&&(e=dr,dr<<=1,(dr&261888)===0&&(dr=256)),qa=e}return qa}function Xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:El(e)}function hS(e,t,i,r,l){if(t==="submit"&&i&&i.stateNode===l){var u=Xg((l[Oe]||null).action),g=r.submitter;g&&(t=(t=g[Oe]||null)?Xg(t.formAction):g.getAttribute("formAction"),t!==null&&(u=t,g=null));var b=new Al("action","action",null,r,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(qa!==0){var z=new FormData(l,g);Cf(i,{pending:!0,data:z,method:l.method,action:u},null,z)}}else typeof u=="function"&&(b.preventDefault(),z=new FormData(l,g),Cf(i,{pending:!0,data:z,method:l.method,action:u},u,z))},currentTarget:l}]})}}for(var Ed=0;Ed<qu.length;Ed++){var Md=qu[Ed],pS=Md.toLowerCase(),mS=Md[0].toUpperCase()+Md.slice(1);Si(pS,"on"+mS)}Si(xm,"onAnimationEnd"),Si(vm,"onAnimationIteration"),Si(_m,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(by,"onTransitionRun"),Si(Ty,"onTransitionStart"),Si(Ay,"onTransitionCancel"),Si(ym,"onTransitionEnd"),pn("onMouseEnter",["mouseout","mouseover"]),pn("onMouseLeave",["mouseout","mouseover"]),pn("onPointerEnter",["pointerout","pointerover"]),pn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function qg(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],l=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var g=r.length-1;0<=g;g--){var b=r[g],z=b.instance,W=b.currentTarget;if(b=b.listener,z!==u&&l.isPropagationStopped())break e;u=b,l.currentTarget=W;try{u(l)}catch(ie){Cl(ie)}l.currentTarget=null,u=z}else for(g=0;g<r.length;g++){if(b=r[g],z=b.instance,W=b.currentTarget,b=b.listener,z!==u&&l.isPropagationStopped())break e;u=b,l.currentTarget=W;try{u(l)}catch(ie){Cl(ie)}l.currentTarget=null,u=z}}}}function yt(e,t){var i=t[rt];i===void 0&&(i=t[rt]=new Set);var r=e+"__bubble";i.has(r)||(Yg(t,e,2,!1),i.add(r))}function bd(e,t,i){var r=0;t&&(r|=4),Yg(i,e,r,t)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Td(e){if(!e[wc]){e[wc]=!0,Aa.forEach(function(i){i!=="selectionchange"&&(gS.has(i)||bd(i,!1,e),bd(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wc]||(t[wc]=!0,bd("selectionchange",!1,t))}}function Yg(e,t,i,r){switch(Px(t)){case 2:var l=lE;break;case 8:l=cE;break;default:l=Xd}i=l.bind(null,t,i,e),l=void 0,!Uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,i,{capture:!0,passive:l}):e.addEventListener(t,i,!0):l!==void 0?e.addEventListener(t,i,{passive:l}):e.addEventListener(t,i,!1)}function Ad(e,t,i,r,l){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===l)break;if(g===4)for(g=r.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;b!==null;){if(g=Qe(b),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){r=u=g;continue e}b=b.parentNode}}r=r.return}Yp(function(){var W=u,ie=Nu(i),me=[];e:{var q=Sm.get(e);if(q!==void 0){var ee=Al,Le=e;switch(e){case"keypress":if(bl(i)===0)break e;case"keydown":case"keyup":ee=ey;break;case"focusin":Le="focus",ee=Pu;break;case"focusout":Le="blur",ee=Pu;break;case"beforeblur":case"afterblur":ee=Pu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=V_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=ry;break;case xm:case vm:case _m:ee=X_;break;case ym:ee=oy;break;case"scroll":case"scrollend":ee=H_;break;case"wheel":ee=cy;break;case"copy":case"cut":case"paste":ee=Y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=Jp;break;case"submit":ee=iy;break;case"toggle":case"beforetoggle":ee=fy}var Ze=(t&4)!==0,ut=!Ze&&(e==="scroll"||e==="scrollend"),Y=Ze?q!==null?q+"Capture":null:q;Ze=[];for(var H=W,$;H!==null;){var pe=H;if($=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||$===null||Y===null||(pe=po(H,Y),pe!=null&&Ze.push(Yo(H,pe,$))),ut)break;H=H.return}0<Ze.length&&(q=new ee(q,Le,null,i,ie),me.push({event:q,listeners:Ze}))}}if((t&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",ee&&i!==Cu&&(Le=i.relatedTarget||i.fromElement)&&(Qe(Le)||Le[tt]))break e;(q||ee)&&(Le=ie.window===ie?ie:(ee=ie.ownerDocument)?ee.defaultView||ee.parentWindow:window,q?(ee=i.relatedTarget||i.toElement,q=W,ee=ee?Qe(ee):null,ee!==null&&(ut=f(ee),Ze=ee.tag,ee!==ut||Ze!==5&&Ze!==27&&Ze!==6)&&(ee=null)):(q=null,ee=W),q!==ee&&(Ze=Kp,pe="onMouseLeave",Y="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Ze=Jp,pe="onPointerLeave",Y="onPointerEnter",H="pointer"),ut=q==null?Le:St(q),$=ee==null?Le:St(ee),Le=new Ze(pe,H+"leave",q,i,ie),Le.target=ut,Le.relatedTarget=$,pe=null,Qe(ie)===W&&(Ze=new Ze(Y,H+"enter",ee,i,ie),Ze.target=$,Ze.relatedTarget=ut,pe=Ze),ut=pe,Ze=q&&ee?V(q,ee,xS):null,q!==null&&Wg(me,Le,q,Ze,!1),ee!==null&&ut!==null&&Wg(me,ut,ee,Ze,!0)))}e:{if(q=W?St(W):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var Ve=sm;else if(am(q))if(om)Ve=Sy;else{Ve=_y;var Mt=vy}else ee=q.nodeName,!ee||ee.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?W&&Ru(W.elementType)&&(Ve=sm):Ve=yy;if(Ve&&(Ve=Ve(e,W))){rm(me,Ve,i,ie);break e}Mt&&Mt(e,q,W)}switch(Mt=W?St(W):window,e){case"focusin":(am(Mt)||Mt.contentEditable==="true")&&(ns=Mt,ju=W,Eo=null);break;case"focusout":Eo=ju=ns=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,mm(me,i,ie);break;case"selectionchange":if(My)break;case"keydown":case"keyup":mm(me,i,ie)}var $e;if(Bu)e:{switch(e){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else ts?nm(e,i)&&(it="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(it="onCompositionStart");it&&($p&&i.locale!=="ko"&&(ts||it!=="onCompositionStart"?it==="onCompositionEnd"&&ts&&($e=Wp()):(wa=ie,Lu="value"in wa?wa.value:wa.textContent,ts=!0)),Mt=Rc(W,it),0<Mt.length&&(it=new Qp(it,e,null,i,ie),me.push({event:it,listeners:Mt}),$e?it.data=$e:($e=im(i),$e!==null&&(it.data=$e)))),($e=hy?py(e,i):my(e,i))&&(it=Rc(W,"onBeforeInput"),0<it.length&&(Mt=new Qp("onBeforeInput","beforeinput",null,i,ie),me.push({event:Mt,listeners:it}),Mt.data=$e)),hS(me,e,W,i,ie)}qg(me,t)})}function Yo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Rc(e,t){for(var i=t+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=po(e,i),l!=null&&r.unshift(Yo(e,l,u)),l=po(e,t),l!=null&&r.push(Yo(e,l,u))),e.tag===3)return r;e=e.return}return[]}function xS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,t,i,r,l){for(var u=t._reactName,g=[];i!==null&&i!==r;){var b=i,z=b.alternate,W=b.stateNode;if(b=b.tag,z!==null&&z===r)break;b!==5&&b!==26&&b!==27||W===null||(z=W,l?(W=po(i,u),W!=null&&g.unshift(Yo(i,W,z))):l||(W=po(i,u),W!=null&&g.push(Yo(i,W,z)))),i=i.return}g.length!==0&&e.push({event:t,listeners:g})}var vS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(vS,`
`).replace(_S,"")}function Kg(e,t){return t=Zg(t),Zg(e)===t}function Pt(e,t,i,r,l,u){switch(i){case"children":if(typeof r=="string")t==="body"||t==="textarea"&&r===""||Jr(e,r);else if(typeof r=="number"||typeof r=="bigint")t!=="body"&&Jr(e,""+r);else return;break;case"className":Sl(e,"class",r);break;case"tabIndex":Sl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Sl(e,i,r);break;case"style":Xp(e,r,u);return;case"data":if(t!=="object"){Sl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=El(r),e.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(t!=="input"&&Pt(e,t,"name",l.name,l,null),Pt(e,t,"formEncType",l.formEncType,l,null),Pt(e,t,"formMethod",l.formMethod,l,null),Pt(e,t,"formTarget",l.formTarget,l,null)):(Pt(e,t,"encType",l.encType,l,null),Pt(e,t,"method",l.method,l,null),Pt(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=El(r),e.setAttribute(i,r);break;case"onClick":r!=null&&(e.onclick=Oi);return;case"onScroll":r!=null&&yt("scroll",e);return;case"onScrollEnd":r!=null&&yt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(e.innerHTML=i)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}i=El(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":r===!0?e.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(i,r):e.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(i):e.setAttribute(i,r);break;case"popover":yt("beforetoggle",e),yt("toggle",e),yl(e,"popover",r);break;case"xlinkActuate":Qi(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Qi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Qi(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Qi(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Qi(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Qi(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":yl(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=B_.get(i)||i,yl(e,i,r);else return}Ct=!0}function wd(e,t,i,r,l,u){switch(i){case"style":Xp(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(e.innerHTML=i)}}break;case"children":if(typeof r=="string")Jr(e,r);else if(typeof r=="number"||typeof r=="bigint")Jr(e,""+r);else return;break;case"onScroll":r!=null&&yt("scroll",e);return;case"onScrollEnd":r!=null&&yt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Oi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vt.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),u=i.slice(2,l?i.length-7:void 0),t=e[Oe]||null,t=t!=null?t[i]:null,typeof t=="function"&&e.removeEventListener(u,t,l),typeof r=="function")){typeof t!="function"&&t!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(u,r,l);break e}Ct=!0,i in e?e[i]=r:r===!0?e.setAttribute(i,""):yl(e,i,r)}return}Ct=!0}function Dn(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",e),yt("load",e);var r=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var g=i[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Pt(e,t,u,g,i,null)}}l&&Pt(e,t,"srcSet",i.srcSet,i,null),r&&Pt(e,t,"src",i.src,i,null);return;case"input":yt("invalid",e);var b=u=g=l=null,z=null,W=null;for(r in i)if(i.hasOwnProperty(r)){var ie=i[r];if(ie!=null)switch(r){case"name":l=ie;break;case"type":g=ie;break;case"checked":z=ie;break;case"defaultChecked":W=ie;break;case"value":u=ie;break;case"defaultValue":b=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,t));break;default:Pt(e,t,r,ie,i,null)}}Gp(e,u,b,z,W,g,l,!1);return;case"select":yt("invalid",e),r=g=u=null;for(l in i)if(i.hasOwnProperty(l)&&(b=i[l],b!=null))switch(l){case"value":u=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Pt(e,t,l,b,i,null)}t=u,i=g,e.multiple=!!r,t!=null?Qr(e,!!r,t,!1):i!=null&&Qr(e,!!r,i,!0);return;case"textarea":yt("invalid",e),u=l=r=null;for(g in i)if(i.hasOwnProperty(g)&&(b=i[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":l=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pt(e,t,g,b,i,null)}jp(e,r,l,u);return;case"option":for(z in i)if(i.hasOwnProperty(z)&&(r=i[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pt(e,t,z,r,i,null)}return;case"dialog":yt("beforetoggle",e),yt("toggle",e),yt("cancel",e),yt("close",e);break;case"iframe":case"object":yt("load",e);break;case"video":case"audio":for(r=0;r<qo.length;r++)yt(qo[r],e);break;case"image":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"embed":case"source":case"link":yt("error",e),yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in i)if(i.hasOwnProperty(W)&&(r=i[W],r!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Pt(e,t,W,r,i,null)}return;default:if(Ru(t)){for(ie in i)i.hasOwnProperty(ie)&&(r=i[ie],r!==void 0&&wd(e,t,ie,r,i,void 0));return}}for(b in i)i.hasOwnProperty(b)&&(r=i[b],r!=null&&Pt(e,t,b,r,i,null))}var yS={};function SS(e,t,i,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,g=null,b=null,z=null,W=null,ie=null;for(ee in i){var me=i[ee];if(i.hasOwnProperty(ee)&&me!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":z=me;default:r.hasOwnProperty(ee)||Pt(e,t,ee,null,r,me)}}for(var q in r){var ee=r[q];if(me=i[q],r.hasOwnProperty(q)&&(ee!=null||me!=null))switch(q){case"type":ee!==me&&(Ct=!0),u=ee;break;case"name":ee!==me&&(Ct=!0),l=ee;break;case"checked":ee!==me&&(Ct=!0),W=ee;break;case"defaultChecked":ee!==me&&(Ct=!0),ie=ee;break;case"value":ee!==me&&(Ct=!0),g=ee;break;case"defaultValue":ee!==me&&(Ct=!0),b=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,t));break;default:ee!==me&&Pt(e,t,q,ee,r,me)}}Au(e,g,b,z,W,ie,u,l);return;case"select":ee=g=b=q=null;for(u in i)if(z=i[u],i.hasOwnProperty(u)&&z!=null)switch(u){case"value":break;case"multiple":ee=z;default:r.hasOwnProperty(u)||Pt(e,t,u,null,r,z)}for(l in r)if(u=r[l],z=i[l],r.hasOwnProperty(l)&&(u!=null||z!=null))switch(l){case"value":u!==z&&(Ct=!0),q=u;break;case"defaultValue":u!==z&&(Ct=!0),b=u;break;case"multiple":u!==z&&(Ct=!0),g=u;default:u!==z&&Pt(e,t,l,u,r,z)}t=b,i=g,r=ee,q!=null?Qr(e,!!i,q,!1):!!r!=!!i&&(t!=null?Qr(e,!!i,t,!0):Qr(e,!!i,i?[]:"",!1));return;case"textarea":ee=q=null;for(b in i)if(l=i[b],i.hasOwnProperty(b)&&l!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pt(e,t,b,null,r,l)}for(g in r)if(l=r[g],u=i[g],r.hasOwnProperty(g)&&(l!=null||u!=null))switch(g){case"value":l!==u&&(Ct=!0),q=l;break;case"defaultValue":l!==u&&(Ct=!0),ee=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Pt(e,t,g,l,r,u)}Vp(e,q,ee);return;case"option":for(var Le in i)if(q=i[Le],i.hasOwnProperty(Le)&&q!=null&&!r.hasOwnProperty(Le))switch(Le){case"selected":e.selected=!1;break;default:Pt(e,t,Le,null,r,q)}for(z in r)if(q=r[z],ee=i[z],r.hasOwnProperty(z)&&q!==ee&&(q!=null||ee!=null))switch(z){case"selected":q!==ee&&(Ct=!0),e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Pt(e,t,z,q,r,ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in i)q=i[Ze],i.hasOwnProperty(Ze)&&q!=null&&!r.hasOwnProperty(Ze)&&Pt(e,t,Ze,null,r,q);for(W in r)if(q=r[W],ee=i[W],r.hasOwnProperty(W)&&q!==ee&&(q!=null||ee!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:Pt(e,t,W,q,r,ee)}return;default:if(Ru(t)){for(var ut in i)q=i[ut],i.hasOwnProperty(ut)&&q!==void 0&&!r.hasOwnProperty(ut)&&wd(e,t,ut,void 0,r,q);for(ie in r)q=r[ie],ee=i[ie],!r.hasOwnProperty(ie)||q===ee||q===void 0&&ee===void 0||wd(e,t,ie,q,r,ee);return}}for(var Y in i)q=i[Y],i.hasOwnProperty(Y)&&q!=null&&!r.hasOwnProperty(Y)&&Pt(e,t,Y,null,r,q);for(me in r)q=r[me],ee=i[me],!r.hasOwnProperty(me)||q===ee||q==null&&ee==null||Pt(e,t,me,q,r,ee)}function Qg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ES(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],u=l.transferSize,g=l.initiatorType,b=l.duration;if(u&&b&&Qg(g)){for(g=0,b=l.responseEnd,r+=1;r<i.length;r++){var z=i[r],W=z.startTime;if(W>b)break;var ie=z.transferSize,me=z.initiatorType;ie&&Qg(me)&&(z=z.responseEnd,g+=ie*(z<b?1:(b-W)/(z-W)))}if(--r,t+=8*(u+g)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rd=null,Cd=null;function Wo(e){return e.nodeType===9?e:e.ownerDocument}function Jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $g(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ex(e,t,i,r){return i=Wo(i).createElement(e),i[De]=r,i[Oe]=t,Dn(i,e,t),Kt(i),i}function Nd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dd=null;function MS(){var e=window.event;return e&&e.type==="popstate"?e===Dd?!1:(Dd=e,!0):(Dd=null,!1)}var Ud=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,tx=typeof Promise=="function"?Promise:void 0,nx=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ud,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof tx<"u"?function(e){return tx.resolve(null).then(e).catch(AS)}:Ud;function AS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function ix(e,t){var i=t,r=0;do{var l=i.nextSibling;if(e.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){e.removeChild(l),zs(t);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Hd(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Hd(i);for(var u=i.firstChild;u;){var g=u.nextSibling,b=u.nodeName;u[qt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=g}}else i==="body"&&Hd(e.ownerDocument.body);i=l}while(i);zs(t)}function ax(e,t){var i=e;e=0;do{var r=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=r}while(i)}function rx(e,t,i){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,i!=null&&(e.style.viewTransitionClass=i),i=getComputedStyle(e),i.display==="inline"){if(t=e.getClientRects(),t.length===1)var r=1;else for(var l=r=0;l<t.length;l++){var u=t[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+i.paddingTop,e.marginBottom="-"+i.paddingBottom)}}function sx(e,t){e=e.style,t=t.style;var i=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(i=t.display,e.display=i==null||typeof i=="boolean"?"":i,i=t.margin,i!=null?e.margin=i:(i=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=i==null||typeof i=="boolean"?"":i,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function wS(e,t,i){return i=i.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=i.innerHeight&&e.left<=i.innerWidth}}function Ld(e){var t=e.getBoundingClientRect(),i=getComputedStyle(e);return wS(t,i,e)}function RS(e){return e.documentElement.clientHeight}function CS(e){this.addEventListener("load",e),this.addEventListener("error",e)}function NS(e,t,i,r,l,u,g,b,z){var W=t.nodeType===9?t:t.ownerDocument;try{var ie=W.startViewTransition({update:function(){var q=W.defaultView,ee=q.navigation&&q.navigation.transition,Le=W.fonts.status;r();var Ze=[];if(Le==="loaded"&&(RS(W),W.fonts.status==="loading"&&Ze.push(W.fonts.ready)),Le=Ze.length,e!==null)for(var ut=e.suspenseyImages,Y=0,H=0;H<ut.length;H++){var $=ut[H];if(!$.complete){var pe=$.getBoundingClientRect();if(0<pe.bottom&&0<pe.right&&pe.top<q.innerHeight&&pe.left<q.innerWidth){if(Y+=wx($),Y>Dc){Ze.length=Le;break}$=new Promise(CS.bind($)),Ze.push($)}}}if(0<Ze.length)return q=Promise.race([Promise.all(Ze),new Promise(function(Ve){return setTimeout(Ve,500)})]).then(l,l),(ee?Promise.allSettled([ee.finished,q]):q).then(u,u);if(l(),ee)return ee.finished.then(u,u);u()},types:i});W.__reactViewTransition=ie;var me=[];return ie.ready.then(function(){for(var q=W.documentElement.getAnimations({subtree:!0}),ee=0;ee<q.length;ee++){var Le=q[ee],Ze=Le.effect,ut=Ze.pseudoElement;if(ut!=null&&ut.startsWith("::view-transition")){me.push(Le),Le=Ze.getKeyframes();for(var Y=ut=void 0,H=!0,$=0;$<Le.length;$++){var pe=Le[$],Ve=pe.width;if(ut===void 0)ut=Ve;else if(ut!==Ve){H=!1;break}if(Ve=pe.height,Y===void 0)Y=Ve;else if(Y!==Ve){H=!1;break}delete pe.width,delete pe.height,pe.transform==="none"&&delete pe.transform}H&&ut!==void 0&&Y!==void 0&&(Ze.setKeyframes(Le),H=getComputedStyle(Ze.target,Ze.pseudoElement),H.width!==ut||H.height!==Y)&&(H=Le[0],H.width=ut,H.height=Y,H=Le[Le.length-1],H.width=ut,H.height=Y,Ze.setKeyframes(Le))}}g()},function(q){W.__reactViewTransition===ie&&(W.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&z(q)}finally{r(),l(),g()}}),ie.finished.finally(function(){for(var q=0;q<me.length;q++)me[q].cancel();W.__reactViewTransition===ie&&(W.__reactViewTransition=null),b()}),ie}catch{return r(),l(),g(),null}}function Or(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Or.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:I({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Or.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,i=e.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var u=i[l].effect;u!==null&&u.target===e&&u.pseudoElement===t&&r.push(i[l])}return r},Or.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function ox(e){return{name:e,group:new Or("group",e),imagePair:new Or("image-pair",e),old:new Or("old",e),new:new Or("new",e)}}function ri(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(e,t,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(cx(u,e,t,i)===-1){var g=this,b=t;i!=null&&typeof i!="boolean"&&i.once===!0&&(b=function(z){g.removeEventListener(e,t,i),typeof t=="function"?t.call(this,z):t.handleEvent(z)}),r!==null&&(l=g.removeEventListener.bind(g,e,t,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Cs(i),u.push({type:e,listener:t,optionsOrUseCapture:i,attachedListener:b,cleanup:l}),m(this._fragmentFiber.child,!1,DS,e,b,r)}this._eventListeners=u}};function DS(e,t,i,r){return E(e).addEventListener(t,i,r),!1}ri.prototype.removeEventListener=function(e,t,i){var r=this._eventListeners;if(r!==null&&(t=cx(r,e,t,i),t!==-1)){var l=r[t];i=l.attachedListener;var u=l.cleanup;l=Cs(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,US,e,i,l),r.splice(t,1),u!==null&&u()}};function US(e,t,i,r){return E(e).removeEventListener(t,i,r),!1}function Cs(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function lx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function cx(e,t,i,r){if(e.length===0)return-1;r=lx(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===t&&u.listener===i&&lx(u.optionsOrUseCapture)===r)return l}return-1}ri.prototype.dispatchEvent=function(e){var t=S(this._fragmentFiber);if(t===null)return!0;t=E(t);var i=this._eventListeners;if(i!==null&&0<i.length||!e.bubbles){var r=t.nodeType===9?t.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var u=i[l];r.addEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),i)for(l=0;l<i.length;l++)u=i[l],r.removeEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},ri.prototype.focus=function(e){m(this._fragmentFiber.child,!0,ux,e,void 0,void 0)};function ux(e,t){return e.tag===6?!1:(e=E(e),kS(e,t))}ri.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Od,t,void 0,void 0);for(var i=t.length-1;0<=i&&!ux(t[i],e);i--);};function Od(e,t){return t.push(e),!1}ri.prototype.blur=function(){var e=S(this._fragmentFiber);e!==null&&(e=E(e),e=Wo(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,LS,e,void 0,void 0))};function LS(e,t){return e.tag===6?!1:(e=E(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ri.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,OS,e,void 0,void 0)};function OS(e,t){return e.tag===6||(e=E(e),t.observe(e)),!1}ri.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,zS,e,void 0,void 0);for(var i=t=0;i<Ai.length;i++){var r=Ai[i];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ai[t++]=r}Ai.length=t}};function zS(e,t){return e.tag===6||(e=E(e),t.unobserve(e)),!1}var Ai=[],zd=!1;function PS(e,t,i){Ai.push({fragmentInstance:e,observer:t,instance:i}),zd||(zd=!0,XS(function(){zd=!1;var r=Ai;Ai=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}ri.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,IS,e,void 0,void 0),e};function IS(e,t){if(e.tag===6){e=e.stateNode;var i=e.ownerDocument.createRange();i.selectNodeContents(e),t.push.apply(t,i.getClientRects())}else e=E(e),t.push.apply(t,e.getClientRects());return!1}ri.prototype.getRootNode=function(e){var t=S(this._fragmentFiber);return t===null?this:E(t).getRootNode(e)},ri.prototype.compareDocumentPosition=function(e){var t=S(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,Od,i,void 0,void 0);var r=E(t);if(i.length===0){if(i=r,M(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(i=t)}t=this._fragmentFiber;var l=r=i.compareDocumentPosition(e);return i===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=R(t)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=E(i).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=E(i[0]),l=E(i[i.length-1]);var u=M(this._fragmentFiber)?t.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=t.compareDocumentPosition(e),b=l.compareDocumentPosition(e),z=g&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=r&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||u&&l===e||z||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||BS(t,this._fragmentFiber,i[0],i[i.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function BS(e,t,i,r,l){var u=Qe(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===t||u.alternate===t)){i=!0;break e}u=u.return}i=!1}return i}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=t,t=S(t);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==t&&u.alternate!==t)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!u)&&!(t=u===i)&&(t=V(i,u,K),t===null?t=!1:(m(t,!0,P,u,i),u=_,_=null,t=u!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!u)&&!(t=u===r)&&(t=V(r,u,K),t===null?t=!1:(m(t,!0,U,u,r),u=_,L=_=null,t=u!==null)),t):!1}function fx(e,t){var i=e.ownerDocument.createRange();i.selectNodeContents(e),e=i.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var t=[];m(this._fragmentFiber.child,!1,Od,t,void 0,void 0);var i=e!==!1;if(t.length===0){var r=R(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=E(r),fx(e,i);return}if(r=E(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=i?t.length-1:0;r!==(i?-1:t.length);){var l=t[r];l.tag===6?(l=E(l),fx(l,i)):E(l).scrollIntoView(e),r+=i?-1:1}};function FS(e,t){return e=E(e),dx(e,t),!1}function dx(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function hx(e,t){var i=t._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];e.addEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){for(var g=0,b=0;b<Ai.length;b++){var z=Ai[b];(z.fragmentInstance!==t||z.observer!==u||z.instance!==e)&&(Ai[g++]=z)}Ai.length=g,u.observe(e)}),dx(e,t))}function HS(e,t){var i=t._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];e.removeEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?PS(t,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Pd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Pd(i),vt(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function GS(e,t,i,r){for(;e.nodeType===1;){var l=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[qt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function VS(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=mi(e.nextSibling),e===null))return null;return e}function px(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mi(e.nextSibling),e===null))return null;return e}function Id(e){return e.data==="$?"||e.data==="$~"}function Bd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jS(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var r=function(){t(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function mi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fd=null;function mx(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return mi(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function gx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function kS(e,t){function i(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",i,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",i,!0)}return r}function XS(e){nx(function(){nx(function(t){return e(t)})})}function xx(e,t,i){switch(t=Wo(i),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function vx(e,t,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Pt(e,t,r,null,yS,l)}i.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Oi&&(e.onclick=null),vt(e)}function Hd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vt(e)}var gi=new Map,_x=new Set;function Zo(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ua=we.d;we.d={f:qS,r:YS,D:WS,C:ZS,L:KS,m:QS,X:$S,S:JS,M:eE};function qS(){var e=ua.f(),t=Ec();return e||t}function YS(e){var t=$t(e);t!==null&&t.tag===5&&t.type==="form"?S0(t):ua.r(e)}var Ns=typeof document>"u"?null:document;function yx(e,t,i){var r=Ns;if(r&&typeof t=="string"&&t){var l=li(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),_x.has(l)||(_x.add(l),e={rel:e,crossOrigin:i,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),Dn(t,"link",e),Kt(t),r.head.appendChild(t)))}}function WS(e){ua.D(e),yx("dns-prefetch",e,null)}function ZS(e,t){ua.C(e,t),yx("preconnect",e,t)}function KS(e,t,i){ua.L(e,t,i);var r=Ns;if(r&&e&&t){var l='link[rel="preload"][as="'+li(t)+'"]';t==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+li(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+li(i.imageSizes)+'"]')):l+='[href="'+li(e)+'"]';var u=l;switch(t){case"style":u=Ds(e);break;case"script":u=Us(e)}if(!(gi.has(u)||(e=I({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),gi.set(u,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(Ko(u))||t==="script"&&r.querySelector(Qo(u))))){var g=r.createElement("link");Dn(g,"link",e),t==="style"&&(g[Gt]=!0,g.onload=g.onerror=function(){On(g)}),Kt(g),r.head.appendChild(g)}}}function QS(e,t){ua.m(e,t);var i=Ns;if(i&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+li(r)+'"][href="'+li(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Us(e)}if(!gi.has(u)&&(e=I({rel:"modulepreload",href:e},t),gi.set(u,e),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Qo(u)))return}r=i.createElement("link"),Dn(r,"link",e),Kt(r),i.head.appendChild(r)}}}function JS(e,t,i){ua.S(e,t,i);var r=Ns;if(r&&e){var l=yn(r).hoistableStyles,u=Ds(e);t=t||"default";var g=l.get(u);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(Ko(u)))b.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":t},i),(i=gi.get(u))&&Gd(e,i);var z=g=r.createElement("link");Kt(z),Dn(z,"link",e),z._p=new Promise(function(W,ie){z.onload=W,z.onerror=ie}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Cc(g,t,r)}g={type:"stylesheet",instance:g,count:1,state:b},l.set(u,g)}}}function $S(e,t){ua.X(e,t);var i=Ns;if(i&&e){var r=yn(i).hoistableScripts,l=Us(e),u=r.get(l);u||(u=i.querySelector(Qo(l)),u||(e=I({src:e,async:!0},t),(t=gi.get(l))&&Vd(e,t),u=i.createElement("script"),Kt(u),Dn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function eE(e,t){ua.M(e,t);var i=Ns;if(i&&e){var r=yn(i).hoistableScripts,l=Us(e),u=r.get(l);u||(u=i.querySelector(Qo(l)),u||(e=I({src:e,async:!0,type:"module"},t),(t=gi.get(l))&&Vd(e,t),u=i.createElement("script"),Kt(u),Dn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Sx(e,t,i,r){var l=(l=O.current)?Zo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ds(i.href),t=yn(l).hoistableStyles,r=t.get(i),r||(r={type:"style",instance:null,count:0,state:null},t.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ds(i.href);var u=yn(l).hoistableStyles,g=u.get(e);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,g),(u=l.querySelector(Ko(e)))?u._p||(g.instance=u,g.state.loading=5):(u=gi.get(e),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},gi.set(e,u)),tE(l,e,u,g.state))),t&&r===null)throw Error(s(528,""));return g}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(i=Us(i),t=yn(l).hoistableScripts,r=t.get(i),r||(r={type:"script",instance:null,count:0,state:null},t.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ds(e){return'href="'+li(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function Ex(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function tE(e,t,i,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Gt]!==!0){r.loading=1;return}}else t=e.createElement("link"),t[Gt]=!0,t.onload=t.onerror=On.bind(null,t),Dn(t,"link",i),Kt(t),e.head.appendChild(t);r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}function Us(e){return'[src="'+li(e)+'"]'}function Qo(e){return"script[async]"+e}function Mx(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+li(i.href)+'"]');if(r)return t.instance=r,Kt(r),r;var l=I({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Kt(r),Dn(r,"style",l),Cc(r,i.precedence,e),t.instance=r;case"stylesheet":l=Ds(i.href);var u=e.querySelector(Ko(l));if(u)return t.state.loading|=4,t.instance=u,Kt(u),u;r=Ex(i),(l=gi.get(l))&&Gd(r,l),u=(e.ownerDocument||e).createElement("link"),Kt(u);var g=u;return g._p=new Promise(function(b,z){g.onload=b,g.onerror=z}),Dn(u,"link",r),t.state.loading|=4,Cc(u,i.precedence,e),t.instance=u;case"script":return u=Us(i.src),(l=e.querySelector(Qo(u)))?(t.instance=l,Kt(l),l):(r=i,(l=gi.get(u))&&(r=I({},i),Vd(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Kt(l),Dn(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Cc(r,i.precedence,e));return t.instance}function Cc(e,t,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===t)u=b;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function Gd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Nc=null;function bx(e,t,i){if(Nc===null){var r=new Map,l=Nc=new Map;l.set(i,r)}else l=Nc,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(e))return r;for(r.set(e,null),i=i.getElementsByTagName(e),l=0;l<i.length;l++){var u=i[l];if(!(u[qt]||u[De]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(t)||"";g=e+g;var b=r.get(g);b?b.push(u):r.set(g,[u])}}return r}function jd(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function nE(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Ax(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Rx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=wx(t),e.suspenseyImages.push(t)),e=rE.bind(e),t.decode().then(e,e))}function iE(e,t,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ds(r.href),u=t.querySelector(Ko(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Jo.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=u,Kt(u);return}u=t.ownerDocument||t,r=Ex(r),(l=gi.get(l))&&Gd(r,l),u=u.createElement("link"),Kt(u);var g=u;g._p=new Promise(function(b,z){g.onload=b,g.onerror=z}),Dn(u,"link",r),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Jo.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Dc=0;function aE(e,t){return e.stylesheets&&e.count===0&&Lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var r=setTimeout(function(){if(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Dc===0&&(Dc=62500*ES());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Dc?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Cx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Lc(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Jo(){this.count--,Cx(this)}function rE(){this.imgCount--,Cx(this)}var Uc=null;function Lc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uc=new Map,t.forEach(sE,e),Uc=null,Jo.call(e))}function sE(e,t){if(!(t.state.loading&4)){var i=Uc.get(e);if(i)var r=i.get(null);else{i=new Map,Uc.set(e,i);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var g=l[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),r=g)}r&&i.set(null,r)}l=t.instance,g=l.getAttribute("data-precedence"),u=i.get(g)||r,u===r&&i.set(null,l),i.set(g,l),this.count++,r=Jo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ls={$$typeof:de,Provider:null,Consumer:null,_currentValue:Ke,_currentValue2:Ke,_threadCount:0};function oE(e,t,i,r,l,u,g,b,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.hiddenUpdates=ho(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function Nx(e,t,i,r,l,u,g,b,z,W,ie,me){return e=new oE(e,t,i,g,z,W,ie,me,b),t=1,u===!0&&(t|=24),u=kn(3,null,null,t),e.current=u,u.stateNode=e,t=af(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:t},lf(u),e}function Dx(e){return e?(e=rs,e):rs}function Ux(e,t,i,r,l,u){l=Dx(l),r.context===null?r.context=l:r.pendingContext=l,r=za(t),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=Pa(e,r,t),i!==null&&(Wn(i,e,t),Co(i,e,t))}function Lx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function kd(e,t){Lx(e,t),(e=e.alternate)&&Lx(e,t)}function Ox(e){if(e.tag===13||e.tag===31){var t=xr(e,67108864);t!==null&&Wn(t,e,67108864),kd(e,67108864)}}function zx(e){if(e.tag===13||e.tag===31){var t=ai();t=re(t);var i=xr(e,t);i!==null&&Wn(i,e,t),kd(e,t)}}var Os=!0;function lE(e,t,i,r){var l=Me.T;Me.T=null;var u=we.p;try{we.p=2,Xd(e,t,i,r)}finally{we.p=u,Me.T=l}}function cE(e,t,i,r){var l=Me.T;Me.T=null;var u=we.p;try{we.p=8,Xd(e,t,i,r)}finally{we.p=u,Me.T=l}}function Xd(e,t,i,r){if(Os){var l=qd(r);if(l===null)Ad(e,t,r,Oc,i),Ix(e,r);else if(fE(l,e,t,i,r))r.stopPropagation();else if(Ix(e,r),t&4&&-1<uE.indexOf(e)){for(;l!==null;){var u=$t(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=Li(u.pendingLanes);if(g!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var z=1<<31-Ln(g);b.entanglements[1]|=z,g&=~z}ki(u),(Dt&6)===0&&(_c=X()+500,Xo(0))}}break;case 31:case 13:b=xr(u,2),b!==null&&Wn(b,u,2),Ec(),kd(u,2)}if(u=qd(r),u===null&&Ad(e,t,r,Oc,i),u===l)break;l=u}l!==null&&r.stopPropagation()}else Ad(e,t,r,null,i)}}function qd(e){return e=Nu(e),Yd(e)}var Oc=null;function Yd(e){if(Oc=null,e=Qe(e),e!==null){var t=f(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=d(t),e!==null)return e;e=null}else if(i===31){if(e=h(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Oc=e,null}function Px(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Be()){case he:return 2;case ye:return 8;case Fe:case Ge:return 32;case ot:return 268435456;default:return 32}default:return 32}}var Wd=!1,Wa=null,Za=null,Ka=null,$o=new Map,el=new Map,Qa=[],uE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ix(e,t){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(t.pointerId)}}function tl(e,t,i,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},t!==null&&(t=$t(t),t!==null&&Ox(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fE(e,t,i,r,l){switch(t){case"focusin":return Wa=tl(Wa,e,t,i,r,l),!0;case"dragenter":return Za=tl(Za,e,t,i,r,l),!0;case"mouseover":return Ka=tl(Ka,e,t,i,r,l),!0;case"pointerover":var u=l.pointerId;return $o.set(u,tl($o.get(u)||null,e,t,i,r,l)),!0;case"gotpointercapture":return u=l.pointerId,el.set(u,tl(el.get(u)||null,e,t,i,r,l)),!0}return!1}function Bx(e){var t=Qe(e.target);if(t!==null){var i=f(t);if(i!==null){if(t=i.tag,t===13){if(t=d(i),t!==null){e.blockedOn=t,Ae(e.priority,function(){zx(i)});return}}else if(t===31){if(t=h(i),t!==null){e.blockedOn=t,Ae(e.priority,function(){zx(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=qd(e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);Cu=r,i.target.dispatchEvent(r),Cu=null}else return t=$t(i),t!==null&&Ox(t),e.blockedOn=i,!1;t.shift()}return!0}function Fx(e,t,i){zc(e)&&i.delete(t)}function dE(){Wd=!1,Wa!==null&&zc(Wa)&&(Wa=null),Za!==null&&zc(Za)&&(Za=null),Ka!==null&&zc(Ka)&&(Ka=null),$o.forEach(Fx),el.forEach(Fx)}function Pc(e,t){e.blockedOn===t&&(e.blockedOn=null,Wd||(Wd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dE)))}var Ic=null;function Hx(e){Ic!==e&&(Ic=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ic===e&&(Ic=null);for(var t=0;t<e.length;t+=3){var i=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(Yd(r||i)===null)continue;break}var u=$t(i);u!==null&&(e.splice(t,3),t-=3,Cf(u,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function zs(e){function t(z){return Pc(z,e)}Wa!==null&&Pc(Wa,e),Za!==null&&Pc(Za,e),Ka!==null&&Pc(Ka,e),$o.forEach(t),el.forEach(t);for(var i=0;i<Qa.length;i++){var r=Qa[i];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Qa.length&&(i=Qa[0],i.blockedOn===null);)Bx(i),i.blockedOn===null&&Qa.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],u=i[r+1],g=l[Oe]||null;if(typeof u=="function")g||Hx(i);else if(g){var b=null;if(u&&u.hasAttribute("formAction")){if(l=u,g=u[Oe]||null)b=g.formAction;else if(Yd(l)!==null)continue}else b=g.action;typeof b=="function"?i[r+1]=b:(i.splice(r,3),r-=3),Hx(i)}}}function Gx(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Zd(e){this._internalRoot=e}Bc.prototype.render=Zd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var i=t.current,r=ai();Ux(i,r,e,t,null,null)},Bc.prototype.unmount=Zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ux(e.current,2,null,e,null,null),Ec(),t[tt]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=J();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Qa.length&&t!==0&&t<Qa[i].priority;i++);Qa.splice(i,0,e),i===0&&Bx(e)}};var Vx=n.version;if(Vx!=="19.3.1")throw Error(s(527,Vx,"19.3.1"));we.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=x(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var hE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Me,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{bt=Fc.inject(hE),Zt=Fc}catch{}}return il.createRoot=function(e,t){if(!c(e))throw Error(s(299));var i=!1,r="",l=D0,u=U0,g=L0;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=Nx(e,1,!1,null,null,i,r,null,l,u,g,Gx),e[tt]=t.current,Td(e),new Zd(t)},il.hydrateRoot=function(e,t,i){if(!c(e))throw Error(s(299));var r=!1,l="",u=D0,g=U0,b=L0,z=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.formState!==void 0&&(z=i.formState)),t=Nx(e,1,!0,t,i??null,r,l,z,u,g,b,Gx),t.context=Dx(null),i=t.current,r=ai(),r=re(r),l=za(r),l.callback=null,Pa(i,l,r),i=r,t.current.lanes=i,pr(t,i),ki(t),e[tt]=t.current,Td(e),new Bc(t)},il.version="19.3.1",il}var Jx;function bE(){if(Jx)return Jd.exports;Jx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Jd.exports=ME(),Jd.exports}var TE=bE();const AE=e_(TE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t_=(...o)=>o.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=mt.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:f,iconNode:d,...h},p)=>mt.createElement("svg",{ref:p,...RE,width:n,height:n,stroke:o,strokeWidth:s?Number(a)*24/Number(n):a,className:t_("lucide",c),...h},[...d.map(([x,y])=>mt.createElement(x,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(o,n)=>{const a=mt.forwardRef(({className:s,...c},f)=>mt.createElement(CE,{ref:f,iconNode:n,className:t_(`lucide-${wE(o)}`,s),...c}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],DE=Qt("ArrowDown",NE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],or=Qt("ArrowUpRight",UE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],OE=Qt("ArrowUp",LE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],PE=Qt("ChevronDown",zE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],BE=Qt("ChevronLeft",IE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],HE=Qt("ChevronRight",FE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Uh=Qt("CircleCheck",GE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],jE=Qt("Copy",VE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Lh=Qt("ExternalLink",kE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qE=Qt("Eye",XE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],oo=Qt("Github",YE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ZE=Qt("Globe",WE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],QE=Qt("GraduationCap",KE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],$E=Qt("Key",JE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],tM=Qt("Linkedin",eM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Oh=Qt("Mail",nM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],aM=Qt("Menu",iM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],sM=Qt("RefreshCw",rM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],lM=Qt("Send",oM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],uM=Qt("ShieldCheck",cM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],dM=Qt("Sparkles",fM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],pM=Qt("Target",hM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],gM=Qt("Volume2",mM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],vM=Qt("VolumeX",xM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],n_=Qt("X",_M),kt={name:"TECH GENZ",tagline:"WE BUILD WHAT'S NEXT.",supportingHeadline:"IDEAS ENGINEERED BEYOND LIMITS.",subDescriptor:"Associated with the student community of NBKRIST, Vidyanagar",intro:"Four minds. One vision. Technology built to turn ambitious ideas into useful experiences.",motive:"To use technology to solve real-world problems, encourage innovation, develop technical skills, and transform ideas into meaningful digital experiences.",vision:"To build a smarter digital future through collaboration, continuous learning, and creative software development.",motto:"Ideas Engineered Beyond Limits.",college:{name:"N.B.K.R. Institute of Science & Technology (NBKRIST)",location:"Vidyanagar, Andhra Pradesh, India",website:"https://nbkrist.org/"},closing:"Together, the team aims to learn, experiment, collaborate, and create technology-driven projects while growing as developers and innovators.",githubOrg:"https://github.com/Tech-Genz",githubRepo:"https://github.com/Tech-Genz/techgenz",websiteUrl:"https://techgenz.site/",contactEmail:"admin@techgenz.site",availability:"Available for ambitious collaborations & high-impact projects"},yM=[{id:"web-dev",index:"01",title:"WEB APPLICATION DEVELOPMENT",description:"High-performance full-stack web applications engineered with modern architectures, resilient frontend frameworks, and robust state management.",capabilities:["React & TypeScript","Next-gen Bundlers (Vite)","Responsive Design Systems","Optimized Core Web Vitals"],expandedDetail:"From interactive client interfaces to complex enterprise-grade single page applications, we build fast, scalable, and accessible web experiences engineered to endure high loads."},{id:"ai-automation",index:"02",title:"AI & AUTOMATION",description:"Intelligent workflow automation, generative AI pipelines, and agentic integrations designed to accelerate productivity and streamline operations.",capabilities:["Large Language Model Integration","Context Retrieval Pipelines","Automated Task Workflows","API Connectors"],expandedDetail:"We connect modern generative AI models and custom automation scripts into practical software layers that solve real workflow bottlenecks."},{id:"mobile-apps",index:"03",title:"MOBILE APPLICATIONS",description:"Fluid cross-platform mobile experiences for iOS and Android built with modern toolchains and native-like performance.",capabilities:["Cross-platform Architecture","Offline First Data Sync","Native Bridge Integration","Sensory & Gesture Feedback"],expandedDetail:"Mobile applications designed with intuitive micro-interactions, efficient memory usage, and responsive gesture-based navigation."},{id:"backend-cloud",index:"04",title:"BACKEND & CLOUD SYSTEMS",description:"Scalable API services, microservice backends, reliable data persistence layers, and secure cloud storage architectures.",capabilities:["RESTful & Realtime APIs","Relational & Document Databases","Authentication & Security","Serverless Deployment"],expandedDetail:"High-throughput server environments, structured schema modeling, and zero-trust authentication layers that power mission-critical software."},{id:"creative-3d",index:"05",title:"CREATIVE CODING & 3D WEB",description:"Interactive WebGL, Three.js environments, shader art, and GPU-accelerated particle graphics that elevate brand storytelling.",capabilities:["Three.js & WebGL Renders","Custom GLSL Shaders","Procedural Particle Systems","60 FPS Interactive Canvases"],expandedDetail:"Pushing the limits of web browsers through spatial 3D graphics, physics simulations, and generative visuals that captivate audiences."},{id:"prototyping-experimental",index:"06",title:"PROTOTYPING & EXPERIMENTAL PROJECTS",description:"Rapid exploratory prototyping, proof-of-concept builds, and cutting-edge digital sandboxes testing next-generation paradigms.",capabilities:["Rapid Interactive Mockups","Feasibility Benchmarking","Experimental Hardware/Software Interfaces","Iterative Usability Sprints"],expandedDetail:"Validating ambitious hypotheses through functional software prototypes, ensuring strategic direction before committing large-scale capital."}],$x=[{id:"sharepinz",index:"01",title:"SHAREPINZ",italicWord:"file sharing",subtitle:"PIN-BASED FILE SHARING PLATFORM",category:"Web Application // Cloud System",description:"SharePinz is a file-sharing platform designed to let users upload files, generate a unique PIN, and share access with recipients. Built for frictionless transfers without cumbersome account creation.",featured:!0,year:"2026",techStack:["React","TypeScript","Node.js","Express","Cloud Storage","REST APIs","Tailwind CSS"],mockupType:"browser",repoUrl:"https://github.com/Tech-Genz/SharePinz",liveUrl:"https://sharepinz.site/",problem:"Traditional file sharing requires either sign-ups with email verifications or yields unwieldy, easily forgotten links with ambiguous security policies.",solution:"SharePinz introduces ephemeral PIN codes paired with encrypted cloud storage, allowing immediate sender-to-recipient retrieval with TTL expiration and clean bandwidth limits.",keyFeatures:["Instant 6-digit numeric PIN generation upon file upload","Expiring time-to-live (TTL) file purge logic","Bandwidth-efficient multipart streaming","Minimalist, distraction-free responsive upload and download UI"],challenges:"Handling concurrent chunked uploads reliably across spotty network connections while maintaining strict PIN access gating and automated storage cleanup."}],i_=[{id:"guna",index:"01",name:"V. Gunasekhar",role:"Team Leader",email:"admin@techgenz.site",shortBio:"Architecting core system structures, driving technical strategy, and coordinating engineering pipelines across web, backend, and 3D visual environments.",skills:["Full Stack Architecture","System Design","React & TypeScript","Three.js & Graphics","Engineering Leadership"],github:"https://github.com/Tech-Genz",linkedin:"https://www.linkedin.com/in/varikunta-gunasekhar-446997369/",avatarPlaceholder:"VG"},{id:"sahithi",index:"02",name:"CH. Sahithi Sri",role:"Team Member 1",email:"c.sahithisri@techgenz.site",shortBio:"Specializing in intuitive user interfaces, frontend component systems, responsive design aesthetics, and fluid user experiences.",skills:["Frontend Development","UI/UX Architecture","React & Modern CSS","Design Systems","Web Accessibility"],github:"https://github.com/Tech-Genz",linkedin:"https://www.linkedin.com/in/sahithi-sri-2b0355386",avatarPlaceholder:"SS"},{id:"bhuvan",index:"03",name:"Kull Bhuvan",role:"Team Member 2",email:"k.bhuvan@techgenz.site",shortBio:"Focused on robust backend services, data modeling, API integration, and cloud deployment pipelines for scalable digital applications.",skills:["Backend Engineering","Database Modeling","API Architecture","Cloud Infrastructure","Performance Optimization"],github:"https://github.com/Tech-Genz",linkedin:"https://www.linkedin.com/in/kull-bhuvan-772058440",avatarPlaceholder:"KB"},{id:"navaz",index:"04",name:"SK Mohammad Navaz",role:"Team Member 3",email:"sk.navaz@techgenz.site",shortBio:"Developing full-stack workflows, experimental prototypes, logic integration, and intelligent automation tooling for client and server platforms.",skills:["Full Stack Prototyping","Automation & Logic","Node.js & JavaScript","Mobile Integration","Testing & QA"],github:"https://github.com/Tech-Genz",linkedin:"https://www.linkedin.com/in/navaz-sk-523aa735a",avatarPlaceholder:"MN"}],ev=[{name:"React",category:"frontend",tag:"Frontend Library"},{name:"TypeScript",category:"frontend",tag:"Type Safety"},{name:"JavaScript",category:"frontend",tag:"Core Language"},{name:"Node.js",category:"backend",tag:"Runtime Environment"},{name:"Supabase",category:"backend",tag:"Backend as a Service"},{name:"Three.js",category:"creative",tag:"3D & WebGL"},{name:"Tailwind CSS",category:"frontend",tag:"Styling Engine"},{name:"Flutter",category:"frontend",tag:"Mobile Framework"},{name:"GitHub",category:"devops",tag:"Version & CI/CD"},{name:"REST APIs",category:"backend",tag:"Interface Protocol"},{name:"GLSL Shaders",category:"creative",tag:"GPU Computing"},{name:"AI Automation",category:"ai",tag:"Intelligent Systems"},{name:"Vite",category:"devops",tag:"Build Tool"},{name:"PostgreSQL",category:"backend",tag:"Relational DB"}],SM=({activeSection:o})=>{const[n,a]=mt.useState(!1),[s,c]=mt.useState(!1);mt.useEffect(()=>{const h=()=>{c(window.scrollY>40)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const f=[{name:"HOME",href:"#home"},{name:"ABOUT",href:"#about"},{name:"SERVICES",href:"#services"},{name:"PROJECTS",href:"#projects"},{name:"TEAM",href:"#team"},{name:"CONTACT",href:"#contact"}],d=(h,p)=>{h.preventDefault(),a(!1);const x=document.querySelector(p);if(x){const S=x.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:S,behavior:"smooth"})}};return v.jsxs("header",{className:`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${s?"bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] py-4":"bg-transparent border-b border-white/[0.04] py-5"}`,children:[v.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between",children:[v.jsxs("a",{href:"#home",onClick:h=>d(h,"#home"),className:"flex items-center gap-2 group text-sm font-display font-bold tracking-widest text-white transition-opacity hover:opacity-80",children:[v.jsx("span",{children:kt.name}),v.jsx("span",{className:"text-neutral-500 font-mono font-normal tracking-normal group-hover:text-accent-cyan transition-colors",children:"//"}),v.jsx("span",{className:"hidden xl:inline text-[10px] font-mono font-normal tracking-wider text-neutral-400 uppercase",children:"Software & Technology Team"})]}),v.jsx("nav",{className:"hidden md:flex items-center space-x-8",children:f.map(h=>{const p=o===h.href.substring(1);return v.jsxs("a",{href:h.href,onClick:x=>d(x,h.href),className:`relative text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 py-1 ${p?"text-white font-medium":"text-neutral-400 hover:text-white"}`,children:[h.name,p&&v.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[1.5px] bg-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"})]},h.name)})}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsxs("a",{href:"#contact",onClick:h=>d(h,"#contact"),className:"hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white hover:text-black hover:border-white text-xs font-mono tracking-wider transition-all duration-300 text-neutral-300 group",children:[v.jsx("span",{children:"GET IN TOUCH"}),v.jsx(or,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),v.jsx("button",{onClick:()=>a(!n),"aria-label":n?"Close menu":"Open menu",className:"md:hidden p-2 rounded-lg text-neutral-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors focus:outline-none",children:n?v.jsx(n_,{className:"w-5 h-5"}):v.jsx(aM,{className:"w-5 h-5"})})]})]}),n&&v.jsxs("div",{className:"md:hidden fixed inset-x-0 top-[65px] bg-[#050505]/98 border-b border-white/10 px-6 py-8 flex flex-col space-y-5 backdrop-blur-xl animate-fadeIn",children:[f.map(h=>{const p=o===h.href.substring(1);return v.jsxs("a",{href:h.href,onClick:x=>d(x,h.href),className:`text-base font-display tracking-widest flex items-center justify-between py-2 border-b border-white/[0.06] ${p?"text-white font-bold":"text-neutral-400 hover:text-white"}`,children:[v.jsx("span",{children:h.name}),v.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"//"})]},h.name)}),v.jsxs("div",{className:"pt-4 flex flex-col gap-3",children:[v.jsx("a",{href:"#contact",onClick:h=>d(h,"#contact"),className:"w-full py-3 text-center rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors",children:"Contact Tech Genz"}),v.jsx("a",{href:kt.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"w-full py-2.5 text-center rounded-full border border-white/20 text-neutral-300 font-mono text-xs tracking-wider hover:border-white/40 transition-colors",children:"GitHub Organization ↗"})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="174",EM=0,tv=1,MM=2,a_=1,bM=2,ga=3,ur=0,Kn=1,xa=2,lr=0,Qs=1,zh=2,nv=3,iv=4,TM=5,jr=100,AM=101,wM=102,RM=103,CM=104,NM=200,DM=201,UM=202,LM=203,Ph=204,Ih=205,OM=206,zM=207,PM=208,IM=209,BM=210,FM=211,HM=212,GM=213,VM=214,Bh=0,Fh=1,Hh=2,eo=3,Gh=4,Vh=5,jh=6,kh=7,r_=0,jM=1,kM=2,cr=0,XM=1,qM=2,YM=3,WM=4,ZM=5,KM=6,QM=7,s_=300,to=301,no=302,Xh=303,qh=304,_u=306,Yh=1e3,Xr=1001,Wh=1002,Ui=1003,JM=1004,Hc=1005,qi=1006,nh=1007,qr=1008,Ea=1009,o_=1010,l_=1011,ul=1012,wp=1013,Wr=1014,va=1015,fl=1016,Rp=1017,Cp=1018,io=1020,c_=35902,u_=1021,f_=1022,Di=1023,d_=1024,h_=1025,Js=1026,ao=1027,p_=1028,Np=1029,m_=1030,Dp=1031,Up=1033,uu=33776,fu=33777,du=33778,hu=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,ep=37492,tp=37496,np=37808,ip=37809,ap=37810,rp=37811,sp=37812,op=37813,lp=37814,cp=37815,up=37816,fp=37817,dp=37818,hp=37819,pp=37820,mp=37821,pu=36492,gp=36494,xp=36495,g_=36283,vp=36284,_p=36285,yp=36286,$M=3200,eb=3201,tb=0,nb=1,sr="",vi="srgb",ro="srgb-linear",gu="linear",Ft="srgb",Ps=7680,av=519,ib=512,ab=513,rb=514,x_=515,sb=516,ob=517,lb=518,cb=519,rv=35044,sv="300 es",_a=2e3,xu=2001;class lo{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const c=s[n];if(c!==void 0){const f=c.indexOf(a);f!==-1&&c.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,n);n.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,Sp=180/Math.PI;function dl(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[n&255]+Pn[n>>8&255]+"-"+Pn[n>>16&15|64]+Pn[n>>24&255]+"-"+Pn[a&63|128]+Pn[a>>8&255]+"-"+Pn[a>>16&255]+Pn[a>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function At(o,n,a){return Math.max(n,Math.min(a,o))}function ub(o,n){return(o%n+n)%n}function ah(o,n,a){return(1-a)*o+a*n}function al(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(n=0,a=0){Ht.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,c=n.elements;return this.x=c[0]*a+c[3]*s+c[6],this.y=c[1]*a+c[4]*s+c[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=At(this.x,n.x,a.x),this.y=At(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=At(this.x,n,a),this.y=At(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(At(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),c=Math.sin(a),f=this.x-n.x,d=this.y-n.y;return this.x=f*s-d*c+n.x,this.y=f*c+d*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(n,a,s,c,f,d,h,p,x){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,d,h,p,x)}set(n,a,s,c,f,d,h,p,x){const y=this.elements;return y[0]=n,y[1]=c,y[2]=h,y[3]=a,y[4]=f,y[5]=p,y[6]=s,y[7]=d,y[8]=x,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,d=s[0],h=s[3],p=s[6],x=s[1],y=s[4],m=s[7],S=s[2],M=s[5],R=s[8],A=c[0],E=c[3],_=c[6],L=c[1],P=c[4],U=c[7],K=c[2],V=c[5],I=c[8];return f[0]=d*A+h*L+p*K,f[3]=d*E+h*P+p*V,f[6]=d*_+h*U+p*I,f[1]=x*A+y*L+m*K,f[4]=x*E+y*P+m*V,f[7]=x*_+y*U+m*I,f[2]=S*A+M*L+R*K,f[5]=S*E+M*P+R*V,f[8]=S*_+M*U+R*I,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],x=n[7],y=n[8];return a*d*y-a*h*x-s*f*y+s*h*p+c*f*x-c*d*p}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],x=n[7],y=n[8],m=y*d-h*x,S=h*p-y*f,M=x*f-d*p,R=a*m+s*S+c*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/R;return n[0]=m*A,n[1]=(c*x-y*s)*A,n[2]=(h*s-c*d)*A,n[3]=S*A,n[4]=(y*a-c*p)*A,n[5]=(c*f-h*a)*A,n[6]=M*A,n[7]=(s*p-x*a)*A,n[8]=(d*a-s*f)*A,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,c,f,d,h){const p=Math.cos(f),x=Math.sin(f);return this.set(s*p,s*x,-s*(p*d+x*h)+d+n,-c*x,c*p,-c*(-x*d+p*h)+h+a,0,0,1),this}scale(n,a){return this.premultiply(rh.makeScale(n,a)),this}rotate(n){return this.premultiply(rh.makeRotation(-n)),this}translate(n,a){return this.premultiply(rh.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<9;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new ft;function v_(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function vu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fb(){const o=vu("canvas");return o.style.display="block",o}const ov={};function Gr(o){o in ov||(ov[o]=!0,console.warn(o))}function db(o,n,a){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function hb(o){const n=o.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function pb(o){const n=o.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const lv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mb(){const o={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ft&&(c.r=Sa(c.r),c.g=Sa(c.g),c.b=Sa(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ft&&(c.r=$s(c.r),c.g=$s(c.g),c.b=$s(c.b))),c},fromWorkingColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},toWorkingColorSpace:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===sr?gu:this.spaces[c].transfer},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[ro]:{primaries:n,whitePoint:s,transfer:gu,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:n,whitePoint:s,transfer:Ft,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),o}const Nt=mb();function Sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Is;class gb{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let a;if(n instanceof HTMLCanvasElement)a=n;else{Is===void 0&&(Is=vu("canvas")),Is.width=n.width,Is.height=n.height;const s=Is.getContext("2d");n instanceof ImageData?s.putImageData(n,0,0):s.drawImage(n,0,0,n.width,n.height),a=Is}return a.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=vu("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const c=s.getImageData(0,0,n.width,n.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Sa(f[d]/255)*255;return s.putImageData(c,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Sa(a[s]/255)*255):a[s]=Sa(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let xb=0;class Lp{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=dl(),this.data=n,this.dataReady=!0,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(sh(c[d].image)):f.push(sh(c[d]))}else f=sh(c);s.url=f}return a||(n.images[this.uuid]=s),s}}function sh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?gb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vb=0;class jn extends lo{constructor(n=jn.DEFAULT_IMAGE,a=jn.DEFAULT_MAPPING,s=Xr,c=Xr,f=qi,d=qr,h=Di,p=Ea,x=jn.DEFAULT_ANISOTROPY,y=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=dl(),this.name="",this.source=new Lp(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=x,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==s_)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Yh:n.x=n.x-Math.floor(n.x);break;case Xr:n.x=n.x<0?0:1;break;case Wh:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Yh:n.y=n.y-Math.floor(n.y);break;case Xr:n.y=n.y<0?0:1;break;case Wh:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=s_;jn.DEFAULT_ANISOTROPY=1;class on{constructor(n=0,a=0,s=0,c=1){on.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=c}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,c){return this.x=n,this.y=a,this.z=s,this.w=c,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=this.w,d=n.elements;return this.x=d[0]*a+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*a+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*a+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*a+d[7]*s+d[11]*c+d[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,c,f;const p=n.elements,x=p[0],y=p[4],m=p[8],S=p[1],M=p[5],R=p[9],A=p[2],E=p[6],_=p[10];if(Math.abs(y-S)<.01&&Math.abs(m-A)<.01&&Math.abs(R-E)<.01){if(Math.abs(y+S)<.1&&Math.abs(m+A)<.1&&Math.abs(R+E)<.1&&Math.abs(x+M+_-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const P=(x+1)/2,U=(M+1)/2,K=(_+1)/2,V=(y+S)/4,I=(m+A)/4,j=(R+E)/4;return P>U&&P>K?P<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(P),c=V/s,f=I/s):U>K?U<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(U),s=V/c,f=j/c):K<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(K),s=I/f,c=j/f),this.set(s,c,f,a),this}let L=Math.sqrt((E-R)*(E-R)+(m-A)*(m-A)+(S-y)*(S-y));return Math.abs(L)<.001&&(L=1),this.x=(E-R)/L,this.y=(m-A)/L,this.z=(S-y)/L,this.w=Math.acos((x+M+_-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=At(this.x,n.x,a.x),this.y=At(this.y,n.y,a.y),this.z=At(this.z,n.z,a.z),this.w=At(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=At(this.x,n,a),this.y=At(this.y,n,a),this.z=At(this.z,n,a),this.w=At(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _b extends lo{constructor(n=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=1,this.scissor=new on(0,0,n,a),this.scissorTest=!1,this.viewport=new on(0,0,n,a);const c={width:n,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new jn(c,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=n,this.textures[c].image.height=a,this.textures[c].image.depth=s;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const c=Object.assign({},n.textures[a].image);this.textures[a].source=new Lp(c)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends _b{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class __ extends jn{constructor(n=null,a=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends jn{constructor(n=null,a=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(n=0,a=0,s=0,c=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=c}static slerpFlat(n,a,s,c,f,d,h){let p=s[c+0],x=s[c+1],y=s[c+2],m=s[c+3];const S=f[d+0],M=f[d+1],R=f[d+2],A=f[d+3];if(h===0){n[a+0]=p,n[a+1]=x,n[a+2]=y,n[a+3]=m;return}if(h===1){n[a+0]=S,n[a+1]=M,n[a+2]=R,n[a+3]=A;return}if(m!==A||p!==S||x!==M||y!==R){let E=1-h;const _=p*S+x*M+y*R+m*A,L=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const K=Math.sqrt(P),V=Math.atan2(K,_*L);E=Math.sin(E*V)/K,h=Math.sin(h*V)/K}const U=h*L;if(p=p*E+S*U,x=x*E+M*U,y=y*E+R*U,m=m*E+A*U,E===1-h){const K=1/Math.sqrt(p*p+x*x+y*y+m*m);p*=K,x*=K,y*=K,m*=K}}n[a]=p,n[a+1]=x,n[a+2]=y,n[a+3]=m}static multiplyQuaternionsFlat(n,a,s,c,f,d){const h=s[c],p=s[c+1],x=s[c+2],y=s[c+3],m=f[d],S=f[d+1],M=f[d+2],R=f[d+3];return n[a]=h*R+y*m+p*M-x*S,n[a+1]=p*R+y*S+x*m-h*M,n[a+2]=x*R+y*M+h*S-p*m,n[a+3]=y*R-h*m-p*S-x*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,c){return this._x=n,this._y=a,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,c=n._y,f=n._z,d=n._order,h=Math.cos,p=Math.sin,x=h(s/2),y=h(c/2),m=h(f/2),S=p(s/2),M=p(c/2),R=p(f/2);switch(d){case"XYZ":this._x=S*y*m+x*M*R,this._y=x*M*m-S*y*R,this._z=x*y*R+S*M*m,this._w=x*y*m-S*M*R;break;case"YXZ":this._x=S*y*m+x*M*R,this._y=x*M*m-S*y*R,this._z=x*y*R-S*M*m,this._w=x*y*m+S*M*R;break;case"ZXY":this._x=S*y*m-x*M*R,this._y=x*M*m+S*y*R,this._z=x*y*R+S*M*m,this._w=x*y*m-S*M*R;break;case"ZYX":this._x=S*y*m-x*M*R,this._y=x*M*m+S*y*R,this._z=x*y*R-S*M*m,this._w=x*y*m+S*M*R;break;case"YZX":this._x=S*y*m+x*M*R,this._y=x*M*m+S*y*R,this._z=x*y*R-S*M*m,this._w=x*y*m-S*M*R;break;case"XZY":this._x=S*y*m-x*M*R,this._y=x*M*m-S*y*R,this._z=x*y*R+S*M*m,this._w=x*y*m+S*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,c=Math.sin(s);return this._x=n.x*c,this._y=n.y*c,this._z=n.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],c=a[4],f=a[8],d=a[1],h=a[5],p=a[9],x=a[2],y=a[6],m=a[10],S=s+h+m;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(y-p)*M,this._y=(f-x)*M,this._z=(d-c)*M}else if(s>h&&s>m){const M=2*Math.sqrt(1+s-h-m);this._w=(y-p)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+x)/M}else if(h>m){const M=2*Math.sqrt(1+h-s-m);this._w=(f-x)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(p+y)/M}else{const M=2*Math.sqrt(1+m-s-h);this._w=(d-c)/M,this._x=(f+x)/M,this._y=(p+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(At(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const c=Math.min(1,a/s);return this.slerp(n,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,c=n._y,f=n._z,d=n._w,h=a._x,p=a._y,x=a._z,y=a._w;return this._x=s*y+d*h+c*x-f*p,this._y=c*y+d*p+f*h-s*x,this._z=f*y+d*x+s*p-c*h,this._w=d*y-s*h-c*p-f*x,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,c=this._y,f=this._z,d=this._w;let h=d*n._w+s*n._x+c*n._y+f*n._z;if(h<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,h=-h):this.copy(n),h>=1)return this._w=d,this._x=s,this._y=c,this._z=f,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-a;return this._w=M*d+a*this._w,this._x=M*s+a*this._x,this._y=M*c+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const x=Math.sqrt(p),y=Math.atan2(x,h),m=Math.sin((1-a)*y)/x,S=Math.sin(a*y)/x;return this._w=d*m+this._w*S,this._x=s*m+this._x*S,this._y=c*m+this._y*S,this._z=f*m+this._z*S,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(n),c*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(n=0,a=0,s=0){ue.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(uv.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(uv.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*c,this.y=f[1]*a+f[4]*s+f[7]*c,this.z=f[2]*a+f[5]*s+f[8]*c,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=n.elements,d=1/(f[3]*a+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*a+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*a+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(n){const a=this.x,s=this.y,c=this.z,f=n.x,d=n.y,h=n.z,p=n.w,x=2*(d*c-h*s),y=2*(h*a-f*c),m=2*(f*s-d*a);return this.x=a+p*x+d*m-h*y,this.y=s+p*y+h*x-f*m,this.z=c+p*m+f*y-d*x,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*c,this.y=f[1]*a+f[5]*s+f[9]*c,this.z=f[2]*a+f[6]*s+f[10]*c,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=At(this.x,n.x,a.x),this.y=At(this.y,n.y,a.y),this.z=At(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=At(this.x,n,a),this.y=At(this.y,n,a),this.z=At(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,c=n.y,f=n.z,d=a.x,h=a.y,p=a.z;return this.x=c*p-f*h,this.y=f*d-s*p,this.z=s*h-c*d,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return oh.copy(this).projectOnVector(n),this.sub(oh)}reflect(n){return this.sub(oh.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(At(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,c=this.z-n.z;return a*a+s*s+c*c}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const c=Math.sin(a)*n;return this.x=c*Math.sin(s),this.y=Math.cos(a)*n,this.z=c*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),c=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=c,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new ue,uv=new hl;class pl{constructor(n=new ue(1/0,1/0,1/0),a=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(wi.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(wi.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=wi.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)n.isMesh===!0?n.getVertexPosition(d,wi):wi.fromBufferAttribute(f,d),wi.applyMatrix4(n.matrixWorld),this.expandByPoint(wi);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Gc.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Gc.copy(s.boundingBox)),Gc.applyMatrix4(n.matrixWorld),this.union(Gc)}const c=n.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,wi),wi.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(rl),Vc.subVectors(this.max,rl),Bs.subVectors(n.a,rl),Fs.subVectors(n.b,rl),Hs.subVectors(n.c,rl),$a.subVectors(Fs,Bs),er.subVectors(Hs,Fs),zr.subVectors(Bs,Hs);let a=[0,-$a.z,$a.y,0,-er.z,er.y,0,-zr.z,zr.y,$a.z,0,-$a.x,er.z,0,-er.x,zr.z,0,-zr.x,-$a.y,$a.x,0,-er.y,er.x,0,-zr.y,zr.x,0];return!lh(a,Bs,Fs,Hs,Vc)||(a=[1,0,0,0,1,0,0,0,1],!lh(a,Bs,Fs,Hs,Vc))?!1:(jc.crossVectors($a,er),a=[jc.x,jc.y,jc.z],lh(a,Bs,Fs,Hs,Vc))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,wi).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(wi).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(fa),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const fa=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],wi=new ue,Gc=new pl,Bs=new ue,Fs=new ue,Hs=new ue,$a=new ue,er=new ue,zr=new ue,rl=new ue,Vc=new ue,jc=new ue,Pr=new ue;function lh(o,n,a,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){Pr.fromArray(o,f);const h=c.x*Math.abs(Pr.x)+c.y*Math.abs(Pr.y)+c.z*Math.abs(Pr.z),p=n.dot(Pr),x=a.dot(Pr),y=s.dot(Pr);if(Math.max(-Math.max(p,x,y),Math.min(p,x,y))>h)return!1}return!0}const Sb=new pl,sl=new ue,ch=new ue;class yu{constructor(n=new ue,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):Sb.setFromPoints(n).getCenter(s);let c=0;for(let f=0,d=n.length;f<d;f++)c=Math.max(c,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(c),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;sl.subVectors(n,this.center);const a=sl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),c=(s-this.radius)*.5;this.center.addScaledVector(sl,c/s),this.radius+=c}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(ch.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(sl.copy(n.center).add(ch)),this.expandByPoint(sl.copy(n.center).sub(ch))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const da=new ue,uh=new ue,kc=new ue,tr=new ue,fh=new ue,Xc=new ue,dh=new ue;class Op{constructor(n=new ue,a=new ue(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,da)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=da.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(da.copy(this.origin).addScaledVector(this.direction,a),da.distanceToSquared(n))}distanceSqToSegment(n,a,s,c){uh.copy(n).add(a).multiplyScalar(.5),kc.copy(a).sub(n).normalize(),tr.copy(this.origin).sub(uh);const f=n.distanceTo(a)*.5,d=-this.direction.dot(kc),h=tr.dot(this.direction),p=-tr.dot(kc),x=tr.lengthSq(),y=Math.abs(1-d*d);let m,S,M,R;if(y>0)if(m=d*p-h,S=d*h-p,R=f*y,m>=0)if(S>=-R)if(S<=R){const A=1/y;m*=A,S*=A,M=m*(m+d*S+2*h)+S*(d*m+S+2*p)+x}else S=f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*p)+x;else S=-f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*p)+x;else S<=-R?(m=Math.max(0,-(-d*f+h)),S=m>0?-f:Math.min(Math.max(-f,-p),f),M=-m*m+S*(S+2*p)+x):S<=R?(m=0,S=Math.min(Math.max(-f,-p),f),M=S*(S+2*p)+x):(m=Math.max(0,-(d*f+h)),S=m>0?f:Math.min(Math.max(-f,-p),f),M=-m*m+S*(S+2*p)+x);else S=d>0?-f:f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*p)+x;return s&&s.copy(this.origin).addScaledVector(this.direction,m),c&&c.copy(uh).addScaledVector(kc,S),M}intersectSphere(n,a){da.subVectors(n.center,this.origin);const s=da.dot(this.direction),c=da.dot(da)-s*s,f=n.radius*n.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,a):this.at(h,a)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,c,f,d,h,p;const x=1/this.direction.x,y=1/this.direction.y,m=1/this.direction.z,S=this.origin;return x>=0?(s=(n.min.x-S.x)*x,c=(n.max.x-S.x)*x):(s=(n.max.x-S.x)*x,c=(n.min.x-S.x)*x),y>=0?(f=(n.min.y-S.y)*y,d=(n.max.y-S.y)*y):(f=(n.max.y-S.y)*y,d=(n.min.y-S.y)*y),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),m>=0?(h=(n.min.z-S.z)*m,p=(n.max.z-S.z)*m):(h=(n.max.z-S.z)*m,p=(n.min.z-S.z)*m),s>p||h>c)||((h>s||s!==s)&&(s=h),(p<c||c!==c)&&(c=p),c<0)?null:this.at(s>=0?s:c,a)}intersectsBox(n){return this.intersectBox(n,da)!==null}intersectTriangle(n,a,s,c,f){fh.subVectors(a,n),Xc.subVectors(s,n),dh.crossVectors(fh,Xc);let d=this.direction.dot(dh),h;if(d>0){if(c)return null;h=1}else if(d<0)h=-1,d=-d;else return null;tr.subVectors(this.origin,n);const p=h*this.direction.dot(Xc.crossVectors(tr,Xc));if(p<0)return null;const x=h*this.direction.dot(fh.cross(tr));if(x<0||p+x>d)return null;const y=-h*tr.dot(dh);return y<0?null:this.at(y/d,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(n,a,s,c,f,d,h,p,x,y,m,S,M,R,A,E){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,d,h,p,x,y,m,S,M,R,A,E)}set(n,a,s,c,f,d,h,p,x,y,m,S,M,R,A,E){const _=this.elements;return _[0]=n,_[4]=a,_[8]=s,_[12]=c,_[1]=f,_[5]=d,_[9]=h,_[13]=p,_[2]=x,_[6]=y,_[10]=m,_[14]=S,_[3]=M,_[7]=R,_[11]=A,_[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,c=1/Gs.setFromMatrixColumn(n,0).length(),f=1/Gs.setFromMatrixColumn(n,1).length(),d=1/Gs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*c,a[1]=s[1]*c,a[2]=s[2]*c,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,c=n.y,f=n.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(c),x=Math.sin(c),y=Math.cos(f),m=Math.sin(f);if(n.order==="XYZ"){const S=d*y,M=d*m,R=h*y,A=h*m;a[0]=p*y,a[4]=-p*m,a[8]=x,a[1]=M+R*x,a[5]=S-A*x,a[9]=-h*p,a[2]=A-S*x,a[6]=R+M*x,a[10]=d*p}else if(n.order==="YXZ"){const S=p*y,M=p*m,R=x*y,A=x*m;a[0]=S+A*h,a[4]=R*h-M,a[8]=d*x,a[1]=d*m,a[5]=d*y,a[9]=-h,a[2]=M*h-R,a[6]=A+S*h,a[10]=d*p}else if(n.order==="ZXY"){const S=p*y,M=p*m,R=x*y,A=x*m;a[0]=S-A*h,a[4]=-d*m,a[8]=R+M*h,a[1]=M+R*h,a[5]=d*y,a[9]=A-S*h,a[2]=-d*x,a[6]=h,a[10]=d*p}else if(n.order==="ZYX"){const S=d*y,M=d*m,R=h*y,A=h*m;a[0]=p*y,a[4]=R*x-M,a[8]=S*x+A,a[1]=p*m,a[5]=A*x+S,a[9]=M*x-R,a[2]=-x,a[6]=h*p,a[10]=d*p}else if(n.order==="YZX"){const S=d*p,M=d*x,R=h*p,A=h*x;a[0]=p*y,a[4]=A-S*m,a[8]=R*m+M,a[1]=m,a[5]=d*y,a[9]=-h*y,a[2]=-x*y,a[6]=M*m+R,a[10]=S-A*m}else if(n.order==="XZY"){const S=d*p,M=d*x,R=h*p,A=h*x;a[0]=p*y,a[4]=-m,a[8]=x*y,a[1]=S*m+A,a[5]=d*y,a[9]=M*m-R,a[2]=R*m-M,a[6]=h*y,a[10]=A*m+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(Eb,n,Mb)}lookAt(n,a,s){const c=this.elements;return si.subVectors(n,a),si.lengthSq()===0&&(si.z=1),si.normalize(),nr.crossVectors(s,si),nr.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),nr.crossVectors(s,si)),nr.normalize(),qc.crossVectors(si,nr),c[0]=nr.x,c[4]=qc.x,c[8]=si.x,c[1]=nr.y,c[5]=qc.y,c[9]=si.y,c[2]=nr.z,c[6]=qc.z,c[10]=si.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,d=s[0],h=s[4],p=s[8],x=s[12],y=s[1],m=s[5],S=s[9],M=s[13],R=s[2],A=s[6],E=s[10],_=s[14],L=s[3],P=s[7],U=s[11],K=s[15],V=c[0],I=c[4],j=c[8],D=c[12],N=c[1],F=c[5],le=c[9],te=c[13],fe=c[2],de=c[6],k=c[10],ae=c[14],Z=c[3],_e=c[7],Se=c[11],be=c[15];return f[0]=d*V+h*N+p*fe+x*Z,f[4]=d*I+h*F+p*de+x*_e,f[8]=d*j+h*le+p*k+x*Se,f[12]=d*D+h*te+p*ae+x*be,f[1]=y*V+m*N+S*fe+M*Z,f[5]=y*I+m*F+S*de+M*_e,f[9]=y*j+m*le+S*k+M*Se,f[13]=y*D+m*te+S*ae+M*be,f[2]=R*V+A*N+E*fe+_*Z,f[6]=R*I+A*F+E*de+_*_e,f[10]=R*j+A*le+E*k+_*Se,f[14]=R*D+A*te+E*ae+_*be,f[3]=L*V+P*N+U*fe+K*Z,f[7]=L*I+P*F+U*de+K*_e,f[11]=L*j+P*le+U*k+K*Se,f[15]=L*D+P*te+U*ae+K*be,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],c=n[8],f=n[12],d=n[1],h=n[5],p=n[9],x=n[13],y=n[2],m=n[6],S=n[10],M=n[14],R=n[3],A=n[7],E=n[11],_=n[15];return R*(+f*p*m-c*x*m-f*h*S+s*x*S+c*h*M-s*p*M)+A*(+a*p*M-a*x*S+f*d*S-c*d*M+c*x*y-f*p*y)+E*(+a*x*m-a*h*M-f*d*m+s*d*M+f*h*y-s*x*y)+_*(-c*h*y-a*p*m+a*h*S+c*d*m-s*d*S+s*p*y)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const c=this.elements;return n.isVector3?(c[12]=n.x,c[13]=n.y,c[14]=n.z):(c[12]=n,c[13]=a,c[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],x=n[7],y=n[8],m=n[9],S=n[10],M=n[11],R=n[12],A=n[13],E=n[14],_=n[15],L=m*E*x-A*S*x+A*p*M-h*E*M-m*p*_+h*S*_,P=R*S*x-y*E*x-R*p*M+d*E*M+y*p*_-d*S*_,U=y*A*x-R*m*x+R*h*M-d*A*M-y*h*_+d*m*_,K=R*m*p-y*A*p-R*h*S+d*A*S+y*h*E-d*m*E,V=a*L+s*P+c*U+f*K;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return n[0]=L*I,n[1]=(A*S*f-m*E*f-A*c*M+s*E*M+m*c*_-s*S*_)*I,n[2]=(h*E*f-A*p*f+A*c*x-s*E*x-h*c*_+s*p*_)*I,n[3]=(m*p*f-h*S*f-m*c*x+s*S*x+h*c*M-s*p*M)*I,n[4]=P*I,n[5]=(y*E*f-R*S*f+R*c*M-a*E*M-y*c*_+a*S*_)*I,n[6]=(R*p*f-d*E*f-R*c*x+a*E*x+d*c*_-a*p*_)*I,n[7]=(d*S*f-y*p*f+y*c*x-a*S*x-d*c*M+a*p*M)*I,n[8]=U*I,n[9]=(R*m*f-y*A*f-R*s*M+a*A*M+y*s*_-a*m*_)*I,n[10]=(d*A*f-R*h*f+R*s*x-a*A*x-d*s*_+a*h*_)*I,n[11]=(y*h*f-d*m*f-y*s*x+a*m*x+d*s*M-a*h*M)*I,n[12]=K*I,n[13]=(y*A*c-R*m*c+R*s*S-a*A*S-y*s*E+a*m*E)*I,n[14]=(R*h*c-d*A*c-R*s*p+a*A*p+d*s*E-a*h*E)*I,n[15]=(d*m*c-y*h*c+y*s*p-a*m*p-d*s*S+a*h*S)*I,this}scale(n){const a=this.elements,s=n.x,c=n.y,f=n.z;return a[0]*=s,a[4]*=c,a[8]*=f,a[1]*=s,a[5]*=c,a[9]*=f,a[2]*=s,a[6]*=c,a[10]*=f,a[3]*=s,a[7]*=c,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],c=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,c))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),c=Math.sin(a),f=1-s,d=n.x,h=n.y,p=n.z,x=f*d,y=f*h;return this.set(x*d+s,x*h-c*p,x*p+c*h,0,x*h+c*p,y*h+s,y*p-c*d,0,x*p-c*h,y*p+c*d,f*p*p+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,c,f,d){return this.set(1,s,f,0,n,1,d,0,a,c,1,0,0,0,0,1),this}compose(n,a,s){const c=this.elements,f=a._x,d=a._y,h=a._z,p=a._w,x=f+f,y=d+d,m=h+h,S=f*x,M=f*y,R=f*m,A=d*y,E=d*m,_=h*m,L=p*x,P=p*y,U=p*m,K=s.x,V=s.y,I=s.z;return c[0]=(1-(A+_))*K,c[1]=(M+U)*K,c[2]=(R-P)*K,c[3]=0,c[4]=(M-U)*V,c[5]=(1-(S+_))*V,c[6]=(E+L)*V,c[7]=0,c[8]=(R+P)*I,c[9]=(E-L)*I,c[10]=(1-(S+A))*I,c[11]=0,c[12]=n.x,c[13]=n.y,c[14]=n.z,c[15]=1,this}decompose(n,a,s){const c=this.elements;let f=Gs.set(c[0],c[1],c[2]).length();const d=Gs.set(c[4],c[5],c[6]).length(),h=Gs.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),n.x=c[12],n.y=c[13],n.z=c[14],Ri.copy(this);const x=1/f,y=1/d,m=1/h;return Ri.elements[0]*=x,Ri.elements[1]*=x,Ri.elements[2]*=x,Ri.elements[4]*=y,Ri.elements[5]*=y,Ri.elements[6]*=y,Ri.elements[8]*=m,Ri.elements[9]*=m,Ri.elements[10]*=m,a.setFromRotationMatrix(Ri),s.x=f,s.y=d,s.z=h,this}makePerspective(n,a,s,c,f,d,h=_a){const p=this.elements,x=2*f/(a-n),y=2*f/(s-c),m=(a+n)/(a-n),S=(s+c)/(s-c);let M,R;if(h===_a)M=-(d+f)/(d-f),R=-2*d*f/(d-f);else if(h===xu)M=-d/(d-f),R=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=y,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(n,a,s,c,f,d,h=_a){const p=this.elements,x=1/(a-n),y=1/(s-c),m=1/(d-f),S=(a+n)*x,M=(s+c)*y;let R,A;if(h===_a)R=(d+f)*m,A=-2*m;else if(h===xu)R=f*m,A=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*x,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*y,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=A,p[14]=-R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<16;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Gs=new ue,Ri=new rn,Eb=new ue(0,0,0),Mb=new ue(1,1,1),nr=new ue,qc=new ue,si=new ue,fv=new rn,dv=new hl;class Ma{constructor(n=0,a=0,s=0,c=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=c}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,c=this._order){return this._x=n,this._y=a,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const c=n.elements,f=c[0],d=c[4],h=c[8],p=c[1],x=c[5],y=c[9],m=c[2],S=c[6],M=c[10];switch(a){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(S,x),this._z=0);break;case"YXZ":this._x=Math.asin(-At(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,x)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(At(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-d,x)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,x));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,x),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,x),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-y,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return fv.makeRotationFromQuaternion(n),this.setFromRotationMatrix(fv,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return dv.setFromEuler(this),this.setFromQuaternion(dv,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class zp{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let bb=0;const hv=new ue,Vs=new hl,ha=new rn,Yc=new ue,ol=new ue,Tb=new ue,Ab=new hl,pv=new ue(1,0,0),mv=new ue(0,1,0),gv=new ue(0,0,1),xv={type:"added"},wb={type:"removed"},js={type:"childadded",child:null},hh={type:"childremoved",child:null};class Qn extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const n=new ue,a=new Ma,s=new hl,c=new ue(1,1,1);function f(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new rn},normalMatrix:{value:new ft}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Vs.setFromAxisAngle(n,a),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(n,a){return Vs.setFromAxisAngle(n,a),this.quaternion.premultiply(Vs),this}rotateX(n){return this.rotateOnAxis(pv,n)}rotateY(n){return this.rotateOnAxis(mv,n)}rotateZ(n){return this.rotateOnAxis(gv,n)}translateOnAxis(n,a){return hv.copy(n).applyQuaternion(this.quaternion),this.position.add(hv.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(pv,n)}translateY(n){return this.translateOnAxis(mv,n)}translateZ(n){return this.translateOnAxis(gv,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Yc.copy(n):Yc.set(n,a,s);const c=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(ol,Yc,this.up):ha.lookAt(Yc,ol,this.up),this.quaternion.setFromRotationMatrix(ha),c&&(ha.extractRotation(c.matrixWorld),Vs.setFromRotationMatrix(ha),this.quaternion.premultiply(Vs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(xv),js.child=n,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(wb),hh.child=n,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),ha.multiply(n.parent.matrixWorld)),n.applyMatrix4(ha),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(xv),js.child=n,this.dispatchEvent(js),js.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(n,a);if(d!==void 0)return d}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,n,Tb),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,Ab,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(n)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(n.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let x=0,y=p.length;x<y;x++){const m=p[x];f(n.shapes,m)}else f(n.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,x=this.material.length;p<x;p++)h.push(f(n.materials,this.material[p]));c.material=h}else c.material=f(n.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(n).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];c.animations.push(f(n.animations,p))}}if(a){const h=d(n.geometries),p=d(n.materials),x=d(n.textures),y=d(n.images),m=d(n.shapes),S=d(n.skeletons),M=d(n.animations),R=d(n.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),x.length>0&&(s.textures=x),y.length>0&&(s.images=y),m.length>0&&(s.shapes=m),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),R.length>0&&(s.nodes=R)}return s.object=c,s;function d(h){const p=[];for(const x in h){const y=h[x];delete y.metadata,p.push(y)}return p}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const c=n.children[s];this.add(c.clone())}return this}}Qn.DEFAULT_UP=new ue(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new ue,pa=new ue,ph=new ue,ma=new ue,ks=new ue,Xs=new ue,vv=new ue,mh=new ue,gh=new ue,xh=new ue,vh=new on,_h=new on,yh=new on;class Ni{constructor(n=new ue,a=new ue,s=new ue){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,c){c.subVectors(s,a),Ci.subVectors(n,a),c.cross(Ci);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(n,a,s,c,f){Ci.subVectors(c,a),pa.subVectors(s,a),ph.subVectors(n,a);const d=Ci.dot(Ci),h=Ci.dot(pa),p=Ci.dot(ph),x=pa.dot(pa),y=pa.dot(ph),m=d*x-h*h;if(m===0)return f.set(0,0,0),null;const S=1/m,M=(x*p-h*y)*S,R=(d*y-h*p)*S;return f.set(1-M-R,R,M)}static containsPoint(n,a,s,c){return this.getBarycoord(n,a,s,c,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(n,a,s,c,f,d,h,p){return this.getBarycoord(n,a,s,c,ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,ma.x),p.addScaledVector(d,ma.y),p.addScaledVector(h,ma.z),p)}static getInterpolatedAttribute(n,a,s,c,f,d){return vh.setScalar(0),_h.setScalar(0),yh.setScalar(0),vh.fromBufferAttribute(n,a),_h.fromBufferAttribute(n,s),yh.fromBufferAttribute(n,c),d.setScalar(0),d.addScaledVector(vh,f.x),d.addScaledVector(_h,f.y),d.addScaledVector(yh,f.z),d}static isFrontFacing(n,a,s,c){return Ci.subVectors(s,a),pa.subVectors(n,a),Ci.cross(pa).dot(c)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,c){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[c]),this}setFromAttributeAndIndices(n,a,s,c){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,c),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ni.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ni.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,c,f){return Ni.getInterpolation(n,this.a,this.b,this.c,a,s,c,f)}containsPoint(n){return Ni.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ni.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,c=this.b,f=this.c;let d,h;ks.subVectors(c,s),Xs.subVectors(f,s),mh.subVectors(n,s);const p=ks.dot(mh),x=Xs.dot(mh);if(p<=0&&x<=0)return a.copy(s);gh.subVectors(n,c);const y=ks.dot(gh),m=Xs.dot(gh);if(y>=0&&m<=y)return a.copy(c);const S=p*m-y*x;if(S<=0&&p>=0&&y<=0)return d=p/(p-y),a.copy(s).addScaledVector(ks,d);xh.subVectors(n,f);const M=ks.dot(xh),R=Xs.dot(xh);if(R>=0&&M<=R)return a.copy(f);const A=M*x-p*R;if(A<=0&&x>=0&&R<=0)return h=x/(x-R),a.copy(s).addScaledVector(Xs,h);const E=y*R-M*m;if(E<=0&&m-y>=0&&M-R>=0)return vv.subVectors(f,c),h=(m-y)/(m-y+(M-R)),a.copy(c).addScaledVector(vv,h);const _=1/(E+A+S);return d=A*_,h=S*_,a.copy(s).addScaledVector(ks,d).addScaledVector(Xs,h)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function Sh(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class Lt{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const c=n;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=vi){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Nt.toWorkingColorSpace(this,a),this}setRGB(n,a,s,c=Nt.workingColorSpace){return this.r=n,this.g=a,this.b=s,Nt.toWorkingColorSpace(this,c),this}setHSL(n,a,s,c=Nt.workingColorSpace){if(n=ub(n,1),a=At(a,0,1),s=At(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,d=2*s-f;this.r=Sh(d,f,n+1/3),this.g=Sh(d,f,n),this.b=Sh(d,f,n-1/3)}return Nt.toWorkingColorSpace(this,c),this}setStyle(n,a=vi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=vi){const s=y_[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Sa(n.r),this.g=Sa(n.g),this.b=Sa(n.b),this}copyLinearToSRGB(n){return this.r=$s(n.r),this.g=$s(n.g),this.b=$s(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=vi){return Nt.fromWorkingColorSpace(In.copy(this),n),Math.round(At(In.r*255,0,255))*65536+Math.round(At(In.g*255,0,255))*256+Math.round(At(In.b*255,0,255))}getHexString(n=vi){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=Nt.workingColorSpace){Nt.fromWorkingColorSpace(In.copy(this),a);const s=In.r,c=In.g,f=In.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let p,x;const y=(h+d)/2;if(h===d)p=0,x=0;else{const m=d-h;switch(x=y<=.5?m/(d+h):m/(2-d-h),d){case s:p=(c-f)/m+(c<f?6:0);break;case c:p=(f-s)/m+2;break;case f:p=(s-c)/m+4;break}p/=6}return n.h=p,n.s=x,n.l=y,n}getRGB(n,a=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(In.copy(this),a),n.r=In.r,n.g=In.g,n.b=In.b,n}getStyle(n=vi){Nt.fromWorkingColorSpace(In.copy(this),n);const a=In.r,s=In.g,c=In.b;return n!==vi?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(n,a,s){return this.getHSL(ir),this.setHSL(ir.h+n,ir.s+a,ir.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(ir),n.getHSL(Wc);const s=ah(ir.h,Wc.h,a),c=ah(ir.s,Wc.s,a),f=ah(ir.l,Wc.l,a);return this.setHSL(s,c,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,c=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*c,this.g=f[1]*a+f[4]*s+f[7]*c,this.b=f[2]*a+f[5]*s+f[8]*c,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Lt;Lt.NAMES=y_;let Rb=0;class ml extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Qs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(s.blending=this.blending),this.side!==ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ph&&(s.blendSrc=this.blendSrc),this.blendDst!==Ih&&(s.blendDst=this.blendDst),this.blendEquation!==jr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(a){const f=c(n.textures),d=c(n.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const c=a.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class S_ extends ml{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const hn=new ue,Zc=new Ht;let Cb=0;class yi{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cb++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=rv,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[n+c]=a.array[s+c];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Zc.fromBufferAttribute(this,a),Zc.applyMatrix3(n),this.setXY(a,Zc.x,Zc.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix3(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix4(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyNormalMatrix(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.transformDirection(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=al(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Zn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=al(a,this.array)),a}setX(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=al(a,this.array)),a}setY(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=al(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=al(a,this.array)),a}setW(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,c){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array),c=Zn(c,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this}setXYZW(n,a,s,c,f){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array),c=Zn(c,this.array),f=Zn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==rv&&(n.usage=this.usage),n}}class E_ extends yi{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class M_ extends yi{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class Yr extends yi{constructor(n,a,s){super(new Float32Array(n),a,s)}}let Nb=0;const xi=new rn,Eh=new Qn,qs=new ue,oi=new pl,ll=new pl,bn=new ue;class ba extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(v_(n)?M_:E_)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ft().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(n),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return xi.makeRotationFromQuaternion(n),this.applyMatrix4(xi),this}rotateX(n){return xi.makeRotationX(n),this.applyMatrix4(xi),this}rotateY(n){return xi.makeRotationY(n),this.applyMatrix4(xi),this}rotateZ(n){return xi.makeRotationZ(n),this.applyMatrix4(xi),this}translate(n,a,s){return xi.makeTranslation(n,a,s),this.applyMatrix4(xi),this}scale(n,a,s){return xi.makeScale(n,a,s),this.applyMatrix4(xi),this}lookAt(n){return Eh.lookAt(n),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let c=0,f=n.length;c<f;c++){const d=n[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Yr(s,3))}else{const s=Math.min(n.length,a.count);for(let c=0;c<s;c++){const f=n[c];a.setXYZ(c,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,c=a.length;s<c;s++){const f=a[s];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yu);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(n){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(n),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];ll.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(oi.min,ll.min),oi.expandByPoint(bn),bn.addVectors(oi.max,ll.max),oi.expandByPoint(bn)):(oi.expandByPoint(ll.min),oi.expandByPoint(ll.max))}oi.getCenter(s);let c=0;for(let f=0,d=n.count;f<d;f++)bn.fromBufferAttribute(n,f),c=Math.max(c,s.distanceToSquared(bn));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],p=this.morphTargetsRelative;for(let x=0,y=h.count;x<y;x++)bn.fromBufferAttribute(h,x),p&&(qs.fromBufferAttribute(n,x),bn.add(qs)),c=Math.max(c,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,c=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let j=0;j<s.count;j++)h[j]=new ue,p[j]=new ue;const x=new ue,y=new ue,m=new ue,S=new Ht,M=new Ht,R=new Ht,A=new ue,E=new ue;function _(j,D,N){x.fromBufferAttribute(s,j),y.fromBufferAttribute(s,D),m.fromBufferAttribute(s,N),S.fromBufferAttribute(f,j),M.fromBufferAttribute(f,D),R.fromBufferAttribute(f,N),y.sub(x),m.sub(x),M.sub(S),R.sub(S);const F=1/(M.x*R.y-R.x*M.y);isFinite(F)&&(A.copy(y).multiplyScalar(R.y).addScaledVector(m,-M.y).multiplyScalar(F),E.copy(m).multiplyScalar(M.x).addScaledVector(y,-R.x).multiplyScalar(F),h[j].add(A),h[D].add(A),h[N].add(A),p[j].add(E),p[D].add(E),p[N].add(E))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.count}]);for(let j=0,D=L.length;j<D;++j){const N=L[j],F=N.start,le=N.count;for(let te=F,fe=F+le;te<fe;te+=3)_(n.getX(te+0),n.getX(te+1),n.getX(te+2))}const P=new ue,U=new ue,K=new ue,V=new ue;function I(j){K.fromBufferAttribute(c,j),V.copy(K);const D=h[j];P.copy(D),P.sub(K.multiplyScalar(K.dot(D))).normalize(),U.crossVectors(V,D);const F=U.dot(p[j])<0?-1:1;d.setXYZW(j,P.x,P.y,P.z,F)}for(let j=0,D=L.length;j<D;++j){const N=L[j],F=N.start,le=N.count;for(let te=F,fe=F+le;te<fe;te+=3)I(n.getX(te+0)),I(n.getX(te+1)),I(n.getX(te+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const c=new ue,f=new ue,d=new ue,h=new ue,p=new ue,x=new ue,y=new ue,m=new ue;if(n)for(let S=0,M=n.count;S<M;S+=3){const R=n.getX(S+0),A=n.getX(S+1),E=n.getX(S+2);c.fromBufferAttribute(a,R),f.fromBufferAttribute(a,A),d.fromBufferAttribute(a,E),y.subVectors(d,f),m.subVectors(c,f),y.cross(m),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,E),h.add(y),p.add(y),x.add(y),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(E,x.x,x.y,x.z)}else for(let S=0,M=a.count;S<M;S+=3)c.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),d.fromBufferAttribute(a,S+2),y.subVectors(d,f),m.subVectors(c,f),y.cross(m),s.setXYZ(S+0,y.x,y.y,y.z),s.setXYZ(S+1,y.x,y.y,y.z),s.setXYZ(S+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)bn.fromBufferAttribute(n,a),bn.normalize(),n.setXYZ(a,bn.x,bn.y,bn.z)}toNonIndexed(){function n(h,p){const x=h.array,y=h.itemSize,m=h.normalized,S=new x.constructor(p.length*y);let M=0,R=0;for(let A=0,E=p.length;A<E;A++){h.isInterleavedBufferAttribute?M=p[A]*h.data.stride+h.offset:M=p[A]*y;for(let _=0;_<y;_++)S[R++]=x[M++]}return new yi(S,y,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new ba,s=this.index.array,c=this.attributes;for(const h in c){const p=c[h],x=n(p,s);a.setAttribute(h,x)}const f=this.morphAttributes;for(const h in f){const p=[],x=f[h];for(let y=0,m=x.length;y<m;y++){const S=x[y],M=n(S,s);p.push(M)}a.morphAttributes[h]=p}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const x=d[h];a.addGroup(x.start,x.count,x.materialIndex)}return a}toJSON(){const n={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const x in p)p[x]!==void 0&&(n[x]=p[x]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const p in s){const x=s[p];n.data.attributes[p]=x.toJSON(n.data)}const c={};let f=!1;for(const p in this.morphAttributes){const x=this.morphAttributes[p],y=[];for(let m=0,S=x.length;m<S;m++){const M=x[m];y.push(M.toJSON(n.data))}y.length>0&&(c[p]=y,f=!0)}f&&(n.data.morphAttributes=c,n.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(n.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(n.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone(a));const c=n.attributes;for(const x in c){const y=c[x];this.setAttribute(x,y.clone(a))}const f=n.morphAttributes;for(const x in f){const y=[],m=f[x];for(let S=0,M=m.length;S<M;S++)y.push(m[S].clone(a));this.morphAttributes[x]=y}this.morphTargetsRelative=n.morphTargetsRelative;const d=n.groups;for(let x=0,y=d.length;x<y;x++){const m=d[x];this.addGroup(m.start,m.count,m.materialIndex)}const h=n.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=n.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _v=new rn,Ir=new Op,Kc=new yu,yv=new ue,Qc=new ue,Jc=new ue,$c=new ue,Mh=new ue,eu=new ue,Sv=new ue,tu=new ue;class ya extends Qn{constructor(n=new ba,a=new S_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(n,a){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(c,n);const h=this.morphTargetInfluences;if(f&&h){eu.set(0,0,0);for(let p=0,x=f.length;p<x;p++){const y=h[p],m=f[p];y!==0&&(Mh.fromBufferAttribute(m,n),d?eu.addScaledVector(Mh,y):eu.addScaledVector(Mh.sub(a),y))}a.add(eu)}return a}raycast(n,a){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Kc.copy(s.boundingSphere),Kc.applyMatrix4(f),Ir.copy(n.ray).recast(n.near),!(Kc.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Kc,yv)===null||Ir.origin.distanceToSquared(yv)>(n.far-n.near)**2))&&(_v.copy(f).invert(),Ir.copy(n.ray).applyMatrix4(_v),!(s.boundingBox!==null&&Ir.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,Ir)))}_computeIntersections(n,a,s){let c;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,x=f.attributes.uv,y=f.attributes.uv1,m=f.attributes.normal,S=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,A=S.length;R<A;R++){const E=S[R],_=d[E.materialIndex],L=Math.max(E.start,M.start),P=Math.min(h.count,Math.min(E.start+E.count,M.start+M.count));for(let U=L,K=P;U<K;U+=3){const V=h.getX(U),I=h.getX(U+1),j=h.getX(U+2);c=nu(this,_,n,s,x,y,m,V,I,j),c&&(c.faceIndex=Math.floor(U/3),c.face.materialIndex=E.materialIndex,a.push(c))}}else{const R=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let E=R,_=A;E<_;E+=3){const L=h.getX(E),P=h.getX(E+1),U=h.getX(E+2);c=nu(this,d,n,s,x,y,m,L,P,U),c&&(c.faceIndex=Math.floor(E/3),a.push(c))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,A=S.length;R<A;R++){const E=S[R],_=d[E.materialIndex],L=Math.max(E.start,M.start),P=Math.min(p.count,Math.min(E.start+E.count,M.start+M.count));for(let U=L,K=P;U<K;U+=3){const V=U,I=U+1,j=U+2;c=nu(this,_,n,s,x,y,m,V,I,j),c&&(c.faceIndex=Math.floor(U/3),c.face.materialIndex=E.materialIndex,a.push(c))}}else{const R=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let E=R,_=A;E<_;E+=3){const L=E,P=E+1,U=E+2;c=nu(this,d,n,s,x,y,m,L,P,U),c&&(c.faceIndex=Math.floor(E/3),a.push(c))}}}}function Db(o,n,a,s,c,f,d,h){let p;if(n.side===Kn?p=s.intersectTriangle(d,f,c,!0,h):p=s.intersectTriangle(c,f,d,n.side===ur,h),p===null)return null;tu.copy(h),tu.applyMatrix4(o.matrixWorld);const x=a.ray.origin.distanceTo(tu);return x<a.near||x>a.far?null:{distance:x,point:tu.clone(),object:o}}function nu(o,n,a,s,c,f,d,h,p,x){o.getVertexPosition(h,Qc),o.getVertexPosition(p,Jc),o.getVertexPosition(x,$c);const y=Db(o,n,a,s,Qc,Jc,$c,Sv);if(y){const m=new ue;Ni.getBarycoord(Sv,Qc,Jc,$c,m),c&&(y.uv=Ni.getInterpolatedAttribute(c,h,p,x,m,new Ht)),f&&(y.uv1=Ni.getInterpolatedAttribute(f,h,p,x,m,new Ht)),d&&(y.normal=Ni.getInterpolatedAttribute(d,h,p,x,m,new ue),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const S={a:h,b:p,c:x,normal:new ue,materialIndex:0};Ni.getNormal(Qc,Jc,$c,S.normal),y.face=S,y.barycoord=m}return y}class gl extends ba{constructor(n=1,a=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const p=[],x=[],y=[],m=[];let S=0,M=0;R("z","y","x",-1,-1,s,a,n,d,f,0),R("z","y","x",1,-1,s,a,-n,d,f,1),R("x","z","y",1,1,n,s,a,c,d,2),R("x","z","y",1,-1,n,s,-a,c,d,3),R("x","y","z",1,-1,n,a,s,c,f,4),R("x","y","z",-1,-1,n,a,-s,c,f,5),this.setIndex(p),this.setAttribute("position",new Yr(x,3)),this.setAttribute("normal",new Yr(y,3)),this.setAttribute("uv",new Yr(m,2));function R(A,E,_,L,P,U,K,V,I,j,D){const N=U/I,F=K/j,le=U/2,te=K/2,fe=V/2,de=I+1,k=j+1;let ae=0,Z=0;const _e=new ue;for(let Se=0;Se<k;Se++){const be=Se*F-te;for(let je=0;je<de;je++){const ze=je*N-le;_e[A]=ze*L,_e[E]=be*P,_e[_]=fe,x.push(_e.x,_e.y,_e.z),_e[A]=0,_e[E]=0,_e[_]=V>0?1:-1,y.push(_e.x,_e.y,_e.z),m.push(je/I),m.push(1-Se/j),ae+=1}}for(let Se=0;Se<j;Se++)for(let be=0;be<I;be++){const je=S+be+de*Se,ze=S+be+de*(Se+1),w=S+(be+1)+de*(Se+1),G=S+(be+1)+de*Se;p.push(je,ze,G),p.push(ze,w,G),Z+=6}h.addGroup(M,Z,D),M+=Z,S+=ae}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new gl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function so(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const c=o[a][s];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=c.clone():Array.isArray(c)?n[a][s]=c.slice():n[a][s]=c}}return n}function Vn(o){const n={};for(let a=0;a<o.length;a++){const s=so(o[a]);for(const c in s)n[c]=s[c]}return n}function Ub(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function b_(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:Nt.workingColorSpace}const Lb={clone:so,merge:Vn};var Ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends ml{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ob,this.fragmentShader=zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=so(n.uniforms),this.uniformsGroups=Ub(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?a.uniforms[c]={type:"t",value:d.toJSON(n).uuid}:d&&d.isColor?a.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[c]={type:"m4",value:d.toArray()}:a.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class T_ extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=_a}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ue,Ev=new Ht,Mv=new Ht;class _i extends T_{constructor(n=50,a=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=Sp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ar.x,ar.y).multiplyScalar(-n/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ar.x,ar.y).multiplyScalar(-n/ar.z)}getViewSize(n,a){return this.getViewBounds(n,Ev,Mv),a.subVectors(Mv,Ev)}setViewOffset(n,a,s,c,f,d){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(ih*.5*this.fov)/this.zoom,s=2*a,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,x=d.fullHeight;f+=d.offsetX*c/p,a-=d.offsetY*s/x,c*=d.width/p,s*=d.height/x}const h=this.filmOffset;h!==0&&(f+=n*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,a,a-s,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Ys=-90,Ws=1;class Pb extends Qn{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new _i(Ys,Ws,n,a);c.layers=this.layers,this.add(c);const f=new _i(Ys,Ws,n,a);f.layers=this.layers,this.add(f);const d=new _i(Ys,Ws,n,a);d.layers=this.layers,this.add(d);const h=new _i(Ys,Ws,n,a);h.layers=this.layers,this.add(h);const p=new _i(Ys,Ws,n,a);p.layers=this.layers,this.add(p);const x=new _i(Ys,Ws,n,a);x.layers=this.layers,this.add(x)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,c,f,d,h,p]=a;for(const x of a)this.remove(x);if(n===_a)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(n===xu)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const x of a)this.add(x),x.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,x,y]=this.children,m=n.getRenderTarget(),S=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),R=n.xr.enabled;n.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,c),n.render(a,f),n.setRenderTarget(s,1,c),n.render(a,d),n.setRenderTarget(s,2,c),n.render(a,h),n.setRenderTarget(s,3,c),n.render(a,p),n.setRenderTarget(s,4,c),n.render(a,x),s.texture.generateMipmaps=A,n.setRenderTarget(s,5,c),n.render(a,y),n.setRenderTarget(m,S,M),n.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class A_ extends jn{constructor(n,a,s,c,f,d,h,p,x,y){n=n!==void 0?n:[],a=a!==void 0?a:to,super(n,a,s,c,f,d,h,p,x,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class Ib extends Zr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},c=[s,s,s,s,s,s];this.texture=new A_(c,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:qi}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new gl(5,5,5),f=new fr({name:"CubemapFromEquirect",uniforms:so(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:lr});f.uniforms.tEquirect.value=a;const d=new ya(c,f),h=a.minFilter;return a.minFilter===qr&&(a.minFilter=qi),new Pb(1,10,this).update(n,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(n,a,s,c){const f=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(a,s,c);n.setRenderTarget(f)}}class iu extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bb={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let c=null,f=null,d=null;const h=this._targetRay,p=this._grip,x=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(x&&n.hand){d=!0;for(const A of n.hand.values()){const E=a.getJointPose(A,s),_=this._getHandJoint(x,A);E!==null&&(_.matrix.fromArray(E.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=E.radius),_.visible=E!==null}const y=x.joints["index-finger-tip"],m=x.joints["thumb-tip"],S=y.position.distanceTo(m.position),M=.02,R=.005;x.inputState.pinching&&S>M+R?(x.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!x.inputState.pinching&&S<=M-R&&(x.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else p!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(c=a.getPose(n.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Bb)))}return h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),x!==null&&(x.visible=d!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new iu;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class Pp{constructor(n,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(n),this.density=a}clone(){return new Pp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fb extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const Th=new ue,Hb=new ue,Gb=new ft;class rr{constructor(n=new ue(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,c){return this.normal.set(n,a,s),this.constant=c,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const c=Th.subVectors(s,a).cross(Hb.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(c,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Th),c=this.normal.dot(s);if(c===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||Gb.getNormalMatrix(n),c=this.coplanarPoint(Th).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new yu,au=new ue;class w_{constructor(n=new rr,a=new rr,s=new rr,c=new rr,f=new rr,d=new rr){this.planes=[n,a,s,c,f,d]}set(n,a,s,c,f,d){const h=this.planes;return h[0].copy(n),h[1].copy(a),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=_a){const s=this.planes,c=n.elements,f=c[0],d=c[1],h=c[2],p=c[3],x=c[4],y=c[5],m=c[6],S=c[7],M=c[8],R=c[9],A=c[10],E=c[11],_=c[12],L=c[13],P=c[14],U=c[15];if(s[0].setComponents(p-f,S-x,E-M,U-_).normalize(),s[1].setComponents(p+f,S+x,E+M,U+_).normalize(),s[2].setComponents(p+d,S+y,E+R,U+L).normalize(),s[3].setComponents(p-d,S-y,E-R,U-L).normalize(),s[4].setComponents(p-h,S-m,E-A,U-P).normalize(),a===_a)s[5].setComponents(p+h,S+m,E+A,U+P).normalize();else if(a===xu)s[5].setComponents(h,m,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Br.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(n){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(n.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(n){const a=this.planes,s=n.center,c=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const c=a[s];if(au.x=c.normal.x>0?n.max.x:n.min.x,au.y=c.normal.y>0?n.max.y:n.min.y,au.z=c.normal.z>0?n.max.z:n.min.z,c.distanceToPoint(au)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R_ extends ml{constructor(n){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const bv=new rn,Ep=new Op,ru=new yu,su=new ue;class Vb extends Qn{constructor(n=new ba,a=new R_){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}raycast(n,a){const s=this.geometry,c=this.matrixWorld,f=n.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ru.copy(s.boundingSphere),ru.applyMatrix4(c),ru.radius+=f,n.ray.intersectsSphere(ru)===!1)return;bv.copy(c).invert(),Ep.copy(n.ray).applyMatrix4(bv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,x=s.index,m=s.attributes.position;if(x!==null){const S=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let R=S,A=M;R<A;R++){const E=x.getX(R);su.fromBufferAttribute(m,E),Tv(su,E,p,c,n,a,this)}}else{const S=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let R=S,A=M;R<A;R++)su.fromBufferAttribute(m,R),Tv(su,R,p,c,n,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Tv(o,n,a,s,c,f,d){const h=Ep.distanceSqToPoint(o);if(h<a){const p=new ue;Ep.closestPointToPoint(o,p),p.applyMatrix4(s);const x=c.ray.origin.distanceTo(p);if(x<c.near||x>c.far)return;f.push({distance:x,distanceToRay:Math.sqrt(h),point:p,index:n,face:null,faceIndex:null,barycoord:null,object:d})}}class jb extends jn{constructor(n,a,s,c,f,d,h,p,x){super(n,a,s,c,f,d,h,p,x),this.isCanvasTexture=!0,this.needsUpdate=!0}}class C_ extends jn{constructor(n,a,s,c,f,d,h,p,x,y=Js){if(y!==Js&&y!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&y===Js&&(s=Wr),s===void 0&&y===ao&&(s=io),super(null,c,f,d,h,p,y,s,x),this.isDepthTexture=!0,this.image={width:n,height:a},this.magFilter=h!==void 0?h:Ui,this.minFilter=p!==void 0?p:Ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Lp(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Su extends ba{constructor(n=1,a=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:c};const f=n/2,d=a/2,h=Math.floor(s),p=Math.floor(c),x=h+1,y=p+1,m=n/h,S=a/p,M=[],R=[],A=[],E=[];for(let _=0;_<y;_++){const L=_*S-d;for(let P=0;P<x;P++){const U=P*m-f;R.push(U,-L,0),A.push(0,0,1),E.push(P/h),E.push(1-_/p)}}for(let _=0;_<p;_++)for(let L=0;L<h;L++){const P=L+x*_,U=L+x*(_+1),K=L+1+x*(_+1),V=L+1+x*_;M.push(P,U,V),M.push(U,K,V)}this.setIndex(M),this.setAttribute("position",new Yr(R,3)),this.setAttribute("normal",new Yr(A,3)),this.setAttribute("uv",new Yr(E,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Su(n.width,n.height,n.widthSegments,n.heightSegments)}}class kb extends ml{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class Xb extends ml{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class qb extends T_{constructor(n=-1,a=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-n,d=s+n,h=c+a,p=c-a;if(this.view!==null&&this.view.enabled){const x=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=x*this.view.offsetX,d=f+x*this.view.width,h-=y*this.view.offsetY,p=h-y*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class Yb extends _i{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n,this.index=0}}class Wb{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Av(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=Av();n=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=n}return n}}function Av(){return performance.now()}const wv=new rn;class Zb{constructor(n,a,s=0,c=1/0){this.ray=new Op(n,a),this.near=s,this.far=c,this.camera=null,this.layers=new zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(n,a){this.ray.set(n,a)}setFromCamera(n,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(a.near+a.far)/(a.near-a.far)).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):console.error("THREE.Raycaster: Unsupported camera type: "+a.type)}setFromXRController(n){return wv.identity().extractRotation(n.matrixWorld),this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wv),this}intersectObject(n,a=!0,s=[]){return Mp(n,this,s,a),s.sort(Rv),s}intersectObjects(n,a=!0,s=[]){for(let c=0,f=n.length;c<f;c++)Mp(n[c],this,s,a);return s.sort(Rv),s}}function Rv(o,n){return o.distance-n.distance}function Mp(o,n,a,s){let c=!0;if(o.layers.test(n.layers)&&o.raycast(n,a)===!1&&(c=!1),c===!0&&s===!0){const f=o.children;for(let d=0,h=f.length;d<h;d++)Mp(f[d],n,a,!0)}}function Cv(o,n,a,s){const c=Kb(s);switch(a){case u_:return o*n;case d_:return o*n;case h_:return o*n*2;case p_:return o*n/c.components*c.byteLength;case Np:return o*n/c.components*c.byteLength;case m_:return o*n*2/c.components*c.byteLength;case Dp:return o*n*2/c.components*c.byteLength;case f_:return o*n*3/c.components*c.byteLength;case Di:return o*n*4/c.components*c.byteLength;case Up:return o*n*4/c.components*c.byteLength;case uu:case fu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case du:case hu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Kh:case Jh:return Math.max(o,16)*Math.max(n,8)/4;case Zh:case Qh:return Math.max(o,8)*Math.max(n,8)/2;case $h:case ep:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case tp:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case np:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case ip:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case ap:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case rp:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case sp:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case op:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case lp:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case cp:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case up:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case fp:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case dp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case hp:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case pp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case mp:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case pu:case gp:case xp:return Math.ceil(o/4)*Math.ceil(n/4)*16;case g_:case vp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case _p:case yp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function Kb(o){switch(o){case Ea:case o_:return{byteLength:1,components:1};case ul:case l_:case fl:return{byteLength:2,components:1};case Rp:case Cp:return{byteLength:2,components:4};case Wr:case wp:case va:return{byteLength:4,components:1};case c_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N_(){let o=null,n=!1,a=null,s=null;function c(f,d){a(f,d),s=o.requestAnimationFrame(c)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(c),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function Qb(o){const n=new WeakMap;function a(h,p){const x=h.array,y=h.usage,m=x.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,x,y),h.onUploadCallback();let M;if(x instanceof Float32Array)M=o.FLOAT;else if(x instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)M=o.SHORT;else if(x instanceof Uint32Array)M=o.UNSIGNED_INT;else if(x instanceof Int32Array)M=o.INT;else if(x instanceof Int8Array)M=o.BYTE;else if(x instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:S,type:M,bytesPerElement:x.BYTES_PER_ELEMENT,version:h.version,size:m}}function s(h,p,x){const y=p.array,m=p.updateRanges;if(o.bindBuffer(x,h),m.length===0)o.bufferSubData(x,0,y);else{m.sort((M,R)=>M.start-R.start);let S=0;for(let M=1;M<m.length;M++){const R=m[S],A=m[M];A.start<=R.start+R.count+1?R.count=Math.max(R.count,A.start+A.count-R.start):(++S,m[S]=A)}m.length=S+1;for(let M=0,R=m.length;M<R;M++){const A=m[M];o.bufferSubData(x,A.start*y.BYTES_PER_ELEMENT,y,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(o.deleteBuffer(p.buffer),n.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const y=n.get(h);(!y||y.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const x=n.get(h);if(x===void 0)n.set(h,a(h,p));else if(x.version<h.version){if(x.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(x.buffer,h,p),x.version=h.version}}return{get:c,remove:f,update:d}}var Jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$b=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ST=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RT="gl_FragColor = linearToOutputTexel( gl_FragColor );",CT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$T=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_A=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Jb,alphahash_pars_fragment:$b,alphamap_fragment:eT,alphamap_pars_fragment:tT,alphatest_fragment:nT,alphatest_pars_fragment:iT,aomap_fragment:aT,aomap_pars_fragment:rT,batching_pars_vertex:sT,batching_vertex:oT,begin_vertex:lT,beginnormal_vertex:cT,bsdfs:uT,iridescence_fragment:fT,bumpmap_pars_fragment:dT,clipping_planes_fragment:hT,clipping_planes_pars_fragment:pT,clipping_planes_pars_vertex:mT,clipping_planes_vertex:gT,color_fragment:xT,color_pars_fragment:vT,color_pars_vertex:_T,color_vertex:yT,common:ST,cube_uv_reflection_fragment:ET,defaultnormal_vertex:MT,displacementmap_pars_vertex:bT,displacementmap_vertex:TT,emissivemap_fragment:AT,emissivemap_pars_fragment:wT,colorspace_fragment:RT,colorspace_pars_fragment:CT,envmap_fragment:NT,envmap_common_pars_fragment:DT,envmap_pars_fragment:UT,envmap_pars_vertex:LT,envmap_physical_pars_fragment:kT,envmap_vertex:OT,fog_vertex:zT,fog_pars_vertex:PT,fog_fragment:IT,fog_pars_fragment:BT,gradientmap_pars_fragment:FT,lightmap_pars_fragment:HT,lights_lambert_fragment:GT,lights_lambert_pars_fragment:VT,lights_pars_begin:jT,lights_toon_fragment:XT,lights_toon_pars_fragment:qT,lights_phong_fragment:YT,lights_phong_pars_fragment:WT,lights_physical_fragment:ZT,lights_physical_pars_fragment:KT,lights_fragment_begin:QT,lights_fragment_maps:JT,lights_fragment_end:$T,logdepthbuf_fragment:e1,logdepthbuf_pars_fragment:t1,logdepthbuf_pars_vertex:n1,logdepthbuf_vertex:i1,map_fragment:a1,map_pars_fragment:r1,map_particle_fragment:s1,map_particle_pars_fragment:o1,metalnessmap_fragment:l1,metalnessmap_pars_fragment:c1,morphinstance_vertex:u1,morphcolor_vertex:f1,morphnormal_vertex:d1,morphtarget_pars_vertex:h1,morphtarget_vertex:p1,normal_fragment_begin:m1,normal_fragment_maps:g1,normal_pars_fragment:x1,normal_pars_vertex:v1,normal_vertex:_1,normalmap_pars_fragment:y1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:M1,iridescence_pars_fragment:b1,opaque_fragment:T1,packing:A1,premultiplied_alpha_fragment:w1,project_vertex:R1,dithering_fragment:C1,dithering_pars_fragment:N1,roughnessmap_fragment:D1,roughnessmap_pars_fragment:U1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:O1,shadowmap_vertex:z1,shadowmask_pars_fragment:P1,skinbase_vertex:I1,skinning_pars_vertex:B1,skinning_vertex:F1,skinnormal_vertex:H1,specularmap_fragment:G1,specularmap_pars_fragment:V1,tonemapping_fragment:j1,tonemapping_pars_fragment:k1,transmission_fragment:X1,transmission_pars_fragment:q1,uv_pars_fragment:Y1,uv_pars_vertex:W1,uv_vertex:Z1,worldpos_vertex:K1,background_vert:Q1,background_frag:J1,backgroundCube_vert:$1,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:aA,distanceRGBA_vert:rA,distanceRGBA_frag:sA,equirect_vert:oA,equirect_frag:lA,linedashed_vert:cA,linedashed_frag:uA,meshbasic_vert:fA,meshbasic_frag:dA,meshlambert_vert:hA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:xA,meshnormal_frag:vA,meshphong_vert:_A,meshphong_frag:yA,meshphysical_vert:SA,meshphysical_frag:EA,meshtoon_vert:MA,meshtoon_frag:bA,points_vert:TA,points_frag:AA,shadow_vert:wA,shadow_frag:RA,sprite_vert:CA,sprite_frag:NA},Pe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Xi={basic:{uniforms:Vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Vn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Vn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Vn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Vn([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Vn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Vn([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Vn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Vn([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Vn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Vn([Pe.lights,Pe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Xi.physical={uniforms:Vn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ou={r:0,b:0,g:0},Fr=new Ma,DA=new rn;function UA(o,n,a,s,c,f,d){const h=new Lt(0);let p=f===!0?0:1,x,y,m=null,S=0,M=null;function R(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?a:n).get(U)),U}function A(P){let U=!1;const K=R(P);K===null?_(h,p):K&&K.isColor&&(_(K,1),U=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(P,U){const K=R(U);K&&(K.isCubeTexture||K.mapping===_u)?(y===void 0&&(y=new ya(new gl(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:so(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(V,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(y)),Fr.copy(U.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,K.isCubeTexture&&K.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),y.material.uniforms.envMap.value=K,y.material.uniforms.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(DA.makeRotationFromEuler(Fr)),y.material.toneMapped=Nt.getTransfer(K.colorSpace)!==Ft,(m!==K||S!==K.version||M!==o.toneMapping)&&(y.material.needsUpdate=!0,m=K,S=K.version,M=o.toneMapping),y.layers.enableAll(),P.unshift(y,y.geometry,y.material,0,0,null)):K&&K.isTexture&&(x===void 0&&(x=new ya(new Su(2,2),new fr({name:"BackgroundMaterial",uniforms:so(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(x)),x.material.uniforms.t2D.value=K,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.toneMapped=Nt.getTransfer(K.colorSpace)!==Ft,K.matrixAutoUpdate===!0&&K.updateMatrix(),x.material.uniforms.uvTransform.value.copy(K.matrix),(m!==K||S!==K.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,m=K,S=K.version,M=o.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null))}function _(P,U){P.getRGB(ou,b_(o)),s.buffers.color.setClear(ou.r,ou.g,ou.b,U,d)}function L(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,U=1){h.set(P),p=U,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,_(h,p)},render:A,addToRenderList:E,dispose:L}}function LA(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=S(null);let f=c,d=!1;function h(N,F,le,te,fe){let de=!1;const k=m(te,le,F);f!==k&&(f=k,x(f.object)),de=M(N,te,le,fe),de&&R(N,te,le,fe),fe!==null&&n.update(fe,o.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,U(N,F,le,te),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(fe).buffer))}function p(){return o.createVertexArray()}function x(N){return o.bindVertexArray(N)}function y(N){return o.deleteVertexArray(N)}function m(N,F,le){const te=le.wireframe===!0;let fe=s[N.id];fe===void 0&&(fe={},s[N.id]=fe);let de=fe[F.id];de===void 0&&(de={},fe[F.id]=de);let k=de[te];return k===void 0&&(k=S(p()),de[te]=k),k}function S(N){const F=[],le=[],te=[];for(let fe=0;fe<a;fe++)F[fe]=0,le[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:le,attributeDivisors:te,object:N,attributes:{},index:null}}function M(N,F,le,te){const fe=f.attributes,de=F.attributes;let k=0;const ae=le.getAttributes();for(const Z in ae)if(ae[Z].location>=0){const Se=fe[Z];let be=de[Z];if(be===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(be=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(be=N.instanceColor)),Se===void 0||Se.attribute!==be||be&&Se.data!==be.data)return!0;k++}return f.attributesNum!==k||f.index!==te}function R(N,F,le,te){const fe={},de=F.attributes;let k=0;const ae=le.getAttributes();for(const Z in ae)if(ae[Z].location>=0){let Se=de[Z];Se===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor));const be={};be.attribute=Se,Se&&Se.data&&(be.data=Se.data),fe[Z]=be,k++}f.attributes=fe,f.attributesNum=k,f.index=te}function A(){const N=f.newAttributes;for(let F=0,le=N.length;F<le;F++)N[F]=0}function E(N){_(N,0)}function _(N,F){const le=f.newAttributes,te=f.enabledAttributes,fe=f.attributeDivisors;le[N]=1,te[N]===0&&(o.enableVertexAttribArray(N),te[N]=1),fe[N]!==F&&(o.vertexAttribDivisor(N,F),fe[N]=F)}function L(){const N=f.newAttributes,F=f.enabledAttributes;for(let le=0,te=F.length;le<te;le++)F[le]!==N[le]&&(o.disableVertexAttribArray(le),F[le]=0)}function P(N,F,le,te,fe,de,k){k===!0?o.vertexAttribIPointer(N,F,le,fe,de):o.vertexAttribPointer(N,F,le,te,fe,de)}function U(N,F,le,te){A();const fe=te.attributes,de=le.getAttributes(),k=F.defaultAttributeValues;for(const ae in de){const Z=de[ae];if(Z.location>=0){let _e=fe[ae];if(_e===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),_e!==void 0){const Se=_e.normalized,be=_e.itemSize,je=n.get(_e);if(je===void 0)continue;const ze=je.buffer,w=je.type,G=je.bytesPerElement,oe=w===o.INT||w===o.UNSIGNED_INT||_e.gpuType===wp;if(_e.isInterleavedBufferAttribute){const se=_e.data,Te=se.stride,Ne=_e.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<Z.locationSize;ge++)_(Z.location+ge,se.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<Z.locationSize;ge++)E(Z.location+ge);o.bindBuffer(o.ARRAY_BUFFER,ze);for(let ge=0;ge<Z.locationSize;ge++)P(Z.location+ge,be/Z.locationSize,w,Se,Te*G,(Ne+be/Z.locationSize*ge)*G,oe)}else{if(_e.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)_(Z.location+se,_e.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let se=0;se<Z.locationSize;se++)E(Z.location+se);o.bindBuffer(o.ARRAY_BUFFER,ze);for(let se=0;se<Z.locationSize;se++)P(Z.location+se,be/Z.locationSize,w,Se,be*G,be/Z.locationSize*se*G,oe)}}else if(k!==void 0){const Se=k[ae];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(Z.location,Se);break;case 3:o.vertexAttrib3fv(Z.location,Se);break;case 4:o.vertexAttrib4fv(Z.location,Se);break;default:o.vertexAttrib1fv(Z.location,Se)}}}}L()}function K(){j();for(const N in s){const F=s[N];for(const le in F){const te=F[le];for(const fe in te)y(te[fe].object),delete te[fe];delete F[le]}delete s[N]}}function V(N){if(s[N.id]===void 0)return;const F=s[N.id];for(const le in F){const te=F[le];for(const fe in te)y(te[fe].object),delete te[fe];delete F[le]}delete s[N.id]}function I(N){for(const F in s){const le=s[F];if(le[N.id]===void 0)continue;const te=le[N.id];for(const fe in te)y(te[fe].object),delete te[fe];delete le[N.id]}}function j(){D(),d=!0,f!==c&&(f=c,x(f.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:j,resetDefaultState:D,dispose:K,releaseStatesOfGeometry:V,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:E,disableUnusedAttributes:L}}function OA(o,n,a){let s;function c(x){s=x}function f(x,y){o.drawArrays(s,x,y),a.update(y,s,1)}function d(x,y,m){m!==0&&(o.drawArraysInstanced(s,x,y,m),a.update(y,s,m))}function h(x,y,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,x,0,y,0,m);let M=0;for(let R=0;R<m;R++)M+=y[R];a.update(M,s,1)}function p(x,y,m,S){if(m===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<x.length;R++)d(x[R],y[R],S[R]);else{M.multiDrawArraysInstancedWEBGL(s,x,0,y,0,S,0,m);let R=0;for(let A=0;A<m;A++)R+=y[A]*S[A];a.update(R,s,1)}}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function zA(o,n,a,s){let c;function f(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");c=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(I){return!(I!==Di&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const j=I===fl&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==Ea&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==va&&!j)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let x=a.precision!==void 0?a.precision:"highp";const y=p(x);y!==x&&(console.warn("THREE.WebGLRenderer:",x,"not supported, using",y,"instead."),x=y);const m=a.logarithmicDepthBuffer===!0,S=a.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),E=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),K=R>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:x,logarithmicDepthBuffer:m,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:R,maxTextureSize:A,maxCubemapSize:E,maxAttributes:_,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:K,maxSamples:V}}function PA(o){const n=this;let a=null,s=0,c=!1,f=!1;const d=new rr,h=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,S){const M=m.length!==0||S||s!==0||c;return c=S,s=m.length,M},this.beginShadows=function(){f=!0,y(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,S){a=y(m,S,0)},this.setState=function(m,S,M){const R=m.clippingPlanes,A=m.clipIntersection,E=m.clipShadows,_=o.get(m);if(!c||R===null||R.length===0||f&&!E)f?y(null):x();else{const L=f?0:s,P=L*4;let U=_.clippingState||null;p.value=U,U=y(R,S,P,M);for(let K=0;K!==P;++K)U[K]=a[K];_.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function x(){p.value!==a&&(p.value=a,p.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function y(m,S,M,R){const A=m!==null?m.length:0;let E=null;if(A!==0){if(E=p.value,R!==!0||E===null){const _=M+A*4,L=S.matrixWorldInverse;h.getNormalMatrix(L),(E===null||E.length<_)&&(E=new Float32Array(_));for(let P=0,U=M;P!==A;++P,U+=4)d.copy(m[P]).applyMatrix4(L,h),d.normal.toArray(E,U),E[U+3]=d.constant}p.value=E,p.needsUpdate=!0}return n.numPlanes=A,n.numIntersection=0,E}}function IA(o){let n=new WeakMap;function a(d,h){return h===Xh?d.mapping=to:h===qh&&(d.mapping=no),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Xh||h===qh)if(n.has(d)){const p=n.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new Ib(p.height);return x.fromEquirectangularTexture(o,d),n.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=n.get(h);p!==void 0&&(n.delete(h),p.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Ks=4,Nv=[.125,.215,.35,.446,.526,.582],kr=20,Ah=new qb,Dv=new Lt;let wh=null,Rh=0,Ch=0,Nh=!1;const Vr=(1+Math.sqrt(5))/2,Zs=1/Vr,Uv=[new ue(-Vr,Zs,0),new ue(Vr,Zs,0),new ue(-Zs,0,Vr),new ue(Zs,0,Vr),new ue(0,Vr,-Zs),new ue(0,Vr,Zs),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)],BA=new ue;class Lv{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,c=100,f={}){const{size:d=256,position:h=BA}=f;wh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(n,s,c,p,h),a>0&&this._blur(p,0,0,a),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(wh,Rh,Ch),this._renderer.xr.enabled=Nh,n.scissorTest=!1,lu(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===to||n.mapping===no?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),wh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:fl,format:Di,colorSpace:ro,depthBuffer:!1},c=Ov(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ov(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FA(f)),this._blurMaterial=HA(f,n,a)}return c}_compileMaterial(n){const a=new ya(this._lodPlanes[0],n);this._renderer.compile(a,Ah)}_sceneToCubeUV(n,a,s,c,f){const p=new _i(90,1,a,s),x=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],m=this._renderer,S=m.autoClear,M=m.toneMapping;m.getClearColor(Dv),m.toneMapping=cr,m.autoClear=!1;const R=new S_({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),A=new ya(new gl,R);let E=!1;const _=n.background;_?_.isColor&&(R.color.copy(_),n.background=null,E=!0):(R.color.copy(Dv),E=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,x[L],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+y[L],f.y,f.z)):P===1?(p.up.set(0,0,x[L]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+y[L],f.z)):(p.up.set(0,x[L],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+y[L]));const U=this._cubeSize;lu(c,P*U,L>2?U:0,U,U),m.setRenderTarget(c),E&&m.render(A,p),m.render(n,p)}A.geometry.dispose(),A.material.dispose(),m.toneMapping=M,m.autoClear=S,n.background=_}_textureToCubeUV(n,a){const s=this._renderer,c=n.mapping===to||n.mapping===no;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zv());const f=c?this._cubemapMaterial:this._equirectMaterial,d=new ya(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=n;const p=this._cubeSize;lu(a,0,0,3*p,2*p),s.setRenderTarget(a),s.render(d,Ah)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=Uv[(c-f-1)%Uv.length];this._blur(n,f-1,f,d,h)}a.autoClear=s}_blur(n,a,s,c,f){const d=this._pingPongRenderTarget;this._halfBlur(n,d,a,s,c,"latitudinal",f),this._halfBlur(d,n,s,s,c,"longitudinal",f)}_halfBlur(n,a,s,c,f,d,h){const p=this._renderer,x=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,m=new ya(this._lodPlanes[c],x),S=x.uniforms,M=this._sizeLods[s]-1,R=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*kr-1),A=f/R,E=isFinite(f)?1+Math.floor(y*A):kr;E>kr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${kr}`);const _=[];let L=0;for(let I=0;I<kr;++I){const j=I/A,D=Math.exp(-j*j/2);_.push(D),I===0?L+=D:I<E&&(L+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/L;S.envMap.value=n.texture,S.samples.value=E,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:P}=this;S.dTheta.value=R,S.mipInt.value=P-s;const U=this._sizeLods[c],K=3*U*(c>P-Ks?c-P+Ks:0),V=4*(this._cubeSize-U);lu(a,K,V,3*U,2*U),p.setRenderTarget(a),p.render(m,Ah)}}function FA(o){const n=[],a=[],s=[];let c=o;const f=o-Ks+1+Nv.length;for(let d=0;d<f;d++){const h=Math.pow(2,c);a.push(h);let p=1/h;d>o-Ks?p=Nv[d-o+Ks-1]:d===0&&(p=0),s.push(p);const x=1/(h-2),y=-x,m=1+x,S=[y,y,m,y,m,m,y,y,m,m,y,m],M=6,R=6,A=3,E=2,_=1,L=new Float32Array(A*R*M),P=new Float32Array(E*R*M),U=new Float32Array(_*R*M);for(let V=0;V<M;V++){const I=V%3*2/3-1,j=V>2?0:-1,D=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];L.set(D,A*R*V),P.set(S,E*R*V);const N=[V,V,V,V,V,V];U.set(N,_*R*V)}const K=new ba;K.setAttribute("position",new yi(L,A)),K.setAttribute("uv",new yi(P,E)),K.setAttribute("faceIndex",new yi(U,_)),n.push(K),c>Ks&&c--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function Ov(o,n,a){const s=new Zr(o,n,a);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function lu(o,n,a,s,c){o.viewport.set(n,a,s,c),o.scissor.set(n,a,s,c)}function HA(o,n,a){const s=new Float32Array(kr),c=new ue(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function zv(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Pv(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Ip(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GA(o){let n=new WeakMap,a=null;function s(h){if(h&&h.isTexture){const p=h.mapping,x=p===Xh||p===qh,y=p===to||p===no;if(x||y){let m=n.get(h);const S=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return a===null&&(a=new Lv(o)),m=x?a.fromEquirectangular(h,m):a.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return x&&M&&M.height>0||y&&M&&c(M)?(a===null&&(a=new Lv(o)),m=x?a.fromEquirectangular(h):a.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function c(h){let p=0;const x=6;for(let y=0;y<x;y++)h[y]!==void 0&&p++;return p===x}function f(h){const p=h.target;p.removeEventListener("dispose",f);const x=n.get(p);x!==void 0&&(n.delete(p),x.dispose())}function d(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:d}}function VA(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let c;switch(s){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(s)}return n[s]=c,c}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const c=a(s);return c===null&&Gr("THREE.WebGLRenderer: "+s+" extension not supported."),c}}}function jA(o,n,a,s){const c={},f=new WeakMap;function d(m){const S=m.target;S.index!==null&&n.remove(S.index);for(const R in S.attributes)n.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete c[S.id];const M=f.get(S);M&&(n.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function h(m,S){return c[S.id]===!0||(S.addEventListener("dispose",d),c[S.id]=!0,a.memory.geometries++),S}function p(m){const S=m.attributes;for(const M in S)n.update(S[M],o.ARRAY_BUFFER)}function x(m){const S=[],M=m.index,R=m.attributes.position;let A=0;if(M!==null){const L=M.array;A=M.version;for(let P=0,U=L.length;P<U;P+=3){const K=L[P+0],V=L[P+1],I=L[P+2];S.push(K,V,V,I,I,K)}}else if(R!==void 0){const L=R.array;A=R.version;for(let P=0,U=L.length/3-1;P<U;P+=3){const K=P+0,V=P+1,I=P+2;S.push(K,V,V,I,I,K)}}else return;const E=new(v_(S)?M_:E_)(S,1);E.version=A;const _=f.get(m);_&&n.remove(_),f.set(m,E)}function y(m){const S=f.get(m);if(S){const M=m.index;M!==null&&S.version<M.version&&x(m)}else x(m);return f.get(m)}return{get:h,update:p,getWireframeAttribute:y}}function kA(o,n,a){let s;function c(S){s=S}let f,d;function h(S){f=S.type,d=S.bytesPerElement}function p(S,M){o.drawElements(s,M,f,S*d),a.update(M,s,1)}function x(S,M,R){R!==0&&(o.drawElementsInstanced(s,M,f,S*d,R),a.update(M,s,R))}function y(S,M,R){if(R===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,S,0,R);let E=0;for(let _=0;_<R;_++)E+=M[_];a.update(E,s,1)}function m(S,M,R,A){if(R===0)return;const E=n.get("WEBGL_multi_draw");if(E===null)for(let _=0;_<S.length;_++)x(S[_]/d,M[_],A[_]);else{E.multiDrawElementsInstancedWEBGL(s,M,0,f,S,0,A,0,R);let _=0;for(let L=0;L<R;L++)_+=M[L]*A[L];a.update(_,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=x,this.renderMultiDraw=y,this.renderMultiDrawInstances=m}function XA(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:c,update:s}}function qA(o,n,a){const s=new WeakMap,c=new on;function f(d,h,p){const x=d.morphTargetInfluences,y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=y!==void 0?y.length:0;let S=s.get(h);if(S===void 0||S.count!==m){let N=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var M=N;S!==void 0&&S.texture.dispose();const R=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let U=0;R===!0&&(U=1),A===!0&&(U=2),E===!0&&(U=3);let K=h.attributes.position.count*U,V=1;K>n.maxTextureSize&&(V=Math.ceil(K/n.maxTextureSize),K=n.maxTextureSize);const I=new Float32Array(K*V*4*m),j=new __(I,K,V,m);j.type=va,j.needsUpdate=!0;const D=U*4;for(let F=0;F<m;F++){const le=_[F],te=L[F],fe=P[F],de=K*V*4*F;for(let k=0;k<le.count;k++){const ae=k*D;R===!0&&(c.fromBufferAttribute(le,k),I[de+ae+0]=c.x,I[de+ae+1]=c.y,I[de+ae+2]=c.z,I[de+ae+3]=0),A===!0&&(c.fromBufferAttribute(te,k),I[de+ae+4]=c.x,I[de+ae+5]=c.y,I[de+ae+6]=c.z,I[de+ae+7]=0),E===!0&&(c.fromBufferAttribute(fe,k),I[de+ae+8]=c.x,I[de+ae+9]=c.y,I[de+ae+10]=c.z,I[de+ae+11]=fe.itemSize===4?c.w:1)}}S={count:m,texture:j,size:new Ht(K,V)},s.set(h,S),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let R=0;for(let E=0;E<x.length;E++)R+=x[E];const A=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",x)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function YA(o,n,a,s){let c=new WeakMap;function f(p){const x=s.render.frame,y=p.geometry,m=n.get(p,y);if(c.get(m)!==x&&(n.update(m),c.set(m,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),c.get(p)!==x&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==x&&(S.update(),c.set(S,x))}return m}function d(){c=new WeakMap}function h(p){const x=p.target;x.removeEventListener("dispose",h),a.remove(x.instanceMatrix),x.instanceColor!==null&&a.remove(x.instanceColor)}return{update:f,dispose:d}}const D_=new jn,Iv=new C_(1,1),U_=new __,L_=new yb,O_=new A_,Bv=[],Fv=[],Hv=new Float32Array(16),Gv=new Float32Array(9),Vv=new Float32Array(4);function co(o,n,a){const s=o[0];if(s<=0||s>0)return o;const c=n*a;let f=Bv[c];if(f===void 0&&(f=new Float32Array(c),Bv[c]=f),n!==0){s.toArray(f,0);for(let d=1,h=0;d!==n;++d)h+=a,o[d].toArray(f,h)}return f}function gn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function xn(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function Eu(o,n){let a=Fv[n];a===void 0&&(a=new Int32Array(n),Fv[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function WA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function ZA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2fv(this.addr,n),xn(a,n)}}function KA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(gn(a,n))return;o.uniform3fv(this.addr,n),xn(a,n)}}function QA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4fv(this.addr,n),xn(a,n)}}function JA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),xn(a,n)}else{if(gn(a,s))return;Vv.set(s),o.uniformMatrix2fv(this.addr,!1,Vv),xn(a,s)}}function $A(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),xn(a,n)}else{if(gn(a,s))return;Gv.set(s),o.uniformMatrix3fv(this.addr,!1,Gv),xn(a,s)}}function ew(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),xn(a,n)}else{if(gn(a,s))return;Hv.set(s),o.uniformMatrix4fv(this.addr,!1,Hv),xn(a,s)}}function tw(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function nw(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2iv(this.addr,n),xn(a,n)}}function iw(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3iv(this.addr,n),xn(a,n)}}function aw(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4iv(this.addr,n),xn(a,n)}}function rw(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function sw(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2uiv(this.addr,n),xn(a,n)}}function ow(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3uiv(this.addr,n),xn(a,n)}}function lw(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4uiv(this.addr,n),xn(a,n)}}function cw(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(Iv.compareFunction=x_,f=Iv):f=D_,a.setTexture2D(n||f,c)}function uw(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture3D(n||L_,c)}function fw(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTextureCube(n||O_,c)}function dw(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture2DArray(n||U_,c)}function hw(o){switch(o){case 5126:return WA;case 35664:return ZA;case 35665:return KA;case 35666:return QA;case 35674:return JA;case 35675:return $A;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return aw;case 5125:return rw;case 36294:return sw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return dw}}function pw(o,n){o.uniform1fv(this.addr,n)}function mw(o,n){const a=co(n,this.size,2);o.uniform2fv(this.addr,a)}function gw(o,n){const a=co(n,this.size,3);o.uniform3fv(this.addr,a)}function xw(o,n){const a=co(n,this.size,4);o.uniform4fv(this.addr,a)}function vw(o,n){const a=co(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function _w(o,n){const a=co(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function yw(o,n){const a=co(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function Sw(o,n){o.uniform1iv(this.addr,n)}function Ew(o,n){o.uniform2iv(this.addr,n)}function Mw(o,n){o.uniform3iv(this.addr,n)}function bw(o,n){o.uniform4iv(this.addr,n)}function Tw(o,n){o.uniform1uiv(this.addr,n)}function Aw(o,n){o.uniform2uiv(this.addr,n)}function ww(o,n){o.uniform3uiv(this.addr,n)}function Rw(o,n){o.uniform4uiv(this.addr,n)}function Cw(o,n,a){const s=this.cache,c=n.length,f=Eu(a,c);gn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==c;++d)a.setTexture2D(n[d]||D_,f[d])}function Nw(o,n,a){const s=this.cache,c=n.length,f=Eu(a,c);gn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==c;++d)a.setTexture3D(n[d]||L_,f[d])}function Dw(o,n,a){const s=this.cache,c=n.length,f=Eu(a,c);gn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==c;++d)a.setTextureCube(n[d]||O_,f[d])}function Uw(o,n,a){const s=this.cache,c=n.length,f=Eu(a,c);gn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==c;++d)a.setTexture2DArray(n[d]||U_,f[d])}function Lw(o){switch(o){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return xw;case 35674:return vw;case 35675:return _w;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Ew;case 35668:case 35672:return Mw;case 35669:case 35673:return bw;case 5125:return Tw;case 36294:return Aw;case 36295:return ww;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Ow{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=hw(a.type)}}class zw{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=Lw(a.type)}}class Pw{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(n,a[h.id],s)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function jv(o,n){o.seq.push(n),o.map[n.id]=n}function Iw(o,n,a){const s=o.name,c=s.length;for(Dh.lastIndex=0;;){const f=Dh.exec(s),d=Dh.lastIndex;let h=f[1];const p=f[2]==="]",x=f[3];if(p&&(h=h|0),x===void 0||x==="["&&d+2===c){jv(a,x===void 0?new Ow(h,o,n):new zw(h,o,n));break}else{let m=a.map[h];m===void 0&&(m=new Pw(h),jv(a,m)),a=m}}}class mu{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const f=n.getActiveUniform(a,c),d=n.getUniformLocation(a,f.name);Iw(f,d,this)}}setValue(n,a,s,c){const f=this.map[a];f!==void 0&&f.setValue(n,s,c)}setOptional(n,a,s){const c=a[s];c!==void 0&&this.setValue(n,s,c)}static upload(n,a,s,c){for(let f=0,d=a.length;f!==d;++f){const h=a[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(n,p.value,c)}}static seqWithValue(n,a){const s=[];for(let c=0,f=n.length;c!==f;++c){const d=n[c];d.id in a&&s.push(d)}return s}}function kv(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const Bw=37297;let Fw=0;function Hw(o,n){const a=o.split(`
`),s=[],c=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===n?">":" "} ${h}: ${a[d]}`)}return s.join(`
`)}const Xv=new ft;function Gw(o){Nt._getMatrix(Xv,Nt.workingColorSpace,o);const n=`mat3( ${Xv.elements.map(a=>a.toFixed(4))} )`;switch(Nt.getTransfer(o)){case gu:return[n,"LinearTransferOETF"];case Ft:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function qv(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),c=o.getShaderInfoLog(n).trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return a.toUpperCase()+`

`+c+`

`+Hw(o.getShaderSource(n),d)}else return c}function Vw(o,n){const a=Gw(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function jw(o,n){let a;switch(n){case XM:a="Linear";break;case qM:a="Reinhard";break;case YM:a="Cineon";break;case WM:a="ACESFilmic";break;case KM:a="AgX";break;case QM:a="Neutral";break;case ZM:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const cu=new ue;function kw(){Nt.getLuminanceCoefficients(cu);const o=cu.x.toFixed(4),n=cu.y.toFixed(4),a=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function qw(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function Yw(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(n,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(n,d),locationSize:h}}return a}function cl(o){return o!==""}function Yv(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Wv(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(o){return o.replace(Ww,Kw)}const Zw=new Map;function Kw(o,n){let a=ht[n];if(a===void 0){const s=Zw.get(n);if(s!==void 0)a=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return bp(a)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zv(o){return o.replace(Qw,Jw)}function Jw(o,n,a,s){let c="";for(let f=parseInt(n);f<parseInt(a);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function Kv(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function $w(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===a_?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===bM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ga&&(n="SHADOWMAP_TYPE_VSM"),n}function e2(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case to:case no:n="ENVMAP_TYPE_CUBE";break;case _u:n="ENVMAP_TYPE_CUBE_UV";break}return n}function t2(o){let n="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case no:n="ENVMAP_MODE_REFRACTION";break}return n}function n2(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case r_:n="ENVMAP_BLENDING_MULTIPLY";break;case jM:n="ENVMAP_BLENDING_MIX";break;case kM:n="ENVMAP_BLENDING_ADD";break}return n}function i2(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function a2(o,n,a,s){const c=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const p=$w(a),x=e2(a),y=t2(a),m=n2(a),S=i2(a),M=Xw(a),R=qw(f),A=c.createProgram();let E,_,L=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(E=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R].filter(cl).join(`
`),E.length>0&&(E+=`
`),_=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R].filter(cl).join(`
`),_.length>0&&(_+=`
`)):(E=[Kv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+y:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),_=[Kv(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+x:"",a.envMap?"#define "+y:"",a.envMap?"#define "+m:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==cr?"#define TONE_MAPPING":"",a.toneMapping!==cr?ht.tonemapping_pars_fragment:"",a.toneMapping!==cr?jw("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Vw("linearToOutputTexel",a.outputColorSpace),kw(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(cl).join(`
`)),d=bp(d),d=Yv(d,a),d=Wv(d,a),h=bp(h),h=Yv(h,a),h=Wv(h,a),d=Zv(d),h=Zv(h),a.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,_=["#define varying in",a.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=L+E+d,U=L+_+h,K=kv(c,c.VERTEX_SHADER,P),V=kv(c,c.FRAGMENT_SHADER,U);c.attachShader(A,K),c.attachShader(A,V),a.index0AttributeName!==void 0?c.bindAttribLocation(A,0,a.index0AttributeName):a.morphTargets===!0&&c.bindAttribLocation(A,0,"position"),c.linkProgram(A);function I(F){if(o.debug.checkShaderErrors){const le=c.getProgramInfoLog(A).trim(),te=c.getShaderInfoLog(K).trim(),fe=c.getShaderInfoLog(V).trim();let de=!0,k=!0;if(c.getProgramParameter(A,c.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,A,K,V);else{const ae=qv(c,K,"vertex"),Z=qv(c,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(A,c.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+le+`
`+ae+`
`+Z)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(te===""||fe==="")&&(k=!1);k&&(F.diagnostics={runnable:de,programLog:le,vertexShader:{log:te,prefix:E},fragmentShader:{log:fe,prefix:_}})}c.deleteShader(K),c.deleteShader(V),j=new mu(c,A),D=Yw(c,A)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let N=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=c.getProgramParameter(A,Bw)),N},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(A),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=Fw++,this.cacheKey=n,this.usedTimes=1,this.program=A,this.vertexShader=K,this.fragmentShader=V,this}let r2=0;class s2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,c=this._getShaderStage(a),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(n);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new o2(n),a.set(n,s)),s}}class o2{constructor(n){this.id=r2++,this.code=n,this.usedTimes=0}}function l2(o,n,a,s,c,f,d){const h=new zp,p=new s2,x=new Set,y=[],m=c.logarithmicDepthBuffer,S=c.vertexTextures;let M=c.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return x.add(D),D===0?"uv":`uv${D}`}function E(D,N,F,le,te){const fe=le.fog,de=te.geometry,k=D.isMeshStandardMaterial?le.environment:null,ae=(D.isMeshStandardMaterial?a:n).get(D.envMap||k),Z=ae&&ae.mapping===_u?ae.image.height:null,_e=R[D.type];D.precision!==null&&(M=c.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Se=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,be=Se!==void 0?Se.length:0;let je=0;de.morphAttributes.position!==void 0&&(je=1),de.morphAttributes.normal!==void 0&&(je=2),de.morphAttributes.color!==void 0&&(je=3);let ze,w,G,oe;if(_e){const bt=Xi[_e];ze=bt.vertexShader,w=bt.fragmentShader}else ze=D.vertexShader,w=D.fragmentShader,p.update(D),G=p.getVertexShaderID(D),oe=p.getFragmentShaderID(D);const se=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ne=te.isInstancedMesh===!0,ge=te.isBatchedMesh===!0,Me=!!D.map,we=!!D.matcap,Ke=!!ae,B=!!D.aoMap,Xt=!!D.lightMap,Je=!!D.bumpMap,qe=!!D.normalMap,Ce=!!D.displacementMap,dt=!!D.emissiveMap,Ye=!!D.metalnessMap,O=!!D.roughnessMap,T=D.anisotropy>0,ne=D.clearcoat>0,ve=D.dispersion>0,Ee=D.iridescence>0,xe=D.sheen>0,We=D.transmission>0,Ie=T&&!!D.anisotropyMap,He=ne&&!!D.clearcoatMap,xt=ne&&!!D.clearcoatNormalMap,Re=ne&&!!D.clearcoatRoughnessMap,Xe=Ee&&!!D.iridescenceMap,nt=Ee&&!!D.iridescenceThicknessMap,at=xe&&!!D.sheenColorMap,ke=xe&&!!D.sheenRoughnessMap,gt=!!D.specularMap,lt=!!D.specularColorMap,It=!!D.specularIntensityMap,X=We&&!!D.transmissionMap,Be=We&&!!D.thicknessMap,he=!!D.gradientMap,ye=!!D.alphaMap,Fe=D.alphaTest>0,Ge=!!D.alphaHash,ot=!!D.extensions;let Jt=cr;D.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const vn={shaderID:_e,shaderType:D.type,shaderName:D.name,vertexShader:ze,fragmentShader:w,defines:D.defines,customVertexShaderID:G,customFragmentShaderID:oe,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:ge,batchingColor:ge&&te._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&te.instanceColor!==null,instancingMorph:Ne&&te.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:se===null?o.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ro,alphaToCoverage:!!D.alphaToCoverage,map:Me,matcap:we,envMap:Ke,envMapMode:Ke&&ae.mapping,envMapCubeUVHeight:Z,aoMap:B,lightMap:Xt,bumpMap:Je,normalMap:qe,displacementMap:S&&Ce,emissiveMap:dt,normalMapObjectSpace:qe&&D.normalMapType===nb,normalMapTangentSpace:qe&&D.normalMapType===tb,metalnessMap:Ye,roughnessMap:O,anisotropy:T,anisotropyMap:Ie,clearcoat:ne,clearcoatMap:He,clearcoatNormalMap:xt,clearcoatRoughnessMap:Re,dispersion:ve,iridescence:Ee,iridescenceMap:Xe,iridescenceThicknessMap:nt,sheen:xe,sheenColorMap:at,sheenRoughnessMap:ke,specularMap:gt,specularColorMap:lt,specularIntensityMap:It,transmission:We,transmissionMap:X,thicknessMap:Be,gradientMap:he,opaque:D.transparent===!1&&D.blending===Qs&&D.alphaToCoverage===!1,alphaMap:ye,alphaTest:Fe,alphaHash:Ge,combine:D.combine,mapUv:Me&&A(D.map.channel),aoMapUv:B&&A(D.aoMap.channel),lightMapUv:Xt&&A(D.lightMap.channel),bumpMapUv:Je&&A(D.bumpMap.channel),normalMapUv:qe&&A(D.normalMap.channel),displacementMapUv:Ce&&A(D.displacementMap.channel),emissiveMapUv:dt&&A(D.emissiveMap.channel),metalnessMapUv:Ye&&A(D.metalnessMap.channel),roughnessMapUv:O&&A(D.roughnessMap.channel),anisotropyMapUv:Ie&&A(D.anisotropyMap.channel),clearcoatMapUv:He&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:xt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:at&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(D.sheenRoughnessMap.channel),specularMapUv:gt&&A(D.specularMap.channel),specularColorMapUv:lt&&A(D.specularColorMap.channel),specularIntensityMapUv:It&&A(D.specularIntensityMap.channel),transmissionMapUv:X&&A(D.transmissionMap.channel),thicknessMapUv:Be&&A(D.thicknessMap.channel),alphaMapUv:ye&&A(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(qe||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!de.attributes.uv&&(Me||ye),fog:!!fe,useFog:D.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:je,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Me&&D.map.isVideoTexture===!0&&Nt.getTransfer(D.map.colorSpace)===Ft,decodeVideoTextureEmissive:dt&&D.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(D.emissiveMap.colorSpace)===Ft,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===xa,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ot&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&D.extensions.multiDraw===!0||ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return vn.vertexUv1s=x.has(1),vn.vertexUv2s=x.has(2),vn.vertexUv3s=x.has(3),x.clear(),vn}function _(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)N.push(F),N.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(L(N,D),P(N,D),N.push(o.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function L(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function P(D,N){h.disableAll(),N.supportsVertexTextures&&h.enable(0),N.instancing&&h.enable(1),N.instancingColor&&h.enable(2),N.instancingMorph&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),N.dispersion&&h.enable(20),N.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reverseDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const N=R[D.type];let F;if(N){const le=Xi[N];F=Lb.clone(le.uniforms)}else F=D.uniforms;return F}function K(D,N){let F;for(let le=0,te=y.length;le<te;le++){const fe=y[le];if(fe.cacheKey===N){F=fe,++F.usedTimes;break}}return F===void 0&&(F=new a2(o,N,D,f),y.push(F)),F}function V(D){if(--D.usedTimes===0){const N=y.indexOf(D);y[N]=y[y.length-1],y.pop(),D.destroy()}}function I(D){p.remove(D)}function j(){p.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:U,acquireProgram:K,releaseProgram:V,releaseShaderCache:I,programs:y,dispose:j}}function c2(){let o=new WeakMap;function n(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:c,dispose:f}}function u2(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function Qv(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function Jv(){const o=[];let n=0;const a=[],s=[],c=[];function f(){n=0,a.length=0,s.length=0,c.length=0}function d(m,S,M,R,A,E){let _=o[n];return _===void 0?(_={id:m.id,object:m,geometry:S,material:M,groupOrder:R,renderOrder:m.renderOrder,z:A,group:E},o[n]=_):(_.id=m.id,_.object=m,_.geometry=S,_.material=M,_.groupOrder=R,_.renderOrder=m.renderOrder,_.z=A,_.group=E),n++,_}function h(m,S,M,R,A,E){const _=d(m,S,M,R,A,E);M.transmission>0?s.push(_):M.transparent===!0?c.push(_):a.push(_)}function p(m,S,M,R,A,E){const _=d(m,S,M,R,A,E);M.transmission>0?s.unshift(_):M.transparent===!0?c.unshift(_):a.unshift(_)}function x(m,S){a.length>1&&a.sort(m||u2),s.length>1&&s.sort(S||Qv),c.length>1&&c.sort(S||Qv)}function y(){for(let m=n,S=o.length;m<S;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:c,init:f,push:h,unshift:p,finish:y,sort:x}}function f2(){let o=new WeakMap;function n(s,c){const f=o.get(s);let d;return f===void 0?(d=new Jv,o.set(s,[d])):c>=f.length?(d=new Jv,f.push(d)):d=f[c],d}function a(){o=new WeakMap}return{get:n,dispose:a}}function d2(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new ue,color:new Lt};break;case"SpotLight":a={position:new ue,direction:new ue,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ue,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ue,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":a={color:new Lt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return o[n.id]=a,a}}}function h2(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let p2=0;function m2(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function g2(o){const n=new d2,a=h2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)s.probe.push(new ue);const c=new ue,f=new rn,d=new rn;function h(x){let y=0,m=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,R=0,A=0,E=0,_=0,L=0,P=0,U=0,K=0,V=0,I=0;x.sort(m2);for(let D=0,N=x.length;D<N;D++){const F=x[D],le=F.color,te=F.intensity,fe=F.distance,de=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)y+=le.r*te,m+=le.g*te,S+=le.b*te;else if(F.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(F.sh.coefficients[k],te);I++}else if(F.isDirectionalLight){const k=n.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ae=F.shadow,Z=a.get(F);Z.shadowIntensity=ae.intensity,Z.shadowBias=ae.bias,Z.shadowNormalBias=ae.normalBias,Z.shadowRadius=ae.radius,Z.shadowMapSize=ae.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=de,s.directionalShadowMatrix[M]=F.shadow.matrix,L++}s.directional[M]=k,M++}else if(F.isSpotLight){const k=n.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(le).multiplyScalar(te),k.distance=fe,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,s.spot[A]=k;const ae=F.shadow;if(F.map&&(s.spotLightMap[K]=F.map,K++,ae.updateMatrices(F),F.castShadow&&V++),s.spotLightMatrix[A]=ae.matrix,F.castShadow){const Z=a.get(F);Z.shadowIntensity=ae.intensity,Z.shadowBias=ae.bias,Z.shadowNormalBias=ae.normalBias,Z.shadowRadius=ae.radius,Z.shadowMapSize=ae.mapSize,s.spotShadow[A]=Z,s.spotShadowMap[A]=de,U++}A++}else if(F.isRectAreaLight){const k=n.get(F);k.color.copy(le).multiplyScalar(te),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),s.rectArea[E]=k,E++}else if(F.isPointLight){const k=n.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),k.distance=F.distance,k.decay=F.decay,F.castShadow){const ae=F.shadow,Z=a.get(F);Z.shadowIntensity=ae.intensity,Z.shadowBias=ae.bias,Z.shadowNormalBias=ae.normalBias,Z.shadowRadius=ae.radius,Z.shadowMapSize=ae.mapSize,Z.shadowCameraNear=ae.camera.near,Z.shadowCameraFar=ae.camera.far,s.pointShadow[R]=Z,s.pointShadowMap[R]=de,s.pointShadowMatrix[R]=F.shadow.matrix,P++}s.point[R]=k,R++}else if(F.isHemisphereLight){const k=n.get(F);k.skyColor.copy(F.color).multiplyScalar(te),k.groundColor.copy(F.groundColor).multiplyScalar(te),s.hemi[_]=k,_++}}E>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=m,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==M||j.pointLength!==R||j.spotLength!==A||j.rectAreaLength!==E||j.hemiLength!==_||j.numDirectionalShadows!==L||j.numPointShadows!==P||j.numSpotShadows!==U||j.numSpotMaps!==K||j.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=E,s.point.length=R,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+K-V,s.spotLightMap.length=K,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=I,j.directionalLength=M,j.pointLength=R,j.spotLength=A,j.rectAreaLength=E,j.hemiLength=_,j.numDirectionalShadows=L,j.numPointShadows=P,j.numSpotShadows=U,j.numSpotMaps=K,j.numLightProbes=I,s.version=p2++)}function p(x,y){let m=0,S=0,M=0,R=0,A=0;const E=y.matrixWorldInverse;for(let _=0,L=x.length;_<L;_++){const P=x[_];if(P.isDirectionalLight){const U=s.directional[m];U.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(E),m++}else if(P.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(E),U.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(E),M++}else if(P.isRectAreaLight){const U=s.rectArea[R];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(E),d.identity(),f.copy(P.matrixWorld),f.premultiply(E),d.extractRotation(f),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),R++}else if(P.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(E),S++}else if(P.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(E),A++}}}return{setup:h,setupView:p,state:s}}function $v(o){const n=new g2(o),a=[],s=[];function c(y){x.camera=y,a.length=0,s.length=0}function f(y){a.push(y)}function d(y){s.push(y)}function h(){n.setup(a)}function p(y){n.setupView(a,y)}const x={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:x,setupLights:h,setupLightsView:p,pushLight:f,pushShadow:d}}function x2(o){let n=new WeakMap;function a(c,f=0){const d=n.get(c);let h;return d===void 0?(h=new $v(o),n.set(c,[h])):f>=d.length?(h=new $v(o),d.push(h)):h=d[f],h}function s(){n=new WeakMap}return{get:a,dispose:s}}const v2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y2(o,n,a){let s=new w_;const c=new Ht,f=new Ht,d=new on,h=new kb({depthPacking:eb}),p=new Xb,x={},y=a.maxTextureSize,m={[ur]:Kn,[Kn]:ur,[xa]:xa},S=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:v2,fragmentShader:_2}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const R=new ba;R.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ya(R,S),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let _=this.type;this.render=function(V,I,j){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||V.length===0)return;const D=o.getRenderTarget(),N=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),le=o.state;le.setBlending(lr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const te=_!==ga&&this.type===ga,fe=_===ga&&this.type!==ga;for(let de=0,k=V.length;de<k;de++){const ae=V[de],Z=ae.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;c.copy(Z.mapSize);const _e=Z.getFrameExtents();if(c.multiply(_e),f.copy(Z.mapSize),(c.x>y||c.y>y)&&(c.x>y&&(f.x=Math.floor(y/_e.x),c.x=f.x*_e.x,Z.mapSize.x=f.x),c.y>y&&(f.y=Math.floor(y/_e.y),c.y=f.y*_e.y,Z.mapSize.y=f.y)),Z.map===null||te===!0||fe===!0){const be=this.type!==ga?{minFilter:Ui,magFilter:Ui}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Zr(c.x,c.y,be),Z.map.texture.name=ae.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Se=Z.getViewportCount();for(let be=0;be<Se;be++){const je=Z.getViewport(be);d.set(f.x*je.x,f.y*je.y,f.x*je.z,f.y*je.w),le.viewport(d),Z.updateMatrices(ae,be),s=Z.getFrustum(),U(I,j,Z.camera,ae,this.type)}Z.isPointLightShadow!==!0&&this.type===ga&&L(Z,j),Z.needsUpdate=!1}_=this.type,E.needsUpdate=!1,o.setRenderTarget(D,N,F)};function L(V,I){const j=n.update(A);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Zr(c.x,c.y)),S.uniforms.shadow_pass.value=V.map.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(I,null,j,S,A,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(I,null,j,M,A,null)}function P(V,I,j,D){let N=null;const F=j.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(F!==void 0)N=F;else if(N=j.isPointLight===!0?p:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const le=N.uuid,te=I.uuid;let fe=x[le];fe===void 0&&(fe={},x[le]=fe);let de=fe[te];de===void 0&&(de=N.clone(),fe[te]=de,I.addEventListener("dispose",K)),N=de}if(N.visible=I.visible,N.wireframe=I.wireframe,D===ga?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:m[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,j.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const le=o.properties.get(N);le.light=j}return N}function U(V,I,j,D,N){if(V.visible===!1)return;if(V.layers.test(I.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&N===ga)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,V.matrixWorld);const te=n.update(V),fe=V.material;if(Array.isArray(fe)){const de=te.groups;for(let k=0,ae=de.length;k<ae;k++){const Z=de[k],_e=fe[Z.materialIndex];if(_e&&_e.visible){const Se=P(V,_e,D,N);V.onBeforeShadow(o,V,I,j,te,Se,Z),o.renderBufferDirect(j,null,te,Se,V,Z),V.onAfterShadow(o,V,I,j,te,Se,Z)}}}else if(fe.visible){const de=P(V,fe,D,N);V.onBeforeShadow(o,V,I,j,te,de,null),o.renderBufferDirect(j,null,te,de,V,null),V.onAfterShadow(o,V,I,j,te,de,null)}}const le=V.children;for(let te=0,fe=le.length;te<fe;te++)U(le[te],I,j,D,N)}function K(V){V.target.removeEventListener("dispose",K);for(const j in x){const D=x[j],N=V.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const S2={[Bh]:Fh,[Hh]:jh,[Gh]:kh,[eo]:Vh,[Fh]:Bh,[jh]:Hh,[kh]:Gh,[Vh]:eo};function E2(o,n){function a(){let X=!1;const Be=new on;let he=null;const ye=new on(0,0,0,0);return{setMask:function(Fe){he!==Fe&&!X&&(o.colorMask(Fe,Fe,Fe,Fe),he=Fe)},setLocked:function(Fe){X=Fe},setClear:function(Fe,Ge,ot,Jt,vn){vn===!0&&(Fe*=Jt,Ge*=Jt,ot*=Jt),Be.set(Fe,Ge,ot,Jt),ye.equals(Be)===!1&&(o.clearColor(Fe,Ge,ot,Jt),ye.copy(Be))},reset:function(){X=!1,he=null,ye.set(-1,0,0,0)}}}function s(){let X=!1,Be=!1,he=null,ye=null,Fe=null;return{setReversed:function(Ge){if(Be!==Ge){const ot=n.get("EXT_clip_control");Be?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Jt=Fe;Fe=null,this.setClear(Jt)}Be=Ge},getReversed:function(){return Be},setTest:function(Ge){Ge?se(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Ge){he!==Ge&&!X&&(o.depthMask(Ge),he=Ge)},setFunc:function(Ge){if(Be&&(Ge=S2[Ge]),ye!==Ge){switch(Ge){case Bh:o.depthFunc(o.NEVER);break;case Fh:o.depthFunc(o.ALWAYS);break;case Hh:o.depthFunc(o.LESS);break;case eo:o.depthFunc(o.LEQUAL);break;case Gh:o.depthFunc(o.EQUAL);break;case Vh:o.depthFunc(o.GEQUAL);break;case jh:o.depthFunc(o.GREATER);break;case kh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ye=Ge}},setLocked:function(Ge){X=Ge},setClear:function(Ge){Fe!==Ge&&(Be&&(Ge=1-Ge),o.clearDepth(Ge),Fe=Ge)},reset:function(){X=!1,he=null,ye=null,Fe=null,Be=!1}}}function c(){let X=!1,Be=null,he=null,ye=null,Fe=null,Ge=null,ot=null,Jt=null,vn=null;return{setTest:function(bt){X||(bt?se(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(bt){Be!==bt&&!X&&(o.stencilMask(bt),Be=bt)},setFunc:function(bt,Zt,_n){(he!==bt||ye!==Zt||Fe!==_n)&&(o.stencilFunc(bt,Zt,_n),he=bt,ye=Zt,Fe=_n)},setOp:function(bt,Zt,_n){(Ge!==bt||ot!==Zt||Jt!==_n)&&(o.stencilOp(bt,Zt,_n),Ge=bt,ot=Zt,Jt=_n)},setLocked:function(bt){X=bt},setClear:function(bt){vn!==bt&&(o.clearStencil(bt),vn=bt)},reset:function(){X=!1,Be=null,he=null,ye=null,Fe=null,Ge=null,ot=null,Jt=null,vn=null}}}const f=new a,d=new s,h=new c,p=new WeakMap,x=new WeakMap;let y={},m={},S=new WeakMap,M=[],R=null,A=!1,E=null,_=null,L=null,P=null,U=null,K=null,V=null,I=new Lt(0,0,0),j=0,D=!1,N=null,F=null,le=null,te=null,fe=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ae=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=ae>=1):Z.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=ae>=2);let _e=null,Se={};const be=o.getParameter(o.SCISSOR_BOX),je=o.getParameter(o.VIEWPORT),ze=new on().fromArray(be),w=new on().fromArray(je);function G(X,Be,he,ye){const Fe=new Uint8Array(4),Ge=o.createTexture();o.bindTexture(X,Ge),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ot=0;ot<he;ot++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Be,0,o.RGBA,1,1,ye,0,o.RGBA,o.UNSIGNED_BYTE,Fe):o.texImage2D(Be+ot,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Fe);return Ge}const oe={};oe[o.TEXTURE_2D]=G(o.TEXTURE_2D,o.TEXTURE_2D,1),oe[o.TEXTURE_CUBE_MAP]=G(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[o.TEXTURE_2D_ARRAY]=G(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),oe[o.TEXTURE_3D]=G(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),se(o.DEPTH_TEST),d.setFunc(eo),Je(!1),qe(tv),se(o.CULL_FACE),B(lr);function se(X){y[X]!==!0&&(o.enable(X),y[X]=!0)}function Te(X){y[X]!==!1&&(o.disable(X),y[X]=!1)}function Ne(X,Be){return m[X]!==Be?(o.bindFramebuffer(X,Be),m[X]=Be,X===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Be),X===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Be),!0):!1}function ge(X,Be){let he=M,ye=!1;if(X){he=S.get(Be),he===void 0&&(he=[],S.set(Be,he));const Fe=X.textures;if(he.length!==Fe.length||he[0]!==o.COLOR_ATTACHMENT0){for(let Ge=0,ot=Fe.length;Ge<ot;Ge++)he[Ge]=o.COLOR_ATTACHMENT0+Ge;he.length=Fe.length,ye=!0}}else he[0]!==o.BACK&&(he[0]=o.BACK,ye=!0);ye&&o.drawBuffers(he)}function Me(X){return R!==X?(o.useProgram(X),R=X,!0):!1}const we={[jr]:o.FUNC_ADD,[AM]:o.FUNC_SUBTRACT,[wM]:o.FUNC_REVERSE_SUBTRACT};we[RM]=o.MIN,we[CM]=o.MAX;const Ke={[NM]:o.ZERO,[DM]:o.ONE,[UM]:o.SRC_COLOR,[Ph]:o.SRC_ALPHA,[BM]:o.SRC_ALPHA_SATURATE,[PM]:o.DST_COLOR,[OM]:o.DST_ALPHA,[LM]:o.ONE_MINUS_SRC_COLOR,[Ih]:o.ONE_MINUS_SRC_ALPHA,[IM]:o.ONE_MINUS_DST_COLOR,[zM]:o.ONE_MINUS_DST_ALPHA,[FM]:o.CONSTANT_COLOR,[HM]:o.ONE_MINUS_CONSTANT_COLOR,[GM]:o.CONSTANT_ALPHA,[VM]:o.ONE_MINUS_CONSTANT_ALPHA};function B(X,Be,he,ye,Fe,Ge,ot,Jt,vn,bt){if(X===lr){A===!0&&(Te(o.BLEND),A=!1);return}if(A===!1&&(se(o.BLEND),A=!0),X!==TM){if(X!==E||bt!==D){if((_!==jr||U!==jr)&&(o.blendEquation(o.FUNC_ADD),_=jr,U=jr),bt)switch(X){case Qs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zh:o.blendFunc(o.ONE,o.ONE);break;case nv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case iv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Qs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case nv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case iv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,P=null,K=null,V=null,I.set(0,0,0),j=0,E=X,D=bt}return}Fe=Fe||Be,Ge=Ge||he,ot=ot||ye,(Be!==_||Fe!==U)&&(o.blendEquationSeparate(we[Be],we[Fe]),_=Be,U=Fe),(he!==L||ye!==P||Ge!==K||ot!==V)&&(o.blendFuncSeparate(Ke[he],Ke[ye],Ke[Ge],Ke[ot]),L=he,P=ye,K=Ge,V=ot),(Jt.equals(I)===!1||vn!==j)&&(o.blendColor(Jt.r,Jt.g,Jt.b,vn),I.copy(Jt),j=vn),E=X,D=!1}function Xt(X,Be){X.side===xa?Te(o.CULL_FACE):se(o.CULL_FACE);let he=X.side===Kn;Be&&(he=!he),Je(he),X.blending===Qs&&X.transparent===!1?B(lr):B(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),f.setMask(X.colorWrite);const ye=X.stencilWrite;h.setTest(ye),ye&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),dt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?se(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function Je(X){N!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),N=X)}function qe(X){X!==EM?(se(o.CULL_FACE),X!==F&&(X===tv?o.cullFace(o.BACK):X===MM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),F=X}function Ce(X){X!==le&&(k&&o.lineWidth(X),le=X)}function dt(X,Be,he){X?(se(o.POLYGON_OFFSET_FILL),(te!==Be||fe!==he)&&(o.polygonOffset(Be,he),te=Be,fe=he)):Te(o.POLYGON_OFFSET_FILL)}function Ye(X){X?se(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function O(X){X===void 0&&(X=o.TEXTURE0+de-1),_e!==X&&(o.activeTexture(X),_e=X)}function T(X,Be,he){he===void 0&&(_e===null?he=o.TEXTURE0+de-1:he=_e);let ye=Se[he];ye===void 0&&(ye={type:void 0,texture:void 0},Se[he]=ye),(ye.type!==X||ye.texture!==Be)&&(_e!==he&&(o.activeTexture(he),_e=he),o.bindTexture(X,Be||oe[X]),ye.type=X,ye.texture=Be)}function ne(){const X=Se[_e];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ve(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function at(X){ze.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ze.copy(X))}function ke(X){w.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),w.copy(X))}function gt(X,Be){let he=x.get(Be);he===void 0&&(he=new WeakMap,x.set(Be,he));let ye=he.get(X);ye===void 0&&(ye=o.getUniformBlockIndex(Be,X.name),he.set(X,ye))}function lt(X,Be){const ye=x.get(Be).get(X);p.get(Be)!==ye&&(o.uniformBlockBinding(Be,ye,X.__bindingPointIndex),p.set(Be,ye))}function It(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},_e=null,Se={},m={},S=new WeakMap,M=[],R=null,A=!1,E=null,_=null,L=null,P=null,U=null,K=null,V=null,I=new Lt(0,0,0),j=0,D=!1,N=null,F=null,le=null,te=null,fe=null,ze.set(0,0,o.canvas.width,o.canvas.height),w.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:se,disable:Te,bindFramebuffer:Ne,drawBuffers:ge,useProgram:Me,setBlending:B,setMaterial:Xt,setFlipSided:Je,setCullFace:qe,setLineWidth:Ce,setPolygonOffset:dt,setScissorTest:Ye,activeTexture:O,bindTexture:T,unbindTexture:ne,compressedTexImage2D:ve,compressedTexImage3D:Ee,texImage2D:Xe,texImage3D:nt,updateUBOMapping:gt,uniformBlockBinding:lt,texStorage2D:xt,texStorage3D:Re,texSubImage2D:xe,texSubImage3D:We,compressedTexSubImage2D:Ie,compressedTexSubImage3D:He,scissor:at,viewport:ke,reset:It}}function M2(o,n,a,s,c,f,d){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new Ht,y=new WeakMap;let m;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(O,T){return M?new OffscreenCanvas(O,T):vu("canvas")}function A(O,T,ne){let ve=1;const Ee=Ye(O);if((Ee.width>ne||Ee.height>ne)&&(ve=ne/Math.max(Ee.width,Ee.height)),ve<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xe=Math.floor(ve*Ee.width),We=Math.floor(ve*Ee.height);m===void 0&&(m=R(xe,We));const Ie=T?R(xe,We):m;return Ie.width=xe,Ie.height=We,Ie.getContext("2d").drawImage(O,0,0,xe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+xe+"x"+We+")."),Ie}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function E(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(O,T,ne,ve,Ee=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xe=T;if(T===o.RED&&(ne===o.FLOAT&&(xe=o.R32F),ne===o.HALF_FLOAT&&(xe=o.R16F),ne===o.UNSIGNED_BYTE&&(xe=o.R8)),T===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(xe=o.R8UI),ne===o.UNSIGNED_SHORT&&(xe=o.R16UI),ne===o.UNSIGNED_INT&&(xe=o.R32UI),ne===o.BYTE&&(xe=o.R8I),ne===o.SHORT&&(xe=o.R16I),ne===o.INT&&(xe=o.R32I)),T===o.RG&&(ne===o.FLOAT&&(xe=o.RG32F),ne===o.HALF_FLOAT&&(xe=o.RG16F),ne===o.UNSIGNED_BYTE&&(xe=o.RG8)),T===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(xe=o.RG8UI),ne===o.UNSIGNED_SHORT&&(xe=o.RG16UI),ne===o.UNSIGNED_INT&&(xe=o.RG32UI),ne===o.BYTE&&(xe=o.RG8I),ne===o.SHORT&&(xe=o.RG16I),ne===o.INT&&(xe=o.RG32I)),T===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(xe=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(xe=o.RGB16UI),ne===o.UNSIGNED_INT&&(xe=o.RGB32UI),ne===o.BYTE&&(xe=o.RGB8I),ne===o.SHORT&&(xe=o.RGB16I),ne===o.INT&&(xe=o.RGB32I)),T===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(xe=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(xe=o.RGBA16UI),ne===o.UNSIGNED_INT&&(xe=o.RGBA32UI),ne===o.BYTE&&(xe=o.RGBA8I),ne===o.SHORT&&(xe=o.RGBA16I),ne===o.INT&&(xe=o.RGBA32I)),T===o.RGB&&ne===o.UNSIGNED_INT_5_9_9_9_REV&&(xe=o.RGB9_E5),T===o.RGBA){const We=Ee?gu:Nt.getTransfer(ve);ne===o.FLOAT&&(xe=o.RGBA32F),ne===o.HALF_FLOAT&&(xe=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(xe=We===Ft?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&n.get("EXT_color_buffer_float"),xe}function U(O,T){let ne;return O?T===null||T===Wr||T===io?ne=o.DEPTH24_STENCIL8:T===va?ne=o.DEPTH32F_STENCIL8:T===ul&&(ne=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===io?ne=o.DEPTH_COMPONENT24:T===va?ne=o.DEPTH_COMPONENT32F:T===ul&&(ne=o.DEPTH_COMPONENT16),ne}function K(O,T){return E(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ui&&O.minFilter!==qi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function V(O){const T=O.target;T.removeEventListener("dispose",V),j(T),T.isVideoTexture&&y.delete(T)}function I(O){const T=O.target;T.removeEventListener("dispose",I),N(T)}function j(O){const T=s.get(O);if(T.__webglInit===void 0)return;const ne=O.source,ve=S.get(ne);if(ve){const Ee=ve[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&D(O),Object.keys(ve).length===0&&S.delete(ne)}s.remove(O)}function D(O){const T=s.get(O);o.deleteTexture(T.__webglTexture);const ne=O.source,ve=S.get(ne);delete ve[T.__cacheKey],d.memory.textures--}function N(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Ee=0;Ee<T.__webglFramebuffer[ve].length;Ee++)o.deleteFramebuffer(T.__webglFramebuffer[ve][Ee]);else o.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)o.deleteFramebuffer(T.__webglFramebuffer[ve]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=O.textures;for(let ve=0,Ee=ne.length;ve<Ee;ve++){const xe=s.get(ne[ve]);xe.__webglTexture&&(o.deleteTexture(xe.__webglTexture),d.memory.textures--),s.remove(ne[ve])}s.remove(O)}let F=0;function le(){F=0}function te(){const O=F;return O>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+c.maxTextures),F+=1,O}function fe(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function de(O,T){const ne=s.get(O);if(O.isVideoTexture&&Ce(O),O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){const ve=O.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{w(ne,O,T);return}}a.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+T)}function k(O,T){const ne=s.get(O);if(O.version>0&&ne.__version!==O.version){w(ne,O,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+T)}function ae(O,T){const ne=s.get(O);if(O.version>0&&ne.__version!==O.version){w(ne,O,T);return}a.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+T)}function Z(O,T){const ne=s.get(O);if(O.version>0&&ne.__version!==O.version){G(ne,O,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+T)}const _e={[Yh]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[Wh]:o.MIRRORED_REPEAT},Se={[Ui]:o.NEAREST,[JM]:o.NEAREST_MIPMAP_NEAREST,[Hc]:o.NEAREST_MIPMAP_LINEAR,[qi]:o.LINEAR,[nh]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},be={[ib]:o.NEVER,[cb]:o.ALWAYS,[ab]:o.LESS,[x_]:o.LEQUAL,[rb]:o.EQUAL,[lb]:o.GEQUAL,[sb]:o.GREATER,[ob]:o.NOTEQUAL};function je(O,T){if(T.type===va&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===qi||T.magFilter===nh||T.magFilter===Hc||T.magFilter===qr||T.minFilter===qi||T.minFilter===nh||T.minFilter===Hc||T.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,_e[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,_e[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,_e[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Se[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Se[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ui||T.minFilter!==Hc&&T.minFilter!==qr||T.type===va&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ne=n.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ze(O,T){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",V));const ve=T.source;let Ee=S.get(ve);Ee===void 0&&(Ee={},S.set(ve,Ee));const xe=fe(T);if(xe!==O.__cacheKey){Ee[xe]===void 0&&(Ee[xe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),Ee[xe].usedTimes++;const We=Ee[O.__cacheKey];We!==void 0&&(Ee[O.__cacheKey].usedTimes--,We.usedTimes===0&&D(T)),O.__cacheKey=xe,O.__webglTexture=Ee[xe].texture}return ne}function w(O,T,ne){let ve=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=o.TEXTURE_3D);const Ee=ze(O,T),xe=T.source;a.bindTexture(ve,O.__webglTexture,o.TEXTURE0+ne);const We=s.get(xe);if(xe.version!==We.__version||Ee===!0){a.activeTexture(o.TEXTURE0+ne);const Ie=Nt.getPrimaries(Nt.workingColorSpace),He=T.colorSpace===sr?null:Nt.getPrimaries(T.colorSpace),xt=T.colorSpace===sr||Ie===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Re=A(T.image,!1,c.maxTextureSize);Re=dt(T,Re);const Xe=f.convert(T.format,T.colorSpace),nt=f.convert(T.type);let at=P(T.internalFormat,Xe,nt,T.colorSpace,T.isVideoTexture);je(ve,T);let ke;const gt=T.mipmaps,lt=T.isVideoTexture!==!0,It=We.__version===void 0||Ee===!0,X=xe.dataReady,Be=K(T,Re);if(T.isDepthTexture)at=U(T.format===ao,T.type),It&&(lt?a.texStorage2D(o.TEXTURE_2D,1,at,Re.width,Re.height):a.texImage2D(o.TEXTURE_2D,0,at,Re.width,Re.height,0,Xe,nt,null));else if(T.isDataTexture)if(gt.length>0){lt&&It&&a.texStorage2D(o.TEXTURE_2D,Be,at,gt[0].width,gt[0].height);for(let he=0,ye=gt.length;he<ye;he++)ke=gt[he],lt?X&&a.texSubImage2D(o.TEXTURE_2D,he,0,0,ke.width,ke.height,Xe,nt,ke.data):a.texImage2D(o.TEXTURE_2D,he,at,ke.width,ke.height,0,Xe,nt,ke.data);T.generateMipmaps=!1}else lt?(It&&a.texStorage2D(o.TEXTURE_2D,Be,at,Re.width,Re.height),X&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Re.width,Re.height,Xe,nt,Re.data)):a.texImage2D(o.TEXTURE_2D,0,at,Re.width,Re.height,0,Xe,nt,Re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){lt&&It&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Be,at,gt[0].width,gt[0].height,Re.depth);for(let he=0,ye=gt.length;he<ye;he++)if(ke=gt[he],T.format!==Di)if(Xe!==null)if(lt){if(X)if(T.layerUpdates.size>0){const Fe=Cv(ke.width,ke.height,T.format,T.type);for(const Ge of T.layerUpdates){const ot=ke.data.subarray(Ge*Fe/ke.data.BYTES_PER_ELEMENT,(Ge+1)*Fe/ke.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,Ge,ke.width,ke.height,1,Xe,ot)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Re.depth,Xe,ke.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,at,ke.width,ke.height,Re.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?X&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Re.depth,Xe,nt,ke.data):a.texImage3D(o.TEXTURE_2D_ARRAY,he,at,ke.width,ke.height,Re.depth,0,Xe,nt,ke.data)}else{lt&&It&&a.texStorage2D(o.TEXTURE_2D,Be,at,gt[0].width,gt[0].height);for(let he=0,ye=gt.length;he<ye;he++)ke=gt[he],T.format!==Di?Xe!==null?lt?X&&a.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,ke.width,ke.height,Xe,ke.data):a.compressedTexImage2D(o.TEXTURE_2D,he,at,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?X&&a.texSubImage2D(o.TEXTURE_2D,he,0,0,ke.width,ke.height,Xe,nt,ke.data):a.texImage2D(o.TEXTURE_2D,he,at,ke.width,ke.height,0,Xe,nt,ke.data)}else if(T.isDataArrayTexture)if(lt){if(It&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Be,at,Re.width,Re.height,Re.depth),X)if(T.layerUpdates.size>0){const he=Cv(Re.width,Re.height,T.format,T.type);for(const ye of T.layerUpdates){const Fe=Re.data.subarray(ye*he/Re.data.BYTES_PER_ELEMENT,(ye+1)*he/Re.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ye,Re.width,Re.height,1,Xe,nt,Fe)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Xe,nt,Re.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,at,Re.width,Re.height,Re.depth,0,Xe,nt,Re.data);else if(T.isData3DTexture)lt?(It&&a.texStorage3D(o.TEXTURE_3D,Be,at,Re.width,Re.height,Re.depth),X&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Xe,nt,Re.data)):a.texImage3D(o.TEXTURE_3D,0,at,Re.width,Re.height,Re.depth,0,Xe,nt,Re.data);else if(T.isFramebufferTexture){if(It)if(lt)a.texStorage2D(o.TEXTURE_2D,Be,at,Re.width,Re.height);else{let he=Re.width,ye=Re.height;for(let Fe=0;Fe<Be;Fe++)a.texImage2D(o.TEXTURE_2D,Fe,at,he,ye,0,Xe,nt,null),he>>=1,ye>>=1}}else if(gt.length>0){if(lt&&It){const he=Ye(gt[0]);a.texStorage2D(o.TEXTURE_2D,Be,at,he.width,he.height)}for(let he=0,ye=gt.length;he<ye;he++)ke=gt[he],lt?X&&a.texSubImage2D(o.TEXTURE_2D,he,0,0,Xe,nt,ke):a.texImage2D(o.TEXTURE_2D,he,at,Xe,nt,ke);T.generateMipmaps=!1}else if(lt){if(It){const he=Ye(Re);a.texStorage2D(o.TEXTURE_2D,Be,at,he.width,he.height)}X&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Xe,nt,Re)}else a.texImage2D(o.TEXTURE_2D,0,at,Xe,nt,Re);E(T)&&_(ve),We.__version=xe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function G(O,T,ne){if(T.image.length!==6)return;const ve=ze(O,T),Ee=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ne);const xe=s.get(Ee);if(Ee.version!==xe.__version||ve===!0){a.activeTexture(o.TEXTURE0+ne);const We=Nt.getPrimaries(Nt.workingColorSpace),Ie=T.colorSpace===sr?null:Nt.getPrimaries(T.colorSpace),He=T.colorSpace===sr||We===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const xt=T.isCompressedTexture||T.image[0].isCompressedTexture,Re=T.image[0]&&T.image[0].isDataTexture,Xe=[];for(let ye=0;ye<6;ye++)!xt&&!Re?Xe[ye]=A(T.image[ye],!0,c.maxCubemapSize):Xe[ye]=Re?T.image[ye].image:T.image[ye],Xe[ye]=dt(T,Xe[ye]);const nt=Xe[0],at=f.convert(T.format,T.colorSpace),ke=f.convert(T.type),gt=P(T.internalFormat,at,ke,T.colorSpace),lt=T.isVideoTexture!==!0,It=xe.__version===void 0||ve===!0,X=Ee.dataReady;let Be=K(T,nt);je(o.TEXTURE_CUBE_MAP,T);let he;if(xt){lt&&It&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Be,gt,nt.width,nt.height);for(let ye=0;ye<6;ye++){he=Xe[ye].mipmaps;for(let Fe=0;Fe<he.length;Fe++){const Ge=he[Fe];T.format!==Di?at!==null?lt?X&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,0,0,Ge.width,Ge.height,at,Ge.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,gt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,0,0,Ge.width,Ge.height,at,ke,Ge.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,gt,Ge.width,Ge.height,0,at,ke,Ge.data)}}}else{if(he=T.mipmaps,lt&&It){he.length>0&&Be++;const ye=Ye(Xe[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Be,gt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Re){lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Xe[ye].width,Xe[ye].height,at,ke,Xe[ye].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,gt,Xe[ye].width,Xe[ye].height,0,at,ke,Xe[ye].data);for(let Fe=0;Fe<he.length;Fe++){const ot=he[Fe].image[ye].image;lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,0,0,ot.width,ot.height,at,ke,ot.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,gt,ot.width,ot.height,0,at,ke,ot.data)}}else{lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,at,ke,Xe[ye]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,gt,at,ke,Xe[ye]);for(let Fe=0;Fe<he.length;Fe++){const Ge=he[Fe];lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,0,0,at,ke,Ge.image[ye]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,gt,at,ke,Ge.image[ye])}}}E(T)&&_(o.TEXTURE_CUBE_MAP),xe.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function oe(O,T,ne,ve,Ee,xe){const We=f.convert(ne.format,ne.colorSpace),Ie=f.convert(ne.type),He=P(ne.internalFormat,We,Ie,ne.colorSpace),xt=s.get(T),Re=s.get(ne);if(Re.__renderTarget=T,!xt.__hasExternalTextures){const Xe=Math.max(1,T.width>>xe),nt=Math.max(1,T.height>>xe);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?a.texImage3D(Ee,xe,He,Xe,nt,T.depth,0,We,Ie,null):a.texImage2D(Ee,xe,He,Xe,nt,0,We,Ie,null)}a.bindFramebuffer(o.FRAMEBUFFER,O),qe(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,Ee,Re.__webglTexture,0,Je(T)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,Ee,Re.__webglTexture,xe),a.bindFramebuffer(o.FRAMEBUFFER,null)}function se(O,T,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const ve=T.depthTexture,Ee=ve&&ve.isDepthTexture?ve.type:null,xe=U(T.stencilBuffer,Ee),We=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=Je(T);qe(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie,xe,T.width,T.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,xe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,xe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,O)}else{const ve=T.textures;for(let Ee=0;Ee<ve.length;Ee++){const xe=ve[Ee],We=f.convert(xe.format,xe.colorSpace),Ie=f.convert(xe.type),He=P(xe.internalFormat,We,Ie,xe.colorSpace),xt=Je(T);ne&&qe(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,He,T.width,T.height):qe(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,He,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,He,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=s.get(T.depthTexture);ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const Ee=ve.__webglTexture,xe=Je(T);if(T.depthTexture.format===Js)qe(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(T.depthTexture.format===ao)qe(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ne(O){const T=s.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ve=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Ee)};ve.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=ve}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,O)}else if(ne){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=o.createRenderbuffer(),se(T.__webglDepthbuffer[ve],O,!1);else{const Ee=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[ve];o.bindRenderbuffer(o.RENDERBUFFER,xe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,xe)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),se(T.__webglDepthbuffer,O,!1);else{const ve=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,Ee)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(O,T,ne){const ve=s.get(O);T!==void 0&&oe(ve.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&Ne(O)}function Me(O){const T=O.texture,ne=s.get(O),ve=s.get(T);O.addEventListener("dispose",I);const Ee=O.textures,xe=O.isWebGLCubeRenderTarget===!0,We=Ee.length>1;if(We||(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=T.version,d.memory.textures++),xe){ne.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[Ie]=[];for(let He=0;He<T.mipmaps.length;He++)ne.__webglFramebuffer[Ie][He]=o.createFramebuffer()}else ne.__webglFramebuffer[Ie]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)ne.__webglFramebuffer[Ie]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(We)for(let Ie=0,He=Ee.length;Ie<He;Ie++){const xt=s.get(Ee[Ie]);xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&qe(O)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ee.length;Ie++){const He=Ee[Ie];ne.__webglColorRenderbuffer[Ie]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie]);const xt=f.convert(He.format,He.colorSpace),Re=f.convert(He.type),Xe=P(He.internalFormat,xt,Re,He.colorSpace,O.isXRRenderTarget===!0),nt=Je(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,nt,Xe,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),se(ne.__webglDepthRenderbuffer,O,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xe){a.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),je(o.TEXTURE_CUBE_MAP,T);for(let Ie=0;Ie<6;Ie++)if(T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)oe(ne.__webglFramebuffer[Ie][He],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,He);else oe(ne.__webglFramebuffer[Ie],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);E(T)&&_(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(We){for(let Ie=0,He=Ee.length;Ie<He;Ie++){const xt=Ee[Ie],Re=s.get(xt);a.bindTexture(o.TEXTURE_2D,Re.__webglTexture),je(o.TEXTURE_2D,xt),oe(ne.__webglFramebuffer,O,xt,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,0),E(xt)&&_(o.TEXTURE_2D)}a.unbindTexture()}else{let Ie=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ie,ve.__webglTexture),je(Ie,T),T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)oe(ne.__webglFramebuffer[He],O,T,o.COLOR_ATTACHMENT0,Ie,He);else oe(ne.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,Ie,0);E(T)&&_(Ie),a.unbindTexture()}O.depthBuffer&&Ne(O)}function we(O){const T=O.textures;for(let ne=0,ve=T.length;ne<ve;ne++){const Ee=T[ne];if(E(Ee)){const xe=L(O),We=s.get(Ee).__webglTexture;a.bindTexture(xe,We),_(xe),a.unbindTexture()}}}const Ke=[],B=[];function Xt(O){if(O.samples>0){if(qe(O)===!1){const T=O.textures,ne=O.width,ve=O.height;let Ee=o.COLOR_BUFFER_BIT;const xe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=s.get(O),Ie=T.length>1;if(Ie)for(let He=0;He<T.length;He++)a.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let He=0;He<T.length;He++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),Ie){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[He]);const xt=s.get(T[He]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,ne,ve,0,0,ne,ve,Ee,o.NEAREST),p===!0&&(Ke.length=0,B.length=0,Ke.push(o.COLOR_ATTACHMENT0+He),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ke.push(xe),B.push(xe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ke))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ie)for(let He=0;He<T.length;He++){a.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,We.__webglColorRenderbuffer[He]);const xt=s.get(T[He]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,xt,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Je(O){return Math.min(c.maxSamples,O.samples)}function qe(O){const T=s.get(O);return O.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(O){const T=d.render.frame;y.get(O)!==T&&(y.set(O,T),O.update())}function dt(O,T){const ne=O.colorSpace,ve=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==ro&&ne!==sr&&(Nt.getTransfer(ne)===Ft?(ve!==Di||Ee!==Ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),T}function Ye(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(x.width=O.naturalWidth||O.width,x.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(x.width=O.displayWidth,x.height=O.displayHeight):(x.width=O.width,x.height=O.height),x}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.setTexture2D=de,this.setTexture2DArray=k,this.setTexture3D=ae,this.setTextureCube=Z,this.rebindTextures=ge,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=qe}function b2(o,n){function a(s,c=sr){let f;const d=Nt.getTransfer(c);if(s===Ea)return o.UNSIGNED_BYTE;if(s===Rp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Cp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===c_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===o_)return o.BYTE;if(s===l_)return o.SHORT;if(s===ul)return o.UNSIGNED_SHORT;if(s===wp)return o.INT;if(s===Wr)return o.UNSIGNED_INT;if(s===va)return o.FLOAT;if(s===fl)return o.HALF_FLOAT;if(s===u_)return o.ALPHA;if(s===f_)return o.RGB;if(s===Di)return o.RGBA;if(s===d_)return o.LUMINANCE;if(s===h_)return o.LUMINANCE_ALPHA;if(s===Js)return o.DEPTH_COMPONENT;if(s===ao)return o.DEPTH_STENCIL;if(s===p_)return o.RED;if(s===Np)return o.RED_INTEGER;if(s===m_)return o.RG;if(s===Dp)return o.RG_INTEGER;if(s===Up)return o.RGBA_INTEGER;if(s===uu||s===fu||s===du||s===hu)if(d===Ft)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===uu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===uu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Zh)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===ep||s===tp)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===$h||s===ep)return d===Ft?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===tp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===cp||s===up||s===fp||s===dp||s===hp||s===pp||s===mp)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===np)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ip)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ap)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===op)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===up)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mp)return d===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pu||s===gp||s===xp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===pu)return d===Ft?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===g_||s===vp||s===_p||s===yp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===pu)return f.COMPRESSED_RED_RGTC1_EXT;if(s===vp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_p)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===io?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const T2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a,s){if(this.texture===null){const c=new jn,f=n.properties.get(c);f.__webglTexture=a.texture,(a.depthNear!==s.depthNear||a.depthFar!==s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new fr({vertexShader:T2,fragmentShader:A2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ya(new Su(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R2 extends lo{constructor(n,a){super();const s=this;let c=null,f=1,d=null,h="local-floor",p=1,x=null,y=null,m=null,S=null,M=null,R=null;const A=new w2,E=a.getContextAttributes();let _=null,L=null;const P=[],U=[],K=new Ht;let V=null;const I=new _i;I.viewport=new on;const j=new _i;j.viewport=new on;const D=[I,j],N=new Yb;let F=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let G=P[w];return G===void 0&&(G=new bh,P[w]=G),G.getTargetRaySpace()},this.getControllerGrip=function(w){let G=P[w];return G===void 0&&(G=new bh,P[w]=G),G.getGripSpace()},this.getHand=function(w){let G=P[w];return G===void 0&&(G=new bh,P[w]=G),G.getHandSpace()};function te(w){const G=U.indexOf(w.inputSource);if(G===-1)return;const oe=P[G];oe!==void 0&&(oe.update(w.inputSource,w.frame,x||d),oe.dispatchEvent({type:w.type,data:w.inputSource}))}function fe(){c.removeEventListener("select",te),c.removeEventListener("selectstart",te),c.removeEventListener("selectend",te),c.removeEventListener("squeeze",te),c.removeEventListener("squeezestart",te),c.removeEventListener("squeezeend",te),c.removeEventListener("end",fe),c.removeEventListener("inputsourceschange",de);for(let w=0;w<P.length;w++){const G=U[w];G!==null&&(U[w]=null,P[w].disconnect(G))}F=null,le=null,A.reset(),n.setRenderTarget(_),M=null,S=null,m=null,c=null,L=null,ze.stop(),s.isPresenting=!1,n.setPixelRatio(V),n.setSize(K.width,K.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){f=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){h=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||d},this.setReferenceSpace=function(w){x=w},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return m},this.getFrame=function(){return R},this.getSession=function(){return c},this.setSession=async function(w){if(c=w,c!==null){if(_=n.getRenderTarget(),c.addEventListener("select",te),c.addEventListener("selectstart",te),c.addEventListener("selectend",te),c.addEventListener("squeeze",te),c.addEventListener("squeezestart",te),c.addEventListener("squeezeend",te),c.addEventListener("end",fe),c.addEventListener("inputsourceschange",de),E.xrCompatible!==!0&&await a.makeXRCompatible(),V=n.getPixelRatio(),n.getSize(K),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,se=null,Te=null;E.depth&&(Te=E.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,oe=E.stencil?ao:Js,se=E.stencil?io:Wr);const Ne={colorFormat:a.RGBA8,depthFormat:Te,scaleFactor:f};m=new XRWebGLBinding(c,a),S=m.createProjectionLayer(Ne),c.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),L=new Zr(S.textureWidth,S.textureHeight,{format:Di,type:Ea,depthTexture:new C_(S.textureWidth,S.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:E.stencil,colorSpace:n.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const oe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,a,oe),c.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Zr(M.framebufferWidth,M.framebufferHeight,{format:Di,type:Ea,colorSpace:n.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),x=null,d=await c.requestReferenceSpace(h),ze.setContext(c),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(w){for(let G=0;G<w.removed.length;G++){const oe=w.removed[G],se=U.indexOf(oe);se>=0&&(U[se]=null,P[se].disconnect(oe))}for(let G=0;G<w.added.length;G++){const oe=w.added[G];let se=U.indexOf(oe);if(se===-1){for(let Ne=0;Ne<P.length;Ne++)if(Ne>=U.length){U.push(oe),se=Ne;break}else if(U[Ne]===null){U[Ne]=oe,se=Ne;break}if(se===-1)break}const Te=P[se];Te&&Te.connect(oe)}}const k=new ue,ae=new ue;function Z(w,G,oe){k.setFromMatrixPosition(G.matrixWorld),ae.setFromMatrixPosition(oe.matrixWorld);const se=k.distanceTo(ae),Te=G.projectionMatrix.elements,Ne=oe.projectionMatrix.elements,ge=Te[14]/(Te[10]-1),Me=Te[14]/(Te[10]+1),we=(Te[9]+1)/Te[5],Ke=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],Xt=(Ne[8]+1)/Ne[0],Je=ge*B,qe=ge*Xt,Ce=se/(-B+Xt),dt=Ce*-B;if(G.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(dt),w.translateZ(Ce),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),Te[10]===-1)w.projectionMatrix.copy(G.projectionMatrix),w.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Ye=ge+Ce,O=Me+Ce,T=Je-dt,ne=qe+(se-dt),ve=we*Me/O*Ye,Ee=Ke*Me/O*Ye;w.projectionMatrix.makePerspective(T,ne,ve,Ee,Ye,O),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function _e(w,G){G===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(G.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(c===null)return;let G=w.near,oe=w.far;A.texture!==null&&(A.depthNear>0&&(G=A.depthNear),A.depthFar>0&&(oe=A.depthFar)),N.near=j.near=I.near=G,N.far=j.far=I.far=oe,(F!==N.near||le!==N.far)&&(c.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,le=N.far),I.layers.mask=w.layers.mask|2,j.layers.mask=w.layers.mask|4,N.layers.mask=I.layers.mask|j.layers.mask;const se=w.parent,Te=N.cameras;_e(N,se);for(let Ne=0;Ne<Te.length;Ne++)_e(Te[Ne],se);Te.length===2?Z(N,I,j):N.projectionMatrix.copy(I.projectionMatrix),Se(w,N,se)};function Se(w,G,oe){oe===null?w.matrix.copy(G.matrixWorld):(w.matrix.copy(oe.matrixWorld),w.matrix.invert(),w.matrix.multiply(G.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(G.projectionMatrix),w.projectionMatrixInverse.copy(G.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Sp*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(w){p=w,S!==null&&(S.fixedFoveation=w),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=w)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(N)};let be=null;function je(w,G){if(y=G.getViewerPose(x||d),R=G,y!==null){const oe=y.views;M!==null&&(n.setRenderTargetFramebuffer(L,M.framebuffer),n.setRenderTarget(L));let se=!1;oe.length!==N.cameras.length&&(N.cameras.length=0,se=!0);for(let ge=0;ge<oe.length;ge++){const Me=oe[ge];let we=null;if(M!==null)we=M.getViewport(Me);else{const B=m.getViewSubImage(S,Me);we=B.viewport,ge===0&&(n.setRenderTargetTextures(L,B.colorTexture,S.ignoreDepthValues?void 0:B.depthStencilTexture),n.setRenderTarget(L))}let Ke=D[ge];Ke===void 0&&(Ke=new _i,Ke.layers.enable(ge),Ke.viewport=new on,D[ge]=Ke),Ke.matrix.fromArray(Me.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Me.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(we.x,we.y,we.width,we.height),ge===0&&(N.matrix.copy(Ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),se===!0&&N.cameras.push(Ke)}const Te=c.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&m){const ge=m.getDepthInformation(oe[0]);ge&&ge.isValid&&ge.texture&&A.init(n,ge,c.renderState)}}for(let oe=0;oe<P.length;oe++){const se=U[oe],Te=P[oe];se!==null&&Te!==void 0&&Te.update(se,G,x||d)}be&&be(w,G),G.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:G}),R=null}const ze=new N_;ze.setAnimationLoop(je),this.setAnimationLoop=function(w){be=w},this.dispose=function(){}}}const Hr=new Ma,C2=new rn;function N2(o,n){function a(E,_){E.matrixAutoUpdate===!0&&E.updateMatrix(),_.value.copy(E.matrix)}function s(E,_){_.color.getRGB(E.fogColor.value,b_(o)),_.isFog?(E.fogNear.value=_.near,E.fogFar.value=_.far):_.isFogExp2&&(E.fogDensity.value=_.density)}function c(E,_,L,P,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?f(E,_):_.isMeshToonMaterial?(f(E,_),m(E,_)):_.isMeshPhongMaterial?(f(E,_),y(E,_)):_.isMeshStandardMaterial?(f(E,_),S(E,_),_.isMeshPhysicalMaterial&&M(E,_,U)):_.isMeshMatcapMaterial?(f(E,_),R(E,_)):_.isMeshDepthMaterial?f(E,_):_.isMeshDistanceMaterial?(f(E,_),A(E,_)):_.isMeshNormalMaterial?f(E,_):_.isLineBasicMaterial?(d(E,_),_.isLineDashedMaterial&&h(E,_)):_.isPointsMaterial?p(E,_,L,P):_.isSpriteMaterial?x(E,_):_.isShadowMaterial?(E.color.value.copy(_.color),E.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function f(E,_){E.opacity.value=_.opacity,_.color&&E.diffuse.value.copy(_.color),_.emissive&&E.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(E.map.value=_.map,a(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,a(_.alphaMap,E.alphaMapTransform)),_.bumpMap&&(E.bumpMap.value=_.bumpMap,a(_.bumpMap,E.bumpMapTransform),E.bumpScale.value=_.bumpScale,_.side===Kn&&(E.bumpScale.value*=-1)),_.normalMap&&(E.normalMap.value=_.normalMap,a(_.normalMap,E.normalMapTransform),E.normalScale.value.copy(_.normalScale),_.side===Kn&&E.normalScale.value.negate()),_.displacementMap&&(E.displacementMap.value=_.displacementMap,a(_.displacementMap,E.displacementMapTransform),E.displacementScale.value=_.displacementScale,E.displacementBias.value=_.displacementBias),_.emissiveMap&&(E.emissiveMap.value=_.emissiveMap,a(_.emissiveMap,E.emissiveMapTransform)),_.specularMap&&(E.specularMap.value=_.specularMap,a(_.specularMap,E.specularMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest);const L=n.get(_),P=L.envMap,U=L.envMapRotation;P&&(E.envMap.value=P,Hr.copy(U),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),E.envMapRotation.value.setFromMatrix4(C2.makeRotationFromEuler(Hr)),E.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=_.reflectivity,E.ior.value=_.ior,E.refractionRatio.value=_.refractionRatio),_.lightMap&&(E.lightMap.value=_.lightMap,E.lightMapIntensity.value=_.lightMapIntensity,a(_.lightMap,E.lightMapTransform)),_.aoMap&&(E.aoMap.value=_.aoMap,E.aoMapIntensity.value=_.aoMapIntensity,a(_.aoMap,E.aoMapTransform))}function d(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,_.map&&(E.map.value=_.map,a(_.map,E.mapTransform))}function h(E,_){E.dashSize.value=_.dashSize,E.totalSize.value=_.dashSize+_.gapSize,E.scale.value=_.scale}function p(E,_,L,P){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.size.value=_.size*L,E.scale.value=P*.5,_.map&&(E.map.value=_.map,a(_.map,E.uvTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,a(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function x(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.rotation.value=_.rotation,_.map&&(E.map.value=_.map,a(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,a(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function y(E,_){E.specular.value.copy(_.specular),E.shininess.value=Math.max(_.shininess,1e-4)}function m(E,_){_.gradientMap&&(E.gradientMap.value=_.gradientMap)}function S(E,_){E.metalness.value=_.metalness,_.metalnessMap&&(E.metalnessMap.value=_.metalnessMap,a(_.metalnessMap,E.metalnessMapTransform)),E.roughness.value=_.roughness,_.roughnessMap&&(E.roughnessMap.value=_.roughnessMap,a(_.roughnessMap,E.roughnessMapTransform)),_.envMap&&(E.envMapIntensity.value=_.envMapIntensity)}function M(E,_,L){E.ior.value=_.ior,_.sheen>0&&(E.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),E.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(E.sheenColorMap.value=_.sheenColorMap,a(_.sheenColorMap,E.sheenColorMapTransform)),_.sheenRoughnessMap&&(E.sheenRoughnessMap.value=_.sheenRoughnessMap,a(_.sheenRoughnessMap,E.sheenRoughnessMapTransform))),_.clearcoat>0&&(E.clearcoat.value=_.clearcoat,E.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(E.clearcoatMap.value=_.clearcoatMap,a(_.clearcoatMap,E.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,a(_.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(E.clearcoatNormalMap.value=_.clearcoatNormalMap,a(_.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&E.clearcoatNormalScale.value.negate())),_.dispersion>0&&(E.dispersion.value=_.dispersion),_.iridescence>0&&(E.iridescence.value=_.iridescence,E.iridescenceIOR.value=_.iridescenceIOR,E.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(E.iridescenceMap.value=_.iridescenceMap,a(_.iridescenceMap,E.iridescenceMapTransform)),_.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=_.iridescenceThicknessMap,a(_.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),_.transmission>0&&(E.transmission.value=_.transmission,E.transmissionSamplerMap.value=L.texture,E.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(E.transmissionMap.value=_.transmissionMap,a(_.transmissionMap,E.transmissionMapTransform)),E.thickness.value=_.thickness,_.thicknessMap&&(E.thicknessMap.value=_.thicknessMap,a(_.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=_.attenuationDistance,E.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(E.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(E.anisotropyMap.value=_.anisotropyMap,a(_.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=_.specularIntensity,E.specularColor.value.copy(_.specularColor),_.specularColorMap&&(E.specularColorMap.value=_.specularColorMap,a(_.specularColorMap,E.specularColorMapTransform)),_.specularIntensityMap&&(E.specularIntensityMap.value=_.specularIntensityMap,a(_.specularIntensityMap,E.specularIntensityMapTransform))}function R(E,_){_.matcap&&(E.matcap.value=_.matcap)}function A(E,_){const L=n.get(_).light;E.referencePosition.value.setFromMatrixPosition(L.matrixWorld),E.nearDistance.value=L.shadow.camera.near,E.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function D2(o,n,a,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,P){const U=P.program;s.uniformBlockBinding(L,U)}function x(L,P){let U=c[L.id];U===void 0&&(R(L),U=y(L),c[L.id]=U,L.addEventListener("dispose",E));const K=P.program;s.updateUBOMapping(L,K);const V=n.render.frame;f[L.id]!==V&&(S(L),f[L.id]=V)}function y(L){const P=m();L.__bindingPointIndex=P;const U=o.createBuffer(),K=L.__size,V=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,K,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function m(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const P=c[L.id],U=L.uniforms,K=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let V=0,I=U.length;V<I;V++){const j=Array.isArray(U[V])?U[V]:[U[V]];for(let D=0,N=j.length;D<N;D++){const F=j[D];if(M(F,V,D,K)===!0){const le=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let fe=0;for(let de=0;de<te.length;de++){const k=te[de],ae=A(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,le+fe,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,fe),fe+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,P,U,K){const V=L.value,I=P+"_"+U;if(K[I]===void 0)return typeof V=="number"||typeof V=="boolean"?K[I]=V:K[I]=V.clone(),!0;{const j=K[I];if(typeof V=="number"||typeof V=="boolean"){if(j!==V)return K[I]=V,!0}else if(j.equals(V)===!1)return j.copy(V),!0}return!1}function R(L){const P=L.uniforms;let U=0;const K=16;for(let I=0,j=P.length;I<j;I++){const D=Array.isArray(P[I])?P[I]:[P[I]];for(let N=0,F=D.length;N<F;N++){const le=D[N],te=Array.isArray(le.value)?le.value:[le.value];for(let fe=0,de=te.length;fe<de;fe++){const k=te[fe],ae=A(k),Z=U%K,_e=Z%ae.boundary,Se=Z+_e;U+=_e,Se!==0&&K-Se<ae.storage&&(U+=K-Se),le.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=U,U+=ae.storage}}}const V=U%K;return V>0&&(U+=K-V),L.__size=U,L.__cache={},this}function A(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function E(L){const P=L.target;P.removeEventListener("dispose",E);const U=d.indexOf(P.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(c[P.id]),delete c[P.id],delete f[P.id]}function _(){for(const L in c)o.deleteBuffer(c[L]);d=[],c={},f={}}return{bind:p,update:x,dispose:_}}class U2{constructor(n={}){const{canvas:a=fb(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:x=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const R=new Uint32Array(4),A=new Int32Array(4);let E=null,_=null;const L=[],P=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=cr,this.toneMappingExposure=1;const U=this;let K=!1,V=0,I=0,j=null,D=-1,N=null;const F=new on,le=new on;let te=null;const fe=new Lt(0);let de=0,k=a.width,ae=a.height,Z=1,_e=null,Se=null;const be=new on(0,0,k,ae),je=new on(0,0,k,ae);let ze=!1;const w=new w_;let G=!1,oe=!1;this.transmissionResolutionScale=1;const se=new rn,Te=new rn,Ne=new ue,ge=new on,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function Ke(){return j===null?Z:1}let B=s;function Xt(C,Q){return a.getContext(C,Q)}try{const C={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:x,powerPreference:y,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Ap}`),a.addEventListener("webglcontextlost",ye,!1),a.addEventListener("webglcontextrestored",Fe,!1),a.addEventListener("webglcontextcreationerror",Ge,!1),B===null){const Q="webgl2";if(B=Xt(Q,C),B===null)throw Xt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Je,qe,Ce,dt,Ye,O,T,ne,ve,Ee,xe,We,Ie,He,xt,Re,Xe,nt,at,ke,gt,lt,It,X;function Be(){Je=new VA(B),Je.init(),lt=new b2(B,Je),qe=new zA(B,Je,n,lt),Ce=new E2(B,Je),qe.reverseDepthBuffer&&S&&Ce.buffers.depth.setReversed(!0),dt=new XA(B),Ye=new c2,O=new M2(B,Je,Ce,Ye,qe,lt,dt),T=new IA(U),ne=new GA(U),ve=new Qb(B),It=new LA(B,ve),Ee=new jA(B,ve,dt,It),xe=new YA(B,Ee,ve,dt),at=new qA(B,qe,O),Re=new PA(Ye),We=new l2(U,T,ne,Je,qe,It,Re),Ie=new N2(U,Ye),He=new f2,xt=new x2(Je),nt=new UA(U,T,ne,Ce,xe,M,p),Xe=new y2(U,xe,qe),X=new D2(B,dt,qe,Ce),ke=new OA(B,Je,dt),gt=new kA(B,Je,dt),dt.programs=We.programs,U.capabilities=qe,U.extensions=Je,U.properties=Ye,U.renderLists=He,U.shadowMap=Xe,U.state=Ce,U.info=dt}Be();const he=new R2(U,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(k,ae,!1))},this.getSize=function(C){return C.set(k,ae)},this.setSize=function(C,Q,re=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,ae=Q,a.width=Math.floor(C*Z),a.height=Math.floor(Q*Z),re===!0&&(a.style.width=C+"px",a.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(k*Z,ae*Z).floor()},this.setDrawingBufferSize=function(C,Q,re){k=C,ae=Q,Z=re,a.width=Math.floor(C*re),a.height=Math.floor(Q*re),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(be)},this.setViewport=function(C,Q,re,ce){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,Q,re,ce),Ce.viewport(F.copy(be).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(je)},this.setScissor=function(C,Q,re,ce){C.isVector4?je.set(C.x,C.y,C.z,C.w):je.set(C,Q,re,ce),Ce.scissor(le.copy(je).multiplyScalar(Z).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(C){Ce.setScissorTest(ze=C)},this.setOpaqueSort=function(C){_e=C},this.setTransparentSort=function(C){Se=C},this.getClearColor=function(C){return C.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,re=!0){let ce=0;if(C){let J=!1;if(j!==null){const Ae=j.texture.format;J=Ae===Up||Ae===Dp||Ae===Np}if(J){const Ae=j.texture.type,Ue=Ae===Ea||Ae===Wr||Ae===ul||Ae===io||Ae===Rp||Ae===Cp,De=nt.getClearColor(),Oe=nt.getClearAlpha(),tt=De.r,rt=De.g,et=De.b;Ue?(R[0]=tt,R[1]=rt,R[2]=et,R[3]=Oe,B.clearBufferuiv(B.COLOR,0,R)):(A[0]=tt,A[1]=rt,A[2]=et,A[3]=Oe,B.clearBufferiv(B.COLOR,0,A))}else ce|=B.COLOR_BUFFER_BIT}Q&&(ce|=B.DEPTH_BUFFER_BIT),re&&(ce|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",ye,!1),a.removeEventListener("webglcontextrestored",Fe,!1),a.removeEventListener("webglcontextcreationerror",Ge,!1),nt.dispose(),He.dispose(),xt.dispose(),Ye.dispose(),T.dispose(),ne.dispose(),xe.dispose(),It.dispose(),X.dispose(),We.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ln),he.removeEventListener("sessionend",xl),Yi.stop()};function ye(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const C=dt.autoReset,Q=Xe.enabled,re=Xe.autoUpdate,ce=Xe.needsUpdate,J=Xe.type;Be(),dt.autoReset=C,Xe.enabled=Q,Xe.autoUpdate=re,Xe.needsUpdate=ce,Xe.type=J}function Ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ot(C){const Q=C.target;Q.removeEventListener("dispose",ot),Jt(Q)}function Jt(C){vn(C),Ye.remove(C)}function vn(C){const Q=Ye.get(C).programs;Q!==void 0&&(Q.forEach(function(re){We.releaseProgram(re)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,re,ce,J,Ae){Q===null&&(Q=Me);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,De=Mu(C,Q,re,ce,J);Ce.setMaterial(ce,Ue);let Oe=re.index,tt=1;if(ce.wireframe===!0){if(Oe=Ee.getWireframeAttribute(re),Oe===void 0)return;tt=2}const rt=re.drawRange,et=re.attributes.position;let Tt=rt.start*tt,Rt=(rt.start+rt.count)*tt;Ae!==null&&(Tt=Math.max(Tt,Ae.start*tt),Rt=Math.min(Rt,(Ae.start+Ae.count)*tt)),Oe!==null?(Tt=Math.max(Tt,0),Rt=Math.min(Rt,Oe.count)):et!=null&&(Tt=Math.max(Tt,0),Rt=Math.min(Rt,et.count));const qt=Rt-Tt;if(qt<0||qt===1/0)return;It.setup(J,ce,De,re,Oe);let Gt,vt=ke;if(Oe!==null&&(Gt=ve.get(Oe),vt=gt,vt.setIndex(Gt)),J.isMesh)ce.wireframe===!0?(Ce.setLineWidth(ce.wireframeLinewidth*Ke()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(J.isLine){let Qe=ce.linewidth;Qe===void 0&&(Qe=1),Ce.setLineWidth(Qe*Ke()),J.isLineSegments?vt.setMode(B.LINES):J.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else J.isPoints?vt.setMode(B.POINTS):J.isSprite&&vt.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))vt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,$t=J._multiDrawCounts,St=J._multiDrawCount,yn=Oe?ve.get(Oe).bytesPerElement:1,Kt=Ye.get(ce).currentProgram.getUniforms();for(let On=0;On<St;On++)Kt.setValue(B,"_gl_DrawID",On),vt.render(Qe[On]/yn,$t[On])}else if(J.isInstancedMesh)vt.renderInstances(Tt,qt,J.count);else if(re.isInstancedBufferGeometry){const Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,$t=Math.min(re.instanceCount,Qe);vt.renderInstances(Tt,qt,$t)}else vt.render(Tt,qt)};function bt(C,Q,re){C.transparent===!0&&C.side===xa&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,Zi(C,Q,re),C.side=ur,C.needsUpdate=!0,Zi(C,Q,re),C.side=xa):Zi(C,Q,re)}this.compile=function(C,Q,re=null){re===null&&(re=C),_=xt.get(re),_.init(Q),P.push(_),re.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),C!==re&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const ce=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const De=Ae[Ue];bt(De,re,J),ce.add(De)}else bt(Ae,re,J),ce.add(Ae)}),_=P.pop(),ce},this.compileAsync=function(C,Q,re=null){const ce=this.compile(C,Q,re);return new Promise(J=>{function Ae(){if(ce.forEach(function(Ue){Ye.get(Ue).currentProgram.isReady()&&ce.delete(Ue)}),ce.size===0){J(C);return}setTimeout(Ae,10)}Je.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Zt=null;function _n(C){Zt&&Zt(C)}function Ln(){Yi.stop()}function xl(){Yi.start()}const Yi=new N_;Yi.setAnimationLoop(_n),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(C){Zt=C,he.setAnimationLoop(C),C===null?Yi.stop():Yi.start()},he.addEventListener("sessionstart",Ln),he.addEventListener("sessionend",xl),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(Q),Q=he.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,Q,j),_=xt.get(C,P.length),_.init(Q),P.push(_),Te.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),w.setFromProjectionMatrix(Te),oe=this.localClippingEnabled,G=Re.init(this.clippingPlanes,oe),E=He.get(C,L.length),E.init(),L.push(E),he.enabled===!0&&he.isPresenting===!0){const Ae=U.xr.getDepthSensingMesh();Ae!==null&&uo(Ae,Q,-1/0,U.sortObjects)}uo(C,Q,0,U.sortObjects),E.finish(),U.sortObjects===!0&&E.sort(_e,Se),we=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,we&&nt.addToRenderList(E,C),this.info.render.frame++,G===!0&&Re.beginShadows();const re=_.state.shadowsArray;Xe.render(re,C,Q),G===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=E.opaque,J=E.transmissive;if(_.setupLights(),Q.isArrayCamera){const Ae=Q.cameras;if(J.length>0)for(let Ue=0,De=Ae.length;Ue<De;Ue++){const Oe=Ae[Ue];hr(ce,J,C,Oe)}we&&nt.render(C);for(let Ue=0,De=Ae.length;Ue<De;Ue++){const Oe=Ae[Ue];dr(E,C,Oe,Oe.viewport)}}else J.length>0&&hr(ce,J,C,Q),we&&nt.render(C),dr(E,C,Q);j!==null&&I===0&&(O.updateMultisampleRenderTarget(j),O.updateRenderTargetMipmap(j)),C.isScene===!0&&C.onAfterRender(U,C,Q),It.resetDefaultState(),D=-1,N=null,P.pop(),P.length>0?(_=P[P.length-1],G===!0&&Re.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?E=L[L.length-1]:E=null};function uo(C,Q,re,ce){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||w.intersectsSprite(C)){ce&&ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);const Ue=xe.update(C),De=C.material;De.visible&&E.push(C,Ue,De,re,ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||w.intersectsObject(C))){const Ue=xe.update(C),De=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ge.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ge.copy(Ue.boundingSphere.center)),ge.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Oe=Ue.groups;for(let tt=0,rt=Oe.length;tt<rt;tt++){const et=Oe[tt],Tt=De[et.materialIndex];Tt&&Tt.visible&&E.push(C,Ue,Tt,re,ge.z,et)}}else De.visible&&E.push(C,Ue,De,re,ge.z,null)}}const Ae=C.children;for(let Ue=0,De=Ae.length;Ue<De;Ue++)uo(Ae[Ue],Q,re,ce)}function dr(C,Q,re,ce){const J=C.opaque,Ae=C.transmissive,Ue=C.transparent;_.setupLightsView(re),G===!0&&Re.setGlobalState(U.clippingPlanes,re),ce&&Ce.viewport(F.copy(ce)),J.length>0&&Wi(J,Q,re),Ae.length>0&&Wi(Ae,Q,re),Ue.length>0&&Wi(Ue,Q,re),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function hr(C,Q,re,ce){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ce.id]===void 0&&(_.state.transmissionRenderTarget[ce.id]=new Zr(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?fl:Ea,minFilter:qr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[ce.id],Ue=ce.viewport||F;Ae.setSize(Ue.z*U.transmissionResolutionScale,Ue.w*U.transmissionResolutionScale);const De=U.getRenderTarget();U.setRenderTarget(Ae),U.getClearColor(fe),de=U.getClearAlpha(),de<1&&U.setClearColor(16777215,.5),U.clear(),we&&nt.render(re);const Oe=U.toneMapping;U.toneMapping=cr;const tt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),_.setupLightsView(ce),G===!0&&Re.setGlobalState(U.clippingPlanes,ce),Wi(C,re,ce),O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae),Je.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let et=0,Tt=Q.length;et<Tt;et++){const Rt=Q[et],qt=Rt.object,Gt=Rt.geometry,vt=Rt.material,Qe=Rt.group;if(vt.side===xa&&qt.layers.test(ce.layers)){const $t=vt.side;vt.side=Kn,vt.needsUpdate=!0,Li(qt,re,ce,Gt,vt,Qe),vt.side=$t,vt.needsUpdate=!0,rt=!0}}rt===!0&&(O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae))}U.setRenderTarget(De),U.setClearColor(fe,de),tt!==void 0&&(ce.viewport=tt),U.toneMapping=Oe}function Wi(C,Q,re){const ce=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Ae=C.length;J<Ae;J++){const Ue=C[J],De=Ue.object,Oe=Ue.geometry,tt=ce===null?Ue.material:ce,rt=Ue.group;De.layers.test(re.layers)&&Li(De,Q,re,Oe,tt,rt)}}function Li(C,Q,re,ce,J,Ae){C.onBeforeRender(U,Q,re,ce,J,Ae),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(U,Q,re,ce,C,Ae),J.transparent===!0&&J.side===xa&&J.forceSinglePass===!1?(J.side=Kn,J.needsUpdate=!0,U.renderBufferDirect(re,Q,ce,J,C,Ae),J.side=ur,J.needsUpdate=!0,U.renderBufferDirect(re,Q,ce,J,C,Ae),J.side=xa):U.renderBufferDirect(re,Q,ce,J,C,Ae),C.onAfterRender(U,Q,re,ce,J,Ae)}function Zi(C,Q,re){Q.isScene!==!0&&(Q=Me);const ce=Ye.get(C),J=_.state.lights,Ae=_.state.shadowsArray,Ue=J.state.version,De=We.getParameters(C,J.state,Ae,Q,re),Oe=We.getProgramCacheKey(De);let tt=ce.programs;ce.environment=C.isMeshStandardMaterial?Q.environment:null,ce.fog=Q.fog,ce.envMap=(C.isMeshStandardMaterial?ne:T).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",ot),tt=new Map,ce.programs=tt);let rt=tt.get(Oe);if(rt!==void 0){if(ce.currentProgram===rt&&ce.lightsStateVersion===Ue)return fo(C,De),rt}else De.uniforms=We.getUniforms(C),C.onBeforeCompile(De,U),rt=We.acquireProgram(De,Oe),tt.set(Oe,rt),ce.uniforms=De.uniforms;const et=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Re.uniform),fo(C,De),ce.needsLights=ho(C),ce.lightsStateVersion=Ue,ce.needsLights&&(et.ambientLightColor.value=J.state.ambient,et.lightProbe.value=J.state.probe,et.directionalLights.value=J.state.directional,et.directionalLightShadows.value=J.state.directionalShadow,et.spotLights.value=J.state.spot,et.spotLightShadows.value=J.state.spotShadow,et.rectAreaLights.value=J.state.rectArea,et.ltc_1.value=J.state.rectAreaLTC1,et.ltc_2.value=J.state.rectAreaLTC2,et.pointLights.value=J.state.point,et.pointLightShadows.value=J.state.pointShadow,et.hemisphereLights.value=J.state.hemi,et.directionalShadowMap.value=J.state.directionalShadowMap,et.directionalShadowMatrix.value=J.state.directionalShadowMatrix,et.spotShadowMap.value=J.state.spotShadowMap,et.spotLightMatrix.value=J.state.spotLightMatrix,et.spotLightMap.value=J.state.spotLightMap,et.pointShadowMap.value=J.state.pointShadowMap,et.pointShadowMatrix.value=J.state.pointShadowMatrix),ce.currentProgram=rt,ce.uniformsList=null,rt}function Ta(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=mu.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function fo(C,Q){const re=Ye.get(C);re.outputColorSpace=Q.outputColorSpace,re.batching=Q.batching,re.batchingColor=Q.batchingColor,re.instancing=Q.instancing,re.instancingColor=Q.instancingColor,re.instancingMorph=Q.instancingMorph,re.skinning=Q.skinning,re.morphTargets=Q.morphTargets,re.morphNormals=Q.morphNormals,re.morphColors=Q.morphColors,re.morphTargetsCount=Q.morphTargetsCount,re.numClippingPlanes=Q.numClippingPlanes,re.numIntersection=Q.numClipIntersection,re.vertexAlphas=Q.vertexAlphas,re.vertexTangents=Q.vertexTangents,re.toneMapping=Q.toneMapping}function Mu(C,Q,re,ce,J){Q.isScene!==!0&&(Q=Me),O.resetTextureUnits();const Ae=Q.fog,Ue=ce.isMeshStandardMaterial?Q.environment:null,De=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ro,Oe=(ce.isMeshStandardMaterial?ne:T).get(ce.envMap||Ue),tt=ce.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,rt=!!re.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),et=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,Rt=!!re.morphAttributes.color;let qt=cr;ce.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(qt=U.toneMapping);const Gt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,vt=Gt!==void 0?Gt.length:0,Qe=Ye.get(ce),$t=_.state.lights;if(G===!0&&(oe===!0||C!==N)){const Tn=C===N&&ce.id===D;Re.setState(ce,C,Tn)}let St=!1;ce.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==$t.state.version||Qe.outputColorSpace!==De||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==Oe||ce.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Re.numPlanes||Qe.numIntersection!==Re.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==rt||Qe.morphTargets!==et||Qe.morphNormals!==Tt||Qe.morphColors!==Rt||Qe.toneMapping!==qt||Qe.morphTargetsCount!==vt)&&(St=!0):(St=!0,Qe.__version=ce.version);let yn=Qe.currentProgram;St===!0&&(yn=Zi(ce,Q,J));let Kt=!1,On=!1,Aa=!1;const Vt=yn.getUniforms(),ln=Qe.uniforms;if(Ce.useProgram(yn.program)&&(Kt=!0,On=!0,Aa=!0),ce.id!==D&&(D=ce.id,On=!0),Kt||N!==C){Ce.buffers.depth.getReversed()?(se.copy(C.projectionMatrix),hb(se),pb(se),Vt.setValue(B,"projectionMatrix",se)):Vt.setValue(B,"projectionMatrix",C.projectionMatrix),Vt.setValue(B,"viewMatrix",C.matrixWorldInverse);const An=Vt.map.cameraPosition;An!==void 0&&An.setValue(B,Ne.setFromMatrixPosition(C.matrixWorld)),qe.logarithmicDepthBuffer&&Vt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Vt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),N!==C&&(N=C,On=!0,Aa=!0)}if(J.isSkinnedMesh){Vt.setOptional(B,J,"bindMatrix"),Vt.setOptional(B,J,"bindMatrixInverse");const Tn=J.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Vt.setValue(B,"boneTexture",Tn.boneTexture,O))}J.isBatchedMesh&&(Vt.setOptional(B,J,"batchingTexture"),Vt.setValue(B,"batchingTexture",J._matricesTexture,O),Vt.setOptional(B,J,"batchingIdTexture"),Vt.setValue(B,"batchingIdTexture",J._indirectTexture,O),Vt.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&Vt.setValue(B,"batchingColorTexture",J._colorsTexture,O));const pn=re.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&at.update(J,re,yn),(On||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,Vt.setValue(B,"receiveShadow",J.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(ln.envMap.value=Oe,ln.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Q.environment!==null&&(ln.envMapIntensity.value=Q.environmentIntensity),On&&(Vt.setValue(B,"toneMappingExposure",U.toneMappingExposure),Qe.needsLights&&vl(ln,Aa),Ae&&ce.fog===!0&&Ie.refreshFogUniforms(ln,Ae),Ie.refreshMaterialUniforms(ln,ce,Z,ae,_.state.transmissionRenderTarget[C.id]),mu.upload(B,Ta(Qe),ln,O)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(mu.upload(B,Ta(Qe),ln,O),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Vt.setValue(B,"center",J.center),Vt.setValue(B,"modelViewMatrix",J.modelViewMatrix),Vt.setValue(B,"normalMatrix",J.normalMatrix),Vt.setValue(B,"modelMatrix",J.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Tn=ce.uniformsGroups;for(let An=0,Kr=Tn.length;An<Kr;An++){const Ki=Tn[An];X.update(Ki,yn),X.bind(Ki,yn)}}return yn}function vl(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function ho(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,Q,re){Ye.get(C.texture).__webglTexture=Q,Ye.get(C.depthTexture).__webglTexture=re;const ce=Ye.get(C);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=re===void 0,ce.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Q){const re=Ye.get(C);re.__webglFramebuffer=Q,re.__useDefaultFramebuffer=Q===void 0};const pr=B.createFramebuffer();this.setRenderTarget=function(C,Q=0,re=0){j=C,V=Q,I=re;let ce=!0,J=null,Ae=!1,Ue=!1;if(C){const Oe=Ye.get(C);if(Oe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(B.FRAMEBUFFER,null),ce=!1;else if(Oe.__webglFramebuffer===void 0)O.setupRenderTarget(C);else if(Oe.__hasExternalTextures)O.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&Ye.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ue=!0);const rt=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[Q])?J=rt[Q][re]:J=rt[Q],Ae=!0):C.samples>0&&O.useMultisampledRTT(C)===!1?J=Ye.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?J=rt[re]:J=rt,F.copy(C.viewport),le.copy(C.scissor),te=C.scissorTest}else F.copy(be).multiplyScalar(Z).floor(),le.copy(je).multiplyScalar(Z).floor(),te=ze;if(re!==0&&(J=pr),Ce.bindFramebuffer(B.FRAMEBUFFER,J)&&ce&&Ce.drawBuffers(C,J),Ce.viewport(F),Ce.scissor(le),Ce.setScissorTest(te),Ae){const Oe=Ye.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Oe.__webglTexture,re)}else if(Ue){const Oe=Ye.get(C.texture),tt=Q;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,re,tt)}else if(C!==null&&re!==0){const Oe=Ye.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,re)}D=-1},this.readRenderTargetPixels=function(C,Q,re,ce,J,Ae,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue]),De){Ce.bindFramebuffer(B.FRAMEBUFFER,De);try{const Oe=C.texture,tt=Oe.format,rt=Oe.type;if(!qe.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ce&&re>=0&&re<=C.height-J&&B.readPixels(Q,re,ce,J,lt.convert(tt),lt.convert(rt),Ae)}finally{const Oe=j!==null?Ye.get(j).__webglFramebuffer:null;Ce.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(C,Q,re,ce,J,Ae,Ue){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue]),De){const Oe=C.texture,tt=Oe.format,rt=Oe.type;if(!qe.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=C.width-ce&&re>=0&&re<=C.height-J){Ce.bindFramebuffer(B.FRAMEBUFFER,De);const et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.bufferData(B.PIXEL_PACK_BUFFER,Ae.byteLength,B.STREAM_READ),B.readPixels(Q,re,ce,J,lt.convert(tt),lt.convert(rt),0);const Tt=j!==null?Ye.get(j).__webglFramebuffer:null;Ce.bindFramebuffer(B.FRAMEBUFFER,Tt);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await db(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ae),B.deleteBuffer(et),B.deleteSync(Rt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Q=null,re=0){C.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1]);const ce=Math.pow(2,-re),J=Math.floor(C.image.width*ce),Ae=Math.floor(C.image.height*ce),Ue=Q!==null?Q.x:0,De=Q!==null?Q.y:0;O.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,re,0,0,Ue,De,J,Ae),Ce.unbindTexture()};const bu=B.createFramebuffer(),_l=B.createFramebuffer();this.copyTextureToTexture=function(C,Q,re=null,ce=null,J=0,Ae=null){C.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,C=arguments[1],Q=arguments[2],Ae=arguments[3]||0,re=null),Ae===null&&(J!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=J,J=0):Ae=0);let Ue,De,Oe,tt,rt,et,Tt,Rt,qt;const Gt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(re!==null)Ue=re.max.x-re.min.x,De=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,rt=re.min.y,et=re.isBox3?re.min.z:0;else{const pn=Math.pow(2,-J);Ue=Math.floor(Gt.width*pn),De=Math.floor(Gt.height*pn),C.isDataArrayTexture?Oe=Gt.depth:C.isData3DTexture?Oe=Math.floor(Gt.depth*pn):Oe=1,tt=0,rt=0,et=0}ce!==null?(Tt=ce.x,Rt=ce.y,qt=ce.z):(Tt=0,Rt=0,qt=0);const vt=lt.convert(Q.format),Qe=lt.convert(Q.type);let $t;Q.isData3DTexture?(O.setTexture3D(Q,0),$t=B.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(O.setTexture2DArray(Q,0),$t=B.TEXTURE_2D_ARRAY):(O.setTexture2D(Q,0),$t=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment);const St=B.getParameter(B.UNPACK_ROW_LENGTH),yn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Kt=B.getParameter(B.UNPACK_SKIP_PIXELS),On=B.getParameter(B.UNPACK_SKIP_ROWS),Aa=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,et);const Vt=C.isDataArrayTexture||C.isData3DTexture,ln=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const pn=Ye.get(C),Tn=Ye.get(Q),An=Ye.get(pn.__renderTarget),Kr=Ye.get(Tn.__renderTarget);Ce.bindFramebuffer(B.READ_FRAMEBUFFER,An.__webglFramebuffer),Ce.bindFramebuffer(B.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let Ki=0;Ki<Oe;Ki++)Vt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ye.get(C).__webglTexture,J,et+Ki),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ye.get(Q).__webglTexture,Ae,qt+Ki)),B.blitFramebuffer(tt,rt,Ue,De,Tt,Rt,Ue,De,B.DEPTH_BUFFER_BIT,B.NEAREST);Ce.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||Ye.has(C)){const pn=Ye.get(C),Tn=Ye.get(Q);Ce.bindFramebuffer(B.READ_FRAMEBUFFER,bu),Ce.bindFramebuffer(B.DRAW_FRAMEBUFFER,_l);for(let An=0;An<Oe;An++)Vt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,J,et+An):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,J),ln?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tn.__webglTexture,Ae,qt+An):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tn.__webglTexture,Ae),J!==0?B.blitFramebuffer(tt,rt,Ue,De,Tt,Rt,Ue,De,B.COLOR_BUFFER_BIT,B.NEAREST):ln?B.copyTexSubImage3D($t,Ae,Tt,Rt,qt+An,tt,rt,Ue,De):B.copyTexSubImage2D($t,Ae,Tt,Rt,tt,rt,Ue,De);Ce.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ln?C.isDataTexture||C.isData3DTexture?B.texSubImage3D($t,Ae,Tt,Rt,qt,Ue,De,Oe,vt,Qe,Gt.data):Q.isCompressedArrayTexture?B.compressedTexSubImage3D($t,Ae,Tt,Rt,qt,Ue,De,Oe,vt,Gt.data):B.texSubImage3D($t,Ae,Tt,Rt,qt,Ue,De,Oe,vt,Qe,Gt):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ae,Tt,Rt,Ue,De,vt,Qe,Gt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ae,Tt,Rt,Gt.width,Gt.height,vt,Gt.data):B.texSubImage2D(B.TEXTURE_2D,Ae,Tt,Rt,Ue,De,vt,Qe,Gt);B.pixelStorei(B.UNPACK_ROW_LENGTH,St),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,On),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Aa),Ae===0&&Q.generateMipmaps&&B.generateMipmap($t),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,Q,re=null,ce=null,J=0){return C.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,ce=arguments[1]||null,C=arguments[2],Q=arguments[3],J=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Q,re,ce,J)},this.initRenderTarget=function(C){Ye.get(C).__webglFramebuffer===void 0&&O.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){V=0,I=0,j=null,Ce.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorspace=Nt._getDrawingBufferColorSpace(n),a.unpackColorSpace=Nt._getUnpackColorSpace()}}const L2=({scrollProgress:o=0,interactive:n=!0})=>{const a=mt.useRef(null),[s,c]=mt.useState(!0);return mt.useEffect(()=>{const f=a.current;if(!f)return;let d=!1;try{const ze=document.createElement("canvas");d=!!(window.WebGLRenderingContext&&(ze.getContext("webgl")||ze.getContext("experimental-webgl")))}catch{d=!1}if(!d){c(!1);return}const h=new Fb;h.fog=new Pp(328965,.08);const p=f.clientWidth||window.innerWidth,x=f.clientHeight||window.innerHeight,y=new _i(45,p/x,.1,100);y.position.set(0,.45,4.6);let m;try{m=new U2({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(ze){console.warn("WebGL initialization failed, falling back:",ze),c(!1);return}m.setSize(p,x),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setClearColor(0,0),f.appendChild(m.domElement);const S=window.innerWidth<768,M=S?14e3:28e3,R=new Float32Array(M*3),A=new Float32Array(M*3),E=new Float32Array(M*3),_=new Float32Array(M),L=new Float32Array(M*3),P=new Float32Array(M);let U=0;const K=(ze,w,G,oe,se,Te,Ne)=>{if(U>=M)return;const ge=U*3;R[ge]=ze,R[ge+1]=w,R[ge+2]=G,A[ge]=ze,A[ge+1]=w,A[ge+2]=G,E[ge]=oe,E[ge+1]=se,E[ge+2]=Te,_[U]=Ne,P[U]=.5+Math.random()*2.5,L[ge]=0,L[ge+1]=0,L[ge+2]=0,U++},V=Math.floor(M*.42);for(let ze=0;ze<V;ze++){const w=Math.random(),G=Math.random(),oe=w*2*Math.PI,se=Math.acos(2*G-1);let Te=.56,Ne=.72,ge=.6,Me=Te*Math.sin(se)*Math.cos(oe),we=Ne*Math.cos(se)+.95,Ke=ge*Math.sin(se)*Math.sin(oe);if(we<.95){const T=1-(.95-we)*.7;Me*=Math.max(.45,T),Ke*=Math.max(.55,T)}we>1.15&&Math.abs(Me)<.45&&(Ke+=.04);const B=Ke>.38&&Math.abs(Me)<.16&&we>.75&&we<1.05;if(B&&(Ke+=.12*(1-Math.abs(Me)/.16)),Ke>.35&&we>.95&&we<1.1&&Math.abs(Me)>.14&&Math.abs(Me)<.32&&(Ke-=.05),we>1.05||Math.abs(Me)>.48){const T=(Math.random()-.5)*.12;Me+=T,we+=Math.random()*.1,Ke+=T}Me+=(Math.random()-.5)*.025,we+=(Math.random()-.5)*.025,Ke+=(Math.random()-.5)*.025;const Je=.6+Math.random()*.4,qe=B||we>.8&&Math.abs(Me)<.38&&Ke>.28,Ce=qe?Je*.96:Je*.75,dt=qe?Je*.98:Je*.8,Ye=qe?Je*1:Je*.88,O=(qe?3:2)+Math.random()*1.2;K(Me,we,Ke,Ce,dt,Ye,O)}const I=Math.floor(M*.14);for(let ze=0;ze<I;ze++){const w=Math.random()*Math.PI*2,G=Math.random(),oe=.22+G*.48,se=.3+(1-G)*.08;let Te=Math.cos(w)*se,Ne=Math.sin(w)*(se*.9);Ne<-.1&&(Ne*=.8);const ge=oe<.36&&Math.abs(Te)<.28&&Ne>.18,Me=ge?.95:.45+Math.random()*.35,we=Me*.85,Ke=Me*.9,B=Me*.98;K(Te,oe,Ne,we,Ke,B,ge?2.8:1.9)}const j=Math.floor(M*.38);for(let ze=0;ze<j;ze++){const w=Math.random(),G=.28-w*1.6,oe=1.6+w*.75,se=(Math.random()-.5)*2*oe,Te=.5+w*.25,Ne=se/oe,ge=Math.sqrt(Math.max(0,1-Ne*Ne))*Te,Me=(Math.random()*1.4-.45)*ge,we=Math.abs(se)<.12&&Me>.18&&G>-1.2,Ke=Math.abs(Math.abs(se)-(.18+(.28-G)*.3))<.06&&Me>.22;let B=.38+Math.random()*.35,Xt=B*.8,Je=B*.85,qe=B*.95;(we||Ke)&&(B=.9+Math.random()*.1,Xt=B*.92,Je=B*.96,qe=B),K(se,G,Me,Xt,Je,qe,we||Ke?2.8:2)}for(;U<M;){const ze=(Math.random()-.5)*8,w=(Math.random()-.5)*6,G=(Math.random()-.5)*5,oe=.25+Math.random()*.35;K(ze,w,G,oe*.75,oe*.85,oe*.98,1.4)}const D=new ba;D.setAttribute("position",new yi(R,3)),D.setAttribute("color",new yi(E,3));const F=(()=>{const ze=document.createElement("canvas");ze.width=32,ze.height=32;const w=ze.getContext("2d");if(!w)return null;const G=w.createRadialGradient(16,16,0,16,16,16);G.addColorStop(0,"rgba(255, 255, 255, 1)"),G.addColorStop(.3,"rgba(230, 240, 255, 0.9)"),G.addColorStop(.7,"rgba(160, 185, 220, 0.4)"),G.addColorStop(1,"rgba(0, 0, 0, 0)"),w.fillStyle=G,w.fillRect(0,0,32,32);const oe=new jb(ze);return oe.needsUpdate=!0,oe})(),le=new R_({size:S?.038:.046,vertexColors:!0,map:F,transparent:!0,opacity:.92,blending:zh,depthWrite:!1}),te=new Vb(D,le);h.add(te);const fe={x:0,y:0,targetX:0,targetY:0,isHovered:!1},de=new Zb,k=new Ht(-999,-999),ae=ze=>{const w=f.getBoundingClientRect(),G=ze.clientX-w.left,oe=ze.clientY-w.top;fe.targetX=G/p*2-1,fe.targetY=-(oe/x)*2+1,fe.isHovered=!0,k.x=fe.targetX,k.y=fe.targetY},Z=()=>{fe.isHovered=!1,fe.targetX=0,fe.targetY=0,k.x=-999,k.y=-999};n&&(window.addEventListener("mousemove",ae,{passive:!0}),document.addEventListener("mouseleave",Z));let _e,Se=new Wb;const be=()=>{_e=requestAnimationFrame(be);const ze=Se.getElapsedTime();fe.x+=(fe.targetX-fe.x)*.05,fe.y+=(fe.targetY-fe.y)*.05,y.position.x=fe.x*.35,y.position.y=.2+fe.y*.25,y.lookAt(0,.35,0),te.rotation.y=Math.sin(ze*.3)*.05+fe.x*.08,te.rotation.x=Math.cos(ze*.25)*.03-fe.y*.06,de.setFromCamera(k,y);const w=new rr(new ue(0,0,1),0),G=new ue;de.ray.intersectPlane(w,G);const oe=D.attributes.position.array,se=.75,Te=.18;for(let Ne=0;Ne<M;Ne++){const ge=Ne*3,Me=A[ge],we=A[ge+1],Ke=A[ge+2];let B=oe[ge],Xt=oe[ge+1],Je=oe[ge+2];if(fe.isHovered&&k.x>-900){const ne=B-G.x,ve=Xt-G.y,Ee=ne*ne+ve*ve;if(Ee<se*se&&Ee>1e-4){const xe=Math.sqrt(Ee),We=(1-xe/se)*Te;L[ge]+=ne/xe*We,L[ge+1]+=ve/xe*We,L[ge+2]+=We*.4}}const qe=.07,Ce=.88,dt=(Me-B)*qe,Ye=(we-Xt)*qe,O=(Ke-Je)*qe;L[ge]=(L[ge]+dt)*Ce,L[ge+1]=(L[ge+1]+Ye)*Ce,L[ge+2]=(L[ge+2]+O)*Ce;const T=Math.sin(ze*P[Ne]+Me*2)*.003;oe[ge]+=L[ge],oe[ge+1]+=L[ge+1]+T,oe[ge+2]+=L[ge+2]}D.attributes.position.needsUpdate=!0,o>0&&(le.opacity=Math.max(.1,.92-o*1.2),te.position.y=-o*1.5),m.render(h,y)};be();const je=()=>{if(!f)return;const ze=f.clientWidth,w=f.clientHeight;y.aspect=ze/w,y.updateProjectionMatrix(),m.setSize(ze,w)};return window.addEventListener("resize",je),()=>{cancelAnimationFrame(_e),window.removeEventListener("resize",je),n&&(window.removeEventListener("mousemove",ae),document.removeEventListener("mouseleave",Z)),D.dispose(),le.dispose(),F&&F.dispose(),m.dispose(),f&&m.domElement.parentNode===f&&f.removeChild(m.domElement)}},[o,n]),s?v.jsx("div",{ref:a,className:"absolute inset-0 w-full h-full pointer-events-none select-none z-0",style:{touchAction:"none"}}):v.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden",children:v.jsxs("div",{className:"relative w-72 h-96 opacity-60",children:[v.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-2xl"}),v.jsxs("svg",{viewBox:"0 0 200 280",className:"w-full h-full text-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]",children:[v.jsx("ellipse",{cx:"100",cy:"70",rx:"35",ry:"45",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"3 3"}),v.jsx("path",{d:"M 80,115 L 80,140 Q 50,145 25,180 L 15,260 L 185,260 L 175,180 Q 150,145 120,140 L 120,115",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"3 3"})]})]})})},O2=({scrollProgress:o})=>{const[n,a]=mt.useState(!1),s=()=>{a(!n)},c=d=>{d.preventDefault();const h=document.querySelector("#projects");h&&h.scrollIntoView({behavior:"smooth"})},f=d=>{d.preventDefault();const h=document.querySelector("#team");h&&h.scrollIntoView({behavior:"smooth"})};return v.jsxs("section",{id:"home",className:"relative w-full min-h-screen flex flex-col justify-between items-center bg-[#050505] overflow-hidden pt-24 pb-12 select-none",children:[v.jsx(L2,{scrollProgress:o}),v.jsx("div",{className:"absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"}),v.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#050505_95%)] z-10"}),v.jsxs("div",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between pt-6",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_#00F0FF] animate-pulse"}),v.jsx("span",{className:"text-[11px] font-mono tracking-widest text-neutral-300 uppercase",children:"TECH GENZ // SOFTWARE & TECHNOLOGY TEAM"})]}),v.jsx("button",{onClick:s,className:"flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] text-[10px] font-mono tracking-widest text-neutral-400 hover:text-white transition-all duration-300",title:"Toggle ambient audio",children:n?v.jsxs(v.Fragment,{children:[v.jsx(gM,{className:"w-3.5 h-3.5 text-accent-cyan"}),v.jsx("span",{children:"SOUND ON"})]}):v.jsxs(v.Fragment,{children:[v.jsx(vM,{className:"w-3.5 h-3.5 text-neutral-500"}),v.jsx("span",{children:"SOUND OFF"})]})})]}),v.jsxs("div",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-end my-auto text-center pointer-events-none pb-4",children:[v.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-4 shadow-lg",children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent-cyan"}),v.jsx("p",{className:"text-[11px] sm:text-xs font-mono tracking-[0.25em] text-neutral-300 uppercase",children:kt.supportingHeadline})]}),v.jsx("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-extrabold tracking-tight leading-[0.92] text-metallic uppercase drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]",children:kt.tagline}),v.jsx("p",{className:"mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-neutral-300 font-sans font-light leading-relaxed px-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",children:kt.intro})]}),v.jsxs("div",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/[0.06]",children:[v.jsxs("div",{className:"text-center sm:text-left",children:[v.jsxs("div",{className:"text-sm sm:text-base font-display text-white tracking-wide",children:[v.jsx("span",{className:"font-bold",children:"TECH GENZ"})," ",v.jsx("span",{className:"font-serif italic text-neutral-400 text-lg",children:"— Software & Technology Team"})]}),v.jsx("div",{className:"text-xs font-mono text-neutral-400 tracking-wider mt-0.5",children:kt.subDescriptor})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("a",{href:"#projects",onClick:c,className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] group",children:[v.jsx("span",{children:"EXPLORE OUR WORK"}),v.jsx(or,{className:"w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),v.jsx("a",{href:"#team",onClick:f,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/50 text-xs font-mono tracking-wider uppercase transition-all duration-300",children:"MEET THE TEAM"})]}),v.jsxs("div",{className:"hidden lg:flex items-center gap-2 text-[11px] font-mono text-neutral-500 tracking-widest",children:[v.jsx("span",{children:"SCROLL"}),v.jsx(DE,{className:"w-3.5 h-3.5 animate-bounce text-neutral-400"})]})]})]})},z2=()=>v.jsxs("section",{id:"about",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden",children:[v.jsx("div",{className:"absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"}),v.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[v.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"01 //"}),v.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"ABOUT TECH GENZ"})]}),v.jsxs("div",{className:"mb-14",children:[v.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-accent-cyan tracking-wider uppercase mb-6 shadow-sm",children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent-cyan"}),v.jsx("span",{children:"Tech Genz — Software & Technology Team"})]}),v.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase leading-[1.05]",children:["FOUR MINDS.",v.jsx("br",{}),v.jsx("span",{className:"font-serif italic font-normal text-white",children:"ONE VISION."})]}),v.jsxs("p",{className:"mt-3 text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase",children:["Motto: “",kt.motto,"”"]})]}),v.jsxs("div",{className:"max-w-4xl mb-16 space-y-6",children:[v.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#0c0c0e]/90 backdrop-blur-sm shadow-xl space-y-3",children:[v.jsxs("h3",{className:"text-lg sm:text-xl font-display font-bold text-white tracking-wide flex items-center gap-2",children:[v.jsx("span",{children:"Tech Genz"}),v.jsx("span",{className:"text-neutral-500 font-mono text-sm",children:"//"}),v.jsx("span",{className:"text-accent-cyan font-mono text-xs sm:text-sm font-normal",children:"Software & Technology Team"})]}),v.jsx("p",{className:"text-lg sm:text-2xl text-neutral-200 font-sans font-light leading-relaxed",children:"Tech Genz is a software and technology team associated with the student community of N.B.K.R. Institute of Science & Technology (NBKRIST), Vidyanagar, Andhra Pradesh, India."}),v.jsx("p",{className:"text-sm sm:text-base text-neutral-400 font-sans leading-relaxed pt-2 border-t border-white/[0.06]",children:"Formed around innovation, creativity, teamwork, and practical problem-solving, our team builds web applications, AI-powered tools, and backend systems. Operating independently as a student developer team, we turn ambitious ideas into useful digital experiences while exploring emerging technologies."})]}),v.jsx("p",{className:"text-sm sm:text-base text-neutral-400 font-sans leading-relaxed",children:kt.closing})]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[v.jsxs("div",{className:"p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all",children:[v.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan",children:v.jsx(pM,{className:"w-5 h-5"})}),v.jsx("div",{className:"text-xs font-mono tracking-widest text-neutral-500 uppercase",children:"01 // PURPOSE"}),v.jsx("h3",{className:"text-xl font-display font-bold text-white tracking-tight",children:"Our Motive"}),v.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed",children:kt.motive})]}),v.jsxs("div",{className:"p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all",children:[v.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan",children:v.jsx(qE,{className:"w-5 h-5"})}),v.jsx("div",{className:"text-xs font-mono tracking-widest text-neutral-500 uppercase",children:"02 // HORIZON"}),v.jsx("h3",{className:"text-xl font-display font-bold text-white tracking-tight",children:"Our Vision"}),v.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed",children:kt.vision})]}),v.jsxs("div",{className:"p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all",children:[v.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan",children:v.jsx(dM,{className:"w-5 h-5"})}),v.jsx("div",{className:"text-xs font-mono tracking-widest text-neutral-500 uppercase",children:"03 // CREED"}),v.jsx("h3",{className:"text-xl font-display font-bold text-white tracking-tight",children:"Our Motto"}),v.jsxs("blockquote",{className:"text-sm sm:text-base font-serif italic text-white leading-relaxed",children:["“",kt.motto,"”"]}),v.jsx("p",{className:"text-xs text-neutral-400 font-sans leading-relaxed",children:"Engineering beyond limitations through relentless curiosity, architectural discipline, and high-impact digital craft."})]})]}),v.jsx("div",{className:"p-8 sm:p-10 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-[#0e0e12] to-[#070709] backdrop-blur-md mb-12 shadow-2xl",children:v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[v.jsxs("div",{className:"lg:col-span-8 space-y-4",children:[v.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-neutral-300",children:[v.jsx(QE,{className:"w-3.5 h-3.5 text-accent-cyan"}),v.jsx("span",{children:"COLLEGE STUDENT COMMUNITY CONNECTION"})]}),v.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white tracking-tight",children:kt.college.name}),v.jsx("p",{className:"text-xs font-mono text-accent-cyan",children:kt.college.location}),v.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-2xl",children:"Tech Genz was formed by members of the student community at NBKRIST. We collaborate to build software solutions, explore emerging technologies, and grow as developers and innovators while operating independently as a student developer team."})]}),v.jsxs("div",{className:"lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end",children:[v.jsxs("a",{href:kt.college.website,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] text-xs font-mono tracking-wider text-white transition-all group",children:[v.jsx("span",{children:"OFFICIAL COLLEGE PORTAL"}),v.jsx(or,{className:"w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),v.jsx("span",{className:"text-[11px] font-mono text-neutral-500 text-center lg:text-right",children:"nbkrist.org // Vidyanagar"})]})]})}),v.jsxs("div",{className:"pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-6",children:[v.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[v.jsxs("a",{href:"#team",className:"inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-accent-cyan transition-colors group",children:[v.jsx("span",{children:"MEET OUR FOUR TEAM MEMBERS"}),v.jsx(or,{className:"w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),v.jsx("span",{className:"text-neutral-700 font-mono hidden sm:inline",children:"/"}),v.jsxs("a",{href:kt.githubRepo,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors",children:[v.jsx(oo,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"GITHUB REPOSITORY ↗"})]}),v.jsx("span",{className:"text-neutral-700 font-mono hidden sm:inline",children:"/"}),v.jsxs("a",{href:kt.websiteUrl,className:"inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors",children:[v.jsx(ZE,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"TECHGENZ.SITE"})]})]}),v.jsx("div",{className:"text-xs font-mono text-neutral-500",children:"STUDENT TECH COLLECTIVE // NBKRIST"})]})]})]}),P2=()=>{const[o,n]=mt.useState(null),a=s=>{n(o===s?null:s)};return v.jsx("section",{id:"services",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08]",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[v.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[v.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"02 //"}),v.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"CORE CAPABILITIES"})]}),v.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase",children:["WHAT WE ",v.jsx("span",{className:"font-serif italic font-normal text-white",children:"BUILD."})]})]}),v.jsx("p",{className:"text-sm text-neutral-400 max-w-md font-sans leading-relaxed",children:"Engineered software solutions delivering speed, security, and expressive interactivity across the full stack."})]}),v.jsx("div",{className:"divide-y divide-white/[0.08] border-y border-white/[0.08]",children:yM.map(s=>{const c=o===s.id;return v.jsxs("div",{className:"group transition-colors duration-300 hover:bg-white/[0.02]",children:[v.jsxs("button",{onClick:()=>a(s.id),"aria-expanded":c,className:"w-full text-left py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 focus:outline-none cursor-pointer",children:[v.jsxs("div",{className:"flex items-baseline gap-6 sm:gap-10",children:[v.jsx("span",{className:"text-sm sm:text-base font-mono text-neutral-500 group-hover:text-accent-cyan transition-colors",children:s.index}),v.jsx("h3",{className:"text-xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-neutral-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300",children:s.title})]}),v.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-6 md:max-w-md w-full md:w-auto",children:[v.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 font-sans line-clamp-2 md:text-right",children:s.description}),v.jsx("div",{className:"flex-shrink-0 p-2 rounded-full border border-white/10 group-hover:border-white/30 text-neutral-400 group-hover:text-white transition-all",children:v.jsx(PE,{className:`w-4 h-4 transition-transform duration-300 ${c?"rotate-180 text-white":""}`})})]})]}),c&&v.jsx("div",{className:"pb-8 pt-2 px-6 sm:px-16 animate-fadeIn text-sm text-neutral-300 border-t border-white/[0.04]",children:v.jsxs("div",{className:"max-w-3xl space-y-4",children:[v.jsx("p",{className:"text-sm text-neutral-300 leading-relaxed",children:s.expandedDetail}),v.jsxs("div",{className:"pt-2",children:[v.jsx("div",{className:"text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-3",children:"KEY COMPETENCIES"}),v.jsx("div",{className:"flex flex-wrap gap-2",children:s.capabilities.map(f=>v.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300",children:["• ",f]},f))})]})]})})]},s.id)})})]})})},I2=({project:o,onClose:n,onSelectProject:a,allProjects:s})=>{if(mt.useEffect(()=>{const h=p=>{p.key==="Escape"&&n()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[n]),!o)return null;const c=s.findIndex(h=>h.id===o.id),f=s[(c-1+s.length)%s.length],d=s[(c+1)%s.length];return v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn",onClick:n,children:v.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0c] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8",onClick:h=>h.stopPropagation(),children:[v.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-6",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("span",{className:"text-xs font-mono text-neutral-500 uppercase",children:[o.index," //"]}),v.jsx("span",{className:"text-xs font-mono text-accent-cyan uppercase tracking-widest",children:o.category})]}),v.jsx("button",{onClick:n,className:"p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors","aria-label":"Close project modal",children:v.jsx(n_,{className:"w-5 h-5"})})]}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white uppercase",children:o.title}),v.jsxs("p",{className:"text-sm font-mono text-neutral-400 mt-2 tracking-wider",children:[o.subtitle," • ",o.year]})]}),v.jsxs("div",{className:"w-full rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden",children:[v.jsxs("div",{className:"absolute top-0 left-0 right-0 h-8 bg-white/[0.03] border-b border-white/10 flex items-center px-4 gap-2",children:[v.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-neutral-600"}),v.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-neutral-600"}),v.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-neutral-600"}),v.jsx("span",{className:"ml-3 text-[10px] font-mono text-neutral-400",children:"https://sharepinz.site"})]}),v.jsx("div",{className:"mt-8 text-center max-w-md space-y-4",children:o.id==="sharepinz"?v.jsxs("div",{className:"p-6 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md shadow-inner space-y-4",children:[v.jsx("div",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Active Share Session"}),v.jsx("div",{className:"text-4xl font-mono font-bold tracking-[0.3em] text-white",children:"5 9 1 0 4 2"}),v.jsx("div",{className:"text-[11px] text-neutral-500 font-mono",children:"TTL Expiry: 14m 58s • AES-256 Encrypted Transfer"})]}):v.jsxs("div",{className:"p-6 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md shadow-inner",children:[v.jsx("div",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2",children:"System Architecture"}),v.jsxs("div",{className:"text-xl font-display font-bold text-white",children:[o.title," Engine"]}),v.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"Verified Real-time Pipeline"})]})})]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 text-sm",children:[v.jsxs("div",{className:"space-y-3",children:[v.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Problem Statement"}),v.jsx("p",{className:"text-neutral-300 leading-relaxed font-sans",children:o.problem})]}),v.jsxs("div",{className:"space-y-3",children:[v.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Engineering Solution"}),v.jsx("p",{className:"text-neutral-300 leading-relaxed font-sans",children:o.solution})]})]}),v.jsxs("div",{className:"space-y-3 border-t border-white/[0.08] pt-6",children:[v.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Key Implementations"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:o.keyFeatures.map((h,p)=>v.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-neutral-300",children:[v.jsx(Uh,{className:"w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5"}),v.jsx("span",{children:h})]},p))})]}),v.jsxs("div",{className:"border-t border-white/[0.08] pt-6 space-y-3",children:[v.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Technology Stack"}),v.jsx("div",{className:"flex flex-wrap gap-2",children:o.techStack.map(h=>v.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300",children:h},h))})]}),v.jsxs("div",{className:"border-t border-white/[0.08] pt-6 space-y-2",children:[v.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Technical Constraints Overcome"}),v.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:o.challenges})]}),v.jsxs("div",{className:"border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4",children:[v.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[o.liveUrl&&v.jsxs("a",{href:o.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors",children:[v.jsx("span",{children:"Live Website"}),v.jsx(Lh,{className:"w-3.5 h-3.5"})]}),o.repoUrl&&v.jsxs("a",{href:o.repoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white text-xs font-mono tracking-wider transition-colors",children:[v.jsx(oo,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Repository"})]})]}),s.length>1&&v.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto justify-end",children:[v.jsxs("button",{onClick:()=>a(f),className:"flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-400 hover:text-white transition-colors",children:[v.jsx(BE,{className:"w-4 h-4"}),v.jsx("span",{children:"PREV"})]}),v.jsxs("button",{onClick:()=>a(d),className:"flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-400 hover:text-white transition-colors",children:[v.jsx("span",{children:"NEXT"}),v.jsx(HE,{className:"w-4 h-4"})]})]})]})]})})},B2=()=>{const[o,n]=mt.useState(null),[a,s]=mt.useState("739 421"),[c,f]=mt.useState(!1),d=()=>{const x=Math.floor(100+Math.random()*900),y=Math.floor(100+Math.random()*900);s(`${x} ${y}`),f(!1)},h=x=>{var y;x.stopPropagation(),(y=navigator.clipboard)==null||y.writeText(a.replace(/\s+/g,"")),f(!0),setTimeout(()=>f(!1),2e3)},p=$x[0];return v.jsxs("section",{id:"projects",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08]",children:[v.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[v.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[v.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"03 //"}),v.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"FEATURED WORK"})]}),v.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase",children:["SELECTED ",v.jsx("span",{className:"font-serif italic font-normal text-white",children:"work."})]})]}),v.jsxs("div",{className:"md:max-w-md space-y-3",children:[v.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed",children:"Real software engineered for utility, zero friction, and high-performance execution."}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("a",{href:p.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 hover:bg-accent-cyan hover:text-black text-xs font-mono tracking-wider transition-all duration-300 text-accent-cyan group",children:[v.jsx("span",{children:"OPEN SHAREPINZ (LIVE)"}),v.jsx(or,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),v.jsxs("a",{href:kt.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white hover:text-black hover:border-white text-xs font-mono tracking-wider transition-all duration-300 text-neutral-300 group",children:[v.jsx("span",{children:"GITHUB ORG"}),v.jsx(or,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]})]})]}),v.jsxs("div",{className:"relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#111114] to-[#08080a] p-8 sm:p-12 overflow-hidden shadow-2xl",children:[v.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-accent-cyan/[0.04] rounded-full blur-3xl pointer-events-none"}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[v.jsx("div",{className:"lg:col-span-7 order-2 lg:order-1",children:v.jsxs("a",{href:p.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"block relative w-full rounded-2xl border border-white/10 hover:border-accent-cyan/40 bg-[#060608] shadow-2xl overflow-hidden group transition-all duration-300",title:"Click to launch sharepinz.site",children:[v.jsxs("div",{className:"h-9 bg-[#121216] border-b border-white/[0.08] flex items-center justify-between px-4",children:[v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/60"}),v.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/60"}),v.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500/60"})]}),v.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 tracking-wider group-hover:text-white transition-colors",children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),v.jsx("span",{children:"https://sharepinz.site"}),v.jsx(Lh,{className:"w-3 h-3 text-neutral-500 group-hover:text-accent-cyan"})]}),v.jsx("div",{className:"w-10"})]}),v.jsxs("div",{className:"p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6 min-h-[380px]",children:[v.jsx("div",{className:"p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white group-hover:scale-105 transition-transform",children:v.jsx($E,{className:"w-8 h-8 text-white"})}),v.jsxs("div",{children:[v.jsx("span",{className:"text-[10px] font-mono tracking-widest uppercase text-accent-cyan px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20",children:"LIVE APPLICATION READY"}),v.jsx("h4",{className:"text-xl sm:text-3xl font-display font-bold text-white mt-3 group-hover:text-accent-cyan transition-colors",children:"SharePinz File Gateway"}),v.jsx("p",{className:"text-xs text-neutral-400 mt-1 max-w-sm mx-auto",children:"Generate an ephemeral 6-digit access key to send files securely with zero registration."})]}),v.jsxs("div",{className:"p-5 rounded-xl border border-white/15 bg-black/70 backdrop-blur-md w-full max-w-xs shadow-inner",children:[v.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1",children:"Target Access Key"}),v.jsx("div",{className:"text-3xl font-mono font-bold tracking-[0.25em] text-white",children:a}),v.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2",children:[v.jsx("button",{onClick:h,className:"px-3 py-1 rounded text-[11px] font-mono bg-white/[0.08] hover:bg-white/[0.18] text-white transition-colors cursor-pointer",children:c?"PIN Copied!":"Copy Key"}),v.jsx("button",{onClick:x=>{x.preventDefault(),x.stopPropagation(),d()},className:"p-1 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer",title:"Generate new PIN",children:v.jsx(sM,{className:"w-3.5 h-3.5"})})]})]}),v.jsxs("div",{className:"flex items-center gap-4 text-[11px] font-mono text-neutral-500",children:[v.jsxs("span",{className:"flex items-center gap-1",children:[v.jsx(uM,{className:"w-3.5 h-3.5 text-neutral-400"})," AES-256 Storage"]}),v.jsx("span",{children:"•"}),v.jsx("span",{children:"Auto TTL Expiry"})]}),v.jsxs("div",{className:"pt-2 text-[11px] font-mono text-accent-cyan flex items-center gap-1 group-hover:underline",children:[v.jsx("span",{children:"Click to visit live website: sharepinz.site"}),v.jsx(or,{className:"w-3 h-3"})]})]})]})}),v.jsxs("div",{className:"lg:col-span-5 order-1 lg:order-2 space-y-6",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"text-xs font-mono text-neutral-500",children:"01 //"}),v.jsx("span",{className:"text-xs font-mono tracking-widest uppercase text-accent-cyan",children:p.category})]}),v.jsxs("div",{children:[v.jsxs("h3",{className:"text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight",children:["SHARE",v.jsx("span",{className:"font-serif italic text-neutral-400",children:"PINZ"})]}),v.jsx("p",{className:"text-xs font-mono text-neutral-400 tracking-wider mt-1 uppercase",children:p.subtitle})]}),v.jsx("p",{className:"text-sm sm:text-base text-neutral-300 font-sans leading-relaxed",children:p.description}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("div",{className:"text-[11px] font-mono text-neutral-500 uppercase tracking-widest",children:"TECHNOLOGIES"}),v.jsx("div",{className:"flex flex-wrap gap-2",children:p.techStack.map(x=>v.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300",children:x},x))})]}),v.jsxs("div",{className:"pt-4 flex flex-wrap items-center gap-3",children:[v.jsxs("a",{href:p.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] group",children:[v.jsx("span",{children:"OPEN WEBSITE"}),v.jsx(Lh,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),v.jsxs("button",{onClick:()=>n(p),className:"inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white/50 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer",children:[v.jsx("span",{children:"CASE STUDY DETAILS"}),v.jsx(or,{className:"w-3.5 h-3.5"})]}),p.repoUrl&&v.jsxs("a",{href:p.repoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 text-xs font-mono tracking-wider transition-colors",children:[v.jsx(oo,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"REPO"})]})]})]})]})]})]}),v.jsx(I2,{project:o,onClose:()=>n(null),onSelectProject:x=>n(x),allProjects:$x})]})},F2=()=>v.jsxs("section",{className:"relative w-full bg-[#050505] py-32 border-t border-b border-white/[0.08] overflow-hidden select-none",children:[v.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)] pointer-events-none"}),v.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none bg-noise"}),v.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6",children:[v.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono tracking-widest text-neutral-400 uppercase",children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white animate-pulse"}),v.jsx("span",{children:"TECH GENZ MANIFESTO"})]}),v.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-display font-extrabold tracking-tighter leading-none text-metallic uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]",children:["IDEAS INTO ",v.jsx("span",{className:"font-serif italic font-normal text-white",children:"reality."})]}),v.jsx("p",{className:"max-w-xl mx-auto text-xs sm:text-sm md:text-base font-mono text-neutral-400 tracking-wider uppercase",children:"Break it if you can. It still ships. Built beyond boundaries."}),v.jsxs("div",{className:"pt-8 flex items-center justify-center gap-3",children:[v.jsx("span",{className:"w-12 h-[1px] bg-white/20"}),v.jsx("span",{className:"text-[10px] font-mono text-neutral-600 tracking-widest",children:"// 04 //"}),v.jsx("span",{className:"w-12 h-[1px] bg-white/20"})]})]})]}),H2=()=>v.jsx("section",{id:"team",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08]",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[v.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[v.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"04 //"}),v.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"CORE COLLECTIVE"})]}),v.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase",children:["THE PEOPLE ",v.jsx("span",{className:"font-serif italic font-normal text-white",children:"behind the code."})]})]}),v.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 max-w-md font-sans leading-relaxed",children:"A tight-knit quad of builders combining architectural rigor, intuitive visual design, and deep technical curiosity."})]}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:i_.map(o=>v.jsxs("div",{className:"group relative rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-7 flex flex-col justify-between hover:border-white/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-8",children:[v.jsxs("span",{className:"text-xs font-mono text-neutral-500 group-hover:text-accent-cyan transition-colors",children:[o.index," //"]}),v.jsxs("div",{className:"relative w-12 h-12 rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center font-display font-bold text-sm tracking-wider text-white shadow-inner group-hover:scale-105 transition-transform",children:[v.jsx("span",{children:o.avatarPlaceholder}),v.jsx("div",{className:"absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent-cyan/80 ring-2 ring-[#0c0c0e]"})]})]}),v.jsxs("div",{className:"mb-4",children:[v.jsx("h3",{className:"text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-neutral-100",children:o.name}),v.jsx("div",{className:"inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20",children:o.role})]}),v.jsx("p",{className:"text-xs text-neutral-400 font-sans leading-relaxed mb-6",children:o.shortBio}),o.email&&v.jsxs("div",{className:"mb-6 pt-3 border-t border-white/[0.06]",children:[v.jsx("div",{className:"text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1",children:"DIRECT EMAIL"}),v.jsxs("a",{href:`mailto:${o.email}`,className:"inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-accent-cyan transition-colors group/mail max-w-full",title:`Email ${o.name}`,children:[v.jsx(Oh,{className:"w-3.5 h-3.5 text-neutral-500 group-hover/mail:text-accent-cyan transition-colors shrink-0"}),v.jsx("span",{className:"truncate",children:o.email})]})]}),v.jsxs("div",{className:"space-y-2 mb-8",children:[v.jsx("div",{className:"text-[10px] font-mono uppercase tracking-widest text-neutral-500",children:"Core Focus"}),v.jsx("div",{className:"flex flex-wrap gap-1.5",children:o.skills.map(n=>v.jsx("span",{className:"px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-300",children:n},n))})]})]}),v.jsxs("div",{className:"pt-4 border-t border-white/[0.06] flex items-center justify-between",children:[v.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:"TECH GENZ LAB"}),v.jsxs("div",{className:"flex items-center gap-3",children:[o.email&&v.jsx("a",{href:`mailto:${o.email}`,className:"flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-accent-cyan transition-colors",title:`Send email to ${o.name} (${o.email})`,children:v.jsx(Oh,{className:"w-3.5 h-3.5"})}),o.linkedin&&v.jsxs("a",{href:o.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-accent-cyan transition-colors",title:`${o.name} on LinkedIn`,children:[v.jsx(tM,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"LINKEDIN ↗"})]}),o.github&&v.jsx("a",{href:o.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-white transition-colors",title:`${o.name} on GitHub`,children:v.jsx(oo,{className:"w-3.5 h-3.5"})})]})]})]},o.id))})]})}),G2=()=>{const[o,n]=mt.useState("all"),a=mt.useRef(null),s=[{id:"all",label:"ALL TECHNOLOGIES"},{id:"frontend",label:"FRONTEND & UI"},{id:"backend",label:"BACKEND & DATA"},{id:"creative",label:"CREATIVE & 3D"},{id:"ai",label:"AI & SYSTEMS"}],c=o==="all"?ev:ev.filter(f=>f.category===o);return mt.useEffect(()=>{var A,E;const f=a.current;if(!f)return;const d=f.getContext("2d");if(!d)return;let h=f.width=((A=f.parentElement)==null?void 0:A.clientWidth)||800,p=f.height=((E=f.parentElement)==null?void 0:E.clientHeight)||400;const x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=h<768?16:28,m=[];for(let _=0;_<y;_++)m.push({x:Math.random()*h,y:Math.random()*p,vx:x?0:(Math.random()-.5)*.4,vy:x?0:(Math.random()-.5)*.4,radius:1.5+Math.random()*2});let S;const M=()=>{d.clearRect(0,0,h,p);for(let _=0;_<m.length;_++)for(let L=_+1;L<m.length;L++){const P=m[_].x-m[L].x,U=m[_].y-m[L].y,K=Math.sqrt(P*P+U*U),V=130;if(K<V){const I=(1-K/V)*.15;d.strokeStyle=`rgba(255, 255, 255, ${I})`,d.lineWidth=1,d.beginPath(),d.moveTo(m[_].x,m[_].y),d.lineTo(m[L].x,m[L].y),d.stroke()}}for(let _=0;_<m.length;_++){const L=m[_];L.x+=L.vx,L.y+=L.vy,(L.x<0||L.x>h)&&(L.vx*=-1),(L.y<0||L.y>p)&&(L.vy*=-1),d.fillStyle="rgba(255, 255, 255, 0.4)",d.beginPath(),d.arc(L.x,L.y,L.radius,0,Math.PI*2),d.fill()}x||(S=requestAnimationFrame(M))};M();const R=()=>{f.parentElement&&(h=f.width=f.parentElement.clientWidth,p=f.height=f.parentElement.clientHeight)};return window.addEventListener("resize",R),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",R)}},[]),v.jsxs("section",{id:"technology",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden",children:[v.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-40",children:v.jsx("canvas",{ref:a,className:"w-full h-full"})}),v.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 sm:px-8",children:[v.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[v.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"05 //"}),v.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"TECHNICAL STACK"})]}),v.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase",children:["BUILT WITH ",v.jsx("span",{className:"font-serif italic font-normal text-white",children:"purpose."})]})]}),v.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 max-w-md font-sans leading-relaxed",children:"Curated tools and robust frameworks selected strictly for their stability, execution speed, and developer ergonomics."})]}),v.jsx("div",{className:"flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/[0.06]",children:s.map(f=>v.jsx("button",{onClick:()=>n(f.id),className:`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${o===f.id?"bg-white text-black font-semibold shadow-sm":"bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"}`,children:f.label},f.id))}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5",children:c.map(f=>v.jsxs("div",{className:"group p-4 rounded-xl border border-white/[0.08] bg-[#09090c]/80 backdrop-blur-sm hover:border-white/30 hover:bg-[#111115] transition-all duration-300 flex flex-col justify-between",children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-neutral-500 group-hover:bg-accent-cyan transition-colors"}),v.jsx("span",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest",children:f.category})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-base font-display font-bold text-white group-hover:translate-x-0.5 transition-transform",children:f.name}),v.jsx("div",{className:"text-[11px] font-mono text-neutral-400 mt-0.5",children:f.tag})]})]},f.name))})]})]})},V2=()=>{const[o,n]=mt.useState({name:"",email:"",subject:"",message:""}),[a,s]=mt.useState({}),[c,f]=mt.useState(!1),[d,h]=mt.useState(!1),[p,x]=mt.useState(!1),y=mt.useRef(null),m=mt.useRef(null);mt.useEffect(()=>{var j,D;const A=y.current;if(!A)return;const E=A.getContext("2d");if(!E)return;let _=A.width=((j=A.parentElement)==null?void 0:j.clientWidth)||1200,L=A.height=((D=A.parentElement)==null?void 0:D.clientHeight)||800,P=0,U;const K=window.matchMedia("(prefers-reduced-motion: reduce)").matches,V=()=>{P+=.003,E.fillStyle="#050505",E.fillRect(0,0,_,L);const N=[{x:_*.3+Math.sin(P)*120,y:L*.4+Math.cos(P*.8)*80,r:350,alpha:.05},{x:_*.7+Math.cos(P*.7)*140,y:L*.6+Math.sin(P*.9)*90,r:420,alpha:.04},{x:_*.5+Math.sin(P*1.2)*80,y:L*.8+Math.cos(P*.5)*60,r:300,alpha:.03}];for(const F of N){const le=E.createRadialGradient(F.x,F.y,0,F.x,F.y,F.r);le.addColorStop(0,`rgba(255, 255, 255, ${F.alpha})`),le.addColorStop(.5,`rgba(200, 215, 230, ${F.alpha*.5})`),le.addColorStop(1,"rgba(5, 5, 5, 0)"),E.fillStyle=le,E.fillRect(0,0,_,L)}K||(U=requestAnimationFrame(V))};V();const I=()=>{A.parentElement&&(_=A.width=A.parentElement.clientWidth,L=A.height=A.parentElement.clientHeight)};return window.addEventListener("resize",I),()=>{cancelAnimationFrame(U),window.removeEventListener("resize",I)}},[]);const S=()=>{const A={};return o.name.trim()||(A.name="Name is required"),o.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(A.email="Please enter a valid email address"):A.email="Email address is required",o.subject.trim()||(A.subject="Subject is required"),o.message.trim()?o.message.trim().length<10&&(A.message="Please provide at least 10 characters"):A.message="Message cannot be empty",s(A),Object.keys(A).length===0},M=async A=>{var E,_;if(A.preventDefault(),!!S()){f(!0);try{(await fetch("https://formsubmit.co/ajax/admin@techgenz.site",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:o.name,email:o.email,_subject:`[Tech Genz Inquiry] ${o.subject}`,subject:o.subject,message:o.message,_template:"table",_captcha:"false"})})).ok?(f(!1),h(!0)):(E=m.current)==null||E.submit()}catch{(_=m.current)==null||_.submit()}}},R=()=>{var A;(A=navigator.clipboard)==null||A.writeText(kt.contactEmail),x(!0),setTimeout(()=>x(!1),2200)};return v.jsxs("section",{id:"contact",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden",children:[v.jsx("div",{className:"absolute inset-0 pointer-events-none",children:v.jsx("canvas",{ref:y,className:"w-full h-full opacity-60"})}),v.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 sm:px-8",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-12",children:[v.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"05 //"}),v.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"INITIATE CONTACT"})]}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",children:[v.jsxs("div",{className:"lg:col-span-5 space-y-8",children:[v.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300",children:[v.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),v.jsx("span",{children:"AVAILABLE FOR COLLABORATION"})]}),v.jsxs("div",{children:[v.jsxs("h2",{className:"text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-metallic uppercase leading-[1.05]",children:["LET'S BUILD ",v.jsx("br",{}),v.jsx("span",{className:"font-serif italic font-normal text-white",children:"something."})]}),v.jsx("p",{className:"mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed",children:"Have an ambitious idea, a technical challenge, or an opportunity to partner? Tech Genz is built to engineer high-impact solutions."})]}),v.jsxs("div",{className:"p-7 rounded-2xl border border-white/[0.12] bg-[#0c0c0f]/80 backdrop-blur-md space-y-6 shadow-xl",children:[v.jsxs("div",{className:"border-b border-white/[0.08] pb-4",children:[v.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1",children:"OFFICIAL INBOX // LEADER"}),v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("a",{href:`mailto:${kt.contactEmail}`,className:"text-sm font-mono text-white hover:text-accent-cyan transition-colors select-all",children:kt.contactEmail}),v.jsx("button",{onClick:R,className:"p-1.5 rounded-lg border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors cursor-pointer",title:"Copy email to clipboard",children:p?v.jsx(Uh,{className:"w-4 h-4 text-emerald-400"}):v.jsx(jE,{className:"w-4 h-4"})})]})]}),v.jsxs("div",{className:"border-b border-white/[0.08] pb-4",children:[v.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2.5",children:"CORE TEAM DIRECTORY"}),v.jsx("div",{className:"space-y-2 text-xs font-mono",children:i_.map(A=>v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2",children:[v.jsxs("span",{className:"text-neutral-400",children:[A.name,":"]}),A.email&&v.jsx("a",{href:`mailto:${A.email}`,className:"text-accent-cyan hover:underline transition-colors",children:A.email})]},A.id))})]}),v.jsxs("div",{className:"border-b border-white/[0.08] pb-4",children:[v.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1",children:"CODE ORGANIZATION"}),v.jsxs("a",{href:kt.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-sm font-mono text-white hover:text-accent-cyan transition-colors",children:[v.jsx(oo,{className:"w-4 h-4"}),v.jsx("span",{children:"github.com/Tech-Genz ↗"})]})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1",children:"AVAILABILITY"}),v.jsx("p",{className:"text-xs font-sans text-neutral-300",children:kt.availability})]})]})]}),v.jsx("div",{className:"lg:col-span-7",children:v.jsxs("div",{className:"rounded-3xl border border-white/[0.12] bg-[#0c0c0f]/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl",children:[v.jsx("h3",{className:"text-xl sm:text-2xl font-display font-bold text-white mb-2",children:"Send a Dispatch"}),v.jsxs("p",{className:"text-xs text-neutral-400 mb-8 font-mono",children:["Messages are delivered directly to ",v.jsx("span",{className:"text-neutral-200",children:"admin@techgenz.site"})," via FormSubmit."]}),d?v.jsxs("div",{className:"p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-center space-y-4",children:[v.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto",children:v.jsx(Uh,{className:"w-6 h-6"})}),v.jsx("h4",{className:"text-lg font-display font-bold text-white",children:"Transmission Dispatched"}),v.jsxs("p",{className:"text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed",children:["Your dispatch payload has been sent to"," ",v.jsx("span",{className:"text-white font-mono font-medium",children:"admin@techgenz.site"}),". Our team will review your message and reply promptly."]}),v.jsx("div",{className:"pt-2",children:v.jsx("button",{onClick:()=>{h(!1),n({name:"",email:"",subject:"",message:""})},className:"px-5 py-2 rounded-full border border-white/20 text-xs font-mono text-white hover:bg-white/10 transition-colors cursor-pointer",children:"Send Another Message"})})]}):v.jsxs("form",{ref:m,action:"https://formsubmit.co/admin@techgenz.site",method:"POST",onSubmit:M,noValidate:!0,className:"space-y-6",children:[v.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),v.jsx("input",{type:"hidden",name:"_template",value:"table"}),v.jsx("input",{type:"hidden",name:"_subject",value:o.subject?`[Tech Genz Inquiry] ${o.subject}`:"New Inquiry via techgenz.site"}),v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2",children:["Your Name ",v.jsx("span",{className:"text-red-400",children:"*"})]}),v.jsx("input",{type:"text",name:"name",required:!0,value:o.name,onChange:A=>n({...o,name:A.target.value}),placeholder:"Alex Morgan",className:`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${a.name?"border-red-500/80":"border-white/10 focus:border-white/40"} text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}),a.name&&v.jsx("p",{className:"mt-1 text-[11px] text-red-400 font-mono",children:a.name})]}),v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2",children:["Email Address ",v.jsx("span",{className:"text-red-400",children:"*"})]}),v.jsx("input",{type:"email",name:"email",required:!0,value:o.email,onChange:A=>n({...o,email:A.target.value}),placeholder:"alex@domain.com",className:`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${a.email?"border-red-500/80":"border-white/10 focus:border-white/40"} text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}),a.email&&v.jsx("p",{className:"mt-1 text-[11px] text-red-400 font-mono",children:a.email})]})]}),v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2",children:["Subject / Project Scope ",v.jsx("span",{className:"text-red-400",children:"*"})]}),v.jsx("input",{type:"text",name:"subject",required:!0,value:o.subject,onChange:A=>n({...o,subject:A.target.value}),placeholder:"High-performance Web App / 3D Canvas Architecture",className:`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${a.subject?"border-red-500/80":"border-white/10 focus:border-white/40"} text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}),a.subject&&v.jsx("p",{className:"mt-1 text-[11px] text-red-400 font-mono",children:a.subject})]}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-2",children:[v.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-neutral-400",children:["Message Brief ",v.jsx("span",{className:"text-red-400",children:"*"})]}),v.jsxs("span",{className:"text-[10px] font-mono text-neutral-500",children:[o.message.length," chars"]})]}),v.jsx("textarea",{name:"message",required:!0,rows:5,value:o.message,onChange:A=>n({...o,message:A.target.value}),placeholder:"Outline your project timeline, technical targets, or collaborative inquiry...",className:`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${a.message?"border-red-500/80":"border-white/10 focus:border-white/40"} text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans resize-none`}),a.message&&v.jsx("p",{className:"mt-1 text-[11px] text-red-400 font-mono",children:a.message})]}),v.jsx("button",{type:"submit",disabled:c,className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 disabled:opacity-50 transition-all duration-300 shadow-lg cursor-pointer",children:c?v.jsx("span",{children:"DISPATCHING..."}):v.jsxs(v.Fragment,{children:[v.jsx("span",{children:"TRANSMIT MESSAGE"}),v.jsx(lM,{className:"w-3.5 h-3.5"})]})})]})]})})]})]})]})},j2=()=>{const o=new Date().getFullYear(),n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return v.jsx("footer",{className:"relative w-full bg-[#050505] border-t border-white/[0.08] py-16 text-neutral-400",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06] items-start",children:[v.jsxs("div",{className:"md:col-span-6 space-y-4",children:[v.jsxs("div",{className:"text-xl font-display font-bold tracking-widest text-white flex items-center gap-2",children:[v.jsx("span",{children:kt.name}),v.jsx("span",{className:"text-neutral-600 font-mono text-sm",children:"//"}),v.jsx("span",{className:"text-accent-cyan font-mono text-xs font-normal",children:"SOFTWARE & TECHNOLOGY TEAM"})]}),v.jsx("p",{className:"text-xs sm:text-sm text-neutral-300 max-w-md font-sans leading-relaxed",children:"Tech Genz is a software and technology team associated with the student community of N.B.K.R. Institute of Science & Technology (NBKRIST), Vidyanagar, Andhra Pradesh, India."}),v.jsxs("div",{className:"text-[11px] font-mono text-neutral-500",children:["Motto: “",kt.motto,"” • All Rights Reserved"]})]}),v.jsxs("div",{className:"md:col-span-3 space-y-3",children:[v.jsx("div",{className:"text-xs font-mono text-neutral-300 uppercase tracking-widest",children:"NAVIGATION"}),v.jsxs("ul",{className:"space-y-2 text-xs font-mono text-neutral-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#home",className:"hover:text-white transition-colors",children:"00 // HOME"})}),v.jsx("li",{children:v.jsx("a",{href:"#about",className:"hover:text-white transition-colors",children:"01 // ABOUT"})}),v.jsx("li",{children:v.jsx("a",{href:"#services",className:"hover:text-white transition-colors",children:"02 // SERVICES"})}),v.jsx("li",{children:v.jsx("a",{href:"#projects",className:"hover:text-white transition-colors",children:"03 // SELECTED WORK"})}),v.jsx("li",{children:v.jsx("a",{href:"#team",className:"hover:text-white transition-colors",children:"04 // TEAM"})}),v.jsx("li",{children:v.jsx("a",{href:"#contact",className:"hover:text-white transition-colors",children:"05 // CONTACT"})})]})]}),v.jsxs("div",{className:"md:col-span-3 space-y-4",children:[v.jsx("div",{className:"text-xs font-mono text-neutral-300 uppercase tracking-widest",children:"ECOSYSTEM"}),v.jsxs("ul",{className:"space-y-2 text-xs font-mono",children:[v.jsx("li",{children:v.jsxs("a",{href:`mailto:${kt.contactEmail}`,className:"hover:text-accent-cyan transition-colors inline-flex items-center gap-1.5",children:[v.jsx(Oh,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:kt.contactEmail})]})}),v.jsx("li",{children:v.jsxs("a",{href:kt.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors inline-flex items-center gap-1.5",children:[v.jsx(oo,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"GitHub Organization ↗"})]})}),v.jsx("li",{children:v.jsx("a",{href:"https://sharepinz.site/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-accent-cyan transition-colors",children:"SharePinz Live Platform ↗"})}),v.jsx("li",{children:v.jsx("a",{href:"https://github.com/Tech-Genz/SharePinz",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"SharePinz Repository ↗"})})]}),v.jsx("div",{className:"pt-4",children:v.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-300 hover:text-white transition-all",children:[v.jsx("span",{children:"BACK TO SUMMIT"}),v.jsx(OE,{className:"w-3.5 h-3.5"})]})})]})]}),v.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4",children:[v.jsxs("div",{children:["© ",o," TECH GENZ. ALL SYSTEMS OPERATIONAL."]}),v.jsxs("div",{className:"flex items-center gap-6",children:[v.jsx("span",{children:"DESIGNED WITH PRECISION"}),v.jsx("span",{children:"•"}),v.jsx("span",{className:"text-neutral-400",children:"LATENCY < 16MS"})]})]})]})})},k2=({onComplete:o})=>{const n=mt.useRef(null),[a,s]=mt.useState(!1),[c,f]=mt.useState(0),d=mt.useRef([]),h=mt.useRef(!1),p=()=>{h.current||(h.current=!0,s(!0),setTimeout(()=>{o()},300))};return mt.useEffect(()=>{const x=document.body.style.overflow;if(document.body.style.overflow="hidden",window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.style.overflow=x,o();return}const m=setTimeout(()=>f(1),950),S=setTimeout(()=>f(2),1250),M=setTimeout(()=>f(3),1950),R=setTimeout(()=>{h.current||s(!0)},4300),A=setTimeout(()=>{h.current||(h.current=!0,o())},4950);d.current=[m,S,M,R,A];const E=n.current;if(!E)return;const _=E.getContext("2d");if(!_)return;let L=E.width=window.innerWidth,P=E.height=window.innerHeight;const U=()=>{E&&(L=E.width=window.innerWidth,P=E.height=window.innerHeight)};window.addEventListener("resize",U);const K=Math.max(L,P),V=L<768?160:320,I=[];for(let le=0;le<V;le++){const te=Math.random()*Math.PI*2,fe=160+Math.random()*(K*.55),de=Math.random()<.28,k=.3+Math.random()*.7,ae=de?`rgba(0, 240, 255, ${k})`:`rgba(240, 245, 255, ${k})`,Z=Math.min(L,P)*.22,_e=Math.min(L,P)*.52,Se=Z+Math.random()*(_e-Z);I.push({baseAngle:te,initialRadius:fe,currentRadius:fe,targetRadius:Se,angularSpeed:(.4+Math.random()*.8)*(Math.random()<.5?1:-1),size:1.2+Math.random()*2.2,alpha:k,baseAlpha:k,color:ae,seed:Math.random()*100})}let j;const D=performance.now(),N=le=>{j=requestAnimationFrame(N);const te=(le-D)/1e3,fe=L/2,de=P/2;_.fillStyle="#050505",_.fillRect(0,0,L,P);const k=te<1,ae=te>=1&&te<1.4,Z=k?Math.min(.35,te*.35):Math.max(.18,.35-(te-1)*.05),_e=_.createRadialGradient(fe,de,0,fe,de,L*.5);if(_e.addColorStop(0,`rgba(0, 240, 255, ${Z*.4})`),_e.addColorStop(.3,`rgba(255, 255, 255, ${Z*.15})`),_e.addColorStop(1,"rgba(5, 5, 5, 0)"),_.fillStyle=_e,_.fillRect(0,0,L,P),ae){const Se=(te-1)/.35,be=Math.sin(Se*Math.PI)*.7;_.save(),_.globalCompositeOperation="lighter";const je=_.createRadialGradient(fe,de,0,fe,de,Math.min(L,P)*.65);je.addColorStop(0,`rgba(255, 255, 255, ${be})`),je.addColorStop(.25,`rgba(0, 240, 255, ${be*.7})`),je.addColorStop(.7,`rgba(0, 240, 255, ${be*.2})`),je.addColorStop(1,"rgba(5, 5, 5, 0)"),_.fillStyle=je,_.fillRect(0,0,L,P),_.restore()}for(let Se=0;Se<I.length;Se++){const be=I[Se];if(k){const je=Math.min(1,te/.95),ze=je*je;be.currentRadius=be.initialRadius*(1-ze)+8*ze;const w=be.baseAngle+be.angularSpeed*te*(1+ze*4),G=fe+Math.cos(w)*be.currentRadius,oe=de+Math.sin(w)*be.currentRadius;_.fillStyle=be.color,_.beginPath(),_.arc(G,oe,be.size*.5,0,Math.PI*2),_.fill()}else{const je=te-1,ze=Math.min(1,je/.5),w=1-Math.pow(1-ze,3);be.currentRadius=8+(be.targetRadius-8)*w;const G=be.baseAngle+be.angularSpeed*(1+je*.4),oe=Math.cos(te*1.5+be.seed)*12,se=Math.sin(te*1.5+be.seed)*12,Te=fe+Math.cos(G)*be.currentRadius+oe,Ne=de+Math.sin(G)*be.currentRadius+se,ge=.75+Math.sin(te*3+be.seed)*.25;_.fillStyle=be.color.replace(/[\d\.]+\)$/,`${be.baseAlpha*ge})`),_.beginPath(),_.arc(Te,Ne,be.size*.55,0,Math.PI*2),_.fill()}}if(te>=2&&te<3.2){const Se=(te-2)/1.2,be=fe-L*.6+Se*L*1.2;_.save(),_.globalCompositeOperation="lighter";const je=_.createLinearGradient(be-100,0,be+100,0);je.addColorStop(0,"rgba(0, 240, 255, 0)"),je.addColorStop(.5,"rgba(0, 240, 255, 0.15)"),je.addColorStop(1,"rgba(0, 240, 255, 0)"),_.fillStyle=je,_.fillRect(0,0,L,P),_.restore()}};j=requestAnimationFrame(N);const F=le=>{(le.key==="Escape"||le.key===" "||le.key==="Enter")&&p()};return window.addEventListener("keydown",F),()=>{document.body.style.overflow=x,cancelAnimationFrame(j),window.removeEventListener("keydown",F),window.removeEventListener("resize",U),d.current.forEach(le=>clearTimeout(le))}},[o]),v.jsxs("div",{onClick:p,className:`fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-700 cursor-pointer overflow-hidden ${a?"opacity-0 pointer-events-none":"opacity-100"}`,"aria-label":"Tech Genz intro animation. Click to skip.",children:[v.jsx("canvas",{ref:n,className:"absolute inset-0 w-full h-full z-10 pointer-events-none"}),v.jsxs("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 pointer-events-none select-none",children:[v.jsx("div",{className:`absolute w-[92vw] max-w-4xl h-72 sm:h-96 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${c>=2?"bg-accent-cyan/15 opacity-100 scale-100":c>=1?"bg-white/10 opacity-70 scale-75":"opacity-0 scale-50"}`}),v.jsx("div",{className:`relative transition-all duration-700 ease-out transform ${c>=2?"opacity-100 scale-100 translate-y-0":"opacity-0 scale-90 translate-y-4"}`,children:v.jsx("h1",{className:"text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-display font-extrabold tracking-tight uppercase leading-none text-white whitespace-nowrap drop-shadow-[0_0_40px_rgba(0,240,255,0.45)] select-none",children:"TECH GENZ"})}),v.jsx("div",{className:`relative mt-4 sm:mt-7 transition-all duration-700 delay-100 ease-out transform ${c>=3?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:v.jsxs("div",{className:"flex items-center justify-center gap-2.5 sm:gap-4 px-2",children:[v.jsx("span",{className:"hidden sm:inline-block w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-accent-cyan/80"}),v.jsx("p",{className:"text-[10px] xs:text-xs sm:text-sm md:text-base font-mono tracking-[0.18em] xs:tracking-[0.24em] sm:tracking-[0.38em] text-neutral-200 uppercase font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] whitespace-nowrap",children:"IDEAS ENGINEERED BEYOND LIMITS"}),v.jsx("span",{className:"hidden sm:inline-block w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-accent-cyan/80"})]})})]}),v.jsxs("div",{className:"absolute top-8 left-6 sm:top-auto sm:bottom-8 sm:left-8 z-30 flex items-center gap-2.5 text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase select-none pointer-events-none",children:[v.jsx("span",{className:"w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF] animate-pulse"}),v.jsxs("span",{children:[c===0&&"TECH GENZ // SYSTEM INIT",c===1&&"TECH GENZ // CONVERGING CORE",c===2&&"TECH GENZ // BRAND REVEAL",c>=3&&"TECH GENZ // SYSTEM ONLINE"]})]}),v.jsxs("button",{onClick:x=>{x.stopPropagation(),p()},className:"absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-[11px] sm:text-xs uppercase font-mono tracking-widest text-neutral-300 hover:text-white hover:border-white/50 transition-all duration-300 shadow-xl cursor-pointer",title:"Skip intro animation",children:[v.jsx("span",{children:"Skip Intro"}),v.jsx("span",{className:"text-[10px] text-neutral-500",children:"[ESC]"})]})]})},X2=()=>{const[o,n]=mt.useState(!1),[a,s]=mt.useState("home"),[c,f]=mt.useState(0);return mt.useEffect(()=>{const d=()=>{const h=window.scrollY,p=window.innerHeight,x=Math.min(1,Math.max(0,h/(p*.9)));f(x);const y=["home","about","services","projects","team","technology","contact"];for(const m of y){const S=document.getElementById(m);if(S){const M=S.getBoundingClientRect();if(M.top<=200&&M.bottom>=200){s(m);break}}}};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),v.jsxs("div",{className:"min-h-screen bg-[#050505] text-[#F5F5F7] font-sans selection:bg-white selection:text-black overflow-x-hidden",children:[!o&&v.jsx(k2,{onComplete:()=>n(!0)}),v.jsx(SM,{activeSection:a}),v.jsxs("main",{children:[v.jsx(O2,{scrollProgress:c}),v.jsx(z2,{}),v.jsx(P2,{}),v.jsx(B2,{}),v.jsx(F2,{}),v.jsx(H2,{}),v.jsx(G2,{}),v.jsx(V2,{})]}),v.jsx(j2,{})]})};AE.createRoot(document.getElementById("root")).render(v.jsx(vE.StrictMode,{children:v.jsx(X2,{})}));setTimeout(()=>{const o=document.getElementById("root");o&&o.children.length===0&&((a=>{if(!document.querySelector(`link[href="${a}"]`)){const s=document.createElement("link");s.rel="stylesheet",s.crossOrigin="",s.href=a,document.head.appendChild(s)}})("/assets/index.css"),new Function("return import('/assets/index.js')")().catch(a=>{console.error("Failed to load compiled production bundle:",a)}))},50);
