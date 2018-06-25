import React from"react";import ReactDOM from"react-dom";function createCommonjsModule(e,n){return e(n={exports:{}},n.exports),n.exports}var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function shouldUseNative(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}var objectAssign=shouldUseNative()?Object.assign:function(e,n){for(var r,t,o=toObject(e),l=1;l<arguments.length;l++){for(var c in r=Object(arguments[l]))hasOwnProperty.call(r,c)&&(o[c]=r[c]);if(getOwnPropertySymbols){t=getOwnPropertySymbols(r);for(var s=0;s<t.length;s++)propIsEnumerable.call(r,t[s])&&(o[t[s]]=r[t[s]])}}return o},ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret;function emptyFunction(){}var factoryWithThrowingShims=function(){function e(e,n,r,t,o,l){if(l!==ReactPropTypesSecret_1){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n};return r.checkPropTypes=emptyFunction,r.PropTypes=r,r},propTypes=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),propTypes_1=propTypes.PropTypes,screenfull=createCommonjsModule(function(e){var n,r,t,o,l,c;n="undefined"!=typeof window&&void 0!==window.document?window.document:{},r=e.exports,t="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,o=function(){for(var e,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],t=0,o=r.length,l={};t<o;t++)if((e=r[t])&&e[1]in n){for(t=0;t<e.length;t++)l[r[0][t]]=e[t];return l}return!1}(),l={change:o.fullscreenchange,error:o.fullscreenerror},c={request:function(e){var r=o.requestFullscreen;e=e||n.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[r]():e[r](t&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){n[o.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,r){var t=l[e];t&&n.addEventListener(t,r,!1)},off:function(e,r){var t=l[e];t&&n.removeEventListener(t,r,!1)},raw:o},o?(Object.defineProperties(c,{isFullscreen:{get:function(){return Boolean(n[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[o.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(n[o.fullscreenEnabled])}}}),r?e.exports=c:window.screenfull=c):r?e.exports=!1:window.screenfull=!1}),classCallCheck=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),inherits=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},possibleConstructorReturn=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},Screenfull=function(e){function n(e){classCallCheck(this,n);var r=possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return r.getNode=function(){var e=r.props.scrollContainerRef;return e?ReactDOM.findDOMNode(e):"undefined"!=typeof document&&document.body},r.getFullScreenNode=function(){return document.documentElement||document.body},r.handleScroll=function(e){var n=e.currentTarget.scrollTop,t="down";0!==r.scroll&&n<r.scroll&&(t="up"),r.scroll=n,"up"===t&&screenfull.isFullscreen?screenfull.exit():"down"!==t||screenfull.isFullscreen||screenfull.request(r.getFullScreenNode())},r.scroll=0,r}return inherits(n,e),createClass(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.forceFullScreen;if(!e.mobileOnly||this.isMobile())if(n)screenfull.enabled&&screenfull.request(this.getFullScreenNode());else{var r=this.getNode();r&&screenfull.enabled&&r.addEventListener("scroll",this.handleScroll,{passive:!0},!0)}}},{key:"componentWillUnmount",value:function(){var e=this.props,n=e.forceFullScreen;if((!e.mobileOnly||this.isMobile())&&(screenfull.enabled&&screenfull.exit(),!n)){var r=this.getNode();r&&screenfull.enabled&&r.removeEventListener("scroll",this.handleScroll)}}},{key:"isMobile",value:function(){var e=this.props.maxPixelsForMobile;return"undefined"!=typeof window&&window.innerWidth<=e}},{key:"render",value:function(){return null}}]),n}(React.PureComponent);Screenfull.defaultProps={scrollContainerRef:null,forceFullScreen:!1,mobileOnly:!0,maxPixelsForMobile:768},Screenfull.propTypes={};export default Screenfull;
//# sourceMappingURL=screenfull-react.es.js.map
