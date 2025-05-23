(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var ac={exports:{}},Mo={},lc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function A_(){if(up)return dt;up=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function S(U,ne,Ue){this.props=U,this.context=ne,this.refs=R,this.updater=Ue||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=S.prototype;function C(U,ne,Ue){this.props=U,this.context=ne,this.refs=R,this.updater=Ue||y}var L=C.prototype=new g;L.constructor=C,T(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,W=Object.prototype.hasOwnProperty,k={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function j(U,ne,Ue){var Z,he={},Ee=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)W.call(ne,Z)&&!I.hasOwnProperty(Z)&&(he[Z]=ne[Z]);var we=arguments.length-2;if(we===1)he.children=Ue;else if(1<we){for(var je=Array(we),Ge=0;Ge<we;Ge++)je[Ge]=arguments[Ge+2];he.children=je}if(U&&U.defaultProps)for(Z in we=U.defaultProps,we)he[Z]===void 0&&(he[Z]=we[Z]);return{$$typeof:o,type:U,key:Ee,ref:ve,props:he,_owner:k.current}}function b(U,ne){return{$$typeof:o,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function z(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return ne[Ue]})}var oe=/\/+/g;function ee(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ne.toString(36)}function ce(U,ne,Ue,Z,he){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Ee){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case o:case e:ve=!0}}if(ve)return ve=U,he=he(ve),U=Z===""?"."+ee(ve,0):Z,P(he)?(Ue="",U!=null&&(Ue=U.replace(oe,"$&/")+"/"),ce(he,ne,Ue,"",function(Ge){return Ge})):he!=null&&(A(he)&&(he=b(he,Ue+(!he.key||ve&&ve.key===he.key?"":(""+he.key).replace(oe,"$&/")+"/")+U)),ne.push(he)),1;if(ve=0,Z=Z===""?".":Z+":",P(U))for(var we=0;we<U.length;we++){Ee=U[we];var je=Z+ee(Ee,we);ve+=ce(Ee,ne,Ue,je,he)}else if(je=x(U),typeof je=="function")for(U=je.call(U),we=0;!(Ee=U.next()).done;)Ee=Ee.value,je=Z+ee(Ee,we++),ve+=ce(Ee,ne,Ue,je,he);else if(Ee==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function pe(U,ne,Ue){if(U==null)return U;var Z=[],he=0;return ce(U,Z,"","",function(Ee){return ne.call(Ue,Ee,he++)}),Z}function se(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:pe,forEach:function(U,ne,Ue){pe(U,function(){ne.apply(this,arguments)},Ue)},count:function(U){var ne=0;return pe(U,function(){ne++}),ne},toArray:function(U){return pe(U,function(ne){return ne})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},dt.Component=S,dt.Fragment=n,dt.Profiler=a,dt.PureComponent=C,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,dt.act=re,dt.cloneElement=function(U,ne,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=T({},U.props),he=U.key,Ee=U.ref,ve=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,ve=k.current),ne.key!==void 0&&(he=""+ne.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(je in ne)W.call(ne,je)&&!I.hasOwnProperty(je)&&(Z[je]=ne[je]===void 0&&we!==void 0?we[je]:ne[je])}var je=arguments.length-2;if(je===1)Z.children=Ue;else if(1<je){we=Array(je);for(var Ge=0;Ge<je;Ge++)we[Ge]=arguments[Ge+2];Z.children=we}return{$$typeof:o,type:U.type,key:he,ref:Ee,props:Z,_owner:ve}},dt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},dt.createElement=j,dt.createFactory=function(U){var ne=j.bind(null,U);return ne.type=U,ne},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:d,render:U}},dt.isValidElement=A,dt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:se}},dt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},dt.startTransition=function(U){var ne=B.transition;B.transition={};try{U()}finally{B.transition=ne}},dt.unstable_act=re,dt.useCallback=function(U,ne){return le.current.useCallback(U,ne)},dt.useContext=function(U){return le.current.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},dt.useEffect=function(U,ne){return le.current.useEffect(U,ne)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(U,ne,Ue){return le.current.useImperativeHandle(U,ne,Ue)},dt.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},dt.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},dt.useMemo=function(U,ne){return le.current.useMemo(U,ne)},dt.useReducer=function(U,ne,Ue){return le.current.useReducer(U,ne,Ue)},dt.useRef=function(U){return le.current.useRef(U)},dt.useState=function(U){return le.current.useState(U)},dt.useSyncExternalStore=function(U,ne,Ue){return le.current.useSyncExternalStore(U,ne,Ue)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var cp;function Df(){return cp||(cp=1,lc.exports=A_()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function C_(){if(fp)return Mo;fp=1;var o=Df(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,_={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:y,props:_,_owner:a.current}}return Mo.Fragment=n,Mo.jsx=f,Mo.jsxs=f,Mo}var dp;function R_(){return dp||(dp=1,ac.exports=C_()),ac.exports}var ye=R_(),gn=Df(),Xa={},uc={exports:{}},Pn={},cc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function P_(){return hp||(hp=1,function(o){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var U=re-1>>>1,ne=B[U];if(0<a(ne,ae))B[U]=ae,B[re]=ne,re=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var U=0,ne=B.length,Ue=ne>>>1;U<Ue;){var Z=2*(U+1)-1,he=B[Z],Ee=Z+1,ve=B[Ee];if(0>a(he,re))Ee<ne&&0>a(ve,he)?(B[U]=ve,B[Ee]=re,U=Ee):(B[U]=he,B[Z]=re,U=Z);else if(Ee<ne&&0>a(ve,re))B[U]=ve,B[Ee]=re,U=Ee;else break e}}return ae}function a(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,_=null,x=3,y=!1,T=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function P(B){if(R=!1,L(B),!T)if(n(p)!==null)T=!0,se(W);else{var ae=n(m);ae!==null&&le(P,ae.startTime-B)}}function W(B,ae){T=!1,R&&(R=!1,g(j),j=-1),y=!0;var re=x;try{for(L(ae),_=n(p);_!==null&&(!(_.expirationTime>ae)||B&&!z());){var U=_.callback;if(typeof U=="function"){_.callback=null,x=_.priorityLevel;var ne=U(_.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?_.callback=ne:_===n(p)&&r(p),L(ae)}else r(p);_=n(p)}if(_!==null)var Ue=!0;else{var Z=n(m);Z!==null&&le(P,Z.startTime-ae),Ue=!1}return Ue}finally{_=null,x=re,y=!1}}var k=!1,I=null,j=-1,b=5,A=-1;function z(){return!(o.unstable_now()-A<b)}function oe(){if(I!==null){var B=o.unstable_now();A=B;var ae=!0;try{ae=I(!0,B)}finally{ae?ee():(k=!1,I=null)}}else k=!1}var ee;if(typeof C=="function")ee=function(){C(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=oe,ee=function(){pe.postMessage(null)}}else ee=function(){S(oe,0)};function se(B){I=B,k||(k=!0,ee())}function le(B,ae){j=S(function(){B(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){T||y||(T=!0,se(W))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return B()}finally{x=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=x;x=B;try{return ae()}finally{x=re}},o.unstable_scheduleCallback=function(B,ae,re){var U=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:v++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(B.sortIndex=re,e(m,B),n(p)===null&&B===n(m)&&(R?(g(j),j=-1):R=!0,le(P,re-U))):(B.sortIndex=ne,e(p,B),T||y||(T=!0,se(W))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var ae=x;return function(){var re=x;x=ae;try{return B.apply(this,arguments)}finally{x=re}}}}(fc)),fc}var pp;function b_(){return pp||(pp=1,cc.exports=P_()),cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function D_(){if(mp)return Pn;mp=1;var o=Df(),e=b_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(t){return p.call(_,t)?!0:p.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,C);S[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,C);S[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,C);S[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var P=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),k=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ue=!1;function Z(t,i){if(!t||Ue)return"";Ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,N=h.length-1;1<=M&&0<=N&&c[M]!==h[N];)N--;for(;1<=M&&0<=N;M--,N--)if(c[M]!==h[N]){if(M!==1||N!==1)do if(M--,N--,0>N||c[M]!==h[N]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=N);break}}}finally{Ue=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ne(t):""}function he(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case k:return"Portal";case b:return"Profiler";case j:return"StrictMode";case ee:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=je(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){t._valueTracker||(t._valueTracker=Ge(t))}function bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=je(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function _n(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=we(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ct(t,i){ht(t,i);var s=we(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,s):i.hasOwnProperty("defaultValue")&&wt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function wt(t,i,s){(i!=="number"||ut(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var We=Array.isArray;function D(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+we(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(We(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:we(s)}}function fe(t,i){var s=we(i.value),l=we(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ke=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function $e(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),xe[i]=xe[t]})});function et(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||xe.hasOwnProperty(t)&&xe[t]?(""+i).trim():i+"px"}function tt(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=et(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Oe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,ie=null,de=null;function De(t){if(t=oo(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=oa(i),Ce(t.stateNode,t.type,i))}}function be(t){ie?de?de.push(t):de=[t]:ie=t}function st(){if(ie){var t=ie,i=de;if(de=ie=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Lt(t,i){return t(i)}function Yt(){}var vt=!1;function En(t,i,s){if(vt)return t(i,s);vt=!0;try{return Lt(t,i,s)}finally{vt=!1,(ie!==null||de!==null)&&(Yt(),st())}}function vn(t,i){var s=t.stateNode;if(s===null)return null;var l=oa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var $r=!1;if(d)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{$r=!1}function _i(t,i,s,l,c,h,M,N,F){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(s,Q)}catch(ge){this.onError(ge)}}var vi=!1,Sr=null,yr=!1,Vi=null,ko={onError:function(t){vi=!0,Sr=t}};function Kr(t,i,s,l,c,h,M,N,F){vi=!1,Sr=null,_i.apply(ko,arguments)}function Bo(t,i,s,l,c,h,M,N,F){if(Kr.apply(this,arguments),vi){if(vi){var Q=Sr;vi=!1,Sr=null}else throw Error(n(198));yr||(yr=!0,Vi=Q)}}function ui(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function zo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ho(t){if(ui(t)!==t)throw Error(n(188))}function bl(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Ho(c),t;if(h===l)return Ho(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,N=c.child;N;){if(N===s){M=!0,s=c,l=h;break}if(N===l){M=!0,l=c,s=h;break}N=N.sibling}if(!M){for(N=h.child;N;){if(N===s){M=!0,s=h,l=c;break}if(N===l){M=!0,l=h,s=c;break}N=N.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Vo(t){return t=bl(t),t!==null?Go(t):null}function Go(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Go(t);if(i!==null)return i;t=t.sibling}return null}var Wo=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,G=e.unstable_shouldYield,J=e.unstable_requestPaint,q=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ke=e.unstable_LowPriority,nt=e.unstable_IdlePriority,Je=null,ze=null;function mt(t){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:_t,Bt=Math.log,It=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(Bt(t)/It|0)|0}var qe=64,zt=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ln(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var N=M&~c;N!==0?l=pt(N):(h&=M,h!==0&&(l=pt(h)))}else M=s&~c,M!==0?l=pt(M):h!==0&&(l=pt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-ot(i),c=1<<s,l|=t[s],i&=~c;return l}function Gi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ot(h),N=1<<M,F=c[M];F===-1?((N&s)===0||(N&l)!==0)&&(c[M]=Gi(N,i)):F<=i&&(t.expiredLanes|=N),h&=~N}}function xi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ct(){var t=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),t}function un(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Qt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ot(i),t[i]=s}function sn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-ot(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Jt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ot(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var xt=0;function ci(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Vf,Dl,Gf,Wf,Xf,Ll=!1,Xo=[],Wi=null,Xi=null,ji=null,Ws=new Map,Xs=new Map,Yi=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Ws.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(i.pointerId)}}function js(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=oo(i),i!==null&&Dl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function $m(t,i,s,l,c){switch(i){case"focusin":return Wi=js(Wi,t,i,s,l,c),!0;case"dragenter":return Xi=js(Xi,t,i,s,l,c),!0;case"mouseover":return ji=js(ji,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Ws.set(h,js(Ws.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Xs.set(h,js(Xs.get(h)||null,t,i,s,l,c)),!0}return!1}function Yf(t){var i=Mr(t.target);if(i!==null){var s=ui(i);if(s!==null){if(i=s.tag,i===13){if(i=zo(s),i!==null){t.blockedOn=i,Xf(t.priority,function(){Gf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ul(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Et=l,s.target.dispatchEvent(l),Et=null}else return i=oo(s),i!==null&&Dl(i),t.blockedOn=s,!1;i.shift()}return!0}function qf(t,i,s){jo(t)&&s.delete(i)}function Km(){Ll=!1,Wi!==null&&jo(Wi)&&(Wi=null),Xi!==null&&jo(Xi)&&(Xi=null),ji!==null&&jo(ji)&&(ji=null),Ws.forEach(qf),Xs.forEach(qf)}function Ys(t,i){t.blockedOn===i&&(t.blockedOn=null,Ll||(Ll=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Km)))}function qs(t){function i(c){return Ys(c,t)}if(0<Xo.length){Ys(Xo[0],t);for(var s=1;s<Xo.length;s++){var l=Xo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&Ys(Wi,t),Xi!==null&&Ys(Xi,t),ji!==null&&Ys(ji,t),Ws.forEach(i),Xs.forEach(i),s=0;s<Yi.length;s++)l=Yi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(s=Yi[0],s.blockedOn===null);)Yf(s),s.blockedOn===null&&Yi.shift()}var Zr=P.ReactCurrentBatchConfig,Yo=!0;function Zm(t,i,s,l){var c=xt,h=Zr.transition;Zr.transition=null;try{xt=1,Nl(t,i,s,l)}finally{xt=c,Zr.transition=h}}function Qm(t,i,s,l){var c=xt,h=Zr.transition;Zr.transition=null;try{xt=4,Nl(t,i,s,l)}finally{xt=c,Zr.transition=h}}function Nl(t,i,s,l){if(Yo){var c=Ul(t,i,s,l);if(c===null)Zl(t,i,l,qo,s),jf(t,l);else if($m(c,t,i,s,l))l.stopPropagation();else if(jf(t,l),i&4&&-1<qm.indexOf(t)){for(;c!==null;){var h=oo(c);if(h!==null&&Vf(h),h=Ul(t,i,s,l),h===null&&Zl(t,i,l,qo,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else Zl(t,i,l,null,s)}}var qo=null;function Ul(t,i,s,l){if(qo=null,t=V(l),t=Mr(t),t!==null)if(i=ui(t),i===null)t=null;else if(s=i.tag,s===13){if(t=zo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return qo=t,null}function $f(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Me:return 1;case Re:return 4;case Le:case ke:return 16;case nt:return 536870912;default:return 16}default:return 16}}var qi=null,Il=null,$o=null;function Kf(){if($o)return $o;var t,i=Il,s=i.length,l,c="value"in qi?qi.value:qi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return $o=c.slice(t,1<l?1-l:void 0)}function Ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Zf(){return!1}function Un(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zo:Zf,this.isPropagationStopped=Zf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Un(Qr),$s=re({},Qr,{view:0,detail:0}),Jm=Un($s),Ol,kl,Ks,Qo=re({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(Ol=t.screenX-Ks.screenX,kl=t.screenY-Ks.screenY):kl=Ol=0,Ks=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:kl}}),Qf=Un(Qo),eg=re({},Qo,{dataTransfer:0}),tg=Un(eg),ng=re({},$s,{relatedTarget:0}),Bl=Un(ng),ig=re({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Un(ig),sg=re({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=Un(sg),ag=re({},Qr,{data:0}),Jf=Un(ag),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=cg[t])?!!i[t]:!1}function zl(){return fg}var dg=re({},$s,{key:function(t){if(t.key){var i=lg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hg=Un(dg),pg=re({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=Un(pg),mg=re({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),gg=Un(mg),_g=re({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=Un(_g),xg=re({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=Un(xg),yg=[9,13,27,32],Hl=d&&"CompositionEvent"in window,Zs=null;d&&"documentMode"in document&&(Zs=document.documentMode);var Mg=d&&"TextEvent"in window&&!Zs,td=d&&(!Hl||Zs&&8<Zs&&11>=Zs),nd=" ",id=!1;function rd(t,i){switch(t){case"keyup":return yg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Eg(t,i){switch(t){case"compositionend":return sd(i);case"keypress":return i.which!==32?null:(id=!0,nd);case"textInput":return t=i.data,t===nd&&id?null:t;default:return null}}function Tg(t,i){if(Jr)return t==="compositionend"||!Hl&&rd(t,i)?(t=Kf(),$o=Il=qi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return td&&i.locale!=="ko"?null:i.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!wg[t.type]:i==="textarea"}function ad(t,i,s,l){be(l),i=ia(i,"onChange"),0<i.length&&(s=new Fl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Qs=null,Js=null;function Ag(t){wd(t,0)}function Jo(t){var i=rs(t);if(bt(i))return t}function Cg(t,i){if(t==="change")return i}var ld=!1;if(d){var Vl;if(d){var Gl="oninput"in document;if(!Gl){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),Gl=typeof ud.oninput=="function"}Vl=Gl}else Vl=!1;ld=Vl&&(!document.documentMode||9<document.documentMode)}function cd(){Qs&&(Qs.detachEvent("onpropertychange",fd),Js=Qs=null)}function fd(t){if(t.propertyName==="value"&&Jo(Js)){var i=[];ad(i,Js,t,V(t)),En(Ag,i)}}function Rg(t,i,s){t==="focusin"?(cd(),Qs=i,Js=s,Qs.attachEvent("onpropertychange",fd)):t==="focusout"&&cd()}function Pg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(Js)}function bg(t,i){if(t==="click")return Jo(i)}function Dg(t,i){if(t==="input"||t==="change")return Jo(i)}function Lg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Lg;function eo(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hd(t,i){var s=dd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=dd(s)}}function pd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?pd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function md(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=ut(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ng(t){var i=md(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&pd(s.ownerDocument.documentElement,s)){if(l!==null&&Wl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=hd(s,h);var M=hd(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ug=d&&"documentMode"in document&&11>=document.documentMode,es=null,Xl=null,to=null,jl=!1;function gd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;jl||es==null||es!==ut(l)||(l=es,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),to&&eo(to,l)||(to=l,l=ia(Xl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=es)))}function ea(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ts={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Yl={},_d={};d&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function ta(t){if(Yl[t])return Yl[t];if(!ts[t])return t;var i=ts[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in _d)return Yl[t]=i[s];return t}var vd=ta("animationend"),xd=ta("animationiteration"),Sd=ta("animationstart"),yd=ta("transitionend"),Md=new Map,Ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Md.set(t,i),u(i,[t])}for(var ql=0;ql<Ed.length;ql++){var $l=Ed[ql],Ig=$l.toLowerCase(),Fg=$l[0].toUpperCase()+$l.slice(1);$i(Ig,"on"+Fg)}$i(vd,"onAnimationEnd"),$i(xd,"onAnimationIteration"),$i(Sd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(yd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Td(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Bo(l,i,void 0,t),t.currentTarget=null}function wd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var N=l[M],F=N.instance,Q=N.currentTarget;if(N=N.listener,F!==h&&c.isPropagationStopped())break e;Td(c,N,Q),h=F}else for(M=0;M<l.length;M++){if(N=l[M],F=N.instance,Q=N.currentTarget,N=N.listener,F!==h&&c.isPropagationStopped())break e;Td(c,N,Q),h=F}}}if(yr)throw t=Vi,yr=!1,Vi=null,t}function Nt(t,i){var s=i[iu];s===void 0&&(s=i[iu]=new Set);var l=t+"__bubble";s.has(l)||(Ad(i,t,2,!1),s.add(l))}function Kl(t,i,s){var l=0;i&&(l|=4),Ad(s,t,l,i)}var na="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[na]){t[na]=!0,r.forEach(function(s){s!=="selectionchange"&&(Og.has(s)||Kl(s,!1,t),Kl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[na]||(i[na]=!0,Kl("selectionchange",!1,i))}}function Ad(t,i,s,l){switch($f(i)){case 1:var c=Zm;break;case 4:c=Qm;break;default:c=Nl}s=c.bind(null,i,s,t),c=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function Zl(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var N=l.stateNode.containerInfo;if(N===c||N.nodeType===8&&N.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;N!==null;){if(M=Mr(N),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}N=N.parentNode}}l=l.return}En(function(){var Q=h,ge=V(s),Se=[];e:{var me=Md.get(t);if(me!==void 0){var Ne=Fl,Be=t;switch(t){case"keypress":if(Ko(s)===0)break e;case"keydown":case"keyup":Ne=hg;break;case"focusin":Be="focus",Ne=Bl;break;case"focusout":Be="blur",Ne=Bl;break;case"beforeblur":case"afterblur":Ne=Bl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=gg;break;case vd:case xd:case Sd:Ne=rg;break;case yd:Ne=vg;break;case"scroll":Ne=Jm;break;case"wheel":Ne=Sg;break;case"copy":case"cut":case"paste":Ne=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=ed}var He=(i&4)!==0,Vt=!He&&t==="scroll",Y=He?me!==null?me+"Capture":null:me;He=[];for(var H=Q,$;H!==null;){$=H;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,Y!==null&&(Te=vn(H,Y),Te!=null&&He.push(ro(H,Te,$)))),Vt)break;H=H.return}0<He.length&&(me=new Ne(me,Be,null,s,ge),Se.push({event:me,listeners:He}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",me&&s!==Et&&(Be=s.relatedTarget||s.fromElement)&&(Mr(Be)||Be[Si]))break e;if((Ne||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ne?(Be=s.relatedTarget||s.toElement,Ne=Q,Be=Be?Mr(Be):null,Be!==null&&(Vt=ui(Be),Be!==Vt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ne=null,Be=Q),Ne!==Be)){if(He=Qf,Te="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(He=ed,Te="onPointerLeave",Y="onPointerEnter",H="pointer"),Vt=Ne==null?me:rs(Ne),$=Be==null?me:rs(Be),me=new He(Te,H+"leave",Ne,s,ge),me.target=Vt,me.relatedTarget=$,Te=null,Mr(ge)===Q&&(He=new He(Y,H+"enter",Be,s,ge),He.target=$,He.relatedTarget=Vt,Te=He),Vt=Te,Ne&&Be)t:{for(He=Ne,Y=Be,H=0,$=He;$;$=ns($))H++;for($=0,Te=Y;Te;Te=ns(Te))$++;for(;0<H-$;)He=ns(He),H--;for(;0<$-H;)Y=ns(Y),$--;for(;H--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=ns(He),Y=ns(Y)}He=null}else He=null;Ne!==null&&Cd(Se,me,Ne,He,!1),Be!==null&&Vt!==null&&Cd(Se,Vt,Be,He,!0)}}e:{if(me=Q?rs(Q):window,Ne=me.nodeName&&me.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&me.type==="file")var Xe=Cg;else if(od(me))if(ld)Xe=Dg;else{Xe=Pg;var Ze=Rg}else(Ne=me.nodeName)&&Ne.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=bg);if(Xe&&(Xe=Xe(t,Q))){ad(Se,Xe,s,ge);break e}Ze&&Ze(t,me,Q),t==="focusout"&&(Ze=me._wrapperState)&&Ze.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch(Ze=Q?rs(Q):window,t){case"focusin":(od(Ze)||Ze.contentEditable==="true")&&(es=Ze,Xl=Q,to=null);break;case"focusout":to=Xl=es=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,gd(Se,s,ge);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":gd(Se,s,ge)}var Qe;if(Hl)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Jr?rd(t,s)&&(it="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(it="onCompositionStart");it&&(td&&s.locale!=="ko"&&(Jr||it!=="onCompositionStart"?it==="onCompositionEnd"&&Jr&&(Qe=Kf()):(qi=ge,Il="value"in qi?qi.value:qi.textContent,Jr=!0)),Ze=ia(Q,it),0<Ze.length&&(it=new Jf(it,t,null,s,ge),Se.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=sd(s),Qe!==null&&(it.data=Qe)))),(Qe=Mg?Eg(t,s):Tg(t,s))&&(Q=ia(Q,"onBeforeInput"),0<Q.length&&(ge=new Jf("onBeforeInput","beforeinput",null,s,ge),Se.push({event:ge,listeners:Q}),ge.data=Qe))}wd(Se,i)})}function ro(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ia(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=vn(t,s),h!=null&&l.unshift(ro(t,h,c)),h=vn(t,i),h!=null&&l.push(ro(t,h,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var N=s,F=N.alternate,Q=N.stateNode;if(F!==null&&F===l)break;N.tag===5&&Q!==null&&(N=Q,c?(F=vn(s,h),F!=null&&M.unshift(ro(s,F,N))):c||(F=vn(s,h),F!=null&&M.push(ro(s,F,N)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var kg=/\r\n?/g,Bg=/\u0000|\uFFFD/g;function Rd(t){return(typeof t=="string"?t:""+t).replace(kg,`
`).replace(Bg,"")}function ra(t,i,s){if(i=Rd(i),Rd(t)!==i&&s)throw Error(n(425))}function sa(){}var Ql=null,Jl=null;function eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(t){return Pd.resolve(null).then(t).catch(Vg)}:tu;function Vg(t){setTimeout(function(){throw t})}function nu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),qs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);qs(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function bd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),fi="__reactFiber$"+is,so="__reactProps$"+is,Si="__reactContainer$"+is,iu="__reactEvents$"+is,Gg="__reactListeners$"+is,Wg="__reactHandles$"+is;function Mr(t){var i=t[fi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Si]||s[fi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=bd(t);t!==null;){if(s=t[fi])return s;t=bd(t)}return i}t=s,s=t.parentNode}return null}function oo(t){return t=t[fi]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function oa(t){return t[so]||null}var ru=[],ss=-1;function Zi(t){return{current:t}}function Ut(t){0>ss||(t.current=ru[ss],ru[ss]=null,ss--)}function Dt(t,i){ss++,ru[ss]=t.current,t.current=i}var Qi={},cn=Zi(Qi),Tn=Zi(!1),Er=Qi;function os(t,i){var s=t.type.contextTypes;if(!s)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function wn(t){return t=t.childContextTypes,t!=null}function aa(){Ut(Tn),Ut(cn)}function Dd(t,i,s){if(cn.current!==Qi)throw Error(n(168));Dt(cn,i),Dt(Tn,s)}function Ld(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},s,l)}function la(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Er=cn.current,Dt(cn,t),Dt(Tn,Tn.current),!0}function Nd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Ld(t,i,Er),l.__reactInternalMemoizedMergedChildContext=t,Ut(Tn),Ut(cn),Dt(cn,t)):Ut(Tn),Dt(Tn,s)}var yi=null,ua=!1,su=!1;function Ud(t){yi===null?yi=[t]:yi.push(t)}function Xg(t){ua=!0,Ud(t)}function Ji(){if(!su&&yi!==null){su=!0;var t=0,i=xt;try{var s=yi;for(xt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}yi=null,ua=!1}catch(c){throw yi!==null&&(yi=yi.slice(t+1)),Wo(Me,Ji),c}finally{xt=i,su=!1}}return null}var as=[],ls=0,ca=null,fa=0,zn=[],Hn=0,Tr=null,Mi=1,Ei="";function wr(t,i){as[ls++]=fa,as[ls++]=ca,ca=t,fa=i}function Id(t,i,s){zn[Hn++]=Mi,zn[Hn++]=Ei,zn[Hn++]=Tr,Tr=t;var l=Mi;t=Ei;var c=32-ot(l)-1;l&=~(1<<c),s+=1;var h=32-ot(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Mi=1<<32-ot(i)+c|s<<c|l,Ei=h+t}else Mi=1<<h|s<<c|l,Ei=t}function ou(t){t.return!==null&&(wr(t,1),Id(t,1,0))}function au(t){for(;t===ca;)ca=as[--ls],as[ls]=null,fa=as[--ls],as[ls]=null;for(;t===Tr;)Tr=zn[--Hn],zn[Hn]=null,Ei=zn[--Hn],zn[Hn]=null,Mi=zn[--Hn],zn[Hn]=null}var In=null,Fn=null,Ft=!1,Qn=null;function Fd(t,i){var s=Xn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Od(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Fn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Tr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Xn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,In=t,Fn=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(Ft){var i=Fn;if(i){var s=i;if(!Od(t,i)){if(lu(t))throw Error(n(418));i=Ki(s.nextSibling);var l=In;i&&Od(t,i)?Fd(l,s):(t.flags=t.flags&-4097|2,Ft=!1,In=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,In=t}}}function kd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function da(t){if(t!==In)return!1;if(!Ft)return kd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!eu(t.type,t.memoizedProps)),i&&(i=Fn)){if(lu(t))throw Bd(),Error(n(418));for(;i;)Fd(t,i),i=Ki(i.nextSibling)}if(kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Fn=Ki(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=In?Ki(t.stateNode.nextSibling):null;return!0}function Bd(){for(var t=Fn;t;)t=Ki(t.nextSibling)}function us(){Fn=In=null,Ft=!1}function cu(t){Qn===null?Qn=[t]:Qn.push(t)}var jg=P.ReactCurrentBatchConfig;function ao(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var N=c.refs;M===null?delete N[h]:N[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ha(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function zd(t){var i=t._init;return i(t._payload)}function Hd(t){function i(Y,H){if(t){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function s(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function c(Y,H){return Y=ar(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,H,$,Te){return H===null||H.tag!==6?(H=tc($,Y.mode,Te),H.return=Y,H):(H=c(H,$),H.return=Y,H)}function F(Y,H,$,Te){var Xe=$.type;return Xe===I?ge(Y,H,$.props.children,Te,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&zd(Xe)===H.type)?(Te=c(H,$.props),Te.ref=ao(Y,H,$),Te.return=Y,Te):(Te=Oa($.type,$.key,$.props,null,Y.mode,Te),Te.ref=ao(Y,H,$),Te.return=Y,Te)}function Q(Y,H,$,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=nc($,Y.mode,Te),H.return=Y,H):(H=c(H,$.children||[]),H.return=Y,H)}function ge(Y,H,$,Te,Xe){return H===null||H.tag!==7?(H=Nr($,Y.mode,Te,Xe),H.return=Y,H):(H=c(H,$),H.return=Y,H)}function Se(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=tc(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case W:return $=Oa(H.type,H.key,H.props,null,Y.mode,$),$.ref=ao(Y,null,H),$.return=Y,$;case k:return H=nc(H,Y.mode,$),H.return=Y,H;case se:var Te=H._init;return Se(Y,Te(H._payload),$)}if(We(H)||ae(H))return H=Nr(H,Y.mode,$,null),H.return=Y,H;ha(Y,H)}return null}function me(Y,H,$,Te){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:N(Y,H,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case W:return $.key===Xe?F(Y,H,$,Te):null;case k:return $.key===Xe?Q(Y,H,$,Te):null;case se:return Xe=$._init,me(Y,H,Xe($._payload),Te)}if(We($)||ae($))return Xe!==null?null:ge(Y,H,$,Te,null);ha(Y,$)}return null}function Ne(Y,H,$,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get($)||null,N(H,Y,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case W:return Y=Y.get(Te.key===null?$:Te.key)||null,F(H,Y,Te,Xe);case k:return Y=Y.get(Te.key===null?$:Te.key)||null,Q(H,Y,Te,Xe);case se:var Ze=Te._init;return Ne(Y,H,$,Ze(Te._payload),Xe)}if(We(Te)||ae(Te))return Y=Y.get($)||null,ge(H,Y,Te,Xe,null);ha(H,Te)}return null}function Be(Y,H,$,Te){for(var Xe=null,Ze=null,Qe=H,it=H=0,nn=null;Qe!==null&&it<$.length;it++){Qe.index>it?(nn=Qe,Qe=null):nn=Qe.sibling;var yt=me(Y,Qe,$[it],Te);if(yt===null){Qe===null&&(Qe=nn);break}t&&Qe&&yt.alternate===null&&i(Y,Qe),H=h(yt,H,it),Ze===null?Xe=yt:Ze.sibling=yt,Ze=yt,Qe=nn}if(it===$.length)return s(Y,Qe),Ft&&wr(Y,it),Xe;if(Qe===null){for(;it<$.length;it++)Qe=Se(Y,$[it],Te),Qe!==null&&(H=h(Qe,H,it),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Ft&&wr(Y,it),Xe}for(Qe=l(Y,Qe);it<$.length;it++)nn=Ne(Qe,Y,it,$[it],Te),nn!==null&&(t&&nn.alternate!==null&&Qe.delete(nn.key===null?it:nn.key),H=h(nn,H,it),Ze===null?Xe=nn:Ze.sibling=nn,Ze=nn);return t&&Qe.forEach(function(lr){return i(Y,lr)}),Ft&&wr(Y,it),Xe}function He(Y,H,$,Te){var Xe=ae($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var Ze=Xe=null,Qe=H,it=H=0,nn=null,yt=$.next();Qe!==null&&!yt.done;it++,yt=$.next()){Qe.index>it?(nn=Qe,Qe=null):nn=Qe.sibling;var lr=me(Y,Qe,yt.value,Te);if(lr===null){Qe===null&&(Qe=nn);break}t&&Qe&&lr.alternate===null&&i(Y,Qe),H=h(lr,H,it),Ze===null?Xe=lr:Ze.sibling=lr,Ze=lr,Qe=nn}if(yt.done)return s(Y,Qe),Ft&&wr(Y,it),Xe;if(Qe===null){for(;!yt.done;it++,yt=$.next())yt=Se(Y,yt.value,Te),yt!==null&&(H=h(yt,H,it),Ze===null?Xe=yt:Ze.sibling=yt,Ze=yt);return Ft&&wr(Y,it),Xe}for(Qe=l(Y,Qe);!yt.done;it++,yt=$.next())yt=Ne(Qe,Y,it,yt.value,Te),yt!==null&&(t&&yt.alternate!==null&&Qe.delete(yt.key===null?it:yt.key),H=h(yt,H,it),Ze===null?Xe=yt:Ze.sibling=yt,Ze=yt);return t&&Qe.forEach(function(w_){return i(Y,w_)}),Ft&&wr(Y,it),Xe}function Vt(Y,H,$,Te){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case W:e:{for(var Xe=$.key,Ze=H;Ze!==null;){if(Ze.key===Xe){if(Xe=$.type,Xe===I){if(Ze.tag===7){s(Y,Ze.sibling),H=c(Ze,$.props.children),H.return=Y,Y=H;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&zd(Xe)===Ze.type){s(Y,Ze.sibling),H=c(Ze,$.props),H.ref=ao(Y,Ze,$),H.return=Y,Y=H;break e}s(Y,Ze);break}else i(Y,Ze);Ze=Ze.sibling}$.type===I?(H=Nr($.props.children,Y.mode,Te,$.key),H.return=Y,Y=H):(Te=Oa($.type,$.key,$.props,null,Y.mode,Te),Te.ref=ao(Y,H,$),Te.return=Y,Y=Te)}return M(Y);case k:e:{for(Ze=$.key;H!==null;){if(H.key===Ze)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){s(Y,H.sibling),H=c(H,$.children||[]),H.return=Y,Y=H;break e}else{s(Y,H);break}else i(Y,H);H=H.sibling}H=nc($,Y.mode,Te),H.return=Y,Y=H}return M(Y);case se:return Ze=$._init,Vt(Y,H,Ze($._payload),Te)}if(We($))return Be(Y,H,$,Te);if(ae($))return He(Y,H,$,Te);ha(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(s(Y,H.sibling),H=c(H,$),H.return=Y,Y=H):(s(Y,H),H=tc($,Y.mode,Te),H.return=Y,Y=H),M(Y)):s(Y,H)}return Vt}var cs=Hd(!0),Vd=Hd(!1),pa=Zi(null),ma=null,fs=null,fu=null;function du(){fu=fs=ma=null}function hu(t){var i=pa.current;Ut(pa),t._currentValue=i}function pu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ds(t,i){ma=t,fu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(ma===null)throw Error(n(308));fs=t,ma.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Ar=null;function mu(t){Ar===null?Ar=[t]:Ar.push(t)}function Gd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,mu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ti(t,l)}function Ti(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var er=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ti(t,s)}return c=l.interleaved,c===null?(i.next=i,mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ti(t,s)}function ga(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jt(t,s)}}function Xd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function _a(t,i,s,l){var c=t.updateQueue;er=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,N=c.shared.pending;if(N!==null){c.shared.pending=null;var F=N,Q=F.next;F.next=null,M===null?h=Q:M.next=Q,M=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,N=ge.lastBaseUpdate,N!==M&&(N===null?ge.firstBaseUpdate=Q:N.next=Q,ge.lastBaseUpdate=F))}if(h!==null){var Se=c.baseState;M=0,ge=Q=F=null,N=h;do{var me=N.lane,Ne=N.eventTime;if((l&me)===me){ge!==null&&(ge=ge.next={eventTime:Ne,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Be=t,He=N;switch(me=i,Ne=s,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){Se=Be.call(Ne,Se,me);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,me=typeof Be=="function"?Be.call(Ne,Se,me):Be,me==null)break e;Se=re({},Se,me);break e;case 2:er=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[N]:me.push(N))}else Ne={eventTime:Ne,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ge===null?(Q=ge=Ne,F=Se):ge=ge.next=Ne,M|=me;if(N=N.next,N===null){if(N=c.shared.pending,N===null)break;me=N,N=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(ge===null&&(F=Se),c.baseState=F,c.firstBaseUpdate=Q,c.lastBaseUpdate=ge,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=Se}}function jd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var lo={},di=Zi(lo),uo=Zi(lo),co=Zi(lo);function Cr(t){if(t===lo)throw Error(n(174));return t}function _u(t,i){switch(Dt(co,i),Dt(uo,t),Dt(di,lo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Ut(di),Dt(di,i)}function hs(){Ut(di),Ut(uo),Ut(co)}function Yd(t){Cr(co.current);var i=Cr(di.current),s=Ve(i,t.type);i!==s&&(Dt(uo,t),Dt(di,s))}function vu(t){uo.current===t&&(Ut(di),Ut(uo))}var Ot=Zi(0);function va(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function Su(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var xa=P.ReactCurrentDispatcher,yu=P.ReactCurrentBatchConfig,Rr=0,kt=null,qt=null,en=null,Sa=!1,fo=!1,ho=0,Yg=0;function fn(){throw Error(n(321))}function Mu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Zn(t[s],i[s]))return!1;return!0}function Eu(t,i,s,l,c,h){if(Rr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xa.current=t===null||t.memoizedState===null?Zg:Qg,t=s(l,c),fo){h=0;do{if(fo=!1,ho=0,25<=h)throw Error(n(301));h+=1,en=qt=null,i.updateQueue=null,xa.current=Jg,t=s(l,c)}while(fo)}if(xa.current=Ea,i=qt!==null&&qt.next!==null,Rr=0,en=qt=kt=null,Sa=!1,i)throw Error(n(300));return t}function Tu(){var t=ho!==0;return ho=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?kt.memoizedState=en=t:en=en.next=t,en}function Gn(){if(qt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=en===null?kt.memoizedState:en.next;if(i!==null)en=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},en===null?kt.memoizedState=en=t:en=en.next=t}return en}function po(t,i){return typeof i=="function"?i(t):i}function wu(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=qt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var N=M=null,F=null,Q=h;do{var ge=Q.lane;if((Rr&ge)===ge)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var Se={lane:ge,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(N=F=Se,M=l):F=F.next=Se,kt.lanes|=ge,Pr|=ge}Q=Q.next}while(Q!==null&&Q!==h);F===null?M=l:F.next=N,Zn(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Au(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Zn(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function qd(){}function $d(t,i){var s=kt,l=Gn(),c=i(),h=!Zn(l.memoizedState,c);if(h&&(l.memoizedState=c,An=!0),l=l.queue,Cu(Qd.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,mo(9,Zd.bind(null,s,l,c,i),void 0,null),tn===null)throw Error(n(349));(Rr&30)!==0||Kd(s,i,c)}return c}function Kd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Zd(t,i,s,l){i.value=s,i.getSnapshot=l,Jd(i)&&eh(t)}function Qd(t,i,s){return s(function(){Jd(i)&&eh(t)})}function Jd(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Zn(t,s)}catch{return!0}}function eh(t){var i=Ti(t,1);i!==null&&ni(i,t,1,-1)}function th(t){var i=hi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},i.queue=t,t=t.dispatch=Kg.bind(null,kt,t),[i.memoizedState,t]}function mo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function nh(){return Gn().memoizedState}function ya(t,i,s,l){var c=hi();kt.flags|=t,c.memoizedState=mo(1|i,s,void 0,l===void 0?null:l)}function Ma(t,i,s,l){var c=Gn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var M=qt.memoizedState;if(h=M.destroy,l!==null&&Mu(l,M.deps)){c.memoizedState=mo(i,s,h,l);return}}kt.flags|=t,c.memoizedState=mo(1|i,s,h,l)}function ih(t,i){return ya(8390656,8,t,i)}function Cu(t,i){return Ma(2048,8,t,i)}function rh(t,i){return Ma(4,2,t,i)}function sh(t,i){return Ma(4,4,t,i)}function oh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ah(t,i,s){return s=s!=null?s.concat([t]):null,Ma(4,4,oh.bind(null,i,t),s)}function Ru(){}function lh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function uh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function ch(t,i,s){return(Rr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=s):(Zn(s,i)||(s=Ct(),kt.lanes|=s,Pr|=s,t.baseState=!0),i)}function qg(t,i){var s=xt;xt=s!==0&&4>s?s:4,t(!0);var l=yu.transition;yu.transition={};try{t(!1),i()}finally{xt=s,yu.transition=l}}function fh(){return Gn().memoizedState}function $g(t,i,s){var l=sr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},dh(t))hh(i,s);else if(s=Gd(t,i,s,l),s!==null){var c=yn();ni(s,t,l,c),ph(s,i,l)}}function Kg(t,i,s){var l=sr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(dh(t))hh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,N=h(M,s);if(c.hasEagerState=!0,c.eagerState=N,Zn(N,M)){var F=i.interleaved;F===null?(c.next=c,mu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}s=Gd(t,i,c,l),s!==null&&(c=yn(),ni(s,t,l,c),ph(s,i,l))}}function dh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function hh(t,i){fo=Sa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function ph(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jt(t,s)}}var Ea={readContext:Vn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},Zg={readContext:Vn,useCallback:function(t,i){return hi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:ih,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,ya(4194308,4,oh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ya(4194308,4,t,i)},useInsertionEffect:function(t,i){return ya(4,2,t,i)},useMemo:function(t,i){var s=hi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=hi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=$g.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=hi();return t={current:t},i.memoizedState=t},useState:th,useDebugValue:Ru,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=th(!1),i=t[0];return t=qg.bind(null,t[1]),hi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=kt,c=hi();if(Ft){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),tn===null)throw Error(n(349));(Rr&30)!==0||Kd(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,ih(Qd.bind(null,l,h,t),[t]),l.flags|=2048,mo(9,Zd.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=hi(),i=tn.identifierPrefix;if(Ft){var s=Ei,l=Mi;s=(l&~(1<<32-ot(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=ho++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Yg++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Qg={readContext:Vn,useCallback:lh,useContext:Vn,useEffect:Cu,useImperativeHandle:ah,useInsertionEffect:rh,useLayoutEffect:sh,useMemo:uh,useReducer:wu,useRef:nh,useState:function(){return wu(po)},useDebugValue:Ru,useDeferredValue:function(t){var i=Gn();return ch(i,qt.memoizedState,t)},useTransition:function(){var t=wu(po)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:qd,useSyncExternalStore:$d,useId:fh,unstable_isNewReconciler:!1},Jg={readContext:Vn,useCallback:lh,useContext:Vn,useEffect:Cu,useImperativeHandle:ah,useInsertionEffect:rh,useLayoutEffect:sh,useMemo:uh,useReducer:Au,useRef:nh,useState:function(){return Au(po)},useDebugValue:Ru,useDeferredValue:function(t){var i=Gn();return qt===null?i.memoizedState=t:ch(i,qt.memoizedState,t)},useTransition:function(){var t=Au(po)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:qd,useSyncExternalStore:$d,useId:fh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Pu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:re({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ta={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=yn(),c=sr(t),h=wi(l,c);h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(ni(i,t,c,l),ga(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=yn(),c=sr(t),h=wi(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(ni(i,t,c,l),ga(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yn(),l=sr(t),c=wi(s,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(ni(i,t,l,s),ga(i,t,l))}};function mh(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!eo(s,l)||!eo(c,h):!0}function gh(t,i,s){var l=!1,c=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(c=wn(i)?Er:cn.current,l=i.contextTypes,h=(l=l!=null)?os(t,c):Qi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ta,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function _h(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Ta.enqueueReplaceState(i,i.state,null)}function bu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},gu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Vn(h):(h=wn(i)?Er:cn.current,c.context=os(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Pu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ta.enqueueReplaceState(c,c.state,null),_a(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var s="",l=i;do s+=he(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Du(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Lu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var e_=typeof WeakMap=="function"?WeakMap:Map;function vh(t,i,s){s=wi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Da||(Da=!0,Yu=l),Lu(t,i)},s}function xh(t,i,s){s=wi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Lu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Lu(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Sh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new e_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=p_.bind(null,t,i,s),i.then(t,t))}function yh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Mh(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=wi(-1,1),i.tag=2,tr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var t_=P.ReactCurrentOwner,An=!1;function Sn(t,i,s,l){i.child=t===null?Vd(i,null,s,l):cs(i,t.child,s,l)}function Eh(t,i,s,l,c){s=s.render;var h=i.ref;return ds(i,c),l=Eu(t,i,s,l,h,c),s=Tu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(Ft&&s&&ou(i),i.flags|=1,Sn(t,i,l,c),i.child)}function Th(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,wh(t,i,h,l,c)):(t=Oa(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:eo,s(M,l)&&t.ref===i.ref)return Ai(t,i,c)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function wh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(eo(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Ai(t,i,c)}return Nu(t,i,s,l,c)}function Ah(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(gs,On),On|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(gs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Dt(gs,On),On|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Dt(gs,On),On|=l;return Sn(t,i,c,s),i.child}function Ch(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Nu(t,i,s,l,c){var h=wn(s)?Er:cn.current;return h=os(i,h),ds(i,c),s=Eu(t,i,s,l,h,c),l=Tu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(Ft&&l&&ou(i),i.flags|=1,Sn(t,i,s,c),i.child)}function Rh(t,i,s,l,c){if(wn(s)){var h=!0;la(i)}else h=!1;if(ds(i,c),i.stateNode===null)Aa(t,i),gh(i,s,l),bu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var F=M.context,Q=s.contextType;typeof Q=="object"&&Q!==null?Q=Vn(Q):(Q=wn(s)?Er:cn.current,Q=os(i,Q));var ge=s.getDerivedStateFromProps,Se=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==l||F!==Q)&&_h(i,M,l,Q),er=!1;var me=i.memoizedState;M.state=me,_a(i,l,M,c),F=i.memoizedState,N!==l||me!==F||Tn.current||er?(typeof ge=="function"&&(Pu(i,s,ge,l),F=i.memoizedState),(N=er||mh(i,s,N,l,me,F,Q))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=Q,l=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Wd(t,i),N=i.memoizedProps,Q=i.type===i.elementType?N:Jn(i.type,N),M.props=Q,Se=i.pendingProps,me=M.context,F=s.contextType,typeof F=="object"&&F!==null?F=Vn(F):(F=wn(s)?Er:cn.current,F=os(i,F));var Ne=s.getDerivedStateFromProps;(ge=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==Se||me!==F)&&_h(i,M,l,F),er=!1,me=i.memoizedState,M.state=me,_a(i,l,M,c);var Be=i.memoizedState;N!==Se||me!==Be||Tn.current||er?(typeof Ne=="function"&&(Pu(i,s,Ne,l),Be=i.memoizedState),(Q=er||mh(i,s,Q,l,me,Be,F)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=F,l=Q):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Uu(t,i,s,l,h,c)}function Uu(t,i,s,l,c,h){Ch(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Nd(i,s,!1),Ai(t,i,h);l=i.stateNode,t_.current=i;var N=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=cs(i,t.child,null,h),i.child=cs(i,null,N,h)):Sn(t,i,N,h),i.memoizedState=l.state,c&&Nd(i,s,!0),i.child}function Ph(t){var i=t.stateNode;i.pendingContext?Dd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Dd(t,i.context,!1),_u(t,i.containerInfo)}function bh(t,i,s,l,c){return us(),cu(c),i.flags|=256,Sn(t,i,s,l),i.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dh(t,i,s){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=t!==null&&t.memoizedState===null?!1:(c&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(Ot,c&1),t===null)return uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=Nr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fu(s),i.memoizedState=Iu,t):Ou(i,M));if(c=t.memoizedState,c!==null&&(N=c.dehydrated,N!==null))return n_(t,i,M,l,N,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,N=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=ar(c,F),l.subtreeFlags=c.subtreeFlags&14680064),N!==null?h=ar(N,h):(h=Nr(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Fu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Iu,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Ou(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function wa(t,i,s,l){return l!==null&&cu(l),cs(i,t.child,null,s),t=Ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function n_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Du(Error(n(422))),wa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=Nr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,M),i.child.memoizedState=Fu(M),i.memoizedState=Iu,h);if((i.mode&1)===0)return wa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(n(419)),l=Du(h,l,void 0),wa(t,i,M,l)}if(N=(M&t.childLanes)!==0,An||N){if(l=tn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ti(t,c),ni(l,t,c,-1))}return Ju(),l=Du(Error(n(421))),wa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=m_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Fn=Ki(c.nextSibling),In=i,Ft=!0,Qn=null,t!==null&&(zn[Hn++]=Mi,zn[Hn++]=Ei,zn[Hn++]=Tr,Mi=t.id,Ei=t.overflow,Tr=i),i=Ou(i,l.children),i.flags|=4096,i)}function Lh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pu(t.return,i,s)}function ku(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Nh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,s),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lh(t,s,i);else if(t.tag===19)Lh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&va(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),ku(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&va(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}ku(i,!0,s,null,h);break;case"together":ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=ar(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ar(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function i_(t,i,s){switch(i.tag){case 3:Ph(i),us();break;case 5:Yd(i);break;case 1:wn(i.type)&&la(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(pa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(Ot,Ot.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Dh(t,i,s):(Dt(Ot,Ot.current&1),t=Ai(t,i,s),t!==null?t.sibling:null);Dt(Ot,Ot.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Nh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Ah(t,i,s)}return Ai(t,i,s)}var Uh,Bu,Ih,Fh;Uh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Bu=function(){},Ih=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(di.current);var h=null;switch(s){case"input":c=O(t,c),l=O(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=sa)}ft(s,l);var M;s=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var N=c[Q];for(M in N)N.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var F=l[Q];if(N=c!=null?c[Q]:void 0,l.hasOwnProperty(Q)&&F!==N&&(F!=null||N!=null))if(Q==="style")if(N){for(M in N)!N.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in F)F.hasOwnProperty(M)&&N[M]!==F[M]&&(s||(s={}),s[M]=F[M])}else s||(h||(h=[]),h.push(Q,s)),s=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,N=N?N.__html:void 0,F!=null&&N!==F&&(h=h||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&Nt("scroll",t),h||N===F||(h=[])):(h=h||[]).push(Q,F))}s&&(h=h||[]).push("style",s);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},Fh=function(t,i,s,l){s!==l&&(i.flags|=4)};function go(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function r_(t,i,s){var l=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&aa(),dn(i),null;case 3:return l=i.stateNode,hs(),Ut(Tn),Ut(cn),Su(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(Ku(Qn),Qn=null))),Bu(t,i),dn(i),null;case 5:vu(i);var c=Cr(co.current);if(s=i.type,t!==null&&i.stateNode!=null)Ih(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Cr(di.current),da(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[fi]=i,l[so]=h,t=(i.mode&1)!==0,s){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(c=0;c<no.length;c++)Nt(no[c],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":_n(l,h),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",l);break;case"textarea":K(l,h),Nt("invalid",l)}ft(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var N=h[M];M==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,N,t),c=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,N,t),c=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Nt("scroll",l)}switch(s){case"input":Pt(l),Ye(l,h,!0);break;case"textarea":Pt(l),_e(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=sa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[fi]=i,t[so]=l,Uh(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(s,l),s){case"dialog":Nt("cancel",t),Nt("close",t),c=l;break;case"iframe":case"object":case"embed":Nt("load",t),c=l;break;case"video":case"audio":for(c=0;c<no.length;c++)Nt(no[c],t);c=l;break;case"source":Nt("error",t),c=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),c=l;break;case"details":Nt("toggle",t),c=l;break;case"input":_n(t,l),c=O(t,l),Nt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":K(t,l),c=E(t,l),Nt("invalid",t);break;default:c=l}ft(s,c),N=c;for(h in N)if(N.hasOwnProperty(h)){var F=N[h];h==="style"?tt(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ke(t,F)):h==="children"?typeof F=="string"?(s!=="textarea"||F!=="")&&$e(t,F):typeof F=="number"&&$e(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Nt("scroll",t):F!=null&&L(t,h,F,M))}switch(s){case"input":Pt(t),Ye(t,l,!1);break;case"textarea":Pt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?D(t,!!l.multiple,h,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=sa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)Fh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Cr(co.current),Cr(di.current),da(i)){if(l=i.stateNode,s=i.memoizedProps,l[fi]=i,(h=l.nodeValue!==s)&&(t=In,t!==null))switch(t.tag){case 3:ra(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return dn(i),null;case 13:if(Ut(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bd(),us(),i.flags|=98560,h=!1;else if(h=da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[fi]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else Qn!==null&&(Ku(Qn),Qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?$t===0&&($t=3):Ju())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return hs(),Bu(t,i),t===null&&io(i.stateNode.containerInfo),dn(i),null;case 10:return hu(i.type._context),dn(i),null;case 17:return wn(i.type)&&aa(),dn(i),null;case 19:if(Ut(Ot),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)go(h,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=va(t),M!==null){for(i.flags|=128,go(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Dt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&q()>_s&&(i.flags|=128,l=!0,go(h,!1),i.lanes=4194304)}else{if(!l)if(t=va(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),go(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return dn(i),null}else 2*q()-h.renderingStartTime>_s&&s!==1073741824&&(i.flags|=128,l=!0,go(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=q(),i.sibling=null,s=Ot.current,Dt(Ot,l?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return Qu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function s_(t,i){switch(au(i),i.tag){case 1:return wn(i.type)&&aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),Ut(Tn),Ut(cn),Su(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return vu(i),null;case 13:if(Ut(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ut(Ot),null;case 4:return hs(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Ca=!1,hn=!1,o_=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function ms(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ht(t,i,l)}else s.current=null}function zu(t,i,s){try{s()}catch(l){Ht(t,i,l)}}var Oh=!1;function a_(t,i){if(Ql=Yo,t=md(),Wl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,N=-1,F=-1,Q=0,ge=0,Se=t,me=null;t:for(;;){for(var Ne;Se!==s||c!==0&&Se.nodeType!==3||(N=M+c),Se!==h||l!==0&&Se.nodeType!==3||(F=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ne=Se.firstChild)!==null;)me=Se,Se=Ne;for(;;){if(Se===t)break t;if(me===s&&++Q===c&&(N=M),me===h&&++ge===l&&(F=M),(Ne=Se.nextSibling)!==null)break;Se=me,me=Se.parentNode}Se=Ne}s=N===-1||F===-1?null:{start:N,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jl={focusedElem:t,selectionRange:s},Yo=!1,Ie=i;Ie!==null;)if(i=Ie,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ie=t;else for(;Ie!==null;){i=Ie;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Vt=Be.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:Jn(i.type,He),Vt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ht(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ie=t;break}Ie=i.return}return Be=Oh,Oh=!1,Be}function _o(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&zu(i,s,h)}c=c.next}while(c!==l)}}function Ra(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Hu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function kh(t){var i=t.alternate;i!==null&&(t.alternate=null,kh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[fi],delete i[so],delete i[iu],delete i[Gg],delete i[Wg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bh(t){return t.tag===5||t.tag===3||t.tag===4}function zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=sa));else if(l!==4&&(t=t.child,t!==null))for(Vu(t,i,s),t=t.sibling;t!==null;)Vu(t,i,s),t=t.sibling}function Gu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Gu(t,i,s),t=t.sibling;t!==null;)Gu(t,i,s),t=t.sibling}var on=null,ei=!1;function nr(t,i,s){for(s=s.child;s!==null;)Hh(t,i,s),s=s.sibling}function Hh(t,i,s){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Je,s)}catch{}switch(s.tag){case 5:hn||ms(s,i);case 6:var l=on,c=ei;on=null,nr(t,i,s),on=l,ei=c,on!==null&&(ei?(t=on,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):on.removeChild(s.stateNode));break;case 18:on!==null&&(ei?(t=on,s=s.stateNode,t.nodeType===8?nu(t.parentNode,s):t.nodeType===1&&nu(t,s),qs(t)):nu(on,s.stateNode));break;case 4:l=on,c=ei,on=s.stateNode.containerInfo,ei=!0,nr(t,i,s),on=l,ei=c;break;case 0:case 11:case 14:case 15:if(!hn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&zu(s,i,M),c=c.next}while(c!==l)}nr(t,i,s);break;case 1:if(!hn&&(ms(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(N){Ht(s,i,N)}nr(t,i,s);break;case 21:nr(t,i,s);break;case 22:s.mode&1?(hn=(l=hn)||s.memoizedState!==null,nr(t,i,s),hn=l):nr(t,i,s);break;default:nr(t,i,s)}}function Vh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new o_),i.forEach(function(l){var c=g_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:on=N.stateNode,ei=!1;break e;case 3:on=N.stateNode.containerInfo,ei=!0;break e;case 4:on=N.stateNode.containerInfo,ei=!0;break e}N=N.return}if(on===null)throw Error(n(160));Hh(h,M,c),on=null,ei=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(Q){Ht(c,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gh(i,t),i=i.sibling}function Gh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),pi(t),l&4){try{_o(3,t,t.return),Ra(3,t)}catch(He){Ht(t,t.return,He)}try{_o(5,t,t.return)}catch(He){Ht(t,t.return,He)}}break;case 1:ti(i,t),pi(t),l&512&&s!==null&&ms(s,s.return);break;case 5:if(ti(i,t),pi(t),l&512&&s!==null&&ms(s,s.return),t.flags&32){var c=t.stateNode;try{$e(c,"")}catch(He){Ht(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,N=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&ht(c,h),rt(N,M);var Q=rt(N,h);for(M=0;M<F.length;M+=2){var ge=F[M],Se=F[M+1];ge==="style"?tt(c,Se):ge==="dangerouslySetInnerHTML"?Ke(c,Se):ge==="children"?$e(c,Se):L(c,ge,Se,Q)}switch(N){case"input":ct(c,h);break;case"textarea":fe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ne=h.value;Ne!=null?D(c,!!h.multiple,Ne,!1):me!==!!h.multiple&&(h.defaultValue!=null?D(c,!!h.multiple,h.defaultValue,!0):D(c,!!h.multiple,h.multiple?[]:"",!1))}c[so]=h}catch(He){Ht(t,t.return,He)}}break;case 6:if(ti(i,t),pi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){Ht(t,t.return,He)}}break;case 3:if(ti(i,t),pi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(i.containerInfo)}catch(He){Ht(t,t.return,He)}break;case 4:ti(i,t),pi(t);break;case 13:ti(i,t),pi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ju=q())),l&4&&Vh(t);break;case 22:if(ge=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(Q=hn)||ge,ti(i,t),hn=Q):ti(i,t),pi(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!ge&&(t.mode&1)!==0)for(Ie=t,ge=t.child;ge!==null;){for(Se=Ie=ge;Ie!==null;){switch(me=Ie,Ne=me.child,me.tag){case 0:case 11:case 14:case 15:_o(4,me,me.return);break;case 1:ms(me,me.return);var Be=me.stateNode;if(typeof Be.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){Ht(l,s,He)}}break;case 5:ms(me,me.return);break;case 22:if(me.memoizedState!==null){jh(Se);continue}}Ne!==null?(Ne.return=me,Ie=Ne):jh(Se)}ge=ge.sibling}e:for(ge=null,Se=t;;){if(Se.tag===5){if(ge===null){ge=Se;try{c=Se.stateNode,Q?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=Se.stateNode,F=Se.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,N.style.display=et("display",M))}catch(He){Ht(t,t.return,He)}}}else if(Se.tag===6){if(ge===null)try{Se.stateNode.nodeValue=Q?"":Se.memoizedProps}catch(He){Ht(t,t.return,He)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ge===Se&&(ge=null),Se=Se.return}ge===Se&&(ge=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ti(i,t),pi(t),l&4&&Vh(t);break;case 21:break;default:ti(i,t),pi(t)}}function pi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Bh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&($e(c,""),l.flags&=-33);var h=zh(t);Gu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,N=zh(t);Vu(t,N,M);break;default:throw Error(n(161))}}catch(F){Ht(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function l_(t,i,s){Ie=t,Wh(t)}function Wh(t,i,s){for(var l=(t.mode&1)!==0;Ie!==null;){var c=Ie,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ca;if(!M){var N=c.alternate,F=N!==null&&N.memoizedState!==null||hn;N=Ca;var Q=hn;if(Ca=M,(hn=F)&&!Q)for(Ie=c;Ie!==null;)M=Ie,F=M.child,M.tag===22&&M.memoizedState!==null?Yh(c):F!==null?(F.return=M,Ie=F):Yh(c);for(;h!==null;)Ie=h,Wh(h),h=h.sibling;Ie=c,Ca=N,hn=Q}Xh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ie=h):Xh(t)}}function Xh(t){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Ra(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Jn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&jd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}jd(i,M,s)}break;case 5:var N=i.stateNode;if(s===null&&i.flags&4){s=N;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&s.focus();break;case"img":F.src&&(s.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var ge=Q.memoizedState;if(ge!==null){var Se=ge.dehydrated;Se!==null&&qs(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Hu(i)}catch(me){Ht(i,i.return,me)}}if(i===t){Ie=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ie=s;break}Ie=i.return}}function jh(t){for(;Ie!==null;){var i=Ie;if(i===t){Ie=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ie=s;break}Ie=i.return}}function Yh(t){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Ra(4,i)}catch(F){Ht(i,s,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){Ht(i,c,F)}}var h=i.return;try{Hu(i)}catch(F){Ht(i,h,F)}break;case 5:var M=i.return;try{Hu(i)}catch(F){Ht(i,M,F)}}}catch(F){Ht(i,i.return,F)}if(i===t){Ie=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ie=N;break}Ie=i.return}}var u_=Math.ceil,Pa=P.ReactCurrentDispatcher,Wu=P.ReactCurrentOwner,Wn=P.ReactCurrentBatchConfig,St=0,tn=null,Xt=null,an=0,On=0,gs=Zi(0),$t=0,vo=null,Pr=0,ba=0,Xu=0,xo=null,Cn=null,ju=0,_s=1/0,Ci=null,Da=!1,Yu=null,ir=null,La=!1,rr=null,Na=0,So=0,qu=null,Ua=-1,Ia=0;function yn(){return(St&6)!==0?q():Ua!==-1?Ua:Ua=q()}function sr(t){return(t.mode&1)===0?1:(St&2)!==0&&an!==0?an&-an:jg.transition!==null?(Ia===0&&(Ia=Ct()),Ia):(t=xt,t!==0||(t=window.event,t=t===void 0?16:$f(t.type)),t)}function ni(t,i,s,l){if(50<So)throw So=0,qu=null,Error(n(185));Qt(t,s,l),((St&2)===0||t!==tn)&&(t===tn&&((St&2)===0&&(ba|=s),$t===4&&or(t,an)),Rn(t,l),s===1&&St===0&&(i.mode&1)===0&&(_s=q()+500,ua&&Ji()))}function Rn(t,i){var s=t.callbackNode;xn(t,i);var l=ln(t,t===tn?an:0);if(l===0)s!==null&&w(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&w(s),i===1)t.tag===0?Xg($h.bind(null,t)):Ud($h.bind(null,t)),Hg(function(){(St&6)===0&&Ji()}),s=null;else{switch(ci(l)){case 1:s=Me;break;case 4:s=Re;break;case 16:s=Le;break;case 536870912:s=nt;break;default:s=Le}s=ip(s,qh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function qh(t,i){if(Ua=-1,Ia=0,(St&6)!==0)throw Error(n(327));var s=t.callbackNode;if(vs()&&t.callbackNode!==s)return null;var l=ln(t,t===tn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Fa(t,l);else{i=l;var c=St;St|=2;var h=Zh();(tn!==t||an!==i)&&(Ci=null,_s=q()+500,Dr(t,i));do try{d_();break}catch(N){Kh(t,N)}while(!0);du(),Pa.current=h,St=c,Xt!==null?i=0:(tn=null,an=0,i=$t)}if(i!==0){if(i===2&&(c=xi(t),c!==0&&(l=c,i=$u(t,c))),i===1)throw s=vo,Dr(t,0),or(t,l),Rn(t,q()),s;if(i===6)or(t,l);else{if(c=t.current.alternate,(l&30)===0&&!c_(c)&&(i=Fa(t,l),i===2&&(h=xi(t),h!==0&&(l=h,i=$u(t,h))),i===1))throw s=vo,Dr(t,0),or(t,l),Rn(t,q()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Lr(t,Cn,Ci);break;case 3:if(or(t,l),(l&130023424)===l&&(i=ju+500-q(),10<i)){if(ln(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=tu(Lr.bind(null,t,Cn,Ci),i);break}Lr(t,Cn,Ci);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-ot(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*u_(l/1960))-l,10<l){t.timeoutHandle=tu(Lr.bind(null,t,Cn,Ci),l);break}Lr(t,Cn,Ci);break;case 5:Lr(t,Cn,Ci);break;default:throw Error(n(329))}}}return Rn(t,q()),t.callbackNode===s?qh.bind(null,t):null}function $u(t,i){var s=xo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Fa(t,i),t!==2&&(i=Cn,Cn=s,i!==null&&Ku(i)),t}function Ku(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function c_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Xu,i&=~ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-ot(i),l=1<<s;t[s]=-1,i&=~l}}function $h(t){if((St&6)!==0)throw Error(n(327));vs();var i=ln(t,0);if((i&1)===0)return Rn(t,q()),null;var s=Fa(t,i);if(t.tag!==0&&s===2){var l=xi(t);l!==0&&(i=l,s=$u(t,l))}if(s===1)throw s=vo,Dr(t,0),or(t,i),Rn(t,q()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Lr(t,Cn,Ci),Rn(t,q()),null}function Zu(t,i){var s=St;St|=1;try{return t(i)}finally{St=s,St===0&&(_s=q()+500,ua&&Ji())}}function br(t){rr!==null&&rr.tag===0&&(St&6)===0&&vs();var i=St;St|=1;var s=Wn.transition,l=xt;try{if(Wn.transition=null,xt=1,t)return t()}finally{xt=l,Wn.transition=s,St=i,(St&6)===0&&Ji()}}function Qu(){On=gs.current,Ut(gs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,zg(s)),Xt!==null)for(s=Xt.return;s!==null;){var l=s;switch(au(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&aa();break;case 3:hs(),Ut(Tn),Ut(cn),Su();break;case 5:vu(l);break;case 4:hs();break;case 13:Ut(Ot);break;case 19:Ut(Ot);break;case 10:hu(l.type._context);break;case 22:case 23:Qu()}s=s.return}if(tn=t,Xt=t=ar(t.current,null),an=On=i,$t=0,vo=null,Xu=ba=Pr=0,Cn=xo=null,Ar!==null){for(i=0;i<Ar.length;i++)if(s=Ar[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Ar=null}return t}function Kh(t,i){do{var s=Xt;try{if(du(),xa.current=Ea,Sa){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Sa=!1}if(Rr=0,en=qt=kt=null,fo=!1,ho=0,Wu.current=null,s===null||s.return===null){$t=1,vo=i,Xt=null;break}e:{var h=t,M=s.return,N=s,F=i;if(i=an,N.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,ge=N,Se=ge.tag;if((ge.mode&1)===0&&(Se===0||Se===11||Se===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ne=yh(M);if(Ne!==null){Ne.flags&=-257,Mh(Ne,M,N,h,i),Ne.mode&1&&Sh(h,Q,i),i=Ne,F=Q;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(F),i.updateQueue=He}else Be.add(F);break e}else{if((i&1)===0){Sh(h,Q,i),Ju();break e}F=Error(n(426))}}else if(Ft&&N.mode&1){var Vt=yh(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Mh(Vt,M,N,h,i),cu(ps(F,N));break e}}h=F=ps(F,N),$t!==4&&($t=2),xo===null?xo=[h]:xo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=vh(h,F,i);Xd(h,Y);break e;case 1:N=F;var H=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ir===null||!ir.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=xh(h,N,i);Xd(h,Te);break e}}h=h.return}while(h!==null)}Jh(s)}catch(Xe){i=Xe,Xt===s&&s!==null&&(Xt=s=s.return);continue}break}while(!0)}function Zh(){var t=Pa.current;return Pa.current=Ea,t===null?Ea:t}function Ju(){($t===0||$t===3||$t===2)&&($t=4),tn===null||(Pr&268435455)===0&&(ba&268435455)===0||or(tn,an)}function Fa(t,i){var s=St;St|=2;var l=Zh();(tn!==t||an!==i)&&(Ci=null,Dr(t,i));do try{f_();break}catch(c){Kh(t,c)}while(!0);if(du(),St=s,Pa.current=l,Xt!==null)throw Error(n(261));return tn=null,an=0,$t}function f_(){for(;Xt!==null;)Qh(Xt)}function d_(){for(;Xt!==null&&!G();)Qh(Xt)}function Qh(t){var i=np(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?Jh(t):Xt=i,Wu.current=null}function Jh(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=r_(s,i,On),s!==null){Xt=s;return}}else{if(s=s_(s,i),s!==null){s.flags&=32767,Xt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Xt=null;return}}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);$t===0&&($t=5)}function Lr(t,i,s){var l=xt,c=Wn.transition;try{Wn.transition=null,xt=1,h_(t,i,s,l)}finally{Wn.transition=c,xt=l}return null}function h_(t,i,s,l){do vs();while(rr!==null);if((St&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(sn(t,h),t===tn&&(Xt=tn=null,an=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||La||(La=!0,ip(Le,function(){return vs(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Wn.transition,Wn.transition=null;var M=xt;xt=1;var N=St;St|=4,Wu.current=null,a_(t,s),Gh(s,t),Ng(Jl),Yo=!!Ql,Jl=Ql=null,t.current=s,l_(s),J(),St=N,xt=M,Wn.transition=h}else t.current=s;if(La&&(La=!1,rr=t,Na=c),h=t.pendingLanes,h===0&&(ir=null),mt(s.stateNode),Rn(t,q()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Da)throw Da=!1,t=Yu,Yu=null,t;return(Na&1)!==0&&t.tag!==0&&vs(),h=t.pendingLanes,(h&1)!==0?t===qu?So++:(So=0,qu=t):So=0,Ji(),null}function vs(){if(rr!==null){var t=ci(Na),i=Wn.transition,s=xt;try{if(Wn.transition=null,xt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Na=0,(St&6)!==0)throw Error(n(331));var c=St;for(St|=4,Ie=t.current;Ie!==null;){var h=Ie,M=h.child;if((Ie.flags&16)!==0){var N=h.deletions;if(N!==null){for(var F=0;F<N.length;F++){var Q=N[F];for(Ie=Q;Ie!==null;){var ge=Ie;switch(ge.tag){case 0:case 11:case 15:_o(8,ge,h)}var Se=ge.child;if(Se!==null)Se.return=ge,Ie=Se;else for(;Ie!==null;){ge=Ie;var me=ge.sibling,Ne=ge.return;if(kh(ge),ge===Q){Ie=null;break}if(me!==null){me.return=Ne,Ie=me;break}Ie=Ne}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Vt=He.sibling;He.sibling=null,He=Vt}while(He!==null)}}Ie=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Ie=M;else e:for(;Ie!==null;){if(h=Ie,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:_o(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Ie=Y;break e}Ie=h.return}}var H=t.current;for(Ie=H;Ie!==null;){M=Ie;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,Ie=$;else e:for(M=H;Ie!==null;){if(N=Ie,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ra(9,N)}}catch(Xe){Ht(N,N.return,Xe)}if(N===M){Ie=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,Ie=Te;break e}Ie=N.return}}if(St=c,Ji(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Je,t)}catch{}l=!0}return l}finally{xt=s,Wn.transition=i}}return!1}function ep(t,i,s){i=ps(s,i),i=vh(t,i,1),t=tr(t,i,1),i=yn(),t!==null&&(Qt(t,1,i),Rn(t,i))}function Ht(t,i,s){if(t.tag===3)ep(t,t,s);else for(;i!==null;){if(i.tag===3){ep(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=ps(s,t),t=xh(i,t,1),i=tr(i,t,1),t=yn(),i!==null&&(Qt(i,1,t),Rn(i,t));break}}i=i.return}}function p_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&s,tn===t&&(an&s)===s&&($t===4||$t===3&&(an&130023424)===an&&500>q()-ju?Dr(t,0):Xu|=s),Rn(t,i)}function tp(t,i){i===0&&((t.mode&1)===0?i=1:(i=zt,zt<<=1,(zt&130023424)===0&&(zt=4194304)));var s=yn();t=Ti(t,i),t!==null&&(Qt(t,i,s),Rn(t,s))}function m_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),tp(t,s)}function g_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),tp(t,s)}var np;np=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return An=!1,i_(t,i,s);An=(t.flags&131072)!==0}else An=!1,Ft&&(i.flags&1048576)!==0&&Id(i,fa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Aa(t,i),t=i.pendingProps;var c=os(i,cn.current);ds(i,s),c=Eu(null,i,l,t,c,s);var h=Tu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(h=!0,la(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,gu(i),c.updater=Ta,i.stateNode=c,c._reactInternals=i,bu(i,l,t,s),i=Uu(null,i,l,!0,h,s)):(i.tag=0,Ft&&h&&ou(i),Sn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Aa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=v_(l),t=Jn(l,t),c){case 0:i=Nu(null,i,l,t,s);break e;case 1:i=Rh(null,i,l,t,s);break e;case 11:i=Eh(null,i,l,t,s);break e;case 14:i=Th(null,i,l,Jn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Nu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Rh(t,i,l,c,s);case 3:e:{if(Ph(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Wd(t,i),_a(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ps(Error(n(423)),i),i=bh(t,i,l,s,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=bh(t,i,l,s,c);break e}else for(Fn=Ki(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,Qn=null,s=Vd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(us(),l===c){i=Ai(t,i,s);break e}Sn(t,i,l,s)}i=i.child}return i;case 5:return Yd(i),t===null&&uu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,eu(l,c)?M=null:h!==null&&eu(l,h)&&(i.flags|=32),Ch(t,i),Sn(t,i,M,s),i.child;case 6:return t===null&&uu(i),null;case 13:return Dh(t,i,s);case 4:return _u(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,s):Sn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Eh(t,i,l,c,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Dt(pa,l._currentValue),l._currentValue=M,h!==null)if(Zn(h.value,M)){if(h.children===c.children&&!Tn.current){i=Ai(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){M=h.child;for(var F=N.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=wi(-1,s&-s),F.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var ge=Q.pending;ge===null?F.next=F:(F.next=ge.next,ge.next=F),Q.pending=F}}h.lanes|=s,F=h.alternate,F!==null&&(F.lanes|=s),pu(h.return,s,i),N.lanes|=s;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,N=M.alternate,N!==null&&(N.lanes|=s),pu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}Sn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,s),c=Vn(c),l=l(c),i.flags|=1,Sn(t,i,l,s),i.child;case 14:return l=i.type,c=Jn(l,i.pendingProps),c=Jn(l.type,c),Th(t,i,l,c,s);case 15:return wh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Aa(t,i),i.tag=1,wn(l)?(t=!0,la(i)):t=!1,ds(i,s),gh(i,l,c),bu(i,l,c,s),Uu(null,i,l,!0,t,s);case 19:return Nh(t,i,s);case 22:return Ah(t,i,s)}throw Error(n(156,i.tag))};function ip(t,i){return Wo(t,i)}function __(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,s,l){return new __(t,i,s,l)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v_(t){if(typeof t=="function")return ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===pe)return 14}return 2}function ar(t,i){var s=t.alternate;return s===null?(s=Xn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Oa(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")ec(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Nr(s.children,c,h,i);case j:M=8,c|=8;break;case b:return t=Xn(12,s,i,c|2),t.elementType=b,t.lanes=h,t;case ee:return t=Xn(13,s,i,c),t.elementType=ee,t.lanes=h,t;case ce:return t=Xn(19,s,i,c),t.elementType=ce,t.lanes=h,t;case le:return ka(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case z:M=9;break e;case oe:M=11;break e;case pe:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Nr(t,i,s,l){return t=Xn(7,t,l,i),t.lanes=s,t}function ka(t,i,s,l){return t=Xn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function tc(t,i,s){return t=Xn(6,t,null,i),t.lanes=s,t}function nc(t,i,s){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function x_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ic(t,i,s,l,c,h,M,N,F){return t=new x_(t,i,s,N,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(h),t}function S_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function rp(t){if(!t)return Qi;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(wn(s))return Ld(t,s,i)}return i}function sp(t,i,s,l,c,h,M,N,F){return t=ic(s,l,!0,t,c,h,M,N,F),t.context=rp(null),s=t.current,l=yn(),c=sr(s),h=wi(l,c),h.callback=i??null,tr(s,h,c),t.current.lanes=c,Qt(t,c,l),Rn(t,l),t}function Ba(t,i,s,l){var c=i.current,h=yn(),M=sr(c);return s=rp(s),i.context===null?i.context=s:i.pendingContext=s,i=wi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,M),t!==null&&(ni(t,c,M,h),ga(t,c,M)),M}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function op(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function rc(t,i){op(t,i),(t=t.alternate)&&op(t,i)}function y_(){return null}var ap=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}Ha.prototype.render=sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Ha.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){Ba(null,t,null,null)}),i[Si]=null}};function Ha(t){this._internalRoot=t}Ha.prototype.unstable_scheduleHydration=function(t){if(t){var i=Wf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Yi.length&&i!==0&&i<Yi[s].priority;s++);Yi.splice(s,0,t),s===0&&Yf(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lp(){}function M_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Q=za(M);h.call(Q)}}var M=sp(i,l,t,0,null,!1,!1,"",lp);return t._reactRootContainer=M,t[Si]=M.current,io(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var N=l;l=function(){var Q=za(F);N.call(Q)}}var F=ic(t,0,!1,null,null,!1,!1,"",lp);return t._reactRootContainer=F,t[Si]=F.current,io(t.nodeType===8?t.parentNode:t),br(function(){Ba(i,F,s,l)}),F}function Ga(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var N=c;c=function(){var F=za(M);N.call(F)}}Ba(i,M,t,c)}else M=M_(s,i,t,c,l);return za(M)}Vf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=pt(i.pendingLanes);s!==0&&(Jt(i,s|1),Rn(i,q()),(St&6)===0&&(_s=q()+500,Ji()))}break;case 13:br(function(){var l=Ti(t,1);if(l!==null){var c=yn();ni(l,t,1,c)}}),rc(t,1)}},Dl=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var s=yn();ni(i,t,134217728,s)}rc(t,134217728)}},Gf=function(t){if(t.tag===13){var i=sr(t),s=Ti(t,i);if(s!==null){var l=yn();ni(s,t,i,l)}rc(t,i)}},Wf=function(){return xt},Xf=function(t,i){var s=xt;try{return xt=t,i()}finally{xt=s}},Ce=function(t,i,s){switch(i){case"input":if(ct(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=oa(l);if(!c)throw Error(n(90));bt(l),ct(l,c)}}}break;case"textarea":fe(t,s);break;case"select":i=s.value,i!=null&&D(t,!!s.multiple,i,!1)}},Lt=Zu,Yt=br;var E_={usingClientEntryPoint:!1,Events:[oo,rs,oa,be,st,Zu]},yo={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T_={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vo(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Je=Wa.inject(T_),ze=Wa}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_,Pn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(i))throw Error(n(200));return S_(t,i,null,s)},Pn.createRoot=function(t,i){if(!oc(t))throw Error(n(299));var s=!1,l="",c=ap;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ic(t,1,!1,null,null,s,!1,l,c),t[Si]=i.current,io(t.nodeType===8?t.parentNode:t),new sc(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Vo(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return br(t)},Pn.hydrate=function(t,i,s){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!0,s)},Pn.hydrateRoot=function(t,i,s){if(!oc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=ap;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=sp(i,null,t,1,s??null,c,!1,h,M),t[Si]=i.current,io(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Ha(i)},Pn.render=function(t,i,s){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!1,s)},Pn.unmountComponentAtNode=function(t){if(!Va(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Ga(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Pn.unstable_batchedUpdates=Zu,Pn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Va(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ga(t,i,s,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var gp;function L_(){if(gp)return uc.exports;gp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uc.exports=D_(),uc.exports}var _p;function N_(){if(_p)return Xa;_p=1;var o=L_();return Xa.createRoot=o.createRoot,Xa.hydrateRoot=o.hydrateRoot,Xa}var U_=N_();const vp=[{id:"heranca-digital",title:"Gestão de Herança Digital",description:"Solução completa para garantir que seus ativos digitais, criptomoedas e informações confidenciais sejam transferidos para seus herdeiros de forma segura e conforme suas instruções, mesmo após seu falecimento.",icon:"🔐",features:["Planejamento Sucessório Digital personalizado","Mecanismos de verificação de inatividade","Transferência automática de ativos conforme regras pré-estabelecidas","Controle sobre quais informações serão compartilhadas com cada herdeiro","Conformidade com legislação sucessória"],options:[{name:"Plano Básico",description:"Configuração de herança para principais ativos digitais"},{name:"Plano Familiar",description:"Solução completa para múltiplos beneficiários com diferentes níveis de acesso"},{name:"Plano Empresarial",description:"Continuidade de acesso a ativos digitais corporativos para sucessores designados"},{name:"Custódia Parcial",description:"Armazenamento seguro de parte das chaves para ativação do protocolo de herança"}]},{id:"custodia-carteiras",title:"Custódia e Gestão de Carteiras",description:"Serviços de custódia e gestão de carteiras digitais e criptomoedas que permitem aos clientes manter a propriedade de seus ativos enquanto delegam a complexidade técnica da gestão de chaves e segurança.",icon:"💼",features:["Custódia Não-Fiduciária com propriedade total dos ativos","Segurança Multicamada contra ameaças físicas e digitais","Monitoramento Contínuo 24/7 de atividades","Relatórios Detalhados sobre status e movimentação","Protocolos de Acesso Emergencial em situações críticas"],options:[{name:"Custódia Individual",description:"Para investidores e entusiastas com portfólios pessoais"},{name:"Custódia Empresarial",description:"Para organizações com tesouraria em criptoativos"},{name:"Custódia Institucional",description:"Para fundos, family offices e instituições financeiras"},{name:"Gestão Ativa",description:"Serviço premium com suporte personalizado e consultoria"}]},{id:"gestao-chaves",title:"Gestão de Chaves Criptográficas",description:"Soluções especializadas para gerenciamento seguro de chaves criptográficas, incluindo geração, armazenamento, backup, recuperação e rotação de chaves para diversos protocolos e aplicações.",icon:"🔑",features:["Geração Segura com entropia de alta qualidade","Armazenamento Distribuído com fragmentação geográfica","Rotação Programada para maior segurança","Recuperação Robusta com múltiplos caminhos","Compatibilidade com diversos algoritmos e padrões"],options:[{name:"Gestão de Chaves Pessoais",description:"Para indivíduos com múltiplas chaves e senhas"},{name:"Gestão de Chaves Empresariais",description:"Para organizações com infraestrutura criptográfica"},{name:"Infraestrutura de Chave Pública",description:"Implementação e gestão de PKI corporativa"},{name:"Chaves para Desenvolvedores",description:"Gestão de chaves de API, certificados e credenciais"}]},{id:"gestao-segredos",title:"Gestão de Segredos",description:"Plataforma segura para armazenamento, compartilhamento e gestão de informações confidenciais, senhas, credenciais e outros dados sensíveis, com controles granulares de acesso e auditoria.",icon:"🔒",features:["Criptografia de Ponta com algoritmos de última geração","Compartilhamento Seguro com controle de acesso","Histórico de Versões para rastreamento de alterações","Autenticação Multifator em múltiplas camadas","Logs de Auditoria detalhados de todas as atividades"],options:[{name:"Cofre Pessoal",description:"Para gerenciamento de senhas e documentos individuais"},{name:"Cofre Familiar",description:"Compartilhamento seguro entre membros da família"},{name:"Cofre Empresarial",description:"Solução corporativa com hierarquia de acessos"},{name:"Gestão de Credenciais Privilegiadas",description:"Para acessos críticos e administrativos"}]},{id:"carteiras-multiassinadas",title:"Gestão de Carteiras Multiassinadas",description:"Implementação e administração de carteiras multiassinadas (multisig) que exigem múltiplas aprovações para transações, proporcionando governança distribuída e eliminando pontos únicos de falha.",icon:"🏦",features:["Configuração Personalizada de esquemas de assinatura (M-de-N)","Políticas de Aprovação para diferentes tipos de transações","Notificações em Tempo Real sobre solicitações pendentes","Interface Unificada para gestão de múltiplas carteiras","Auditoria Completa com registro imutável de aprovações"],options:[{name:"Multisig Pessoal",description:"Para indivíduos que desejam segurança adicional"},{name:"Multisig Familiar",description:"Para gestão compartilhada de patrimônio familiar"},{name:"Multisig Empresarial",description:"Para tesouraria corporativa com múltiplos aprovadores"},{name:"Multisig para DAOs",description:"Soluções para organizações autônomas descentralizadas"}]}],xp=[{id:"hardware-wallets",title:"Hardware Wallets",description:"Dispositivos físicos de alta segurança para armazenamento de criptomoedas, oferecendo proteção contra ameaças online e verificação física de transações.",icon:"💾",features:["Segurança Offline com chaves privadas isoladas","Verificação Física de transações no próprio dispositivo","Compatibilidade com múltiplas criptomoedas","Backup Seguro via seed phrase","Proteção contra malware e ataques virtuais"],options:[{name:"Trezor Model One",description:"Hardware wallet original com design compacto"},{name:"Trezor Model T",description:"Versão avançada com tela colorida touchscreen"},{name:"Ledger Nano S Plus",description:"Solução segura com suporte a múltiplos ativos"},{name:"Ledger Nano X",description:"Versão premium com conectividade Bluetooth"}]},{id:"paper-wallets",title:"Paper Wallets",description:"Carteiras de papel são uma forma segura de armazenamento offline (cold storage) para criptomoedas, consistindo em um documento físico contendo as chaves pública e privada impressas.",icon:"📄",features:["Segurança Máxima por serem completamente offline","Armazenamento de Longo Prazo para investidores","Independência de Hardware sem dispositivos eletrônicos","Baixo Custo comparado a hardware wallets","Compatibilidade com múltiplas criptomoedas"],options:[{name:"Paper Wallet Básica",description:"Impressão em papel comum com chaves públicas e privadas"},{name:"Paper Wallet Premium",description:"Impressão em material resistente à água e rasgos, com design personalizado"},{name:"Paper Wallet Empresarial",description:"Múltiplas carteiras com sistema de organização e backup"},{name:"Kit de Backup",description:"Inclui múltiplas cópias e instruções detalhadas para armazenamento seguro"}]},{id:"certificados-digitais",title:"Certificados Digitais",description:"Certificados criptográficos emitidos por autoridades certificadoras reconhecidas, utilizados para autenticação, assinatura digital e criptografia em diversos contextos.",icon:"📜",features:["Validade Jurídica para assinaturas e autenticações","Diferentes Níveis conforme necessidade de segurança","Múltiplos Formatos disponíveis (tokens, arquivos, cartões)","Interoperabilidade com diversos sistemas","Rastreabilidade de uso e verificação"],options:[{name:"e-CPF",description:"Certificado digital para pessoas físicas"},{name:"e-CNPJ",description:"Certificado digital para empresas"},{name:"Certificados SSL/TLS",description:"Para segurança de websites"},{name:"Certificados de Assinatura de Código",description:"Para desenvolvedores de software"}]}],I_=({title:o,description:e,icon:n,delay:r=0,className:a="",onClick:u})=>ye.jsxs("div",{className:`card service-card hologram ${a}`,style:{animationDelay:`${r}s`,transitionDelay:`${r}s`},onClick:u,children:[ye.jsx("div",{className:"card-icon neon-text-cyan",children:n}),ye.jsx("h3",{className:"card-title neon-text-green",children:o}),ye.jsx("p",{className:"card-description",children:e})]}),F_=({title:o,description:e,icon:n,delay:r=0,className:a="",onClick:u})=>ye.jsxs("div",{className:`card product-card hologram ${a}`,style:{animationDelay:`${r}s`,transitionDelay:`${r}s`},onClick:u,children:[ye.jsx("div",{className:"card-icon neon-text-pink",children:n}),ye.jsx("h3",{className:"card-title neon-text-green",children:o}),ye.jsx("p",{className:"card-description",children:e})]}),Sp=({title:o,description:e,features:n,options:r,icon:a,className:u=""})=>ye.jsxs("div",{className:`service-detail perspective-container ${u}`,children:[ye.jsxs("div",{className:"service-detail-header",children:[ye.jsx("div",{className:"service-detail-icon neon-text-cyan",children:a}),ye.jsx("h3",{className:"service-detail-title neon-text-green",children:o})]}),ye.jsxs("div",{className:"service-detail-content",children:[ye.jsx("p",{className:"service-detail-description",children:e}),ye.jsxs("div",{className:"service-detail-features",children:[ye.jsx("h4",{className:"neon-text-cyan",children:"Características"}),ye.jsx("ul",{children:n.map((f,d)=>ye.jsxs("li",{className:"depth-1",children:[ye.jsx("span",{className:"feature-bullet neon-text-pink",children:"■"})," ",f]},d))})]}),ye.jsxs("div",{className:"service-detail-options",children:[ye.jsx("h4",{className:"neon-text-cyan",children:"Opções de Serviço"}),ye.jsx("div",{className:"options-grid",children:r.map((f,d)=>ye.jsxs("div",{className:"option-item depth-2",children:[ye.jsx("h5",{className:"neon-text-green",children:f.name}),ye.jsx("p",{children:f.description})]},d))})]})]})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="176",O_=0,yp=1,k_=2,vm=1,B_=2,Ni=3,vr=0,Dn=1,Ui=2,gr=0,Us=1,Mp=2,Ep=3,Tp=4,z_=5,Vr=100,H_=101,V_=102,G_=103,W_=104,X_=200,j_=201,Y_=202,q_=203,Vc=204,Gc=205,$_=206,K_=207,Z_=208,Q_=209,J_=210,ev=211,tv=212,nv=213,iv=214,Wc=0,Xc=1,jc=2,Fs=3,Yc=4,qc=5,$c=6,Kc=7,xm=0,rv=1,sv=2,_r=0,ov=1,av=2,lv=3,uv=4,cv=5,fv=6,dv=7,Sm=300,Os=301,ks=302,Zc=303,Qc=304,Al=306,Jc=1e3,Wr=1001,ef=1002,li=1003,hv=1004,ja=1005,gi=1006,dc=1007,Xr=1008,ki=1009,ym=1010,Mm=1011,Po=1012,Nf=1013,Yr=1014,Ii=1015,No=1016,Uf=1017,If=1018,bo=1020,Em=35902,Tm=1021,wm=1022,ai=1023,Do=1026,Lo=1027,Am=1028,Ff=1029,Cm=1030,Of=1031,kf=1033,gl=33776,_l=33777,vl=33778,xl=33779,tf=35840,nf=35841,rf=35842,sf=35843,of=36196,af=37492,lf=37496,uf=37808,cf=37809,ff=37810,df=37811,hf=37812,pf=37813,mf=37814,gf=37815,_f=37816,vf=37817,xf=37818,Sf=37819,yf=37820,Mf=37821,Sl=36492,Ef=36494,Tf=36495,Rm=36283,wf=36284,Af=36285,Cf=36286,pv=3200,mv=3201,gv=0,_v=1,mr="",Yn="srgb",Bs="srgb-linear",El="linear",At="srgb",xs=7680,wp=519,vv=512,xv=513,Sv=514,Pm=515,yv=516,Mv=517,Ev=518,Tv=519,Ap=35044,Cp="300 es",Fi=2e3,Tl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,Rf=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function wv(o,e){return(o%e+e)%e}function pc(o,e,n){return(1-n)*o+n*e}function Eo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,u,f,d,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],x=r[2],y=r[5],T=r[8],R=a[0],S=a[3],g=a[6],C=a[1],L=a[4],P=a[7],W=a[2],k=a[5],I=a[8];return u[0]=f*R+d*C+p*W,u[3]=f*S+d*L+p*k,u[6]=f*g+d*P+p*I,u[1]=m*R+v*C+_*W,u[4]=m*S+v*L+_*k,u[7]=m*g+v*P+_*I,u[2]=x*R+y*C+T*W,u[5]=x*S+y*L+T*k,u[8]=x*g+y*P+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=v*f-d*m,x=d*p-v*u,y=m*u-f*p,T=n*_+r*x+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=_*R,e[1]=(a*m-v*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(v*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=y*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new at;function bm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Av(){const o=wl("canvas");return o.style.display="block",o}const Rp={};function yl(o){o in Rp||(Rp[o]=!0,console.warn(o))}function Cv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Rv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pp=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bv(){const o={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===At&&(a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===At&&(a.r=Is(a.r),a.g=Is(a.g),a.b=Is(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?El:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Bs]:{primaries:e,whitePoint:r,transfer:El,toXYZ:Pp,fromXYZ:bp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:At,toXYZ:Pp,fromXYZ:bp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),o}const Mt=bv();function Oi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ss;class Dv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ss===void 0&&(Ss=wl("canvas")),Ss.width=e.width,Ss.height=e.height;const a=Ss.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ss}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Oi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oi(n[r]/255)*255):n[r]=Oi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lv=0;class Bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(gc(a[f].image)):u.push(gc(a[f]))}else u=gc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function gc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Dv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nv=0;class Ln extends Hs{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Wr,a=Wr,u=gi,f=Xr,d=ai,p=ki,m=Ln.DEFAULT_ANISOTROPY,v=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Uo(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jc:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jc:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Sm;Ln.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],_=p[8],x=p[1],y=p[5],T=p[9],R=p[2],S=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-R)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+R)<.1&&Math.abs(T+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(y+1)/2,W=(g+1)/2,k=(v+x)/4,I=(_+R)/4,j=(T+S)/4;return L>P&&L>W?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=k/r,u=I/r):P>W?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=k/a,u=j/a):W<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(W),r=I/u,a=j/u),this.set(r,a,u,n),this}let C=Math.sqrt((S-T)*(S-T)+(_-R)*(_-R)+(x-v)*(x-v));return Math.abs(C)<.001&&(C=1),this.x=(S-T)/C,this.y=(_-R)/C,this.z=(x-v)/C,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uv extends Hs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Bf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends Uv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Dm extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iv extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];const x=u[f+0],y=u[f+1],T=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=R;return}if(_!==R||p!==x||m!==y||v!==T){let S=1-d;const g=p*x+m*y+v*T+_*R,C=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const W=Math.sqrt(L),k=Math.atan2(W,g*C);S=Math.sin(S*k)/W,d=Math.sin(d*k)/W}const P=d*C;if(p=p*S+x*P,m=m*S+y*P,v=v*S+T*P,_=_*S+R*P,S===1-d){const W=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=W,m*=W,v*=W,_*=W}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],_=u[f],x=u[f+1],y=u[f+2],T=u[f+3];return e[n]=d*T+v*_+p*y-m*x,e[n+1]=p*T+v*x+m*_-d*y,e[n+2]=m*T+v*y+d*x-p*_,e[n+3]=v*T-d*_-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),_=d(u/2),x=p(r/2),y=p(a/2),T=p(u/2);switch(f){case"XYZ":this._x=x*v*_+m*y*T,this._y=m*y*_-x*v*T,this._z=m*v*T+x*y*_,this._w=m*v*_-x*y*T;break;case"YXZ":this._x=x*v*_+m*y*T,this._y=m*y*_-x*v*T,this._z=m*v*T-x*y*_,this._w=m*v*_+x*y*T;break;case"ZXY":this._x=x*v*_-m*y*T,this._y=m*y*_+x*v*T,this._z=m*v*T+x*y*_,this._w=m*v*_-x*y*T;break;case"ZYX":this._x=x*v*_-m*y*T,this._y=m*y*_+x*v*T,this._z=m*v*T-x*y*_,this._w=m*v*_+x*y*T;break;case"YZX":this._x=x*v*_+m*y*T,this._y=m*y*_+x*v*T,this._z=m*v*T-x*y*_,this._w=m*v*_-x*y*T;break;case"XZY":this._x=x*v*_-m*y*T,this._y=m*y*_-x*v*T,this._z=m*v*T+x*y*_,this._w=m*v*_+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],_=n[10],x=r+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(v-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),_=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),_=2*(u*r-f*n);return this.x=n+p*m+f*_-d*v,this.y=r+p*v+d*m-u*_,this.z=a+p*_+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new te,Dp=new Io;class Fo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ii):ii.fromBufferAttribute(u,f),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ya.copy(r.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),qa.subVectors(this.max,To),ys.subVectors(e.a,To),Ms.subVectors(e.b,To),Es.subVectors(e.c,To),ur.subVectors(Ms,ys),cr.subVectors(Es,Ms),Ur.subVectors(ys,Es);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ur.z,Ur.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ur.z,0,-Ur.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ur.y,Ur.x,0];return!vc(n,ys,Ms,Es,qa)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,ys,Ms,Es,qa))?!1:($a.crossVectors(ur,cr),n=[$a.x,$a.y,$a.z],vc(n,ys,Ms,Es,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new te,new te,new te,new te,new te,new te,new te,new te],ii=new te,Ya=new Fo,ys=new te,Ms=new te,Es=new te,ur=new te,cr=new te,Ur=new te,To=new te,qa=new te,$a=new te,Ir=new te;function vc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Ir.fromArray(o,u);const d=a.x*Math.abs(Ir.x)+a.y*Math.abs(Ir.y)+a.z*Math.abs(Ir.z),p=e.dot(Ir),m=n.dot(Ir),v=r.dot(Ir);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Fv=new Fo,wo=new te,xc=new te;class Cl{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Fv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const n=wo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(wo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(xc)),this.expandByPoint(wo.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new te,Sc=new te,Ka=new te,fr=new te,yc=new te,Za=new te,Mc=new te;class Lm{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Sc.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Sc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ka),d=fr.dot(this.direction),p=-fr.dot(Ka),m=fr.lengthSq(),v=Math.abs(1-f*f);let _,x,y,T;if(v>0)if(_=f*p-d,x=f*d-p,T=u*v,_>=0)if(x>=-T)if(x<=T){const R=1/v;_*=R,x*=R,y=_*(_+f*x+2*d)+x*(f*_+x+2*p)+m}else x=u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;else x=-u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;else x<=-T?(_=Math.max(0,-(-f*u+d)),x=_>0?-u:Math.min(Math.max(-u,-p),u),y=-_*_+x*(x+2*p)+m):x<=T?(_=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(_=Math.max(0,-(f*u+d)),x=_>0?u:Math.min(Math.max(-u,-p),u),y=-_*_+x*(x+2*p)+m);else x=f>0?-u:u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Sc).addScaledVector(Ka,x),y}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const r=Pi.dot(this.direction),a=Pi.dot(Pi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),_>=0?(d=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,r,a,u){yc.subVectors(n,e),Za.subVectors(r,e),Mc.crossVectors(yc,Za);let f=this.direction.dot(Mc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const p=d*this.direction.dot(Za.crossVectors(fr,Za));if(p<0)return null;const m=d*this.direction.dot(yc.cross(fr));if(m<0||p+m>f)return null;const v=-d*fr.dot(Mc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,r,a,u,f,d,p,m,v,_,x,y,T,R,S){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,_,x,y,T,R,S)}set(e,n,r,a,u,f,d,p,m,v,_,x,y,T,R,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=x,g[3]=y,g[7]=T,g[11]=R,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=f*v,y=f*_,T=d*v,R=d*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=y+T*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=T+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,y=p*_,T=m*v,R=m*_;n[0]=x+R*d,n[4]=T*d-y,n[8]=f*m,n[1]=f*_,n[5]=f*v,n[9]=-d,n[2]=y*d-T,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,y=p*_,T=m*v,R=m*_;n[0]=x-R*d,n[4]=-f*_,n[8]=T+y*d,n[1]=y+T*d,n[5]=f*v,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,y=f*_,T=d*v,R=d*_;n[0]=p*v,n[4]=T*m-y,n[8]=x*m+R,n[1]=p*_,n[5]=R*m+x,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,T=d*p,R=d*m;n[0]=p*v,n[4]=R-x*_,n[8]=T*_+y,n[1]=_,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*_+T,n[10]=x-R*_}else if(e.order==="XZY"){const x=f*p,y=f*m,T=d*p,R=d*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=x*_+R,n[5]=f*v,n[9]=y*_-T,n[2]=T*_-y,n[6]=d*v,n[10]=R*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ov,e,kv)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),dr.crossVectors(r,kn),dr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),dr.crossVectors(r,kn)),dr.normalize(),Qa.crossVectors(kn,dr),a[0]=dr.x,a[4]=Qa.x,a[8]=kn.x,a[1]=dr.y,a[5]=Qa.y,a[9]=kn.y,a[2]=dr.z,a[6]=Qa.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],x=r[9],y=r[13],T=r[2],R=r[6],S=r[10],g=r[14],C=r[3],L=r[7],P=r[11],W=r[15],k=a[0],I=a[4],j=a[8],b=a[12],A=a[1],z=a[5],oe=a[9],ee=a[13],ce=a[2],pe=a[6],se=a[10],le=a[14],B=a[3],ae=a[7],re=a[11],U=a[15];return u[0]=f*k+d*A+p*ce+m*B,u[4]=f*I+d*z+p*pe+m*ae,u[8]=f*j+d*oe+p*se+m*re,u[12]=f*b+d*ee+p*le+m*U,u[1]=v*k+_*A+x*ce+y*B,u[5]=v*I+_*z+x*pe+y*ae,u[9]=v*j+_*oe+x*se+y*re,u[13]=v*b+_*ee+x*le+y*U,u[2]=T*k+R*A+S*ce+g*B,u[6]=T*I+R*z+S*pe+g*ae,u[10]=T*j+R*oe+S*se+g*re,u[14]=T*b+R*ee+S*le+g*U,u[3]=C*k+L*A+P*ce+W*B,u[7]=C*I+L*z+P*pe+W*ae,u[11]=C*j+L*oe+P*se+W*re,u[15]=C*b+L*ee+P*le+W*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],_=e[6],x=e[10],y=e[14],T=e[3],R=e[7],S=e[11],g=e[15];return T*(+u*p*_-a*m*_-u*d*x+r*m*x+a*d*y-r*p*y)+R*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*v-u*p*v)+S*(+n*m*_-n*d*y-u*f*_+r*f*y+u*d*v-r*m*v)+g*(-a*d*v-n*p*_+n*d*x+a*f*_-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=e[9],x=e[10],y=e[11],T=e[12],R=e[13],S=e[14],g=e[15],C=_*S*m-R*x*m+R*p*y-d*S*y-_*p*g+d*x*g,L=T*x*m-v*S*m-T*p*y+f*S*y+v*p*g-f*x*g,P=v*R*m-T*_*m+T*d*y-f*R*y-v*d*g+f*_*g,W=T*_*p-v*R*p-T*d*x+f*R*x+v*d*S-f*_*S,k=n*C+r*L+a*P+u*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=C*I,e[1]=(R*x*u-_*S*u-R*a*y+r*S*y+_*a*g-r*x*g)*I,e[2]=(d*S*u-R*p*u+R*a*m-r*S*m-d*a*g+r*p*g)*I,e[3]=(_*p*u-d*x*u-_*a*m+r*x*m+d*a*y-r*p*y)*I,e[4]=L*I,e[5]=(v*S*u-T*x*u+T*a*y-n*S*y-v*a*g+n*x*g)*I,e[6]=(T*p*u-f*S*u-T*a*m+n*S*m+f*a*g-n*p*g)*I,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*y+n*p*y)*I,e[8]=P*I,e[9]=(T*_*u-v*R*u-T*r*y+n*R*y+v*r*g-n*_*g)*I,e[10]=(f*R*u-T*d*u+T*r*m-n*R*m-f*r*g+n*d*g)*I,e[11]=(v*d*u-f*_*u-v*r*m+n*_*m+f*r*y-n*d*y)*I,e[12]=W*I,e[13]=(v*R*a-T*_*a+T*r*x-n*R*x-v*r*S+n*_*S)*I,e[14]=(T*d*a-f*R*a-T*r*p+n*R*p+f*r*S-n*d*S)*I,e[15]=(f*_*a-v*d*a+v*r*p-n*_*p-f*r*x+n*d*x)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,_=d+d,x=u*m,y=u*v,T=u*_,R=f*v,S=f*_,g=d*_,C=p*m,L=p*v,P=p*_,W=r.x,k=r.y,I=r.z;return a[0]=(1-(R+g))*W,a[1]=(y+P)*W,a[2]=(T-L)*W,a[3]=0,a[4]=(y-P)*k,a[5]=(1-(x+g))*k,a[6]=(S+C)*k,a[7]=0,a[8]=(T+L)*I,a[9]=(S-C)*I,a[10]=(1-(x+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const f=Ts.set(a[4],a[5],a[6]).length(),d=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,v=1/f,_=1/d;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=v,ri.elements[5]*=v,ri.elements[6]*=v,ri.elements[8]*=_,ri.elements[9]*=_,ri.elements[10]*=_,n.setFromRotationMatrix(ri),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Fi){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),_=(n+e)/(n-e),x=(r+a)/(r-a);let y,T;if(d===Fi)y=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Tl)y=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Fi){const p=this.elements,m=1/(n-e),v=1/(r-a),_=1/(f-u),x=(n+e)*m,y=(r+a)*v;let T,R;if(d===Fi)T=(f+u)*_,R=-2*_;else if(d===Tl)T=u*_,R=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new te,ri=new Wt,Ov=new te(0,0,0),kv=new te(1,1,1),dr=new te,Qa=new te,kn=new te,Lp=new Wt,Np=new Io;class Bi{constructor(e=0,n=0,r=0,a=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],_=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bv=0;const Up=new te,ws=new Io,bi=new Wt,Ja=new te,Ao=new te,zv=new te,Hv=new Io,Ip=new te(1,0,0),Fp=new te(0,1,0),Op=new te(0,0,1),kp={type:"added"},Vv={type:"removed"},As={type:"childadded",child:null},Ec={type:"childremoved",child:null};class Nn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new te,n=new Bi,r=new Io,a=new te(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new at}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Fp,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Fp,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ja.copy(e):Ja.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ao,Ja,this.up):bi.lookAt(Ja,Ao,this.up),this.quaternion.setFromRotationMatrix(bi),a&&(bi.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(bi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Vv),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),_=f(e.shapes),x=f(e.skeletons),y=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Nn.DEFAULT_UP=new te(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new te,Di=new te,Tc=new te,Li=new te,Cs=new te,Rs=new te,Bp=new te,wc=new te,Ac=new te,Cc=new te,Rc=new Gt,Pc=new Gt,bc=new Gt;class oi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Di.subVectors(r,n),Tc.subVectors(e,n);const f=si.dot(si),d=si.dot(Di),p=si.dot(Tc),m=Di.dot(Di),v=Di.dot(Tc),_=f*m-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,y=(m*p-d*v)*x,T=(f*v-d*p)*x;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Li.x),p.addScaledVector(f,Li.y),p.addScaledVector(d,Li.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Rc.setScalar(0),Pc.setScalar(0),bc.setScalar(0),Rc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,r),bc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Rc,u.x),f.addScaledVector(Pc,u.y),f.addScaledVector(bc,u.z),f}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Di.subVectors(e,n),si.cross(Di).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Cs.subVectors(a,r),Rs.subVectors(u,r),wc.subVectors(e,r);const p=Cs.dot(wc),m=Rs.dot(wc);if(p<=0&&m<=0)return n.copy(r);Ac.subVectors(e,a);const v=Cs.dot(Ac),_=Rs.dot(Ac);if(v>=0&&_<=v)return n.copy(a);const x=p*_-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Cs,f);Cc.subVectors(e,u);const y=Cs.dot(Cc),T=Rs.dot(Cc);if(T>=0&&y<=T)return n.copy(u);const R=y*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Rs,d);const S=v*T-y*_;if(S<=0&&_-v>=0&&y-T>=0)return Bp.subVectors(u,a),d=(_-v)/(_-v+(y-T)),n.copy(a).addScaledVector(Bp,d);const g=1/(S+R+x);return f=R*g,d=x*g,n.copy(r).addScaledVector(Cs,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Dc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=wv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Dc(f,u,e+1/3),this.g=Dc(f,u,e),this.b=Dc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=Yn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const r=Um[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Mt.fromWorkingColorSpace(mn.copy(this),e),Math.round(gt(mn.r*255,0,255))*65536+Math.round(gt(mn.g*255,0,255))*256+Math.round(gt(mn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,u=mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=v<=.5?_/(f+d):_/(2-f-d),f){case r:p=(a-u)/_+(a<u?6:0);break;case a:p=(u-r)/_+2;break;case u:p=(r-a)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Yn){Mt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(el);const r=pc(hr.h,el.h,n),a=pc(hr.s,el.s,n),u=pc(hr.l,el.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Tt;Tt.NAMES=Um;let Gv=0;class Oo extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=Us,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vc&&(r.blendSrc=this.blendSrc),this.blendDst!==Gc&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zf extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new te,tl=new Rt;let Wv=0;class Kn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ap,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array),u=bn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}}class Im extends Kn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Fm extends Kn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class jr extends Kn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Xv=0;const jn=new Wt,Lc=new Nn,Ps=new te,Bn=new Fo,Co=new Fo,rn=new te;class zi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Fm:Im)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new at().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new jr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Bn.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(Bn.min,Co.min),Bn.expandByPoint(rn),rn.addVectors(Bn.max,Co.max),Bn.expandByPoint(rn)):(Bn.expandByPoint(Co.min),Bn.expandByPoint(Co.max))}Bn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)rn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)rn.fromBufferAttribute(d,m),p&&(Ps.fromBufferAttribute(e,m),rn.add(Ps)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let j=0;j<r.count;j++)d[j]=new te,p[j]=new te;const m=new te,v=new te,_=new te,x=new Rt,y=new Rt,T=new Rt,R=new te,S=new te;function g(j,b,A){m.fromBufferAttribute(r,j),v.fromBufferAttribute(r,b),_.fromBufferAttribute(r,A),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,b),T.fromBufferAttribute(u,A),v.sub(m),_.sub(m),y.sub(x),T.sub(x);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(R.copy(v).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(z),S.copy(_).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(z),d[j].add(R),d[b].add(R),d[A].add(R),p[j].add(S),p[b].add(S),p[A].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let j=0,b=C.length;j<b;++j){const A=C[j],z=A.start,oe=A.count;for(let ee=z,ce=z+oe;ee<ce;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new te,P=new te,W=new te,k=new te;function I(j){W.fromBufferAttribute(a,j),k.copy(W);const b=d[j];L.copy(b),L.sub(W.multiplyScalar(W.dot(b))).normalize(),P.crossVectors(k,b);const z=P.dot(p[j])<0?-1:1;f.setXYZW(j,L.x,L.y,L.z,z)}for(let j=0,b=C.length;j<b;++j){const A=C[j],z=A.start,oe=A.count;for(let ee=z,ce=z+oe;ee<ce;ee+=3)I(e.getX(ee+0)),I(e.getX(ee+1)),I(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new te,u=new te,f=new te,d=new te,p=new te,m=new te,v=new te,_=new te;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),R=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,S),v.subVectors(f,u),_.subVectors(a,u),v.cross(_),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),_.subVectors(a,u),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,_=d.normalized,x=new m.constructor(p.length*v);let y=0,T=0;for(let R=0,S=p.length;R<S;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*v;for(let g=0;g<v;g++)x[T++]=m[y++]}return new Kn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,_=m.length;v<_;v++){const x=m[v],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];v.push(y.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],_=u[m];for(let x=0,y=_.length;x<y;x++)v.push(_[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zp=new Wt,Fr=new Lm,nl=new Cl,Hp=new te,il=new te,rl=new te,sl=new te,Nc=new te,ol=new te,Vp=new te,al=new te;class $n extends Nn{constructor(e=new zi,n=new zf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ol.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],_=u[p];v!==0&&(Nc.fromBufferAttribute(_,e),f?ol.addScaledVector(Nc,v):ol.addScaledVector(Nc.sub(n),v))}n.add(ol)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(u),Fr.copy(e.ray).recast(e.near),!(nl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(nl,Hp)===null||Fr.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(zp.copy(u).invert(),Fr.copy(e.ray).applyMatrix4(zp),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,R=x.length;T<R;T++){const S=x[T],g=f[S.materialIndex],C=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let P=C,W=L;P<W;P+=3){const k=d.getX(P),I=d.getX(P+1),j=d.getX(P+2);a=ll(this,g,e,r,m,v,_,k,I,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let S=T,g=R;S<g;S+=3){const C=d.getX(S),L=d.getX(S+1),P=d.getX(S+2);a=ll(this,f,e,r,m,v,_,C,L,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,R=x.length;T<R;T++){const S=x[T],g=f[S.materialIndex],C=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let P=C,W=L;P<W;P+=3){const k=P,I=P+1,j=P+2;a=ll(this,g,e,r,m,v,_,k,I,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let S=T,g=R;S<g;S+=3){const C=S,L=S+1,P=S+2;a=ll(this,f,e,r,m,v,_,C,L,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function jv(o,e,n,r,a,u,f,d){let p;if(e.side===Dn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===vr,d),p===null)return null;al.copy(d),al.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(al);return m<n.near||m>n.far?null:{distance:m,point:al.clone(),object:o}}function ll(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,il),o.getVertexPosition(p,rl),o.getVertexPosition(m,sl);const v=jv(o,e,n,r,il,rl,sl,Vp);if(v){const _=new te;oi.getBarycoord(Vp,il,rl,sl,_),a&&(v.uv=oi.getInterpolatedAttribute(a,d,p,m,_,new Rt)),u&&(v.uv1=oi.getInterpolatedAttribute(u,d,p,m,_,new Rt)),f&&(v.normal=oi.getInterpolatedAttribute(f,d,p,m,_,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new te,materialIndex:0};oi.getNormal(il,rl,sl,x.normal),v.face=x,v.barycoord=_}return v}class Vs extends zi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new jr(m,3)),this.setAttribute("normal",new jr(v,3)),this.setAttribute("uv",new jr(_,2));function T(R,S,g,C,L,P,W,k,I,j,b){const A=P/I,z=W/j,oe=P/2,ee=W/2,ce=k/2,pe=I+1,se=j+1;let le=0,B=0;const ae=new te;for(let re=0;re<se;re++){const U=re*z-ee;for(let ne=0;ne<pe;ne++){const Ue=ne*A-oe;ae[R]=Ue*C,ae[S]=U*L,ae[g]=ce,m.push(ae.x,ae.y,ae.z),ae[R]=0,ae[S]=0,ae[g]=k>0?1:-1,v.push(ae.x,ae.y,ae.z),_.push(ne/I),_.push(1-re/j),le+=1}}for(let re=0;re<j;re++)for(let U=0;U<I;U++){const ne=x+U+pe*re,Ue=x+U+pe*(re+1),Z=x+(U+1)+pe*(re+1),he=x+(U+1)+pe*re;p.push(ne,Ue,he),p.push(Ue,Z,he),B+=6}d.addGroup(y,B,b),y+=B,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(o){const e={};for(let n=0;n<o.length;n++){const r=zs(o[n]);for(const a in r)e[a]=r[a]}return e}function Yv(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Om(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const qv={clone:zs,merge:Mn};var $v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class km extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new te,Gp=new Rt,Wp=new Rt;class qn extends km{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Gp,Wp),n.subVectors(Wp,Gp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ds=1;class Zv extends Nn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(bs,Ds,e,n);a.layers=this.layers,this.add(a);const u=new qn(bs,Ds,e,n);u.layers=this.layers,this.add(u);const f=new qn(bs,Ds,e,n);f.layers=this.layers,this.add(f);const d=new qn(bs,Ds,e,n);d.layers=this.layers,this.add(d);const p=new qn(bs,Ds,e,n);p.layers=this.layers,this.add(p);const m=new qn(bs,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,x,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Bm extends Ln{constructor(e=[],n=Os,r,a,u,f,d,p,m,v){super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qv extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Bm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Vs(5,5,5),u=new xr({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:gr});u.uniforms.tEquirect.value=n;const f=new $n(a,u),d=n.minFilter;return n.minFilter===Xr&&(n.minFilter=gi),new Zv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class ul extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const S=n.getJointPose(R,r),g=this._getHandJoint(m,R);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ul;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class e0 extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ic=new te,t0=new te,n0=new at;class zr{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Ic.subVectors(r,n).cross(t0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ic),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||n0.getNormalMatrix(e),a=this.coplanarPoint(Ic).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Cl,cl=new te;class zm{constructor(e=new zr,n=new zr,r=new zr,a=new zr,u=new zr,f=new zr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],_=a[6],x=a[7],y=a[8],T=a[9],R=a[10],S=a[11],g=a[12],C=a[13],L=a[14],P=a[15];if(r[0].setComponents(p-u,x-m,S-y,P-g).normalize(),r[1].setComponents(p+u,x+m,S+y,P+g).normalize(),r[2].setComponents(p+f,x+v,S+T,P+C).normalize(),r[3].setComponents(p-f,x-v,S-T,P-C).normalize(),r[4].setComponents(p-d,x-_,S-R,P-L).normalize(),n===Fi)r[5].setComponents(p+d,x+_,S+R,P+L).normalize();else if(n===Tl)r[5].setComponents(d,_,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hm extends Oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xp=new Wt,Pf=new Lm,fl=new Cl,dl=new te;class i0 extends Nn{constructor(e=new zi,n=new Hm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(a),fl.radius+=u,e.ray.intersectsSphere(fl)===!1)return;Xp.copy(a).invert(),Pf.copy(e.ray).applyMatrix4(Xp);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),y=Math.min(m.count,f.start+f.count);for(let T=x,R=y;T<R;T++){const S=m.getX(T);dl.fromBufferAttribute(_,S),jp(dl,S,p,a,e,n,this)}}else{const x=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let T=x,R=y;T<R;T++)dl.fromBufferAttribute(_,T),jp(dl,T,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function jp(o,e,n,r,a,u,f){const d=Pf.distanceSqToPoint(o);if(d<n){const p=new te;Pf.closestPointToPoint(o,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Vm extends Ln{constructor(e,n,r=Yr,a,u,f,d=li,p=li,m,v=Do){if(v!==Do&&v!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Rl extends zi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,_=e/d,x=n/p,y=[],T=[],R=[],S=[];for(let g=0;g<v;g++){const C=g*x-f;for(let L=0;L<m;L++){const P=L*_-u;T.push(P,-C,0),R.push(0,0,1),S.push(L/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let C=0;C<d;C++){const L=C+m*g,P=C+m*(g+1),W=C+1+m*(g+1),k=C+1+m*g;y.push(L,P,k),y.push(P,W,k)}this.setIndex(y),this.setAttribute("position",new jr(T,3)),this.setAttribute("normal",new jr(R,3)),this.setAttribute("uv",new jr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}class r0 extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s0 extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class o0 extends km{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class a0 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Yp(o,e,n,r){const a=l0(r);switch(n){case Tm:return o*e;case Am:return o*e/a.components*a.byteLength;case Ff:return o*e/a.components*a.byteLength;case Cm:return o*e*2/a.components*a.byteLength;case Of:return o*e*2/a.components*a.byteLength;case wm:return o*e*3/a.components*a.byteLength;case ai:return o*e*4/a.components*a.byteLength;case kf:return o*e*4/a.components*a.byteLength;case gl:case _l:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nf:case sf:return Math.max(o,16)*Math.max(e,8)/4;case tf:case rf:return Math.max(o,8)*Math.max(e,8)/2;case of:case af:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ff:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case df:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case pf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case mf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case gf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case _f:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case xf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case yf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Ef:case Tf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Rm:case wf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Af:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function l0(o){switch(o){case ki:case ym:return{byteLength:1,components:1};case Po:case Mm:case No:return{byteLength:2,components:1};case Uf:case If:return{byteLength:2,components:4};case Yr:case Nf:case Ii:return{byteLength:4,components:1};case Em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gm(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function u0(o){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,_=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,v);else{_.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<_.length;y++){const T=_[x],R=_[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,_[x]=R)}_.length=x+1;for(let y=0,T=_.length;y<T;y++){const R=_[y];o.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
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
#endif`,lx=`struct PhysicalMaterial {
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
}`,ux=`
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,Zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
}`,_S=`#define DISTANCE
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
}`,vS=`#define DISTANCE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,CS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,PS=`#define NORMAL
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
}`,bS=`#define NORMAL
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
}`,DS=`#define PHONG
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
}`,LS=`#define PHONG
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
}`,NS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,IS=`#define TOON
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
}`,FS=`#define TOON
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
}`,OS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,zS=`uniform vec3 color;
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
}`,HS=`uniform float rotation;
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
}`,VS=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:c0,alphahash_pars_fragment:f0,alphamap_fragment:d0,alphamap_pars_fragment:h0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:_0,batching_pars_vertex:v0,batching_vertex:x0,begin_vertex:S0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:E0,bumpmap_pars_fragment:T0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:R0,color_fragment:P0,color_pars_fragment:b0,color_pars_vertex:D0,color_vertex:L0,common:N0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:I0,displacementmap_pars_vertex:F0,displacementmap_vertex:O0,emissivemap_fragment:k0,emissivemap_pars_fragment:B0,colorspace_fragment:z0,colorspace_pars_fragment:H0,envmap_fragment:V0,envmap_common_pars_fragment:G0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nx,envmap_vertex:j0,fog_vertex:Y0,fog_pars_vertex:q0,fog_fragment:$0,fog_pars_fragment:K0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:Q0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:rx,lights_phong_fragment:sx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:ux,lights_fragment_maps:cx,lights_fragment_end:fx,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:_x,map_particle_fragment:vx,map_particle_pars_fragment:xx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:yx,morphinstance_vertex:Mx,morphcolor_vertex:Ex,morphnormal_vertex:Tx,morphtarget_pars_vertex:wx,morphtarget_vertex:Ax,normal_fragment_begin:Cx,normal_fragment_maps:Rx,normal_pars_fragment:Px,normal_pars_vertex:bx,normal_vertex:Dx,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Fx,opaque_fragment:Ox,packing:kx,premultiplied_alpha_fragment:Bx,project_vertex:zx,dithering_fragment:Hx,dithering_pars_fragment:Vx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:jx,shadowmap_vertex:Yx,shadowmask_pars_fragment:qx,skinbase_vertex:$x,skinning_pars_vertex:Kx,skinning_vertex:Zx,skinnormal_vertex:Qx,specularmap_fragment:Jx,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:uS,background_frag:cS,backgroundCube_vert:fS,backgroundCube_frag:dS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distanceRGBA_vert:_S,distanceRGBA_frag:vS,equirect_vert:xS,equirect_frag:SS,linedashed_vert:yS,linedashed_frag:MS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:wS,meshlambert_frag:AS,meshmatcap_vert:CS,meshmatcap_frag:RS,meshnormal_vert:PS,meshnormal_frag:bS,meshphong_vert:DS,meshphong_frag:LS,meshphysical_vert:NS,meshphysical_frag:US,meshtoon_vert:IS,meshtoon_frag:FS,points_vert:OS,points_frag:kS,shadow_vert:BS,shadow_frag:zS,sprite_vert:HS,sprite_frag:VS},Pe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},mi={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};mi.physical={uniforms:Mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const hl={r:0,b:0,g:0},kr=new Bi,GS=new Wt;function WS(o,e,n,r,a,u,f){const d=new Tt(0);let p=u===!0?0:1,m,v,_=null,x=0,y=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function R(L){let P=!1;const W=T(L);W===null?g(d,p):W&&W.isColor&&(g(W,1),P=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,P){const W=T(P);W&&(W.isCubeTexture||W.mapping===Al)?(v===void 0&&(v=new $n(new Vs(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:zs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(k,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),kr.copy(P.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.material.uniforms.envMap.value=W,v.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(kr)),v.material.toneMapped=Mt.getTransfer(W.colorSpace)!==At,(_!==W||x!==W.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,_=W,x=W.version,y=o.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):W&&W.isTexture&&(m===void 0&&(m=new $n(new Rl(2,2),new xr({name:"BackgroundMaterial",uniforms:zs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=W,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(W.colorSpace)!==At,W.matrixAutoUpdate===!0&&W.updateMatrix(),m.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||x!==W.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,_=W,x=W.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,P){L.getRGB(hl,Om(o)),r.buffers.color.setClear(hl.r,hl.g,hl.b,P,f)}function C(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),p=P,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:R,addToRenderList:S,dispose:C}}function XS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(A,z,oe,ee,ce){let pe=!1;const se=_(ee,oe,z);u!==se&&(u=se,m(u.object)),pe=y(A,ee,oe,ce),pe&&T(A,ee,oe,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,P(A,z,oe,ee),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function v(A){return o.deleteVertexArray(A)}function _(A,z,oe){const ee=oe.wireframe===!0;let ce=r[A.id];ce===void 0&&(ce={},r[A.id]=ce);let pe=ce[z.id];pe===void 0&&(pe={},ce[z.id]=pe);let se=pe[ee];return se===void 0&&(se=x(p()),pe[ee]=se),se}function x(A){const z=[],oe=[],ee=[];for(let ce=0;ce<n;ce++)z[ce]=0,oe[ce]=0,ee[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:ee,object:A,attributes:{},index:null}}function y(A,z,oe,ee){const ce=u.attributes,pe=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const re=ce[B];let U=pe[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==ee}function T(A,z,oe,ee){const ce={},pe=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let re=pe[B];re===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),ce[B]=U,se++}u.attributes=ce,u.attributesNum=se,u.index=ee}function R(){const A=u.newAttributes;for(let z=0,oe=A.length;z<oe;z++)A[z]=0}function S(A){g(A,0)}function g(A,z){const oe=u.newAttributes,ee=u.enabledAttributes,ce=u.attributeDivisors;oe[A]=1,ee[A]===0&&(o.enableVertexAttribArray(A),ee[A]=1),ce[A]!==z&&(o.vertexAttribDivisor(A,z),ce[A]=z)}function C(){const A=u.newAttributes,z=u.enabledAttributes;for(let oe=0,ee=z.length;oe<ee;oe++)z[oe]!==A[oe]&&(o.disableVertexAttribArray(oe),z[oe]=0)}function L(A,z,oe,ee,ce,pe,se){se===!0?o.vertexAttribIPointer(A,z,oe,ce,pe):o.vertexAttribPointer(A,z,oe,ee,ce,pe)}function P(A,z,oe,ee){R();const ce=ee.attributes,pe=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in pe){const B=pe[le];if(B.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ue=ne.buffer,Z=ne.type,he=ne.bytesPerElement,Ee=Z===o.INT||Z===o.UNSIGNED_INT||ae.gpuType===Nf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,we=ve.stride,je=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ge=0;Ge<B.locationSize;Ge++)g(B.location+Ge,ve.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<B.locationSize;Ge++)S(B.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let Ge=0;Ge<B.locationSize;Ge++)L(B.location+Ge,U/B.locationSize,Z,re,we*he,(je+U/B.locationSize*Ge)*he,Ee)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve,ae.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let ve=0;ve<B.locationSize;ve++)L(B.location+ve,U/B.locationSize,Z,re,U*he,U/B.locationSize*ve*he,Ee)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(B.location,re);break;case 3:o.vertexAttrib3fv(B.location,re);break;case 4:o.vertexAttrib4fv(B.location,re);break;default:o.vertexAttrib1fv(B.location,re)}}}}C()}function W(){j();for(const A in r){const z=r[A];for(const oe in z){const ee=z[oe];for(const ce in ee)v(ee[ce].object),delete ee[ce];delete z[oe]}delete r[A]}}function k(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const oe in z){const ee=z[oe];for(const ce in ee)v(ee[ce].object),delete ee[ce];delete z[oe]}delete r[A.id]}function I(A){for(const z in r){const oe=r[z];if(oe[A.id]===void 0)continue;const ee=oe[A.id];for(const ce in ee)v(ee[ce].object),delete ee[ce];delete oe[A.id]}}function j(){b(),f=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:b,dispose:W,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:S,disableUnusedAttributes:C}}function jS(o,e,n){let r;function a(m){r=m}function u(m,v){o.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,_){_!==0&&(o.drawArraysInstanced(r,m,v,_),n.update(v,r,_))}function d(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let y=0;for(let T=0;T<_;T++)y+=v[T];n.update(y,r,1)}function p(m,v,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)f(m[T],v[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let T=0;for(let R=0;R<_;R++)T+=v[R]*x[R];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function YS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(I){return!(I!==ai&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const j=I===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ki&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ii&&!j)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),W=T>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:W,maxSamples:k}}function qS(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new zr,d=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||a;return a=x,r=_.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,g=o.get(_);if(!a||T===null||T.length===0||u&&!S)u?v(null):m();else{const C=u?0:r,L=C*4;let P=g.clippingState||null;p.value=P,P=v(T,x,L,y);for(let W=0;W!==L;++W)P[W]=n[W];g.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,y,T){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=p.value,T!==!0||S===null){const g=y+R*4,C=x.matrixWorldInverse;d.getNormalMatrix(C),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,P=y;L!==R;++L,P+=4)f.copy(_[L]).applyMatrix4(C,d),f.normal.toArray(S,P),S[P+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function $S(o){let e=new WeakMap;function n(f,d){return d===Zc?f.mapping=Os:d===Qc&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Zc||d===Qc)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Qv(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ns=4,qp=[.125,.215,.35,.446,.526,.582],Gr=20,Fc=new o0,$p=new Tt;let Oc=null,kc=0,Bc=0,zc=!1;const Hr=(1+Math.sqrt(5))/2,Ls=1/Hr,Kp=[new te(-Hr,Ls,0),new te(Hr,Ls,0),new te(-Ls,0,Hr),new te(Ls,0,Hr),new te(0,Hr,-Ls),new te(0,Hr,Ls),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],KS=new te;class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=KS}=u;Oc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,kc,Bc),this._renderer.xr.enabled=zc,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:No,format:ai,colorSpace:Bs,depthBuffer:!1},a=Qp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZS(u)),this._blurMaterial=QS(u,e,n)}return a}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,Fc)}_sceneToCubeUV(e,n,r,a,u){const p=new qn(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor($p),_.toneMapping=_r,_.autoClear=!1;const T=new zf({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),R=new $n(new Vs,T);let S=!1;const g=e.background;g?g.isColor&&(T.color.copy(g),e.background=null,S=!0):(T.color.copy($p),S=!0);for(let C=0;C<6;C++){const L=C%3;L===0?(p.up.set(0,m[C],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[C],u.y,u.z)):L===1?(p.up.set(0,0,m[C]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[C],u.z)):(p.up.set(0,m[C],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[C]));const P=this._cubeSize;pl(a,L*P,C>2?P:0,P,P),_.setRenderTarget(a),S&&_.render(R,p),_.render(e,p)}R.geometry.dispose(),R.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Os||e.mapping===ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new $n(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;pl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Fc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Kp[(a-u-1)%Kp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new $n(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Gr-1),R=u/T,S=isFinite(u)?1+Math.floor(v*R):Gr;S>Gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gr}`);const g=[];let C=0;for(let I=0;I<Gr;++I){const j=I/R,b=Math.exp(-j*j/2);g.push(b),I===0?C+=b:I<S&&(C+=2*b)}for(let I=0;I<g.length;I++)g[I]=g[I]/C;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const P=this._sizeLods[a],W=3*P*(a>L-Ns?a-L+Ns:0),k=4*(this._cubeSize-P);pl(n,W,k,3*P,2*P),p.setRenderTarget(n),p.render(_,Fc)}}function ZS(o){const e=[],n=[],r=[];let a=o;const u=o-Ns+1+qp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Ns?p=qp[f-o+Ns-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,T=6,R=3,S=2,g=1,C=new Float32Array(R*T*y),L=new Float32Array(S*T*y),P=new Float32Array(g*T*y);for(let k=0;k<y;k++){const I=k%3*2/3-1,j=k>2?0:-1,b=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];C.set(b,R*T*k),L.set(x,S*T*k);const A=[k,k,k,k,k,k];P.set(A,g*T*k)}const W=new zi;W.setAttribute("position",new Kn(C,R)),W.setAttribute("uv",new Kn(L,S)),W.setAttribute("faceIndex",new Kn(P,g)),e.push(W),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Qp(o,e,n){const r=new qr(o,e,n);return r.texture.mapping=Al,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function QS(o,e,n){const r=new Float32Array(Gr),a=new te(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Jp(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function em(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Hf(){return`

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
	`}function JS(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Zc||p===Qc,v=p===Os||p===ks;if(m||v){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Zp(o)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new Zp(o)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function ey(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&yl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function ty(o,e,n,r){const a={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,T=_.attributes.position;let R=0;if(y!==null){const C=y.array;R=y.version;for(let L=0,P=C.length;L<P;L+=3){const W=C[L+0],k=C[L+1],I=C[L+2];x.push(W,k,k,I,I,W)}}else if(T!==void 0){const C=T.array;R=T.version;for(let L=0,P=C.length/3-1;L<P;L+=3){const W=L+0,k=L+1,I=L+2;x.push(W,k,k,I,I,W)}}else return;const S=new(bm(x)?Fm:Im)(x,1);S.version=R;const g=u.get(_);g&&e.remove(g),u.set(_,S)}function v(_){const x=u.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function ny(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,T){T!==0&&(o.drawElementsInstanced(r,y,u,x*f,T),n.update(y,r,T))}function v(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,T);let S=0;for(let g=0;g<T;g++)S+=y[g];n.update(S,r,1)}function _(x,y,T,R){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)m(x[g]/f,y[g],R[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,T);let g=0;for(let C=0;C<T;C++)g+=y[C]*R[C];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function iy(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function ry(o,e,n){const r=new WeakMap,a=new Gt;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let A=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),R===!0&&(P=2),S===!0&&(P=3);let W=d.attributes.position.count*P,k=1;W>e.maxTextureSize&&(k=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const I=new Float32Array(W*k*4*_),j=new Dm(I,W,k,_);j.type=Ii,j.needsUpdate=!0;const b=P*4;for(let z=0;z<_;z++){const oe=g[z],ee=C[z],ce=L[z],pe=W*k*4*z;for(let se=0;se<oe.count;se++){const le=se*b;T===!0&&(a.fromBufferAttribute(oe,se),I[pe+le+0]=a.x,I[pe+le+1]=a.y,I[pe+le+2]=a.z,I[pe+le+3]=0),R===!0&&(a.fromBufferAttribute(ee,se),I[pe+le+4]=a.x,I[pe+le+5]=a.y,I[pe+le+6]=a.z,I[pe+le+7]=0),S===!0&&(a.fromBufferAttribute(ce,se),I[pe+le+8]=a.x,I[pe+le+9]=a.y,I[pe+le+10]=a.z,I[pe+le+11]=ce.itemSize===4?a.w:1)}}x={count:_,texture:j,size:new Rt(W,k)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function sy(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const Wm=new Ln,tm=new Vm(1,1),Xm=new Dm,jm=new Iv,Ym=new Bm,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Gs(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=nm[a];if(u===void 0&&(u=new Float32Array(a),nm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Kt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Zt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Pl(o,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function oy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function ay(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2fv(this.addr,e),Zt(n,e)}}function ly(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;o.uniform3fv(this.addr,e),Zt(n,e)}}function uy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4fv(this.addr,e),Zt(n,e)}}function cy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;om.set(r),o.uniformMatrix2fv(this.addr,!1,om),Zt(n,r)}}function fy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;sm.set(r),o.uniformMatrix3fv(this.addr,!1,sm),Zt(n,r)}}function dy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;rm.set(r),o.uniformMatrix4fv(this.addr,!1,rm),Zt(n,r)}}function hy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function py(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2iv(this.addr,e),Zt(n,e)}}function my(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3iv(this.addr,e),Zt(n,e)}}function gy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4iv(this.addr,e),Zt(n,e)}}function _y(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function vy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2uiv(this.addr,e),Zt(n,e)}}function xy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3uiv(this.addr,e),Zt(n,e)}}function Sy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4uiv(this.addr,e),Zt(n,e)}}function yy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(tm.compareFunction=Pm,u=tm):u=Wm,n.setTexture2D(e||u,a)}function My(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||jm,a)}function Ey(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Ym,a)}function Ty(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Xm,a)}function wy(o){switch(o){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return uy;case 35674:return cy;case 35675:return fy;case 35676:return dy;case 5124:case 35670:return hy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return _y;case 36294:return vy;case 36295:return xy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ty}}function Ay(o,e){o.uniform1fv(this.addr,e)}function Cy(o,e){const n=Gs(e,this.size,2);o.uniform2fv(this.addr,n)}function Ry(o,e){const n=Gs(e,this.size,3);o.uniform3fv(this.addr,n)}function Py(o,e){const n=Gs(e,this.size,4);o.uniform4fv(this.addr,n)}function by(o,e){const n=Gs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Dy(o,e){const n=Gs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Ly(o,e){const n=Gs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Ny(o,e){o.uniform1iv(this.addr,e)}function Uy(o,e){o.uniform2iv(this.addr,e)}function Iy(o,e){o.uniform3iv(this.addr,e)}function Fy(o,e){o.uniform4iv(this.addr,e)}function Oy(o,e){o.uniform1uiv(this.addr,e)}function ky(o,e){o.uniform2uiv(this.addr,e)}function By(o,e){o.uniform3uiv(this.addr,e)}function zy(o,e){o.uniform4uiv(this.addr,e)}function Hy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Wm,u[f])}function Vy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||jm,u[f])}function Gy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Ym,u[f])}function Wy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Xm,u[f])}function Xy(o){switch(o){case 5126:return Ay;case 35664:return Cy;case 35665:return Ry;case 35666:return Py;case 35674:return by;case 35675:return Dy;case 35676:return Ly;case 5124:case 35670:return Ny;case 35667:case 35671:return Uy;case 35668:case 35672:return Iy;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return ky;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}class jy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=wy(n.type)}}class Yy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Xy(n.type)}}class qy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function am(o,e){o.seq.push(e),o.map[e.id]=e}function $y(o,e,n){const r=o.name,a=r.length;for(Hc.lastIndex=0;;){const u=Hc.exec(r),f=Hc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){am(n,m===void 0?new jy(d,o,e):new Yy(d,o,e));break}else{let _=n.map[d];_===void 0&&(_=new qy(d),am(n,_)),n=_}}}class Ml{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);$y(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function lm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const Ky=37297;let Zy=0;function Qy(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const um=new at;function Jy(o){Mt._getMatrix(um,Mt.workingColorSpace,o);const e=`mat3( ${um.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(o)){case El:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function cm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+Qy(o.getShaderSource(e),f)}else return a}function eM(o,e){const n=Jy(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function tM(o,e){let n;switch(e){case ov:n="Linear";break;case av:n="Reinhard";break;case lv:n="Cineon";break;case uv:n="ACESFilmic";break;case fv:n="AgX";break;case dv:n="Neutral";break;case cv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new te;function nM(){Mt.getLuminanceCoefficients(ml);const o=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function rM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function sM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Ro(o){return o!==""}function fm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(o){return o.replace(oM,lM)}const aM=new Map;function lM(o,e){let n=lt[e];if(n===void 0){const r=aM.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bf(n)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(o){return o.replace(uM,cM)}function cM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function pm(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===B_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function dM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function pM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xm:e="ENVMAP_BLENDING_MULTIPLY";break;case rv:e="ENVMAP_BLENDING_MIX";break;case sv:e="ENVMAP_BLENDING_ADD";break}return e}function mM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function gM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=fM(n),m=dM(n),v=hM(n),_=pM(n),x=mM(n),y=iM(n),T=rM(u),R=a.createProgram();let S,g,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ro).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ro).join(`
`),g.length>0&&(g+=`
`)):(S=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),g=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?lt.tonemapping_pars_fragment:"",n.toneMapping!==_r?tM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,eM("linearToOutputTexel",n.outputColorSpace),nM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),f=bf(f),f=fm(f,n),f=dm(f,n),d=bf(d),d=fm(d,n),d=dm(d,n),f=hm(f),d=hm(d),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=C+S+f,P=C+g+d,W=lm(a,a.VERTEX_SHADER,L),k=lm(a,a.FRAGMENT_SHADER,P);a.attachShader(R,W),a.attachShader(R,k),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(z){if(o.debug.checkShaderErrors){const oe=a.getProgramInfoLog(R).trim(),ee=a.getShaderInfoLog(W).trim(),ce=a.getShaderInfoLog(k).trim();let pe=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(pe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,R,W,k);else{const le=cm(a,W,"vertex"),B=cm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||ce==="")&&(se=!1);se&&(z.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:ee,prefix:S},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(W),a.deleteShader(k),j=new Ml(a,R),b=sM(a,R)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,Ky)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=W,this.fragmentShader=k,this}let _M=0;class vM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xM(e),n.set(e,r)),r}}class xM{constructor(e){this.id=_M++,this.code=e,this.usedTimes=0}}function SM(o,e,n,r,a,u,f){const d=new Nm,p=new vM,m=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function S(b,A,z,oe,ee){const ce=oe.fog,pe=ee.geometry,se=b.isMeshStandardMaterial?oe.environment:null,le=(b.isMeshStandardMaterial?n:e).get(b.envMap||se),B=le&&le.mapping===Al?le.image.height:null,ae=T[b.type];b.precision!==null&&(y=a.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Ue,Z,he,Ee;if(ae){const vt=mi[ae];Ue=vt.vertexShader,Z=vt.fragmentShader}else Ue=b.vertexShader,Z=b.fragmentShader,p.update(b),he=p.getVertexShaderID(b),Ee=p.getFragmentShaderID(b);const ve=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),je=ee.isInstancedMesh===!0,Ge=ee.isBatchedMesh===!0,Pt=!!b.map,bt=!!b.matcap,ut=!!le,O=!!b.aoMap,_n=!!b.lightMap,ht=!!b.bumpMap,ct=!!b.normalMap,Ye=!!b.displacementMap,wt=!!b.emissiveMap,We=!!b.metalnessMap,D=!!b.roughnessMap,E=b.anisotropy>0,K=b.clearcoat>0,fe=b.dispersion>0,_e=b.iridescence>0,ue=b.sheen>0,Ve=b.transmission>0,Ae=E&&!!b.anisotropyMap,Ke=K&&!!b.clearcoatMap,$e=K&&!!b.clearcoatNormalMap,xe=K&&!!b.clearcoatRoughnessMap,Fe=_e&&!!b.iridescenceMap,et=_e&&!!b.iridescenceThicknessMap,tt=ue&&!!b.sheenColorMap,Oe=ue&&!!b.sheenRoughnessMap,ft=!!b.specularMap,rt=!!b.specularColorMap,Et=!!b.specularIntensityMap,V=Ve&&!!b.transmissionMap,Ce=Ve&&!!b.thicknessMap,ie=!!b.gradientMap,de=!!b.alphaMap,De=b.alphaTest>0,be=!!b.alphaHash,st=!!b.extensions;let Lt=_r;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Lt=o.toneMapping);const Yt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ue,fragmentShader:Z,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&ee._colorsTexture!==null,instancing:je,instancingColor:je&&ee.instanceColor!==null,instancingMorph:je&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Bs,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:bt,envMap:ut,envMapMode:ut&&le.mapping,envMapCubeUVHeight:B,aoMap:O,lightMap:_n,bumpMap:ht,normalMap:ct,displacementMap:x&&Ye,emissiveMap:wt,normalMapObjectSpace:ct&&b.normalMapType===_v,normalMapTangentSpace:ct&&b.normalMapType===gv,metalnessMap:We,roughnessMap:D,anisotropy:E,anisotropyMap:Ae,clearcoat:K,clearcoatMap:Ke,clearcoatNormalMap:$e,clearcoatRoughnessMap:xe,dispersion:fe,iridescence:_e,iridescenceMap:Fe,iridescenceThicknessMap:et,sheen:ue,sheenColorMap:tt,sheenRoughnessMap:Oe,specularMap:ft,specularColorMap:rt,specularIntensityMap:Et,transmission:Ve,transmissionMap:V,thicknessMap:Ce,gradientMap:ie,opaque:b.transparent===!1&&b.blending===Us&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:De,alphaHash:be,combine:b.combine,mapUv:Pt&&R(b.map.channel),aoMapUv:O&&R(b.aoMap.channel),lightMapUv:_n&&R(b.lightMap.channel),bumpMapUv:ht&&R(b.bumpMap.channel),normalMapUv:ct&&R(b.normalMap.channel),displacementMapUv:Ye&&R(b.displacementMap.channel),emissiveMapUv:wt&&R(b.emissiveMap.channel),metalnessMapUv:We&&R(b.metalnessMap.channel),roughnessMapUv:D&&R(b.roughnessMap.channel),anisotropyMapUv:Ae&&R(b.anisotropyMap.channel),clearcoatMapUv:Ke&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:$e&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&R(b.sheenRoughnessMap.channel),specularMapUv:ft&&R(b.specularMap.channel),specularColorMapUv:rt&&R(b.specularColorMap.channel),specularIntensityMapUv:Et&&R(b.specularIntensityMap.channel),transmissionMapUv:V&&R(b.transmissionMap.channel),thicknessMapUv:Ce&&R(b.thicknessMap.channel),alphaMapUv:de&&R(b.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ct||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&(Pt||de),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ui,flipSided:b.side===Dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)A.push(z),A.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(C(A,b),L(A,b),A.push(o.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function C(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function L(b,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),b.push(d.mask)}function P(b){const A=T[b.type];let z;if(A){const oe=mi[A];z=qv.clone(oe.uniforms)}else z=b.uniforms;return z}function W(b,A){let z;for(let oe=0,ee=v.length;oe<ee;oe++){const ce=v[oe];if(ce.cacheKey===A){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new gM(o,A,b,u),v.push(z)),z}function k(b){if(--b.usedTimes===0){const A=v.indexOf(b);v[A]=v[v.length-1],v.pop(),b.destroy()}}function I(b){p.remove(b)}function j(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:W,releaseProgram:k,releaseShaderCache:I,programs:v,dispose:j}}function yM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function MM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function mm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function gm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(_,x,y,T,R,S){let g=o[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:R,group:S},o[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=y,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=R,g.group=S),e++,g}function d(_,x,y,T,R,S){const g=f(_,x,y,T,R,S);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(_,x,y,T,R,S){const g=f(_,x,y,T,R,S);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(_,x){n.length>1&&n.sort(_||MM),r.length>1&&r.sort(x||mm),a.length>1&&a.sort(x||mm)}function v(){for(let _=e,x=o.length;_<x;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function EM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new gm,o.set(r,[f])):a>=u.length?(f=new gm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function TM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new Tt};break;case"SpotLight":n={position:new te,direction:new te,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new te,halfWidth:new te,halfHeight:new te};break}return o[e.id]=n,n}}}function wM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let AM=0;function CM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function RM(o){const e=new TM,n=wM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const a=new te,u=new Wt,f=new Wt;function d(m){let v=0,_=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let y=0,T=0,R=0,S=0,g=0,C=0,L=0,P=0,W=0,k=0,I=0;m.sort(CM);for(let b=0,A=m.length;b<A;b++){const z=m[b],oe=z.color,ee=z.intensity,ce=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=oe.r*ee,_+=oe.g*ee,x+=oe.b*ee;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],ee);I++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=pe,r.directionalShadowMatrix[y]=z.shadow.matrix,C++}r.directional[y]=se,y++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=ce,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[R]=se;const le=z.shadow;if(z.map&&(r.spotLightMap[W]=z.map,W++,le.updateMatrices(z),z.castShadow&&k++),r.spotLightMatrix[R]=le.matrix,z.castShadow){const B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=pe,P++}R++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=se,S++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=pe,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=se,T++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(ee),se.groundColor.copy(z.groundColor).multiplyScalar(ee),r.hemi[g]=se,g++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==T||j.spotLength!==R||j.rectAreaLength!==S||j.hemiLength!==g||j.numDirectionalShadows!==C||j.numPointShadows!==L||j.numSpotShadows!==P||j.numSpotMaps!==W||j.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=S,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+W-k,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=I,j.directionalLength=y,j.pointLength=T,j.spotLength=R,j.rectAreaLength=S,j.hemiLength=g,j.numDirectionalShadows=C,j.numPointShadows=L,j.numSpotShadows=P,j.numSpotMaps=W,j.numLightProbes=I,r.version=AM++)}function p(m,v){let _=0,x=0,y=0,T=0,R=0;const S=v.matrixWorldInverse;for(let g=0,C=m.length;g<C;g++){const L=m[g];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),_++}else if(L.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),R++}}}return{setup:d,setupView:p,state:r}}function _m(o){const e=new RM(o),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function PM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new _m(o),e.set(a,[d])):u>=f.length?(d=new _m(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
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
}`;function LM(o,e,n){let r=new zm;const a=new Rt,u=new Rt,f=new Gt,d=new r0({depthPacking:mv}),p=new s0,m={},v=n.maxTextureSize,_={[vr]:Dn,[Dn]:vr,[Ui]:Ui},x=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:bM,fragmentShader:DM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new zi;T.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new $n(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let g=this.type;this.render=function(k,I,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const b=o.getRenderTarget(),A=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(gr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=g!==Ni&&this.type===Ni,ce=g===Ni&&this.type!==Ni;for(let pe=0,se=k.length;pe<se;pe++){const le=k[pe],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),u.copy(B.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/ae.x),a.x=u.x*ae.x,B.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/ae.y),a.y=u.y*ae.y,B.mapSize.y=u.y)),B.map===null||ee===!0||ce===!0){const U=this.type!==Ni?{minFilter:li,magFilter:li}:{};B.map!==null&&B.map.dispose(),B.map=new qr(a.x,a.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const re=B.getViewportCount();for(let U=0;U<re;U++){const ne=B.getViewport(U);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),oe.viewport(f),B.updateMatrices(le,U),r=B.getFrustum(),P(I,j,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Ni&&C(B,j),B.needsUpdate=!1}g=this.type,S.needsUpdate=!1,o.setRenderTarget(b,A,z)};function C(k,I){const j=e.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new qr(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,j,x,R,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,j,y,R,null)}function L(k,I,j,b){let A=null;const z=j.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0)A=z;else if(A=j.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const oe=A.uuid,ee=I.uuid;let ce=m[oe];ce===void 0&&(ce={},m[oe]=ce);let pe=ce[ee];pe===void 0&&(pe=A.clone(),ce[ee]=pe,I.addEventListener("dispose",W)),A=pe}if(A.visible=I.visible,A.wireframe=I.wireframe,b===Ni?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:_[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,j.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=o.properties.get(A);oe.light=j}return A}function P(k,I,j,b,A){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Ni)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,k.matrixWorld);const ee=e.update(k),ce=k.material;if(Array.isArray(ce)){const pe=ee.groups;for(let se=0,le=pe.length;se<le;se++){const B=pe[se],ae=ce[B.materialIndex];if(ae&&ae.visible){const re=L(k,ae,b,A);k.onBeforeShadow(o,k,I,j,ee,re,B),o.renderBufferDirect(j,null,ee,re,k,B),k.onAfterShadow(o,k,I,j,ee,re,B)}}}else if(ce.visible){const pe=L(k,ce,b,A);k.onBeforeShadow(o,k,I,j,ee,pe,null),o.renderBufferDirect(j,null,ee,pe,k,null),k.onAfterShadow(o,k,I,j,ee,pe,null)}}const oe=k.children;for(let ee=0,ce=oe.length;ee<ce;ee++)P(oe[ee],I,j,b,A)}function W(k){k.target.removeEventListener("dispose",W);for(const j in m){const b=m[j],A=k.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const NM={[Wc]:Xc,[jc]:$c,[Yc]:Kc,[Fs]:qc,[Xc]:Wc,[$c]:jc,[Kc]:Yc,[qc]:Fs};function UM(o,e){function n(){let V=!1;const Ce=new Gt;let ie=null;const de=new Gt(0,0,0,0);return{setMask:function(De){ie!==De&&!V&&(o.colorMask(De,De,De,De),ie=De)},setLocked:function(De){V=De},setClear:function(De,be,st,Lt,Yt){Yt===!0&&(De*=Lt,be*=Lt,st*=Lt),Ce.set(De,be,st,Lt),de.equals(Ce)===!1&&(o.clearColor(De,be,st,Lt),de.copy(Ce))},reset:function(){V=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,ie=null,de=null,De=null;return{setReversed:function(be){if(Ce!==be){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const Lt=De;De=null,this.setClear(Lt)}},getReversed:function(){return Ce},setTest:function(be){be?ve(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(be){ie!==be&&!V&&(o.depthMask(be),ie=be)},setFunc:function(be){if(Ce&&(be=NM[be]),de!==be){switch(be){case Wc:o.depthFunc(o.NEVER);break;case Xc:o.depthFunc(o.ALWAYS);break;case jc:o.depthFunc(o.LESS);break;case Fs:o.depthFunc(o.LEQUAL);break;case Yc:o.depthFunc(o.EQUAL);break;case qc:o.depthFunc(o.GEQUAL);break;case $c:o.depthFunc(o.GREATER);break;case Kc:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=be}},setLocked:function(be){V=be},setClear:function(be){De!==be&&(Ce&&(be=1-be),o.clearDepth(be),De=be)},reset:function(){V=!1,ie=null,de=null,De=null,Ce=!1}}}function a(){let V=!1,Ce=null,ie=null,de=null,De=null,be=null,st=null,Lt=null,Yt=null;return{setTest:function(vt){V||(vt?ve(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(vt){Ce!==vt&&!V&&(o.stencilMask(vt),Ce=vt)},setFunc:function(vt,En,vn){(ie!==vt||de!==En||De!==vn)&&(o.stencilFunc(vt,En,vn),ie=vt,de=En,De=vn)},setOp:function(vt,En,vn){(be!==vt||st!==En||Lt!==vn)&&(o.stencilOp(vt,En,vn),be=vt,st=En,Lt=vn)},setLocked:function(vt){V=vt},setClear:function(vt){Yt!==vt&&(o.clearStencil(vt),Yt=vt)},reset:function(){V=!1,Ce=null,ie=null,de=null,De=null,be=null,st=null,Lt=null,Yt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,y=[],T=null,R=!1,S=null,g=null,C=null,L=null,P=null,W=null,k=null,I=new Tt(0,0,0),j=0,b=!1,A=null,z=null,oe=null,ee=null,ce=null;const pe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=le>=2);let ae=null,re={};const U=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ue=new Gt().fromArray(U),Z=new Gt().fromArray(ne);function he(V,Ce,ie,de){const De=new Uint8Array(4),be=o.createTexture();o.bindTexture(V,be),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let st=0;st<ie;st++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ce,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(Ce+st,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return be}const Ee={};Ee[o.TEXTURE_2D]=he(o.TEXTURE_2D,o.TEXTURE_2D,1),Ee[o.TEXTURE_CUBE_MAP]=he(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[o.TEXTURE_2D_ARRAY]=he(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ee[o.TEXTURE_3D]=he(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),f.setFunc(Fs),ht(!1),ct(yp),ve(o.CULL_FACE),O(gr);function ve(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function we(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function je(V,Ce){return _[V]!==Ce?(o.bindFramebuffer(V,Ce),_[V]=Ce,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ce),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ge(V,Ce){let ie=y,de=!1;if(V){ie=x.get(Ce),ie===void 0&&(ie=[],x.set(Ce,ie));const De=V.textures;if(ie.length!==De.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let be=0,st=De.length;be<st;be++)ie[be]=o.COLOR_ATTACHMENT0+be;ie.length=De.length,de=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,de=!0);de&&o.drawBuffers(ie)}function Pt(V){return T!==V?(o.useProgram(V),T=V,!0):!1}const bt={[Vr]:o.FUNC_ADD,[H_]:o.FUNC_SUBTRACT,[V_]:o.FUNC_REVERSE_SUBTRACT};bt[G_]=o.MIN,bt[W_]=o.MAX;const ut={[X_]:o.ZERO,[j_]:o.ONE,[Y_]:o.SRC_COLOR,[Vc]:o.SRC_ALPHA,[J_]:o.SRC_ALPHA_SATURATE,[Z_]:o.DST_COLOR,[$_]:o.DST_ALPHA,[q_]:o.ONE_MINUS_SRC_COLOR,[Gc]:o.ONE_MINUS_SRC_ALPHA,[Q_]:o.ONE_MINUS_DST_COLOR,[K_]:o.ONE_MINUS_DST_ALPHA,[ev]:o.CONSTANT_COLOR,[tv]:o.ONE_MINUS_CONSTANT_COLOR,[nv]:o.CONSTANT_ALPHA,[iv]:o.ONE_MINUS_CONSTANT_ALPHA};function O(V,Ce,ie,de,De,be,st,Lt,Yt,vt){if(V===gr){R===!0&&(we(o.BLEND),R=!1);return}if(R===!1&&(ve(o.BLEND),R=!0),V!==z_){if(V!==S||vt!==b){if((g!==Vr||P!==Vr)&&(o.blendEquation(o.FUNC_ADD),g=Vr,P=Vr),vt)switch(V){case Us:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mp:o.blendFunc(o.ONE,o.ONE);break;case Ep:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Us:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ep:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}C=null,L=null,W=null,k=null,I.set(0,0,0),j=0,S=V,b=vt}return}De=De||Ce,be=be||ie,st=st||de,(Ce!==g||De!==P)&&(o.blendEquationSeparate(bt[Ce],bt[De]),g=Ce,P=De),(ie!==C||de!==L||be!==W||st!==k)&&(o.blendFuncSeparate(ut[ie],ut[de],ut[be],ut[st]),C=ie,L=de,W=be,k=st),(Lt.equals(I)===!1||Yt!==j)&&(o.blendColor(Lt.r,Lt.g,Lt.b,Yt),I.copy(Lt),j=Yt),S=V,b=!1}function _n(V,Ce){V.side===Ui?we(o.CULL_FACE):ve(o.CULL_FACE);let ie=V.side===Dn;Ce&&(ie=!ie),ht(ie),V.blending===Us&&V.transparent===!1?O(gr):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const de=V.stencilWrite;d.setTest(de),de&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){A!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),A=V)}function ct(V){V!==O_?(ve(o.CULL_FACE),V!==z&&(V===yp?o.cullFace(o.BACK):V===k_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),z=V}function Ye(V){V!==oe&&(se&&o.lineWidth(V),oe=V)}function wt(V,Ce,ie){V?(ve(o.POLYGON_OFFSET_FILL),(ee!==Ce||ce!==ie)&&(o.polygonOffset(Ce,ie),ee=Ce,ce=ie)):we(o.POLYGON_OFFSET_FILL)}function We(V){V?ve(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function D(V){V===void 0&&(V=o.TEXTURE0+pe-1),ae!==V&&(o.activeTexture(V),ae=V)}function E(V,Ce,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+pe-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==V||de.texture!==Ce)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(V,Ce||Ee[V]),de.type=V,de.texture=Ce)}function K(){const V=re[ae];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function fe(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(V){Ue.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ue.copy(V))}function Oe(V){Z.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function ft(V,Ce){let ie=m.get(Ce);ie===void 0&&(ie=new WeakMap,m.set(Ce,ie));let de=ie.get(V);de===void 0&&(de=o.getUniformBlockIndex(Ce,V.name),ie.set(V,de))}function rt(V,Ce){const de=m.get(Ce).get(V);p.get(Ce)!==de&&(o.uniformBlockBinding(Ce,de,V.__bindingPointIndex),p.set(Ce,de))}function Et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ae=null,re={},_={},x=new WeakMap,y=[],T=null,R=!1,S=null,g=null,C=null,L=null,P=null,W=null,k=null,I=new Tt(0,0,0),j=0,b=!1,A=null,z=null,oe=null,ee=null,ce=null,Ue.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:we,bindFramebuffer:je,drawBuffers:Ge,useProgram:Pt,setBlending:O,setMaterial:_n,setFlipSided:ht,setCullFace:ct,setLineWidth:Ye,setPolygonOffset:wt,setScissorTest:We,activeTexture:D,bindTexture:E,unbindTexture:K,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:et,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:$e,texStorage3D:xe,texSubImage2D:ue,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ke,scissor:tt,viewport:Oe,reset:Et}}function IM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,v=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,E){return y?new OffscreenCanvas(D,E):wl("canvas")}function R(D,E,K){let fe=1;const _e=We(D);if((_e.width>K||_e.height>K)&&(fe=K/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(fe*_e.width),Ve=Math.floor(fe*_e.height);_===void 0&&(_=T(ue,Ve));const Ae=E?T(ue,Ve):_;return Ae.width=ue,Ae.height=Ve,Ae.getContext("2d").drawImage(D,0,0,ue,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+Ve+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function S(D){return D.generateMipmaps}function g(D){o.generateMipmap(D)}function C(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(D,E,K,fe,_e=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=E;if(E===o.RED&&(K===o.FLOAT&&(ue=o.R32F),K===o.HALF_FLOAT&&(ue=o.R16F),K===o.UNSIGNED_BYTE&&(ue=o.R8)),E===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.R8UI),K===o.UNSIGNED_SHORT&&(ue=o.R16UI),K===o.UNSIGNED_INT&&(ue=o.R32UI),K===o.BYTE&&(ue=o.R8I),K===o.SHORT&&(ue=o.R16I),K===o.INT&&(ue=o.R32I)),E===o.RG&&(K===o.FLOAT&&(ue=o.RG32F),K===o.HALF_FLOAT&&(ue=o.RG16F),K===o.UNSIGNED_BYTE&&(ue=o.RG8)),E===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RG8UI),K===o.UNSIGNED_SHORT&&(ue=o.RG16UI),K===o.UNSIGNED_INT&&(ue=o.RG32UI),K===o.BYTE&&(ue=o.RG8I),K===o.SHORT&&(ue=o.RG16I),K===o.INT&&(ue=o.RG32I)),E===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),K===o.UNSIGNED_INT&&(ue=o.RGB32UI),K===o.BYTE&&(ue=o.RGB8I),K===o.SHORT&&(ue=o.RGB16I),K===o.INT&&(ue=o.RGB32I)),E===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),K===o.UNSIGNED_INT&&(ue=o.RGBA32UI),K===o.BYTE&&(ue=o.RGBA8I),K===o.SHORT&&(ue=o.RGBA16I),K===o.INT&&(ue=o.RGBA32I)),E===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),E===o.RGBA){const Ve=_e?El:Mt.getTransfer(fe);K===o.FLOAT&&(ue=o.RGBA32F),K===o.HALF_FLOAT&&(ue=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ue=Ve===At?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(D,E){let K;return D?E===null||E===Yr||E===bo?K=o.DEPTH24_STENCIL8:E===Ii?K=o.DEPTH32F_STENCIL8:E===Po&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===bo?K=o.DEPTH_COMPONENT24:E===Ii?K=o.DEPTH_COMPONENT32F:E===Po&&(K=o.DEPTH_COMPONENT16),K}function W(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==li&&D.minFilter!==gi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function k(D){const E=D.target;E.removeEventListener("dispose",k),j(E),E.isVideoTexture&&v.delete(E)}function I(D){const E=D.target;E.removeEventListener("dispose",I),A(E)}function j(D){const E=r.get(D);if(E.__webglInit===void 0)return;const K=D.source,fe=x.get(K);if(fe){const _e=fe[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(D),Object.keys(fe).length===0&&x.delete(K)}r.remove(D)}function b(D){const E=r.get(D);o.deleteTexture(E.__webglTexture);const K=D.source,fe=x.get(K);delete fe[E.__cacheKey],f.memory.textures--}function A(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let _e=0;_e<E.__webglFramebuffer[fe].length;_e++)o.deleteFramebuffer(E.__webglFramebuffer[fe][_e]);else o.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)o.deleteFramebuffer(E.__webglFramebuffer[fe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=D.textures;for(let fe=0,_e=K.length;fe<_e;fe++){const ue=r.get(K[fe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(K[fe])}r.remove(D)}let z=0;function oe(){z=0}function ee(){const D=z;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),z+=1,D}function ce(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function pe(D,E){const K=r.get(D);if(D.isVideoTexture&&Ye(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){const fe=D.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,D,E);return}}n.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+E)}function se(D,E){const K=r.get(D);if(D.version>0&&K.__version!==D.version){Z(K,D,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+E)}function le(D,E){const K=r.get(D);if(D.version>0&&K.__version!==D.version){Z(K,D,E);return}n.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+E)}function B(D,E){const K=r.get(D);if(D.version>0&&K.__version!==D.version){he(K,D,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+E)}const ae={[Jc]:o.REPEAT,[Wr]:o.CLAMP_TO_EDGE,[ef]:o.MIRRORED_REPEAT},re={[li]:o.NEAREST,[hv]:o.NEAREST_MIPMAP_NEAREST,[ja]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[dc]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},U={[vv]:o.NEVER,[Tv]:o.ALWAYS,[xv]:o.LESS,[Pm]:o.LEQUAL,[Sv]:o.EQUAL,[Ev]:o.GEQUAL,[yv]:o.GREATER,[Mv]:o.NOTEQUAL};function ne(D,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===gi||E.magFilter===dc||E.magFilter===ja||E.magFilter===Xr||E.minFilter===gi||E.minFilter===dc||E.minFilter===ja||E.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,ae[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ae[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ae[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,re[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===li||E.minFilter!==ja&&E.minFilter!==Xr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(D,E){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",k));const fe=E.source;let _e=x.get(fe);_e===void 0&&(_e={},x.set(fe,_e));const ue=ce(E);if(ue!==D.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,K=!0),_e[ue].usedTimes++;const Ve=_e[D.__cacheKey];Ve!==void 0&&(_e[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&b(E)),D.__cacheKey=ue,D.__webglTexture=_e[ue].texture}return K}function Z(D,E,K){let fe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=o.TEXTURE_3D);const _e=Ue(D,E),ue=E.source;n.bindTexture(fe,D.__webglTexture,o.TEXTURE0+K);const Ve=r.get(ue);if(ue.version!==Ve.__version||_e===!0){n.activeTexture(o.TEXTURE0+K);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Ke=E.colorSpace===mr?null:Mt.getPrimaries(E.colorSpace),$e=E.colorSpace===mr||Ae===Ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let xe=R(E.image,!1,a.maxTextureSize);xe=wt(E,xe);const Fe=u.convert(E.format,E.colorSpace),et=u.convert(E.type);let tt=L(E.internalFormat,Fe,et,E.colorSpace,E.isVideoTexture);ne(fe,E);let Oe;const ft=E.mipmaps,rt=E.isVideoTexture!==!0,Et=Ve.__version===void 0||_e===!0,V=ue.dataReady,Ce=W(E,xe);if(E.isDepthTexture)tt=P(E.format===Lo,E.type),Et&&(rt?n.texStorage2D(o.TEXTURE_2D,1,tt,xe.width,xe.height):n.texImage2D(o.TEXTURE_2D,0,tt,xe.width,xe.height,0,Fe,et,null));else if(E.isDataTexture)if(ft.length>0){rt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let ie=0,de=ft.length;ie<de;ie++)Oe=ft[ie],rt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(o.TEXTURE_2D,ie,tt,Oe.width,Oe.height,0,Fe,et,Oe.data);E.generateMipmaps=!1}else rt?(Et&&n.texStorage2D(o.TEXTURE_2D,Ce,tt,xe.width,xe.height),V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,xe.width,xe.height,Fe,et,xe.data)):n.texImage2D(o.TEXTURE_2D,0,tt,xe.width,xe.height,0,Fe,et,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,tt,ft[0].width,ft[0].height,xe.depth);for(let ie=0,de=ft.length;ie<de;ie++)if(Oe=ft[ie],E.format!==ai)if(Fe!==null)if(rt){if(V)if(E.layerUpdates.size>0){const De=Yp(Oe.width,Oe.height,E.format,E.type);for(const be of E.layerUpdates){const st=Oe.data.subarray(be*De/Oe.data.BYTES_PER_ELEMENT,(be+1)*De/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,be,Oe.width,Oe.height,1,Fe,st)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,xe.depth,Fe,Oe.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,tt,Oe.width,Oe.height,xe.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,xe.depth,Fe,et,Oe.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ie,tt,Oe.width,Oe.height,xe.depth,0,Fe,et,Oe.data)}else{rt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let ie=0,de=ft.length;ie<de;ie++)Oe=ft[ie],E.format!==ai?Fe!==null?rt?V&&n.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(o.TEXTURE_2D,ie,tt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(o.TEXTURE_2D,ie,tt,Oe.width,Oe.height,0,Fe,et,Oe.data)}else if(E.isDataArrayTexture)if(rt){if(Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,tt,xe.width,xe.height,xe.depth),V)if(E.layerUpdates.size>0){const ie=Yp(xe.width,xe.height,E.format,E.type);for(const de of E.layerUpdates){const De=xe.data.subarray(de*ie/xe.data.BYTES_PER_ELEMENT,(de+1)*ie/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Fe,et,De)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Fe,et,xe.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,tt,xe.width,xe.height,xe.depth,0,Fe,et,xe.data);else if(E.isData3DTexture)rt?(Et&&n.texStorage3D(o.TEXTURE_3D,Ce,tt,xe.width,xe.height,xe.depth),V&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Fe,et,xe.data)):n.texImage3D(o.TEXTURE_3D,0,tt,xe.width,xe.height,xe.depth,0,Fe,et,xe.data);else if(E.isFramebufferTexture){if(Et)if(rt)n.texStorage2D(o.TEXTURE_2D,Ce,tt,xe.width,xe.height);else{let ie=xe.width,de=xe.height;for(let De=0;De<Ce;De++)n.texImage2D(o.TEXTURE_2D,De,tt,ie,de,0,Fe,et,null),ie>>=1,de>>=1}}else if(ft.length>0){if(rt&&Et){const ie=We(ft[0]);n.texStorage2D(o.TEXTURE_2D,Ce,tt,ie.width,ie.height)}for(let ie=0,de=ft.length;ie<de;ie++)Oe=ft[ie],rt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Fe,et,Oe):n.texImage2D(o.TEXTURE_2D,ie,tt,Fe,et,Oe);E.generateMipmaps=!1}else if(rt){if(Et){const ie=We(xe);n.texStorage2D(o.TEXTURE_2D,Ce,tt,ie.width,ie.height)}V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,et,xe)}else n.texImage2D(o.TEXTURE_2D,0,tt,Fe,et,xe);S(E)&&g(fe),Ve.__version=ue.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function he(D,E,K){if(E.image.length!==6)return;const fe=Ue(D,E),_e=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+K);const ue=r.get(_e);if(_e.version!==ue.__version||fe===!0){n.activeTexture(o.TEXTURE0+K);const Ve=Mt.getPrimaries(Mt.workingColorSpace),Ae=E.colorSpace===mr?null:Mt.getPrimaries(E.colorSpace),Ke=E.colorSpace===mr||Ve===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let de=0;de<6;de++)!$e&&!xe?Fe[de]=R(E.image[de],!0,a.maxCubemapSize):Fe[de]=xe?E.image[de].image:E.image[de],Fe[de]=wt(E,Fe[de]);const et=Fe[0],tt=u.convert(E.format,E.colorSpace),Oe=u.convert(E.type),ft=L(E.internalFormat,tt,Oe,E.colorSpace),rt=E.isVideoTexture!==!0,Et=ue.__version===void 0||fe===!0,V=_e.dataReady;let Ce=W(E,et);ne(o.TEXTURE_CUBE_MAP,E);let ie;if($e){rt&&Et&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ce,ft,et.width,et.height);for(let de=0;de<6;de++){ie=Fe[de].mipmaps;for(let De=0;De<ie.length;De++){const be=ie[De];E.format!==ai?tt!==null?rt?V&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,be.width,be.height,tt,be.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,be.width,be.height,tt,Oe,be.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,ft,be.width,be.height,0,tt,Oe,be.data)}}}else{if(ie=E.mipmaps,rt&&Et){ie.length>0&&Ce++;const de=We(Fe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ce,ft,de.width,de.height)}for(let de=0;de<6;de++)if(xe){rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe[de].width,Fe[de].height,tt,Oe,Fe[de].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Fe[de].width,Fe[de].height,0,tt,Oe,Fe[de].data);for(let De=0;De<ie.length;De++){const st=ie[De].image[de].image;rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,st.width,st.height,tt,Oe,st.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,ft,st.width,st.height,0,tt,Oe,st.data)}}else{rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,tt,Oe,Fe[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,tt,Oe,Fe[de]);for(let De=0;De<ie.length;De++){const be=ie[De];rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,tt,Oe,be.image[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,ft,tt,Oe,be.image[de])}}}S(E)&&g(o.TEXTURE_CUBE_MAP),ue.__version=_e.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ee(D,E,K,fe,_e,ue){const Ve=u.convert(K.format,K.colorSpace),Ae=u.convert(K.type),Ke=L(K.internalFormat,Ve,Ae,K.colorSpace),$e=r.get(E),xe=r.get(K);if(xe.__renderTarget=E,!$e.__hasExternalTextures){const Fe=Math.max(1,E.width>>ue),et=Math.max(1,E.height>>ue);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?n.texImage3D(_e,ue,Ke,Fe,et,E.depth,0,Ve,Ae,null):n.texImage2D(_e,ue,Ke,Fe,et,0,Ve,Ae,null)}n.bindFramebuffer(o.FRAMEBUFFER,D),ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,_e,xe.__webglTexture,0,ht(E)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,fe,_e,xe.__webglTexture,ue),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(D,E,K){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const fe=E.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,ue=P(E.stencilBuffer,_e),Ve=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=ht(E);ct(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,ue,E.width,E.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,ue,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ue,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,D)}else{const fe=E.textures;for(let _e=0;_e<fe.length;_e++){const ue=fe[_e],Ve=u.convert(ue.format,ue.colorSpace),Ae=u.convert(ue.type),Ke=L(ue.internalFormat,Ve,Ae,ue.colorSpace),$e=ht(E);K&&ct(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e,Ke,E.width,E.height):ct(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e,Ke,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ke,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(E.depthTexture);fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe(E.depthTexture,0);const _e=fe.__webglTexture,ue=ht(E);if(E.depthTexture.format===Do)ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Lo)ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function je(D){const E=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=fe}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const fe=D.texture.mipmaps;fe&&fe.length>0?we(E.__webglFramebuffer[0],D):we(E.__webglFramebuffer,D)}else if(K){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=o.createRenderbuffer(),ve(E.__webglDepthbuffer[fe],D,!1);else{const _e=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[fe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,ue)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ve(E.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,ue)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(D,E,K){const fe=r.get(D);E!==void 0&&Ee(fe.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&je(D)}function Pt(D){const E=D.texture,K=r.get(D),fe=r.get(E);D.addEventListener("dispose",I);const _e=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture()),fe.__version=E.version,f.memory.textures++),ue){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Ke=0;Ke<E.mipmaps.length;Ke++)K.__webglFramebuffer[Ae][Ke]=o.createFramebuffer()}else K.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let Ae=0,Ke=_e.length;Ae<Ke;Ae++){const $e=r.get(_e[Ae]);$e.__webglTexture===void 0&&($e.__webglTexture=o.createTexture(),f.memory.textures++)}if(D.samples>0&&ct(D)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ke=_e[Ae];K.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const $e=u.convert(Ke.format,Ke.colorSpace),xe=u.convert(Ke.type),Fe=L(Ke.internalFormat,$e,xe,Ke.colorSpace,D.isXRRenderTarget===!0),et=ht(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,et,Fe,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(K.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){n.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ee(K.__webglFramebuffer[Ae][Ke],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke);else Ee(K.__webglFramebuffer[Ae],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(E)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ae=0,Ke=_e.length;Ae<Ke;Ae++){const $e=_e[Ae],xe=r.get($e);n.bindTexture(o.TEXTURE_2D,xe.__webglTexture),ne(o.TEXTURE_2D,$e),Ee(K.__webglFramebuffer,D,$e,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),S($e)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ae,fe.__webglTexture),ne(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ee(K.__webglFramebuffer[Ke],D,E,o.COLOR_ATTACHMENT0,Ae,Ke);else Ee(K.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,Ae,0);S(E)&&g(Ae),n.unbindTexture()}D.depthBuffer&&je(D)}function bt(D){const E=D.textures;for(let K=0,fe=E.length;K<fe;K++){const _e=E[K];if(S(_e)){const ue=C(D),Ve=r.get(_e).__webglTexture;n.bindTexture(ue,Ve),g(ue),n.unbindTexture()}}}const ut=[],O=[];function _n(D){if(D.samples>0){if(ct(D)===!1){const E=D.textures,K=D.width,fe=D.height;let _e=o.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=r.get(D),Ae=E.length>1;if(Ae)for(let $e=0;$e<E.length;$e++)n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Ke=D.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[$e]);const xe=r.get(E[$e]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xe,0)}o.blitFramebuffer(0,0,K,fe,0,0,K,fe,_e,o.NEAREST),p===!0&&(ut.length=0,O.length=0,ut.push(o.COLOR_ATTACHMENT0+$e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ut.push(ue),O.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,O)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let $e=0;$e<E.length;$e++){n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[$e]);const xe=r.get(E[$e]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.TEXTURE_2D,xe,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ht(D){return Math.min(a.maxSamples,D.samples)}function ct(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(D){const E=f.render.frame;v.get(D)!==E&&(v.set(D,E),D.update())}function wt(D,E){const K=D.colorSpace,fe=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Bs&&K!==mr&&(Mt.getTransfer(K)===At?(fe!==ai||_e!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ge,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function FM(o,e){function n(r,a=mr){let u;const f=Mt.getTransfer(a);if(r===ki)return o.UNSIGNED_BYTE;if(r===Uf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===If)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Em)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ym)return o.BYTE;if(r===Mm)return o.SHORT;if(r===Po)return o.UNSIGNED_SHORT;if(r===Nf)return o.INT;if(r===Yr)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===No)return o.HALF_FLOAT;if(r===Tm)return o.ALPHA;if(r===wm)return o.RGB;if(r===ai)return o.RGBA;if(r===Do)return o.DEPTH_COMPONENT;if(r===Lo)return o.DEPTH_STENCIL;if(r===Am)return o.RED;if(r===Ff)return o.RED_INTEGER;if(r===Cm)return o.RG;if(r===Of)return o.RG_INTEGER;if(r===kf)return o.RGBA_INTEGER;if(r===gl||r===_l||r===vl||r===xl)if(f===At)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tf||r===nf||r===rf||r===sf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===tf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===of||r===af||r===lf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===of||r===af)return f===At?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===lf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uf||r===cf||r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===Sf||r===yf||r===Mf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===uf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ff)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===df)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_f)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sl||r===Ef||r===Tf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Sl)return f===At?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ef)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rm||r===wf||r===Af||r===Cf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===wf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Af)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
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

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new xr({vertexShader:OM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new Rl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends Hs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,_=null,x=null,y=null,T=null;const R=new BM,S=n.getContextAttributes();let g=null,C=null;const L=[],P=[],W=new Rt;let k=null;const I=new qn;I.viewport=new Gt;const j=new qn;j.viewport=new Gt;const b=[I,j],A=new a0;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=L[Z];return he===void 0&&(he=new Uc,L[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=L[Z];return he===void 0&&(he=new Uc,L[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=L[Z];return he===void 0&&(he=new Uc,L[Z]=he),he.getHandSpace()};function ee(Z){const he=P.indexOf(Z.inputSource);if(he===-1)return;const Ee=L[he];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,m||f),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<L.length;Z++){const he=P[Z];he!==null&&(P[Z]=null,L[Z].disconnect(he))}z=null,oe=null,R.reset(),e.setRenderTarget(g),y=null,x=null,_=null,a=null,C=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ve=null,we=null;S.depth&&(we=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=S.stencil?Lo:Do,ve=S.stencil?bo:Yr);const je={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:u};_=new XRWebGLBinding(a,n),x=_.createProjectionLayer(je),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new qr(x.textureWidth,x.textureHeight,{format:ai,type:ki,depthTexture:new Vm(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,Ee),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new qr(y.framebufferWidth,y.framebufferHeight,{format:ai,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function pe(Z){for(let he=0;he<Z.removed.length;he++){const Ee=Z.removed[he],ve=P.indexOf(Ee);ve>=0&&(P[ve]=null,L[ve].disconnect(Ee))}for(let he=0;he<Z.added.length;he++){const Ee=Z.added[he];let ve=P.indexOf(Ee);if(ve===-1){for(let je=0;je<L.length;je++)if(je>=P.length){P.push(Ee),ve=je;break}else if(P[je]===null){P[je]=Ee,ve=je;break}if(ve===-1)break}const we=L[ve];we&&we.connect(Ee)}}const se=new te,le=new te;function B(Z,he,Ee){se.setFromMatrixPosition(he.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const ve=se.distanceTo(le),we=he.projectionMatrix.elements,je=Ee.projectionMatrix.elements,Ge=we[14]/(we[10]-1),Pt=we[14]/(we[10]+1),bt=(we[9]+1)/we[5],ut=(we[9]-1)/we[5],O=(we[8]-1)/we[0],_n=(je[8]+1)/je[0],ht=Ge*O,ct=Ge*_n,Ye=ve/(-O+_n),wt=Ye*-O;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const We=Ge+Ye,D=Pt+Ye,E=ht-wt,K=ct+(ve-wt),fe=bt*Pt/D*We,_e=ut*Pt/D*We;Z.projectionMatrix.makePerspective(E,K,fe,_e,We,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let he=Z.near,Ee=Z.far;R.texture!==null&&(R.depthNear>0&&(he=R.depthNear),R.depthFar>0&&(Ee=R.depthFar)),A.near=j.near=I.near=he,A.far=j.far=I.far=Ee,(z!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,oe=A.far),I.layers.mask=Z.layers.mask|2,j.layers.mask=Z.layers.mask|4,A.layers.mask=I.layers.mask|j.layers.mask;const ve=Z.parent,we=A.cameras;ae(A,ve);for(let je=0;je<we.length;je++)ae(we[je],ve);we.length===2?B(A,I,j):A.projectionMatrix.copy(I.projectionMatrix),re(Z,A,ve)};function re(Z,he,Ee){Ee===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Rf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let U=null;function ne(Z,he){if(v=he.getViewerPose(m||f),T=he,v!==null){const Ee=v.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let ve=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ge=0;Ge<Ee.length;Ge++){const Pt=Ee[Ge];let bt=null;if(y!==null)bt=y.getViewport(Pt);else{const O=_.getViewSubImage(x,Pt);bt=O.viewport,Ge===0&&(e.setRenderTargetTextures(C,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(C))}let ut=b[Ge];ut===void 0&&(ut=new qn,ut.layers.enable(Ge),ut.viewport=new Gt,b[Ge]=ut),ut.matrix.fromArray(Pt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Pt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(bt.x,bt.y,bt.width,bt.height),Ge===0&&(A.matrix.copy(ut.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(ut)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Ge=_.getDepthInformation(Ee[0]);Ge&&Ge.isValid&&Ge.texture&&R.init(e,Ge,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const ve=P[Ee],we=L[Ee];ve!==null&&we!==void 0&&we.update(ve,he,m||f)}U&&U(Z,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),T=null}const Ue=new Gm;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const Br=new Bi,HM=new Wt;function VM(o,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Om(o)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,C,L,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),_(S,g)):g.isMeshPhongMaterial?(u(S,g),v(S,g)):g.isMeshStandardMaterial?(u(S,g),x(S,g),g.isMeshPhysicalMaterial&&y(S,g,P)):g.isMeshMatcapMaterial?(u(S,g),T(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),R(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,C,L):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Dn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Dn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const C=e.get(g),L=C.envMap,P=C.envMapRotation;L&&(S.envMap.value=L,Br.copy(P),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),S.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(Br)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,C,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*C,S.scale.value=L*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,C){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,g){g.matcap&&(S.matcap.value=g.matcap)}function R(S,g){const C=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function GM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function m(C,L){let P=a[C.id];P===void 0&&(T(C),P=v(C),a[C.id]=P,C.addEventListener("dispose",S));const W=L.program;r.updateUBOMapping(C,W);const k=e.render.frame;u[C.id]!==k&&(x(C),u[C.id]=k)}function v(C){const L=_();C.__bindingPointIndex=L;const P=o.createBuffer(),W=C.__size,k=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,W,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,P),P}function _(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const L=a[C.id],P=C.uniforms,W=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let k=0,I=P.length;k<I;k++){const j=Array.isArray(P[k])?P[k]:[P[k]];for(let b=0,A=j.length;b<A;b++){const z=j[b];if(y(z,k,b,W)===!0){const oe=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let pe=0;pe<ee.length;pe++){const se=ee[pe],le=R(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+ce,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,L,P,W){const k=C.value,I=L+"_"+P;if(W[I]===void 0)return typeof k=="number"||typeof k=="boolean"?W[I]=k:W[I]=k.clone(),!0;{const j=W[I];if(typeof k=="number"||typeof k=="boolean"){if(j!==k)return W[I]=k,!0}else if(j.equals(k)===!1)return j.copy(k),!0}return!1}function T(C){const L=C.uniforms;let P=0;const W=16;for(let I=0,j=L.length;I<j;I++){const b=Array.isArray(L[I])?L[I]:[L[I]];for(let A=0,z=b.length;A<z;A++){const oe=b[A],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,pe=ee.length;ce<pe;ce++){const se=ee[ce],le=R(se),B=P%W,ae=B%le.boundary,re=B+ae;P+=ae,re!==0&&W-re<le.storage&&(P+=W-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=le.storage}}}const k=P%W;return k>0&&(P+=W-k),C.__size=P,C.__cache={},this}function R(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),L}function S(C){const L=C.target;L.removeEventListener("dispose",S);const P=f.indexOf(L.__bindingPointIndex);f.splice(P,1),o.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const C in a)o.deleteBuffer(a[C]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class WM{constructor(e={}){const{canvas:n=Av(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const T=new Uint32Array(4),R=new Int32Array(4);let S=null,g=null;const C=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let W=!1;this._outputColorSpace=Yn;let k=0,I=0,j=null,b=-1,A=null;const z=new Gt,oe=new Gt;let ee=null;const ce=new Tt(0);let pe=0,se=n.width,le=n.height,B=1,ae=null,re=null;const U=new Gt(0,0,se,le),ne=new Gt(0,0,se,le);let Ue=!1;const Z=new zm;let he=!1,Ee=!1;const ve=new Wt,we=new Wt,je=new te,Ge=new Gt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function ut(){return j===null?B:1}let O=r;function _n(w,G){return n.getContext(w,G)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",be,!1),O===null){const G="webgl2";if(O=_n(G,w),O===null)throw _n(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,ct,Ye,wt,We,D,E,K,fe,_e,ue,Ve,Ae,Ke,$e,xe,Fe,et,tt,Oe,ft,rt,Et,V;function Ce(){ht=new ey(O),ht.init(),rt=new FM(O,ht),ct=new YS(O,ht,e,rt),Ye=new UM(O,ht),ct.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),wt=new iy(O),We=new yM,D=new IM(O,ht,Ye,We,ct,rt,wt),E=new $S(P),K=new JS(P),fe=new u0(O),Et=new XS(O,fe),_e=new ty(O,fe,wt,Et),ue=new sy(O,_e,fe,wt),tt=new ry(O,ct,D),xe=new qS(We),Ve=new SM(P,E,K,ht,ct,Et,xe),Ae=new VM(P,We),Ke=new EM,$e=new PM(ht),et=new WS(P,E,K,Ye,ue,y,p),Fe=new LM(P,ue,ct),V=new GM(O,wt,ct,Ye),Oe=new jS(O,ht,wt),ft=new ny(O,ht,wt),wt.programs=Ve.programs,P.capabilities=ct,P.extensions=ht,P.properties=We,P.renderLists=Ke,P.shadowMap=Fe,P.state=Ye,P.info=wt}Ce();const ie=new zM(P,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(se,le,!1))},this.getSize=function(w){return w.set(se,le)},this.setSize=function(w,G,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,le=G,n.width=Math.floor(w*B),n.height=Math.floor(G*B),J===!0&&(n.style.width=w+"px",n.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(se*B,le*B).floor()},this.setDrawingBufferSize=function(w,G,J){se=w,le=G,B=J,n.width=Math.floor(w*J),n.height=Math.floor(G*J),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,G,J,q){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,G,J,q),Ye.viewport(z.copy(U).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,G,J,q){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,G,J,q),Ye.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){Ye.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,J=!0){let q=0;if(w){let X=!1;if(j!==null){const Me=j.texture.format;X=Me===kf||Me===Of||Me===Ff}if(X){const Me=j.texture.type,Re=Me===ki||Me===Yr||Me===Po||Me===bo||Me===Uf||Me===If,Le=et.getClearColor(),ke=et.getClearAlpha(),nt=Le.r,Je=Le.g,ze=Le.b;Re?(T[0]=nt,T[1]=Je,T[2]=ze,T[3]=ke,O.clearBufferuiv(O.COLOR,0,T)):(R[0]=nt,R[1]=Je,R[2]=ze,R[3]=ke,O.clearBufferiv(O.COLOR,0,R))}else q|=O.COLOR_BUFFER_BIT}G&&(q|=O.DEPTH_BUFFER_BIT),J&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",be,!1),et.dispose(),Ke.dispose(),$e.dispose(),We.dispose(),E.dispose(),K.dispose(),ue.dispose(),Et.dispose(),V.dispose(),Ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$r),ie.removeEventListener("sessionend",Hi),_i.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const w=wt.autoReset,G=Fe.enabled,J=Fe.autoUpdate,q=Fe.needsUpdate,X=Fe.type;Ce(),wt.autoReset=w,Fe.enabled=G,Fe.autoUpdate=J,Fe.needsUpdate=q,Fe.type=X}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){const G=w.target;G.removeEventListener("dispose",st),Lt(G)}function Lt(w){Yt(w),We.remove(w)}function Yt(w){const G=We.get(w).programs;G!==void 0&&(G.forEach(function(J){Ve.releaseProgram(J)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,J,q,X,Me){G===null&&(G=Pt);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Le=zo(w,G,J,q,X);Ye.setMaterial(q,Re);let ke=J.index,nt=1;if(q.wireframe===!0){if(ke=_e.getWireframeAttribute(J),ke===void 0)return;nt=2}const Je=J.drawRange,ze=J.attributes.position;let mt=Je.start*nt,ot=(Je.start+Je.count)*nt;Me!==null&&(mt=Math.max(mt,Me.start*nt),ot=Math.min(ot,(Me.start+Me.count)*nt)),ke!==null?(mt=Math.max(mt,0),ot=Math.min(ot,ke.count)):ze!=null&&(mt=Math.max(mt,0),ot=Math.min(ot,ze.count));const Bt=ot-mt;if(Bt<0||Bt===1/0)return;Et.setup(X,q,Le,J,ke);let It,_t=Oe;if(ke!==null&&(It=fe.get(ke),_t=ft,_t.setIndex(It)),X.isMesh)q.wireframe===!0?(Ye.setLineWidth(q.wireframeLinewidth*ut()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(X.isLine){let qe=q.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*ut()),X.isLineSegments?_t.setMode(O.LINES):X.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else X.isPoints?_t.setMode(O.POINTS):X.isSprite&&_t.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)yl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qe=X._multiDrawStarts,zt=X._multiDrawCounts,pt=X._multiDrawCount,ln=ke?fe.get(ke).bytesPerElement:1,Gi=We.get(q).currentProgram.getUniforms();for(let xn=0;xn<pt;xn++)Gi.setValue(O,"_gl_DrawID",xn),_t.render(qe[xn]/ln,zt[xn])}else if(X.isInstancedMesh)_t.renderInstances(mt,Bt,X.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,zt=Math.min(J.instanceCount,qe);_t.renderInstances(mt,Bt,zt)}else _t.render(mt,Bt)};function vt(w,G,J){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=Dn,w.needsUpdate=!0,Kr(w,G,J),w.side=vr,w.needsUpdate=!0,Kr(w,G,J),w.side=Ui):Kr(w,G,J)}this.compile=function(w,G,J=null){J===null&&(J=w),g=$e.get(J),g.init(G),L.push(g),J.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),w!==J&&w.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const q=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Le=Me[Re];vt(Le,J,X),q.add(Le)}else vt(Me,J,X),q.add(Me)}),g=L.pop(),q},this.compileAsync=function(w,G,J=null){const q=this.compile(w,G,J);return new Promise(X=>{function Me(){if(q.forEach(function(Re){We.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){X(w);return}setTimeout(Me,10)}ht.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let En=null;function vn(w){En&&En(w)}function $r(){_i.stop()}function Hi(){_i.start()}const _i=new Gm;_i.setAnimationLoop(vn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){En=w,ie.setAnimationLoop(w),w===null?_i.stop():_i.start()},ie.addEventListener("sessionstart",$r),ie.addEventListener("sessionend",Hi),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,G,j),g=$e.get(w,L.length),g.init(G),L.push(g),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,he=xe.init(this.clippingPlanes,Ee),S=Ke.get(w,C.length),S.init(),C.push(S),ie.enabled===!0&&ie.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&vi(Me,G,-1/0,P.sortObjects)}vi(w,G,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(ae,re),bt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,bt&&et.addToRenderList(S,w),this.info.render.frame++,he===!0&&xe.beginShadows();const J=g.state.shadowsArray;Fe.render(J,w,G),he===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,X=S.transmissive;if(g.setupLights(),G.isArrayCamera){const Me=G.cameras;if(X.length>0)for(let Re=0,Le=Me.length;Re<Le;Re++){const ke=Me[Re];yr(q,X,w,ke)}bt&&et.render(w);for(let Re=0,Le=Me.length;Re<Le;Re++){const ke=Me[Re];Sr(S,w,ke,ke.viewport)}}else X.length>0&&yr(q,X,w,G),bt&&et.render(w),Sr(S,w,G);j!==null&&I===0&&(D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j)),w.isScene===!0&&w.onAfterRender(P,w,G),Et.resetDefaultState(),b=-1,A=null,L.pop(),L.length>0?(g=L[L.length-1],he===!0&&xe.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function vi(w,G,J,q){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){q&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const Re=ue.update(w),Le=w.material;Le.visible&&S.push(w,Re,Le,J,Ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const Re=ue.update(w),Le=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ge.copy(Re.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Le)){const ke=Re.groups;for(let nt=0,Je=ke.length;nt<Je;nt++){const ze=ke[nt],mt=Le[ze.materialIndex];mt&&mt.visible&&S.push(w,Re,mt,J,Ge.z,ze)}}else Le.visible&&S.push(w,Re,Le,J,Ge.z,null)}}const Me=w.children;for(let Re=0,Le=Me.length;Re<Le;Re++)vi(Me[Re],G,J,q)}function Sr(w,G,J,q){const X=w.opaque,Me=w.transmissive,Re=w.transparent;g.setupLightsView(J),he===!0&&xe.setGlobalState(P.clippingPlanes,J),q&&Ye.viewport(z.copy(q)),X.length>0&&Vi(X,G,J),Me.length>0&&Vi(Me,G,J),Re.length>0&&Vi(Re,G,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function yr(w,G,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new qr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?No:ki,minFilter:Xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Me=g.state.transmissionRenderTarget[q.id],Re=q.viewport||z;Me.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const Le=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(ce),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),bt&&et.render(J);const ke=P.toneMapping;P.toneMapping=_r;const nt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),he===!0&&xe.setGlobalState(P.clippingPlanes,q),Vi(w,J,q),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ze=0,mt=G.length;ze<mt;ze++){const ot=G[ze],Bt=ot.object,It=ot.geometry,_t=ot.material,qe=ot.group;if(_t.side===Ui&&Bt.layers.test(q.layers)){const zt=_t.side;_t.side=Dn,_t.needsUpdate=!0,ko(Bt,J,q,It,_t,qe),_t.side=zt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}P.setRenderTarget(Le),P.setClearColor(ce,pe),nt!==void 0&&(q.viewport=nt),P.toneMapping=ke}function Vi(w,G,J){const q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Me=w.length;X<Me;X++){const Re=w[X],Le=Re.object,ke=Re.geometry,nt=Re.group;let Je=Re.material;Je.allowOverride===!0&&q!==null&&(Je=q),Le.layers.test(J.layers)&&ko(Le,G,J,ke,Je,nt)}}function ko(w,G,J,q,X,Me){w.onBeforeRender(P,G,J,q,X,Me),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(P,G,J,q,w,Me),X.transparent===!0&&X.side===Ui&&X.forceSinglePass===!1?(X.side=Dn,X.needsUpdate=!0,P.renderBufferDirect(J,G,q,X,w,Me),X.side=vr,X.needsUpdate=!0,P.renderBufferDirect(J,G,q,X,w,Me),X.side=Ui):P.renderBufferDirect(J,G,q,X,w,Me),w.onAfterRender(P,G,J,q,X,Me)}function Kr(w,G,J){G.isScene!==!0&&(G=Pt);const q=We.get(w),X=g.state.lights,Me=g.state.shadowsArray,Re=X.state.version,Le=Ve.getParameters(w,X.state,Me,G,J),ke=Ve.getProgramCacheKey(Le);let nt=q.programs;q.environment=w.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(w.isMeshStandardMaterial?K:E).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",st),nt=new Map,q.programs=nt);let Je=nt.get(ke);if(Je!==void 0){if(q.currentProgram===Je&&q.lightsStateVersion===Re)return ui(w,Le),Je}else Le.uniforms=Ve.getUniforms(w),w.onBeforeCompile(Le,P),Je=Ve.acquireProgram(Le,ke),nt.set(ke,Je),q.uniforms=Le.uniforms;const ze=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=xe.uniform),ui(w,Le),q.needsLights=bl(w),q.lightsStateVersion=Re,q.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Je,q.uniformsList=null,Je}function Bo(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Ml.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function ui(w,G){const J=We.get(w);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function zo(w,G,J,q,X){G.isScene!==!0&&(G=Pt),D.resetTextureUnits();const Me=G.fog,Re=q.isMeshStandardMaterial?G.environment:null,Le=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Bs,ke=(q.isMeshStandardMaterial?K:E).get(q.envMap||Re),nt=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!J.morphAttributes.position,mt=!!J.morphAttributes.normal,ot=!!J.morphAttributes.color;let Bt=_r;q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Bt=P.toneMapping);const It=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=It!==void 0?It.length:0,qe=We.get(q),zt=g.state.lights;if(he===!0&&(Ee===!0||w!==A)){const sn=w===A&&q.id===b;xe.setState(q,w,sn)}let pt=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zt.state.version||qe.outputColorSpace!==Le||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==ke||q.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==xe.numPlanes||qe.numIntersection!==xe.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==Je||qe.morphTargets!==ze||qe.morphNormals!==mt||qe.morphColors!==ot||qe.toneMapping!==Bt||qe.morphTargetsCount!==_t)&&(pt=!0):(pt=!0,qe.__version=q.version);let ln=qe.currentProgram;pt===!0&&(ln=Kr(q,G,X));let Gi=!1,xn=!1,xi=!1;const Ct=ln.getUniforms(),un=qe.uniforms;if(Ye.useProgram(ln.program)&&(Gi=!0,xn=!0,xi=!0),q.id!==b&&(b=q.id,xn=!0),Gi||A!==w){Ye.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),Rv(ve),Pv(ve),Ct.setValue(O,"projectionMatrix",ve)):Ct.setValue(O,"projectionMatrix",w.projectionMatrix),Ct.setValue(O,"viewMatrix",w.matrixWorldInverse);const Jt=Ct.map.cameraPosition;Jt!==void 0&&Jt.setValue(O,je.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,xn=!0,xi=!0)}if(X.isSkinnedMesh){Ct.setOptional(O,X,"bindMatrix"),Ct.setOptional(O,X,"bindMatrixInverse");const sn=X.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ct.setValue(O,"boneTexture",sn.boneTexture,D))}X.isBatchedMesh&&(Ct.setOptional(O,X,"batchingTexture"),Ct.setValue(O,"batchingTexture",X._matricesTexture,D),Ct.setOptional(O,X,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",X._indirectTexture,D),Ct.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",X._colorsTexture,D));const Qt=J.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&tt.update(X,J,ln),(xn||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Ct.setValue(O,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(un.envMap.value=ke,un.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(un.envMapIntensity.value=G.environmentIntensity),xn&&(Ct.setValue(O,"toneMappingExposure",P.toneMappingExposure),qe.needsLights&&Ho(un,xi),Me&&q.fog===!0&&Ae.refreshFogUniforms(un,Me),Ae.refreshMaterialUniforms(un,q,B,le,g.state.transmissionRenderTarget[w.id]),Ml.upload(O,Bo(qe),un,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ml.upload(O,Bo(qe),un,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ct.setValue(O,"center",X.center),Ct.setValue(O,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(O,"normalMatrix",X.normalMatrix),Ct.setValue(O,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const sn=q.uniformsGroups;for(let Jt=0,xt=sn.length;Jt<xt;Jt++){const ci=sn[Jt];V.update(ci,ln),V.bind(ci,ln)}}return ln}function Ho(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function bl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,G,J){const q=We.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),We.get(w.texture).__webglTexture=G,We.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const J=We.get(w);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};const Vo=O.createFramebuffer();this.setRenderTarget=function(w,G=0,J=0){j=w,k=G,I=J;let q=!0,X=null,Me=!1,Re=!1;if(w){const ke=We.get(w);if(ke.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(ke.__webglFramebuffer===void 0)D.setupRenderTarget(w);else if(ke.__hasExternalTextures)D.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(ke.__boundDepthTexture!==ze){if(ze!==null&&We.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(w)}}const nt=w.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Re=!0);const Je=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?X=Je[G][J]:X=Je[G],Me=!0):w.samples>0&&D.useMultisampledRTT(w)===!1?X=We.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[J]:X=Je,z.copy(w.viewport),oe.copy(w.scissor),ee=w.scissorTest}else z.copy(U).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),ee=Ue;if(J!==0&&(X=Vo),Ye.bindFramebuffer(O.FRAMEBUFFER,X)&&q&&Ye.drawBuffers(w,X),Ye.viewport(z),Ye.scissor(oe),Ye.setScissorTest(ee),Me){const ke=We.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,J)}else if(Re){const ke=We.get(w.texture),nt=G;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,J,nt)}else if(w!==null&&J!==0){const ke=We.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ke.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(w,G,J,q,X,Me,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){Ye.bindFramebuffer(O.FRAMEBUFFER,Le);try{const ke=w.texture,nt=ke.format,Je=ke.type;if(!ct.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-q&&J>=0&&J<=w.height-X&&O.readPixels(G,J,q,X,rt.convert(nt),rt.convert(Je),Me)}finally{const ke=j!==null?We.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,G,J,q,X,Me,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(G>=0&&G<=w.width-q&&J>=0&&J<=w.height-X){Ye.bindFramebuffer(O.FRAMEBUFFER,Le);const ke=w.texture,nt=ke.format,Je=ke.type;if(!ct.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(G,J,q,X,rt.convert(nt),rt.convert(Je),0);const mt=j!==null?We.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,mt);const ot=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Cv(O,ot,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(ze),O.deleteSync(ot),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,J=0){const q=Math.pow(2,-J),X=Math.floor(w.image.width*q),Me=Math.floor(w.image.height*q),Re=G!==null?G.x:0,Le=G!==null?G.y:0;D.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Re,Le,X,Me),Ye.unbindTexture()};const Go=O.createFramebuffer(),Wo=O.createFramebuffer();this.copyTextureToTexture=function(w,G,J=null,q=null,X=0,Me=null){Me===null&&(X!==0?(yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=X,X=0):Me=0);let Re,Le,ke,nt,Je,ze,mt,ot,Bt;const It=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(J!==null)Re=J.max.x-J.min.x,Le=J.max.y-J.min.y,ke=J.isBox3?J.max.z-J.min.z:1,nt=J.min.x,Je=J.min.y,ze=J.isBox3?J.min.z:0;else{const Qt=Math.pow(2,-X);Re=Math.floor(It.width*Qt),Le=Math.floor(It.height*Qt),w.isDataArrayTexture?ke=It.depth:w.isData3DTexture?ke=Math.floor(It.depth*Qt):ke=1,nt=0,Je=0,ze=0}q!==null?(mt=q.x,ot=q.y,Bt=q.z):(mt=0,ot=0,Bt=0);const _t=rt.convert(G.format),qe=rt.convert(G.type);let zt;G.isData3DTexture?(D.setTexture3D(G,0),zt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),zt=O.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),zt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const pt=O.getParameter(O.UNPACK_ROW_LENGTH),ln=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Gi=O.getParameter(O.UNPACK_SKIP_PIXELS),xn=O.getParameter(O.UNPACK_SKIP_ROWS),xi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);const Ct=w.isDataArrayTexture||w.isData3DTexture,un=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const Qt=We.get(w),sn=We.get(G),Jt=We.get(Qt.__renderTarget),xt=We.get(sn.__renderTarget);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ci=0;ci<ke;ci++)Ct&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(w).__webglTexture,X,ze+ci),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(G).__webglTexture,Me,Bt+ci)),O.blitFramebuffer(nt,Je,Re,Le,mt,ot,Re,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||We.has(w)){const Qt=We.get(w),sn=We.get(G);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,Go),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wo);for(let Jt=0;Jt<ke;Jt++)Ct?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qt.__webglTexture,X,ze+Jt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qt.__webglTexture,X),un?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,sn.__webglTexture,Me,Bt+Jt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,sn.__webglTexture,Me),X!==0?O.blitFramebuffer(nt,Je,Re,Le,mt,ot,Re,Le,O.COLOR_BUFFER_BIT,O.NEAREST):un?O.copyTexSubImage3D(zt,Me,mt,ot,Bt+Jt,nt,Je,Re,Le):O.copyTexSubImage2D(zt,Me,mt,ot,nt,Je,Re,Le);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else un?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(zt,Me,mt,ot,Bt,Re,Le,ke,_t,qe,It.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(zt,Me,mt,ot,Bt,Re,Le,ke,_t,It.data):O.texSubImage3D(zt,Me,mt,ot,Bt,Re,Le,ke,_t,qe,It):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,mt,ot,Re,Le,_t,qe,It.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,mt,ot,It.width,It.height,_t,It.data):O.texSubImage2D(O.TEXTURE_2D,Me,mt,ot,Re,Le,_t,qe,It);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ln),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Gi),O.pixelStorei(O.UNPACK_SKIP_ROWS,xn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,xi),Me===0&&G.generateMipmaps&&O.generateMipmap(zt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(w,G,J=null,q=null,X=0){return yl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,G,J,q,X)},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&D.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?D.setTextureCube(w,0):w.isData3DTexture?D.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?D.setTexture2DArray(w,0):D.setTexture2D(w,0),Ye.unbindTexture()},this.resetState=function(){k=0,I=0,j=null,Ye.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const XM=()=>{const o=gn.useRef(null),e=gn.useRef(null),n=gn.useRef(null),r=gn.useRef(null),a=gn.useRef(null);return gn.useEffect(()=>{if(!o.current)return;const u=new e0;e.current=u;const f=new qn(75,window.innerWidth/window.innerHeight,.1,1e3);f.position.z=5,n.current=f;const d=new WM({alpha:!0});d.setSize(window.innerWidth,window.innerHeight),d.setClearColor(0,0),o.current.appendChild(d.domElement),r.current=d;const p=1e3,m=new zi,v=new Float32Array(p*3),_=new Float32Array(p*3);for(let C=0;C<p*3;C+=3){v[C]=(Math.random()-.5)*20,v[C+1]=(Math.random()-.5)*20,v[C+2]=(Math.random()-.5)*20;const L=Math.random();L<.33?(_[C]=0,_[C+1]=.94,_[C+2]=1):L<.66?(_[C]=1,_[C+1]=0,_[C+2]=1):(_[C]=0,_[C+1]=1,_[C+2]=.25)}m.setAttribute("position",new Kn(v,3)),m.setAttribute("color",new Kn(_,3));const x=new Hm({size:.05,vertexColors:!0,transparent:!0,opacity:.8}),y=new i0(m,x);u.add(y),a.current=y;const T=15;for(let C=0;C<T;C++){const L=new Vs(Math.random()*.5+.1,Math.random()*.5+.1,Math.random()*.5+.1),P=new zf({color:new Tt(C%3===0?61695:C%3===1?16711935:65345),wireframe:!0,transparent:!0,opacity:.3}),W=new $n(L,P);W.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),W.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},floatSpeed:{x:(Math.random()-.5)*.005,y:(Math.random()-.5)*.005,z:(Math.random()-.5)*.005}},u.add(W)}const R=()=>{!n.current||!r.current||(n.current.aspect=window.innerWidth/window.innerHeight,n.current.updateProjectionMatrix(),r.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",R);let S=window.scrollY;const g=()=>{if(requestAnimationFrame(g),!e.current||!n.current||!r.current)return;const C=window.scrollY-S;S=window.scrollY,a.current&&(a.current.rotation.x+=3e-4,a.current.rotation.y+=5e-4,a.current.position.y+=C*.001),e.current.children.forEach(L=>{L instanceof $n&&L.userData.rotationSpeed&&(L.rotation.x+=L.userData.rotationSpeed.x,L.rotation.y+=L.userData.rotationSpeed.y,L.rotation.z+=L.userData.rotationSpeed.z,L.position.x+=L.userData.floatSpeed.x,L.position.y+=L.userData.floatSpeed.y+C*.001,L.position.z+=L.userData.floatSpeed.z,(Math.abs(L.position.x)>10||Math.abs(L.position.y)>10||Math.abs(L.position.z)>10)&&L.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10))}),r.current.render(e.current,n.current)};return g(),()=>{var C;window.removeEventListener("resize",R),r.current&&o.current&&o.current.removeChild(r.current.domElement),a.current&&(a.current.geometry.dispose(),a.current.material.dispose()),(C=e.current)==null||C.children.forEach(L=>{L instanceof $n&&(L.geometry.dispose(),L.material.dispose())})}},[]),ye.jsx("div",{ref:o,className:"parallax-background"})};function jM(){var T,R,S,g;const[o,e]=gn.useState(0),[n,r]=gn.useState(null),[a,u]=gn.useState(null),f=gn.useRef(null),d=gn.useRef(null),p=gn.useRef(null),m=gn.useRef(null);gn.useEffect(()=>{const C=()=>{e(window.scrollY)};return window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)},[]),gn.useEffect(()=>{const C=document.getElementById("matrix-canvas");if(!C)return;const L=C.getContext("2d");if(!L)return;C.width=window.innerWidth,C.height=window.innerHeight;const P=14,W=Math.floor(C.width/P),k=[];for(let A=0;A<W;A++)k[A]=Math.floor(Math.random()*C.height);const I="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";function j(){if(L){L.fillStyle="rgba(0, 0, 0, 0.05)",L.fillRect(0,0,C.width,C.height),L.fillStyle="#00ff41",L.font=`${P}px monospace`;for(let A=0;A<k.length;A++){const z=I[Math.floor(Math.random()*I.length)];L&&L.fillText(z,A*P,k[A]*P),k[A]*P>C.height&&Math.random()>.975&&(k[A]=0),k[A]++}}}const b=setInterval(j,50);return()=>clearInterval(b)},[]);const v=C=>{r(C===n?null:C)},_=C=>{u(C===a?null:C)},x=()=>{r(null)},y=()=>{u(null)};return ye.jsxs("div",{className:"parallax-container",children:[ye.jsx("div",{className:"scanline"}),ye.jsx("div",{className:"vignette"}),ye.jsx("canvas",{id:"matrix-canvas",className:"matrix-canvas"}),ye.jsx(XM,{}),ye.jsxs("section",{ref:f,className:"section hero-section",style:{transform:`translateY(${o*.5}px)`},children:[ye.jsxs("div",{className:"hero-content",children:[ye.jsx("div",{className:"logo-container",children:ye.jsx("img",{src:"/criptografia_logo.jpeg",alt:"Criptografia Logo",className:"logo glitch-effect",style:{transform:`translateZ(${2+o*.01}px) scale(${1-o*5e-4})`,opacity:1-o*.001}})}),ye.jsx("h1",{className:"main-title neon-text-green typing-effect",children:"CRIPTOGRAFIA"}),ye.jsx("p",{className:"tagline neon-text-cyan",children:"SEGURANÇA DIGITAL PARA O QUE REALMENTE IMPORTA"}),ye.jsxs("div",{className:"hero-buttons",children:[ye.jsx("button",{className:"cyberpunk-button",onClick:()=>{var C;return(C=d.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:"EXPLORAR SERVIÇOS"}),ye.jsx("button",{className:"cyberpunk-button",onClick:()=>{var C;return(C=m.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:"SOBRE NÓS"})]})]}),ye.jsxs("div",{className:"scroll-indicator",children:[ye.jsx("span",{className:"neon-text-cyan",children:"SCROLL DOWN"}),ye.jsx("div",{className:"scroll-arrow"})]})]}),ye.jsxs("section",{ref:d,className:"section services-section",style:{transform:`translateY(${(o-(((T=d.current)==null?void 0:T.offsetTop)||0))*.2}px)`},children:[ye.jsx("h2",{className:"section-title neon-text-pink",children:"NOSSOS SERVIÇOS"}),ye.jsx("p",{className:"section-subtitle",children:"Soluções criptográficas avançadas para proteção digital"}),ye.jsx("div",{className:"grid-container",children:vp.map((C,L)=>ye.jsx(I_,{title:C.title,description:C.description,icon:C.icon,delay:L*.1,className:n===C.id?"active":"",onClick:()=>v(C.id)},C.id))})]}),ye.jsxs("section",{ref:p,className:"section products-section",style:{transform:`translateY(${(o-(((R=p.current)==null?void 0:R.offsetTop)||0))*.2}px)`},children:[ye.jsx("h2",{className:"section-title neon-text-cyan",children:"PRODUTOS FÍSICOS"}),ye.jsx("p",{className:"section-subtitle",children:"Hardware e soluções tangíveis para segurança máxima"}),ye.jsx("div",{className:"grid-container",children:xp.map((C,L)=>ye.jsx(F_,{title:C.title,description:C.description,icon:C.icon,delay:L*.1,className:a===C.id?"active":"",onClick:()=>_(C.id)},C.id))})]}),ye.jsxs("section",{ref:m,className:"section about-section",style:{transform:`translateY(${(o-(((S=m.current)==null?void 0:S.offsetTop)||0))*.2}px)`},children:[ye.jsx("h2",{className:"section-title neon-text-green",children:"SOBRE NÓS"}),ye.jsx("p",{className:"section-subtitle",children:"Seu banco de segredos e chaves digitais"}),ye.jsxs("div",{className:"about-content",children:[ye.jsx("div",{className:"about-image",style:{transform:`translateZ(${2+(o-(((g=m.current)==null?void 0:g.offsetTop)||0))*.01}px)`},children:ye.jsx("img",{src:"/criptografia_logo.jpeg",alt:"Alan Turing",className:"turing-image"})}),ye.jsxs("div",{className:"about-text",children:[ye.jsxs("p",{children:["A ",ye.jsx("span",{className:"neon-text-cyan",children:"Criptografia"})," é uma empresa especializada em soluções de segurança digital baseadas em tecnologias criptográficas e blockchain."]}),ye.jsx("p",{children:'Posicionada como um "banco de segredos e chaves digitais", oferecemos um portfólio abrangente de produtos e serviços que permitem aos clientes manter a propriedade de seus ativos digitais enquanto delegam a complexidade técnica da gestão de chaves e segurança.'}),ye.jsx("p",{children:"Nossa missão é democratizar o acesso a tecnologias criptográficas avançadas, fornecendo soluções que combinam segurança, praticidade e inovação."}),ye.jsx("p",{children:"Nossos diferenciais incluem:"}),ye.jsxs("ul",{className:"about-list",children:[ye.jsxs("li",{children:[ye.jsx("span",{className:"neon-text-pink",children:"Expertise Técnica"})," - Equipe altamente especializada em criptografia e blockchain"]}),ye.jsxs("li",{children:[ye.jsx("span",{className:"neon-text-pink",children:"Soluções Personalizadas"})," - Adaptamos nossos serviços às necessidades específicas de cada cliente"]}),ye.jsxs("li",{children:[ye.jsx("span",{className:"neon-text-pink",children:"Segurança de Ponta"})," - Utilizamos os mais avançados protocolos de segurança do mercado"]}),ye.jsxs("li",{children:[ye.jsx("span",{className:"neon-text-pink",children:"Inovação Constante"})," - Atualização contínua de tecnologias e metodologias"]})]})]})]})]}),ye.jsx("footer",{className:"footer",children:ye.jsxs("div",{className:"footer-content",children:[ye.jsx("div",{className:"footer-logo",children:ye.jsx("h3",{className:"neon-text-green",children:"CRIPTOGRAFIA"})}),ye.jsxs("div",{className:"footer-links",children:[ye.jsx("a",{href:"#",className:"footer-link neon-text-cyan",onClick:()=>{var C;return(C=d.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:"Serviços"}),ye.jsx("a",{href:"#",className:"footer-link neon-text-cyan",onClick:()=>{var C;return(C=p.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:"Produtos"}),ye.jsx("a",{href:"#",className:"footer-link neon-text-cyan",onClick:()=>{var C;return(C=m.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:"Sobre"}),ye.jsx("a",{href:"#",className:"footer-link neon-text-cyan",children:"Contato"})]}),ye.jsxs("div",{className:"footer-contact",children:[ye.jsx("p",{children:"contato@criptografia.app"}),ye.jsx("p",{children:"© 2025 Criptografia. Todos os direitos reservados."})]})]})}),n&&ye.jsx("div",{className:"detail-modal-overlay",onClick:x,children:ye.jsxs("div",{className:"detail-modal",onClick:C=>C.stopPropagation(),children:[ye.jsx("button",{className:"modal-close",onClick:x,children:"×"}),vp.filter(C=>C.id===n).map(C=>ye.jsx(Sp,{title:C.title,description:C.description,features:C.features,options:C.options,icon:C.icon},C.id))]})}),a&&ye.jsx("div",{className:"detail-modal-overlay",onClick:y,children:ye.jsxs("div",{className:"detail-modal",onClick:C=>C.stopPropagation(),children:[ye.jsx("button",{className:"modal-close",onClick:y,children:"×"}),xp.filter(C=>C.id===a).map(C=>ye.jsx(Sp,{title:C.title,description:C.description,features:C.features,options:C.options,icon:C.icon},C.id))]})})]})}U_.createRoot(document.getElementById("root")).render(ye.jsx(gn.StrictMode,{children:ye.jsx(jM,{})}));
