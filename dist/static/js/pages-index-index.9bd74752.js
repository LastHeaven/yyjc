(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),o=i(n("b849")),a=i(n("d416")),c=i(n("e984")),s=i(n("58a6")),u=i(n("7a73")),l=i(n("df73")),f={data:function(){return{banner:o.default,btnIcon:{zixun:a.default,dongtai:c.default,yuding:s.default,shikebiao:u.default}}},onLoad:function(){},methods:{onZixun:function(){l.default.alert("建设中")},onDongtai:function(){l.default.alert("建设中")},onYuding:function(){return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.confirm("即将跳转其它应用，请确认");case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return");case 8:window.location="https://m.cx5y.com/#/";case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()},onShike:function(){uni.navigateTo({url:"/pages/index/time-table"})}}};e.default=f},"1da1":function(t,e,n){"use strict";function i(t,e,n,i,r,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,n("d3b7")},"58a6":function(t,e,n){t.exports=n.p+"static/img/03.ad051c20.png"},"7a73":function(t,e,n){t.exports=n.p+"static/img/04.05f48cc6.png"},8069:function(t,e,n){"use strict";n.r(e);var i=n("0d9b"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"8a79":function(t,e,n){"use strict";var i=n("23e7"),r=n("06cf").f,o=n("50c4"),a=n("5a34"),c=n("1d80"),s=n("ab13"),u=n("c430"),l="".endsWith,f=Math.min,d=s("endsWith"),v=!u&&!d&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!v&&!d},{endsWith:function(t){var e=String(c(this));a(t);var n=arguments.length>1?arguments[1]:void 0,i=o(e.length),r=void 0===n?i:f(o(n),i),s=String(t);return l?l.call(e,s,r):e.slice(r-s.length,r)===s}})},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=y;var f="suspendedStart",d="suspendedYield",v="executing",h="completed",g={},p={};p[a]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(S([])));w&&w!==i&&r.call(w,a)&&(p=w);var b=_.prototype=C.prototype=Object.create(p);k.prototype=b.constructor=_,_.constructor=k,_[s]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},L(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,i){var r=new j(y(t,e,n,i));return l.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},L(b),b[s]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return c.type="throw",c.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;I(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:S(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),g}}}function y(t,e,n,i){var r=e&&e.prototype instanceof C?e:C,o=Object.create(r.prototype),a=new T(i||[]);return o._invoke=E(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function C(){}function k(){}function _(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,i,o,a){var c=x(t[n],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){s.value=t,o(s)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var n;function i(t,i){function r(){return new Promise((function(n,r){e(t,i,n,r)}))}return n=n?n.then(r,r):r()}this._invoke=i}function E(t,e,n){var i=f;return function(r,o){if(i===v)throw new Error("Generator is already running");if(i===h){if("throw"===r)throw o;return M()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var s=x(t,e,n);if("normal"===s.type){if(i=n.done?h:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=h,n.method="throw",n.arg=s.arg)}}}function O(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=x(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"986d":function(t,e,n){var i=n("cfe9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("6acc3fa6",i,!0,{sourceMap:!1,shadowMode:!1})},a1b5:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"padding-sm bg-white margin-bottom"},[n("v-uni-view",{staticClass:"bg-img bg-banner border-radius-sm",style:[{backgroundImage:"url("+t.banner+")"}]}),n("v-uni-view",{staticClass:"flex padding-top"},[n("v-uni-view",{staticClass:"flex-sub text-center padding-tb",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onZixun.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"flex justify-center margin-bottom-xs"},[n("v-uni-view",{staticClass:"bg-img oper-img border-radius-sm",style:[{backgroundImage:"url("+t.btnIcon.zixun+")"}]})],1),n("v-uni-view",[t._v("机场资讯")])],1),n("v-uni-view",{staticClass:"flex-sub text-center padding-tb",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onDongtai.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"flex justify-center margin-bottom-xs"},[n("v-uni-view",{staticClass:"bg-img oper-img border-radius-sm",style:[{backgroundImage:"url("+t.btnIcon.dongtai+")"}]})],1),n("v-uni-view",[t._v("航班动态")])],1),n("v-uni-view",{staticClass:"flex-sub text-center padding-tb",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onYuding.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"flex justify-center margin-bottom-xs"},[n("v-uni-view",{staticClass:"bg-img oper-img border-radius-sm",style:[{backgroundImage:"url("+t.btnIcon.yuding+")"}]})],1),n("v-uni-view",[t._v("机票预订")])],1),n("v-uni-view",{staticClass:"flex-sub text-center padding-tb",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onShike.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"flex justify-center margin-bottom-xs"},[n("v-uni-view",{staticClass:"bg-img oper-img border-radius-sm",style:[{backgroundImage:"url("+t.btnIcon.shikebiao+")"}]})],1),n("v-uni-view",[t._v("航班时刻表")])],1)],1)],1),n("v-uni-view",{staticClass:"padding-sm"},[n("v-uni-view",{staticClass:"margin-bottom"},[n("v-uni-view",{staticClass:"margin-bottom-sm text-lg flex align-center"},[n("v-uni-view",{staticClass:"title-dec margin-right-xs"},[n("v-uni-text",{staticClass:"icon-feiji"})],1),n("v-uni-view",[t._v("新开航线")])],1),n("v-uni-view",{staticClass:"bg-white padding-sm border-radius-sm"},[n("v-uni-view",{staticClass:"li-item flex"},[n("v-uni-view",{staticClass:"item-dot"},[n("v-uni-text",{staticClass:"icon-dian"})],1),n("v-uni-view",[t._v("1月14日，岳阳机场将开通岳阳-张家界航班")])],1),n("v-uni-view",{staticClass:"li-item flex"},[n("v-uni-view",{staticClass:"item-dot"},[n("v-uni-text",{staticClass:"icon-dian"})],1),n("v-uni-view",[t._v("1月14日，岳阳机场将开通岳阳-大兴航班")])],1)],1)],1),n("v-uni-view",{staticClass:"margin-bottom"},[n("v-uni-view",{staticClass:"margin-bottom-sm text-lg flex align-center"},[n("v-uni-view",{staticClass:"title-dec margin-right-xs"},[n("v-uni-text",{staticClass:"icon-lingdang"})],1),n("v-uni-view",[t._v("延误提示")])],1),n("v-uni-view",{staticClass:"bg-white padding-sm border-radius-sm"},[n("v-uni-view",{staticClass:"li-item flex"},[n("v-uni-view",{staticClass:"item-dot"},[n("v-uni-text",{staticClass:"icon-dian"})],1),n("v-uni-view",[t._v("青岛区域航班延误黄色预警提示：8月28日，青岛区域预计08:00至12:00受雷雨天气影响，通行能力下降30%左右。")])],1),n("v-uni-view",{staticClass:"li-item flex"},[n("v-uni-view",{staticClass:"item-dot"},[n("v-uni-text",{staticClass:"icon-dian"})],1),n("v-uni-view",[t._v("广州终端区航班延误黄色预警提示：8月28日，广州终端区预计12:00至18:00受雷雨天气影响，通行能力下降20%左右。")])],1)],1)],1)],1)],1)},o=[]},b849:function(t,e,n){t.exports=n.p+"static/img/banner.5a5ac9cd.jpg"},b963:function(t,e,n){"use strict";var i=n("986d"),r=n.n(i);r.a},cfe9:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.bg-banner[data-v-97de933e]{overflow:hidden}.bg-banner[data-v-97de933e]:before{display:block;content:"";width:100%;margin-bottom:44.44%}.oper-img[data-v-97de933e]{width:%?80?%;height:%?80?%}.title-dec[data-v-97de933e]{width:%?50?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?120?%;background-color:var(--orange);color:#fff}.li-item[data-v-97de933e]{font-size:var(--text-sm)}.li-item + .li-item[data-v-97de933e]{margin-top:%?20?%}.item-dot[data-v-97de933e]{color:var(--blue)}',""]),t.exports=e},d416:function(t,e,n){t.exports=n.p+"static/img/01.4632e8d2.png"},df73:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("5530")),o=i(n("1da1")),a=n("fa7d"),c=(0,a.promisify)(uni.showModal),s=!1,u={loading:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e4;s=!0,uni.showLoading({title:t||"数据加载中",mask:!0}),setTimeout((function(){s&&uni.hideLoading()}),e)},closeLoading:function(){s&&(uni.hideLoading(),s=!1)},closeAll:function(){uni.hideToast()},success:function(t,e){s=!1;var n=Object.assign({},{duration:2e3},e);uni.showToast({title:t,duration:n.duration,icon:"success"})},error:function(t,e){s=!1;var n=Object.assign({},{duration:5e3},e);uni.showToast({title:t||"请求失败",duration:n.duration,icon:"none"})},warning:function(t,e){s=!1;var n=Object.assign({},{duration:5e3},e);uni.showToast({title:t||"警告",duration:n.duration,icon:"none"})},info:function(t,e){s=!1;var n=Object.assign({},{duration:3e3},e);uni.showToast({title:t||"提示",duration:n.duration,icon:"none"})},alert:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"提示",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"我知道了";return c({title:e,content:t,showCancel:!1,confirmText:n})},confirm:function(t){var e=arguments;return(0,o.default)(regeneratorRuntime.mark((function n(){var i,o,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.length>1&&void 0!==e[1]?e[1]:"提示",o=e.length>2&&void 0!==e[2]?e[2]:{},n.next=4,c((0,r.default)({title:i,content:t},o));case 4:if(a=n.sent,s=a.confirm,s){n.next=8;break}throw new Error("取消");case 8:return n.abrupt("return",!0);case 9:case"end":return n.stop()}}),n)})))()}},l=u;e.default=l},e984:function(t,e,n){t.exports=n.p+"static/img/02.00d81326.png"},f75a:function(t,e,n){"use strict";n.r(e);var i=n("a1b5"),r=n("8069");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("b963");var a,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"97de933e",null,!1,i["a"],a);e["default"]=s.exports},fa7d:function(t,e,n){"use strict";function i(t){return function(){var e=arguments,n=this,i=!1;return new Promise((function(r,o){t.apply(n,[Object.assign({},e[0],{success:function(){i||(i=!0,r.apply(void 0,arguments))},failed:function(){i||(i=!0,o.apply(void 0,arguments))},complete:function(t){i||t.errMsg&&!t.errMsg.endsWith("ok")&&(i=!0,o(t))}}),[].slice.call(e,1)])}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.promisify=i,n("d3b7"),n("8a79"),n("fb6a")}}]);