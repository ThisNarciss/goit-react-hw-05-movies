"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[173],{83:function(n,e,t){t.d(e,{SU:function(){return i},bI:function(){return s},fU:function(){return u},l2:function(){return c},sv:function(){return l}});var o="https://api.themoviedb.org/3/",r="687f60735406ee0172c31461de2476ff",a=new URLSearchParams({api_key:r,language:"en-US"});function i(){return fetch("".concat(o,"trending/movie/day?").concat(a)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function s(n,e){var t=new URLSearchParams({api_key:r,language:"en-US",query:n});return fetch("".concat(o,"search/movie?").concat(t),{signal:e}).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function c(n){return fetch("".concat(o,"movie/").concat(n,"?").concat(a)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function u(n){return fetch("".concat(o,"movie/").concat(n,"/credits?").concat(a)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function l(n){var e=new URLSearchParams({api_key:r,language:"en-US",page:1});return fetch("".concat(o,"movie/").concat(n,"/reviews?").concat(e)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},368:function(n,e,t){t.d(e,{O:function(){return a}});var o=t(753),r=t(184);function a(n){var e=n.movies,t=n.location;return(0,r.jsx)(o.aV,{children:e.map((function(n){var e=n.id,a=n.title;return(0,r.jsx)("li",{children:(0,r.jsx)(o.Fg,{to:"/movies/".concat(e),state:{from:t},children:a})},e)}))})}},173:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var o=t(439),r=t(83),a=t(189),i=t(368);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var f=t(433),d=t(791);function p(n){var e,t,o="";if("string"==typeof n||"number"==typeof n)o+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=p(n[e]))&&(o&&(o+=" "),o+=t);else for(e in n)n[e]&&(o&&(o+=" "),o+=e);return o}var m=function(){for(var n,e,t=0,o="";t<arguments.length;)(n=arguments[t++])&&(e=p(n))&&(o&&(o+=" "),o+=e);return o},g=["theme","type"],h=["delay","staleId"],v=function(n){return"number"==typeof n&&!isNaN(n)},y=function(n){return"string"==typeof n},b=function(n){return"function"==typeof n},x=function(n){return y(n)||b(n)?n:null},E=function(n){return(0,d.isValidElement)(n)||y(n)||b(n)||v(n)};function T(n){var e=n.enter,t=n.exit,o=n.appendPosition,r=void 0!==o&&o,a=n.collapse,i=void 0===a||a,s=n.collapseDuration,c=void 0===s?300:s;return function(n){var o=n.children,a=n.position,s=n.preventExitTransition,u=n.done,l=n.nodeRef,p=n.isIn,m=r?"".concat(e,"--").concat(a):e,g=r?"".concat(t,"--").concat(a):t,h=(0,d.useRef)(0);return(0,d.useLayoutEffect)((function(){var n,e=l.current,t=m.split(" "),o=function n(o){var r;o.target===l.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,f.Z)(t)))};(n=e.classList).add.apply(n,(0,f.Z)(t)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,d.useEffect)((function(){var n=l.current,e=function e(){n.removeEventListener("animationend",e),i?function(n,e,t){void 0===t&&(t=300);var o=n.scrollHeight,r=n.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(t,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,t)}))}))}(n,u,c):u()};p||(s?e():(h.current=1,n.className+=" ".concat(g),n.addEventListener("animationend",e)))}),[p]),d.createElement(d.Fragment,null,o)}}function w(n,e){return{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:e}}var O={list:new Map,emitQueue:new Map,on:function(n,e){return this.list.has(n)||this.list.set(n,[]),this.list.get(n).push(e),this},off:function(n,e){if(e){var t=this.list.get(n).filter((function(n){return n!==e}));return this.list.set(n,t),this}return this.list.delete(n),this},cancelEmit:function(n){var e=this.emitQueue.get(n);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(n)),this},emit:function(n){var e=arguments,t=this;this.list.has(n)&&this.list.get(n).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,f.Z)([].slice.call(e,1)))}),0);t.emitQueue.has(n)||t.emitQueue.set(n,[]),t.emitQueue.get(n).push(r)}))}},C=function(n){var e=n.theme,t=n.type,o=l(n,g);return d.createElement("svg",u({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(t,")")},o))},I={info:function(n){return d.createElement(C,u({},n),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return d.createElement(C,u({},n),d.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return d.createElement(C,u({},n),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return d.createElement(C,u({},n),d.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return d.createElement("div",{className:"Toastify__spinner"})}};function _(n){var e=(0,d.useReducer)((function(n){return n+1}),0),t=(0,o.Z)(e,2)[1],r=(0,d.useState)([]),a=(0,o.Z)(r,2),i=a[0],s=a[1],c=(0,d.useRef)(null),p=(0,d.useRef)(new Map).current,m=function(n){return-1!==i.indexOf(n)},g=(0,d.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:n,containerId:null,isToastActive:m,getToast:function(n){return p.get(n)}}).current;function T(n){var e=n.containerId;!g.props.limit||e&&g.containerId!==e||(g.count-=g.queue.length,g.queue=[])}function C(n){s((function(e){return null==n?[]:e.filter((function(e){return e!==n}))}))}function _(){var n=g.queue.shift();k(n.toastContent,n.toastProps,n.staleId)}function P(n,e){var o=e.delay,r=e.staleId,a=l(e,h);if(E(n)&&!function(n){return!c.current||g.props.enableMultiContainer&&n.containerId!==g.props.containerId||p.has(n.toastId)&&null==n.updateId}(a)){var i=a.toastId,s=a.updateId,f=a.data,m=g.props,T=function(){return C(i)},P=null==s;P&&g.count++;var L,R,Z=u(u(u({},m),{},{style:m.toastStyle,key:g.toastKey++},a),{},{toastId:i,updateId:s,data:f,closeToast:T,isIn:!1,className:x(a.className||m.toastClassName),bodyClassName:x(a.bodyClassName||m.bodyClassName),progressClassName:x(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(L=a.autoClose,R=m.autoClose,!1===L||v(L)&&L>0?L:R),deleteToast:function(){var n=w(p.get(i),"removed");p.delete(i),O.emit(4,n);var e=g.queue.length;if(g.count=null==i?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),e>0){var o=null==i?g.props.limit:1;if(1===e||1===o)g.displayedToast++,_();else{var r=o>e?e:o;g.displayedToast=r;for(var a=0;a<r;a++)_()}}else t()}});Z.iconOut=function(n){var e=n.theme,t=n.type,o=n.isLoading,r=n.icon,a=null,i={theme:e,type:t};return!1===r||(b(r)?a=r(i):(0,d.isValidElement)(r)?a=(0,d.cloneElement)(r,i):y(r)||v(r)?a=r:o?a=I.spinner():function(n){return n in I}(t)&&(a=I[t](i))),a}(Z),b(a.onOpen)&&(Z.onOpen=a.onOpen),b(a.onClose)&&(Z.onClose=a.onClose),Z.closeButton=m.closeButton,!1===a.closeButton||E(a.closeButton)?Z.closeButton=a.closeButton:!0===a.closeButton&&(Z.closeButton=!E(m.closeButton)||m.closeButton);var j=n;(0,d.isValidElement)(n)&&!y(n.type)?j=(0,d.cloneElement)(n,{closeToast:T,toastProps:Z,data:f}):b(n)&&(j=n({closeToast:T,toastProps:Z,data:f})),m.limit&&m.limit>0&&g.count>m.limit&&P?g.queue.push({toastContent:j,toastProps:Z,staleId:r}):v(o)?setTimeout((function(){k(j,Z,r)}),o):k(j,Z,r)}}function k(n,e,t){var o=e.toastId;t&&p.delete(t);var r={content:n,props:e};p.set(o,r),s((function(n){return[].concat((0,f.Z)(n),[o]).filter((function(n){return n!==t}))})),O.emit(4,w(r,null==r.props.updateId?"added":"updated"))}return(0,d.useEffect)((function(){return g.containerId=n.containerId,O.cancelEmit(3).on(0,P).on(1,(function(n){return c.current&&C(n)})).on(5,T).emit(2,g),function(){p.clear(),O.emit(3,g)}}),[]),(0,d.useEffect)((function(){g.props=n,g.isToastActive=m,g.displayedToast=i.length})),{getToastToRender:function(e){var t=new Map,o=Array.from(p.values());return n.newestOnTop&&o.reverse(),o.forEach((function(n){var e=n.props.position;t.has(e)||t.set(e,[]),t.get(e).push(n)})),Array.from(t,(function(n){return e(n[0],n[1])}))},containerRef:c,isToastActive:m}}function P(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientX:n.clientX}function k(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientY:n.clientY}function L(n){var e=(0,d.useState)(!1),t=(0,o.Z)(e,2),r=t[0],a=t[1],i=(0,d.useState)(!1),s=(0,o.Z)(i,2),c=s[0],u=s[1],l=(0,d.useRef)(null),f=(0,d.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,d.useRef)(n),m=n.autoClose,g=n.pauseOnHover,h=n.closeToast,v=n.onClick,y=n.closeOnClick;function x(e){if(n.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",C),document.addEventListener("touchmove",O),document.addEventListener("touchend",C);var t=l.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=t.getBoundingClientRect(),t.style.transition="",f.x=P(e.nativeEvent),f.y=k(e.nativeEvent),"x"===n.draggableDirection?(f.start=f.x,f.removalDistance=t.offsetWidth*(n.draggablePercent/100)):(f.start=f.y,f.removalDistance=t.offsetHeight*(80===n.draggablePercent?1.5*n.draggablePercent:n.draggablePercent/100))}}function E(e){if(f.boundingRect){var t=f.boundingRect,o=t.top,r=t.bottom,a=t.left,i=t.right;"touchend"!==e.nativeEvent.type&&n.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?w():T()}}function T(){a(!0)}function w(){a(!1)}function O(e){var t=l.current;f.canDrag&&t&&(f.didMove=!0,r&&w(),f.x=P(e),f.y=k(e),f.delta="x"===n.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),t.style.transform="translate".concat(n.draggableDirection,"(").concat(f.delta,"px)"),t.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",C);var e=l.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void n.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(n.draggableDirection,"(0)"),e.style.opacity="1"}}(0,d.useEffect)((function(){p.current=n})),(0,d.useEffect)((function(){return l.current&&l.current.addEventListener("d",T,{once:!0}),b(n.onOpen)&&n.onOpen((0,d.isValidElement)(n.children)&&n.children.props),function(){var n=p.current;b(n.onClose)&&n.onClose((0,d.isValidElement)(n.children)&&n.children.props)}}),[]),(0,d.useEffect)((function(){return n.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",T),window.addEventListener("blur",w)),function(){n.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",w))}}),[n.pauseOnFocusLoss]);var I={onMouseDown:x,onTouchStart:x,onMouseUp:E,onTouchEnd:E};return m&&g&&(I.onMouseEnter=w,I.onMouseLeave=T),y&&(I.onClick=function(n){v&&v(n),f.canCloseOnClick&&h()}),{playToast:T,pauseToast:w,isRunning:r,preventExitTransition:c,toastRef:l,eventHandlers:I}}function R(n){var e=n.closeToast,t=n.theme,o=n.ariaLabel,r=void 0===o?"close":o;return d.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(t),type:"button",onClick:function(n){n.stopPropagation(),e(n)},"aria-label":r},d.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},d.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Z(n){var e=n.delay,t=n.isRunning,o=n.closeToast,r=n.type,a=void 0===r?"default":r,i=n.hide,c=n.className,l=n.style,f=n.controlledProgress,p=n.progress,g=n.rtl,h=n.isIn,v=n.theme,y=i||f&&0===p,x=u(u({},l),{},{animationDuration:"".concat(e,"ms"),animationPlayState:t?"running":"paused",opacity:y?0:1});f&&(x.transform="scaleX(".concat(p,")"));var E=m("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(v),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":g}),T=b(c)?c({rtl:g,type:a,defaultClassName:E}):m(E,c);return d.createElement("div",s({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:x},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){h&&o()}))}var j=function(n){var e=L(n),t=e.isRunning,o=e.preventExitTransition,r=e.toastRef,a=e.eventHandlers,i=n.closeButton,s=n.children,c=n.autoClose,l=n.onClick,f=n.type,p=n.hideProgressBar,g=n.closeToast,h=n.transition,v=n.position,y=n.className,x=n.style,E=n.bodyClassName,T=n.bodyStyle,w=n.progressClassName,O=n.progressStyle,C=n.updateId,I=n.role,_=n.progress,P=n.rtl,k=n.toastId,j=n.deleteToast,N=n.isIn,S=n.isLoading,z=n.iconOut,M=n.closeOnClick,D=n.theme,B=m("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":M}),A=b(y)?y({rtl:P,position:v,type:f,defaultClassName:B}):m(B,y),F=!!_||!c,U={closeToast:g,type:f,theme:D},H=null;return!1===i||(H=b(i)?i(U):(0,d.isValidElement)(i)?(0,d.cloneElement)(i,U):R(U)),d.createElement(h,{isIn:N,done:j,position:v,preventExitTransition:o,nodeRef:r},d.createElement("div",u(u({id:k,onClick:l,className:A},a),{},{style:x,ref:r}),d.createElement("div",u(u({},N&&{role:I}),{},{className:b(E)?E({type:f}):m("Toastify__toast-body",E),style:T}),null!=z&&d.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},z),d.createElement("div",null,s)),H,d.createElement(Z,u(u({},C&&!F?{key:"pb-".concat(C)}:{}),{},{rtl:P,theme:D,delay:c,isRunning:t,isIn:N,closeToast:g,hide:p,type:f,style:O,className:w,controlledProgress:F,progress:_||0}))))},N=function(n,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(n,"-enter"),exit:"Toastify--animate Toastify__".concat(n,"-exit"),appendPosition:e}},S=T(N("bounce",!0)),z=(T(N("slide",!0)),T(N("zoom")),T(N("flip")),(0,d.forwardRef)((function(n,e){var t=_(n),o=t.getToastToRender,r=t.containerRef,a=t.isToastActive,i=n.className,s=n.style,c=n.rtl,l=n.containerId;function f(n){var e=m("Toastify__toast-container","Toastify__toast-container--".concat(n),{"Toastify__toast-container--rtl":c});return b(i)?i({position:n,rtl:c,defaultClassName:e}):m(e,x(i))}return(0,d.useEffect)((function(){e&&(e.current=r.current)}),[]),d.createElement("div",{ref:r,className:"Toastify",id:l},o((function(n,e){var t=e.length?u({},s):u(u({},s),{},{pointerEvents:"none"});return d.createElement("div",{className:f(n),style:t,key:"container-".concat(n)},e.map((function(n,t){var o=n.content,r=n.props;return d.createElement(j,u(u({},r),{},{isIn:a(r.toastId),style:u(u({},r.style),{},{"--nth":t+1,"--len":e.length}),key:"toast-".concat(r.key)}),o)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:"top-right",transition:S,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,D=new Map,B=[],A=1;function F(){return""+A++}function U(n){return n&&(y(n.toastId)||v(n.toastId))?n.toastId:F()}function H(n,e){return D.size>0?O.emit(0,n,e):B.push({content:n,options:e}),e.toastId}function q(n,e){return u(u({},e),{},{type:e&&e.type||n,toastId:U(e)})}function V(n){return function(e,t){return H(e,q(n,t))}}function Q(n,e){return H(n,q("default",e))}Q.loading=function(n,e){return H(n,q("default",u({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},Q.promise=function(n,e,t){var o,r=e.pending,a=e.error,i=e.success;r&&(o=y(r)?Q.loading(r,t):Q.loading(r.render,u(u({},t),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(n,e,r){if(null!=e){var a=u(u(u({type:n},s),t),{},{data:r}),i=y(e)?{render:e}:e;return o?Q.update(o,u(u({},a),i)):Q(i.render,u(u({},a),i)),r}Q.dismiss(o)},l=b(n)?n():n;return l.then((function(n){return c("success",i,n)})).catch((function(n){return c("error",a,n)})),l},Q.success=V("success"),Q.info=V("info"),Q.error=V("error"),Q.warning=V("warning"),Q.warn=Q.warning,Q.dark=function(n,e){return H(n,q("default",u({theme:"dark"},e)))},Q.dismiss=function(n){D.size>0?O.emit(1,n):B=B.filter((function(e){return null!=n&&e.options.toastId!==n}))},Q.clearWaitingQueue=function(n){return void 0===n&&(n={}),O.emit(5,n)},Q.isActive=function(n){var e=!1;return D.forEach((function(t){t.isToastActive&&t.isToastActive(n)&&(e=!0)})),e},Q.update=function(n,e){void 0===e&&(e={}),setTimeout((function(){var t=function(n,e){var t=e.containerId,o=D.get(t||M);return o&&o.getToast(n)}(n,e);if(t){var o=t.props,r=t.content,a=u(u(u({},o),e),{},{toastId:e.toastId||n,updateId:F()});a.toastId!==n&&(a.staleId=n);var i=a.render||r;delete a.render,H(i,a)}}),0)},Q.done=function(n){Q.update(n,{progress:1})},Q.onChange=function(n){return O.on(4,n),function(){O.off(4,n)}},Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},O.on(2,(function(n){M=n.containerId||n,D.set(M,n),B.forEach((function(n){O.emit(0,n.content,n.options)})),B=[]})).on(3,(function(n){D.delete(n.containerId||n),0===D.size&&O.off(0).off(1).off(5)}));var G=t(184);function Y(){return(0,G.jsx)(z,{position:"bottom-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}var X=t(87),W=t(689),K=t(753);function $(){var n=(0,d.useState)([]),e=(0,o.Z)(n,2),t=e[0],s=e[1],c=(0,d.useState)(!1),u=(0,o.Z)(c,2),l=u[0],f=u[1],p=(0,d.useState)(null),m=(0,o.Z)(p,2),g=m[0],h=m[1],v=(0,X.lr)(),y=(0,o.Z)(v,2),b=y[0],x=y[1],E=b.get("query"),T=(0,W.TH)();return(0,d.useEffect)((function(){if(E){var n=new AbortController,e=n.signal;return f(!0),(0,r.bI)(E,e).then((function(n){var e=n.results;h(null),s(e)})).catch((function(n){return h(n.massage)})).finally((function(){return f(!1)})),function(){n.abort()}}}),[E]),(0,d.useEffect)((function(){g&&Q("\ud83e\udd84".concat(g," "))}),[g]),(0,G.jsxs)(K.$0,{children:[(0,G.jsxs)(K.l0,{onSubmit:function(n){n.preventDefault(),x({query:n.target.search.value.trim()}),s([])},children:[(0,G.jsx)(K.II,{name:"search",type:"text"}),(0,G.jsx)(K.GX,{type:"submit",children:"Search"})]}),l&&(0,G.jsx)(a.a,{}),Boolean(t.length)&&(0,G.jsx)(i.O,{movies:t,location:T}),(0,G.jsx)(Y,{})]})}},753:function(n,e,t){t.d(e,{$0:function(){return b},CS:function(){return P},Fg:function(){return x},GX:function(){return T},II:function(){return E},Ot:function(){return R},aV:function(){return O},hb:function(){return _},jh:function(){return L},kG:function(){return I},l0:function(){return w},rC:function(){return k},r_:function(){return C}});var o,r,a,i,s,c,u,l,f,d,p,m,g,h=t(168),v=t(87),y=t(444),b=y.ZP.section(o||(o=(0,h.Z)(["\n  padding: 20px 10px;\n"]))),x=(0,y.ZP)(v.rU)(r||(r=(0,h.Z)(["\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #c2fbd7;\n  box-shadow: rgba(0, 44, 97, 0.5) 0 -1px 3px 0 inset,\n    rgba(0, 44, 97, 0.1) 0 3px 6px 0;\n  box-sizing: border-box;\n  color: #07ac07;\n\n  display: inherit;\n\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 24px;\n  margin: 0;\n  min-height: 30px;\n  width: 300px;\n\n  position: relative;\n  text-align: center;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n  :hover {\n    background-color: #c2fbd7;\n    transform: translateY(-2px);\n  }\n"]))),E=y.ZP.input(a||(a=(0,h.Z)(["\n  background-color: #fff;\n  border: 2px solid #07ac07;\n  box-sizing: border-box;\n  color: #07ac07;\n  font-size: 12px;\n  font-weight: 600;\n  height: 30px;\n  justify-content: center;\n  letter-spacing: -0.8px;\n  line-height: 24px;\n  min-width: 500px;\n  border-radius: 5px;\n  padding: 0 17px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.3s;\n\n  :focus {\n    color: #171e29;\n  }\n"]))),T=y.ZP.button(i||(i=(0,h.Z)(["\n  background-color: #c2fbd7;\n  border: 2px solid #07ac07;\n\n  color: #07ac07;\n  border-radius: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  height: 30px;\n\n  line-height: 24px;\n  min-width: 80px;\n  outline: 0;\n  padding: 0 17px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.3s;\n  user-select: none;\n\n  touch-action: manipulation;\n\n  :focus,\n  :hover {\n    border-color: #057205;\n    color: #057205;\n  }\n"]))),w=y.ZP.form(s||(s=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),O=y.ZP.ul(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),C=y.ZP.div(u||(u=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 10px;\n  margin-bottom: 20px;\n\n  -webkit-box-shadow: 0px 6px 5px 0px rgba(184, 178, 184, 1);\n  -moz-box-shadow: 0px 6px 5px 0px rgba(184, 178, 184, 1);\n  box-shadow: 0px 6px 5px 0px rgba(184, 178, 184, 1);\n"]))),I=y.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  /* align-items: center; */\n  gap: 40px;\n"]))),_=(0,y.ZP)(v.rU)(f||(f=(0,h.Z)(["\n  align-items: center;\n  appearance: none;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n\n  height: 35px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 18px;\n\n  :focus {\n    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  }\n\n  :hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n    transform: translateY(-2px);\n  }\n\n  :active {\n    box-shadow: #d6d6e7 0 3px 7px inset;\n    transform: translateY(2px);\n  }\n"]))),P=y.ZP.div(d||(d=(0,h.Z)(["\n  padding: 20px;\n"]))),k=y.ZP.h2(p||(p=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),L=y.ZP.ul(m||(m=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),R=(0,y.ZP)(v.rU)(g||(g=(0,h.Z)(["\n  text-decoration: underline;\n  :hover,\n  :focus {\n    color: green;\n  }\n"])))}}]);
//# sourceMappingURL=173.329d0bfe.chunk.js.map