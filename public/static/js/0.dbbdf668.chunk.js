(this["webpackJsonpipfs-webui"]=this["webpackJsonpipfs-webui"]||[]).push([[0],{1111:function(e,n,t){"use strict";var o;t.d(n,"a",(function(){return ge}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,n){return r(e.querySelectorAll(n))}var i=t(0),s=t.n(i),c=t(5),u=t.n(c),l=t(143),d=t(188);t(1241);function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function p(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function h(e,n){return Object.keys(n).reduce((function(t,o){var r,a=t,s=a[f(o)],c=a[o],u=Object(d.a)(a,[f(o),o].map(p)),h=n[o],v=function(e,n,t){var o=Object(i.useRef)(void 0!==e),r=Object(i.useState)(n),a=r[0],s=r[1],c=void 0!==e,u=o.current;return o.current=c,!c&&u&&a!==n&&s(n),[c?e:a,Object(i.useCallback)((function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t&&t.apply(void 0,[e].concat(o)),s(e)}),[t])]}(c,s,e[h]),m=v[0],g=v[1];return Object(l.a)({},u,((r={})[o]=m,r[h]=g,r))}),e)}var v=t(266);t(68);function m(){return Object(i.useState)(null)}var g=function(e){var n=Object(i.useRef)(e);return Object(i.useEffect)((function(){n.current=e}),[e]),n};function b(e){var n=g(e);return Object(i.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}var w=s.a.createContext({menuRef:function(){},toggleRef:function(){},onToggle:function(){},toggleNode:void 0,alignEnd:null,show:null,drop:null}),y=t(192),E={position:"absolute",top:"0",left:"0",opacity:"0",pointerEvents:"none"},O={};function j(e,n,t){var o=void 0===t?{}:t,r=o.enabled,a=void 0===r||r,s=o.placement,c=void 0===s?"bottom":s,u=o.positionFixed,d=void 0!==u&&u,f=o.eventsEnabled,p=void 0===f||f,h=o.modifiers,v=void 0===h?{}:h,m=Object(i.useRef)(),g=!(!v.arrow||!v.arrow.element),b=Object(i.useCallback)((function(){m.current&&m.current.scheduleUpdate()}),[]),w=Object(i.useState)({placement:c,scheduleUpdate:b,outOfBoundaries:!1,styles:E,arrowStyles:O}),j=w[0],k=w[1];return Object(i.useEffect)((function(){b()}),[j.placement,b]),Object(i.useEffect)((function(){m.current&&(p?m.current.enableEventListeners():m.current.disableEventListeners())}),[p]),Object(i.useEffect)((function(){if(a&&null!=e&&null!=n){var t=v.arrow&&Object(l.a)({},v.arrow,{element:v.arrow.element});return m.current=new y.a(e,n,{placement:c,positionFixed:d,modifiers:Object(l.a)({},v,{arrow:t,applyStyle:{enabled:!1},updateStateModifier:{enabled:!0,order:900,fn:function(e){k({scheduleUpdate:b,styles:Object(l.a)({position:e.offsets.popper.position},e.styles),arrowStyles:e.arrowStyles,outOfBoundaries:e.hide,placement:e.placement})}}})}),function(){null!==m.current&&(m.current.destroy(),m.current=null)}}}),[a,c,d,e,n,g]),j}function k(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var x=t(265),S=!1,C=!1;try{var T={get passive(){return S=!0},get once(){return C=S=!0}};x.a&&(window.addEventListener("test",T,T),window.removeEventListener("test",T,!0))}catch(je){}var M=function(e,n,t,o){if(o&&"boolean"!==typeof o&&!C){var r=o.once,a=o.capture,i=t;!C&&r&&(i=t.__once||function e(o){this.removeEventListener(n,e,a),t.call(this,o)},t.__once=i),e.addEventListener(n,i,S?o:a)}e.addEventListener(n,t,o)};var N=function(e,n,t,o){var r=o&&"boolean"!==typeof o?o.capture:o;e.removeEventListener(n,t,r),t.__once&&e.removeEventListener(n,t.__once,r)};var F=function(e,n,t,o){return M(e,n,t,o),function(){N(e,n,t,o)}},R=t(1631),D=t.n(R),P=t(35),L=t.n(P);function B(e){return e&&e.ownerDocument||document}var H=function(e){return B(L.a.findDOMNode(e))},_=function(){};var A=function(e,n,t){var o=void 0===t?{}:t,r=o.disabled,a=o.clickTrigger,s=void 0===a?"click":a,c=Object(i.useRef)(!1),u=n||_,l=Object(i.useCallback)((function(n){var t,o=e&&("current"in e?e.current:e);D()(!!o,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),c.current=!o||!!((t=n).metaKey||t.altKey||t.ctrlKey||t.shiftKey)||!function(e){return 0===e.button}(n)||k(o,n.target)}),[e]),d=b((function(e){c.current||u(e)})),f=b((function(e){27===e.keyCode&&u(e)}));Object(i.useEffect)((function(){if(!r&&null!=e){var n=H(e.current),t=F(n,s,l,!0),o=F(n,s,d),a=F(n,"keyup",f),i=[];return"ontouchstart"in n.documentElement&&(i=[].slice.call(n.body.children).map((function(e){return F(e,"mousemove",_)}))),function(){t(),o(),a(),i.forEach((function(e){return e()}))}}}),[e,r,s,l,d,f])};var K={children:u.a.func.isRequired,show:u.a.bool,alignEnd:u.a.bool,flip:u.a.bool,usePopper:u.a.oneOf([!0,!1]),popperConfig:u.a.object,rootCloseEvent:u.a.string};function I(e){var n=e.children,t=function(e){void 0===e&&(e={});var n=Object(i.useContext)(w),t=m(),o=t[0],r=t[1],a=Object(i.useRef)(!1),s=e,c=s.flip,u=s.rootCloseEvent,d=s.popperConfig,f=void 0===d?{}:d,p=s.usePopper,h=void 0===p||p,v=null==n.show?e.show:n.show,g=null==n.alignEnd?e.alignEnd:n.alignEnd;v&&!a.current&&(a.current=!0);var b=function(e){n.toggle&&n.toggle(!1,e)},y=n.drop,E=n.setMenu,O=n.menuElement,k=n.toggleElement,x=g?"bottom-end":"bottom-start";"up"===y?x=g?"top-end":"top-start":"right"===y?x=g?"right-end":"right-start":"left"===y&&(x=g?"left-end":"left-start");var S=j(k,O,{placement:x,enabled:!(!h||!v),eventsEnabled:!!v,modifiers:Object(l.a)({flip:{enabled:!!c},arrow:Object(l.a)({},f.modifiers&&f.modifiers.arrow,{enabled:!!o,element:o})},f.modifiers)}),C=null,T={ref:E,"aria-labelledby":k&&k.id},M={show:v,alignEnd:g,hasShown:a.current,close:b};return C=h?Object(l.a)({},S,{},M,{props:Object(l.a)({},T,{style:S.styles}),arrowProps:{ref:r,style:S.arrowStyles}}):Object(l.a)({},M,{props:T}),A(O,b,{clickTrigger:u,disabled:!(C&&v)}),C}(Object(d.a)(e,["children"]));return t.hasShown?n(t):null}I.displayName="ReactOverlaysDropdownMenu",I.propTypes=K,I.defaultProps={usePopper:!0};var U=I;var V={children:u.a.func.isRequired};function q(e){var n=e.children,t=function(){var e=Object(i.useContext)(w),n=e.show,t=e.toggle;return[{ref:e.setToggle,"aria-haspopup":!0,"aria-expanded":!!n},{show:n,toggle:t}]}(),o=t[0],r=t[1];return n({show:r.show,toggle:r.toggle,props:o})}q.displayName="ReactOverlaysDropdownToggle",q.propTypes=V;var $=q,z={children:u.a.func.isRequired,drop:u.a.oneOf(["up","left","right","down"]),focusFirstItemOnShow:u.a.oneOf([!1,!0,"keyboard"]),itemSelector:u.a.string.isRequired,alignEnd:u.a.bool,show:u.a.bool,defaultShow:u.a.bool,onToggle:u.a.func};function W(e){var n=e.drop,t=e.alignEnd,r=e.defaultShow,c=e.show,u=e.onToggle,l=e.itemSelector,d=e.focusFirstItemOnShow,f=e.children,p=Object(i.useReducer)((function(e){return!e}),!1)[1],v=h({defaultShow:r,show:c,onToggle:u},{show:"onToggle"}),g=v.show,y=v.onToggle,E=m(),O=E[0],j=E[1],k=Object(i.useRef)(),x=k.current,S=Object(i.useCallback)((function(e){k.current=e,p()}),[p]),C=function(e){var n=Object(i.useRef)(null);return Object(i.useEffect)((function(){n.current=e})),n.current}(g),T=Object(i.useRef)(null),M=Object(i.useRef)(!1),N=Object(i.useCallback)((function(e){y(!g,e)}),[y,g]),F=Object(i.useMemo)((function(){return{toggle:N,drop:n,show:g,alignEnd:t,menuElement:x,toggleElement:O,setMenu:S,setToggle:j}}),[N,n,g,t,x,O,S,j]);x&&C&&!g&&(M.current=x.contains(document.activeElement));var R=b((function(){O&&O.focus&&O.focus()})),D=b((function(){var e=T.current,n=d;if(null==n&&(n=!(!k.current||!function(e,n){if(!o){var t=document.body,r=t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;o=function(e,n){return r.call(e,n)}}return o(e,n)}(k.current,"[role=menu]"))&&"keyboard"),!1!==n&&("keyboard"!==n||/^key.+$/.test(e))){var t=a(k.current,l)[0];t&&t.focus&&t.focus()}}));Object(i.useEffect)((function(){g?D():M.current&&(M.current=!1,R())}),[g,M,R,D]),Object(i.useEffect)((function(){T.current=null}));var P=function(e,n){if(!k.current)return null;var t=a(k.current,l),o=t.indexOf(e)+n;return t[o=Math.max(0,Math.min(o,t.length))]};return s.a.createElement(w.Provider,{value:F},f({props:{onKeyDown:function(e){var n=e.key,t=e.target;if(!/input|textarea/i.test(t.tagName)||!(" "===n||"Escape"!==n&&k.current&&k.current.contains(t)))switch(T.current=e.type,n){case"ArrowUp":var o=P(t,-1);return o&&o.focus&&o.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),g){var r=P(t,1);r&&r.focus&&r.focus()}else N(e);return;case"Escape":case"Tab":y(!1,e)}}}}))}W.displayName="ReactOverlaysDropdown",W.propTypes=z,W.defaultProps={itemSelector:"* > *"},W.Menu=U,W.Toggle=$;var J=t(49);function X(e){void 0===e&&(e=B());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(je){return e.body}}function Y(e,n){e.classList?e.classList.add(n):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function Z(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function G(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=Z(e.className,n):e.setAttribute("class",Z(e.className&&e.className.baseVal||"",n))}function Q(e,n){return function(e){var n=B(e);return n&&n.defaultView||window}(e).getComputedStyle(e,n)}var ee=/([A-Z])/g;var ne=/^ms-/;function te(e){return function(e){return e.replace(ee,"-$1").toLowerCase()}(e).replace(ne,"-ms-")}var oe=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var re=function(e,n){var t="",o="";if("string"===typeof n)return e.style.getPropertyValue(te(n))||Q(e).getPropertyValue(te(n));Object.keys(n).forEach((function(r){var a=n[r];a||0===a?!function(e){return!(!e||!oe.test(e))}(r)?t+=te(r)+": "+a+";":o+=r+"("+a+") ":e.style.removeProperty(te(r))})),o&&(t+="transform: "+o+";"),e.style.cssText+=";"+t},ae=t(134);function ie(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function se(e){var n;return ie(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=B(e),t=ie(n);return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var ce=["template","script","style"],ue=function(e,n,t){n=[].concat(n),[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===ce.indexOf(t.toLowerCase())}(e)&&t(e)}))};function le(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var de,fe=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,o=void 0===t||t,r=n.handleContainerOverflow,a=void 0===r||r;this.hideSiblingNodes=o,this.handleContainerOverflow=a,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=Object(ae.a)()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,o){return!!n(e,o)&&(t=o,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(re(n,"paddingRight")||0,10)+this.scrollbarSize+"px"),re(n,t)},n.removeContainerStyle=function(e,n){var t=e.style;Object.keys(t).forEach((function(e){n.style[e]=t[e]}))},n.add=function(e,n,t){var o=this.modals.indexOf(e),r=this.containers.indexOf(n);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;ue(e,[t,o],(function(e){return le(!0,e)}))}(n,e),-1!==r)return this.data[r].modals.push(e),o;var a={modals:[e],classes:t?t.split(/\s+/):[],overflowing:se(n)};return this.handleContainerOverflow&&this.setContainerStyle(a,n),a.classes.forEach(Y.bind(null,n)),this.containers.push(n),this.data.push(a),o},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),o=this.data[t],r=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.classes.forEach(G.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(o,r),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;ue(e,[t,o],(function(e){return le(!1,e)}))}(r,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var a=o.modals[o.modals.length-1],i=a.backdrop;le(!1,a.dialog),le(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),pe=function(e){if("undefined"!==typeof document)return null==e?B().body:("function"===typeof e&&(e=e()),e&&e.current&&(e=e.current),e&&e.nodeType?e:null)};function he(e,n){var t=Object(i.useState)((function(){return pe(e)})),o=t[0],r=t[1];if(!o){var a=pe(e);a&&r(a)}return Object(i.useEffect)((function(){n&&o&&n(o)}),[n,o]),Object(i.useEffect)((function(){var n=pe(e);n!==o&&r(n)}),[e,o]),o}var ve=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this).state={exited:!n.props.show},n.onShow=function(){var e=n.props,t=e.container,o=e.containerClassName,r=e.onShow;n.getModalManager().add(Object(J.a)(n),t,o),n.removeKeydownListener=F(document,"keydown",n.handleDocumentKeyDown),n.removeFocusListener=F(document,"focus",(function(){return setTimeout(n.enforceFocus)}),!0),r&&r(),n.autoFocus()},n.onHide=function(){n.getModalManager().remove(Object(J.a)(n)),n.removeKeydownListener(),n.removeFocusListener(),n.props.restoreFocus&&n.restoreLastFocus()},n.setDialogRef=function(e){n.dialog=e},n.setBackdropRef=function(e){n.backdrop=e&&L.a.findDOMNode(e)},n.handleHidden=function(){var e;(n.setState({exited:!0}),n.onHide(),n.props.onExited)&&(e=n.props).onExited.apply(e,arguments)},n.handleBackdropClick=function(e){e.target===e.currentTarget&&(n.props.onBackdropClick&&n.props.onBackdropClick(e),!0===n.props.backdrop&&n.props.onHide())},n.handleDocumentKeyDown=function(e){n.props.keyboard&&27===e.keyCode&&n.isTopModal()&&(n.props.onEscapeKeyDown&&n.props.onEscapeKeyDown(e),n.props.onHide())},n.enforceFocus=function(){if(n.props.enforceFocus&&n._isMounted&&n.isTopModal()){var e=X(H(Object(J.a)(n)));n.dialog&&!k(n.dialog,e)&&n.dialog.focus()}},n.renderBackdrop=function(){var e=n.props,t=e.renderBackdrop,o=e.backdropTransition,r=t({ref:n.setBackdropRef,onClick:n.handleBackdropClick});return o&&(r=s.a.createElement(o,{appear:!0,in:n.props.show},r)),r},n}Object(v.a)(n,e),n.getDerivedStateFromProps=function(e){return e.show?{exited:!1}:e.transition?null:{exited:!0}};var t=n.prototype;return t.componentDidMount=function(){this._isMounted=!0,this.props.show&&this.onShow()},t.componentDidUpdate=function(e){var n=this.props.transition;!e.show||this.props.show||n?!e.show&&this.props.show&&this.onShow():this.onHide()},t.componentWillUnmount=function(){var e=this.props,n=e.show,t=e.transition;this._isMounted=!1,(n||t&&!this.state.exited)&&this.onHide()},t.getSnapshotBeforeUpdate=function(e){return x.a&&!e.show&&this.props.show&&(this.lastFocus=X()),null},t.getModalManager=function(){return this.props.manager?this.props.manager:(de||(de=new fe),de)},t.restoreLastFocus=function(){this.lastFocus&&this.lastFocus.focus&&(this.lastFocus.focus(this.props.restoreFocusOptions),this.lastFocus=null)},t.autoFocus=function(){if(this.props.autoFocus){var e=X(H(this));this.dialog&&!k(this.dialog,e)&&(this.lastFocus=e,this.dialog.focus())}},t.isTopModal=function(){return this.getModalManager().isTopModal(this)},t.render=function(){var e=this.props,t=e.show,o=e.container,r=e.children,a=e.renderDialog,i=e.role,c=void 0===i?"dialog":i,u=e.transition,f=e.backdrop,p=e.className,h=e.style,v=e.onExit,m=e.onExiting,g=e.onEnter,b=e.onEntering,w=e.onEntered,y=Object(d.a)(e,["show","container","children","renderDialog","role","transition","backdrop","className","style","onExit","onExiting","onEnter","onEntering","onEntered"]);if(!(t||u&&!this.state.exited))return null;var E=Object(l.a)({role:c,ref:this.setDialogRef,"aria-modal":"dialog"===c||void 0},function(e,n){var t=Object.keys(e),o={};return t.forEach((function(t){Object.prototype.hasOwnProperty.call(n,t)||(o[t]=e[t])})),o}(y,n.propTypes),{style:h,className:p,tabIndex:"-1"}),O=a?a(E):s.a.createElement("div",E,s.a.cloneElement(r,{role:"document"}));return u&&(O=s.a.createElement(u,{appear:!0,unmountOnExit:!0,in:t,onExit:v,onExiting:m,onExited:this.handleHidden,onEnter:g,onEntering:b,onEntered:w},O)),L.a.createPortal(s.a.createElement(s.a.Fragment,null,f&&this.renderBackdrop(),O),o)},n}(s.a.Component);ve.propTypes={show:u.a.bool,container:u.a.any,onShow:u.a.func,onHide:u.a.func,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),renderDialog:u.a.func,renderBackdrop:u.a.func,onEscapeKeyDown:u.a.func,onBackdropClick:u.a.func,containerClassName:u.a.string,keyboard:u.a.bool,transition:u.a.elementType,backdropTransition:u.a.elementType,autoFocus:u.a.bool,enforceFocus:u.a.bool,restoreFocus:u.a.bool,restoreFocusOptions:u.a.shape({preventScroll:u.a.bool}),onEnter:u.a.func,onEntering:u.a.func,onEntered:u.a.func,onExit:u.a.func,onExiting:u.a.func,onExited:u.a.func,manager:u.a.object},ve.defaultProps={show:!1,role:"dialog",backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,onHide:function(){},renderBackdrop:function(e){return s.a.createElement("div",e)}};var me=function(e){var n=s.a.forwardRef((function(n,t){var o=he(n.container);return o?s.a.createElement(e,Object(l.a)({},n,{ref:t,container:o})):null}));return n.Manager=fe,n._Inner=e,n}(ve);me.Manager=fe;var ge=me,be=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};var we=function(e,n){return Object(i.useMemo)((function(){return function(e,n){var t=be(e),o=be(n);return function(e){t&&t(e),o&&o(e)}}(e,n)}),[e,n])},ye=s.a.forwardRef((function(e,n){var t=e.flip,o=e.placement,r=e.containerPadding,a=e.popperConfig,c=void 0===a?{}:a,u=e.transition,f=m(),p=f[0],h=f[1],v=m(),g=v[0],b=v[1],w=we(h,n),y=he(e.container),E=he(e.target),O=Object(i.useState)(!e.show),k=O[0],x=O[1],S=c.modifiers,C=void 0===S?{}:S,T=j(E,p,Object(l.a)({},c,{placement:o||"bottom",enableEvents:e.show,modifiers:Object(l.a)({},C,{preventOverflow:Object(l.a)({padding:r||5},C.preventOverflow),arrow:Object(l.a)({},C.arrow,{enabled:!!g,element:g}),flip:Object(l.a)({enabled:!!t},C.preventOverflow)})})),M=T.styles,N=T.arrowStyles,F=Object(d.a)(T,["styles","arrowStyles"]);e.show?k&&x(!1):e.transition||k||x(!0);var R=e.show||u&&!k;if(A(p,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!R)return null;var D=e.children(Object(l.a)({},F,{show:e.show,props:{style:M,ref:w},arrowProps:{style:N,ref:b}}));if(u){var P=e.onExit,B=e.onExiting,H=e.onEnter,_=e.onEntering,K=e.onEntered;D=s.a.createElement(u,{in:e.show,appear:!0,onExit:P,onExiting:B,onExited:function(){x(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:H,onEntering:_,onEntered:K},D)}return y?L.a.createPortal(D,y):null}));ye.displayName="Overlay",ye.propTypes={show:u.a.bool,placement:u.a.oneOf(y.a.placements),target:u.a.any,container:u.a.any,flip:u.a.bool,children:u.a.func.isRequired,containerPadding:u.a.number,popperConfig:u.a.object,rootClose:u.a.bool,rootCloseEvent:u.a.oneOf(["click","mousedown"]),rootCloseDisabled:u.a.bool,onHide:function(e){var n=u.a.func;e.rootClose&&(n=n.isRequired);for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];return n.apply(void 0,[e].concat(o))},transition:u.a.elementType,onEnter:u.a.func,onEntering:u.a.func,onEntered:u.a.func,onExit:u.a.func,onExiting:u.a.func,onExited:u.a.func},ye.defaultProps={containerPadding:5};var Ee={container:u.a.any,onRendered:u.a.func},Oe=function(e){var n=e.container,t=e.children,o=he(n,e.onRendered);return o?L.a.createPortal(t,o):null};Oe.displayName="Portal",Oe.propTypes=Ee},1241:function(e,n,t){"use strict";e.exports=function(e,n,t,o,r,a,i,s){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,o,r,a,i,s],l=0;(c=new Error(n.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},1631:function(e,n,t){"use strict";var o=function(){};e.exports=o}}]);
//# sourceMappingURL=0.dbbdf668.chunk.js.map