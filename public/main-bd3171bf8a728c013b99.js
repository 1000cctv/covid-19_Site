!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.PartnersCoupang=e():t.PartnersCoupang=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://partners.coupangcdn.com/widget/",r(r.s=73)}([function(t,e,r){"use strict";r(26);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o={parseParameters:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",r={};if(t)for(var o=t.split(e),i=0;i<o.length;i++){var a=n(o[i].split("="),2),c=a[0],u=a[1];r[c]=decodeURIComponent(u)}return r},joinParamters:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",r=[];for(var n in t)t.hasOwnProperty(n)&&void 0!==t[n]&&null!==t[n]&&r.push("".concat(n,"=").concat(encodeURIComponent(t[n])));return r.join(e)},getQueryParameterMap:function(){var t=location.search;return t?(t=t.slice(1),o.parseParameters(t)):{}},getHashParameterMap:function(){var t=location.hash;return t?(t=t.slice(1),o.parseParameters(t)):{}},getUrlContext:function(){for(var t=self,e=t.document.referrer,r=t.location.href;t.parent!==t;)try{e=t.parent.document.referrer,r=t.parent.location.href,t=t.parent}catch(n){e=t.document.referrer,r=t.location.href;break}function n(t){return 0===t.indexOf("data:")}return{rUrl:n(e)?void 0:e,pUrl:n(r)?void 0:r}},getResolution:function(){return"".concat(screen.width,"x").concat(screen.height)},generateUUID:function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?r:7&r|8).toString(16)})},ping:function(t){(new Image).src=t},trim:function(t){return t.replace(/^\s+|\s+$/g,"")},addEvent:function(t,e,r){t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):t["on"+e]=r}};e.a=o},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var r=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=r)},function(t,e,r){t.exports=!r(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(15),o=r(20);t.exports=r(4)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){"use strict";r.d(e,"a",function(){return u});var n=r(0);function o(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){a(t,e,r[e])})}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e.id)throw new Error("widget instance id is required!");var r=e.serverBaseUrl,o=i({},e,{resolution:n.a.getResolution()});this.baseParameters=o,this.serverBaseUrl=r||"https://ads-partners.coupang.com"}var e,r,a;return e=t,(r=[{key:"getAdServeUrl",value:function(){return"".concat(this.serverBaseUrl,"/widgets.html?").concat(n.a.joinParamters(i({},this.baseParameters)))}},{key:"getTrackingUrl",value:function(t){var e=i({},this.baseParameters,t),r=(e.templateVersion,e.serverBaseUrl,o(e,["templateVersion","serverBaseUrl"]));return"".concat(this.serverBaseUrl,"/log?").concat(n.a.joinParamters(r))}},{key:"getClickUrl",value:function(t){var e=i({},this.baseParameters,t),r=(e.templateVersion,e.serverBaseUrl,o(e,["templateVersion","serverBaseUrl"]));return"".concat(this.serverBaseUrl,"/click?").concat(n.a.joinParamters(r))}}])&&c(e.prototype,r),a&&c(e,a),t}()},function(t,e,r){var n=r(1),o=r(3),i=r(5),a=r(21),c=r(13),u=function(t,e,r){var f,s,l,p,v=t&u.F,d=t&u.G,y=t&u.S,h=t&u.P,g=t&u.B,m=d?n:y?n[e]||(n[e]={}):(n[e]||{}).prototype,b=d?o:o[e]||(o[e]={}),x=b.prototype||(b.prototype={});for(f in d&&(r=e),r)l=((s=!v&&m&&void 0!==m[f])?m:r)[f],p=g&&s?c(l,n):h&&"function"==typeof l?c(Function.call,l):l,m&&a(m,f,l,t&u.U),b[f]!=l&&i(b,f,p),h&&x[f]!=l&&(x[f]=l)};n.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){var n=r(3),o=r(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(24)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){var n=r(25);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(8),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(16),o=r(17),i=r(19),a=Object.defineProperty;e.f=r(4)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(2);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){t.exports=!r(4)&&!r(7)(function(){return 7!=Object.defineProperty(r(18)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(2),o=r(1).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){var n=r(2);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(1),o=r(5),i=r(22),a=r(11)("src"),c=r(23),u=(""+c).split("toString");r(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,r,c){var f="function"==typeof r;f&&(i(r,"name")||o(r,"name",e)),t[e]!==r&&(f&&(i(r,a)||o(r,a,t[e]?""+t[e]:u.join(String(e)))),t===n?t[e]=r:c?t[e]?t[e]=r:o(t,e,r):(delete t[e],o(t,e,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||c.call(this)})},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){t.exports=r(12)("native-function-to-string",Function.toString)},function(t,e){t.exports=!1},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(10),o=r(27),i=r(29),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);n(n.P+n.F*a,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,r){var n=r(14),o=r(28),i=r(6);t.exports=function(t,e,r,a){var c=String(i(t)),u=c.length,f=void 0===r?" ":String(r),s=n(e);if(s<=u||""==f)return c;var l=s-u,p=o.call(f,Math.ceil(l/f.length));return p.length>l&&(p=p.slice(0,l)),a?p+c:c+p}},function(t,e,r){"use strict";var n=r(8),o=r(6);t.exports=function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},function(t,e,r){var n=r(1).navigator;t.exports=n&&n.userAgent||""},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(9);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=e.id,u="".concat(r,"-").concat(Math.random().toString(16).substr(2)),f=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){a(t,e,r[e])})}return t}({},e,n.a.getUrlContext()),s=f.container,l=c(f,["container"]),p=new o.a(l),v=document.createElement("ins");if(v.style.display="none",v.innerHTML='<iframe id="'.concat(u,'" name="').concat(u,'" width="0" height="0" scrolling="no" frameborder="0" style="vertical-align:top" src="').concat(p.getAdServeUrl(),"#gid=").concat(u,'"></iframe>'),s){if(s.nodeType||(s=document.querySelector(s)),!s)throw new Error("container is error!");s.append(v)}else{var d=i([].slice.call(document.getElementsByTagName("script"),-1),1)[0],y=d.parentNode;y&&y.insertBefore(v,d)}window.addEventListener("message",function(t){try{if(t.data){var e=JSON.parse(t.data);if("set-iframe-size"===e.type&&e.gid===u){var r=document.getElementById("".concat(u));r.width=e.width,r.height=e.height,v.style.display="inline",t.source.postMessage(JSON.stringify({type:"iframe-size-has-been-set",gid:u}),t.origin)}}}catch(e){console.warn(t.data)}},!1)};r.d(e,"G",function(){return u})}])});