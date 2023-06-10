/*! For license information please see 94.66c334ae.chunk.js.LICENSE.txt */
(self.webpackChunkipfs_webui=self.webpackChunkipfs_webui||[]).push([[94],{58011:function(e,t,r){"use strict";r.d(t,{L:function(){return o},h:function(){return f}});var n=r(29867),o=function(e){var t=e.children,r=e.className;return n.createElement("div",{className:"inline-block align-top ".concat(r)},t)},i=function(e){var t=e.onClick,r=e.zIndex;return n.createElement("div",{onClick:t,style:{position:"fixed",zIndex:r,top:0,right:0,bottom:0,left:0},"data-id":"dropdown-overlay"})},a=function(e){var t=e.open,r=e.top,o=void 0===r?0:r,i=e.children;return n.createElement("div",{style:{display:t?null:"none",position:"relative",top:o},"data-id":"dropdown-menu"},i)},u=function(e){var t=e.height,r=e.boxShadow,o=void 0===r?"0px 1px 10px 0px rgba(0,0,0,0.20)":r,i=e.background,a=void 0===i?"white":i,u=e.align,c=void 0===u?"center":u,l=e.marginLeft,s=void 0===l?"auto":l,f=e.marginRight,d=void 0===f?"auto":f,p=Math.round(Math.sqrt(2)*t);return n.createElement("div",{style:{position:"absolute",width:"100%",height:"".concat(t,"px"),top:"-".concat(t,"px"),textAlign:c,overflow:"hidden",zIndex:1}},n.createElement("div",{style:{display:"inline-block",position:"relative",width:"".concat(p,"px"),height:"".concat(p,"px"),transform:"translate(0, ".concat(t/2,"px) rotate(45deg)"),borderRadius:"2px 0 0 0",background:a,left:s,right:d,boxShadow:o}}))},c=function(e){var t=e.height,r=e.boxShadow,o=void 0===r?"0px 1px 10px 0px rgba(0,0,0,0.20)":r,i=e.background,a=void 0===i?"white":i,u=e.align,c=void 0===u?"center":u,l=e.marginLeft,s=void 0===l?"auto":l,f=e.marginRight,d=void 0===f?"auto":f,p=Math.round(Math.sqrt(2)*t);return n.createElement("div",{style:{width:"100%",height:"".concat(t+5,"px"),textAlign:c,overflow:"hidden",zIndex:1}},n.createElement("div",{style:{display:"inline-block",position:"relative",width:"".concat(p,"px"),height:"".concat(p,"px"),transform:"translate(0, ".concat(t/2,"px) rotate(45deg)"),borderRadius:"2px 0 0 0",background:a,boxShadow:o,top:"-".concat(t+2,"px"),left:s,right:d}}))},l=function(e){var t=e.width,r=e.left,o=void 0===r?"calc(50% - ".concat(t/2,"px)"):r,i=e.translateX,a=e.translateY,u=e.children,c=e.zIndex;return n.createElement("div",{style:{position:"absolute",width:"".concat(t,"px"),left:o,transform:"translateX(".concat(i,"px) translateY(").concat(a,"px)"),zIndex:c}},u)},s=function(e){var t=e.boxShadow,r=void 0===t?"0px 1px 10px 0px rgba(0,0,0,0.20)":t,o=e.background,i=void 0===o?"white":o,a=e.className,u=e.children;return n.createElement("div",{style:{position:"relative",textAlign:"left",background:i,boxShadow:r},className:a},u)},f=function(e){var t=e.open,r=e.boxShadow,o=e.className,f=e.background,d=e.translateX,p=void 0===d?0:d,g=e.translateY,h=void 0===g?0:g,v=e.width,y=e.left,m=e.top,b=void 0===m?0:m,w=e.arrowHeight,S=void 0===w?12:w,x=e.arrowPosition,k=void 0===x?"top":x,C=e.arrowAlign,O=e.arrowMarginLeft,D=e.arrowMarginRight,I=e.onDismiss,j=e.alignRight,P=e.children,M=e.baseZIndex,A=void 0===M?100:M;return j&&(y="calc(100% - ".concat(v,"px)"),C="right",D=D||"13px"),n.createElement(a,{open:t,top:b+S},n.createElement(i,{onClick:I,zIndex:A}),n.createElement(l,{zIndex:A+1,width:v,left:y,translateX:p,translateY:h},"top"===k&&n.createElement(u,{boxShadow:r,background:f,height:S,align:C,marginLeft:O,marginRight:D}),n.createElement(s,{className:o,boxShadow:r,background:f},t?P:null),"bottom"===k&&n.createElement(c,{boxShadow:r,background:f,height:S,align:C,marginLeft:O,marginRight:D})))}},15240:function(e,t,r){"use strict";var n=r(73147),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,i,a,u,c,l,s=!1;t||(t={}),r=t.debug||!1;try{if(a=n(),u=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),u.selectNodeContents(l),c.addRange(u),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){r&&console.error("unable to copy using execCommand: ",f),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){r&&console.error("unable to copy using clipboardData: ",f),r&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(u):c.removeAllRanges()),l&&document.body.removeChild(l),a()}return s}},27280:function(e){"use strict";e.exports=function(e,t){if(t||(t={}),!e)return"";var r=(/[^./\\]*$/.exec(e)||[""])[0];return t.preserveCase?r:r.toLowerCase()}},56328:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=i(r(29867)),o=i(r(15240));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?p(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){function t(){var e,r;l(this,t);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return h(p(r=f(this,(e=d(t)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var t=r.props,i=t.text,a=t.onCopy,u=t.children,c=t.options,l=n.default.Children.only(u),s=(0,o.default)(i,c);a&&a(i,s),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),r}var r,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,i=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=c(e,["text","onCopy","options","children"]),o=n.default.Children.only(t);return n.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{onClick:this.onClick}))}}],i&&s(r.prototype,i),a&&s(r,a),t}(n.default.PureComponent);t.CopyToClipboard=v,h(v,"defaultProps",{onCopy:void 0,options:void 0})},75176:function(e,t,r){"use strict";var n=r(56328).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},53917:function(e,t,r){"use strict";r.d(t,{L:function(){return o}});var n=r(29867),o="undefined"!==typeof window?n.useLayoutEffect:n.useEffect},40332:function(e,t,r){"use strict";r.d(t,{U:function(){return s}});var n=r(53917),o=r(42132),i=r(29867);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t,r){var u=function(e,t,r){var u=a((0,i.useState)((function(){return t(e)})),2),c=u[0],l=u[1],s=(0,i.useCallback)((function(){var n=t(e);(0,o.w)(c,n)||(l(n),r&&r())}),[c,e,r]);return(0,n.L)(s,[]),[c,s]}(e,t,r),l=c(u,2),s=l[0],f=l[1];return(0,n.L)((function(){var t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(f,{handlerIds:[t]})}),[e,f]),s}},57279:function(e,t,r){"use strict";r.d(t,{c:function(){return k}});var n=r(29867),o=r(45775),i=r(40332),a=r(53917),u=r(72033),c=r(97413);function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=!1,f=!1,d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sourceId=null,this.internalMonitor=t.getMonitor()}var t,r,n;return t=e,(r=[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){(0,o.k)(!s,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return s=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{s=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;(0,o.k)(!f,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return f=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{f=!1}}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"isDraggingSource",value:function(e){return this.internalMonitor.isDraggingSource(e)}},{key:"isOverTarget",value:function(e,t){return this.internalMonitor.isOverTarget(e,t)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(e){return this.internalMonitor.subscribeToOffsetChange(e)}},{key:"canDragSource",value:function(e){return this.internalMonitor.canDragSource(e)}},{key:"canDropOnTarget",value:function(e){return this.internalMonitor.canDropOnTarget(e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}])&&l(t.prototype,r),n&&l(t,n),e}(),p=r(26603),g=r(78619),h=r(42132);function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hooks=(0,p.p)({dragSource:function(e,t){r.clearDragSource(),r.dragSourceOptions=t||null,(0,g.d)(e)?r.dragSourceRef=e:r.dragSourceNode=e,r.reconnectDragSource()},dragPreview:function(e,t){r.clearDragPreview(),r.dragPreviewOptions=t||null,(0,g.d)(e)?r.dragPreviewRef=e:r.dragPreviewNode=e,r.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}var t,r,n;return t=e,(r=[{key:"receiveHandlerId",value:function(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}},{key:"reconnect",value:function(){this.reconnectDragSource(),this.reconnectDragPreview()}},{key:"reconnectDragSource",value:function(){var e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();t&&this.disconnectDragSource(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)):this.lastConnectedDragSource=e)}},{key:"reconnectDragPreview",value:function(){var e=this.dragPreview,t=this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();t&&this.disconnectDragPreview(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=e,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,e,this.dragPreviewOptions)):this.lastConnectedDragPreview=e)}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!(0,h.w)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!(0,h.w)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(e){this.dragSourceOptionsInternal=e}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(e){this.dragPreviewOptionsInternal=e}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}}])&&v(t.prototype,r),n&&v(t,n),e}();function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e){return w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e){var t=(0,n.useRef)(e);t.current=e,(0,o.k)(null!=e.item,"item must be defined"),(0,o.k)(null!=e.item.type,"item type must be defined");var r=S(function(){var e=(0,c.N)();return[(0,n.useMemo)((function(){return new d(e)}),[e]),(0,n.useMemo)((function(){return new y(e.getBackend())}),[e])]}(),2),l=r[0],s=r[1];!function(e,t,r){var i=(0,c.N)(),l=(0,n.useMemo)((function(){return{beginDrag:function(){var r=e.current,n=r.begin,i=r.item;if(n){var a=n(t);return(0,o.k)(null==a||"object"===w(a),"dragSpec.begin() must either return an object, undefined, or null"),a||i||{}}return i||{}},canDrag:function(){return"boolean"===typeof e.current.canDrag?e.current.canDrag:"function"!==typeof e.current.canDrag||e.current.canDrag(t)},isDragging:function(r,n){var o=e.current.isDragging;return o?o(t):n===r.getSourceId()},endDrag:function(){var n=e.current.end;n&&n(t.getItem(),t),r.reconnect()}}}),[]);(0,a.L)((function(){var n=m((0,u.w)(e.current.item.type,l,i),2),o=n[0],a=n[1];return t.receiveHandlerId(o),r.receiveHandlerId(o),a}),[])}(t,l,s);var f=(0,i.U)(l,t.current.collect||function(){return{}},(function(){return s.reconnect()})),p=(0,n.useMemo)((function(){return s.hooks.dragSource()}),[s]),g=(0,n.useMemo)((function(){return s.hooks.dragPreview()}),[s]);return(0,a.L)((function(){s.dragSourceOptions=t.current.options||null,s.reconnect()}),[s]),(0,a.L)((function(){s.dragPreviewOptions=t.current.previewOptions||null,s.reconnect()}),[s]),[f,p,g]}},97413:function(e,t,r){"use strict";r.d(t,{N:function(){return a}});var n=r(29867),o=r(45775),i=r(63358);function a(){var e=(0,n.useContext)(i.L).dragDropManager;return(0,o.k)(null!=e,"Expected drag drop context"),e}},61430:function(e,t,r){"use strict";r.d(t,{L:function(){return h}});var n=r(29867),o=r(45775),i=r(40332),a=r(53917),u=r(72033),c=r(97413),l=r(67150),s=r(55038);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e){var t=(0,n.useRef)(e);t.current=e,(0,o.k)(null!=e.accept,"accept must be defined");var r=p(function(){var e=(0,c.N)();return[(0,n.useMemo)((function(){return new s.H(e)}),[e]),(0,n.useMemo)((function(){return new l.Y(e.getBackend())}),[e])]}(),2),d=r[0],g=r[1];!function(e,t,r){var o=(0,c.N)(),i=(0,n.useMemo)((function(){return{canDrop:function(){var r=e.current.canDrop;return!r||r(t.getItem(),t)},hover:function(){var r=e.current.hover;r&&r(t.getItem(),t)},drop:function(){var r=e.current.drop;if(r)return r(t.getItem(),t)}}}),[t]);(0,a.L)((function(){var n=f((0,u.n)(e.current.accept,i,o),2),a=n[0],c=n[1];return t.receiveHandlerId(a),r.receiveHandlerId(a),c}),[t,r])}(t,d,g);var h=(0,i.U)(d,t.current.collect||function(){return{}},(function(){return g.reconnect()})),v=(0,n.useMemo)((function(){return g.hooks.dropTarget()}),[g]);return(0,a.L)((function(){g.dropTargetOptions=e.options||null,g.reconnect()}),[e.options]),[h,v]}},73147:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},48185:function(e,t,r){"use strict";r.d(t,{hj:function(){return c}});var n=r(37762),o=r(29010),i=["Makefile","Rakefile","ada","adb","ads","applescript","as","ascx","asm","asmx","asp","aspx","atom","bas","bash","bashrc","bat","bbcolors","bdsgroup","bdsproj","bib","bowerrc","c","cbl","cc","cfc","cfg","cfm","cfml","cgi","clj","cls","cmake","cmd","cnf","cob","coffee","coffeekup","conf","cpp","cpt","cpy","crt","cs","csh","cson","csr","css","csslintrc","csv","ctl","curlrc","cxx","dart","dfm","diff","dof","dpk","dproj","dtd","eco","editorconfig","ejs","el","emacs","eml","ent","erb","erl","eslintignore","eslintrc","ex","exs","f","f03","f77","f90","f95","fish","for","fpp","frm","ftn","gemrc","gitattributes","gitconfig","gitignore","gitkeep","gitmodules","go","gpp","gradle","groovy","groupproj","grunit","gtmpl","gvimrc","h","haml","hbs","hgignore","hh","hpp","hrl","hs","hta","htaccess","htc","htm","html","htpasswd","hxx","iced","inc","ini","ino","int","irbrc","itcl","itermcolors","itk","jade","java","jhtm","jhtml","js","jscsrc","jshintignore","jshintrc","json","json5","jsonld","jsp","jspx","jsx","ksh","less","lhs","lisp","log","ls","lsp","lua","m","mak","map","markdown","master","md","mdown","mdwn","mdx","metadata","mht","mhtml","mjs","mk","mkd","mkdn","mkdown","ml","mli","mm","mxml","nfm","nfo","njk","noon","npmignore","npmrc","nvmrc","ops","pas","pasm","patch","pbxproj","pch","pem","pg","php","php3","php4","php5","phpt","phtml","pir","pl","pm","pmc","pod","pot","properties","props","pt","pug","py","r","rake","rb","rdoc","rdoc_options","resx","rhtml","rjs","rlib","rmd","ron","rs","rss","rst","rtf","rvmrc","rxml","s","sass","scala","scm","scss","seestyle","sh","shtml","sls","spec","sql","sqlite","ss","sss","st","strings","sty","styl","stylus","sub","sublime-build","sublime-commands","sublime-completions","sublime-keymap","sublime-macro","sublime-menu","sublime-project","sublime-settings","sublime-workspace","sv","svc","svg","t","tcl","tcsh","terminal","tex","text","textile","tg","tmLanguage","tmTheme","tmpl","tpl","ts","tsv","tsx","tt","tt2","ttml","txt","v","vb","vbs","vh","vhd","vhdl","vim","viminfo","vimrc","vue","webapp","wxml","wxss","x-php","xht","xhtml","xml","xs","xsd","xsl","xslt","yaml","yml","zsh","zshrc"],a=["dds","eot","gif","ico","jar","jpeg","jpg","pdf","png","swf","tga","ttf","zip"];function u(e,t){if(e){var r,u=o.basename(e).split(".").reverse(),c=(0,n.Z)(u);try{for(c.s();!(r=c.n()).done;){var s=r.value;if(-1!==i.indexOf(s))return!0;if(-1!==a.indexOf(s))return!1}}catch(f){c.e(f)}finally{c.f()}}return t?"utf8"===l(t):null}function c(e,t){var r=u(e,t);return null==r?null:!r}function l(e,t){var r,n;if(!e)return null;var o="utf8",i="binary",a=null!==(r=null===t||void 0===t?void 0:t.chunkLength)&&void 0!==r?r:24,u=null!==(n=null===t||void 0===t?void 0:t.chunkBegin)&&void 0!==n?n:0;if(null==(null===t||void 0===t?void 0:t.chunkBegin)){var c=l(e,{chunkLength:a,chunkBegin:u});return c===o&&(c=l(e,{chunkLength:a,chunkBegin:u=Math.max(0,Math.floor(e.length/2)-a)}))===o&&(c=l(e,{chunkLength:a,chunkBegin:u=Math.max(0,e.length-a)})),c}if(-1===(u=function(e,t){if(0===t)return 0;if(r=e[t],r>>6!==2)return t;var r;var n=t-3;if(n>=0&&s(e[n]))return n;if((n=t-2)>=0&&(s(e[n])||f(e[n])))return n;if((n=t-1)>=0&&(s(e[n])||f(e[n])||d(e[n])))return n;return-1}(e,u)))return i;var p=function(e,t){if(t===e.length)return t;var r=t-3;if(r>=0&&s(e[r]))return t+1;if((r=t-2)>=0){if(s(e[r]))return t+2;if(f(e[r]))return t+1}if((r=t-1)>=0){if(s(e[r]))return t+3;if(f(e[r]))return t+2;if(d(e[r]))return t+1}return t}(e,Math.min(e.length,u+a));if(p>e.length)return i;for(var g=e.toString(o,u,p),h=0;h<g.length;++h){var v=g.charCodeAt(h);if(65533===v||v<=8)return i}return o}function s(e){return e>>3===30}function f(e){return e>>4===14}function d(e){return e>>5===6}}}]);
//# sourceMappingURL=94.66c334ae.chunk.js.map