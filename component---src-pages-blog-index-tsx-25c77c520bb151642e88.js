(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0vyq":function(e,t,r){},"14Xm":function(e,t,r){e.exports=r("cSMa")},"3BOr":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"],["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"]),o=l(["\n  font-weight: 100;\n  color: black;\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 1s step-end infinite;\n"],["\n  font-weight: 100;\n  color: black;\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 1s step-end infinite;\n"]),a=s(r("q1tI")),u=s(r("17x9")),i=r("fMHQ"),c=s(i);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=(0,i.keyframes)(n),p=c.default.span(o,f),d=function(e){var t=e.className;return a.default.createElement(p,{className:t},"|")};d.propTypes={className:u.default.string},d.defaultProps={className:""},t.default=d},"3RSX":function(e,t,r){"use strict";var n=r("Qfp6");e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},"5R+2":function(e,t){e.exports=function(e,t,r){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*n*r/t.length),a="";;)for(var u=e(o),i=o;i--;)if((a+=t[u[i]&n]||"").length===+r)return a}},"8oxB":function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var c,s=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=i(p);l=!0;for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run();f=-1,t=s.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new h(e,t)),1!==s.length||l||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Bpvx:function(e,t,r){"use strict";var n=r("Qfp6"),o=r("Pfkr"),a=r("3RSX"),u=r("n8Jw")||0;function i(){return o(u)}e.exports=i,e.exports.generate=i,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return u=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=a},CR0S:function(e,t,r){"use strict";var n,o="object"==typeof window&&(window.crypto||window.msCrypto);n=o&&o.getRandomValues?function(e){return o.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],r=0;r<e;r++)t.push(Math.floor(256*Math.random()));return t},e.exports=n},G8ry:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("q1tI"),a=(n=o)&&n.__esModule?n:{default:n};var u=function(){return a.default.createElement("noscript",null)};u.updateCursor=function(e,t){var r=t.count,n=t.delay,o=t.speed;return Object.assign({},e,{numToErase:r,preEraseLineNum:e.lineNum,speed:o>0?o:e.speed,delay:n>0?e.delay+n:e.delay,step:"line"})},u.getName=function(){return"Reset"},t.default=u},LJc4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("q1tI"),a=(n=o)&&n.__esModule?n:{default:n};var u=function(){return a.default.createElement("noscript",null)};u.updateCursor=function(e,t){var r=t.ms;return Object.assign({},e,{speed:r})},u.getName=function(){return"Speed"},t.default=u},Pfkr:function(e,t,r){"use strict";var n,o,a=r("vZIR");r("Qfp6");e.exports=function(e){var t="",r=Math.floor(.001*(Date.now()-1567752802062));return r===o?n++:(n=0,o=r),t+=a(7),t+=a(e),n>0&&(t+=a(n)),t+=a(r)}},Qfp6:function(e,t,r){"use strict";var n,o,a,u=r("fqyn"),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){a=!1}function s(e){if(e){if(e!==n){if(e.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,r){return t!==r.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,c()}}else n!==i&&(n=i,c())}function l(){return a||(a=function(){n||s(i);for(var e,t=n.split(""),r=[],o=u.nextValue();t.length>0;)o=u.nextValue(),e=Math.floor(o*t.length),r.push(t.splice(e,1)[0]);return r.join("")}())}e.exports={get:function(){return n||i},characters:function(e){return s(e),n},seed:function(e){u.seed(e),o!==e&&(c(),o=e)},lookup:function(e){return l()[e]},shuffled:l}},"Viy+":function(e,t,r){},XVVG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("q1tI"),a=(n=o)&&n.__esModule?n:{default:n};var u=function(){return a.default.createElement("noscript",null)};u.updateCursor=function(e,t){var r=t.ms;return Object.assign({},e,{delay:e.delay+r})},u.getName=function(){return"Delay"},t.default=u},bQgK:function(e,t,r){(function(t){(function(){var r,n,o,a,u,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(r()-u)/1e6},n=t.hrtime,a=(r=function(){var e;return 1e9*(e=n())[0]+e[1]})(),i=1e9*t.uptime(),u=a-i):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,r("8oxB"))},cSMa:function(e,t,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r("u4eC"),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(u){n.regeneratorRuntime=void 0}},fqyn:function(e,t,r){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},"j/HY":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Speed=t.Reset=t.Delay=t.Cursor=t.Backspace=void 0;var n=r("plls");Object.defineProperty(t,"Backspace",{enumerable:!0,get:function(){return s(n).default}});var o=r("3BOr");Object.defineProperty(t,"Cursor",{enumerable:!0,get:function(){return s(o).default}});var a=r("XVVG");Object.defineProperty(t,"Delay",{enumerable:!0,get:function(){return s(a).default}});var u=r("G8ry");Object.defineProperty(t,"Reset",{enumerable:!0,get:function(){return s(u).default}});var i=r("LJc4");Object.defineProperty(t,"Speed",{enumerable:!0,get:function(){return s(i).default}});var c=s(r("xVvY"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=c.default},je4i:function(e,t,r){"use strict";e.exports=r("Bpvx")},n8Jw:function(e,t,r){"use strict";e.exports=0},orcf:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCircularReplacer=t.replaceTreeText=t.extractText=t.randomize=t.gaussianRandomInRange=t.randomInRange=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r("q1tI"),a=i(o),u=i(r("je4i"));function i(e){return e&&e.__esModule?e:{default:e}}var c=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],s=function e(t){return t.reduce((function(t,r){return t.concat(Array.isArray(r)?o.Children.toArray(e(r)):o.Children.toArray(r))}),[])},l=function(e){return e.filter((function(e){return void 0!==e}))},f=function(e){return["Backspace","Delay","Speed","Reset"].some((function(t){return e.type&&e.type.getName&&e.type.getName()===t}))},p=t.randomInRange=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},d=t.gaussianRandomInRange=function(e,t){for(var r=p(e,t),n=0;n<5;n++)r+=p(e,t);return Math.floor(r/6)};t.randomize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;return d(e+e*t,e-e*t)},t.extractText=function(){var e=function e(t){return f(t)?t:a.default.isValidElement(t)?-1!==c.indexOf(t.type)?"\n":o.Children.map(t.props.children,(function(t){return e(t)})):Array.isArray(t)?t.map((function(t){return e(t)})):String(t)},t=e.apply(void 0,arguments);return Array.isArray(t)?l(s(t)):l([t])},t.replaceTreeText=function(e,t,r,n){return function e(t,i){if(!(i.length<1||f(t)))return a.default.isValidElement(t)?-1!==c.indexOf(t.type)?1===i.length?o.Children.toArray([""===i.shift()?void 0:t,n?null:r]):""===i.shift()?void 0:t:a.default.createElement(t.type,Object.assign({},t.props,{key:t.key||"Typing."+u.default.generate()}),l(o.Children.toArray(t.props.children).map((function(t){return e(t,i)})))):Array.isArray(t)?l(t.map((function(t){return e(t,i)}))):1===i.length?o.Children.toArray([i.shift(),n?null:r]):i.shift()||""}(e,t.slice())},t.getCircularReplacer=function(){var e=new WeakSet;return function(t,r){if("object"===(void 0===r?"undefined":n(r))&&null!==r){if(e.has(r))return;try{e.add(r)}catch(o){}}return r}}},plls:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("q1tI"),a=(n=o)&&n.__esModule?n:{default:n};var u=function(){return a.default.createElement("noscript",null)};u.updateCursor=function(e,t){var r=t.speed,n=t.count,o=t.delay;return Object.assign({},e,{numToErase:n,preEraseLineNum:e.lineNum,speed:r>0?r:e.speed,delay:o>0?e.delay+o:e.delay})},u.getName=function(){return"Backspace"},t.default=u},thP6:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("JoNJ"),u=(r("0vyq"),r("j/HY")),i=r.n(u),c=function(e){var t=e.text,r=e.chars,n=e.clean,a=e.otherText;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,t,n?o.a.createElement(i.a.Backspace,{count:r}):{},a))},s=(r("Viy+"),function(e){var t=e.title,r=e.description,n=e.day,a=e.month,u=e.year,i=e.author,c=e.src,s=e.href;return o.a.createElement("div",{id:"post-box"},o.a.createElement("a",{href:s},o.a.createElement("header",null,o.a.createElement("h1",null,t),o.a.createElement("img",{src:c,alt:""})),o.a.createElement("p",null,r),o.a.createElement("footer",null,o.a.createElement("span",null,"por ",i),n,"/",a,"/",u)))}),l=r("t43J"),f=r("GyhE");t.default=function(){return o.a.createElement("div",{id:"blog"},o.a.createElement(a.a,null),o.a.createElement("main",null,o.a.createElement("div",{className:"presentation"},o.a.createElement("img",{src:"https://blush.ly/tEgp2Tsot/p",alt:"Eduarda está digitando..."}),o.a.createElement("div",{className:"text"},o.a.createElement("h2",null,"Eduarda está digitando..."),o.a.createElement(c,{text:"Um blog sobre tecnologia, empoderamento, aletoriedades, interesses, min",otherText:" e outras coisas.",clean:!0,chars:47}))),o.a.createElement("div",{className:"post-list"},o.a.createElement(s,{href:"/blog/eu-escolhi-computacao",title:"Eu escolhi Computação",description:"Como que eu acabei parando em Ciência da Computação?",day:"21",month:"08",year:"2020",author:"Maria Eduarda de Azevedo",src:l.a.random}))),o.a.createElement(f.a,null))}},u4eC:function(e,t){!function(t){"use strict";var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag",c="object"==typeof e,s=t.regeneratorRuntime;if(s)c&&(e.exports=s);else{(s=t.regeneratorRuntime=c?e.exports:{}).wrap=m;var l={},f={};f[a]=function(){return this};var p=Object.getPrototypeOf,d=p&&p(p(O([])));d&&d!==r&&n.call(d,a)&&(f=d);var h=x.prototype=v.prototype=Object.create(f);g.prototype=h.constructor=x,x.constructor=g,x[i]=g.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(h),e},s.awrap=function(e){return{__await:e}},w(b.prototype),b.prototype[u]=function(){return this},s.AsyncIterator=b,s.async=function(e,t,r,n){var o=new b(m(e,t,r,n));return s.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(h),h[i]="Generator",h[a]=function(){return this},h.toString=function(){return"[object Generator]"},s.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return u.type="throw",u.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var i=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var u=a?a.completion:{};return u.type=e,u.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}}}function m(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),u=new N(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var u=r.delegate;if(u){var i=E(u,r);if(i){if(i===l)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=y(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,u),a}function y(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function v(){}function g(){}function x(){}function w(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function b(e){var t;this._invoke=function(r,o){function a(){return new Promise((function(t,a){!function t(r,o,a,u){var i=y(e[r],e,o);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,a,u)}),(function(e){t("throw",e,a,u)})):Promise.resolve(s).then((function(e){c.value=e,a(c)}),u)}u(i.arg)}(r,o,t,a)}))}return t=t?t.then(a,a):a()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=y(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},vZIR:function(e,t,r){"use strict";var n=r("Qfp6"),o=r("CR0S"),a=r("5R+2");e.exports=function(e){for(var t,r=0,u="";!t;)u+=a(o,n.get(),1),t=e<Math.pow(16,r+1),r++;return u}},xEkU:function(e,t,r){(function(t){for(var n=r("bQgK"),o="undefined"==typeof window?t:window,a=["moz","webkit"],u="AnimationFrame",i=o["request"+u],c=o["cancel"+u]||o["cancelRequest"+u],s=0;!i&&s<a.length;s++)i=o[a[s]+"Request"+u],c=o[a[s]+"Cancel"+u]||o[a[s]+"CancelRequest"+u];if(!i||!c){var l=0,f=0,p=[];i=function(e){if(0===p.length){var t=n(),r=Math.max(0,1e3/60-(t-l));l=r+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(r){setTimeout((function(){throw r}),0)}}),Math.round(r))}return p.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return i.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=i,e.cancelAnimationFrame=c}}).call(this,r("yLpj"))},xVvY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(r("14Xm")),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r("q1tI"),u=m(a),i=m(r("17x9")),c=m(r("xEkU")),s=r("orcf"),l=m(r("plls")),f=m(r("G8ry")),p=m(r("XVVG")),d=m(r("LJc4")),h=m(r("3BOr"));function m(e){return e&&e.__esModule?e:{default:e}}function y(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function v(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(o,a){try{var u=t[o](a),i=u.value}catch(c){return void r(c)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(i)}("next")}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var w=function(e){function t(){var e,r,o,a,u=this;g(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return r=o=x(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={isFinished:!1,text:[]},o.updateState=(a=v(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.hasMounted){e.next=2;break}return e.abrupt("return",new Promise((function(e){o.setState(t,e)})));case 2:case"end":return e.stop()}}),e,u)}))),function(e){return a.apply(this,arguments)}),o.resetState=v(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.updateState({toType:(0,s.extractText)(o.props.children),cursor:{lineNum:0,charPos:0,numToErase:0,preEraseLineNum:0,delay:o.props.startDelay,speed:o.props.speed,step:"char"}}));case 1:case"end":return e.stop()}}),e,u)}))),o.beginTyping=v(n.default.mark((function e(){var t;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object.assign({},o.state.cursor),!(o.state.toType.length>0||t.numToErase>0)){e.next=10;break}return e.next=4,o.props.onBeforeType(o.state.text);case 4:return e.next=6,o.type();case 6:return e.next=8,o.props.onAfterType(o.state.text);case 8:e.next=18;break;case 10:return e.next=12,o.props.onFinishedTyping();case 12:if(!o.props.loop){e.next=17;break}return e.next=15,o.resetState();case 15:e.next=18;break;case 17:return e.abrupt("return",o.updateState({isFinished:!0}));case 18:if(!o.hasMounted){e.next=20;break}return e.abrupt("return",o.beginTyping());case 20:case"end":return e.stop()}}),e,u)}))),o.type=v(n.default.mark((function e(){var t,r;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[].concat(y(o.state.toType)),r=Object.assign({},o.state.cursor);t&&t[0]&&t[0].type&&t[0].type.updateCursor&&r.numToErase<1;)r=t[0].type.updateCursor(r,t[0].props),t.shift();return e.next=5,o.updateState({cursor:r,toType:t});case 5:return e.abrupt("return",o.animateNextStep());case 6:case"end":return e.stop()}}),e,u)}))),o.animateNextStep=v(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(v(n.default.mark((function t(){var r,a,i;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.state,a=r.cursor,i=r.toType,t.next=3,o.updateState({cursor:Object.assign({},a,{delay:0})});case 3:if(!("char"===a.step&&a.numToErase<1)){t.next=9;break}if(!(i.length>0)){t.next=7;break}return t.next=7,o.typeCharacter();case 7:t.next=11;break;case 9:return t.next=11,o.erase();case 11:e();case 12:case"end":return t.stop()}}),t,u)}))),o.state.cursor.delay)})));case 1:case"end":return e.stop()}}),e,u)}))),o.typeCharacter=v(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=v(n.default.mark((function e(t){var r,a,i;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[].concat(y(o.state.toType)),a=[].concat(y(o.state.text)),i=Object.assign({},o.state.cursor),a.length-1<i.lineNum&&(a[i.lineNum]=""),a[i.lineNum]+=r[0][i.charPos],i.charPos+=1,r[0].length-1<i.charPos&&(i.lineNum+=1,i.charPos=0,r.shift()),e.next=9,o.updateState({cursor:i,text:a,toType:r});case 9:setTimeout(t,(0,s.randomize)(i.speed));case 10:case"end":return e.stop()}}),e,u)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,u)}))),o.erase=v(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=v(n.default.mark((function e(t){var r,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[].concat(y(o.state.text)),a=Object.assign({},o.state.cursor);case 2:if(!(a.lineNum>r.length-1||a.charPos<0)){e.next=9;break}if(a.lineNum-=1,!(a.lineNum<0)){e.next=6;break}return e.abrupt("break",9);case 6:a.charPos=r[a.lineNum].length?r[a.lineNum].length-1:0,e.next=2;break;case 9:return"char"===a.step&&a.lineNum>=0?r[a.lineNum]=r[a.lineNum].substr(0,r[a.lineNum].length-1):a.numToErase>0?r[a.lineNum]="":r.length=0,a.charPos-=1,a.numToErase-=1,a.numToErase<1&&(a.lineNum=a.preEraseLineNum,a.charPos=0,a.step="char"),e.next=15,o.updateState({cursor:a,text:r});case 15:setTimeout(t,(0,s.randomize)(a.speed));case 16:case"end":return e.stop()}}),e,u)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,u)}))),x(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.children;void 0!==t&&JSON.stringify(t,(0,s.getCircularReplacer)())!==JSON.stringify(e.children,(0,s.getCircularReplacer)())&&this.resetState()}},{key:"componentDidMount",value:function(){var e=this;this.hasMounted=!0,this.resetState().then(v(n.default.mark((function t(){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.onStartedTyping();case 2:(0,c.default)(e.beginTyping);case 3:case"end":return t.stop()}}),t,e)}))))}},{key:"componentWillUnmount",value:function(){this.hasMounted=!1}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.cursorClassName,o=e.hideCursor,a=this.state,i=a.isFinished,c=a.text,l=this.props.cursor||u.default.createElement(h.default,{className:n}),f=(0,s.replaceTreeText)(t,c,l,i||o);return u.default.createElement("div",{className:r},f)}}]),t}(a.Component);w.propTypes={children:i.default.node.isRequired,className:i.default.string,cursor:i.default.node,cursorClassName:i.default.string,speed:i.default.number,startDelay:i.default.number,loop:i.default.bool,onStartedTyping:i.default.func,onBeforeType:i.default.func,onAfterType:i.default.func,onFinishedTyping:i.default.func},w.defaultProps={className:"",cursorClassName:"",speed:50,startDelay:0,loop:!1,onStartedTyping:function(){},onBeforeType:function(){},onAfterType:function(){},onFinishedTyping:function(){}},w.Backspace=l.default,w.Reset=f.default,w.Delay=p.default,w.Speed=d.default,w.Cursor=h.default,t.default=w},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-25c77c520bb151642e88.js.map