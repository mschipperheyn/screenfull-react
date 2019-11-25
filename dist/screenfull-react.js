"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),ReactDOM=_interopDefault(require("react-dom"));function createCommonjsModule(e,n){return e(n={exports:{}},n.exports),n.exports}var screenfull=createCommonjsModule((function(e){
/*!
* screenfull
* v5.0.0 - 2019-09-09
* (c) Sindre Sorhus; MIT License
*/
!function(){var n="undefined"!=typeof window&&void 0!==window.document?window.document:{},l=e.exports,r=function(){for(var e,l=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,t=l.length,u={};r<t;r++)if((e=l[r])&&e[1]in n){for(r=0;r<e.length;r++)u[l[0][r]]=e[r];return u}return!1}(),t={change:r.fullscreenchange,error:r.fullscreenerror},u={request:function(e){return new Promise(function(l,t){var u=function(){this.off("change",u),l()}.bind(this);this.on("change",u),e=e||n.documentElement,Promise.resolve(e[r.requestFullscreen]()).catch(t)}.bind(this))},exit:function(){return new Promise(function(e,l){if(this.isFullscreen){var t=function(){this.off("change",t),e()}.bind(this);this.on("change",t),Promise.resolve(n[r.exitFullscreen]()).catch(l)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,l){var r=t[e];r&&n.addEventListener(r,l,!1)},off:function(e,l){var r=t[e];r&&n.removeEventListener(r,l,!1)},raw:r};r?(Object.defineProperties(u,{isFullscreen:{get:function(){return Boolean(n[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(n[r.fullscreenEnabled])}}}),l?e.exports=u:window.screenfull=u):l?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()})),screenfull_1=screenfull.isEnabled;const getFullScreenNode=()=>document.documentElement||document.body,isMobile=e=>{if("undefined"==typeof window)return!1;return window.innerWidth<=e},Screenfull=({scrollContainerRef:e,forceFullScreen:n,mobileOnly:l,maxPixelsForMobile:r})=>{const t=React.useRef(0),u=React.useCallback(e=>{const n=e.currentTarget.scrollTop;let l="down";const r=t.current;0!==r&&n<r&&(l="up"),t.current=n,"up"===l&&screenfull.isFullscreen?screenfull.exit():"down"!==l||screenfull.isFullscreen||screenfull.request(getFullScreenNode())},[]),c=React.useCallback(()=>e?ReactDOM.findDOMNode(e):"undefined"!=typeof document&&document.body);return React.useEffect(()=>{if(l&&!isMobile(r))return;if(n)return void(screenfull.isEnabled&&screenfull.request(getFullScreenNode()));const e=c();e&&screenfull.isEnabled&&e.addEventListener("scroll",u,{passive:!0},!0)},[l,n]),React.useEffect(()=>()=>{screenfull.isEnabled&&screenfull.exit();const e=c();e&&e.removeEventListener("scroll",u)},[]),null};Screenfull.defaultProps={scrollContainerRef:null,forceFullScreen:!1,mobileOnly:!0,maxPixelsForMobile:768},exports.default=Screenfull;
//# sourceMappingURL=screenfull-react.js.map
