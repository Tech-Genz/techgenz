(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function $x(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kd={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function pM(){if(Vv)return el;Vv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return el.Fragment=n,el.jsx=a,el.jsxs=a,el}var jv;function mM(){return jv||(jv=1,Kd.exports=pM()),Kd.exports}var y=mM(),Qd={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function gM(){if(kv)return se;kv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,_={};function O(w,V,ct){this.props=w,this.context=V,this.refs=_,this.updater=ct||N}O.prototype.isReactComponent={},O.prototype.setState=function(w,V){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,V,"setState")},O.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function I(){}I.prototype=O.prototype;function U(w,V,ct){this.props=w,this.context=V,this.refs=_,this.updater=ct||N}var W=U.prototype=new I;W.constructor=U,M(W,O.prototype),W.isPureReactComponent=!0;var j=Array.isArray;function P(){}var G={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(w,V,ct){var ot=ct.ref;return{$$typeof:o,type:w,key:V,ref:ot!==void 0?ot:null,props:ct}}function F(w,V){return C(w.type,V,w.props)}function ft(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function it(w){var V={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ct){return V[ct]})}var at=/\/+/g;function dt(w,V){return typeof w=="object"&&w!==null&&w.key!=null?it(""+w.key):V.toString(36)}function X(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(P,P):(w.status="pending",w.then(function(V){w.status==="pending"&&(w.status="fulfilled",w.value=V)},function(V){w.status==="pending"&&(w.status="rejected",w.reason=V)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function rt(w,V,ct,ot,Tt){var Dt=typeof w;(Dt==="undefined"||Dt==="boolean")&&(w=null);var vt=!1;if(w===null)vt=!0;else switch(Dt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(w.$$typeof){case o:case n:vt=!0;break;case x:return vt=w._init,rt(vt(w._payload),V,ct,ot,Tt)}}if(vt)return Tt=Tt(w),vt=ot===""?"."+dt(w,0):ot,j(Tt)?(ct="",vt!=null&&(ct=vt.replace(at,"$&/")+"/"),rt(Tt,V,ct,"",function(Zt){return Zt})):Tt!=null&&(ft(Tt)&&(Tt=F(Tt,ct+(Tt.key==null||w&&w.key===Tt.key?"":(""+Tt.key).replace(at,"$&/")+"/")+vt)),V.push(Tt)),1;vt=0;var St=ot===""?".":ot+":";if(j(w))for(var At=0;At<w.length;At++)ot=w[At],Dt=St+dt(ot,At),vt+=rt(ot,V,ct,Dt,Tt);else if(At=T(w),typeof At=="function")for(w=At.call(w),At=0;!(ot=w.next()).done;)ot=ot.value,Dt=St+dt(ot,At++),vt+=rt(ot,V,ct,Dt,Tt);else if(Dt==="object"){if(typeof w.then=="function")return rt(X(w),V,ct,ot,Tt);throw V=String(w),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return vt}function Q(w,V,ct){if(w==null)return w;var ot=[],Tt=0;return rt(w,ot,"","",function(Dt){return V.call(ct,Dt,Tt++)}),ot}function Mt(w){if(w._status===-1){var V=w._result,ct=V();ct.then(function(ot){(w._status===0||w._status===-1)&&(w._status=1,w._result=ot,ct.status===void 0&&(ct.status="fulfilled",ct.value=ot))},function(ot){(w._status===0||w._status===-1)&&(w._status=2,w._result=ot,ct.status===void 0&&(ct.status="rejected",ct.reason=ot))}),w._status===-1&&(w._status=0,w._result=ct)}if(w._status===1)return w._result.default;throw w._result}var Et=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Gt(w){var V=G.T,ct={};ct.types=V!==null?V.types:null,G.T=ct;try{var ot=w(),Tt=G.S;Tt!==null&&Tt(ct,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(P,Et)}catch(Dt){Et(Dt)}finally{V!==null&&ct.types!==null&&(V.types=ct.types),G.T=V}}function ee(w){var V=G.T;if(V!==null){var ct=V.types;ct===null?V.types=[w]:ct.indexOf(w)===-1&&ct.push(w)}else Gt(ee.bind(null,w))}var Ht={map:Q,forEach:function(w,V,ct){Q(w,function(){V.apply(this,arguments)},ct)},count:function(w){var V=0;return Q(w,function(){V++}),V},toArray:function(w){return Q(w,function(V){return V})||[]},only:function(w){if(!ft(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return se.Activity=m,se.Children=Ht,se.Component=O,se.Fragment=a,se.Profiler=c,se.PureComponent=U,se.StrictMode=s,se.Suspense=p,se.ViewTransition=S,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,se.__COMPILER_RUNTIME={__proto__:null,c:function(w){return G.H.useMemoCache(w)}},se.addTransitionType=ee,se.cache=function(w){return function(){return w.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(w,V,ct){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ot=M({},w.props),Tt=w.key;if(V!=null)for(Dt in V.key!==void 0&&(Tt=""+V.key),V)!D.call(V,Dt)||Dt==="key"||Dt==="__self"||Dt==="__source"||Dt==="ref"&&V.ref===void 0||(ot[Dt]=V[Dt]);var Dt=arguments.length-2;if(Dt===1)ot.children=ct;else if(1<Dt){for(var vt=Array(Dt),St=0;St<Dt;St++)vt[St]=arguments[St+2];ot.children=vt}return C(w.type,Tt,ot)},se.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},se.createElement=function(w,V,ct){var ot,Tt={},Dt=null;if(V!=null)for(ot in V.key!==void 0&&(Dt=""+V.key),V)D.call(V,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(Tt[ot]=V[ot]);var vt=arguments.length-2;if(vt===1)Tt.children=ct;else if(1<vt){for(var St=Array(vt),At=0;At<vt;At++)St[At]=arguments[At+2];Tt.children=St}if(w&&w.defaultProps)for(ot in vt=w.defaultProps,vt)Tt[ot]===void 0&&(Tt[ot]=vt[ot]);return C(w,Dt,Tt)},se.createRef=function(){return{current:null}},se.forwardRef=function(w){return{$$typeof:h,render:w}},se.isValidElement=ft,se.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:Mt}},se.memo=function(w,V){return{$$typeof:v,type:w,compare:V===void 0?null:V}},se.startTransition=Gt,se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},se.use=function(w){return G.H.use(w)},se.useActionState=function(w,V,ct){return G.H.useActionState(w,V,ct)},se.useCallback=function(w,V){return G.H.useCallback(w,V)},se.useContext=function(w){return G.H.useContext(w)},se.useDebugValue=function(){},se.useDeferredValue=function(w,V){return G.H.useDeferredValue(w,V)},se.useEffect=function(w,V){return G.H.useEffect(w,V)},se.useEffectEvent=function(w){return G.H.useEffectEvent(w)},se.useId=function(){return G.H.useId()},se.useImperativeHandle=function(w,V,ct){return G.H.useImperativeHandle(w,V,ct)},se.useInsertionEffect=function(w,V){return G.H.useInsertionEffect(w,V)},se.useLayoutEffect=function(w,V){return G.H.useLayoutEffect(w,V)},se.useMemo=function(w,V){return G.H.useMemo(w,V)},se.useOptimistic=function(w,V){return G.H.useOptimistic(w,V)},se.useReducer=function(w,V,ct){return G.H.useReducer(w,V,ct)},se.useRef=function(w){return G.H.useRef(w)},se.useState=function(w){return G.H.useState(w)},se.useSyncExternalStore=function(w,V,ct){return G.H.useSyncExternalStore(w,V,ct)},se.useTransition=function(){return G.H.useTransition()},se.version="19.3.1",se}var Xv;function bp(){return Xv||(Xv=1,Qd.exports=gM()),Qd.exports}var Ee=bp();const vM=$x(Ee);var Jd={exports:{}},nl={},$d={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function xM(){return qv||(qv=1,(function(o){function n(X,rt){var Q=X.length;X.push(rt);t:for(;0<Q;){var Mt=Q-1>>>1,Et=X[Mt];if(0<c(Et,rt))X[Mt]=rt,X[Q]=Et,Q=Mt;else break t}}function a(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var rt=X[0],Q=X.pop();if(Q!==rt){X[0]=Q;t:for(var Mt=0,Et=X.length,Gt=Et>>>1;Mt<Gt;){var ee=2*(Mt+1)-1,Ht=X[ee],w=ee+1,V=X[w];if(0>c(Ht,Q))w<Et&&0>c(V,Ht)?(X[Mt]=V,X[w]=Q,Mt=w):(X[Mt]=Ht,X[ee]=Q,Mt=ee);else if(w<Et&&0>c(V,Q))X[Mt]=V,X[w]=Q,Mt=w;else break t}}return rt}function c(X,rt){var Q=X.sortIndex-rt.sortIndex;return Q!==0?Q:X.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],v=[],x=1,m=null,S=3,E=!1,T=!1,N=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function U(X){for(var rt=a(v);rt!==null;){if(rt.callback===null)s(v);else if(rt.startTime<=X)s(v),rt.sortIndex=rt.expirationTime,n(p,rt);else break;rt=a(v)}}function W(X){if(N=!1,U(X),!T)if(a(p)!==null)T=!0,j||(j=!0,ft());else{var rt=a(v);rt!==null&&dt(W,rt.startTime-X)}}var j=!1,P=-1,G=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<G)}function F(){if(M=!1,j){var X=o.unstable_now();D=X;var rt=!0;try{t:{T=!1,N&&(N=!1,O(P),P=-1),E=!0;var Q=S;try{e:{for(U(X),m=a(p);m!==null&&!(m.expirationTime>X&&C());){var Mt=m.callback;if(typeof Mt=="function"){m.callback=null,S=m.priorityLevel;var Et=Mt(m.expirationTime<=X);if(X=o.unstable_now(),typeof Et=="function"){m.callback=Et,U(X),rt=!0;break e}m===a(p)&&s(p),U(X)}else s(p);m=a(p)}if(m!==null)rt=!0;else{var Gt=a(v);Gt!==null&&dt(W,Gt.startTime-X),rt=!1}}break t}finally{m=null,S=Q,E=!1}rt=void 0}}finally{rt?ft():j=!1}}}var ft;if(typeof I=="function")ft=function(){I(F)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,at=it.port2;it.port1.onmessage=F,ft=function(){at.postMessage(null)}}else ft=function(){_(F,0)};function dt(X,rt){P=_(function(){X(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(X){switch(S){case 1:case 2:case 3:var rt=3;break;default:rt=S}var Q=S;S=rt;try{return X()}finally{S=Q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(X,rt){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Q=S;S=X;try{return rt()}finally{S=Q}},o.unstable_scheduleCallback=function(X,rt,Q){var Mt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Mt+Q:Mt):Q=Mt,X){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Q+Et,X={id:x++,callback:rt,priorityLevel:X,startTime:Q,expirationTime:Et,sortIndex:-1},Q>Mt?(X.sortIndex=Q,n(v,X),a(p)===null&&X===a(v)&&(N?(O(P),P=-1):N=!0,dt(W,Q-Mt))):(X.sortIndex=Et,n(p,X),T||E||(T=!0,j||(j=!0,ft()))),X},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(X){var rt=S;return function(){var Q=S;S=rt;try{return X.apply(this,arguments)}finally{S=Q}}}})(th)),th}var Yv;function _M(){return Yv||(Yv=1,$d.exports=xM()),$d.exports}var eh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function yM(){if(Wv)return Un;Wv=1;var o=bp();function n(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,m,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:E===d?d:""+E,children:x,containerInfo:m,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(x){return{$$typeof:f,_reason:x}},Un.createPortal=function(x,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return h(x,m,null,S)},Un.flushSync=function(x){var m=p.T,S=s.p;try{if(p.T=null,s.p=2,x)return x()}finally{p.T=m,s.p=S,s.d.f()}},Un.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(x,m))},Un.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Un.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var S=m.as,E=v(S,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,N=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?s.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:N}):S==="script"&&s.d.X(x,{crossOrigin:E,integrity:T,fetchPriority:N,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=v(m.as,m.crossOrigin);s.d.M(x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(x)},Un.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,E=v(S,m.crossOrigin);s.d.L(x,S,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(x,m){if(typeof x=="string")if(m){var S=v(m.as,m.crossOrigin);s.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(x)},Un.requestFormReset=function(x){s.d.r(x)},Un.unstable_batchedUpdates=function(x,m){return x(m)},Un.useFormState=function(x,m,S){return p.H.useFormState(x,m,S)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.1",Un}var Zv;function SM(){if(Zv)return eh.exports;Zv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),eh.exports=yM(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function MM(){if(Kv)return nl;Kv=1;var o=_M(),n=bp(),a=SM();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function v(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return p(l),t;if(u===r)return p(l),e;u=u.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=u;else{for(var g=!1,b=l.child;b;){if(b===i){g=!0,i=l,r=u;break}if(b===r){g=!0,r=l,i=u;break}b=b.sibling}if(!g){for(b=u.child;b;){if(b===i){g=!0,i=u,r=l;break}if(b===r){g=!0,r=u,i=l;break}b=b.sibling}if(!g)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}function m(t,e,i,r,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,u)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&m(t.child,e,i,r,l,u))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function T(t){var e=[null,null],i=S(t);return i===null||N(e,t,i.child,{foundSelf:!1}),e}function N(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&N(t,e,i.child,r))return!0;i=i.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,O=null;function I(t,e,i){return t===i?!0:t===e?(_=t,!0):!1}function U(t,e,i){return t===i?(O=t,!1):t===e?(O!==null&&(_=t),!0):!1}function W(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function j(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var u=e;u;u=i(u))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var P=Object.assign,G=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),at=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),Mt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),ee=Symbol.for("react.legacy_hidden"),Ht=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),V=Symbol.for("react.recoverable"),ct=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case it:return"Profiler";case ft:return"StrictMode";case rt:return"Suspense";case Q:return"SuspenseList";case Gt:return"Activity";case w:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case dt:return t.displayName||"Context";case at:return(t._context.displayName||"Context")+".Consumer";case X:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mt:return e=t.displayName||null,e!==null?e:Dt(t.type)||"Memo";case Et:e=t._payload,t=t._init;try{return Dt(t(e))}catch{}}return null}var vt=Array.isArray,St=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Zt={pending:!1,data:null,method:null,action:null},B=[],ke=-1;function Qt(t){return{current:t}}function Xt(t){0>ke||(t.current=B[ke],B[ke]=null,ke--)}function Rt(t,e){ke++,B[ke]=t.current,t.current=e}var de=Qt(null),qt=Qt(null),L=Qt(null),A=Qt(null);function et(t,e){switch(Rt(L,e),Rt(qt,t),Rt(de,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Q0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Q0(e),t=J0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Xt(de),Rt(de,t)}function xt(){Xt(de),Xt(qt),Xt(L)}function yt(t){var e=t.memoizedState;e!==null&&(Ls._currentValue=e.memoizedState,Rt(A,t)),e=de.current;var i=J0(e,t.type);e!==i&&(Rt(qt,t),Rt(de,i))}function gt(t){qt.current===t&&(Xt(de),Xt(qt)),A.current===t&&(Xt(A),Ls._currentValue=Zt)}var Yt,zt;function Bt(t){if(Yt===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Yt=e&&e[1]||"",zt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+zt}var ge=!1;function wt(t,e){if(!t||ge)return"";ge=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Ut){var q=Ut}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Ut){q=Ut}mt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ut){q=Ut}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Ut){if(Ut&&q&&typeof Ut.stack=="string")return[Ut.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],b=u[1];if(g&&b){var z=g.split(`
`),Z=b.split(`
`);for(l=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;if(r===z.length||l===Z.length)for(r=z.length-1,l=Z.length-1;1<=r&&0<=l&&z[r]!==Z[l];)l--;for(;1<=r&&0<=l;r--,l--)if(z[r]!==Z[l]){if(r!==1||l!==1)do if(r--,l--,0>l||z[r]!==Z[l]){var nt=`
`+z[r].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=r&&0<=l);break}}}finally{ge=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Bt(i):""}function kt(t,e){switch(t.tag){case 26:case 27:case 5:return Bt(t.type);case 16:return Bt("Lazy");case 13:return t.child!==e&&e!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return wt(t.type,!1);case 11:return wt(t.type.render,!1);case 1:return wt(t.type,!0);case 31:return Bt("Activity");case 30:return Bt("ViewTransition");default:return""}}function ne(t){try{var e="",i=null;do e+=kt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ae=Object.prototype.hasOwnProperty,jt=o.unstable_scheduleCallback,me=o.unstable_cancelCallback,le=o.unstable_shouldYield,Ie=o.unstable_requestPaint,k=o.unstable_now,Pt=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,It=o.unstable_NormalPriority,Ft=o.unstable_LowPriority,oe=o.unstable_IdlePriority,Ke=o.log,vn=o.unstable_setDisableYieldValue,be=null,We=null;function xn(t){if(typeof Ke=="function"&&vn(t),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(be,t)}catch{}}var Ln=Math.clz32?Math.clz32:co,vl=Math.log,Yi=Math.LN2;function co(t){return t>>>=0,t===0?32:31-(vl(t)/Yi|0)|0}var fr=256,dr=262144,Wi=4194304;function Li(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zi(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,u=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~u,r!==0?l=Li(r):(g&=b,g!==0?l=Li(g):i||(i=b&~t,i!==0&&(l=Li(i))))):(b=r&~u,b!==0?l=Li(b):g!==0?l=Li(g):i||(i=r&~t,i!==0&&(l=Li(i)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,i=e&-e,u>=i||u===32&&(i&4194048)!==0)?e:l}function Ta(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function uo(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-Ln(i),l=1<<r;e|=t[r],i&=~l}return e}function Eu(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xl(){var t=Wi;return Wi<<=1,(Wi&62914560)===0&&(Wi=4194304),t}function fo(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function hr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bu(t,e,i,r,l,u){var g=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var b=t.entanglements,z=t.expirationTimes,Z=t.hiddenUpdates;for(i=g&~i;0<i;){var nt=31-Ln(i),mt=1<<nt;b[nt]=0,z[nt]=-1;var q=Z[nt];if(q!==null)for(Z[nt]=null,nt=0;nt<q.length;nt++){var tt=q[nt];tt!==null&&(tt.lane&=-536870913)}i&=~mt}r!==0&&_l(t,r,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(g&~e))}function _l(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Ln(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function R(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-Ln(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function K(t,e){var i=e&-e;return i=(i&42)!==0?1:st(i),(i&(t.suspendedLanes|e))!==0?0:i}function st(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function J(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:zv(t.type))}function bt(t,e){var i=At.p;try{return At.p=t,e()}finally{At.p=i}}var Nt=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Nt,Lt="__reactProps$"+Nt,te="__reactContainer$"+Nt,re="__reactEvents$"+Nt,$t="__reactListeners$"+Nt,Te="__reactHandles$"+Nt,Re="__reactResources$"+Nt,Xe="__reactMarker$"+Nt,Ge="__reactLoad$"+Nt;function ve(t){delete t[Ct],delete t[Lt],delete t[$t],delete t[Te]}function Kt(t){var e;if(e=t[Ct])return e;for(var i=t.parentNode;i;){if(e=i[te]||i[Ct]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=mv(t);t!==null;){if(i=t[Ct])return i;t=mv(t)}return e}t=i,i=t.parentNode}return null}function Qe(t){if(t=t[Ct]||t[te]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ye(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function _n(t){var e=t[Re];return e||(e=t[Re]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ze(t){t[Xe]=!0}function On(t){t[Ge]=void 0}var Aa=new Set,Ve={};function on(t,e){hn(t,e),hn(t+"Capture",e)}function hn(t,e){for(Ve[t]=e,t=0;t<e.length;t++)Aa.add(e[t])}var Tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),An={},Kr={};function Ki(t){return ae.call(Kr,t)?!0:ae.call(An,t)?!1:Tn.test(t)?Kr[t]=!0:(An[t]=!0,!1)}var Ce=!1;function Ip(){var t=Ce;return Ce=!1,t}function yl(t,e,i){if(Ki(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function Sl(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function Qi(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O_(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,u.call(this,g)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tu(t){if(!t._valueTracker){var e=Bp(t)?"checked":"value";t._valueTracker=O_(t,e,""+t[e])}}function Fp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=Bp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var z_=/[\n"\\]/g;function li(t){return t.replace(z_,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Au(t,e,i,r,l,u,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Jn(e)):t.value!==""+Jn(e)&&(t.value=""+Jn(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?g==="number"&&t.value==e?wu(t,Jn(t.value)):wu(t,Jn(e)):i!=null?wu(t,Jn(i)):r!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Jn(b):t.removeAttribute("name")}function Hp(t,e,i,r,l,u,g,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Tu(t);return}i=i!=null?""+Jn(i):"",e=e!=null?""+Jn(e):i,b||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Tu(t)}function wu(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Qr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Jn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Gp(t,e,i){if(e!=null&&(e=""+Jn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Jn(i):""}function Vp(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(vt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Jn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Tu(t)}function Jr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var P_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jp(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||P_.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function kp(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ce=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(jp(t,l,r),Ce=!0)}else for(var u in e)e.hasOwnProperty(u)&&jp(t,u,e[u])}function Ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(t){return B_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Cu=null;function Nu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $r=null,ts=null;function Xp(t){var e=Qe(t);if(e&&(t=e.stateNode)){var i=t[Lt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Au(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+li(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[Lt]||null;if(!l)throw Error(s(90));Au(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Fp(r)}break t;case"textarea":Gp(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Qr(t,!!i.multiple,e,!1)}}}var Du=!1;function qp(t,e,i){if(Du)return t(e,i);Du=!0;try{var r=t(e);return r}finally{if(Du=!1,($r!==null||ts!==null)&&(Mc(),$r&&(e=$r,t=ts,ts=$r=null,Xp(e),t)))for(e=0;e<t.length;e++)Xp(t[e])}}function ho(t,e){var i=t.stateNode;if(i===null)return null;var r=i[Lt]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(Ji)try{var po={};Object.defineProperty(po,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Uu=!1}var wa=null,Lu=null,El=null;function Yp(){if(El)return El;var t,e=Lu,i=e.length,r,l="value"in wa?wa.value:wa.textContent,u=l.length;for(t=0;t<i&&e[t]===l[t];t++);var g=i-t;for(r=1;r<=g&&e[i-r]===l[u-r];r++);return El=l.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function Wp(){return!1}function Bn(t){function e(i,r,l,u,g){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(i=t[b],this[b]=i?i(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Tl:Wp,this.isPropagationStopped=Wp,this}return P(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Bn(Ra),mo=P({},Ra,{view:0,detail:0}),F_=Bn(mo),Ou,zu,go,wl=P({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Ou=t.screenX-go.screenX,zu=t.screenY-go.screenY):zu=Ou=0,go=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Zp=Bn(wl),H_=P({},wl,{dataTransfer:0}),G_=Bn(H_),V_=P({},mo,{relatedTarget:0}),Pu=Bn(V_),j_=P({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),k_=Bn(j_),X_=P({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q_=Bn(X_),Y_=P({},Ra,{data:0}),Kp=Bn(Y_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K_[t])?!!e[t]:!1}function Iu(){return Q_}var J_=P({},mo,{key:function(t){if(t.key){var e=W_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=Bn(J_),ty=P({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Bn(ty),ey=P({},Ra,{submitter:0}),ny=Bn(ey),iy=P({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),ay=Bn(iy),ry=P({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Bn(ry),oy=P({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=Bn(oy),cy=P({},Ra,{newState:0,oldState:0,source:0}),uy=Bn(cy),fy=[9,13,27,32],Bu=Ji&&"CompositionEvent"in window,vo=null;Ji&&"documentMode"in document&&(vo=document.documentMode);var dy=Ji&&"TextEvent"in window&&!vo,Jp=Ji&&(!Bu||vo&&8<vo&&11>=vo),$p=" ",tm=!1;function em(t,e){switch(t){case"keyup":return fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function hy(t,e){switch(t){case"compositionend":return nm(e);case"keypress":return e.which!==32?null:(tm=!0,$p);case"textInput":return t=e.data,t===$p&&tm?null:t;default:return null}}function py(t,e){if(es)return t==="compositionend"||!Bu&&em(t,e)?(t=Yp(),El=Lu=wa=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jp&&e.locale!=="ko"?null:e.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!my[t.type]:e==="textarea"}function am(t,e,i,r){$r?ts?ts.push(r):ts=[r]:$r=r,e=Rc(e,"onChange"),0<e.length&&(i=new Al("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var xo=null,_o=null;function gy(t){X0(t,0)}function Rl(t){var e=ye(t);if(Fp(e))return t}function rm(t,e){if(t==="change")return e}var sm=!1;if(Ji){var Fu;if(Ji){var Hu="oninput"in document;if(!Hu){var om=document.createElement("div");om.setAttribute("oninput","return;"),Hu=typeof om.oninput=="function"}Fu=Hu}else Fu=!1;sm=Fu&&(!document.documentMode||9<document.documentMode)}function lm(){xo&&(xo.detachEvent("onpropertychange",cm),_o=xo=null)}function cm(t){if(t.propertyName==="value"&&Rl(_o)){var e=[];am(e,_o,t,Nu(t)),qp(gy,e)}}function vy(t,e,i){t==="focusin"?(lm(),xo=e,_o=i,xo.attachEvent("onpropertychange",cm)):t==="focusout"&&lm()}function xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(_o)}function _y(t,e){if(t==="click")return Rl(e)}function yy(t,e){if(t==="input"||t==="change")return Rl(e)}function Sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:Sy;function yo(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!ae.call(e,l)||!$n(t[l],e[l]))return!1}return!0}function Gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fm(t,e){var i=um(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=um(i)}}function dm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Gu(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Gu(t.document)}return e}function Vu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var My=Ji&&"documentMode"in document&&11>=document.documentMode,ns=null,ju=null,So=null,ku=!1;function pm(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ku||ns==null||ns!==Gu(r)||(r=ns,"selectionStart"in r&&Vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&yo(So,r)||(So=r,r=Rc(ju,"onSelect"),0<r.length&&(e=new Al("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=ns)))}function pr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var is={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},Xu={},mm={};Ji&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function mr(t){if(Xu[t])return Xu[t];if(!is[t])return t;var e=is[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in mm)return Xu[t]=e[i];return t}var gm=mr("animationend"),vm=mr("animationiteration"),xm=mr("animationstart"),Ey=mr("transitionrun"),by=mr("transitionstart"),Ty=mr("transitioncancel"),_m=mr("transitionend"),ym=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Si(t,e){ym.set(t,e),on(e,[t])}var Ay=0;function $i(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ti.identifierPrefix;var i=Ay++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function Sm(t){if(t==null||typeof t=="string")return t;var e=null,i=Es;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function ta(t,e){return t=Sm(t),e=Sm(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],as=0,Yu=0;function Nl(){for(var t=as,e=Yu=as=0;e<t;){var i=ci[e];ci[e++]=null;var r=ci[e];ci[e++]=null;var l=ci[e];ci[e++]=null;var u=ci[e];if(ci[e++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}u!==0&&Mm(i,l,u)}}function Dl(t,e,i,r){ci[as++]=t,ci[as++]=e,ci[as++]=i,ci[as++]=r,Yu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Wu(t,e,i,r){return Dl(t,e,i,r),Ul(t)}function gr(t,e){return Dl(t,null,null,e),Ul(t)}function Mm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,u=t.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-Ln(i),t=u.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),u):null}function Ul(t){if(50<jo)throw jo=0,Sc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var rs={};function wy(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,i,r){return new wy(t,e,i,r)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,e){var i=t.alternate;return i===null?(i=kn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Em(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ll(t,e,i,r,l,u){var g=0;if(r=t,typeof r=="function")Zu(r)&&(g=1);else if(typeof r=="string")g=eM(t,i,de.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Gt:return t=kn(31,i,e,l),t.elementType=Gt,t.lanes=u,t;case F:return vr(i.children,l,u,e);case ft:g=8,l|=24;break;case it:return t=kn(12,i,e,l|2),t.elementType=it,t.lanes=u,t;case rt:return t=kn(13,i,e,l),t.elementType=rt,t.lanes=u,t;case Q:return t=kn(19,i,e,l),t.elementType=Q,t.lanes=u,t;case ee:case w:return t=l|32,t=kn(30,i,e,t),t.elementType=w,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case dt:g=10;break t;case at:g=9;break t;case X:g=11;break t;case Mt:g=14;break t;case Et:g=16,r=null;break t}g=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=kn(g,i,e,l),e.elementType=t,e.type=r,e.lanes=u,e}function vr(t,e,i,r){return t=kn(7,t,r,e),t.lanes=i,t}function Ku(t,e,i){return t=kn(6,t,null,e),t.lanes=i,t}function bm(t){var e=kn(18,null,null,0);return e.stateNode=t,e}function Qu(t,e,i){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Tm=new WeakMap;function ui(t,e){if(typeof t=="object"&&t!==null){var i=Tm.get(t);return i!==void 0?i:(e={value:t,source:e,stack:ne(e)},Tm.set(t,e),e)}return{value:t,source:e,stack:ne(e)}}var ss=[],os=0,Ol=null,Mo=0,fi=[],di=0,Ca=null,zi=1,Pi="";function na(t,e){ss[os++]=Mo,ss[os++]=Ol,Ol=t,Mo=e}function Am(t,e,i){fi[di++]=zi,fi[di++]=Pi,fi[di++]=Ca,Ca=t;var r=zi;t=Pi;var l=32-Ln(r)-1;r&=~(1<<l),i+=1;var u=32-Ln(e)+l;if(30<u){var g=l-l%5;u=(r&(1<<g)-1).toString(32),r>>=g,l-=g,zi=1<<32-Ln(e)+l|i<<l|r,Pi=u+t}else zi=1<<u|i<<l|r,Pi=t}function zl(t){t.return!==null&&(na(t,1),Am(t,1,0))}function Ju(t){for(;t===Ol;)Ol=ss[--os],ss[os]=null,Mo=ss[--os],ss[os]=null;for(;t===Ca;)Ca=fi[--di],fi[di]=null,Pi=fi[--di],fi[di]=null,zi=fi[--di],fi[di]=null}function wm(t,e){fi[di++]=zi,fi[di++]=Pi,fi[di++]=Ca,zi=e.id,Pi=e.overflow,Ca=t}var yn=null,qe=null,pe=!1,Na=null,hi=!1,$u=Error(s(519));function Da(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(ui(e,t)),$u}function Rm(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[Ct]=t,e[Lt]=r,i){case"dialog":_e("cancel",e),_e("close",e);break;case"iframe":case"object":case"embed":_e("load",e);break;case"video":case"audio":for(i=0;i<Xo.length;i++)_e(Xo[i],e);break;case"source":_e("error",e);break;case"img":case"image":case"link":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"input":_e("invalid",e),Hp(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",e);break;case"textarea":_e("invalid",e),Vp(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||Z0(e.textContent,i)?(r.popover!=null&&(_e("beforetoggle",e),_e("toggle",e)),r.onScroll!=null&&_e("scroll",e),r.onScrollEnd!=null&&_e("scrollend",e),r.onClick!=null&&(e.onclick=Oi),e=!0):e=!1,e||Da(t,!0)}function Pl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:yn=yn.return}}function ls(t){if(t!==yn)return!1;if(!pe)return Pl(t),pe=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Nd(t.type,t.memoizedProps)),i=!i),i&&qe&&Da(t),Pl(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=pv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=pv(t)}else e===27?(e=qe,Ya(t.type)?(t=Fd,Fd=null,qe=t):qe=e):qe=yn?mi(t.stateNode.nextSibling):null;return!0}function xr(){qe=yn=null,pe=!1}function tf(){var t=Na;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Na=null),t}function Eo(t){Na===null?Na=[t]:Na.push(t)}var ef=Qt(null),_r=null,ia=null;function Ua(t,e,i){Rt(ef,e._currentValue),e._currentValue=i}function aa(t){t._currentValue=ef.current,Xt(ef)}function Il(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function nf(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var g=l.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=l;for(var z=0;z<e.length;z++)if(b.context===e[z]){u.lanes|=i,b=u.alternate,b!==null&&(b.lanes|=i),Il(u.return,i,t),r||(g=null);break t}u=b.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=i,u=g.alternate,u!==null&&(u.lanes|=i),Il(g,i,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,g=l.alternate,g!==null&&(g.lanes|=i),Il(l.return,i,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function yr(t,e,i,r){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=l.type;$n(l.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(l===A.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ls):t=[Ls])}l=l.return}return t!==null&&nf(e,t,i,r),e.flags|=262144,t!==null}function Bl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){_r=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Cm(_r,t)}function Fl(t,e){return _r===null&&Sr(t),Cm(t,e)}function Cm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},ia===null){if(t===null)throw Error(s(308));ia=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ia=ia.next=e;return i}var Ry=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},Cy=o.unstable_scheduleCallback,Ny=o.unstable_NormalPriority,ln={$$typeof:dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new Ry,data:new Map,refCount:0}}function bo(t){t.refCount--,t.refCount===0&&Cy(Ny,function(){t.controller.abort()})}function Nm(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var To=null;function Dy(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Ao=null,rf=0,Mr=0,cs=null;function Uy(t,e){if(Ao===null){var i=Ao=[];rf=0,Mr=Sd(),cs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return rf++,e.then(Dm,Dm),e}function Dm(){if(--rf===0&&(To=null,Ao!==null)){cs!==null&&(cs.status="fulfilled");var t=Ao;Ao=null,Mr=0,cs=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ly(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Um=St.S;St.S=function(t,e){if(b0=k(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Uy(t,e),To!==null)for(var i=ws;i!==null;)Nm(i,To),i=i.next;if(i=t.types,i!==null){for(var r=ws;r!==null;)Nm(r,i),r=r.next;if(Mr!==0){r=To,r===null&&(r=To=[]);for(var l=0;l<i.length;l++){var u=i[l];r.indexOf(u)===-1&&r.push(u)}}}Um!==null&&Um(t,e)};var Er=Qt(null);function sf(){var t=Er.current;return t!==null?t:je.pooledCache}function Hl(t,e){e===null?Rt(Er,Er.current):Rt(Er,e.pool)}function Lm(){var t=sf();return t===null?null:{parent:ln._currentValue,pool:t}}var us=Error(s(460)),of=Error(s(474)),Gl=Error(s(542)),Vl={then:function(){}};function Om(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zm(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Oi,Oi),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Im(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Oi,Oi);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Im(t),t}throw Tr=e,us}}function br(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Tr=i,us):i}}var Tr=null;function Pm(){if(Tr===null)throw Error(s(459));var t=Tr;return Tr=null,t}function Im(t){if(t===us||t===Gl)throw Error(s(483))}var fs=null,wo=0;function jl(t){var e=wo;return wo+=1,fs===null&&(fs=[]),zm(fs,t,e)}function La(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function kl(t,e){throw e.$$typeof===G?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Bm(t){function e(Y,H){if(t){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function i(Y,H){if(!t)return null;for(;H!==null;)e(Y,H),H=H.sibling;return null}function r(Y){for(var H=new Map;Y!==null;)Y.key===null?H.set(Y.index,Y):H.set(Y.key,Y),Y=Y.sibling;return H}function l(Y,H){return Y=ea(Y,H),Y.index=0,Y.sibling=null,Y}function u(Y,H,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=134217730,H)):(Y.flags|=1048576,H)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function b(Y,H,$,pt){return H===null||H.tag!==6?(H=Ku($,Y.mode,pt),H.return=Y,H):(H=l(H,$),H.return=Y,H)}function z(Y,H,$,pt){var Vt=$.type;return Vt===F?(Y=nt(Y,H,$.props.children,pt,$.key),La(Y,$),Y):H!==null&&(H.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===Et&&br(Vt)===H.type)?(H=l(H,$.props),La(H,$),H.return=Y,H):(H=Ll($.type,$.key,$.props,null,Y.mode,pt),La(H,$),H.return=Y,H)}function Z(Y,H,$,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=Qu($,Y.mode,pt),H.return=Y,H):(H=l(H,$.children||[]),H.return=Y,H)}function nt(Y,H,$,pt,Vt){return H===null||H.tag!==7?(H=vr($,Y.mode,pt,Vt),H.return=Y,H):(H=l(H,$),H.return=Y,H)}function mt(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Ku(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return $=Ll(H.type,H.key,H.props,null,Y.mode,$),La($,H),$.return=Y,$;case C:return H=Qu(H,Y.mode,$),H.return=Y,H;case Et:return H=br(H),mt(Y,H,$)}if(vt(H)||ot(H))return H=vr(H,Y.mode,$,null),H.return=Y,H;if(typeof H.then=="function")return mt(Y,jl(H),$);if(H.$$typeof===dt)return mt(Y,Fl(Y,H),$);kl(Y,H)}return null}function q(Y,H,$,pt){var Vt=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Vt!==null?null:b(Y,H,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return $.key===Vt?z(Y,H,$,pt):null;case C:return $.key===Vt?Z(Y,H,$,pt):null;case Et:return $=br($),q(Y,H,$,pt)}if(vt($)||ot($))return Vt!==null?null:nt(Y,H,$,pt,null);if(typeof $.then=="function")return q(Y,H,jl($),pt);if($.$$typeof===dt)return q(Y,H,Fl(Y,$),pt);kl(Y,$)}return null}function tt(Y,H,$,pt,Vt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get($)||null,b(H,Y,""+pt,Vt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case D:return Y=Y.get(pt.key===null?$:pt.key)||null,z(H,Y,pt,Vt);case C:return Y=Y.get(pt.key===null?$:pt.key)||null,Z(H,Y,pt,Vt);case Et:return pt=br(pt),tt(Y,H,$,pt,Vt)}if(vt(pt)||ot(pt))return Y=Y.get($)||null,nt(H,Y,pt,Vt,null);if(typeof pt.then=="function")return tt(Y,H,$,jl(pt),Vt);if(pt.$$typeof===dt)return tt(Y,H,$,Fl(H,pt),Vt);kl(H,pt)}return null}function Ut(Y,H,$,pt){for(var Vt=null,Me=null,Jt=H,ie=H=0,fn=null;Jt!==null&&ie<$.length;ie++){Jt.index>ie?(fn=Jt,Jt=null):fn=Jt.sibling;var we=q(Y,Jt,$[ie],pt);if(we===null){Jt===null&&(Jt=fn);break}t&&Jt&&we.alternate===null&&e(Y,Jt),H=u(we,H,ie),Me===null?Vt=we:Me.sibling=we,Me=we,Jt=fn}if(ie===$.length)return i(Y,Jt),pe&&na(Y,ie),Vt;if(Jt===null){for(;ie<$.length;ie++)Jt=mt(Y,$[ie],pt),Jt!==null&&(H=u(Jt,H,ie),Me===null?Vt=Jt:Me.sibling=Jt,Me=Jt);return pe&&na(Y,ie),Vt}for(Jt=r(Jt);ie<$.length;ie++)fn=tt(Jt,Y,ie,$[ie],pt),fn!==null&&(t&&(we=fn.alternate,we!==null&&Jt.delete(we.key===null?ie:we.key)),H=u(fn,H,ie),Me===null?Vt=fn:Me.sibling=fn,Me=fn);return t&&Jt.forEach(function(Ja){return e(Y,Ja)}),pe&&na(Y,ie),Vt}function Wt(Y,H,$,pt){if($==null)throw Error(s(151));for(var Vt=null,Me=null,Jt=H,ie=H=0,fn=null,we=$.next();Jt!==null&&!we.done;ie++,we=$.next()){Jt.index>ie?(fn=Jt,Jt=null):fn=Jt.sibling;var Ja=q(Y,Jt,we.value,pt);if(Ja===null){Jt===null&&(Jt=fn);break}t&&Jt&&Ja.alternate===null&&e(Y,Jt),H=u(Ja,H,ie),Me===null?Vt=Ja:Me.sibling=Ja,Me=Ja,Jt=fn}if(we.done)return i(Y,Jt),pe&&na(Y,ie),Vt;if(Jt===null){for(;!we.done;ie++,we=$.next())we=mt(Y,we.value,pt),we!==null&&(H=u(we,H,ie),Me===null?Vt=we:Me.sibling=we,Me=we);return pe&&na(Y,ie),Vt}for(Jt=r(Jt);!we.done;ie++,we=$.next())we=tt(Jt,Y,ie,we.value,pt),we!==null&&(t&&(fn=we.alternate,fn!==null&&Jt.delete(fn.key===null?ie:fn.key)),H=u(we,H,ie),Me===null?Vt=we:Me.sibling=we,Me=we);return t&&Jt.forEach(function(hM){return e(Y,hM)}),pe&&na(Y,ie),Vt}function ue(Y,H,$,pt){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case D:t:{for(var Vt=$.key;H!==null;){if(H.key===Vt){if(Vt=$.type,Vt===F){if(H.tag===7){i(Y,H.sibling),pt=l(H,$.props.children),La(pt,$),pt.return=Y,Y=pt;break t}}else if(H.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===Et&&br(Vt)===H.type){i(Y,H.sibling),pt=l(H,$.props),La(pt,$),pt.return=Y,Y=pt;break t}i(Y,H);break}else e(Y,H);H=H.sibling}$.type===F?(pt=vr($.props.children,Y.mode,pt,$.key),La(pt,$),pt.return=Y,Y=pt):(pt=Ll($.type,$.key,$.props,null,Y.mode,pt),La(pt,$),pt.return=Y,Y=pt)}return g(Y);case C:t:{for(Vt=$.key;H!==null;){if(H.key===Vt)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){i(Y,H.sibling),pt=l(H,$.children||[]),pt.return=Y,Y=pt;break t}else{i(Y,H);break}else e(Y,H);H=H.sibling}pt=Qu($,Y.mode,pt),pt.return=Y,Y=pt}return g(Y);case Et:return $=br($),ue(Y,H,$,pt)}if(vt($))return Ut(Y,H,$,pt);if(ot($)){if(Vt=ot($),typeof Vt!="function")throw Error(s(150));return $=Vt.call($),Wt(Y,H,$,pt)}if(typeof $.then=="function")return ue(Y,H,jl($),pt);if($.$$typeof===dt)return ue(Y,H,Fl(Y,$),pt);kl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,H!==null&&H.tag===6?(i(Y,H.sibling),pt=l(H,$),pt.return=Y,Y=pt):(i(Y,H),pt=Ku($,Y.mode,pt),pt.return=Y,Y=pt),g(Y)):i(Y,H)}return function(Y,H,$,pt){try{wo=0;var Vt=ue(Y,H,$,pt);return fs=null,Vt}catch(Jt){if(Jt===us||Jt===Gl)throw Jt;var Me=kn(29,Jt,null,Y.mode);return Me.lanes=pt,Me.return=Y,Me}finally{}}}var Ar=Bm(!0),Fm=Bm(!1),Oa=!1;function lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Ul(t),Mm(t,null,i),e}return Dl(t,r,e,i),Ul(t)}function Ro(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,R(t,i)}}function uf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=g:u=u.next=g,i=i.next}while(i!==null);u===null?l=u=e:u=u.next=e}else l=u=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var ff=!1;function Co(){if(ff){var t=cs;if(t!==null)throw t}}function No(t,e,i,r){ff=!1;var l=t.updateQueue;Oa=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var z=b,Z=z.next;z.next=null,g===null?u=Z:g.next=Z,g=z;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,b=nt.lastBaseUpdate,b!==g&&(b===null?nt.firstBaseUpdate=Z:b.next=Z,nt.lastBaseUpdate=z))}if(u!==null){var mt=l.baseState;g=0,nt=Z=z=null,b=u;do{var q=b.lane&-536870913,tt=q!==b.lane;if(tt?(Se&q)===q:(r&q)===q){q!==0&&q===Mr&&(ff=!0),nt!==null&&(nt=nt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ut=t,Wt=b;q=e;var ue=i;switch(Wt.tag){case 1:if(Ut=Wt.payload,typeof Ut=="function"){mt=Ut.call(ue,mt,q);break t}mt=Ut;break t;case 3:Ut.flags=Ut.flags&-65537|128;case 0:if(Ut=Wt.payload,q=typeof Ut=="function"?Ut.call(ue,mt,q):Ut,q==null)break t;mt=P({},mt,q);break t;case 2:Oa=!0}}q=b.callback,q!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[q]:tt.push(q))}else tt={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},nt===null?(Z=nt=tt,z=mt):nt=nt.next=tt,g|=q;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;tt=b,b=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);nt===null&&(z=mt),l.baseState=z,l.firstBaseUpdate=Z,l.lastBaseUpdate=nt,u===null&&(l.shared.lanes=0),ja|=g,t.lanes=g,t.memoizedState=mt}}function Hm(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Gm(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Hm(i[t],e)}var Ia=Qt(null),Xl=Qt(0);function Vm(t,e){t=ca,Rt(Xl,t),Rt(Ia,e),ca=t|e.baseLanes}function df(){Rt(Xl,ca),Rt(Ia,Ia.current)}function hf(){ca=Xl.current,Xt(Ia),Xt(Xl)}var Rn=Qt(null),zn=null;function Ba(t){var e=t.alternate;Rt(Cn,Cn.current&1),Rt(Rn,t),zn===null&&(e===null||Ia.current!==null||e.memoizedState!==null)&&(zn=t)}function pf(t){Rt(Cn,Cn.current),Rt(Rn,t),zn===null&&(zn=t)}function jm(t){t.tag===22?(Rt(Cn,Cn.current),Rt(Rn,t),zn===null&&(zn=t)):Fa()}function Fa(){Rt(Cn,Cn.current),Rt(Rn,Rn.current)}function ti(t){Xt(Rn),zn===t&&(zn=null),Xt(Cn)}var Cn=Qt(0);function Do(t,e){Rt(Rn,Rn.current),Rt(Cn,e)}function mf(t){Xt(Cn),Xt(Rn),zn===t&&(zn=null)}function ql(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Id(i)||Bd(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ra=0,ce=null,Be=null,cn=null,Yl=!1,ds=!1,wr=!1,Wl=0,Uo=0,hs=null,Oy=0;function tn(){throw Error(s(321))}function gf(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!$n(t[i],e[i]))return!1;return!0}function vf(t,e,i,r,l,u){return ra=u,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,St.H=t===null||t.memoizedState===null?Ag:wg,wr=!1,u=i(r,l),wr=!1,ds&&(u=Xm(e,i,r,l)),km(t),u}function km(t){St.H=ec;var e=Be!==null&&Be.next!==null;if(ra=0,cn=Be=ce=null,Yl=!1,Uo=0,hs=null,e)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&Bl(t)&&(un=!0))}function Xm(t,e,i,r){ce=t;var l=0;do{if(ds&&(hs=null),Uo=0,ds=!1,25<=l)throw Error(s(301));if(l+=1,cn=Be=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}St.H=Vy,u=e(i,r)}while(ds);return u}function zy(){var t=St.H,e=t.useState()[0];return e=typeof e.then=="function"?Lo(e):e,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(ce.flags|=1024),e}function xf(){var t=Wl!==0;return Wl=0,t}function _f(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function yf(t){if(Yl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Yl=!1}ra=0,cn=Be=ce=null,ds=!1,Uo=Wl=0,hs=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ce.memoizedState=cn=t:cn=cn.next=t,cn}function an(){if(Be===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=cn===null?ce.memoizedState:cn.next;if(e!==null)cn=e,Be=t;else{if(t===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},cn===null?ce.memoizedState=cn=t:cn=cn.next=t}return cn}function Zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var e=Uo;return Uo+=1,hs===null&&(hs=[]),t=zm(hs,t,e),e=ce,(cn===null?e.memoizedState:cn.next)===null&&(e=e.alternate,St.H=e===null||e.memoizedState===null?Ag:wg),t}function Kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===V)return;if(t.$$typeof===dt)return wn(t)}throw Error(s(438,String(t)))}function Sf(t){var e=null,i=ce.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Zl(),ce.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=Ht;return e.index++,i}function sa(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=an();return Mf(e,Be,t)}function Mf(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,u=r.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}e.baseQueue=l=u,r.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var b=g=null,z=null,Z=e,nt=!1;do{var mt=Z.lane&-536870913;if(mt!==Z.lane?(Se&mt)===mt:(ra&mt)===mt){var q=Z.revertLane;if(q===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),mt===Mr&&(nt=!0);else if((ra&q)===q){Z=Z.next,q===Mr&&(nt=!0);continue}else mt={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(b=z=mt,g=u):z=z.next=mt,ce.lanes|=q,ja|=q;mt=Z.action,wr&&i(u,mt),u=Z.hasEagerState?Z.eagerState:i(u,mt)}else q={lane:mt,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(b=z=q,g=u):z=z.next=q,ce.lanes|=mt,ja|=mt;Z=Z.next}while(Z!==null&&Z!==e);if(z===null?g=u:z.next=b,!$n(u,t.memoizedState)&&(un=!0,nt&&(i=cs,i!==null)))throw i;t.memoizedState=u,t.baseState=g,t.baseQueue=z,r.lastRenderedState=u}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ef(t){var e=an(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,u=e.memoizedState;if(l!==null){i.pending=null;var g=l=l.next;do u=t(u,g.action),g=g.next;while(g!==l);$n(u,e.memoizedState)||(un=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),i.lastRenderedState=u}return[u,r]}function qm(t,e,i){var r=ce,l=an(),u=pe;if(u){if(i===void 0)throw Error(s(407));i=i()}else i=e();var g=!$n((Be||l).memoizedState,i);if(g&&(l.memoizedState=i,un=!0),l=l.queue,Af(Zm.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||g||cn!==null&&(cn.memoizedState.tag&1)!==0,ps(t?9:8,{destroy:void 0},Wm.bind(null,r,l,i,e),null),t){if(r.flags|=2048,je===null)throw Error(s(349));u||(ra&127)!==0||Ym(r,e,i)}return i}function Ym(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ce.updateQueue,e===null?(e=Zl(),ce.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Wm(t,e,i,r){e.value=i,e.getSnapshot=r,Km(e)&&Qm(t)}function Zm(t,e,i){return i(function(){Km(e)&&Qm(t)})}function Km(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!$n(t,i)}catch{return!0}}function Qm(t){var e=gr(t,2);e!==null&&Wn(e,t,2)}function bf(t){var e=Fn();if(typeof t=="function"){var i=t;if(t=i(),wr){xn(!0);try{i()}finally{xn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e}function Jm(t,e,i,r){return t.baseState=i,Mf(t,Be,typeof r=="function"?r:sa)}function Py(t,e,i,r,l){if(tc(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};St.T!==null?i(!0):u.isTransition=!1,r(u),i=e.pending,i===null?(u.next=e.pending=u,$m(e,u)):(u.next=i.next,e.pending=i.next=u)}}function $m(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var u=St.T,g={};g.types=u!==null?u.types:null,St.T=g;try{var b=i(l,r),z=St.S;z!==null&&z(g,b),tg(t,e,b)}catch(Z){Tf(t,e,Z)}finally{u!==null&&g.types!==null&&(u.types=g.types),St.T=u}}else try{u=i(l,r),tg(t,e,u)}catch(Z){Tf(t,e,Z)}}function tg(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){eg(t,e,r)},function(r){return Tf(t,e,r)}):eg(t,e,i)}function eg(t,e,i){e.status="fulfilled",e.value=i,ng(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,$m(t,i)))}function Tf(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,ng(e),e=e.next;while(e!==r)}t.action=null}function ng(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ig(t,e){return e}function ag(t,e){if(pe){var i=je.formState;if(i!==null){t:{var r=ce;if(pe){if(qe){e:{for(var l=qe,u=hi;l.nodeType!==8;){if(!u){l=null;break e}if(l=mi(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){qe=mi(l.nextSibling),r=l.data==="F!";break t}}Da(r)}r=!1}r&&(e=i[0])}}return i=Fn(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ig,lastRenderedState:e},i.queue=r,i=Eg.bind(null,ce,r),r.dispatch=i,r=bf(!1),u=Df.bind(null,ce,!1,r.queue),r=Fn(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=Py.bind(null,ce,l,u,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function rg(t){var e=an();return sg(e,Be,t)}function sg(t,e,i){if(e=Mf(t,e,ig)[0],t=Ql(sa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Lo(e)}catch(g){throw g===us?Gl:g}else r=e;e=an();var l=e.queue,u=l.dispatch;return i!==e.memoizedState&&(ce.flags|=2048,ps(9,{destroy:void 0},Iy.bind(null,l,i),null)),[r,u,t]}function Iy(t,e){t.action=e}function og(t){var e=an(),i=Be;if(i!==null)return sg(e,i,t);an(),e=e.memoizedState,i=an();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function ps(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=ce.updateQueue,e===null&&(e=Zl(),ce.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function lg(){return an().memoizedState}function Jl(t,e,i,r){var l=Fn();ce.flags|=t,l.memoizedState=ps(1|e,{destroy:void 0},i,r===void 0?null:r)}function $l(t,e,i,r){var l=an();r=r===void 0?null:r;var u=l.memoizedState.inst;Be!==null&&r!==null&&gf(r,Be.memoizedState.deps)?l.memoizedState=ps(e,u,i,r):(ce.flags|=t,l.memoizedState=ps(1|e,u,i,r))}function cg(t,e){Jl(8390656,8,t,e)}function Af(t,e){$l(2048,8,t,e)}function By(t){ce.flags|=4;var e=ce.updateQueue;if(e===null)e=Zl(),ce.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function ug(t){var e=an().memoizedState;return By({ref:e,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function fg(t,e){return $l(4,2,t,e)}function dg(t,e){return $l(4,4,t,e)}function hg(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pg(t,e,i){i=i!=null?i.concat([t]):null,$l(4,4,hg.bind(null,e,t),i)}function wf(){}function mg(t,e){var i=an();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&gf(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function gg(t,e){var i=an();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&gf(e,r[1]))return r[0];if(r=t(),wr){xn(!0);try{t()}finally{xn(!1)}}return i.memoizedState=[r,e],r}function Rf(t,e,i){return i===void 0||(ra&1073741824)!==0&&(Se&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=A0(),ce.lanes|=t,ja|=t,i)}function vg(t,e,i,r){return $n(i,e)?i:Ia.current!==null?(t=Rf(t,i,r),$n(t,e)||(un=!0),t):(ra&106)===0||(ra&1073741824)!==0&&(Se&261930)===0?(un=!0,t.memoizedState=i):(t=A0(),ce.lanes|=t,ja|=t,e)}function xg(t,e,i,r,l){var u=At.p;At.p=u!==0&&8>u?u:8;var g=St.T,b={};b.types=g!==null?g.types:null,St.T=b,Df(t,!1,e,i);try{var z=l(),Z=St.S;if(Z!==null&&Z(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var nt=Ly(z,r);Oo(t,e,nt,ai(t))}else Oo(t,e,r,ai(t))}catch(mt){Oo(t,e,{then:function(){},status:"rejected",reason:mt},ai())}finally{At.p=u,g!==null&&b.types!==null&&(g.types=b.types),St.T=g}}function Fy(){}function Cf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=_g(t).queue;xg(t,l,e,Zt,i===null?Fy:function(){return yg(t),i(r)})}function _g(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Zt,baseState:Zt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:Zt},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function yg(t){var e=_g(t);e.next===null&&(e=t.alternate.memoizedState),Oo(t,e.next.queue,{},ai())}function Nf(){return wn(Ls)}function Sg(){return an().memoizedState}function Mg(){return an().memoizedState}function Hy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ai();t=za(i);var r=Pa(e,t,i);r!==null&&(Wn(r,e,i),Ro(r,e,i)),e={cache:af()},t.payload=e;return}e=e.return}}function Gy(t,e,i){var r=ai();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},tc(t)?bg(e,i):(i=Wu(t,e,i,r),i!==null&&(Wn(i,t,r),Tg(i,e,r)))}function Eg(t,e,i){var r=ai();Oo(t,e,i,r)}function Oo(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(tc(t))bg(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var g=e.lastRenderedState,b=u(g,i);if(l.hasEagerState=!0,l.eagerState=b,$n(b,g))return Dl(t,e,l,0),je===null&&Nl(),!1}catch{}finally{}if(i=Wu(t,e,l,r),i!==null)return Wn(i,t,r),Tg(i,e,r),!0}return!1}function Df(t,e,i,r){if(r={lane:2,revertLane:Sd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(e)throw Error(s(479))}else e=Wu(t,i,r,2),e!==null&&Wn(e,t,2)}function tc(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function bg(t,e){ds=Yl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Tg(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,R(t,i)}}var ec={readContext:wn,use:Kl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn,useEffectEvent:tn},Ag={readContext:wn,use:Kl,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:cg,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Jl(4194308,4,hg.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){Jl(4,2,t,e)},useMemo:function(t,e){var i=Fn();e=e===void 0?null:e;var r=t();if(wr){xn(!0);try{t()}finally{xn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=Fn();if(i!==void 0){var l=i(e);if(wr){xn(!0);try{i(e)}finally{xn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Gy.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:function(t){t=bf(t);var e=t.queue,i=Eg.bind(null,ce,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:wf,useDeferredValue:function(t,e){var i=Fn();return Rf(i,t,e)},useTransition:function(){var t=bf(!1);return t=xg.bind(null,ce,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=ce,l=Fn();if(pe){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),je===null)throw Error(s(349));(Se&127)!==0||Ym(r,e,i)}l.memoizedState=i;var u={value:i,getSnapshot:e};return l.queue=u,cg(Zm.bind(null,r,u,t),[t]),r.flags|=2048,ps(9,{destroy:void 0},Wm.bind(null,r,u,i,e),null),i},useId:function(){var t=Fn(),e=je.identifierPrefix;if(pe){var i=Pi,r=zi;i=(r&~(1<<32-Ln(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Wl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=Oy++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Nf,useFormState:ag,useActionState:ag,useOptimistic:function(t){var e=Fn();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Df.bind(null,ce,!0,i),i.dispatch=e,[t,e]},useMemoCache:Sf,useCacheRefresh:function(){return Fn().memoizedState=Hy.bind(null,ce)},useEffectEvent:function(t){var e=Fn(),i={impl:t};return e.memoizedState=i,function(){if((De&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},wg={readContext:wn,use:Kl,useCallback:mg,useContext:wn,useEffect:Af,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:dg,useMemo:gg,useReducer:Ql,useRef:lg,useState:function(){return Ql(sa)},useDebugValue:wf,useDeferredValue:function(t,e){var i=an();return vg(i,Be.memoizedState,t,e)},useTransition:function(){var t=Ql(sa)[0],e=an().memoizedState;return[typeof t=="boolean"?t:Lo(t),e]},useSyncExternalStore:qm,useId:Sg,useHostTransitionStatus:Nf,useFormState:rg,useActionState:rg,useOptimistic:function(t,e){var i=an();return Jm(i,Be,t,e)},useMemoCache:Sf,useCacheRefresh:Mg,useEffectEvent:ug},Vy={readContext:wn,use:Kl,useCallback:mg,useContext:wn,useEffect:Af,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:dg,useMemo:gg,useReducer:Ef,useRef:lg,useState:function(){return Ef(sa)},useDebugValue:wf,useDeferredValue:function(t,e){var i=an();return Be===null?Rf(i,t,e):vg(i,Be.memoizedState,t,e)},useTransition:function(){var t=Ef(sa)[0],e=an().memoizedState;return[typeof t=="boolean"?t:Lo(t),e]},useSyncExternalStore:qm,useId:Sg,useHostTransitionStatus:Nf,useFormState:og,useActionState:og,useOptimistic:function(t,e){var i=an();return Be!==null?Jm(i,Be,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Mg,useEffectEvent:ug};function Uf(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:P({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Lf={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ai(),l=za(r);l.payload=e,i!=null&&(l.callback=i),e=Pa(t,l,r),e!==null&&(Wn(e,t,r),Ro(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ai(),l=za(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=Pa(t,l,r),e!==null&&(Wn(e,t,r),Ro(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ai(),r=za(i);r.tag=2,e!=null&&(r.callback=e),e=Pa(t,r,i),e!==null&&(Wn(e,t,i),Ro(e,t,i))}};function Rg(t,e,i,r,l,u,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,g):e.prototype&&e.prototype.isPureReactComponent?!yo(i,r)||!yo(l,u):!0}function Cg(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Lf.enqueueReplaceState(e,e.state,null)}function Rr(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=P({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Ng(t){Cl(t)}function Dg(t){console.error(t)}function Ug(t){Cl(t)}function nc(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Lg(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Of(t,e,i){return i=za(i),i.tag=3,i.payload={element:null},i.callback=function(){nc(t,e)},i}function Og(t){return t=za(t),t.tag=3,t}function zg(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;t.payload=function(){return l(u)},t.callback=function(){Lg(e,i,r)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Lg(e,i,r),typeof l!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function jy(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&yr(e,i,l,!0),i=Rn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return zn===null?Ec():i.alternate===null&&en===0&&(en=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Vl?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),xd(t,r,l)),!1;case 22:return i.flags|=65536,r===Vl?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),xd(t,r,l)),!1}throw Error(s(435,i.tag))}return xd(t,r,l),Ec(),!1}if(pe)return e=Rn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==$u&&(t=Error(s(422),{cause:r}),Eo(ui(t,i)))):(r!==$u&&(e=Error(s(423),{cause:r}),Eo(ui(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=ui(r,i),l=Of(t.stateNode,r,l),uf(t,l),en!==4&&(en=2)),!1;var u=Error(s(520),{cause:r});if(u=ui(u,i),Vo===null?Vo=[u]:Vo.push(u),en!==4&&(en=2),e===null)return!0;r=ui(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Of(i.stateNode,r,t),uf(i,t),!1;case 1:if(e=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ka===null||!ka.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Og(l),zg(l,t,i,r),uf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var zf=Error(s(461)),un=!1;function pn(t,e,i,r){e.child=t===null?Fm(e,null,i,r):Ar(e,t.child,i,r)}function Pg(t,e,i,r,l){i=i.render;var u=e.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return Sr(e),r=vf(t,e,i,g,u,l),b=xf(),t!==null&&!un?(_f(t,e,l),oa(t,e,l)):(pe&&b&&zl(e),e.flags|=1,pn(t,e,r,l),e.child)}function Ig(t,e,i,r,l){if(t===null){var u=i.type;return typeof u=="function"&&!Zu(u)&&u.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=u,Bg(t,e,u,r,l)):(t=Ll(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!jf(t,l)){var g=u.memoizedProps;if(i=i.compare,i=i!==null?i:yo,i(g,r)&&t.ref===e.ref)return oa(t,e,l)}return e.flags|=1,t=ea(u,r),t.ref=e.ref,t.return=e,e.child=t}function Bg(t,e,i,r,l){if(t!==null){var u=t.memoizedProps;if(yo(u,r)&&t.ref===e.ref)if(un=!1,e.pendingProps=r=u,jf(t,l))(t.flags&131072)!==0&&(un=!0);else return e.lanes=t.lanes,oa(t,e,l)}return Pf(t,e,i,r,l)}function Fg(t,e,i,r){var l=r.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,e.child=null;return Hg(t,e,u,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Hl(e,u!==null?u.cachePool:null),u!==null?Vm(e,u):df(),jm(e);else return r=e.lanes=536870912,Hg(t,e,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(Hl(e,u.cachePool),Vm(e,u),Fa(),e.memoizedState=null):(t!==null&&Hl(e,null),df(),Fa());return pn(t,e,l,i),e.child}function zo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Hg(t,e,i,r,l){var u=sf();return u=u===null?null:{parent:ln._currentValue,pool:u},e.memoizedState={baseLanes:i,cachePool:u},t!==null&&Hl(e,null),df(),jm(e),t!==null&&yr(t,e,r,!0),e.childLanes=l,null}function ic(t,e){return e=ac({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Gg(t,e,i){return Ar(e,t.child,null,i),t=ic(e,e.pendingProps),t.flags|=2,ti(e),e.memoizedState=null,t}function ky(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(pe){if(r.mode==="hidden")return t=ic(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},zo(null,t);if(pf(e),(t=qe)?(t=hv(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=bm(t),i.return=e,e.child=i,yn=e,qe=null)):t=null,t===null)throw Da(e);return e.lanes=536870912,null}return ic(e,r)}var u=t.memoizedState;if(u!==null){var g=u.dehydrated;if(pf(e),l)if(e.flags&256)e.flags&=-257,e=Gg(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(un||yr(t,e,i,!1),l=(i&t.childLanes)!==0,un||l){if(Ia.current===null){if(r=je,r!==null&&(g=K(r,i),g!==0&&g!==u.retryLane))throw u.retryLane=g,gr(t,g),Wn(r,t,g),zf;Ec()}e=Gg(t,e,i)}else t=u.treeContext,qe=mi(g.nextSibling),yn=e,pe=!0,Na=null,hi=!1,t!==null&&wm(e,t),e=ic(e,r),e.flags|=134221824;return e}return t=ea(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ms(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Pf(t,e,i,r,l){return Sr(e),i=vf(t,e,i,r,void 0,l),r=xf(),t!==null&&!un?(_f(t,e,l),oa(t,e,l)):(pe&&r&&zl(e),e.flags|=1,pn(t,e,i,l),e.child)}function Vg(t,e,i,r,l,u){return Sr(e),e.updateQueue=null,i=Xm(e,r,i,l),km(t),r=xf(),t!==null&&!un?(_f(t,e,u),oa(t,e,u)):(pe&&r&&zl(e),e.flags|=1,pn(t,e,i,u),e.child)}function jg(t,e,i,r,l){if(Sr(e),e.stateNode===null){var u=rs,g=i.contextType;typeof g=="object"&&g!==null&&(u=wn(g)),u=new i(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Lf,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},lf(e),g=i.contextType,u.context=typeof g=="object"&&g!==null?wn(g):rs,u.state=e.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Uf(e,i,g,r),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&Lf.enqueueReplaceState(u,u.state,null),No(e,r,u,l),Co(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,z=Rr(i,b);u.props=z;var Z=u.context,nt=i.contextType;g=rs,typeof nt=="object"&&nt!==null&&(g=wn(nt));var mt=i.getDerivedStateFromProps;nt=typeof mt=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,nt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||Z!==g)&&Cg(e,u,r,g),Oa=!1;var q=e.memoizedState;u.state=q,No(e,r,u,l),Co(),Z=e.memoizedState,b||q!==Z||Oa?(typeof mt=="function"&&(Uf(e,i,mt,r),Z=e.memoizedState),(z=Oa||Rg(e,i,z,r,q,Z,g))?(nt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=Z),u.props=r,u.state=Z,u.context=g,r=z):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,cf(t,e),g=e.memoizedProps,nt=Rr(i,g),u.props=nt,mt=e.pendingProps,q=u.context,Z=i.contextType,z=rs,typeof Z=="object"&&Z!==null&&(z=wn(Z)),b=i.getDerivedStateFromProps,(Z=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==mt||q!==z)&&Cg(e,u,r,z),Oa=!1,q=e.memoizedState,u.state=q,No(e,r,u,l),Co();var tt=e.memoizedState;g!==mt||q!==tt||Oa||t!==null&&t.dependencies!==null&&Bl(t.dependencies)?(typeof b=="function"&&(Uf(e,i,b,r),tt=e.memoizedState),(nt=Oa||Rg(e,i,nt,r,q,tt,z)||t!==null&&t.dependencies!==null&&Bl(t.dependencies))?(Z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,tt,z),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,tt,z)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=tt),u.props=r,u.state=tt,u.context=z,r=nt):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,ms(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=Ar(e,t.child,null,l),e.child=Ar(e,null,i,l)):pn(t,e,i,l),e.memoizedState=u.state,t=e.child):t=oa(t,e,l),t}function kg(t,e,i,r){return xr(),e.flags|=256,pn(t,e,i,r),e.child}var If={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(t){return{baseLanes:t,cachePool:Lm()}}function Ff(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ii),t}function Xg(t,e,i){var r=e.pendingProps,l=!1,u=(e.flags&128)!==0,g;if((g=u)||(g=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(pe){if(l?Ba(e):Fa(),(t=qe)?(t=hv(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=bm(t),i.return=e,e.child=i,yn=e,qe=null)):t=null,t===null)throw Da(e);return Bd(t)?e.lanes=32:e.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Fa(),l=e.mode,u=ac({mode:"hidden",children:u},l),r=vr(r,l,i,null),u.return=e,r.return=e,u.sibling=r,e.child=u,r=e.child,r.memoizedState=Bf(i),r.childLanes=Ff(t,g,i),e.memoizedState=If,zo(null,r)):(Ba(e),Hf(e,u))}var b=t.memoizedState;if(b!==null){var z=b.dehydrated;if(z!==null)return Xy(t,e,u,g,r,z,b,i)}return l?(Fa(),l=r.fallback,u=e.mode,b=t.child,z=b.sibling,r=ea(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&1206910976,z!==null?l=ea(z,l):(l=vr(l,u,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,zo(null,r),r=e.child,l=t.child.memoizedState,l===null?l=Bf(i):(u=l.cachePool,u!==null?(b=ln._currentValue,u=u.parent!==b?{parent:b,pool:b}:u):u=Lm(),l={baseLanes:l.baseLanes|i,cachePool:u}),r.memoizedState=l,r.childLanes=Ff(t,g,i),e.memoizedState=If,zo(t.child,r)):(Ba(e),i=t.child,t=i.sibling,i=ea(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=i,e.memoizedState=null,i)}function Hf(t,e){return e=ac({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ac(t,e){return t=kn(22,t,null,e),t.lanes=0,t}function rc(t,e,i){return Ar(e,t.child,null,i),t=Hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xy(t,e,i,r,l,u,g,b){if(i)return e.flags&256?(Ba(e),e.flags&=-257,rc(t,e,b)):e.memoizedState!==null?(Fa(),e.child=t.child,e.flags|=128,null):(Fa(),u=l.fallback,g=e.mode,l=ac({mode:"visible",children:l.children},g),u=vr(u,g,b,null),u.flags|=2,l.return=e,u.return=e,l.sibling=u,e.child=l,Ar(e,t.child,null,b),l=e.child,l.memoizedState=Bf(b),l.childLanes=Ff(t,r,b),e.memoizedState=If,zo(null,l));if(Ba(e),Bd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Eo({value:l,source:null,stack:null})),rc(t,e,b)}if(un||yr(t,e,b,!1),r=(b&t.childLanes)!==0,un||r){if(Ia.current!==null)return rc(t,e,b);if(r=je,r!==null&&(l=K(r,b),l!==0&&l!==g.retryLane))throw g.retryLane=l,gr(t,l),Wn(r,t,l),zf;return Id(u)||Ec(),rc(t,e,b)}return Id(u)?(e.flags|=192,e.child=t.child,null):(t=g.treeContext,qe=mi(u.nextSibling),yn=e,pe=!0,Na=null,hi=!1,t!==null&&wm(e,t),e=Hf(e,l.children),e.flags|=134221824,e)}function qg(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Il(t.return,e,i)}function Yg(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&ql(i)===null&&(e=t),t=t.sibling}return e}function sc(t,e,i,r,l,u){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:u}:(g.isBackwards=e,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=i,g.tailMode=l,g.treeForkCount=u)}function Gf(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function Vf(t,e,i){var r=e.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var g=Cn.current;if(e.flags&128)return Do(e,g),null;var b=(g&2)!==0;if(b?(g=g&1|2,e.flags|=128):g&=1,Do(e,g),l==="backwards"&&t!==null?(Gf(t),pn(t,e,r,i),Gf(t)):pn(t,e,r,i),r=pe?Mo:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qg(t,i,e);else if(t.tag===19)qg(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Yg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,Gf(e)),sc(e,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&ql(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}sc(e,!0,i,null,u,r);break;case"together":sc(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=Yg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),sc(e,!1,l,i,u,r)}return e.child}function Wg(t,e,i){var r=e.pendingProps;return Ua(e,e.type,r.value),pn(t,e,r.children,i),e.child}function oa(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),ja|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(yr(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=ea(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ea(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function jf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Bl(t)))}function qy(t,e,i){switch(e.tag){case 3:et(e,e.stateNode.containerInfo),Ua(e,ln,t.memoizedState.cache),xr();break;case 27:case 5:yt(e);break;case 4:et(e,e.stateNode.containerInfo);break;case 10:Ua(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,pf(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ba(e),e.flags|=128,null;r=yr(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?Xg(t,e,i):(Ba(e),t=oa(t,e,i),t!==null?t.sibling:null)}Ba(e);break;case 19:if(e.flags&128)return Vf(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(yr(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return Vf(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Do(e,Cn.current),r)break;return null;case 22:return e.lanes=0,Fg(t,e,i,e.pendingProps);case 24:Ua(e,ln,t.memoizedState.cache)}return oa(t,e,i)}function Zg(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)un=!0;else{if(!jf(t,i)&&(e.flags&128)===0)return un=!1,qy(t,e,i);un=(t.flags&131072)!==0}else un=!1,pe&&(e.flags&1048576)!==0&&Am(e,Mo,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=br(e.elementType),e.type=t,typeof t=="function")Zu(t)?(r=Rr(t,r),e.tag=1,e=jg(null,e,t,r,i)):(e.tag=0,e=Pf(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===X){e.tag=11,e=Pg(null,e,t,r,i);break t}else if(l===Mt){e.tag=14,e=Ig(null,e,t,r,i);break t}else if(l===dt){e.tag=10,e.type=t,e=Wg(null,e,i);break t}}throw e=Dt(t)||t,Error(s(306,e,""))}}return e;case 0:return Pf(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=Rr(r,e.pendingProps),jg(t,e,r,l,i);case 3:t:{if(et(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var u=e.memoizedState;l=u.element,cf(t,e),No(e,r,null,i);var g=e.memoizedState;if(r=g.cache,Ua(e,ln,r),r!==u.cache&&nf(e,[ln],i,!0),Co(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=kg(t,e,r,i);break t}else if(r!==l){l=ui(Error(s(424)),e),Eo(l),e=kg(t,e,r,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=mi(t.firstChild),yn=e,pe=!0,Na=null,hi=!0,i=Fm(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(xr(),r===l){e=oa(t,e,i);break t}pn(t,e,r,i)}e=e.child}return e;case 26:return ms(t,e),t===null?(i=yv(e.type,null,e.pendingProps,null))?e.memoizedState=i:pe||(e.stateNode=$0(e.type,e.pendingProps,L.current,e)):e.memoizedState=yv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return yt(e),t===null&&pe&&(r=e.stateNode=gv(e.type,e.pendingProps,L.current),yn=e,hi=!0,l=qe,Ya(e.type)?(Fd=l,qe=mi(r.firstChild)):qe=l),pn(t,e,e.pendingProps.children,i),ms(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&pe&&((l=r=qe)&&(r=HS(r,e.type,e.pendingProps,hi),r!==null?(e.stateNode=r,yn=e,qe=mi(r.firstChild),hi=!1,l=!0):l=!1),l||Da(e)),yt(e),l=e.type,u=e.pendingProps,g=t!==null?t.memoizedProps:null,r=u.children,Nd(l,u)?r=null:g!==null&&Nd(l,g)&&(e.flags|=32),e.memoizedState!==null&&(l=vf(t,e,zy,null,null,i),Ls._currentValue=l),ms(t,e),pn(t,e,r,i),e.child;case 6:return t===null&&pe&&((t=i=qe)&&(i=GS(i,e.pendingProps,hi),i!==null?(e.stateNode=i,yn=e,qe=null,t=!0):t=!1),t||Da(e)),null;case 13:return Xg(t,e,i);case 4:return et(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ar(e,null,r,i):pn(t,e,r,i),e.child;case 11:return Pg(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,ms(t,e),pn(t,e,r,i),e.child;case 8:return pn(t,e,e.pendingProps.children,i),e.child;case 12:return pn(t,e,e.pendingProps.children,i),e.child;case 10:return Wg(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,Sr(e),l=wn(l),r=r(l),e.flags|=1,pn(t,e,r,i),e.child;case 14:return Ig(t,e,e.type,e.pendingProps,i);case 15:return Bg(t,e,e.type,e.pendingProps,i);case 19:return Vf(t,e,i);case 31:return ky(t,e,i);case 22:return Fg(t,e,i,e.pendingProps);case 24:return Sr(e),r=wn(ln),t===null?(l=sf(),l===null&&(l=je,u=af(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),e.memoizedState={parent:r,cache:l},lf(e),Ua(e,ln,l)):((t.lanes&i)!==0&&(cf(t,e),No(e,null,null,i),Co()),l=t.memoizedState,u=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Ua(e,ln,r)):(r=u.cache,Ua(e,ln,r),r!==l.cache&&nf(e,[ln],i,!0))),pn(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:pe&&zl(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:ms(t,e),pn(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function la(t){t.flags|=4}function kf(t,e,i,r,l){var u;if((u=(t.mode&32)!==0)&&(u=i===null?bv(e,r):bv(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(N0())t.flags|=8192;else throw Tr=Vl,of}else t.flags&=-16777217}function Kg(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tv(e))if(N0())t.flags|=8192;else throw Tr=Vl,of}function oc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?xl():536870912,t.lanes|=e,ys|=e)}function Po(t,e){if(!pe)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function Yy(t,e,i){var r=e.pendingProps;switch(Ju(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return Ye(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),aa(ln),xt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ls(e)?la(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,tf())),Ye(e),null;case 26:var l=e.type,u=e.memoizedState;return t===null?(la(e),u!==null?(Ye(e),Kg(e,u)):(Ye(e),kf(e,l,null,r,i))):u?u!==t.memoizedState?(la(e),Ye(e),Kg(e,u)):(Ye(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&la(e),Ye(e),kf(e,l,t,r,i)),null;case 27:if(gt(e),i=L.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&la(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ye(e),e.subtreeFlags&=-33554433,null}t=de.current,ls(e)?Rm(e):(t=gv(l,r,i),e.stateNode=t,la(e))}return Ye(e),e.subtreeFlags&=-33554433,null;case 5:if(gt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&la(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ye(e),e.subtreeFlags&=-33554433,null}if(u=de.current,ls(e))Rm(e);else{var g=Yo(L.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}u[Ct]=e,u[Lt]=r;t:for(g=e.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break t;for(;g.sibling===null;){if(g.return===null||g.return===e)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}e.stateNode=u;t:switch(Dn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&la(e)}}return Ye(e),e.subtreeFlags&=-33554433,kf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&la(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=L.current,ls(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=yn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Ct]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Z0(t.nodeValue,i)),t||Da(e,!0)}else t=Yo(t).createTextNode(r),t[Ct]=e,e.stateNode=t}return Ye(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=ls(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ct]=e}else xr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ye(e),t=!1}else i=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(ti(e),e):(ti(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Ye(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ls(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ct]=e}else xr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ye(e),l=!1}else l=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(ti(e),e):(ti(e),null)}return ti(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),oc(e,e.updateQueue),Ye(e),null);case 4:return xt(),t===null&&Td(e.stateNode.containerInfo),e.flags|=67108864,Ye(e),null;case 10:return aa(e.type),Ye(e),null;case 19:if(mf(e),r=e.memoizedState,r===null)return Ye(e),null;if(l=(e.flags&128)!==0,u=r.rendering,u===null)if(l)Po(r,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=ql(t),u!==null){for(e.flags|=128,Po(r,!1),t=u.updateQueue,e.updateQueue=t,oc(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Em(i,t),i=i.sibling;return Do(e,Cn.current&1|2),pe&&na(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&k()>_c&&(e.flags|=128,l=!0,Po(r,!1),e.lanes=4194304)}else{if(!l)if(t=ql(u),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,oc(e,t),Po(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!pe)return Ye(e),null}else 2*k()-r.renderingStartTime>_c&&i!==536870912&&(e.flags|=128,l=!0,Po(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=k(),t.sibling=null,u=Cn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||pe?Do(e,u):(i=u,Rt(Rn,e),Rt(Cn,i),zn===null&&(zn=e)),pe&&na(e,r.treeForkCount),t}return Ye(e),null;case 22:case 23:return ti(e),hf(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),i=e.updateQueue,i!==null&&oc(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Xt(Er),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),aa(ln),Ye(e),null;case 25:return null;case 30:return e.flags|=33554432,Ye(e),null}throw Error(s(156,e.tag))}function Wy(t,e){switch(Ju(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return aa(ln),xt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return gt(e),null;case 31:if(e.memoizedState!==null){if(ti(e),e.alternate===null)throw Error(s(340));xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ti(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return xt(),null;case 10:return aa(e.type),null;case 22:case 23:return ti(e),hf(),t!==null&&Xt(Er),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return aa(ln),null;case 25:return null;default:return null}}function Qg(t,e){switch(Ju(e),e.tag){case 3:aa(ln),xt();break;case 26:case 27:case 5:gt(e);break;case 4:xt();break;case 31:e.memoizedState!==null&&ti(e);break;case 13:ti(e);break;case 19:mf(e);break;case 10:aa(e.type);break;case 22:case 23:ti(e),hf(),t!==null&&Xt(Er);break;case 24:aa(ln)}}function Io(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var u=i.create,g=i.inst;r=u(),g.destroy=r}i=i.next}while(i!==l)}}catch(b){ze(e,e.return,b)}}function Ha(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&t)===t){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,l=e;var z=i,Z=b;try{Z()}catch(nt){ze(l,z,nt)}}}r=r.next}while(r!==u)}}catch(nt){ze(e,e.return,nt)}}function Jg(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Gm(e,i)}catch(r){ze(t,t.return,r)}}}function $g(t,e,i){i.props=Rr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){ze(t,e,r)}}function Ii(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,u=$i(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=sv(u)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new ri(t);m(t.child,!1,BS,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(b){ze(t,e,b)}}function Nn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){ze(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){ze(t,e,l)}else i.current=null}function lc(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)dv(t.stateNode,e[i])}function t0(t){for(var e=t.return;e!==null&&(qf(e)&&dv(t.stateNode,e.stateNode),!Xf(e));)e=e.return}function Bo(t){for(var e=t.return;e!==null&&(qf(e)&&FS(t.stateNode,e.stateNode),!Xf(e));)e=e.return}function Xf(t){return t.tag===5||t.tag===3||t.tag===27}function qf(t){return t&&t.tag===7&&t.stateNode!==null}function Yf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){ze(t,t.return,l)}}function Wf(t,e,i){try{var r=t.stateNode;yS(r,t.type,i,e),r[Lt]=e}catch(l){ze(t,t.return,l)}}function e0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function Zf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kf(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Oi)),lc(t,r),Ce=!0;else if(l!==4&&(l===27&&(lc(t,r),r=null,Ya(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(Kf(t,e,i,r),t=t.sibling;t!==null;)Kf(t,e,i,r),t=t.sibling}function cc(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),lc(t,r),Ce=!0;else if(l!==4&&(l===27&&(lc(t,r),r=null,Ya(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(cc(t,e,i,r),t=t.sibling;t!==null;)cc(t,e,i,r),t=t.sibling}function n0(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Dn(e,r,i),e[Ct]=t,e[Lt]=i}catch(u){ze(t,t.return,u)}}var uc=!1,ei=null;function i0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(uc=!0)}var Bi=null;function a0(){var t=Bi;return Bi=null,t}var Xn=0;function gs(t,e,i,r,l){return Xn=0,r0(t.child,e,i,r,l)}function r0(t,e,i,r,l){for(var u=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var b=Ld(g);r.push(b),b.view&&(u=!0)}else u||Ld(g).view&&(u=!0);uc=!0,av(g,Xn===0?e:e+"_"+Xn,i),Xn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||r0(t.child,e,i,r,l)&&(u=!0));t=t.sibling}return u}function Fi(t,e){for(;t!==null;)t.tag===5?rv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Fi(t.child,e)),t=t.sibling}function fc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(fc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=ta(e.default,e.share),e!=="none"&&(gs(t,i,e,null,!1)||Fi(t.child,!1))}t=t.sibling}}function Qf(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=$i(r,i),u=ta(r.default,i.paired?r.share:r.enter);u!=="none"?gs(t,l,u,null,!1)?(fc(t),i.paired||e||bs(t,r.onEnter)):Fi(t.child,!1):fc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Qf(t,e),t=t.sibling;else fc(t)}function Jf(t){if(ei!==null&&ei.size!==0){var e=ei;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var u=ta(i.default,i.share);if(u!=="none"&&(gs(t,r,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,bs(t,i.onShare)):Fi(t.child,!1)),e.delete(r),e.size===0)break}}}Jf(t)}t=t.sibling}}}function $f(t){if(t.tag===30){var e=t.memoizedProps,i=$i(e,t.stateNode),r=ei!==null?ei.get(i):void 0,l=ta(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(gs(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ei.delete(i),bs(t,e.onShare)):bs(t,e.onExit):Fi(t.child,!1)),ei!==null&&Jf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)$f(t),t=t.sibling;else ei!==null&&Jf(t)}function s0(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=$i(e,t.stateNode);e=ta(e.default,e.update),t.flags&=-5,e!=="none"&&gs(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&s0(t);t=t.sibling}}function td(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Fi(t.child,!1))}td(t)}t=t.sibling}}function dc(t){if(t.tag===30)t.stateNode.paired=null,Fi(t.child,!1),td(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dc(t),t=t.sibling;else td(t)}function o0(t){for(t=t.child;t!==null;)t.tag===30?Fi(t.child,!1):(t.subtreeFlags&33554432)!==0&&o0(t),t=t.sibling}function ed(t,e,i,r,l,u,g){for(var b=!1;e!==null;){if(e.tag===5){var z=e.stateNode;if(u!==null&&Xn<u.length){var Z=u[Xn],nt=Ld(z);(Z.view||nt.view)&&(b=!0);var mt;if(mt=(t.flags&4)===0)if(nt.clip)mt=!0;else{mt=Z.rect;var q=nt.rect;mt=mt.y!==q.y||mt.x!==q.x||mt.height!==q.height||mt.width!==q.width}mt&&(t.flags|=4),nt.abs?nt=!Z.abs:(Z=Z.rect,nt=nt.rect,nt=Z.height!==nt.height||Z.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&av(z,Xn===0?i:i+"_"+Xn,l),b&&(t.flags&4)!==0||(Bi===null&&(Bi=[]),Bi.push(z,Xn===0?r:r+"_"+Xn,e.memoizedProps)),Xn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&g?t.flags|=e.flags&32:ed(t,e.child,i,r,l,u,g)&&(b=!0));e=e.sibling}return b}function l0(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=$i(i,r),u=ta(i.default,i.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var b=t.child;Xn=0,l=ed(r,b,l,l,u,g,!1),(t.flags&4)!==0&&l&&bs(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&l0(t);t=t.sibling}}var Sn=!1,Ue=!1,Hi=!1,nd=!1,c0=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Gi=!1,Fo=!1,hc=!1,id=!1;function Zy(t,e,i){if(t=t.containerInfo,Rd=Os,t=hm(t),Vu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var b=0,z=-1,Z=-1,nt=0,mt=0,q=t,tt=null;e:for(;;){for(var Ut;q!==r||u!==0&&q.nodeType!==3||(z=b+u),q!==g||l!==0&&q.nodeType!==3||(Z=b+l),q.nodeType===3&&(b+=q.nodeValue.length),(Ut=q.firstChild)!==null;)tt=q,q=Ut;for(;;){if(q===t)break e;if(tt===r&&++nt===u&&(z=b),tt===g&&++mt===l&&(Z=b),(Ut=q.nextSibling)!==null)break;q=tt,tt=q.parentNode}q=Ut}r=z===-1||Z===-1?null:{start:z,end:Z}}else r=null}r=r||{start:0,end:0}}else r=null;for(Cd={focusedElem:t,selectionRange:r},Os=!1,i=(i&335544064)===i,Mn=e,e=i?9270:1024;Mn!==null;){if(t=Mn,i&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)i&&$f(r[u]);if(t.alternate===null&&(t.flags&2)!==0)i&&i0(t),pc(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&$f(r),pc(i);continue}else if(r!==null&&r.memoizedState!==null){i&&i0(t),pc(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,Mn=r):(i&&s0(t),pc(i))}}ei=null}function pc(t){for(;Mn!==null;){var e=Mn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var u=e.stateNode;try{var g=Rr(e.type,l);i=u.getSnapshotBeforeUpdate(g,r),u.__reactInternalSnapshotBeforeUpdate=i}catch(b){ze(e,e.return,b)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Pd(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Pd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=$i(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=ta(l.default,l.update),l!=="none"&&gs(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,Mn=r;break}Mn=e.return}}function u0(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i),r&4&&Io(5,i);break;case 1:if(Vi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(g){ze(i,i.return,g)}else{var l=Rr(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(i,i.return,g)}}r&64&&Jg(i),r&512&&Ii(i,i.return);break;case 3:if(Vi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Gm(t,e)}catch(g){ze(i,i.return,g)}}break;case 27:e===null&&r&4&&n0(i);case 26:case 5:Vi(t,i),e===null&&r&4&&Yf(i),r&512&&Ii(i,i.return);break;case 12:Vi(t,i);break;case 31:Vi(t,i),r&4&&p0(t,i);break;case 13:Vi(t,i),r&4&&m0(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=oS.bind(null,i),VS(t,i))));break;case 22:if(r=i.memoizedState!==null||Sn,!r){var u=e!==null&&e.memoizedState!==null||Ue;e=Sn,l=Ue,Sn=r,(Ue=u)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),bi(t,i,r)):Vi(t,i),Sn=e,Ue=l}break;case 30:Vi(t,i),r&512&&Ii(i,i.return);break;case 7:r&512&&Ii(i,i.return);default:Vi(t,i)}}function ad(t,e){for(t=t.child;t!==null;)f0(t,e),t=t.sibling}function f0(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(z){ze(t,t.return,z)}rd(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,Ce=!0}catch(z){ze(t,t.return,z)}break;case 18:try{var b=t.stateNode;e?iv(b,!0):iv(t.stateNode,!1)}catch(z){ze(t,t.return,z)}break;case 22:case 23:t.memoizedState===null&&ad(t,e);break;default:ad(t,e)}}function rd(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:f0(i,r);break t;case 22:i.memoizedState===null&&rd(i,r);break t;default:rd(i,r)}}t=t.sibling}}function d0(t){var e=t.alternate;e!==null&&(t.alternate=null,d0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ve(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,qn=!1;function Mi(t,e,i){for(i=i.child;i!==null;)h0(t,e,i),i=i.sibling}function h0(t,e,i){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(be,i)}catch{}switch(i.tag){case 26:Ue||Nn(i,e),Mi(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ue&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ue||Nn(i,e),Bo(i);var r=Je,l=qn;Ya(i.type)&&(Je=i.stateNode,qn=!1),Mi(t,e,i),vv(i.stateNode,i.type,i.memoizedProps),Je=r,qn=l;break;case 5:Ue||Nn(i,e),Bo(i);case 6:if(i.tag===6&&Bo(i),r=Je,l=qn,Je=null,Mi(t,e,i),Je=r,qn=l,Je!==null)if(qn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(i.stateNode),Ce=!0}catch(u){ze(i,e,u)}else try{Je.removeChild(i.stateNode),Ce=!0}catch(u){ze(i,e,u)}break;case 18:Je!==null&&(qn?(t=Je,nv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),zs(t)):nv(Je,i.stateNode));break;case 4:r=Je,l=qn,Je=i.stateNode.containerInfo,qn=!0,Mi(t,e,i),Je=r,qn=l;break;case 0:case 11:case 14:case 15:Ha(2,i,e),Ue||Ha(4,i,e),Mi(t,e,i);break;case 1:Ue||(Nn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&$g(i,e,r)),Mi(t,e,i);break;case 21:Mi(t,e,i);break;case 22:Ue=(r=Ue)||i.memoizedState!==null,Mi(t,e,i),Ue=r;break;case 30:Nn(i,e),Mi(t,e,i);break;case 7:Ue||Nn(i,e),Mi(t,e,i);break;default:Mi(t,e,i)}}function p0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zs(t)}catch(i){ze(e,e.return,i)}}}function m0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zs(t)}catch(i){ze(e,e.return,i)}}function Ky(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new c0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new c0),e;default:throw Error(s(435,t.tag))}}function mc(t,e){var i=Ky(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=lS.bind(null,t,r);r.then(l,l)}})}function Hn(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],g=t,b=e,z=b;t:for(;z!==null;){switch(z.tag){case 27:if(Ya(z.type)){Je=z.stateNode,qn=!1;break t}break;case 5:Je=z.stateNode,qn=!1;break t;case 3:case 4:Je=z.stateNode.containerInfo,qn=!0;break t}z=z.return}if(Je===null)throw Error(s(160));h0(g,b,u),Je=null,qn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)g0(e,t,i),e=e.sibling}var Ei=null;function g0(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var g=r[u];g.ref.impl=g.nextImpl}Hn(e,t,i),Gn(t),l&4&&(Ha(3,t,t.return),Io(3,t),Ha(5,t,t.return));break;case 1:Hn(e,t,i),Gn(t),l&512&&(Ue||r===null||Nn(r,r.return)),l&64&&Sn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(u=Ei,Hn(e,t,i),Gn(t),l&512&&(Ue||r===null||Nn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(Sn)t.stateNode=$0(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=u.ownerDocument||u;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Xe]||r[Ct]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,e,i),r[Ct]=t,Ze(r),e=r;break t;case"link":if(u=Ev("link","href",l).get(e+(i.href||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(g,1);break e}}r=l.createElement(e),Dn(r,e,i),l.head.appendChild(r);break;case"meta":if(u=Ev("meta","content",l).get(e+(i.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(g,1);break e}}r=l.createElement(e),Dn(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[Ct]=t,Ze(r),e=r}t.stateNode=e}else Sn||jd(u,t.type,t.stateNode);else t.stateNode=Mv(u,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||Ue||e.parentNode.removeChild(e)):l.count--,i===null?Sn||jd(u,t.type,t.stateNode):Mv(u,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Wf(t,t.memoizedProps,r.memoizedProps);break;case 27:Hn(e,t,i),Gn(t),l&512&&(Ue||r===null||Nn(r,r.return)),r!==null&&l&4&&Wf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=Hi,Hi=!1,Hn(e,t,i),Hi=u,Gn(t),l&512&&(Ue||r===null||Nn(r,r.return)),t.flags&32){e=t.stateNode;try{Jr(e,""),Ce=!0}catch(nt){ze(t,t.return,nt)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Wf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(nd=!0);break;case 6:if(Hn(e,t,i),Gn(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,Ce=!0}catch(nt){ze(t,t.return,nt)}}break;case 3:if(Ce=!1,Nc=null,u=Ei,Ei=Wo(e.containerInfo),Hn(e,t,i),Ei=u,Gn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(e.containerInfo)}catch(nt){ze(t,t.return,nt)}nd&&(nd=!1,v0(t)),Ce=!1;break;case 4:l=Hi,Hi=Sn,r=Ip(),u=Ei,Ei=Wo(t.stateNode.containerInfo),Hn(e,t,i),Gn(t),Ei=u,Ce&&Fo&&(hc=!0),Ce=r,Hi=l;break;case 12:Hn(e,t,i),Gn(t);break;case 31:Hn(e,t,i),Gn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mc(t,e)));break;case 13:Hn(e,t,i),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xc=k()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mc(t,e)));break;case 22:u=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var b=Sn,z=Ue,Z=Hi;Sn=b||u,Hi=Z||u,Ue=z||g,Hn(e,t,i),Ue=z,Hi=Z,Sn=b,Gn(t),l&8192&&(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,!u||r===null||g||Sn||Ue||(e=g||Ue,i=Sn,r=Ue,Sn=u||Sn,Ue=e,Ga(t,2),Sn=i,Ue=r),!u&&Hi||ad(t,u)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,mc(t,i))));break;case 19:Hn(e,t,i),Gn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mc(t,e)));break;case 30:l&512&&(Ue||r===null||Nn(r,r.return)),l=Ip(),u=Fo,g=(i&335544064)===i,b=t.memoizedProps,Fo=g&&ta(b.default,b.update)!=="none",Hn(e,t,i),Gn(t),g&&r!==null&&Ce&&(t.flags|=4),Fo=u,Ce=l;break;case 21:break;case 7:l&512&&(Ue||r===null||Nn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Hn(e,t,i),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(e0(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(qf(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(Xf(l))break;l=l.return}var g=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var b=i.stateNode,z=Zf(t);cc(t,z,b,g);break;case 5:var Z=i.stateNode;i.flags&32&&(Jr(Z,""),i.flags&=-33);var nt=Zf(t);cc(t,nt,Z,g);break;case 3:case 4:var mt=i.stateNode.containerInfo,q=Zf(t);Kf(t,q,mt,g);break;default:throw Error(s(161))}}catch(tt){ze(t,t.return,tt)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;v0(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Os=!0,e.reset(),Os=!1),t=t.sibling}}function vs(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)x0(e,t),e=e.sibling;else l0(e)}function x0(t,e){var i=t.alternate;if(i===null)Qf(t,!1);else switch(t.tag){case 3:if(id=Gi=!1,a0(),vs(e,t),!Gi&&!hc){if(t=Bi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];rv(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),id=!0}Bi=null;break;case 5:vs(e,t);break;case 4:r=Gi,Gi=!1,vs(e,t),Gi&&(hc=!0),Gi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Qf(t,!1):vs(e,t));break;case 30:r=Gi,l=a0(),Gi=!1,vs(e,t),Gi&&(t.flags|=4);var u=t.memoizedProps,g=t.stateNode;e=$i(u,g),g=$i(i.memoizedProps,g);var b=ta(u.default,u.update);b==="none"?e=!1:(u=i.memoizedState,i.memoizedState=null,i=t.child,Xn=0,e=ed(t,i,e,g,b,u,!0),Xn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(bs(t,t.memoizedProps.onUpdate),Bi=l):l!==null&&(l.push.apply(l,Bi),Bi=l),Gi=(t.flags&32)!==0?!0:r;break;default:vs(e,t)}}function Vi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)u0(t,e.alternate,e),e=e.sibling}function Ga(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Ga(i,r);break;case 1:Nn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&$g(i,i.return,l),Ga(i,r);break;case 27:(r&2)!==0&&vv(i.stateNode,i.type,i.memoizedProps);case 5:Nn(i,i.return),i.tag!==5&&i.tag!==27||Bo(i),Ga(i,r);break;case 6:Bo(i);break;case 26:Nn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ue||l.parentNode.removeChild(l),Ga(i,r);break;case 22:i.memoizedState===null&&Ga(i,r);break;case 30:Nn(i,i.return),Ga(i,r);break;case 7:Nn(i,i.return);default:Ga(i,r)}t=t.sibling}}function bi(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,u=e,g=u.flags,b=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:bi(l,u,i),Io(4,u);break;case 1:if(bi(l,u,i),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(nt){ze(r,r.return,nt)}if(r=u,l=r.updateQueue,l!==null){var z=r.stateNode;try{var Z=l.shared.hiddenCallbacks;if(Z!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Z.length;l++)Hm(Z[l],z)}catch(nt){ze(r,r.return,nt)}}b&&g&64&&Jg(u),Ii(u,u.return);break;case 27:(i&2)!==0&&n0(u);case 5:u.tag!==5&&u.tag!==27||t0(u),bi(l,u,i),b&&r===null&&g&4&&Yf(u),Ii(u,u.return);break;case 6:t0(u);break;case 26:z=u.stateNode,u.memoizedState!==null||z===null||Sn||jd(Wo(z.ownerDocument),u.type,z),bi(l,u,i),b&&r===null&&g&4&&Yf(u),Ii(u,u.return);break;case 12:bi(l,u,i);break;case 31:bi(l,u,i),b&&g&4&&p0(l,u);break;case 13:bi(l,u,i),b&&g&4&&m0(l,u);break;case 22:u.memoizedState===null&&bi(l,u,i),Ii(u,u.return);break;case 30:bi(l,u,i),Ii(u,u.return);break;case 7:Ii(u,u.return);default:bi(l,u,i)}e=e.sibling}}function sd(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&bo(i))}function od(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bo(t))}function pi(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)_0(t,e,i,r),e=e.sibling;else l&&o0(e)}function _0(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&dc(e);var u=e.flags;switch(e.tag){case 0:case 11:case 15:pi(t,e,i,r),u&2048&&Io(9,e);break;case 1:pi(t,e,i,r);break;case 3:pi(t,e,i,r),l&&id&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,e.alternate!==null&&(u=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==u&&(e.refCount++,u!=null&&bo(u)));break;case 12:if(u&2048){pi(t,e,i,r),u=e.stateNode;try{var g=e.memoizedProps,b=g.id,z=g.onPostCommit;typeof z=="function"&&z(b,e.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Z){ze(e,e.return,Z)}}else pi(t,e,i,r);break;case 31:pi(t,e,i,r);break;case 13:pi(t,e,i,r);break;case 23:break;case 22:g=e.stateNode,b=e.alternate,e.memoizedState!==null?(l&&b!==null&&b.memoizedState===null&&dc(b),g._visibility&2?pi(t,e,i,r):Ho(t,e)):(l&&b!==null&&b.memoizedState!==null&&dc(e),g._visibility&2?pi(t,e,i,r):(g._visibility|=2,xs(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),u&2048&&sd(b,e);break;case 24:pi(t,e,i,r),u&2048&&od(e.alternate,e);break;case 30:l&&(u=e.alternate,u!==null&&(Fi(u.child,!0),Fi(e.child,!0))),pi(t,e,i,r);break;default:pi(t,e,i,r)}}function xs(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,g=e,b=i,z=r,Z=g.flags;switch(g.tag){case 0:case 11:case 15:xs(u,g,b,z,l),Io(8,g);break;case 23:break;case 22:var nt=g.stateNode;g.memoizedState!==null?nt._visibility&2?xs(u,g,b,z,l):Ho(u,g):(nt._visibility|=2,xs(u,g,b,z,l)),l&&Z&2048&&sd(g.alternate,g);break;case 24:xs(u,g,b,z,l),l&&Z&2048&&od(g.alternate,g);break;default:xs(u,g,b,z,l)}e=e.sibling}}function Ho(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:Ho(i,r),l&2048&&sd(r.alternate,r);break;case 24:Ho(i,r),l&2048&&od(r.alternate,r);break;default:Ho(i,r)}e=e.sibling}}var Cr=8192;function Nr(t,e,i){if(t.subtreeFlags&Cr)for(t=t.child;t!==null;)y0(t,e,i),t=t.sibling}function y0(t,e,i){switch(t.tag){case 26:Nr(t,e,i),t.flags&Cr&&(t.memoizedState!==null?nM(i,Ei,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&wv(i,t)));break;case 5:Nr(t,e,i),t.flags&Cr&&(t=t.stateNode,(e&335544128)===e&&wv(i,t));break;case 3:case 4:var r=Ei;Ei=Wo(t.stateNode.containerInfo),Nr(t,e,i),Ei=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,Nr(t,e,i),Cr=r):Nr(t,e,i));break;case 30:if((t.flags&Cr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ei===null&&(ei=new Map),ei.set(r,l)}Nr(t,e,i);break;default:Nr(t,e,i)}}function S0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Go(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];Mn=r,E0(r,t)}S0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M0(t),t=t.sibling}function M0(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gc(t)):Go(t);break;default:Go(t)}}function gc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];Mn=r,E0(r,t)}S0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ha(8,e,e.return),gc(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,gc(e));break;default:gc(e)}t=t.sibling}}function E0(t,e){for(;Mn!==null;){var i=Mn;switch(i.tag){case 0:case 11:case 15:Ha(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:bo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,Mn=r;else t:for(i=t;Mn!==null;){r=Mn;var l=r.sibling,u=r.return;if(d0(r),r===i){Mn=null;break t}if(l!==null){l.return=u,Mn=l;break t}Mn=u}}}var Qy={getCacheForType:function(t){var e=wn(ln),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return wn(ln).controller.signal}},Jy=typeof WeakMap=="function"?WeakMap:Map,De=0,je=null,xe=null,Se=0,Oe=0,ni=null,Va=!1,_s=!1,ld=!1,ca=0,en=0,ja=0,Dr=0,vc=0,ii=0,ys=0,Vo=null,Yn=null,cd=!1,xc=0,b0=0,_c=1/0,yc=null,ka=null,$e=0,Ti=null,Ur=null,ji=0,ud=0,fd=null,T0=null,Ss=null,Ms=null,Es=null,jo=0,Sc=null;function ai(){return(De&2)!==0&&Se!==0?Se&-Se:St.T!==null?Sd():J()}function A0(){if(ii===0)if((Se&536870912)===0||pe){var t=dr;dr<<=1,(dr&3932160)===0&&(dr=262144),ii=t}else ii=536870912;return t=Rn.current,t!==null&&(t.flags|=32),ii}function bs(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=sv($i(t.memoizedProps,i))),Ms===null&&(Ms=[]),Ms.push(e.bind(null,r))}}function Wn(t,e,i){(t===je&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Ts(t,0),Xa(t,Se,ii,!1)),hr(t,i),((De&2)===0||t!==je)&&(t===je&&((De&2)===0&&(Dr|=i),en===4&&Xa(t,Se,ii,!1)),ki(t))}function w0(t,e,i){if((De&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Ta(t,e),l=r?eS(t,e):hd(t,e,!0),u=r;do{if(l===0){_s&&!r&&Xa(t,e,0,!1);break}else{if(i=t.current.alternate,u&&!$y(i)){l=hd(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var b=t;l=Vo;var z=b.current.memoizedState.isDehydrated;if(z&&(Ts(b,g).flags|=256),g=hd(b,g,!1),g!==2&&g!==6){if(ld&&!z){b.errorRecoveryDisabledLanes|=u,Dr|=u,l=4;break t}u=Yn,Yn=l,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}l=g}if(u=!1,l!==2)continue}}if(l===1){Ts(t,0),Xa(t,e,0,!0);break}t:{switch(r=t,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Xa(r,e,ii,!Va);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=xc+300-k(),10<l)){if(Xa(r,e,ii,!Va),Zi(r,0,!0)!==0)break t;ji=e,r.timeoutHandle=Ud(R0.bind(null,r,i,Yn,yc,cd,e,ii,Dr,ys,Va,u,"Throttled",-0,0),l);break t}R0(r,i,Yn,yc,cd,e,ii,Dr,ys,Va,u,null,-0,0)}}break}while(!0);ki(t)}function R0(t,e,i,r,l,u,g,b,z,Z,nt,mt,q,tt){t.timeoutHandle=-1;var Ut=e.subtreeFlags,Wt=(u&335544064)===u;if(mt=null,(Wt||Ut&8192||(Ut&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},ei=null,y0(e,u,mt),Wt&&(Ut=mt,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Ut.count++,Ut.waitingForViewTransition=!0,Ut=Qo.bind(Ut),Wt.finished.then(Ut,Ut))),Ut=(u&62914560)===u?xc-k():(u&4194048)===u?b0-k():0,Ut=iM(mt,Ut),Ut!==null)){ji=u,t.cancelPendingCommit=Ut(P0.bind(null,t,e,u,i,r,l,g,b,z,Z,nt,mt,null,q,tt)),Xa(t,u,g,!Z);return}P0(t,e,u,i,r,l,g,b,z,Z,nt,mt)}function $y(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],u=l.getSnapshot;l=l.value;try{if(!$n(u(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xa(t,e,i,r){e=uo(t,e),e&=~vc,e&=~Dr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var u=31-Ln(l),g=1<<u;r[u]=-1,l&=~g}i!==0&&_l(t,i,e)}function Mc(){return(De&6)===0?(ko(0),!1):!0}function dd(){if(xe!==null){if(Oe===0)var t=xe.return;else t=xe,ia=_r=null,yf(t),fs=null,wo=0,t=xe;for(;t!==null;)Qg(t.alternate,t),t=t.return;xe=null}}function Ts(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,ES(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ji=0,dd(),je=t,xe=i=ea(t.current,null),Se=e,Oe=0,ni=null,Va=!1,_s=Ta(t,e),ld=!1,ys=ii=vc=Dr=ja=en=0,Yn=Vo=null,cd=!1,ca=uo(t,e),Nl(),i}function C0(t,e){ce=null,St.H=ec,e===us||e===Gl?(e=Pm(),Oe=3):e===of?(e=Pm(),Oe=4):Oe=e===zf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ni=e,xe===null&&(en=1,nc(t,ui(e,t.current)))}function N0(){var t=Rn.current;return t===null?!0:(Se&4194048)===Se?zn===null:(Se&62914560)===Se||(Se&536870912)!==0?t===zn:!1}function D0(){var t=St.H;return St.H=ec,t===null?ec:t}function U0(){var t=St.A;return St.A=Qy,t}function Ec(){en=4,Va||(Se&4194048)!==Se&&Rn.current!==null||(_s=!0),(ja&134217727)===0&&(Dr&134217727)===0||je===null||Xa(je,Se,ii,!1)}function hd(t,e,i){var r=De;De|=2;var l=D0(),u=U0();(je!==t||Se!==e)&&(yc=null,Ts(t,e)),e=!1;var g=en;t:do try{if(Oe!==0&&xe!==null){var b=xe,z=ni;switch(Oe){case 8:dd(),g=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(e=!0);var Z=Oe;if(Oe=0,ni=null,As(t,b,z,Z),i&&_s){g=0;break t}break;default:Z=Oe,Oe=0,ni=null,As(t,b,z,Z)}}tS(),g=en;break}catch(nt){C0(t,nt)}while(!0);return e&&t.shellSuspendCounter++,ia=_r=null,De=r,St.H=l,St.A=u,xe===null&&(je=null,Se=0,Nl()),g}function tS(){for(;xe!==null;)L0(xe)}function eS(t,e){var i=De;De|=2;var r=D0(),l=U0();je!==t||Se!==e?(yc=null,_c=k()+500,Ts(t,e)):_s=Ta(t,e);t:do try{if(Oe!==0&&xe!==null){e=xe;var u=ni;e:switch(Oe){case 1:Oe=0,ni=null,As(t,e,u,1);break;case 2:case 9:if(Om(u)){Oe=0,ni=null,O0(e);break}e=function(){Oe!==2&&Oe!==9||je!==t||(Oe=7),ki(t)},u.then(e,e);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Om(u)?(Oe=0,ni=null,O0(e)):(Oe=0,ni=null,As(t,e,u,7));break;case 5:var g=null;switch(xe.tag){case 26:g=xe.memoizedState;case 5:case 27:var b=xe;if(g?Tv(g):b.stateNode.complete){Oe=0,ni=null;var z=b.sibling;if(z!==null)xe=z;else{var Z=b.return;Z!==null?(xe=Z,bc(Z)):xe=null}break e}}Oe=0,ni=null,As(t,e,u,5);break;case 6:Oe=0,ni=null,As(t,e,u,6);break;case 8:dd(),en=6;break t;default:throw Error(s(462))}}nS();break}catch(nt){C0(t,nt)}while(!0);return ia=_r=null,St.H=r,St.A=l,De=i,xe!==null?0:(je=null,Se=0,Nl(),en)}function nS(){for(;xe!==null&&!le();)L0(xe)}function L0(t){var e=Zg(t.alternate,t,ca);t.memoizedProps=t.pendingProps,e===null?bc(t):xe=e}function O0(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Vg(i,e,e.pendingProps,e.type,void 0,Se);break;case 11:e=Vg(i,e,e.pendingProps,e.type.render,e.ref,Se);break;case 5:yf(e);var r=e;r===yn&&(pe?(Pl(r),r.tag===5&&r.stateNode!=null&&(qe=r.stateNode)):(Pl(r),pe=!0));default:Qg(i,e),e=xe=Em(e,ca),e=Zg(i,e,ca)}t.memoizedProps=t.pendingProps,e===null?bc(t):xe=e}function As(t,e,i,r){ia=_r=null,yf(e),fs=null,wo=0;var l=e.return;try{if(jy(t,l,e,i,Se)){en=1,nc(t,ui(i,t.current)),xe=null;return}}catch(u){if(l!==null)throw xe=l,u;en=1,nc(t,ui(i,t.current)),xe=null;return}e.flags&32768?(pe||r===1?t=!0:_s||(Se&536870912)!==0?t=!1:(Va=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),z0(e,t)):bc(e)}function bc(t){var e=t;do{if((e.flags&32768)!==0){z0(e,Va);return}t=e.return;var i=Yy(e.alternate,e,ca);if(i!==null){xe=i;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);en===0&&(en=5)}function z0(t,e){do{var i=Wy(t.alternate,t);if(i!==null){i.flags&=32767,xe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){xe=t;return}xe=t=i}while(t!==null);en=6,xe=null}function P0(t,e,i,r,l,u,g,b,z,Z,nt,mt){t.cancelPendingCommit=null;do Tc();while($e!==0);if((De&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===je&&(xe=je=null,Se=0),Ur=e,Ti=t,ji=i,fd=l,T0=r,iS(t,e,i,g,b,z,mt)}}function iS(t,e,i,r,l,u,g){var b=e.lanes|e.childLanes;if(ud=b,b|=Yu,bu(t,i,b,r,l,u),Ms=null,(i&335544064)===i?(Es=Dy(t),r=10262):(Es=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,cS(It,function(){return vd(),null})):(t.callbackNode=null,t.callbackPriority=0),uc=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=St.T,St.T=null,l=At.p,At.p=2,u=De,De|=4;try{Zy(t,e,i)}finally{De=u,At.p=l,St.T=r}}$e=1,uc?Ss=CS(g,t.containerInfo,Es,pd,md,rS,gd,vd,aS):(pd(),md(),gd())}function aS(t){if($e!==0){var e=Ti.onRecoverableError;e(t,{componentStack:null})}}function rS(){$e===3&&($e=0,x0(Ur,Ti),$e=4)}function pd(){if($e===1){$e=0;var t=Ti,e=Ur,i=ji,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=St.T,St.T=null;var l=At.p;At.p=2;var u=De;De|=4;try{Fo=hc=!1,g0(e,t,i),i=Cd;var g=hm(t.containerInfo),b=i.focusedElem,z=i.selectionRange;if(g!==b&&b&&b.ownerDocument&&dm(b.ownerDocument.documentElement,b)){if(z!==null&&Vu(b)){var Z=z.start,nt=z.end;if(nt===void 0&&(nt=Z),"selectionStart"in b)b.selectionStart=Z,b.selectionEnd=Math.min(nt,b.value.length);else{var mt=b.ownerDocument||document,q=mt&&mt.defaultView||window;if(q.getSelection){var tt=q.getSelection(),Ut=b.textContent.length,Wt=Math.min(z.start,Ut),ue=z.end===void 0?Wt:Math.min(z.end,Ut);!tt.extend&&Wt>ue&&(g=ue,ue=Wt,Wt=g);var Y=fm(b,Wt),H=fm(b,ue);if(Y&&H&&(tt.rangeCount!==1||tt.anchorNode!==Y.node||tt.anchorOffset!==Y.offset||tt.focusNode!==H.node||tt.focusOffset!==H.offset)){var $=mt.createRange();$.setStart(Y.node,Y.offset),tt.removeAllRanges(),Wt>ue?(tt.addRange($),tt.extend(H.node,H.offset)):($.setEnd(H.node,H.offset),tt.addRange($))}}}}for(mt=[],tt=b;tt=tt.parentNode;)tt.nodeType===1&&mt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Os=!!Rd,Cd=Rd=null}finally{De=u,At.p=l,St.T=r}}t.current=e,$e=2}}function md(){if($e===2){$e=0;var t=Ti,e=Ur,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=St.T,St.T=null;var r=At.p;At.p=2;var l=De;De|=4;try{u0(t,e.alternate,e)}finally{De=l,At.p=r,St.T=i}}$e=3}}function gd(){if($e===4||$e===3){$e=0;var t=Ss;Ss=null,Ie();var e=Ti,i=Ur,r=ji,l=T0,u=(r&335544064)===r?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?$e=5:($e=0,Ur=Ti=null,I0(e,e.pendingLanes)),u=e.pendingLanes,u===0&&(ka=null),lt(r),i=i.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(be,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=St.T,u=At.p,At.p=2,St.T=null;try{for(var g=e.onRecoverableError,b=0;b<l.length;b++){var z=l[b];g(z.value,{componentStack:z.stack})}}finally{St.T=i,At.p=u}}if(l=Ms,g=Es,Es=null,l!==null&&(Ms=null,g===null&&(g=[]),t!==null))for(z=0;z<l.length;z++)i=(0,l[z])(g),i!==void 0&&t.finished.finally(i);(ji&3)!==0&&Tc(),ki(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Sc?jo++:(jo=0,Sc=e):(jo=0,Sc=null),ko(0)}}function I0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,bo(e)))}function Tc(){return Ss!==null&&(Ss.skipTransition(),Ss=null),pd(),md(),gd(),vd()}function vd(){if($e!==5)return!1;var t=Ti,e=ud;ud=0;var i=lt(ji),r=St.T,l=At.p;try{At.p=32>i?32:i,St.T=null,i=fd,fd=null;var u=Ti,g=ji;if($e=0,Ur=Ti=null,ji=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,M0(u.current),_0(u,u.current,g,i),De=b,ko(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(be,u)}catch{}return!0}finally{At.p=l,St.T=r,I0(t,e)}}function B0(t,e,i){e=ui(i,e),e=Of(t.stateNode,e,2),t=Pa(t,e,2),t!==null&&(hr(t,2),ki(t))}function ze(t,e,i){if(t.tag===3)B0(t,t,i);else for(;e!==null;){if(e.tag===3){B0(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ka===null||!ka.has(r))){t=ui(i,t),i=Og(2),r=Pa(e,i,2),r!==null&&(zg(i,r,e,t),hr(r,2),ki(r));break}}e=e.return}}function xd(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new Jy;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(ld=!0,l.add(i),t=sS.bind(null,t,e,i),e.then(t,t))}function sS(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,je===t&&(Se&i)===i&&((en===4||en===3&&(Se&62914560)===Se&&300>k()-xc)&&(De&2)===0?Ts(t,0):vc|=i,ys===Se&&(ys=0)),ki(t)}function F0(t,e){e===0&&(e=xl()),t=gr(t,e),t!==null&&(hr(t,e),ki(t))}function oS(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),F0(t,i)}function lS(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),F0(t,i)}function cS(t,e){return jt(t,e)}var ws=null,Rs=null,_d=!1,Ac=!1,yd=!1,qa=0;function ki(t){t!==Rs&&t.next===null&&(Rs===null?ws=Rs=t:Rs=Rs.next=t),Ac=!0,_d||(_d=!0,fS())}function ko(t,e){if(!yd&&Ac){yd=!0;do for(var i=!1,r=ws;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var g=r.suspendedLanes,b=r.pingedLanes;u=(1<<31-Ln(42|t)+1)-1,u&=l&~(g&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,j0(r,u))}else u=Se,u=Zi(r,r===je?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ta(r,u)||(i=!0,j0(r,u));r=r.next}while(i);yd=!1}}function uS(){H0()}function H0(){Ac=_d=!1;var t=0;qa!==0&&MS()&&(t=qa);for(var e=k(),i=null,r=ws;r!==null;){var l=r.next,u=G0(r,e);u===0?(r.next=null,i===null?ws=l:i.next=l,l===null&&(Rs=i)):(i=r,(t!==0||(u&3)!==0)&&(Ac=!0)),r=l}$e!==0&&$e!==5||ko(t),qa!==0&&(qa=0)}function G0(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var g=31-Ln(u),b=1<<g,z=l[g];z===-1?((b&i)===0||(b&r)!==0)&&(l[g]=Eu(b,e)):z<=e&&(t.expiredLanes|=b),u&=~b}if(e=je,i=Se,i=Zi(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&me(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ta(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&me(r),lt(i)){case 2:case 8:i=_t;break;case 32:i=It;break;case 268435456:i=oe;break;default:i=It}return r=V0.bind(null,t),i=jt(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&me(r),t.callbackPriority=2,t.callbackNode=null,2}function V0(t,e){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Tc()&&t.callbackNode!==i)return null;var r=Se;return r=Zi(t,t===je?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(w0(t,r,e),G0(t,k()),t.callbackNode!=null&&t.callbackNode===i?V0.bind(null,t):null)}function j0(t,e){if(Tc())return null;w0(t,e,!0)}function fS(){bS(function(){(De&6)!==0?jt(ht,uS):H0()})}function Sd(){if(qa===0){var t=Mr;t===0&&(t=fr,fr<<=1,(fr&261888)===0&&(fr=256)),qa=t}return qa}function k0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ml(t)}function dS(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var u=k0((l[Lt]||null).action),g=r.submitter;g&&(e=(e=g[Lt]||null)?k0(e.formAction):g.getAttribute("formAction"),e!==null&&(u=e,g=null));var b=new Al("action","action",null,r,l);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(qa!==0){var z=new FormData(l,g);Cf(i,{pending:!0,data:z,method:l.method,action:u},null,z)}}else typeof u=="function"&&(b.preventDefault(),z=new FormData(l,g),Cf(i,{pending:!0,data:z,method:l.method,action:u},u,z))},currentTarget:l}]})}}for(var Md=0;Md<qu.length;Md++){var Ed=qu[Md],hS=Ed.toLowerCase(),pS=Ed[0].toUpperCase()+Ed.slice(1);Si(hS,"on"+pS)}Si(gm,"onAnimationEnd"),Si(vm,"onAnimationIteration"),Si(xm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Ey,"onTransitionRun"),Si(by,"onTransitionStart"),Si(Ty,"onTransitionCancel"),Si(_m,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function X0(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var g=r.length-1;0<=g;g--){var b=r[g],z=b.instance,Z=b.currentTarget;if(b=b.listener,z!==u&&l.isPropagationStopped())break t;u=b,l.currentTarget=Z;try{u(l)}catch(nt){Cl(nt)}l.currentTarget=null,u=z}else for(g=0;g<r.length;g++){if(b=r[g],z=b.instance,Z=b.currentTarget,b=b.listener,z!==u&&l.isPropagationStopped())break t;u=b,l.currentTarget=Z;try{u(l)}catch(nt){Cl(nt)}l.currentTarget=null,u=z}}}}function _e(t,e){var i=e[re];i===void 0&&(i=e[re]=new Set);var r=t+"__bubble";i.has(r)||(q0(e,t,2,!1),i.add(r))}function bd(t,e,i){var r=0;e&&(r|=4),q0(i,t,r,e)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Td(t){if(!t[wc]){t[wc]=!0,Aa.forEach(function(i){i!=="selectionchange"&&(mS.has(i)||bd(i,!1,t),bd(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wc]||(e[wc]=!0,bd("selectionchange",!1,e))}}function q0(t,e,i,r){switch(zv(e)){case 2:var l=oM;break;case 8:l=lM;break;default:l=Xd}i=l.bind(null,e,i,t),l=void 0,!Uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function Ad(t,e,i,r,l){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===l)break;if(g===4)for(g=r.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;b!==null;){if(g=Kt(b),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){r=u=g;continue t}b=b.parentNode}}r=r.return}qp(function(){var Z=u,nt=Nu(i),mt=[];t:{var q=ym.get(t);if(q!==void 0){var tt=Al,Ut=t;switch(t){case"keypress":if(bl(i)===0)break t;case"keydown":case"keyup":tt=$_;break;case"focusin":Ut="focus",tt=Pu;break;case"focusout":Ut="blur",tt=Pu;break;case"beforeblur":case"afterblur":tt=Pu;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=G_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=ay;break;case gm:case vm:case xm:tt=k_;break;case _m:tt=sy;break;case"scroll":case"scrollend":tt=F_;break;case"wheel":tt=ly;break;case"copy":case"cut":case"paste":tt=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Qp;break;case"submit":tt=ny;break;case"toggle":case"beforetoggle":tt=uy}var Wt=(e&4)!==0,ue=!Wt&&(t==="scroll"||t==="scrollend"),Y=Wt?q!==null?q+"Capture":null:q;Wt=[];for(var H=Z,$;H!==null;){var pt=H;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Y===null||(pt=ho(H,Y),pt!=null&&Wt.push(qo(H,pt,$))),ue)break;H=H.return}0<Wt.length&&(q=new tt(q,Ut,null,i,nt),mt.push({event:q,listeners:Wt}))}}if((e&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",tt&&i!==Cu&&(Ut=i.relatedTarget||i.fromElement)&&(Kt(Ut)||Ut[te]))break t;(q||tt)&&(Ut=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,q?(tt=i.relatedTarget||i.toElement,q=Z,tt=tt?Kt(tt):null,tt!==null&&(ue=f(tt),Wt=tt.tag,tt!==ue||Wt!==5&&Wt!==27&&Wt!==6)&&(tt=null)):(q=null,tt=Z),q!==tt&&(Wt=Zp,pt="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=Qp,pt="onPointerLeave",Y="onPointerEnter",H="pointer"),ue=q==null?Ut:ye(q),$=tt==null?Ut:ye(tt),Ut=new Wt(pt,H+"leave",q,i,nt),Ut.target=ue,Ut.relatedTarget=$,pt=null,Kt(nt)===Z&&(Wt=new Wt(Y,H+"enter",tt,i,nt),Wt.target=$,Wt.relatedTarget=ue,pt=Wt),ue=pt,Wt=q&&tt?j(q,tt,gS):null,q!==null&&Y0(mt,Ut,q,Wt,!1),tt!==null&&ue!==null&&Y0(mt,ue,tt,Wt,!0)))}t:{if(q=Z?ye(Z):window,tt=q.nodeName&&q.nodeName.toLowerCase(),tt==="select"||tt==="input"&&q.type==="file")var Vt=rm;else if(im(q))if(sm)Vt=yy;else{Vt=xy;var Me=vy}else tt=q.nodeName,!tt||tt.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?Z&&Ru(Z.elementType)&&(Vt=rm):Vt=_y;if(Vt&&(Vt=Vt(t,Z))){am(mt,Vt,i,nt);break t}Me&&Me(t,q,Z)}switch(Me=Z?ye(Z):window,t){case"focusin":(im(Me)||Me.contentEditable==="true")&&(ns=Me,ju=Z,So=null);break;case"focusout":So=ju=ns=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,pm(mt,i,nt);break;case"selectionchange":if(My)break;case"keydown":case"keyup":pm(mt,i,nt)}var Jt;if(Bu)t:{switch(t){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else es?em(t,i)&&(ie="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(ie="onCompositionStart");ie&&(Jp&&i.locale!=="ko"&&(es||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&es&&(Jt=Yp()):(wa=nt,Lu="value"in wa?wa.value:wa.textContent,es=!0)),Me=Rc(Z,ie),0<Me.length&&(ie=new Kp(ie,t,null,i,nt),mt.push({event:ie,listeners:Me}),Jt?ie.data=Jt:(Jt=nm(i),Jt!==null&&(ie.data=Jt)))),(Jt=dy?hy(t,i):py(t,i))&&(ie=Rc(Z,"onBeforeInput"),0<ie.length&&(Me=new Kp("onBeforeInput","beforeinput",null,i,nt),mt.push({event:Me,listeners:ie}),Me.data=Jt)),dS(mt,t,Z,i,nt)}X0(mt,e)})}function qo(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Rc(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=ho(t,i),l!=null&&r.unshift(qo(t,l,u)),l=ho(t,e),l!=null&&r.push(qo(t,l,u))),t.tag===3)return r;t=t.return}return[]}function gS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Y0(t,e,i,r,l){for(var u=e._reactName,g=[];i!==null&&i!==r;){var b=i,z=b.alternate,Z=b.stateNode;if(b=b.tag,z!==null&&z===r)break;b!==5&&b!==26&&b!==27||Z===null||(z=Z,l?(Z=ho(i,u),Z!=null&&g.unshift(qo(i,Z,z))):l||(Z=ho(i,u),Z!=null&&g.push(qo(i,Z,z)))),i=i.return}g.length!==0&&t.push({event:e,listeners:g})}var vS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function W0(t){return(typeof t=="string"?t:""+t).replace(vS,`
`).replace(xS,"")}function Z0(t,e){return e=W0(e),W0(t)===e}function Pe(t,e,i,r,l,u){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Jr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Jr(t,""+r);else return;break;case"className":Sl(t,"class",r);break;case"tabIndex":Sl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Sl(t,i,r);break;case"style":kp(t,r,u);return;case"data":if(e!=="object"){Sl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Ml(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(e!=="input"&&Pe(t,e,"name",l.name,l,null),Pe(t,e,"formEncType",l.formEncType,l,null),Pe(t,e,"formMethod",l.formMethod,l,null),Pe(t,e,"formTarget",l.formTarget,l,null)):(Pe(t,e,"encType",l.encType,l,null),Pe(t,e,"method",l.method,l,null),Pe(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Ml(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Oi);return;case"onScroll":r!=null&&_e("scroll",t);return;case"onScrollEnd":r!=null&&_e("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Ml(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),yl(t,"popover",r);break;case"xlinkActuate":Qi(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Qi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Qi(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Qi(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Qi(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Qi(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":yl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=I_.get(i)||i,yl(t,i,r);else return}Ce=!0}function wd(t,e,i,r,l,u){switch(i){case"style":kp(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Jr(t,r);else if(typeof r=="number"||typeof r=="bigint")Jr(t,""+r);else return;break;case"onScroll":r!=null&&_e("scroll",t);return;case"onScrollEnd":r!=null&&_e("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Oi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ve.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),u=i.slice(2,l?i.length-7:void 0),e=t[Lt]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(u,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(u,r,l);break t}Ce=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):yl(t,i,r)}return}Ce=!0}function Dn(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var g=i[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pe(t,e,u,g,i,null)}}l&&Pe(t,e,"srcSet",i.srcSet,i,null),r&&Pe(t,e,"src",i.src,i,null);return;case"input":_e("invalid",t);var b=u=g=l=null,z=null,Z=null;for(r in i)if(i.hasOwnProperty(r)){var nt=i[r];if(nt!=null)switch(r){case"name":l=nt;break;case"type":g=nt;break;case"checked":z=nt;break;case"defaultChecked":Z=nt;break;case"value":u=nt;break;case"defaultValue":b=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,e));break;default:Pe(t,e,r,nt,i,null)}}Hp(t,u,b,z,Z,g,l,!1);return;case"select":_e("invalid",t),r=g=u=null;for(l in i)if(i.hasOwnProperty(l)&&(b=i[l],b!=null))switch(l){case"value":u=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Pe(t,e,l,b,i,null)}e=u,i=g,t.multiple=!!r,e!=null?Qr(t,!!r,e,!1):i!=null&&Qr(t,!!r,i,!0);return;case"textarea":_e("invalid",t),u=l=r=null;for(g in i)if(i.hasOwnProperty(g)&&(b=i[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":l=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pe(t,e,g,b,i,null)}Vp(t,r,l,u);return;case"option":for(z in i)if(i.hasOwnProperty(z)&&(r=i[z],r!=null))switch(z){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(t,e,z,r,i,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<Xo.length;r++)_e(Xo[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in i)if(i.hasOwnProperty(Z)&&(r=i[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pe(t,e,Z,r,i,null)}return;default:if(Ru(e)){for(nt in i)i.hasOwnProperty(nt)&&(r=i[nt],r!==void 0&&wd(t,e,nt,r,i,void 0));return}}for(b in i)i.hasOwnProperty(b)&&(r=i[b],r!=null&&Pe(t,e,b,r,i,null))}var _S={};function yS(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,g=null,b=null,z=null,Z=null,nt=null;for(tt in i){var mt=i[tt];if(i.hasOwnProperty(tt)&&mt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":z=mt;default:r.hasOwnProperty(tt)||Pe(t,e,tt,null,r,mt)}}for(var q in r){var tt=r[q];if(mt=i[q],r.hasOwnProperty(q)&&(tt!=null||mt!=null))switch(q){case"type":tt!==mt&&(Ce=!0),u=tt;break;case"name":tt!==mt&&(Ce=!0),l=tt;break;case"checked":tt!==mt&&(Ce=!0),Z=tt;break;case"defaultChecked":tt!==mt&&(Ce=!0),nt=tt;break;case"value":tt!==mt&&(Ce=!0),g=tt;break;case"defaultValue":tt!==mt&&(Ce=!0),b=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,e));break;default:tt!==mt&&Pe(t,e,q,tt,r,mt)}}Au(t,g,b,z,Z,nt,u,l);return;case"select":tt=g=b=q=null;for(u in i)if(z=i[u],i.hasOwnProperty(u)&&z!=null)switch(u){case"value":break;case"multiple":tt=z;default:r.hasOwnProperty(u)||Pe(t,e,u,null,r,z)}for(l in r)if(u=r[l],z=i[l],r.hasOwnProperty(l)&&(u!=null||z!=null))switch(l){case"value":u!==z&&(Ce=!0),q=u;break;case"defaultValue":u!==z&&(Ce=!0),b=u;break;case"multiple":u!==z&&(Ce=!0),g=u;default:u!==z&&Pe(t,e,l,u,r,z)}e=b,i=g,r=tt,q!=null?Qr(t,!!i,q,!1):!!r!=!!i&&(e!=null?Qr(t,!!i,e,!0):Qr(t,!!i,i?[]:"",!1));return;case"textarea":tt=q=null;for(b in i)if(l=i[b],i.hasOwnProperty(b)&&l!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(t,e,b,null,r,l)}for(g in r)if(l=r[g],u=i[g],r.hasOwnProperty(g)&&(l!=null||u!=null))switch(g){case"value":l!==u&&(Ce=!0),q=l;break;case"defaultValue":l!==u&&(Ce=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Pe(t,e,g,l,r,u)}Gp(t,q,tt);return;case"option":for(var Ut in i)if(q=i[Ut],i.hasOwnProperty(Ut)&&q!=null&&!r.hasOwnProperty(Ut))switch(Ut){case"selected":t.selected=!1;break;default:Pe(t,e,Ut,null,r,q)}for(z in r)if(q=r[z],tt=i[z],r.hasOwnProperty(z)&&q!==tt&&(q!=null||tt!=null))switch(z){case"selected":q!==tt&&(Ce=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Pe(t,e,z,q,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in i)q=i[Wt],i.hasOwnProperty(Wt)&&q!=null&&!r.hasOwnProperty(Wt)&&Pe(t,e,Wt,null,r,q);for(Z in r)if(q=r[Z],tt=i[Z],r.hasOwnProperty(Z)&&q!==tt&&(q!=null||tt!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,e));break;default:Pe(t,e,Z,q,r,tt)}return;default:if(Ru(e)){for(var ue in i)q=i[ue],i.hasOwnProperty(ue)&&q!==void 0&&!r.hasOwnProperty(ue)&&wd(t,e,ue,void 0,r,q);for(nt in r)q=r[nt],tt=i[nt],!r.hasOwnProperty(nt)||q===tt||q===void 0&&tt===void 0||wd(t,e,nt,q,r,tt);return}}for(var Y in i)q=i[Y],i.hasOwnProperty(Y)&&q!=null&&!r.hasOwnProperty(Y)&&Pe(t,e,Y,null,r,q);for(mt in r)q=r[mt],tt=i[mt],!r.hasOwnProperty(mt)||q===tt||q==null&&tt==null||Pe(t,e,mt,q,r,tt)}function K0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],u=l.transferSize,g=l.initiatorType,b=l.duration;if(u&&b&&K0(g)){for(g=0,b=l.responseEnd,r+=1;r<i.length;r++){var z=i[r],Z=z.startTime;if(Z>b)break;var nt=z.transferSize,mt=z.initiatorType;nt&&K0(mt)&&(z=z.responseEnd,g+=nt*(z<b?1:(b-Z)/(z-Z)))}if(--r,e+=8*(u+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rd=null,Cd=null;function Yo(t){return t.nodeType===9?t:t.ownerDocument}function Q0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function $0(t,e,i,r){return i=Yo(i).createElement(t),i[Ct]=r,i[Lt]=e,Dn(i,t,e),Ze(i),i}function Nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=null;function MS(){var t=window.event;return t&&t.type==="popstate"?t===Dd?!1:(Dd=t,!0):(Dd=null,!1)}var Ud=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,ev=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ud,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(t){return tv.resolve(null).then(t).catch(TS)}:Ud;function TS(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function nv(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),zs(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Hd(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Hd(i);for(var u=i.firstChild;u;){var g=u.nextSibling,b=u.nodeName;u[Xe]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=g}}else i==="body"&&Hd(t.ownerDocument.body);i=l}while(i);zs(e)}function iv(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function av(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var u=e[l];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function rv(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function AS(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Ld(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return AS(e,i,t)}function wS(t){return t.documentElement.clientHeight}function RS(t){this.addEventListener("load",t),this.addEventListener("error",t)}function CS(t,e,i,r,l,u,g,b,z){var Z=e.nodeType===9?e:e.ownerDocument;try{var nt=Z.startViewTransition({update:function(){var q=Z.defaultView,tt=q.navigation&&q.navigation.transition,Ut=Z.fonts.status;r();var Wt=[];if(Ut==="loaded"&&(wS(Z),Z.fonts.status==="loading"&&Wt.push(Z.fonts.ready)),Ut=Wt.length,t!==null)for(var ue=t.suspenseyImages,Y=0,H=0;H<ue.length;H++){var $=ue[H];if(!$.complete){var pt=$.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<q.innerHeight&&pt.left<q.innerWidth){if(Y+=Av($),Y>Dc){Wt.length=Ut;break}$=new Promise(RS.bind($)),Wt.push($)}}}if(0<Wt.length)return q=Promise.race([Promise.all(Wt),new Promise(function(Vt){return setTimeout(Vt,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,q]):q).then(u,u);if(l(),tt)return tt.finished.then(u,u);u()},types:i});Z.__reactViewTransition=nt;var mt=[];return nt.ready.then(function(){for(var q=Z.documentElement.getAnimations({subtree:!0}),tt=0;tt<q.length;tt++){var Ut=q[tt],Wt=Ut.effect,ue=Wt.pseudoElement;if(ue!=null&&ue.startsWith("::view-transition")){mt.push(Ut),Ut=Wt.getKeyframes();for(var Y=ue=void 0,H=!0,$=0;$<Ut.length;$++){var pt=Ut[$],Vt=pt.width;if(ue===void 0)ue=Vt;else if(ue!==Vt){H=!1;break}if(Vt=pt.height,Y===void 0)Y=Vt;else if(Y!==Vt){H=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}H&&ue!==void 0&&Y!==void 0&&(Wt.setKeyframes(Ut),H=getComputedStyle(Wt.target,Wt.pseudoElement),H.width!==ue||H.height!==Y)&&(H=Ut[0],H.width=ue,H.height=Y,H=Ut[Ut.length-1],H.width=ue,H.height=Y,Wt.setKeyframes(Ut))}}g()},function(q){Z.__reactViewTransition===nt&&(Z.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&z(q)}finally{r(),l(),g()}}),nt.finished.finally(function(){for(var q=0;q<mt.length;q++)mt[q].cancel();Z.__reactViewTransition===nt&&(Z.__reactViewTransition=null),b()}),nt}catch{return r(),l(),g(),null}}function Lr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Lr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:P({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},Lr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var u=i[l].effect;u!==null&&u.target===t&&u.pseudoElement===e&&r.push(i[l])}return r},Lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function sv(t){return{name:t,group:new Lr("group",t),imagePair:new Lr("image-pair",t),old:new Lr("old",t),new:new Lr("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(lv(u,t,e,i)===-1){var g=this,b=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(b=function(z){g.removeEventListener(t,e,i),typeof e=="function"?e.call(this,z):e.handleEvent(z)}),r!==null&&(l=g.removeEventListener.bind(g,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Cs(i),u.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:b,cleanup:l}),m(this._fragmentFiber.child,!1,NS,t,b,r)}this._eventListeners=u}};function NS(t,e,i,r){return M(t).addEventListener(e,i,r),!1}ri.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=lv(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var u=l.cleanup;l=Cs(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,DS,t,i,l),r.splice(e,1),u!==null&&u()}};function DS(t,e,i,r){return M(t).removeEventListener(e,i,r),!1}function Cs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function ov(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function lv(t,e,i,r){if(t.length===0)return-1;r=ov(r);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===e&&u.listener===i&&ov(u.optionsOrUseCapture)===r)return l}return-1}ri.prototype.dispatchEvent=function(t){var e=S(this._fragmentFiber);if(e===null)return!0;e=M(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var u=i[l];r.addEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)u=i[l],r.removeEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ri.prototype.focus=function(t){m(this._fragmentFiber.child,!0,cv,t,void 0,void 0)};function cv(t,e){return t.tag===6?!1:(t=M(t),jS(t,e))}ri.prototype.focusLast=function(t){var e=[];m(this._fragmentFiber.child,!0,Od,e,void 0,void 0);for(var i=e.length-1;0<=i&&!cv(e[i],t);i--);};function Od(t,e){return e.push(t),!1}ri.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=M(t),t=Yo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,US,t,void 0,void 0))};function US(t,e){return t.tag===6?!1:(t=M(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,LS,t,void 0,void 0)};function LS(t,e){return t.tag===6||(t=M(t),e.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),m(this._fragmentFiber.child,!1,OS,t,void 0,void 0);for(var i=e=0;i<Ai.length;i++){var r=Ai[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ai[e++]=r}Ai.length=e}};function OS(t,e){return t.tag===6||(t=M(t),e.unobserve(t)),!1}var Ai=[],zd=!1;function zS(t,e,i){Ai.push({fragmentInstance:t,observer:e,instance:i}),zd||(zd=!0,kS(function(){zd=!1;var r=Ai;Ai=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,PS,t,void 0,void 0),t};function PS(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=M(t),e.push.apply(e,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var e=S(this._fragmentFiber);return e===null?this:M(e).getRootNode(t)},ri.prototype.compareDocumentPosition=function(t){var e=S(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,Od,i,void 0,void 0);var r=M(e);if(i.length===0){if(i=r,E(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=T(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=M(i[0]),l=M(i[i.length-1]);var u=E(this._fragmentFiber)?e.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=e.compareDocumentPosition(t),b=l.compareDocumentPosition(t),z=g&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=r&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||u&&l===t||z||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||IS(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function IS(t,e,i,r,l){var u=Kt(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===e||u.alternate===e)){i=!0;break t}u=u.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=e,e=S(e);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==e&&u.alternate!==e)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!u)&&!(e=u===i)&&(e=j(i,u,W),e===null?e=!1:(m(e,!0,I,u,i),u=_,_=null,e=u!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!u)&&!(e=u===r)&&(e=j(r,u,W),e===null?e=!1:(m(e,!0,U,u,r),u=_,O=_=null,e=u!==null)),e):!1}function uv(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];m(this._fragmentFiber.child,!1,Od,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=T(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),uv(t,i);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=M(l),uv(l,i)):M(l).scrollIntoView(t),r+=i?-1:1}};function BS(t,e){return t=M(t),fv(t,e),!1}function fv(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function dv(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(u){for(var g=0,b=0;b<Ai.length;b++){var z=Ai[b];(z.fragmentInstance!==e||z.observer!==u||z.instance!==t)&&(Ai[g++]=z)}Ai.length=g,u.observe(t)}),fv(t,e))}function FS(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?zS(e,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Pd(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Pd(i),ve(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function HS(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Xe])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function GS(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=mi(t.nextSibling),t===null))return null;return t}function hv(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=mi(t.nextSibling),t===null))return null;return t}function Id(t){return t.data==="$?"||t.data==="$~"}function Bd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function VS(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Fd=null;function pv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return mi(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function jS(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function kS(t){ev(function(){ev(function(e){return t(e)})})}function gv(t,e,i){switch(e=Yo(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function vv(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Pe(t,e,r,null,_S,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Oi&&(t.onclick=null),ve(t)}function Hd(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ve(t)}var gi=new Map,xv=new Set;function Wo(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var ua=At.d;At.d={f:XS,r:qS,D:YS,C:WS,L:ZS,m:KS,X:JS,S:QS,M:$S};function XS(){var t=ua.f(),e=Mc();return t||e}function qS(t){var e=Qe(t);e!==null&&e.tag===5&&e.type==="form"?yg(e):ua.r(t)}var Ns=typeof document>"u"?null:document;function _v(t,e,i){var r=Ns;if(r&&typeof e=="string"&&e){var l=li(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),xv.has(l)||(xv.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Dn(e,"link",t),Ze(e),r.head.appendChild(e)))}}function YS(t){ua.D(t),_v("dns-prefetch",t,null)}function WS(t,e){ua.C(t,e),_v("preconnect",t,e)}function ZS(t,e,i){ua.L(t,e,i);var r=Ns;if(r&&t&&e){var l='link[rel="preload"][as="'+li(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+li(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+li(i.imageSizes)+'"]')):l+='[href="'+li(t)+'"]';var u=l;switch(e){case"style":u=Ds(t);break;case"script":u=Us(t)}if(!(gi.has(u)||(t=P({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),gi.set(u,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(Zo(u))||e==="script"&&r.querySelector(Ko(u))))){var g=r.createElement("link");Dn(g,"link",t),e==="style"&&(g[Ge]=!0,g.onload=g.onerror=function(){On(g)}),Ze(g),r.head.appendChild(g)}}}function KS(t,e){ua.m(t,e);var i=Ns;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+li(r)+'"][href="'+li(t)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Us(t)}if(!gi.has(u)&&(t=P({rel:"modulepreload",href:t},e),gi.set(u,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ko(u)))return}r=i.createElement("link"),Dn(r,"link",t),Ze(r),i.head.appendChild(r)}}}function QS(t,e,i){ua.S(t,e,i);var r=Ns;if(r&&t){var l=_n(r).hoistableStyles,u=Ds(t);e=e||"default";var g=l.get(u);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(Zo(u)))b.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":e},i),(i=gi.get(u))&&Gd(t,i);var z=g=r.createElement("link");Ze(z),Dn(z,"link",t),z._p=new Promise(function(Z,nt){z.onload=Z,z.onerror=nt}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Cc(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:b},l.set(u,g)}}}function JS(t,e){ua.X(t,e);var i=Ns;if(i&&t){var r=_n(i).hoistableScripts,l=Us(t),u=r.get(l);u||(u=i.querySelector(Ko(l)),u||(t=P({src:t,async:!0},e),(e=gi.get(l))&&Vd(t,e),u=i.createElement("script"),Ze(u),Dn(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function $S(t,e){ua.M(t,e);var i=Ns;if(i&&t){var r=_n(i).hoistableScripts,l=Us(t),u=r.get(l);u||(u=i.querySelector(Ko(l)),u||(t=P({src:t,async:!0,type:"module"},e),(e=gi.get(l))&&Vd(t,e),u=i.createElement("script"),Ze(u),Dn(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function yv(t,e,i,r){var l=(l=L.current)?Wo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ds(i.href),e=_n(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ds(i.href);var u=_n(l).hoistableStyles,g=u.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,g),(u=l.querySelector(Zo(t)))?u._p||(g.instance=u,g.state.loading=5):(u=gi.get(t),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},gi.set(t,u)),tM(l,t,u,g.state))),e&&r===null)throw Error(s(528,""));return g}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=Us(i),e=_n(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ds(t){return'href="'+li(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function Sv(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function tM(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Ge]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[Ge]=!0,e.onload=e.onerror=On.bind(null,e),Dn(e,"link",i),Ze(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Us(t){return'[src="'+li(t)+'"]'}function Ko(t){return"script[async]"+t}function Mv(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+li(i.href)+'"]');if(r)return e.instance=r,Ze(r),r;var l=P({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ze(r),Dn(r,"style",l),Cc(r,i.precedence,t),e.instance=r;case"stylesheet":l=Ds(i.href);var u=t.querySelector(Zo(l));if(u)return e.state.loading|=4,e.instance=u,Ze(u),u;r=Sv(i),(l=gi.get(l))&&Gd(r,l),u=(t.ownerDocument||t).createElement("link"),Ze(u);var g=u;return g._p=new Promise(function(b,z){g.onload=b,g.onerror=z}),Dn(u,"link",r),e.state.loading|=4,Cc(u,i.precedence,t),e.instance=u;case"script":return u=Us(i.src),(l=t.querySelector(Ko(u)))?(e.instance=l,Ze(l),l):(r=i,(l=gi.get(u))&&(r=P({},i),Vd(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ze(l),Dn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Cc(r,i.precedence,t));return e.instance}function Cc(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===e)u=b;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Gd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Vd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Nc=null;function Ev(t,e,i){if(Nc===null){var r=new Map,l=Nc=new Map;l.set(i,r)}else l=Nc,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var u=i[l];if(!(u[Xe]||u[Ct]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(e)||"";g=t+g;var b=r.get(g);b?b.push(u):r.set(g,[u])}}return r}function jd(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function eM(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function bv(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Tv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Av(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function wv(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Av(e),t.suspenseyImages.push(e)),t=aM.bind(t),e.decode().then(t,t))}function nM(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ds(r.href),u=e.querySelector(Zo(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Qo.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=u,Ze(u);return}u=e.ownerDocument||e,r=Sv(r),(l=gi.get(l))&&Gd(r,l),u=u.createElement("link"),Ze(u);var g=u;g._p=new Promise(function(b,z){g.onload=b,g.onerror=z}),Dn(u,"link",r),i.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Qo.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Dc=0;function iM(t,e){return t.stylesheets&&t.count===0&&Lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Dc===0&&(Dc=62500*SS());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Dc?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Rv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Lc(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Qo(){this.count--,Rv(this)}function aM(){this.imgCount--,Rv(this)}var Uc=null;function Lc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uc=new Map,e.forEach(rM,t),Uc=null,Qo.call(t))}function rM(t,e){if(!(e.state.loading&4)){var i=Uc.get(t);if(i)var r=i.get(null);else{i=new Map,Uc.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var g=l[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),r=g)}r&&i.set(null,r)}l=e.instance,g=l.getAttribute("data-precedence"),u=i.get(g)||r,u===r&&i.set(null,l),i.set(g,l),this.count++,r=Qo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ls={$$typeof:dt,Provider:null,Consumer:null,_currentValue:Zt,_currentValue2:Zt,_threadCount:0};function sM(t,e,i,r,l,u,g,b,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function Cv(t,e,i,r,l,u,g,b,z,Z,nt,mt){return t=new sM(t,e,i,g,z,Z,nt,mt,b),e=1,u===!0&&(e|=24),u=kn(3,null,null,e),t.current=u,u.stateNode=t,e=af(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:e},lf(u),t}function Nv(t){return t?(t=rs,t):rs}function Dv(t,e,i,r,l,u){l=Nv(l),r.context===null?r.context=l:r.pendingContext=l,r=za(e),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=Pa(t,r,e),i!==null&&(Wn(i,t,e),Ro(i,t,e))}function Uv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function kd(t,e){Uv(t,e),(t=t.alternate)&&Uv(t,e)}function Lv(t){if(t.tag===13||t.tag===31){var e=gr(t,67108864);e!==null&&Wn(e,t,67108864),kd(t,67108864)}}function Ov(t){if(t.tag===13||t.tag===31){var e=ai();e=st(e);var i=gr(t,e);i!==null&&Wn(i,t,e),kd(t,e)}}var Os=!0;function oM(t,e,i,r){var l=St.T;St.T=null;var u=At.p;try{At.p=2,Xd(t,e,i,r)}finally{At.p=u,St.T=l}}function lM(t,e,i,r){var l=St.T;St.T=null;var u=At.p;try{At.p=8,Xd(t,e,i,r)}finally{At.p=u,St.T=l}}function Xd(t,e,i,r){if(Os){var l=qd(r);if(l===null)Ad(t,e,r,Oc,i),Pv(t,r);else if(uM(l,t,e,i,r))r.stopPropagation();else if(Pv(t,r),e&4&&-1<cM.indexOf(t)){for(;l!==null;){var u=Qe(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=Li(u.pendingLanes);if(g!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var z=1<<31-Ln(g);b.entanglements[1]|=z,g&=~z}ki(u),(De&6)===0&&(_c=k()+500,ko(0))}}break;case 31:case 13:b=gr(u,2),b!==null&&Wn(b,u,2),Mc(),kd(u,2)}if(u=qd(r),u===null&&Ad(t,e,r,Oc,i),u===l)break;l=u}l!==null&&r.stopPropagation()}else Ad(t,e,r,null,i)}}function qd(t){return t=Nu(t),Yd(t)}var Oc=null;function Yd(t){if(Oc=null,t=Kt(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=d(e),t!==null)return t;t=null}else if(i===31){if(t=h(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Oc=t,null}function zv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pt()){case ht:return 2;case _t:return 8;case It:case Ft:return 32;case oe:return 268435456;default:return 32}default:return 32}}var Wd=!1,Wa=null,Za=null,Ka=null,Jo=new Map,$o=new Map,Qa=[],cM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(t,e){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function tl(t,e,i,r,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},e!==null&&(e=Qe(e),e!==null&&Lv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function uM(t,e,i,r,l){switch(e){case"focusin":return Wa=tl(Wa,t,e,i,r,l),!0;case"dragenter":return Za=tl(Za,t,e,i,r,l),!0;case"mouseover":return Ka=tl(Ka,t,e,i,r,l),!0;case"pointerover":var u=l.pointerId;return Jo.set(u,tl(Jo.get(u)||null,t,e,i,r,l)),!0;case"gotpointercapture":return u=l.pointerId,$o.set(u,tl($o.get(u)||null,t,e,i,r,l)),!0}return!1}function Iv(t){var e=Kt(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=d(i),e!==null){t.blockedOn=e,bt(t.priority,function(){Ov(i)});return}}else if(e===31){if(e=h(i),e!==null){t.blockedOn=e,bt(t.priority,function(){Ov(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=qd(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Cu=r,i.target.dispatchEvent(r),Cu=null}else return e=Qe(i),e!==null&&Lv(e),t.blockedOn=i,!1;e.shift()}return!0}function Bv(t,e,i){zc(t)&&i.delete(e)}function fM(){Wd=!1,Wa!==null&&zc(Wa)&&(Wa=null),Za!==null&&zc(Za)&&(Za=null),Ka!==null&&zc(Ka)&&(Ka=null),Jo.forEach(Bv),$o.forEach(Bv)}function Pc(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,fM)))}var Ic=null;function Fv(t){Ic!==t&&(Ic=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ic===t&&(Ic=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Yd(r||i)===null)continue;break}var u=Qe(i);u!==null&&(t.splice(e,3),e-=3,Cf(u,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function zs(t){function e(z){return Pc(z,t)}Wa!==null&&Pc(Wa,t),Za!==null&&Pc(Za,t),Ka!==null&&Pc(Ka,t),Jo.forEach(e),$o.forEach(e);for(var i=0;i<Qa.length;i++){var r=Qa[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Qa.length&&(i=Qa[0],i.blockedOn===null);)Iv(i),i.blockedOn===null&&Qa.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],u=i[r+1],g=l[Lt]||null;if(typeof u=="function")g||Fv(i);else if(g){var b=null;if(u&&u.hasAttribute("formAction")){if(l=u,g=u[Lt]||null)b=g.formAction;else if(Yd(l)!==null)continue}else b=g.action;typeof b=="function"?i[r+1]=b:(i.splice(r,3),r-=3),Fv(i)}}}function Hv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Zd(t){this._internalRoot=t}Bc.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ai();Dv(i,r,t,e,null,null)},Bc.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dv(t.current,2,null,t,null,null),Mc(),e[te]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=J();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Qa.length&&e!==0&&e<Qa[i].priority;i++);Qa.splice(i,0,t),i===0&&Iv(t)}};var Gv=n.version;if(Gv!=="19.3.1")throw Error(s(527,Gv,"19.3.1"));At.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var dM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:St,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{be=Fc.inject(dM),We=Fc}catch{}}return nl.createRoot=function(t,e){if(!c(t))throw Error(s(299));var i=!1,r="",l=Ng,u=Dg,g=Ug;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError)),e=Cv(t,1,!1,null,null,i,r,null,l,u,g,Hv),t[te]=e.current,Td(t),new Zd(e)},nl.hydrateRoot=function(t,e,i){if(!c(t))throw Error(s(299));var r=!1,l="",u=Ng,g=Dg,b=Ug,z=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.formState!==void 0&&(z=i.formState)),e=Cv(t,1,!0,e,i??null,r,l,z,u,g,b,Hv),e.context=Nv(null),i=e.current,r=ai(),r=st(r),l=za(r),l.callback=null,Pa(i,l,r),i=r,e.current.lanes=i,hr(e,i),ki(e),t[te]=e.current,Td(t),new Bc(e)},nl.version="19.3.1",nl}var Qv;function EM(){if(Qv)return Jd.exports;Qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Jd.exports=MM(),Jd.exports}var bM=EM();const TM=$x(bM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t_=(...o)=>o.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=Ee.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:f,iconNode:d,...h},p)=>Ee.createElement("svg",{ref:p,...wM,width:n,height:n,stroke:o,strokeWidth:s?Number(a)*24/Number(n):a,className:t_("lucide",c),...h},[...d.map(([v,x])=>Ee.createElement(v,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=(o,n)=>{const a=Ee.forwardRef(({className:s,...c},f)=>Ee.createElement(RM,{ref:f,iconNode:n,className:t_(`lucide-${AM(o)}`,s),...c}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],NM=sn("ArrowDown",CM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],kr=sn("ArrowUpRight",DM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],LM=sn("ArrowUp",UM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zM=sn("ChevronDown",OM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],IM=sn("ChevronLeft",PM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],FM=sn("ChevronRight",BM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Uh=sn("CircleCheck",HM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],VM=sn("Compass",GM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],kM=sn("Copy",jM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],qM=sn("Cpu",XM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Lh=sn("ExternalLink",YM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],ul=sn("Github",WM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],KM=sn("Key",ZM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],JM=sn("Linkedin",QM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],tE=sn("Menu",$M);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],nE=sn("RefreshCw",eE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],aE=sn("Send",iE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],e_=sn("ShieldCheck",rE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],oE=sn("Volume2",sE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],cE=sn("VolumeX",lE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],n_=sn("X",uE),bn={name:"TECH GENZ",tagline:"WE BUILD WHAT'S NEXT.",supportingHeadline:"IDEAS ENGINEERED BEYOND LIMITS.",subDescriptor:"Web, AI, Cloud & Interactive 3D",intro:"Four minds. One vision. Technology built to turn ambitious ideas into useful experiences.",about:"Tech Genz is a collaborative technology team focused on designing, developing, and experimenting with digital products. We combine engineering, creative thinking, and practical problem-solving to turn ideas into working experiences.",githubOrg:"https://github.com/Tech-Genz",contactEmail:"contact@techgenz.dev",availability:"Available for ambitious collaborations & high-impact projects"},fE=[{id:"web-dev",index:"01",title:"WEB APPLICATION DEVELOPMENT",description:"High-performance full-stack web applications engineered with modern architectures, resilient frontend frameworks, and robust state management.",capabilities:["React & TypeScript","Next-gen Bundlers (Vite)","Responsive Design Systems","Optimized Core Web Vitals"],expandedDetail:"From interactive client interfaces to complex enterprise-grade single page applications, we build fast, scalable, and accessible web experiences engineered to endure high loads."},{id:"ai-automation",index:"02",title:"AI & AUTOMATION",description:"Intelligent workflow automation, generative AI pipelines, and agentic integrations designed to accelerate productivity and streamline operations.",capabilities:["Large Language Model Integration","Context Retrieval Pipelines","Automated Task Workflows","API Connectors"],expandedDetail:"We connect modern generative AI models and custom automation scripts into practical software layers that solve real workflow bottlenecks."},{id:"mobile-apps",index:"03",title:"MOBILE APPLICATIONS",description:"Fluid cross-platform mobile experiences for iOS and Android built with modern toolchains and native-like performance.",capabilities:["Cross-platform Architecture","Offline First Data Sync","Native Bridge Integration","Sensory & Gesture Feedback"],expandedDetail:"Mobile applications designed with intuitive micro-interactions, efficient memory usage, and responsive gesture-based navigation."},{id:"backend-cloud",index:"04",title:"BACKEND & CLOUD SYSTEMS",description:"Scalable API services, microservice backends, reliable data persistence layers, and secure cloud storage architectures.",capabilities:["RESTful & Realtime APIs","Relational & Document Databases","Authentication & Security","Serverless Deployment"],expandedDetail:"High-throughput server environments, structured schema modeling, and zero-trust authentication layers that power mission-critical software."},{id:"creative-3d",index:"05",title:"CREATIVE CODING & 3D WEB",description:"Interactive WebGL, Three.js environments, shader art, and GPU-accelerated particle graphics that elevate brand storytelling.",capabilities:["Three.js & WebGL Renders","Custom GLSL Shaders","Procedural Particle Systems","60 FPS Interactive Canvases"],expandedDetail:"Pushing the limits of web browsers through spatial 3D graphics, physics simulations, and generative visuals that captivate audiences."},{id:"prototyping-experimental",index:"06",title:"PROTOTYPING & EXPERIMENTAL PROJECTS",description:"Rapid exploratory prototyping, proof-of-concept builds, and cutting-edge digital sandboxes testing next-generation paradigms.",capabilities:["Rapid Interactive Mockups","Feasibility Benchmarking","Experimental Hardware/Software Interfaces","Iterative Usability Sprints"],expandedDetail:"Validating ambitious hypotheses through functional software prototypes, ensuring strategic direction before committing large-scale capital."}],Jv=[{id:"sharepinz",index:"01",title:"SHAREPINZ",italicWord:"file sharing",subtitle:"PIN-BASED FILE SHARING PLATFORM",category:"Web Application // Cloud System",description:"SharePinz is a file-sharing platform designed to let users upload files, generate a unique PIN, and share access with recipients. Built for frictionless transfers without cumbersome account creation.",featured:!0,year:"2026",techStack:["React","TypeScript","Node.js","Express","Cloud Storage","REST APIs","Tailwind CSS"],mockupType:"browser",repoUrl:"https://github.com/Tech-Genz/SharePinz",liveUrl:"https://sharepinz.site/",problem:"Traditional file sharing requires either sign-ups with email verifications or yields unwieldy, easily forgotten links with ambiguous security policies.",solution:"SharePinz introduces ephemeral PIN codes paired with encrypted cloud storage, allowing immediate sender-to-recipient retrieval with TTL expiration and clean bandwidth limits.",keyFeatures:["Instant 6-digit numeric PIN generation upon file upload","Expiring time-to-live (TTL) file purge logic","Bandwidth-efficient multipart streaming","Minimalist, distraction-free responsive upload and download UI"],challenges:"Handling concurrent chunked uploads reliably across spotty network connections while maintaining strict PIN access gating and automated storage cleanup."}],dE=[{id:"guna",index:"01",name:"V. Gunasekhar",role:"Team Leader",shortBio:"Architecting core system structures, driving technical strategy, and coordinating engineering pipelines across web, backend, and 3D visual environments.",skills:["Full Stack Architecture","System Design","React & TypeScript","Three.js & Graphics","Engineering Leadership"],github:"https://github.com/Tech-Genz",linkedin:"https://www.linkedin.com/in/varikunta-gunasekhar-446997369/",avatarPlaceholder:"VG"},{id:"sahithi",index:"02",name:"CH. Sahithi Sri",role:"Team Member 1",shortBio:"Specializing in intuitive user interfaces, frontend component systems, responsive design aesthetics, and fluid user experiences.",skills:["Frontend Development","UI/UX Architecture","React & Modern CSS","Design Systems","Web Accessibility"],github:"https://github.com/Tech-Genz",linkedin:"https://www.linkedin.com/in/sahithi-sri-2b0355386",avatarPlaceholder:"SS"},{id:"bhuvan",index:"03",name:"Kull Bhuvan",role:"Team Member 2",shortBio:"Focused on robust backend services, data modeling, API integration, and cloud deployment pipelines for scalable digital applications.",skills:["Backend Engineering","Database Modeling","API Architecture","Cloud Infrastructure","Performance Optimization"],github:"https://github.com/Tech-Genz",linkedin:"https://www.linkedin.com/in/kull-bhuvan-772058440",avatarPlaceholder:"KB"},{id:"navaz",index:"04",name:"SK Mohammad Navaz",role:"Team Member 3",shortBio:"Developing full-stack workflows, experimental prototypes, logic integration, and intelligent automation tooling for client and server platforms.",skills:["Full Stack Prototyping","Automation & Logic","Node.js & JavaScript","Mobile Integration","Testing & QA"],github:"https://github.com/Tech-Genz",linkedin:"https://www.linkedin.com/in/navaz-sk-523aa735a",avatarPlaceholder:"MN"}],$v=[{name:"React",category:"frontend",tag:"Frontend Library"},{name:"TypeScript",category:"frontend",tag:"Type Safety"},{name:"JavaScript",category:"frontend",tag:"Core Language"},{name:"Node.js",category:"backend",tag:"Runtime Environment"},{name:"Supabase",category:"backend",tag:"Backend as a Service"},{name:"Three.js",category:"creative",tag:"3D & WebGL"},{name:"Tailwind CSS",category:"frontend",tag:"Styling Engine"},{name:"Flutter",category:"frontend",tag:"Mobile Framework"},{name:"GitHub",category:"devops",tag:"Version & CI/CD"},{name:"REST APIs",category:"backend",tag:"Interface Protocol"},{name:"GLSL Shaders",category:"creative",tag:"GPU Computing"},{name:"AI Automation",category:"ai",tag:"Intelligent Systems"},{name:"Vite",category:"devops",tag:"Build Tool"},{name:"PostgreSQL",category:"backend",tag:"Relational DB"}],hE=({activeSection:o})=>{const[n,a]=Ee.useState(!1),[s,c]=Ee.useState(!1);Ee.useEffect(()=>{const h=()=>{c(window.scrollY>40)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const f=[{name:"HOME",href:"#home"},{name:"ABOUT",href:"#about"},{name:"SERVICES",href:"#services"},{name:"PROJECTS",href:"#projects"},{name:"TEAM",href:"#team"},{name:"CONTACT",href:"#contact"}],d=(h,p)=>{h.preventDefault(),a(!1);const v=document.querySelector(p);if(v){const S=v.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:S,behavior:"smooth"})}};return y.jsxs("header",{className:`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${s?"bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] py-4":"bg-transparent border-b border-white/[0.04] py-5"}`,children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between",children:[y.jsxs("a",{href:"#home",onClick:h=>d(h,"#home"),className:"flex items-center gap-2 group text-sm font-display font-bold tracking-widest text-white transition-opacity hover:opacity-80",children:[y.jsx("span",{children:bn.name}),y.jsx("span",{className:"text-neutral-500 font-mono font-normal tracking-normal group-hover:text-accent-cyan transition-colors",children:"//"})]}),y.jsx("nav",{className:"hidden md:flex items-center space-x-8",children:f.map(h=>{const p=o===h.href.substring(1);return y.jsxs("a",{href:h.href,onClick:v=>d(v,h.href),className:`relative text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 py-1 ${p?"text-white font-medium":"text-neutral-400 hover:text-white"}`,children:[h.name,p&&y.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[1.5px] bg-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"})]},h.name)})}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsxs("a",{href:"#contact",onClick:h=>d(h,"#contact"),className:"hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white hover:text-black hover:border-white text-xs font-mono tracking-wider transition-all duration-300 text-neutral-300 group",children:[y.jsx("span",{children:"GET IN TOUCH"}),y.jsx(kr,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),y.jsx("button",{onClick:()=>a(!n),"aria-label":n?"Close menu":"Open menu",className:"md:hidden p-2 rounded-lg text-neutral-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors focus:outline-none",children:n?y.jsx(n_,{className:"w-5 h-5"}):y.jsx(tE,{className:"w-5 h-5"})})]})]}),n&&y.jsxs("div",{className:"md:hidden fixed inset-x-0 top-[65px] bg-[#050505]/98 border-b border-white/10 px-6 py-8 flex flex-col space-y-5 backdrop-blur-xl animate-fadeIn",children:[f.map(h=>{const p=o===h.href.substring(1);return y.jsxs("a",{href:h.href,onClick:v=>d(v,h.href),className:`text-base font-display tracking-widest flex items-center justify-between py-2 border-b border-white/[0.06] ${p?"text-white font-bold":"text-neutral-400 hover:text-white"}`,children:[y.jsx("span",{children:h.name}),y.jsx("span",{className:"font-mono text-xs text-neutral-600",children:"//"})]},h.name)}),y.jsxs("div",{className:"pt-4 flex flex-col gap-3",children:[y.jsx("a",{href:"#contact",onClick:h=>d(h,"#contact"),className:"w-full py-3 text-center rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors",children:"Contact Tech Genz"}),y.jsx("a",{href:bn.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"w-full py-2.5 text-center rounded-full border border-white/20 text-neutral-300 font-mono text-xs tracking-wider hover:border-white/40 transition-colors",children:"GitHub Organization ↗"})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="174",pE=0,tx=1,mE=2,i_=1,gE=2,ga=3,cr=0,Kn=1,va=2,or=0,Qs=1,Oh=2,ex=3,nx=4,vE=5,Vr=100,xE=101,_E=102,yE=103,SE=104,ME=200,EE=201,bE=202,TE=203,zh=204,Ph=205,AE=206,wE=207,RE=208,CE=209,NE=210,DE=211,UE=212,LE=213,OE=214,Ih=0,Bh=1,Fh=2,to=3,Hh=4,Gh=5,Vh=6,jh=7,a_=0,zE=1,PE=2,lr=0,IE=1,BE=2,FE=3,HE=4,GE=5,VE=6,jE=7,r_=300,eo=301,no=302,kh=303,Xh=304,_u=306,qh=1e3,Xr=1001,Yh=1002,Ui=1003,kE=1004,Hc=1005,qi=1006,nh=1007,qr=1008,Ma=1009,s_=1010,o_=1011,cl=1012,Ap=1013,Wr=1014,xa=1015,fl=1016,wp=1017,Rp=1018,io=1020,l_=35902,c_=1021,u_=1022,Di=1023,f_=1024,d_=1025,Js=1026,ao=1027,h_=1028,Cp=1029,p_=1030,Np=1031,Dp=1033,uu=33776,fu=33777,du=33778,hu=33779,Wh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,tp=37496,ep=37808,np=37809,ip=37810,ap=37811,rp=37812,sp=37813,op=37814,lp=37815,cp=37816,up=37817,fp=37818,dp=37819,hp=37820,pp=37821,pu=36492,mp=36494,gp=36495,m_=36283,vp=36284,xp=36285,_p=36286,XE=3200,qE=3201,YE=0,WE=1,sr="",xi="srgb",ro="srgb-linear",gu="linear",Fe="srgb",Ps=7680,ix=519,ZE=512,KE=513,QE=514,g_=515,JE=516,$E=517,tb=518,eb=519,ax=35044,rx="300 es",_a=2e3,vu=2001;class oo{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const c=s[n];if(c!==void 0){const f=c.indexOf(a);f!==-1&&c.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,n);n.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,yp=180/Math.PI;function dl(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[n&255]+Pn[n>>8&255]+"-"+Pn[n>>16&15|64]+Pn[n>>24&255]+"-"+Pn[a&63|128]+Pn[a>>8&255]+"-"+Pn[a>>16&255]+Pn[a>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Ae(o,n,a){return Math.max(n,Math.min(a,o))}function nb(o,n){return(o%n+n)%n}function ah(o,n,a){return(1-a)*o+a*n}function il(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class He{constructor(n=0,a=0){He.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,c=n.elements;return this.x=c[0]*a+c[3]*s+c[6],this.y=c[1]*a+c[4]*s+c[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Ae(this.x,n.x,a.x),this.y=Ae(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=Ae(this.x,n,a),this.y=Ae(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Ae(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),c=Math.sin(a),f=this.x-n.x,d=this.y-n.y;return this.x=f*s-d*c+n.x,this.y=f*c+d*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(n,a,s,c,f,d,h,p,v){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,d,h,p,v)}set(n,a,s,c,f,d,h,p,v){const x=this.elements;return x[0]=n,x[1]=c,x[2]=h,x[3]=a,x[4]=f,x[5]=p,x[6]=s,x[7]=d,x[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,d=s[0],h=s[3],p=s[6],v=s[1],x=s[4],m=s[7],S=s[2],E=s[5],T=s[8],N=c[0],M=c[3],_=c[6],O=c[1],I=c[4],U=c[7],W=c[2],j=c[5],P=c[8];return f[0]=d*N+h*O+p*W,f[3]=d*M+h*I+p*j,f[6]=d*_+h*U+p*P,f[1]=v*N+x*O+m*W,f[4]=v*M+x*I+m*j,f[7]=v*_+x*U+m*P,f[2]=S*N+E*O+T*W,f[5]=S*M+E*I+T*j,f[8]=S*_+E*U+T*P,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],v=n[7],x=n[8];return a*d*x-a*h*v-s*f*x+s*h*p+c*f*v-c*d*p}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],v=n[7],x=n[8],m=x*d-h*v,S=h*p-x*f,E=v*f-d*p,T=a*m+s*S+c*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return n[0]=m*N,n[1]=(c*v-x*s)*N,n[2]=(h*s-c*d)*N,n[3]=S*N,n[4]=(x*a-c*p)*N,n[5]=(c*f-h*a)*N,n[6]=E*N,n[7]=(s*p-v*a)*N,n[8]=(d*a-s*f)*N,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,c,f,d,h){const p=Math.cos(f),v=Math.sin(f);return this.set(s*p,s*v,-s*(p*d+v*h)+d+n,-c*v,c*p,-c*(-v*d+p*h)+h+a,0,0,1),this}scale(n,a){return this.premultiply(rh.makeScale(n,a)),this}rotate(n){return this.premultiply(rh.makeRotation(-n)),this}translate(n,a){return this.premultiply(rh.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<9;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new fe;function v_(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function xu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ib(){const o=xu("canvas");return o.style.display="block",o}const sx={};function Hr(o){o in sx||(sx[o]=!0,console.warn(o))}function ab(o,n,a){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function rb(o){const n=o.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function sb(o){const n=o.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const ox=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lx=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ob(){const o={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Fe&&(c.r=Sa(c.r),c.g=Sa(c.g),c.b=Sa(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Fe&&(c.r=$s(c.r),c.g=$s(c.g),c.b=$s(c.b))),c},fromWorkingColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},toWorkingColorSpace:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===sr?gu:this.spaces[c].transfer},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[ro]:{primaries:n,whitePoint:s,transfer:gu,toXYZ:ox,fromXYZ:lx,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:n,whitePoint:s,transfer:Fe,toXYZ:ox,fromXYZ:lx,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const Ne=ob();function Sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Is;class lb{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let a;if(n instanceof HTMLCanvasElement)a=n;else{Is===void 0&&(Is=xu("canvas")),Is.width=n.width,Is.height=n.height;const s=Is.getContext("2d");n instanceof ImageData?s.putImageData(n,0,0):s.drawImage(n,0,0,n.width,n.height),a=Is}return a.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=xu("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const c=s.getImageData(0,0,n.width,n.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Sa(f[d]/255)*255;return s.putImageData(c,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Sa(a[s]/255)*255):a[s]=Sa(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let cb=0;class Up{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=dl(),this.data=n,this.dataReady=!0,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(sh(c[d].image)):f.push(sh(c[d]))}else f=sh(c);s.url=f}return a||(n.images[this.uuid]=s),s}}function sh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ub=0;class jn extends oo{constructor(n=jn.DEFAULT_IMAGE,a=jn.DEFAULT_MAPPING,s=Xr,c=Xr,f=qi,d=qr,h=Di,p=Ma,v=jn.DEFAULT_ANISOTROPY,x=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=dl(),this.name="",this.source=new Up(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=v,this.format=h,this.internalFormat=null,this.type=p,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==r_)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case qh:n.x=n.x-Math.floor(n.x);break;case Xr:n.x=n.x<0?0:1;break;case Yh:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case qh:n.y=n.y-Math.floor(n.y);break;case Xr:n.y=n.y<0?0:1;break;case Yh:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=r_;jn.DEFAULT_ANISOTROPY=1;class rn{constructor(n=0,a=0,s=0,c=1){rn.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=c}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,c){return this.x=n,this.y=a,this.z=s,this.w=c,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=this.w,d=n.elements;return this.x=d[0]*a+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*a+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*a+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*a+d[7]*s+d[11]*c+d[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,c,f;const p=n.elements,v=p[0],x=p[4],m=p[8],S=p[1],E=p[5],T=p[9],N=p[2],M=p[6],_=p[10];if(Math.abs(x-S)<.01&&Math.abs(m-N)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+S)<.1&&Math.abs(m+N)<.1&&Math.abs(T+M)<.1&&Math.abs(v+E+_-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const I=(v+1)/2,U=(E+1)/2,W=(_+1)/2,j=(x+S)/4,P=(m+N)/4,G=(T+M)/4;return I>U&&I>W?I<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(I),c=j/s,f=P/s):U>W?U<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(U),s=j/c,f=G/c):W<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(W),s=P/f,c=G/f),this.set(s,c,f,a),this}let O=Math.sqrt((M-T)*(M-T)+(m-N)*(m-N)+(S-x)*(S-x));return Math.abs(O)<.001&&(O=1),this.x=(M-T)/O,this.y=(m-N)/O,this.z=(S-x)/O,this.w=Math.acos((v+E+_-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Ae(this.x,n.x,a.x),this.y=Ae(this.y,n.y,a.y),this.z=Ae(this.z,n.z,a.z),this.w=Ae(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=Ae(this.x,n,a),this.y=Ae(this.y,n,a),this.z=Ae(this.z,n,a),this.w=Ae(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fb extends oo{constructor(n=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=1,this.scissor=new rn(0,0,n,a),this.scissorTest=!1,this.viewport=new rn(0,0,n,a);const c={width:n,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new jn(c,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=n,this.textures[c].image.height=a,this.textures[c].image.depth=s;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const c=Object.assign({},n.textures[a].image);this.textures[a].source=new Up(c)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends fb{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class x_ extends jn{constructor(n=null,a=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class db extends jn{constructor(n=null,a=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(n=0,a=0,s=0,c=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=c}static slerpFlat(n,a,s,c,f,d,h){let p=s[c+0],v=s[c+1],x=s[c+2],m=s[c+3];const S=f[d+0],E=f[d+1],T=f[d+2],N=f[d+3];if(h===0){n[a+0]=p,n[a+1]=v,n[a+2]=x,n[a+3]=m;return}if(h===1){n[a+0]=S,n[a+1]=E,n[a+2]=T,n[a+3]=N;return}if(m!==N||p!==S||v!==E||x!==T){let M=1-h;const _=p*S+v*E+x*T+m*N,O=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const W=Math.sqrt(I),j=Math.atan2(W,_*O);M=Math.sin(M*j)/W,h=Math.sin(h*j)/W}const U=h*O;if(p=p*M+S*U,v=v*M+E*U,x=x*M+T*U,m=m*M+N*U,M===1-h){const W=1/Math.sqrt(p*p+v*v+x*x+m*m);p*=W,v*=W,x*=W,m*=W}}n[a]=p,n[a+1]=v,n[a+2]=x,n[a+3]=m}static multiplyQuaternionsFlat(n,a,s,c,f,d){const h=s[c],p=s[c+1],v=s[c+2],x=s[c+3],m=f[d],S=f[d+1],E=f[d+2],T=f[d+3];return n[a]=h*T+x*m+p*E-v*S,n[a+1]=p*T+x*S+v*m-h*E,n[a+2]=v*T+x*E+h*S-p*m,n[a+3]=x*T-h*m-p*S-v*E,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,c){return this._x=n,this._y=a,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,c=n._y,f=n._z,d=n._order,h=Math.cos,p=Math.sin,v=h(s/2),x=h(c/2),m=h(f/2),S=p(s/2),E=p(c/2),T=p(f/2);switch(d){case"XYZ":this._x=S*x*m+v*E*T,this._y=v*E*m-S*x*T,this._z=v*x*T+S*E*m,this._w=v*x*m-S*E*T;break;case"YXZ":this._x=S*x*m+v*E*T,this._y=v*E*m-S*x*T,this._z=v*x*T-S*E*m,this._w=v*x*m+S*E*T;break;case"ZXY":this._x=S*x*m-v*E*T,this._y=v*E*m+S*x*T,this._z=v*x*T+S*E*m,this._w=v*x*m-S*E*T;break;case"ZYX":this._x=S*x*m-v*E*T,this._y=v*E*m+S*x*T,this._z=v*x*T-S*E*m,this._w=v*x*m+S*E*T;break;case"YZX":this._x=S*x*m+v*E*T,this._y=v*E*m+S*x*T,this._z=v*x*T-S*E*m,this._w=v*x*m-S*E*T;break;case"XZY":this._x=S*x*m-v*E*T,this._y=v*E*m-S*x*T,this._z=v*x*T+S*E*m,this._w=v*x*m+S*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,c=Math.sin(s);return this._x=n.x*c,this._y=n.y*c,this._z=n.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],c=a[4],f=a[8],d=a[1],h=a[5],p=a[9],v=a[2],x=a[6],m=a[10],S=s+h+m;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-p)*E,this._y=(f-v)*E,this._z=(d-c)*E}else if(s>h&&s>m){const E=2*Math.sqrt(1+s-h-m);this._w=(x-p)/E,this._x=.25*E,this._y=(c+d)/E,this._z=(f+v)/E}else if(h>m){const E=2*Math.sqrt(1+h-s-m);this._w=(f-v)/E,this._x=(c+d)/E,this._y=.25*E,this._z=(p+x)/E}else{const E=2*Math.sqrt(1+m-s-h);this._w=(d-c)/E,this._x=(f+v)/E,this._y=(p+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Ae(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const c=Math.min(1,a/s);return this.slerp(n,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,c=n._y,f=n._z,d=n._w,h=a._x,p=a._y,v=a._z,x=a._w;return this._x=s*x+d*h+c*v-f*p,this._y=c*x+d*p+f*h-s*v,this._z=f*x+d*v+s*p-c*h,this._w=d*x-s*h-c*p-f*v,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,c=this._y,f=this._z,d=this._w;let h=d*n._w+s*n._x+c*n._y+f*n._z;if(h<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,h=-h):this.copy(n),h>=1)return this._w=d,this._x=s,this._y=c,this._z=f,this;const p=1-h*h;if(p<=Number.EPSILON){const E=1-a;return this._w=E*d+a*this._w,this._x=E*s+a*this._x,this._y=E*c+a*this._y,this._z=E*f+a*this._z,this.normalize(),this}const v=Math.sqrt(p),x=Math.atan2(v,h),m=Math.sin((1-a)*x)/v,S=Math.sin(a*x)/v;return this._w=d*m+this._w*S,this._x=s*m+this._x*S,this._y=c*m+this._y*S,this._z=f*m+this._z*S,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(n),c*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(n=0,a=0,s=0){ut.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(cx.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(cx.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*c,this.y=f[1]*a+f[4]*s+f[7]*c,this.z=f[2]*a+f[5]*s+f[8]*c,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=n.elements,d=1/(f[3]*a+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*a+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*a+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(n){const a=this.x,s=this.y,c=this.z,f=n.x,d=n.y,h=n.z,p=n.w,v=2*(d*c-h*s),x=2*(h*a-f*c),m=2*(f*s-d*a);return this.x=a+p*v+d*m-h*x,this.y=s+p*x+h*v-f*m,this.z=c+p*m+f*x-d*v,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*c,this.y=f[1]*a+f[5]*s+f[9]*c,this.z=f[2]*a+f[6]*s+f[10]*c,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Ae(this.x,n.x,a.x),this.y=Ae(this.y,n.y,a.y),this.z=Ae(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=Ae(this.x,n,a),this.y=Ae(this.y,n,a),this.z=Ae(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,c=n.y,f=n.z,d=a.x,h=a.y,p=a.z;return this.x=c*p-f*h,this.y=f*d-s*p,this.z=s*h-c*d,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return oh.copy(this).projectOnVector(n),this.sub(oh)}reflect(n){return this.sub(oh.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Ae(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,c=this.z-n.z;return a*a+s*s+c*c}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const c=Math.sin(a)*n;return this.x=c*Math.sin(s),this.y=Math.cos(a)*n,this.z=c*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),c=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=c,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new ut,cx=new hl;class pl{constructor(n=new ut(1/0,1/0,1/0),a=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(wi.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(wi.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=wi.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)n.isMesh===!0?n.getVertexPosition(d,wi):wi.fromBufferAttribute(f,d),wi.applyMatrix4(n.matrixWorld),this.expandByPoint(wi);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Gc.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Gc.copy(s.boundingBox)),Gc.applyMatrix4(n.matrixWorld),this.union(Gc)}const c=n.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,wi),wi.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(al),Vc.subVectors(this.max,al),Bs.subVectors(n.a,al),Fs.subVectors(n.b,al),Hs.subVectors(n.c,al),$a.subVectors(Fs,Bs),tr.subVectors(Hs,Fs),Or.subVectors(Bs,Hs);let a=[0,-$a.z,$a.y,0,-tr.z,tr.y,0,-Or.z,Or.y,$a.z,0,-$a.x,tr.z,0,-tr.x,Or.z,0,-Or.x,-$a.y,$a.x,0,-tr.y,tr.x,0,-Or.y,Or.x,0];return!lh(a,Bs,Fs,Hs,Vc)||(a=[1,0,0,0,1,0,0,0,1],!lh(a,Bs,Fs,Hs,Vc))?!1:(jc.crossVectors($a,tr),a=[jc.x,jc.y,jc.z],lh(a,Bs,Fs,Hs,Vc))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,wi).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(wi).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(fa),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const fa=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],wi=new ut,Gc=new pl,Bs=new ut,Fs=new ut,Hs=new ut,$a=new ut,tr=new ut,Or=new ut,al=new ut,Vc=new ut,jc=new ut,zr=new ut;function lh(o,n,a,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){zr.fromArray(o,f);const h=c.x*Math.abs(zr.x)+c.y*Math.abs(zr.y)+c.z*Math.abs(zr.z),p=n.dot(zr),v=a.dot(zr),x=s.dot(zr);if(Math.max(-Math.max(p,v,x),Math.min(p,v,x))>h)return!1}return!0}const hb=new pl,rl=new ut,ch=new ut;class yu{constructor(n=new ut,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):hb.setFromPoints(n).getCenter(s);let c=0;for(let f=0,d=n.length;f<d;f++)c=Math.max(c,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(c),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;rl.subVectors(n,this.center);const a=rl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),c=(s-this.radius)*.5;this.center.addScaledVector(rl,c/s),this.radius+=c}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(ch.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(rl.copy(n.center).add(ch)),this.expandByPoint(rl.copy(n.center).sub(ch))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const da=new ut,uh=new ut,kc=new ut,er=new ut,fh=new ut,Xc=new ut,dh=new ut;class Lp{constructor(n=new ut,a=new ut(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,da)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=da.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(da.copy(this.origin).addScaledVector(this.direction,a),da.distanceToSquared(n))}distanceSqToSegment(n,a,s,c){uh.copy(n).add(a).multiplyScalar(.5),kc.copy(a).sub(n).normalize(),er.copy(this.origin).sub(uh);const f=n.distanceTo(a)*.5,d=-this.direction.dot(kc),h=er.dot(this.direction),p=-er.dot(kc),v=er.lengthSq(),x=Math.abs(1-d*d);let m,S,E,T;if(x>0)if(m=d*p-h,S=d*h-p,T=f*x,m>=0)if(S>=-T)if(S<=T){const N=1/x;m*=N,S*=N,E=m*(m+d*S+2*h)+S*(d*m+S+2*p)+v}else S=f,m=Math.max(0,-(d*S+h)),E=-m*m+S*(S+2*p)+v;else S=-f,m=Math.max(0,-(d*S+h)),E=-m*m+S*(S+2*p)+v;else S<=-T?(m=Math.max(0,-(-d*f+h)),S=m>0?-f:Math.min(Math.max(-f,-p),f),E=-m*m+S*(S+2*p)+v):S<=T?(m=0,S=Math.min(Math.max(-f,-p),f),E=S*(S+2*p)+v):(m=Math.max(0,-(d*f+h)),S=m>0?f:Math.min(Math.max(-f,-p),f),E=-m*m+S*(S+2*p)+v);else S=d>0?-f:f,m=Math.max(0,-(d*S+h)),E=-m*m+S*(S+2*p)+v;return s&&s.copy(this.origin).addScaledVector(this.direction,m),c&&c.copy(uh).addScaledVector(kc,S),E}intersectSphere(n,a){da.subVectors(n.center,this.origin);const s=da.dot(this.direction),c=da.dot(da)-s*s,f=n.radius*n.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,a):this.at(h,a)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,c,f,d,h,p;const v=1/this.direction.x,x=1/this.direction.y,m=1/this.direction.z,S=this.origin;return v>=0?(s=(n.min.x-S.x)*v,c=(n.max.x-S.x)*v):(s=(n.max.x-S.x)*v,c=(n.min.x-S.x)*v),x>=0?(f=(n.min.y-S.y)*x,d=(n.max.y-S.y)*x):(f=(n.max.y-S.y)*x,d=(n.min.y-S.y)*x),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),m>=0?(h=(n.min.z-S.z)*m,p=(n.max.z-S.z)*m):(h=(n.max.z-S.z)*m,p=(n.min.z-S.z)*m),s>p||h>c)||((h>s||s!==s)&&(s=h),(p<c||c!==c)&&(c=p),c<0)?null:this.at(s>=0?s:c,a)}intersectsBox(n){return this.intersectBox(n,da)!==null}intersectTriangle(n,a,s,c,f){fh.subVectors(a,n),Xc.subVectors(s,n),dh.crossVectors(fh,Xc);let d=this.direction.dot(dh),h;if(d>0){if(c)return null;h=1}else if(d<0)h=-1,d=-d;else return null;er.subVectors(this.origin,n);const p=h*this.direction.dot(Xc.crossVectors(er,Xc));if(p<0)return null;const v=h*this.direction.dot(fh.cross(er));if(v<0||p+v>d)return null;const x=-h*er.dot(dh);return x<0?null:this.at(x/d,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(n,a,s,c,f,d,h,p,v,x,m,S,E,T,N,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,d,h,p,v,x,m,S,E,T,N,M)}set(n,a,s,c,f,d,h,p,v,x,m,S,E,T,N,M){const _=this.elements;return _[0]=n,_[4]=a,_[8]=s,_[12]=c,_[1]=f,_[5]=d,_[9]=h,_[13]=p,_[2]=v,_[6]=x,_[10]=m,_[14]=S,_[3]=E,_[7]=T,_[11]=N,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,c=1/Gs.setFromMatrixColumn(n,0).length(),f=1/Gs.setFromMatrixColumn(n,1).length(),d=1/Gs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*c,a[1]=s[1]*c,a[2]=s[2]*c,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,c=n.y,f=n.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(c),v=Math.sin(c),x=Math.cos(f),m=Math.sin(f);if(n.order==="XYZ"){const S=d*x,E=d*m,T=h*x,N=h*m;a[0]=p*x,a[4]=-p*m,a[8]=v,a[1]=E+T*v,a[5]=S-N*v,a[9]=-h*p,a[2]=N-S*v,a[6]=T+E*v,a[10]=d*p}else if(n.order==="YXZ"){const S=p*x,E=p*m,T=v*x,N=v*m;a[0]=S+N*h,a[4]=T*h-E,a[8]=d*v,a[1]=d*m,a[5]=d*x,a[9]=-h,a[2]=E*h-T,a[6]=N+S*h,a[10]=d*p}else if(n.order==="ZXY"){const S=p*x,E=p*m,T=v*x,N=v*m;a[0]=S-N*h,a[4]=-d*m,a[8]=T+E*h,a[1]=E+T*h,a[5]=d*x,a[9]=N-S*h,a[2]=-d*v,a[6]=h,a[10]=d*p}else if(n.order==="ZYX"){const S=d*x,E=d*m,T=h*x,N=h*m;a[0]=p*x,a[4]=T*v-E,a[8]=S*v+N,a[1]=p*m,a[5]=N*v+S,a[9]=E*v-T,a[2]=-v,a[6]=h*p,a[10]=d*p}else if(n.order==="YZX"){const S=d*p,E=d*v,T=h*p,N=h*v;a[0]=p*x,a[4]=N-S*m,a[8]=T*m+E,a[1]=m,a[5]=d*x,a[9]=-h*x,a[2]=-v*x,a[6]=E*m+T,a[10]=S-N*m}else if(n.order==="XZY"){const S=d*p,E=d*v,T=h*p,N=h*v;a[0]=p*x,a[4]=-m,a[8]=v*x,a[1]=S*m+N,a[5]=d*x,a[9]=E*m-T,a[2]=T*m-E,a[6]=h*x,a[10]=N*m+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(pb,n,mb)}lookAt(n,a,s){const c=this.elements;return si.subVectors(n,a),si.lengthSq()===0&&(si.z=1),si.normalize(),nr.crossVectors(s,si),nr.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),nr.crossVectors(s,si)),nr.normalize(),qc.crossVectors(si,nr),c[0]=nr.x,c[4]=qc.x,c[8]=si.x,c[1]=nr.y,c[5]=qc.y,c[9]=si.y,c[2]=nr.z,c[6]=qc.z,c[10]=si.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,d=s[0],h=s[4],p=s[8],v=s[12],x=s[1],m=s[5],S=s[9],E=s[13],T=s[2],N=s[6],M=s[10],_=s[14],O=s[3],I=s[7],U=s[11],W=s[15],j=c[0],P=c[4],G=c[8],D=c[12],C=c[1],F=c[5],ft=c[9],it=c[13],at=c[2],dt=c[6],X=c[10],rt=c[14],Q=c[3],Mt=c[7],Et=c[11],Gt=c[15];return f[0]=d*j+h*C+p*at+v*Q,f[4]=d*P+h*F+p*dt+v*Mt,f[8]=d*G+h*ft+p*X+v*Et,f[12]=d*D+h*it+p*rt+v*Gt,f[1]=x*j+m*C+S*at+E*Q,f[5]=x*P+m*F+S*dt+E*Mt,f[9]=x*G+m*ft+S*X+E*Et,f[13]=x*D+m*it+S*rt+E*Gt,f[2]=T*j+N*C+M*at+_*Q,f[6]=T*P+N*F+M*dt+_*Mt,f[10]=T*G+N*ft+M*X+_*Et,f[14]=T*D+N*it+M*rt+_*Gt,f[3]=O*j+I*C+U*at+W*Q,f[7]=O*P+I*F+U*dt+W*Mt,f[11]=O*G+I*ft+U*X+W*Et,f[15]=O*D+I*it+U*rt+W*Gt,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],c=n[8],f=n[12],d=n[1],h=n[5],p=n[9],v=n[13],x=n[2],m=n[6],S=n[10],E=n[14],T=n[3],N=n[7],M=n[11],_=n[15];return T*(+f*p*m-c*v*m-f*h*S+s*v*S+c*h*E-s*p*E)+N*(+a*p*E-a*v*S+f*d*S-c*d*E+c*v*x-f*p*x)+M*(+a*v*m-a*h*E-f*d*m+s*d*E+f*h*x-s*v*x)+_*(-c*h*x-a*p*m+a*h*S+c*d*m-s*d*S+s*p*x)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const c=this.elements;return n.isVector3?(c[12]=n.x,c[13]=n.y,c[14]=n.z):(c[12]=n,c[13]=a,c[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],v=n[7],x=n[8],m=n[9],S=n[10],E=n[11],T=n[12],N=n[13],M=n[14],_=n[15],O=m*M*v-N*S*v+N*p*E-h*M*E-m*p*_+h*S*_,I=T*S*v-x*M*v-T*p*E+d*M*E+x*p*_-d*S*_,U=x*N*v-T*m*v+T*h*E-d*N*E-x*h*_+d*m*_,W=T*m*p-x*N*p-T*h*S+d*N*S+x*h*M-d*m*M,j=a*O+s*I+c*U+f*W;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/j;return n[0]=O*P,n[1]=(N*S*f-m*M*f-N*c*E+s*M*E+m*c*_-s*S*_)*P,n[2]=(h*M*f-N*p*f+N*c*v-s*M*v-h*c*_+s*p*_)*P,n[3]=(m*p*f-h*S*f-m*c*v+s*S*v+h*c*E-s*p*E)*P,n[4]=I*P,n[5]=(x*M*f-T*S*f+T*c*E-a*M*E-x*c*_+a*S*_)*P,n[6]=(T*p*f-d*M*f-T*c*v+a*M*v+d*c*_-a*p*_)*P,n[7]=(d*S*f-x*p*f+x*c*v-a*S*v-d*c*E+a*p*E)*P,n[8]=U*P,n[9]=(T*m*f-x*N*f-T*s*E+a*N*E+x*s*_-a*m*_)*P,n[10]=(d*N*f-T*h*f+T*s*v-a*N*v-d*s*_+a*h*_)*P,n[11]=(x*h*f-d*m*f-x*s*v+a*m*v+d*s*E-a*h*E)*P,n[12]=W*P,n[13]=(x*N*c-T*m*c+T*s*S-a*N*S-x*s*M+a*m*M)*P,n[14]=(T*h*c-d*N*c-T*s*p+a*N*p+d*s*M-a*h*M)*P,n[15]=(d*m*c-x*h*c+x*s*p-a*m*p-d*s*S+a*h*S)*P,this}scale(n){const a=this.elements,s=n.x,c=n.y,f=n.z;return a[0]*=s,a[4]*=c,a[8]*=f,a[1]*=s,a[5]*=c,a[9]*=f,a[2]*=s,a[6]*=c,a[10]*=f,a[3]*=s,a[7]*=c,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],c=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,c))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),c=Math.sin(a),f=1-s,d=n.x,h=n.y,p=n.z,v=f*d,x=f*h;return this.set(v*d+s,v*h-c*p,v*p+c*h,0,v*h+c*p,x*h+s,x*p-c*d,0,v*p-c*h,x*p+c*d,f*p*p+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,c,f,d){return this.set(1,s,f,0,n,1,d,0,a,c,1,0,0,0,0,1),this}compose(n,a,s){const c=this.elements,f=a._x,d=a._y,h=a._z,p=a._w,v=f+f,x=d+d,m=h+h,S=f*v,E=f*x,T=f*m,N=d*x,M=d*m,_=h*m,O=p*v,I=p*x,U=p*m,W=s.x,j=s.y,P=s.z;return c[0]=(1-(N+_))*W,c[1]=(E+U)*W,c[2]=(T-I)*W,c[3]=0,c[4]=(E-U)*j,c[5]=(1-(S+_))*j,c[6]=(M+O)*j,c[7]=0,c[8]=(T+I)*P,c[9]=(M-O)*P,c[10]=(1-(S+N))*P,c[11]=0,c[12]=n.x,c[13]=n.y,c[14]=n.z,c[15]=1,this}decompose(n,a,s){const c=this.elements;let f=Gs.set(c[0],c[1],c[2]).length();const d=Gs.set(c[4],c[5],c[6]).length(),h=Gs.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),n.x=c[12],n.y=c[13],n.z=c[14],Ri.copy(this);const v=1/f,x=1/d,m=1/h;return Ri.elements[0]*=v,Ri.elements[1]*=v,Ri.elements[2]*=v,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=m,Ri.elements[9]*=m,Ri.elements[10]*=m,a.setFromRotationMatrix(Ri),s.x=f,s.y=d,s.z=h,this}makePerspective(n,a,s,c,f,d,h=_a){const p=this.elements,v=2*f/(a-n),x=2*f/(s-c),m=(a+n)/(a-n),S=(s+c)/(s-c);let E,T;if(h===_a)E=-(d+f)/(d-f),T=-2*d*f/(d-f);else if(h===vu)E=-d/(d-f),T=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(n,a,s,c,f,d,h=_a){const p=this.elements,v=1/(a-n),x=1/(s-c),m=1/(d-f),S=(a+n)*v,E=(s+c)*x;let T,N;if(h===_a)T=(d+f)*m,N=-2*m;else if(h===vu)T=f*m,N=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*v,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=N,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<16;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Gs=new ut,Ri=new nn,pb=new ut(0,0,0),mb=new ut(1,1,1),nr=new ut,qc=new ut,si=new ut,ux=new nn,fx=new hl;class Ea{constructor(n=0,a=0,s=0,c=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=c}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,c=this._order){return this._x=n,this._y=a,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const c=n.elements,f=c[0],d=c[4],h=c[8],p=c[1],v=c[5],x=c[9],m=c[2],S=c[6],E=c[10];switch(a){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(S,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,v)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-m,E),this._z=Math.atan2(-d,v)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,v));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,v),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,v),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return ux.makeRotationFromQuaternion(n),this.setFromRotationMatrix(ux,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return fx.setFromEuler(this),this.setFromQuaternion(fx,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let gb=0;const dx=new ut,Vs=new hl,ha=new nn,Yc=new ut,sl=new ut,vb=new ut,xb=new hl,hx=new ut(1,0,0),px=new ut(0,1,0),mx=new ut(0,0,1),gx={type:"added"},_b={type:"removed"},js={type:"childadded",child:null},hh={type:"childremoved",child:null};class Qn extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const n=new ut,a=new Ea,s=new hl,c=new ut(1,1,1);function f(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new nn},normalMatrix:{value:new fe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Vs.setFromAxisAngle(n,a),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(n,a){return Vs.setFromAxisAngle(n,a),this.quaternion.premultiply(Vs),this}rotateX(n){return this.rotateOnAxis(hx,n)}rotateY(n){return this.rotateOnAxis(px,n)}rotateZ(n){return this.rotateOnAxis(mx,n)}translateOnAxis(n,a){return dx.copy(n).applyQuaternion(this.quaternion),this.position.add(dx.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(hx,n)}translateY(n){return this.translateOnAxis(px,n)}translateZ(n){return this.translateOnAxis(mx,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Yc.copy(n):Yc.set(n,a,s);const c=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(sl,Yc,this.up):ha.lookAt(Yc,sl,this.up),this.quaternion.setFromRotationMatrix(ha),c&&(ha.extractRotation(c.matrixWorld),Vs.setFromRotationMatrix(ha),this.quaternion.premultiply(Vs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(gx),js.child=n,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(_b),hh.child=n,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),ha.multiply(n.parent.matrixWorld)),n.applyMatrix4(ha),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(gx),js.child=n,this.dispatchEvent(js),js.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(n,a);if(d!==void 0)return d}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,n,vb),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,xb,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(n)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(n.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let v=0,x=p.length;v<x;v++){const m=p[v];f(n.shapes,m)}else f(n.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,v=this.material.length;p<v;p++)h.push(f(n.materials,this.material[p]));c.material=h}else c.material=f(n.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(n).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];c.animations.push(f(n.animations,p))}}if(a){const h=d(n.geometries),p=d(n.materials),v=d(n.textures),x=d(n.images),m=d(n.shapes),S=d(n.skeletons),E=d(n.animations),T=d(n.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),v.length>0&&(s.textures=v),x.length>0&&(s.images=x),m.length>0&&(s.shapes=m),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=c,s;function d(h){const p=[];for(const v in h){const x=h[v];delete x.metadata,p.push(x)}return p}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const c=n.children[s];this.add(c.clone())}return this}}Qn.DEFAULT_UP=new ut(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new ut,pa=new ut,ph=new ut,ma=new ut,ks=new ut,Xs=new ut,vx=new ut,mh=new ut,gh=new ut,vh=new ut,xh=new rn,_h=new rn,yh=new rn;class Ni{constructor(n=new ut,a=new ut,s=new ut){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,c){c.subVectors(s,a),Ci.subVectors(n,a),c.cross(Ci);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(n,a,s,c,f){Ci.subVectors(c,a),pa.subVectors(s,a),ph.subVectors(n,a);const d=Ci.dot(Ci),h=Ci.dot(pa),p=Ci.dot(ph),v=pa.dot(pa),x=pa.dot(ph),m=d*v-h*h;if(m===0)return f.set(0,0,0),null;const S=1/m,E=(v*p-h*x)*S,T=(d*x-h*p)*S;return f.set(1-E-T,T,E)}static containsPoint(n,a,s,c){return this.getBarycoord(n,a,s,c,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(n,a,s,c,f,d,h,p){return this.getBarycoord(n,a,s,c,ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,ma.x),p.addScaledVector(d,ma.y),p.addScaledVector(h,ma.z),p)}static getInterpolatedAttribute(n,a,s,c,f,d){return xh.setScalar(0),_h.setScalar(0),yh.setScalar(0),xh.fromBufferAttribute(n,a),_h.fromBufferAttribute(n,s),yh.fromBufferAttribute(n,c),d.setScalar(0),d.addScaledVector(xh,f.x),d.addScaledVector(_h,f.y),d.addScaledVector(yh,f.z),d}static isFrontFacing(n,a,s,c){return Ci.subVectors(s,a),pa.subVectors(n,a),Ci.cross(pa).dot(c)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,c){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[c]),this}setFromAttributeAndIndices(n,a,s,c){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,c),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ni.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ni.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,c,f){return Ni.getInterpolation(n,this.a,this.b,this.c,a,s,c,f)}containsPoint(n){return Ni.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ni.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,c=this.b,f=this.c;let d,h;ks.subVectors(c,s),Xs.subVectors(f,s),mh.subVectors(n,s);const p=ks.dot(mh),v=Xs.dot(mh);if(p<=0&&v<=0)return a.copy(s);gh.subVectors(n,c);const x=ks.dot(gh),m=Xs.dot(gh);if(x>=0&&m<=x)return a.copy(c);const S=p*m-x*v;if(S<=0&&p>=0&&x<=0)return d=p/(p-x),a.copy(s).addScaledVector(ks,d);vh.subVectors(n,f);const E=ks.dot(vh),T=Xs.dot(vh);if(T>=0&&E<=T)return a.copy(f);const N=E*v-p*T;if(N<=0&&v>=0&&T<=0)return h=v/(v-T),a.copy(s).addScaledVector(Xs,h);const M=x*T-E*m;if(M<=0&&m-x>=0&&E-T>=0)return vx.subVectors(f,c),h=(m-x)/(m-x+(E-T)),a.copy(c).addScaledVector(vx,h);const _=1/(M+N+S);return d=N*_,h=S*_,a.copy(s).addScaledVector(ks,d).addScaledVector(Xs,h)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function Sh(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class Le{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const c=n;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=xi){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Ne.toWorkingColorSpace(this,a),this}setRGB(n,a,s,c=Ne.workingColorSpace){return this.r=n,this.g=a,this.b=s,Ne.toWorkingColorSpace(this,c),this}setHSL(n,a,s,c=Ne.workingColorSpace){if(n=nb(n,1),a=Ae(a,0,1),s=Ae(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,d=2*s-f;this.r=Sh(d,f,n+1/3),this.g=Sh(d,f,n),this.b=Sh(d,f,n-1/3)}return Ne.toWorkingColorSpace(this,c),this}setStyle(n,a=xi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=xi){const s=__[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Sa(n.r),this.g=Sa(n.g),this.b=Sa(n.b),this}copyLinearToSRGB(n){return this.r=$s(n.r),this.g=$s(n.g),this.b=$s(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=xi){return Ne.fromWorkingColorSpace(In.copy(this),n),Math.round(Ae(In.r*255,0,255))*65536+Math.round(Ae(In.g*255,0,255))*256+Math.round(Ae(In.b*255,0,255))}getHexString(n=xi){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=Ne.workingColorSpace){Ne.fromWorkingColorSpace(In.copy(this),a);const s=In.r,c=In.g,f=In.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let p,v;const x=(h+d)/2;if(h===d)p=0,v=0;else{const m=d-h;switch(v=x<=.5?m/(d+h):m/(2-d-h),d){case s:p=(c-f)/m+(c<f?6:0);break;case c:p=(f-s)/m+2;break;case f:p=(s-c)/m+4;break}p/=6}return n.h=p,n.s=v,n.l=x,n}getRGB(n,a=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(In.copy(this),a),n.r=In.r,n.g=In.g,n.b=In.b,n}getStyle(n=xi){Ne.fromWorkingColorSpace(In.copy(this),n);const a=In.r,s=In.g,c=In.b;return n!==xi?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(n,a,s){return this.getHSL(ir),this.setHSL(ir.h+n,ir.s+a,ir.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(ir),n.getHSL(Wc);const s=ah(ir.h,Wc.h,a),c=ah(ir.s,Wc.s,a),f=ah(ir.l,Wc.l,a);return this.setHSL(s,c,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,c=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*c,this.g=f[1]*a+f[4]*s+f[7]*c,this.b=f[2]*a+f[5]*s+f[8]*c,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Le;Le.NAMES=__;let yb=0;class ml extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Qs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Ph,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ix,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(s.blending=this.blending),this.side!==cr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ph&&(s.blendDst=this.blendDst),this.blendEquation!==Vr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ix&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(a){const f=c(n.textures),d=c(n.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const c=a.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class y_ extends ml{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=a_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const dn=new ut,Zc=new He;let Sb=0;class yi{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sb++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=ax,this.updateRanges=[],this.gpuType=xa,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[n+c]=a.array[s+c];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Zc.fromBufferAttribute(this,a),Zc.applyMatrix3(n),this.setXY(a,Zc.x,Zc.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix3(n),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix4(n),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyNormalMatrix(n),this.setXYZ(a,dn.x,dn.y,dn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.transformDirection(n),this.setXYZ(a,dn.x,dn.y,dn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=il(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Zn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=il(a,this.array)),a}setX(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=il(a,this.array)),a}setY(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=il(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=il(a,this.array)),a}setW(n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,c){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array),c=Zn(c,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this}setXYZW(n,a,s,c,f){return n*=this.itemSize,this.normalized&&(a=Zn(a,this.array),s=Zn(s,this.array),c=Zn(c,this.array),f=Zn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==ax&&(n.usage=this.usage),n}}class S_ extends yi{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class M_ extends yi{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class Yr extends yi{constructor(n,a,s){super(new Float32Array(n),a,s)}}let Mb=0;const vi=new nn,Mh=new Qn,qs=new ut,oi=new pl,ol=new pl,En=new ut;class ba extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(v_(n)?M_:S_)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new fe().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(n),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return vi.makeRotationFromQuaternion(n),this.applyMatrix4(vi),this}rotateX(n){return vi.makeRotationX(n),this.applyMatrix4(vi),this}rotateY(n){return vi.makeRotationY(n),this.applyMatrix4(vi),this}rotateZ(n){return vi.makeRotationZ(n),this.applyMatrix4(vi),this}translate(n,a,s){return vi.makeTranslation(n,a,s),this.applyMatrix4(vi),this}scale(n,a,s){return vi.makeScale(n,a,s),this.applyMatrix4(vi),this}lookAt(n){return Mh.lookAt(n),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let c=0,f=n.length;c<f;c++){const d=n[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Yr(s,3))}else{const s=Math.min(n.length,a.count);for(let c=0;c<s;c++){const f=n[c];a.setXYZ(c,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,c=a.length;s<c;s++){const f=a[s];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yu);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(n){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(n),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];ol.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(oi.min,ol.min),oi.expandByPoint(En),En.addVectors(oi.max,ol.max),oi.expandByPoint(En)):(oi.expandByPoint(ol.min),oi.expandByPoint(ol.max))}oi.getCenter(s);let c=0;for(let f=0,d=n.count;f<d;f++)En.fromBufferAttribute(n,f),c=Math.max(c,s.distanceToSquared(En));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],p=this.morphTargetsRelative;for(let v=0,x=h.count;v<x;v++)En.fromBufferAttribute(h,v),p&&(qs.fromBufferAttribute(n,v),En.add(qs)),c=Math.max(c,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,c=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let G=0;G<s.count;G++)h[G]=new ut,p[G]=new ut;const v=new ut,x=new ut,m=new ut,S=new He,E=new He,T=new He,N=new ut,M=new ut;function _(G,D,C){v.fromBufferAttribute(s,G),x.fromBufferAttribute(s,D),m.fromBufferAttribute(s,C),S.fromBufferAttribute(f,G),E.fromBufferAttribute(f,D),T.fromBufferAttribute(f,C),x.sub(v),m.sub(v),E.sub(S),T.sub(S);const F=1/(E.x*T.y-T.x*E.y);isFinite(F)&&(N.copy(x).multiplyScalar(T.y).addScaledVector(m,-E.y).multiplyScalar(F),M.copy(m).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(F),h[G].add(N),h[D].add(N),h[C].add(N),p[G].add(M),p[D].add(M),p[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:n.count}]);for(let G=0,D=O.length;G<D;++G){const C=O[G],F=C.start,ft=C.count;for(let it=F,at=F+ft;it<at;it+=3)_(n.getX(it+0),n.getX(it+1),n.getX(it+2))}const I=new ut,U=new ut,W=new ut,j=new ut;function P(G){W.fromBufferAttribute(c,G),j.copy(W);const D=h[G];I.copy(D),I.sub(W.multiplyScalar(W.dot(D))).normalize(),U.crossVectors(j,D);const F=U.dot(p[G])<0?-1:1;d.setXYZW(G,I.x,I.y,I.z,F)}for(let G=0,D=O.length;G<D;++G){const C=O[G],F=C.start,ft=C.count;for(let it=F,at=F+ft;it<at;it+=3)P(n.getX(it+0)),P(n.getX(it+1)),P(n.getX(it+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const c=new ut,f=new ut,d=new ut,h=new ut,p=new ut,v=new ut,x=new ut,m=new ut;if(n)for(let S=0,E=n.count;S<E;S+=3){const T=n.getX(S+0),N=n.getX(S+1),M=n.getX(S+2);c.fromBufferAttribute(a,T),f.fromBufferAttribute(a,N),d.fromBufferAttribute(a,M),x.subVectors(d,f),m.subVectors(c,f),x.cross(m),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,N),v.fromBufferAttribute(s,M),h.add(x),p.add(x),v.add(x),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(N,p.x,p.y,p.z),s.setXYZ(M,v.x,v.y,v.z)}else for(let S=0,E=a.count;S<E;S+=3)c.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),d.fromBufferAttribute(a,S+2),x.subVectors(d,f),m.subVectors(c,f),x.cross(m),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)En.fromBufferAttribute(n,a),En.normalize(),n.setXYZ(a,En.x,En.y,En.z)}toNonIndexed(){function n(h,p){const v=h.array,x=h.itemSize,m=h.normalized,S=new v.constructor(p.length*x);let E=0,T=0;for(let N=0,M=p.length;N<M;N++){h.isInterleavedBufferAttribute?E=p[N]*h.data.stride+h.offset:E=p[N]*x;for(let _=0;_<x;_++)S[T++]=v[E++]}return new yi(S,x,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new ba,s=this.index.array,c=this.attributes;for(const h in c){const p=c[h],v=n(p,s);a.setAttribute(h,v)}const f=this.morphAttributes;for(const h in f){const p=[],v=f[h];for(let x=0,m=v.length;x<m;x++){const S=v[x],E=n(S,s);p.push(E)}a.morphAttributes[h]=p}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const v=d[h];a.addGroup(v.start,v.count,v.materialIndex)}return a}toJSON(){const n={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const v in p)p[v]!==void 0&&(n[v]=p[v]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const p in s){const v=s[p];n.data.attributes[p]=v.toJSON(n.data)}const c={};let f=!1;for(const p in this.morphAttributes){const v=this.morphAttributes[p],x=[];for(let m=0,S=v.length;m<S;m++){const E=v[m];x.push(E.toJSON(n.data))}x.length>0&&(c[p]=x,f=!0)}f&&(n.data.morphAttributes=c,n.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(n.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(n.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone(a));const c=n.attributes;for(const v in c){const x=c[v];this.setAttribute(v,x.clone(a))}const f=n.morphAttributes;for(const v in f){const x=[],m=f[v];for(let S=0,E=m.length;S<E;S++)x.push(m[S].clone(a));this.morphAttributes[v]=x}this.morphTargetsRelative=n.morphTargetsRelative;const d=n.groups;for(let v=0,x=d.length;v<x;v++){const m=d[v];this.addGroup(m.start,m.count,m.materialIndex)}const h=n.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=n.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xx=new nn,Pr=new Lp,Kc=new yu,_x=new ut,Qc=new ut,Jc=new ut,$c=new ut,Eh=new ut,tu=new ut,yx=new ut,eu=new ut;class ya extends Qn{constructor(n=new ba,a=new y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(n,a){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(c,n);const h=this.morphTargetInfluences;if(f&&h){tu.set(0,0,0);for(let p=0,v=f.length;p<v;p++){const x=h[p],m=f[p];x!==0&&(Eh.fromBufferAttribute(m,n),d?tu.addScaledVector(Eh,x):tu.addScaledVector(Eh.sub(a),x))}a.add(tu)}return a}raycast(n,a){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Kc.copy(s.boundingSphere),Kc.applyMatrix4(f),Pr.copy(n.ray).recast(n.near),!(Kc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Kc,_x)===null||Pr.origin.distanceToSquared(_x)>(n.far-n.near)**2))&&(xx.copy(f).invert(),Pr.copy(n.ray).applyMatrix4(xx),!(s.boundingBox!==null&&Pr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,Pr)))}_computeIntersections(n,a,s){let c;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,v=f.attributes.uv,x=f.attributes.uv1,m=f.attributes.normal,S=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,N=S.length;T<N;T++){const M=S[T],_=d[M.materialIndex],O=Math.max(M.start,E.start),I=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let U=O,W=I;U<W;U+=3){const j=h.getX(U),P=h.getX(U+1),G=h.getX(U+2);c=nu(this,_,n,s,v,x,m,j,P,G),c&&(c.faceIndex=Math.floor(U/3),c.face.materialIndex=M.materialIndex,a.push(c))}}else{const T=Math.max(0,E.start),N=Math.min(h.count,E.start+E.count);for(let M=T,_=N;M<_;M+=3){const O=h.getX(M),I=h.getX(M+1),U=h.getX(M+2);c=nu(this,d,n,s,v,x,m,O,I,U),c&&(c.faceIndex=Math.floor(M/3),a.push(c))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,N=S.length;T<N;T++){const M=S[T],_=d[M.materialIndex],O=Math.max(M.start,E.start),I=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let U=O,W=I;U<W;U+=3){const j=U,P=U+1,G=U+2;c=nu(this,_,n,s,v,x,m,j,P,G),c&&(c.faceIndex=Math.floor(U/3),c.face.materialIndex=M.materialIndex,a.push(c))}}else{const T=Math.max(0,E.start),N=Math.min(p.count,E.start+E.count);for(let M=T,_=N;M<_;M+=3){const O=M,I=M+1,U=M+2;c=nu(this,d,n,s,v,x,m,O,I,U),c&&(c.faceIndex=Math.floor(M/3),a.push(c))}}}}function Eb(o,n,a,s,c,f,d,h){let p;if(n.side===Kn?p=s.intersectTriangle(d,f,c,!0,h):p=s.intersectTriangle(c,f,d,n.side===cr,h),p===null)return null;eu.copy(h),eu.applyMatrix4(o.matrixWorld);const v=a.ray.origin.distanceTo(eu);return v<a.near||v>a.far?null:{distance:v,point:eu.clone(),object:o}}function nu(o,n,a,s,c,f,d,h,p,v){o.getVertexPosition(h,Qc),o.getVertexPosition(p,Jc),o.getVertexPosition(v,$c);const x=Eb(o,n,a,s,Qc,Jc,$c,yx);if(x){const m=new ut;Ni.getBarycoord(yx,Qc,Jc,$c,m),c&&(x.uv=Ni.getInterpolatedAttribute(c,h,p,v,m,new He)),f&&(x.uv1=Ni.getInterpolatedAttribute(f,h,p,v,m,new He)),d&&(x.normal=Ni.getInterpolatedAttribute(d,h,p,v,m,new ut),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:p,c:v,normal:new ut,materialIndex:0};Ni.getNormal(Qc,Jc,$c,S.normal),x.face=S,x.barycoord=m}return x}class gl extends ba{constructor(n=1,a=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const p=[],v=[],x=[],m=[];let S=0,E=0;T("z","y","x",-1,-1,s,a,n,d,f,0),T("z","y","x",1,-1,s,a,-n,d,f,1),T("x","z","y",1,1,n,s,a,c,d,2),T("x","z","y",1,-1,n,s,-a,c,d,3),T("x","y","z",1,-1,n,a,s,c,f,4),T("x","y","z",-1,-1,n,a,-s,c,f,5),this.setIndex(p),this.setAttribute("position",new Yr(v,3)),this.setAttribute("normal",new Yr(x,3)),this.setAttribute("uv",new Yr(m,2));function T(N,M,_,O,I,U,W,j,P,G,D){const C=U/P,F=W/G,ft=U/2,it=W/2,at=j/2,dt=P+1,X=G+1;let rt=0,Q=0;const Mt=new ut;for(let Et=0;Et<X;Et++){const Gt=Et*F-it;for(let ee=0;ee<dt;ee++){const Ht=ee*C-ft;Mt[N]=Ht*O,Mt[M]=Gt*I,Mt[_]=at,v.push(Mt.x,Mt.y,Mt.z),Mt[N]=0,Mt[M]=0,Mt[_]=j>0?1:-1,x.push(Mt.x,Mt.y,Mt.z),m.push(ee/P),m.push(1-Et/G),rt+=1}}for(let Et=0;Et<G;Et++)for(let Gt=0;Gt<P;Gt++){const ee=S+Gt+dt*Et,Ht=S+Gt+dt*(Et+1),w=S+(Gt+1)+dt*(Et+1),V=S+(Gt+1)+dt*Et;p.push(ee,Ht,V),p.push(Ht,w,V),Q+=6}h.addGroup(E,Q,D),E+=Q,S+=rt}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new gl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function so(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const c=o[a][s];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=c.clone():Array.isArray(c)?n[a][s]=c.slice():n[a][s]=c}}return n}function Vn(o){const n={};for(let a=0;a<o.length;a++){const s=so(o[a]);for(const c in s)n[c]=s[c]}return n}function bb(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function E_(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:Ne.workingColorSpace}const Tb={clone:so,merge:Vn};var Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends ml{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=wb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=so(n.uniforms),this.uniformsGroups=bb(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?a.uniforms[c]={type:"t",value:d.toJSON(n).uuid}:d&&d.isColor?a.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[c]={type:"m4",value:d.toArray()}:a.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class b_ extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=_a}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ut,Sx=new He,Mx=new He;class _i extends b_{constructor(n=50,a=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=yp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return yp*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ar.x,ar.y).multiplyScalar(-n/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ar.x,ar.y).multiplyScalar(-n/ar.z)}getViewSize(n,a){return this.getViewBounds(n,Sx,Mx),a.subVectors(Mx,Sx)}setViewOffset(n,a,s,c,f,d){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(ih*.5*this.fov)/this.zoom,s=2*a,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,v=d.fullHeight;f+=d.offsetX*c/p,a-=d.offsetY*s/v,c*=d.width/p,s*=d.height/v}const h=this.filmOffset;h!==0&&(f+=n*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,a,a-s,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Ys=-90,Ws=1;class Rb extends Qn{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new _i(Ys,Ws,n,a);c.layers=this.layers,this.add(c);const f=new _i(Ys,Ws,n,a);f.layers=this.layers,this.add(f);const d=new _i(Ys,Ws,n,a);d.layers=this.layers,this.add(d);const h=new _i(Ys,Ws,n,a);h.layers=this.layers,this.add(h);const p=new _i(Ys,Ws,n,a);p.layers=this.layers,this.add(p);const v=new _i(Ys,Ws,n,a);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,c,f,d,h,p]=a;for(const v of a)this.remove(v);if(n===_a)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(n===vu)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const v of a)this.add(v),v.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,v,x]=this.children,m=n.getRenderTarget(),S=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),T=n.xr.enabled;n.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,c),n.render(a,f),n.setRenderTarget(s,1,c),n.render(a,d),n.setRenderTarget(s,2,c),n.render(a,h),n.setRenderTarget(s,3,c),n.render(a,p),n.setRenderTarget(s,4,c),n.render(a,v),s.texture.generateMipmaps=N,n.setRenderTarget(s,5,c),n.render(a,x),n.setRenderTarget(m,S,E),n.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class T_ extends jn{constructor(n,a,s,c,f,d,h,p,v,x){n=n!==void 0?n:[],a=a!==void 0?a:eo,super(n,a,s,c,f,d,h,p,v,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class Cb extends Zr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},c=[s,s,s,s,s,s];this.texture=new T_(c,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:qi}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new gl(5,5,5),f=new ur({name:"CubemapFromEquirect",uniforms:so(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:or});f.uniforms.tEquirect.value=a;const d=new ya(c,f),h=a.minFilter;return a.minFilter===qr&&(a.minFilter=qi),new Rb(1,10,this).update(n,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(n,a,s,c){const f=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(a,s,c);n.setRenderTarget(f)}}class iu extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nb={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let c=null,f=null,d=null;const h=this._targetRay,p=this._grip,v=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(v&&n.hand){d=!0;for(const N of n.hand.values()){const M=a.getJointPose(N,s),_=this._getHandJoint(v,N);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=v.joints["index-finger-tip"],m=v.joints["thumb-tip"],S=x.position.distanceTo(m.position),E=.02,T=.005;v.inputState.pinching&&S>E+T?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!v.inputState.pinching&&S<=E-T&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else p!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(c=a.getPose(n.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Nb)))}return h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),v!==null&&(v.visible=d!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new iu;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class zp{constructor(n,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(n),this.density=a}clone(){return new zp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Db extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const Th=new ut,Ub=new ut,Lb=new fe;class rr{constructor(n=new ut(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,c){return this.normal.set(n,a,s),this.constant=c,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const c=Th.subVectors(s,a).cross(Ub.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(c,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Th),c=this.normal.dot(s);if(c===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||Lb.getNormalMatrix(n),c=this.coplanarPoint(Th).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new yu,au=new ut;class A_{constructor(n=new rr,a=new rr,s=new rr,c=new rr,f=new rr,d=new rr){this.planes=[n,a,s,c,f,d]}set(n,a,s,c,f,d){const h=this.planes;return h[0].copy(n),h[1].copy(a),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=_a){const s=this.planes,c=n.elements,f=c[0],d=c[1],h=c[2],p=c[3],v=c[4],x=c[5],m=c[6],S=c[7],E=c[8],T=c[9],N=c[10],M=c[11],_=c[12],O=c[13],I=c[14],U=c[15];if(s[0].setComponents(p-f,S-v,M-E,U-_).normalize(),s[1].setComponents(p+f,S+v,M+E,U+_).normalize(),s[2].setComponents(p+d,S+x,M+T,U+O).normalize(),s[3].setComponents(p-d,S-x,M-T,U-O).normalize(),s[4].setComponents(p-h,S-m,M-N,U-I).normalize(),a===_a)s[5].setComponents(p+h,S+m,M+N,U+I).normalize();else if(a===vu)s[5].setComponents(h,m,N,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Ir.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(n){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(n.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(n){const a=this.planes,s=n.center,c=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const c=a[s];if(au.x=c.normal.x>0?n.max.x:n.min.x,au.y=c.normal.y>0?n.max.y:n.min.y,au.z=c.normal.z>0?n.max.z:n.min.z,c.distanceToPoint(au)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class w_ extends ml{constructor(n){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const Ex=new nn,Sp=new Lp,ru=new yu,su=new ut;class Ob extends Qn{constructor(n=new ba,a=new w_){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}raycast(n,a){const s=this.geometry,c=this.matrixWorld,f=n.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ru.copy(s.boundingSphere),ru.applyMatrix4(c),ru.radius+=f,n.ray.intersectsSphere(ru)===!1)return;Ex.copy(c).invert(),Sp.copy(n.ray).applyMatrix4(Ex);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,v=s.index,m=s.attributes.position;if(v!==null){const S=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let T=S,N=E;T<N;T++){const M=v.getX(T);su.fromBufferAttribute(m,M),bx(su,M,p,c,n,a,this)}}else{const S=Math.max(0,d.start),E=Math.min(m.count,d.start+d.count);for(let T=S,N=E;T<N;T++)su.fromBufferAttribute(m,T),bx(su,T,p,c,n,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function bx(o,n,a,s,c,f,d){const h=Sp.distanceSqToPoint(o);if(h<a){const p=new ut;Sp.closestPointToPoint(o,p),p.applyMatrix4(s);const v=c.ray.origin.distanceTo(p);if(v<c.near||v>c.far)return;f.push({distance:v,distanceToRay:Math.sqrt(h),point:p,index:n,face:null,faceIndex:null,barycoord:null,object:d})}}class zb extends jn{constructor(n,a,s,c,f,d,h,p,v){super(n,a,s,c,f,d,h,p,v),this.isCanvasTexture=!0,this.needsUpdate=!0}}class R_ extends jn{constructor(n,a,s,c,f,d,h,p,v,x=Js){if(x!==Js&&x!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&x===Js&&(s=Wr),s===void 0&&x===ao&&(s=io),super(null,c,f,d,h,p,x,s,v),this.isDepthTexture=!0,this.image={width:n,height:a},this.magFilter=h!==void 0?h:Ui,this.minFilter=p!==void 0?p:Ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Up(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Su extends ba{constructor(n=1,a=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:c};const f=n/2,d=a/2,h=Math.floor(s),p=Math.floor(c),v=h+1,x=p+1,m=n/h,S=a/p,E=[],T=[],N=[],M=[];for(let _=0;_<x;_++){const O=_*S-d;for(let I=0;I<v;I++){const U=I*m-f;T.push(U,-O,0),N.push(0,0,1),M.push(I/h),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<h;O++){const I=O+v*_,U=O+v*(_+1),W=O+1+v*(_+1),j=O+1+v*_;E.push(I,U,j),E.push(U,W,j)}this.setIndex(E),this.setAttribute("position",new Yr(T,3)),this.setAttribute("normal",new Yr(N,3)),this.setAttribute("uv",new Yr(M,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Su(n.width,n.height,n.widthSegments,n.heightSegments)}}class Pb extends ml{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class Ib extends ml{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class Bb extends b_{constructor(n=-1,a=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-n,d=s+n,h=c+a,p=c-a;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,d=f+v*this.view.width,h-=x*this.view.offsetY,p=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class Fb extends _i{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n,this.index=0}}class Hb{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=Tx();n=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=n}return n}}function Tx(){return performance.now()}const Ax=new nn;class Gb{constructor(n,a,s=0,c=1/0){this.ray=new Lp(n,a),this.near=s,this.far=c,this.camera=null,this.layers=new Op,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(n,a){this.ray.set(n,a)}setFromCamera(n,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(a.near+a.far)/(a.near-a.far)).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):console.error("THREE.Raycaster: Unsupported camera type: "+a.type)}setFromXRController(n){return Ax.identity().extractRotation(n.matrixWorld),this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ax),this}intersectObject(n,a=!0,s=[]){return Mp(n,this,s,a),s.sort(wx),s}intersectObjects(n,a=!0,s=[]){for(let c=0,f=n.length;c<f;c++)Mp(n[c],this,s,a);return s.sort(wx),s}}function wx(o,n){return o.distance-n.distance}function Mp(o,n,a,s){let c=!0;if(o.layers.test(n.layers)&&o.raycast(n,a)===!1&&(c=!1),c===!0&&s===!0){const f=o.children;for(let d=0,h=f.length;d<h;d++)Mp(f[d],n,a,!0)}}function Rx(o,n,a,s){const c=Vb(s);switch(a){case c_:return o*n;case f_:return o*n;case d_:return o*n*2;case h_:return o*n/c.components*c.byteLength;case Cp:return o*n/c.components*c.byteLength;case p_:return o*n*2/c.components*c.byteLength;case Np:return o*n*2/c.components*c.byteLength;case u_:return o*n*3/c.components*c.byteLength;case Di:return o*n*4/c.components*c.byteLength;case Dp:return o*n*4/c.components*c.byteLength;case uu:case fu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case du:case hu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Zh:case Qh:return Math.max(o,16)*Math.max(n,8)/4;case Wh:case Kh:return Math.max(o,8)*Math.max(n,8)/2;case Jh:case $h:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case tp:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case ep:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case np:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case ip:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case ap:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case rp:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case sp:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case op:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case lp:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case cp:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case up:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case fp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case dp:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case hp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case pp:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case pu:case mp:case gp:return Math.ceil(o/4)*Math.ceil(n/4)*16;case m_:case vp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case xp:case _p:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function Vb(o){switch(o){case Ma:case s_:return{byteLength:1,components:1};case cl:case o_:case fl:return{byteLength:2,components:1};case wp:case Rp:return{byteLength:2,components:4};case Wr:case Ap:case xa:return{byteLength:4,components:1};case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C_(){let o=null,n=!1,a=null,s=null;function c(f,d){a(f,d),s=o.requestAnimationFrame(c)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(c),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function jb(o){const n=new WeakMap;function a(h,p){const v=h.array,x=h.usage,m=v.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,v,x),h.onUploadCallback();let E;if(v instanceof Float32Array)E=o.FLOAT;else if(v instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)E=o.SHORT;else if(v instanceof Uint32Array)E=o.UNSIGNED_INT;else if(v instanceof Int32Array)E=o.INT;else if(v instanceof Int8Array)E=o.BYTE;else if(v instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:S,type:E,bytesPerElement:v.BYTES_PER_ELEMENT,version:h.version,size:m}}function s(h,p,v){const x=p.array,m=p.updateRanges;if(o.bindBuffer(v,h),m.length===0)o.bufferSubData(v,0,x);else{m.sort((E,T)=>E.start-T.start);let S=0;for(let E=1;E<m.length;E++){const T=m[S],N=m[E];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++S,m[S]=N)}m.length=S+1;for(let E=0,T=m.length;E<T;E++){const N=m[E];o.bufferSubData(v,N.start*x.BYTES_PER_ELEMENT,x,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(o.deleteBuffer(p.buffer),n.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=n.get(h);(!x||x.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const v=n.get(h);if(v===void 0)n.set(h,a(h,p));else if(v.version<h.version){if(v.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,h,p),v.version=h.version}}return{get:c,remove:f,update:d}}var kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xb=`#ifdef USE_ALPHAHASH
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
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
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
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jb=`#ifdef USE_BATCHING
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
#endif`,$b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iT=`#ifdef USE_IRIDESCENCE
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
#endif`,aT=`#ifdef USE_BUMPMAP
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hT=`#define PI 3.141592653589793
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
} // validated`,pT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mT=`vec3 transformedNormal = objectNormal;
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
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ST=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bT=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DT=`#ifdef USE_GRADIENTMAP
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
}`,UT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zT=`uniform bool receiveShadow;
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
#endif`,PT=`#ifdef USE_ENVMAP
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
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
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
#endif`,VT=`struct PhysicalMaterial {
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
}`,jT=`
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
#endif`,kT=`#if defined( RE_IndirectDiffuse )
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$T=`#if defined( USE_POINTS_UV )
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
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
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
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R1=`float getShadowMask() {
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
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,D1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
}`,Q1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`uniform float scale;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 diffuse;
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
}`,rA=`#define LAMBERT
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
}`,sA=`#define LAMBERT
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
}`,oA=`#define MATCAP
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
}`,lA=`#define MATCAP
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
}`,cA=`#define NORMAL
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
}`,uA=`#define NORMAL
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
}`,fA=`#define PHONG
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
}`,dA=`#define PHONG
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
}`,hA=`#define STANDARD
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
}`,pA=`#define STANDARD
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
}`,mA=`#define TOON
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
}`,gA=`#define TOON
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
}`,vA=`uniform float size;
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
}`,xA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,yA=`uniform vec3 color;
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
}`,SA=`uniform float rotation;
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
}`,MA=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:kb,alphahash_pars_fragment:Xb,alphamap_fragment:qb,alphamap_pars_fragment:Yb,alphatest_fragment:Wb,alphatest_pars_fragment:Zb,aomap_fragment:Kb,aomap_pars_fragment:Qb,batching_pars_vertex:Jb,batching_vertex:$b,begin_vertex:tT,beginnormal_vertex:eT,bsdfs:nT,iridescence_fragment:iT,bumpmap_pars_fragment:aT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:sT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:lT,color_fragment:cT,color_pars_fragment:uT,color_pars_vertex:fT,color_vertex:dT,common:hT,cube_uv_reflection_fragment:pT,defaultnormal_vertex:mT,displacementmap_pars_vertex:gT,displacementmap_vertex:vT,emissivemap_fragment:xT,emissivemap_pars_fragment:_T,colorspace_fragment:yT,colorspace_pars_fragment:ST,envmap_fragment:MT,envmap_common_pars_fragment:ET,envmap_pars_fragment:bT,envmap_pars_vertex:TT,envmap_physical_pars_fragment:PT,envmap_vertex:AT,fog_vertex:wT,fog_pars_vertex:RT,fog_fragment:CT,fog_pars_fragment:NT,gradientmap_pars_fragment:DT,lightmap_pars_fragment:UT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:OT,lights_pars_begin:zT,lights_toon_fragment:IT,lights_toon_pars_fragment:BT,lights_phong_fragment:FT,lights_phong_pars_fragment:HT,lights_physical_fragment:GT,lights_physical_pars_fragment:VT,lights_fragment_begin:jT,lights_fragment_maps:kT,lights_fragment_end:XT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:WT,logdepthbuf_vertex:ZT,map_fragment:KT,map_pars_fragment:QT,map_particle_fragment:JT,map_particle_pars_fragment:$T,metalnessmap_fragment:t1,metalnessmap_pars_fragment:e1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:a1,morphtarget_pars_vertex:r1,morphtarget_vertex:s1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:f1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:v1,packing:x1,premultiplied_alpha_fragment:_1,project_vertex:y1,dithering_fragment:S1,dithering_pars_fragment:M1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:A1,shadowmap_vertex:w1,shadowmask_pars_fragment:R1,skinbase_vertex:C1,skinning_pars_vertex:N1,skinning_vertex:D1,skinnormal_vertex:U1,specularmap_fragment:L1,specularmap_pars_fragment:O1,tonemapping_fragment:z1,tonemapping_pars_fragment:P1,transmission_fragment:I1,transmission_pars_fragment:B1,uv_pars_fragment:F1,uv_pars_vertex:H1,uv_vertex:G1,worldpos_vertex:V1,background_vert:j1,background_frag:k1,backgroundCube_vert:X1,backgroundCube_frag:q1,cube_vert:Y1,cube_frag:W1,depth_vert:Z1,depth_frag:K1,distanceRGBA_vert:Q1,distanceRGBA_frag:J1,equirect_vert:$1,equirect_frag:tA,linedashed_vert:eA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:aA,meshlambert_vert:rA,meshlambert_frag:sA,meshmatcap_vert:oA,meshmatcap_frag:lA,meshnormal_vert:cA,meshnormal_frag:uA,meshphong_vert:fA,meshphong_frag:dA,meshphysical_vert:hA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:vA,points_frag:xA,shadow_vert:_A,shadow_frag:yA,sprite_vert:SA,sprite_frag:MA},Ot={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Xi={basic:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Vn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Vn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Vn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Vn([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Vn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Vn([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Vn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Vn([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Vn([Ot.common,Ot.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Vn([Ot.lights,Ot.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Xi.physical={uniforms:Vn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const ou={r:0,b:0,g:0},Br=new Ea,EA=new nn;function bA(o,n,a,s,c,f,d){const h=new Le(0);let p=f===!0?0:1,v,x,m=null,S=0,E=null;function T(I){let U=I.isScene===!0?I.background:null;return U&&U.isTexture&&(U=(I.backgroundBlurriness>0?a:n).get(U)),U}function N(I){let U=!1;const W=T(I);W===null?_(h,p):W&&W.isColor&&(_(W,1),U=!0);const j=o.xr.getEnvironmentBlendMode();j==="additive"?s.buffers.color.setClear(0,0,0,1,d):j==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(I,U){const W=T(U);W&&(W.isCubeTexture||W.mapping===_u)?(x===void 0&&(x=new ya(new gl(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:so(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(j,P,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(x)),Br.copy(U.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),x.material.uniforms.envMap.value=W,x.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(Br)),x.material.toneMapped=Ne.getTransfer(W.colorSpace)!==Fe,(m!==W||S!==W.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,m=W,S=W.version,E=o.toneMapping),x.layers.enableAll(),I.unshift(x,x.geometry,x.material,0,0,null)):W&&W.isTexture&&(v===void 0&&(v=new ya(new Su(2,2),new ur({name:"BackgroundMaterial",uniforms:so(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(v)),v.material.uniforms.t2D.value=W,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.toneMapped=Ne.getTransfer(W.colorSpace)!==Fe,W.matrixAutoUpdate===!0&&W.updateMatrix(),v.material.uniforms.uvTransform.value.copy(W.matrix),(m!==W||S!==W.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,m=W,S=W.version,E=o.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null))}function _(I,U){I.getRGB(ou,E_(o)),s.buffers.color.setClear(ou.r,ou.g,ou.b,U,d)}function O(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,U=1){h.set(I),p=U,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,_(h,p)},render:N,addToRenderList:M,dispose:O}}function TA(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=S(null);let f=c,d=!1;function h(C,F,ft,it,at){let dt=!1;const X=m(it,ft,F);f!==X&&(f=X,v(f.object)),dt=E(C,it,ft,at),dt&&T(C,it,ft,at),at!==null&&n.update(at,o.ELEMENT_ARRAY_BUFFER),(dt||d)&&(d=!1,U(C,F,ft,it),at!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(at).buffer))}function p(){return o.createVertexArray()}function v(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function m(C,F,ft){const it=ft.wireframe===!0;let at=s[C.id];at===void 0&&(at={},s[C.id]=at);let dt=at[F.id];dt===void 0&&(dt={},at[F.id]=dt);let X=dt[it];return X===void 0&&(X=S(p()),dt[it]=X),X}function S(C){const F=[],ft=[],it=[];for(let at=0;at<a;at++)F[at]=0,ft[at]=0,it[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ft,attributeDivisors:it,object:C,attributes:{},index:null}}function E(C,F,ft,it){const at=f.attributes,dt=F.attributes;let X=0;const rt=ft.getAttributes();for(const Q in rt)if(rt[Q].location>=0){const Et=at[Q];let Gt=dt[Q];if(Gt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Gt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Gt=C.instanceColor)),Et===void 0||Et.attribute!==Gt||Gt&&Et.data!==Gt.data)return!0;X++}return f.attributesNum!==X||f.index!==it}function T(C,F,ft,it){const at={},dt=F.attributes;let X=0;const rt=ft.getAttributes();for(const Q in rt)if(rt[Q].location>=0){let Et=dt[Q];Et===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const Gt={};Gt.attribute=Et,Et&&Et.data&&(Gt.data=Et.data),at[Q]=Gt,X++}f.attributes=at,f.attributesNum=X,f.index=it}function N(){const C=f.newAttributes;for(let F=0,ft=C.length;F<ft;F++)C[F]=0}function M(C){_(C,0)}function _(C,F){const ft=f.newAttributes,it=f.enabledAttributes,at=f.attributeDivisors;ft[C]=1,it[C]===0&&(o.enableVertexAttribArray(C),it[C]=1),at[C]!==F&&(o.vertexAttribDivisor(C,F),at[C]=F)}function O(){const C=f.newAttributes,F=f.enabledAttributes;for(let ft=0,it=F.length;ft<it;ft++)F[ft]!==C[ft]&&(o.disableVertexAttribArray(ft),F[ft]=0)}function I(C,F,ft,it,at,dt,X){X===!0?o.vertexAttribIPointer(C,F,ft,at,dt):o.vertexAttribPointer(C,F,ft,it,at,dt)}function U(C,F,ft,it){N();const at=it.attributes,dt=ft.getAttributes(),X=F.defaultAttributeValues;for(const rt in dt){const Q=dt[rt];if(Q.location>=0){let Mt=at[rt];if(Mt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const Et=Mt.normalized,Gt=Mt.itemSize,ee=n.get(Mt);if(ee===void 0)continue;const Ht=ee.buffer,w=ee.type,V=ee.bytesPerElement,ct=w===o.INT||w===o.UNSIGNED_INT||Mt.gpuType===Ap;if(Mt.isInterleavedBufferAttribute){const ot=Mt.data,Tt=ot.stride,Dt=Mt.offset;if(ot.isInstancedInterleavedBuffer){for(let vt=0;vt<Q.locationSize;vt++)_(Q.location+vt,ot.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let vt=0;vt<Q.locationSize;vt++)M(Q.location+vt);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let vt=0;vt<Q.locationSize;vt++)I(Q.location+vt,Gt/Q.locationSize,w,Et,Tt*V,(Dt+Gt/Q.locationSize*vt)*V,ct)}else{if(Mt.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)_(Q.location+ot,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ot=0;ot<Q.locationSize;ot++)M(Q.location+ot);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let ot=0;ot<Q.locationSize;ot++)I(Q.location+ot,Gt/Q.locationSize,w,Et,Gt*V,Gt/Q.locationSize*ot*V,ct)}}else if(X!==void 0){const Et=X[rt];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(Q.location,Et);break;case 3:o.vertexAttrib3fv(Q.location,Et);break;case 4:o.vertexAttrib4fv(Q.location,Et);break;default:o.vertexAttrib1fv(Q.location,Et)}}}}O()}function W(){G();for(const C in s){const F=s[C];for(const ft in F){const it=F[ft];for(const at in it)x(it[at].object),delete it[at];delete F[ft]}delete s[C]}}function j(C){if(s[C.id]===void 0)return;const F=s[C.id];for(const ft in F){const it=F[ft];for(const at in it)x(it[at].object),delete it[at];delete F[ft]}delete s[C.id]}function P(C){for(const F in s){const ft=s[F];if(ft[C.id]===void 0)continue;const it=ft[C.id];for(const at in it)x(it[at].object),delete it[at];delete ft[C.id]}}function G(){D(),d=!0,f!==c&&(f=c,v(f.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:G,resetDefaultState:D,dispose:W,releaseStatesOfGeometry:j,releaseStatesOfProgram:P,initAttributes:N,enableAttribute:M,disableUnusedAttributes:O}}function AA(o,n,a){let s;function c(v){s=v}function f(v,x){o.drawArrays(s,v,x),a.update(x,s,1)}function d(v,x,m){m!==0&&(o.drawArraysInstanced(s,v,x,m),a.update(x,s,m))}function h(v,x,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,v,0,x,0,m);let E=0;for(let T=0;T<m;T++)E+=x[T];a.update(E,s,1)}function p(v,x,m,S){if(m===0)return;const E=n.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<v.length;T++)d(v[T],x[T],S[T]);else{E.multiDrawArraysInstancedWEBGL(s,v,0,x,0,S,0,m);let T=0;for(let N=0;N<m;N++)T+=x[N]*S[N];a.update(T,s,1)}}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function wA(o,n,a,s){let c;function f(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const P=n.get("EXT_texture_filter_anisotropic");c=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(P){return!(P!==Di&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const G=P===fl&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(P!==Ma&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==xa&&!G)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=a.precision!==void 0?a.precision:"highp";const x=p(v);x!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",x,"instead."),v=x);const m=a.logarithmicDepthBuffer===!0,S=a.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),W=T>0,j=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:v,logarithmicDepthBuffer:m,reverseDepthBuffer:S,maxTextures:E,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:U,vertexTextures:W,maxSamples:j}}function RA(o){const n=this;let a=null,s=0,c=!1,f=!1;const d=new rr,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,S){const E=m.length!==0||S||s!==0||c;return c=S,s=m.length,E},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,S){a=x(m,S,0)},this.setState=function(m,S,E){const T=m.clippingPlanes,N=m.clipIntersection,M=m.clipShadows,_=o.get(m);if(!c||T===null||T.length===0||f&&!M)f?x(null):v();else{const O=f?0:s,I=O*4;let U=_.clippingState||null;p.value=U,U=x(T,S,I,E);for(let W=0;W!==I;++W)U[W]=a[W];_.clippingState=U,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=O}};function v(){p.value!==a&&(p.value=a,p.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function x(m,S,E,T){const N=m!==null?m.length:0;let M=null;if(N!==0){if(M=p.value,T!==!0||M===null){const _=E+N*4,O=S.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<_)&&(M=new Float32Array(_));for(let I=0,U=E;I!==N;++I,U+=4)d.copy(m[I]).applyMatrix4(O,h),d.normal.toArray(M,U),M[U+3]=d.constant}p.value=M,p.needsUpdate=!0}return n.numPlanes=N,n.numIntersection=0,M}}function CA(o){let n=new WeakMap;function a(d,h){return h===kh?d.mapping=eo:h===Xh&&(d.mapping=no),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===kh||h===Xh)if(n.has(d)){const p=n.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new Cb(p.height);return v.fromEquirectangularTexture(o,d),n.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=n.get(h);p!==void 0&&(n.delete(h),p.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Ks=4,Cx=[.125,.215,.35,.446,.526,.582],jr=20,Ah=new Bb,Nx=new Le;let wh=null,Rh=0,Ch=0,Nh=!1;const Gr=(1+Math.sqrt(5))/2,Zs=1/Gr,Dx=[new ut(-Gr,Zs,0),new ut(Gr,Zs,0),new ut(-Zs,0,Gr),new ut(Zs,0,Gr),new ut(0,Gr,-Zs),new ut(0,Gr,Zs),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)],NA=new ut;class Ux{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,c=100,f={}){const{size:d=256,position:h=NA}=f;wh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(n,s,c,p,h),a>0&&this._blur(p,0,0,a),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(wh,Rh,Ch),this._renderer.xr.enabled=Nh,n.scissorTest=!1,lu(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===eo||n.mapping===no?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),wh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:fl,format:Di,colorSpace:ro,depthBuffer:!1},c=Lx(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lx(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DA(f)),this._blurMaterial=UA(f,n,a)}return c}_compileMaterial(n){const a=new ya(this._lodPlanes[0],n);this._renderer.compile(a,Ah)}_sceneToCubeUV(n,a,s,c,f){const p=new _i(90,1,a,s),v=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],m=this._renderer,S=m.autoClear,E=m.toneMapping;m.getClearColor(Nx),m.toneMapping=lr,m.autoClear=!1;const T=new y_({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),N=new ya(new gl,T);let M=!1;const _=n.background;_?_.isColor&&(T.color.copy(_),n.background=null,M=!0):(T.color.copy(Nx),M=!0);for(let O=0;O<6;O++){const I=O%3;I===0?(p.up.set(0,v[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+x[O],f.y,f.z)):I===1?(p.up.set(0,0,v[O]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+x[O],f.z)):(p.up.set(0,v[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+x[O]));const U=this._cubeSize;lu(c,I*U,O>2?U:0,U,U),m.setRenderTarget(c),M&&m.render(N,p),m.render(n,p)}N.geometry.dispose(),N.material.dispose(),m.toneMapping=E,m.autoClear=S,n.background=_}_textureToCubeUV(n,a){const s=this._renderer,c=n.mapping===eo||n.mapping===no;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ox());const f=c?this._cubemapMaterial:this._equirectMaterial,d=new ya(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=n;const p=this._cubeSize;lu(a,0,0,3*p,2*p),s.setRenderTarget(a),s.render(d,Ah)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=Dx[(c-f-1)%Dx.length];this._blur(n,f-1,f,d,h)}a.autoClear=s}_blur(n,a,s,c,f){const d=this._pingPongRenderTarget;this._halfBlur(n,d,a,s,c,"latitudinal",f),this._halfBlur(d,n,s,s,c,"longitudinal",f)}_halfBlur(n,a,s,c,f,d,h){const p=this._renderer,v=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,m=new ya(this._lodPlanes[c],v),S=v.uniforms,E=this._sizeLods[s]-1,T=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*jr-1),N=f/T,M=isFinite(f)?1+Math.floor(x*N):jr;M>jr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${jr}`);const _=[];let O=0;for(let P=0;P<jr;++P){const G=P/N,D=Math.exp(-G*G/2);_.push(D),P===0?O+=D:P<M&&(O+=2*D)}for(let P=0;P<_.length;P++)_[P]=_[P]/O;S.envMap.value=n.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:I}=this;S.dTheta.value=T,S.mipInt.value=I-s;const U=this._sizeLods[c],W=3*U*(c>I-Ks?c-I+Ks:0),j=4*(this._cubeSize-U);lu(a,W,j,3*U,2*U),p.setRenderTarget(a),p.render(m,Ah)}}function DA(o){const n=[],a=[],s=[];let c=o;const f=o-Ks+1+Cx.length;for(let d=0;d<f;d++){const h=Math.pow(2,c);a.push(h);let p=1/h;d>o-Ks?p=Cx[d-o+Ks-1]:d===0&&(p=0),s.push(p);const v=1/(h-2),x=-v,m=1+v,S=[x,x,m,x,m,m,x,x,m,m,x,m],E=6,T=6,N=3,M=2,_=1,O=new Float32Array(N*T*E),I=new Float32Array(M*T*E),U=new Float32Array(_*T*E);for(let j=0;j<E;j++){const P=j%3*2/3-1,G=j>2?0:-1,D=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];O.set(D,N*T*j),I.set(S,M*T*j);const C=[j,j,j,j,j,j];U.set(C,_*T*j)}const W=new ba;W.setAttribute("position",new yi(O,N)),W.setAttribute("uv",new yi(I,M)),W.setAttribute("faceIndex",new yi(U,_)),n.push(W),c>Ks&&c--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function Lx(o,n,a){const s=new Zr(o,n,a);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function lu(o,n,a,s,c){o.viewport.set(n,a,s,c),o.scissor.set(n,a,s,c)}function UA(o,n,a){const s=new Float32Array(jr),c=new ut(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ox(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function zx(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Pp(){return`

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
	`}function LA(o){let n=new WeakMap,a=null;function s(h){if(h&&h.isTexture){const p=h.mapping,v=p===kh||p===Xh,x=p===eo||p===no;if(v||x){let m=n.get(h);const S=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return a===null&&(a=new Ux(o)),m=v?a.fromEquirectangular(h,m):a.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const E=h.image;return v&&E&&E.height>0||x&&E&&c(E)?(a===null&&(a=new Ux(o)),m=v?a.fromEquirectangular(h):a.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function c(h){let p=0;const v=6;for(let x=0;x<v;x++)h[x]!==void 0&&p++;return p===v}function f(h){const p=h.target;p.removeEventListener("dispose",f);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:d}}function OA(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let c;switch(s){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(s)}return n[s]=c,c}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const c=a(s);return c===null&&Hr("THREE.WebGLRenderer: "+s+" extension not supported."),c}}}function zA(o,n,a,s){const c={},f=new WeakMap;function d(m){const S=m.target;S.index!==null&&n.remove(S.index);for(const T in S.attributes)n.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete c[S.id];const E=f.get(S);E&&(n.remove(E),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function h(m,S){return c[S.id]===!0||(S.addEventListener("dispose",d),c[S.id]=!0,a.memory.geometries++),S}function p(m){const S=m.attributes;for(const E in S)n.update(S[E],o.ARRAY_BUFFER)}function v(m){const S=[],E=m.index,T=m.attributes.position;let N=0;if(E!==null){const O=E.array;N=E.version;for(let I=0,U=O.length;I<U;I+=3){const W=O[I+0],j=O[I+1],P=O[I+2];S.push(W,j,j,P,P,W)}}else if(T!==void 0){const O=T.array;N=T.version;for(let I=0,U=O.length/3-1;I<U;I+=3){const W=I+0,j=I+1,P=I+2;S.push(W,j,j,P,P,W)}}else return;const M=new(v_(S)?M_:S_)(S,1);M.version=N;const _=f.get(m);_&&n.remove(_),f.set(m,M)}function x(m){const S=f.get(m);if(S){const E=m.index;E!==null&&S.version<E.version&&v(m)}else v(m);return f.get(m)}return{get:h,update:p,getWireframeAttribute:x}}function PA(o,n,a){let s;function c(S){s=S}let f,d;function h(S){f=S.type,d=S.bytesPerElement}function p(S,E){o.drawElements(s,E,f,S*d),a.update(E,s,1)}function v(S,E,T){T!==0&&(o.drawElementsInstanced(s,E,f,S*d,T),a.update(E,s,T))}function x(S,E,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,f,S,0,T);let M=0;for(let _=0;_<T;_++)M+=E[_];a.update(M,s,1)}function m(S,E,T,N){if(T===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)v(S[_]/d,E[_],N[_]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,f,S,0,N,0,T);let _=0;for(let O=0;O<T;O++)_+=E[O]*N[O];a.update(_,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=v,this.renderMultiDraw=x,this.renderMultiDrawInstances=m}function IA(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:c,update:s}}function BA(o,n,a){const s=new WeakMap,c=new rn;function f(d,h,p){const v=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=x!==void 0?x.length:0;let S=s.get(h);if(S===void 0||S.count!==m){let C=function(){G.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var E=C;S!==void 0&&S.texture.dispose();const T=h.morphAttributes.position!==void 0,N=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let U=0;T===!0&&(U=1),N===!0&&(U=2),M===!0&&(U=3);let W=h.attributes.position.count*U,j=1;W>n.maxTextureSize&&(j=Math.ceil(W/n.maxTextureSize),W=n.maxTextureSize);const P=new Float32Array(W*j*4*m),G=new x_(P,W,j,m);G.type=xa,G.needsUpdate=!0;const D=U*4;for(let F=0;F<m;F++){const ft=_[F],it=O[F],at=I[F],dt=W*j*4*F;for(let X=0;X<ft.count;X++){const rt=X*D;T===!0&&(c.fromBufferAttribute(ft,X),P[dt+rt+0]=c.x,P[dt+rt+1]=c.y,P[dt+rt+2]=c.z,P[dt+rt+3]=0),N===!0&&(c.fromBufferAttribute(it,X),P[dt+rt+4]=c.x,P[dt+rt+5]=c.y,P[dt+rt+6]=c.z,P[dt+rt+7]=0),M===!0&&(c.fromBufferAttribute(at,X),P[dt+rt+8]=c.x,P[dt+rt+9]=c.y,P[dt+rt+10]=c.z,P[dt+rt+11]=at.itemSize===4?c.w:1)}}S={count:m,texture:G,size:new He(W,j)},s.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let T=0;for(let M=0;M<v.length;M++)T+=v[M];const N=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",N),p.getUniforms().setValue(o,"morphTargetInfluences",v)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function FA(o,n,a,s){let c=new WeakMap;function f(p){const v=s.render.frame,x=p.geometry,m=n.get(p,x);if(c.get(m)!==v&&(n.update(m),c.set(m,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),c.get(p)!==v&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==v&&(S.update(),c.set(S,v))}return m}function d(){c=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),a.remove(v.instanceMatrix),v.instanceColor!==null&&a.remove(v.instanceColor)}return{update:f,dispose:d}}const N_=new jn,Px=new R_(1,1),D_=new x_,U_=new db,L_=new T_,Ix=[],Bx=[],Fx=new Float32Array(16),Hx=new Float32Array(9),Gx=new Float32Array(4);function lo(o,n,a){const s=o[0];if(s<=0||s>0)return o;const c=n*a;let f=Ix[c];if(f===void 0&&(f=new Float32Array(c),Ix[c]=f),n!==0){s.toArray(f,0);for(let d=1,h=0;d!==n;++d)h+=a,o[d].toArray(f,h)}return f}function mn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function gn(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function Mu(o,n){let a=Bx[n];a===void 0&&(a=new Int32Array(n),Bx[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function HA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function GA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2fv(this.addr,n),gn(a,n)}}function VA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(mn(a,n))return;o.uniform3fv(this.addr,n),gn(a,n)}}function jA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4fv(this.addr,n),gn(a,n)}}function kA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;Gx.set(s),o.uniformMatrix2fv(this.addr,!1,Gx),gn(a,s)}}function XA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;Hx.set(s),o.uniformMatrix3fv(this.addr,!1,Hx),gn(a,s)}}function qA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;Fx.set(s),o.uniformMatrix4fv(this.addr,!1,Fx),gn(a,s)}}function YA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function WA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2iv(this.addr,n),gn(a,n)}}function ZA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(mn(a,n))return;o.uniform3iv(this.addr,n),gn(a,n)}}function KA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4iv(this.addr,n),gn(a,n)}}function QA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function JA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2uiv(this.addr,n),gn(a,n)}}function $A(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(mn(a,n))return;o.uniform3uiv(this.addr,n),gn(a,n)}}function t2(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4uiv(this.addr,n),gn(a,n)}}function e2(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(Px.compareFunction=g_,f=Px):f=N_,a.setTexture2D(n||f,c)}function n2(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture3D(n||U_,c)}function i2(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTextureCube(n||L_,c)}function a2(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture2DArray(n||D_,c)}function r2(o){switch(o){case 5126:return HA;case 35664:return GA;case 35665:return VA;case 35666:return jA;case 35674:return kA;case 35675:return XA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return WA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return QA;case 36294:return JA;case 36295:return $A;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return a2}}function s2(o,n){o.uniform1fv(this.addr,n)}function o2(o,n){const a=lo(n,this.size,2);o.uniform2fv(this.addr,a)}function l2(o,n){const a=lo(n,this.size,3);o.uniform3fv(this.addr,a)}function c2(o,n){const a=lo(n,this.size,4);o.uniform4fv(this.addr,a)}function u2(o,n){const a=lo(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function f2(o,n){const a=lo(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function d2(o,n){const a=lo(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function h2(o,n){o.uniform1iv(this.addr,n)}function p2(o,n){o.uniform2iv(this.addr,n)}function m2(o,n){o.uniform3iv(this.addr,n)}function g2(o,n){o.uniform4iv(this.addr,n)}function v2(o,n){o.uniform1uiv(this.addr,n)}function x2(o,n){o.uniform2uiv(this.addr,n)}function _2(o,n){o.uniform3uiv(this.addr,n)}function y2(o,n){o.uniform4uiv(this.addr,n)}function S2(o,n,a){const s=this.cache,c=n.length,f=Mu(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let d=0;d!==c;++d)a.setTexture2D(n[d]||N_,f[d])}function M2(o,n,a){const s=this.cache,c=n.length,f=Mu(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let d=0;d!==c;++d)a.setTexture3D(n[d]||U_,f[d])}function E2(o,n,a){const s=this.cache,c=n.length,f=Mu(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let d=0;d!==c;++d)a.setTextureCube(n[d]||L_,f[d])}function b2(o,n,a){const s=this.cache,c=n.length,f=Mu(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let d=0;d!==c;++d)a.setTexture2DArray(n[d]||D_,f[d])}function T2(o){switch(o){case 5126:return s2;case 35664:return o2;case 35665:return l2;case 35666:return c2;case 35674:return u2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return h2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return v2;case 36294:return x2;case 36295:return _2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return b2}}class A2{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=r2(a.type)}}class w2{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=T2(a.type)}}class R2{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(n,a[h.id],s)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function Vx(o,n){o.seq.push(n),o.map[n.id]=n}function C2(o,n,a){const s=o.name,c=s.length;for(Dh.lastIndex=0;;){const f=Dh.exec(s),d=Dh.lastIndex;let h=f[1];const p=f[2]==="]",v=f[3];if(p&&(h=h|0),v===void 0||v==="["&&d+2===c){Vx(a,v===void 0?new A2(h,o,n):new w2(h,o,n));break}else{let m=a.map[h];m===void 0&&(m=new R2(h),Vx(a,m)),a=m}}}class mu{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const f=n.getActiveUniform(a,c),d=n.getUniformLocation(a,f.name);C2(f,d,this)}}setValue(n,a,s,c){const f=this.map[a];f!==void 0&&f.setValue(n,s,c)}setOptional(n,a,s){const c=a[s];c!==void 0&&this.setValue(n,s,c)}static upload(n,a,s,c){for(let f=0,d=a.length;f!==d;++f){const h=a[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(n,p.value,c)}}static seqWithValue(n,a){const s=[];for(let c=0,f=n.length;c!==f;++c){const d=n[c];d.id in a&&s.push(d)}return s}}function jx(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const N2=37297;let D2=0;function U2(o,n){const a=o.split(`
`),s=[],c=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===n?">":" "} ${h}: ${a[d]}`)}return s.join(`
`)}const kx=new fe;function L2(o){Ne._getMatrix(kx,Ne.workingColorSpace,o);const n=`mat3( ${kx.elements.map(a=>a.toFixed(4))} )`;switch(Ne.getTransfer(o)){case gu:return[n,"LinearTransferOETF"];case Fe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function Xx(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),c=o.getShaderInfoLog(n).trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return a.toUpperCase()+`

`+c+`

`+U2(o.getShaderSource(n),d)}else return c}function O2(o,n){const a=L2(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function z2(o,n){let a;switch(n){case IE:a="Linear";break;case BE:a="Reinhard";break;case FE:a="Cineon";break;case HE:a="ACESFilmic";break;case VE:a="AgX";break;case jE:a="Neutral";break;case GE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const cu=new ut;function P2(){Ne.getLuminanceCoefficients(cu);const o=cu.x.toFixed(4),n=cu.y.toFixed(4),a=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function B2(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function F2(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(n,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(n,d),locationSize:h}}return a}function ll(o){return o!==""}function qx(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Yx(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const H2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(o){return o.replace(H2,V2)}const G2=new Map;function V2(o,n){let a=he[n];if(a===void 0){const s=G2.get(n);if(s!==void 0)a=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return Ep(a)}const j2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wx(o){return o.replace(j2,k2)}function k2(o,n,a,s){let c="";for(let f=parseInt(n);f<parseInt(a);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function Zx(o){let n=`precision ${o.precision} float;
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
#define LOW_PRECISION`),n}function X2(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===i_?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===gE?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ga&&(n="SHADOWMAP_TYPE_VSM"),n}function q2(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case eo:case no:n="ENVMAP_TYPE_CUBE";break;case _u:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Y2(o){let n="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case no:n="ENVMAP_MODE_REFRACTION";break}return n}function W2(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case a_:n="ENVMAP_BLENDING_MULTIPLY";break;case zE:n="ENVMAP_BLENDING_MIX";break;case PE:n="ENVMAP_BLENDING_ADD";break}return n}function Z2(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function K2(o,n,a,s){const c=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const p=X2(a),v=q2(a),x=Y2(a),m=W2(a),S=Z2(a),E=I2(a),T=B2(f),N=c.createProgram();let M,_,O=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(M=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T].filter(ll).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T].filter(ll).join(`
`),_.length>0&&(_+=`
`)):(M=[Zx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+x:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),_=[Zx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.envMap?"#define "+x:"",a.envMap?"#define "+m:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==lr?"#define TONE_MAPPING":"",a.toneMapping!==lr?he.tonemapping_pars_fragment:"",a.toneMapping!==lr?z2("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,O2("linearToOutputTexel",a.outputColorSpace),P2(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(ll).join(`
`)),d=Ep(d),d=qx(d,a),d=Yx(d,a),h=Ep(h),h=qx(h,a),h=Yx(h,a),d=Wx(d),h=Wx(h),a.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",a.glslVersion===rx?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===rx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=O+M+d,U=O+_+h,W=jx(c,c.VERTEX_SHADER,I),j=jx(c,c.FRAGMENT_SHADER,U);c.attachShader(N,W),c.attachShader(N,j),a.index0AttributeName!==void 0?c.bindAttribLocation(N,0,a.index0AttributeName):a.morphTargets===!0&&c.bindAttribLocation(N,0,"position"),c.linkProgram(N);function P(F){if(o.debug.checkShaderErrors){const ft=c.getProgramInfoLog(N).trim(),it=c.getShaderInfoLog(W).trim(),at=c.getShaderInfoLog(j).trim();let dt=!0,X=!0;if(c.getProgramParameter(N,c.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,N,W,j);else{const rt=Xx(c,W,"vertex"),Q=Xx(c,j,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(N,c.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ft+`
`+rt+`
`+Q)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(it===""||at==="")&&(X=!1);X&&(F.diagnostics={runnable:dt,programLog:ft,vertexShader:{log:it,prefix:M},fragmentShader:{log:at,prefix:_}})}c.deleteShader(W),c.deleteShader(j),G=new mu(c,N),D=F2(c,N)}let G;this.getUniforms=function(){return G===void 0&&P(this),G};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=c.getProgramParameter(N,N2)),C},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(N),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=D2++,this.cacheKey=n,this.usedTimes=1,this.program=N,this.vertexShader=W,this.fragmentShader=j,this}let Q2=0;class J2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,c=this._getShaderStage(a),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(n);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new $2(n),a.set(n,s)),s}}class $2{constructor(n){this.id=Q2++,this.code=n,this.usedTimes=0}}function tw(o,n,a,s,c,f,d){const h=new Op,p=new J2,v=new Set,x=[],m=c.logarithmicDepthBuffer,S=c.vertexTextures;let E=c.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(D){return v.add(D),D===0?"uv":`uv${D}`}function M(D,C,F,ft,it){const at=ft.fog,dt=it.geometry,X=D.isMeshStandardMaterial?ft.environment:null,rt=(D.isMeshStandardMaterial?a:n).get(D.envMap||X),Q=rt&&rt.mapping===_u?rt.image.height:null,Mt=T[D.type];D.precision!==null&&(E=c.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const Et=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Gt=Et!==void 0?Et.length:0;let ee=0;dt.morphAttributes.position!==void 0&&(ee=1),dt.morphAttributes.normal!==void 0&&(ee=2),dt.morphAttributes.color!==void 0&&(ee=3);let Ht,w,V,ct;if(Mt){const be=Xi[Mt];Ht=be.vertexShader,w=be.fragmentShader}else Ht=D.vertexShader,w=D.fragmentShader,p.update(D),V=p.getVertexShaderID(D),ct=p.getFragmentShaderID(D);const ot=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Dt=it.isInstancedMesh===!0,vt=it.isBatchedMesh===!0,St=!!D.map,At=!!D.matcap,Zt=!!rt,B=!!D.aoMap,ke=!!D.lightMap,Qt=!!D.bumpMap,Xt=!!D.normalMap,Rt=!!D.displacementMap,de=!!D.emissiveMap,qt=!!D.metalnessMap,L=!!D.roughnessMap,A=D.anisotropy>0,et=D.clearcoat>0,xt=D.dispersion>0,yt=D.iridescence>0,gt=D.sheen>0,Yt=D.transmission>0,zt=A&&!!D.anisotropyMap,Bt=et&&!!D.clearcoatMap,ge=et&&!!D.clearcoatNormalMap,wt=et&&!!D.clearcoatRoughnessMap,kt=yt&&!!D.iridescenceMap,ne=yt&&!!D.iridescenceThicknessMap,ae=gt&&!!D.sheenColorMap,jt=gt&&!!D.sheenRoughnessMap,me=!!D.specularMap,le=!!D.specularColorMap,Ie=!!D.specularIntensityMap,k=Yt&&!!D.transmissionMap,Pt=Yt&&!!D.thicknessMap,ht=!!D.gradientMap,_t=!!D.alphaMap,It=D.alphaTest>0,Ft=!!D.alphaHash,oe=!!D.extensions;let Ke=lr;D.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ke=o.toneMapping);const vn={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:Ht,fragmentShader:w,defines:D.defines,customVertexShaderID:V,customFragmentShaderID:ct,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:vt,batchingColor:vt&&it._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&it.instanceColor!==null,instancingMorph:Dt&&it.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ro,alphaToCoverage:!!D.alphaToCoverage,map:St,matcap:At,envMap:Zt,envMapMode:Zt&&rt.mapping,envMapCubeUVHeight:Q,aoMap:B,lightMap:ke,bumpMap:Qt,normalMap:Xt,displacementMap:S&&Rt,emissiveMap:de,normalMapObjectSpace:Xt&&D.normalMapType===WE,normalMapTangentSpace:Xt&&D.normalMapType===YE,metalnessMap:qt,roughnessMap:L,anisotropy:A,anisotropyMap:zt,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:ge,clearcoatRoughnessMap:wt,dispersion:xt,iridescence:yt,iridescenceMap:kt,iridescenceThicknessMap:ne,sheen:gt,sheenColorMap:ae,sheenRoughnessMap:jt,specularMap:me,specularColorMap:le,specularIntensityMap:Ie,transmission:Yt,transmissionMap:k,thicknessMap:Pt,gradientMap:ht,opaque:D.transparent===!1&&D.blending===Qs&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:It,alphaHash:Ft,combine:D.combine,mapUv:St&&N(D.map.channel),aoMapUv:B&&N(D.aoMap.channel),lightMapUv:ke&&N(D.lightMap.channel),bumpMapUv:Qt&&N(D.bumpMap.channel),normalMapUv:Xt&&N(D.normalMap.channel),displacementMapUv:Rt&&N(D.displacementMap.channel),emissiveMapUv:de&&N(D.emissiveMap.channel),metalnessMapUv:qt&&N(D.metalnessMap.channel),roughnessMapUv:L&&N(D.roughnessMap.channel),anisotropyMapUv:zt&&N(D.anisotropyMap.channel),clearcoatMapUv:Bt&&N(D.clearcoatMap.channel),clearcoatNormalMapUv:ge&&N(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&N(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&N(D.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&N(D.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&N(D.sheenColorMap.channel),sheenRoughnessMapUv:jt&&N(D.sheenRoughnessMap.channel),specularMapUv:me&&N(D.specularMap.channel),specularColorMapUv:le&&N(D.specularColorMap.channel),specularIntensityMapUv:Ie&&N(D.specularIntensityMap.channel),transmissionMapUv:k&&N(D.transmissionMap.channel),thicknessMapUv:Pt&&N(D.thicknessMap.channel),alphaMapUv:_t&&N(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Xt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!dt.attributes.uv&&(St||_t),fog:!!at,useFog:D.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Tt,skinning:it.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ke,decodeVideoTexture:St&&D.map.isVideoTexture===!0&&Ne.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:de&&D.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===va,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:oe&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&D.extensions.multiDraw===!0||vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return vn.vertexUv1s=v.has(1),vn.vertexUv2s=v.has(2),vn.vertexUv3s=v.has(3),v.clear(),vn}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)C.push(F),C.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(O(C,D),I(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function I(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const C=T[D.type];let F;if(C){const ft=Xi[C];F=Tb.clone(ft.uniforms)}else F=D.uniforms;return F}function W(D,C){let F;for(let ft=0,it=x.length;ft<it;ft++){const at=x[ft];if(at.cacheKey===C){F=at,++F.usedTimes;break}}return F===void 0&&(F=new K2(o,C,D,f),x.push(F)),F}function j(D){if(--D.usedTimes===0){const C=x.indexOf(D);x[C]=x[x.length-1],x.pop(),D.destroy()}}function P(D){p.remove(D)}function G(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:W,releaseProgram:j,releaseShaderCache:P,programs:x,dispose:G}}function ew(){let o=new WeakMap;function n(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:c,dispose:f}}function nw(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function Kx(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function Qx(){const o=[];let n=0;const a=[],s=[],c=[];function f(){n=0,a.length=0,s.length=0,c.length=0}function d(m,S,E,T,N,M){let _=o[n];return _===void 0?(_={id:m.id,object:m,geometry:S,material:E,groupOrder:T,renderOrder:m.renderOrder,z:N,group:M},o[n]=_):(_.id=m.id,_.object=m,_.geometry=S,_.material=E,_.groupOrder=T,_.renderOrder=m.renderOrder,_.z=N,_.group=M),n++,_}function h(m,S,E,T,N,M){const _=d(m,S,E,T,N,M);E.transmission>0?s.push(_):E.transparent===!0?c.push(_):a.push(_)}function p(m,S,E,T,N,M){const _=d(m,S,E,T,N,M);E.transmission>0?s.unshift(_):E.transparent===!0?c.unshift(_):a.unshift(_)}function v(m,S){a.length>1&&a.sort(m||nw),s.length>1&&s.sort(S||Kx),c.length>1&&c.sort(S||Kx)}function x(){for(let m=n,S=o.length;m<S;m++){const E=o[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:a,transmissive:s,transparent:c,init:f,push:h,unshift:p,finish:x,sort:v}}function iw(){let o=new WeakMap;function n(s,c){const f=o.get(s);let d;return f===void 0?(d=new Qx,o.set(s,[d])):c>=f.length?(d=new Qx,f.push(d)):d=f[c],d}function a(){o=new WeakMap}return{get:n,dispose:a}}function aw(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new ut,color:new Le};break;case"SpotLight":a={position:new ut,direction:new ut,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ut,color:new Le,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ut,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":a={color:new Le,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[n.id]=a,a}}}function rw(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let sw=0;function ow(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function lw(o){const n=new aw,a=rw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)s.probe.push(new ut);const c=new ut,f=new nn,d=new nn;function h(v){let x=0,m=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,T=0,N=0,M=0,_=0,O=0,I=0,U=0,W=0,j=0,P=0;v.sort(ow);for(let D=0,C=v.length;D<C;D++){const F=v[D],ft=F.color,it=F.intensity,at=F.distance,dt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)x+=ft.r*it,m+=ft.g*it,S+=ft.b*it;else if(F.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(F.sh.coefficients[X],it);P++}else if(F.isDirectionalLight){const X=n.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const rt=F.shadow,Q=a.get(F);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,s.directionalShadow[E]=Q,s.directionalShadowMap[E]=dt,s.directionalShadowMatrix[E]=F.shadow.matrix,O++}s.directional[E]=X,E++}else if(F.isSpotLight){const X=n.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(ft).multiplyScalar(it),X.distance=at,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,s.spot[N]=X;const rt=F.shadow;if(F.map&&(s.spotLightMap[W]=F.map,W++,rt.updateMatrices(F),F.castShadow&&j++),s.spotLightMatrix[N]=rt.matrix,F.castShadow){const Q=a.get(F);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,s.spotShadow[N]=Q,s.spotShadowMap[N]=dt,U++}N++}else if(F.isRectAreaLight){const X=n.get(F);X.color.copy(ft).multiplyScalar(it),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=X,M++}else if(F.isPointLight){const X=n.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const rt=F.shadow,Q=a.get(F);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,Q.shadowCameraNear=rt.camera.near,Q.shadowCameraFar=rt.camera.far,s.pointShadow[T]=Q,s.pointShadowMap[T]=dt,s.pointShadowMatrix[T]=F.shadow.matrix,I++}s.point[T]=X,T++}else if(F.isHemisphereLight){const X=n.get(F);X.skyColor.copy(F.color).multiplyScalar(it),X.groundColor.copy(F.groundColor).multiplyScalar(it),s.hemi[_]=X,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=m,s.ambient[2]=S;const G=s.hash;(G.directionalLength!==E||G.pointLength!==T||G.spotLength!==N||G.rectAreaLength!==M||G.hemiLength!==_||G.numDirectionalShadows!==O||G.numPointShadows!==I||G.numSpotShadows!==U||G.numSpotMaps!==W||G.numLightProbes!==P)&&(s.directional.length=E,s.spot.length=N,s.rectArea.length=M,s.point.length=T,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=U+W-j,s.spotLightMap.length=W,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=P,G.directionalLength=E,G.pointLength=T,G.spotLength=N,G.rectAreaLength=M,G.hemiLength=_,G.numDirectionalShadows=O,G.numPointShadows=I,G.numSpotShadows=U,G.numSpotMaps=W,G.numLightProbes=P,s.version=sw++)}function p(v,x){let m=0,S=0,E=0,T=0,N=0;const M=x.matrixWorldInverse;for(let _=0,O=v.length;_<O;_++){const I=v[_];if(I.isDirectionalLight){const U=s.directional[m];U.direction.setFromMatrixPosition(I.matrixWorld),c.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(M),m++}else if(I.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(I.matrixWorld),c.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(M),E++}else if(I.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(M),d.identity(),f.copy(I.matrixWorld),f.premultiply(M),d.extractRotation(f),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(M),S++}else if(I.isHemisphereLight){const U=s.hemi[N];U.direction.setFromMatrixPosition(I.matrixWorld),U.direction.transformDirection(M),N++}}}return{setup:h,setupView:p,state:s}}function Jx(o){const n=new lw(o),a=[],s=[];function c(x){v.camera=x,a.length=0,s.length=0}function f(x){a.push(x)}function d(x){s.push(x)}function h(){n.setup(a)}function p(x){n.setupView(a,x)}const v={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:v,setupLights:h,setupLightsView:p,pushLight:f,pushShadow:d}}function cw(o){let n=new WeakMap;function a(c,f=0){const d=n.get(c);let h;return d===void 0?(h=new Jx(o),n.set(c,[h])):f>=d.length?(h=new Jx(o),d.push(h)):h=d[f],h}function s(){n=new WeakMap}return{get:a,dispose:s}}const uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
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
}`;function dw(o,n,a){let s=new A_;const c=new He,f=new He,d=new rn,h=new Pb({depthPacking:qE}),p=new Ib,v={},x=a.maxTextureSize,m={[cr]:Kn,[Kn]:cr,[va]:va},S=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:uw,fragmentShader:fw}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const T=new ba;T.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new ya(T,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i_;let _=this.type;this.render=function(j,P,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||j.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ft=o.state;ft.setBlending(or),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const it=_!==ga&&this.type===ga,at=_===ga&&this.type!==ga;for(let dt=0,X=j.length;dt<X;dt++){const rt=j[dt],Q=rt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;c.copy(Q.mapSize);const Mt=Q.getFrameExtents();if(c.multiply(Mt),f.copy(Q.mapSize),(c.x>x||c.y>x)&&(c.x>x&&(f.x=Math.floor(x/Mt.x),c.x=f.x*Mt.x,Q.mapSize.x=f.x),c.y>x&&(f.y=Math.floor(x/Mt.y),c.y=f.y*Mt.y,Q.mapSize.y=f.y)),Q.map===null||it===!0||at===!0){const Gt=this.type!==ga?{minFilter:Ui,magFilter:Ui}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Zr(c.x,c.y,Gt),Q.map.texture.name=rt.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const Et=Q.getViewportCount();for(let Gt=0;Gt<Et;Gt++){const ee=Q.getViewport(Gt);d.set(f.x*ee.x,f.y*ee.y,f.x*ee.z,f.y*ee.w),ft.viewport(d),Q.updateMatrices(rt,Gt),s=Q.getFrustum(),U(P,G,Q.camera,rt,this.type)}Q.isPointLightShadow!==!0&&this.type===ga&&O(Q,G),Q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,F)};function O(j,P){const G=n.update(N);S.defines.VSM_SAMPLES!==j.blurSamples&&(S.defines.VSM_SAMPLES=j.blurSamples,E.defines.VSM_SAMPLES=j.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),j.mapPass===null&&(j.mapPass=new Zr(c.x,c.y)),S.uniforms.shadow_pass.value=j.map.texture,S.uniforms.resolution.value=j.mapSize,S.uniforms.radius.value=j.radius,o.setRenderTarget(j.mapPass),o.clear(),o.renderBufferDirect(P,null,G,S,N,null),E.uniforms.shadow_pass.value=j.mapPass.texture,E.uniforms.resolution.value=j.mapSize,E.uniforms.radius.value=j.radius,o.setRenderTarget(j.map),o.clear(),o.renderBufferDirect(P,null,G,E,N,null)}function I(j,P,G,D){let C=null;const F=G.isPointLight===!0?j.customDistanceMaterial:j.customDepthMaterial;if(F!==void 0)C=F;else if(C=G.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ft=C.uuid,it=P.uuid;let at=v[ft];at===void 0&&(at={},v[ft]=at);let dt=at[it];dt===void 0&&(dt=C.clone(),at[it]=dt,P.addEventListener("dispose",W)),C=dt}if(C.visible=P.visible,C.wireframe=P.wireframe,D===ga?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:m[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ft=o.properties.get(C);ft.light=G}return C}function U(j,P,G,D,C){if(j.visible===!1)return;if(j.layers.test(P.layers)&&(j.isMesh||j.isLine||j.isPoints)&&(j.castShadow||j.receiveShadow&&C===ga)&&(!j.frustumCulled||s.intersectsObject(j))){j.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,j.matrixWorld);const it=n.update(j),at=j.material;if(Array.isArray(at)){const dt=it.groups;for(let X=0,rt=dt.length;X<rt;X++){const Q=dt[X],Mt=at[Q.materialIndex];if(Mt&&Mt.visible){const Et=I(j,Mt,D,C);j.onBeforeShadow(o,j,P,G,it,Et,Q),o.renderBufferDirect(G,null,it,Et,j,Q),j.onAfterShadow(o,j,P,G,it,Et,Q)}}}else if(at.visible){const dt=I(j,at,D,C);j.onBeforeShadow(o,j,P,G,it,dt,null),o.renderBufferDirect(G,null,it,dt,j,null),j.onAfterShadow(o,j,P,G,it,dt,null)}}const ft=j.children;for(let it=0,at=ft.length;it<at;it++)U(ft[it],P,G,D,C)}function W(j){j.target.removeEventListener("dispose",W);for(const G in v){const D=v[G],C=j.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const hw={[Ih]:Bh,[Fh]:Vh,[Hh]:jh,[to]:Gh,[Bh]:Ih,[Vh]:Fh,[jh]:Hh,[Gh]:to};function pw(o,n){function a(){let k=!1;const Pt=new rn;let ht=null;const _t=new rn(0,0,0,0);return{setMask:function(It){ht!==It&&!k&&(o.colorMask(It,It,It,It),ht=It)},setLocked:function(It){k=It},setClear:function(It,Ft,oe,Ke,vn){vn===!0&&(It*=Ke,Ft*=Ke,oe*=Ke),Pt.set(It,Ft,oe,Ke),_t.equals(Pt)===!1&&(o.clearColor(It,Ft,oe,Ke),_t.copy(Pt))},reset:function(){k=!1,ht=null,_t.set(-1,0,0,0)}}}function s(){let k=!1,Pt=!1,ht=null,_t=null,It=null;return{setReversed:function(Ft){if(Pt!==Ft){const oe=n.get("EXT_clip_control");Pt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);const Ke=It;It=null,this.setClear(Ke)}Pt=Ft},getReversed:function(){return Pt},setTest:function(Ft){Ft?ot(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Ft){ht!==Ft&&!k&&(o.depthMask(Ft),ht=Ft)},setFunc:function(Ft){if(Pt&&(Ft=hw[Ft]),_t!==Ft){switch(Ft){case Ih:o.depthFunc(o.NEVER);break;case Bh:o.depthFunc(o.ALWAYS);break;case Fh:o.depthFunc(o.LESS);break;case to:o.depthFunc(o.LEQUAL);break;case Hh:o.depthFunc(o.EQUAL);break;case Gh:o.depthFunc(o.GEQUAL);break;case Vh:o.depthFunc(o.GREATER);break;case jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ft}},setLocked:function(Ft){k=Ft},setClear:function(Ft){It!==Ft&&(Pt&&(Ft=1-Ft),o.clearDepth(Ft),It=Ft)},reset:function(){k=!1,ht=null,_t=null,It=null,Pt=!1}}}function c(){let k=!1,Pt=null,ht=null,_t=null,It=null,Ft=null,oe=null,Ke=null,vn=null;return{setTest:function(be){k||(be?ot(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(be){Pt!==be&&!k&&(o.stencilMask(be),Pt=be)},setFunc:function(be,We,xn){(ht!==be||_t!==We||It!==xn)&&(o.stencilFunc(be,We,xn),ht=be,_t=We,It=xn)},setOp:function(be,We,xn){(Ft!==be||oe!==We||Ke!==xn)&&(o.stencilOp(be,We,xn),Ft=be,oe=We,Ke=xn)},setLocked:function(be){k=be},setClear:function(be){vn!==be&&(o.clearStencil(be),vn=be)},reset:function(){k=!1,Pt=null,ht=null,_t=null,It=null,Ft=null,oe=null,Ke=null,vn=null}}}const f=new a,d=new s,h=new c,p=new WeakMap,v=new WeakMap;let x={},m={},S=new WeakMap,E=[],T=null,N=!1,M=null,_=null,O=null,I=null,U=null,W=null,j=null,P=new Le(0,0,0),G=0,D=!1,C=null,F=null,ft=null,it=null,at=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,rt=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=rt>=1):Q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=rt>=2);let Mt=null,Et={};const Gt=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),Ht=new rn().fromArray(Gt),w=new rn().fromArray(ee);function V(k,Pt,ht,_t){const It=new Uint8Array(4),Ft=o.createTexture();o.bindTexture(k,Ft),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let oe=0;oe<ht;oe++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Pt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,It):o.texImage2D(Pt+oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,It);return Ft}const ct={};ct[o.TEXTURE_2D]=V(o.TEXTURE_2D,o.TEXTURE_2D,1),ct[o.TEXTURE_CUBE_MAP]=V(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[o.TEXTURE_2D_ARRAY]=V(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ct[o.TEXTURE_3D]=V(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ot(o.DEPTH_TEST),d.setFunc(to),Qt(!1),Xt(tx),ot(o.CULL_FACE),B(or);function ot(k){x[k]!==!0&&(o.enable(k),x[k]=!0)}function Tt(k){x[k]!==!1&&(o.disable(k),x[k]=!1)}function Dt(k,Pt){return m[k]!==Pt?(o.bindFramebuffer(k,Pt),m[k]=Pt,k===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Pt),k===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Pt),!0):!1}function vt(k,Pt){let ht=E,_t=!1;if(k){ht=S.get(Pt),ht===void 0&&(ht=[],S.set(Pt,ht));const It=k.textures;if(ht.length!==It.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let Ft=0,oe=It.length;Ft<oe;Ft++)ht[Ft]=o.COLOR_ATTACHMENT0+Ft;ht.length=It.length,_t=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ht)}function St(k){return T!==k?(o.useProgram(k),T=k,!0):!1}const At={[Vr]:o.FUNC_ADD,[xE]:o.FUNC_SUBTRACT,[_E]:o.FUNC_REVERSE_SUBTRACT};At[yE]=o.MIN,At[SE]=o.MAX;const Zt={[ME]:o.ZERO,[EE]:o.ONE,[bE]:o.SRC_COLOR,[zh]:o.SRC_ALPHA,[NE]:o.SRC_ALPHA_SATURATE,[RE]:o.DST_COLOR,[AE]:o.DST_ALPHA,[TE]:o.ONE_MINUS_SRC_COLOR,[Ph]:o.ONE_MINUS_SRC_ALPHA,[CE]:o.ONE_MINUS_DST_COLOR,[wE]:o.ONE_MINUS_DST_ALPHA,[DE]:o.CONSTANT_COLOR,[UE]:o.ONE_MINUS_CONSTANT_COLOR,[LE]:o.CONSTANT_ALPHA,[OE]:o.ONE_MINUS_CONSTANT_ALPHA};function B(k,Pt,ht,_t,It,Ft,oe,Ke,vn,be){if(k===or){N===!0&&(Tt(o.BLEND),N=!1);return}if(N===!1&&(ot(o.BLEND),N=!0),k!==vE){if(k!==M||be!==D){if((_!==Vr||U!==Vr)&&(o.blendEquation(o.FUNC_ADD),_=Vr,U=Vr),be)switch(k){case Qs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Oh:o.blendFunc(o.ONE,o.ONE);break;case ex:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nx:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Qs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Oh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ex:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nx:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,I=null,W=null,j=null,P.set(0,0,0),G=0,M=k,D=be}return}It=It||Pt,Ft=Ft||ht,oe=oe||_t,(Pt!==_||It!==U)&&(o.blendEquationSeparate(At[Pt],At[It]),_=Pt,U=It),(ht!==O||_t!==I||Ft!==W||oe!==j)&&(o.blendFuncSeparate(Zt[ht],Zt[_t],Zt[Ft],Zt[oe]),O=ht,I=_t,W=Ft,j=oe),(Ke.equals(P)===!1||vn!==G)&&(o.blendColor(Ke.r,Ke.g,Ke.b,vn),P.copy(Ke),G=vn),M=k,D=!1}function ke(k,Pt){k.side===va?Tt(o.CULL_FACE):ot(o.CULL_FACE);let ht=k.side===Kn;Pt&&(ht=!ht),Qt(ht),k.blending===Qs&&k.transparent===!1?B(or):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),f.setMask(k.colorWrite);const _t=k.stencilWrite;h.setTest(_t),_t&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),de(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Xt(k){k!==pE?(ot(o.CULL_FACE),k!==F&&(k===tx?o.cullFace(o.BACK):k===mE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),F=k}function Rt(k){k!==ft&&(X&&o.lineWidth(k),ft=k)}function de(k,Pt,ht){k?(ot(o.POLYGON_OFFSET_FILL),(it!==Pt||at!==ht)&&(o.polygonOffset(Pt,ht),it=Pt,at=ht)):Tt(o.POLYGON_OFFSET_FILL)}function qt(k){k?ot(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+dt-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function A(k,Pt,ht){ht===void 0&&(Mt===null?ht=o.TEXTURE0+dt-1:ht=Mt);let _t=Et[ht];_t===void 0&&(_t={type:void 0,texture:void 0},Et[ht]=_t),(_t.type!==k||_t.texture!==Pt)&&(Mt!==ht&&(o.activeTexture(ht),Mt=ht),o.bindTexture(k,Pt||ct[k]),_t.type=k,_t.texture=Pt)}function et(){const k=Et[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function xt(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(k){Ht.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Ht.copy(k))}function jt(k){w.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),w.copy(k))}function me(k,Pt){let ht=v.get(Pt);ht===void 0&&(ht=new WeakMap,v.set(Pt,ht));let _t=ht.get(k);_t===void 0&&(_t=o.getUniformBlockIndex(Pt,k.name),ht.set(k,_t))}function le(k,Pt){const _t=v.get(Pt).get(k);p.get(Pt)!==_t&&(o.uniformBlockBinding(Pt,_t,k.__bindingPointIndex),p.set(Pt,_t))}function Ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Mt=null,Et={},m={},S=new WeakMap,E=[],T=null,N=!1,M=null,_=null,O=null,I=null,U=null,W=null,j=null,P=new Le(0,0,0),G=0,D=!1,C=null,F=null,ft=null,it=null,at=null,Ht.set(0,0,o.canvas.width,o.canvas.height),w.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ot,disable:Tt,bindFramebuffer:Dt,drawBuffers:vt,useProgram:St,setBlending:B,setMaterial:ke,setFlipSided:Qt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:de,setScissorTest:qt,activeTexture:L,bindTexture:A,unbindTexture:et,compressedTexImage2D:xt,compressedTexImage3D:yt,texImage2D:kt,texImage3D:ne,updateUBOMapping:me,uniformBlockBinding:le,texStorage2D:ge,texStorage3D:wt,texSubImage2D:gt,texSubImage3D:Yt,compressedTexSubImage2D:zt,compressedTexSubImage3D:Bt,scissor:ae,viewport:jt,reset:Ie}}function mw(o,n,a,s,c,f,d){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new He,x=new WeakMap;let m;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,A){return E?new OffscreenCanvas(L,A):xu("canvas")}function N(L,A,et){let xt=1;const yt=qt(L);if((yt.width>et||yt.height>et)&&(xt=et/Math.max(yt.width,yt.height)),xt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const gt=Math.floor(xt*yt.width),Yt=Math.floor(xt*yt.height);m===void 0&&(m=T(gt,Yt));const zt=A?T(gt,Yt):m;return zt.width=gt,zt.height=Yt,zt.getContext("2d").drawImage(L,0,0,gt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+gt+"x"+Yt+")."),zt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(L,A,et,xt,yt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=A;if(A===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8)),A===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),A===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8)),A===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),A===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),A===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),A===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),A===o.RGBA){const Yt=yt?gu:Ne.getTransfer(xt);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=Yt===Fe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&n.get("EXT_color_buffer_float"),gt}function U(L,A){let et;return L?A===null||A===Wr||A===io?et=o.DEPTH24_STENCIL8:A===xa?et=o.DEPTH32F_STENCIL8:A===cl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Wr||A===io?et=o.DEPTH_COMPONENT24:A===xa?et=o.DEPTH_COMPONENT32F:A===cl&&(et=o.DEPTH_COMPONENT16),et}function W(L,A){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ui&&L.minFilter!==qi?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function j(L){const A=L.target;A.removeEventListener("dispose",j),G(A),A.isVideoTexture&&x.delete(A)}function P(L){const A=L.target;A.removeEventListener("dispose",P),C(A)}function G(L){const A=s.get(L);if(A.__webglInit===void 0)return;const et=L.source,xt=S.get(et);if(xt){const yt=xt[A.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(L),Object.keys(xt).length===0&&S.delete(et)}s.remove(L)}function D(L){const A=s.get(L);o.deleteTexture(A.__webglTexture);const et=L.source,xt=S.get(et);delete xt[A.__cacheKey],d.memory.textures--}function C(L){const A=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(A.__webglFramebuffer[xt]))for(let yt=0;yt<A.__webglFramebuffer[xt].length;yt++)o.deleteFramebuffer(A.__webglFramebuffer[xt][yt]);else o.deleteFramebuffer(A.__webglFramebuffer[xt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[xt])}else{if(Array.isArray(A.__webglFramebuffer))for(let xt=0;xt<A.__webglFramebuffer.length;xt++)o.deleteFramebuffer(A.__webglFramebuffer[xt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xt=0;xt<A.__webglColorRenderbuffer.length;xt++)A.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[xt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=L.textures;for(let xt=0,yt=et.length;xt<yt;xt++){const gt=s.get(et[xt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),d.memory.textures--),s.remove(et[xt])}s.remove(L)}let F=0;function ft(){F=0}function it(){const L=F;return L>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c.maxTextures),F+=1,L}function at(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function dt(L,A){const et=s.get(L);if(L.isVideoTexture&&Rt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const xt=L.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{w(et,L,A);return}}a.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+A)}function X(L,A){const et=s.get(L);if(L.version>0&&et.__version!==L.version){w(et,L,A);return}a.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+A)}function rt(L,A){const et=s.get(L);if(L.version>0&&et.__version!==L.version){w(et,L,A);return}a.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+A)}function Q(L,A){const et=s.get(L);if(L.version>0&&et.__version!==L.version){V(et,L,A);return}a.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+A)}const Mt={[qh]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[Yh]:o.MIRRORED_REPEAT},Et={[Ui]:o.NEAREST,[kE]:o.NEAREST_MIPMAP_NEAREST,[Hc]:o.NEAREST_MIPMAP_LINEAR,[qi]:o.LINEAR,[nh]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},Gt={[ZE]:o.NEVER,[eb]:o.ALWAYS,[KE]:o.LESS,[g_]:o.LEQUAL,[QE]:o.EQUAL,[tb]:o.GEQUAL,[JE]:o.GREATER,[$E]:o.NOTEQUAL};function ee(L,A){if(A.type===xa&&n.has("OES_texture_float_linear")===!1&&(A.magFilter===qi||A.magFilter===nh||A.magFilter===Hc||A.magFilter===qr||A.minFilter===qi||A.minFilter===nh||A.minFilter===Hc||A.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Mt[A.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Mt[A.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Mt[A.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Et[A.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Et[A.minFilter]),A.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Gt[A.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ui||A.minFilter!==Hc&&A.minFilter!==qr||A.type===xa&&n.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const et=n.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,c.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Ht(L,A){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",j));const xt=A.source;let yt=S.get(xt);yt===void 0&&(yt={},S.set(xt,yt));const gt=at(A);if(gt!==L.__cacheKey){yt[gt]===void 0&&(yt[gt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),yt[gt].usedTimes++;const Yt=yt[L.__cacheKey];Yt!==void 0&&(yt[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(A)),L.__cacheKey=gt,L.__webglTexture=yt[gt].texture}return et}function w(L,A,et){let xt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xt=o.TEXTURE_3D);const yt=Ht(L,A),gt=A.source;a.bindTexture(xt,L.__webglTexture,o.TEXTURE0+et);const Yt=s.get(gt);if(gt.version!==Yt.__version||yt===!0){a.activeTexture(o.TEXTURE0+et);const zt=Ne.getPrimaries(Ne.workingColorSpace),Bt=A.colorSpace===sr?null:Ne.getPrimaries(A.colorSpace),ge=A.colorSpace===sr||zt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let wt=N(A.image,!1,c.maxTextureSize);wt=de(A,wt);const kt=f.convert(A.format,A.colorSpace),ne=f.convert(A.type);let ae=I(A.internalFormat,kt,ne,A.colorSpace,A.isVideoTexture);ee(xt,A);let jt;const me=A.mipmaps,le=A.isVideoTexture!==!0,Ie=Yt.__version===void 0||yt===!0,k=gt.dataReady,Pt=W(A,wt);if(A.isDepthTexture)ae=U(A.format===ao,A.type),Ie&&(le?a.texStorage2D(o.TEXTURE_2D,1,ae,wt.width,wt.height):a.texImage2D(o.TEXTURE_2D,0,ae,wt.width,wt.height,0,kt,ne,null));else if(A.isDataTexture)if(me.length>0){le&&Ie&&a.texStorage2D(o.TEXTURE_2D,Pt,ae,me[0].width,me[0].height);for(let ht=0,_t=me.length;ht<_t;ht++)jt=me[ht],le?k&&a.texSubImage2D(o.TEXTURE_2D,ht,0,0,jt.width,jt.height,kt,ne,jt.data):a.texImage2D(o.TEXTURE_2D,ht,ae,jt.width,jt.height,0,kt,ne,jt.data);A.generateMipmaps=!1}else le?(Ie&&a.texStorage2D(o.TEXTURE_2D,Pt,ae,wt.width,wt.height),k&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,wt.width,wt.height,kt,ne,wt.data)):a.texImage2D(o.TEXTURE_2D,0,ae,wt.width,wt.height,0,kt,ne,wt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&Ie&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,ae,me[0].width,me[0].height,wt.depth);for(let ht=0,_t=me.length;ht<_t;ht++)if(jt=me[ht],A.format!==Di)if(kt!==null)if(le){if(k)if(A.layerUpdates.size>0){const It=Rx(jt.width,jt.height,A.format,A.type);for(const Ft of A.layerUpdates){const oe=jt.data.subarray(Ft*It/jt.data.BYTES_PER_ELEMENT,(Ft+1)*It/jt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,Ft,jt.width,jt.height,1,kt,oe)}A.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,jt.width,jt.height,wt.depth,kt,jt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,ae,jt.width,jt.height,wt.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?k&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,jt.width,jt.height,wt.depth,kt,ne,jt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,ht,ae,jt.width,jt.height,wt.depth,0,kt,ne,jt.data)}else{le&&Ie&&a.texStorage2D(o.TEXTURE_2D,Pt,ae,me[0].width,me[0].height);for(let ht=0,_t=me.length;ht<_t;ht++)jt=me[ht],A.format!==Di?kt!==null?le?k&&a.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,jt.width,jt.height,kt,jt.data):a.compressedTexImage2D(o.TEXTURE_2D,ht,ae,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?k&&a.texSubImage2D(o.TEXTURE_2D,ht,0,0,jt.width,jt.height,kt,ne,jt.data):a.texImage2D(o.TEXTURE_2D,ht,ae,jt.width,jt.height,0,kt,ne,jt.data)}else if(A.isDataArrayTexture)if(le){if(Ie&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,ae,wt.width,wt.height,wt.depth),k)if(A.layerUpdates.size>0){const ht=Rx(wt.width,wt.height,A.format,A.type);for(const _t of A.layerUpdates){const It=wt.data.subarray(_t*ht/wt.data.BYTES_PER_ELEMENT,(_t+1)*ht/wt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,wt.width,wt.height,1,kt,ne,It)}A.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,kt,ne,wt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,ae,wt.width,wt.height,wt.depth,0,kt,ne,wt.data);else if(A.isData3DTexture)le?(Ie&&a.texStorage3D(o.TEXTURE_3D,Pt,ae,wt.width,wt.height,wt.depth),k&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,kt,ne,wt.data)):a.texImage3D(o.TEXTURE_3D,0,ae,wt.width,wt.height,wt.depth,0,kt,ne,wt.data);else if(A.isFramebufferTexture){if(Ie)if(le)a.texStorage2D(o.TEXTURE_2D,Pt,ae,wt.width,wt.height);else{let ht=wt.width,_t=wt.height;for(let It=0;It<Pt;It++)a.texImage2D(o.TEXTURE_2D,It,ae,ht,_t,0,kt,ne,null),ht>>=1,_t>>=1}}else if(me.length>0){if(le&&Ie){const ht=qt(me[0]);a.texStorage2D(o.TEXTURE_2D,Pt,ae,ht.width,ht.height)}for(let ht=0,_t=me.length;ht<_t;ht++)jt=me[ht],le?k&&a.texSubImage2D(o.TEXTURE_2D,ht,0,0,kt,ne,jt):a.texImage2D(o.TEXTURE_2D,ht,ae,kt,ne,jt);A.generateMipmaps=!1}else if(le){if(Ie){const ht=qt(wt);a.texStorage2D(o.TEXTURE_2D,Pt,ae,ht.width,ht.height)}k&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,kt,ne,wt)}else a.texImage2D(o.TEXTURE_2D,0,ae,kt,ne,wt);M(A)&&_(xt),Yt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function V(L,A,et){if(A.image.length!==6)return;const xt=Ht(L,A),yt=A.source;a.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const gt=s.get(yt);if(yt.version!==gt.__version||xt===!0){a.activeTexture(o.TEXTURE0+et);const Yt=Ne.getPrimaries(Ne.workingColorSpace),zt=A.colorSpace===sr?null:Ne.getPrimaries(A.colorSpace),Bt=A.colorSpace===sr||Yt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const ge=A.isCompressedTexture||A.image[0].isCompressedTexture,wt=A.image[0]&&A.image[0].isDataTexture,kt=[];for(let _t=0;_t<6;_t++)!ge&&!wt?kt[_t]=N(A.image[_t],!0,c.maxCubemapSize):kt[_t]=wt?A.image[_t].image:A.image[_t],kt[_t]=de(A,kt[_t]);const ne=kt[0],ae=f.convert(A.format,A.colorSpace),jt=f.convert(A.type),me=I(A.internalFormat,ae,jt,A.colorSpace),le=A.isVideoTexture!==!0,Ie=gt.__version===void 0||xt===!0,k=yt.dataReady;let Pt=W(A,ne);ee(o.TEXTURE_CUBE_MAP,A);let ht;if(ge){le&&Ie&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,me,ne.width,ne.height);for(let _t=0;_t<6;_t++){ht=kt[_t].mipmaps;for(let It=0;It<ht.length;It++){const Ft=ht[It];A.format!==Di?ae!==null?le?k&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,Ft.width,Ft.height,ae,Ft.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,me,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,Ft.width,Ft.height,ae,jt,Ft.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,me,Ft.width,Ft.height,0,ae,jt,Ft.data)}}}else{if(ht=A.mipmaps,le&&Ie){ht.length>0&&Pt++;const _t=qt(kt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,me,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(wt){le?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt[_t].width,kt[_t].height,ae,jt,kt[_t].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,me,kt[_t].width,kt[_t].height,0,ae,jt,kt[_t].data);for(let It=0;It<ht.length;It++){const oe=ht[It].image[_t].image;le?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,oe.width,oe.height,ae,jt,oe.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,me,oe.width,oe.height,0,ae,jt,oe.data)}}else{le?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ae,jt,kt[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,me,ae,jt,kt[_t]);for(let It=0;It<ht.length;It++){const Ft=ht[It];le?k&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,ae,jt,Ft.image[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,me,ae,jt,Ft.image[_t])}}}M(A)&&_(o.TEXTURE_CUBE_MAP),gt.__version=yt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ct(L,A,et,xt,yt,gt){const Yt=f.convert(et.format,et.colorSpace),zt=f.convert(et.type),Bt=I(et.internalFormat,Yt,zt,et.colorSpace),ge=s.get(A),wt=s.get(et);if(wt.__renderTarget=A,!ge.__hasExternalTextures){const kt=Math.max(1,A.width>>gt),ne=Math.max(1,A.height>>gt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?a.texImage3D(yt,gt,Bt,kt,ne,A.depth,0,Yt,zt,null):a.texImage2D(yt,gt,Bt,kt,ne,0,Yt,zt,null)}a.bindFramebuffer(o.FRAMEBUFFER,L),Xt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,yt,wt.__webglTexture,0,Qt(A)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,yt,wt.__webglTexture,gt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function ot(L,A,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),A.depthBuffer){const xt=A.depthTexture,yt=xt&&xt.isDepthTexture?xt.type:null,gt=U(A.stencilBuffer,yt),Yt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=Qt(A);Xt(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,zt,gt,A.width,A.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,gt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,gt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,L)}else{const xt=A.textures;for(let yt=0;yt<xt.length;yt++){const gt=xt[yt],Yt=f.convert(gt.format,gt.colorSpace),zt=f.convert(gt.type),Bt=I(gt.internalFormat,Yt,zt,gt.colorSpace),ge=Qt(A);et&&Xt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge,Bt,A.width,A.height):Xt(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge,Bt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(A.depthTexture);xt.__renderTarget=A,(!xt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),dt(A.depthTexture,0);const yt=xt.__webglTexture,gt=Qt(A);if(A.depthTexture.format===Js)Xt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(A.depthTexture.format===ao)Xt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Dt(L){const A=s.get(L),et=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const xt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xt){const yt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xt.removeEventListener("dispose",yt)};xt.addEventListener("dispose",yt),A.__depthDisposeCallback=yt}A.__boundDepthTexture=xt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Tt(A.__webglFramebuffer,L)}else if(et){A.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(a.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[xt]),A.__webglDepthbuffer[xt]===void 0)A.__webglDepthbuffer[xt]=o.createRenderbuffer(),ot(A.__webglDepthbuffer[xt],L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,gt)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ot(A.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,yt)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(L,A,et){const xt=s.get(L);A!==void 0&&ct(xt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Dt(L)}function St(L){const A=L.texture,et=s.get(L),xt=s.get(A);L.addEventListener("dispose",P);const yt=L.textures,gt=L.isWebGLCubeRenderTarget===!0,Yt=yt.length>1;if(Yt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=A.version,d.memory.textures++),gt){et.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[zt]=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)et.__webglFramebuffer[zt][Bt]=o.createFramebuffer()}else et.__webglFramebuffer[zt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let zt=0;zt<A.mipmaps.length;zt++)et.__webglFramebuffer[zt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let zt=0,Bt=yt.length;zt<Bt;zt++){const ge=s.get(yt[zt]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Xt(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let zt=0;zt<yt.length;zt++){const Bt=yt[zt];et.__webglColorRenderbuffer[zt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[zt]);const ge=f.convert(Bt.format,Bt.colorSpace),wt=f.convert(Bt.type),kt=I(Bt.internalFormat,ge,wt,Bt.colorSpace,L.isXRRenderTarget===!0),ne=Qt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,kt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,et.__webglColorRenderbuffer[zt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),ot(et.__webglDepthRenderbuffer,L,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){a.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),ee(o.TEXTURE_CUBE_MAP,A);for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)ct(et.__webglFramebuffer[zt][Bt],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Bt);else ct(et.__webglFramebuffer[zt],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);M(A)&&_(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Yt){for(let zt=0,Bt=yt.length;zt<Bt;zt++){const ge=yt[zt],wt=s.get(ge);a.bindTexture(o.TEXTURE_2D,wt.__webglTexture),ee(o.TEXTURE_2D,ge),ct(et.__webglFramebuffer,L,ge,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,0),M(ge)&&_(o.TEXTURE_2D)}a.unbindTexture()}else{let zt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(zt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(zt,xt.__webglTexture),ee(zt,A),A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)ct(et.__webglFramebuffer[Bt],L,A,o.COLOR_ATTACHMENT0,zt,Bt);else ct(et.__webglFramebuffer,L,A,o.COLOR_ATTACHMENT0,zt,0);M(A)&&_(zt),a.unbindTexture()}L.depthBuffer&&Dt(L)}function At(L){const A=L.textures;for(let et=0,xt=A.length;et<xt;et++){const yt=A[et];if(M(yt)){const gt=O(L),Yt=s.get(yt).__webglTexture;a.bindTexture(gt,Yt),_(gt),a.unbindTexture()}}}const Zt=[],B=[];function ke(L){if(L.samples>0){if(Xt(L)===!1){const A=L.textures,et=L.width,xt=L.height;let yt=o.COLOR_BUFFER_BIT;const gt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=s.get(L),zt=A.length>1;if(zt)for(let Bt=0;Bt<A.length;Bt++)a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),zt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Bt]);const ge=s.get(A[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ge,0)}o.blitFramebuffer(0,0,et,xt,0,0,et,xt,yt,o.NEAREST),p===!0&&(Zt.length=0,B.length=0,Zt.push(o.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Zt.push(gt),B.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Zt))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),zt)for(let Bt=0;Bt<A.length;Bt++){a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Bt]);const ge=s.get(A[Bt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,ge,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Qt(L){return Math.min(c.maxSamples,L.samples)}function Xt(L){const A=s.get(L);return L.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Rt(L){const A=d.render.frame;x.get(L)!==A&&(x.set(L,A),L.update())}function de(L,A){const et=L.colorSpace,xt=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==ro&&et!==sr&&(Ne.getTransfer(et)===Fe?(xt!==Di||yt!==Ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),A}function qt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(v.width=L.naturalWidth||L.width,v.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(v.width=L.displayWidth,v.height=L.displayHeight):(v.width=L.width,v.height=L.height),v}this.allocateTextureUnit=it,this.resetTextureUnits=ft,this.setTexture2D=dt,this.setTexture2DArray=X,this.setTexture3D=rt,this.setTextureCube=Q,this.rebindTextures=vt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Xt}function gw(o,n){function a(s,c=sr){let f;const d=Ne.getTransfer(c);if(s===Ma)return o.UNSIGNED_BYTE;if(s===wp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Rp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===l_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===s_)return o.BYTE;if(s===o_)return o.SHORT;if(s===cl)return o.UNSIGNED_SHORT;if(s===Ap)return o.INT;if(s===Wr)return o.UNSIGNED_INT;if(s===xa)return o.FLOAT;if(s===fl)return o.HALF_FLOAT;if(s===c_)return o.ALPHA;if(s===u_)return o.RGB;if(s===Di)return o.RGBA;if(s===f_)return o.LUMINANCE;if(s===d_)return o.LUMINANCE_ALPHA;if(s===Js)return o.DEPTH_COMPONENT;if(s===ao)return o.DEPTH_STENCIL;if(s===h_)return o.RED;if(s===Cp)return o.RED_INTEGER;if(s===p_)return o.RG;if(s===Np)return o.RG_INTEGER;if(s===Dp)return o.RGBA_INTEGER;if(s===uu||s===fu||s===du||s===hu)if(d===Fe)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===uu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===uu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wh||s===Zh||s===Kh||s===Qh)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Wh)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zh)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kh)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qh)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jh||s===$h||s===tp)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Jh||s===$h)return d===Fe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===tp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===cp||s===up||s===fp||s===dp||s===hp||s===pp)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===ep)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===np)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ip)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ap)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===op)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===up)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pu||s===mp||s===gp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===pu)return d===Fe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===m_||s===vp||s===xp||s===_p)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===pu)return f.COMPRESSED_RED_RGTC1_EXT;if(s===vp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_p)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===io?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xw=`
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

}`;class _w{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a,s){if(this.texture===null){const c=new jn,f=n.properties.get(c);f.__webglTexture=a.texture,(a.depthNear!==s.depthNear||a.depthFar!==s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new ur({vertexShader:vw,fragmentShader:xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ya(new Su(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yw extends oo{constructor(n,a){super();const s=this;let c=null,f=1,d=null,h="local-floor",p=1,v=null,x=null,m=null,S=null,E=null,T=null;const N=new _w,M=a.getContextAttributes();let _=null,O=null;const I=[],U=[],W=new He;let j=null;const P=new _i;P.viewport=new rn;const G=new _i;G.viewport=new rn;const D=[P,G],C=new Fb;let F=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let V=I[w];return V===void 0&&(V=new bh,I[w]=V),V.getTargetRaySpace()},this.getControllerGrip=function(w){let V=I[w];return V===void 0&&(V=new bh,I[w]=V),V.getGripSpace()},this.getHand=function(w){let V=I[w];return V===void 0&&(V=new bh,I[w]=V),V.getHandSpace()};function it(w){const V=U.indexOf(w.inputSource);if(V===-1)return;const ct=I[V];ct!==void 0&&(ct.update(w.inputSource,w.frame,v||d),ct.dispatchEvent({type:w.type,data:w.inputSource}))}function at(){c.removeEventListener("select",it),c.removeEventListener("selectstart",it),c.removeEventListener("selectend",it),c.removeEventListener("squeeze",it),c.removeEventListener("squeezestart",it),c.removeEventListener("squeezeend",it),c.removeEventListener("end",at),c.removeEventListener("inputsourceschange",dt);for(let w=0;w<I.length;w++){const V=U[w];V!==null&&(U[w]=null,I[w].disconnect(V))}F=null,ft=null,N.reset(),n.setRenderTarget(_),E=null,S=null,m=null,c=null,O=null,Ht.stop(),s.isPresenting=!1,n.setPixelRatio(j),n.setSize(W.width,W.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){f=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){h=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||d},this.setReferenceSpace=function(w){v=w},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return m},this.getFrame=function(){return T},this.getSession=function(){return c},this.setSession=async function(w){if(c=w,c!==null){if(_=n.getRenderTarget(),c.addEventListener("select",it),c.addEventListener("selectstart",it),c.addEventListener("selectend",it),c.addEventListener("squeeze",it),c.addEventListener("squeezestart",it),c.addEventListener("squeezeend",it),c.addEventListener("end",at),c.addEventListener("inputsourceschange",dt),M.xrCompatible!==!0&&await a.makeXRCompatible(),j=n.getPixelRatio(),n.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,ot=null,Tt=null;M.depth&&(Tt=M.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,ct=M.stencil?ao:Js,ot=M.stencil?io:Wr);const Dt={colorFormat:a.RGBA8,depthFormat:Tt,scaleFactor:f};m=new XRWebGLBinding(c,a),S=m.createProjectionLayer(Dt),c.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),O=new Zr(S.textureWidth,S.textureHeight,{format:Di,type:Ma,depthTexture:new R_(S.textureWidth,S.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:n.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(c,a,ct),c.updateRenderState({baseLayer:E}),n.setPixelRatio(1),n.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Zr(E.framebufferWidth,E.framebufferHeight,{format:Di,type:Ma,colorSpace:n.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),v=null,d=await c.requestReferenceSpace(h),Ht.setContext(c),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return N.getDepthTexture()};function dt(w){for(let V=0;V<w.removed.length;V++){const ct=w.removed[V],ot=U.indexOf(ct);ot>=0&&(U[ot]=null,I[ot].disconnect(ct))}for(let V=0;V<w.added.length;V++){const ct=w.added[V];let ot=U.indexOf(ct);if(ot===-1){for(let Dt=0;Dt<I.length;Dt++)if(Dt>=U.length){U.push(ct),ot=Dt;break}else if(U[Dt]===null){U[Dt]=ct,ot=Dt;break}if(ot===-1)break}const Tt=I[ot];Tt&&Tt.connect(ct)}}const X=new ut,rt=new ut;function Q(w,V,ct){X.setFromMatrixPosition(V.matrixWorld),rt.setFromMatrixPosition(ct.matrixWorld);const ot=X.distanceTo(rt),Tt=V.projectionMatrix.elements,Dt=ct.projectionMatrix.elements,vt=Tt[14]/(Tt[10]-1),St=Tt[14]/(Tt[10]+1),At=(Tt[9]+1)/Tt[5],Zt=(Tt[9]-1)/Tt[5],B=(Tt[8]-1)/Tt[0],ke=(Dt[8]+1)/Dt[0],Qt=vt*B,Xt=vt*ke,Rt=ot/(-B+ke),de=Rt*-B;if(V.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(de),w.translateZ(Rt),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),Tt[10]===-1)w.projectionMatrix.copy(V.projectionMatrix),w.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const qt=vt+Rt,L=St+Rt,A=Qt-de,et=Xt+(ot-de),xt=At*St/L*qt,yt=Zt*St/L*qt;w.projectionMatrix.makePerspective(A,et,xt,yt,qt,L),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function Mt(w,V){V===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(V.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(c===null)return;let V=w.near,ct=w.far;N.texture!==null&&(N.depthNear>0&&(V=N.depthNear),N.depthFar>0&&(ct=N.depthFar)),C.near=G.near=P.near=V,C.far=G.far=P.far=ct,(F!==C.near||ft!==C.far)&&(c.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,ft=C.far),P.layers.mask=w.layers.mask|2,G.layers.mask=w.layers.mask|4,C.layers.mask=P.layers.mask|G.layers.mask;const ot=w.parent,Tt=C.cameras;Mt(C,ot);for(let Dt=0;Dt<Tt.length;Dt++)Mt(Tt[Dt],ot);Tt.length===2?Q(C,P,G):C.projectionMatrix.copy(P.projectionMatrix),Et(w,C,ot)};function Et(w,V,ct){ct===null?w.matrix.copy(V.matrixWorld):(w.matrix.copy(ct.matrixWorld),w.matrix.invert(),w.matrix.multiply(V.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(V.projectionMatrix),w.projectionMatrixInverse.copy(V.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=yp*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&E===null))return p},this.setFoveation=function(w){p=w,S!==null&&(S.fixedFoveation=w),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=w)},this.hasDepthSensing=function(){return N.texture!==null},this.getDepthSensingMesh=function(){return N.getMesh(C)};let Gt=null;function ee(w,V){if(x=V.getViewerPose(v||d),T=V,x!==null){const ct=x.views;E!==null&&(n.setRenderTargetFramebuffer(O,E.framebuffer),n.setRenderTarget(O));let ot=!1;ct.length!==C.cameras.length&&(C.cameras.length=0,ot=!0);for(let vt=0;vt<ct.length;vt++){const St=ct[vt];let At=null;if(E!==null)At=E.getViewport(St);else{const B=m.getViewSubImage(S,St);At=B.viewport,vt===0&&(n.setRenderTargetTextures(O,B.colorTexture,S.ignoreDepthValues?void 0:B.depthStencilTexture),n.setRenderTarget(O))}let Zt=D[vt];Zt===void 0&&(Zt=new _i,Zt.layers.enable(vt),Zt.viewport=new rn,D[vt]=Zt),Zt.matrix.fromArray(St.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(St.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(At.x,At.y,At.width,At.height),vt===0&&(C.matrix.copy(Zt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ot===!0&&C.cameras.push(Zt)}const Tt=c.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&m){const vt=m.getDepthInformation(ct[0]);vt&&vt.isValid&&vt.texture&&N.init(n,vt,c.renderState)}}for(let ct=0;ct<I.length;ct++){const ot=U[ct],Tt=I[ct];ot!==null&&Tt!==void 0&&Tt.update(ot,V,v||d)}Gt&&Gt(w,V),V.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:V}),T=null}const Ht=new C_;Ht.setAnimationLoop(ee),this.setAnimationLoop=function(w){Gt=w},this.dispose=function(){}}}const Fr=new Ea,Sw=new nn;function Mw(o,n){function a(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,E_(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function c(M,_,O,I,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?f(M,_):_.isMeshToonMaterial?(f(M,_),m(M,_)):_.isMeshPhongMaterial?(f(M,_),x(M,_)):_.isMeshStandardMaterial?(f(M,_),S(M,_),_.isMeshPhysicalMaterial&&E(M,_,U)):_.isMeshMatcapMaterial?(f(M,_),T(M,_)):_.isMeshDepthMaterial?f(M,_):_.isMeshDistanceMaterial?(f(M,_),N(M,_)):_.isMeshNormalMaterial?f(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?p(M,_,O,I):_.isSpriteMaterial?v(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function f(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,a(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,a(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,a(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,a(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,a(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,a(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,a(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const O=n.get(_),I=O.envMap,U=O.envMapRotation;I&&(M.envMap.value=I,Fr.copy(U),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),M.envMapRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(Fr)),M.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,a(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,a(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,a(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,O,I){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*O,M.scale.value=I*.5,_.map&&(M.map.value=_.map,a(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,a(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,a(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,a(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function m(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,a(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,a(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function E(M,_,O){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,a(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,a(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,a(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,a(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,a(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,a(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,a(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,a(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,a(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,a(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,a(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,a(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function N(M,_){const O=n.get(_).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function Ew(o,n,a,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,I){const U=I.program;s.uniformBlockBinding(O,U)}function v(O,I){let U=c[O.id];U===void 0&&(T(O),U=x(O),c[O.id]=U,O.addEventListener("dispose",M));const W=I.program;s.updateUBOMapping(O,W);const j=n.render.frame;f[O.id]!==j&&(S(O),f[O.id]=j)}function x(O){const I=m();O.__bindingPointIndex=I;const U=o.createBuffer(),W=O.__size,j=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,W,j),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,U),U}function m(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const I=c[O.id],U=O.uniforms,W=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let j=0,P=U.length;j<P;j++){const G=Array.isArray(U[j])?U[j]:[U[j]];for(let D=0,C=G.length;D<C;D++){const F=G[D];if(E(F,j,D,W)===!0){const ft=F.__offset,it=Array.isArray(F.value)?F.value:[F.value];let at=0;for(let dt=0;dt<it.length;dt++){const X=it[dt],rt=N(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,ft+at,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,at),at+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ft,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(O,I,U,W){const j=O.value,P=I+"_"+U;if(W[P]===void 0)return typeof j=="number"||typeof j=="boolean"?W[P]=j:W[P]=j.clone(),!0;{const G=W[P];if(typeof j=="number"||typeof j=="boolean"){if(G!==j)return W[P]=j,!0}else if(G.equals(j)===!1)return G.copy(j),!0}return!1}function T(O){const I=O.uniforms;let U=0;const W=16;for(let P=0,G=I.length;P<G;P++){const D=Array.isArray(I[P])?I[P]:[I[P]];for(let C=0,F=D.length;C<F;C++){const ft=D[C],it=Array.isArray(ft.value)?ft.value:[ft.value];for(let at=0,dt=it.length;at<dt;at++){const X=it[at],rt=N(X),Q=U%W,Mt=Q%rt.boundary,Et=Q+Mt;U+=Mt,Et!==0&&W-Et<rt.storage&&(U+=W-Et),ft.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=U,U+=rt.storage}}}const j=U%W;return j>0&&(U+=W-j),O.__size=U,O.__cache={},this}function N(O){const I={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(I.boundary=4,I.storage=4):O.isVector2?(I.boundary=8,I.storage=8):O.isVector3||O.isColor?(I.boundary=16,I.storage=12):O.isVector4?(I.boundary=16,I.storage=16):O.isMatrix3?(I.boundary=48,I.storage=48):O.isMatrix4?(I.boundary=64,I.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),I}function M(O){const I=O.target;I.removeEventListener("dispose",M);const U=d.indexOf(I.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(c[I.id]),delete c[I.id],delete f[I.id]}function _(){for(const O in c)o.deleteBuffer(c[O]);d=[],c={},f={}}return{bind:p,update:v,dispose:_}}class bw{constructor(n={}){const{canvas:a=ib(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:v=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const T=new Uint32Array(4),N=new Int32Array(4);let M=null,_=null;const O=[],I=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=lr,this.toneMappingExposure=1;const U=this;let W=!1,j=0,P=0,G=null,D=-1,C=null;const F=new rn,ft=new rn;let it=null;const at=new Le(0);let dt=0,X=a.width,rt=a.height,Q=1,Mt=null,Et=null;const Gt=new rn(0,0,X,rt),ee=new rn(0,0,X,rt);let Ht=!1;const w=new A_;let V=!1,ct=!1;this.transmissionResolutionScale=1;const ot=new nn,Tt=new nn,Dt=new ut,vt=new rn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Zt(){return G===null?Q:1}let B=s;function ke(R,K){return a.getContext(R,K)}try{const R={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:v,powerPreference:x,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Tp}`),a.addEventListener("webglcontextlost",_t,!1),a.addEventListener("webglcontextrestored",It,!1),a.addEventListener("webglcontextcreationerror",Ft,!1),B===null){const K="webgl2";if(B=ke(K,R),B===null)throw ke(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Qt,Xt,Rt,de,qt,L,A,et,xt,yt,gt,Yt,zt,Bt,ge,wt,kt,ne,ae,jt,me,le,Ie,k;function Pt(){Qt=new OA(B),Qt.init(),le=new gw(B,Qt),Xt=new wA(B,Qt,n,le),Rt=new pw(B,Qt),Xt.reverseDepthBuffer&&S&&Rt.buffers.depth.setReversed(!0),de=new IA(B),qt=new ew,L=new mw(B,Qt,Rt,qt,Xt,le,de),A=new CA(U),et=new LA(U),xt=new jb(B),Ie=new TA(B,xt),yt=new zA(B,xt,de,Ie),gt=new FA(B,yt,xt,de),ae=new BA(B,Xt,L),wt=new RA(qt),Yt=new tw(U,A,et,Qt,Xt,Ie,wt),zt=new Mw(U,qt),Bt=new iw,ge=new cw(Qt),ne=new bA(U,A,et,Rt,gt,E,p),kt=new dw(U,gt,Xt),k=new Ew(B,de,Xt,Rt),jt=new AA(B,Qt,de),me=new PA(B,Qt,de),de.programs=Yt.programs,U.capabilities=Xt,U.extensions=Qt,U.properties=qt,U.renderLists=Bt,U.shadowMap=kt,U.state=Rt,U.info=de}Pt();const ht=new yw(U,B);this.xr=ht,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(X,rt,!1))},this.getSize=function(R){return R.set(X,rt)},this.setSize=function(R,K,st=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,rt=K,a.width=Math.floor(R*Q),a.height=Math.floor(K*Q),st===!0&&(a.style.width=R+"px",a.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(X*Q,rt*Q).floor()},this.setDrawingBufferSize=function(R,K,st){X=R,rt=K,Q=st,a.width=Math.floor(R*st),a.height=Math.floor(K*st),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Gt)},this.setViewport=function(R,K,st,lt){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,K,st,lt),Rt.viewport(F.copy(Gt).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,K,st,lt){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,K,st,lt),Rt.scissor(ft.copy(ee).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(R){Rt.setScissorTest(Ht=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,st=!0){let lt=0;if(R){let J=!1;if(G!==null){const bt=G.texture.format;J=bt===Dp||bt===Np||bt===Cp}if(J){const bt=G.texture.type,Nt=bt===Ma||bt===Wr||bt===cl||bt===io||bt===wp||bt===Rp,Ct=ne.getClearColor(),Lt=ne.getClearAlpha(),te=Ct.r,re=Ct.g,$t=Ct.b;Nt?(T[0]=te,T[1]=re,T[2]=$t,T[3]=Lt,B.clearBufferuiv(B.COLOR,0,T)):(N[0]=te,N[1]=re,N[2]=$t,N[3]=Lt,B.clearBufferiv(B.COLOR,0,N))}else lt|=B.COLOR_BUFFER_BIT}K&&(lt|=B.DEPTH_BUFFER_BIT),st&&(lt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",_t,!1),a.removeEventListener("webglcontextrestored",It,!1),a.removeEventListener("webglcontextcreationerror",Ft,!1),ne.dispose(),Bt.dispose(),ge.dispose(),qt.dispose(),A.dispose(),et.dispose(),gt.dispose(),Ie.dispose(),k.dispose(),Yt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ln),ht.removeEventListener("sessionend",vl),Yi.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const R=de.autoReset,K=kt.enabled,st=kt.autoUpdate,lt=kt.needsUpdate,J=kt.type;Pt(),de.autoReset=R,kt.enabled=K,kt.autoUpdate=st,kt.needsUpdate=lt,kt.type=J}function Ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oe(R){const K=R.target;K.removeEventListener("dispose",oe),Ke(K)}function Ke(R){vn(R),qt.remove(R)}function vn(R){const K=qt.get(R).programs;K!==void 0&&(K.forEach(function(st){Yt.releaseProgram(st)}),R.isShaderMaterial&&Yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,st,lt,J,bt){K===null&&(K=St);const Nt=J.isMesh&&J.matrixWorld.determinant()<0,Ct=Eu(R,K,st,lt,J);Rt.setMaterial(lt,Nt);let Lt=st.index,te=1;if(lt.wireframe===!0){if(Lt=yt.getWireframeAttribute(st),Lt===void 0)return;te=2}const re=st.drawRange,$t=st.attributes.position;let Te=re.start*te,Re=(re.start+re.count)*te;bt!==null&&(Te=Math.max(Te,bt.start*te),Re=Math.min(Re,(bt.start+bt.count)*te)),Lt!==null?(Te=Math.max(Te,0),Re=Math.min(Re,Lt.count)):$t!=null&&(Te=Math.max(Te,0),Re=Math.min(Re,$t.count));const Xe=Re-Te;if(Xe<0||Xe===1/0)return;Ie.setup(J,lt,Ct,st,Lt);let Ge,ve=jt;if(Lt!==null&&(Ge=xt.get(Lt),ve=me,ve.setIndex(Ge)),J.isMesh)lt.wireframe===!0?(Rt.setLineWidth(lt.wireframeLinewidth*Zt()),ve.setMode(B.LINES)):ve.setMode(B.TRIANGLES);else if(J.isLine){let Kt=lt.linewidth;Kt===void 0&&(Kt=1),Rt.setLineWidth(Kt*Zt()),J.isLineSegments?ve.setMode(B.LINES):J.isLineLoop?ve.setMode(B.LINE_LOOP):ve.setMode(B.LINE_STRIP)}else J.isPoints?ve.setMode(B.POINTS):J.isSprite&&ve.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ve.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Kt=J._multiDrawStarts,Qe=J._multiDrawCounts,ye=J._multiDrawCount,_n=Lt?xt.get(Lt).bytesPerElement:1,Ze=qt.get(lt).currentProgram.getUniforms();for(let On=0;On<ye;On++)Ze.setValue(B,"_gl_DrawID",On),ve.render(Kt[On]/_n,Qe[On])}else if(J.isInstancedMesh)ve.renderInstances(Te,Xe,J.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Qe=Math.min(st.instanceCount,Kt);ve.renderInstances(Te,Xe,Qe)}else ve.render(Te,Xe)};function be(R,K,st){R.transparent===!0&&R.side===va&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Zi(R,K,st),R.side=cr,R.needsUpdate=!0,Zi(R,K,st),R.side=va):Zi(R,K,st)}this.compile=function(R,K,st=null){st===null&&(st=R),_=ge.get(st),_.init(K),I.push(_),st.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),R!==st&&R.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const lt=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const bt=J.material;if(bt)if(Array.isArray(bt))for(let Nt=0;Nt<bt.length;Nt++){const Ct=bt[Nt];be(Ct,st,J),lt.add(Ct)}else be(bt,st,J),lt.add(bt)}),_=I.pop(),lt},this.compileAsync=function(R,K,st=null){const lt=this.compile(R,K,st);return new Promise(J=>{function bt(){if(lt.forEach(function(Nt){qt.get(Nt).currentProgram.isReady()&&lt.delete(Nt)}),lt.size===0){J(R);return}setTimeout(bt,10)}Qt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let We=null;function xn(R){We&&We(R)}function Ln(){Yi.stop()}function vl(){Yi.start()}const Yi=new C_;Yi.setAnimationLoop(xn),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(R){We=R,ht.setAnimationLoop(R),R===null?Yi.stop():Yi.start()},ht.addEventListener("sessionstart",Ln),ht.addEventListener("sessionend",vl),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(K),K=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,K,G),_=ge.get(R,I.length),_.init(K),I.push(_),Tt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),w.setFromProjectionMatrix(Tt),ct=this.localClippingEnabled,V=wt.init(this.clippingPlanes,ct),M=Bt.get(R,O.length),M.init(),O.push(M),ht.enabled===!0&&ht.isPresenting===!0){const bt=U.xr.getDepthSensingMesh();bt!==null&&co(bt,K,-1/0,U.sortObjects)}co(R,K,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(Mt,Et),At=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,At&&ne.addToRenderList(M,R),this.info.render.frame++,V===!0&&wt.beginShadows();const st=_.state.shadowsArray;kt.render(st,R,K),V===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=M.opaque,J=M.transmissive;if(_.setupLights(),K.isArrayCamera){const bt=K.cameras;if(J.length>0)for(let Nt=0,Ct=bt.length;Nt<Ct;Nt++){const Lt=bt[Nt];dr(lt,J,R,Lt)}At&&ne.render(R);for(let Nt=0,Ct=bt.length;Nt<Ct;Nt++){const Lt=bt[Nt];fr(M,R,Lt,Lt.viewport)}}else J.length>0&&dr(lt,J,R,K),At&&ne.render(R),fr(M,R,K);G!==null&&P===0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(U,R,K),Ie.resetDefaultState(),D=-1,C=null,I.pop(),I.length>0?(_=I[I.length-1],V===!0&&wt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function co(R,K,st,lt){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||w.intersectsSprite(R)){lt&&vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Tt);const Nt=gt.update(R),Ct=R.material;Ct.visible&&M.push(R,Nt,Ct,st,vt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||w.intersectsObject(R))){const Nt=gt.update(R),Ct=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),vt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),vt.copy(Nt.boundingSphere.center)),vt.applyMatrix4(R.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ct)){const Lt=Nt.groups;for(let te=0,re=Lt.length;te<re;te++){const $t=Lt[te],Te=Ct[$t.materialIndex];Te&&Te.visible&&M.push(R,Nt,Te,st,vt.z,$t)}}else Ct.visible&&M.push(R,Nt,Ct,st,vt.z,null)}}const bt=R.children;for(let Nt=0,Ct=bt.length;Nt<Ct;Nt++)co(bt[Nt],K,st,lt)}function fr(R,K,st,lt){const J=R.opaque,bt=R.transmissive,Nt=R.transparent;_.setupLightsView(st),V===!0&&wt.setGlobalState(U.clippingPlanes,st),lt&&Rt.viewport(F.copy(lt)),J.length>0&&Wi(J,K,st),bt.length>0&&Wi(bt,K,st),Nt.length>0&&Wi(Nt,K,st),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function dr(R,K,st,lt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new Zr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?fl:Ma,minFilter:qr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const bt=_.state.transmissionRenderTarget[lt.id],Nt=lt.viewport||F;bt.setSize(Nt.z*U.transmissionResolutionScale,Nt.w*U.transmissionResolutionScale);const Ct=U.getRenderTarget();U.setRenderTarget(bt),U.getClearColor(at),dt=U.getClearAlpha(),dt<1&&U.setClearColor(16777215,.5),U.clear(),At&&ne.render(st);const Lt=U.toneMapping;U.toneMapping=lr;const te=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),V===!0&&wt.setGlobalState(U.clippingPlanes,lt),Wi(R,st,lt),L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let $t=0,Te=K.length;$t<Te;$t++){const Re=K[$t],Xe=Re.object,Ge=Re.geometry,ve=Re.material,Kt=Re.group;if(ve.side===va&&Xe.layers.test(lt.layers)){const Qe=ve.side;ve.side=Kn,ve.needsUpdate=!0,Li(Xe,st,lt,Ge,ve,Kt),ve.side=Qe,ve.needsUpdate=!0,re=!0}}re===!0&&(L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt))}U.setRenderTarget(Ct),U.setClearColor(at,dt),te!==void 0&&(lt.viewport=te),U.toneMapping=Lt}function Wi(R,K,st){const lt=K.isScene===!0?K.overrideMaterial:null;for(let J=0,bt=R.length;J<bt;J++){const Nt=R[J],Ct=Nt.object,Lt=Nt.geometry,te=lt===null?Nt.material:lt,re=Nt.group;Ct.layers.test(st.layers)&&Li(Ct,K,st,Lt,te,re)}}function Li(R,K,st,lt,J,bt){R.onBeforeRender(U,K,st,lt,J,bt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(U,K,st,lt,R,bt),J.transparent===!0&&J.side===va&&J.forceSinglePass===!1?(J.side=Kn,J.needsUpdate=!0,U.renderBufferDirect(st,K,lt,J,R,bt),J.side=cr,J.needsUpdate=!0,U.renderBufferDirect(st,K,lt,J,R,bt),J.side=va):U.renderBufferDirect(st,K,lt,J,R,bt),R.onAfterRender(U,K,st,lt,J,bt)}function Zi(R,K,st){K.isScene!==!0&&(K=St);const lt=qt.get(R),J=_.state.lights,bt=_.state.shadowsArray,Nt=J.state.version,Ct=Yt.getParameters(R,J.state,bt,K,st),Lt=Yt.getProgramCacheKey(Ct);let te=lt.programs;lt.environment=R.isMeshStandardMaterial?K.environment:null,lt.fog=K.fog,lt.envMap=(R.isMeshStandardMaterial?et:A).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",oe),te=new Map,lt.programs=te);let re=te.get(Lt);if(re!==void 0){if(lt.currentProgram===re&&lt.lightsStateVersion===Nt)return uo(R,Ct),re}else Ct.uniforms=Yt.getUniforms(R),R.onBeforeCompile(Ct,U),re=Yt.acquireProgram(Ct,Lt),te.set(Lt,re),lt.uniforms=Ct.uniforms;const $t=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=wt.uniform),uo(R,Ct),lt.needsLights=fo(R),lt.lightsStateVersion=Nt,lt.needsLights&&($t.ambientLightColor.value=J.state.ambient,$t.lightProbe.value=J.state.probe,$t.directionalLights.value=J.state.directional,$t.directionalLightShadows.value=J.state.directionalShadow,$t.spotLights.value=J.state.spot,$t.spotLightShadows.value=J.state.spotShadow,$t.rectAreaLights.value=J.state.rectArea,$t.ltc_1.value=J.state.rectAreaLTC1,$t.ltc_2.value=J.state.rectAreaLTC2,$t.pointLights.value=J.state.point,$t.pointLightShadows.value=J.state.pointShadow,$t.hemisphereLights.value=J.state.hemi,$t.directionalShadowMap.value=J.state.directionalShadowMap,$t.directionalShadowMatrix.value=J.state.directionalShadowMatrix,$t.spotShadowMap.value=J.state.spotShadowMap,$t.spotLightMatrix.value=J.state.spotLightMatrix,$t.spotLightMap.value=J.state.spotLightMap,$t.pointShadowMap.value=J.state.pointShadowMap,$t.pointShadowMatrix.value=J.state.pointShadowMatrix),lt.currentProgram=re,lt.uniformsList=null,re}function Ta(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=mu.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function uo(R,K){const st=qt.get(R);st.outputColorSpace=K.outputColorSpace,st.batching=K.batching,st.batchingColor=K.batchingColor,st.instancing=K.instancing,st.instancingColor=K.instancingColor,st.instancingMorph=K.instancingMorph,st.skinning=K.skinning,st.morphTargets=K.morphTargets,st.morphNormals=K.morphNormals,st.morphColors=K.morphColors,st.morphTargetsCount=K.morphTargetsCount,st.numClippingPlanes=K.numClippingPlanes,st.numIntersection=K.numClipIntersection,st.vertexAlphas=K.vertexAlphas,st.vertexTangents=K.vertexTangents,st.toneMapping=K.toneMapping}function Eu(R,K,st,lt,J){K.isScene!==!0&&(K=St),L.resetTextureUnits();const bt=K.fog,Nt=lt.isMeshStandardMaterial?K.environment:null,Ct=G===null?U.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ro,Lt=(lt.isMeshStandardMaterial?et:A).get(lt.envMap||Nt),te=lt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,re=!!st.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),$t=!!st.morphAttributes.position,Te=!!st.morphAttributes.normal,Re=!!st.morphAttributes.color;let Xe=lr;lt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const Ge=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ve=Ge!==void 0?Ge.length:0,Kt=qt.get(lt),Qe=_.state.lights;if(V===!0&&(ct===!0||R!==C)){const Tn=R===C&&lt.id===D;wt.setState(lt,R,Tn)}let ye=!1;lt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Qe.state.version||Kt.outputColorSpace!==Ct||J.isBatchedMesh&&Kt.batching===!1||!J.isBatchedMesh&&Kt.batching===!0||J.isBatchedMesh&&Kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Kt.instancing===!1||!J.isInstancedMesh&&Kt.instancing===!0||J.isSkinnedMesh&&Kt.skinning===!1||!J.isSkinnedMesh&&Kt.skinning===!0||J.isInstancedMesh&&Kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Kt.instancingMorph===!1&&J.morphTexture!==null||Kt.envMap!==Lt||lt.fog===!0&&Kt.fog!==bt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==wt.numPlanes||Kt.numIntersection!==wt.numIntersection)||Kt.vertexAlphas!==te||Kt.vertexTangents!==re||Kt.morphTargets!==$t||Kt.morphNormals!==Te||Kt.morphColors!==Re||Kt.toneMapping!==Xe||Kt.morphTargetsCount!==ve)&&(ye=!0):(ye=!0,Kt.__version=lt.version);let _n=Kt.currentProgram;ye===!0&&(_n=Zi(lt,K,J));let Ze=!1,On=!1,Aa=!1;const Ve=_n.getUniforms(),on=Kt.uniforms;if(Rt.useProgram(_n.program)&&(Ze=!0,On=!0,Aa=!0),lt.id!==D&&(D=lt.id,On=!0),Ze||C!==R){Rt.buffers.depth.getReversed()?(ot.copy(R.projectionMatrix),rb(ot),sb(ot),Ve.setValue(B,"projectionMatrix",ot)):Ve.setValue(B,"projectionMatrix",R.projectionMatrix),Ve.setValue(B,"viewMatrix",R.matrixWorldInverse);const An=Ve.map.cameraPosition;An!==void 0&&An.setValue(B,Dt.setFromMatrixPosition(R.matrixWorld)),Xt.logarithmicDepthBuffer&&Ve.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ve.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,On=!0,Aa=!0)}if(J.isSkinnedMesh){Ve.setOptional(B,J,"bindMatrix"),Ve.setOptional(B,J,"bindMatrixInverse");const Tn=J.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ve.setValue(B,"boneTexture",Tn.boneTexture,L))}J.isBatchedMesh&&(Ve.setOptional(B,J,"batchingTexture"),Ve.setValue(B,"batchingTexture",J._matricesTexture,L),Ve.setOptional(B,J,"batchingIdTexture"),Ve.setValue(B,"batchingIdTexture",J._indirectTexture,L),Ve.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&Ve.setValue(B,"batchingColorTexture",J._colorsTexture,L));const hn=st.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ae.update(J,st,_n),(On||Kt.receiveShadow!==J.receiveShadow)&&(Kt.receiveShadow=J.receiveShadow,Ve.setValue(B,"receiveShadow",J.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(on.envMap.value=Lt,on.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&K.environment!==null&&(on.envMapIntensity.value=K.environmentIntensity),On&&(Ve.setValue(B,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&xl(on,Aa),bt&&lt.fog===!0&&zt.refreshFogUniforms(on,bt),zt.refreshMaterialUniforms(on,lt,Q,rt,_.state.transmissionRenderTarget[R.id]),mu.upload(B,Ta(Kt),on,L)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(mu.upload(B,Ta(Kt),on,L),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ve.setValue(B,"center",J.center),Ve.setValue(B,"modelViewMatrix",J.modelViewMatrix),Ve.setValue(B,"normalMatrix",J.normalMatrix),Ve.setValue(B,"modelMatrix",J.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Tn=lt.uniformsGroups;for(let An=0,Kr=Tn.length;An<Kr;An++){const Ki=Tn[An];k.update(Ki,_n),k.bind(Ki,_n)}}return _n}function xl(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function fo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,K,st){qt.get(R.texture).__webglTexture=K,qt.get(R.depthTexture).__webglTexture=st;const lt=qt.get(R);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=st===void 0,lt.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){const st=qt.get(R);st.__webglFramebuffer=K,st.__useDefaultFramebuffer=K===void 0};const hr=B.createFramebuffer();this.setRenderTarget=function(R,K=0,st=0){G=R,j=K,P=st;let lt=!0,J=null,bt=!1,Nt=!1;if(R){const Lt=qt.get(R);if(Lt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(B.FRAMEBUFFER,null),lt=!1;else if(Lt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Lt.__hasExternalTextures)L.rebindTextures(R,qt.get(R.texture).__webglTexture,qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Lt.__boundDepthTexture!==$t){if($t!==null&&qt.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Nt=!0);const re=qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[K])?J=re[K][st]:J=re[K],bt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?J=qt.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?J=re[st]:J=re,F.copy(R.viewport),ft.copy(R.scissor),it=R.scissorTest}else F.copy(Gt).multiplyScalar(Q).floor(),ft.copy(ee).multiplyScalar(Q).floor(),it=Ht;if(st!==0&&(J=hr),Rt.bindFramebuffer(B.FRAMEBUFFER,J)&&lt&&Rt.drawBuffers(R,J),Rt.viewport(F),Rt.scissor(ft),Rt.setScissorTest(it),bt){const Lt=qt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,Lt.__webglTexture,st)}else if(Nt){const Lt=qt.get(R.texture),te=K;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Lt.__webglTexture,st,te)}else if(R!==null&&st!==0){const Lt=qt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(R,K,st,lt,J,bt,Nt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ct=Ct[Nt]),Ct){Rt.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const Lt=R.texture,te=Lt.format,re=Lt.type;if(!Xt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-lt&&st>=0&&st<=R.height-J&&B.readPixels(K,st,lt,J,le.convert(te),le.convert(re),bt)}finally{const Lt=G!==null?qt.get(G).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(R,K,st,lt,J,bt,Nt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ct=Ct[Nt]),Ct){const Lt=R.texture,te=Lt.format,re=Lt.type;if(!Xt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-lt&&st>=0&&st<=R.height-J){Rt.bindFramebuffer(B.FRAMEBUFFER,Ct);const $t=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$t),B.bufferData(B.PIXEL_PACK_BUFFER,bt.byteLength,B.STREAM_READ),B.readPixels(K,st,lt,J,le.convert(te),le.convert(re),0);const Te=G!==null?qt.get(G).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,Te);const Re=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ab(B,Re,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$t),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,bt),B.deleteBuffer($t),B.deleteSync(Re),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,st=0){R.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);const lt=Math.pow(2,-st),J=Math.floor(R.image.width*lt),bt=Math.floor(R.image.height*lt),Nt=K!==null?K.x:0,Ct=K!==null?K.y:0;L.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,st,0,0,Nt,Ct,J,bt),Rt.unbindTexture()};const bu=B.createFramebuffer(),_l=B.createFramebuffer();this.copyTextureToTexture=function(R,K,st=null,lt=null,J=0,bt=null){R.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,R=arguments[1],K=arguments[2],bt=arguments[3]||0,st=null),bt===null&&(J!==0?(Hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=J,J=0):bt=0);let Nt,Ct,Lt,te,re,$t,Te,Re,Xe;const Ge=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(st!==null)Nt=st.max.x-st.min.x,Ct=st.max.y-st.min.y,Lt=st.isBox3?st.max.z-st.min.z:1,te=st.min.x,re=st.min.y,$t=st.isBox3?st.min.z:0;else{const hn=Math.pow(2,-J);Nt=Math.floor(Ge.width*hn),Ct=Math.floor(Ge.height*hn),R.isDataArrayTexture?Lt=Ge.depth:R.isData3DTexture?Lt=Math.floor(Ge.depth*hn):Lt=1,te=0,re=0,$t=0}lt!==null?(Te=lt.x,Re=lt.y,Xe=lt.z):(Te=0,Re=0,Xe=0);const ve=le.convert(K.format),Kt=le.convert(K.type);let Qe;K.isData3DTexture?(L.setTexture3D(K,0),Qe=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(L.setTexture2DArray(K,0),Qe=B.TEXTURE_2D_ARRAY):(L.setTexture2D(K,0),Qe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const ye=B.getParameter(B.UNPACK_ROW_LENGTH),_n=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ze=B.getParameter(B.UNPACK_SKIP_PIXELS),On=B.getParameter(B.UNPACK_SKIP_ROWS),Aa=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ge.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ge.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,re),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$t);const Ve=R.isDataArrayTexture||R.isData3DTexture,on=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const hn=qt.get(R),Tn=qt.get(K),An=qt.get(hn.__renderTarget),Kr=qt.get(Tn.__renderTarget);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,An.__webglFramebuffer),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let Ki=0;Ki<Lt;Ki++)Ve&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.get(R).__webglTexture,J,$t+Ki),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.get(K).__webglTexture,bt,Xe+Ki)),B.blitFramebuffer(te,re,Nt,Ct,Te,Re,Nt,Ct,B.DEPTH_BUFFER_BIT,B.NEAREST);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||qt.has(R)){const hn=qt.get(R),Tn=qt.get(K);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,bu),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,_l);for(let An=0;An<Lt;An++)Ve?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,J,$t+An):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,J),on?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tn.__webglTexture,bt,Xe+An):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tn.__webglTexture,bt),J!==0?B.blitFramebuffer(te,re,Nt,Ct,Te,Re,Nt,Ct,B.COLOR_BUFFER_BIT,B.NEAREST):on?B.copyTexSubImage3D(Qe,bt,Te,Re,Xe+An,te,re,Nt,Ct):B.copyTexSubImage2D(Qe,bt,Te,Re,te,re,Nt,Ct);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else on?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Qe,bt,Te,Re,Xe,Nt,Ct,Lt,ve,Kt,Ge.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(Qe,bt,Te,Re,Xe,Nt,Ct,Lt,ve,Ge.data):B.texSubImage3D(Qe,bt,Te,Re,Xe,Nt,Ct,Lt,ve,Kt,Ge):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,bt,Te,Re,Nt,Ct,ve,Kt,Ge.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,bt,Te,Re,Ge.width,Ge.height,ve,Ge.data):B.texSubImage2D(B.TEXTURE_2D,bt,Te,Re,Nt,Ct,ve,Kt,Ge);B.pixelStorei(B.UNPACK_ROW_LENGTH,ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_n),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,On),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Aa),bt===0&&K.generateMipmaps&&B.generateMipmap(Qe),Rt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,st=null,lt=null,J=0){return R.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,lt=arguments[1]||null,R=arguments[2],K=arguments[3],J=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,st,lt,J)},this.initRenderTarget=function(R){qt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Rt.unbindTexture()},this.resetState=function(){j=0,P=0,G=null,Rt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorspace=Ne._getDrawingBufferColorSpace(n),a.unpackColorSpace=Ne._getUnpackColorSpace()}}const Tw=({scrollProgress:o=0,interactive:n=!0})=>{const a=Ee.useRef(null),[s,c]=Ee.useState(!0);return Ee.useEffect(()=>{const f=a.current;if(!f)return;let d=!1;try{const Ht=document.createElement("canvas");d=!!(window.WebGLRenderingContext&&(Ht.getContext("webgl")||Ht.getContext("experimental-webgl")))}catch{d=!1}if(!d){c(!1);return}const h=new Db;h.fog=new zp(328965,.08);const p=f.clientWidth||window.innerWidth,v=f.clientHeight||window.innerHeight,x=new _i(45,p/v,.1,100);x.position.set(0,.45,4.6);let m;try{m=new bw({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(Ht){console.warn("WebGL initialization failed, falling back:",Ht),c(!1);return}m.setSize(p,v),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setClearColor(0,0),f.appendChild(m.domElement);const S=window.innerWidth<768,E=S?14e3:28e3,T=new Float32Array(E*3),N=new Float32Array(E*3),M=new Float32Array(E*3),_=new Float32Array(E),O=new Float32Array(E*3),I=new Float32Array(E);let U=0;const W=(Ht,w,V,ct,ot,Tt,Dt)=>{if(U>=E)return;const vt=U*3;T[vt]=Ht,T[vt+1]=w,T[vt+2]=V,N[vt]=Ht,N[vt+1]=w,N[vt+2]=V,M[vt]=ct,M[vt+1]=ot,M[vt+2]=Tt,_[U]=Dt,I[U]=.5+Math.random()*2.5,O[vt]=0,O[vt+1]=0,O[vt+2]=0,U++},j=Math.floor(E*.42);for(let Ht=0;Ht<j;Ht++){const w=Math.random(),V=Math.random(),ct=w*2*Math.PI,ot=Math.acos(2*V-1);let Tt=.56,Dt=.72,vt=.6,St=Tt*Math.sin(ot)*Math.cos(ct),At=Dt*Math.cos(ot)+.95,Zt=vt*Math.sin(ot)*Math.sin(ct);if(At<.95){const A=1-(.95-At)*.7;St*=Math.max(.45,A),Zt*=Math.max(.55,A)}At>1.15&&Math.abs(St)<.45&&(Zt+=.04);const B=Zt>.38&&Math.abs(St)<.16&&At>.75&&At<1.05;if(B&&(Zt+=.12*(1-Math.abs(St)/.16)),Zt>.35&&At>.95&&At<1.1&&Math.abs(St)>.14&&Math.abs(St)<.32&&(Zt-=.05),At>1.05||Math.abs(St)>.48){const A=(Math.random()-.5)*.12;St+=A,At+=Math.random()*.1,Zt+=A}St+=(Math.random()-.5)*.025,At+=(Math.random()-.5)*.025,Zt+=(Math.random()-.5)*.025;const Qt=.6+Math.random()*.4,Xt=B||At>.8&&Math.abs(St)<.38&&Zt>.28,Rt=Xt?Qt*.96:Qt*.75,de=Xt?Qt*.98:Qt*.8,qt=Xt?Qt*1:Qt*.88,L=(Xt?3:2)+Math.random()*1.2;W(St,At,Zt,Rt,de,qt,L)}const P=Math.floor(E*.14);for(let Ht=0;Ht<P;Ht++){const w=Math.random()*Math.PI*2,V=Math.random(),ct=.22+V*.48,ot=.3+(1-V)*.08;let Tt=Math.cos(w)*ot,Dt=Math.sin(w)*(ot*.9);Dt<-.1&&(Dt*=.8);const vt=ct<.36&&Math.abs(Tt)<.28&&Dt>.18,St=vt?.95:.45+Math.random()*.35,At=St*.85,Zt=St*.9,B=St*.98;W(Tt,ct,Dt,At,Zt,B,vt?2.8:1.9)}const G=Math.floor(E*.38);for(let Ht=0;Ht<G;Ht++){const w=Math.random(),V=.28-w*1.6,ct=1.6+w*.75,ot=(Math.random()-.5)*2*ct,Tt=.5+w*.25,Dt=ot/ct,vt=Math.sqrt(Math.max(0,1-Dt*Dt))*Tt,St=(Math.random()*1.4-.45)*vt,At=Math.abs(ot)<.12&&St>.18&&V>-1.2,Zt=Math.abs(Math.abs(ot)-(.18+(.28-V)*.3))<.06&&St>.22;let B=.38+Math.random()*.35,ke=B*.8,Qt=B*.85,Xt=B*.95;(At||Zt)&&(B=.9+Math.random()*.1,ke=B*.92,Qt=B*.96,Xt=B),W(ot,V,St,ke,Qt,Xt,At||Zt?2.8:2)}for(;U<E;){const Ht=(Math.random()-.5)*8,w=(Math.random()-.5)*6,V=(Math.random()-.5)*5,ct=.25+Math.random()*.35;W(Ht,w,V,ct*.75,ct*.85,ct*.98,1.4)}const D=new ba;D.setAttribute("position",new yi(T,3)),D.setAttribute("color",new yi(M,3));const F=(()=>{const Ht=document.createElement("canvas");Ht.width=32,Ht.height=32;const w=Ht.getContext("2d");if(!w)return null;const V=w.createRadialGradient(16,16,0,16,16,16);V.addColorStop(0,"rgba(255, 255, 255, 1)"),V.addColorStop(.3,"rgba(230, 240, 255, 0.9)"),V.addColorStop(.7,"rgba(160, 185, 220, 0.4)"),V.addColorStop(1,"rgba(0, 0, 0, 0)"),w.fillStyle=V,w.fillRect(0,0,32,32);const ct=new zb(Ht);return ct.needsUpdate=!0,ct})(),ft=new w_({size:S?.038:.046,vertexColors:!0,map:F,transparent:!0,opacity:.92,blending:Oh,depthWrite:!1}),it=new Ob(D,ft);h.add(it);const at={x:0,y:0,targetX:0,targetY:0,isHovered:!1},dt=new Gb,X=new He(-999,-999),rt=Ht=>{const w=f.getBoundingClientRect(),V=Ht.clientX-w.left,ct=Ht.clientY-w.top;at.targetX=V/p*2-1,at.targetY=-(ct/v)*2+1,at.isHovered=!0,X.x=at.targetX,X.y=at.targetY},Q=()=>{at.isHovered=!1,at.targetX=0,at.targetY=0,X.x=-999,X.y=-999};n&&(window.addEventListener("mousemove",rt,{passive:!0}),document.addEventListener("mouseleave",Q));let Mt,Et=new Hb;const Gt=()=>{Mt=requestAnimationFrame(Gt);const Ht=Et.getElapsedTime();at.x+=(at.targetX-at.x)*.05,at.y+=(at.targetY-at.y)*.05,x.position.x=at.x*.35,x.position.y=.2+at.y*.25,x.lookAt(0,.35,0),it.rotation.y=Math.sin(Ht*.3)*.05+at.x*.08,it.rotation.x=Math.cos(Ht*.25)*.03-at.y*.06,dt.setFromCamera(X,x);const w=new rr(new ut(0,0,1),0),V=new ut;dt.ray.intersectPlane(w,V);const ct=D.attributes.position.array,ot=.75,Tt=.18;for(let Dt=0;Dt<E;Dt++){const vt=Dt*3,St=N[vt],At=N[vt+1],Zt=N[vt+2];let B=ct[vt],ke=ct[vt+1],Qt=ct[vt+2];if(at.isHovered&&X.x>-900){const et=B-V.x,xt=ke-V.y,yt=et*et+xt*xt;if(yt<ot*ot&&yt>1e-4){const gt=Math.sqrt(yt),Yt=(1-gt/ot)*Tt;O[vt]+=et/gt*Yt,O[vt+1]+=xt/gt*Yt,O[vt+2]+=Yt*.4}}const Xt=.07,Rt=.88,de=(St-B)*Xt,qt=(At-ke)*Xt,L=(Zt-Qt)*Xt;O[vt]=(O[vt]+de)*Rt,O[vt+1]=(O[vt+1]+qt)*Rt,O[vt+2]=(O[vt+2]+L)*Rt;const A=Math.sin(Ht*I[Dt]+St*2)*.003;ct[vt]+=O[vt],ct[vt+1]+=O[vt+1]+A,ct[vt+2]+=O[vt+2]}D.attributes.position.needsUpdate=!0,o>0&&(ft.opacity=Math.max(.1,.92-o*1.2),it.position.y=-o*1.5),m.render(h,x)};Gt();const ee=()=>{if(!f)return;const Ht=f.clientWidth,w=f.clientHeight;x.aspect=Ht/w,x.updateProjectionMatrix(),m.setSize(Ht,w)};return window.addEventListener("resize",ee),()=>{cancelAnimationFrame(Mt),window.removeEventListener("resize",ee),n&&(window.removeEventListener("mousemove",rt),document.removeEventListener("mouseleave",Q)),D.dispose(),ft.dispose(),F&&F.dispose(),m.dispose(),f&&m.domElement.parentNode===f&&f.removeChild(m.domElement)}},[o,n]),s?y.jsx("div",{ref:a,className:"absolute inset-0 w-full h-full pointer-events-none select-none z-0",style:{touchAction:"none"}}):y.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden",children:y.jsxs("div",{className:"relative w-72 h-96 opacity-60",children:[y.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-2xl"}),y.jsxs("svg",{viewBox:"0 0 200 280",className:"w-full h-full text-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]",children:[y.jsx("ellipse",{cx:"100",cy:"70",rx:"35",ry:"45",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"3 3"}),y.jsx("path",{d:"M 80,115 L 80,140 Q 50,145 25,180 L 15,260 L 185,260 L 175,180 Q 150,145 120,140 L 120,115",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"3 3"})]})]})})},Aw=({scrollProgress:o})=>{const[n,a]=Ee.useState(!1),s=()=>{a(!n)},c=d=>{d.preventDefault();const h=document.querySelector("#projects");h&&h.scrollIntoView({behavior:"smooth"})},f=d=>{d.preventDefault();const h=document.querySelector("#team");h&&h.scrollIntoView({behavior:"smooth"})};return y.jsxs("section",{id:"home",className:"relative w-full min-h-screen flex flex-col justify-between items-center bg-[#050505] overflow-hidden pt-24 pb-12 select-none",children:[y.jsx(Tw,{scrollProgress:o}),y.jsx("div",{className:"absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"}),y.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#050505_95%)] z-10"}),y.jsxs("div",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between pt-6",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_#00F0FF] animate-pulse"}),y.jsx("span",{className:"text-[11px] font-mono tracking-widest text-neutral-400 uppercase",children:"STUDIO LAB // 2026 EDITION"})]}),y.jsx("button",{onClick:s,className:"flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] text-[10px] font-mono tracking-widest text-neutral-400 hover:text-white transition-all duration-300",title:"Toggle ambient audio",children:n?y.jsxs(y.Fragment,{children:[y.jsx(oE,{className:"w-3.5 h-3.5 text-accent-cyan"}),y.jsx("span",{children:"SOUND ON"})]}):y.jsxs(y.Fragment,{children:[y.jsx(cE,{className:"w-3.5 h-3.5 text-neutral-500"}),y.jsx("span",{children:"SOUND OFF"})]})})]}),y.jsxs("div",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-end my-auto text-center pointer-events-none pb-4",children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-4 shadow-lg",children:[y.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent-cyan"}),y.jsx("p",{className:"text-[11px] sm:text-xs font-mono tracking-[0.25em] text-neutral-300 uppercase",children:bn.supportingHeadline})]}),y.jsx("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-extrabold tracking-tight leading-[0.92] text-metallic uppercase drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]",children:bn.tagline}),y.jsx("p",{className:"mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-neutral-300 font-sans font-light leading-relaxed px-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",children:bn.intro})]}),y.jsxs("div",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/[0.06]",children:[y.jsxs("div",{className:"text-center sm:text-left",children:[y.jsxs("div",{className:"text-sm sm:text-base font-display text-white tracking-wide",children:[y.jsx("span",{className:"font-bold",children:"TECH GENZ"})," ",y.jsx("span",{className:"font-serif italic text-neutral-400 text-lg",children:"Engineering Studio"})]}),y.jsx("div",{className:"text-xs font-mono text-neutral-500 tracking-wider",children:bn.subDescriptor})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("a",{href:"#projects",onClick:c,className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] group",children:[y.jsx("span",{children:"EXPLORE OUR WORK"}),y.jsx(kr,{className:"w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),y.jsx("a",{href:"#team",onClick:f,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/50 text-xs font-mono tracking-wider uppercase transition-all duration-300",children:"MEET THE TEAM"})]}),y.jsxs("div",{className:"hidden lg:flex items-center gap-2 text-[11px] font-mono text-neutral-500 tracking-widest",children:[y.jsx("span",{children:"SCROLL"}),y.jsx(NM,{className:"w-3.5 h-3.5 animate-bounce text-neutral-400"})]})]})]})},ww=()=>y.jsxs("section",{id:"about",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden",children:[y.jsx("div",{className:"absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"}),y.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[y.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"01 //"}),y.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"ABOUT THE STUDIO"})]}),y.jsx("div",{className:"mb-16",children:y.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase leading-[1.05]",children:["FOUR MINDS.",y.jsx("br",{}),y.jsx("span",{className:"font-serif italic font-normal text-white",children:"ONE VISION."})]})}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",children:[y.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[y.jsx("p",{className:"text-xl sm:text-2xl text-neutral-200 font-sans font-light leading-relaxed",children:bn.about}),y.jsx("p",{className:"text-sm sm:text-base text-neutral-400 font-sans leading-relaxed",children:"We approach every challenge not as a routine coding exercise, but as an opportunity to build resilient systems that withstand real-world constraints. From zero-latency real-time applications to interactive 3D particle environments and robust cloud backends, our work is defined by precision, clarity, and performance."}),y.jsxs("div",{className:"pt-4 flex items-center gap-6",children:[y.jsxs("a",{href:"#team",className:"inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-accent-cyan transition-colors group",children:[y.jsx("span",{children:"MEET THE TEAM MEMBERS"}),y.jsx(kr,{className:"w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),y.jsx("span",{className:"text-neutral-700 font-mono",children:"/"}),y.jsx("a",{href:bn.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors",children:"GITHUB ORG ↗"})]})]}),y.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-6",children:[y.jsxs("div",{className:"p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/60 backdrop-blur-sm space-y-6",children:[y.jsx("div",{className:"text-xs font-mono tracking-widest text-neutral-400 uppercase border-b border-white/[0.06] pb-4",children:"ENGINEERING PILLARS"}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"flex items-start gap-4",children:[y.jsx("div",{className:"p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white",children:y.jsx(qM,{className:"w-4 h-4"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-sm font-display font-semibold text-white",children:"Performance-First Architecture"}),y.jsx("p",{className:"text-xs text-neutral-400 mt-1 leading-relaxed",children:"Lightweight payloads, hardware-accelerated 3D computations, and zero bloat."})]})]}),y.jsxs("div",{className:"flex items-start gap-4",children:[y.jsx("div",{className:"p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white",children:y.jsx(VM,{className:"w-4 h-4"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-sm font-display font-semibold text-white",children:"Intentional Interaction"}),y.jsx("p",{className:"text-xs text-neutral-400 mt-1 leading-relaxed",children:"Every transition, micro-interaction, and layout decision serves user comprehension."})]})]}),y.jsxs("div",{className:"flex items-start gap-4",children:[y.jsx("div",{className:"p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white",children:y.jsx(e_,{className:"w-4 h-4"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-sm font-display font-semibold text-white",children:"Resilient Reliability"}),y.jsx("p",{className:"text-xs text-neutral-400 mt-1 leading-relaxed",children:"Type safety, strict schema contracts, and self-healing cloud microservices."})]})]})]})]}),y.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[y.jsxs("div",{className:"p-4 rounded-xl border border-white/[0.06] bg-[#09090b] text-center",children:[y.jsx("div",{className:"text-2xl font-display font-bold text-white",children:"04"}),y.jsx("div",{className:"text-[10px] font-mono tracking-wider text-neutral-500 uppercase mt-1",children:"Specialists"})]}),y.jsxs("div",{className:"p-4 rounded-xl border border-white/[0.06] bg-[#09090b] text-center",children:[y.jsx("div",{className:"text-2xl font-display font-bold text-white",children:"100%"}),y.jsx("div",{className:"text-[10px] font-mono tracking-wider text-neutral-500 uppercase mt-1",children:"Collaborative"})]}),y.jsxs("div",{className:"p-4 rounded-xl border border-white/[0.06] bg-[#09090b] text-center",children:[y.jsx("div",{className:"text-2xl font-display font-bold text-white",children:"60+"}),y.jsx("div",{className:"text-[10px] font-mono tracking-wider text-neutral-500 uppercase mt-1",children:"FPS Target"})]})]})]})]})]})]}),Rw=()=>{const[o,n]=Ee.useState(null),a=s=>{n(o===s?null:s)};return y.jsx("section",{id:"services",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08]",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[y.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[y.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"02 //"}),y.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"CORE CAPABILITIES"})]}),y.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase",children:["WHAT WE ",y.jsx("span",{className:"font-serif italic font-normal text-white",children:"BUILD."})]})]}),y.jsx("p",{className:"text-sm text-neutral-400 max-w-md font-sans leading-relaxed",children:"Engineered software solutions delivering speed, security, and expressive interactivity across the full stack."})]}),y.jsx("div",{className:"divide-y divide-white/[0.08] border-y border-white/[0.08]",children:fE.map(s=>{const c=o===s.id;return y.jsxs("div",{className:"group transition-colors duration-300 hover:bg-white/[0.02]",children:[y.jsxs("button",{onClick:()=>a(s.id),"aria-expanded":c,className:"w-full text-left py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 focus:outline-none cursor-pointer",children:[y.jsxs("div",{className:"flex items-baseline gap-6 sm:gap-10",children:[y.jsx("span",{className:"text-sm sm:text-base font-mono text-neutral-500 group-hover:text-accent-cyan transition-colors",children:s.index}),y.jsx("h3",{className:"text-xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-neutral-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300",children:s.title})]}),y.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-6 md:max-w-md w-full md:w-auto",children:[y.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 font-sans line-clamp-2 md:text-right",children:s.description}),y.jsx("div",{className:"flex-shrink-0 p-2 rounded-full border border-white/10 group-hover:border-white/30 text-neutral-400 group-hover:text-white transition-all",children:y.jsx(zM,{className:`w-4 h-4 transition-transform duration-300 ${c?"rotate-180 text-white":""}`})})]})]}),c&&y.jsx("div",{className:"pb-8 pt-2 px-6 sm:px-16 animate-fadeIn text-sm text-neutral-300 border-t border-white/[0.04]",children:y.jsxs("div",{className:"max-w-3xl space-y-4",children:[y.jsx("p",{className:"text-sm text-neutral-300 leading-relaxed",children:s.expandedDetail}),y.jsxs("div",{className:"pt-2",children:[y.jsx("div",{className:"text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-3",children:"KEY COMPETENCIES"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:s.capabilities.map(f=>y.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300",children:["• ",f]},f))})]})]})})]},s.id)})})]})})},Cw=({project:o,onClose:n,onSelectProject:a,allProjects:s})=>{if(Ee.useEffect(()=>{const h=p=>{p.key==="Escape"&&n()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[n]),!o)return null;const c=s.findIndex(h=>h.id===o.id),f=s[(c-1+s.length)%s.length],d=s[(c+1)%s.length];return y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn",onClick:n,children:y.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0c] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8",onClick:h=>h.stopPropagation(),children:[y.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-6",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("span",{className:"text-xs font-mono text-neutral-500 uppercase",children:[o.index," //"]}),y.jsx("span",{className:"text-xs font-mono text-accent-cyan uppercase tracking-widest",children:o.category})]}),y.jsx("button",{onClick:n,className:"p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors","aria-label":"Close project modal",children:y.jsx(n_,{className:"w-5 h-5"})})]}),y.jsxs("div",{children:[y.jsx("h2",{className:"text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white uppercase",children:o.title}),y.jsxs("p",{className:"text-sm font-mono text-neutral-400 mt-2 tracking-wider",children:[o.subtitle," • ",o.year]})]}),y.jsxs("div",{className:"w-full rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden",children:[y.jsxs("div",{className:"absolute top-0 left-0 right-0 h-8 bg-white/[0.03] border-b border-white/10 flex items-center px-4 gap-2",children:[y.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-neutral-600"}),y.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-neutral-600"}),y.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-neutral-600"}),y.jsx("span",{className:"ml-3 text-[10px] font-mono text-neutral-400",children:"https://sharepinz.site"})]}),y.jsx("div",{className:"mt-8 text-center max-w-md space-y-4",children:o.id==="sharepinz"?y.jsxs("div",{className:"p-6 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md shadow-inner space-y-4",children:[y.jsx("div",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Active Share Session"}),y.jsx("div",{className:"text-4xl font-mono font-bold tracking-[0.3em] text-white",children:"5 9 1 0 4 2"}),y.jsx("div",{className:"text-[11px] text-neutral-500 font-mono",children:"TTL Expiry: 14m 58s • AES-256 Encrypted Transfer"})]}):y.jsxs("div",{className:"p-6 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md shadow-inner",children:[y.jsx("div",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2",children:"System Architecture"}),y.jsxs("div",{className:"text-xl font-display font-bold text-white",children:[o.title," Engine"]}),y.jsx("div",{className:"text-xs text-neutral-500 mt-1",children:"Verified Real-time Pipeline"})]})})]}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 text-sm",children:[y.jsxs("div",{className:"space-y-3",children:[y.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Problem Statement"}),y.jsx("p",{className:"text-neutral-300 leading-relaxed font-sans",children:o.problem})]}),y.jsxs("div",{className:"space-y-3",children:[y.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Engineering Solution"}),y.jsx("p",{className:"text-neutral-300 leading-relaxed font-sans",children:o.solution})]})]}),y.jsxs("div",{className:"space-y-3 border-t border-white/[0.08] pt-6",children:[y.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Key Implementations"}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:o.keyFeatures.map((h,p)=>y.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-neutral-300",children:[y.jsx(Uh,{className:"w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5"}),y.jsx("span",{children:h})]},p))})]}),y.jsxs("div",{className:"border-t border-white/[0.08] pt-6 space-y-3",children:[y.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Technology Stack"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:o.techStack.map(h=>y.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300",children:h},h))})]}),y.jsxs("div",{className:"border-t border-white/[0.08] pt-6 space-y-2",children:[y.jsx("h3",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"Technical Constraints Overcome"}),y.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:o.challenges})]}),y.jsxs("div",{className:"border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4",children:[y.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[o.liveUrl&&y.jsxs("a",{href:o.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors",children:[y.jsx("span",{children:"Live Website"}),y.jsx(Lh,{className:"w-3.5 h-3.5"})]}),o.repoUrl&&y.jsxs("a",{href:o.repoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white text-xs font-mono tracking-wider transition-colors",children:[y.jsx(ul,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:"Repository"})]})]}),s.length>1&&y.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto justify-end",children:[y.jsxs("button",{onClick:()=>a(f),className:"flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-400 hover:text-white transition-colors",children:[y.jsx(IM,{className:"w-4 h-4"}),y.jsx("span",{children:"PREV"})]}),y.jsxs("button",{onClick:()=>a(d),className:"flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-400 hover:text-white transition-colors",children:[y.jsx("span",{children:"NEXT"}),y.jsx(FM,{className:"w-4 h-4"})]})]})]})]})})},Nw=()=>{const[o,n]=Ee.useState(null),[a,s]=Ee.useState("739 421"),[c,f]=Ee.useState(!1),d=()=>{const v=Math.floor(100+Math.random()*900),x=Math.floor(100+Math.random()*900);s(`${v} ${x}`),f(!1)},h=v=>{var x;v.stopPropagation(),(x=navigator.clipboard)==null||x.writeText(a.replace(/\s+/g,"")),f(!0),setTimeout(()=>f(!1),2e3)},p=Jv[0];return y.jsxs("section",{id:"projects",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08]",children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[y.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[y.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"03 //"}),y.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"FEATURED WORK"})]}),y.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase",children:["SELECTED ",y.jsx("span",{className:"font-serif italic font-normal text-white",children:"work."})]})]}),y.jsxs("div",{className:"md:max-w-md space-y-3",children:[y.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed",children:"Real software engineered for utility, zero friction, and high-performance execution."}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("a",{href:p.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 hover:bg-accent-cyan hover:text-black text-xs font-mono tracking-wider transition-all duration-300 text-accent-cyan group",children:[y.jsx("span",{children:"OPEN SHAREPINZ (LIVE)"}),y.jsx(kr,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),y.jsxs("a",{href:bn.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white hover:text-black hover:border-white text-xs font-mono tracking-wider transition-all duration-300 text-neutral-300 group",children:[y.jsx("span",{children:"GITHUB ORG"}),y.jsx(kr,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]})]})]}),y.jsxs("div",{className:"relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#111114] to-[#08080a] p-8 sm:p-12 overflow-hidden shadow-2xl",children:[y.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-accent-cyan/[0.04] rounded-full blur-3xl pointer-events-none"}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[y.jsx("div",{className:"lg:col-span-7 order-2 lg:order-1",children:y.jsxs("a",{href:p.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"block relative w-full rounded-2xl border border-white/10 hover:border-accent-cyan/40 bg-[#060608] shadow-2xl overflow-hidden group transition-all duration-300",title:"Click to launch sharepinz.site",children:[y.jsxs("div",{className:"h-9 bg-[#121216] border-b border-white/[0.08] flex items-center justify-between px-4",children:[y.jsxs("div",{className:"flex items-center gap-1.5",children:[y.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/60"}),y.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/60"}),y.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500/60"})]}),y.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 tracking-wider group-hover:text-white transition-colors",children:[y.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),y.jsx("span",{children:"https://sharepinz.site"}),y.jsx(Lh,{className:"w-3 h-3 text-neutral-500 group-hover:text-accent-cyan"})]}),y.jsx("div",{className:"w-10"})]}),y.jsxs("div",{className:"p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6 min-h-[380px]",children:[y.jsx("div",{className:"p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white group-hover:scale-105 transition-transform",children:y.jsx(KM,{className:"w-8 h-8 text-white"})}),y.jsxs("div",{children:[y.jsx("span",{className:"text-[10px] font-mono tracking-widest uppercase text-accent-cyan px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20",children:"LIVE APPLICATION READY"}),y.jsx("h4",{className:"text-xl sm:text-3xl font-display font-bold text-white mt-3 group-hover:text-accent-cyan transition-colors",children:"SharePinz File Gateway"}),y.jsx("p",{className:"text-xs text-neutral-400 mt-1 max-w-sm mx-auto",children:"Generate an ephemeral 6-digit access key to send files securely with zero registration."})]}),y.jsxs("div",{className:"p-5 rounded-xl border border-white/15 bg-black/70 backdrop-blur-md w-full max-w-xs shadow-inner",children:[y.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1",children:"Target Access Key"}),y.jsx("div",{className:"text-3xl font-mono font-bold tracking-[0.25em] text-white",children:a}),y.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2",children:[y.jsx("button",{onClick:h,className:"px-3 py-1 rounded text-[11px] font-mono bg-white/[0.08] hover:bg-white/[0.18] text-white transition-colors cursor-pointer",children:c?"PIN Copied!":"Copy Key"}),y.jsx("button",{onClick:v=>{v.preventDefault(),v.stopPropagation(),d()},className:"p-1 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer",title:"Generate new PIN",children:y.jsx(nE,{className:"w-3.5 h-3.5"})})]})]}),y.jsxs("div",{className:"flex items-center gap-4 text-[11px] font-mono text-neutral-500",children:[y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(e_,{className:"w-3.5 h-3.5 text-neutral-400"})," AES-256 Storage"]}),y.jsx("span",{children:"•"}),y.jsx("span",{children:"Auto TTL Expiry"})]}),y.jsxs("div",{className:"pt-2 text-[11px] font-mono text-accent-cyan flex items-center gap-1 group-hover:underline",children:[y.jsx("span",{children:"Click to visit live website: sharepinz.site"}),y.jsx(kr,{className:"w-3 h-3"})]})]})]})}),y.jsxs("div",{className:"lg:col-span-5 order-1 lg:order-2 space-y-6",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-xs font-mono text-neutral-500",children:"01 //"}),y.jsx("span",{className:"text-xs font-mono tracking-widest uppercase text-accent-cyan",children:p.category})]}),y.jsxs("div",{children:[y.jsxs("h3",{className:"text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight",children:["SHARE",y.jsx("span",{className:"font-serif italic text-neutral-400",children:"PINZ"})]}),y.jsx("p",{className:"text-xs font-mono text-neutral-400 tracking-wider mt-1 uppercase",children:p.subtitle})]}),y.jsx("p",{className:"text-sm sm:text-base text-neutral-300 font-sans leading-relaxed",children:p.description}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("div",{className:"text-[11px] font-mono text-neutral-500 uppercase tracking-widest",children:"TECHNOLOGIES"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:p.techStack.map(v=>y.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300",children:v},v))})]}),y.jsxs("div",{className:"pt-4 flex flex-wrap items-center gap-3",children:[y.jsxs("a",{href:p.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] group",children:[y.jsx("span",{children:"OPEN WEBSITE"}),y.jsx(Lh,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),y.jsxs("button",{onClick:()=>n(p),className:"inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white/50 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer",children:[y.jsx("span",{children:"CASE STUDY DETAILS"}),y.jsx(kr,{className:"w-3.5 h-3.5"})]}),p.repoUrl&&y.jsxs("a",{href:p.repoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 text-xs font-mono tracking-wider transition-colors",children:[y.jsx(ul,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:"REPO"})]})]})]})]})]})]}),y.jsx(Cw,{project:o,onClose:()=>n(null),onSelectProject:v=>n(v),allProjects:Jv})]})},Dw=()=>y.jsxs("section",{className:"relative w-full bg-[#050505] py-32 border-t border-b border-white/[0.08] overflow-hidden select-none",children:[y.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)] pointer-events-none"}),y.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none bg-noise"}),y.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6",children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono tracking-widest text-neutral-400 uppercase",children:[y.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white animate-pulse"}),y.jsx("span",{children:"TECH GENZ MANIFESTO"})]}),y.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-display font-extrabold tracking-tighter leading-none text-metallic uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]",children:["IDEAS INTO ",y.jsx("span",{className:"font-serif italic font-normal text-white",children:"reality."})]}),y.jsx("p",{className:"max-w-xl mx-auto text-xs sm:text-sm md:text-base font-mono text-neutral-400 tracking-wider uppercase",children:"Break it if you can. It still ships. Built beyond boundaries."}),y.jsxs("div",{className:"pt-8 flex items-center justify-center gap-3",children:[y.jsx("span",{className:"w-12 h-[1px] bg-white/20"}),y.jsx("span",{className:"text-[10px] font-mono text-neutral-600 tracking-widest",children:"// 04 //"}),y.jsx("span",{className:"w-12 h-[1px] bg-white/20"})]})]})]}),Uw=()=>y.jsx("section",{id:"team",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08]",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[y.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[y.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"04 //"}),y.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"CORE COLLECTIVE"})]}),y.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase",children:["THE PEOPLE ",y.jsx("span",{className:"font-serif italic font-normal text-white",children:"behind the code."})]})]}),y.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 max-w-md font-sans leading-relaxed",children:"A tight-knit quad of builders combining architectural rigor, intuitive visual design, and deep technical curiosity."})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:dE.map(o=>y.jsxs("div",{className:"group relative rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-7 flex flex-col justify-between hover:border-white/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center justify-between mb-8",children:[y.jsxs("span",{className:"text-xs font-mono text-neutral-500 group-hover:text-accent-cyan transition-colors",children:[o.index," //"]}),y.jsxs("div",{className:"relative w-12 h-12 rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center font-display font-bold text-sm tracking-wider text-white shadow-inner group-hover:scale-105 transition-transform",children:[y.jsx("span",{children:o.avatarPlaceholder}),y.jsx("div",{className:"absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent-cyan/80 ring-2 ring-[#0c0c0e]"})]})]}),y.jsxs("div",{className:"mb-4",children:[y.jsx("h3",{className:"text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-neutral-100",children:o.name}),y.jsx("div",{className:"inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20",children:o.role})]}),y.jsx("p",{className:"text-xs text-neutral-400 font-sans leading-relaxed mb-6",children:o.shortBio}),y.jsxs("div",{className:"space-y-2 mb-8",children:[y.jsx("div",{className:"text-[10px] font-mono uppercase tracking-widest text-neutral-500",children:"Core Focus"}),y.jsx("div",{className:"flex flex-wrap gap-1.5",children:o.skills.map(n=>y.jsx("span",{className:"px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-300",children:n},n))})]})]}),y.jsxs("div",{className:"pt-4 border-t border-white/[0.06] flex items-center justify-between",children:[y.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:"TECH GENZ LAB"}),y.jsxs("div",{className:"flex items-center gap-3",children:[o.linkedin&&y.jsxs("a",{href:o.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-accent-cyan transition-colors",title:`${o.name} on LinkedIn`,children:[y.jsx(JM,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:"LINKEDIN ↗"})]}),o.github&&y.jsx("a",{href:o.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-white transition-colors",title:`${o.name} on GitHub`,children:y.jsx(ul,{className:"w-3.5 h-3.5"})})]})]})]},o.id))})]})}),Lw=()=>{const[o,n]=Ee.useState("all"),a=Ee.useRef(null),s=[{id:"all",label:"ALL TECHNOLOGIES"},{id:"frontend",label:"FRONTEND & UI"},{id:"backend",label:"BACKEND & DATA"},{id:"creative",label:"CREATIVE & 3D"},{id:"ai",label:"AI & SYSTEMS"}],c=o==="all"?$v:$v.filter(f=>f.category===o);return Ee.useEffect(()=>{var N,M;const f=a.current;if(!f)return;const d=f.getContext("2d");if(!d)return;let h=f.width=((N=f.parentElement)==null?void 0:N.clientWidth)||800,p=f.height=((M=f.parentElement)==null?void 0:M.clientHeight)||400;const v=window.matchMedia("(prefers-reduced-motion: reduce)").matches,x=h<768?16:28,m=[];for(let _=0;_<x;_++)m.push({x:Math.random()*h,y:Math.random()*p,vx:v?0:(Math.random()-.5)*.4,vy:v?0:(Math.random()-.5)*.4,radius:1.5+Math.random()*2});let S;const E=()=>{d.clearRect(0,0,h,p);for(let _=0;_<m.length;_++)for(let O=_+1;O<m.length;O++){const I=m[_].x-m[O].x,U=m[_].y-m[O].y,W=Math.sqrt(I*I+U*U),j=130;if(W<j){const P=(1-W/j)*.15;d.strokeStyle=`rgba(255, 255, 255, ${P})`,d.lineWidth=1,d.beginPath(),d.moveTo(m[_].x,m[_].y),d.lineTo(m[O].x,m[O].y),d.stroke()}}for(let _=0;_<m.length;_++){const O=m[_];O.x+=O.vx,O.y+=O.vy,(O.x<0||O.x>h)&&(O.vx*=-1),(O.y<0||O.y>p)&&(O.vy*=-1),d.fillStyle="rgba(255, 255, 255, 0.4)",d.beginPath(),d.arc(O.x,O.y,O.radius,0,Math.PI*2),d.fill()}v||(S=requestAnimationFrame(E))};E();const T=()=>{f.parentElement&&(h=f.width=f.parentElement.clientWidth,p=f.height=f.parentElement.clientHeight)};return window.addEventListener("resize",T),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",T)}},[]),y.jsxs("section",{id:"technology",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-40",children:y.jsx("canvas",{ref:a,className:"w-full h-full"})}),y.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 sm:px-8",children:[y.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[y.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"05 //"}),y.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"TECHNICAL STACK"})]}),y.jsxs("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase",children:["BUILT WITH ",y.jsx("span",{className:"font-serif italic font-normal text-white",children:"purpose."})]})]}),y.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 max-w-md font-sans leading-relaxed",children:"Curated tools and robust frameworks selected strictly for their stability, execution speed, and developer ergonomics."})]}),y.jsx("div",{className:"flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/[0.06]",children:s.map(f=>y.jsx("button",{onClick:()=>n(f.id),className:`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${o===f.id?"bg-white text-black font-semibold shadow-sm":"bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"}`,children:f.label},f.id))}),y.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5",children:c.map(f=>y.jsxs("div",{className:"group p-4 rounded-xl border border-white/[0.08] bg-[#09090c]/80 backdrop-blur-sm hover:border-white/30 hover:bg-[#111115] transition-all duration-300 flex flex-col justify-between",children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-neutral-500 group-hover:bg-accent-cyan transition-colors"}),y.jsx("span",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest",children:f.category})]}),y.jsxs("div",{children:[y.jsx("div",{className:"text-base font-display font-bold text-white group-hover:translate-x-0.5 transition-transform",children:f.name}),y.jsx("div",{className:"text-[11px] font-mono text-neutral-400 mt-0.5",children:f.tag})]})]},f.name))})]})]})},Ow=()=>{const[o,n]=Ee.useState({name:"",email:"",subject:"",message:""}),[a,s]=Ee.useState({}),[c,f]=Ee.useState(!1),[d,h]=Ee.useState(!1),[p,v]=Ee.useState(!1),x=Ee.useRef(null);Ee.useEffect(()=>{var P,G;const T=x.current;if(!T)return;const N=T.getContext("2d");if(!N)return;let M=T.width=((P=T.parentElement)==null?void 0:P.clientWidth)||1200,_=T.height=((G=T.parentElement)==null?void 0:G.clientHeight)||800,O=0,I;const U=window.matchMedia("(prefers-reduced-motion: reduce)").matches,W=()=>{O+=.003,N.fillStyle="#050505",N.fillRect(0,0,M,_);const D=[{x:M*.3+Math.sin(O)*120,y:_*.4+Math.cos(O*.8)*80,r:350,alpha:.05},{x:M*.7+Math.cos(O*.7)*140,y:_*.6+Math.sin(O*.9)*90,r:420,alpha:.04},{x:M*.5+Math.sin(O*1.2)*80,y:_*.8+Math.cos(O*.5)*60,r:300,alpha:.03}];for(const C of D){const F=N.createRadialGradient(C.x,C.y,0,C.x,C.y,C.r);F.addColorStop(0,`rgba(255, 255, 255, ${C.alpha})`),F.addColorStop(.5,`rgba(200, 215, 230, ${C.alpha*.5})`),F.addColorStop(1,"rgba(5, 5, 5, 0)"),N.fillStyle=F,N.fillRect(0,0,M,_)}U||(I=requestAnimationFrame(W))};W();const j=()=>{T.parentElement&&(M=T.width=T.parentElement.clientWidth,_=T.height=T.parentElement.clientHeight)};return window.addEventListener("resize",j),()=>{cancelAnimationFrame(I),window.removeEventListener("resize",j)}},[]);const m=()=>{const T={};return o.name.trim()||(T.name="Name is required"),o.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(T.email="Please enter a valid email address"):T.email="Email address is required",o.subject.trim()||(T.subject="Subject is required"),o.message.trim()?o.message.trim().length<15&&(T.message="Please provide at least 15 characters"):T.message="Message cannot be empty",s(T),Object.keys(T).length===0},S=T=>{T.preventDefault(),m()&&(f(!0),setTimeout(()=>{f(!1),h(!0);const N=`mailto:${bn.contactEmail}?subject=${encodeURIComponent(`[Tech Genz Inquiry] ${o.subject}`)}&body=${encodeURIComponent(`From: ${o.name} (${o.email})

${o.message}`)}`;window.location.href=N},1e3))},E=()=>{var T;(T=navigator.clipboard)==null||T.writeText(bn.contactEmail),v(!0),setTimeout(()=>v(!1),2200)};return y.jsxs("section",{id:"contact",className:"relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 pointer-events-none",children:y.jsx("canvas",{ref:x,className:"w-full h-full opacity-60"})}),y.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 sm:px-8",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-12",children:[y.jsx("span",{className:"text-xs font-mono text-neutral-500 uppercase tracking-widest",children:"06 //"}),y.jsx("span",{className:"text-xs font-mono text-neutral-400 uppercase tracking-widest",children:"INITIATE CONTACT"})]}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",children:[y.jsxs("div",{className:"lg:col-span-5 space-y-8",children:[y.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),y.jsx("span",{children:"AVAILABLE FOR COLLABORATION"})]}),y.jsxs("div",{children:[y.jsxs("h2",{className:"text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-metallic uppercase leading-[1.05]",children:["LET'S BUILD ",y.jsx("br",{}),y.jsx("span",{className:"font-serif italic font-normal text-white",children:"something."})]}),y.jsx("p",{className:"mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed",children:"Have an ambitious idea, a technical challenge, or an opportunity to partner? Tech Genz is built to engineer high-impact solutions."})]}),y.jsxs("div",{className:"p-7 rounded-2xl border border-white/[0.12] bg-[#0c0c0f]/80 backdrop-blur-md space-y-6 shadow-xl",children:[y.jsxs("div",{className:"border-b border-white/[0.08] pb-4",children:[y.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1",children:"OFFICIAL INBOX"}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("span",{className:"text-sm font-mono text-white select-all",children:bn.contactEmail}),y.jsx("button",{onClick:E,className:"p-1.5 rounded-lg border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors",title:"Copy email to clipboard",children:p?y.jsx(Uh,{className:"w-4 h-4 text-emerald-400"}):y.jsx(kM,{className:"w-4 h-4"})})]})]}),y.jsxs("div",{className:"border-b border-white/[0.08] pb-4",children:[y.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1",children:"CODE ORGANIZATION"}),y.jsxs("a",{href:bn.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-sm font-mono text-white hover:text-accent-cyan transition-colors",children:[y.jsx(ul,{className:"w-4 h-4"}),y.jsx("span",{children:"github.com/Tech-Genz ↗"})]})]}),y.jsxs("div",{children:[y.jsx("div",{className:"text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1",children:"AVAILABILITY"}),y.jsx("p",{className:"text-xs font-sans text-neutral-300",children:bn.availability})]})]})]}),y.jsx("div",{className:"lg:col-span-7",children:y.jsxs("div",{className:"rounded-3xl border border-white/[0.12] bg-[#0c0c0f]/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl",children:[y.jsx("h3",{className:"text-xl sm:text-2xl font-display font-bold text-white mb-2",children:"Send a Dispatch"}),y.jsx("p",{className:"text-xs text-neutral-400 mb-8 font-mono",children:"Fill in the details below. Our team reviews all incoming transmissions directly."}),d?y.jsxs("div",{className:"p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-center space-y-4",children:[y.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto",children:y.jsx(Uh,{className:"w-6 h-6"})}),y.jsx("h4",{className:"text-lg font-display font-bold text-white",children:"Transmission Dispatched"}),y.jsxs("p",{className:"text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed",children:["Your dispatch payload has been compiled. If your mail client did not open automatically, contact us directly at"," ",y.jsx("span",{className:"text-white font-mono",children:bn.contactEmail}),"."]}),y.jsx("button",{onClick:()=>h(!1),className:"mt-4 px-5 py-2 rounded-full border border-white/20 text-xs font-mono text-white hover:bg-white/10 transition-colors",children:"Send Another Message"})]}):y.jsxs("form",{onSubmit:S,noValidate:!0,className:"space-y-6",children:[y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[y.jsxs("div",{children:[y.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2",children:["Your Name ",y.jsx("span",{className:"text-red-400",children:"*"})]}),y.jsx("input",{type:"text",value:o.name,onChange:T=>n({...o,name:T.target.value}),placeholder:"Alex Morgan",className:`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${a.name?"border-red-500/80":"border-white/10 focus:border-white/40"} text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}),a.name&&y.jsx("p",{className:"mt-1 text-[11px] text-red-400 font-mono",children:a.name})]}),y.jsxs("div",{children:[y.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2",children:["Email Address ",y.jsx("span",{className:"text-red-400",children:"*"})]}),y.jsx("input",{type:"email",value:o.email,onChange:T=>n({...o,email:T.target.value}),placeholder:"alex@domain.com",className:`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${a.email?"border-red-500/80":"border-white/10 focus:border-white/40"} text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}),a.email&&y.jsx("p",{className:"mt-1 text-[11px] text-red-400 font-mono",children:a.email})]})]}),y.jsxs("div",{children:[y.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2",children:["Subject / Project Scope ",y.jsx("span",{className:"text-red-400",children:"*"})]}),y.jsx("input",{type:"text",value:o.subject,onChange:T=>n({...o,subject:T.target.value}),placeholder:"High-performance Web App / 3D Canvas Architecture",className:`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${a.subject?"border-red-500/80":"border-white/10 focus:border-white/40"} text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans`}),a.subject&&y.jsx("p",{className:"mt-1 text-[11px] text-red-400 font-mono",children:a.subject})]}),y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-neutral-400",children:["Message Brief ",y.jsx("span",{className:"text-red-400",children:"*"})]}),y.jsxs("span",{className:"text-[10px] font-mono text-neutral-500",children:[o.message.length," chars"]})]}),y.jsx("textarea",{rows:5,value:o.message,onChange:T=>n({...o,message:T.target.value}),placeholder:"Outline your project timeline, technical targets, or collaborative inquiry...",className:`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${a.message?"border-red-500/80":"border-white/10 focus:border-white/40"} text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors font-sans resize-none`}),a.message&&y.jsx("p",{className:"mt-1 text-[11px] text-red-400 font-mono",children:a.message})]}),y.jsx("button",{type:"submit",disabled:c,className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 disabled:opacity-50 transition-all duration-300 shadow-lg cursor-pointer",children:c?y.jsx("span",{children:"COMPILING DISPATCH..."}):y.jsxs(y.Fragment,{children:[y.jsx("span",{children:"TRANSMIT MESSAGE"}),y.jsx(aE,{className:"w-3.5 h-3.5"})]})})]})]})})]})]})]})},zw=()=>{const o=new Date().getFullYear(),n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return y.jsx("footer",{className:"relative w-full bg-[#050505] border-t border-white/[0.08] py-16 text-neutral-400",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06] items-start",children:[y.jsxs("div",{className:"md:col-span-6 space-y-4",children:[y.jsxs("div",{className:"text-xl font-display font-bold tracking-widest text-white flex items-center gap-2",children:[y.jsx("span",{children:bn.name}),y.jsx("span",{className:"text-neutral-600 font-mono text-sm",children:"//"})]}),y.jsx("p",{className:"text-xs sm:text-sm text-neutral-400 max-w-sm font-sans leading-relaxed",children:bn.intro}),y.jsx("div",{className:"text-[11px] font-mono text-neutral-600",children:"ENGINEERED FOR THE OPEN WEB • ALL RIGHTS RESERVED"})]}),y.jsxs("div",{className:"md:col-span-3 space-y-3",children:[y.jsx("div",{className:"text-xs font-mono text-neutral-300 uppercase tracking-widest",children:"NAVIGATION"}),y.jsxs("ul",{className:"space-y-2 text-xs font-mono text-neutral-400",children:[y.jsx("li",{children:y.jsx("a",{href:"#home",className:"hover:text-white transition-colors",children:"00 // HOME"})}),y.jsx("li",{children:y.jsx("a",{href:"#about",className:"hover:text-white transition-colors",children:"01 // ABOUT"})}),y.jsx("li",{children:y.jsx("a",{href:"#services",className:"hover:text-white transition-colors",children:"02 // SERVICES"})}),y.jsx("li",{children:y.jsx("a",{href:"#projects",className:"hover:text-white transition-colors",children:"03 // SELECTED WORK"})}),y.jsx("li",{children:y.jsx("a",{href:"#team",className:"hover:text-white transition-colors",children:"04 // TEAM"})}),y.jsx("li",{children:y.jsx("a",{href:"#contact",className:"hover:text-white transition-colors",children:"05 // CONTACT"})})]})]}),y.jsxs("div",{className:"md:col-span-3 space-y-4",children:[y.jsx("div",{className:"text-xs font-mono text-neutral-300 uppercase tracking-widest",children:"ECOSYSTEM"}),y.jsxs("ul",{className:"space-y-2 text-xs font-mono",children:[y.jsx("li",{children:y.jsxs("a",{href:bn.githubOrg,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors inline-flex items-center gap-1.5",children:[y.jsx(ul,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:"GitHub Organization ↗"})]})}),y.jsx("li",{children:y.jsx("a",{href:"https://sharepinz.site/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-accent-cyan transition-colors",children:"SharePinz Live Platform ↗"})}),y.jsx("li",{children:y.jsx("a",{href:"https://github.com/Tech-Genz/SharePinz",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"SharePinz Repository ↗"})})]}),y.jsx("div",{className:"pt-4",children:y.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-300 hover:text-white transition-all",children:[y.jsx("span",{children:"BACK TO SUMMIT"}),y.jsx(LM,{className:"w-3.5 h-3.5"})]})})]})]}),y.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4",children:[y.jsxs("div",{children:["© ",o," TECH GENZ. ALL SYSTEMS OPERATIONAL."]}),y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsx("span",{children:"DESIGNED WITH PRECISION"}),y.jsx("span",{children:"•"}),y.jsx("span",{className:"text-neutral-400",children:"LATENCY < 16MS"})]})]})]})})},Pw=({onComplete:o})=>{const n=Ee.useRef(null),[a,s]=Ee.useState(!1),[c,f]=Ee.useState(!1);Ee.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o();return}const p=n.current;if(!p)return;const v=p.getContext("2d");if(!v){o();return}let x=p.width=window.innerWidth,m=p.height=window.innerHeight;const S=document.createElement("canvas"),E=S.getContext("2d");if(!E){o();return}S.width=x,S.height=m;const T=Math.min(x*.12,130);E.font=`800 ${T}px "Space Grotesk", sans-serif`,E.fillStyle="#FFFFFF",E.textAlign="center",E.textBaseline="middle",E.fillText("TECH GENZ",x/2,m/2);const M=E.getImageData(0,0,x,m).data,_=[],O=x<768?5:4;for(let G=0;G<m;G+=O)for(let D=0;D<x;D+=O){const C=(G*x+D)*4;if(M[C+3]>140){const ft=Math.random()*Math.PI*2,it=150+Math.random()*450,at=x/2+Math.cos(ft)*it,dt=m/2+Math.sin(ft)*it,X=180+Math.floor(Math.random()*75),rt=`rgb(${X}, ${X+5}, ${X+15})`;_.push({x:at,y:dt,originX:D,originY:G,vx:0,vy:0,size:1.8+Math.random()*1.6,alpha:.1+Math.random()*.9,color:rt})}}let I,U=performance.now(),W=!1;const j=G=>{I=requestAnimationFrame(j);const D=(G-U)/1e3;v.fillStyle="#050505",v.fillRect(0,0,x,m);const C=Math.min(.25,D*.12),F=v.createRadialGradient(x/2,m/2,0,x/2,m/2,x*.45);F.addColorStop(0,`rgba(255, 255, 255, ${C})`),F.addColorStop(.5,`rgba(180, 200, 220, ${C*.3})`),F.addColorStop(1,"rgba(5, 5, 5, 0)"),v.fillStyle=F,v.fillRect(0,0,x,m);const ft=Math.min(.12,.04+D*.04);for(let it=0;it<_.length;it++){const at=_[it],dt=at.originX-at.x,X=at.originY-at.y;at.vx+=dt*.04,at.vy+=X*.04,at.vx*=.82,at.vy*=.82,at.x+=at.vx*ft*2.2,at.y+=at.vy*ft*2.2,v.fillStyle=at.color,v.beginPath(),v.arc(at.x,at.y,at.size*.5,0,Math.PI*2),v.fill()}if(D>1.6){const it=(D-1.6)*1.5,at=x*.2+it*x*.6;v.save(),v.globalCompositeOperation="lighter";const dt=v.createLinearGradient(at-80,0,at+80,0);dt.addColorStop(0,"rgba(255, 255, 255, 0)"),dt.addColorStop(.5,"rgba(255, 255, 255, 0.35)"),dt.addColorStop(1,"rgba(255, 255, 255, 0)"),v.fillStyle=dt,v.fillRect(x*.15,m*.35,x*.7,m*.3),v.restore()}D>2.8&&!W&&(W=!0,s(!0),setTimeout(()=>{o()},600))};I=requestAnimationFrame(j);const P=G=>{(G.key==="Escape"||G.key===" "||G.key==="Enter")&&(s(!0),setTimeout(o,300))};return window.addEventListener("keydown",P),()=>{cancelAnimationFrame(I),window.removeEventListener("keydown",P)}},[o]);const d=()=>{s(!0),setTimeout(o,300)};return y.jsxs("div",{onClick:d,className:`fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-700 cursor-pointer ${a?"opacity-0 pointer-events-none":"opacity-100"}`,children:[y.jsx("canvas",{ref:n,className:"absolute inset-0 w-full h-full"}),y.jsxs("button",{onClick:h=>{h.stopPropagation(),d()},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:"absolute bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:border-white/50 transition-all duration-300",children:[y.jsx("span",{children:"Skip Intro"}),y.jsx("span",{className:"text-[10px] text-neutral-500",children:"[ESC]"})]}),y.jsx("div",{className:"absolute bottom-8 left-8 text-xs font-mono tracking-widest text-neutral-500 uppercase",children:"TECH GENZ // SYSTEM INIT"})]})},Iw=()=>{const[o,n]=Ee.useState(!1),[a,s]=Ee.useState("home"),[c,f]=Ee.useState(0);return Ee.useEffect(()=>{const d=()=>{const h=window.scrollY,p=window.innerHeight,v=Math.min(1,Math.max(0,h/(p*.9)));f(v);const x=["home","about","services","projects","team","technology","contact"];for(const m of x){const S=document.getElementById(m);if(S){const E=S.getBoundingClientRect();if(E.top<=200&&E.bottom>=200){s(m);break}}}};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),y.jsxs("div",{className:"min-h-screen bg-[#050505] text-[#F5F5F7] font-sans selection:bg-white selection:text-black overflow-x-hidden",children:[!o&&y.jsx(Pw,{onComplete:()=>n(!0)}),y.jsx(hE,{activeSection:a}),y.jsxs("main",{children:[y.jsx(Aw,{scrollProgress:c}),y.jsx(ww,{}),y.jsx(Rw,{}),y.jsx(Nw,{}),y.jsx(Dw,{}),y.jsx(Uw,{}),y.jsx(Lw,{}),y.jsx(Ow,{})]}),y.jsx(zw,{})]})};TM.createRoot(document.getElementById("root")).render(y.jsx(vM.StrictMode,{children:y.jsx(Iw,{})}));setTimeout(()=>{const o=document.getElementById("root");o&&o.children.length===0&&((a=>{if(!document.querySelector(`link[href="${a}"]`)){const s=document.createElement("link");s.rel="stylesheet",s.crossOrigin="",s.href=a,document.head.appendChild(s)}})("/assets/index.css"),new Function("return import('/assets/index.js')")().catch(a=>{console.error("Failed to load compiled production bundle:",a)}))},50);
