if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("EventListenerImplForBlue",["Event","TimeSlice","emptyFunction","setImmediateAcrossTransitions"],(function(a,b,c,d,e,f,g){function h(a,b,d,e){var f=c("TimeSlice").guard(d,"EventListener capture "+b);if(a.addEventListener){a.addEventListener(b,f,e);return{remove:function(){a.removeEventListener(b,f,e)}}}else return{remove:c("emptyFunction")}}a={listen:function(a,b,d){return c("Event").listen(a,b,d)},capture:function(a,b,c){return h(a,b,c,!0)},captureWithPassiveFlag:function(a,b,c,d){return h(a,b,c,{passive:d,capture:!0})},bubbleWithPassiveFlag:function(a,b,c,d){return h(a,b,c,{passive:d,capture:!1})},registerDefault:function(a,b){var d,e=c("Event").listen(document.documentElement,a,f,c("Event").Priority._BUBBLE);function f(){g(),d=c("Event").listen(document,a,b),c("setImmediateAcrossTransitions")(g)}function g(){d&&d.remove(),d=null}return{remove:function(){g(),e&&e.remove(),e=null}}},suppress:function(a){c("Event").kill(a)}};b=a;g["default"]=b}),98);
__d("EventListener",["cr:1353359"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1353359")}),98);
__d("forEachObject",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function a(a,b,c){for(var d in a){var e=d;g.call(a,e)&&b.call(c,a[e],e,a)}}f["default"]=a}),66);
__d("JSResource",["JSResourceReferenceImpl"],(function(a,b,c,d,e,f,g){var h={};function i(a,b){h[a]=b}function j(a){return h[a]}function a(a){a=a;var b=j(a);if(b)return b;b=new(c("JSResourceReferenceImpl"))(a);i(a,b);return b}a.loadAll=c("JSResourceReferenceImpl").loadAll;g["default"]=a}),98);
__d("LogHistory",[],(function(a,b,c,d,e,f){var g=500,h={},i=[];function j(a,b,c,d){var e=d[0];if(typeof e!=="string"||d.length!==1)return;i.push({date:Date.now(),level:a,category:b,event:c,args:e});i.length>g&&i.shift()}var k=function(){function a(a){this.category=a}var b=a.prototype;b.debug=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("debug",this.category,a,c);return this};b.log=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("log",this.category,a,c);return this};b.warn=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("warn",this.category,a,c);return this};b.error=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("error",this.category,a,c);return this};return a}();function a(a){h[a]||(h[a]=new k(a));return h[a]}function b(){return i}function c(){i.length=0}function d(a){return a.map(function(a){var b=/\d\d:\d\d:\d\d/.exec(new Date(a.date).toString());return[b&&b[0],a.level,a.category,a.event,a.args].join(" | ")}).join("\n")}f.getInstance=a;f.getEntries=b;f.clearEntries=c;f.formatEntries=d}),66);
__d("SchedulerFeatureFlags",["gkx","qex"],(function(a,b,c,d,e,f,g){var h;a=!0;b=c("gkx")("1099893");e=(d=c("qex")._("648"))!=null?d:c("gkx")("5541");f=e;d=5;h=(h=c("qex")._("650"))!=null?h:10;c=(c=c("qex")._("651"))!=null?c:10;g.enableSchedulerDebugging=a;g.enableProfiling=b;g.enableIsInputPending=e;g.enableIsInputPendingContinuous=f;g.frameYieldMs=d;g.continuousYieldMs=h;g.maxYieldMs=c}),98);
__d("Scheduler-dev.classic",["SchedulerFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("Scheduler-profiling.classic",["SchedulerFeatureFlags"],(function(b,c,d,e,f,g){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());var h=c("SchedulerFeatureFlags").enableIsInputPending,i=c("SchedulerFeatureFlags").enableSchedulerDebugging,j=c("SchedulerFeatureFlags").enableProfiling;d=c("SchedulerFeatureFlags").enableIsInputPendingContinuous;var k=c("SchedulerFeatureFlags").frameYieldMs,l=c("SchedulerFeatureFlags").continuousYieldMs,m=c("SchedulerFeatureFlags").maxYieldMs;function n(b,c){var d=b.length;b.push(c);a:for(;0<d;){var e=d-1>>>1,f=b[e];if(0<q(f,c))b[e]=c,b[d]=f,d=e;else break a}}function o(b){return 0===b.length?null:b[0]}function p(b){if(0===b.length)return null;var c=b[0],d=b.pop();if(d!==c){b[0]=d;a:for(var e=0,f=b.length,g=f>>>1;e<g;){var h=2*(e+1)-1,i=b[h],j=h+1,k=b[j];if(0>q(i,d))j<f&&0>q(k,i)?(b[e]=k,b[j]=d,e=j):(b[e]=i,b[h]=d,e=h);else if(j<f&&0>q(k,d))b[e]=k,b[j]=d,e=j;else break a}}return c}function q(b,c){var d=b.sortIndex-c.sortIndex;return 0!==d?d:b.id-c.id}var r=0,s=0,t=0,u=null,v=null,w=0;function x(b){if(null!==v){var c=w;w+=b.length;if(w+1>t){t*=2;if(524288<t){y();return}var d=new Int32Array(4*t);d.set(v);u=d.buffer;v=d}v.set(b,c)}}function b(){t=131072,u=new ArrayBuffer(4*t),v=new Int32Array(u),w=0}function y(){var b=u;t=0;v=u=null;w=0;return b}if("object"===typeof performance&&"function"===typeof performance.now){var z=performance;g.unstable_now=function(){return z.now()}}else{var A=Date,ba=A.now();g.unstable_now=function(){return A.now()-ba}}var B=[],C=[],ca=1,D=!1,E=null,F=3,G=!1,H=!1,I=!1,J="function"===typeof setTimeout?setTimeout:null,K="function"===typeof clearTimeout?clearTimeout:null,L="undefined"!==typeof setImmediate?setImmediate:null,M="undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending?navigator.scheduling.isInputPending.bind(navigator.scheduling):null,da={includeContinuous:d};function N(b){for(var c=o(C);null!==c;){if(null===c.callback)p(C);else if(c.startTime<=b)p(C),c.sortIndex=c.expirationTime,n(B,c),j&&(j&&null!==v&&x([1,1e3*b,c.id,c.priorityLevel]),c.isQueued=!0);else break;c=o(C)}}function O(b){I=!1;N(b);if(!H)if(null!==o(B))H=!0,$(P);else{var c=o(C);null!==c&&aa(O,c.startTime-b)}}function P(c,b){j&&j&&null!==v&&x([8,1e3*b,s]);H=!1;I&&(I=!1,K(T),T=-1);G=!0;var d=F;try{if(j)try{return Q(c,b)}catch(b){if(null!==E){var e=g.unstable_now();j&&null!==v&&x([3,1e3*e,E.id]);E.isQueued=!1}throw b}else return Q(c,b)}finally{E=null,F=d,G=!1,j&&(c=g.unstable_now(),j&&(s++,null!==v&&x([7,1e3*c,s])))}}function Q(c,b){N(b);for(E=o(B);!(null===E||i&&D||E.expirationTime>b&&(!c||X()));){var d=E.callback;if("function"===typeof d){E.callback=null;F=E.priorityLevel;var e=E.expirationTime<=b;if(j){var f=E;j&&(r++,null!==v&&x([5,1e3*b,f.id,r]))}d=d(e);b=g.unstable_now();"function"===typeof d?(E.callback=d,j&&j&&null!==v&&x([6,1e3*b,E.id,r])):(j&&(j&&null!==v&&x([2,1e3*b,E.id]),E.isQueued=!1),E===o(B)&&p(B));N(b)}else p(B);E=o(B)}if(null!==E)return!0;c=o(C);null!==c&&aa(O,c.startTime-b);return!1}var R=!1,S=null,T=-1,U=k,V=-1,W=!1;function X(){var b=g.unstable_now()-V;if(b<U)return!1;if(h){if(W)return!0;if(b<l){if(null!==M)return M()}else if(b<m&&null!==M)return M(da)}return!0}function Y(){if(null!==S){var b=g.unstable_now();V=b;var c=!0;try{c=S(!0,b)}finally{c?Z():(R=!1,S=null)}}else R=!1;W=!1}var Z;if("function"===typeof L)Z=function(){L(Y)};else if("undefined"!==typeof MessageChannel){e=new MessageChannel();var ea=e.port2;e.port1.onmessage=Y;Z=function(){ea.postMessage(null)}}else Z=function(){J(Y,0)};function $(b){S=b,R||(R=!0,Z())}function aa(b,c){T=J(function(){b(g.unstable_now())},c)}f=j?{startLoggingProfilingEvents:b,stopLoggingProfilingEvents:y}:null;g.unstable_IdlePriority=5;g.unstable_ImmediatePriority=1;g.unstable_LowPriority=4;g.unstable_NormalPriority=3;g.unstable_Profiling=f;g.unstable_UserBlockingPriority=2;g.unstable_cancelCallback=function(b){if(j&&b.isQueued){var c=g.unstable_now();j&&null!==v&&x([4,1e3*c,b.id]);b.isQueued=!1}b.callback=null};g.unstable_continueExecution=function(){D=!1,H||G||(H=!0,$(P))};g.unstable_forceFrameRate=function(b){0>b||125<b?!1:U=0<b?Math.floor(1e3/b):k};g.unstable_getCurrentPriorityLevel=function(){return F};g.unstable_getFirstCallbackNode=function(){return o(B)};g.unstable_next=function(b){switch(F){case 1:case 2:case 3:var c=3;break;default:c=F}var d=F;F=c;try{return b()}finally{F=d}};g.unstable_pauseExecution=function(){D=!0};g.unstable_requestPaint=function(){h&&void 0!==navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&(W=!0)};g.unstable_runWithPriority=function(b,c){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var d=F;F=b;try{return c()}finally{F=d}};g.unstable_scheduleCallback=function(b,c,d){var e=g.unstable_now();"object"===typeof d&&null!==d?(d=d.delay,d="number"===typeof d&&0<d?e+d:e):d=e;switch(b){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}f=d+f;b={id:ca++,callback:c,priorityLevel:b,startTime:d,expirationTime:f,sortIndex:-1};j&&(b.isQueued=!1);d>e?(b.sortIndex=d,n(C,b),null===o(B)&&b===o(C)&&(I?(K(T),T=-1):I=!0,aa(O,d-e))):(b.sortIndex=f,n(B,b),j&&(j&&null!==v&&x([1,1e3*e,b.id,b.priorityLevel]),b.isQueued=!0),H||G||(H=!0,$(P)));return b};g.unstable_shouldYield=X;g.unstable_wrapCallback=function(b){var c=F;return function(){var d=F;F=c;try{return b.apply(this,arguments)}finally{F=d}}};typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=="undefined"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())}),null);
__d("SchedulerFb-Internals_DO_NOT_USE",["Scheduler-dev.classic","Scheduler-profiling.classic","ifRequireable","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f){"use strict";a.requestAnimationFrame===void 0&&(a.requestAnimationFrame=b("requestAnimationFramePolyfill"));var g;g=b("Scheduler-profiling.classic");e.exports={unstable_ImmediatePriority:g.unstable_ImmediatePriority,unstable_UserBlockingPriority:g.unstable_UserBlockingPriority,unstable_NormalPriority:g.unstable_NormalPriority,unstable_LowPriority:g.unstable_LowPriority,unstable_IdlePriority:g.unstable_IdlePriority,unstable_getCurrentPriorityLevel:g.unstable_getCurrentPriorityLevel,unstable_runWithPriority:g.unstable_runWithPriority,unstable_now:g.unstable_now,unstable_scheduleCallback:function(a,c,d){var e=b("ifRequireable")("TimeSlice",function(a){return a.guard(c,"unstable_scheduleCallback",{propagationType:a.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return c});a=g.unstable_scheduleCallback(a,e,d);return a},unstable_cancelCallback:function(a){return g.unstable_cancelCallback(a)},unstable_wrapCallback:function(a){var c=b("ifRequireable")("TimeSlice",function(b){return b.guard(a,"unstable_wrapCallback",{propagationType:b.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return a});return g.unstable_wrapCallback(c)},unstable_pauseExecution:function(){return g.unstable_pauseExecution()},unstable_continueExecution:function(){return g.unstable_continueExecution()},unstable_shouldYield:g.unstable_shouldYield,unstable_requestPaint:g.unstable_requestPaint,unstable_forceFrameRate:g.unstable_forceFrameRate,unstable_Profiling:g.unstable_Profiling}}),null);
__d("JSScheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";var g={unstable_Immediate:(c=b("SchedulerFb-Internals_DO_NOT_USE")).unstable_ImmediatePriority,unstable_UserBlocking:c.unstable_UserBlockingPriority,unstable_Normal:c.unstable_NormalPriority,unstable_Low:c.unstable_LowPriority,unstable_Idle:c.unstable_IdlePriority},h=!1,i=c.unstable_scheduleCallback,j=c.unstable_cancelCallback;a.__fbNativeSetTimeout||a.setTimeout;a.__fbNativeClearTimeout||a.clearTimeout;var k={priorities:g,shouldYield:b("SchedulerFb-Internals_DO_NOT_USE").unstable_shouldYield,getCurrentPriorityLevel:b("SchedulerFb-Internals_DO_NOT_USE").unstable_getCurrentPriorityLevel,runWithPriority:b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority,runWithPriority_DO_NOT_USE:b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority,defer:function(a){var b=k.getCurrentPriorityLevel();return i(b,a)},getCallbackScheduler:function(){var a=k.getCurrentPriorityLevel();return function(b){return i(a,b)}},getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE:function(){var a=k.getCurrentPriorityLevel();return function(c){return i(g.unstable_UserBlocking,function(){b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(a,c)})}},deferUserBlockingRunAtCurrentPri_DO_NOT_USE:function(a){var c=k.getCurrentPriorityLevel();return i(g.unstable_UserBlocking,function(){b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(c,a)})},scheduleImmediatePriCallback:function(a){return i(g.unstable_Immediate,a)},scheduleUserBlockingPriCallback:function(a){return i(g.unstable_UserBlocking,a)},scheduleNormalPriCallback:function(a){return i(g.unstable_Normal,a)},scheduleLoggingPriCallback:function(a){return i(g.unstable_Low,a)},scheduleSpeculativeCallback:function(a){return i(g.unstable_Idle,a)},cancelCallback:function(a){j(a)},scheduleDelayedCallback_DO_NOT_USE:function(a,b,c){a=i(a,c,{delay:b});return a},cancelDelayedCallback_DO_NOT_USE:function(a){a=a;return j(a)},startEventProfiling:function(){var a;a=(a=b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling)==null?void 0:a.startLoggingProfilingEvents;typeof a=="function"&&a()},stopEventProfiling:function(){var a;a=(a=b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling)==null?void 0:a.stopLoggingProfilingEvents;return typeof a=="function"?a():null},makeSchedulerGlobalEntry:function(c,d){c===void 0&&(c=null),d===void 0&&(d=!1),c!==null&&c!==void 0&&b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c),d&&k.startEventProfiling(),a.ScheduleJSWork=function(a){return function(){for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];h?a.apply(void 0,c):k.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function(){h=!0;try{a.apply(void 0,c)}finally{h=!1}})}}}};e.exports=k}),null);