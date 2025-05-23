(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var ac={exports:{}},Mo={},lc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function A_(){if(cp)return dt;cp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function S(I,ie,Ue){this.props=I,this.context=ie,this.refs=T,this.updater=Ue||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=S.prototype;function U(I,ie,Ue){this.props=I,this.context=ie,this.refs=T,this.updater=Ue||y}var L=U.prototype=new g;L.constructor=U,w(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,W=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(I,ie,Ue){var Q,me={},Ee=null,xe=null;if(ie!=null)for(Q in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)W.call(ie,Q)&&!F.hasOwnProperty(Q)&&(me[Q]=ie[Q]);var we=arguments.length-2;if(we===1)me.children=Ue;else if(1<we){for(var je=Array(we),Ge=0;Ge<we;Ge++)je[Ge]=arguments[Ge+2];me.children=je}if(I&&I.defaultProps)for(Q in we=I.defaultProps,we)me[Q]===void 0&&(me[Q]=we[Q]);return{$$typeof:o,type:I,key:Ee,ref:xe,props:me,_owner:z.current}}function b(I,ie){return{$$typeof:o,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function C(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ue){return ie[Ue]})}var ee=/\/+/g;function $(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?C(""+I.key):ie.toString(36)}function ue(I,ie,Ue,Q,me){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case o:case e:xe=!0}}if(xe)return xe=I,me=me(xe),I=Q===""?"."+$(xe,0):Q,P(me)?(Ue="",I!=null&&(Ue=I.replace(ee,"$&/")+"/"),ue(me,ie,Ue,"",function(Ge){return Ge})):me!=null&&(R(me)&&(me=b(me,Ue+(!me.key||xe&&xe.key===me.key?"":(""+me.key).replace(ee,"$&/")+"/")+I)),ie.push(me)),1;if(xe=0,Q=Q===""?".":Q+":",P(I))for(var we=0;we<I.length;we++){Ee=I[we];var je=Q+$(Ee,we);xe+=ue(Ee,ie,Ue,je,me)}else if(je=x(I),typeof je=="function")for(I=je.call(I),we=0;!(Ee=I.next()).done;)Ee=Ee.value,je=Q+$(Ee,we++),xe+=ue(Ee,ie,Ue,je,me);else if(Ee==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function fe(I,ie,Ue){if(I==null)return I;var Q=[],me=0;return ue(I,Q,"","",function(Ee){return ie.call(Ue,Ee,me++)}),Q}function ae(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Ue){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ue)},function(Ue){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ue)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var le={current:null},B={transition:null},re={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:z};function oe(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:fe,forEach:function(I,ie,Ue){fe(I,function(){ie.apply(this,arguments)},Ue)},count:function(I){var ie=0;return fe(I,function(){ie++}),ie},toArray:function(I){return fe(I,function(ie){return ie})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},dt.Component=S,dt.Fragment=n,dt.Profiler=a,dt.PureComponent=U,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,dt.act=oe,dt.cloneElement=function(I,ie,Ue){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=w({},I.props),me=I.key,Ee=I.ref,xe=I._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,xe=z.current),ie.key!==void 0&&(me=""+ie.key),I.type&&I.type.defaultProps)var we=I.type.defaultProps;for(je in ie)W.call(ie,je)&&!F.hasOwnProperty(je)&&(Q[je]=ie[je]===void 0&&we!==void 0?we[je]:ie[je])}var je=arguments.length-2;if(je===1)Q.children=Ue;else if(1<je){we=Array(je);for(var Ge=0;Ge<je;Ge++)we[Ge]=arguments[Ge+2];Q.children=we}return{$$typeof:o,type:I.type,key:me,ref:Ee,props:Q,_owner:xe}},dt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},dt.createElement=j,dt.createFactory=function(I){var ie=j.bind(null,I);return ie.type=I,ie},dt.createRef=function(){return{current:null}},dt.forwardRef=function(I){return{$$typeof:d,render:I}},dt.isValidElement=R,dt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ae}},dt.memo=function(I,ie){return{$$typeof:m,type:I,compare:ie===void 0?null:ie}},dt.startTransition=function(I){var ie=B.transition;B.transition={};try{I()}finally{B.transition=ie}},dt.unstable_act=oe,dt.useCallback=function(I,ie){return le.current.useCallback(I,ie)},dt.useContext=function(I){return le.current.useContext(I)},dt.useDebugValue=function(){},dt.useDeferredValue=function(I){return le.current.useDeferredValue(I)},dt.useEffect=function(I,ie){return le.current.useEffect(I,ie)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(I,ie,Ue){return le.current.useImperativeHandle(I,ie,Ue)},dt.useInsertionEffect=function(I,ie){return le.current.useInsertionEffect(I,ie)},dt.useLayoutEffect=function(I,ie){return le.current.useLayoutEffect(I,ie)},dt.useMemo=function(I,ie){return le.current.useMemo(I,ie)},dt.useReducer=function(I,ie,Ue){return le.current.useReducer(I,ie,Ue)},dt.useRef=function(I){return le.current.useRef(I)},dt.useState=function(I){return le.current.useState(I)},dt.useSyncExternalStore=function(I,ie,Ue){return le.current.useSyncExternalStore(I,ie,Ue)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var fp;function Lf(){return fp||(fp=1,lc.exports=A_()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function R_(){if(dp)return Mo;dp=1;var o=Lf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,_={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:y,props:_,_owner:a.current}}return Mo.Fragment=n,Mo.jsx=f,Mo.jsxs=f,Mo}var hp;function C_(){return hp||(hp=1,ac.exports=R_()),ac.exports}var de=C_(),Yt=Lf(),Xa={},uc={exports:{}},Pn={},cc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function P_(){return pp||(pp=1,function(o){function e(B,re){var oe=B.length;B.push(re);e:for(;0<oe;){var I=oe-1>>>1,ie=B[I];if(0<a(ie,re))B[I]=re,B[oe]=ie,oe=I;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var re=B[0],oe=B.pop();if(oe!==re){B[0]=oe;e:for(var I=0,ie=B.length,Ue=ie>>>1;I<Ue;){var Q=2*(I+1)-1,me=B[Q],Ee=Q+1,xe=B[Ee];if(0>a(me,oe))Ee<ie&&0>a(xe,me)?(B[I]=xe,B[Ee]=oe,I=Ee):(B[I]=me,B[Q]=oe,I=Q);else if(Ee<ie&&0>a(xe,oe))B[I]=xe,B[Ee]=oe,I=Ee;else break e}}return re}function a(B,re){var oe=B.sortIndex-re.sortIndex;return oe!==0?oe:B.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,_=null,x=3,y=!1,w=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var re=n(m);re!==null;){if(re.callback===null)r(m);else if(re.startTime<=B)r(m),re.sortIndex=re.expirationTime,e(p,re);else break;re=n(m)}}function P(B){if(T=!1,L(B),!w)if(n(p)!==null)w=!0,ae(W);else{var re=n(m);re!==null&&le(P,re.startTime-B)}}function W(B,re){w=!1,T&&(T=!1,g(j),j=-1),y=!0;var oe=x;try{for(L(re),_=n(p);_!==null&&(!(_.expirationTime>re)||B&&!C());){var I=_.callback;if(typeof I=="function"){_.callback=null,x=_.priorityLevel;var ie=I(_.expirationTime<=re);re=o.unstable_now(),typeof ie=="function"?_.callback=ie:_===n(p)&&r(p),L(re)}else r(p);_=n(p)}if(_!==null)var Ue=!0;else{var Q=n(m);Q!==null&&le(P,Q.startTime-re),Ue=!1}return Ue}finally{_=null,x=oe,y=!1}}var z=!1,F=null,j=-1,b=5,R=-1;function C(){return!(o.unstable_now()-R<b)}function ee(){if(F!==null){var B=o.unstable_now();R=B;var re=!0;try{re=F(!0,B)}finally{re?$():(z=!1,F=null)}}else z=!1}var $;if(typeof U=="function")$=function(){U(ee)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=ee,$=function(){fe.postMessage(null)}}else $=function(){S(ee,0)};function ae(B){F=B,z||(z=!0,$())}function le(B,re){j=S(function(){B(o.unstable_now())},re)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){w||y||(w=!0,ae(W))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var re=3;break;default:re=x}var oe=x;x=re;try{return B()}finally{x=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,re){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=x;x=B;try{return re()}finally{x=oe}},o.unstable_scheduleCallback=function(B,re,oe){var I=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=oe+ie,B={id:v++,callback:re,priorityLevel:B,startTime:oe,expirationTime:ie,sortIndex:-1},oe>I?(B.sortIndex=oe,e(m,B),n(p)===null&&B===n(m)&&(T?(g(j),j=-1):T=!0,le(P,oe-I))):(B.sortIndex=ie,e(p,B),w||y||(w=!0,ae(W))),B},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(B){var re=x;return function(){var oe=x;x=re;try{return B.apply(this,arguments)}finally{x=oe}}}}(fc)),fc}var mp;function b_(){return mp||(mp=1,cc.exports=P_()),cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function D_(){if(gp)return Pn;gp=1;var o=Lf(),e=b_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(t){return p.call(_,t)?!0:p.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);S[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);S[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);S[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var P=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),C=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,I;function ie(t){if(I===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ue=!1;function Q(t,i){if(!t||Ue)return"";Ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,N=h.length-1;1<=M&&0<=N&&c[M]!==h[N];)N--;for(;1<=M&&0<=N;M--,N--)if(c[M]!==h[N]){if(M!==1||N!==1)do if(M--,N--,0>N||c[M]!==h[N]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=N);break}}}finally{Ue=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ie(t):""}function me(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case b:return"Profiler";case j:return"StrictMode";case $:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ee:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=je(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){t._valueTracker||(t._valueTracker=Ge(t))}function bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=je(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var s=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function _n(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=we(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ct(t,i){ht(t,i);var s=we(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,s):i.hasOwnProperty("defaultValue")&&wt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function wt(t,i,s){(i!=="number"||ut(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var We=Array.isArray;function D(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+we(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(We(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:we(s)}}function he(t,i){var s=we(i.value),l=we(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ke=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function $e(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function et(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function tt(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=et(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Oe=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,se=null,pe=null;function De(t){if(t=oo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=oa(i),Re(t.stateNode,t.type,i))}}function be(t){se?pe?pe.push(t):pe=[t]:se=t}function st(){if(se){var t=se,i=pe;if(pe=se=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Lt(t,i){return t(i)}function qt(){}var vt=!1;function En(t,i,s){if(vt)return t(i,s);vt=!0;try{return Lt(t,i,s)}finally{vt=!1,(se!==null||pe!==null)&&(qt(),st())}}function vn(t,i){var s=t.stateNode;if(s===null)return null;var l=oa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var $r=!1;if(d)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{$r=!1}function _i(t,i,s,l,c,h,M,N,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(s,J)}catch(_e){this.onError(_e)}}var vi=!1,Sr=null,yr=!1,Vi=null,ko={onError:function(t){vi=!0,Sr=t}};function Kr(t,i,s,l,c,h,M,N,O){vi=!1,Sr=null,_i.apply(ko,arguments)}function Bo(t,i,s,l,c,h,M,N,O){if(Kr.apply(this,arguments),vi){if(vi){var J=Sr;vi=!1,Sr=null}else throw Error(n(198));yr||(yr=!0,Vi=J)}}function ui(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function zo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ho(t){if(ui(t)!==t)throw Error(n(188))}function bl(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Ho(c),t;if(h===l)return Ho(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,N=c.child;N;){if(N===s){M=!0,s=c,l=h;break}if(N===l){M=!0,l=c,s=h;break}N=N.sibling}if(!M){for(N=h.child;N;){if(N===s){M=!0,s=h,l=c;break}if(N===l){M=!0,l=h,s=c;break}N=N.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Vo(t){return t=bl(t),t!==null?Go(t):null}function Go(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Go(t);if(i!==null)return i;t=t.sibling}return null}var Wo=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,G=e.unstable_shouldYield,te=e.unstable_requestPaint,q=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ke=e.unstable_LowPriority,nt=e.unstable_IdlePriority,Je=null,ze=null;function mt(t){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:_t,Bt=Math.log,It=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(Bt(t)/It|0)|0}var qe=64,zt=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function un(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var N=M&~c;N!==0?l=pt(N):(h&=M,h!==0&&(l=pt(h)))}else M=s&~c,M!==0?l=pt(M):h!==0&&(l=pt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-ot(i),c=1<<s,l|=t[s],i&=~c;return l}function Gi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ot(h),N=1<<M,O=c[M];O===-1?((N&s)===0||(N&l)!==0)&&(c[M]=Gi(N,i)):O<=i&&(t.expiredLanes|=N),h&=~N}}function xi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rt(){var t=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),t}function cn(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Jt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ot(i),t[i]=s}function on(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-ot(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function en(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ot(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var xt=0;function ci(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Gf,Dl,Wf,Xf,jf,Ll=!1,Xo=[],Wi=null,Xi=null,ji=null,Ws=new Map,Xs=new Map,Yi=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Ws.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(i.pointerId)}}function js(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=oo(i),i!==null&&Dl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function $m(t,i,s,l,c){switch(i){case"focusin":return Wi=js(Wi,t,i,s,l,c),!0;case"dragenter":return Xi=js(Xi,t,i,s,l,c),!0;case"mouseover":return ji=js(ji,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Ws.set(h,js(Ws.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Xs.set(h,js(Xs.get(h)||null,t,i,s,l,c)),!0}return!1}function qf(t){var i=Mr(t.target);if(i!==null){var s=ui(i);if(s!==null){if(i=s.tag,i===13){if(i=zo(s),i!==null){t.blockedOn=i,jf(t.priority,function(){Wf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ul(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Et=l,s.target.dispatchEvent(l),Et=null}else return i=oo(s),i!==null&&Dl(i),t.blockedOn=s,!1;i.shift()}return!0}function $f(t,i,s){jo(t)&&s.delete(i)}function Km(){Ll=!1,Wi!==null&&jo(Wi)&&(Wi=null),Xi!==null&&jo(Xi)&&(Xi=null),ji!==null&&jo(ji)&&(ji=null),Ws.forEach($f),Xs.forEach($f)}function Ys(t,i){t.blockedOn===i&&(t.blockedOn=null,Ll||(Ll=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Km)))}function qs(t){function i(c){return Ys(c,t)}if(0<Xo.length){Ys(Xo[0],t);for(var s=1;s<Xo.length;s++){var l=Xo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&Ys(Wi,t),Xi!==null&&Ys(Xi,t),ji!==null&&Ys(ji,t),Ws.forEach(i),Xs.forEach(i),s=0;s<Yi.length;s++)l=Yi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(s=Yi[0],s.blockedOn===null);)qf(s),s.blockedOn===null&&Yi.shift()}var Zr=P.ReactCurrentBatchConfig,Yo=!0;function Zm(t,i,s,l){var c=xt,h=Zr.transition;Zr.transition=null;try{xt=1,Nl(t,i,s,l)}finally{xt=c,Zr.transition=h}}function Qm(t,i,s,l){var c=xt,h=Zr.transition;Zr.transition=null;try{xt=4,Nl(t,i,s,l)}finally{xt=c,Zr.transition=h}}function Nl(t,i,s,l){if(Yo){var c=Ul(t,i,s,l);if(c===null)Zl(t,i,l,qo,s),Yf(t,l);else if($m(c,t,i,s,l))l.stopPropagation();else if(Yf(t,l),i&4&&-1<qm.indexOf(t)){for(;c!==null;){var h=oo(c);if(h!==null&&Gf(h),h=Ul(t,i,s,l),h===null&&Zl(t,i,l,qo,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else Zl(t,i,l,null,s)}}var qo=null;function Ul(t,i,s,l){if(qo=null,t=V(l),t=Mr(t),t!==null)if(i=ui(t),i===null)t=null;else if(s=i.tag,s===13){if(t=zo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return qo=t,null}function Kf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Me:return 1;case Ce:return 4;case Le:case ke:return 16;case nt:return 536870912;default:return 16}default:return 16}}var qi=null,Il=null,$o=null;function Zf(){if($o)return $o;var t,i=Il,s=i.length,l,c="value"in qi?qi.value:qi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return $o=c.slice(t,1<l?1-l:void 0)}function Ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Qf(){return!1}function Un(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zo:Qf,this.isPropagationStopped=Qf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Un(Qr),$s=oe({},Qr,{view:0,detail:0}),Jm=Un($s),Ol,kl,Ks,Qo=oe({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(Ol=t.screenX-Ks.screenX,kl=t.screenY-Ks.screenY):kl=Ol=0,Ks=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:kl}}),Jf=Un(Qo),eg=oe({},Qo,{dataTransfer:0}),tg=Un(eg),ng=oe({},$s,{relatedTarget:0}),Bl=Un(ng),ig=oe({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Un(ig),sg=oe({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=Un(sg),ag=oe({},Qr,{data:0}),ed=Un(ag),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=cg[t])?!!i[t]:!1}function zl(){return fg}var dg=oe({},$s,{key:function(t){if(t.key){var i=lg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hg=Un(dg),pg=oe({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=Un(pg),mg=oe({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),gg=Un(mg),_g=oe({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=Un(_g),xg=oe({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=Un(xg),yg=[9,13,27,32],Hl=d&&"CompositionEvent"in window,Zs=null;d&&"documentMode"in document&&(Zs=document.documentMode);var Mg=d&&"TextEvent"in window&&!Zs,nd=d&&(!Hl||Zs&&8<Zs&&11>=Zs),id=" ",rd=!1;function sd(t,i){switch(t){case"keyup":return yg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Eg(t,i){switch(t){case"compositionend":return od(i);case"keypress":return i.which!==32?null:(rd=!0,id);case"textInput":return t=i.data,t===id&&rd?null:t;default:return null}}function Tg(t,i){if(Jr)return t==="compositionend"||!Hl&&sd(t,i)?(t=Zf(),$o=Il=qi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nd&&i.locale!=="ko"?null:i.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!wg[t.type]:i==="textarea"}function ld(t,i,s,l){be(l),i=ia(i,"onChange"),0<i.length&&(s=new Fl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Qs=null,Js=null;function Ag(t){Ad(t,0)}function Jo(t){var i=rs(t);if(bt(i))return t}function Rg(t,i){if(t==="change")return i}var ud=!1;if(d){var Vl;if(d){var Gl="oninput"in document;if(!Gl){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),Gl=typeof cd.oninput=="function"}Vl=Gl}else Vl=!1;ud=Vl&&(!document.documentMode||9<document.documentMode)}function fd(){Qs&&(Qs.detachEvent("onpropertychange",dd),Js=Qs=null)}function dd(t){if(t.propertyName==="value"&&Jo(Js)){var i=[];ld(i,Js,t,V(t)),En(Ag,i)}}function Cg(t,i,s){t==="focusin"?(fd(),Qs=i,Js=s,Qs.attachEvent("onpropertychange",dd)):t==="focusout"&&fd()}function Pg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(Js)}function bg(t,i){if(t==="click")return Jo(i)}function Dg(t,i){if(t==="input"||t==="change")return Jo(i)}function Lg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Lg;function eo(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function hd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pd(t,i){var s=hd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=hd(s)}}function md(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?md(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function gd(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=ut(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ng(t){var i=gd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&md(s.ownerDocument.documentElement,s)){if(l!==null&&Wl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=pd(s,h);var M=pd(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ug=d&&"documentMode"in document&&11>=document.documentMode,es=null,Xl=null,to=null,jl=!1;function _d(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;jl||es==null||es!==ut(l)||(l=es,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),to&&eo(to,l)||(to=l,l=ia(Xl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=es)))}function ea(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ts={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Yl={},vd={};d&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function ta(t){if(Yl[t])return Yl[t];if(!ts[t])return t;var i=ts[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in vd)return Yl[t]=i[s];return t}var xd=ta("animationend"),Sd=ta("animationiteration"),yd=ta("animationstart"),Md=ta("transitionend"),Ed=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Ed.set(t,i),u(i,[t])}for(var ql=0;ql<Td.length;ql++){var $l=Td[ql],Ig=$l.toLowerCase(),Fg=$l[0].toUpperCase()+$l.slice(1);$i(Ig,"on"+Fg)}$i(xd,"onAnimationEnd"),$i(Sd,"onAnimationIteration"),$i(yd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Md,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function wd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Bo(l,i,void 0,t),t.currentTarget=null}function Ad(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var N=l[M],O=N.instance,J=N.currentTarget;if(N=N.listener,O!==h&&c.isPropagationStopped())break e;wd(c,N,J),h=O}else for(M=0;M<l.length;M++){if(N=l[M],O=N.instance,J=N.currentTarget,N=N.listener,O!==h&&c.isPropagationStopped())break e;wd(c,N,J),h=O}}}if(yr)throw t=Vi,yr=!1,Vi=null,t}function Nt(t,i){var s=i[iu];s===void 0&&(s=i[iu]=new Set);var l=t+"__bubble";s.has(l)||(Rd(i,t,2,!1),s.add(l))}function Kl(t,i,s){var l=0;i&&(l|=4),Rd(s,t,l,i)}var na="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[na]){t[na]=!0,r.forEach(function(s){s!=="selectionchange"&&(Og.has(s)||Kl(s,!1,t),Kl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[na]||(i[na]=!0,Kl("selectionchange",!1,i))}}function Rd(t,i,s,l){switch(Kf(i)){case 1:var c=Zm;break;case 4:c=Qm;break;default:c=Nl}s=c.bind(null,i,s,t),c=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function Zl(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var N=l.stateNode.containerInfo;if(N===c||N.nodeType===8&&N.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;N!==null;){if(M=Mr(N),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}N=N.parentNode}}l=l.return}En(function(){var J=h,_e=V(s),ye=[];e:{var ge=Ed.get(t);if(ge!==void 0){var Ne=Fl,Be=t;switch(t){case"keypress":if(Ko(s)===0)break e;case"keydown":case"keyup":Ne=hg;break;case"focusin":Be="focus",Ne=Bl;break;case"focusout":Be="blur",Ne=Bl;break;case"beforeblur":case"afterblur":Ne=Bl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=gg;break;case xd:case Sd:case yd:Ne=rg;break;case Md:Ne=vg;break;case"scroll":Ne=Jm;break;case"wheel":Ne=Sg;break;case"copy":case"cut":case"paste":Ne=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=td}var He=(i&4)!==0,Vt=!He&&t==="scroll",Y=He?ge!==null?ge+"Capture":null:ge;He=[];for(var H=J,K;H!==null;){K=H;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,Y!==null&&(Te=vn(H,Y),Te!=null&&He.push(ro(H,Te,K)))),Vt)break;H=H.return}0<He.length&&(ge=new Ne(ge,Be,null,s,_e),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",ge&&s!==Et&&(Be=s.relatedTarget||s.fromElement)&&(Mr(Be)||Be[Si]))break e;if((Ne||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(Be=s.relatedTarget||s.toElement,Ne=J,Be=Be?Mr(Be):null,Be!==null&&(Vt=ui(Be),Be!==Vt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ne=null,Be=J),Ne!==Be)){if(He=Jf,Te="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(He=td,Te="onPointerLeave",Y="onPointerEnter",H="pointer"),Vt=Ne==null?ge:rs(Ne),K=Be==null?ge:rs(Be),ge=new He(Te,H+"leave",Ne,s,_e),ge.target=Vt,ge.relatedTarget=K,Te=null,Mr(_e)===J&&(He=new He(Y,H+"enter",Be,s,_e),He.target=K,He.relatedTarget=Vt,Te=He),Vt=Te,Ne&&Be)t:{for(He=Ne,Y=Be,H=0,K=He;K;K=ns(K))H++;for(K=0,Te=Y;Te;Te=ns(Te))K++;for(;0<H-K;)He=ns(He),H--;for(;0<K-H;)Y=ns(Y),K--;for(;H--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=ns(He),Y=ns(Y)}He=null}else He=null;Ne!==null&&Cd(ye,ge,Ne,He,!1),Be!==null&&Vt!==null&&Cd(ye,Vt,Be,He,!0)}}e:{if(ge=J?rs(J):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Xe=Rg;else if(ad(ge))if(ud)Xe=Dg;else{Xe=Pg;var Ze=Cg}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=bg);if(Xe&&(Xe=Xe(t,J))){ld(ye,Xe,s,_e);break e}Ze&&Ze(t,ge,J),t==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&wt(ge,"number",ge.value)}switch(Ze=J?rs(J):window,t){case"focusin":(ad(Ze)||Ze.contentEditable==="true")&&(es=Ze,Xl=J,to=null);break;case"focusout":to=Xl=es=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,_d(ye,s,_e);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":_d(ye,s,_e)}var Qe;if(Hl)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Jr?sd(t,s)&&(it="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(it="onCompositionStart");it&&(nd&&s.locale!=="ko"&&(Jr||it!=="onCompositionStart"?it==="onCompositionEnd"&&Jr&&(Qe=Zf()):(qi=_e,Il="value"in qi?qi.value:qi.textContent,Jr=!0)),Ze=ia(J,it),0<Ze.length&&(it=new ed(it,t,null,s,_e),ye.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=od(s),Qe!==null&&(it.data=Qe)))),(Qe=Mg?Eg(t,s):Tg(t,s))&&(J=ia(J,"onBeforeInput"),0<J.length&&(_e=new ed("onBeforeInput","beforeinput",null,s,_e),ye.push({event:_e,listeners:J}),_e.data=Qe))}Ad(ye,i)})}function ro(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ia(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=vn(t,s),h!=null&&l.unshift(ro(t,h,c)),h=vn(t,i),h!=null&&l.push(ro(t,h,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var N=s,O=N.alternate,J=N.stateNode;if(O!==null&&O===l)break;N.tag===5&&J!==null&&(N=J,c?(O=vn(s,h),O!=null&&M.unshift(ro(s,O,N))):c||(O=vn(s,h),O!=null&&M.push(ro(s,O,N)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var kg=/\r\n?/g,Bg=/\u0000|\uFFFD/g;function Pd(t){return(typeof t=="string"?t:""+t).replace(kg,`
`).replace(Bg,"")}function ra(t,i,s){if(i=Pd(i),Pd(t)!==i&&s)throw Error(n(425))}function sa(){}var Ql=null,Jl=null;function eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,bd=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof bd<"u"?function(t){return bd.resolve(null).then(t).catch(Vg)}:tu;function Vg(t){setTimeout(function(){throw t})}function nu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),qs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);qs(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Dd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),fi="__reactFiber$"+is,so="__reactProps$"+is,Si="__reactContainer$"+is,iu="__reactEvents$"+is,Gg="__reactListeners$"+is,Wg="__reactHandles$"+is;function Mr(t){var i=t[fi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Si]||s[fi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Dd(t);t!==null;){if(s=t[fi])return s;t=Dd(t)}return i}t=s,s=t.parentNode}return null}function oo(t){return t=t[fi]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function oa(t){return t[so]||null}var ru=[],ss=-1;function Zi(t){return{current:t}}function Ut(t){0>ss||(t.current=ru[ss],ru[ss]=null,ss--)}function Dt(t,i){ss++,ru[ss]=t.current,t.current=i}var Qi={},fn=Zi(Qi),Tn=Zi(!1),Er=Qi;function os(t,i){var s=t.type.contextTypes;if(!s)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function wn(t){return t=t.childContextTypes,t!=null}function aa(){Ut(Tn),Ut(fn)}function Ld(t,i,s){if(fn.current!==Qi)throw Error(n(168));Dt(fn,i),Dt(Tn,s)}function Nd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,xe(t)||"Unknown",c));return oe({},s,l)}function la(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Er=fn.current,Dt(fn,t),Dt(Tn,Tn.current),!0}function Ud(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Nd(t,i,Er),l.__reactInternalMemoizedMergedChildContext=t,Ut(Tn),Ut(fn),Dt(fn,t)):Ut(Tn),Dt(Tn,s)}var yi=null,ua=!1,su=!1;function Id(t){yi===null?yi=[t]:yi.push(t)}function Xg(t){ua=!0,Id(t)}function Ji(){if(!su&&yi!==null){su=!0;var t=0,i=xt;try{var s=yi;for(xt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}yi=null,ua=!1}catch(c){throw yi!==null&&(yi=yi.slice(t+1)),Wo(Me,Ji),c}finally{xt=i,su=!1}}return null}var as=[],ls=0,ca=null,fa=0,zn=[],Hn=0,Tr=null,Mi=1,Ei="";function wr(t,i){as[ls++]=fa,as[ls++]=ca,ca=t,fa=i}function Fd(t,i,s){zn[Hn++]=Mi,zn[Hn++]=Ei,zn[Hn++]=Tr,Tr=t;var l=Mi;t=Ei;var c=32-ot(l)-1;l&=~(1<<c),s+=1;var h=32-ot(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Mi=1<<32-ot(i)+c|s<<c|l,Ei=h+t}else Mi=1<<h|s<<c|l,Ei=t}function ou(t){t.return!==null&&(wr(t,1),Fd(t,1,0))}function au(t){for(;t===ca;)ca=as[--ls],as[ls]=null,fa=as[--ls],as[ls]=null;for(;t===Tr;)Tr=zn[--Hn],zn[Hn]=null,Ei=zn[--Hn],zn[Hn]=null,Mi=zn[--Hn],zn[Hn]=null}var In=null,Fn=null,Ft=!1,Qn=null;function Od(t,i){var s=Xn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function kd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Fn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Tr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Xn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,In=t,Fn=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(Ft){var i=Fn;if(i){var s=i;if(!kd(t,i)){if(lu(t))throw Error(n(418));i=Ki(s.nextSibling);var l=In;i&&kd(t,i)?Od(l,s):(t.flags=t.flags&-4097|2,Ft=!1,In=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,In=t}}}function Bd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function da(t){if(t!==In)return!1;if(!Ft)return Bd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!eu(t.type,t.memoizedProps)),i&&(i=Fn)){if(lu(t))throw zd(),Error(n(418));for(;i;)Od(t,i),i=Ki(i.nextSibling)}if(Bd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Fn=Ki(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=In?Ki(t.stateNode.nextSibling):null;return!0}function zd(){for(var t=Fn;t;)t=Ki(t.nextSibling)}function us(){Fn=In=null,Ft=!1}function cu(t){Qn===null?Qn=[t]:Qn.push(t)}var jg=P.ReactCurrentBatchConfig;function ao(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var N=c.refs;M===null?delete N[h]:N[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ha(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Hd(t){var i=t._init;return i(t._payload)}function Vd(t){function i(Y,H){if(t){var K=Y.deletions;K===null?(Y.deletions=[H],Y.flags|=16):K.push(H)}}function s(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function c(Y,H){return Y=ar(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<H?(Y.flags|=2,H):K):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,H,K,Te){return H===null||H.tag!==6?(H=tc(K,Y.mode,Te),H.return=Y,H):(H=c(H,K),H.return=Y,H)}function O(Y,H,K,Te){var Xe=K.type;return Xe===F?_e(Y,H,K.props.children,Te,K.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&Hd(Xe)===H.type)?(Te=c(H,K.props),Te.ref=ao(Y,H,K),Te.return=Y,Te):(Te=Oa(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=ao(Y,H,K),Te.return=Y,Te)}function J(Y,H,K,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=nc(K,Y.mode,Te),H.return=Y,H):(H=c(H,K.children||[]),H.return=Y,H)}function _e(Y,H,K,Te,Xe){return H===null||H.tag!==7?(H=Nr(K,Y.mode,Te,Xe),H.return=Y,H):(H=c(H,K),H.return=Y,H)}function ye(Y,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=tc(""+H,Y.mode,K),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case W:return K=Oa(H.type,H.key,H.props,null,Y.mode,K),K.ref=ao(Y,null,H),K.return=Y,K;case z:return H=nc(H,Y.mode,K),H.return=Y,H;case ae:var Te=H._init;return ye(Y,Te(H._payload),K)}if(We(H)||re(H))return H=Nr(H,Y.mode,K,null),H.return=Y,H;ha(Y,H)}return null}function ge(Y,H,K,Te){var Xe=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:N(Y,H,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case W:return K.key===Xe?O(Y,H,K,Te):null;case z:return K.key===Xe?J(Y,H,K,Te):null;case ae:return Xe=K._init,ge(Y,H,Xe(K._payload),Te)}if(We(K)||re(K))return Xe!==null?null:_e(Y,H,K,Te,null);ha(Y,K)}return null}function Ne(Y,H,K,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(K)||null,N(H,Y,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case W:return Y=Y.get(Te.key===null?K:Te.key)||null,O(H,Y,Te,Xe);case z:return Y=Y.get(Te.key===null?K:Te.key)||null,J(H,Y,Te,Xe);case ae:var Ze=Te._init;return Ne(Y,H,K,Ze(Te._payload),Xe)}if(We(Te)||re(Te))return Y=Y.get(K)||null,_e(H,Y,Te,Xe,null);ha(H,Te)}return null}function Be(Y,H,K,Te){for(var Xe=null,Ze=null,Qe=H,it=H=0,rn=null;Qe!==null&&it<K.length;it++){Qe.index>it?(rn=Qe,Qe=null):rn=Qe.sibling;var yt=ge(Y,Qe,K[it],Te);if(yt===null){Qe===null&&(Qe=rn);break}t&&Qe&&yt.alternate===null&&i(Y,Qe),H=h(yt,H,it),Ze===null?Xe=yt:Ze.sibling=yt,Ze=yt,Qe=rn}if(it===K.length)return s(Y,Qe),Ft&&wr(Y,it),Xe;if(Qe===null){for(;it<K.length;it++)Qe=ye(Y,K[it],Te),Qe!==null&&(H=h(Qe,H,it),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Ft&&wr(Y,it),Xe}for(Qe=l(Y,Qe);it<K.length;it++)rn=Ne(Qe,Y,it,K[it],Te),rn!==null&&(t&&rn.alternate!==null&&Qe.delete(rn.key===null?it:rn.key),H=h(rn,H,it),Ze===null?Xe=rn:Ze.sibling=rn,Ze=rn);return t&&Qe.forEach(function(lr){return i(Y,lr)}),Ft&&wr(Y,it),Xe}function He(Y,H,K,Te){var Xe=re(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ze=Xe=null,Qe=H,it=H=0,rn=null,yt=K.next();Qe!==null&&!yt.done;it++,yt=K.next()){Qe.index>it?(rn=Qe,Qe=null):rn=Qe.sibling;var lr=ge(Y,Qe,yt.value,Te);if(lr===null){Qe===null&&(Qe=rn);break}t&&Qe&&lr.alternate===null&&i(Y,Qe),H=h(lr,H,it),Ze===null?Xe=lr:Ze.sibling=lr,Ze=lr,Qe=rn}if(yt.done)return s(Y,Qe),Ft&&wr(Y,it),Xe;if(Qe===null){for(;!yt.done;it++,yt=K.next())yt=ye(Y,yt.value,Te),yt!==null&&(H=h(yt,H,it),Ze===null?Xe=yt:Ze.sibling=yt,Ze=yt);return Ft&&wr(Y,it),Xe}for(Qe=l(Y,Qe);!yt.done;it++,yt=K.next())yt=Ne(Qe,Y,it,yt.value,Te),yt!==null&&(t&&yt.alternate!==null&&Qe.delete(yt.key===null?it:yt.key),H=h(yt,H,it),Ze===null?Xe=yt:Ze.sibling=yt,Ze=yt);return t&&Qe.forEach(function(w_){return i(Y,w_)}),Ft&&wr(Y,it),Xe}function Vt(Y,H,K,Te){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case W:e:{for(var Xe=K.key,Ze=H;Ze!==null;){if(Ze.key===Xe){if(Xe=K.type,Xe===F){if(Ze.tag===7){s(Y,Ze.sibling),H=c(Ze,K.props.children),H.return=Y,Y=H;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&Hd(Xe)===Ze.type){s(Y,Ze.sibling),H=c(Ze,K.props),H.ref=ao(Y,Ze,K),H.return=Y,Y=H;break e}s(Y,Ze);break}else i(Y,Ze);Ze=Ze.sibling}K.type===F?(H=Nr(K.props.children,Y.mode,Te,K.key),H.return=Y,Y=H):(Te=Oa(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=ao(Y,H,K),Te.return=Y,Y=Te)}return M(Y);case z:e:{for(Ze=K.key;H!==null;){if(H.key===Ze)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){s(Y,H.sibling),H=c(H,K.children||[]),H.return=Y,Y=H;break e}else{s(Y,H);break}else i(Y,H);H=H.sibling}H=nc(K,Y.mode,Te),H.return=Y,Y=H}return M(Y);case ae:return Ze=K._init,Vt(Y,H,Ze(K._payload),Te)}if(We(K))return Be(Y,H,K,Te);if(re(K))return He(Y,H,K,Te);ha(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(s(Y,H.sibling),H=c(H,K),H.return=Y,Y=H):(s(Y,H),H=tc(K,Y.mode,Te),H.return=Y,Y=H),M(Y)):s(Y,H)}return Vt}var cs=Vd(!0),Gd=Vd(!1),pa=Zi(null),ma=null,fs=null,fu=null;function du(){fu=fs=ma=null}function hu(t){var i=pa.current;Ut(pa),t._currentValue=i}function pu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ds(t,i){ma=t,fu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(ma===null)throw Error(n(308));fs=t,ma.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Ar=null;function mu(t){Ar===null?Ar=[t]:Ar.push(t)}function Wd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,mu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ti(t,l)}function Ti(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var er=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ti(t,s)}return c=l.interleaved,c===null?(i.next=i,mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ti(t,s)}function ga(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,en(t,s)}}function jd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function _a(t,i,s,l){var c=t.updateQueue;er=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,N=c.shared.pending;if(N!==null){c.shared.pending=null;var O=N,J=O.next;O.next=null,M===null?h=J:M.next=J,M=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,N=_e.lastBaseUpdate,N!==M&&(N===null?_e.firstBaseUpdate=J:N.next=J,_e.lastBaseUpdate=O))}if(h!==null){var ye=c.baseState;M=0,_e=J=O=null,N=h;do{var ge=N.lane,Ne=N.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ne,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Be=t,He=N;switch(ge=i,Ne=s,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ye=Be.call(Ne,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(Ne,ye,ge):Be,ge==null)break e;ye=oe({},ye,ge);break e;case 2:er=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[N]:ge.push(N))}else Ne={eventTime:Ne,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},_e===null?(J=_e=Ne,O=ye):_e=_e.next=Ne,M|=ge;if(N=N.next,N===null){if(N=c.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(_e===null&&(O=ye),c.baseState=O,c.firstBaseUpdate=J,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=ye}}function Yd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var lo={},di=Zi(lo),uo=Zi(lo),co=Zi(lo);function Rr(t){if(t===lo)throw Error(n(174));return t}function _u(t,i){switch(Dt(co,i),Dt(uo,t),Dt(di,lo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Ut(di),Dt(di,i)}function hs(){Ut(di),Ut(uo),Ut(co)}function qd(t){Rr(co.current);var i=Rr(di.current),s=Ve(i,t.type);i!==s&&(Dt(uo,t),Dt(di,s))}function vu(t){uo.current===t&&(Ut(di),Ut(uo))}var Ot=Zi(0);function va(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function Su(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var xa=P.ReactCurrentDispatcher,yu=P.ReactCurrentBatchConfig,Cr=0,kt=null,$t=null,tn=null,Sa=!1,fo=!1,ho=0,Yg=0;function dn(){throw Error(n(321))}function Mu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Zn(t[s],i[s]))return!1;return!0}function Eu(t,i,s,l,c,h){if(Cr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xa.current=t===null||t.memoizedState===null?Zg:Qg,t=s(l,c),fo){h=0;do{if(fo=!1,ho=0,25<=h)throw Error(n(301));h+=1,tn=$t=null,i.updateQueue=null,xa.current=Jg,t=s(l,c)}while(fo)}if(xa.current=Ea,i=$t!==null&&$t.next!==null,Cr=0,tn=$t=kt=null,Sa=!1,i)throw Error(n(300));return t}function Tu(){var t=ho!==0;return ho=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?kt.memoizedState=tn=t:tn=tn.next=t,tn}function Gn(){if($t===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=tn===null?kt.memoizedState:tn.next;if(i!==null)tn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?kt.memoizedState=tn=t:tn=tn.next=t}return tn}function po(t,i){return typeof i=="function"?i(t):i}function wu(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=$t,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var N=M=null,O=null,J=h;do{var _e=J.lane;if((Cr&_e)===_e)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var ye={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(N=O=ye,M=l):O=O.next=ye,kt.lanes|=_e,Pr|=_e}J=J.next}while(J!==null&&J!==h);O===null?M=l:O.next=N,Zn(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Au(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Zn(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function $d(){}function Kd(t,i){var s=kt,l=Gn(),c=i(),h=!Zn(l.memoizedState,c);if(h&&(l.memoizedState=c,An=!0),l=l.queue,Ru(Jd.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,mo(9,Qd.bind(null,s,l,c,i),void 0,null),nn===null)throw Error(n(349));(Cr&30)!==0||Zd(s,i,c)}return c}function Zd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Qd(t,i,s,l){i.value=s,i.getSnapshot=l,eh(i)&&th(t)}function Jd(t,i,s){return s(function(){eh(i)&&th(t)})}function eh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Zn(t,s)}catch{return!0}}function th(t){var i=Ti(t,1);i!==null&&ni(i,t,1,-1)}function nh(t){var i=hi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},i.queue=t,t=t.dispatch=Kg.bind(null,kt,t),[i.memoizedState,t]}function mo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function ih(){return Gn().memoizedState}function ya(t,i,s,l){var c=hi();kt.flags|=t,c.memoizedState=mo(1|i,s,void 0,l===void 0?null:l)}function Ma(t,i,s,l){var c=Gn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&Mu(l,M.deps)){c.memoizedState=mo(i,s,h,l);return}}kt.flags|=t,c.memoizedState=mo(1|i,s,h,l)}function rh(t,i){return ya(8390656,8,t,i)}function Ru(t,i){return Ma(2048,8,t,i)}function sh(t,i){return Ma(4,2,t,i)}function oh(t,i){return Ma(4,4,t,i)}function ah(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function lh(t,i,s){return s=s!=null?s.concat([t]):null,Ma(4,4,ah.bind(null,i,t),s)}function Cu(){}function uh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function ch(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function fh(t,i,s){return(Cr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=s):(Zn(s,i)||(s=Rt(),kt.lanes|=s,Pr|=s,t.baseState=!0),i)}function qg(t,i){var s=xt;xt=s!==0&&4>s?s:4,t(!0);var l=yu.transition;yu.transition={};try{t(!1),i()}finally{xt=s,yu.transition=l}}function dh(){return Gn().memoizedState}function $g(t,i,s){var l=sr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},hh(t))ph(i,s);else if(s=Wd(t,i,s,l),s!==null){var c=yn();ni(s,t,l,c),mh(s,i,l)}}function Kg(t,i,s){var l=sr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(hh(t))ph(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,N=h(M,s);if(c.hasEagerState=!0,c.eagerState=N,Zn(N,M)){var O=i.interleaved;O===null?(c.next=c,mu(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}s=Wd(t,i,c,l),s!==null&&(c=yn(),ni(s,t,l,c),mh(s,i,l))}}function hh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function ph(t,i){fo=Sa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function mh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,en(t,s)}}var Ea={readContext:Vn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},Zg={readContext:Vn,useCallback:function(t,i){return hi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:rh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,ya(4194308,4,ah.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ya(4194308,4,t,i)},useInsertionEffect:function(t,i){return ya(4,2,t,i)},useMemo:function(t,i){var s=hi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=hi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=$g.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=hi();return t={current:t},i.memoizedState=t},useState:nh,useDebugValue:Cu,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=nh(!1),i=t[0];return t=qg.bind(null,t[1]),hi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=kt,c=hi();if(Ft){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),nn===null)throw Error(n(349));(Cr&30)!==0||Zd(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,rh(Jd.bind(null,l,h,t),[t]),l.flags|=2048,mo(9,Qd.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=hi(),i=nn.identifierPrefix;if(Ft){var s=Ei,l=Mi;s=(l&~(1<<32-ot(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=ho++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Yg++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Qg={readContext:Vn,useCallback:uh,useContext:Vn,useEffect:Ru,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:ch,useReducer:wu,useRef:ih,useState:function(){return wu(po)},useDebugValue:Cu,useDeferredValue:function(t){var i=Gn();return fh(i,$t.memoizedState,t)},useTransition:function(){var t=wu(po)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:$d,useSyncExternalStore:Kd,useId:dh,unstable_isNewReconciler:!1},Jg={readContext:Vn,useCallback:uh,useContext:Vn,useEffect:Ru,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:ch,useReducer:Au,useRef:ih,useState:function(){return Au(po)},useDebugValue:Cu,useDeferredValue:function(t){var i=Gn();return $t===null?i.memoizedState=t:fh(i,$t.memoizedState,t)},useTransition:function(){var t=Au(po)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:$d,useSyncExternalStore:Kd,useId:dh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Pu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:oe({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ta={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=yn(),c=sr(t),h=wi(l,c);h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(ni(i,t,c,l),ga(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=yn(),c=sr(t),h=wi(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(ni(i,t,c,l),ga(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yn(),l=sr(t),c=wi(s,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(ni(i,t,l,s),ga(i,t,l))}};function gh(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!eo(s,l)||!eo(c,h):!0}function _h(t,i,s){var l=!1,c=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(c=wn(i)?Er:fn.current,l=i.contextTypes,h=(l=l!=null)?os(t,c):Qi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ta,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function vh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Ta.enqueueReplaceState(i,i.state,null)}function bu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},gu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Vn(h):(h=wn(i)?Er:fn.current,c.context=os(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Pu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ta.enqueueReplaceState(c,c.state,null),_a(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var s="",l=i;do s+=me(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Du(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Lu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var e_=typeof WeakMap=="function"?WeakMap:Map;function xh(t,i,s){s=wi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Da||(Da=!0,Yu=l),Lu(t,i)},s}function Sh(t,i,s){s=wi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Lu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Lu(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function yh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new e_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=p_.bind(null,t,i,s),i.then(t,t))}function Mh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Eh(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=wi(-1,1),i.tag=2,tr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var t_=P.ReactCurrentOwner,An=!1;function Sn(t,i,s,l){i.child=t===null?Gd(i,null,s,l):cs(i,t.child,s,l)}function Th(t,i,s,l,c){s=s.render;var h=i.ref;return ds(i,c),l=Eu(t,i,s,l,h,c),s=Tu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(Ft&&s&&ou(i),i.flags|=1,Sn(t,i,l,c),i.child)}function wh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Ah(t,i,h,l,c)):(t=Oa(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:eo,s(M,l)&&t.ref===i.ref)return Ai(t,i,c)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Ah(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(eo(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Ai(t,i,c)}return Nu(t,i,s,l,c)}function Rh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(gs,On),On|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(gs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Dt(gs,On),On|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Dt(gs,On),On|=l;return Sn(t,i,c,s),i.child}function Ch(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Nu(t,i,s,l,c){var h=wn(s)?Er:fn.current;return h=os(i,h),ds(i,c),s=Eu(t,i,s,l,h,c),l=Tu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(Ft&&l&&ou(i),i.flags|=1,Sn(t,i,s,c),i.child)}function Ph(t,i,s,l,c){if(wn(s)){var h=!0;la(i)}else h=!1;if(ds(i,c),i.stateNode===null)Aa(t,i),_h(i,s,l),bu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var O=M.context,J=s.contextType;typeof J=="object"&&J!==null?J=Vn(J):(J=wn(s)?Er:fn.current,J=os(i,J));var _e=s.getDerivedStateFromProps,ye=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==l||O!==J)&&vh(i,M,l,J),er=!1;var ge=i.memoizedState;M.state=ge,_a(i,l,M,c),O=i.memoizedState,N!==l||ge!==O||Tn.current||er?(typeof _e=="function"&&(Pu(i,s,_e,l),O=i.memoizedState),(N=er||gh(i,s,N,l,ge,O,J))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=J,l=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Xd(t,i),N=i.memoizedProps,J=i.type===i.elementType?N:Jn(i.type,N),M.props=J,ye=i.pendingProps,ge=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Vn(O):(O=wn(s)?Er:fn.current,O=os(i,O));var Ne=s.getDerivedStateFromProps;(_e=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==ye||ge!==O)&&vh(i,M,l,O),er=!1,ge=i.memoizedState,M.state=ge,_a(i,l,M,c);var Be=i.memoizedState;N!==ye||ge!==Be||Tn.current||er?(typeof Ne=="function"&&(Pu(i,s,Ne,l),Be=i.memoizedState),(J=er||gh(i,s,J,l,ge,Be,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=J):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Uu(t,i,s,l,h,c)}function Uu(t,i,s,l,c,h){Ch(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Ud(i,s,!1),Ai(t,i,h);l=i.stateNode,t_.current=i;var N=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=cs(i,t.child,null,h),i.child=cs(i,null,N,h)):Sn(t,i,N,h),i.memoizedState=l.state,c&&Ud(i,s,!0),i.child}function bh(t){var i=t.stateNode;i.pendingContext?Ld(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ld(t,i.context,!1),_u(t,i.containerInfo)}function Dh(t,i,s,l,c){return us(),cu(c),i.flags|=256,Sn(t,i,s,l),i.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lh(t,i,s){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=t!==null&&t.memoizedState===null?!1:(c&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(Ot,c&1),t===null)return uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=Nr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fu(s),i.memoizedState=Iu,t):Ou(i,M));if(c=t.memoizedState,c!==null&&(N=c.dehydrated,N!==null))return n_(t,i,M,l,N,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,N=c.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=ar(c,O),l.subtreeFlags=c.subtreeFlags&14680064),N!==null?h=ar(N,h):(h=Nr(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Fu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Iu,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Ou(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function wa(t,i,s,l){return l!==null&&cu(l),cs(i,t.child,null,s),t=Ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function n_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Du(Error(n(422))),wa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=Nr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,M),i.child.memoizedState=Fu(M),i.memoizedState=Iu,h);if((i.mode&1)===0)return wa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(n(419)),l=Du(h,l,void 0),wa(t,i,M,l)}if(N=(M&t.childLanes)!==0,An||N){if(l=nn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ti(t,c),ni(l,t,c,-1))}return Ju(),l=Du(Error(n(421))),wa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=m_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Fn=Ki(c.nextSibling),In=i,Ft=!0,Qn=null,t!==null&&(zn[Hn++]=Mi,zn[Hn++]=Ei,zn[Hn++]=Tr,Mi=t.id,Ei=t.overflow,Tr=i),i=Ou(i,l.children),i.flags|=4096,i)}function Nh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pu(t.return,i,s)}function ku(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Uh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,s),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nh(t,s,i);else if(t.tag===19)Nh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&va(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),ku(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&va(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}ku(i,!0,s,null,h);break;case"together":ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=ar(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ar(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function i_(t,i,s){switch(i.tag){case 3:bh(i),us();break;case 5:qd(i);break;case 1:wn(i.type)&&la(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(pa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(Ot,Ot.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Lh(t,i,s):(Dt(Ot,Ot.current&1),t=Ai(t,i,s),t!==null?t.sibling:null);Dt(Ot,Ot.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Uh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Rh(t,i,s)}return Ai(t,i,s)}var Ih,Bu,Fh,Oh;Ih=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Bu=function(){},Fh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(di.current);var h=null;switch(s){case"input":c=k(t,c),l=k(t,l),h=[];break;case"select":c=oe({},c,{value:void 0}),l=oe({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=sa)}ft(s,l);var M;s=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var N=c[J];for(M in N)N.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var O=l[J];if(N=c!=null?c[J]:void 0,l.hasOwnProperty(J)&&O!==N&&(O!=null||N!=null))if(J==="style")if(N){for(M in N)!N.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&N[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(h||(h=[]),h.push(J,s)),s=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,N=N?N.__html:void 0,O!=null&&N!==O&&(h=h||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Nt("scroll",t),h||N===O||(h=[])):(h=h||[]).push(J,O))}s&&(h=h||[]).push("style",s);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},Oh=function(t,i,s,l){s!==l&&(i.flags|=4)};function go(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function r_(t,i,s){var l=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return wn(i.type)&&aa(),hn(i),null;case 3:return l=i.stateNode,hs(),Ut(Tn),Ut(fn),Su(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(Ku(Qn),Qn=null))),Bu(t,i),hn(i),null;case 5:vu(i);var c=Rr(co.current);if(s=i.type,t!==null&&i.stateNode!=null)Fh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Rr(di.current),da(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[fi]=i,l[so]=h,t=(i.mode&1)!==0,s){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(c=0;c<no.length;c++)Nt(no[c],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":_n(l,h),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",l);break;case"textarea":Z(l,h),Nt("invalid",l)}ft(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var N=h[M];M==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,N,t),c=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,N,t),c=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Nt("scroll",l)}switch(s){case"input":Pt(l),Ye(l,h,!0);break;case"textarea":Pt(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=sa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[fi]=i,t[so]=l,Ih(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(s,l),s){case"dialog":Nt("cancel",t),Nt("close",t),c=l;break;case"iframe":case"object":case"embed":Nt("load",t),c=l;break;case"video":case"audio":for(c=0;c<no.length;c++)Nt(no[c],t);c=l;break;case"source":Nt("error",t),c=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),c=l;break;case"details":Nt("toggle",t),c=l;break;case"input":_n(t,l),c=k(t,l),Nt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=oe({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":Z(t,l),c=E(t,l),Nt("invalid",t);break;default:c=l}ft(s,c),N=c;for(h in N)if(N.hasOwnProperty(h)){var O=N[h];h==="style"?tt(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ke(t,O)):h==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&$e(t,O):typeof O=="number"&&$e(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Nt("scroll",t):O!=null&&L(t,h,O,M))}switch(s){case"input":Pt(t),Ye(t,l,!1);break;case"textarea":Pt(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?D(t,!!l.multiple,h,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=sa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)Oh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Rr(co.current),Rr(di.current),da(i)){if(l=i.stateNode,s=i.memoizedProps,l[fi]=i,(h=l.nodeValue!==s)&&(t=In,t!==null))switch(t.tag){case 3:ra(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return hn(i),null;case 13:if(Ut(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)zd(),us(),i.flags|=98560,h=!1;else if(h=da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[fi]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else Qn!==null&&(Ku(Qn),Qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?Kt===0&&(Kt=3):Ju())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return hs(),Bu(t,i),t===null&&io(i.stateNode.containerInfo),hn(i),null;case 10:return hu(i.type._context),hn(i),null;case 17:return wn(i.type)&&aa(),hn(i),null;case 19:if(Ut(Ot),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)go(h,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=va(t),M!==null){for(i.flags|=128,go(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Dt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&q()>_s&&(i.flags|=128,l=!0,go(h,!1),i.lanes=4194304)}else{if(!l)if(t=va(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),go(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return hn(i),null}else 2*q()-h.renderingStartTime>_s&&s!==1073741824&&(i.flags|=128,l=!0,go(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=q(),i.sibling=null,s=Ot.current,Dt(Ot,l?s&1|2:s&1),i):(hn(i),null);case 22:case 23:return Qu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function s_(t,i){switch(au(i),i.tag){case 1:return wn(i.type)&&aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),Ut(Tn),Ut(fn),Su(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return vu(i),null;case 13:if(Ut(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ut(Ot),null;case 4:return hs(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Ra=!1,pn=!1,o_=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function ms(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ht(t,i,l)}else s.current=null}function zu(t,i,s){try{s()}catch(l){Ht(t,i,l)}}var kh=!1;function a_(t,i){if(Ql=Yo,t=gd(),Wl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,N=-1,O=-1,J=0,_e=0,ye=t,ge=null;t:for(;;){for(var Ne;ye!==s||c!==0&&ye.nodeType!==3||(N=M+c),ye!==h||l!==0&&ye.nodeType!==3||(O=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===t)break t;if(ge===s&&++J===c&&(N=M),ge===h&&++_e===l&&(O=M),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}s=N===-1||O===-1?null:{start:N,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jl={focusedElem:t,selectionRange:s},Yo=!1,Ie=i;Ie!==null;)if(i=Ie,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ie=t;else for(;Ie!==null;){i=Ie;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Vt=Be.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:Jn(i.type,He),Vt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ht(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ie=t;break}Ie=i.return}return Be=kh,kh=!1,Be}function _o(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&zu(i,s,h)}c=c.next}while(c!==l)}}function Ca(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Hu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Bh(t){var i=t.alternate;i!==null&&(t.alternate=null,Bh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[fi],delete i[so],delete i[iu],delete i[Gg],delete i[Wg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zh(t){return t.tag===5||t.tag===3||t.tag===4}function Hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=sa));else if(l!==4&&(t=t.child,t!==null))for(Vu(t,i,s),t=t.sibling;t!==null;)Vu(t,i,s),t=t.sibling}function Gu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Gu(t,i,s),t=t.sibling;t!==null;)Gu(t,i,s),t=t.sibling}var an=null,ei=!1;function nr(t,i,s){for(s=s.child;s!==null;)Vh(t,i,s),s=s.sibling}function Vh(t,i,s){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Je,s)}catch{}switch(s.tag){case 5:pn||ms(s,i);case 6:var l=an,c=ei;an=null,nr(t,i,s),an=l,ei=c,an!==null&&(ei?(t=an,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):an.removeChild(s.stateNode));break;case 18:an!==null&&(ei?(t=an,s=s.stateNode,t.nodeType===8?nu(t.parentNode,s):t.nodeType===1&&nu(t,s),qs(t)):nu(an,s.stateNode));break;case 4:l=an,c=ei,an=s.stateNode.containerInfo,ei=!0,nr(t,i,s),an=l,ei=c;break;case 0:case 11:case 14:case 15:if(!pn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&zu(s,i,M),c=c.next}while(c!==l)}nr(t,i,s);break;case 1:if(!pn&&(ms(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(N){Ht(s,i,N)}nr(t,i,s);break;case 21:nr(t,i,s);break;case 22:s.mode&1?(pn=(l=pn)||s.memoizedState!==null,nr(t,i,s),pn=l):nr(t,i,s);break;default:nr(t,i,s)}}function Gh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new o_),i.forEach(function(l){var c=g_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:an=N.stateNode,ei=!1;break e;case 3:an=N.stateNode.containerInfo,ei=!0;break e;case 4:an=N.stateNode.containerInfo,ei=!0;break e}N=N.return}if(an===null)throw Error(n(160));Vh(h,M,c),an=null,ei=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(J){Ht(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wh(i,t),i=i.sibling}function Wh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),pi(t),l&4){try{_o(3,t,t.return),Ca(3,t)}catch(He){Ht(t,t.return,He)}try{_o(5,t,t.return)}catch(He){Ht(t,t.return,He)}}break;case 1:ti(i,t),pi(t),l&512&&s!==null&&ms(s,s.return);break;case 5:if(ti(i,t),pi(t),l&512&&s!==null&&ms(s,s.return),t.flags&32){var c=t.stateNode;try{$e(c,"")}catch(He){Ht(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,N=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&ht(c,h),rt(N,M);var J=rt(N,h);for(M=0;M<O.length;M+=2){var _e=O[M],ye=O[M+1];_e==="style"?tt(c,ye):_e==="dangerouslySetInnerHTML"?Ke(c,ye):_e==="children"?$e(c,ye):L(c,_e,ye,J)}switch(N){case"input":ct(c,h);break;case"textarea":he(c,h);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ne=h.value;Ne!=null?D(c,!!h.multiple,Ne,!1):ge!==!!h.multiple&&(h.defaultValue!=null?D(c,!!h.multiple,h.defaultValue,!0):D(c,!!h.multiple,h.multiple?[]:"",!1))}c[so]=h}catch(He){Ht(t,t.return,He)}}break;case 6:if(ti(i,t),pi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){Ht(t,t.return,He)}}break;case 3:if(ti(i,t),pi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(i.containerInfo)}catch(He){Ht(t,t.return,He)}break;case 4:ti(i,t),pi(t);break;case 13:ti(i,t),pi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ju=q())),l&4&&Gh(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(pn=(J=pn)||_e,ti(i,t),pn=J):ti(i,t),pi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!_e&&(t.mode&1)!==0)for(Ie=t,_e=t.child;_e!==null;){for(ye=Ie=_e;Ie!==null;){switch(ge=Ie,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:_o(4,ge,ge.return);break;case 1:ms(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,s=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){Ht(l,s,He)}}break;case 5:ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Yh(ye);continue}}Ne!==null?(Ne.return=ge,Ie=Ne):Yh(ye)}_e=_e.sibling}e:for(_e=null,ye=t;;){if(ye.tag===5){if(_e===null){_e=ye;try{c=ye.stateNode,J?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=ye.stateNode,O=ye.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,N.style.display=et("display",M))}catch(He){Ht(t,t.return,He)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(He){Ht(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ti(i,t),pi(t),l&4&&Gh(t);break;case 21:break;default:ti(i,t),pi(t)}}function pi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(zh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&($e(c,""),l.flags&=-33);var h=Hh(t);Gu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,N=Hh(t);Vu(t,N,M);break;default:throw Error(n(161))}}catch(O){Ht(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function l_(t,i,s){Ie=t,Xh(t)}function Xh(t,i,s){for(var l=(t.mode&1)!==0;Ie!==null;){var c=Ie,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ra;if(!M){var N=c.alternate,O=N!==null&&N.memoizedState!==null||pn;N=Ra;var J=pn;if(Ra=M,(pn=O)&&!J)for(Ie=c;Ie!==null;)M=Ie,O=M.child,M.tag===22&&M.memoizedState!==null?qh(c):O!==null?(O.return=M,Ie=O):qh(c);for(;h!==null;)Ie=h,Xh(h),h=h.sibling;Ie=c,Ra=N,pn=J}jh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ie=h):jh(t)}}function jh(t){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Ca(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Jn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Yd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Yd(i,M,s)}break;case 5:var N=i.stateNode;if(s===null&&i.flags&4){s=N;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&qs(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&Hu(i)}catch(ge){Ht(i,i.return,ge)}}if(i===t){Ie=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ie=s;break}Ie=i.return}}function Yh(t){for(;Ie!==null;){var i=Ie;if(i===t){Ie=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ie=s;break}Ie=i.return}}function qh(t){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Ca(4,i)}catch(O){Ht(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){Ht(i,c,O)}}var h=i.return;try{Hu(i)}catch(O){Ht(i,h,O)}break;case 5:var M=i.return;try{Hu(i)}catch(O){Ht(i,M,O)}}}catch(O){Ht(i,i.return,O)}if(i===t){Ie=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ie=N;break}Ie=i.return}}var u_=Math.ceil,Pa=P.ReactCurrentDispatcher,Wu=P.ReactCurrentOwner,Wn=P.ReactCurrentBatchConfig,St=0,nn=null,Xt=null,ln=0,On=0,gs=Zi(0),Kt=0,vo=null,Pr=0,ba=0,Xu=0,xo=null,Rn=null,ju=0,_s=1/0,Ri=null,Da=!1,Yu=null,ir=null,La=!1,rr=null,Na=0,So=0,qu=null,Ua=-1,Ia=0;function yn(){return(St&6)!==0?q():Ua!==-1?Ua:Ua=q()}function sr(t){return(t.mode&1)===0?1:(St&2)!==0&&ln!==0?ln&-ln:jg.transition!==null?(Ia===0&&(Ia=Rt()),Ia):(t=xt,t!==0||(t=window.event,t=t===void 0?16:Kf(t.type)),t)}function ni(t,i,s,l){if(50<So)throw So=0,qu=null,Error(n(185));Jt(t,s,l),((St&2)===0||t!==nn)&&(t===nn&&((St&2)===0&&(ba|=s),Kt===4&&or(t,ln)),Cn(t,l),s===1&&St===0&&(i.mode&1)===0&&(_s=q()+500,ua&&Ji()))}function Cn(t,i){var s=t.callbackNode;xn(t,i);var l=un(t,t===nn?ln:0);if(l===0)s!==null&&A(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&A(s),i===1)t.tag===0?Xg(Kh.bind(null,t)):Id(Kh.bind(null,t)),Hg(function(){(St&6)===0&&Ji()}),s=null;else{switch(ci(l)){case 1:s=Me;break;case 4:s=Ce;break;case 16:s=Le;break;case 536870912:s=nt;break;default:s=Le}s=rp(s,$h.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function $h(t,i){if(Ua=-1,Ia=0,(St&6)!==0)throw Error(n(327));var s=t.callbackNode;if(vs()&&t.callbackNode!==s)return null;var l=un(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Fa(t,l);else{i=l;var c=St;St|=2;var h=Qh();(nn!==t||ln!==i)&&(Ri=null,_s=q()+500,Dr(t,i));do try{d_();break}catch(N){Zh(t,N)}while(!0);du(),Pa.current=h,St=c,Xt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(c=xi(t),c!==0&&(l=c,i=$u(t,c))),i===1)throw s=vo,Dr(t,0),or(t,l),Cn(t,q()),s;if(i===6)or(t,l);else{if(c=t.current.alternate,(l&30)===0&&!c_(c)&&(i=Fa(t,l),i===2&&(h=xi(t),h!==0&&(l=h,i=$u(t,h))),i===1))throw s=vo,Dr(t,0),or(t,l),Cn(t,q()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Lr(t,Rn,Ri);break;case 3:if(or(t,l),(l&130023424)===l&&(i=ju+500-q(),10<i)){if(un(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=tu(Lr.bind(null,t,Rn,Ri),i);break}Lr(t,Rn,Ri);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-ot(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*u_(l/1960))-l,10<l){t.timeoutHandle=tu(Lr.bind(null,t,Rn,Ri),l);break}Lr(t,Rn,Ri);break;case 5:Lr(t,Rn,Ri);break;default:throw Error(n(329))}}}return Cn(t,q()),t.callbackNode===s?$h.bind(null,t):null}function $u(t,i){var s=xo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Fa(t,i),t!==2&&(i=Rn,Rn=s,i!==null&&Ku(i)),t}function Ku(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function c_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Xu,i&=~ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-ot(i),l=1<<s;t[s]=-1,i&=~l}}function Kh(t){if((St&6)!==0)throw Error(n(327));vs();var i=un(t,0);if((i&1)===0)return Cn(t,q()),null;var s=Fa(t,i);if(t.tag!==0&&s===2){var l=xi(t);l!==0&&(i=l,s=$u(t,l))}if(s===1)throw s=vo,Dr(t,0),or(t,i),Cn(t,q()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Lr(t,Rn,Ri),Cn(t,q()),null}function Zu(t,i){var s=St;St|=1;try{return t(i)}finally{St=s,St===0&&(_s=q()+500,ua&&Ji())}}function br(t){rr!==null&&rr.tag===0&&(St&6)===0&&vs();var i=St;St|=1;var s=Wn.transition,l=xt;try{if(Wn.transition=null,xt=1,t)return t()}finally{xt=l,Wn.transition=s,St=i,(St&6)===0&&Ji()}}function Qu(){On=gs.current,Ut(gs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,zg(s)),Xt!==null)for(s=Xt.return;s!==null;){var l=s;switch(au(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&aa();break;case 3:hs(),Ut(Tn),Ut(fn),Su();break;case 5:vu(l);break;case 4:hs();break;case 13:Ut(Ot);break;case 19:Ut(Ot);break;case 10:hu(l.type._context);break;case 22:case 23:Qu()}s=s.return}if(nn=t,Xt=t=ar(t.current,null),ln=On=i,Kt=0,vo=null,Xu=ba=Pr=0,Rn=xo=null,Ar!==null){for(i=0;i<Ar.length;i++)if(s=Ar[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Ar=null}return t}function Zh(t,i){do{var s=Xt;try{if(du(),xa.current=Ea,Sa){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Sa=!1}if(Cr=0,tn=$t=kt=null,fo=!1,ho=0,Wu.current=null,s===null||s.return===null){Kt=1,vo=i,Xt=null;break}e:{var h=t,M=s.return,N=s,O=i;if(i=ln,N.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,_e=N,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ne=Mh(M);if(Ne!==null){Ne.flags&=-257,Eh(Ne,M,N,h,i),Ne.mode&1&&yh(h,J,i),i=Ne,O=J;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(O),i.updateQueue=He}else Be.add(O);break e}else{if((i&1)===0){yh(h,J,i),Ju();break e}O=Error(n(426))}}else if(Ft&&N.mode&1){var Vt=Mh(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Eh(Vt,M,N,h,i),cu(ps(O,N));break e}}h=O=ps(O,N),Kt!==4&&(Kt=2),xo===null?xo=[h]:xo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=xh(h,O,i);jd(h,Y);break e;case 1:N=O;var H=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ir===null||!ir.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Sh(h,N,i);jd(h,Te);break e}}h=h.return}while(h!==null)}ep(s)}catch(Xe){i=Xe,Xt===s&&s!==null&&(Xt=s=s.return);continue}break}while(!0)}function Qh(){var t=Pa.current;return Pa.current=Ea,t===null?Ea:t}function Ju(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(Pr&268435455)===0&&(ba&268435455)===0||or(nn,ln)}function Fa(t,i){var s=St;St|=2;var l=Qh();(nn!==t||ln!==i)&&(Ri=null,Dr(t,i));do try{f_();break}catch(c){Zh(t,c)}while(!0);if(du(),St=s,Pa.current=l,Xt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function f_(){for(;Xt!==null;)Jh(Xt)}function d_(){for(;Xt!==null&&!G();)Jh(Xt)}function Jh(t){var i=ip(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?ep(t):Xt=i,Wu.current=null}function ep(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=r_(s,i,On),s!==null){Xt=s;return}}else{if(s=s_(s,i),s!==null){s.flags&=32767,Xt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Lr(t,i,s){var l=xt,c=Wn.transition;try{Wn.transition=null,xt=1,h_(t,i,s,l)}finally{Wn.transition=c,xt=l}return null}function h_(t,i,s,l){do vs();while(rr!==null);if((St&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(on(t,h),t===nn&&(Xt=nn=null,ln=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||La||(La=!0,rp(Le,function(){return vs(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Wn.transition,Wn.transition=null;var M=xt;xt=1;var N=St;St|=4,Wu.current=null,a_(t,s),Wh(s,t),Ng(Jl),Yo=!!Ql,Jl=Ql=null,t.current=s,l_(s),te(),St=N,xt=M,Wn.transition=h}else t.current=s;if(La&&(La=!1,rr=t,Na=c),h=t.pendingLanes,h===0&&(ir=null),mt(s.stateNode),Cn(t,q()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Da)throw Da=!1,t=Yu,Yu=null,t;return(Na&1)!==0&&t.tag!==0&&vs(),h=t.pendingLanes,(h&1)!==0?t===qu?So++:(So=0,qu=t):So=0,Ji(),null}function vs(){if(rr!==null){var t=ci(Na),i=Wn.transition,s=xt;try{if(Wn.transition=null,xt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Na=0,(St&6)!==0)throw Error(n(331));var c=St;for(St|=4,Ie=t.current;Ie!==null;){var h=Ie,M=h.child;if((Ie.flags&16)!==0){var N=h.deletions;if(N!==null){for(var O=0;O<N.length;O++){var J=N[O];for(Ie=J;Ie!==null;){var _e=Ie;switch(_e.tag){case 0:case 11:case 15:_o(8,_e,h)}var ye=_e.child;if(ye!==null)ye.return=_e,Ie=ye;else for(;Ie!==null;){_e=Ie;var ge=_e.sibling,Ne=_e.return;if(Bh(_e),_e===J){Ie=null;break}if(ge!==null){ge.return=Ne,Ie=ge;break}Ie=Ne}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Vt=He.sibling;He.sibling=null,He=Vt}while(He!==null)}}Ie=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Ie=M;else e:for(;Ie!==null;){if(h=Ie,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:_o(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Ie=Y;break e}Ie=h.return}}var H=t.current;for(Ie=H;Ie!==null;){M=Ie;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,Ie=K;else e:for(M=H;Ie!==null;){if(N=Ie,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ca(9,N)}}catch(Xe){Ht(N,N.return,Xe)}if(N===M){Ie=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,Ie=Te;break e}Ie=N.return}}if(St=c,Ji(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Je,t)}catch{}l=!0}return l}finally{xt=s,Wn.transition=i}}return!1}function tp(t,i,s){i=ps(s,i),i=xh(t,i,1),t=tr(t,i,1),i=yn(),t!==null&&(Jt(t,1,i),Cn(t,i))}function Ht(t,i,s){if(t.tag===3)tp(t,t,s);else for(;i!==null;){if(i.tag===3){tp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=ps(s,t),t=Sh(i,t,1),i=tr(i,t,1),t=yn(),i!==null&&(Jt(i,1,t),Cn(i,t));break}}i=i.return}}function p_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&s,nn===t&&(ln&s)===s&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>q()-ju?Dr(t,0):Xu|=s),Cn(t,i)}function np(t,i){i===0&&((t.mode&1)===0?i=1:(i=zt,zt<<=1,(zt&130023424)===0&&(zt=4194304)));var s=yn();t=Ti(t,i),t!==null&&(Jt(t,i,s),Cn(t,s))}function m_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),np(t,s)}function g_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),np(t,s)}var ip;ip=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return An=!1,i_(t,i,s);An=(t.flags&131072)!==0}else An=!1,Ft&&(i.flags&1048576)!==0&&Fd(i,fa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Aa(t,i),t=i.pendingProps;var c=os(i,fn.current);ds(i,s),c=Eu(null,i,l,t,c,s);var h=Tu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(h=!0,la(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,gu(i),c.updater=Ta,i.stateNode=c,c._reactInternals=i,bu(i,l,t,s),i=Uu(null,i,l,!0,h,s)):(i.tag=0,Ft&&h&&ou(i),Sn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Aa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=v_(l),t=Jn(l,t),c){case 0:i=Nu(null,i,l,t,s);break e;case 1:i=Ph(null,i,l,t,s);break e;case 11:i=Th(null,i,l,t,s);break e;case 14:i=wh(null,i,l,Jn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Nu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ph(t,i,l,c,s);case 3:e:{if(bh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Xd(t,i),_a(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ps(Error(n(423)),i),i=Dh(t,i,l,s,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=Dh(t,i,l,s,c);break e}else for(Fn=Ki(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,Qn=null,s=Gd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(us(),l===c){i=Ai(t,i,s);break e}Sn(t,i,l,s)}i=i.child}return i;case 5:return qd(i),t===null&&uu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,eu(l,c)?M=null:h!==null&&eu(l,h)&&(i.flags|=32),Ch(t,i),Sn(t,i,M,s),i.child;case 6:return t===null&&uu(i),null;case 13:return Lh(t,i,s);case 4:return _u(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,s):Sn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Th(t,i,l,c,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Dt(pa,l._currentValue),l._currentValue=M,h!==null)if(Zn(h.value,M)){if(h.children===c.children&&!Tn.current){i=Ai(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){M=h.child;for(var O=N.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=wi(-1,s&-s),O.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),J.pending=O}}h.lanes|=s,O=h.alternate,O!==null&&(O.lanes|=s),pu(h.return,s,i),N.lanes|=s;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,N=M.alternate,N!==null&&(N.lanes|=s),pu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}Sn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,s),c=Vn(c),l=l(c),i.flags|=1,Sn(t,i,l,s),i.child;case 14:return l=i.type,c=Jn(l,i.pendingProps),c=Jn(l.type,c),wh(t,i,l,c,s);case 15:return Ah(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Aa(t,i),i.tag=1,wn(l)?(t=!0,la(i)):t=!1,ds(i,s),_h(i,l,c),bu(i,l,c,s),Uu(null,i,l,!0,t,s);case 19:return Uh(t,i,s);case 22:return Rh(t,i,s)}throw Error(n(156,i.tag))};function rp(t,i){return Wo(t,i)}function __(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,s,l){return new __(t,i,s,l)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v_(t){if(typeof t=="function")return ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ee)return 11;if(t===fe)return 14}return 2}function ar(t,i){var s=t.alternate;return s===null?(s=Xn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Oa(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")ec(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Nr(s.children,c,h,i);case j:M=8,c|=8;break;case b:return t=Xn(12,s,i,c|2),t.elementType=b,t.lanes=h,t;case $:return t=Xn(13,s,i,c),t.elementType=$,t.lanes=h,t;case ue:return t=Xn(19,s,i,c),t.elementType=ue,t.lanes=h,t;case le:return ka(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case C:M=9;break e;case ee:M=11;break e;case fe:M=14;break e;case ae:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Nr(t,i,s,l){return t=Xn(7,t,l,i),t.lanes=s,t}function ka(t,i,s,l){return t=Xn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function tc(t,i,s){return t=Xn(6,t,null,i),t.lanes=s,t}function nc(t,i,s){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function x_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ic(t,i,s,l,c,h,M,N,O){return t=new x_(t,i,s,N,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(h),t}function S_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function sp(t){if(!t)return Qi;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(wn(s))return Nd(t,s,i)}return i}function op(t,i,s,l,c,h,M,N,O){return t=ic(s,l,!0,t,c,h,M,N,O),t.context=sp(null),s=t.current,l=yn(),c=sr(s),h=wi(l,c),h.callback=i??null,tr(s,h,c),t.current.lanes=c,Jt(t,c,l),Cn(t,l),t}function Ba(t,i,s,l){var c=i.current,h=yn(),M=sr(c);return s=sp(s),i.context===null?i.context=s:i.pendingContext=s,i=wi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,M),t!==null&&(ni(t,c,M,h),ga(t,c,M)),M}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ap(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function rc(t,i){ap(t,i),(t=t.alternate)&&ap(t,i)}function y_(){return null}var lp=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}Ha.prototype.render=sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Ha.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){Ba(null,t,null,null)}),i[Si]=null}};function Ha(t){this._internalRoot=t}Ha.prototype.unstable_scheduleHydration=function(t){if(t){var i=Xf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Yi.length&&i!==0&&i<Yi[s].priority;s++);Yi.splice(s,0,t),s===0&&qf(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function up(){}function M_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var J=za(M);h.call(J)}}var M=op(i,l,t,0,null,!1,!1,"",up);return t._reactRootContainer=M,t[Si]=M.current,io(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var N=l;l=function(){var J=za(O);N.call(J)}}var O=ic(t,0,!1,null,null,!1,!1,"",up);return t._reactRootContainer=O,t[Si]=O.current,io(t.nodeType===8?t.parentNode:t),br(function(){Ba(i,O,s,l)}),O}function Ga(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var N=c;c=function(){var O=za(M);N.call(O)}}Ba(i,M,t,c)}else M=M_(s,i,t,c,l);return za(M)}Gf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=pt(i.pendingLanes);s!==0&&(en(i,s|1),Cn(i,q()),(St&6)===0&&(_s=q()+500,Ji()))}break;case 13:br(function(){var l=Ti(t,1);if(l!==null){var c=yn();ni(l,t,1,c)}}),rc(t,1)}},Dl=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var s=yn();ni(i,t,134217728,s)}rc(t,134217728)}},Wf=function(t){if(t.tag===13){var i=sr(t),s=Ti(t,i);if(s!==null){var l=yn();ni(s,t,i,l)}rc(t,i)}},Xf=function(){return xt},jf=function(t,i){var s=xt;try{return xt=t,i()}finally{xt=s}},Re=function(t,i,s){switch(i){case"input":if(ct(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=oa(l);if(!c)throw Error(n(90));bt(l),ct(l,c)}}}break;case"textarea":he(t,s);break;case"select":i=s.value,i!=null&&D(t,!!s.multiple,i,!1)}},Lt=Zu,qt=br;var E_={usingClientEntryPoint:!1,Events:[oo,rs,oa,be,st,Zu]},yo={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T_={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vo(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Je=Wa.inject(T_),ze=Wa}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_,Pn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(i))throw Error(n(200));return S_(t,i,null,s)},Pn.createRoot=function(t,i){if(!oc(t))throw Error(n(299));var s=!1,l="",c=lp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ic(t,1,!1,null,null,s,!1,l,c),t[Si]=i.current,io(t.nodeType===8?t.parentNode:t),new sc(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Vo(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return br(t)},Pn.hydrate=function(t,i,s){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!0,s)},Pn.hydrateRoot=function(t,i,s){if(!oc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=lp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=op(i,null,t,1,s??null,c,!1,h,M),t[Si]=i.current,io(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Ha(i)},Pn.render=function(t,i,s){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!1,s)},Pn.unmountComponentAtNode=function(t){if(!Va(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Ga(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Pn.unstable_batchedUpdates=Zu,Pn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Va(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ga(t,i,s,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var _p;function L_(){if(_p)return uc.exports;_p=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uc.exports=D_(),uc.exports}var vp;function N_(){if(vp)return Xa;vp=1;var o=L_();return Xa.createRoot=o.createRoot,Xa.hydrateRoot=o.hydrateRoot,Xa}var U_=N_();const xp=[{id:"heranca-digital",title:"Gestão de Herança Digital",description:"Solução completa para garantir que seus ativos digitais, criptomoedas e informações confidenciais sejam transferidos para seus herdeiros de forma segura e conforme suas instruções, mesmo após seu falecimento.",icon:"🔐",features:["Planejamento Sucessório Digital personalizado","Mecanismos de verificação de inatividade","Transferência automática de ativos conforme regras pré-estabelecidas","Controle sobre quais informações serão compartilhadas com cada herdeiro","Conformidade com legislação sucessória"],options:[{name:"Plano Básico",description:"Configuração de herança para principais ativos digitais"},{name:"Plano Familiar",description:"Solução completa para múltiplos beneficiários com diferentes níveis de acesso"},{name:"Plano Empresarial",description:"Continuidade de acesso a ativos digitais corporativos para sucessores designados"},{name:"Custódia Parcial",description:"Armazenamento seguro de parte das chaves para ativação do protocolo de herança"}]},{id:"custodia-carteiras",title:"Custódia e Gestão de Carteiras",description:"Serviços de custódia e gestão de carteiras digitais e criptomoedas que permitem aos clientes manter a propriedade de seus ativos enquanto delegam a complexidade técnica da gestão de chaves e segurança.",icon:"💼",features:["Custódia Não-Fiduciária com propriedade total dos ativos","Segurança Multicamada contra ameaças físicas e digitais","Monitoramento Contínuo 24/7 de atividades","Relatórios Detalhados sobre status e movimentação","Protocolos de Acesso Emergencial em situações críticas"],options:[{name:"Custódia Individual",description:"Para investidores e entusiastas com portfólios pessoais"},{name:"Custódia Empresarial",description:"Para organizações com tesouraria em criptoativos"},{name:"Custódia Institucional",description:"Para fundos, family offices e instituições financeiras"},{name:"Gestão Ativa",description:"Serviço premium com suporte personalizado e consultoria"}]},{id:"gestao-chaves",title:"Gestão de Chaves Criptográficas",description:"Soluções especializadas para gerenciamento seguro de chaves criptográficas, incluindo geração, armazenamento, backup, recuperação e rotação de chaves para diversos protocolos e aplicações.",icon:"🔑",features:["Geração Segura com entropia de alta qualidade","Armazenamento Distribuído com fragmentação geográfica","Rotação Programada para maior segurança","Recuperação Robusta com múltiplos caminhos","Compatibilidade com diversos algoritmos e padrões"],options:[{name:"Gestão de Chaves Pessoais",description:"Para indivíduos com múltiplas chaves e senhas"},{name:"Gestão de Chaves Empresariais",description:"Para organizações com infraestrutura criptográfica"},{name:"Infraestrutura de Chave Pública",description:"Implementação e gestão de PKI corporativa"},{name:"Chaves para Desenvolvedores",description:"Gestão de chaves de API, certificados e credenciais"}]},{id:"gestao-segredos",title:"Gestão de Segredos",description:"Plataforma segura para armazenamento, compartilhamento e gestão de informações confidenciais, senhas, credenciais e outros dados sensíveis, com controles granulares de acesso e auditoria.",icon:"🔒",features:["Criptografia de Ponta com algoritmos de última geração","Compartilhamento Seguro com controle de acesso","Histórico de Versões para rastreamento de alterações","Autenticação Multifator em múltiplas camadas","Logs de Auditoria detalhados de todas as atividades"],options:[{name:"Cofre Pessoal",description:"Para gerenciamento de senhas e documentos individuais"},{name:"Cofre Familiar",description:"Compartilhamento seguro entre membros da família"},{name:"Cofre Empresarial",description:"Solução corporativa com hierarquia de acessos"},{name:"Gestão de Credenciais Privilegiadas",description:"Para acessos críticos e administrativos"}]},{id:"carteiras-multiassinadas",title:"Gestão de Carteiras Multiassinadas",description:"Implementação e administração de carteiras multiassinadas (multisig) que exigem múltiplas aprovações para transações, proporcionando governança distribuída e eliminando pontos únicos de falha.",icon:"🏦",features:["Configuração Personalizada de esquemas de assinatura (M-de-N)","Políticas de Aprovação para diferentes tipos de transações","Notificações em Tempo Real sobre solicitações pendentes","Interface Unificada para gestão de múltiplas carteiras","Auditoria Completa com registro imutável de aprovações"],options:[{name:"Multisig Pessoal",description:"Para indivíduos que desejam segurança adicional"},{name:"Multisig Familiar",description:"Para gestão compartilhada de patrimônio familiar"},{name:"Multisig Empresarial",description:"Para tesouraria corporativa com múltiplos aprovadores"},{name:"Multisig para DAOs",description:"Soluções para organizações autônomas descentralizadas"}]}],dc=[{id:"hardware-wallets",title:"Hardware Wallets",description:"Dispositivos físicos de alta segurança para armazenamento de criptomoedas, oferecendo proteção contra ameaças online e verificação física de transações.",icon:"💾",features:["Segurança Offline com chaves privadas isoladas","Verificação Física de transações no próprio dispositivo","Compatibilidade com múltiplas criptomoedas","Backup Seguro via seed phrase","Proteção contra malware e ataques virtuais"],options:[{name:"Trezor Model One",description:"Hardware wallet original com design compacto"},{name:"Trezor Model T",description:"Versão avançada com tela colorida touchscreen"},{name:"Ledger Nano S Plus",description:"Solução segura com suporte a múltiplos ativos"},{name:"Ledger Nano X",description:"Versão premium com conectividade Bluetooth"}]},{id:"paper-wallets",title:"Paper Wallets",description:"Carteiras de papel são uma forma segura de armazenamento offline (cold storage) para criptomoedas, consistindo em um documento físico contendo as chaves pública e privada impressas.",icon:"📄",features:["Segurança Máxima por serem completamente offline","Armazenamento de Longo Prazo para investidores","Independência de Hardware sem dispositivos eletrônicos","Baixo Custo comparado a hardware wallets","Compatibilidade com múltiplas criptomoedas"],options:[{name:"Paper Wallet Básica",description:"Impressão em papel comum com chaves públicas e privadas"},{name:"Paper Wallet Premium",description:"Impressão em material resistente à água e rasgos, com design personalizado"},{name:"Paper Wallet Empresarial",description:"Múltiplas carteiras com sistema de organização e backup"},{name:"Kit de Backup",description:"Inclui múltiplas cópias e instruções detalhadas para armazenamento seguro"}]},{id:"certificados-digitais",title:"Certificados Digitais",description:"Certificados criptográficos emitidos por autoridades certificadoras reconhecidas, utilizados para autenticação, assinatura digital e criptografia em diversos contextos.",icon:"📜",features:["Validade Jurídica para assinaturas e autenticações","Diferentes Níveis conforme necessidade de segurança","Múltiplos Formatos disponíveis (tokens, arquivos, cartões)","Interoperabilidade com diversos sistemas","Rastreabilidade de uso e verificação"],options:[{name:"e-CPF",description:"Certificado digital para pessoas físicas"},{name:"e-CNPJ",description:"Certificado digital para empresas"},{name:"Certificados SSL/TLS",description:"Para segurança de websites"},{name:"Certificados de Assinatura de Código",description:"Para desenvolvedores de software"}]}],I_={pt:{explore_services:"EXPLORAR SERVIÇOS",store:"LOJA",about_us:"SOBRE NÓS",scroll_down:"SCROLL DOWN",contact:"CONTATO",add_to_cart:"ADICIONAR AO CARRINHO",tagline:"SEGURANÇA DIGITAL PARA O QUE REALMENTE IMPORTA",our_services:"NOSSOS SERVIÇOS",services_subtitle:"Soluções criptográficas avançadas para proteção digital",physical_products:"PRODUTOS FÍSICOS",products_subtitle:"Hardware e soluções tangíveis para segurança máxima",store_title:"LOJA",store_subtitle:"Adquira nossos produtos com preços especiais",about_title:"SOBRE NÓS",about_subtitle:"Seu banco de segredos e chaves digitais",about_text_1:"A Criptografia é uma empresa especializada em soluções de segurança digital baseadas em tecnologias criptográficas e blockchain.",about_text_2:'Posicionada como um "banco de segredos e chaves digitais", oferecemos um portfólio abrangente de produtos e serviços que permitem aos clientes manter a propriedade de seus ativos digitais enquanto delegam a complexidade técnica da gestão de chaves e segurança.',about_text_3:"Nossa missão é democratizar o acesso a tecnologias criptográficas avançadas, fornecendo soluções que combinam segurança, praticidade e inovação.",about_text_4:"Nossos diferenciais incluem:",about_feature_1:"Expertise Técnica - Equipe altamente especializada em criptografia e blockchain",about_feature_2:"Soluções Personalizadas - Adaptamos nossos serviços às necessidades específicas de cada cliente",about_feature_3:"Segurança de Ponta - Utilizamos os mais avançados protocolos de segurança do mercado",about_feature_4:"Inovação Constante - Atualização contínua de tecnologias e metodologias",services:"Serviços",products:"Produtos",about:"Sobre",copyright:"© 2025 Criptografia. Todos os direitos reservados."},en:{explore_services:"EXPLORE SERVICES",store:"STORE",about_us:"ABOUT US",scroll_down:"SCROLL DOWN",contact:"CONTACT",add_to_cart:"ADD TO CART",tagline:"DIGITAL SECURITY FOR WHAT REALLY MATTERS",our_services:"OUR SERVICES",services_subtitle:"Advanced cryptographic solutions for digital protection",physical_products:"PHYSICAL PRODUCTS",products_subtitle:"Hardware and tangible solutions for maximum security",store_title:"STORE",store_subtitle:"Purchase our products at special prices",about_title:"ABOUT US",about_subtitle:"Your bank of digital secrets and keys",about_text_1:"Criptografia is a company specialized in digital security solutions based on cryptographic and blockchain technologies.",about_text_2:'Positioned as a "bank of digital secrets and keys", we offer a comprehensive portfolio of products and services that allow clients to maintain ownership of their digital assets while delegating the technical complexity of key management and security.',about_text_3:"Our mission is to democratize access to advanced cryptographic technologies, providing solutions that combine security, practicality, and innovation.",about_text_4:"Our differentials include:",about_feature_1:"Technical Expertise - Highly specialized team in cryptography and blockchain",about_feature_2:"Customized Solutions - We adapt our services to the specific needs of each client",about_feature_3:"Cutting-Edge Security - We use the most advanced security protocols in the market",about_feature_4:"Constant Innovation - Continuous updating of technologies and methodologies",services:"Services",products:"Products",about:"About",copyright:"© 2025 Criptografia. All rights reserved."},ar:{explore_services:"استكشاف الخدمات",store:"المتجر",about_us:"من نحن",scroll_down:"مرر لأسفل",contact:"اتصل بنا",add_to_cart:"أضف إلى السلة",tagline:"الأمان الرقمي لما يهم حقًا",our_services:"خدماتنا",services_subtitle:"حلول تشفير متقدمة للحماية الرقمية",physical_products:"المنتجات المادية",products_subtitle:"أجهزة وحلول ملموسة لأقصى درجات الأمان",store_title:"المتجر",store_subtitle:"اشترِ منتجاتنا بأسعار خاصة",about_title:"من نحن",about_subtitle:"بنك أسرارك ومفاتيحك الرقمية",about_text_1:"كريبتوغرافيا هي شركة متخصصة في حلول الأمان الرقمي المعتمدة على تقنيات التشفير وبلوكتشين.",about_text_2:'بوصفنا "بنك للأسرار والمفاتيح الرقمية"، نقدم مجموعة شاملة من المنتجات والخدمات التي تسمح للعملاء بالاحتفاظ بملكية أصولهم الرقمية مع تفويض التعقيد التقني لإدارة المفاتيح والأمان.',about_text_3:"مهمتنا هي تسهيل الوصول إلى تقنيات التشفير المتقدمة، وتوفير حلول تجمع بين الأمان والعملية والابتكار.",about_text_4:"تشمل مميزاتنا:",about_feature_1:"خبرة تقنية - فريق متخصص في التشفير وبلوكتشين",about_feature_2:"حلول مخصصة - نكيف خدماتنا وفقًا للاحتياجات الخاصة لكل عميل",about_feature_3:"أمان متطور - نستخدم أكثر بروتوكولات الأمان تقدمًا في السوق",about_feature_4:"ابتكار مستمر - تحديث مستمر للتقنيات والمنهجيات",services:"الخدمات",products:"المنتجات",about:"من نحن",copyright:"© 2025 كريبتوغرافيا. جميع الحقوق محفوظة."}},F_=({title:o,description:e,icon:n,delay:r=0,className:a="",onClick:u})=>de.jsxs("div",{className:`card service-card hologram ${a}`,style:{animationDelay:`${r}s`,transitionDelay:`${r}s`},onClick:u,children:[de.jsx("div",{className:"card-icon neon-text-cyan",children:n}),de.jsx("h3",{className:"card-title neon-text-green",children:o}),de.jsx("p",{className:"card-description",children:e})]}),O_=({title:o,description:e,icon:n,delay:r=0,className:a="",onClick:u})=>de.jsxs("div",{className:`card product-card hologram ${a}`,style:{animationDelay:`${r}s`,transitionDelay:`${r}s`},onClick:u,children:[de.jsx("div",{className:"card-icon neon-text-pink",children:n}),de.jsx("h3",{className:"card-title neon-text-green",children:o}),de.jsx("p",{className:"card-description",children:e})]}),Sp=({title:o,description:e,features:n,options:r,icon:a,className:u=""})=>de.jsxs("div",{className:`service-detail perspective-container ${u}`,children:[de.jsxs("div",{className:"service-detail-header",children:[de.jsx("div",{className:"service-detail-icon neon-text-cyan",children:a}),de.jsx("h3",{className:"service-detail-title neon-text-green",children:o})]}),de.jsxs("div",{className:"service-detail-content",children:[de.jsx("p",{className:"service-detail-description",children:e}),de.jsxs("div",{className:"service-detail-features",children:[de.jsx("h4",{className:"neon-text-cyan",children:"Características"}),de.jsx("ul",{children:n.map((f,d)=>de.jsxs("li",{className:"depth-1",children:[de.jsx("span",{className:"feature-bullet neon-text-pink",children:"■"})," ",f]},d))})]}),de.jsxs("div",{className:"service-detail-options",children:[de.jsx("h4",{className:"neon-text-cyan",children:"Opções de Serviço"}),de.jsx("div",{className:"options-grid",children:r.map((f,d)=>de.jsxs("div",{className:"option-item depth-2",children:[de.jsx("h5",{className:"neon-text-green",children:f.name}),de.jsx("p",{children:f.description})]},d))})]})]})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="176",k_=0,yp=1,B_=2,vm=1,z_=2,Ni=3,vr=0,Dn=1,Ui=2,gr=0,Us=1,Mp=2,Ep=3,Tp=4,H_=5,Vr=100,V_=101,G_=102,W_=103,X_=104,j_=200,Y_=201,q_=202,$_=203,Gc=204,Wc=205,K_=206,Z_=207,Q_=208,J_=209,ev=210,tv=211,nv=212,iv=213,rv=214,Xc=0,jc=1,Yc=2,Fs=3,qc=4,$c=5,Kc=6,Zc=7,xm=0,sv=1,ov=2,_r=0,av=1,lv=2,uv=3,cv=4,fv=5,dv=6,hv=7,Sm=300,Os=301,ks=302,Qc=303,Jc=304,Al=306,ef=1e3,Wr=1001,tf=1002,li=1003,pv=1004,ja=1005,gi=1006,hc=1007,Xr=1008,ki=1009,ym=1010,Mm=1011,Po=1012,Uf=1013,Yr=1014,Ii=1015,No=1016,If=1017,Ff=1018,bo=1020,Em=35902,Tm=1021,wm=1022,ai=1023,Do=1026,Lo=1027,Am=1028,Of=1029,Rm=1030,kf=1031,Bf=1033,gl=33776,_l=33777,vl=33778,xl=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,uf=37496,cf=37808,ff=37809,df=37810,hf=37811,pf=37812,mf=37813,gf=37814,_f=37815,vf=37816,xf=37817,Sf=37818,yf=37819,Mf=37820,Ef=37821,Sl=36492,Tf=36494,wf=36495,Cm=36283,Af=36284,Rf=36285,Cf=36286,mv=3200,gv=3201,_v=0,vv=1,mr="",Yn="srgb",Bs="srgb-linear",El="linear",At="srgb",xs=7680,wp=519,xv=512,Sv=513,yv=514,Pm=515,Mv=516,Ev=517,Tv=518,wv=519,Ap=35044,Rp="300 es",Fi=2e3,Tl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=Math.PI/180,Pf=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[o&255]+mn[o>>8&255]+mn[o>>16&255]+mn[o>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function Av(o,e){return(o%e+e)%e}function mc(o,e,n){return(1-n)*o+n*e}function Eo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,u,f,d,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],x=r[2],y=r[5],w=r[8],T=a[0],S=a[3],g=a[6],U=a[1],L=a[4],P=a[7],W=a[2],z=a[5],F=a[8];return u[0]=f*T+d*U+p*W,u[3]=f*S+d*L+p*z,u[6]=f*g+d*P+p*F,u[1]=m*T+v*U+_*W,u[4]=m*S+v*L+_*z,u[7]=m*g+v*P+_*F,u[2]=x*T+y*U+w*W,u[5]=x*S+y*L+w*z,u[8]=x*g+y*P+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=v*f-d*m,x=d*p-v*u,y=m*u-f*p,w=n*_+r*x+a*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(a*m-v*r)*T,e[2]=(d*r-a*f)*T,e[3]=x*T,e[4]=(v*n-a*p)*T,e[5]=(a*u-d*n)*T,e[6]=y*T,e[7]=(r*p-m*n)*T,e[8]=(f*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(gc.makeScale(e,n)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new at;function bm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Rv(){const o=wl("canvas");return o.style.display="block",o}const Cp={};function yl(o){o in Cp||(Cp[o]=!0,console.warn(o))}function Cv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Pv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pp=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dv(){const o={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===At&&(a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===At&&(a.r=Is(a.r),a.g=Is(a.g),a.b=Is(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?El:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Bs]:{primaries:e,whitePoint:r,transfer:El,toXYZ:Pp,fromXYZ:bp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:At,toXYZ:Pp,fromXYZ:bp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),o}const Mt=Dv();function Oi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ss;class Lv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ss===void 0&&(Ss=wl("canvas")),Ss.width=e.width,Ss.height=e.height;const a=Ss.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ss}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Oi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oi(n[r]/255)*255):n[r]=Oi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nv=0;class zf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(_c(a[f].image)):u.push(_c(a[f]))}else u=_c(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function _c(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Lv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uv=0;class Ln extends Hs{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Wr,a=Wr,u=gi,f=Xr,d=ai,p=ki,m=Ln.DEFAULT_ANISOTROPY,v=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Uo(),this.name="",this.source=new zf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Sm;Ln.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],_=p[8],x=p[1],y=p[5],w=p[9],T=p[2],S=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-T)<.01&&Math.abs(w-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+T)<.1&&Math.abs(w+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(y+1)/2,W=(g+1)/2,z=(v+x)/4,F=(_+T)/4,j=(w+S)/4;return L>P&&L>W?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=z/r,u=F/r):P>W?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=z/a,u=j/a):W<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(W),r=F/u,a=j/u),this.set(r,a,u,n),this}let U=Math.sqrt((S-w)*(S-w)+(_-T)*(_-T)+(x-v)*(x-v));return Math.abs(U)<.001&&(U=1),this.x=(S-w)/U,this.y=(_-T)/U,this.z=(x-v)/U,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iv extends Hs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new zf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends Iv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Dm extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fv extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];const x=u[f+0],y=u[f+1],w=u[f+2],T=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=w,e[n+3]=T;return}if(_!==T||p!==x||m!==y||v!==w){let S=1-d;const g=p*x+m*y+v*w+_*T,U=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const W=Math.sqrt(L),z=Math.atan2(W,g*U);S=Math.sin(S*z)/W,d=Math.sin(d*z)/W}const P=d*U;if(p=p*S+x*P,m=m*S+y*P,v=v*S+w*P,_=_*S+T*P,S===1-d){const W=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=W,m*=W,v*=W,_*=W}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],_=u[f],x=u[f+1],y=u[f+2],w=u[f+3];return e[n]=d*w+v*_+p*y-m*x,e[n+1]=p*w+v*x+m*_-d*y,e[n+2]=m*w+v*y+d*x-p*_,e[n+3]=v*w-d*_-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),_=d(u/2),x=p(r/2),y=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*v*_+m*y*w,this._y=m*y*_-x*v*w,this._z=m*v*w+x*y*_,this._w=m*v*_-x*y*w;break;case"YXZ":this._x=x*v*_+m*y*w,this._y=m*y*_-x*v*w,this._z=m*v*w-x*y*_,this._w=m*v*_+x*y*w;break;case"ZXY":this._x=x*v*_-m*y*w,this._y=m*y*_+x*v*w,this._z=m*v*w+x*y*_,this._w=m*v*_-x*y*w;break;case"ZYX":this._x=x*v*_-m*y*w,this._y=m*y*_+x*v*w,this._z=m*v*w-x*y*_,this._w=m*v*_+x*y*w;break;case"YZX":this._x=x*v*_+m*y*w,this._y=m*y*_+x*v*w,this._z=m*v*w-x*y*_,this._w=m*v*_-x*y*w;break;case"XZY":this._x=x*v*_-m*y*w,this._y=m*y*_-x*v*w,this._z=m*v*w+x*y*_,this._w=m*v*_+x*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],_=n[10],x=r+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(v-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),_=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),_=2*(u*r-f*n);return this.x=n+p*m+f*_-d*v,this.y=r+p*v+d*m-u*_,this.z=a+p*_+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new ne,Dp=new Io;class Fo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ii):ii.fromBufferAttribute(u,f),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ya.copy(r.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),qa.subVectors(this.max,To),ys.subVectors(e.a,To),Ms.subVectors(e.b,To),Es.subVectors(e.c,To),ur.subVectors(Ms,ys),cr.subVectors(Es,Ms),Ur.subVectors(ys,Es);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ur.z,Ur.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ur.z,0,-Ur.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ur.y,Ur.x,0];return!xc(n,ys,Ms,Es,qa)||(n=[1,0,0,0,1,0,0,0,1],!xc(n,ys,Ms,Es,qa))?!1:($a.crossVectors(ur,cr),n=[$a.x,$a.y,$a.z],xc(n,ys,Ms,Es,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ii=new ne,Ya=new Fo,ys=new ne,Ms=new ne,Es=new ne,ur=new ne,cr=new ne,Ur=new ne,To=new ne,qa=new ne,$a=new ne,Ir=new ne;function xc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Ir.fromArray(o,u);const d=a.x*Math.abs(Ir.x)+a.y*Math.abs(Ir.y)+a.z*Math.abs(Ir.z),p=e.dot(Ir),m=n.dot(Ir),v=r.dot(Ir);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Ov=new Fo,wo=new ne,Sc=new ne;class Rl{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Ov.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const n=wo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(wo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(Sc)),this.expandByPoint(wo.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new ne,yc=new ne,Ka=new ne,fr=new ne,Mc=new ne,Za=new ne,Ec=new ne;class Lm{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){yc.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(yc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ka),d=fr.dot(this.direction),p=-fr.dot(Ka),m=fr.lengthSq(),v=Math.abs(1-f*f);let _,x,y,w;if(v>0)if(_=f*p-d,x=f*d-p,w=u*v,_>=0)if(x>=-w)if(x<=w){const T=1/v;_*=T,x*=T,y=_*(_+f*x+2*d)+x*(f*_+x+2*p)+m}else x=u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;else x=-u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;else x<=-w?(_=Math.max(0,-(-f*u+d)),x=_>0?-u:Math.min(Math.max(-u,-p),u),y=-_*_+x*(x+2*p)+m):x<=w?(_=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(_=Math.max(0,-(f*u+d)),x=_>0?u:Math.min(Math.max(-u,-p),u),y=-_*_+x*(x+2*p)+m);else x=f>0?-u:u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(yc).addScaledVector(Ka,x),y}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const r=Pi.dot(this.direction),a=Pi.dot(Pi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),_>=0?(d=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,r,a,u){Mc.subVectors(n,e),Za.subVectors(r,e),Ec.crossVectors(Mc,Za);let f=this.direction.dot(Ec),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const p=d*this.direction.dot(Za.crossVectors(fr,Za));if(p<0)return null;const m=d*this.direction.dot(Mc.cross(fr));if(m<0||p+m>f)return null;const v=-d*fr.dot(Ec);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,r,a,u,f,d,p,m,v,_,x,y,w,T,S){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,_,x,y,w,T,S)}set(e,n,r,a,u,f,d,p,m,v,_,x,y,w,T,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=x,g[3]=y,g[7]=w,g[11]=T,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=f*v,y=f*_,w=d*v,T=d*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=y+w*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=w+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,y=p*_,w=m*v,T=m*_;n[0]=x+T*d,n[4]=w*d-y,n[8]=f*m,n[1]=f*_,n[5]=f*v,n[9]=-d,n[2]=y*d-w,n[6]=T+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,y=p*_,w=m*v,T=m*_;n[0]=x-T*d,n[4]=-f*_,n[8]=w+y*d,n[1]=y+w*d,n[5]=f*v,n[9]=T-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,y=f*_,w=d*v,T=d*_;n[0]=p*v,n[4]=w*m-y,n[8]=x*m+T,n[1]=p*_,n[5]=T*m+x,n[9]=y*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,w=d*p,T=d*m;n[0]=p*v,n[4]=T-x*_,n[8]=w*_+y,n[1]=_,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*_+w,n[10]=x-T*_}else if(e.order==="XZY"){const x=f*p,y=f*m,w=d*p,T=d*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=x*_+T,n[5]=f*v,n[9]=y*_-w,n[2]=w*_-y,n[6]=d*v,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kv,e,Bv)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),dr.crossVectors(r,kn),dr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),dr.crossVectors(r,kn)),dr.normalize(),Qa.crossVectors(kn,dr),a[0]=dr.x,a[4]=Qa.x,a[8]=kn.x,a[1]=dr.y,a[5]=Qa.y,a[9]=kn.y,a[2]=dr.z,a[6]=Qa.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],x=r[9],y=r[13],w=r[2],T=r[6],S=r[10],g=r[14],U=r[3],L=r[7],P=r[11],W=r[15],z=a[0],F=a[4],j=a[8],b=a[12],R=a[1],C=a[5],ee=a[9],$=a[13],ue=a[2],fe=a[6],ae=a[10],le=a[14],B=a[3],re=a[7],oe=a[11],I=a[15];return u[0]=f*z+d*R+p*ue+m*B,u[4]=f*F+d*C+p*fe+m*re,u[8]=f*j+d*ee+p*ae+m*oe,u[12]=f*b+d*$+p*le+m*I,u[1]=v*z+_*R+x*ue+y*B,u[5]=v*F+_*C+x*fe+y*re,u[9]=v*j+_*ee+x*ae+y*oe,u[13]=v*b+_*$+x*le+y*I,u[2]=w*z+T*R+S*ue+g*B,u[6]=w*F+T*C+S*fe+g*re,u[10]=w*j+T*ee+S*ae+g*oe,u[14]=w*b+T*$+S*le+g*I,u[3]=U*z+L*R+P*ue+W*B,u[7]=U*F+L*C+P*fe+W*re,u[11]=U*j+L*ee+P*ae+W*oe,u[15]=U*b+L*$+P*le+W*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],_=e[6],x=e[10],y=e[14],w=e[3],T=e[7],S=e[11],g=e[15];return w*(+u*p*_-a*m*_-u*d*x+r*m*x+a*d*y-r*p*y)+T*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*v-u*p*v)+S*(+n*m*_-n*d*y-u*f*_+r*f*y+u*d*v-r*m*v)+g*(-a*d*v-n*p*_+n*d*x+a*f*_-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=e[9],x=e[10],y=e[11],w=e[12],T=e[13],S=e[14],g=e[15],U=_*S*m-T*x*m+T*p*y-d*S*y-_*p*g+d*x*g,L=w*x*m-v*S*m-w*p*y+f*S*y+v*p*g-f*x*g,P=v*T*m-w*_*m+w*d*y-f*T*y-v*d*g+f*_*g,W=w*_*p-v*T*p-w*d*x+f*T*x+v*d*S-f*_*S,z=n*U+r*L+a*P+u*W;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=U*F,e[1]=(T*x*u-_*S*u-T*a*y+r*S*y+_*a*g-r*x*g)*F,e[2]=(d*S*u-T*p*u+T*a*m-r*S*m-d*a*g+r*p*g)*F,e[3]=(_*p*u-d*x*u-_*a*m+r*x*m+d*a*y-r*p*y)*F,e[4]=L*F,e[5]=(v*S*u-w*x*u+w*a*y-n*S*y-v*a*g+n*x*g)*F,e[6]=(w*p*u-f*S*u-w*a*m+n*S*m+f*a*g-n*p*g)*F,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*y+n*p*y)*F,e[8]=P*F,e[9]=(w*_*u-v*T*u-w*r*y+n*T*y+v*r*g-n*_*g)*F,e[10]=(f*T*u-w*d*u+w*r*m-n*T*m-f*r*g+n*d*g)*F,e[11]=(v*d*u-f*_*u-v*r*m+n*_*m+f*r*y-n*d*y)*F,e[12]=W*F,e[13]=(v*T*a-w*_*a+w*r*x-n*T*x-v*r*S+n*_*S)*F,e[14]=(w*d*a-f*T*a-w*r*p+n*T*p+f*r*S-n*d*S)*F,e[15]=(f*_*a-v*d*a+v*r*p-n*_*p-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,_=d+d,x=u*m,y=u*v,w=u*_,T=f*v,S=f*_,g=d*_,U=p*m,L=p*v,P=p*_,W=r.x,z=r.y,F=r.z;return a[0]=(1-(T+g))*W,a[1]=(y+P)*W,a[2]=(w-L)*W,a[3]=0,a[4]=(y-P)*z,a[5]=(1-(x+g))*z,a[6]=(S+U)*z,a[7]=0,a[8]=(w+L)*F,a[9]=(S-U)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const f=Ts.set(a[4],a[5],a[6]).length(),d=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,v=1/f,_=1/d;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=v,ri.elements[5]*=v,ri.elements[6]*=v,ri.elements[8]*=_,ri.elements[9]*=_,ri.elements[10]*=_,n.setFromRotationMatrix(ri),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Fi){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),_=(n+e)/(n-e),x=(r+a)/(r-a);let y,w;if(d===Fi)y=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Tl)y=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Fi){const p=this.elements,m=1/(n-e),v=1/(r-a),_=1/(f-u),x=(n+e)*m,y=(r+a)*v;let w,T;if(d===Fi)w=(f+u)*_,T=-2*_;else if(d===Tl)w=u*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new ne,ri=new Wt,kv=new ne(0,0,0),Bv=new ne(1,1,1),dr=new ne,Qa=new ne,kn=new ne,Lp=new Wt,Np=new Io;class Bi{constructor(e=0,n=0,r=0,a=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],_=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zv=0;const Up=new ne,ws=new Io,bi=new Wt,Ja=new ne,Ao=new ne,Hv=new ne,Vv=new Io,Ip=new ne(1,0,0),Fp=new ne(0,1,0),Op=new ne(0,0,1),kp={type:"added"},Gv={type:"removed"},As={type:"childadded",child:null},Tc={type:"childremoved",child:null};class Nn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new ne,n=new Bi,r=new Io,a=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new at}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Fp,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Fp,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ja.copy(e):Ja.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ao,Ja,this.up):bi.lookAt(Ja,Ao,this.up),this.quaternion.setFromRotationMatrix(bi),a&&(bi.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(bi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Gv),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Vv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),_=f(e.shapes),x=f(e.skeletons),y=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Nn.DEFAULT_UP=new ne(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ne,Di=new ne,wc=new ne,Li=new ne,Rs=new ne,Cs=new ne,Bp=new ne,Ac=new ne,Rc=new ne,Cc=new ne,Pc=new Gt,bc=new Gt,Dc=new Gt;class oi{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Di.subVectors(r,n),wc.subVectors(e,n);const f=si.dot(si),d=si.dot(Di),p=si.dot(wc),m=Di.dot(Di),v=Di.dot(wc),_=f*m-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,y=(m*p-d*v)*x,w=(f*v-d*p)*x;return u.set(1-y-w,w,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Li.x),p.addScaledVector(f,Li.y),p.addScaledVector(d,Li.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Pc.setScalar(0),bc.setScalar(0),Dc.setScalar(0),Pc.fromBufferAttribute(e,n),bc.fromBufferAttribute(e,r),Dc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Pc,u.x),f.addScaledVector(bc,u.y),f.addScaledVector(Dc,u.z),f}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Di.subVectors(e,n),si.cross(Di).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Rs.subVectors(a,r),Cs.subVectors(u,r),Ac.subVectors(e,r);const p=Rs.dot(Ac),m=Cs.dot(Ac);if(p<=0&&m<=0)return n.copy(r);Rc.subVectors(e,a);const v=Rs.dot(Rc),_=Cs.dot(Rc);if(v>=0&&_<=v)return n.copy(a);const x=p*_-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Rs,f);Cc.subVectors(e,u);const y=Rs.dot(Cc),w=Cs.dot(Cc);if(w>=0&&y<=w)return n.copy(u);const T=y*m-p*w;if(T<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Cs,d);const S=v*w-y*_;if(S<=0&&_-v>=0&&y-w>=0)return Bp.subVectors(u,a),d=(_-v)/(_-v+(y-w)),n.copy(a).addScaledVector(Bp,d);const g=1/(S+T+x);return f=T*g,d=x*g,n.copy(r).addScaledVector(Rs,f).addScaledVector(Cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Lc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Av(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Lc(f,u,e+1/3),this.g=Lc(f,u,e),this.b=Lc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=Yn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const r=Um[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Mt.fromWorkingColorSpace(gn.copy(this),e),Math.round(gt(gn.r*255,0,255))*65536+Math.round(gt(gn.g*255,0,255))*256+Math.round(gt(gn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,u=gn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=v<=.5?_/(f+d):_/(2-f-d),f){case r:p=(a-u)/_+(a<u?6:0);break;case a:p=(u-r)/_+2;break;case u:p=(r-a)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Yn){Mt.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(el);const r=mc(hr.h,el.h,n),a=mc(hr.s,el.s,n),u=mc(hr.l,el.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Tt;Tt.NAMES=Um;let Wv=0;class Oo extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=Us,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gc&&(r.blendSrc=this.blendSrc),this.blendDst!==Wc&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hf extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ne,tl=new Ct;let Xv=0;class Kn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ap,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array),u=bn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}}class Im extends Kn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Fm extends Kn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class jr extends Kn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let jv=0;const jn=new Wt,Nc=new Nn,Ps=new ne,Bn=new Fo,Ro=new Fo,sn=new ne;class zi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Fm:Im)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new at().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new jr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Bn.setFromBufferAttribute(u),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Ro.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(Bn.min,Ro.min),Bn.expandByPoint(sn),sn.addVectors(Bn.max,Ro.max),Bn.expandByPoint(sn)):(Bn.expandByPoint(Ro.min),Bn.expandByPoint(Ro.max))}Bn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)sn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)sn.fromBufferAttribute(d,m),p&&(Ps.fromBufferAttribute(e,m),sn.add(Ps)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let j=0;j<r.count;j++)d[j]=new ne,p[j]=new ne;const m=new ne,v=new ne,_=new ne,x=new Ct,y=new Ct,w=new Ct,T=new ne,S=new ne;function g(j,b,R){m.fromBufferAttribute(r,j),v.fromBufferAttribute(r,b),_.fromBufferAttribute(r,R),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,b),w.fromBufferAttribute(u,R),v.sub(m),_.sub(m),y.sub(x),w.sub(x);const C=1/(y.x*w.y-w.x*y.y);isFinite(C)&&(T.copy(v).multiplyScalar(w.y).addScaledVector(_,-y.y).multiplyScalar(C),S.copy(_).multiplyScalar(y.x).addScaledVector(v,-w.x).multiplyScalar(C),d[j].add(T),d[b].add(T),d[R].add(T),p[j].add(S),p[b].add(S),p[R].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,b=U.length;j<b;++j){const R=U[j],C=R.start,ee=R.count;for(let $=C,ue=C+ee;$<ue;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new ne,P=new ne,W=new ne,z=new ne;function F(j){W.fromBufferAttribute(a,j),z.copy(W);const b=d[j];L.copy(b),L.sub(W.multiplyScalar(W.dot(b))).normalize(),P.crossVectors(z,b);const C=P.dot(p[j])<0?-1:1;f.setXYZW(j,L.x,L.y,L.z,C)}for(let j=0,b=U.length;j<b;++j){const R=U[j],C=R.start,ee=R.count;for(let $=C,ue=C+ee;$<ue;$+=3)F(e.getX($+0)),F(e.getX($+1)),F(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ne,u=new ne,f=new ne,d=new ne,p=new ne,m=new ne,v=new ne,_=new ne;if(e)for(let x=0,y=e.count;x<y;x+=3){const w=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),v.subVectors(f,u),_.subVectors(a,u),v.cross(_),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),_.subVectors(a,u),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,_=d.normalized,x=new m.constructor(p.length*v);let y=0,w=0;for(let T=0,S=p.length;T<S;T++){d.isInterleavedBufferAttribute?y=p[T]*d.data.stride+d.offset:y=p[T]*v;for(let g=0;g<v;g++)x[w++]=m[y++]}return new Kn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,_=m.length;v<_;v++){const x=m[v],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];v.push(y.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],_=u[m];for(let x=0,y=_.length;x<y;x++)v.push(_[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zp=new Wt,Fr=new Lm,nl=new Rl,Hp=new ne,il=new ne,rl=new ne,sl=new ne,Uc=new ne,ol=new ne,Vp=new ne,al=new ne;class $n extends Nn{constructor(e=new zi,n=new Hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ol.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],_=u[p];v!==0&&(Uc.fromBufferAttribute(_,e),f?ol.addScaledVector(Uc,v):ol.addScaledVector(Uc.sub(n),v))}n.add(ol)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(u),Fr.copy(e.ray).recast(e.near),!(nl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(nl,Hp)===null||Fr.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(zp.copy(u).invert(),Fr.copy(e.ray).applyMatrix4(zp),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,T=x.length;w<T;w++){const S=x[w],g=f[S.materialIndex],U=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let P=U,W=L;P<W;P+=3){const z=d.getX(P),F=d.getX(P+1),j=d.getX(P+2);a=ll(this,g,e,r,m,v,_,z,F,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=w,g=T;S<g;S+=3){const U=d.getX(S),L=d.getX(S+1),P=d.getX(S+2);a=ll(this,f,e,r,m,v,_,U,L,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,T=x.length;w<T;w++){const S=x[w],g=f[S.materialIndex],U=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let P=U,W=L;P<W;P+=3){const z=P,F=P+1,j=P+2;a=ll(this,g,e,r,m,v,_,z,F,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let S=w,g=T;S<g;S+=3){const U=S,L=S+1,P=S+2;a=ll(this,f,e,r,m,v,_,U,L,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function Yv(o,e,n,r,a,u,f,d){let p;if(e.side===Dn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===vr,d),p===null)return null;al.copy(d),al.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(al);return m<n.near||m>n.far?null:{distance:m,point:al.clone(),object:o}}function ll(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,il),o.getVertexPosition(p,rl),o.getVertexPosition(m,sl);const v=Yv(o,e,n,r,il,rl,sl,Vp);if(v){const _=new ne;oi.getBarycoord(Vp,il,rl,sl,_),a&&(v.uv=oi.getInterpolatedAttribute(a,d,p,m,_,new Ct)),u&&(v.uv1=oi.getInterpolatedAttribute(u,d,p,m,_,new Ct)),f&&(v.normal=oi.getInterpolatedAttribute(f,d,p,m,_,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ne,materialIndex:0};oi.getNormal(il,rl,sl,x.normal),v.face=x,v.barycoord=_}return v}class Vs extends zi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],_=[];let x=0,y=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new jr(m,3)),this.setAttribute("normal",new jr(v,3)),this.setAttribute("uv",new jr(_,2));function w(T,S,g,U,L,P,W,z,F,j,b){const R=P/F,C=W/j,ee=P/2,$=W/2,ue=z/2,fe=F+1,ae=j+1;let le=0,B=0;const re=new ne;for(let oe=0;oe<ae;oe++){const I=oe*C-$;for(let ie=0;ie<fe;ie++){const Ue=ie*R-ee;re[T]=Ue*U,re[S]=I*L,re[g]=ue,m.push(re.x,re.y,re.z),re[T]=0,re[S]=0,re[g]=z>0?1:-1,v.push(re.x,re.y,re.z),_.push(ie/F),_.push(1-oe/j),le+=1}}for(let oe=0;oe<j;oe++)for(let I=0;I<F;I++){const ie=x+I+fe*oe,Ue=x+I+fe*(oe+1),Q=x+(I+1)+fe*(oe+1),me=x+(I+1)+fe*oe;p.push(ie,Ue,me),p.push(Ue,Q,me),B+=6}d.addGroup(y,B,b),y+=B,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(o){const e={};for(let n=0;n<o.length;n++){const r=zs(o[n]);for(const a in r)e[a]=r[a]}return e}function qv(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Om(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const $v={clone:zs,merge:Mn};var Kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kv,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class km extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ne,Gp=new Ct,Wp=new Ct;class qn extends km{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pf*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Gp,Wp),n.subVectors(Wp,Gp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ds=1;class Qv extends Nn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(bs,Ds,e,n);a.layers=this.layers,this.add(a);const u=new qn(bs,Ds,e,n);u.layers=this.layers,this.add(u);const f=new qn(bs,Ds,e,n);f.layers=this.layers,this.add(f);const d=new qn(bs,Ds,e,n);d.layers=this.layers,this.add(d);const p=new qn(bs,Ds,e,n);p.layers=this.layers,this.add(p);const m=new qn(bs,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,x,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Bm extends Ln{constructor(e=[],n=Os,r,a,u,f,d,p,m,v){super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Bm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Vs(5,5,5),u=new xr({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:gr});u.uniforms.tEquirect.value=n;const f=new $n(a,u),d=n.minFilter;return n.minFilter===Xr&&(n.minFilter=gi),new Qv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class ul extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e0={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,r),g=this._getHandJoint(m,T);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),y=.02,w=.005;m.inputState.pinching&&x>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ul;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class t0 extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fc=new ne,n0=new ne,i0=new at;class zr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Fc.subVectors(r,n).cross(n0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Fc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||i0.getNormalMatrix(e),a=this.coplanarPoint(Fc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Rl,cl=new ne;class zm{constructor(e=new zr,n=new zr,r=new zr,a=new zr,u=new zr,f=new zr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],_=a[6],x=a[7],y=a[8],w=a[9],T=a[10],S=a[11],g=a[12],U=a[13],L=a[14],P=a[15];if(r[0].setComponents(p-u,x-m,S-y,P-g).normalize(),r[1].setComponents(p+u,x+m,S+y,P+g).normalize(),r[2].setComponents(p+f,x+v,S+w,P+U).normalize(),r[3].setComponents(p-f,x-v,S-w,P-U).normalize(),r[4].setComponents(p-d,x-_,S-T,P-L).normalize(),n===Fi)r[5].setComponents(p+d,x+_,S+T,P+L).normalize();else if(n===Tl)r[5].setComponents(d,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hm extends Oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xp=new Wt,bf=new Lm,fl=new Rl,dl=new ne;class r0 extends Nn{constructor(e=new zi,n=new Hm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(a),fl.radius+=u,e.ray.intersectsSphere(fl)===!1)return;Xp.copy(a).invert(),bf.copy(e.ray).applyMatrix4(Xp);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),y=Math.min(m.count,f.start+f.count);for(let w=x,T=y;w<T;w++){const S=m.getX(w);dl.fromBufferAttribute(_,S),jp(dl,S,p,a,e,n,this)}}else{const x=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let w=x,T=y;w<T;w++)dl.fromBufferAttribute(_,w),jp(dl,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function jp(o,e,n,r,a,u,f){const d=bf.distanceSqToPoint(o);if(d<n){const p=new ne;bf.closestPointToPoint(o,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Vm extends Ln{constructor(e,n,r=Yr,a,u,f,d=li,p=li,m,v=Do){if(v!==Do&&v!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Cl extends zi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,_=e/d,x=n/p,y=[],w=[],T=[],S=[];for(let g=0;g<v;g++){const U=g*x-f;for(let L=0;L<m;L++){const P=L*_-u;w.push(P,-U,0),T.push(0,0,1),S.push(L/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let U=0;U<d;U++){const L=U+m*g,P=U+m*(g+1),W=U+1+m*(g+1),z=U+1+m*g;y.push(L,P,z),y.push(P,W,z)}this.setIndex(y),this.setAttribute("position",new jr(w,3)),this.setAttribute("normal",new jr(T,3)),this.setAttribute("uv",new jr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class s0 extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o0 extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class a0 extends km{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class l0 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Yp(o,e,n,r){const a=u0(r);switch(n){case Tm:return o*e;case Am:return o*e/a.components*a.byteLength;case Of:return o*e/a.components*a.byteLength;case Rm:return o*e*2/a.components*a.byteLength;case kf:return o*e*2/a.components*a.byteLength;case wm:return o*e*3/a.components*a.byteLength;case ai:return o*e*4/a.components*a.byteLength;case Bf:return o*e*4/a.components*a.byteLength;case gl:case _l:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(o,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(o,8)*Math.max(e,8)/2;case af:case lf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case uf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case hf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case _f:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case vf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Tf:case wf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Cm:case Af:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Rf:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function u0(o){switch(o){case ki:case ym:return{byteLength:1,components:1};case Po:case Mm:case No:return{byteLength:2,components:1};case If:case Ff:return{byteLength:2,components:4};case Yr:case Uf:case Ii:return{byteLength:4,components:1};case Em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gm(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function c0(o){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,_=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,v);else{_.sort((y,w)=>y.start-w.start);let x=0;for(let y=1;y<_.length;y++){const w=_[x],T=_[y];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,w=_.length;y<w;y++){const T=_[y];o.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
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
#endif`,ux=`struct PhysicalMaterial {
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
}`,cx=`
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$x=`float getShadowMask() {
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
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
}`,_S=`#if DEPTH_PACKING == 3200
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
}`,vS=`#define DISTANCE
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
}`,xS=`#define DISTANCE
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,wS=`uniform vec3 diffuse;
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
}`,AS=`#define LAMBERT
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
}`,RS=`#define LAMBERT
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
}`,PS=`#define MATCAP
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
}`,bS=`#define NORMAL
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
}`,DS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,US=`#define STANDARD
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
}`,IS=`#define STANDARD
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
}`,FS=`#define TOON
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
}`,OS=`#define TOON
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
}`,kS=`uniform float size;
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
}`,BS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,VS=`uniform float rotation;
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
}`,GS=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:f0,alphahash_pars_fragment:d0,alphamap_fragment:h0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:v0,batching_pars_vertex:x0,batching_vertex:S0,begin_vertex:y0,beginnormal_vertex:M0,bsdfs:E0,iridescence_fragment:T0,bumpmap_pars_fragment:w0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:P0,color_fragment:b0,color_pars_fragment:D0,color_pars_vertex:L0,color_vertex:N0,common:U0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:k0,emissivemap_fragment:B0,emissivemap_pars_fragment:z0,colorspace_fragment:H0,colorspace_pars_fragment:V0,envmap_fragment:G0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:ix,envmap_vertex:Y0,fog_vertex:q0,fog_pars_vertex:$0,fog_fragment:K0,fog_pars_fragment:Z0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:J0,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:rx,lights_toon_pars_fragment:sx,lights_phong_fragment:ox,lights_phong_pars_fragment:ax,lights_physical_fragment:lx,lights_physical_pars_fragment:ux,lights_fragment_begin:cx,lights_fragment_maps:fx,lights_fragment_end:dx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:_x,map_pars_fragment:vx,map_particle_fragment:xx,map_particle_pars_fragment:Sx,metalnessmap_fragment:yx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Ex,morphcolor_vertex:Tx,morphnormal_vertex:wx,morphtarget_pars_vertex:Ax,morphtarget_vertex:Rx,normal_fragment_begin:Cx,normal_fragment_maps:Px,normal_pars_fragment:bx,normal_pars_vertex:Dx,normal_vertex:Lx,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Fx,iridescence_pars_fragment:Ox,opaque_fragment:kx,packing:Bx,premultiplied_alpha_fragment:zx,project_vertex:Hx,dithering_fragment:Vx,dithering_pars_fragment:Gx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Yx,shadowmap_vertex:qx,shadowmask_pars_fragment:$x,skinbase_vertex:Kx,skinning_pars_vertex:Zx,skinning_vertex:Qx,skinnormal_vertex:Jx,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:rS,transmission_pars_fragment:sS,uv_pars_fragment:oS,uv_pars_vertex:aS,uv_vertex:lS,worldpos_vertex:uS,background_vert:cS,background_frag:fS,backgroundCube_vert:dS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:_S,distanceRGBA_vert:vS,distanceRGBA_frag:xS,equirect_vert:SS,equirect_frag:yS,linedashed_vert:MS,linedashed_frag:ES,meshbasic_vert:TS,meshbasic_frag:wS,meshlambert_vert:AS,meshlambert_frag:RS,meshmatcap_vert:CS,meshmatcap_frag:PS,meshnormal_vert:bS,meshnormal_frag:DS,meshphong_vert:LS,meshphong_frag:NS,meshphysical_vert:US,meshphysical_frag:IS,meshtoon_vert:FS,meshtoon_frag:OS,points_vert:kS,points_frag:BS,shadow_vert:zS,shadow_frag:HS,sprite_vert:VS,sprite_frag:GS},Pe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},mi={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};mi.physical={uniforms:Mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const hl={r:0,b:0,g:0},kr=new Bi,WS=new Wt;function XS(o,e,n,r,a,u,f){const d=new Tt(0);let p=u===!0?0:1,m,v,_=null,x=0,y=null;function w(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function T(L){let P=!1;const W=w(L);W===null?g(d,p):W&&W.isColor&&(g(W,1),P=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,P){const W=w(P);W&&(W.isCubeTexture||W.mapping===Al)?(v===void 0&&(v=new $n(new Vs(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:zs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),kr.copy(P.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.material.uniforms.envMap.value=W,v.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(kr)),v.material.toneMapped=Mt.getTransfer(W.colorSpace)!==At,(_!==W||x!==W.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,_=W,x=W.version,y=o.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):W&&W.isTexture&&(m===void 0&&(m=new $n(new Cl(2,2),new xr({name:"BackgroundMaterial",uniforms:zs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=W,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(W.colorSpace)!==At,W.matrixAutoUpdate===!0&&W.updateMatrix(),m.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||x!==W.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,_=W,x=W.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,P){L.getRGB(hl,Om(o)),r.buffers.color.setClear(hl.r,hl.g,hl.b,P,f)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),p=P,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:T,addToRenderList:S,dispose:U}}function jS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(R,C,ee,$,ue){let fe=!1;const ae=_($,ee,C);u!==ae&&(u=ae,m(u.object)),fe=y(R,$,ee,ue),fe&&w(R,$,ee,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,P(R,C,ee,$),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function _(R,C,ee){const $=ee.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let fe=ue[C.id];fe===void 0&&(fe={},ue[C.id]=fe);let ae=fe[$];return ae===void 0&&(ae=x(p()),fe[$]=ae),ae}function x(R){const C=[],ee=[],$=[];for(let ue=0;ue<n;ue++)C[ue]=0,ee[ue]=0,$[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:ee,attributeDivisors:$,object:R,attributes:{},index:null}}function y(R,C,ee,$){const ue=u.attributes,fe=C.attributes;let ae=0;const le=ee.getAttributes();for(const B in le)if(le[B].location>=0){const oe=ue[B];let I=fe[B];if(I===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),oe===void 0||oe.attribute!==I||I&&oe.data!==I.data)return!0;ae++}return u.attributesNum!==ae||u.index!==$}function w(R,C,ee,$){const ue={},fe=C.attributes;let ae=0;const le=ee.getAttributes();for(const B in le)if(le[B].location>=0){let oe=fe[B];oe===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const I={};I.attribute=oe,oe&&oe.data&&(I.data=oe.data),ue[B]=I,ae++}u.attributes=ue,u.attributesNum=ae,u.index=$}function T(){const R=u.newAttributes;for(let C=0,ee=R.length;C<ee;C++)R[C]=0}function S(R){g(R,0)}function g(R,C){const ee=u.newAttributes,$=u.enabledAttributes,ue=u.attributeDivisors;ee[R]=1,$[R]===0&&(o.enableVertexAttribArray(R),$[R]=1),ue[R]!==C&&(o.vertexAttribDivisor(R,C),ue[R]=C)}function U(){const R=u.newAttributes,C=u.enabledAttributes;for(let ee=0,$=C.length;ee<$;ee++)C[ee]!==R[ee]&&(o.disableVertexAttribArray(ee),C[ee]=0)}function L(R,C,ee,$,ue,fe,ae){ae===!0?o.vertexAttribIPointer(R,C,ee,ue,fe):o.vertexAttribPointer(R,C,ee,$,ue,fe)}function P(R,C,ee,$){T();const ue=$.attributes,fe=ee.getAttributes(),ae=C.defaultAttributeValues;for(const le in fe){const B=fe[le];if(B.location>=0){let re=ue[le];if(re===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const oe=re.normalized,I=re.itemSize,ie=e.get(re);if(ie===void 0)continue;const Ue=ie.buffer,Q=ie.type,me=ie.bytesPerElement,Ee=Q===o.INT||Q===o.UNSIGNED_INT||re.gpuType===Uf;if(re.isInterleavedBufferAttribute){const xe=re.data,we=xe.stride,je=re.offset;if(xe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<B.locationSize;Ge++)g(B.location+Ge,xe.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ge=0;Ge<B.locationSize;Ge++)S(B.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let Ge=0;Ge<B.locationSize;Ge++)L(B.location+Ge,I/B.locationSize,Q,oe,we*me,(je+I/B.locationSize*Ge)*me,Ee)}else{if(re.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe,re.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<B.locationSize;xe++)S(B.location+xe);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let xe=0;xe<B.locationSize;xe++)L(B.location+xe,I/B.locationSize,Q,oe,I*me,I/B.locationSize*xe*me,Ee)}}else if(ae!==void 0){const oe=ae[le];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(B.location,oe);break;case 3:o.vertexAttrib3fv(B.location,oe);break;case 4:o.vertexAttrib4fv(B.location,oe);break;default:o.vertexAttrib1fv(B.location,oe)}}}}U()}function W(){j();for(const R in r){const C=r[R];for(const ee in C){const $=C[ee];for(const ue in $)v($[ue].object),delete $[ue];delete C[ee]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const C=r[R.id];for(const ee in C){const $=C[ee];for(const ue in $)v($[ue].object),delete $[ue];delete C[ee]}delete r[R.id]}function F(R){for(const C in r){const ee=r[C];if(ee[R.id]===void 0)continue;const $=ee[R.id];for(const ue in $)v($[ue].object),delete $[ue];delete ee[R.id]}}function j(){b(),f=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:b,dispose:W,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function YS(o,e,n){let r;function a(m){r=m}function u(m,v){o.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,_){_!==0&&(o.drawArraysInstanced(r,m,v,_),n.update(v,r,_))}function d(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let y=0;for(let w=0;w<_;w++)y+=v[w];n.update(y,r,1)}function p(m,v,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<m.length;w++)f(m[w],v[w],x[w]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let w=0;for(let T=0;T<_;T++)w+=v[T]*x[T];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function qS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(F){return!(F!==ai&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const j=F===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ki&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!j)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),W=w>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:W,maxSamples:z}}function $S(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new zr,d=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||a;return a=x,r=_.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,y){const w=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,g=o.get(_);if(!a||w===null||w.length===0||u&&!S)u?v(null):m();else{const U=u?0:r,L=U*4;let P=g.clippingState||null;p.value=P,P=v(w,x,L,y);for(let W=0;W!==L;++W)P[W]=n[W];g.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,y,w){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=p.value,w!==!0||S===null){const g=y+T*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,P=y;L!==T;++L,P+=4)f.copy(_[L]).applyMatrix4(U,d),f.normal.toArray(S,P),S[P+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function KS(o){let e=new WeakMap;function n(f,d){return d===Qc?f.mapping=Os:d===Jc&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qc||d===Jc)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Jv(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ns=4,qp=[.125,.215,.35,.446,.526,.582],Gr=20,Oc=new a0,$p=new Tt;let kc=null,Bc=0,zc=0,Hc=!1;const Hr=(1+Math.sqrt(5))/2,Ls=1/Hr,Kp=[new ne(-Hr,Ls,0),new ne(Hr,Ls,0),new ne(-Ls,0,Hr),new ne(Ls,0,Hr),new ne(0,Hr,-Ls),new ne(0,Hr,Ls),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],ZS=new ne;class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=ZS}=u;kc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,Bc,zc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:No,format:ai,colorSpace:Bs,depthBuffer:!1},a=Qp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QS(u)),this._blurMaterial=JS(u,e,n)}return a}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,Oc)}_sceneToCubeUV(e,n,r,a,u){const p=new qn(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor($p),_.toneMapping=_r,_.autoClear=!1;const w=new Hf({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),T=new $n(new Vs,w);let S=!1;const g=e.background;g?g.isColor&&(w.color.copy(g),e.background=null,S=!0):(w.color.copy($p),S=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(p.up.set(0,m[U],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[U],u.y,u.z)):L===1?(p.up.set(0,0,m[U]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[U],u.z)):(p.up.set(0,m[U],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[U]));const P=this._cubeSize;pl(a,L*P,U>2?P:0,P,P),_.setRenderTarget(a),S&&_.render(T,p),_.render(e,p)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Os||e.mapping===ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new $n(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;pl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Oc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Kp[(a-u-1)%Kp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new $n(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Gr-1),T=u/w,S=isFinite(u)?1+Math.floor(v*T):Gr;S>Gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gr}`);const g=[];let U=0;for(let F=0;F<Gr;++F){const j=F/T,b=Math.exp(-j*j/2);g.push(b),F===0?U+=b:F<S&&(U+=2*b)}for(let F=0;F<g.length;F++)g[F]=g[F]/U;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=w,x.mipInt.value=L-r;const P=this._sizeLods[a],W=3*P*(a>L-Ns?a-L+Ns:0),z=4*(this._cubeSize-P);pl(n,W,z,3*P,2*P),p.setRenderTarget(n),p.render(_,Oc)}}function QS(o){const e=[],n=[],r=[];let a=o;const u=o-Ns+1+qp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Ns?p=qp[f-o+Ns-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,w=6,T=3,S=2,g=1,U=new Float32Array(T*w*y),L=new Float32Array(S*w*y),P=new Float32Array(g*w*y);for(let z=0;z<y;z++){const F=z%3*2/3-1,j=z>2?0:-1,b=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];U.set(b,T*w*z),L.set(x,S*w*z);const R=[z,z,z,z,z,z];P.set(R,g*w*z)}const W=new zi;W.setAttribute("position",new Kn(U,T)),W.setAttribute("uv",new Kn(L,S)),W.setAttribute("faceIndex",new Kn(P,g)),e.push(W),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Qp(o,e,n){const r=new qr(o,e,n);return r.texture.mapping=Al,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function JS(o,e,n){const r=new Float32Array(Gr),a=new ne(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Jp(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function em(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Vf(){return`

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
	`}function ey(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Qc||p===Jc,v=p===Os||p===ks;if(m||v){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Zp(o)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new Zp(o)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function ty(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&yl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function ny(o,e,n,r){const a={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,w=_.attributes.position;let T=0;if(y!==null){const U=y.array;T=y.version;for(let L=0,P=U.length;L<P;L+=3){const W=U[L+0],z=U[L+1],F=U[L+2];x.push(W,z,z,F,F,W)}}else if(w!==void 0){const U=w.array;T=w.version;for(let L=0,P=U.length/3-1;L<P;L+=3){const W=L+0,z=L+1,F=L+2;x.push(W,z,z,F,F,W)}}else return;const S=new(bm(x)?Fm:Im)(x,1);S.version=T;const g=u.get(_);g&&e.remove(g),u.set(_,S)}function v(_){const x=u.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function iy(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,w){w!==0&&(o.drawElementsInstanced(r,y,u,x*f,w),n.update(y,r,w))}function v(x,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,w);let S=0;for(let g=0;g<w;g++)S+=y[g];n.update(S,r,1)}function _(x,y,w,T){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)m(x[g]/f,y[g],T[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,T,0,w);let g=0;for(let U=0;U<w;U++)g+=y[U]*T[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function ry(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function sy(o,e,n){const r=new WeakMap,a=new Gt;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let R=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;w===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let W=d.attributes.position.count*P,z=1;W>e.maxTextureSize&&(z=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const F=new Float32Array(W*z*4*_),j=new Dm(F,W,z,_);j.type=Ii,j.needsUpdate=!0;const b=P*4;for(let C=0;C<_;C++){const ee=g[C],$=U[C],ue=L[C],fe=W*z*4*C;for(let ae=0;ae<ee.count;ae++){const le=ae*b;w===!0&&(a.fromBufferAttribute(ee,ae),F[fe+le+0]=a.x,F[fe+le+1]=a.y,F[fe+le+2]=a.z,F[fe+le+3]=0),T===!0&&(a.fromBufferAttribute($,ae),F[fe+le+4]=a.x,F[fe+le+5]=a.y,F[fe+le+6]=a.z,F[fe+le+7]=0),S===!0&&(a.fromBufferAttribute(ue,ae),F[fe+le+8]=a.x,F[fe+le+9]=a.y,F[fe+le+10]=a.z,F[fe+le+11]=ue.itemSize===4?a.w:1)}}x={count:_,texture:j,size:new Ct(W,z)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let S=0;S<m.length;S++)w+=m[S];const T=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function oy(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const Wm=new Ln,tm=new Vm(1,1),Xm=new Dm,jm=new Fv,Ym=new Bm,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Gs(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=nm[a];if(u===void 0&&(u=new Float32Array(a),nm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Zt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Qt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Pl(o,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function ay(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function ly(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2fv(this.addr,e),Qt(n,e)}}function uy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;o.uniform3fv(this.addr,e),Qt(n,e)}}function cy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4fv(this.addr,e),Qt(n,e)}}function fy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;om.set(r),o.uniformMatrix2fv(this.addr,!1,om),Qt(n,r)}}function dy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;sm.set(r),o.uniformMatrix3fv(this.addr,!1,sm),Qt(n,r)}}function hy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;rm.set(r),o.uniformMatrix4fv(this.addr,!1,rm),Qt(n,r)}}function py(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function my(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2iv(this.addr,e),Qt(n,e)}}function gy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;o.uniform3iv(this.addr,e),Qt(n,e)}}function _y(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4iv(this.addr,e),Qt(n,e)}}function vy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function xy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2uiv(this.addr,e),Qt(n,e)}}function Sy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;o.uniform3uiv(this.addr,e),Qt(n,e)}}function yy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4uiv(this.addr,e),Qt(n,e)}}function My(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(tm.compareFunction=Pm,u=tm):u=Wm,n.setTexture2D(e||u,a)}function Ey(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||jm,a)}function Ty(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Ym,a)}function wy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Xm,a)}function Ay(o){switch(o){case 5126:return ay;case 35664:return ly;case 35665:return uy;case 35666:return cy;case 35674:return fy;case 35675:return dy;case 35676:return hy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return xy;case 36295:return Sy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return wy}}function Ry(o,e){o.uniform1fv(this.addr,e)}function Cy(o,e){const n=Gs(e,this.size,2);o.uniform2fv(this.addr,n)}function Py(o,e){const n=Gs(e,this.size,3);o.uniform3fv(this.addr,n)}function by(o,e){const n=Gs(e,this.size,4);o.uniform4fv(this.addr,n)}function Dy(o,e){const n=Gs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Ly(o,e){const n=Gs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Ny(o,e){const n=Gs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Uy(o,e){o.uniform1iv(this.addr,e)}function Iy(o,e){o.uniform2iv(this.addr,e)}function Fy(o,e){o.uniform3iv(this.addr,e)}function Oy(o,e){o.uniform4iv(this.addr,e)}function ky(o,e){o.uniform1uiv(this.addr,e)}function By(o,e){o.uniform2uiv(this.addr,e)}function zy(o,e){o.uniform3uiv(this.addr,e)}function Hy(o,e){o.uniform4uiv(this.addr,e)}function Vy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Wm,u[f])}function Gy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||jm,u[f])}function Wy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Ym,u[f])}function Xy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Xm,u[f])}function jy(o){switch(o){case 5126:return Ry;case 35664:return Cy;case 35665:return Py;case 35666:return by;case 35674:return Dy;case 35675:return Ly;case 35676:return Ny;case 5124:case 35670:return Uy;case 35667:case 35671:return Iy;case 35668:case 35672:return Fy;case 35669:case 35673:return Oy;case 5125:return ky;case 36294:return By;case 36295:return zy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}class Yy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Ay(n.type)}}class qy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jy(n.type)}}class $y{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function am(o,e){o.seq.push(e),o.map[e.id]=e}function Ky(o,e,n){const r=o.name,a=r.length;for(Vc.lastIndex=0;;){const u=Vc.exec(r),f=Vc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){am(n,m===void 0?new Yy(d,o,e):new qy(d,o,e));break}else{let _=n.map[d];_===void 0&&(_=new $y(d),am(n,_)),n=_}}}class Ml{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);Ky(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function lm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const Zy=37297;let Qy=0;function Jy(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const um=new at;function eM(o){Mt._getMatrix(um,Mt.workingColorSpace,o);const e=`mat3( ${um.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(o)){case El:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function cm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+Jy(o.getShaderSource(e),f)}else return a}function tM(o,e){const n=eM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nM(o,e){let n;switch(e){case av:n="Linear";break;case lv:n="Reinhard";break;case uv:n="Cineon";break;case cv:n="ACESFilmic";break;case dv:n="AgX";break;case hv:n="Neutral";break;case fv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new ne;function iM(){Mt.getLuminanceCoefficients(ml);const o=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function sM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function oM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Co(o){return o!==""}function fm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(o){return o.replace(aM,uM)}const lM=new Map;function uM(o,e){let n=lt[e];if(n===void 0){const r=lM.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(o){return o.replace(cM,fM)}function fM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function pm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function dM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===z_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function mM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xm:e="ENVMAP_BLENDING_MULTIPLY";break;case sv:e="ENVMAP_BLENDING_MIX";break;case ov:e="ENVMAP_BLENDING_ADD";break}return e}function gM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function _M(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=dM(n),m=hM(n),v=pM(n),_=mM(n),x=gM(n),y=rM(n),w=sM(u),T=a.createProgram();let S,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Co).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Co).join(`
`),g.length>0&&(g+=`
`)):(S=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),g=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?lt.tonemapping_pars_fragment:"",n.toneMapping!==_r?nM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,tM("linearToOutputTexel",n.outputColorSpace),iM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),f=Df(f),f=fm(f,n),f=dm(f,n),d=Df(d),d=fm(d,n),d=dm(d,n),f=hm(f),d=hm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=U+S+f,P=U+g+d,W=lm(a,a.VERTEX_SHADER,L),z=lm(a,a.FRAGMENT_SHADER,P);a.attachShader(T,W),a.attachShader(T,z),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(C){if(o.debug.checkShaderErrors){const ee=a.getProgramInfoLog(T).trim(),$=a.getShaderInfoLog(W).trim(),ue=a.getShaderInfoLog(z).trim();let fe=!0,ae=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(fe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,T,W,z);else{const le=cm(a,W,"vertex"),B=cm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+ee+`
`+le+`
`+B)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):($===""||ue==="")&&(ae=!1);ae&&(C.diagnostics={runnable:fe,programLog:ee,vertexShader:{log:$,prefix:S},fragmentShader:{log:ue,prefix:g}})}a.deleteShader(W),a.deleteShader(z),j=new Ml(a,T),b=oM(a,T)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(T,Zy)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qy++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=z,this}let vM=0;class xM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new SM(e),n.set(e,r)),r}}class SM{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}}function yM(o,e,n,r,a,u,f){const d=new Nm,p=new xM,m=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function S(b,R,C,ee,$){const ue=ee.fog,fe=$.geometry,ae=b.isMeshStandardMaterial?ee.environment:null,le=(b.isMeshStandardMaterial?n:e).get(b.envMap||ae),B=le&&le.mapping===Al?le.image.height:null,re=w[b.type];b.precision!==null&&(y=a.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const oe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,I=oe!==void 0?oe.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let Ue,Q,me,Ee;if(re){const vt=mi[re];Ue=vt.vertexShader,Q=vt.fragmentShader}else Ue=b.vertexShader,Q=b.fragmentShader,p.update(b),me=p.getVertexShaderID(b),Ee=p.getFragmentShaderID(b);const xe=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),je=$.isInstancedMesh===!0,Ge=$.isBatchedMesh===!0,Pt=!!b.map,bt=!!b.matcap,ut=!!le,k=!!b.aoMap,_n=!!b.lightMap,ht=!!b.bumpMap,ct=!!b.normalMap,Ye=!!b.displacementMap,wt=!!b.emissiveMap,We=!!b.metalnessMap,D=!!b.roughnessMap,E=b.anisotropy>0,Z=b.clearcoat>0,he=b.dispersion>0,ve=b.iridescence>0,ce=b.sheen>0,Ve=b.transmission>0,Ae=E&&!!b.anisotropyMap,Ke=Z&&!!b.clearcoatMap,$e=Z&&!!b.clearcoatNormalMap,Se=Z&&!!b.clearcoatRoughnessMap,Fe=ve&&!!b.iridescenceMap,et=ve&&!!b.iridescenceThicknessMap,tt=ce&&!!b.sheenColorMap,Oe=ce&&!!b.sheenRoughnessMap,ft=!!b.specularMap,rt=!!b.specularColorMap,Et=!!b.specularIntensityMap,V=Ve&&!!b.transmissionMap,Re=Ve&&!!b.thicknessMap,se=!!b.gradientMap,pe=!!b.alphaMap,De=b.alphaTest>0,be=!!b.alphaHash,st=!!b.extensions;let Lt=_r;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Lt=o.toneMapping);const qt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Ue,fragmentShader:Q,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&$._colorsTexture!==null,instancing:je,instancingColor:je&&$.instanceColor!==null,instancingMorph:je&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Bs,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:bt,envMap:ut,envMapMode:ut&&le.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:_n,bumpMap:ht,normalMap:ct,displacementMap:x&&Ye,emissiveMap:wt,normalMapObjectSpace:ct&&b.normalMapType===vv,normalMapTangentSpace:ct&&b.normalMapType===_v,metalnessMap:We,roughnessMap:D,anisotropy:E,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Ke,clearcoatNormalMap:$e,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ve,iridescenceMap:Fe,iridescenceThicknessMap:et,sheen:ce,sheenColorMap:tt,sheenRoughnessMap:Oe,specularMap:ft,specularColorMap:rt,specularIntensityMap:Et,transmission:Ve,transmissionMap:V,thicknessMap:Re,gradientMap:se,opaque:b.transparent===!1&&b.blending===Us&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:be,combine:b.combine,mapUv:Pt&&T(b.map.channel),aoMapUv:k&&T(b.aoMap.channel),lightMapUv:_n&&T(b.lightMap.channel),bumpMapUv:ht&&T(b.bumpMap.channel),normalMapUv:ct&&T(b.normalMap.channel),displacementMapUv:Ye&&T(b.displacementMap.channel),emissiveMapUv:wt&&T(b.emissiveMap.channel),metalnessMapUv:We&&T(b.metalnessMap.channel),roughnessMapUv:D&&T(b.roughnessMap.channel),anisotropyMapUv:Ae&&T(b.anisotropyMap.channel),clearcoatMapUv:Ke&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:$e&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(b.sheenRoughnessMap.channel),specularMapUv:ft&&T(b.specularMap.channel),specularColorMapUv:rt&&T(b.specularColorMap.channel),specularIntensityMapUv:Et&&T(b.specularIntensityMap.channel),transmissionMapUv:V&&T(b.transmissionMap.channel),thicknessMapUv:Re&&T(b.thicknessMap.channel),alphaMapUv:pe&&T(b.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(ct||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!fe.attributes.uv&&(Pt||pe),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:$.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&C.length>0,shadowMapType:o.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ui,flipSided:b.side===Dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)R.push(C),R.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(U(R,b),L(R,b),R.push(o.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function U(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),b.push(d.mask)}function P(b){const R=w[b.type];let C;if(R){const ee=mi[R];C=$v.clone(ee.uniforms)}else C=b.uniforms;return C}function W(b,R){let C;for(let ee=0,$=v.length;ee<$;ee++){const ue=v[ee];if(ue.cacheKey===R){C=ue,++C.usedTimes;break}}return C===void 0&&(C=new _M(o,R,b,u),v.push(C)),C}function z(b){if(--b.usedTimes===0){const R=v.indexOf(b);v[R]=v[v.length-1],v.pop(),b.destroy()}}function F(b){p.remove(b)}function j(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:W,releaseProgram:z,releaseShaderCache:F,programs:v,dispose:j}}function MM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function EM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function mm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function gm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(_,x,y,w,T,S){let g=o[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:y,groupOrder:w,renderOrder:_.renderOrder,z:T,group:S},o[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=y,g.groupOrder=w,g.renderOrder=_.renderOrder,g.z=T,g.group=S),e++,g}function d(_,x,y,w,T,S){const g=f(_,x,y,w,T,S);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(_,x,y,w,T,S){const g=f(_,x,y,w,T,S);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(_,x){n.length>1&&n.sort(_||EM),r.length>1&&r.sort(x||mm),a.length>1&&a.sort(x||mm)}function v(){for(let _=e,x=o.length;_<x;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function TM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new gm,o.set(r,[f])):a>=u.length?(f=new gm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function wM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new Tt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return o[e.id]=n,n}}}function AM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let RM=0;function CM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function PM(o){const e=new wM,n=AM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,u=new Wt,f=new Wt;function d(m){let v=0,_=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let y=0,w=0,T=0,S=0,g=0,U=0,L=0,P=0,W=0,z=0,F=0;m.sort(CM);for(let b=0,R=m.length;b<R;b++){const C=m[b],ee=C.color,$=C.intensity,ue=C.distance,fe=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)v+=ee.r*$,_+=ee.g*$,x+=ee.b*$;else if(C.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(C.sh.coefficients[ae],$);F++}else if(C.isDirectionalLight){const ae=e.get(C);if(ae.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const le=C.shadow,B=n.get(C);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=fe,r.directionalShadowMatrix[y]=C.shadow.matrix,U++}r.directional[y]=ae,y++}else if(C.isSpotLight){const ae=e.get(C);ae.position.setFromMatrixPosition(C.matrixWorld),ae.color.copy(ee).multiplyScalar($),ae.distance=ue,ae.coneCos=Math.cos(C.angle),ae.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ae.decay=C.decay,r.spot[T]=ae;const le=C.shadow;if(C.map&&(r.spotLightMap[W]=C.map,W++,le.updateMatrices(C),C.castShadow&&z++),r.spotLightMatrix[T]=le.matrix,C.castShadow){const B=n.get(C);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[T]=B,r.spotShadowMap[T]=fe,P++}T++}else if(C.isRectAreaLight){const ae=e.get(C);ae.color.copy(ee).multiplyScalar($),ae.halfWidth.set(C.width*.5,0,0),ae.halfHeight.set(0,C.height*.5,0),r.rectArea[S]=ae,S++}else if(C.isPointLight){const ae=e.get(C);if(ae.color.copy(C.color).multiplyScalar(C.intensity),ae.distance=C.distance,ae.decay=C.decay,C.castShadow){const le=C.shadow,B=n.get(C);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=fe,r.pointShadowMatrix[w]=C.shadow.matrix,L++}r.point[w]=ae,w++}else if(C.isHemisphereLight){const ae=e.get(C);ae.skyColor.copy(C.color).multiplyScalar($),ae.groundColor.copy(C.groundColor).multiplyScalar($),r.hemi[g]=ae,g++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==w||j.spotLength!==T||j.rectAreaLength!==S||j.hemiLength!==g||j.numDirectionalShadows!==U||j.numPointShadows!==L||j.numSpotShadows!==P||j.numSpotMaps!==W||j.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=S,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+W-z,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,j.directionalLength=y,j.pointLength=w,j.spotLength=T,j.rectAreaLength=S,j.hemiLength=g,j.numDirectionalShadows=U,j.numPointShadows=L,j.numSpotShadows=P,j.numSpotMaps=W,j.numLightProbes=F,r.version=RM++)}function p(m,v){let _=0,x=0,y=0,w=0,T=0;const S=v.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const L=m[g];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),_++}else if(L.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),w++}else if(L.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:d,setupView:p,state:r}}function _m(o){const e=new PM(o),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function bM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new _m(o),e.set(a,[d])):u>=f.length?(d=new _m(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
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
}`;function NM(o,e,n){let r=new zm;const a=new Ct,u=new Ct,f=new Gt,d=new s0({depthPacking:gv}),p=new o0,m={},v=n.maxTextureSize,_={[vr]:Dn,[Dn]:vr,[Ui]:Ui},x=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:DM,fragmentShader:LM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const w=new zi;w.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new $n(w,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let g=this.type;this.render=function(z,F,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const b=o.getRenderTarget(),R=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(gr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const $=g!==Ni&&this.type===Ni,ue=g===Ni&&this.type!==Ni;for(let fe=0,ae=z.length;fe<ae;fe++){const le=z[fe],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const re=B.getFrameExtents();if(a.multiply(re),u.copy(B.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/re.x),a.x=u.x*re.x,B.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/re.y),a.y=u.y*re.y,B.mapSize.y=u.y)),B.map===null||$===!0||ue===!0){const I=this.type!==Ni?{minFilter:li,magFilter:li}:{};B.map!==null&&B.map.dispose(),B.map=new qr(a.x,a.y,I),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const oe=B.getViewportCount();for(let I=0;I<oe;I++){const ie=B.getViewport(I);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ee.viewport(f),B.updateMatrices(le,I),r=B.getFrustum(),P(F,j,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Ni&&U(B,j),B.needsUpdate=!1}g=this.type,S.needsUpdate=!1,o.setRenderTarget(b,R,C)};function U(z,F){const j=e.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new qr(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(F,null,j,x,T,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(F,null,j,y,T,null)}function L(z,F,j,b){let R=null;const C=j.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(C!==void 0)R=C;else if(R=j.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ee=R.uuid,$=F.uuid;let ue=m[ee];ue===void 0&&(ue={},m[ee]=ue);let fe=ue[$];fe===void 0&&(fe=R.clone(),ue[$]=fe,F.addEventListener("dispose",W)),R=fe}if(R.visible=F.visible,R.wireframe=F.wireframe,b===Ni?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:_[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=o.properties.get(R);ee.light=j}return R}function P(z,F,j,b,R){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Ni)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,z.matrixWorld);const $=e.update(z),ue=z.material;if(Array.isArray(ue)){const fe=$.groups;for(let ae=0,le=fe.length;ae<le;ae++){const B=fe[ae],re=ue[B.materialIndex];if(re&&re.visible){const oe=L(z,re,b,R);z.onBeforeShadow(o,z,F,j,$,oe,B),o.renderBufferDirect(j,null,$,oe,z,B),z.onAfterShadow(o,z,F,j,$,oe,B)}}}else if(ue.visible){const fe=L(z,ue,b,R);z.onBeforeShadow(o,z,F,j,$,fe,null),o.renderBufferDirect(j,null,$,fe,z,null),z.onAfterShadow(o,z,F,j,$,fe,null)}}const ee=z.children;for(let $=0,ue=ee.length;$<ue;$++)P(ee[$],F,j,b,R)}function W(z){z.target.removeEventListener("dispose",W);for(const j in m){const b=m[j],R=z.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const UM={[Xc]:jc,[Yc]:Kc,[qc]:Zc,[Fs]:$c,[jc]:Xc,[Kc]:Yc,[Zc]:qc,[$c]:Fs};function IM(o,e){function n(){let V=!1;const Re=new Gt;let se=null;const pe=new Gt(0,0,0,0);return{setMask:function(De){se!==De&&!V&&(o.colorMask(De,De,De,De),se=De)},setLocked:function(De){V=De},setClear:function(De,be,st,Lt,qt){qt===!0&&(De*=Lt,be*=Lt,st*=Lt),Re.set(De,be,st,Lt),pe.equals(Re)===!1&&(o.clearColor(De,be,st,Lt),pe.copy(Re))},reset:function(){V=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let V=!1,Re=!1,se=null,pe=null,De=null;return{setReversed:function(be){if(Re!==be){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const Lt=De;De=null,this.setClear(Lt)}},getReversed:function(){return Re},setTest:function(be){be?xe(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(be){se!==be&&!V&&(o.depthMask(be),se=be)},setFunc:function(be){if(Re&&(be=UM[be]),pe!==be){switch(be){case Xc:o.depthFunc(o.NEVER);break;case jc:o.depthFunc(o.ALWAYS);break;case Yc:o.depthFunc(o.LESS);break;case Fs:o.depthFunc(o.LEQUAL);break;case qc:o.depthFunc(o.EQUAL);break;case $c:o.depthFunc(o.GEQUAL);break;case Kc:o.depthFunc(o.GREATER);break;case Zc:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=be}},setLocked:function(be){V=be},setClear:function(be){De!==be&&(Re&&(be=1-be),o.clearDepth(be),De=be)},reset:function(){V=!1,se=null,pe=null,De=null,Re=!1}}}function a(){let V=!1,Re=null,se=null,pe=null,De=null,be=null,st=null,Lt=null,qt=null;return{setTest:function(vt){V||(vt?xe(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!V&&(o.stencilMask(vt),Re=vt)},setFunc:function(vt,En,vn){(se!==vt||pe!==En||De!==vn)&&(o.stencilFunc(vt,En,vn),se=vt,pe=En,De=vn)},setOp:function(vt,En,vn){(be!==vt||st!==En||Lt!==vn)&&(o.stencilOp(vt,En,vn),be=vt,st=En,Lt=vn)},setLocked:function(vt){V=vt},setClear:function(vt){qt!==vt&&(o.clearStencil(vt),qt=vt)},reset:function(){V=!1,Re=null,se=null,pe=null,De=null,be=null,st=null,Lt=null,qt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,y=[],w=null,T=!1,S=null,g=null,U=null,L=null,P=null,W=null,z=null,F=new Tt(0,0,0),j=0,b=!1,R=null,C=null,ee=null,$=null,ue=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),ae=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ae=le>=2);let re=null,oe={};const I=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),Ue=new Gt().fromArray(I),Q=new Gt().fromArray(ie);function me(V,Re,se,pe){const De=new Uint8Array(4),be=o.createTexture();o.bindTexture(V,be),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let st=0;st<se;st++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(Re+st,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return be}const Ee={};Ee[o.TEXTURE_2D]=me(o.TEXTURE_2D,o.TEXTURE_2D,1),Ee[o.TEXTURE_CUBE_MAP]=me(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[o.TEXTURE_2D_ARRAY]=me(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ee[o.TEXTURE_3D]=me(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),xe(o.DEPTH_TEST),f.setFunc(Fs),ht(!1),ct(yp),xe(o.CULL_FACE),k(gr);function xe(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function we(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function je(V,Re){return _[V]!==Re?(o.bindFramebuffer(V,Re),_[V]=Re,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Re),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ge(V,Re){let se=y,pe=!1;if(V){se=x.get(Re),se===void 0&&(se=[],x.set(Re,se));const De=V.textures;if(se.length!==De.length||se[0]!==o.COLOR_ATTACHMENT0){for(let be=0,st=De.length;be<st;be++)se[be]=o.COLOR_ATTACHMENT0+be;se.length=De.length,pe=!0}}else se[0]!==o.BACK&&(se[0]=o.BACK,pe=!0);pe&&o.drawBuffers(se)}function Pt(V){return w!==V?(o.useProgram(V),w=V,!0):!1}const bt={[Vr]:o.FUNC_ADD,[V_]:o.FUNC_SUBTRACT,[G_]:o.FUNC_REVERSE_SUBTRACT};bt[W_]=o.MIN,bt[X_]=o.MAX;const ut={[j_]:o.ZERO,[Y_]:o.ONE,[q_]:o.SRC_COLOR,[Gc]:o.SRC_ALPHA,[ev]:o.SRC_ALPHA_SATURATE,[Q_]:o.DST_COLOR,[K_]:o.DST_ALPHA,[$_]:o.ONE_MINUS_SRC_COLOR,[Wc]:o.ONE_MINUS_SRC_ALPHA,[J_]:o.ONE_MINUS_DST_COLOR,[Z_]:o.ONE_MINUS_DST_ALPHA,[tv]:o.CONSTANT_COLOR,[nv]:o.ONE_MINUS_CONSTANT_COLOR,[iv]:o.CONSTANT_ALPHA,[rv]:o.ONE_MINUS_CONSTANT_ALPHA};function k(V,Re,se,pe,De,be,st,Lt,qt,vt){if(V===gr){T===!0&&(we(o.BLEND),T=!1);return}if(T===!1&&(xe(o.BLEND),T=!0),V!==H_){if(V!==S||vt!==b){if((g!==Vr||P!==Vr)&&(o.blendEquation(o.FUNC_ADD),g=Vr,P=Vr),vt)switch(V){case Us:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mp:o.blendFunc(o.ONE,o.ONE);break;case Ep:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Us:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ep:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,L=null,W=null,z=null,F.set(0,0,0),j=0,S=V,b=vt}return}De=De||Re,be=be||se,st=st||pe,(Re!==g||De!==P)&&(o.blendEquationSeparate(bt[Re],bt[De]),g=Re,P=De),(se!==U||pe!==L||be!==W||st!==z)&&(o.blendFuncSeparate(ut[se],ut[pe],ut[be],ut[st]),U=se,L=pe,W=be,z=st),(Lt.equals(F)===!1||qt!==j)&&(o.blendColor(Lt.r,Lt.g,Lt.b,qt),F.copy(Lt),j=qt),S=V,b=!1}function _n(V,Re){V.side===Ui?we(o.CULL_FACE):xe(o.CULL_FACE);let se=V.side===Dn;Re&&(se=!se),ht(se),V.blending===Us&&V.transparent===!1?k(gr):k(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const pe=V.stencilWrite;d.setTest(pe),pe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function ct(V){V!==k_?(xe(o.CULL_FACE),V!==C&&(V===yp?o.cullFace(o.BACK):V===B_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),C=V}function Ye(V){V!==ee&&(ae&&o.lineWidth(V),ee=V)}function wt(V,Re,se){V?(xe(o.POLYGON_OFFSET_FILL),($!==Re||ue!==se)&&(o.polygonOffset(Re,se),$=Re,ue=se)):we(o.POLYGON_OFFSET_FILL)}function We(V){V?xe(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function D(V){V===void 0&&(V=o.TEXTURE0+fe-1),re!==V&&(o.activeTexture(V),re=V)}function E(V,Re,se){se===void 0&&(re===null?se=o.TEXTURE0+fe-1:se=re);let pe=oe[se];pe===void 0&&(pe={type:void 0,texture:void 0},oe[se]=pe),(pe.type!==V||pe.texture!==Re)&&(re!==se&&(o.activeTexture(se),re=se),o.bindTexture(V,Re||Ee[V]),pe.type=V,pe.texture=Re)}function Z(){const V=oe[re];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(V){Ue.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ue.copy(V))}function Oe(V){Q.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function ft(V,Re){let se=m.get(Re);se===void 0&&(se=new WeakMap,m.set(Re,se));let pe=se.get(V);pe===void 0&&(pe=o.getUniformBlockIndex(Re,V.name),se.set(V,pe))}function rt(V,Re){const pe=m.get(Re).get(V);p.get(Re)!==pe&&(o.uniformBlockBinding(Re,pe,V.__bindingPointIndex),p.set(Re,pe))}function Et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},re=null,oe={},_={},x=new WeakMap,y=[],w=null,T=!1,S=null,g=null,U=null,L=null,P=null,W=null,z=null,F=new Tt(0,0,0),j=0,b=!1,R=null,C=null,ee=null,$=null,ue=null,Ue.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:xe,disable:we,bindFramebuffer:je,drawBuffers:Ge,useProgram:Pt,setBlending:k,setMaterial:_n,setFlipSided:ht,setCullFace:ct,setLineWidth:Ye,setPolygonOffset:wt,setScissorTest:We,activeTexture:D,bindTexture:E,unbindTexture:Z,compressedTexImage2D:he,compressedTexImage3D:ve,texImage2D:Fe,texImage3D:et,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:$e,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ke,scissor:tt,viewport:Oe,reset:Et}}function FM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ct,v=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return y?new OffscreenCanvas(D,E):wl("canvas")}function T(D,E,Z){let he=1;const ve=We(D);if((ve.width>Z||ve.height>Z)&&(he=Z/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*ve.width),Ve=Math.floor(he*ve.height);_===void 0&&(_=w(ce,Ve));const Ae=E?w(ce,Ve):_;return Ae.width=ce,Ae.height=Ve,Ae.getContext("2d").drawImage(D,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ce+"x"+Ve+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function g(D){o.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(D,E,Z,he,ve=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=E;if(E===o.RED&&(Z===o.FLOAT&&(ce=o.R32F),Z===o.HALF_FLOAT&&(ce=o.R16F),Z===o.UNSIGNED_BYTE&&(ce=o.R8)),E===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ce=o.R8UI),Z===o.UNSIGNED_SHORT&&(ce=o.R16UI),Z===o.UNSIGNED_INT&&(ce=o.R32UI),Z===o.BYTE&&(ce=o.R8I),Z===o.SHORT&&(ce=o.R16I),Z===o.INT&&(ce=o.R32I)),E===o.RG&&(Z===o.FLOAT&&(ce=o.RG32F),Z===o.HALF_FLOAT&&(ce=o.RG16F),Z===o.UNSIGNED_BYTE&&(ce=o.RG8)),E===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ce=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ce=o.RG16UI),Z===o.UNSIGNED_INT&&(ce=o.RG32UI),Z===o.BYTE&&(ce=o.RG8I),Z===o.SHORT&&(ce=o.RG16I),Z===o.INT&&(ce=o.RG32I)),E===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),Z===o.UNSIGNED_INT&&(ce=o.RGB32UI),Z===o.BYTE&&(ce=o.RGB8I),Z===o.SHORT&&(ce=o.RGB16I),Z===o.INT&&(ce=o.RGB32I)),E===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ce=o.RGBA32UI),Z===o.BYTE&&(ce=o.RGBA8I),Z===o.SHORT&&(ce=o.RGBA16I),Z===o.INT&&(ce=o.RGBA32I)),E===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),E===o.RGBA){const Ve=ve?El:Mt.getTransfer(he);Z===o.FLOAT&&(ce=o.RGBA32F),Z===o.HALF_FLOAT&&(ce=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ce=Ve===At?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(D,E){let Z;return D?E===null||E===Yr||E===bo?Z=o.DEPTH24_STENCIL8:E===Ii?Z=o.DEPTH32F_STENCIL8:E===Po&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===bo?Z=o.DEPTH_COMPONENT24:E===Ii?Z=o.DEPTH_COMPONENT32F:E===Po&&(Z=o.DEPTH_COMPONENT16),Z}function W(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==li&&D.minFilter!==gi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function z(D){const E=D.target;E.removeEventListener("dispose",z),j(E),E.isVideoTexture&&v.delete(E)}function F(D){const E=D.target;E.removeEventListener("dispose",F),R(E)}function j(D){const E=r.get(D);if(E.__webglInit===void 0)return;const Z=D.source,he=x.get(Z);if(he){const ve=he[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(D),Object.keys(he).length===0&&x.delete(Z)}r.remove(D)}function b(D){const E=r.get(D);o.deleteTexture(E.__webglTexture);const Z=D.source,he=x.get(Z);delete he[E.__cacheKey],f.memory.textures--}function R(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ve=0;ve<E.__webglFramebuffer[he].length;ve++)o.deleteFramebuffer(E.__webglFramebuffer[he][ve]);else o.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)o.deleteFramebuffer(E.__webglFramebuffer[he]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=D.textures;for(let he=0,ve=Z.length;he<ve;he++){const ce=r.get(Z[he]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove(Z[he])}r.remove(D)}let C=0;function ee(){C=0}function $(){const D=C;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),C+=1,D}function ue(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function fe(D,E){const Z=r.get(D);if(D.isVideoTexture&&Ye(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const he=D.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,D,E);return}}n.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+E)}function ae(D,E){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+E)}function le(D,E){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,E);return}n.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+E)}function B(D,E){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){me(Z,D,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+E)}const re={[ef]:o.REPEAT,[Wr]:o.CLAMP_TO_EDGE,[tf]:o.MIRRORED_REPEAT},oe={[li]:o.NEAREST,[pv]:o.NEAREST_MIPMAP_NEAREST,[ja]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[hc]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},I={[xv]:o.NEVER,[wv]:o.ALWAYS,[Sv]:o.LESS,[Pm]:o.LEQUAL,[yv]:o.EQUAL,[Tv]:o.GEQUAL,[Mv]:o.GREATER,[Ev]:o.NOTEQUAL};function ie(D,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===gi||E.magFilter===hc||E.magFilter===ja||E.magFilter===Xr||E.minFilter===gi||E.minFilter===hc||E.minFilter===ja||E.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,re[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,re[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,re[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,oe[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===li||E.minFilter!==ja&&E.minFilter!==Xr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(D,E){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",z));const he=E.source;let ve=x.get(he);ve===void 0&&(ve={},x.set(he,ve));const ce=ue(E);if(ce!==D.__cacheKey){ve[ce]===void 0&&(ve[ce]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ve[ce].usedTimes++;const Ve=ve[D.__cacheKey];Ve!==void 0&&(ve[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&b(E)),D.__cacheKey=ce,D.__webglTexture=ve[ce].texture}return Z}function Q(D,E,Z){let he=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=o.TEXTURE_3D);const ve=Ue(D,E),ce=E.source;n.bindTexture(he,D.__webglTexture,o.TEXTURE0+Z);const Ve=r.get(ce);if(ce.version!==Ve.__version||ve===!0){n.activeTexture(o.TEXTURE0+Z);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Ke=E.colorSpace===mr?null:Mt.getPrimaries(E.colorSpace),$e=E.colorSpace===mr||Ae===Ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Se=T(E.image,!1,a.maxTextureSize);Se=wt(E,Se);const Fe=u.convert(E.format,E.colorSpace),et=u.convert(E.type);let tt=L(E.internalFormat,Fe,et,E.colorSpace,E.isVideoTexture);ie(he,E);let Oe;const ft=E.mipmaps,rt=E.isVideoTexture!==!0,Et=Ve.__version===void 0||ve===!0,V=ce.dataReady,Re=W(E,Se);if(E.isDepthTexture)tt=P(E.format===Lo,E.type),Et&&(rt?n.texStorage2D(o.TEXTURE_2D,1,tt,Se.width,Se.height):n.texImage2D(o.TEXTURE_2D,0,tt,Se.width,Se.height,0,Fe,et,null));else if(E.isDataTexture)if(ft.length>0){rt&&Et&&n.texStorage2D(o.TEXTURE_2D,Re,tt,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],rt?V&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(o.TEXTURE_2D,se,tt,Oe.width,Oe.height,0,Fe,et,Oe.data);E.generateMipmaps=!1}else rt?(Et&&n.texStorage2D(o.TEXTURE_2D,Re,tt,Se.width,Se.height),V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,et,Se.data)):n.texImage2D(o.TEXTURE_2D,0,tt,Se.width,Se.height,0,Fe,et,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Re,tt,ft[0].width,ft[0].height,Se.depth);for(let se=0,pe=ft.length;se<pe;se++)if(Oe=ft[se],E.format!==ai)if(Fe!==null)if(rt){if(V)if(E.layerUpdates.size>0){const De=Yp(Oe.width,Oe.height,E.format,E.type);for(const be of E.layerUpdates){const st=Oe.data.subarray(be*De/Oe.data.BYTES_PER_ELEMENT,(be+1)*De/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,be,Oe.width,Oe.height,1,Fe,st)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Se.depth,Fe,Oe.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,se,tt,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Se.depth,Fe,et,Oe.data):n.texImage3D(o.TEXTURE_2D_ARRAY,se,tt,Oe.width,Oe.height,Se.depth,0,Fe,et,Oe.data)}else{rt&&Et&&n.texStorage2D(o.TEXTURE_2D,Re,tt,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],E.format!==ai?Fe!==null?rt?V&&n.compressedTexSubImage2D(o.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(o.TEXTURE_2D,se,tt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(o.TEXTURE_2D,se,tt,Oe.width,Oe.height,0,Fe,et,Oe.data)}else if(E.isDataArrayTexture)if(rt){if(Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Re,tt,Se.width,Se.height,Se.depth),V)if(E.layerUpdates.size>0){const se=Yp(Se.width,Se.height,E.format,E.type);for(const pe of E.layerUpdates){const De=Se.data.subarray(pe*se/Se.data.BYTES_PER_ELEMENT,(pe+1)*se/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Fe,et,De)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,et,Se.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,tt,Se.width,Se.height,Se.depth,0,Fe,et,Se.data);else if(E.isData3DTexture)rt?(Et&&n.texStorage3D(o.TEXTURE_3D,Re,tt,Se.width,Se.height,Se.depth),V&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,et,Se.data)):n.texImage3D(o.TEXTURE_3D,0,tt,Se.width,Se.height,Se.depth,0,Fe,et,Se.data);else if(E.isFramebufferTexture){if(Et)if(rt)n.texStorage2D(o.TEXTURE_2D,Re,tt,Se.width,Se.height);else{let se=Se.width,pe=Se.height;for(let De=0;De<Re;De++)n.texImage2D(o.TEXTURE_2D,De,tt,se,pe,0,Fe,et,null),se>>=1,pe>>=1}}else if(ft.length>0){if(rt&&Et){const se=We(ft[0]);n.texStorage2D(o.TEXTURE_2D,Re,tt,se.width,se.height)}for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],rt?V&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Fe,et,Oe):n.texImage2D(o.TEXTURE_2D,se,tt,Fe,et,Oe);E.generateMipmaps=!1}else if(rt){if(Et){const se=We(Se);n.texStorage2D(o.TEXTURE_2D,Re,tt,se.width,se.height)}V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,et,Se)}else n.texImage2D(o.TEXTURE_2D,0,tt,Fe,et,Se);S(E)&&g(he),Ve.__version=ce.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function me(D,E,Z){if(E.image.length!==6)return;const he=Ue(D,E),ve=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Z);const ce=r.get(ve);if(ve.version!==ce.__version||he===!0){n.activeTexture(o.TEXTURE0+Z);const Ve=Mt.getPrimaries(Mt.workingColorSpace),Ae=E.colorSpace===mr?null:Mt.getPrimaries(E.colorSpace),Ke=E.colorSpace===mr||Ve===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!$e&&!Se?Fe[pe]=T(E.image[pe],!0,a.maxCubemapSize):Fe[pe]=Se?E.image[pe].image:E.image[pe],Fe[pe]=wt(E,Fe[pe]);const et=Fe[0],tt=u.convert(E.format,E.colorSpace),Oe=u.convert(E.type),ft=L(E.internalFormat,tt,Oe,E.colorSpace),rt=E.isVideoTexture!==!0,Et=ce.__version===void 0||he===!0,V=ve.dataReady;let Re=W(E,et);ie(o.TEXTURE_CUBE_MAP,E);let se;if($e){rt&&Et&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Re,ft,et.width,et.height);for(let pe=0;pe<6;pe++){se=Fe[pe].mipmaps;for(let De=0;De<se.length;De++){const be=se[De];E.format!==ai?tt!==null?rt?V&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,be.width,be.height,tt,be.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,be.width,be.height,tt,Oe,be.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,be.width,be.height,0,tt,Oe,be.data)}}}else{if(se=E.mipmaps,rt&&Et){se.length>0&&Re++;const pe=We(Fe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Re,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,tt,Oe,Fe[pe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Fe[pe].width,Fe[pe].height,0,tt,Oe,Fe[pe].data);for(let De=0;De<se.length;De++){const st=se[De].image[pe].image;rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,st.width,st.height,tt,Oe,st.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,st.width,st.height,0,tt,Oe,st.data)}}else{rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,Oe,Fe[pe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,tt,Oe,Fe[pe]);for(let De=0;De<se.length;De++){const be=se[De];rt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,tt,Oe,be.image[pe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,tt,Oe,be.image[pe])}}}S(E)&&g(o.TEXTURE_CUBE_MAP),ce.__version=ve.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ee(D,E,Z,he,ve,ce){const Ve=u.convert(Z.format,Z.colorSpace),Ae=u.convert(Z.type),Ke=L(Z.internalFormat,Ve,Ae,Z.colorSpace),$e=r.get(E),Se=r.get(Z);if(Se.__renderTarget=E,!$e.__hasExternalTextures){const Fe=Math.max(1,E.width>>ce),et=Math.max(1,E.height>>ce);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?n.texImage3D(ve,ce,Ke,Fe,et,E.depth,0,Ve,Ae,null):n.texImage2D(ve,ce,Ke,Fe,et,0,Ve,Ae,null)}n.bindFramebuffer(o.FRAMEBUFFER,D),ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,ve,Se.__webglTexture,0,ht(E)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,ve,Se.__webglTexture,ce),n.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(D,E,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const he=E.depthTexture,ve=he&&he.isDepthTexture?he.type:null,ce=P(E.stencilBuffer,ve),Ve=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=ht(E);ct(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,ce,E.width,E.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,ce,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ce,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,D)}else{const he=E.textures;for(let ve=0;ve<he.length;ve++){const ce=he[ve],Ve=u.convert(ce.format,ce.colorSpace),Ae=u.convert(ce.type),Ke=L(ce.internalFormat,Ve,Ae,ce.colorSpace),$e=ht(E);Z&&ct(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e,Ke,E.width,E.height):ct(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e,Ke,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ke,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(E.depthTexture);he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe(E.depthTexture,0);const ve=he.__webglTexture,ce=ht(E);if(E.depthTexture.format===Do)ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(E.depthTexture.format===Lo)ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function je(D){const E=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=he}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const he=D.texture.mipmaps;he&&he.length>0?we(E.__webglFramebuffer[0],D):we(E.__webglFramebuffer,D)}else if(Z){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=o.createRenderbuffer(),xe(E.__webglDepthbuffer[he],D,!1);else{const ve=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),xe(E.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,ce)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(D,E,Z){const he=r.get(D);E!==void 0&&Ee(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&je(D)}function Pt(D){const E=D.texture,Z=r.get(D),he=r.get(E);D.addEventListener("dispose",F);const ve=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ve=ve.length>1;if(Ve||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=E.version,f.memory.textures++),ce){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Ke=0;Ke<E.mipmaps.length;Ke++)Z.__webglFramebuffer[Ae][Ke]=o.createFramebuffer()}else Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let Ae=0,Ke=ve.length;Ae<Ke;Ae++){const $e=r.get(ve[Ae]);$e.__webglTexture===void 0&&($e.__webglTexture=o.createTexture(),f.memory.textures++)}if(D.samples>0&&ct(D)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Ke=ve[Ae];Z.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const $e=u.convert(Ke.format,Ke.colorSpace),Se=u.convert(Ke.type),Fe=L(Ke.internalFormat,$e,Se,Ke.colorSpace,D.isXRRenderTarget===!0),et=ht(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,et,Fe,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){n.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ie(o.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ee(Z.__webglFramebuffer[Ae][Ke],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke);else Ee(Z.__webglFramebuffer[Ae],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(E)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ae=0,Ke=ve.length;Ae<Ke;Ae++){const $e=ve[Ae],Se=r.get($e);n.bindTexture(o.TEXTURE_2D,Se.__webglTexture),ie(o.TEXTURE_2D,$e),Ee(Z.__webglFramebuffer,D,$e,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),S($e)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ae,he.__webglTexture),ie(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ee(Z.__webglFramebuffer[Ke],D,E,o.COLOR_ATTACHMENT0,Ae,Ke);else Ee(Z.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,Ae,0);S(E)&&g(Ae),n.unbindTexture()}D.depthBuffer&&je(D)}function bt(D){const E=D.textures;for(let Z=0,he=E.length;Z<he;Z++){const ve=E[Z];if(S(ve)){const ce=U(D),Ve=r.get(ve).__webglTexture;n.bindTexture(ce,Ve),g(ce),n.unbindTexture()}}}const ut=[],k=[];function _n(D){if(D.samples>0){if(ct(D)===!1){const E=D.textures,Z=D.width,he=D.height;let ve=o.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=r.get(D),Ae=E.length>1;if(Ae)for(let $e=0;$e<E.length;$e++)n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Ke=D.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[$e]);const Se=r.get(E[$e]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Se,0)}o.blitFramebuffer(0,0,Z,he,0,0,Z,he,ve,o.NEAREST),p===!0&&(ut.length=0,k.length=0,ut.push(o.COLOR_ATTACHMENT0+$e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ut.push(ce),k.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let $e=0;$e<E.length;$e++){n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[$e]);const Se=r.get(E[$e]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.TEXTURE_2D,Se,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ht(D){return Math.min(a.maxSamples,D.samples)}function ct(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(D){const E=f.render.frame;v.get(D)!==E&&(v.set(D,E),D.update())}function wt(D,E){const Z=D.colorSpace,he=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Bs&&Z!==mr&&(Mt.getTransfer(Z)===At?(he!==ai||ve!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ge,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function OM(o,e){function n(r,a=mr){let u;const f=Mt.getTransfer(a);if(r===ki)return o.UNSIGNED_BYTE;if(r===If)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Em)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ym)return o.BYTE;if(r===Mm)return o.SHORT;if(r===Po)return o.UNSIGNED_SHORT;if(r===Uf)return o.INT;if(r===Yr)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===No)return o.HALF_FLOAT;if(r===Tm)return o.ALPHA;if(r===wm)return o.RGB;if(r===ai)return o.RGBA;if(r===Do)return o.DEPTH_COMPONENT;if(r===Lo)return o.DEPTH_STENCIL;if(r===Am)return o.RED;if(r===Of)return o.RED_INTEGER;if(r===Rm)return o.RG;if(r===kf)return o.RG_INTEGER;if(r===Bf)return o.RGBA_INTEGER;if(r===gl||r===_l||r===vl||r===xl)if(f===At)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===rf||r===sf||r===of)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===nf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===of)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===af||r===lf||r===uf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===af||r===lf)return f===At?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===uf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cf||r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===Sf||r===yf||r===Mf||r===Ef)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===cf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ff)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_f)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mf)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ef)return f===At?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sl||r===Tf||r===wf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Sl)return f===At?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cm||r===Af||r===Rf||r===Cf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Af)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
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

}`;class zM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new xr({vertexShader:kM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new Cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HM extends Hs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,_=null,x=null,y=null,w=null;const T=new zM,S=n.getContextAttributes();let g=null,U=null;const L=[],P=[],W=new Ct;let z=null;const F=new qn;F.viewport=new Gt;const j=new qn;j.viewport=new Gt;const b=[F,j],R=new l0;let C=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=L[Q];return me===void 0&&(me=new Ic,L[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=L[Q];return me===void 0&&(me=new Ic,L[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=L[Q];return me===void 0&&(me=new Ic,L[Q]=me),me.getHandSpace()};function $(Q){const me=P.indexOf(Q.inputSource);if(me===-1)return;const Ee=L[me];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,m||f),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",fe);for(let Q=0;Q<L.length;Q++){const me=P[Q];me!==null&&(P[Q]=null,L[Q].disconnect(me))}C=null,ee=null,T.reset(),e.setRenderTarget(g),y=null,x=null,_=null,a=null,U=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,xe=null,we=null;S.depth&&(we=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=S.stencil?Lo:Do,xe=S.stencil?bo:Yr);const je={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:u};_=new XRWebGLBinding(a,n),x=_.createProjectionLayer(je),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new qr(x.textureWidth,x.textureHeight,{format:ai,type:ki,depthTexture:new Vm(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,Ee),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new qr(y.framebufferWidth,y.framebufferHeight,{format:ai,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function fe(Q){for(let me=0;me<Q.removed.length;me++){const Ee=Q.removed[me],xe=P.indexOf(Ee);xe>=0&&(P[xe]=null,L[xe].disconnect(Ee))}for(let me=0;me<Q.added.length;me++){const Ee=Q.added[me];let xe=P.indexOf(Ee);if(xe===-1){for(let je=0;je<L.length;je++)if(je>=P.length){P.push(Ee),xe=je;break}else if(P[je]===null){P[je]=Ee,xe=je;break}if(xe===-1)break}const we=L[xe];we&&we.connect(Ee)}}const ae=new ne,le=new ne;function B(Q,me,Ee){ae.setFromMatrixPosition(me.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const xe=ae.distanceTo(le),we=me.projectionMatrix.elements,je=Ee.projectionMatrix.elements,Ge=we[14]/(we[10]-1),Pt=we[14]/(we[10]+1),bt=(we[9]+1)/we[5],ut=(we[9]-1)/we[5],k=(we[8]-1)/we[0],_n=(je[8]+1)/je[0],ht=Ge*k,ct=Ge*_n,Ye=xe/(-k+_n),wt=Ye*-k;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const We=Ge+Ye,D=Pt+Ye,E=ht-wt,Z=ct+(xe-wt),he=bt*Pt/D*We,ve=ut*Pt/D*We;Q.projectionMatrix.makePerspective(E,Z,he,ve,We,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function re(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let me=Q.near,Ee=Q.far;T.texture!==null&&(T.depthNear>0&&(me=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),R.near=j.near=F.near=me,R.far=j.far=F.far=Ee,(C!==R.near||ee!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,ee=R.far),F.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,R.layers.mask=F.layers.mask|j.layers.mask;const xe=Q.parent,we=R.cameras;re(R,xe);for(let je=0;je<we.length;je++)re(we[je],xe);we.length===2?B(R,F,j):R.projectionMatrix.copy(F.projectionMatrix),oe(Q,R,xe)};function oe(Q,me,Ee){Ee===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Pf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let I=null;function ie(Q,me){if(v=me.getViewerPose(m||f),w=me,v!==null){const Ee=v.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let xe=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let Ge=0;Ge<Ee.length;Ge++){const Pt=Ee[Ge];let bt=null;if(y!==null)bt=y.getViewport(Pt);else{const k=_.getViewSubImage(x,Pt);bt=k.viewport,Ge===0&&(e.setRenderTargetTextures(U,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(U))}let ut=b[Ge];ut===void 0&&(ut=new qn,ut.layers.enable(Ge),ut.viewport=new Gt,b[Ge]=ut),ut.matrix.fromArray(Pt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Pt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(bt.x,bt.y,bt.width,bt.height),Ge===0&&(R.matrix.copy(ut.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(ut)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Ge=_.getDepthInformation(Ee[0]);Ge&&Ge.isValid&&Ge.texture&&T.init(e,Ge,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=P[Ee],we=L[Ee];xe!==null&&we!==void 0&&we.update(xe,me,m||f)}I&&I(Q,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),w=null}const Ue=new Gm;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const Br=new Bi,VM=new Wt;function GM(o,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Om(o)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,U,L,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),_(S,g)):g.isMeshPhongMaterial?(u(S,g),v(S,g)):g.isMeshStandardMaterial?(u(S,g),x(S,g),g.isMeshPhysicalMaterial&&y(S,g,P)):g.isMeshMatcapMaterial?(u(S,g),w(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),T(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,U,L):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Dn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Dn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const U=e.get(g),L=U.envMap,P=U.envMapRotation;L&&(S.envMap.value=L,Br.copy(P),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),S.envMapRotation.value.setFromMatrix4(VM.makeRotationFromEuler(Br)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,U,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*U,S.scale.value=L*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,U){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,g){g.matcap&&(S.matcap.value=g.matcap)}function T(S,g){const U=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function WM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,L){const P=L.program;r.uniformBlockBinding(U,P)}function m(U,L){let P=a[U.id];P===void 0&&(w(U),P=v(U),a[U.id]=P,U.addEventListener("dispose",S));const W=L.program;r.updateUBOMapping(U,W);const z=e.render.frame;u[U.id]!==z&&(x(U),u[U.id]=z)}function v(U){const L=_();U.__bindingPointIndex=L;const P=o.createBuffer(),W=U.__size,z=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,W,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,P),P}function _(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const L=a[U.id],P=U.uniforms,W=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let z=0,F=P.length;z<F;z++){const j=Array.isArray(P[z])?P[z]:[P[z]];for(let b=0,R=j.length;b<R;b++){const C=j[b];if(y(C,z,b,W)===!0){const ee=C.__offset,$=Array.isArray(C.value)?C.value:[C.value];let ue=0;for(let fe=0;fe<$.length;fe++){const ae=$[fe],le=T(ae);typeof ae=="number"||typeof ae=="boolean"?(C.__data[0]=ae,o.bufferSubData(o.UNIFORM_BUFFER,ee+ue,C.__data)):ae.isMatrix3?(C.__data[0]=ae.elements[0],C.__data[1]=ae.elements[1],C.__data[2]=ae.elements[2],C.__data[3]=0,C.__data[4]=ae.elements[3],C.__data[5]=ae.elements[4],C.__data[6]=ae.elements[5],C.__data[7]=0,C.__data[8]=ae.elements[6],C.__data[9]=ae.elements[7],C.__data[10]=ae.elements[8],C.__data[11]=0):(ae.toArray(C.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,C.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(U,L,P,W){const z=U.value,F=L+"_"+P;if(W[F]===void 0)return typeof z=="number"||typeof z=="boolean"?W[F]=z:W[F]=z.clone(),!0;{const j=W[F];if(typeof z=="number"||typeof z=="boolean"){if(j!==z)return W[F]=z,!0}else if(j.equals(z)===!1)return j.copy(z),!0}return!1}function w(U){const L=U.uniforms;let P=0;const W=16;for(let F=0,j=L.length;F<j;F++){const b=Array.isArray(L[F])?L[F]:[L[F]];for(let R=0,C=b.length;R<C;R++){const ee=b[R],$=Array.isArray(ee.value)?ee.value:[ee.value];for(let ue=0,fe=$.length;ue<fe;ue++){const ae=$[ue],le=T(ae),B=P%W,re=B%le.boundary,oe=B+re;P+=re,oe!==0&&W-oe<le.storage&&(P+=W-oe),ee.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=P,P+=le.storage}}}const z=P%W;return z>0&&(P+=W-z),U.__size=P,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const P=f.indexOf(L.__bindingPointIndex);f.splice(P,1),o.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const U in a)o.deleteBuffer(a[U]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class XM{constructor(e={}){const{canvas:n=Rv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const w=new Uint32Array(4),T=new Int32Array(4);let S=null,g=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let W=!1;this._outputColorSpace=Yn;let z=0,F=0,j=null,b=-1,R=null;const C=new Gt,ee=new Gt;let $=null;const ue=new Tt(0);let fe=0,ae=n.width,le=n.height,B=1,re=null,oe=null;const I=new Gt(0,0,ae,le),ie=new Gt(0,0,ae,le);let Ue=!1;const Q=new zm;let me=!1,Ee=!1;const xe=new Wt,we=new Wt,je=new ne,Ge=new Gt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function ut(){return j===null?B:1}let k=r;function _n(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",be,!1),k===null){const G="webgl2";if(k=_n(G,A),k===null)throw _n(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ct,Ye,wt,We,D,E,Z,he,ve,ce,Ve,Ae,Ke,$e,Se,Fe,et,tt,Oe,ft,rt,Et,V;function Re(){ht=new ty(k),ht.init(),rt=new OM(k,ht),ct=new qS(k,ht,e,rt),Ye=new IM(k,ht),ct.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),wt=new ry(k),We=new MM,D=new FM(k,ht,Ye,We,ct,rt,wt),E=new KS(P),Z=new ey(P),he=new c0(k),Et=new jS(k,he),ve=new ny(k,he,wt,Et),ce=new oy(k,ve,he,wt),tt=new sy(k,ct,D),Se=new $S(We),Ve=new yM(P,E,Z,ht,ct,Et,Se),Ae=new GM(P,We),Ke=new TM,$e=new bM(ht),et=new XS(P,E,Z,Ye,ce,y,p),Fe=new NM(P,ce,ct),V=new WM(k,wt,ct,Ye),Oe=new YS(k,ht,wt),ft=new iy(k,ht,wt),wt.programs=Ve.programs,P.capabilities=ct,P.extensions=ht,P.properties=We,P.renderLists=Ke,P.shadowMap=Fe,P.state=Ye,P.info=wt}Re();const se=new HM(P,k);this.xr=se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(ae,le,!1))},this.getSize=function(A){return A.set(ae,le)},this.setSize=function(A,G,te=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,le=G,n.width=Math.floor(A*B),n.height=Math.floor(G*B),te===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ae*B,le*B).floor()},this.setDrawingBufferSize=function(A,G,te){ae=A,le=G,B=te,n.width=Math.floor(A*te),n.height=Math.floor(G*te),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,G,te,q){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,G,te,q),Ye.viewport(C.copy(I).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,G,te,q){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,G,te,q),Ye.scissor(ee.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ye.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,te=!0){let q=0;if(A){let X=!1;if(j!==null){const Me=j.texture.format;X=Me===Bf||Me===kf||Me===Of}if(X){const Me=j.texture.type,Ce=Me===ki||Me===Yr||Me===Po||Me===bo||Me===If||Me===Ff,Le=et.getClearColor(),ke=et.getClearAlpha(),nt=Le.r,Je=Le.g,ze=Le.b;Ce?(w[0]=nt,w[1]=Je,w[2]=ze,w[3]=ke,k.clearBufferuiv(k.COLOR,0,w)):(T[0]=nt,T[1]=Je,T[2]=ze,T[3]=ke,k.clearBufferiv(k.COLOR,0,T))}else q|=k.COLOR_BUFFER_BIT}G&&(q|=k.DEPTH_BUFFER_BIT),te&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",be,!1),et.dispose(),Ke.dispose(),$e.dispose(),We.dispose(),E.dispose(),Z.dispose(),ce.dispose(),Et.dispose(),V.dispose(),Ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",$r),se.removeEventListener("sessionend",Hi),_i.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const A=wt.autoReset,G=Fe.enabled,te=Fe.autoUpdate,q=Fe.needsUpdate,X=Fe.type;Re(),wt.autoReset=A,Fe.enabled=G,Fe.autoUpdate=te,Fe.needsUpdate=q,Fe.type=X}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const G=A.target;G.removeEventListener("dispose",st),Lt(G)}function Lt(A){qt(A),We.remove(A)}function qt(A){const G=We.get(A).programs;G!==void 0&&(G.forEach(function(te){Ve.releaseProgram(te)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,te,q,X,Me){G===null&&(G=Pt);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Le=zo(A,G,te,q,X);Ye.setMaterial(q,Ce);let ke=te.index,nt=1;if(q.wireframe===!0){if(ke=ve.getWireframeAttribute(te),ke===void 0)return;nt=2}const Je=te.drawRange,ze=te.attributes.position;let mt=Je.start*nt,ot=(Je.start+Je.count)*nt;Me!==null&&(mt=Math.max(mt,Me.start*nt),ot=Math.min(ot,(Me.start+Me.count)*nt)),ke!==null?(mt=Math.max(mt,0),ot=Math.min(ot,ke.count)):ze!=null&&(mt=Math.max(mt,0),ot=Math.min(ot,ze.count));const Bt=ot-mt;if(Bt<0||Bt===1/0)return;Et.setup(X,q,Le,te,ke);let It,_t=Oe;if(ke!==null&&(It=he.get(ke),_t=ft,_t.setIndex(It)),X.isMesh)q.wireframe===!0?(Ye.setLineWidth(q.wireframeLinewidth*ut()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(X.isLine){let qe=q.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*ut()),X.isLineSegments?_t.setMode(k.LINES):X.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else X.isPoints?_t.setMode(k.POINTS):X.isSprite&&_t.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)yl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qe=X._multiDrawStarts,zt=X._multiDrawCounts,pt=X._multiDrawCount,un=ke?he.get(ke).bytesPerElement:1,Gi=We.get(q).currentProgram.getUniforms();for(let xn=0;xn<pt;xn++)Gi.setValue(k,"_gl_DrawID",xn),_t.render(qe[xn]/un,zt[xn])}else if(X.isInstancedMesh)_t.renderInstances(mt,Bt,X.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,zt=Math.min(te.instanceCount,qe);_t.renderInstances(mt,Bt,zt)}else _t.render(mt,Bt)};function vt(A,G,te){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,Kr(A,G,te),A.side=vr,A.needsUpdate=!0,Kr(A,G,te),A.side=Ui):Kr(A,G,te)}this.compile=function(A,G,te=null){te===null&&(te=A),g=$e.get(te),g.init(G),L.push(g),te.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),A!==te&&A.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const q=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Le=Me[Ce];vt(Le,te,X),q.add(Le)}else vt(Me,te,X),q.add(Me)}),g=L.pop(),q},this.compileAsync=function(A,G,te=null){const q=this.compile(A,G,te);return new Promise(X=>{function Me(){if(q.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&q.delete(Ce)}),q.size===0){X(A);return}setTimeout(Me,10)}ht.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let En=null;function vn(A){En&&En(A)}function $r(){_i.stop()}function Hi(){_i.start()}const _i=new Gm;_i.setAnimationLoop(vn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(A){En=A,se.setAnimationLoop(A),A===null?_i.stop():_i.start()},se.addEventListener("sessionstart",$r),se.addEventListener("sessionend",Hi),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,G,j),g=$e.get(A,L.length),g.init(G),L.push(g),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,me=Se.init(this.clippingPlanes,Ee),S=Ke.get(A,U.length),S.init(),U.push(S),se.enabled===!0&&se.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&vi(Me,G,-1/0,P.sortObjects)}vi(A,G,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(re,oe),bt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,bt&&et.addToRenderList(S,A),this.info.render.frame++,me===!0&&Se.beginShadows();const te=g.state.shadowsArray;Fe.render(te,A,G),me===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,X=S.transmissive;if(g.setupLights(),G.isArrayCamera){const Me=G.cameras;if(X.length>0)for(let Ce=0,Le=Me.length;Ce<Le;Ce++){const ke=Me[Ce];yr(q,X,A,ke)}bt&&et.render(A);for(let Ce=0,Le=Me.length;Ce<Le;Ce++){const ke=Me[Ce];Sr(S,A,ke,ke.viewport)}}else X.length>0&&yr(q,X,A,G),bt&&et.render(A),Sr(S,A,G);j!==null&&F===0&&(D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(P,A,G),Et.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],me===!0&&Se.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function vi(A,G,te,q){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){q&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Ce=ce.update(A),Le=A.material;Le.visible&&S.push(A,Ce,Le,te,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Ce=ce.update(A),Le=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ge.copy(Ce.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Le)){const ke=Ce.groups;for(let nt=0,Je=ke.length;nt<Je;nt++){const ze=ke[nt],mt=Le[ze.materialIndex];mt&&mt.visible&&S.push(A,Ce,mt,te,Ge.z,ze)}}else Le.visible&&S.push(A,Ce,Le,te,Ge.z,null)}}const Me=A.children;for(let Ce=0,Le=Me.length;Ce<Le;Ce++)vi(Me[Ce],G,te,q)}function Sr(A,G,te,q){const X=A.opaque,Me=A.transmissive,Ce=A.transparent;g.setupLightsView(te),me===!0&&Se.setGlobalState(P.clippingPlanes,te),q&&Ye.viewport(C.copy(q)),X.length>0&&Vi(X,G,te),Me.length>0&&Vi(Me,G,te),Ce.length>0&&Vi(Ce,G,te),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function yr(A,G,te,q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new qr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?No:ki,minFilter:Xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Me=g.state.transmissionRenderTarget[q.id],Ce=q.viewport||C;Me.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);const Le=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(ue),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),bt&&et.render(te);const ke=P.toneMapping;P.toneMapping=_r;const nt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),me===!0&&Se.setGlobalState(P.clippingPlanes,q),Vi(A,te,q),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ze=0,mt=G.length;ze<mt;ze++){const ot=G[ze],Bt=ot.object,It=ot.geometry,_t=ot.material,qe=ot.group;if(_t.side===Ui&&Bt.layers.test(q.layers)){const zt=_t.side;_t.side=Dn,_t.needsUpdate=!0,ko(Bt,te,q,It,_t,qe),_t.side=zt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}P.setRenderTarget(Le),P.setClearColor(ue,fe),nt!==void 0&&(q.viewport=nt),P.toneMapping=ke}function Vi(A,G,te){const q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Me=A.length;X<Me;X++){const Ce=A[X],Le=Ce.object,ke=Ce.geometry,nt=Ce.group;let Je=Ce.material;Je.allowOverride===!0&&q!==null&&(Je=q),Le.layers.test(te.layers)&&ko(Le,G,te,ke,Je,nt)}}function ko(A,G,te,q,X,Me){A.onBeforeRender(P,G,te,q,X,Me),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(P,G,te,q,A,Me),X.transparent===!0&&X.side===Ui&&X.forceSinglePass===!1?(X.side=Dn,X.needsUpdate=!0,P.renderBufferDirect(te,G,q,X,A,Me),X.side=vr,X.needsUpdate=!0,P.renderBufferDirect(te,G,q,X,A,Me),X.side=Ui):P.renderBufferDirect(te,G,q,X,A,Me),A.onAfterRender(P,G,te,q,X,Me)}function Kr(A,G,te){G.isScene!==!0&&(G=Pt);const q=We.get(A),X=g.state.lights,Me=g.state.shadowsArray,Ce=X.state.version,Le=Ve.getParameters(A,X.state,Me,G,te),ke=Ve.getProgramCacheKey(Le);let nt=q.programs;q.environment=A.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(A.isMeshStandardMaterial?Z:E).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",st),nt=new Map,q.programs=nt);let Je=nt.get(ke);if(Je!==void 0){if(q.currentProgram===Je&&q.lightsStateVersion===Ce)return ui(A,Le),Je}else Le.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Le,P),Je=Ve.acquireProgram(Le,ke),nt.set(ke,Je),q.uniforms=Le.uniforms;const ze=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Se.uniform),ui(A,Le),q.needsLights=bl(A),q.lightsStateVersion=Ce,q.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Je,q.uniformsList=null,Je}function Bo(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Ml.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function ui(A,G){const te=We.get(A);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function zo(A,G,te,q,X){G.isScene!==!0&&(G=Pt),D.resetTextureUnits();const Me=G.fog,Ce=q.isMeshStandardMaterial?G.environment:null,Le=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Bs,ke=(q.isMeshStandardMaterial?Z:E).get(q.envMap||Ce),nt=q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Je=!!te.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,ot=!!te.morphAttributes.color;let Bt=_r;q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Bt=P.toneMapping);const It=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,_t=It!==void 0?It.length:0,qe=We.get(q),zt=g.state.lights;if(me===!0&&(Ee===!0||A!==R)){const on=A===R&&q.id===b;Se.setState(q,A,on)}let pt=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zt.state.version||qe.outputColorSpace!==Le||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==ke||q.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==Je||qe.morphTargets!==ze||qe.morphNormals!==mt||qe.morphColors!==ot||qe.toneMapping!==Bt||qe.morphTargetsCount!==_t)&&(pt=!0):(pt=!0,qe.__version=q.version);let un=qe.currentProgram;pt===!0&&(un=Kr(q,G,X));let Gi=!1,xn=!1,xi=!1;const Rt=un.getUniforms(),cn=qe.uniforms;if(Ye.useProgram(un.program)&&(Gi=!0,xn=!0,xi=!0),q.id!==b&&(b=q.id,xn=!0),Gi||R!==A){Ye.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),Pv(xe),bv(xe),Rt.setValue(k,"projectionMatrix",xe)):Rt.setValue(k,"projectionMatrix",A.projectionMatrix),Rt.setValue(k,"viewMatrix",A.matrixWorldInverse);const en=Rt.map.cameraPosition;en!==void 0&&en.setValue(k,je.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&Rt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Rt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,xn=!0,xi=!0)}if(X.isSkinnedMesh){Rt.setOptional(k,X,"bindMatrix"),Rt.setOptional(k,X,"bindMatrixInverse");const on=X.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Rt.setValue(k,"boneTexture",on.boneTexture,D))}X.isBatchedMesh&&(Rt.setOptional(k,X,"batchingTexture"),Rt.setValue(k,"batchingTexture",X._matricesTexture,D),Rt.setOptional(k,X,"batchingIdTexture"),Rt.setValue(k,"batchingIdTexture",X._indirectTexture,D),Rt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&Rt.setValue(k,"batchingColorTexture",X._colorsTexture,D));const Jt=te.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&tt.update(X,te,un),(xn||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Rt.setValue(k,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(cn.envMap.value=ke,cn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(cn.envMapIntensity.value=G.environmentIntensity),xn&&(Rt.setValue(k,"toneMappingExposure",P.toneMappingExposure),qe.needsLights&&Ho(cn,xi),Me&&q.fog===!0&&Ae.refreshFogUniforms(cn,Me),Ae.refreshMaterialUniforms(cn,q,B,le,g.state.transmissionRenderTarget[A.id]),Ml.upload(k,Bo(qe),cn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ml.upload(k,Bo(qe),cn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Rt.setValue(k,"center",X.center),Rt.setValue(k,"modelViewMatrix",X.modelViewMatrix),Rt.setValue(k,"normalMatrix",X.normalMatrix),Rt.setValue(k,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const on=q.uniformsGroups;for(let en=0,xt=on.length;en<xt;en++){const ci=on[en];V.update(ci,un),V.bind(ci,un)}}return un}function Ho(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function bl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,G,te){const q=We.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),We.get(A.texture).__webglTexture=G,We.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:te,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const te=We.get(A);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0};const Vo=k.createFramebuffer();this.setRenderTarget=function(A,G=0,te=0){j=A,z=G,F=te;let q=!0,X=null,Me=!1,Ce=!1;if(A){const ke=We.get(A);if(ke.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(ke.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ke.__hasExternalTextures)D.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(ke.__boundDepthTexture!==ze){if(ze!==null&&We.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);const Je=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?X=Je[G][te]:X=Je[G],Me=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?X=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[te]:X=Je,C.copy(A.viewport),ee.copy(A.scissor),$=A.scissorTest}else C.copy(I).multiplyScalar(B).floor(),ee.copy(ie).multiplyScalar(B).floor(),$=Ue;if(te!==0&&(X=Vo),Ye.bindFramebuffer(k.FRAMEBUFFER,X)&&q&&Ye.drawBuffers(A,X),Ye.viewport(C),Ye.scissor(ee),Ye.setScissorTest($),Me){const ke=We.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,te)}else if(Ce){const ke=We.get(A.texture),nt=G;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.__webglTexture,te,nt)}else if(A!==null&&te!==0){const ke=We.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ke.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(A,G,te,q,X,Me,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){Ye.bindFramebuffer(k.FRAMEBUFFER,Le);try{const ke=A.texture,nt=ke.format,Je=ke.type;if(!ct.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-q&&te>=0&&te<=A.height-X&&k.readPixels(G,te,q,X,rt.convert(nt),rt.convert(Je),Me)}finally{const ke=j!==null?We.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,G,te,q,X,Me,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(G>=0&&G<=A.width-q&&te>=0&&te<=A.height-X){Ye.bindFramebuffer(k.FRAMEBUFFER,Le);const ke=A.texture,nt=ke.format,Je=ke.type;if(!ct.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),k.readPixels(G,te,q,X,rt.convert(nt),rt.convert(Je),0);const mt=j!==null?We.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,mt);const ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Cv(k,ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.deleteBuffer(ze),k.deleteSync(ot),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,te=0){const q=Math.pow(2,-te),X=Math.floor(A.image.width*q),Me=Math.floor(A.image.height*q),Ce=G!==null?G.x:0,Le=G!==null?G.y:0;D.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,te,0,0,Ce,Le,X,Me),Ye.unbindTexture()};const Go=k.createFramebuffer(),Wo=k.createFramebuffer();this.copyTextureToTexture=function(A,G,te=null,q=null,X=0,Me=null){Me===null&&(X!==0?(yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=X,X=0):Me=0);let Ce,Le,ke,nt,Je,ze,mt,ot,Bt;const It=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(te!==null)Ce=te.max.x-te.min.x,Le=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,nt=te.min.x,Je=te.min.y,ze=te.isBox3?te.min.z:0;else{const Jt=Math.pow(2,-X);Ce=Math.floor(It.width*Jt),Le=Math.floor(It.height*Jt),A.isDataArrayTexture?ke=It.depth:A.isData3DTexture?ke=Math.floor(It.depth*Jt):ke=1,nt=0,Je=0,ze=0}q!==null?(mt=q.x,ot=q.y,Bt=q.z):(mt=0,ot=0,Bt=0);const _t=rt.convert(G.format),qe=rt.convert(G.type);let zt;G.isData3DTexture?(D.setTexture3D(G,0),zt=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),zt=k.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const pt=k.getParameter(k.UNPACK_ROW_LENGTH),un=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Gi=k.getParameter(k.UNPACK_SKIP_PIXELS),xn=k.getParameter(k.UNPACK_SKIP_ROWS),xi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,It.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,It.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ze);const Rt=A.isDataArrayTexture||A.isData3DTexture,cn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Jt=We.get(A),on=We.get(G),en=We.get(Jt.__renderTarget),xt=We.get(on.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,en.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ci=0;ci<ke;ci++)Rt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(A).__webglTexture,X,ze+ci),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(G).__webglTexture,Me,Bt+ci)),k.blitFramebuffer(nt,Je,Ce,Le,mt,ot,Ce,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||We.has(A)){const Jt=We.get(A),on=We.get(G);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,Go),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Wo);for(let en=0;en<ke;en++)Rt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,X,ze+en):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jt.__webglTexture,X),cn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,on.__webglTexture,Me,Bt+en):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,on.__webglTexture,Me),X!==0?k.blitFramebuffer(nt,Je,Ce,Le,mt,ot,Ce,Le,k.COLOR_BUFFER_BIT,k.NEAREST):cn?k.copyTexSubImage3D(zt,Me,mt,ot,Bt+en,nt,Je,Ce,Le):k.copyTexSubImage2D(zt,Me,mt,ot,nt,Je,Ce,Le);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else cn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(zt,Me,mt,ot,Bt,Ce,Le,ke,_t,qe,It.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(zt,Me,mt,ot,Bt,Ce,Le,ke,_t,It.data):k.texSubImage3D(zt,Me,mt,ot,Bt,Ce,Le,ke,_t,qe,It):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,mt,ot,Ce,Le,_t,qe,It.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,mt,ot,It.width,It.height,_t,It.data):k.texSubImage2D(k.TEXTURE_2D,Me,mt,ot,Ce,Le,_t,qe,It);k.pixelStorei(k.UNPACK_ROW_LENGTH,pt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,un),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Gi),k.pixelStorei(k.UNPACK_SKIP_ROWS,xn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,xi),Me===0&&G.generateMipmaps&&k.generateMipmap(zt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,G,te=null,q=null,X=0){return yl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,te,q,X)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){z=0,F=0,j=null,Ye.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const jM=()=>{const o=Yt.useRef(null),e=Yt.useRef(null),n=Yt.useRef(null),r=Yt.useRef(null),a=Yt.useRef(null);return Yt.useEffect(()=>{if(!o.current)return;const u=new t0;e.current=u;const f=new qn(75,window.innerWidth/window.innerHeight,.1,1e3);f.position.z=5,n.current=f;const d=new XM({alpha:!0});d.setSize(window.innerWidth,window.innerHeight),d.setClearColor(0,0),o.current.appendChild(d.domElement),r.current=d;const p=1e3,m=new zi,v=new Float32Array(p*3),_=new Float32Array(p*3);for(let U=0;U<p*3;U+=3){v[U]=(Math.random()-.5)*20,v[U+1]=(Math.random()-.5)*20,v[U+2]=(Math.random()-.5)*20;const L=Math.random();L<.33?(_[U]=0,_[U+1]=.94,_[U+2]=1):L<.66?(_[U]=1,_[U+1]=0,_[U+2]=1):(_[U]=0,_[U+1]=1,_[U+2]=.25)}m.setAttribute("position",new Kn(v,3)),m.setAttribute("color",new Kn(_,3));const x=new Hm({size:.05,vertexColors:!0,transparent:!0,opacity:.8}),y=new r0(m,x);u.add(y),a.current=y;const w=15;for(let U=0;U<w;U++){const L=new Vs(Math.random()*.5+.1,Math.random()*.5+.1,Math.random()*.5+.1),P=new Hf({color:new Tt(U%3===0?61695:U%3===1?16711935:65345),wireframe:!0,transparent:!0,opacity:.3}),W=new $n(L,P);W.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),W.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},floatSpeed:{x:(Math.random()-.5)*.005,y:(Math.random()-.5)*.005,z:(Math.random()-.5)*.005}},u.add(W)}const T=()=>{!n.current||!r.current||(n.current.aspect=window.innerWidth/window.innerHeight,n.current.updateProjectionMatrix(),r.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",T);let S=window.scrollY;const g=()=>{if(requestAnimationFrame(g),!e.current||!n.current||!r.current)return;const U=window.scrollY-S;S=window.scrollY,a.current&&(a.current.rotation.x+=3e-4,a.current.rotation.y+=5e-4,a.current.position.y+=U*.001),e.current.children.forEach(L=>{L instanceof $n&&L.userData.rotationSpeed&&(L.rotation.x+=L.userData.rotationSpeed.x,L.rotation.y+=L.userData.rotationSpeed.y,L.rotation.z+=L.userData.rotationSpeed.z,L.position.x+=L.userData.floatSpeed.x,L.position.y+=L.userData.floatSpeed.y+U*.001,L.position.z+=L.userData.floatSpeed.z,(Math.abs(L.position.x)>10||Math.abs(L.position.y)>10||Math.abs(L.position.z)>10)&&L.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10))}),r.current.render(e.current,n.current)};return g(),()=>{var U;window.removeEventListener("resize",T),r.current&&o.current&&o.current.removeChild(r.current.domElement),a.current&&(a.current.geometry.dispose(),a.current.material.dispose()),(U=e.current)==null||U.children.forEach(L=>{L instanceof $n&&(L.geometry.dispose(),L.material.dispose())})}},[]),de.jsx("div",{ref:o,className:"parallax-background"})};function YM(){var z,F,j,b,R;const[o,e]=Yt.useState(0),[n,r]=Yt.useState(null),[a,u]=Yt.useState(null),[f,d]=Yt.useState({x:0,y:0}),[p,m]=Yt.useState("pt"),v=Yt.useRef(null),_=Yt.useRef(null),x=Yt.useRef(null),y=Yt.useRef(null),w=Yt.useRef(null),T=I_[p];Yt.useEffect(()=>{const C=()=>{e(window.scrollY)};return window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)},[]),Yt.useEffect(()=>{document.documentElement.dir=p==="ar"?"rtl":"ltr",document.body.className=p==="ar"?"rtl":""},[p]),Yt.useEffect(()=>{const C=document.getElementById("matrix-canvas");if(!C)return;const ee=C.getContext("2d");if(!ee)return;C.width=window.innerWidth,C.height=window.innerHeight;const $=14,ue=Math.floor(C.width/$),fe=[];for(let re=0;re<ue;re++)fe[re]=Math.floor(Math.random()*C.height);const ae="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";function le(){if(ee){ee.fillStyle="rgba(0, 0, 0, 0.05)",ee.fillRect(0,0,C.width,C.height),ee.fillStyle="#00ff41",ee.font=`${$}px monospace`;for(let re=0;re<fe.length;re++){const oe=ae[Math.floor(Math.random()*ae.length)];ee&&ee.fillText(oe,re*$,fe[re]*$),fe[re]*$>C.height&&Math.random()>.975&&(fe[re]=0),fe[re]++}}}const B=setInterval(le,50);return()=>clearInterval(B)},[]);const S=(C,ee)=>{const $=ee.clientX,ue=ee.clientY;d({x:$,y:ue}),r(C===n?null:C)},g=(C,ee)=>{const $=ee.clientX,ue=ee.clientY;d({x:$,y:ue}),u(C===a?null:C)},U=()=>{r(null)},L=()=>{u(null)},P=C=>{m(C)},W={"Trezor Model One":"R$ 799,00","Trezor Model T":"R$ 1.499,00","Ledger Nano S Plus":"R$ 899,00","Ledger Nano X":"R$ 1.299,00","Paper Wallet Básica":"R$ 99,00","Paper Wallet Premium":"R$ 249,00","Paper Wallet Empresarial":"R$ 499,00","Kit de Backup":"R$ 349,00","e-CPF":"R$ 299,00","e-CNPJ":"R$ 499,00","Certificados SSL/TLS":"R$ 399,00","Certificados de Assinatura de Código":"R$ 799,00"};return de.jsxs("div",{className:"parallax-container",children:[de.jsx("div",{className:"scanline"}),de.jsx("div",{className:"vignette"}),de.jsx("canvas",{id:"matrix-canvas",className:"matrix-canvas"}),de.jsx(jM,{}),de.jsxs("div",{className:"language-selector",children:[de.jsx("button",{className:`language-btn ${p==="pt"?"active":""}`,onClick:()=>P("pt"),children:"PT"}),de.jsx("button",{className:`language-btn ${p==="en"?"active":""}`,onClick:()=>P("en"),children:"EN"}),de.jsx("button",{className:`language-btn ${p==="ar"?"active":""}`,onClick:()=>P("ar"),children:"AR"})]}),de.jsxs("section",{ref:v,className:"section hero-section",style:{transform:`translateY(${o*.5}px)`},children:[de.jsxs("div",{className:"hero-content",children:[de.jsx("div",{className:"logo-container",children:de.jsx("img",{src:"/criptografia_logo.jpeg",alt:"Criptografia Logo",className:"logo glitch-effect",style:{transform:`translateZ(${2+o*.01}px) scale(${1-o*5e-4})`,opacity:1-o*.001}})}),de.jsx("h1",{className:"main-title neon-text-green typing-effect",children:"CRIPTOGRAFIA"}),de.jsx("p",{className:"tagline neon-text-cyan",children:T.tagline}),de.jsxs("div",{className:"hero-buttons",children:[de.jsx("button",{className:"cyberpunk-button",onClick:()=>{var C;return(C=_.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:T.explore_services}),de.jsx("button",{className:"cyberpunk-button",onClick:()=>{var C;return(C=y.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:T.store}),de.jsx("button",{className:"cyberpunk-button",onClick:()=>{var C;return(C=w.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:T.about_us})]})]}),de.jsxs("div",{className:"scroll-indicator",children:[de.jsx("span",{className:"neon-text-cyan",children:T.scroll_down}),de.jsx("div",{className:"scroll-arrow"})]})]}),de.jsxs("section",{ref:_,className:"section services-section",style:{transform:`translateY(${(o-(((z=_.current)==null?void 0:z.offsetTop)||0))*.2}px)`},children:[de.jsx("h2",{className:"section-title neon-text-pink",children:T.our_services}),de.jsx("p",{className:"section-subtitle",children:T.services_subtitle}),de.jsx("div",{className:"grid-container",children:xp.map((C,ee)=>de.jsx(F_,{title:C.title,description:C.description,icon:C.icon,delay:ee*.1,className:n===C.id?"active":"",onClick:$=>S(C.id,$)},C.id))})]}),de.jsxs("section",{ref:x,className:"section products-section",style:{transform:`translateY(${(o-(((F=x.current)==null?void 0:F.offsetTop)||0))*.2}px)`},children:[de.jsx("h2",{className:"section-title neon-text-cyan",children:T.physical_products}),de.jsx("p",{className:"section-subtitle",children:T.products_subtitle}),de.jsx("div",{className:"grid-container",children:dc.map((C,ee)=>de.jsx(O_,{title:C.title,description:C.description,icon:C.icon,delay:ee*.1,className:a===C.id?"active":"",onClick:$=>g(C.id,$)},C.id))})]}),de.jsxs("section",{ref:y,className:"section store-section",style:{transform:`translateY(${(o-(((j=y.current)==null?void 0:j.offsetTop)||0))*.2}px)`},children:[de.jsx("h2",{className:"section-title neon-text-pink",children:T.store_title}),de.jsx("p",{className:"section-subtitle",children:T.store_subtitle}),de.jsx("div",{className:"store-container",children:dc.map(C=>de.jsxs("div",{className:"store-category",children:[de.jsx("h3",{className:"store-category-title neon-text-cyan",children:C.title}),de.jsx("div",{className:"store-items",children:C.options.map((ee,$)=>de.jsxs("div",{className:"store-item",children:[de.jsxs("div",{className:"store-item-header",children:[de.jsx("h4",{className:"store-item-title neon-text-green",children:ee.name}),de.jsx("div",{className:"store-item-price neon-text-pink",children:W[ee.name]})]}),de.jsx("p",{className:"store-item-description",children:ee.description}),de.jsx("button",{className:"store-item-button cyberpunk-button",children:T.add_to_cart})]},$))})]},C.id))})]}),de.jsxs("section",{ref:w,className:"section about-section",style:{transform:`translateY(${(o-(((b=w.current)==null?void 0:b.offsetTop)||0))*.2}px)`},children:[de.jsx("h2",{className:"section-title neon-text-green",children:T.about_title}),de.jsx("p",{className:"section-subtitle",children:T.about_subtitle}),de.jsxs("div",{className:"about-content",children:[de.jsx("div",{className:"about-image",style:{transform:`translateZ(${2+(o-(((R=w.current)==null?void 0:R.offsetTop)||0))*.01}px)`},children:de.jsx("img",{src:"/criptografia_logo.jpeg",alt:"Criptografia",className:"turing-image"})}),de.jsxs("div",{className:"about-text",children:[de.jsx("p",{children:T.about_text_1}),de.jsx("p",{children:T.about_text_2}),de.jsx("p",{children:T.about_text_3}),de.jsx("p",{children:T.about_text_4}),de.jsxs("ul",{className:"about-list",children:[de.jsxs("li",{children:[de.jsx("span",{className:"neon-text-pink",children:T.about_feature_1.split(" - ")[0]})," - ",T.about_feature_1.split(" - ")[1]]}),de.jsxs("li",{children:[de.jsx("span",{className:"neon-text-pink",children:T.about_feature_2.split(" - ")[0]})," - ",T.about_feature_2.split(" - ")[1]]}),de.jsxs("li",{children:[de.jsx("span",{className:"neon-text-pink",children:T.about_feature_3.split(" - ")[0]})," - ",T.about_feature_3.split(" - ")[1]]}),de.jsxs("li",{children:[de.jsx("span",{className:"neon-text-pink",children:T.about_feature_4.split(" - ")[0]})," - ",T.about_feature_4.split(" - ")[1]]})]})]})]})]}),de.jsx("footer",{className:"footer",children:de.jsxs("div",{className:"footer-content",children:[de.jsx("div",{className:"footer-logo",children:de.jsx("h3",{className:"neon-text-green",children:"CRIPTOGRAFIA"})}),de.jsxs("div",{className:"footer-links",children:[de.jsx("a",{href:"#",className:"footer-link neon-text-cyan",onClick:()=>{var C;return(C=_.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:T.services}),de.jsx("a",{href:"#",className:"footer-link neon-text-cyan",onClick:()=>{var C;return(C=x.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:T.products}),de.jsx("a",{href:"#",className:"footer-link neon-text-cyan",onClick:()=>{var C;return(C=y.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:T.store}),de.jsx("a",{href:"#",className:"footer-link neon-text-cyan",onClick:()=>{var C;return(C=w.current)==null?void 0:C.scrollIntoView({behavior:"smooth"})},children:T.about}),de.jsx("a",{href:"#",className:"footer-link neon-text-cyan",children:T.contact})]}),de.jsxs("div",{className:"footer-contact",children:[de.jsx("p",{children:"contato@criptografia.app"}),de.jsx("p",{children:T.copyright})]})]})}),n&&de.jsx("div",{className:"detail-modal-overlay",onClick:U,children:de.jsxs("div",{className:"detail-modal",onClick:C=>C.stopPropagation(),style:{position:"absolute",top:`${f.y}px`,left:`${f.x}px`,transform:"translate(-50%, -50%)"},children:[de.jsx("button",{className:"modal-close",onClick:U,children:"×"}),xp.filter(C=>C.id===n).map(C=>de.jsx(Sp,{title:C.title,description:C.description,features:C.features,options:C.options,icon:C.icon},C.id))]})}),a&&de.jsx("div",{className:"detail-modal-overlay",onClick:L,children:de.jsxs("div",{className:"detail-modal",onClick:C=>C.stopPropagation(),style:{position:"absolute",top:`${f.y}px`,left:`${f.x}px`,transform:"translate(-50%, -50%)"},children:[de.jsx("button",{className:"modal-close",onClick:L,children:"×"}),dc.filter(C=>C.id===a).map(C=>de.jsx(Sp,{title:C.title,description:C.description,features:C.features,options:C.options,icon:C.icon},C.id))]})})]})}U_.createRoot(document.getElementById("root")).render(de.jsx(Yt.StrictMode,{children:de.jsx(YM,{})}));
