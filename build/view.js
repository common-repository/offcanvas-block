/*! For license information please see view.js.LICENSE.txt */
(()=>{var t={688:(t,e,n)=>{"use strict";var r=n(751);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},46:(t,e,n)=>{t.exports=n(688)()},751:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},744:(t,e,n)=>{"use strict";var r=n(795);e.H=r.createRoot,r.hydrateRoot},558:(t,e,n)=>{"use strict";var r=n(609),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)s.call(e,r)&&!c.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:o,type:t,key:l,ref:u,props:i,_owner:a.current}}e.Fragment=i,e.jsx=l,e.jsxs=l},134:(t,e,n)=>{"use strict";t.exports=n(558)},609:t=>{"use strict";t.exports=window.React},795:t=>{"use strict";t.exports=window.ReactDOM},462:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=s(t,i(n)))}return t}function i(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=s(e,n));return e}function s(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(609),e=n.n(t),r=n(744),o=n(462),i=n.n(o);const s=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,a="undefined"!=typeof document||s?t.useLayoutEffect:t.useEffect,c=new WeakMap,l=(t,e)=>{if(!t||!e)return;const n=c.get(e)||new Map;c.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function u(e,n=("undefined"==typeof window?void 0:window)){const r=l(e,n),[o,i]=(0,t.useState)((()=>!!r&&r.matches));return a((()=>{let t=l(e,n);if(!t)return i(!1);let r=c.get(n);const o=()=>{i(t.matches)};return t.refCount++,t.addListener(o),o(),()=>{t.removeListener(o),t.refCount--,t.refCount<=0&&(null==r||r.delete(t.media)),t=void 0}}),[e]),o}const d=function(e){const n=Object.keys(e);function r(t,e){return t===e?e:t?`${t} and ${e}`:e}return function(o,i,s){let a;return"object"==typeof o?(a=o,s=i,i=!0):(i=i||!0,a={[o]:i}),u((0,t.useMemo)((()=>Object.entries(a).reduce(((t,[o,i])=>("up"!==i&&!0!==i||(t=r(t,function(t){let n=e[t];return"number"==typeof n&&(n=`${n}px`),`(min-width: ${n})`}(o))),"down"!==i&&!0!==i||(t=r(t,function(t){const r=function(t){return n[Math.min(n.indexOf(t)+1,n.length-1)]}(t);let o=e[r];return o="number"==typeof o?o-.2+"px":`calc(${o} - 0.2px)`,`(max-width: ${o})`}(o))),t)),"")),[JSON.stringify(a)]),s)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),f=function(e){const n=(0,t.useRef)(e);return(0,t.useEffect)((()=>{n.current=e}),[e]),n};function p(e){const n=f(e);return(0,t.useCallback)((function(...t){return n.current&&n.current(...t)}),[n])}function m(t){return t&&t.ownerDocument||document}function h(t){void 0===t&&(t=m());try{var e=t.activeElement;return e&&e.nodeName?e:null}catch(e){return t.body}}function E(t,e){return t.contains?t.contains(e):t.compareDocumentPosition?t===e||!!(16&t.compareDocumentPosition(e)):void 0}const g=!("undefined"==typeof window||!window.document||!window.document.createElement);var x=!1,v=!1;try{var b={get passive(){return x=!0},get once(){return v=x=!0}};g&&(window.addEventListener("test",b,b),window.removeEventListener("test",b,!0))}catch(t){}const y=function(t,e,n,r){return function(t,e,n,r){if(r&&"boolean"!=typeof r&&!v){var o=r.once,i=r.capture,s=n;!v&&o&&(s=n.__once||function t(r){this.removeEventListener(e,t,i),n.call(this,r)},n.__once=s),t.addEventListener(e,s,x?r:i)}t.addEventListener(e,n,r)}(t,e,n,r),function(){!function(t,e,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;t.removeEventListener(e,n,o),n.__once&&t.removeEventListener(e,n.__once,o)}(t,e,n,r)}};var w=n(795),O=n.n(w);var k=/([A-Z])/g,C=/^ms-/;function R(t){return function(t){return t.replace(k,"-$1").toLowerCase()}(t).replace(C,"-ms-")}var S=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const $=function(t,e){var n="",r="";if("string"==typeof e)return t.style.getPropertyValue(R(e))||function(t,e){return function(t){var e=m(t);return e&&e.defaultView||window}(t).getComputedStyle(t,e)}(t).getPropertyValue(R(e));Object.keys(e).forEach((function(o){var i=e[o];i||0===i?function(t){return!(!t||!S.test(t))}(o)?r+=o+"("+i+") ":n+=R(o)+": "+i+";":t.style.removeProperty(R(o))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n},N="data-rr-ui-modal-open",T=class{constructor({ownerDocument:t,handleContainerOverflow:e=!0,isRTL:n=!1}={}){this.handleContainerOverflow=e,this.isRTL=n,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return function(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const e={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();t.style={overflow:r.style.overflow,[n]:r.style[n]},t.scrollBarWidth&&(e[n]=`${parseInt($(r,n)||"0",10)+t.scrollBarWidth}px`),r.setAttribute(N,""),$(r,e)}reset(){[...this.modals].forEach((t=>this.remove(t)))}removeContainerStyle(t){const e=this.getElement();e.removeAttribute(N),Object.assign(e.style,t.style)}add(t){let e=this.modals.indexOf(t);return-1!==e||(e=this.modals.length,this.modals.push(t),this.setModalAttributes(t),0!==e||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state))),e}remove(t){const e=this.modals.indexOf(t);-1!==e&&(this.modals.splice(e,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}},j=(0,t.createContext)(g?window:void 0);function L(){return(0,t.useContext)(j)}j.Provider;const _=(t,e)=>g?null==t?(e||m()).body:("function"==typeof t&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null,D=t=>t&&"function"!=typeof t?e=>{t.current=e}:t,P=function(e,n){return(0,t.useMemo)((()=>function(t,e){const n=D(t),r=D(e);return t=>{n&&n(t),r&&r(t)}}(e,n)),[e,n])},F=function({children:e,in:n,onExited:r,mountOnEnter:o,unmountOnExit:i}){const s=(0,t.useRef)(null),a=(0,t.useRef)(n),c=p(r);(0,t.useEffect)((()=>{n?a.current=!0:c(s.current)}),[n,c]);const l=P(s,e.ref),u=(0,t.cloneElement)(e,{ref:l});return n?u:i||!a.current&&o?null:u};function M(){const e=t.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const B=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];var A=n(134);const H=["component"],W=t.forwardRef(((e,n)=>{let{component:r}=e;const o=function(e){let{onEnter:n,onEntering:r,onEntered:o,onExit:i,onExiting:s,onExited:a,addEndListener:c,children:l}=e,u=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(e,B);const{major:d}=M(),f=d>=19?l.props.ref:l.ref,p=(0,t.useRef)(null),m=P(p,"function"==typeof l?null:f),h=t=>e=>{t&&p.current&&t(p.current,e)},E=(0,t.useCallback)(h(n),[n]),g=(0,t.useCallback)(h(r),[r]),x=(0,t.useCallback)(h(o),[o]),v=(0,t.useCallback)(h(i),[i]),b=(0,t.useCallback)(h(s),[s]),y=(0,t.useCallback)(h(a),[a]),w=(0,t.useCallback)(h(c),[c]);return Object.assign({},u,{nodeRef:p},n&&{onEnter:E},r&&{onEntering:g},o&&{onEntered:x},i&&{onExit:v},s&&{onExiting:b},a&&{onExited:y},c&&{addEndListener:w},{children:"function"==typeof l?(t,e)=>l(t,Object.assign({},e,{ref:m})):(0,t.cloneElement)(l,{ref:m})})}(function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(e,H));return(0,A.jsx)(r,Object.assign({ref:n},o))}));function I({children:e,in:n,onExited:r,onEntered:o,transition:i}){const[s,c]=(0,t.useState)(!n);n&&s&&c(!1);const l=function({in:e,onTransition:n}){const r=(0,t.useRef)(null),o=(0,t.useRef)(!0),i=p(n);return a((()=>{if(!r.current)return;let t=!1;return i({in:e,element:r.current,initial:o.current,isStale:()=>t}),()=>{t=!0}}),[e,i]),a((()=>(o.current=!1,()=>{o.current=!0})),[]),r}({in:!!n,onTransition:t=>{Promise.resolve(i(t)).then((()=>{t.isStale()||(t.in?null==o||o(t.element,t.initial):(c(!0),null==r||r(t.element)))}),(e=>{throw t.in||c(!0),e}))}}),u=P(l,e.ref);return s&&!n?null:(0,t.cloneElement)(e,{ref:u})}function V(t,e,n){return t?(0,A.jsx)(W,Object.assign({},n,{component:t})):e?(0,A.jsx)(I,Object.assign({},n,{transition:e})):(0,A.jsx)(F,Object.assign({},n))}const U=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let z;const K=(0,t.forwardRef)(((e,n)=>{let{show:r=!1,role:o="dialog",className:i,style:s,children:a,backdrop:c=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:m,backdropTransition:x,runBackdropTransition:v,autoFocus:b=!0,enforceFocus:w=!0,restoreFocus:k=!0,restoreFocusOptions:C,renderDialog:R,renderBackdrop:S=t=>(0,A.jsx)("div",Object.assign({},t)),manager:$,container:N,onShow:j,onHide:D=()=>{},onExit:P,onExited:F,onExiting:M,onEnter:B,onEntering:H,onEntered:W}=e,I=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(e,U);const K=L(),X=function(e,n){const r=L(),[o,i]=(0,t.useState)((()=>_(e,null==r?void 0:r.document)));if(!o){const t=_(e);t&&i(t)}return(0,t.useEffect)((()=>{}),[n,o]),(0,t.useEffect)((()=>{const t=_(e);t!==o&&i(t)}),[e,o]),o}(N),Y=function(e){const n=L(),r=e||function(t){return z||(z=new T({ownerDocument:null==t?void 0:t.document})),z}(n),o=(0,t.useRef)({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>r.add(o.current),remove:()=>r.remove(o.current),isTopModal:()=>r.isTopModal(o.current),setDialogRef:(0,t.useCallback)((t=>{o.current.dialog=t}),[]),setBackdropRef:(0,t.useCallback)((t=>{o.current.backdrop=t}),[])})}($),q=function(){const e=(0,t.useRef)(!0),n=(0,t.useRef)((()=>e.current));return(0,t.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),n.current}(),G=function(e){const n=(0,t.useRef)(null);return(0,t.useEffect)((()=>{n.current=e})),n.current}(r),[J,Z]=(0,t.useState)(!r),Q=(0,t.useRef)(null);(0,t.useImperativeHandle)(n,(()=>Y),[Y]),g&&!G&&r&&(Q.current=h(null==K?void 0:K.document)),r&&J&&Z(!1);const tt=p((()=>{if(Y.add(),st.current=y(document,"keydown",ot),it.current=y(document,"focus",(()=>setTimeout(nt)),!0),j&&j(),b){var t,e;const n=h(null!=(t=null==(e=Y.dialog)?void 0:e.ownerDocument)?t:null==K?void 0:K.document);Y.dialog&&n&&!E(Y.dialog,n)&&(Q.current=n,Y.dialog.focus())}})),et=p((()=>{var t;Y.remove(),null==st.current||st.current(),null==it.current||it.current(),k&&(null==(t=Q.current)||null==t.focus||t.focus(C),Q.current=null)}));(0,t.useEffect)((()=>{r&&X&&tt()}),[r,X,tt]),(0,t.useEffect)((()=>{J&&et()}),[J,et]),function(e){const n=function(e){const n=(0,t.useRef)(e);return n.current=e,n}(e);(0,t.useEffect)((()=>()=>n.current()),[])}((()=>{et()}));const nt=p((()=>{if(!w||!q()||!Y.isTopModal())return;const t=h(null==K?void 0:K.document);Y.dialog&&t&&!E(Y.dialog,t)&&Y.dialog.focus()})),rt=p((t=>{t.target===t.currentTarget&&(null==u||u(t),!0===c&&D())})),ot=p((t=>{l&&function(t){return"Escape"===t.code||27===t.keyCode}(t)&&Y.isTopModal()&&(null==d||d(t),t.defaultPrevented||D())})),it=(0,t.useRef)(),st=(0,t.useRef)();if(!X)return null;const at=Object.assign({role:o,ref:Y.setDialogRef,"aria-modal":"dialog"===o||void 0},I,{style:s,className:i,tabIndex:-1});let ct=R?R(at):(0,A.jsx)("div",Object.assign({},at,{children:t.cloneElement(a,{role:"document"})}));ct=V(f,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:P,onExiting:M,onExited:(...t)=>{Z(!0),null==F||F(...t)},onEnter:B,onEntering:H,onEntered:W,children:ct});let lt=null;return c&&(lt=S({ref:Y.setBackdropRef,onClick:rt}),lt=V(x,v,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:lt})),(0,A.jsx)(A.Fragment,{children:O().createPortal((0,A.jsxs)(A.Fragment,{children:[lt,ct]}),X)})}));K.displayName="Modal";const X=Object.assign(K,{Manager:T});function Y(t,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Y(t,e)}const q=e().createContext(null);var G="unmounted",J="exited",Z="entering",Q="entered",tt="exiting",et=function(t){var n,r;function o(e,n){var r;r=t.call(this,e,n)||this;var o,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(o=J,r.appearStatus=Z):o=Q:o=e.unmountOnExit||e.mountOnEnter?G:J,r.state={status:o},r.nextCallback=null,r}r=t,(n=o).prototype=Object.create(r.prototype),n.prototype.constructor=n,Y(n,r),o.getDerivedStateFromProps=function(t,e){return t.in&&e.status===G?{status:J}:null};var i=o.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==Z&&n!==Q&&(e=Z):n!==Z&&n!==Q||(e=tt)}this.updateStatus(!1,e)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},i.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===Z){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:O().findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===J&&this.setState({status:G})},i.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[O().findDOMNode(this),r],i=o[0],s=o[1],a=this.getTimeouts(),c=r?a.appear:a.enter;t||n?(this.props.onEnter(i,s),this.safeSetState({status:Z},(function(){e.props.onEntering(i,s),e.onTransitionEnd(c,(function(){e.safeSetState({status:Q},(function(){e.props.onEntered(i,s)}))}))}))):this.safeSetState({status:Q},(function(){e.props.onEntered(i)}))},i.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:O().findDOMNode(this);e?(this.props.onExit(r),this.safeSetState({status:tt},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:J},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:J},(function(){t.props.onExited(r)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},i.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:O().findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],s=o[1];this.props.addEndListener(i,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},i.render=function(){var t=this.state.status;if(t===G)return null;var n=this.props,r=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return e().createElement(q.Provider,{value:null},"function"==typeof r?r(t,o):e().cloneElement(e().Children.only(r),o))},o}(e().Component);function nt(){}et.contextType=q,et.propTypes={},et.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:nt,onEntering:nt,onEntered:nt,onExit:nt,onExiting:nt,onExited:nt},et.UNMOUNTED=G,et.EXITED=J,et.ENTERING=Z,et.ENTERED=Q,et.EXITING=tt;const rt=et;function ot(t,e,n,r){var o,i;null==n&&(i=-1===(o=$(t,"transitionDuration")||"").indexOf("ms")?1e3:1,n=parseFloat(o)*i||0);var s=function(t,e,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent("transitionend",n,r),t.dispatchEvent(o)}}(t,0,!0)}),e+n),i=y(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}(t,n,r),a=y(t,"transitionend",e);return function(){s(),a()}}function it(t,e){const n=$(t,e)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function st(t,e){const n=it(t,"transitionDuration"),r=it(t,"transitionDelay"),o=ot(t,(n=>{n.target===t&&(o(),e(n))}),n+r)}const at=e().forwardRef((({onEnter:n,onEntering:r,onEntered:o,onExit:i,onExiting:s,onExited:a,addEndListener:c,children:l,childRef:u,...d},f)=>{const p=(0,t.useRef)(null),m=P(p,u),h=t=>{var e;m((e=t)&&"setState"in e?O().findDOMNode(e):null!=e?e:null)},E=t=>e=>{t&&p.current&&t(p.current,e)},g=(0,t.useCallback)(E(n),[n]),x=(0,t.useCallback)(E(r),[r]),v=(0,t.useCallback)(E(o),[o]),b=(0,t.useCallback)(E(i),[i]),y=(0,t.useCallback)(E(s),[s]),w=(0,t.useCallback)(E(a),[a]),k=(0,t.useCallback)(E(c),[c]);return(0,A.jsx)(rt,{ref:f,...d,onEnter:g,onEntered:v,onEntering:x,onExit:b,onExited:w,onExiting:y,addEndListener:k,nodeRef:p,children:"function"==typeof l?(t,e)=>l(t,{...e,ref:h}):e().cloneElement(l,{ref:h})})})),ct={[Z]:"show",[Q]:"show"},lt=t.forwardRef((({className:e,children:n,transitionClasses:r={},onEnter:o,...s},a)=>{const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},l=(0,t.useCallback)(((t,e)=>{!function(t){t.offsetHeight}(t),null==o||o(t,e)}),[o]),{major:u}=M(),d=u>=19?n.props.ref:n.ref;return(0,A.jsx)(at,{ref:a,addEndListener:st,...c,onEnter:l,childRef:d,children:(o,s)=>t.cloneElement(n,{...s,className:i()("fade",e,n.props.className,ct[o],r[o])})})}));lt.displayName="Fade";const ut=lt,dt=t.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:ft,Provider:pt}=dt;function mt(e,n){const{prefixes:r}=(0,t.useContext)(dt);return e||r[n]||n}const ht=t.forwardRef((({className:t,bsPrefix:e,as:n="div",...r},o)=>(e=mt(e,"offcanvas-body"),(0,A.jsx)(n,{ref:o,className:i()(t,e),...r}))));ht.displayName="OffcanvasBody";const Et=ht,gt={[Z]:"show",[Q]:"show"},xt=t.forwardRef((({bsPrefix:e,className:n,children:r,in:o=!1,mountOnEnter:s=!1,unmountOnExit:a=!1,appear:c=!1,...l},u)=>(e=mt(e,"offcanvas"),(0,A.jsx)(at,{ref:u,addEndListener:st,in:o,mountOnEnter:s,unmountOnExit:a,appear:c,...l,childRef:r.ref,children:(o,s)=>t.cloneElement(r,{...s,className:i()(n,r.props.className,(o===Z||o===tt)&&`${e}-toggling`,gt[o])})}))));xt.displayName="OffcanvasToggling";const vt=xt,bt=t.createContext({onHide(){}});var yt=n(46),wt=n.n(yt);const Ot={"aria-label":wt().string,onClick:wt().func,variant:wt().oneOf(["white"])},kt=t.forwardRef((({className:t,variant:e,"aria-label":n="Close",...r},o)=>(0,A.jsx)("button",{ref:o,type:"button",className:i()("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r})));kt.displayName="CloseButton",kt.propTypes=Ot;const Ct=kt,Rt=t.forwardRef((({closeLabel:e="Close",closeVariant:n,closeButton:r=!1,onHide:o,children:i,...s},a)=>{const c=(0,t.useContext)(bt),l=p((()=>{null==c||c.onHide(),null==o||o()}));return(0,A.jsxs)("div",{ref:a,...s,children:[i,r&&(0,A.jsx)(Ct,{"aria-label":e,variant:n,onClick:l})]})})),St=t.forwardRef((({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...o},s)=>(t=mt(t,"offcanvas-header"),(0,A.jsx)(Rt,{ref:s,...o,className:i()(e,t),closeLabel:n,closeButton:r}))));St.displayName="OffcanvasHeader";const $t=St,Nt=t.forwardRef(((t,e)=>(0,A.jsx)("div",{...t,ref:e,className:i()(t.className,"h5")})));const Tt=t.forwardRef((({className:t,bsPrefix:e,as:n=Nt,...r},o)=>(e=mt(e,"offcanvas-title"),(0,A.jsx)(n,{ref:o,className:i()(t,e),...r}))));Tt.displayName="OffcanvasTitle";const jt=Tt;var Lt=Function.prototype.bind.call(Function.prototype.call,[].slice);function _t(t,e){return Lt(t.querySelectorAll(e))}function Dt(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const Pt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ft=".sticky-top",Mt=".navbar-toggler";class Bt extends T{adjustAndStore(t,e,n){const r=e.style[t];e.dataset[t]=r,$(e,{[t]:`${parseFloat($(e,t))+n}px`})}restore(t,e){const n=e.dataset[t];void 0!==n&&(delete e.dataset[t],$(e,{[t]:n}))}setContainerStyle(t){super.setContainerStyle(t);const e=this.getElement();if(function(t,e){t.classList?t.classList.add(e):function(t,e){return t.classList?t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(t,e)||("string"==typeof t.className?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}(e,"modal-open"),!t.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";_t(e,Pt).forEach((e=>this.adjustAndStore(n,e,t.scrollBarWidth))),_t(e,Ft).forEach((e=>this.adjustAndStore(r,e,-t.scrollBarWidth))),_t(e,Mt).forEach((e=>this.adjustAndStore(r,e,t.scrollBarWidth)))}removeContainerStyle(t){super.removeContainerStyle(t);const e=this.getElement();!function(t,e){t.classList?t.classList.remove(e):"string"==typeof t.className?t.className=Dt(t.className,e):t.setAttribute("class",Dt(t.className&&t.className.baseVal||"",e))}(e,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";_t(e,Pt).forEach((t=>this.restore(n,t))),_t(e,Ft).forEach((t=>this.restore(r,t))),_t(e,Mt).forEach((t=>this.restore(r,t)))}}let At;const Ht=Bt;function Wt(t){return(0,A.jsx)(vt,{...t})}function It(t){return(0,A.jsx)(ut,{...t})}const Vt=t.forwardRef((({bsPrefix:e,className:n,children:r,"aria-labelledby":o,placement:s="start",responsive:a,show:c=!1,backdrop:l=!0,keyboard:u=!0,scroll:f=!1,onEscapeKeyDown:m,onShow:h,onHide:E,container:g,autoFocus:x=!0,enforceFocus:v=!0,restoreFocus:b=!0,restoreFocusOptions:y,onEntered:w,onExit:O,onExiting:k,onEnter:C,onEntering:R,onExited:S,backdropClassName:$,manager:N,renderStaticNode:T=!1,...j},L)=>{const _=(0,t.useRef)();e=mt(e,"offcanvas");const[D,P]=(0,t.useState)(!1),F=p(E),M=d(a||"xs","up");(0,t.useEffect)((()=>{P(a?c&&!M:c)}),[c,a,M]);const B=(0,t.useMemo)((()=>({onHide:F})),[F]),H=(0,t.useCallback)((t=>(0,A.jsx)("div",{...t,className:i()(`${e}-backdrop`,$)})),[$,e]),W=t=>(0,A.jsx)("div",{...t,...j,className:i()(n,a?`${e}-${a}`:e,`${e}-${s}`),"aria-labelledby":o,children:r});return(0,A.jsxs)(A.Fragment,{children:[!D&&(a||T)&&W({}),(0,A.jsx)(bt.Provider,{value:B,children:(0,A.jsx)(X,{show:D,ref:L,backdrop:l,container:g,keyboard:u,autoFocus:x,enforceFocus:v&&!f,restoreFocus:b,restoreFocusOptions:y,onEscapeKeyDown:m,onShow:h,onHide:F,onEnter:(t,...e)=>{t&&(t.style.visibility="visible"),null==C||C(t,...e)},onEntering:R,onEntered:w,onExit:O,onExiting:k,onExited:(t,...e)=>{t&&(t.style.visibility=""),null==S||S(...e)},manager:N||(f?(_.current||(_.current=new Ht({handleContainerOverflow:!1})),_.current):(At||(At=new Bt(void 0)),At)),transition:Wt,backdropTransition:It,renderBackdrop:H,renderDialog:W})})]})}));Vt.displayName="Offcanvas";const Ut=Object.assign(Vt,{Body:Et,Header:$t,Title:jt}),zt=(t,e=!0,n=!0,r=!0)=>{const{type:o="solid",color:i="#000000b3",gradient:s="linear-gradient(135deg, #4527a4, #8344c5)",image:a={},position:c="center center",attachment:l="initial",repeat:u="no-repeat",size:d="cover",overlayColor:f="#000000b3"}=t||{};return"gradient"===o&&n?`background: ${s};`:"image"===o&&r?`background: url(${a?.url});\n\t\t\t\tbackground-color: ${f};\n\t\t\t\tbackground-position: ${c};\n\t\t\t\tbackground-size: ${d};\n\t\t\t\tbackground-repeat: ${u};\n\t\t\t\tbackground-attachment: ${l};\n\t\t\t\tbackground-blend-mode: overlay;`:e&&`background: ${i};`},Kt=t=>{const{color:e="#333",bgType:n="solid",bg:r="#0000",gradient:o="linear-gradient(135deg, #4527a4, #8344c5)"}=t||{};return`\n\t\t${e?`color: ${e};`:""}\n\t\t${o||r?`background: ${"gradient"===n?o:r};`:""}\n\t`},Xt=(t,e,n=!0)=>{const{fontFamily:r="Default",fontCategory:o="sans-serif",fontVariant:i=400,fontWeight:s=400,isUploadFont:a=!0,fontSize:c={desktop:15,tablet:15,mobile:15},fontStyle:l="normal",textTransform:u="none",textDecoration:d="auto",lineHeight:f="135%",letterSpace:p="0px"}=e||{},m=(t,e)=>t?`${e}: ${t};`:"",h=!n||!r||"Default"===r,E=c?.desktop||c,g=c?.tablet||E,x=c?.mobile||g,v=`\n\t\t${h?"":`font-family: '${r}', ${o};`}\n\t\t${m(s,"font-weight")}\n\t\tfont-size: ${E}px;\n\t\t${m(l,"font-style")}\n\t\t${m(u,"text-transform")}\n\t\t${m(d,"text-decoration")}\n\t\t${m(f,"line-height")}\n\t\t${m(p,"letter-spacing")}\n\t`,b=i&&400!==i?"400i"===i?":ital@1":i?.includes("00i")?`: ital, wght@1, ${i?.replace("00i","00")} `:`: wght@${i} `:"",y=h?"":`https://fonts.googleapis.com/css2?family=${r?.split(" ").join("+")}${b.replace(/ /g,"")}&display=swap`;return{googleFontLink:!a||h?"":`@import url(${y});`,styles:`${t}{\n\t\t\t${v}\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t${t}{\n\t\t\t\tfont-size: ${g}px;\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t${t}{\n\t\t\t\tfont-size: ${x}px;\n\t\t\t}\n\t\t}`.replace(/\s+/g," ").trim()}},Yt=({attributes:e,id:n})=>{const{btnAlign:r,btnTypo:o,btnColors:i,popupBG:s,titleTypo:a,titleColor:c}=e,l=`#${n}`,u=`#${n}Popup`;return(0,t.createElement)("style",{dangerouslySetInnerHTML:{__html:`\n\t\t${Xt("",o)?.googleFontLink}\n\t\t${Xt("",a)?.googleFontLink}\n\t\t${Xt(`${l} .showButton`,o)?.styles}\n\t\t${Xt(`${u} .offcanvas-title`,a)?.styles}\n\n\t\t${l}{\n\t\t\ttext-align: ${r};\n\t\t}\n\t\t${l} .showButton{\n\t\t\t${Kt(i)}\n\t\t}\n\t\t${u}{\n\t\t\t${zt(s)}\n\t\t}\n\t\t${u} .offcanvas-title{\n\t\t\tcolor: ${c};\n\t\t}\n\t\t`.replace(/\s+/g," ")}})},qt=({attributes:e,id:n,children:r})=>{const{position:o,btnText:i,title:s,closeBtnColor:a}=e,[c,l]=(0,t.useState)(!1);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("button",{className:"showButton",onClick:()=>l(!0)},i),(0,t.createElement)(Ut,{className:"ocbOffCanvasPopup",id:`${n}Popup`,show:c,onHide:()=>l(!1),placement:o,scroll:!0},(0,t.createElement)(Ut.Header,{closeButton:!1},(0,t.createElement)(Ut.Title,null,s),(0,t.createElement)("button",{className:"btn-close",onClick:()=>l(!1)},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:a},(0,t.createElement)("path",{d:"M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"})))),r))};document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".wp-block-ocb-offcanvas").forEach((e=>{const{attributes:n,content:o}=JSON.parse(e.dataset.props);(0,r.H)(e).render((0,t.createElement)(t.Fragment,null,(0,t.createElement)(Yt,{attributes:n,id:e.id}),(0,t.createElement)(qt,{attributes:n,id:e.id},(0,t.createElement)(Ut.Body,{dangerouslySetInnerHTML:{__html:o}})))),e?.removeAttribute("data-props")}))}))})()})();