!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","react-dom"],n):n(e["screenfull-react"]={},e.React,e.ReactDOM)}(this,function(e,n,r){"use strict";function t(e,n){return e(n={exports:{}},n.exports),n.exports}n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}})()&&Object.assign;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function i(){}t(function(e){e.exports=function(){function e(e,n,r,t,o,l){if(l!==u){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n};return r.checkPropTypes=i,r.PropTypes=r,r}()}).PropTypes;var s=t(function(e){var n,r,t,o,l,c;n="undefined"!=typeof window&&void 0!==window.document?window.document:{},r=e.exports,t="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,o=function(){for(var e,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],t=0,o=r.length,l={};t<o;t++)if((e=r[t])&&e[1]in n){for(t=0;t<e.length;t++)l[r[0][t]]=e[t];return l}return!1}(),l={change:o.fullscreenchange,error:o.fullscreenerror},c={request:function(e){var r=o.requestFullscreen;e=e||n.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[r]():e[r](t&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){n[o.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,r){var t=l[e];t&&n.addEventListener(t,r,!1)},off:function(e,r){var t=l[e];t&&n.removeEventListener(t,r,!1)},raw:o},o?(Object.defineProperties(c,{isFullscreen:{get:function(){return Boolean(n[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[o.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(n[o.fullscreenEnabled])}}}),r?e.exports=c:window.screenfull=c):r?e.exports=!1:window.screenfull=!1}),a=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},f=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),p=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},d=function(e){function t(e){a(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getNode=function(){var e=n.props.scrollContainerRef;return e?r.findDOMNode(e):"undefined"!=typeof document&&document.body},n.getFullScreenNode=function(){return document.documentElement||document.body},n.handleScroll=function(e){var r=e.currentTarget.scrollTop,t="down";0!==n.scroll&&r<n.scroll&&(t="up"),n.scroll=r,"up"===t&&s.isFullscreen?s.exit():"down"!==t||s.isFullscreen||s.request(n.getFullScreenNode())},n.scroll=0,n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(t,n.PureComponent),f(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.forceFullScreen;if(!e.mobileOnly||this.isMobile())if(n)s.enabled&&s.request(this.getFullScreenNode());else{var r=this.getNode();r&&s.enabled&&r.addEventListener("scroll",this.handleScroll,{passive:!0},!0)}}},{key:"componentWillUnmount",value:function(){var e=this.props,n=e.forceFullScreen;if((!e.mobileOnly||this.isMobile())&&(s.enabled&&s.exit(),!n)){var r=this.getNode();r&&s.enabled&&r.removeEventListener("scroll",this.handleScroll)}}},{key:"isMobile",value:function(){var e=this.props.maxPixelsForMobile;return"undefined"!=typeof window&&window.innerWidth<=e}},{key:"render",value:function(){return null}}]),t}();d.defaultProps={scrollContainerRef:null,forceFullScreen:!1,mobileOnly:!0,maxPixelsForMobile:768},d.propTypes={},e.default=d,Object.defineProperty(e,"__esModule",{value:!0})});
