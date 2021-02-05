(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


// import navigateTo from 'uni-helpers/navigate-to'

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"weixiaoshi","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 13:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 14:
/*!*********************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/store/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 15));


var _user = _interopRequireDefault(__webpack_require__(/*! @/store/modules/user.js */ 16));
var _vodClassify = _interopRequireDefault(__webpack_require__(/*! @/store/modules/vod-classify.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);var _default =



new _vuex.default.Store({
  state: {
    txtLoad: '没有数据了',
    navHeight: 0 },

  mutations: {
    // 初始化登录状态
    setNavHeight: function setNavHeight(state, data) {
      console.log(data);
      state.navHeight = data;
      console.log(state.navHeight);

    } },


  modules: {
    user: _user.default,
    vodClassify: _vodClassify.default } });exports.default = _default;

/***/ }),

/***/ 15:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 16:
/*!****************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/store/modules/user.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));var api = _interopRequireWildcard(__webpack_require__(/*! @/common/lib/api.js */ 17));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  state: {
    // 登录状态
    userInfo: '',
    token: '' },

  mutations: {
    // 初始化登录状态
    initUser: function initUser(state) {
      var userInfo = uni.getStorageSync('userInfo');
      var token = uni.getStorageSync('token');
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        state.userInfo = userInfo;
        state.token = JSON.parse(token);
      }

    } },


  actions: {
    // 微信授权登陆
    wxLogin: function wxLogin(_ref, callack) {var commit = _ref.commit;
      var systemInfo = uni.getSystemInfoSync();

      // 获取用户信息
      uni.login({
        provider: 'weixin',
        success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(loginRes) {var code;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                    code = loginRes.code;
                    uni.getUserInfo({
                      provider: 'weixin',
                      lang: "zh_CN",
                      success: function () {var _success2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(infoRes) {var data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                                    api.wxUserLogin({
                                      code: loginRes.code,
                                      userInfo: infoRes.userInfo,
                                      mobile: systemInfo.model + ' - ' + systemInfo.system }));case 2:data = _context.sent;

                                  if (data.code == 1) {
                                    uni.setStorageSync('userInfo', JSON.stringify(data.result));
                                    uni.setStorageSync('token', JSON.stringify(data.token));
                                    // this.$store.commit('initUser')
                                    commit('initUser');
                                    callack && callack();

                                    // this.getCollectVod()
                                  } else {
                                    uni.setStorageSync('userInfo', '');
                                    uni.setStorageSync('token', '');
                                  }case 4:case "end":return _context.stop();}}}, _callee);}));function success(_x2) {return _success2.apply(this, arguments);}return success;}() });case 2:case "end":return _context2.stop();}}}, _callee2);}));function success(_x) {return _success.apply(this, arguments);}return success;}() });









    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 17:
/*!************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/common/lib/api.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Hregister = exports.h5AuthCode = exports.getScoreVod = exports.test = exports.hotSearch = exports.feedbackIssue = exports.getCollectVod = exports.isCollectVod = exports.collectVod = exports.wxUserLogin = exports.getvodClassifyList = exports.getvodClassify = exports.getSearch = exports.getURL = exports.getVideoDatails = exports.indexClassify = exports.notice = exports.getslideshow = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



// 首页轮播图
var getslideshow = function getslideshow(options) {
  return _request.default.get('/slideshow', options);
};

// 获取首页公告
exports.getslideshow = getslideshow;var notice = function notice(options) {
  return _request.default.get('/notice', options);
};


// 获取首页更多热门
exports.notice = notice;var indexClassify = function indexClassify(options) {
  return _request.default.get('/indexClassify', options);
};


// 获取视频详情
exports.indexClassify = indexClassify;var getVideoDatails = function getVideoDatails(options) {
  return _request.default.get('/getVideoDatails', options);
};


// 特殊视频播放地址（后缀名）
exports.getVideoDatails = getVideoDatails;var getURL = function getURL(options) {
  return _request.default.get('/getURL', options);
};
// 搜索视频
exports.getURL = getURL;var getSearch = function getSearch(options) {
  return _request.default.get('/search', options);
};

// 获取视频分类选项
exports.getSearch = getSearch;var getvodClassify = function getvodClassify(options) {
  return _request.default.get('/getvodClassify', options);
};

// 视频类型筛选查询
exports.getvodClassify = getvodClassify;var getvodClassifyList = function getvodClassifyList(options) {
  return _request.default.get('/getvodClassifyList', options);
};

// 微信授权登录
exports.getvodClassifyList = getvodClassifyList;var wxUserLogin = function wxUserLogin(options) {
  return _request.default.post('/api/wxuser/login', options);
};


// 用户收藏影片
exports.wxUserLogin = wxUserLogin;var collectVod = function collectVod(options) {
  return _request.default.post('/api/wxuser/collectVod', options, {
    token: true });

};


// 获取是否用户收藏改影片
exports.collectVod = collectVod;var isCollectVod = function isCollectVod(options) {
  return _request.default.get('/api/wxuser/isCollectVod', options, {
    token: true });

};


// 获取用户收藏影片和播放记录
exports.isCollectVod = isCollectVod;var getCollectVod = function getCollectVod(options) {
  return _request.default.get('/api/wxuser/getCollectVod', options, {
    token: true });

};


// 反馈问题
exports.getCollectVod = getCollectVod;var feedbackIssue = function feedbackIssue(options) {
  return _request.default.post('/api/wxuser/feedbackIssue', options, {
    token: true });

};

// 热门搜索获取
exports.feedbackIssue = feedbackIssue;var hotSearch = function hotSearch(options) {
  return _request.default.get('/hotSearch', options);
};

// // 热门搜索获取
exports.hotSearch = hotSearch;var test = function test(options) {
  return _request.default.get('/test', options);
};



// 获取豆瓣评分
exports.test = test;var getScoreVod = function getScoreVod(options) {
  return _request.default.get('/getScoreVod', options);
};


// H5邮箱验证码获取
exports.getScoreVod = getScoreVod;var h5AuthCode = function h5AuthCode(options) {
  return _request.default.post('/api/wxuser/h5AuthCode', options, {
    withCredentials: true });

};

// H5账号注册
exports.h5AuthCode = h5AuthCode;var Hregister = function Hregister(options) {
  return _request.default.post('/api/wxuser/register', options);
};










/*  
   export default {
   	 getslideshow(options) {
   	  return req.get('/slideshow', options)
   	}
   }*/exports.Hregister = Hregister;

/***/ }),

/***/ 18:
/*!****************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/common/lib/request.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
//promise调用方式
var _default = {

  // 全局配置
  common: {
    // baseUrl:"http://192.168.43.95:3000",
    // baseUrl:"http://192.168.43.95:3000",
    // baseUrl:"http://42.192.125.82:3000",
    baseUrl: "http://127.0.0.1:3000",
    // baseUrl:"http://apis.cdjsw.cn/mock/15",

    header: {
      // 'Content-Type':'application/json;charset=UTF-8',
      'content-type': 'application/json'
      // 'Content-Type':'application/x-www-form-urlencoded',
    },
    data: {},
    method: 'GET',
    dataType: 'json' },





  // 请求 返回promise
  request: function request() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // 组织参数
    options.url = this.common.baseUrl + options.url;
    options.header = options.header || this.common.header;
    options.data = options.data || this.common.data;
    options.method = options.method || this.common.method;
    options.dataType = options.dataType || this.common.dataType;


    // token,需要上传token
    if (options.token) {
      options.header.token = _index.default.state.user.token;
      // 二次验证是否登录
      if (options.checkToken && !options.header.token) {
        uni.showToast({
          title: '请先登录',
          icon: 'none' });

        return uni.navigateTo({
          url: '/pages/login/login' });

      }
    }

    // 请求
    return new Promise(function (res, rej) {
      // 请求之前... todo
      uni.showLoading({
        title: '加载中...',
        mask: true });

      // 请求中...
      uni.request(_objectSpread(_objectSpread({},
      options), {}, {
        withCredentials: true,
        success: function success(result) {
          console.log(result);
          uni.hideLoading();
          // 返回原始数据
          if (options.native) {
            return res(result);
          }
          // 服务端失败
          if (result.statusCode != "200") {
            //console.log(result);
            if (options.toast !== false) {
              uni.showToast({
                title: result.data.msg || '服务端失败',
                icon: 'none' });

            }
          } else {
            if (result.data.code != 1) {
              uni.showToast({
                title: result.data.msg,
                icon: "none" });

              res(result.data);
              return;
            }
          }
          res(result.data);
        },
        fail: function fail(error) {
          uni.hideLoading();
          uni.showToast({
            title: error.errMsg || '请求失败',
            icon: 'none' });

          return rej();
        } }));

    });
  },
  // get请求
  get: function get(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options.url = url;
    options.data = data;
    options.method = 'GET';
    return this.request(options);
  },
  // post请求
  post: function post(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options.url = url;
    options.data = data;
    options.method = 'POST';
    return this.request(options);
  },
  // put请求
  put: function put(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options.url = url;
    options.data = data;
    options.method = 'put';
    return this.request(options);
  },
  // delete请求
  del: function del(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options.url = url;
    options.data = data;
    options.method = 'DELETE';
    return this.request(options);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 19:
/*!************************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/store/modules/vod-classify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  state: {
    vodClassifyList: [],
    isShow: false },

  mutations: {
    setVodClassifyList: function setVodClassifyList(state, data) {
      state.vodClassifyList = data.result;
      state.isShow = data.isShow;
    } },


  actions: {} };exports.default = _default;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"weixiaoshi","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"weixiaoshi","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"weixiaoshi","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"weixiaoshi","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!*************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/common/lib/util.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var api = _interopRequireWildcard(__webpack_require__(/*! @/common/lib/api.js */ 17));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var _default =
{
  verify: function verify(token) {
    if (!token) {
      uni.showToast({
        title: "请绑定手机号",
        icon: "none" });

      setTimeout(function () {
        uni.navigateTo({
          url: '/pages/login/login' });

      }, 500);
      return false;
    } else {
      return true;
    }
  },
  // 数据加载更多
  moreLoad: function moreLoad(data) {
    if (data.length <= 0) {
      this.textLoad = this.txtLoad;
      return;
    }
    if (this.page > 1) {var _this$videoList;
      (_this$videoList = this.videoList).push.apply(_this$videoList, _toConsumableArray(data));

      return false;
    }
    return true;

  },
  // 消息弹窗
  showToast: function showToast(title) {var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
    uni.showToast({
      title: title,
      icon: icon });

  },
  // 返回上一页
  backTap: function backTap() {
    uni.navigateBack({
      delta: 1,
      animationType: 'pop-out',
      animationDuration: 200 });

  },
  // 跳转
  navTo: function navTo(url) {
    uni.navigateTo({
      url: url });

  },
  // 拨打电话
  openDian: function openDian(opt, shouji) {
    uni.makePhoneCall({
      // 手机号
      phoneNumber: shouji,
      // 成功回调
      success: function success(res) {
        api.atuhcall(opt).then(function (res1) {
          console.log(res1);
        });
      },
      // 失败回调
      fail: function fail(res) {
        console.log('调用失败!');
        // this.call_phone(); //重复调用一次
      } });

  },
  // 正则匹配
  reg: {
    // 手机号
    checkPhone: function checkPhone(phone) {
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        console.log(phone);
        console.log(/^1[3456789]\d{9}$/.test(phone));
        uni.showToast({
          title: "手机号有误",
          icon: "none" });

        return true;
      }
      return false;
    },
    // 邮箱
    isEmail: function isEmail(emailInput) {
      var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!myreg.test(emailInput)) {
        console.log('asdf');
        uni.showToast({
          title: "请输入正确的邮箱地址",
          icon: "none" });

        return true;
      } else {
        return false;
      }
    },
    // 非空判断
    isEmpty: function isEmpty(txt, alert) {
      if (/^\s*$/g.test(txt)) {
        uni.showToast({
          title: alert,
          icon: "none" });

        return true;
      }
      return false;
    },
    // 身份证
    isIdentity: function isIdentity(code) {
      if (!
      /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.
      test(code)) {
        uni.showToast({
          title: '请输入正确的身份证',
          icon: "none" });

        return true;
      }
      return false;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 21:
/*!*************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/common/lib/time.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  // 计算当前日期星座
  getHoroscope: function getHoroscope(date) {
    var c = ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯'];
    date = new Date(date);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var startMonth = month - (day - 14 < '865778999988'.charAt(month));
    return c[startMonth] + '座';
  },
  // 计算指定时间与当前的时间差
  sumAge: function sumAge(data) {
    var dateBegin = new Date(data.replace(/-/g, "/"));
    var dateEnd = new Date(); //获取当前时间
    var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    return dayDiff + "天 " + hours + "小时 ";
  },
  // 获取聊天时间（相差300s内的信息不会显示时间）
  getChatTime: function getChatTime(v1, v2) {
    v1 = v1.toString().length < 13 ? v1 * 1000 : v1;
    v2 = v2.toString().length < 13 ? v2 * 1000 : v2;
    if ((parseInt(v1) - parseInt(v2)) / 1000 > 300) {
      return this.gettime(v1);
    }
  },
  // 人性化时间格式
  gettime: function gettime(shorttime) {
    shorttime = shorttime.toString().length < 13 ? shorttime * 1000 : shorttime;
    var now = new Date().getTime();
    var cha = (now - parseInt(shorttime)) / 1000;
    if (cha < 43200) {
      // 当天
      return this.dateFormat(new Date(shorttime), "{A} {t}:{ii}");
    } else if (cha < 518400) {
      // 隔天 显示日期+时间
      return this.dateFormat(new Date(shorttime), "{Mon}月{DD}日 {A} {t}:{ii}");
    } else {
      // 隔年 显示完整日期+时间
      return this.dateFormat(new Date(shorttime), "{Y}-{MM}-{DD} {A} {t}:{ii}");
    }
  },

  parseNumber: function parseNumber(num) {
    return num < 10 ? "0" + num : num;
  },
  dateFormat: function dateFormat(date, formatStr) {
    var dateObj = {},
    rStr = /\{([^}]+)\}/,
    mons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

    dateObj["Y"] = date.getFullYear();
    dateObj["M"] = date.getMonth() + 1;
    dateObj["MM"] = this.parseNumber(dateObj["M"]);
    dateObj["Mon"] = mons[dateObj['M'] - 1];
    dateObj["D"] = date.getDate();
    dateObj["DD"] = this.parseNumber(dateObj["D"]);
    dateObj["h"] = date.getHours();
    dateObj["hh"] = this.parseNumber(dateObj["h"]);
    dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
    dateObj["tt"] = this.parseNumber(dateObj["t"]);
    dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
    dateObj["i"] = date.getMinutes();
    dateObj["ii"] = this.parseNumber(dateObj["i"]);
    dateObj["s"] = date.getSeconds();
    dateObj["ss"] = this.parseNumber(dateObj["s"]);

    while (rStr.test(formatStr)) {
      formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
    }
    return formatStr;
  },
  // 获取年龄
  getAgeByBirthday: function getAgeByBirthday(data) {
    var birthday = new Date(data.replace(/-/g, "\/"));
    var d = new Date();
    return d.getFullYear() - birthday.getFullYear() - (d.getMonth() < birthday.getMonth() || d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate() ? 1 : 0);
  },
  // 倒计时
  timeDown: function timeDown(endTime) {
    //获取时间差
    var now = new Date().getTime() / 1000;
    var totalSeconds = parseInt(endTime - now);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出还剩多少时间
    //return `${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`
    var time = {
      days: days,
      hours: this.checkCount(hours),
      minutes: this.checkCount(minutes),
      seconds: this.checkCount(seconds) };

    return time;
  },
  //校验是否两位数
  checkCount: function checkCount(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  },
  // 人性化时间格式
  getSimpleTime: function getSimpleTime(shorttime) {
    shorttime = shorttime.toString().length < 13 ? shorttime * 1000 : shorttime;
    var now = new Date().getTime();
    var cha = (now - parseInt(shorttime)) / 1000;
    if (cha < 43200) {
      // 当天
      return this.dateFormat(new Date(shorttime), "{A} {t}:{ii}");
    } else {
      // 隔天 显示日期+时间
      return this.dateFormat(new Date(shorttime), "{Mon}月{DD}日");
    }
  },
  // 人性化时间格式
  getRedirectTime: function getRedirectTime(shorttime) {
    shorttime = shorttime.toString().length < 13 ? shorttime * 1000 : shorttime;
    var now = new Date().getTime();
    var cha = (now - parseInt(shorttime)) / 1000;
    return this.dateFormat(new Date(shorttime), "{Y}-{MM}-{DD}");
  } };exports.default = _default;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!*****************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/pages.json ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 8:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);

/***/ }),

/***/ 9:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 90:
/*!****************************************************************!*\
  !*** G:/桌面/桌面文件夹/玩一玩/weixiaoying_uniapp/common/lib/hls.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function (e) {if (true) module.exports = e();else { var t; }}(function () {var e;return function e(t, r, i) {function a(s, o) {if (!r[s]) {if (!t[s]) {var l = "function" == typeof require && require;if (!o && l) return require(s, !0);if (n) return n(s, !0);var u = new Error("Cannot find module '" + s + "'");throw u.code = "MODULE_NOT_FOUND", u;}var d = r[s] = { exports: {} };t[s][0].call(d.exports, function (e) {var r = t[s][1][e];return a(r ? r : e);}, d, d.exports, e, t, r, i);}return r[s].exports;}for (var n = "function" == typeof require && require, s = 0; s < i.length; s++) {a(i[s]);}return a;}({ 1: [function (e, t, r) {function i() {this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;}function a(e) {return "function" == typeof e;}function n(e) {return "number" == typeof e;}function s(e) {return "object" == typeof e && null !== e;}function o(e) {return void 0 === e;}t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function (e) {if (!n(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");return this._maxListeners = e, this;}, i.prototype.emit = function (e) {var t, r, i, n, l, u;if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {if ((t = arguments[1]) instanceof Error) throw t;var d = new Error('Uncaught, unspecified "error" event. (' + t + ")");throw d.context = t, d;}if (r = this._events[e], o(r)) return !1;if (a(r)) switch (arguments.length) {case 1:r.call(this);break;case 2:r.call(this, arguments[1]);break;case 3:r.call(this, arguments[1], arguments[2]);break;default:n = Array.prototype.slice.call(arguments, 1), r.apply(this, n);} else if (s(r)) for (n = Array.prototype.slice.call(arguments, 1), u = r.slice(), i = u.length, l = 0; l < i; l++) {u[l].apply(this, n);}return !0;}, i.prototype.addListener = function (e, t) {var r;if (!a(t)) throw TypeError("listener must be a function");return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, a(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (r = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.trace), this;}, i.prototype.on = i.prototype.addListener, i.prototype.once = function (e, t) {function r() {this.removeListener(e, r), i || (i = !0, t.apply(this, arguments));}if (!a(t)) throw TypeError("listener must be a function");var i = !1;return r.listener = t, this.on(e, r), this;}, i.prototype.removeListener = function (e, t) {var r, i, n, o;if (!a(t)) throw TypeError("listener must be a function");if (!this._events || !this._events[e]) return this;if (r = this._events[e], n = r.length, i = -1, r === t || a(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);else if (s(r)) {for (o = n; o-- > 0;) {if (r[o] === t || r[o].listener && r[o].listener === t) {i = o;break;}}if (i < 0) return this;1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t);}return this;}, i.prototype.removeAllListeners = function (e) {var t, r;if (!this._events) return this;if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;if (0 === arguments.length) {for (t in this._events) {"removeListener" !== t && this.removeAllListeners(t);}return this.removeAllListeners("removeListener"), this._events = {}, this;}if (r = this._events[e], a(r)) this.removeListener(e, r);else if (r) for (; r.length;) {this.removeListener(e, r[r.length - 1]);}return delete this._events[e], this;}, i.prototype.listeners = function (e) {return this._events && this._events[e] ? a(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];}, i.prototype.listenerCount = function (e) {if (this._events) {var t = this._events[e];if (a(t)) return 1;if (t) return t.length;}return 0;}, i.listenerCount = function (e, t) {return e.listenerCount(t);};}, {}], 2: [function (t, r, i) {!function (t) {var a = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,n = /^([^\/;?#]*)(.*)$/,s = { buildAbsoluteURL: function buildAbsoluteURL(e, t, r) {if (r = r || {}, e = e.trim(), !(t = t.trim())) {if (!r.alwaysNormalize) return e;var i = this.parseURL(e);if (!o) throw new Error("Error trying to parse base URL.");return i.path = s.normalizePath(i.path), s.buildURLFromParts(i);}var a = this.parseURL(t);if (!a) throw new Error("Error trying to parse relative URL.");if (a.scheme) return r.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : t;var o = this.parseURL(e);if (!o) throw new Error("Error trying to parse base URL.");if (!o.netLoc && o.path && "/" !== o.path[0]) {var l = n.exec(o.path);o.netLoc = l[1], o.path = l[2];}o.netLoc && !o.path && (o.path = "/");var u = { scheme: o.scheme, netLoc: a.netLoc, path: null, params: a.params, query: a.query, fragment: a.fragment };if (!a.netLoc && (u.netLoc = o.netLoc, "/" !== a.path[0])) if (a.path) {var d = o.path,f = d.substring(0, d.lastIndexOf("/") + 1) + a.path;u.path = s.normalizePath(f);} else u.path = o.path, a.params || (u.params = o.params, a.query || (u.query = o.query));return null === u.path && (u.path = r.alwaysNormalize ? s.normalizePath(a.path) : a.path), s.buildURLFromParts(u);}, parseURL: function parseURL(e) {var t = a.exec(e);return t ? { scheme: t[1] || "", netLoc: t[2] || "", path: t[3] || "", params: t[4] || "", query: t[5] || "", fragment: t[6] || "" } : null;}, normalizePath: function normalizePath(e) {for (e = e.split("").reverse().join("").replace(/(?:\/|^)\.(?=\/)/g, ""); e.length !== (e = e.replace(/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, "")).length;) {;}return e.split("").reverse().join("");}, buildURLFromParts: function buildURLFromParts(e) {return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment;} };"object" == typeof i && "object" == typeof r ? r.exports = s : "function" == typeof e && e.amd ? e([], function () {return s;}) : "object" == typeof i ? i.URLToolkit = s : t.URLToolkit = s;}(this);}, {}], 3: [function (e, t, r) {var i = arguments[3],a = arguments[4],n = arguments[5],s = JSON.stringify;t.exports = function (e, t) {function r(e) {p[e] = !0;for (var t in a[e][1]) {var i = a[e][1][t];p[i] || r(i);}}for (var o, l = Object.keys(n), u = 0, d = l.length; u < d; u++) {var f = l[u],c = n[f].exports;if (c === e || c && c.default === e) {o = f;break;}}if (!o) {o = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);for (var h = {}, u = 0, d = l.length; u < d; u++) {var f = l[u];h[f] = f;}a[o] = [Function(["require", "module", "exports"], "(" + e + ")(self)"), h];}var g = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),v = {};v[o] = o, a[g] = [Function(["require"], "var f = require(" + s(o) + ");(f.default ? f.default : f)(self);"), v];var p = {};r(g);var y = "(" + i + ")({" + Object.keys(p).map(function (e) {return s(e) + ":[" + a[e][0] + "," + s(a[e][1]) + "]";}).join(",") + "},{},[" + s(g) + "])",m = window.URL || window.webkitURL || window.mozURL || window.msURL,E = new Blob([y], { type: "text/javascript" });if (t && t.bare) return E;var b = m.createObjectURL(E),T = new Worker(b);return T.objectURL = b, T;};}, {}], 4: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}Object.defineProperty(r, "__esModule", { value: !0 }), r.hlsDefaultConfig = void 0;var a = e(5),n = i(a),s = e(8),o = i(s),l = e(9),u = i(l),d = e(10),f = i(d),c = e(56),h = i(c),g = e(7),v = i(g),p = e(6),y = i(p),m = e(48),E = i(m),b = e(16),T = i(b),_ = e(15),k = i(_),R = e(14),A = i(R);r.hlsDefaultConfig = { autoStartLoad: !0, startPosition: -1, defaultAudioCodec: void 0, debug: !1, capLevelOnFPSDrop: !1, capLevelToPlayerSize: !1, initialLiveManifestSize: 1, maxBufferLength: 30, maxBufferSize: 6e7, maxBufferHole: .5, maxSeekHole: 2, lowBufferWatchdogPeriod: .5, highBufferWatchdogPeriod: 3, nudgeOffset: .1, nudgeMaxRetry: 3, maxFragLookUpTolerance: .2, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxMaxBufferLength: 600, enableWorker: !0, enableSoftwareAES: !0, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, startLevel: void 0, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3, fragLoadingLoopThreshold: 3, startFragPrefetch: !1, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: .2, appendErrorMaxRetry: 3, loader: h.default, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, fetchSetup: void 0, abrController: n.default, bufferController: o.default, capLevelController: u.default, fpsController: f.default, audioStreamController: y.default, audioTrackController: v.default, subtitleStreamController: A.default, subtitleTrackController: k.default, timelineController: T.default, cueHandler: E.default, enableCEA708Captions: !0, enableWebVTT: !0, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", stretchShortVideoTrack: !1, forceKeyFrameOnDiscontinuity: !0, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: .95, abrBandWidthUpFactor: .7, abrMaxWithRealBitrate: !1, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0 };}, { 10: 10, 14: 14, 15: 15, 16: 16, 48: 48, 5: 5, 56: 56, 6: 6, 7: 7, 8: 8, 9: 9 }], 5: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = e(35),h = i(c),g = e(31),v = e(51),p = e(49),y = i(p),m = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FRAG_LOADING, u.default.FRAG_LOADED, u.default.FRAG_BUFFERED, u.default.ERROR));return r.lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = e, r.onCheck = r._abandonRulesCheck.bind(r), r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {this.clearTimer(), f.default.prototype.destroy.call(this);} }, { key: "onFragLoading", value: function value(e) {var t = e.frag;if ("main" === t.type) {if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator) {var r = this.hls,i = e.frag.level,a = r.levels[i].details.live,n = r.config,s = void 0,o = void 0;a ? (s = n.abrEwmaFastLive, o = n.abrEwmaSlowLive) : (s = n.abrEwmaFastVoD, o = n.abrEwmaSlowVoD), this._bwEstimator = new y.default(r, o, s, n.abrEwmaDefaultEstimate);}this.fragCurrent = t;}} }, { key: "_abandonRulesCheck", value: function value() {var e = this.hls,t = e.media,r = this.fragCurrent,i = r.loader,a = e.minAutoLevel;if (!i || i.stats && i.stats.aborted) return v.logger.warn("frag loader destroy or aborted, disarm abandonRules"), void this.clearTimer();var n = i.stats;if (t && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {var s = performance.now() - n.trequest,o = Math.abs(t.playbackRate);if (s > 500 * r.duration / o) {var l = e.levels,d = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / s),f = l[r.level],c = f.realBitrate ? Math.max(f.realBitrate, f.bitrate) : f.bitrate,g = n.total ? n.total : Math.max(n.loaded, Math.round(r.duration * c / 8)),p = t.currentTime,y = (g - n.loaded) / d,m = (h.default.bufferInfo(t, p, e.config.maxBufferHole).end - p) / o;if (m < 2 * r.duration / o && y > m) {var E = void 0,b = void 0;for (b = r.level - 1; b > a; b--) {var T = l[b].realBitrate ? Math.max(l[b].realBitrate, l[b].bitrate) : l[b].bitrate;if ((E = r.duration * T / (6.4 * d)) < m) break;}E < y && (v.logger.warn("loading too slow, abort fragment loading and switch to level " + b + ":fragLoadedDelay[" + b + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + E.toFixed(1) + "<" + y.toFixed(1) + ":" + m.toFixed(1)), e.nextLoadLevel = b, this._bwEstimator.sample(s, n.loaded), i.abort(), this.clearTimer(), e.trigger(u.default.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r, stats: n }));}}}} }, { key: "onFragLoaded", value: function value(e) {var t = e.frag;if ("main" === t.type && !isNaN(t.sn)) {if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {var r = this.hls.levels[t.level],i = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded,a = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;r.loaded = { bytes: i, duration: a }, r.realBitrate = Math.round(8 * i / a);}if (e.frag.bitrateTest) {var n = e.stats;n.tparsed = n.tbuffered = n.tload, this.onFragBuffered(e);}}} }, { key: "onFragBuffered", value: function value(e) {var t = e.stats,r = e.frag;if (!(t.aborted === !0 || 1 !== r.loadCounter || "main" !== r.type || isNaN(r.sn) || r.bitrateTest && t.tload !== t.tbuffered)) {var i = t.tparsed - t.trequest;v.logger.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this._bwEstimator.sample(i, t.loaded), t.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0;}} }, { key: "onError", value: function value(e) {switch (e.details) {case g.ErrorDetails.FRAG_LOAD_ERROR:case g.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer();}} }, { key: "clearTimer", value: function value() {this.timer && (clearInterval(this.timer), this.timer = null);} }, { key: "_findBestLevel", value: function value(e, t, r, i, a, n, s, o, l) {for (var u = a; u >= i; u--) {var d = l[u],f = d.details,c = f ? f.totalduration / f.fragments.length : t,h = !!f && f.live,g = void 0;g = u <= e ? s * r : o * r;var p = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,y = p * c / g;if (v.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(g) + "/" + p + "/" + c + "/" + n + "/" + y), g > p && (!y || h || y < n)) return u;}return -1;} }, { key: "nextAutoLevel", get: function get() {var e = this._nextAutoLevel,t = this._bwEstimator;if (!(e === -1 || t && t.canEstimate())) return e;var r = this._nextABRAutoLevel;return e !== -1 && (r = Math.min(e, r)), r;}, set: function set(e) {this._nextAutoLevel = e;} }, { key: "_nextABRAutoLevel", get: function get() {var e = this.hls,t = e.maxAutoLevel,r = e.levels,i = e.config,a = e.minAutoLevel,n = e.media,s = this.lastLoadedFragLevel,o = this.fragCurrent ? this.fragCurrent.duration : 0,l = n ? n.currentTime : 0,u = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1,d = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,f = (h.default.bufferInfo(n, l, i.maxBufferHole).end - l) / u,c = this._findBestLevel(s, o, d, a, t, f, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);if (c >= 0) return c;v.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var g = o ? Math.min(o, i.maxStarvationDelay) : i.maxStarvationDelay,p = i.abrBandWidthFactor,y = i.abrBandWidthUpFactor;if (0 === f) {var m = this.bitrateTestDelay;if (m) {g = (o ? Math.min(o, i.maxLoadingDelay) : i.maxLoadingDelay) - m, v.logger.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), p = y = 1;}}return c = this._findBestLevel(s, o, d, a, t, f + g, p, y, r), Math.max(c, 0);} }]), t;}(f.default);r.default = m;}, { 31: 31, 32: 32, 33: 33, 35: 35, 49: 49, 51: 51 }], 6: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(46),u = i(l),d = e(35),f = i(d),c = e(25),h = i(c),g = e(33),v = i(g),p = e(32),y = i(p),m = e(36),E = i(m),b = e(52),T = i(b),_ = e(31),k = e(51),R = { STOPPED: "STOPPED", STARTING: "STARTING", IDLE: "IDLE", PAUSED: "PAUSED", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", BUFFER_FLUSHING: "BUFFER_FLUSHING", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS" },A = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, v.default.MEDIA_ATTACHED, v.default.MEDIA_DETACHING, v.default.AUDIO_TRACKS_UPDATED, v.default.AUDIO_TRACK_SWITCHING, v.default.AUDIO_TRACK_LOADED, v.default.KEY_LOADED, v.default.FRAG_LOADED, v.default.FRAG_PARSING_INIT_SEGMENT, v.default.FRAG_PARSING_DATA, v.default.FRAG_PARSED, v.default.ERROR, v.default.BUFFER_CREATED, v.default.BUFFER_APPENDED, v.default.BUFFER_FLUSHED, v.default.INIT_PTS_FOUND));return r.config = e.config, r.audioCodecSwap = !1, r.ticks = 0, r._state = R.STOPPED, r.ontick = r.tick.bind(r), r.initPTS = [], r.waitingFragment = null, r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), y.default.prototype.destroy.call(this), this.state = R.STOPPED;} }, { key: "onInitPtsFound", value: function value(e) {var t = e.id,r = e.frag.cc,i = e.initPTS;"main" === t && (this.initPTS[r] = i, k.logger.log("InitPTS for cc:" + r + " found from video track:" + i), this.state === R.WAITING_INIT_PTS && (k.logger.log("sending pending audio frag to demuxer"), this.state = R.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null));} }, { key: "startLoad", value: function value(e) {if (this.tracks) {var t = this.lastCurrentTime;this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, t > 0 && e === -1 ? (k.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = R.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = R.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick();} else this.startPosition = e, this.state = R.STOPPED;} }, { key: "stopLoad", value: function value() {var e = this.fragCurrent;e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = R.STOPPED;} }, { key: "tick", value: function value() {1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0);} }, { key: "doTick", value: function value() {var e,t,r,i = this.hls,a = i.config;switch (this.state) {case R.ERROR:case R.PAUSED:case R.BUFFER_FLUSHING:break;case R.STARTING:this.state = R.WAITING_TRACK, this.loadedmetadata = !1;break;case R.IDLE:var n = this.tracks;if (!n) break;if (!this.media && (this.startFragRequested || !a.startFragPrefetch)) break;e = this.loadedmetadata ? this.media.currentTime : this.nextLoadPosition;var s = this.mediaBuffer ? this.mediaBuffer : this.media,o = f.default.bufferInfo(s, e, a.maxBufferHole),l = o.len,d = o.end,c = this.fragPrevious,h = a.maxMaxBufferLength,g = this.audioSwitch,p = this.trackId;if ((l < h || g) && p < n.length) {if (void 0 === (r = n[p].details)) {this.state = R.WAITING_TRACK;break;}if (!g && !r.live && c && c.sn === r.endSN && (!this.media.seeking || this.media.duration - d < c.duration / 2)) {this.hls.trigger(v.default.BUFFER_EOS, { type: "audio" }), this.state = R.ENDED;break;}var y = r.fragments,m = y.length,E = y[0].start,b = y[m - 1].start + y[m - 1].duration,T = void 0;if (g) if (r.live && !r.PTSKnown) k.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), d = 0;else if (d = e, r.PTSKnown && e < E) {if (!(o.end > E || o.nextStart)) return;k.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = E + .05;}if (r.initSegment && !r.initSegment.data) T = r.initSegment;else if (d <= E) {if (T = y[0], r.live && T.loadIdx && T.loadIdx === this.fragLoadIdx) {var A = o.nextStart ? o.nextStart : E;return k.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (A + .05)), void (this.media.currentTime = A + .05);}} else {var S = void 0,L = a.maxFragLookUpTolerance,w = c ? y[c.sn - y[0].sn + 1] : void 0,D = function D(e) {var t = Math.min(L, e.duration);return e.start + e.duration - t <= d ? 1 : e.start - t > d && e.start ? -1 : 0;};d < b ? (d > b - L && (L = 0), S = w && !D(w) ? w : u.default.search(y, D)) : S = y[m - 1], S && (T = S, E = S.start, c && T.level === c.level && T.sn === c.sn && (T.sn < r.endSN ? (T = y[T.sn + 1 - r.startSN], k.logger.log("SN just loaded, load next one: " + T.sn)) : T = null));}if (T) if (T.decryptdata && null != T.decryptdata.uri && null == T.decryptdata.key) k.logger.log("Loading key for " + T.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + p), this.state = R.KEY_LOADING, i.trigger(v.default.KEY_LOADING, { frag: T });else {if (k.logger.log("Loading " + T.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + p + ", currentTime:" + e + ",bufferEnd:" + d.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, T.loadCounter) {T.loadCounter++;var O = a.fragLoadingLoopThreshold;if (T.loadCounter > O && Math.abs(this.fragLoadIdx - T.loadIdx) < O) return void i.trigger(v.default.ERROR, { type: _.ErrorTypes.MEDIA_ERROR, details: _.ErrorDetails.FRAG_LOOP_LOADING_ERROR, fatal: !1, frag: T });} else T.loadCounter = 1;T.loadIdx = this.fragLoadIdx, this.fragCurrent = T, this.startFragRequested = !0, isNaN(T.sn) || (this.nextLoadPosition = T.start + T.duration), i.trigger(v.default.FRAG_LOADING, { frag: T }), this.state = R.FRAG_LOADING;}}break;case R.WAITING_TRACK:t = this.tracks[this.trackId], t && t.details && (this.state = R.IDLE);break;case R.FRAG_LOADING_WAITING_RETRY:var I = performance.now(),P = this.retryDate;s = this.media;var C = s && s.seeking;(!P || I >= P || C) && (k.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = R.IDLE);break;case R.WAITING_INIT_PTS:case R.STOPPED:case R.FRAG_LOADING:case R.PARSING:case R.PARSED:case R.ENDED:}} }, { key: "onMediaAttached", value: function value(e) {var t = this.media = this.mediaBuffer = e.media;this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);var r = this.config;this.tracks && r.autoStartLoad && this.startLoad(r.startPosition);} }, { key: "onMediaDetaching", value: function value() {var e = this.media;e && e.ended && (k.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);var t = this.tracks;t && t.forEach(function (e) {e.details && e.details.fragments.forEach(function (e) {e.loadCounter = void 0;});}), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad();} }, { key: "onMediaSeeking", value: function value() {this.state === R.ENDED && (this.state = R.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick();} }, { key: "onMediaEnded", value: function value() {this.startPosition = this.lastCurrentTime = 0;} }, { key: "onAudioTracksUpdated", value: function value(e) {k.logger.log("audio tracks updated"), this.tracks = e.audioTracks;} }, { key: "onAudioTrackSwitching", value: function value(e) {var t = !!e.url;this.trackId = e.id, this.state = R.IDLE, this.fragCurrent = null, this.state = R.PAUSED, this.waitingFragment = null, t ? this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = R.IDLE, void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold)), this.tick();} }, { key: "onAudioTrackLoaded", value: function value(e) {var t = e.details,r = e.id,i = this.tracks[r],a = t.totalduration,n = 0;if (k.logger.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live) {var s = i.details;s && t.fragments.length > 0 ? (E.default.mergeDetails(s, t), n = t.fragments[0].start, t.PTSKnown ? k.logger.log("live audio playlist sliding:" + n.toFixed(3)) : k.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, k.logger.log("live audio playlist - first load, unknown sliding"));} else t.PTSKnown = !1;if (i.details = t, !this.startFragRequested) {if (this.startPosition === -1) {var o = t.startTimeOffset;isNaN(o) ? this.startPosition = 0 : (k.logger.log("start time offset found in playlist, adjust startPosition to " + o), this.startPosition = o);}this.nextLoadPosition = this.startPosition;}this.state === R.WAITING_TRACK && (this.state = R.IDLE), this.tick();} }, { key: "onKeyLoaded", value: function value() {this.state === R.KEY_LOADING && (this.state = R.IDLE, this.tick());} }, { key: "onFragLoaded", value: function value(e) {var t = this.fragCurrent,r = e.frag;if (this.state === R.FRAG_LOADING && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {var i = this.tracks[this.trackId],a = i.details,n = a.totalduration,s = t.level,o = t.sn,l = t.cc,u = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",d = this.stats = e.stats;if ("initSegment" === o) this.state = R.IDLE, d.tparsed = d.tbuffered = performance.now(), a.initSegment.data = e.payload, this.hls.trigger(v.default.FRAG_BUFFERED, { stats: d, frag: t, id: "audio" }), this.tick();else {this.state = R.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new h.default(this.hls, "audio"));var f = this.initPTS[l],c = a.initSegment ? a.initSegment.data : [];if (a.initSegment || void 0 !== f) {this.pendingBuffering = !0, k.logger.log("Demuxing " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s);this.demuxer.push(e.payload, c, u, null, t, n, !1, f);} else k.logger.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s), this.waitingFragment = e, this.state = R.WAITING_INIT_PTS;}}this.fragLoadError = 0;} }, { key: "onFragParsingInitSegment", value: function value(e) {var t = this.fragCurrent,r = e.frag;if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === R.PARSING) {var i = e.tracks,a = void 0;if (i.video && delete i.video, a = i.audio) {a.levelCodec = "mp4a.40.2", a.id = e.id, this.hls.trigger(v.default.BUFFER_CODECS, i), k.logger.log("audio track:audio,container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");var n = a.initSegment;if (n) {var s = { type: "audio", data: n, parent: "audio", content: "initSegment" };this.audioSwitch ? this.pendingData = [s] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(v.default.BUFFER_APPENDING, s));}this.tick();}}} }, { key: "onFragParsingData", value: function value(e) {var t = this,r = this.fragCurrent,i = e.frag;if (r && "audio" === e.id && "audio" === e.type && i.sn === r.sn && i.level === r.level && this.state === R.PARSING) {var a = this.trackId,n = this.tracks[a],s = this.hls;isNaN(e.endPTS) && (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), k.logger.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb), E.default.updateFragPTSDTS(n.details, r, e.startPTS, e.endPTS);var o = this.audioSwitch,l = this.media,u = !1;if (o && l) if (l.readyState) {var d = l.currentTime;k.logger.log("switching audio track : currentTime:" + d), d >= e.startPTS && (k.logger.log("switching audio track : flushing all audio"), this.state = R.BUFFER_FLUSHING, s.trigger(v.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), u = !0, this.audioSwitch = !1, s.trigger(v.default.AUDIO_TRACK_SWITCHED, { id: a }));} else this.audioSwitch = !1, s.trigger(v.default.AUDIO_TRACK_SWITCHED, { id: a });var f = this.pendingData;this.audioSwitch || ([e.data1, e.data2].forEach(function (t) {t && t.length && f.push({ type: e.type, data: t, parent: "audio", content: "data" });}), !u && f.length && (f.forEach(function (e) {t.state === R.PARSING && (t.pendingBuffering = !0, t.hls.trigger(v.default.BUFFER_APPENDING, e));}), this.pendingData = [], this.appended = !0)), this.tick();}} }, { key: "onFragParsed", value: function value(e) {var t = this.fragCurrent,r = e.frag;t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === R.PARSING && (this.stats.tparsed = performance.now(), this.state = R.PARSED, this._checkAppendedParsed());} }, { key: "onBufferCreated", value: function value(e) {var t = e.tracks.audio;t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0);} }, { key: "onBufferAppended", value: function value(e) {if ("audio" === e.parent) {var t = this.state;t !== R.PARSING && t !== R.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed());}} }, { key: "_checkAppendedParsed", value: function value() {if (!(this.state !== R.PARSED || this.appended && this.pendingBuffering)) {var e = this.fragCurrent,t = this.stats,r = this.hls;if (e) {this.fragPrevious = e, t.tbuffered = performance.now(), r.trigger(v.default.FRAG_BUFFERED, { stats: t, frag: e, id: "audio" });var i = this.mediaBuffer ? this.mediaBuffer : this.media;k.logger.log("audio buffered : " + T.default.toString(i.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(v.default.AUDIO_TRACK_SWITCHED, { id: this.trackId })), this.state = R.IDLE;}this.tick();}} }, { key: "onError", value: function value(e) {var t = e.frag;if (!t || "audio" === t.type) switch (e.details) {case _.ErrorDetails.FRAG_LOAD_ERROR:case _.ErrorDetails.FRAG_LOAD_TIMEOUT:if (!e.fatal) {var r = this.fragLoadError;r ? r++ : r = 1;var i = this.config;if (r <= i.fragLoadingMaxRetry) {this.fragLoadError = r, t.loadCounter = 0;var a = Math.min(Math.pow(2, r - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);k.logger.warn("audioStreamController: frag loading failed, retry in " + a + " ms"), this.retryDate = performance.now() + a, this.state = R.FRAG_LOADING_WAITING_RETRY;} else k.logger.error("audioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = R.ERROR;}break;case _.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case _.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case _.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case _.ErrorDetails.KEY_LOAD_ERROR:case _.ErrorDetails.KEY_LOAD_TIMEOUT:this.state !== R.ERROR && (this.state = e.fatal ? R.ERROR : R.IDLE, k.logger.warn("audioStreamController: " + e.details + " while loading frag,switch to " + this.state + " state ..."));break;case _.ErrorDetails.BUFFER_FULL_ERROR:if ("audio" === e.parent && (this.state === R.PARSING || this.state === R.PARSED)) {var n = this.mediaBuffer,s = this.media.currentTime;if (n && f.default.isBuffered(n, s) && f.default.isBuffered(n, s + .5)) {var o = this.config;o.maxMaxBufferLength >= o.maxBufferLength && (o.maxMaxBufferLength /= 2, k.logger.warn("audio:reduce max buffer length to " + o.maxMaxBufferLength + "s"), this.fragLoadIdx += 2 * o.fragLoadingLoopThreshold), this.state = R.IDLE;} else k.logger.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = R.BUFFER_FLUSHING, this.hls.trigger(v.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" });}}} }, { key: "onBufferFlushed", value: function value() {var e = this,t = this.pendingData;t && t.length ? (k.logger.log("appending pending audio data on Buffer Flushed"), t.forEach(function (t) {e.hls.trigger(v.default.BUFFER_APPENDING, t);}), this.appended = !0, this.pendingData = [], this.state = R.PARSED) : (this.state = R.IDLE, this.fragPrevious = null, this.tick());} }, { key: "state", set: function set(e) {if (this.state !== e) {var t = this.state;this._state = e, k.logger.log("audio stream:" + t + "->" + e);}}, get: function get() {return this._state;} }]), t;}(y.default);r.default = A;}, { 25: 25, 31: 31, 32: 32, 33: 33, 35: 35, 36: 36, 46: 46, 51: 51, 52: 52 }], 7: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};
      }(),l = e(33),u = i(l),d = e(32),f = i(d),c = e(51),h = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MANIFEST_LOADING, u.default.MANIFEST_LOADED, u.default.AUDIO_TRACK_LOADED));return r.ticks = 0, r.ontick = r.tick.bind(r), r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {f.default.prototype.destroy.call(this);} }, { key: "tick", value: function value() {1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0);} }, { key: "doTick", value: function value() {this.updateTrack(this.trackId);} }, { key: "onManifestLoading", value: function value() {this.tracks = [], this.trackId = -1;} }, { key: "onManifestLoaded", value: function value(e) {var t = this,r = e.audioTracks || [],i = !1;this.tracks = r, this.hls.trigger(u.default.AUDIO_TRACKS_UPDATED, { audioTracks: r });var a = 0;r.forEach(function (e) {if (e.default) return t.audioTrack = a, void (i = !0);a++;}), i === !1 && r.length && (c.logger.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0);} }, { key: "onAudioTrackLoaded", value: function value(e) {e.id < this.tracks.length && (c.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * e.details.targetduration)), !e.details.live && this.timer && (clearInterval(this.timer), this.timer = null));} }, { key: "setAudioTrackInternal", value: function value(e) {if (e >= 0 && e < this.tracks.length) {this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = e, c.logger.log("switching to audioTrack " + e);var t = this.tracks[e],r = this.hls,i = t.type,a = t.url,n = { id: e, type: i, url: a };r.trigger(u.default.AUDIO_TRACK_SWITCH, n), r.trigger(u.default.AUDIO_TRACK_SWITCHING, n);var s = t.details;!a || void 0 !== s && s.live !== !0 || (c.logger.log("(re)loading playlist for audioTrack " + e), r.trigger(u.default.AUDIO_TRACK_LOADING, { url: a, id: e }));}} }, { key: "updateTrack", value: function value(e) {if (e >= 0 && e < this.tracks.length) {this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = e, c.logger.log("updating audioTrack " + e);var t = this.tracks[e],r = t.url,i = t.details;!r || void 0 !== i && i.live !== !0 || (c.logger.log("(re)loading playlist for audioTrack " + e), this.hls.trigger(u.default.AUDIO_TRACK_LOADING, { url: r, id: e }));}} }, { key: "audioTracks", get: function get() {return this.tracks;} }, { key: "audioTrack", get: function get() {return this.trackId;}, set: function set(e) {this.trackId === e && void 0 !== this.tracks[e].details || this.setAudioTrackInternal(e);} }]), t;}(f.default);r.default = h;}, { 32: 32, 33: 33, 51: 51 }], 8: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = e(51),h = e(31),g = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHING, u.default.MEDIA_DETACHING, u.default.MANIFEST_PARSED, u.default.BUFFER_RESET, u.default.BUFFER_APPENDING, u.default.BUFFER_CODECS, u.default.BUFFER_EOS, u.default.BUFFER_FLUSHING, u.default.LEVEL_PTS_UPDATED, u.default.LEVEL_UPDATED));return r._msDuration = null, r._levelDuration = null, r.onsbue = r.onSBUpdateEnd.bind(r), r.onsbe = r.onSBUpdateError.bind(r), r.pendingTracks = {}, r.tracks = {}, r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {f.default.prototype.destroy.call(this);} }, { key: "onLevelPtsUpdated", value: function value(e) {var t = e.type,r = this.tracks.audio;if ("audio" === t && r && "audio/mpeg" === r.container) {var i = this.sourceBuffer.audio;if (Math.abs(i.timestampOffset - e.start) > .1) {var a = i.updating;try {i.abort();} catch (e) {a = !0, c.logger.warn("can not abort audio buffer: " + e);}a ? this.audioTimestampOffset = e.start : (c.logger.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start), i.timestampOffset = e.start);}}} }, { key: "onManifestParsed", value: function value(e) {var t = e.audio,r = e.video,i = 0;e.altAudio && (t || r) && (i = (t ? 1 : 0) + (r ? 1 : 0), c.logger.log(i + " sourceBuffer(s) expected")), this.sourceBufferNb = i;} }, { key: "onMediaAttaching", value: function value(e) {var t = this.media = e.media;if (t) {var r = this.mediaSource = new MediaSource();this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener("sourceopen", this.onmso), r.addEventListener("sourceended", this.onmse), r.addEventListener("sourceclose", this.onmsc), t.src = URL.createObjectURL(r);}} }, { key: "onMediaDetaching", value: function value() {c.logger.log("media source detaching");var e = this.mediaSource;if (e) {if ("open" === e.readyState) try {e.endOfStream();} catch (e) {c.logger.warn("onMediaDetaching:" + e.message + " while calling endOfStream");}e.removeEventListener("sourceopen", this.onmso), e.removeEventListener("sourceended", this.onmse), e.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this.media.src), this.media.removeAttribute("src"), this.media.load()), this.mediaSource = null, this.media = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0;}this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(u.default.MEDIA_DETACHED);} }, { key: "onMediaSourceOpen", value: function value() {c.logger.log("media source opened"), this.hls.trigger(u.default.MEDIA_ATTACHED, { media: this.media });var e = this.mediaSource;e && e.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks();} }, { key: "checkPendingTracks", value: function value() {var e = this.pendingTracks,t = Object.keys(e).length;t && (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) && (this.createSourceBuffers(e), this.pendingTracks = {}, this.doAppending());} }, { key: "onMediaSourceClose", value: function value() {c.logger.log("media source closed");} }, { key: "onMediaSourceEnded", value: function value() {c.logger.log("media source ended");} }, { key: "onSBUpdateEnd", value: function value() {if (this.audioTimestampOffset) {var e = this.sourceBuffer.audio;c.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset), e.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset;}this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;var t = this.parent,r = this.segments.reduce(function (e, r) {return r.parent === t ? e + 1 : e;}, 0);this.hls.trigger(u.default.BUFFER_APPENDED, { parent: t, pending: r }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration();} }, { key: "onSBUpdateError", value: function value(e) {c.logger.error("sourceBuffer error:", e), this.hls.trigger(u.default.ERROR, { type: h.ErrorTypes.MEDIA_ERROR, details: h.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: !1 });} }, { key: "onBufferReset", value: function value() {var e = this.sourceBuffer;for (var t in e) {var r = e[t];try {this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this.onsbue), r.removeEventListener("error", this.onsbe);} catch (e) {}}this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0;} }, { key: "onBufferCodecs", value: function value(e) {if (0 === Object.keys(this.sourceBuffer).length) {for (var t in e) {this.pendingTracks[t] = e[t];}var r = this.mediaSource;r && "open" === r.readyState && this.checkPendingTracks();}} }, { key: "createSourceBuffers", value: function value(e) {var t = this.sourceBuffer,r = this.mediaSource;for (var i in e) {if (!t[i]) {var a = e[i],n = a.levelCodec || a.codec,s = a.container + ";codecs=" + n;c.logger.log("creating sourceBuffer(" + s + ")");try {var o = t[i] = r.addSourceBuffer(s);o.addEventListener("updateend", this.onsbue), o.addEventListener("error", this.onsbe), this.tracks[i] = { codec: n, container: a.container }, a.buffer = o;} catch (e) {c.logger.error("error while trying to add sourceBuffer:" + e.message), this.hls.trigger(u.default.ERROR, { type: h.ErrorTypes.MEDIA_ERROR, details: h.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal: !1, err: e, mimeType: s });}}}this.hls.trigger(u.default.BUFFER_CREATED, { tracks: e });} }, { key: "onBufferAppending", value: function value(e) {this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending());} }, { key: "onBufferAppendFail", value: function value(e) {c.logger.error("sourceBuffer error:", e.event), this.hls.trigger(u.default.ERROR, { type: h.ErrorTypes.MEDIA_ERROR, details: h.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: !1 });} }, { key: "onBufferEos", value: function value(e) {var t = this.sourceBuffer,r = e.type;for (var i in t) {r && i !== r || t[i].ended || (t[i].ended = !0, c.logger.log(i + " sourceBuffer now EOS"));}this.checkEos();} }, { key: "checkEos", value: function value() {var e = this.sourceBuffer,t = this.mediaSource;if (!t || "open" !== t.readyState) return void (this._needsEos = !1);for (var r in e) {var i = e[r];if (!i.ended) return;if (i.updating) return void (this._needsEos = !0);}c.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");try {t.endOfStream();} catch (e) {c.logger.warn("exception while calling mediaSource.endOfStream()");}this._needsEos = !1;} }, { key: "onBufferFlushing", value: function value(e) {this.flushRange.push({ start: e.startOffset, end: e.endOffset, type: e.type }), this.flushBufferCounter = 0, this.doFlush();} }, { key: "onLevelUpdated", value: function value(e) {var t = e.details;0 !== t.fragments.length && (this._levelDuration = t.totalduration + t.fragments[0].start, this.updateMediaElementDuration());} }, { key: "updateMediaElementDuration", value: function value() {var e = this.media,t = this.mediaSource,r = this.sourceBuffer,i = this._levelDuration;if (null !== i && e && t && r && 0 !== e.readyState && "open" === t.readyState) {for (var a in r) {if (r[a].updating) return;}null === this._msDuration && (this._msDuration = t.duration);var n = e.duration;(i > this._msDuration && i > n || n === 1 / 0 || isNaN(n)) && (c.logger.log("Updating mediasource duration to " + i.toFixed(3)), this._msDuration = t.duration = i);}} }, { key: "doFlush", value: function value() {for (; this.flushRange.length;) {var e = this.flushRange[0];if (!this.flushBuffer(e.start, e.end, e.type)) return void (this._needsFlush = !0);this.flushRange.shift(), this.flushBufferCounter = 0;}if (0 === this.flushRange.length) {this._needsFlush = !1;var t = 0,r = this.sourceBuffer;try {for (var i in r) {t += r[i].buffered.length;}} catch (e) {c.logger.error("error while accessing sourceBuffer.buffered");}this.appended = t, this.hls.trigger(u.default.BUFFER_FLUSHED);}} }, { key: "doAppending", value: function value() {var e = this.hls,t = this.sourceBuffer,r = this.segments;if (Object.keys(t).length) {if (this.media.error) return this.segments = [], void c.logger.error("trying to append although a media error occured, flush segment and abort");if (this.appending) return;if (r && r.length) {var i = r.shift();try {var a = i.type,n = t[a];n ? n.updating ? r.unshift(i) : (n.ended = !1, this.parent = i.parent, n.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd();} catch (t) {c.logger.error("error while trying to append buffer:" + t.message), r.unshift(i);var s = { type: h.ErrorTypes.MEDIA_ERROR, parent: i.parent };if (22 === t.code) return this.segments = [], s.details = h.ErrorDetails.BUFFER_FULL_ERROR, s.fatal = !1, void e.trigger(u.default.ERROR, s);if (this.appendError ? this.appendError++ : this.appendError = 1, s.details = h.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.config.appendErrorMaxRetry) return c.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), r = [], s.fatal = !0, void e.trigger(u.default.ERROR, s);s.fatal = !1, e.trigger(u.default.ERROR, s);}}}} }, { key: "flushBuffer", value: function value(e, t, r) {var i,a,n,s,o,l,u = this.sourceBuffer;if (Object.keys(u).length) {if (c.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + e + "/" + t), this.flushBufferCounter < this.appended) {for (var d in u) {if (!r || d === r) {if (i = u[d], i.ended = !1, i.updating) return c.logger.warn("cannot flush, sb updating in progress"), !1;try {for (a = 0; a < i.buffered.length; a++) {if (n = i.buffered.start(a), s = i.buffered.end(a), navigator.userAgent.toLowerCase().indexOf("firefox") !== -1 && t === Number.POSITIVE_INFINITY ? (o = e, l = t) : (o = Math.max(n, e), l = Math.min(s, t)), Math.min(l, s) - o > .5) return this.flushBufferCounter++, c.logger.log("flush " + d + " [" + o + "," + l + "], of [" + n + "," + s + "], pos:" + this.media.currentTime), i.remove(o, l), !1;}} catch (e) {c.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource");}}}} else c.logger.warn("abort flushing too many retries");c.logger.log("buffer flushed");}return !0;} }]), t;}(f.default);r.default = g;}, { 31: 31, 32: 32, 33: 33, 51: 51 }], 9: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = function (e) {function t(e) {return a(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FPS_DROP_LEVEL_CAPPING, u.default.MEDIA_ATTACHING, u.default.MANIFEST_PARSED));}return s(t, e), o(t, [{ key: "destroy", value: function value() {this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)));} }, { key: "onFpsDropLevelCapping", value: function value(e) {this.restrictedLevels || (this.restrictedLevels = []), this.isLevelRestricted(e.droppedLevel) || this.restrictedLevels.push(e.droppedLevel);} }, { key: "onMediaAttaching", value: function value(e) {this.media = e.media instanceof HTMLVideoElement ? e.media : null;} }, { key: "onManifestParsed", value: function value(e) {var t = this.hls;t.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = e.levels, t.firstLevel = this.getMaxLevel(e.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());} }, { key: "detectPlayerSize", value: function value() {if (this.media) {var e = this.levels ? this.levels.length : 0;if (e) {var t = this.hls;t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;}}} }, { key: "getMaxLevel", value: function value(e) {var t = 0,r = void 0,i = void 0,a = this.mediaWidth,n = this.mediaHeight,s = 0,o = 0;for (r = 0; r <= e && (i = this.levels[r], !this.isLevelRestricted(r)) && (t = r, s = i.width, o = i.height, !(a <= s || n <= o)); r++) {;}return t;} }, { key: "isLevelRestricted", value: function value(e) {return !(!this.restrictedLevels || this.restrictedLevels.indexOf(e) === -1);} }, { key: "contentScaleFactor", get: function get() {var e = 1;try {e = window.devicePixelRatio;} catch (e) {}return e;} }, { key: "mediaWidth", get: function get() {var e = void 0,t = this.media;return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= this.contentScaleFactor), e;} }, { key: "mediaHeight", get: function get() {var e = void 0,t = this.media;return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= this.contentScaleFactor), e;} }]), t;}(f.default);r.default = c;}, { 32: 32, 33: 33 }], 10: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = e(51),h = function (e) {function t(e) {return a(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHING));}return s(t, e), o(t, [{ key: "destroy", value: function value() {this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1;} }, { key: "onMediaAttaching", value: function value(e) {var t = this.hls.config;if (t.capLevelOnFPSDrop) {"function" == typeof (this.video = e.media instanceof HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod);}} }, { key: "checkFPS", value: function value(e, t, r) {var i = performance.now();if (t) {if (this.lastTime) {var a = i - this.lastTime,n = r - this.lastDroppedFrames,s = t - this.lastDecodedFrames,o = 1e3 * n / a,l = this.hls;if (l.trigger(u.default.FPS_DROP, { currentDropped: n, currentDecoded: s, totalDroppedFrames: r }), o > 0 && n > l.config.fpsDroppedMonitoringThreshold * s) {var d = l.currentLevel;c.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (l.autoLevelCapping === -1 || l.autoLevelCapping >= d) && (d -= 1, l.trigger(u.default.FPS_DROP_LEVEL_CAPPING, { level: d, droppedLevel: l.currentLevel }), l.autoLevelCapping = d, l.streamController.nextLevelSwitch());}}this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = t;}} }, { key: "checkFPSInterval", value: function value() {var e = this.video;if (e) if (this.isVideoPlaybackQualityAvailable) {var t = e.getVideoPlaybackQuality();this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);} else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);} }]), t;}(f.default);r.default = h;}, { 32: 32, 33: 33, 51: 51 }], 11: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHED, u.default.MEDIA_DETACHING, u.default.FRAG_PARSING_METADATA));return r.id3Track = void 0, r.media = void 0, r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {f.default.prototype.destroy.call(this);} }, { key: "onMediaAttached", value: function value(e) {this.media = e.media, this.media && (this.id3Track = this.media.addTextTrack("metadata", "id3"), this.id3Track.mode = "hidden");} }, { key: "onMediaDetaching", value: function value() {this.media = void 0;} }, { key: "onFragParsingMetadata", value: function value(e) {var t = e.frag,r = e.samples,i = t.start,a = t.start + t.duration;i === a && (a += 1e-4);for (var n = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, s = 0; s < r.length; s++) {var o = this.parseID3Frame(r[s].data),l = this.decodeID3Frame(o);if (l) {var u = new n(i, a, "");u.value = l, this.id3Track.addCue(u);}}} }, { key: "parseID3Frame", value: function value(e) {if (!(e.length < 21) && 73 === e[0] && 68 === e[1] && 51 === e[2]) {var t = String.fromCharCode(e[10], e[11], e[12], e[13]);return e = e.subarray(20), { type: t, data: e };}} }, { key: "decodeID3Frame", value: function value(e) {return "TXXX" === e.type ? this.decodeTxxxFrame(e) : "PRIV" === e.type ? this.decodePrivFrame(e) : "T" === e.type[0] ? this.decodeTextFrame(e) : void 0;} }, { key: "decodeTxxxFrame", value: function value(e) {if (!(e.size < 2) && 3 === e.data[0]) {var t = 1,r = this.utf8ArrayToStr(e.data.subarray(t));t += r.length + 1;return { key: "TXXX", description: r, data: this.utf8ArrayToStr(e.data.subarray(t)) };}} }, { key: "decodeTextFrame", value: function value(e) {if (!(e.size < 2) && 3 === e.data[0]) {var t = e.data.subarray(1);return { key: e.type, data: this.utf8ArrayToStr(t) };}} }, { key: "decodePrivFrame", value: function value(e) {if (!(e.size < 2)) {var t = this.utf8ArrayToStr(e.data);return { key: "PRIV", info: t, data: e.data.subarray(t.length + 1).buffer };}} }, { key: "utf8ArrayToStr", value: function value(e) {for (var t = void 0, r = void 0, i = "", a = 0, n = e.length; a < n;) {var s = e[a++];switch (s >> 4) {case 0:return i;case 1:case 2:case 3:case 4:case 5:case 6:case 7:i += String.fromCharCode(s);break;case 12:case 13:t = e[a++], i += String.fromCharCode((31 & s) << 6 | 63 & t);break;case 14:t = e[a++], r = e[a++], i += String.fromCharCode((15 & s) << 12 | (63 & t) << 6 | (63 & r) << 0);}}return i;} }]), t;}(f.default);r.default = c;}, { 32: 32, 33: 33 }], 12: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = e(51),h = e(31),g = e(35),v = i(g),p = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MANIFEST_LOADED, u.default.LEVEL_LOADED, u.default.FRAG_LOADED, u.default.ERROR));return r.ontick = r.tick.bind(r), r._manualLevel = -1, r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {this.timer && (clearTimeout(this.timer), this.timer = null), this._manualLevel = -1;} }, { key: "startLoad", value: function value() {this.canload = !0;var e = this._levels;e && e.forEach(function (e) {e.loadError = 0;var t = e.details;t && t.live && (e.details = void 0);}), this.timer && this.tick();} }, { key: "stopLoad", value: function value() {this.canload = !1;} }, { key: "onManifestLoaded", value: function value(e) {var t,r = [],i = [],a = {},n = !1,s = !1,o = this.hls,l = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),d = function d(e, t) {return MediaSource.isTypeSupported(e + "/mp4;codecs=" + t);};if (e.levels.forEach(function (e) {e.videoCodec && (n = !0), l && e.audioCodec && e.audioCodec.indexOf("mp4a.40.34") !== -1 && (e.audioCodec = void 0), (e.audioCodec || e.attrs && e.attrs.AUDIO) && (s = !0);var t = a[e.bitrate];void 0 === t ? (a[e.bitrate] = r.length, e.url = [e.url], e.urlId = 0, r.push(e)) : r[t].url.push(e.url);}), n && s ? r.forEach(function (e) {e.videoCodec && i.push(e);}) : i = r, i = i.filter(function (e) {var t = e.audioCodec,r = e.videoCodec;return (!t || d("audio", t)) && (!r || d("video", r));}), i.length) {t = i[0].bitrate, i.sort(function (e, t) {return e.bitrate - t.bitrate;}), this._levels = i;for (var f = 0; f < i.length; f++) {if (i[f].bitrate === t) {this._firstLevel = f, c.logger.log("manifest loaded," + i.length + " level(s) found, first bitrate:" + t);break;}}o.trigger(u.default.MANIFEST_PARSED, { levels: i, firstLevel: this._firstLevel, stats: e.stats, audio: s, video: n, altAudio: e.audioTracks.length > 0 });} else o.trigger(u.default.ERROR, { type: h.ErrorTypes.MEDIA_ERROR, details: h.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: !0, url: o.url, reason: "no level with compatible codecs found in manifest" });} }, { key: "setLevelInternal", value: function value(e) {var t = this._levels,r = this.hls;if (e >= 0 && e < t.length) {if (this.timer && (clearTimeout(this.timer), this.timer = null), this._level !== e) {c.logger.log("switching to level " + e), this._level = e;var i = t[e];i.level = e, r.trigger(u.default.LEVEL_SWITCH, i), r.trigger(u.default.LEVEL_SWITCHING, i);}var a = t[e],n = a.details;if (!n || n.live === !0) {var s = a.urlId;r.trigger(u.default.LEVEL_LOADING, { url: a.url[s], level: e, id: s });}} else r.trigger(u.default.ERROR, { type: h.ErrorTypes.OTHER_ERROR, details: h.ErrorDetails.LEVEL_SWITCH_ERROR, level: e, fatal: !1, reason: "invalid level idx" });} }, { key: "onError", value: function value(e) {if (!e.fatal) {var t = e.details,r = this.hls,i = void 0,a = void 0,n = !1;switch (t) {case h.ErrorDetails.FRAG_LOAD_ERROR:case h.ErrorDetails.FRAG_LOAD_TIMEOUT:case h.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case h.ErrorDetails.KEY_LOAD_ERROR:case h.ErrorDetails.KEY_LOAD_TIMEOUT:i = e.frag.level;break;case h.ErrorDetails.LEVEL_LOAD_ERROR:case h.ErrorDetails.LEVEL_LOAD_TIMEOUT:i = e.context.level, n = !0;break;case h.ErrorDetails.REMUX_ALLOC_ERROR:i = e.level;}if (void 0 !== i) {a = this._levels[i], a.loadError ? a.loadError++ : a.loadError = 1;var s = a.url.length;if (s > 1 && a.loadError < s) a.urlId = (a.urlId + 1) % s, a.details = void 0, c.logger.warn("level controller," + t + " for level " + i + ": switching to redundant stream id " + a.urlId);else {if (this._manualLevel === -1 && i) c.logger.warn("level controller," + t + ": switch-down for next fragment"), r.nextAutoLevel = Math.max(0, i - 1);else if (a && a.details && a.details.live) c.logger.warn("level controller," + t + " on live stream, discard"), n && (this._level = void 0);else if (t === h.ErrorDetails.LEVEL_LOAD_ERROR || t === h.ErrorDetails.LEVEL_LOAD_TIMEOUT) {var o = r.media,l = o && v.default.isBuffered(o, o.currentTime) && v.default.isBuffered(o, o.currentTime + .5);if (l) {var u = r.config.levelLoadingRetryDelay;c.logger.warn("level controller," + t + ", but media buffered, retry in " + u + "ms"), this.timer = setTimeout(this.ontick, u);} else c.logger.error("cannot recover " + t + " error"), this._level = void 0, this.timer && (clearTimeout(this.timer), this.timer = null), e.fatal = !0;}}}}} }, { key: "onFragLoaded", value: function value(e) {var t = e.frag;if (t && "main" === t.type) {var r = this._levels[t.level];r && (r.loadError = 0);}} }, { key: "onLevelLoaded", value: function value(e) {var t = e.level;if (t === this._level) {var r = this._levels[t];r.loadError = 0;var i = e.details;if (i.live) {var a = 1e3 * (i.averagetargetduration ? i.averagetargetduration : i.targetduration),n = r.details;n && i.endSN === n.endSN && (a /= 2, c.logger.log("same live playlist, reload twice faster")), a -= performance.now() - e.stats.trequest, a = Math.max(1e3, Math.round(a)), c.logger.log("live playlist, reload in " + a + " ms"), this.timer = setTimeout(this.ontick, a);} else this.timer = null;}} }, { key: "tick", value: function value() {var e = this._level;if (void 0 !== e && this.canload) {var t = this._levels[e];if (t && t.url) {var r = t.urlId;this.hls.trigger(u.default.LEVEL_LOADING, { url: t.url[r], level: e, id: r });}}} }, { key: "levels", get: function get() {return this._levels;} }, { key: "level", get: function get() {return this._level;}, set: function set(e) {var t = this._levels;t && t.length > e && (this._level === e && void 0 !== t[e].details || this.setLevelInternal(e));} }, { key: "manualLevel", get: function get() {return this._manualLevel;}, set: function set(e) {this._manualLevel = e, void 0 === this._startLevel && (this._startLevel = e), e !== -1 && (this.level = e);} }, { key: "firstLevel", get: function get() {return this._firstLevel;}, set: function set(e) {this._firstLevel = e;} }, { key: "startLevel", get: function get() {if (void 0 === this._startLevel) {var e = this.hls.config.startLevel;return void 0 !== e ? e : this._firstLevel;}return this._startLevel;}, set: function set(e) {this._startLevel = e;} }, { key: "nextLoadLevel", get: function get() {return this._manualLevel !== -1 ? this._manualLevel : this.hls.nextAutoLevel;}, set: function set(e) {this.level = e, this._manualLevel === -1 && (this.hls.nextAutoLevel = e);} }]), t;}(f.default);r.default = p;}, { 31: 31, 32: 32, 33: 33, 35: 35, 51: 51 }], 13: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(46),u = i(l),d = e(35),f = i(d),c = e(25),h = i(c),g = e(33),v = i(g),p = e(32),y = i(p),m = e(36),E = i(m),b = e(52),T = i(b),_ = e(31),k = e(51),R = { STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_LEVEL: "WAITING_LEVEL", PARSING: "PARSING", PARSED: "PARSED", BUFFER_FLUSHING: "BUFFER_FLUSHING", ENDED: "ENDED", ERROR: "ERROR" },A = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, v.default.MEDIA_ATTACHED, v.default.MEDIA_DETACHING, v.default.MANIFEST_LOADING, v.default.MANIFEST_PARSED, v.default.LEVEL_LOADED, v.default.KEY_LOADED, v.default.FRAG_LOADED, v.default.FRAG_LOAD_EMERGENCY_ABORTED, v.default.FRAG_PARSING_INIT_SEGMENT, v.default.FRAG_PARSING_DATA, v.default.FRAG_PARSED, v.default.ERROR, v.default.AUDIO_TRACK_SWITCHING, v.default.AUDIO_TRACK_SWITCHED, v.default.BUFFER_CREATED, v.default.BUFFER_APPENDED, v.default.BUFFER_FLUSHED));return r.config = e.config, r.audioCodecSwap = !1, r.ticks = 0, r._state = R.STOPPED, r.ontick = r.tick.bind(r), r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), y.default.prototype.destroy.call(this), this.state = R.STOPPED;} }, { key: "startLoad", value: function value(e) {if (this.levels) {var t = this.lastCurrentTime,r = this.hls;if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {var i = r.startLevel;i === -1 && (i = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1;}t > 0 && e === -1 && (k.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = R.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();} else this.forceStartLoad = !0, this.state = R.STOPPED;} }, { key: "stopLoad", value: function value() {var e = this.fragCurrent;e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = R.STOPPED, this.forceStartLoad = !1;} }, { key: "tick", value: function value() {1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0);} }, { key: "doTick", value: function value() {switch (this.state) {case R.ERROR:break;case R.BUFFER_FLUSHING:this.fragLoadError = 0;break;case R.IDLE:this._doTickIdle();break;case R.WAITING_LEVEL:var e = this.levels[this.level];e && e.details && (this.state = R.IDLE);break;case R.FRAG_LOADING_WAITING_RETRY:var t = performance.now(),r = this.retryDate;(!r || t >= r || this.media && this.media.seeking) && (k.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = R.IDLE);break;case R.ERROR:case R.STOPPED:case R.FRAG_LOADING:case R.PARSING:case R.PARSED:case R.ENDED:}this._checkBuffer(), this._checkFragmentChanged();} }, { key: "_doTickIdle", value: function value() {
            var e = this.hls,t = e.config,r = this.media;if (void 0 === this.levelLastLoaded || r || !this.startFragRequested && t.startFragPrefetch) {var i = void 0;i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;var a = e.nextLoadLevel,n = this.levels[a],s = n.bitrate,o = void 0;o = s ? Math.max(8 * t.maxBufferSize / s, t.maxBufferLength) : t.maxBufferLength, o = Math.min(o, t.maxMaxBufferLength);var l = f.default.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, t.maxBufferHole),u = l.len;if (!(u >= o)) {k.logger.trace("buffer length of " + u.toFixed(3) + " is below max of " + o.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = a;var d = n.details;if (void 0 === d || d.live && this.levelLastLoaded !== a) return void (this.state = R.WAITING_LEVEL);var c = this.fragPrevious;if (!d.live && c && c.sn === d.endSN) {if (Math.min(r.duration, c.start + c.duration) - Math.max(l.end, c.start) <= Math.max(.2, c.duration / 2)) {var h = {};return this.altAudio && (h.type = "video"), this.hls.trigger(v.default.BUFFER_EOS, h), void (this.state = R.ENDED);}}this._fetchPayloadOrEos(i, l, d);}}} }, { key: "_fetchPayloadOrEos", value: function value(e, t, r) {var i = this.fragPrevious,a = this.level,n = r.fragments,s = n.length;if (0 !== s) {var o = n[0].start,l = n[s - 1].start + n[s - 1].duration,u = t.end,d = void 0;if (r.initSegment && !r.initSegment.data) d = r.initSegment;else if (r.live) {var f = this.config.initialLiveManifestSize;if (s < f) return void k.logger.warn("Can not start playback of a level, reason: not enough fragments " + s + " < " + f);if (null === (d = this._ensureFragmentAtLivePoint(r, u, o, l, i, n, s))) return;} else u < o && (d = n[0]);d || (d = this._findFragment(o, i, s, n, u, l, r)), d && this._loadFragmentOrKey(d, a, r, e, u);}} }, { key: "_ensureFragmentAtLivePoint", value: function value(e, t, r, i, a, n, s) {var o = this.hls.config,l = this.media,u = void 0,d = void 0 !== o.liveMaxLatencyDuration ? o.liveMaxLatencyDuration : o.liveMaxLatencyDurationCount * e.targetduration;if (t < Math.max(r - o.maxFragLookUpTolerance, i - d)) {var f = this.liveSyncPosition = this.computeLivePosition(r, e);k.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + f.toFixed(3)), t = f, l && l.readyState && l.duration > f && (l.currentTime = f);}if (e.PTSKnown && t > i && l && l.readyState) return null;if (this.startFragRequested && !e.PTSKnown) {if (a) {var c = a.sn + 1;c >= e.startSN && c <= e.endSN && (u = n[c - e.startSN], k.logger.log("live playlist, switching playlist, load frag with next SN: " + u.sn));}u || (u = n[Math.min(s - 1, Math.round(s / 2))], k.logger.log("live playlist, switching playlist, unknown, load middle frag : " + u.sn));}return u;} }, { key: "_findFragment", value: function value(e, t, r, i, a, n, s) {var o = this.hls.config,l = void 0,d = void 0,f = o.maxFragLookUpTolerance,c = t ? i[t.sn - i[0].sn + 1] : void 0,h = function h(e) {var t = Math.min(f, e.duration);return e.start + e.duration - t <= a ? 1 : e.start - t > a && e.start ? -1 : 0;};if (a < n ? (a > n - f && (f = 0), d = c && !h(c) ? c : u.default.search(i, h)) : d = i[r - 1], d) {l = d;var g = l.sn - s.startSN,v = t && l.level === t.level,p = i[g - 1],y = i[g + 1];if (v && l.sn === t.sn) {if (l.sn < s.endSN) {var m = t.deltaPTS;m && m > o.maxBufferHole && t.dropped && g ? (l = p, k.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), t.loadCounter--) : (l = y, k.logger.log("SN just loaded, load next one: " + l.sn));} else l = null;} else l.dropped && !v && (y && y.backtracked ? (k.logger.warn("Already backtracked from fragment " + (g + 1) + ", will not backtrack to fragment " + g + ". Loading fragment " + (g + 1)), l = y) : (k.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), l.dropped = 0, p ? (p.loadCounter && p.loadCounter--, l = p) : l = null));}return l;} }, { key: "_loadFragmentOrKey", value: function value(e, t, r, i, a) {var n = this.hls,s = n.config;if (!e.decryptdata || null == e.decryptdata.uri || null != e.decryptdata.key) {if (k.logger.log("Loading " + e.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + t + ", currentTime:" + i.toFixed(3) + ",bufferEnd:" + a.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, e.loadCounter) {e.loadCounter++;var o = s.fragLoadingLoopThreshold;if (e.loadCounter > o && Math.abs(this.fragLoadIdx - e.loadIdx) < o) return void n.trigger(v.default.ERROR, { type: _.ErrorTypes.MEDIA_ERROR, details: _.ErrorDetails.FRAG_LOOP_LOADING_ERROR, fatal: !1, frag: e });} else e.loadCounter = 1;return e.loadIdx = this.fragLoadIdx, this.fragCurrent = e, this.startFragRequested = !0, isNaN(e.sn) || (this.nextLoadPosition = e.start + e.duration), e.autoLevel = n.autoLevelEnabled, e.bitrateTest = this.bitrateTest, n.trigger(v.default.FRAG_LOADING, { frag: e }), this.demuxer || (this.demuxer = new h.default(n, "main")), void (this.state = R.FRAG_LOADING);}k.logger.log("Loading key for " + e.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + t), this.state = R.KEY_LOADING, n.trigger(v.default.KEY_LOADING, { frag: e });} }, { key: "getBufferedFrag", value: function value(e) {return u.default.search(this._bufferedFrags, function (t) {return e < t.startPTS ? -1 : e > t.endPTS ? 1 : 0;});} }, { key: "followingBufferedFrag", value: function value(e) {return e ? this.getBufferedFrag(e.endPTS + .5) : null;} }, { key: "_checkFragmentChanged", value: function value() {var e,t,r = this.media;if (r && r.readyState && r.seeking === !1 && (t = r.currentTime, t > r.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = t), f.default.isBuffered(r, t) ? e = this.getBufferedFrag(t) : f.default.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {var i = e;if (i !== this.fragPlaying) {this.hls.trigger(v.default.FRAG_CHANGED, { frag: i });var a = i.level;this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(v.default.LEVEL_SWITCHED, { level: a }), this.fragPlaying = i;}}} }, { key: "immediateLevelSwitch", value: function value() {if (k.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {this.immediateSwitch = !0;var e = this.media,t = void 0;e ? (t = e.paused, e.pause()) : t = !0, this.previouslyPaused = t;}var r = this.fragCurrent;r && r.loader && r.loader.abort(), this.fragCurrent = null, this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.flushMainBuffer(0, Number.POSITIVE_INFINITY);} }, { key: "immediateLevelSwitchEnd", value: function value() {var e = this.media;e && e.buffered.length && (this.immediateSwitch = !1, f.default.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play());} }, { key: "nextLevelSwitch", value: function value() {var e = this.media;if (e && e.readyState) {var t = void 0,r = void 0,i = void 0;if (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, r = this.getBufferedFrag(e.currentTime), r && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;else {var a = this.hls.nextLoadLevel,n = this.levels[a],s = this.fragLastKbps;t = s && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * s) + 1 : 0;}if ((i = this.getBufferedFrag(e.currentTime + t)) && (i = this.followingBufferedFrag(i))) {var o = this.fragCurrent;o && o.loader && o.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(i.startPTS, Number.POSITIVE_INFINITY);}}} }, { key: "flushMainBuffer", value: function value(e, t) {this.state = R.BUFFER_FLUSHING;var r = { startOffset: e, endOffset: t };this.altAudio && (r.type = "video"), this.hls.trigger(v.default.BUFFER_FLUSHING, r);} }, { key: "onMediaAttached", value: function value(e) {var t = this.media = this.mediaBuffer = e.media;this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);var r = this.config;this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition);} }, { key: "onMediaDetaching", value: function value() {var e = this.media;e && e.ended && (k.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);var t = this.levels;t && t.forEach(function (e) {e.details && e.details.fragments.forEach(function (e) {e.loadCounter = void 0, e.backtracked = void 0;});}), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad();} }, { key: "onMediaSeeking", value: function value() {var e = this.media,t = e ? e.currentTime : void 0,r = this.config;if (k.logger.log("media seeking to " + t.toFixed(3)), this.state === R.FRAG_LOADING) {var i = this.mediaBuffer ? this.mediaBuffer : e,a = f.default.bufferInfo(i, t, this.config.maxBufferHole),n = this.fragCurrent;if (0 === a.len && n) {var s = r.maxFragLookUpTolerance,o = n.start - s,l = n.start + n.duration + s;t < o || t > l ? (n.loader && (k.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = R.IDLE) : k.logger.log("seeking outside of buffer but within currently loaded fragment range");}} else this.state === R.ENDED && (this.state = R.IDLE);e && (this.lastCurrentTime = t), this.state !== R.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * r.fragLoadingLoopThreshold), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = t), this.tick();} }, { key: "onMediaSeeked", value: function value() {k.logger.log("media seeked to " + this.media.currentTime.toFixed(3)), this.tick();} }, { key: "onMediaEnded", value: function value() {k.logger.log("media ended"), this.startPosition = this.lastCurrentTime = 0;} }, { key: "onManifestLoading", value: function value() {k.logger.log("trigger BUFFER_RESET"), this.hls.trigger(v.default.BUFFER_RESET), this._bufferedFrags = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0;} }, { key: "onManifestParsed", value: function value(e) {var t,r = !1,i = !1;e.levels.forEach(function (e) {(t = e.audioCodec) && (t.indexOf("mp4a.40.2") !== -1 && (r = !0), t.indexOf("mp4a.40.5") !== -1 && (i = !0));}), this.audioCodecSwitch = r && i, this.audioCodecSwitch && k.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startLevelLoaded = !1, this.startFragRequested = !1;var a = this.config;(a.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(a.startPosition);} }, { key: "onLevelLoaded", value: function value(e) {var t = e.details,r = e.level,i = this.levels[r],a = t.totalduration,n = 0;if (k.logger.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), this.levelLastLoaded = r, t.live) {var s = i.details;s && t.fragments.length > 0 ? (E.default.mergeDetails(s, t), n = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(n, s), t.PTSKnown ? k.logger.log("live playlist sliding:" + n.toFixed(3)) : k.logger.log("live playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, k.logger.log("live playlist - first load, unknown sliding"));} else t.PTSKnown = !1;if (i.details = t, this.hls.trigger(v.default.LEVEL_UPDATED, { details: t, level: r }), this.startFragRequested === !1) {if (this.startPosition === -1 || this.lastCurrentTime === -1) {var o = t.startTimeOffset;isNaN(o) ? t.live ? (this.startPosition = this.computeLivePosition(n, t), k.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (o < 0 && (k.logger.log("negative start time offset " + o + ", count from end of last fragment"), o = n + a + o), k.logger.log("start time offset found in playlist, adjust startPosition to " + o), this.startPosition = o), this.lastCurrentTime = this.startPosition;}this.nextLoadPosition = this.startPosition;}this.state === R.WAITING_LEVEL && (this.state = R.IDLE), this.tick();} }, { key: "onKeyLoaded", value: function value() {this.state === R.KEY_LOADING && (this.state = R.IDLE, this.tick());} }, { key: "onFragLoaded", value: function value(e) {var t = this.fragCurrent,r = e.frag;if (this.state === R.FRAG_LOADING && t && "main" === r.type && r.level === t.level && r.sn === t.sn) {var i = e.stats,a = this.levels[t.level],n = a.details;if (k.logger.log("Loaded  " + t.sn + " of [" + n.startSN + " ," + n.endSN + "],level " + t.level), this.bitrateTest = !1, this.stats = i, r.bitrateTest === !0 && this.hls.nextLoadLevel) this.state = R.IDLE, this.startFragRequested = !1, i.tparsed = i.tbuffered = performance.now(), this.hls.trigger(v.default.FRAG_BUFFERED, { stats: i, frag: t, id: "main" }), this.tick();else if ("initSegment" === r.sn) this.state = R.IDLE, i.tparsed = i.tbuffered = performance.now(), n.initSegment.data = e.payload, this.hls.trigger(v.default.FRAG_BUFFERED, { stats: i, frag: t, id: "main" }), this.tick();else {this.state = R.PARSING;var s = n.totalduration,o = t.level,l = t.sn,u = this.config.defaultAudioCodec || a.audioCodec;this.audioCodecSwap && (k.logger.log("swapping playlist audio codec"), void 0 === u && (u = this.lastAudioCodec), u && (u = u.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5")), this.pendingBuffering = !0, this.appended = !1, k.logger.log("Parsing " + l + " of [" + n.startSN + " ," + n.endSN + "],level " + o + ", cc " + t.cc);var d = this.demuxer;d || (d = this.demuxer = new h.default(this.hls, "main"));var f = this.media,c = f && f.seeking,g = !c && (n.PTSKnown || !n.live),p = n.initSegment ? n.initSegment.data : [];d.push(e.payload, p, u, a.videoCodec, t, s, g, void 0);}}this.fragLoadError = 0;} }, { key: "onFragParsingInitSegment", value: function value(e) {var t = this.fragCurrent,r = e.frag;if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === R.PARSING) {var i,a,n = e.tracks;if (n.audio && this.altAudio && delete n.audio, a = n.audio) {var s = this.levels[this.level].audioCodec,o = navigator.userAgent.toLowerCase();s && this.audioCodecSwap && (k.logger.log("swapping playlist audio codec"), s = s.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== a.metadata.channelCount && o.indexOf("firefox") === -1 && (s = "mp4a.40.5"), o.indexOf("android") !== -1 && "audio/mpeg" !== a.container && (s = "mp4a.40.2", k.logger.log("Android: force audio codec to " + s)), a.levelCodec = s, a.id = e.id;}a = n.video, a && (a.levelCodec = this.levels[this.level].videoCodec, a.id = e.id), this.hls.trigger(v.default.BUFFER_CODECS, n);for (i in n) {a = n[i], k.logger.log("main track:" + i + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");var l = a.initSegment;l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(v.default.BUFFER_APPENDING, { type: i, data: l, parent: "main", content: "initSegment" }));}this.tick();}} }, { key: "onFragParsingData", value: function value(e) {var t = this,r = this.fragCurrent,i = e.frag;if (r && "main" === e.id && i.sn === r.sn && i.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === R.PARSING) {var a = this.levels[this.level],n = r;if (isNaN(e.endPTS) && (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), k.logger.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type) if (n.dropped = e.dropped, n.dropped) {if (!n.backtracked) return n.backtracked = !0, this.nextLoadPosition = e.startPTS, this.state = R.IDLE, void this.tick();k.logger.warn("Already backtracked on this fragment, appending with the gap");} else n.backtracked = !1;var s = E.default.updateFragPTSDTS(a.details, n, e.startPTS, e.endPTS, e.startDTS, e.endDTS),o = this.hls;o.trigger(v.default.LEVEL_PTS_UPDATED, { details: a.details, level: this.level, drift: s, type: e.type, start: e.startPTS, end: e.endPTS }), [e.data1, e.data2].forEach(function (r) {r && r.length && t.state === R.PARSING && (t.appended = !0, t.pendingBuffering = !0, o.trigger(v.default.BUFFER_APPENDING, { type: e.type, data: r, parent: "main", content: "data" }));}), this.tick();}} }, { key: "onFragParsed", value: function value(e) {var t = this.fragCurrent,r = e.frag;t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === R.PARSING && (this.stats.tparsed = performance.now(), this.state = R.PARSED, this._checkAppendedParsed());} }, { key: "onAudioTrackSwitching", value: function value(e) {var t = !!e.url,r = e.id;if (!t) {if (this.mediaBuffer !== this.media) {k.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;var i = this.fragCurrent;i.loader && (k.logger.log("switching to main audio track, cancel main fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = R.IDLE;}var a = this.hls;a.trigger(v.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), a.trigger(v.default.AUDIO_TRACK_SWITCHED, { id: r }), this.altAudio = !1;}} }, { key: "onAudioTrackSwitched", value: function value(e) {var t = e.id,r = !!this.hls.audioTracks[t].url;if (r) {var i = this.videoBuffer;i && this.mediaBuffer !== i && (k.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i);}this.altAudio = r, this.tick();} }, { key: "onBufferCreated", value: function value(e) {var t = e.tracks,r = void 0,i = void 0,a = !1;for (var n in t) {var s = t[n];"main" === s.id ? (i = n, r = s, "video" === n && (this.videoBuffer = t[n].buffer)) : a = !0;}a && r ? (k.logger.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media;} }, { key: "onBufferAppended", value: function value(e) {if ("main" === e.parent) {var t = this.state;t !== R.PARSING && t !== R.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed());}} }, { key: "_checkAppendedParsed", value: function value() {if (!(this.state !== R.PARSED || this.appended && this.pendingBuffering)) {var e = this.fragCurrent;if (e) {var t = this.mediaBuffer ? this.mediaBuffer : this.media;k.logger.log("main buffered : " + T.default.toString(t.buffered));var r = this._bufferedFrags.filter(function (e) {return f.default.isBuffered(t, (e.startPTS + e.endPTS) / 2);});r.push(e), this._bufferedFrags = r.sort(function (e, t) {return e.startPTS - t.startPTS;}), this.fragPrevious = e;var i = this.stats;i.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * i.total / (i.tbuffered - i.tfirst)), this.hls.trigger(v.default.FRAG_BUFFERED, { stats: i, frag: e, id: "main" }), this.state = R.IDLE;}this.tick();}} }, { key: "onError", value: function value(e) {var t = e.frag || this.fragCurrent;if (!t || "main" === t.type) {var r = this.media,i = r && f.default.isBuffered(r, r.currentTime) && f.default.isBuffered(r, r.currentTime + .5);switch (e.details) {case _.ErrorDetails.FRAG_LOAD_ERROR:case _.ErrorDetails.FRAG_LOAD_TIMEOUT:case _.ErrorDetails.KEY_LOAD_ERROR:case _.ErrorDetails.KEY_LOAD_TIMEOUT:if (!e.fatal) {var a = this.fragLoadError;a ? a++ : a = 1;var n = this.config;if (a <= n.fragLoadingMaxRetry || i || t.autoLevel && t.level) {this.fragLoadError = a, t.loadCounter = 0;var s = Math.min(Math.pow(2, a - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);k.logger.warn("mediaController: frag loading failed, retry in " + s + " ms"), this.retryDate = performance.now() + s, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.state = R.FRAG_LOADING_WAITING_RETRY;} else k.logger.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = R.ERROR;}break;case _.ErrorDetails.FRAG_LOOP_LOADING_ERROR:e.fatal || (i ? (this._reduceMaxBufferLength(t.duration), this.state = R.IDLE) : t.autoLevel && 0 !== t.level || (e.fatal = !0, this.state = R.ERROR));break;case _.ErrorDetails.LEVEL_LOAD_ERROR:case _.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state !== R.ERROR && (e.fatal ? (this.state = R.ERROR, k.logger.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : this.state === R.WAITING_LEVEL && (this.state = R.IDLE));break;case _.ErrorDetails.BUFFER_FULL_ERROR:"main" !== e.parent || this.state !== R.PARSING && this.state !== R.PARSED || (i ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = R.IDLE) : (k.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)));}}} }, { key: "_reduceMaxBufferLength", value: function value(e) {var t = this.config;t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, k.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), this.fragLoadIdx += 2 * t.fragLoadingLoopThreshold);} }, { key: "_checkBuffer", value: function value() {var e = this.media;if (e && e.readyState) {var t = e.currentTime,r = this.mediaBuffer ? this.mediaBuffer : e,i = r.buffered;if (!this.loadedmetadata && i.length) {this.loadedmetadata = !0;var a = e.seeking ? t : this.startPosition,n = f.default.isBuffered(r, a);t === a && n || (k.logger.log("target start position:" + a), n || (a = i.start(0), k.logger.log("target start position not buffered, seek to buffered.start(0) " + a)), k.logger.log("adjust currentTime from " + t + " to " + a), e.currentTime = a);} else if (this.immediateSwitch) this.immediateLevelSwitchEnd();else {var s = f.default.bufferInfo(e, t, 0),o = !(e.paused || e.ended || 0 === e.buffered.length),l = t !== this.lastCurrentTime,u = this.config;if (l) this.stallReported && (k.logger.warn("playback not stuck anymore @" + t + ", after " + Math.round(performance.now() - this.stalled) + "ms"), this.stallReported = !1), this.stalled = void 0, this.nudgeRetry = 0;else if (o) {var d = performance.now(),c = this.hls;if (this.stalled) {var h = d - this.stalled,g = s.len,p = this.nudgeRetry || 0;if (g <= .5 && h > 1e3 * u.lowBufferWatchdogPeriod) {this.stallReported || (this.stallReported = !0, k.logger.warn("playback stalling in low buffer @" + t), c.trigger(v.default.ERROR, { type: _.ErrorTypes.MEDIA_ERROR, details: _.ErrorDetails.BUFFER_STALLED_ERROR, fatal: !1, buffer: g }));var y = s.nextStart,m = y - t;if (y && m < u.maxSeekHole && m > 0) {this.nudgeRetry = ++p;var E = p * u.nudgeOffset;k.logger.log("adjust currentTime from " + e.currentTime + " to next buffered @ " + y + " + nudge " + E), e.currentTime = y + E, this.stalled = void 0, c.trigger(v.default.ERROR, { type: _.ErrorTypes.MEDIA_ERROR, details: _.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal: !1, hole: y + E - t });}} else if (g > .5 && h > 1e3 * u.highBufferWatchdogPeriod) if (this.stallReported || (this.stallReported = !0, k.logger.warn("playback stalling in high buffer @" + t), c.trigger(v.default.ERROR, { type: _.ErrorTypes.MEDIA_ERROR, details: _.ErrorDetails.BUFFER_STALLED_ERROR, fatal: !1, buffer: g })), this.stalled = void 0, this.nudgeRetry = ++p, p < u.nudgeMaxRetry) {var b = e.currentTime,T = b + p * u.nudgeOffset;k.logger.log("adjust currentTime from " + b + " to " + T), e.currentTime = T, c.trigger(v.default.ERROR, { type: _.ErrorTypes.MEDIA_ERROR, details: _.ErrorDetails.BUFFER_NUDGE_ON_STALL, fatal: !1 });} else k.logger.error("still stuck in high buffer @" + t + " after " + u.nudgeMaxRetry + ", raise fatal error"), c.trigger(v.default.ERROR, { type: _.ErrorTypes.MEDIA_ERROR, details: _.ErrorDetails.BUFFER_STALLED_ERROR, fatal: !0 });} else this.stalled = d, this.stallReported = !1;}}}} }, { key: "onFragLoadEmergencyAborted", value: function value() {this.state = R.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick();} }, { key: "onBufferFlushed", value: function value() {var e = this.mediaBuffer ? this.mediaBuffer : this.media;this._bufferedFrags = this._bufferedFrags.filter(function (t) {return f.default.isBuffered(e, (t.startPTS + t.endPTS) / 2);}), this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = R.IDLE, this.fragPrevious = null;} }, { key: "swapAudioCodec", value: function value() {this.audioCodecSwap = !this.audioCodecSwap;} }, { key: "computeLivePosition", value: function value(e, t) {var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;return e + Math.max(0, t.totalduration - r);} }, { key: "state", set: function set(e) {if (this.state !== e) {var t = this.state;this._state = e, k.logger.log("main stream:" + t + "->" + e), this.hls.trigger(v.default.STREAM_STATE_TRANSITION, { previousState: t, nextState: e });}}, get: function get() {return this._state;} }, { key: "currentLevel", get: function get() {var e = this.media;if (e) {var t = this.getBufferedFrag(e.currentTime);if (t) return t.level;}return -1;} }, { key: "nextBufferedFrag", get: function get() {var e = this.media;return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null;} }, { key: "nextLevel", get: function get() {var e = this.nextBufferedFrag;return e ? e.level : -1;} }, { key: "liveSyncPosition", get: function get() {return this._liveSyncPosition;}, set: function set(e) {this._liveSyncPosition = e;} }]), t;}(y.default);r.default = A;}, { 25: 25, 31: 31, 32: 32, 33: 33, 35: 35, 36: 36, 46: 46, 51: 51, 52: 52 }], 14: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = e(51),h = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.ERROR, u.default.SUBTITLE_TRACKS_UPDATED, u.default.SUBTITLE_TRACK_SWITCH, u.default.SUBTITLE_TRACK_LOADED, u.default.SUBTITLE_FRAG_PROCESSED));return r.config = e.config, r.vttFragSNsProcessed = {}, r.vttFragQueues = void 0, r.currentlyProcessing = null, r.currentTrackId = -1, r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {f.default.prototype.destroy.call(this);} }, { key: "clearVttFragQueues", value: function value() {var e = this;this.vttFragQueues = {}, this.tracks.forEach(function (t) {e.vttFragQueues[t.id] = [];});} }, { key: "nextFrag", value: function value() {if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {var e = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();this.hls.trigger(u.default.FRAG_LOADING, { frag: e });}} }, { key: "onSubtitleFragProcessed", value: function value(e) {e.success && this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn), this.currentlyProcessing = null, this.nextFrag();} }, { key: "onError", value: function value(e) {var t = e.frag;t && "subtitle" !== t.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag());} }, { key: "onSubtitleTracksUpdated", value: function value(e) {var t = this;c.logger.log("subtitle tracks updated"), this.tracks = e.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach(function (e) {t.vttFragSNsProcessed[e.id] = [];});} }, { key: "onSubtitleTrackSwitch", value: function value(e) {this.currentTrackId = e.id, this.clearVttFragQueues();} }, { key: "onSubtitleTrackLoaded", value: function value(e) {var t = this.vttFragSNsProcessed[e.id],r = this.vttFragQueues[e.id],i = this.currentlyProcessing ? this.currentlyProcessing.sn : -1,a = function a(e) {return t.indexOf(e.sn) > -1;},n = function n(e) {return r.some(function (t) {return t.sn === e.sn;});};e.details.fragments.forEach(function (t) {a(t) || t.sn === i || n(t) || (t.trackId = e.id, r.push(t));}), this.nextFrag();} }]), t;}(f.default);r.default = h;}, { 32: 32, 33: 33, 51: 51 }], 15: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}function o(e) {for (var t = [], r = 0; r < e.length; r++) {"subtitles" === e[r].kind && t.push(e[r]);}return t;}Object.defineProperty(r, "__esModule", { value: !0 });var l = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),u = e(33),d = i(u),f = e(32),c = i(f),h = e(51),g = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, d.default.MEDIA_ATTACHED, d.default.MEDIA_DETACHING, d.default.MANIFEST_LOADING, d.default.MANIFEST_LOADED, d.default.SUBTITLE_TRACK_LOADED));return r.tracks = [], r.trackId = -1, r.media = void 0, r;}return s(t, e), l(t, [{ key: "destroy", value: function value() {c.default.prototype.destroy.call(this);} }, { key: "onMediaAttached", value: function value(e) {var t = this;this.media = e.media, this.media && this.media.textTracks.addEventListener("change", function () {if (t.media) {for (var e = -1, r = o(t.media.textTracks), i = 0; i < r.length; i++) {"showing" === r[i].mode && (e = i);}t.subtitleTrack = e;}});} }, { key: "onMediaDetaching", value: function value() {this.media = void 0;} }, { key: "onManifestLoading", value: function value() {this.tracks = [], this.trackId = -1;} }, { key: "onManifestLoaded", value: function value(e) {var t = this,r = e.subtitles || [],i = !1;this.tracks = r, this.trackId = -1, this.hls.trigger(d.default.SUBTITLE_TRACKS_UPDATED, { subtitleTracks: r }), r.forEach(function (e) {e.default && (t.subtitleTrack = e.id, i = !0);});} }, { key: "onTick", value: function value() {var e = this.trackId,t = this.tracks[e];if (t) {var r = t.details;void 0 !== r && r.live !== !0 || (h.logger.log("(re)loading playlist for subtitle track " + e), this.hls.trigger(d.default.SUBTITLE_TRACK_LOADING, { url: t.url, id: e }));}} }, { key: "onSubtitleTrackLoaded", value: function value(e) {var t = this;e.id < this.tracks.length && (h.logger.log("subtitle track " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(function () {t.onTick();}, 1e3 * e.details.targetduration, this)), !e.details.live && this.timer && (clearInterval(this.timer), this.timer = null));} }, { key: "setSubtitleTrackInternal", value: function value(e) {if (e >= 0 && e < this.tracks.length) {this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = e, h.logger.log("switching to subtitle track " + e);var t = this.tracks[e];this.hls.trigger(d.default.SUBTITLE_TRACK_SWITCH, { id: e });var r = t.details;void 0 !== r && r.live !== !0 || (h.logger.log("(re)loading playlist for subtitle track " + e), this.hls.trigger(d.default.SUBTITLE_TRACK_LOADING, { url: t.url, id: e }));}} }, { key: "subtitleTracks", get: function get() {return this.tracks;} }, { key: "subtitleTrack", get: function get() {return this.trackId;}, set: function set(e) {this.trackId !== e && this.setSubtitleTrackInternal(e);} }]), t;}(c.default);r.default = g;}, { 32: 32, 33: 33, 51: 51 }], 16: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}function o(e) {if (e && e.cues) for (; e.cues.length > 0;) {e.removeCue(e.cues[0]);}}function l(e, t) {return e && e.label === t.name && !(e.textTrack1 || e.textTrack2);}function u(e, t, r, i) {return Math.min(t, i) - Math.max(e, r);}Object.defineProperty(r, "__esModule", { value: !0 });var d = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),f = e(33),c = i(f),h = e(32),g = i(h),v = e(47),p = i(v),y = e(55),m = i(y),E = e(51),b = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, c.default.MEDIA_ATTACHING, c.default.MEDIA_DETACHING, c.default.FRAG_PARSING_USERDATA, c.default.MANIFEST_LOADING, c.default.MANIFEST_LOADED, c.default.FRAG_LOADED, c.default.LEVEL_SWITCHING, c.default.INIT_PTS_FOUND));if (r.hls = e, r.config = e.config, r.enabled = !0, r.Cues = e.config.cueHandler, r.textTracks = [], r.tracks = [], r.unparsedVttFrags = [], r.initPTS = void 0, r.cueRanges = [], r.config.enableCEA708Captions) {var i = r,s = function s(e, t) {var r = null;try {r = new window.Event("addtrack");} catch (e) {r = document.createEvent("Event"), r.initEvent("addtrack", !1, !1);}r.track = e, t.dispatchEvent(r);},l = { newCue: function newCue(e, t, r) {if (!i.textTrack1) {var a = i.getExistingTrack("1");if (a) i.textTrack1 = a, o(i.textTrack1), s(i.textTrack1, i.media);else {var n = i.createTextTrack("captions", i.config.captionsTextTrack1Label, i.config.captionsTextTrack1LanguageCode);n && (n.textTrack1 = !0, i.textTrack1 = n);}}i.addCues("textTrack1", e, t, r);} },u = { newCue: function newCue(e, t, r) {if (!i.textTrack2) {var a = i.getExistingTrack("2");if (a) i.textTrack2 = a, o(i.textTrack2), s(i.textTrack2, i.media);else {var n = i.createTextTrack("captions", i.config.captionsTextTrack2Label, i.config.captionsTextTrack1LanguageCode);n && (n.textTrack2 = !0, i.textTrack2 = n);}}i.addCues("textTrack2", e, t, r);} };r.cea608Parser = new p.default(0, l, u);}return r;}return s(t, e), d(t, [{ key: "addCues",
          value: function value(e, t, r, i) {for (var a = this.cueRanges, n = !1, s = a.length; s--;) {var o = a[s],l = u(o[0], o[1], t, r);if (l >= 0 && (o[0] = Math.min(o[0], t), o[1] = Math.max(o[1], r), n = !0, l / (r - t) > .5)) return;}n || a.push([t, r]), this.Cues.newCue(this[e], t, r, i);} }, { key: "onInitPtsFound", value: function value(e) {var t = this;void 0 === this.initPTS && (this.initPTS = e.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function (e) {t.onFragLoaded(e);}), this.unparsedVttFrags = []);} }, { key: "getExistingTrack", value: function value(e) {var t = this.media;if (t) for (var r = 0; r < t.textTracks.length; r++) {var i = t.textTracks[r],a = "textTrack" + e;if (i[a] === !0) return i;}return null;} }, { key: "createTextTrack", value: function value(e, t, r) {var i = this.media;if (i) return i.addTextTrack(e, t, r);} }, { key: "destroy", value: function value() {g.default.prototype.destroy.call(this);} }, { key: "onMediaAttaching", value: function value(e) {this.media = e.media;} }, { key: "onMediaDetaching", value: function value() {o(this.textTrack1), o(this.textTrack2);} }, { key: "onManifestLoading", value: function value() {this.lastSn = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0 };var e = this.media;if (e) {var t = e.textTracks;if (t) for (var r = 0; r < t.length; r++) {o(t[r]);}}} }, { key: "onManifestLoaded", value: function value(e) {var t = this;if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges = [], this.config.enableWebVTT) {this.tracks = e.subtitles || [];var r = this.media ? this.media.textTracks : [];this.tracks.forEach(function (e, i) {var a = void 0;if (i < r.length) {var n = r[i];l(n, e) && (a = n);}a || (a = t.createTextTrack("subtitles", e.name, e.lang)), a.mode = e.default ? "showing" : "hidden", t.textTracks.push(a);});}} }, { key: "onLevelSwitching", value: function value() {this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions;} }, { key: "onFragLoaded", value: function value(e) {var t = e.frag,r = e.payload;if ("main" === t.type) {var i = t.sn;i !== this.lastSn + 1 && this.cea608Parser.reset(), this.lastSn = i;} else if ("subtitle" === t.type) if (r.byteLength) {if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(e);var a = this.vttCCs;a[t.cc] || (a[t.cc] = { start: t.start, prevCC: this.prevCC, new: !0 }, this.prevCC = t.cc);var n = this.textTracks,s = this.hls;m.default.parse(r, this.initPTS, a, t.cc, function (e) {e.forEach(function (e) {n[t.trackId].addCue(e);}), s.trigger(c.default.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: t });}, function (e) {E.logger.log("Failed to parse VTT cue: " + e), s.trigger(c.default.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t });});} else this.hls.trigger(c.default.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t });} }, { key: "onFragParsingUserdata", value: function value(e) {if (this.enabled && this.config.enableCEA708Captions) for (var t = 0; t < e.samples.length; t++) {var r = this.extractCea608Data(e.samples[t].bytes);this.cea608Parser.addData(e.samples[t].pts, r);}} }, { key: "extractCea608Data", value: function value(e) {for (var t, r, i, a, n, s = 31 & e[0], o = 2, l = [], u = 0; u < s; u++) {t = e[o++], r = 127 & e[o++], i = 127 & e[o++], a = 0 != (4 & t), n = 3 & t, 0 === r && 0 === i || a && 0 === n && (l.push(r), l.push(i));}return l;} }]), t;}(g.default);r.default = b;}, { 32: 32, 33: 33, 47: 47, 51: 51, 55: 55 }], 17: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = function () {function e(t, r) {i(this, e), this.subtle = t, this.aesIV = r;}return a(e, [{ key: "decrypt", value: function value(e, t) {return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e);} }]), e;}();r.default = n;}, {}], 18: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = function () {function e() {i(this, e), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable();}return a(e, [{ key: "uint8ArrayToUint32Array_", value: function value(e) {for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++) {r[i] = t.getUint32(4 * i);}return r;} }, { key: "initTable", value: function value() {var e = this.sBox,t = this.invSBox,r = this.subMix,i = r[0],a = r[1],n = r[2],s = r[3],o = this.invSubMix,l = o[0],u = o[1],d = o[2],f = o[3],c = new Uint32Array(256),h = 0,g = 0,v = 0;for (v = 0; v < 256; v++) {c[v] = v < 128 ? v << 1 : v << 1 ^ 283;}for (v = 0; v < 256; v++) {var p = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;p = p >>> 8 ^ 255 & p ^ 99, e[h] = p, t[p] = h;var y = c[h],m = c[y],E = c[m],b = 257 * c[p] ^ 16843008 * p;i[h] = b << 24 | b >>> 8, a[h] = b << 16 | b >>> 16, n[h] = b << 8 | b >>> 24, s[h] = b, b = 16843009 * E ^ 65537 * m ^ 257 * y ^ 16843008 * h, l[p] = b << 24 | b >>> 8, u[p] = b << 16 | b >>> 16, d[p] = b << 8 | b >>> 24, f[p] = b, h ? (h = y ^ c[c[c[E ^ y]]], g ^= c[c[g]]) : h = g = 1;}} }, { key: "expandKey", value: function value(e) {for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;) {r = t[i] === this.key[i], i++;}if (!r) {this.key = t;var a = this.keySize = t.length;if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a);var n = this.ksRows = 4 * (a + 6 + 1),s = void 0,o = void 0,l = this.keySchedule = new Uint32Array(n),u = this.invKeySchedule = new Uint32Array(n),d = this.sBox,f = this.rcon,c = this.invSubMix,h = c[0],g = c[1],v = c[2],p = c[3],y = void 0,m = void 0;for (s = 0; s < n; s++) {s < a ? y = l[s] = t[s] : (m = y, s % a == 0 ? (m = m << 8 | m >>> 24, m = d[m >>> 24] << 24 | d[m >>> 16 & 255] << 16 | d[m >>> 8 & 255] << 8 | d[255 & m], m ^= f[s / a | 0] << 24) : a > 6 && s % a == 4 && (m = d[m >>> 24] << 24 | d[m >>> 16 & 255] << 16 | d[m >>> 8 & 255] << 8 | d[255 & m]), l[s] = y = (l[s - a] ^ m) >>> 0);}for (o = 0; o < n; o++) {s = n - o, m = 3 & o ? l[s] : l[s - 4], u[o] = o < 4 || s <= 4 ? m : h[d[m >>> 24]] ^ g[d[m >>> 16 & 255]] ^ v[d[m >>> 8 & 255]] ^ p[d[255 & m]], u[o] = u[o] >>> 0;}}} }, { key: "networkToHostOrderSwap", value: function value(e) {return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24;} }, { key: "decrypt", value: function value(e, t, r) {for (var i, a, n = this.keySize + 6, s = this.invKeySchedule, o = this.invSBox, l = this.invSubMix, u = l[0], d = l[1], f = l[2], c = l[3], h = this.uint8ArrayToUint32Array_(r), g = h[0], v = h[1], p = h[2], y = h[3], m = new Int32Array(e), E = new Int32Array(m.length), b = void 0, T = void 0, _ = void 0, k = void 0, R = void 0, A = void 0, S = void 0, L = void 0, w = void 0, D = void 0, O = void 0, I = void 0, P = this.networkToHostOrderSwap; t < m.length;) {for (w = P(m[t]), D = P(m[t + 1]), O = P(m[t + 2]), I = P(m[t + 3]), R = w ^ s[0], A = I ^ s[1], S = O ^ s[2], L = D ^ s[3], i = 4, a = 1; a < n; a++) {b = u[R >>> 24] ^ d[A >> 16 & 255] ^ f[S >> 8 & 255] ^ c[255 & L] ^ s[i], T = u[A >>> 24] ^ d[S >> 16 & 255] ^ f[L >> 8 & 255] ^ c[255 & R] ^ s[i + 1], _ = u[S >>> 24] ^ d[L >> 16 & 255] ^ f[R >> 8 & 255] ^ c[255 & A] ^ s[i + 2], k = u[L >>> 24] ^ d[R >> 16 & 255] ^ f[A >> 8 & 255] ^ c[255 & S] ^ s[i + 3], R = b, A = T, S = _, L = k, i += 4;}b = o[R >>> 24] << 24 ^ o[A >> 16 & 255] << 16 ^ o[S >> 8 & 255] << 8 ^ o[255 & L] ^ s[i], T = o[A >>> 24] << 24 ^ o[S >> 16 & 255] << 16 ^ o[L >> 8 & 255] << 8 ^ o[255 & R] ^ s[i + 1], _ = o[S >>> 24] << 24 ^ o[L >> 16 & 255] << 16 ^ o[R >> 8 & 255] << 8 ^ o[255 & A] ^ s[i + 2], k = o[L >>> 24] << 24 ^ o[R >> 16 & 255] << 16 ^ o[A >> 8 & 255] << 8 ^ o[255 & S] ^ s[i + 3], i += 3, E[t] = P(b ^ g), E[t + 1] = P(k ^ v), E[t + 2] = P(_ ^ p), E[t + 3] = P(T ^ y), g = w, v = D, p = O, y = I, t += 4;}return E.buffer;} }, { key: "destroy", value: function value() {this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0;} }]), e;}();r.default = n;}, {}], 19: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var n = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),s = e(17),o = i(s),l = e(20),u = i(l),d = e(18),f = i(d),c = e(31),h = e(51),g = function () {function e(t, r) {a(this, e), this.observer = t, this.config = r, this.logEnabled = !0;try {var i = crypto ? crypto : self.crypto;this.subtle = i.subtle || i.webkitSubtle;} catch (e) {}this.disableWebCrypto = !this.subtle;}return n(e, [{ key: "isSync", value: function value() {return this.disableWebCrypto && this.config.enableSoftwareAES;} }, { key: "decrypt", value: function value(e, t, r, i) {var a = this;if (this.disableWebCrypto && this.config.enableSoftwareAES) {this.logEnabled && (h.logger.log("JS AES decrypt"), this.logEnabled = !1);var n = this.decryptor;n || (this.decryptor = n = new f.default()), n.expandKey(t), i(n.decrypt(e, 0, r));} else {this.logEnabled && (h.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);var s = this.subtle;this.key !== t && (this.key = t, this.fastAesKey = new u.default(s, t)), this.fastAesKey.expandKey().then(function (n) {new o.default(s, r).decrypt(e, n).catch(function (n) {a.onWebCryptoError(n, e, t, r, i);}).then(function (e) {i(e);});}).catch(function (n) {a.onWebCryptoError(n, e, t, r, i);});}} }, { key: "onWebCryptoError", value: function value(e, t, r, i, a) {this.config.enableSoftwareAES ? (h.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, i, a)) : (h.logger.error("decrypting error : " + e.message), this.observer.trigger(Event.ERROR, { type: c.ErrorTypes.MEDIA_ERROR, details: c.ErrorDetails.FRAG_DECRYPT_ERROR, fatal: !0, reason: e.message }));} }, { key: "destroy", value: function value() {var e = this.decryptor;e && (e.destroy(), this.decryptor = void 0);} }]), e;}();r.default = g;}, { 17: 17, 18: 18, 20: 20, 31: 31, 51: 51 }], 20: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = function () {function e(t, r) {i(this, e), this.subtle = t, this.key = r;}return a(e, [{ key: "expandKey", value: function value() {return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, !1, ["encrypt", "decrypt"]);} }]), e;}();r.default = n;}, {}], 21: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var n = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),s = e(22),o = i(s),l = e(51),u = e(27),d = i(u),f = function () {function e(t, r, i) {a(this, e), this.observer = t, this.config = i, this.remuxer = r;}return n(e, [{ key: "resetInitSegment", value: function value(e, t, r, i) {this._aacTrack = { container: "audio/adts", type: "audio", id: -1, sequenceNumber: 0, isAAC: !0, samples: [], len: 0, manifestCodec: t, duration: i, inputTimeScale: 9e4 };} }, { key: "resetTimeStamp", value: function value() {} }, { key: "append", value: function value(e, t, r, i) {var a,n,s,u,f,c,h,g,v,p,y = new d.default(e),m = 90 * y.timeStamp;for (a = this._aacTrack, c = y.length, v = e.length; c < v - 1 && (255 !== e[c] || 240 != (240 & e[c + 1])); c++) {;}for (a.samplerate || (n = o.default.getAudioConfig(this.observer, e, c, a.manifestCodec), a.config = n.config, a.samplerate = n.samplerate, a.channelCount = n.channelCount, a.codec = n.codec, l.logger.log("parsed codec:" + a.codec + ",rate:" + n.samplerate + ",nb channel:" + n.channelCount)), f = 0, u = 9216e4 / a.samplerate; c + 5 < v && (h = 1 & e[c + 1] ? 7 : 9, s = (3 & e[c + 3]) << 11 | e[c + 4] << 3 | (224 & e[c + 5]) >>> 5, (s -= h) > 0 && c + h + s <= v);) {for (g = m + f * u, p = { unit: e.subarray(c + h, c + h + s), pts: g, dts: g }, a.samples.push(p), a.len += s, c += s + h, f++; c < v - 1 && (255 !== e[c] || 240 != (240 & e[c + 1])); c++) {;}}this.remuxer.remux(a, { samples: [] }, { samples: [{ pts: m, dts: m, unit: y.payload }], inputTimeScale: 9e4 }, { samples: [] }, t, r, i);} }, { key: "destroy", value: function value() {} }], [{ key: "probe", value: function value(e) {var t,r,i = new d.default(e);if (i.hasTimeStamp) for (t = i.length, r = e.length; t < r - 1; t++) {if (255 === e[t] && 240 == (240 & e[t + 1])) return !0;}return !1;} }]), e;}();r.default = f;}, { 22: 22, 27: 27, 51: 51 }], 22: [function (e, t, r) {"use strict";var i = e(51),a = e(31),n = { getAudioConfig: function getAudioConfig(e, t, r, n) {var s,o,l,u,d,f = navigator.userAgent.toLowerCase(),c = n,h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];return s = 1 + ((192 & t[r + 2]) >>> 6), (o = (60 & t[r + 2]) >>> 2) > h.length - 1 ? void e.trigger(Event.ERROR, { type: a.ErrorTypes.MEDIA_ERROR, details: a.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: "invalid ADTS sampling index:" + o }) : (u = (1 & t[r + 2]) << 2, u |= (192 & t[r + 3]) >>> 6, i.logger.log("manifest codec:" + n + ",ADTS data:type:" + s + ",sampleingIndex:" + o + "[" + h[o] + "Hz],channelConfig:" + u), /firefox/i.test(f) ? o >= 6 ? (s = 5, d = new Array(4), l = o - 3) : (s = 2, d = new Array(2), l = o) : f.indexOf("android") !== -1 ? (s = 2, d = new Array(2), l = o) : (s = 5, d = new Array(4), n && (n.indexOf("mp4a.40.29") !== -1 || n.indexOf("mp4a.40.5") !== -1) || !n && o >= 6 ? l = o - 3 : ((n && n.indexOf("mp4a.40.2") !== -1 && o >= 6 && 1 === u || !n && 1 === u) && (s = 2, d = new Array(2)), l = o)), d[0] = s << 3, d[0] |= (14 & o) >> 1, d[1] |= (1 & o) << 7, d[1] |= u << 3, 5 === s && (d[1] |= (14 & l) >> 1, d[2] = (1 & l) << 7, d[2] |= 8, d[3] = 0), { config: d, samplerate: h[o], channelCount: u, codec: "mp4a.40." + s, manifestCodec: c });} };t.exports = n;}, { 31: 31, 51: 51 }], 23: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var n = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),s = e(33),o = i(s),l = e(31),u = e(19),d = i(u),f = e(21),c = i(f),h = e(28),g = i(h),v = e(30),p = i(v),y = e(43),m = i(y),E = e(44),b = i(E),T = function () {function e(t, r, i, n) {a(this, e), this.observer = t, this.typeSupported = r, this.config = i, this.vendor = n;}return n(e, [{ key: "destroy", value: function value() {var e = this.demuxer;e && e.destroy();} }, { key: "push", value: function value(e, t, r, i, a, n, s, l, u, f, c, h) {if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {var g = this.decrypter;null == g && (g = this.decrypter = new d.default(this.observer, this.config));var v,p = this;try {v = performance.now();} catch (e) {v = Date.now();}g.decrypt(e, t.key.buffer, t.iv.buffer, function (e) {var d;try {d = performance.now();} catch (e) {d = Date.now();}p.observer.trigger(o.default.FRAG_DECRYPTED, { stats: { tstart: v, tdecrypt: d } }), p.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), i, a, n, s, l, u, f, c, h);});} else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), i, a, n, s, l, u, f, c, h);} }, { key: "pushDecrypted", value: function value(e, t, r, i, a, n, s, u, d, f, h, v) {var y = this.demuxer;if (!y || s && !this.probe(e)) {var E = this.observer,T = this.typeSupported,_ = this.config,k = [{ demux: p.default, remux: m.default }, { demux: c.default, remux: m.default }, { demux: g.default, remux: b.default }];for (var R in k) {var A = k[R],S = A.demux.probe;if (S(e)) {var L = this.remuxer = new A.remux(E, _, T, this.vendor);y = new A.demux(E, L, _, T), this.probe = S;break;}}if (!y) return void E.trigger(o.default.ERROR, { type: l.ErrorTypes.MEDIA_ERROR, details: l.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: "no demux matching with content found" });this.demuxer = y;}var w = this.remuxer;(s || u) && (y.resetInitSegment(r, i, a, f), w.resetInitSegment()), s && (y.resetTimeStamp(), w.resetTimeStamp(v)), "function" == typeof y.setDecryptData && y.setDecryptData(t), y.append(e, n, d, h);} }]), e;}();r.default = T;}, { 19: 19, 21: 21, 28: 28, 30: 30, 31: 31, 33: 33, 43: 43, 44: 44 }], 24: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}Object.defineProperty(r, "__esModule", { value: !0 });var a = e(23),n = i(a),s = e(33),o = i(s),l = e(51),u = e(1),d = i(u),f = function f(e) {var t = new d.default();t.trigger = function (e) {for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {i[a - 1] = arguments[a];}t.emit.apply(t, [e, e].concat(i));}, t.off = function (e) {for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {i[a - 1] = arguments[a];}t.removeListener.apply(t, [e].concat(i));};var r = function r(t, _r) {e.postMessage({ event: t, data: _r });};e.addEventListener("message", function (i) {var a = i.data;switch (a.cmd) {case "init":var s = JSON.parse(a.config);e.demuxer = new n.default(t, a.typeSupported, s, a.vendor);try {(0, l.enableLogs)(s.debug === !0);} catch (e) {}r("init", null);break;case "demux":e.demuxer.push(a.data, a.decryptdata, a.initSegment, a.audioCodec, a.videoCodec, a.timeOffset, a.discontinuity, a.trackSwitch, a.contiguous, a.duration, a.accurateTimeOffset, a.defaultInitPTS);}}), t.on(o.default.FRAG_DECRYPTED, r), t.on(o.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(o.default.FRAG_PARSED, r), t.on(o.default.ERROR, r), t.on(o.default.FRAG_PARSING_METADATA, r), t.on(o.default.FRAG_PARSING_USERDATA, r), t.on(o.default.INIT_PTS_FOUND, r), t.on(o.default.FRAG_PARSING_DATA, function (t, r) {var i = [],a = { event: t, data: r };r.data1 && (a.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1), r.data2 && (a.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2), e.postMessage(a, i);});};r.default = f;}, { 1: 1, 23: 23, 33: 33, 51: 51 }], 25: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var n = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),s = e(33),o = i(s),l = e(23),u = i(l),d = e(24),f = i(d),c = e(51),h = e(31),g = e(1),v = i(g),p = function () {function t(r, i) {a(this, t), this.hls = r, this.id = i;var n = this.observer = new v.default(),s = r.config;n.trigger = function (e) {for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {r[i - 1] = arguments[i];}n.emit.apply(n, [e, e].concat(r));}, n.off = function (e) {for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {r[i - 1] = arguments[i];}n.removeListener.apply(n, [e].concat(r));};var l = function (e, t) {t = t || {}, t.frag = this.frag, t.id = this.id, r.trigger(e, t);}.bind(this);n.on(o.default.FRAG_DECRYPTED, l), n.on(o.default.FRAG_PARSING_INIT_SEGMENT, l), n.on(o.default.FRAG_PARSING_DATA, l), n.on(o.default.FRAG_PARSED, l), n.on(o.default.ERROR, l), n.on(o.default.FRAG_PARSING_METADATA, l), n.on(o.default.FRAG_PARSING_USERDATA, l), n.on(o.default.INIT_PTS_FOUND, l);var d = { mp4: MediaSource.isTypeSupported("video/mp4"), mpeg: MediaSource.isTypeSupported("audio/mpeg"), mp3: MediaSource.isTypeSupported('audio/mp4; codecs="mp3"') },g = navigator.vendor;if (s.enableWorker && "undefined" != typeof Worker) {c.logger.log("demuxing in webworker");var p = void 0;try {var y = e(3);p = this.w = y(f.default), this.onwmsg = this.onWorkerMessage.bind(this), p.addEventListener("message", this.onwmsg), p.onerror = function (e) {r.trigger(o.default.ERROR, { type: h.ErrorTypes.OTHER_ERROR, details: h.ErrorDetails.INTERNAL_EXCEPTION, fatal: !0, event: "demuxerWorker", err: { message: e.message + " (" + e.filename + ":" + e.lineno + ")" } });}, p.postMessage({ cmd: "init", typeSupported: d, vendor: g, id: i, config: JSON.stringify(s) });} catch (e) {c.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), p && URL.revokeObjectURL(p.objectURL), this.demuxer = new u.default(n, d, s, g), this.w = void 0;}} else this.demuxer = new u.default(n, d, s, g);}return n(t, [{ key: "destroy", value: function value() {var e = this.w;if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;else {var t = this.demuxer;t && (t.destroy(), this.demuxer = null);}var r = this.observer;r && (r.removeAllListeners(), this.observer = null);} }, { key: "push", value: function value(e, t, r, i, a, n, s, o) {var l = this.w,u = isNaN(a.startDTS) ? a.start : a.startDTS,d = a.decryptdata,f = this.frag,h = !(f && a.cc === f.cc),g = !(f && a.level === f.level),v = f && a.sn === f.sn + 1,p = !g && v;if (h && c.logger.log(this.id + ":discontinuity detected"), g && c.logger.log(this.id + ":switch detected"), this.frag = a, l) l.postMessage({ cmd: "demux", data: e, decryptdata: d, initSegment: t, audioCodec: r, videoCodec: i, timeOffset: u, discontinuity: h, trackSwitch: g, contiguous: p, duration: n, accurateTimeOffset: s, defaultInitPTS: o }, [e]);else {var y = this.demuxer;y && y.push(e, d, t, r, i, u, h, g, p, n, s, o);}} }, { key: "onWorkerMessage", value: function value(e) {var t = e.data,r = this.hls;switch (t.event) {case "init":URL.revokeObjectURL(this.w.objectURL);break;case o.default.FRAG_PARSING_DATA:t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));default:t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data);}} }]), t;}();r.default = p;}, { 1: 1, 23: 23, 24: 24, 3: 3, 31: 31, 33: 33, 51: 51 }], 26: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = e(51),s = function () {function e(t) {i(this, e), this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0;}return a(e, [{ key: "loadWord", value: function value() {var e = this.data,t = this.bytesAvailable,r = e.byteLength - t,i = new Uint8Array(4),a = Math.min(4, t);if (0 === a) throw new Error("no bytes available");i.set(e.subarray(r, r + a)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * a, this.bytesAvailable -= a;} }, { key: "skipBits", value: function value(e) {var t;this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);} }, { key: "readBits", value: function value(e) {var t = Math.min(this.bitsAvailable, e),r = this.word >>> 32 - t;return e > 32 && n.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), t = e - t, t > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r;} }, { key: "skipLZ", value: function value() {var e;for (e = 0; e < this.bitsAvailable; ++e) {if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;}return this.loadWord(), e + this.skipLZ();} }, { key: "skipUEG", value: function value() {this.skipBits(1 + this.skipLZ());} }, { key: "skipEG", value: function value() {this.skipBits(1 + this.skipLZ());} }, { key: "readUEG", value: function value() {var e = this.skipLZ();return this.readBits(e + 1) - 1;} }, { key: "readEG", value: function value() {var e = this.readUEG();return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);} }, { key: "readBoolean", value: function value() {return 1 === this.readBits(1);} }, { key: "readUByte", value: function value() {return this.readBits(8);} }, { key: "readUShort", value: function value() {return this.readBits(16);} }, { key: "readUInt", value: function value() {return this.readBits(32);} }, { key: "skipScalingList", value: function value(e) {var t,r,i = 8,a = 8;for (t = 0; t < e; t++) {0 !== a && (r = this.readEG(), a = (i + r + 256) % 256), i = 0 === a ? i : a;}} }, { key: "readSPS", value: function value() {var e,t,r,i,a,n,s,o = 0,l = 0,u = 0,d = 0,f = this.readUByte.bind(this),c = this.readBits.bind(this),h = this.readUEG.bind(this),g = this.readBoolean.bind(this),v = this.skipBits.bind(this),p = this.skipEG.bind(this),y = this.skipUEG.bind(this),m = this.skipScalingList.bind(this);if (f(), e = f(), c(5), v(3), f(), y(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {var E = h();if (3 === E && v(1), y(), y(), v(1), g()) for (n = 3 !== E ? 8 : 12, s = 0; s < n; s++) {g() && m(s < 6 ? 16 : 64);}}y();var b = h();if (0 === b) h();else if (1 === b) for (v(1), p(), p(), t = h(), s = 0; s < t; s++) {p();}y(), v(1), r = h(), i = h(), a = c(1), 0 === a && v(1), v(1), g() && (o = h(), l = h(), u = h(), d = h());var T = [1, 1];if (g() && g()) {switch (f()) {case 1:T = [1, 1];break;case 2:T = [12, 11];break;case 3:T = [10, 11];break;case 4:T = [16, 11];break;case 5:T = [40, 33];break;case 6:T = [24, 11];break;case 7:T = [20, 11];break;case 8:T = [32, 11];break;case 9:T = [80, 33];break;case 10:T = [18, 11];break;case 11:T = [15, 11];break;case 12:T = [64, 33];break;case 13:T = [160, 99];break;case 14:T = [4, 3];break;case 15:T = [3, 2];break;case 16:T = [2, 1];break;case 255:T = [f() << 8 | f(), f() << 8 | f()];}}return { width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l), height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (u + d), pixelRatio: T };} }, { key: "readSliceType", value: function value() {return this.readUByte(), this.readUEG(), this.readUEG();} }]), e;}();r.default = s;}, { 51: 51 }], 27: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = e(51),s = function () {function e(t) {i(this, e), this._hasTimeStamp = !1;for (var r, a, s, o, l, u, d, f, c = 0;;) {if (d = this.readUTF(t, c, 3), c += 3, "ID3" === d) c += 3, r = 127 & t[c++], a = 127 & t[c++], s = 127 & t[c++], o = 127 & t[c++], l = (r << 21) + (a << 14) + (s << 7) + o, u = c + l, this._parseID3Frames(t, c, u), c = u;else {if ("3DI" !== d) return c -= 3, void ((f = c) && (this.hasTimeStamp || n.logger.warn("ID3 tag found, but no timestamp"), this._length = f, this._payload = t.subarray(0, f)));c += 7, n.logger.log("3DI footer found, end: " + c);}}}return a(e, [{ key: "readUTF", value: function value(e, t, r) {var i = "",a = t,n = t + r;do {i += String.fromCharCode(e[a++]);} while (a < n);return i;} }, { key: "_parseID3Frames", value: function value(e, t, r) {for (var i, a; t + 8 <= r;) {switch (i = this.readUTF(e, t, 4), t += 4, e[t++] << 24 + e[t++] << 16 + e[t++] << 8 + e[t++], e[t++] << 8 + e[t++], t, i) {case "PRIV":if ("com.apple.streaming.transportStreamTimestamp" === this.readUTF(e, t, 44)) {t += 44, t += 4;var s = 1 & e[t++];this._hasTimeStamp = !0, a = ((e[t++] << 23) + (e[t++] << 15) + (e[t++] << 7) + e[t++]) / 45, s && (a += 47721858.84), a = Math.round(a), n.logger.trace("ID3 timestamp found: " + a), this._timeStamp = a;}}}} }, { key: "hasTimeStamp", get: function get() {return this._hasTimeStamp;} }, { key: "timeStamp", get: function get() {return this._timeStamp;} }, { key: "length", get: function get() {return this._length;} }, { key: "payload", get: function get() {return this._payload;} }]), e;}();r.default = s;}, { 51: 51 }], 28: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = e(33),s = function (e) {return e && e.__esModule ? e : { default: e };}(n),o = function () {function e(t, r) {i(this, e), this.observer = t, this.remuxer = r;}return a(e, [{ key: "resetTimeStamp", value: function value() {} }, { key: "resetInitSegment", value: function value(t, r, i, a) {var n = this.initData = e.parseInitSegment(t),o = {};n.audio && (o.audio = { container: "audio/mp4", codec: r, initSegment: t }), n.video && (o.video = { container: "video/mp4", codec: i, initSegment: t }), this.observer.trigger(s.default.FRAG_PARSING_INIT_SEGMENT, { tracks: o });} }, { key: "append", value: function value(t, r, i, a) {var n = this.initData,s = e.startDTS(n, t);this.remuxer.remux(n.audio, n.video, null, null, s, i, a, t);} }, { key: "destroy", value: function value() {} }], [{ key: "probe", value: function value(t) {if (t.length >= 8) {var r = e.bin2str(t.subarray(4, 8));return ["moof", "ftyp", "styp"].indexOf(r) >= 0;}return !1;} }, { key: "bin2str", value: function value(e) {return String.fromCharCode.apply(null, e);} }, { key: "findBox", value: function value(t, r) {var i,a,n,s,o,l = [];if (!r.length) return null;for (i = 0; i < t.byteLength;) {a = t[i] << 24, a |= t[i + 1] << 16, a |= t[i + 2] << 8, a |= t[i + 3], n = e.bin2str(t.subarray(i + 4, i + 8)), s = a > 1 ? i + a : t.byteLength, n === r[0] && (1 === r.length ? l.push(t.subarray(i + 8, s)) : (o = e.findBox(t.subarray(i + 8, s), r.slice(1)), o.length && (l = l.concat(o)))), i = s;}return l;} }, { key: "parseInitSegment", value: function value(t) {var r = [];return e.findBox(t, ["moov", "trak"]).forEach(function (t) {var i = e.findBox(t, ["tkhd"])[0];if (i) {var a = i[0],n = 0 === a ? 12 : 20,s = i[n] << 24 | i[n + 1] << 16 | i[n + 2] << 8 | i[n + 3];s = s < 0 ? 4294967296 + s : s;var o = e.findBox(t, ["mdia", "mdhd"])[0];if (o) {a = o[0], n = 0 === a ? 12 : 20;var l = o[n] << 24 | o[n + 1] << 16 | o[n + 2] << 8 | o[n + 3],u = e.findBox(t, ["mdia", "hdlr"])[0];if (u) {var d = e.bin2str(u.subarray(8, 12)),f = { soun: "audio", vide: "video" }[d];f && (r[s] = { timescale: l, type: f }, r[f] = { timescale: l, id: s });}}}}), r;} }, { key: "startDTS", value: function value(t, r) {var i, a, n;return i = e.findBox(r, ["moof", "traf"]), a = [].concat.apply([], i.map(function (r) {return e.findBox(r, ["tfhd"]).map(function (i) {var a, n, s;return a = i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7], n = t[a].timescale || 9e4, s = e.findBox(r, ["tfdt"]).map(function (e) {var t, r;return t = e[0], r = e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], 1 === t && (r *= Math.pow(2, 32), r += e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11]), r;})[0], (s = s || 1 / 0) / n;});})), n = Math.min.apply(null, a), isFinite(n) ? n : 0;} }]), e;}();r.default = o;}, { 33: 33 }], 29: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = e(19),s = function (e) {return e && e.__esModule ? e : { default: e };}(n),o = function () {function e(t, r, a, n) {i(this, e), this.decryptdata = a, this.discardEPB = n, this.decrypter = new s.default(t, r);}return a(e, [{ key: "decryptBuffer", value: function value(e, t) {this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t);} }, { key: "decryptAacSample", value: function value(e, t, r, i) {var a = e[t].unit,n = a.subarray(16, a.length - a.length % 16),s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),o = this;this.decryptBuffer(s, function (n) {n = new Uint8Array(n), a.set(n, 16), i || o.decryptAacSamples(e, t + 1, r);});} }, { key: "decryptAacSamples", value: function value(e, t, r) {for (;; t++) {if (t >= e.length) return void r();if (!(e[t].unit.length < 32)) {var i = this.decrypter.isSync();if (this.decryptAacSample(e, t, r, i), !i) return;}}} }, { key: "getAvcEncryptedData", value: function value(e) {for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, a = 32; a <= e.length - 16; a += 160, i += 16) {r.set(e.subarray(a, a + 16), i);}return r;} }, { key: "getAvcDecryptedUnit", value: function value(e, t) {t = new Uint8Array(t);for (var r = 0, i = 32; i <= e.length - 16; i += 160, r += 16) {e.set(t.subarray(r, r + 16), i);}return e;} }, { key: "decryptAvcSample", value: function value(e, t, r, i, a, n) {var s = this.discardEPB(a.data),o = this.getAvcEncryptedData(s),l = this;this.decryptBuffer(o.buffer, function (o) {a.data = l.getAvcDecryptedUnit(s, o), n || l.decryptAvcSamples(e, t, r + 1, i);});} }, { key: "decryptAvcSamples", value: function value(e, t, r, i) {for (;; t++, r = 0) {if (t >= e.length) return void i();for (var a = e[t].units; !(r >= a.length); r++) {var n = a[r];if (!(n.length <= 48 || 1 !== n.type && 5 !== n.type)) {var s = this.decrypter.isSync();if (this.decryptAvcSample(e, t, r, i, n, s), !s) return;}}}} }]), e;}();r.default = o;}, { 19: 19 }], 30: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var n = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),s = e(22),o = i(s),l = e(33),u = i(l),d = e(26),f = i(d),c = e(29),h = i(c),g = e(51),v = e(31),p = function () {function e(t, r, i, n) {a(this, e), this.observer = t, this.config = i, this.typeSupported = n, this.remuxer = r, this.sampleAes = null;}return n(e, [{ key: "setDecryptData", value: function value(e) {null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new h.default(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null;} }, { key: "resetInitSegment", value: function value(e, t, r, i) {this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = { container: "video/mp2t", type: "video", id: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], len: 0, dropped: 0 }, this._audioTrack = { container: "video/mp2t", type: "audio", id: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], len: 0, isAAC: !0 }, this._id3Track = { type: "id3", id: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], len: 0 }, this._txtTrack = { type: "text", id: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], len: 0 }, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = t, this.videoCodec = r, this._duration = i;} }, { key: "resetTimeStamp", value: function value() {} }, { key: "append", value: function value(e, t, r, i) {var a,n,s,o,l,d = e.length,f = !1;this.contiguous = r;
            var c = this.pmtParsed,h = this._avcTrack,p = this._audioTrack,y = this._id3Track,m = h.id,E = p.id,b = y.id,T = this._pmtId,_ = h.pesData,k = p.pesData,R = y.pesData,A = this._parsePAT,S = this._parsePMT,L = this._parsePES,w = this._parseAVCPES.bind(this),D = this._parseAACPES.bind(this),O = this._parseMPEGPES.bind(this),I = this._parseID3PES.bind(this);for (d -= d % 188, a = 0; a < d; a += 188) {if (71 === e[a]) {if (n = !!(64 & e[a + 1]), s = ((31 & e[a + 1]) << 8) + e[a + 2], (48 & e[a + 3]) >> 4 > 1) {if ((o = a + 5 + e[a + 4]) === a + 188) continue;} else o = a + 4;switch (s) {case m:n && (_ && (l = L(_)) && w(l, !1), _ = { data: [], size: 0 }), _ && (_.data.push(e.subarray(o, a + 188)), _.size += a + 188 - o);break;case E:n && (k && (l = L(k)) && (p.isAAC ? D(l) : O(l)), k = { data: [], size: 0 }), k && (k.data.push(e.subarray(o, a + 188)), k.size += a + 188 - o);break;case b:n && (R && (l = L(R)) && I(l), R = { data: [], size: 0 }), R && (R.data.push(e.subarray(o, a + 188)), R.size += a + 188 - o);break;case 0:n && (o += e[o] + 1), T = this._pmtId = A(e, o);break;case T:n && (o += e[o] + 1);var P = S(e, o, this.typeSupported.mpeg === !0 || this.typeSupported.mp3 === !0, null != this.sampleAes);m = P.avc, m > 0 && (h.id = m), E = P.audio, E > 0 && (p.id = E, p.isAAC = P.isAAC), b = P.id3, b > 0 && (y.id = b), f && !c && (g.logger.log("reparse from beginning"), f = !1, a = -188), c = this.pmtParsed = !0;break;case 17:case 8191:break;default:f = !0;}} else this.observer.trigger(u.default.ERROR, { type: v.ErrorTypes.MEDIA_ERROR, details: v.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: "TS packet did not start with 0x47" });}_ && (l = L(_)) ? (w(l, !0), h.pesData = null) : h.pesData = _, k && (l = L(k)) ? (p.isAAC ? D(l) : O(l), p.pesData = null) : (k && k.size && g.logger.log("last AAC PES packet truncated,might overlap between fragments"), p.pesData = k), R && (l = L(R)) ? (I(l), y.pesData = null) : y.pesData = R, null == this.sampleAes ? this.remuxer.remux(p, h, y, this._txtTrack, t, r, i) : this.decryptAndRemux(p, h, y, this._txtTrack, t, r, i);} }, { key: "decryptAndRemux", value: function value(e, t, r, i, a, n, s) {if (e.samples && e.isAAC) {var o = this;this.sampleAes.decryptAacSamples(e.samples, 0, function () {o.decryptAndRemuxAvc(e, t, r, i, a, n, s);});} else this.decryptAndRemuxAvc(e, t, r, i, a, n, s);} }, { key: "decryptAndRemuxAvc", value: function value(e, t, r, i, a, n, s) {if (t.samples) {var o = this;this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function () {o.remuxer.remux(e, t, r, i, a, n, s);});} else this.remuxer.remux(e, t, r, i, a, n, s);} }, { key: "destroy", value: function value() {this._initPTS = this._initDTS = void 0, this._duration = 0;} }, { key: "_parsePAT", value: function value(e, t) {return (31 & e[t + 10]) << 8 | e[t + 11];} }, { key: "_parsePMT", value: function value(e, t, r, i) {var a,n,s,o,l = { audio: -1, avc: -1, id3: -1, isAAC: !0 };for (a = (15 & e[t + 1]) << 8 | e[t + 2], n = t + 3 + a - 4, s = (15 & e[t + 10]) << 8 | e[t + 11], t += 12 + s; t < n;) {switch (o = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {case 207:if (!i) {g.logger.log("unkown stream type:" + e[t]);break;}case 15:l.audio === -1 && (l.audio = o);break;case 21:l.id3 === -1 && (l.id3 = o);break;case 219:if (!i) {g.logger.log("unkown stream type:" + e[t]);break;}case 27:l.avc === -1 && (l.avc = o);break;case 3:case 4:r ? l.audio === -1 && (l.audio = o, l.isAAC = !1) : g.logger.log("MPEG audio found, not supported in this browser for now");break;case 36:g.logger.warn("HEVC stream type found, not supported for now");break;default:g.logger.log("unkown stream type:" + e[t]);}t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4]);}return l;} }, { key: "_parsePES", value: function value(e) {var t,r,i,a,n,s,o,l,u = 0,d = e.data;if (!e || 0 === e.size) return null;for (; d[0].length < 19 && d.length > 1;) {var f = new Uint8Array(d[0].length + d[1].length);f.set(d[0]), f.set(d[1], d[0].length), d[0] = f, d.splice(1, 1);}if (t = d[0], 1 === (t[0] << 16) + (t[1] << 8) + t[2]) {if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;r = t[7], 192 & r && (s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, s > 4294967295 && (s -= 8589934592), 64 & r ? (o = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2, o > 4294967295 && (o -= 8589934592), s - o > 54e5 && (g.logger.warn(Math.round((s - o) / 9e4) + "s delta between PTS and DTS, align them"), s = o)) : o = s), a = t[8], l = a + 9, e.size -= l, n = new Uint8Array(e.size);for (var c = 0, h = d.length; c < h; c++) {t = d[c];var v = t.byteLength;if (l) {if (l > v) {l -= v;continue;}t = t.subarray(l), v -= l, l = 0;}n.set(t, u), u += v;}return i && (i -= a + 3), { data: n, pts: s, dts: o, len: i };}return null;} }, { key: "pushAccesUnit", value: function value(e, t) {if (e.units.length && e.frame) {var r = t.samples,i = r.length;!this.config.forceKeyFrameOnDiscontinuity || e.key === !0 || t.sps && (i || this.contiguous) ? (e.id = i, r.push(e)) : t.dropped++;}e.debug.length && g.logger.log(e.pts + "/" + e.dts + ":" + e.debug);} }, { key: "_parseAVCPES", value: function value(e, t) {var r,i,a,n = this,s = this._avcTrack,o = this._parseAVCNALu(e.data),l = this.avcSample;e.data = null, o.forEach(function (t) {switch (t.type) {case 1:i = !0, l.frame = !0;var o = t.data;if (o.length > 4) {var u = new f.default(o).readSliceType();2 !== u && 4 !== u && 7 !== u && 9 !== u || (l.key = !0);}break;case 5:i = !0, l || (l = n.avcSample = n._createAVCSample(!0, e.pts, e.dts, "")), l.key = !0, l.frame = !0;break;case 6:i = !0, r = new f.default(n.discardEPB(t.data)), r.readUByte();for (var d = 0, c = 0, h = !1, g = 0; !h && r.bytesAvailable > 1;) {d = 0;do {g = r.readUByte(), d += g;} while (255 === g);c = 0;do {g = r.readUByte(), c += g;} while (255 === g);if (4 === d && 0 !== r.bytesAvailable) {h = !0;if (181 === r.readUByte()) {if (49 === r.readUShort()) {if (1195456820 === r.readUInt()) {if (3 === r.readUByte()) {var v = r.readUByte(),p = r.readUByte(),y = 31 & v,m = [v, p];for (a = 0; a < y; a++) {m.push(r.readUByte()), m.push(r.readUByte()), m.push(r.readUByte());}n._insertSampleInOrder(n._txtTrack.samples, { type: 3, pts: e.pts, bytes: m });}}}}} else if (c < r.bytesAvailable) for (a = 0; a < c; a++) {r.readUByte();}}break;case 7:if (i = !0, !s.sps) {r = new f.default(t.data);var E = r.readSPS();s.width = E.width, s.height = E.height, s.pixelRatio = E.pixelRatio, s.sps = [t.data], s.duration = n._duration;var b = t.data.subarray(1, 4),T = "avc1.";for (a = 0; a < 3; a++) {var _ = b[a].toString(16);_.length < 2 && (_ = "0" + _), T += _;}s.codec = T;}break;case 8:i = !0, s.pps || (s.pps = [t.data]);break;case 9:i = !1, l && n.pushAccesUnit(l, s), l = n.avcSample = n._createAVCSample(!1, e.pts, e.dts, "");break;case 12:i = !1;break;default:i = !1, l && (l.debug += "unknown NAL " + t.type + " ");}if (l && i) {l.units.push(t);}}), t && l && (this.pushAccesUnit(l, s), this.avcSample = null);} }, { key: "_createAVCSample", value: function value(e, t, r, i) {return { key: e, pts: t, dts: r, units: [], debug: i };} }, { key: "_insertSampleInOrder", value: function value(e, t) {var r = e.length;if (r > 0) {if (t.pts >= e[r - 1].pts) e.push(t);else for (var i = r - 1; i >= 0; i--) {if (t.pts < e[i].pts) {e.splice(i, 0, t);break;}}} else e.push(t);} }, { key: "_getLastNalUnit", value: function value() {var e = this.avcSample,t = void 0;if (!e || 0 === e.units.length) {var r = this._avcTrack,i = r.samples;e = i[i.length - 1];}if (e) {var a = e.units;t = a[a.length - 1];}return t;} }, { key: "_parseAVCNALu", value: function value(e) {var t,r,i,a,n,s = 0,o = e.byteLength,l = this._avcTrack,u = l.naluState || 0,d = u,f = [],c = -1;for (u === -1 && (c = 0, n = 31 & e[0], u = 0, s = 1); s < o;) {if (t = e[s++], u) {if (1 !== u) {if (t) {if (1 === t) {if (c >= 0) i = { data: e.subarray(c, s - u - 1), type: n }, f.push(i);else {var h = this._getLastNalUnit();if (h && (d && s <= 4 - d && h.state && (h.data = h.data.subarray(0, h.data.byteLength - d)), (r = s - u - 1) > 0)) {var g = new Uint8Array(h.data.byteLength + r);g.set(h.data, 0), g.set(e.subarray(0, r), h.data.byteLength), h.data = g;}}s < o ? (a = 31 & e[s], c = s, n = a, u = 0) : u = -1;} else u = 0;} else u = 3;} else u = t ? 0 : 2;} else u = t ? 0 : 1;}if (c >= 0 && u >= 0 && (i = { data: e.subarray(c, o), type: n, state: u }, f.push(i)), 0 === f.length) {var v = this._getLastNalUnit();if (v) {var p = new Uint8Array(v.data.byteLength + e.byteLength);p.set(v.data, 0), p.set(e, v.data.byteLength), v.data = p;}}return l.naluState = u, f;} }, { key: "discardEPB", value: function value(e) {for (var t, r, i = e.byteLength, a = [], n = 1; n < i - 2;) {0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (a.push(n + 2), n += 2) : n++;}if (0 === a.length) return e;t = i - a.length, r = new Uint8Array(t);var s = 0;for (n = 0; n < t; s++, n++) {s === a[0] && (s++, a.shift()), r[n] = e[s];}return r;} }, { key: "_parseAACPES", value: function value(e) {var t,r,i,a,n,s,l,d,f,c = this._audioTrack,h = e.data,p = e.pts,y = this.aacOverFlow,m = this.aacLastPTS;if (y) {var E = new Uint8Array(y.byteLength + h.byteLength);E.set(y, 0), E.set(h, y.byteLength), h = E;}for (n = 0, d = h.length; n < d - 1 && (255 !== h[n] || 240 != (240 & h[n + 1])); n++) {;}if (n) {var b, T;if (n < d - 1 ? (b = "AAC PES did not start with ADTS header,offset:" + n, T = !1) : (b = "no ADTS header found in AAC PES", T = !0), g.logger.warn("parsing error:" + b), this.observer.trigger(u.default.ERROR, { type: v.ErrorTypes.MEDIA_ERROR, details: v.ErrorDetails.FRAG_PARSING_ERROR, fatal: T, reason: b }), T) return;}if (!c.samplerate) {var _ = this.audioCodec;t = o.default.getAudioConfig(this.observer, h, n, _), c.config = t.config, c.samplerate = t.samplerate, c.channelCount = t.channelCount, c.codec = t.codec, c.manifestCodec = t.manifestCodec, c.duration = this._duration, g.logger.log("parsed codec:" + c.codec + ",rate:" + t.samplerate + ",nb channel:" + t.channelCount);}if (a = 0, i = 9216e4 / c.samplerate, y && m) {var k = m + i;Math.abs(k - p) > 1 && (g.logger.log("AAC: align PTS for overlapping frames by " + Math.round((k - p) / 90)), p = k);}for (; n + 5 < d && (s = 1 & h[n + 1] ? 7 : 9, r = (3 & h[n + 3]) << 11 | h[n + 4] << 3 | (224 & h[n + 5]) >>> 5, (r -= s) > 0 && n + s + r <= d);) {for (l = p + a * i, f = { unit: h.subarray(n + s, n + s + r), pts: l, dts: l }, c.samples.push(f), c.len += r, n += r + s, a++; n < d - 1 && (255 !== h[n] || 240 != (240 & h[n + 1])); n++) {;}}y = n < d ? h.subarray(n, d) : null, this.aacOverFlow = y, this.aacLastPTS = l;} }, { key: "_parseMPEGPES", value: function value(e) {for (var t, r = e.data, i = e.pts, a = r.length, n = 0, s = 0; s < a && (t = this._parseMpeg(r, s, a, n++, i)) > 0;) {s += t;}} }, { key: "_onMpegFrame", value: function value(e, t, r, i, a, n) {var s = 1152 / r * 1e3,o = n + a * s,l = this._audioTrack;l.config = [], l.channelCount = i, l.samplerate = r, l.duration = this._duration, l.samples.push({ unit: e, pts: o, dts: o }), l.len += e.length;} }, { key: "_onMpegNoise", value: function value(e) {g.logger.warn("mpeg audio has noise: " + e.length + " bytes");} }, { key: "_parseMpeg", value: function value(e, t, r, i, a) {var n = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],s = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3];if (t + 2 > r) return -1;if (255 === e[t] || 224 == (224 & e[t + 1])) {if (t + 24 > r) return -1;var o = e[t + 1] >> 3 & 3,l = e[t + 1] >> 1 & 3,u = e[t + 2] >> 4 & 15,d = e[t + 2] >> 2 & 3,f = !!(2 & e[t + 2]);if (1 !== o && 0 !== u && 15 !== u && 3 !== d) {var c = 3 === o ? 3 - l : 3 === l ? 3 : 4,h = 1e3 * n[14 * c + u - 1],g = 3 === o ? 0 : 2 === o ? 1 : 2,v = s[3 * g + d],p = f ? 1 : 0,y = e[t + 3] >> 6 == 3 ? 1 : 2,m = 3 === l ? (3 === o ? 12 : 6) * h / v + p << 2 : (3 === o ? 144 : 72) * h / v + p | 0;return t + m > r ? -1 : (this._onMpegFrame && this._onMpegFrame(e.subarray(t, t + m), h, v, y, i, a), m);}}for (var E = t + 2; E < r;) {if (255 === e[E - 1] && 224 == (224 & e[E])) return this._onMpegNoise && this._onMpegNoise(e.subarray(t, E - 1)), E - t - 1;E++;}return -1;} }, { key: "_parseID3PES", value: function value(e) {this._id3Track.samples.push(e);} }], [{ key: "probe", value: function value(e) {return e.length >= 564 && 71 === e[0] && 71 === e[188] && 71 === e[376];} }]), e;}();r.default = p;}, { 22: 22, 26: 26, 29: 29, 31: 31, 33: 33, 51: 51 }], 31: [function (e, t, r) {"use strict";Object.defineProperty(r, "__esModule", { value: !0 });r.ErrorTypes = { NETWORK_ERROR: "networkError", MEDIA_ERROR: "mediaError", MUX_ERROR: "muxError", OTHER_ERROR: "otherError" }, r.ErrorDetails = { MANIFEST_LOAD_ERROR: "manifestLoadError", MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut", MANIFEST_PARSING_ERROR: "manifestParsingError", MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError", LEVEL_LOAD_ERROR: "levelLoadError", LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut", LEVEL_SWITCH_ERROR: "levelSwitchError", AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError", AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut", FRAG_LOAD_ERROR: "fragLoadError", FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError", FRAG_LOAD_TIMEOUT: "fragLoadTimeOut", FRAG_DECRYPT_ERROR: "fragDecryptError", FRAG_PARSING_ERROR: "fragParsingError", REMUX_ALLOC_ERROR: "remuxAllocError", KEY_LOAD_ERROR: "keyLoadError", KEY_LOAD_TIMEOUT: "keyLoadTimeOut", BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError", BUFFER_APPEND_ERROR: "bufferAppendError", BUFFER_APPENDING_ERROR: "bufferAppendingError", BUFFER_STALLED_ERROR: "bufferStalledError", BUFFER_FULL_ERROR: "bufferFullError", BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole", BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall", INTERNAL_EXCEPTION: "internalException", WEBVTT_EXCEPTION: "webVTTException" };}, {}], 32: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e;} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;},n = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),s = e(51),o = e(31),l = e(33),u = function (e) {return e && e.__esModule ? e : { default: e };}(l),d = function () {function e(t) {i(this, e), this.hls = t, this.onEvent = this.onEvent.bind(this);for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) {a[n - 1] = arguments[n];}this.handledEvents = a, this.useGenericHandler = !0, this.registerListeners();}return n(e, [{ key: "destroy", value: function value() {this.unregisterListeners();} }, { key: "isEventHandler", value: function value() {return "object" === a(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent;} }, { key: "registerListeners", value: function value() {this.isEventHandler() && this.handledEvents.forEach(function (e) {if ("hlsEventGeneric" === e) throw new Error("Forbidden event name: " + e);this.hls.on(e, this.onEvent);}.bind(this));} }, { key: "unregisterListeners", value: function value() {this.isEventHandler() && this.handledEvents.forEach(function (e) {this.hls.off(e, this.onEvent);}.bind(this));} }, { key: "onEvent", value: function value(e, t) {this.onEventGeneric(e, t);} }, { key: "onEventGeneric", value: function value(e, t) {var r = function r(e, t) {var r = "on" + e.replace("hls", "");if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");return this[r].bind(this, t);};try {r.call(this, e, t).call();} catch (t) {s.logger.error("internal error happened while processing " + e + ":" + t.message), this.hls.trigger(u.default.ERROR, { type: o.ErrorTypes.OTHER_ERROR, details: o.ErrorDetails.INTERNAL_EXCEPTION, fatal: !1, event: e, err: t });}} }]), e;}();r.default = d;}, { 31: 31, 33: 33, 51: 51 }], 33: [function (e, t, r) {"use strict";t.exports = { MEDIA_ATTACHING: "hlsMediaAttaching", MEDIA_ATTACHED: "hlsMediaAttached", MEDIA_DETACHING: "hlsMediaDetaching", MEDIA_DETACHED: "hlsMediaDetached", BUFFER_RESET: "hlsBufferReset", BUFFER_CODECS: "hlsBufferCodecs", BUFFER_CREATED: "hlsBufferCreated", BUFFER_APPENDING: "hlsBufferAppending", BUFFER_APPENDED: "hlsBufferAppended", BUFFER_EOS: "hlsBufferEos", BUFFER_FLUSHING: "hlsBufferFlushing", BUFFER_FLUSHED: "hlsBufferFlushed", MANIFEST_LOADING: "hlsManifestLoading", MANIFEST_LOADED: "hlsManifestLoaded", MANIFEST_PARSED: "hlsManifestParsed", LEVEL_SWITCH: "hlsLevelSwitch", LEVEL_SWITCHING: "hlsLevelSwitching", LEVEL_SWITCHED: "hlsLevelSwitched", LEVEL_LOADING: "hlsLevelLoading", LEVEL_LOADED: "hlsLevelLoaded", LEVEL_UPDATED: "hlsLevelUpdated", LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated", AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated", AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch", AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching", AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched", AUDIO_TRACK_LOADING: "hlsAudioTrackLoading", AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded", SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated", SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch", SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading", SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded", SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed", INIT_PTS_FOUND: "hlsInitPtsFound", FRAG_LOADING: "hlsFragLoading", FRAG_LOAD_PROGRESS: "hlsFragLoadProgress", FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted", FRAG_LOADED: "hlsFragLoaded", FRAG_DECRYPTED: "hlsFragDecrypted", FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment", FRAG_PARSING_USERDATA: "hlsFragParsingUserdata", FRAG_PARSING_METADATA: "hlsFragParsingMetadata", FRAG_PARSING_DATA: "hlsFragParsingData", FRAG_PARSED: "hlsFragParsed", FRAG_BUFFERED: "hlsFragBuffered", FRAG_CHANGED: "hlsFragChanged", FPS_DROP: "hlsFpsDrop", FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping", ERROR: "hlsError", DESTROYING: "hlsDestroying", KEY_LOADING: "hlsKeyLoading", KEY_LOADED: "hlsKeyLoaded", STREAM_STATE_TRANSITION: "hlsStreamStateTransition" };}, {}], 34: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = function () {function e() {i(this, e);}return a(e, null, [{ key: "getSilentFrame", value: function value(e, t) {switch (e) {case "mp4a.40.2":if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);break;default:if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);}return null;} }]), e;}();r.default = n;}, {}], 35: [function (e, t, r) {"use strict";var i = { isBuffered: function isBuffered(e, t) {if (e) for (var r = e.buffered, i = 0; i < r.length; i++) {if (t >= r.start(i) && t <= r.end(i)) return !0;}return !1;}, bufferInfo: function bufferInfo(e, t, r) {if (e) {var i,a = e.buffered,n = [];for (i = 0; i < a.length; i++) {n.push({ start: a.start(i), end: a.end(i) });}return this.bufferedInfo(n, t, r);}return { len: 0, start: t, end: t, nextStart: void 0 };}, bufferedInfo: function bufferedInfo(e, t, r) {var i,a,n,s,o,l = [];for (e.sort(function (e, t) {var r = e.start - t.start;return r ? r : t.end - e.end;}), o = 0; o < e.length; o++) {var u = l.length;if (u) {var d = l[u - 1].end;e[o].start - d < r ? e[o].end > d && (l[u - 1].end = e[o].end) : l.push(e[o]);} else l.push(e[o]);}for (o = 0, i = 0, a = n = t; o < l.length; o++) {var f = l[o].start,c = l[o].end;if (t + r >= f && t < c) a = f, n = c, i = n - t;else if (t + r < f) {s = f;break;}}return { len: i, start: a, end: n, nextStart: s };} };t.exports = i;}, {}], 36: [function (e, t, r) {"use strict";var i = e(51),a = { mergeDetails: function mergeDetails(e, t) {var r,n = Math.max(e.startSN, t.startSN) - t.startSN,s = Math.min(e.endSN, t.endSN) - t.startSN,o = t.startSN - e.startSN,l = e.fragments,u = t.fragments,d = 0;if (s < n) return void (t.PTSKnown = !1);for (var f = n; f <= s; f++) {var c = l[o + f],h = u[f];h && c && (d = c.cc - h.cc, isNaN(c.startPTS) || (h.start = h.startPTS = c.startPTS, h.endPTS = c.endPTS, h.duration = c.duration, r = h));}if (d) for (i.logger.log("discontinuity sliding from playlist, take drift into account"), f = 0; f < u.length; f++) {u[f].cc += d;}if (r) a.updateFragPTSDTS(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS);else if (o >= 0 && o < l.length) {var g = l[o].start;for (f = 0; f < u.length; f++) {u[f].start += g;}}t.PTSKnown = e.PTSKnown;}, updateFragPTSDTS: function updateFragPTSDTS(e, t, r, i, n, s) {if (!isNaN(t.startPTS)) {var o = Math.abs(t.startPTS - r);isNaN(t.deltaPTS) ? t.deltaPTS = o : t.deltaPTS = Math.max(o, t.deltaPTS), r = Math.min(r, t.startPTS), i = Math.max(i, t.endPTS), n = Math.min(n, t.startDTS), s = Math.max(s, t.endDTS);}var l = r - t.start;t.start = t.startPTS = r, t.endPTS = i, t.startDTS = n, t.endDTS = s, t.duration = i - r;var u = t.sn;if (!e || u < e.startSN || u > e.endSN) return 0;var d, f, c;for (d = u - e.startSN, f = e.fragments, t = f[d], c = d; c > 0; c--) {a.updatePTS(f, c, c - 1);}for (c = d; c < f.length - 1; c++) {a.updatePTS(f, c, c + 1);}return e.PTSKnown = !0, l;}, updatePTS: function updatePTS(e, t, r) {var a = e[t],n = e[r],s = n.startPTS;isNaN(s) ? n.start = r > t ? a.start + a.duration : Math.max(a.start - n.duration, 0) : r > t ? (a.duration = s - a.start, a.duration < 0 && i.logger.warn("negative duration computed for frag " + a.sn + ",level " + a.level + ", there should be some duration drift between playlist and fragment!")) : (n.duration = a.start - s, n.duration < 0 && i.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!"));} };t.exports = a;}, { 51: 51 }], 37: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var n = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),s = e(2),o = i(s),l = e(33),u = i(l),d = e(31),f = e(41),c = i(f),h = e(39),g = i(h),v = e(40),p = i(v),y = e(13),m = i(y),E = e(12),b = i(E),T = e(11),_ = i(T),k = e(51),R = e(1),A = i(R),S = e(4),L = function () {function e() {var t = this,r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};a(this, e);var i = e.DefaultConfig;if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for (var n in i) {n in r || (r[n] = i[n]);}if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');(0, k.enableLogs)(r.debug), this.config = r, this._autoLevelCapping = -1;var s = this.observer = new A.default();s.trigger = function (e) {for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {r[i - 1] = arguments[i];}s.emit.apply(s, [e, e].concat(r));}, s.off = function (e) {for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {r[i - 1] = arguments[i];}s.removeListener.apply(s, [e].concat(r));}, this.on = s.on.bind(s), this.off = s.off.bind(s), this.trigger = s.trigger.bind(s);var o = this.abrController = new r.abrController(this),l = new r.bufferController(this),u = new r.capLevelController(this),d = new r.fpsController(this),f = new c.default(this),h = new g.default(this),v = new p.default(this),y = new _.default(this),E = this.levelController = new b.default(this),T = this.streamController = new m.default(this),R = [E, T],S = r.audioStreamController;S && R.push(new S(this)), this.networkControllers = R;var L = [f, h, v, o, l, u, d, y];if (S = r.audioTrackController) {var w = new S(this);this.audioTrackController = w, L.push(w);}if (S = r.subtitleTrackController) {var D = new S(this);this.subtitleTrackController = D, L.push(D);}[r.subtitleStreamController, r.timelineController].forEach(function (e) {e && L.push(new e(t));}), this.coreComponents = L;}return n(e, null, [{ key: "isSupported", value: function value() {return window.MediaSource = window.MediaSource || window.WebKitMediaSource, window.MediaSource && "function" == typeof window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');} }, { key: "version", get: function get() {return "0.7.6";} }, { key: "Events", get: function get() {return u.default;} }, { key: "ErrorTypes", get: function get() {return d.ErrorTypes;} }, { key: "ErrorDetails", get: function get() {return d.ErrorDetails;} }, { key: "DefaultConfig", get: function get() {return e.defaultConfig ? e.defaultConfig : S.hlsDefaultConfig;}, set: function set(t) {e.defaultConfig = t;} }]), n(e, [{ key: "destroy", value: function value() {k.logger.log("destroy"), this.trigger(u.default.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function (e) {e.destroy();}), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1;} }, { key: "attachMedia", value: function value(e) {k.logger.log("attachMedia"), this.media = e, this.trigger(u.default.MEDIA_ATTACHING, { media: e });} }, { key: "detachMedia", value: function value() {k.logger.log("detachMedia"), this.trigger(u.default.MEDIA_DETACHING), this.media = null;} }, { key: "loadSource", value: function value(e) {e = o.default.buildAbsoluteURL(window.location.href, e, { alwaysNormalize: !0 }), k.logger.log("loadSource:" + e), this.url = e, this.trigger(u.default.MANIFEST_LOADING, { url: e });} }, { key: "startLoad", value: function value() {var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;k.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach(function (t) {t.startLoad(e);});} }, { key: "stopLoad", value: function value() {k.logger.log("stopLoad"), this.networkControllers.forEach(function (e) {e.stopLoad();});} }, { key: "swapAudioCodec", value: function value() {k.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();} }, { key: "recoverMediaError", value: function value() {k.logger.log("recoverMediaError");var e = this.media;this.detachMedia(), this.attachMedia(e);} }, { key: "levels", get: function get() {return this.levelController.levels;} }, { key: "currentLevel", get: function get() {return this.streamController.currentLevel;}, set: function set(e) {k.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch();} }, { key: "nextLevel", get: function get() {return this.streamController.nextLevel;}, set: function set(e) {k.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();} }, { key: "loadLevel", get: function get() {return this.levelController.level;}, set: function set(e) {k.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e;} }, { key: "nextLoadLevel", get: function get() {return this.levelController.nextLoadLevel;}, set: function set(e) {this.levelController.nextLoadLevel = e;} }, { key: "firstLevel", get: function get() {return Math.max(this.levelController.firstLevel, this.minAutoLevel);}, set: function set(e) {k.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e;} }, { key: "startLevel", get: function get() {return this.levelController.startLevel;}, set: function set(e) {k.logger.log("set startLevel:" + e);var t = this;e !== -1 && (e = Math.max(e, t.minAutoLevel)), t.levelController.startLevel = e;} }, { key: "autoLevelCapping", get: function get() {return this._autoLevelCapping;}, set: function set(e) {k.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e;} }, { key: "autoLevelEnabled", get: function get() {return this.levelController.manualLevel === -1;} }, { key: "manualLevel", get: function get() {return this.levelController.manualLevel;} }, { key: "minAutoLevel", get: function get() {for (var e = this, t = e.levels, r = e.config.minAutoBitrate, i = t ? t.length : 0, a = 0; a < i; a++) {if ((t[a].realBitrate ? Math.max(t[a].realBitrate, t[a].bitrate) : t[a].bitrate) > r) return a;}return 0;} }, { key: "maxAutoLevel", get: function get() {var e = this,t = e.levels,r = e.autoLevelCapping;return r === -1 && t && t.length ? t.length - 1 : r;} }, { key: "nextAutoLevel", get: function get() {var e = this;return Math.min(Math.max(e.abrController.nextAutoLevel, e.minAutoLevel), e.maxAutoLevel);}, set: function set(e) {var t = this;t.abrController.nextAutoLevel = Math.max(t.minAutoLevel, e);} }, { key: "audioTracks", get: function get() {var e = this.audioTrackController;return e ? e.audioTracks : [];} }, { key: "audioTrack", get: function get() {var e = this.audioTrackController;return e ? e.audioTrack : -1;}, set: function set(e) {var t = this.audioTrackController;t && (t.audioTrack = e);} }, { key: "liveSyncPosition", get: function get() {return this.streamController.liveSyncPosition;} }, { key: "subtitleTracks", get: function get() {var e = this.subtitleTrackController;return e ? e.subtitleTracks : [];} }, { key: "subtitleTrack", get: function get() {var e = this.subtitleTrackController;return e ? e.subtitleTrack : -1;}, set: function set(e) {var t = this.subtitleTrackController;t && (t.subtitleTrack = e);} }]), e;}();r.default = L;}, { 1: 1, 11: 11, 12: 12, 13: 13, 2: 2, 31: 31, 33: 33, 39: 39, 4: 4, 40: 40, 41: 41, 51: 51 }], 38: [function (e, t, r) {"use strict";t.exports = e(37).default;}, { 37: 37 }], 39: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = e(31),h = e(51),g = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FRAG_LOADING));return r.loaders = {}, r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {var e = this.loaders;for (var t in e) {var r = e[t];r && r.destroy();}this.loaders = {}, f.default.prototype.destroy.call(this);} }, { key: "onFragLoading", value: function value(e) {var t = e.frag,r = t.type,i = this.loaders[r],a = this.hls.config;t.loaded = 0, i && (h.logger.warn("abort previous fragment loader for type:" + r), i.abort()), i = this.loaders[r] = t.loader = void 0 !== a.fLoader ? new a.fLoader(a) : new a.loader(a);var n = void 0,s = void 0,o = void 0;n = { url: t.url, frag: t, responseType: "arraybuffer", progressData: !1 };var l = t.byteRangeStartOffset,u = t.byteRangeEndOffset;isNaN(l) || isNaN(u) || (n.rangeStart = l, n.rangeEnd = u), s = { timeout: a.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: a.fragLoadingMaxRetryTimeout }, o = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this), onProgress: this.loadprogress.bind(this) }, i.load(n, s, o);} }, { key: "loadsuccess", value: function value(e, t, r) {var i = e.data,a = r.frag;a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(u.default.FRAG_LOADED, { payload: i, frag: a, stats: t });} }, { key: "loaderror", value: function value(e, t) {var r = t.loader;r && r.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, { type: c.ErrorTypes.NETWORK_ERROR, details: c.ErrorDetails.FRAG_LOAD_ERROR, fatal: !1, frag: t.frag, response: e });} }, { key: "loadtimeout", value: function value(e, t) {var r = t.loader;r && r.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, { type: c.ErrorTypes.NETWORK_ERROR, details: c.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: !1, frag: t.frag });} }, { key: "loadprogress", value: function value(e, t, r) {var i = t.frag;i.loaded = e.loaded, this.hls.trigger(u.default.FRAG_LOAD_PROGRESS, { frag: i, stats: e });} }]), t;}(f.default);r.default = g;}, { 31: 31, 32: 32, 33: 33, 51: 51 }], 40: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function n(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function s(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(33),u = i(l),d = e(32),f = i(d),c = e(31),h = e(51),g = function (e) {function t(e) {a(this, t);var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.KEY_LOADING));return r.loaders = {}, r.decryptkey = null, r.decrypturl = null, r;}return s(t, e), o(t, [{ key: "destroy", value: function value() {for (var e in this.loaders) {var t = this.loaders[e];t && t.destroy();}this.loaders = {}, f.default.prototype.destroy.call(this);} }, { key: "onKeyLoading", value: function value(e) {var t = e.frag,r = t.type,i = this.loaders[r],a = t.decryptdata,n = a.uri;if (n !== this.decrypturl || null === this.decryptkey) {var s = this.hls.config;i && (h.logger.warn("abort previous key loader for type:" + r), i.abort()), t.loader = this.loaders[r] = new s.loader(s), this.decrypturl = n, this.decryptkey = null;var o = void 0,l = void 0,d = void 0;o = { url: n, frag: t, responseType: "arraybuffer" }, l = {
                timeout: s.fragLoadingTimeOut, maxRetry: s.fragLoadingMaxRetry, retryDelay: s.fragLoadingRetryDelay, maxRetryDelay: s.fragLoadingMaxRetryTimeout }, d = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) }, t.loader.load(o, l, d);} else this.decryptkey && (a.key = this.decryptkey, this.hls.trigger(u.default.KEY_LOADED, { frag: t }));} }, { key: "loadsuccess", value: function value(e, t, r) {var i = r.frag;this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = void 0, this.loaders[i.type] = void 0, this.hls.trigger(u.default.KEY_LOADED, { frag: i });} }, { key: "loaderror", value: function value(e, t) {var r = t.frag,i = r.loader;i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, { type: c.ErrorTypes.NETWORK_ERROR, details: c.ErrorDetails.KEY_LOAD_ERROR, fatal: !1, frag: r, response: e });} }, { key: "loadtimeout", value: function value(e, t) {var r = t.frag,i = r.loader;i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, { type: c.ErrorTypes.NETWORK_ERROR, details: c.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: !1, frag: r });} }]), t;}(f.default);r.default = g;}, { 31: 31, 32: 32, 33: 33, 51: 51 }], 41: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;}function n(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);}function s(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var o = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),l = e(2),u = i(l),d = e(33),f = i(d),c = e(32),h = i(c),g = e(31),v = e(45),p = i(v),y = e(51),m = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,E = /#EXT-X-MEDIA:(.*)/g,b = /#EXTINF:(\d*(?:\.\d+)?)(?:,(.*))?|(?!#)(\S.+)|#EXT-X-BYTERANGE: *(.+)|#EXT-X-PROGRAM-DATE-TIME:(.+)|#.*/g,T = function () {function e() {s(this, e), this.method = null, this.key = null, this.iv = null, this._uri = null;}return o(e, [{ key: "uri", get: function get() {return !this._uri && this.reluri && (this._uri = u.default.buildAbsoluteURL(this.baseuri, this.reluri, { alwaysNormalize: !0 })), this._uri;} }]), e;}(),_ = function () {function e() {s(this, e), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [];}return o(e, [{ key: "createInitializationVector", value: function value(e) {for (var t = new Uint8Array(16), r = 12; r < 16; r++) {t[r] = e >> 8 * (15 - r) & 255;}return t;} }, { key: "fragmentDecryptdataFromLevelkey", value: function value(e, t) {var r = e;return e && e.method && e.uri && !e.iv && (r = new T(), r.method = e.method, r.baseuri = e.baseuri, r.reluri = e.reluri, r.iv = this.createInitializationVector(t)), r;} }, { key: "cloneObj", value: function value(e) {return JSON.parse(JSON.stringify(e));} }, { key: "url", get: function get() {return !this._url && this.relurl && (this._url = u.default.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: !0 })), this._url;}, set: function set(e) {this._url = e;} }, { key: "programDateTime", get: function get() {return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime;} }, { key: "byteRange", get: function get() {if (!this._byteRange) {var e = this._byteRange = [];if (this.rawByteRange) {var t = this.rawByteRange.split("@", 2);if (1 === t.length) {var r = this.lastByteRangeEndOffset;e[0] = r ? r : 0;} else e[0] = parseInt(t[1]);e[1] = parseInt(t[0]) + e[0];}}return this._byteRange;} }, { key: "byteRangeStartOffset", get: function get() {return this.byteRange[0];} }, { key: "byteRangeEndOffset", get: function get() {return this.byteRange[1];} }, { key: "decryptdata", get: function get() {return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata;} }]), e;}(),k = function (e) {function t(e) {s(this, t);var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, f.default.MANIFEST_LOADING, f.default.LEVEL_LOADING, f.default.AUDIO_TRACK_LOADING, f.default.SUBTITLE_TRACK_LOADING));return r.loaders = {}, r;}return n(t, e), o(t, [{ key: "destroy", value: function value() {for (var e in this.loaders) {var t = this.loaders[e];t && t.destroy();}this.loaders = {}, h.default.prototype.destroy.call(this);} }, { key: "onManifestLoading", value: function value(e) {this.load(e.url, { type: "manifest" });} }, { key: "onLevelLoading", value: function value(e) {this.load(e.url, { type: "level", level: e.level, id: e.id });} }, { key: "onAudioTrackLoading", value: function value(e) {this.load(e.url, { type: "audioTrack", id: e.id });} }, { key: "onSubtitleTrackLoading", value: function value(e) {this.load(e.url, { type: "subtitleTrack", id: e.id });} }, { key: "load", value: function value(e, t) {var r = this.loaders[t.type];if (r) {var i = r.context;if (i && i.url === e) return void y.logger.trace("playlist request ongoing");y.logger.warn("abort previous loader for type:" + t.type), r.abort();}var a = this.hls.config,n = void 0,s = void 0,o = void 0,l = void 0;"manifest" === t.type ? (n = a.manifestLoadingMaxRetry, s = a.manifestLoadingTimeOut, o = a.manifestLoadingRetryDelay, l = a.manifestLoadingMaxRetryTimeout) : (n = a.levelLoadingMaxRetry, s = a.levelLoadingTimeOut, o = a.levelLoadingRetryDelay, l = a.levelLoadingMaxRetryTimeout, y.logger.log("loading playlist for " + t.type + " " + (t.level || t.id))), r = this.loaders[t.type] = t.loader = void 0 !== a.pLoader ? new a.pLoader(a) : new a.loader(a), t.url = e, t.responseType = "";var u = void 0,d = void 0;u = { timeout: s, maxRetry: n, retryDelay: o, maxRetryDelay: l }, d = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) }, r.load(t, u, d);} }, { key: "resolve", value: function value(e, t) {return u.default.buildAbsoluteURL(t, e, { alwaysNormalize: !0 });} }, { key: "parseMasterPlaylist", value: function value(e, t) {var r = [],i = void 0;for (m.lastIndex = 0; null != (i = m.exec(e));) {var a = {},n = a.attrs = new p.default(i[1]);a.url = this.resolve(i[2], t);var s = n.decimalResolution("RESOLUTION");s && (a.width = s.width, a.height = s.height), a.bitrate = n.decimalInteger("AVERAGE-BANDWIDTH") || n.decimalInteger("BANDWIDTH"), a.name = n.NAME;var o = n.CODECS;if (o) {o = o.split(/[ ,]+/);for (var l = 0; l < o.length; l++) {var u = o[l];u.indexOf("avc1") !== -1 ? a.videoCodec = this.avc1toavcoti(u) : a.audioCodec = u;}}r.push(a);}return r;} }, { key: "parseMasterPlaylistMedia", value: function value(e, t, r) {var i = void 0,a = [],n = 0;for (E.lastIndex = 0; null != (i = E.exec(e));) {var s = {},o = new p.default(i[1]);o.TYPE === r && (s.groupId = o["GROUP-ID"], s.name = o.NAME, s.type = r, s.default = "YES" === o.DEFAULT, s.autoselect = "YES" === o.AUTOSELECT, s.forced = "YES" === o.FORCED, o.URI && (s.url = this.resolve(o.URI, t)), s.lang = o.LANGUAGE, s.name || (s.name = s.lang), s.id = n++, a.push(s));}return a;} }, { key: "avc1toavcoti", value: function value(e) {var t,r = e.split(".");return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t;} }, { key: "parseLevelPlaylist", value: function value(e, t, r, i) {var a,n,s = 0,o = 0,l = { type: null, version: null, url: t, fragments: [], live: !0, startSN: 0 },u = new T(),d = 0,f = null,c = new _();for (b.lastIndex = 0; null !== (a = b.exec(e));) {var h = a[1];if (h) {c.duration = parseFloat(h);var g = (" " + a[2]).slice(1);c.title = g ? g : null, c.tagList.push(g ? ["INF", h, g] : ["INF", h]);} else if (a[3]) {if (!isNaN(c.duration)) {var v = s++;c.type = i, c.start = o, c.levelkey = u, c.sn = v, c.level = r, c.cc = d, c.baseurl = t, c.relurl = (" " + a[3]).slice(1), l.fragments.push(c), f = c, o += c.duration, c = new _();}} else if (a[4]) {if (c.rawByteRange = (" " + a[4]).slice(1), f) {var m = f.byteRangeEndOffset;m && (c.lastByteRangeEndOffset = m);}} else if (a[5]) c.rawProgramDateTime = (" " + a[5]).slice(1), c.tagList.push(["PROGRAM-DATE-TIME", c.rawProgramDateTime]);else {for (a = a[0].match(/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/), n = 1; n < a.length && void 0 === a[n]; n++) {;}var E = (" " + a[n + 1]).slice(1),k = (" " + a[n + 2]).slice(1);switch (a[n]) {case "#":c.tagList.push(k ? [E, k] : [E]);break;case "PLAYLIST-TYPE":l.type = E.toUpperCase();break;case "MEDIA-SEQUENCE":s = l.startSN = parseInt(E);break;case "TARGETDURATION":l.targetduration = parseFloat(E);break;case "VERSION":l.version = parseInt(E);break;case "EXTM3U":break;case "ENDLIST":l.live = !1;break;case "DIS":d++, c.tagList.push(["DIS"]);break;case "DISCONTINUITY-SEQ":d = parseInt(E);break;case "KEY":var R = E,A = new p.default(R),S = A.enumeratedString("METHOD"),L = A.URI,w = A.hexadecimalInteger("IV");S && (u = new T(), L && ["AES-128", "SAMPLE-AES"].indexOf(S) >= 0 && (u.method = S, u.baseuri = t, u.reluri = L, u.key = null, u.iv = w));break;case "START":var D = E,O = new p.default(D),I = O.decimalFloatingPoint("TIME-OFFSET");isNaN(I) || (l.startTimeOffset = I);break;case "MAP":var P = new p.default(E);c.relurl = P.URI, c.rawByteRange = P.BYTERANGE, c.baseurl = t, c.level = r, c.type = i, c.sn = "initSegment", l.initSegment = c, c = new _();break;default:y.logger.warn("line parsed but not handled: " + a);}}}return c = f, c && !c.relurl && (l.fragments.pop(), o -= c.duration), l.totalduration = o, l.averagetargetduration = o / l.fragments.length, l.endSN = s - 1, l;} }, { key: "loadsuccess", value: function value(e, t, r) {var i = e.data,a = e.url,n = r.type,s = r.id,o = r.level,l = this.hls;if (this.loaders[n] = void 0, void 0 !== a && 0 !== a.indexOf("data:") || (a = r.url), t.tload = performance.now(), 0 === i.indexOf("#EXTM3U")) {if (i.indexOf("#EXTINF:") > 0) {var u = "audioTrack" !== n && "subtitleTrack" !== n,d = isNaN(o) ? isNaN(s) ? 0 : s : o,c = this.parseLevelPlaylist(i, a, d, "audioTrack" === n ? "audio" : "subtitleTrack" === n ? "subtitle" : "main");c.tload = t.tload, "manifest" === n && l.trigger(f.default.MANIFEST_LOADED, { levels: [{ url: a, details: c }], audioTracks: [], url: a, stats: t }), t.tparsed = performance.now(), c.targetduration ? u ? l.trigger(f.default.LEVEL_LOADED, { details: c, level: o || 0, id: s || 0, stats: t }) : "audioTrack" === n ? l.trigger(f.default.AUDIO_TRACK_LOADED, { details: c, id: s, stats: t }) : "subtitleTrack" === n && l.trigger(f.default.SUBTITLE_TRACK_LOADED, { details: c, id: s, stats: t }) : l.trigger(f.default.ERROR, { type: g.ErrorTypes.NETWORK_ERROR, details: g.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: !0, url: a, reason: "invalid targetduration" });} else {var h = this.parseMasterPlaylist(i, a);if (h.length) {var v = this.parseMasterPlaylistMedia(i, a, "AUDIO"),p = this.parseMasterPlaylistMedia(i, a, "SUBTITLES");if (v.length) {var m = !1;v.forEach(function (e) {e.url || (m = !0);}), m === !1 && h[0].audioCodec && !h[0].attrs.AUDIO && (y.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), v.unshift({ type: "main", name: "main" }));}l.trigger(f.default.MANIFEST_LOADED, { levels: h, audioTracks: v, subtitles: p, url: a, stats: t });} else l.trigger(f.default.ERROR, { type: g.ErrorTypes.NETWORK_ERROR, details: g.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: !0, url: a, reason: "no level found in manifest" });}} else l.trigger(f.default.ERROR, { type: g.ErrorTypes.NETWORK_ERROR, details: g.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: !0, url: a, reason: "no EXTM3U delimiter" });} }, { key: "loaderror", value: function value(e, t) {var r,i,a = t.loader;switch (t.type) {case "manifest":r = g.ErrorDetails.MANIFEST_LOAD_ERROR, i = !0;break;case "level":r = g.ErrorDetails.LEVEL_LOAD_ERROR, i = !1;break;case "audioTrack":r = g.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, i = !1;}a && (a.abort(), this.loaders[t.type] = void 0), this.hls.trigger(f.default.ERROR, { type: g.ErrorTypes.NETWORK_ERROR, details: r, fatal: i, url: a.url, loader: a, response: e, context: t });} }, { key: "loadtimeout", value: function value(e, t) {var r,i,a = t.loader;switch (t.type) {case "manifest":r = g.ErrorDetails.MANIFEST_LOAD_TIMEOUT, i = !0;break;case "level":r = g.ErrorDetails.LEVEL_LOAD_TIMEOUT, i = !1;break;case "audioTrack":r = g.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, i = !1;}a && (a.abort(), this.loaders[t.type] = void 0), this.hls.trigger(f.default.ERROR, { type: g.ErrorTypes.NETWORK_ERROR, details: r, fatal: i, url: a.url, loader: a, context: t });} }]), t;}(h.default);r.default = k;}, { 2: 2, 31: 31, 32: 32, 33: 33, 45: 45, 51: 51 }], 42: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = Math.pow(2, 32) - 1,s = function () {function e() {i(this, e);}return a(e, null, [{ key: "init", value: function value() {e.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] };var t;for (t in e.types) {e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);}var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);e.HDLR_TYPES = { video: r, audio: i };var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);e.STTS = e.STSC = e.STCO = n, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);var s = new Uint8Array([105, 115, 111, 109]),o = new Uint8Array([97, 118, 99, 49]),l = new Uint8Array([0, 0, 0, 1]);e.FTYP = e.box(e.types.ftyp, s, l, s, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a));} }, { key: "box", value: function value(e) {for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;) {i += r[a].byteLength;}for (t = new Uint8Array(i), t[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), a = 0, i = 8; a < n; a++) {t.set(r[a], i), i += r[a].byteLength;}return t;} }, { key: "hdlr", value: function value(t) {return e.box(e.types.hdlr, e.HDLR_TYPES[t]);} }, { key: "mdat", value: function value(t) {return e.box(e.types.mdat, t);} }, { key: "mdhd", value: function value(t, r) {r *= t;var i = Math.floor(r / (n + 1)),a = Math.floor(r % (n + 1));return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]));} }, { key: "mdia", value: function value(t) {return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t));} }, { key: "mfhd", value: function value(t) {return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]));} }, { key: "minf", value: function value(t) {return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t));} }, { key: "moof", value: function value(t, r, i) {return e.box(e.types.moof, e.mfhd(t), e.traf(i, r));} }, { key: "moov", value: function value(t) {for (var r = t.length, i = []; r--;) {i[r] = e.trak(t[r]);}return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)));} }, { key: "mvex", value: function value(t) {for (var r = t.length, i = []; r--;) {i[r] = e.trex(t[r]);}return e.box.apply(null, [e.types.mvex].concat(i));} }, { key: "mvhd", value: function value(t, r) {r *= t;var i = Math.floor(r / (n + 1)),a = Math.floor(r % (n + 1)),s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);return e.box(e.types.mvhd, s);} }, { key: "sdtp", value: function value(t) {var r,i,a = t.samples || [],n = new Uint8Array(4 + a.length);for (i = 0; i < a.length; i++) {r = a[i].flags, n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;}return e.box(e.types.sdtp, n);} }, { key: "stbl", value: function value(t) {return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO));} }, { key: "avc1", value: function value(t) {var r,i,a,n = [],s = [];for (r = 0; r < t.sps.length; r++) {i = t.sps[r], a = i.byteLength, n.push(a >>> 8 & 255), n.push(255 & a), n = n.concat(Array.prototype.slice.call(i));}for (r = 0; r < t.pps.length; r++) {i = t.pps[r], a = i.byteLength, s.push(a >>> 8 & 255), s.push(255 & a), s = s.concat(Array.prototype.slice.call(i));}var o = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(s))),l = t.width,u = t.height,d = t.pixelRatio[0],f = t.pixelRatio[1];return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, f >> 24, f >> 16 & 255, f >> 8 & 255, 255 & f])));} }, { key: "esds", value: function value(e) {var t = e.config.length;return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]));} }, { key: "mp4a", value: function value(t) {var r = t.samplerate;return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)));} }, { key: "mp3", value: function value(t) {var r = t.samplerate;return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]));} }, { key: "stsd", value: function value(t) {return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t));} }, { key: "tkhd", value: function value(t) {var r = t.id,i = t.duration * t.timescale,a = t.width,s = t.height,o = Math.floor(i / (n + 1)),l = Math.floor(i % (n + 1));return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, s >> 8 & 255, 255 & s, 0, 0]));} }, { key: "traf", value: function value(t, r) {var i = e.sdtp(t),a = t.id,s = Math.floor(r / (n + 1)),o = Math.floor(r % (n + 1));return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i);} }, { key: "trak", value: function value(t) {return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t));} }, { key: "trex", value: function value(t) {var r = t.id;return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));} }, { key: "trun", value: function value(t, r) {var i,a,n,s,o,l,u = t.samples || [],d = u.length,f = 12 + 16 * d,c = new Uint8Array(f);for (r += 8 + f, c.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < d; i++) {a = u[i], n = a.duration, s = a.size, o = a.flags, l = a.cts, c.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);}return e.box(e.types.trun, c);} }, { key: "initSegment", value: function value(t) {e.types || e.init();var r,i = e.moov(t);return r = new Uint8Array(e.FTYP.byteLength + i.byteLength), r.set(e.FTYP), r.set(i, e.FTYP.byteLength), r;} }]), e;}();r.default = s;}, {}], 43: [function (e, t, r) {"use strict";function i(e) {return e && e.__esModule ? e : { default: e };}function a(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var n = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),s = e(34),o = i(s),l = e(33),u = i(l),d = e(51),f = e(42),c = i(f),h = e(31),g = function () {function e(t, r, i, n) {a(this, e), this.observer = t, this.config = r, this.typeSupported = i;var s = navigator.userAgent;this.isSafari = n && n.indexOf("Apple") > -1 && s && !s.match("CriOS"), this.ISGenerated = !1;}return n(e, [{ key: "destroy", value: function value() {} }, { key: "resetTimeStamp", value: function value(e) {this._initPTS = this._initDTS = e;} }, { key: "resetInitSegment", value: function value() {this.ISGenerated = !1;} }, { key: "remux", value: function value(e, t, r, i, a, n, s) {if (this.ISGenerated || this.generateIS(e, t, a), this.ISGenerated) if (e.samples.length) {e.timescale || (d.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, a));var o = this.remuxAudio(e, a, n, s);if (t.samples.length) {var l = void 0;o && (l = o.endPTS - o.startPTS), t.timescale || (d.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, a)), this.remuxVideo(t, a, n, l);}} else {var f = void 0;t.samples.length && (f = this.remuxVideo(t, a, n)), f && e.codec && this.remuxEmptyAudio(e, a, n, f);}r.samples.length && this.remuxID3(r, a), i.samples.length && this.remuxText(i, a), this.observer.trigger(u.default.FRAG_PARSED);} }, { key: "generateIS", value: function value(e, t, r) {var i,a,n = this.observer,s = e.samples,o = t.samples,l = this.typeSupported,f = "audio/mp4",g = {},v = { tracks: g },p = void 0 === this._initPTS;if (p && (i = a = 1 / 0), e.config && s.length && (e.timescale = e.samplerate, d.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (l.mpeg ? (f = "audio/mpeg", e.codec = "") : l.mp3 && (e.codec = "mp3")), g.audio = { container: f, codec: e.codec, initSegment: !e.isAAC && l.mpeg ? new Uint8Array() : c.default.initSegment([e]), metadata: { channelCount: e.channelCount } }, p && (i = a = s[0].pts - e.inputTimeScale * r)), t.sps && t.pps && o.length) {var y = t.inputTimeScale;t.timescale = y, g.video = { container: "video/mp4", codec: t.codec, initSegment: c.default.initSegment([t]), metadata: { width: t.width, height: t.height } }, p && (i = Math.min(i, o[0].pts - y * r), a = Math.min(a, o[0].dts - y * r), this.observer.trigger(u.default.INIT_PTS_FOUND, { initPTS: i }));}Object.keys(g).length ? (n.trigger(u.default.FRAG_PARSING_INIT_SEGMENT, v), this.ISGenerated = !0, p && (this._initPTS = i, this._initDTS = a)) : n.trigger(u.default.ERROR, { type: h.ErrorTypes.MEDIA_ERROR, details: h.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: "no audio/video samples found" });} }, { key: "remuxVideo", value: function value(e, t, r, i) {var a,n,s,o,l,f,g,v = 8,p = e.timescale,y = e.samples,m = [],E = y.length,b = this._PTSNormalize,T = this._initDTS;y.sort(function (e, t) {var r = e.dts - t.dts,i = e.pts - t.pts;return r ? r : i ? i : e.id - t.id;});var _ = y.reduce(function (e, t) {return Math.max(Math.min(e, t.pts - t.dts), -18e3);}, 0);if (_ < 0) {d.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(_ / 90) + " ms to overcome this issue");for (var k = 0; k < y.length; k++) {y[k].dts += _;}}var R = void 0;R = r ? this.nextAvcDts : t * p;var A = y[0];l = Math.max(b(A.dts - T, R), 0), o = Math.max(b(A.pts - T, R), 0);var S = Math.round((l - R) / 90);r && S && (S > 1 ? d.logger.log("AVC:" + S + " ms hole between fragments detected,filling it") : S < -1 && d.logger.log("AVC:" + -S + " ms overlapping between fragments detected"), l = R, y[0].dts = l + T, o = Math.max(o - S, R), y[0].pts = o + T, d.logger.log("Video/PTS/DTS adjusted: " + Math.round(o / 90) + "/" + Math.round(l / 90) + ",delta:" + S + " ms")), A = y[y.length - 1], g = Math.max(b(A.dts - T, R), 0), f = Math.max(b(A.pts - T, R), 0), f = Math.max(f, g);var L = this.isSafari;L && (a = Math.round((g - l) / (y.length - 1)));for (var w = 0, D = 0, O = 0; O < E; O++) {for (var I = y[O], P = I.units, C = P.length, x = 0, F = 0; F < C; F++) {x += P[F].data.length;}D += x, w += C, I.length = x, I.dts = L ? l + O * a : Math.max(b(I.dts - T, R), l), I.pts = Math.max(b(I.pts - T, R), I.dts);}var M = D + 4 * w + 8;try {n = new Uint8Array(M);} catch (e) {return void this.observer.trigger(u.default.ERROR, { type: h.ErrorTypes.MUX_ERROR, details: h.ErrorDetails.REMUX_ALLOC_ERROR, fatal: !1, bytes: M, reason: "fail allocating video mdat " + M });}var N = new DataView(n.buffer);N.setUint32(0, M), n.set(c.default.types.mdat, 4);for (var U = 0; U < E; U++) {for (var B = y[U], G = B.units, j = 0, K = void 0, W = 0, H = G.length; W < H; W++) {var V = G[W],Y = V.data,X = V.data.byteLength;N.setUint32(v, X), v += 4, n.set(Y, v), v += X, j += 4 + X;}if (L) K = Math.max(0, a * Math.round((B.pts - B.dts) / a));else {if (U < E - 1) a = y[U + 1].dts - B.dts;else {var z = this.config,q = B.dts - y[U > 0 ? U - 1 : U].dts;if (z.stretchShortVideoTrack) {var Q = z.maxBufferHole,J = z.maxSeekHole,Z = Math.floor(Math.min(Q, J) * p),$ = (i ? o + i * p : this.nextAudioPts) - B.pts;$ > Z ? (a = $ - q, a < 0 && (a = q), d.logger.log("It is approximately " + $ / 90 + " ms to the next segment; using duration " + a / 90 + " ms for the last video frame.")) : a = q;} else a = q;}K = Math.round(B.pts - B.dts);}m.push({ size: j, duration: a, cts: K, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: B.key ? 2 : 1, isNonSync: B.key ? 0 : 1 } });}this.nextAvcDts = g + a;var ee = e.dropped;if (e.len = 0, e.nbNalu = 0, e.dropped = 0, m.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {var te = m[0].flags;te.dependsOn = 2, te.isNonSync = 0;}e.samples = m, s = c.default.moof(e.sequenceNumber++, l, e), e.samples = [];var re = { data1: s, data2: n, startPTS: o / p, endPTS: (f + a) / p, startDTS: l / p, endDTS: this.nextAvcDts / p, type: "video", nb: m.length, dropped: ee };return this.observer.trigger(u.default.FRAG_PARSING_DATA, re), re;} }, { key: "remuxAudio", value: function value(e, t, r, i) {var a,n,s,l,f,g,v,p,y,m,E,b,T,_,k,R,A = e.inputTimeScale,S = e.timescale,L = A / S,w = e.isAAC ? 1024 : 1152,D = w * L,O = this._PTSNormalize,I = this._initDTS,P = !e.isAAC && this.typeSupported.mpeg,C = P ? 0 : 8,x = [],F = [];if (e.samples.sort(function (e, t) {return e.pts - t.pts;}), F = e.samples, R = this.nextAudioPts, r |= F.length && R && (i && Math.abs(t - R / A) < .1 || Math.abs(F[0].pts - R - I) < 20 * D), r || (R = t * A), i && e.isAAC) for (var M = 0, N = R; M < F.length;) {var U = F[M],B = O(U.pts - I, R),G = B - N;if (G <= -D) d.logger.warn("Dropping 1 audio frame @ " + (N / A).toFixed(3) + "s due to " + Math.abs(1e3 * G / A) + " ms overlap."), F.splice(M, 1), e.len -= U.unit.length;else if (G >= D && N) {var j = Math.round(G / D);d.logger.warn("Injecting " + j + " audio frame @ " + (N / A).toFixed(3) + "s due to " + 1e3 * G / A + " ms gap.");for (var K = 0; K < j; K++) {k = N + I, k = Math.max(k, I), _ = o.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount), _ || (d.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), _ = U.unit.subarray()), F.splice(M, 0, { unit: _, pts: k, dts: k }), e.len += _.length, N += D, M += 1;}U.pts = U.dts = N + I, N += D, M += 1;} else Math.abs(G), N += D, U.pts = U.dts = 0 === M ? I + R : F[M - 1].pts + D, M += 1;}for (var W = 0, H = F.length; W < H; W++) {if (n = F[W], l = n.unit, m = n.pts - I, E = n.dts - I, void 0 !== y) b = O(m, y), T = O(E, y), s.duration = Math.round((T - y) / L);else {b = O(m, R), T = O(E, R);var V = Math.round(1e3 * (b - R) / A),Y = 0;if (r && e.isAAC && V) {if (V > 0) Y = Math.round((b - R) / D), d.logger.log(V + " ms hole between AAC samples detected,filling it"), Y > 0 && (_ = o.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount), _ || (_ = l.subarray()), e.len += Y * _.length);else if (V < -12) {d.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (R / A).toFixed(3) + "s/" + (b / A).toFixed(3) + "s/" + -V + "ms"), e.len -= l.byteLength;continue;}b = T = R;}if (v = Math.max(0, b), p = Math.max(0, T), !(e.len > 0)) return;var X = P ? e.len : e.len + 8;try {f = new Uint8Array(X);} catch (e) {return void this.observer.trigger(u.default.ERROR, { type: h.ErrorTypes.MUX_ERROR, details: h.ErrorDetails.REMUX_ALLOC_ERROR, fatal: !1, bytes: X, reason: "fail allocating audio mdat " + X });}P || (a = new DataView(f.buffer), a.setUint32(0, X), f.set(c.default.types.mdat, 4));for (var z = 0; z < Y; z++) {k = b - (Y - z) * D, _ = o.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount), _ || (d.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), _ = l.subarray()), f.set(_, C), C += _.byteLength, s = { size: _.byteLength, cts: 0, duration: 1024, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, x.push(s);}}f.set(l, C);var q = l.byteLength;C += q, s = { size: q, cts: 0, duration: 0, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, x.push(s), y = T;}var Q = 0,J = x.length;if (J >= 2 && (Q = x[J - 2].duration, s.duration = Q), J) {this.nextAudioPts = b + L * Q, e.len = 0, e.samples = x, g = P ? new Uint8Array() : c.default.moof(e.sequenceNumber++, p / L, e), e.samples = [];var Z = { data1: g, data2: f, startPTS: v / A, endPTS: this.nextAudioPts / A, startDTS: p / A, endDTS: (T + L * Q) / A, type: "audio", nb: J };return this.observer.trigger(u.default.FRAG_PARSING_DATA, Z), Z;}return null;} }, { key: "remuxEmptyAudio", value: function value(e, t, r, i) {var a = e.inputTimeScale,n = e.samplerate ? e.samplerate : a,s = a / n,l = this.nextAudioPts,u = (void 0 !== l ? l : i.startDTS * a) + this._initDTS,f = i.endDTS * a + this._initDTS,c = 1024 * s,h = Math.ceil((f - u) / c),g = o.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);if (d.logger.warn("remux empty Audio"), !g) return void d.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");for (var v = [], p = 0; p < h; p++) {var y = u + p * c;v.push({ unit: g, pts: y, dts: y }), e.len += g.length;}e.samples = v, this.remuxAudio(e, t, r);} }, { key: "remuxID3", value: function value(e, t) {var r,i = e.samples.length,a = e.inputTimeScale,n = this._initPTS,s = this._initDTS;if (i) {for (var o = 0; o < i; o++) {r = e.samples[o], r.pts = (r.pts - n) / a, r.dts = (r.dts - s) / a;}this.observer.trigger(u.default.FRAG_PARSING_METADATA, { samples: e.samples });}e.samples = [], t = t;} }, { key: "remuxText", value: function value(e, t) {e.samples.sort(function (e, t) {return e.pts - t.pts;});var r,i = e.samples.length,a = e.inputTimeScale,n = this._initPTS;if (i) {for (var s = 0; s < i; s++) {r = e.samples[s], r.pts = (r.pts - n) / a;}this.observer.trigger(u.default.FRAG_PARSING_USERDATA, { samples: e.samples });}e.samples = [], t = t;} }, { key: "_PTSNormalize", value: function value(e, t) {var r;if (void 0 === t) return e;for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) {e += r;}return e;} }]), e;}();r.default = g;}, { 31: 31, 33: 33, 34: 34, 42: 42, 51: 51 }], 44: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = e(33),s = function (e) {return e && e.__esModule ? e : { default: e };}(n),o = function () {function e(t) {i(this, e), this.observer = t;}return a(e, [{ key: "destroy", value: function value() {} }, { key: "resetTimeStamp", value: function value() {} }, { key: "resetInitSegment", value: function value() {} }, { key: "remux", value: function value(e, t, r, i, a, n, o, l) {var u = this.observer,d = "";e && (d += "audio"), t && (d += "video"), u.trigger(s.default.FRAG_PARSING_DATA, { data1: l, startPTS: a, startDTS: a, type: d, nb: 1, dropped: 0 }), u.trigger(s.default.FRAG_PARSED);} }]), e;}();r.default = o;}, { 33: 33 }], 45: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = /^(\d+)x(\d+)$/,s = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,o = function () {function e(t) {i(this, e), "string" == typeof t && (t = e.parseAttrList(t));for (var r in t) {t.hasOwnProperty(r) && (this[r] = t[r]);}}return a(e, [{ key: "decimalInteger", value: function value(e) {var t = parseInt(this[e], 10);return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;} }, { key: "hexadecimalInteger", value: function value(e) {if (this[e]) {var t = (this[e] || "0x").slice(2);t = (1 & t.length ? "0" : "") + t;for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++) {r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);}return r;}return null;} }, { key: "hexadecimalIntegerAsNumber", value: function value(e) {var t = parseInt(this[e], 16);return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;} }, { key: "decimalFloatingPoint", value: function value(e) {return parseFloat(this[e]);} }, { key: "enumeratedString", value: function value(e) {return this[e];} }, { key: "decimalResolution", value: function value(e) {var t = n.exec(this[e]);if (null !== t) return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) };} }], [{ key: "parseAttrList", value: function value(e) {var t,r = {};for (s.lastIndex = 0; null !== (t = s.exec(e));) {var i = t[2];0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[t[1]] = i;}return r;} }]), e;}();r.default = o;}, {}], 46: [function (e, t, r) {"use strict";var i = { search: function search(e, t) {for (var r = 0, i = e.length - 1, a = null, n = null; r <= i;) {a = (r + i) / 2 | 0, n = e[a];var s = t(n);if (s > 0) r = a + 1;else {
              if (!(s < 0)) return n;i = a - 1;}}return null;} };t.exports = i;}, {}], 47: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 },s = function s(e) {var t = e;return n.hasOwnProperty(e) && (t = n[e]), String.fromCharCode(t);},o = 15,l = 100,u = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },d = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },f = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },c = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },h = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],g = { verboseFilter: { DATA: 3, DEBUG: 3, INFO: 2, WARNING: 2, TEXT: 1, ERROR: 0 }, time: null, verboseLevel: 0, setTime: function setTime(e) {this.time = e;}, log: function log(e, t) {this.verboseFilter[e];this.verboseLevel;} },v = function v(e) {for (var t = [], r = 0; r < e.length; r++) {t.push(e[r].toString(16));}return t;},p = function () {function e(t, r, a, n, s) {i(this, e), this.foreground = t || "white", this.underline = r || !1, this.italics = a || !1, this.background = n || "black", this.flash = s || !1;}return a(e, [{ key: "reset", value: function value() {this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;} }, { key: "setStyles", value: function value(e) {for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {var i = t[r];e.hasOwnProperty(i) && (this[i] = e[i]);}} }, { key: "isDefault", value: function value() {return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash;} }, { key: "equals", value: function value(e) {return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash;} }, { key: "copy", value: function value(e) {this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash;} }, { key: "toString", value: function value() {return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;} }]), e;}(),y = function () {function e(t, r, a, n, s, o) {i(this, e), this.uchar = t || " ", this.penState = new p(r, a, n, s, o);}return a(e, [{ key: "reset", value: function value() {this.uchar = " ", this.penState.reset();} }, { key: "setChar", value: function value(e, t) {this.uchar = e, this.penState.copy(t);} }, { key: "setPenState", value: function value(e) {this.penState.copy(e);} }, { key: "equals", value: function value(e) {return this.uchar === e.uchar && this.penState.equals(e.penState);} }, { key: "copy", value: function value(e) {this.uchar = e.uchar, this.penState.copy(e.penState);} }, { key: "isEmpty", value: function value() {return " " === this.uchar && this.penState.isDefault();} }]), e;}(),m = function () {function e() {i(this, e), this.chars = [];for (var t = 0; t < l; t++) {this.chars.push(new y());}this.pos = 0, this.currPenState = new p();}return a(e, [{ key: "equals", value: function value(e) {for (var t = !0, r = 0; r < l; r++) {if (!this.chars[r].equals(e.chars[r])) {t = !1;break;}}return t;} }, { key: "copy", value: function value(e) {for (var t = 0; t < l; t++) {this.chars[t].copy(e.chars[t]);}} }, { key: "isEmpty", value: function value() {for (var e = !0, t = 0; t < l; t++) {if (!this.chars[t].isEmpty()) {e = !1;break;}}return e;} }, { key: "setCursor", value: function value(e) {this.pos !== e && (this.pos = e), this.pos < 0 ? (g.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > l && (g.log("ERROR", "Too large cursor position " + this.pos), this.pos = l);} }, { key: "moveCursor", value: function value(e) {var t = this.pos + e;if (e > 1) for (var r = this.pos + 1; r < t + 1; r++) {this.chars[r].setPenState(this.currPenState);}this.setCursor(t);} }, { key: "backSpace", value: function value() {this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);} }, { key: "insertChar", value: function value(e) {e >= 144 && this.backSpace();var t = s(e);if (this.pos >= l) return void g.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);} }, { key: "clearFromPos", value: function value(e) {var t;for (t = e; t < l; t++) {this.chars[t].reset();}} }, { key: "clear", value: function value() {this.clearFromPos(0), this.pos = 0, this.currPenState.reset();} }, { key: "clearToEndOfRow", value: function value() {this.clearFromPos(this.pos);} }, { key: "getTextString", value: function value() {for (var e = [], t = !0, r = 0; r < l; r++) {var i = this.chars[r].uchar;" " !== i && (t = !1), e.push(i);}return t ? "" : e.join("");} }, { key: "setPenStyles", value: function value(e) {this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);} }]), e;}(),E = function () {function e() {i(this, e), this.rows = [];for (var t = 0; t < o; t++) {this.rows.push(new m());}this.currRow = o - 1, this.nrRollUpRows = null, this.reset();}return a(e, [{ key: "reset", value: function value() {for (var e = 0; e < o; e++) {this.rows[e].clear();}this.currRow = o - 1;} }, { key: "equals", value: function value(e) {for (var t = !0, r = 0; r < o; r++) {if (!this.rows[r].equals(e.rows[r])) {t = !1;break;}}return t;} }, { key: "copy", value: function value(e) {for (var t = 0; t < o; t++) {this.rows[t].copy(e.rows[t]);}} }, { key: "isEmpty", value: function value() {for (var e = !0, t = 0; t < o; t++) {if (!this.rows[t].isEmpty()) {e = !1;break;}}return e;} }, { key: "backSpace", value: function value() {this.rows[this.currRow].backSpace();} }, { key: "clearToEndOfRow", value: function value() {this.rows[this.currRow].clearToEndOfRow();} }, { key: "insertChar", value: function value(e) {this.rows[this.currRow].insertChar(e);} }, { key: "setPen", value: function value(e) {this.rows[this.currRow].setPenStyles(e);} }, { key: "moveCursor", value: function value(e) {this.rows[this.currRow].moveCursor(e);} }, { key: "setCursor", value: function value(e) {g.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e);} }, { key: "setPAC", value: function value(e) {g.log("INFO", "pacData = " + JSON.stringify(e));var t = e.row - 1;if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {for (var r = 0; r < o; r++) {this.rows[r].clear();}var i = this.currRow + 1 - this.nrRollUpRows,a = this.lastOutputScreen;if (a) {var n = a.rows[i].cueStartTime;if (n && n < g.time) for (var s = 0; s < this.nrRollUpRows; s++) {this.rows[t - this.nrRollUpRows + s + 1].copy(a.rows[i + s]);}}}this.currRow = t;var l = this.rows[this.currRow];if (null !== e.indent) {var u = e.indent,d = Math.max(u - 1, 0);l.setCursor(e.indent), e.color = l.chars[d].penState.foreground;}var f = { foreground: e.color, underline: e.underline, italics: e.italics, background: "black", flash: !1 };this.setPen(f);} }, { key: "setBkgData", value: function value(e) {g.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32);} }, { key: "setRollUpRows", value: function value(e) {this.nrRollUpRows = e;} }, { key: "rollUp", value: function value() {if (null === this.nrRollUpRows) return void g.log("DEBUG", "roll_up but nrRollUpRows not set yet");g.log("TEXT", this.getDisplayText());var e = this.currRow + 1 - this.nrRollUpRows,t = this.rows.splice(e, 1)[0];t.clear(), this.rows.splice(this.currRow, 0, t), g.log("INFO", "Rolling up");} }, { key: "getDisplayText", value: function value(e) {e = e || !1;for (var t = [], r = "", i = -1, a = 0; a < o; a++) {var n = this.rows[a].getTextString();n && (i = a + 1, e ? t.push("Row " + i + ": '" + n + "'") : t.push(n.trim()));}return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r;} }, { key: "getTextAndFormat", value: function value() {return this.rows;} }]), e;}(),b = function () {function e(t, r) {i(this, e), this.chNr = t, this.outputFilter = r, this.mode = null, this.verbose = 0, this.displayedMemory = new E(), this.nonDisplayedMemory = new E(), this.lastOutputScreen = new E(), this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;}return a(e, [{ key: "reset", value: function value() {this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null;} }, { key: "getHandler", value: function value() {return this.outputFilter;} }, { key: "setHandler", value: function value(e) {this.outputFilter = e;} }, { key: "setPAC", value: function value(e) {this.writeScreen.setPAC(e);} }, { key: "setBkgData", value: function value(e) {this.writeScreen.setBkgData(e);} }, { key: "setMode", value: function value(e) {e !== this.mode && (this.mode = e, g.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e);} }, { key: "insertChars", value: function value(e) {for (var t = 0; t < e.length; t++) {this.writeScreen.insertChar(e[t]);}var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";g.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (g.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());} }, { key: "ccRCL", value: function value() {g.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");} }, { key: "ccBS", value: function value() {g.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());} }, { key: "ccAOF", value: function value() {} }, { key: "ccAON", value: function value() {} }, { key: "ccDER", value: function value() {g.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();} }, { key: "ccRU", value: function value(e) {g.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e);} }, { key: "ccFON", value: function value() {g.log("INFO", "FON - Flash On"), this.writeScreen.setPen({ flash: !0 });} }, { key: "ccRDC", value: function value() {g.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");} }, { key: "ccTR", value: function value() {g.log("INFO", "TR"), this.setMode("MODE_TEXT");} }, { key: "ccRTD", value: function value() {g.log("INFO", "RTD"), this.setMode("MODE_TEXT");} }, { key: "ccEDM", value: function value() {g.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate();} }, { key: "ccCR", value: function value() {g.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate();} }, { key: "ccENM", value: function value() {g.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();} }, { key: "ccEOC", value: function value() {if (g.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {var e = this.displayedMemory;this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, g.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText());}this.outputDataUpdate();} }, { key: "ccTO", value: function value(e) {g.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);} }, { key: "ccMIDROW", value: function value(e) {var t = { flash: !1 };if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";else {var r = Math.floor(e / 2) - 16,i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];t.foreground = i[r];}g.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t);} }, { key: "outputDataUpdate", value: function value() {var e = g.time;null !== e && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(e, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory));} }, { key: "cueSplitAtTime", value: function value(e) {this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));} }]), e;}(),T = function () {function e(t, r, a) {i(this, e), this.field = t || 1, this.outputs = [r, a], this.channels = [new b(1, r), new b(2, a)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = { padding: 0, char: 0, cmd: 0, other: 0 };}return a(e, [{ key: "getHandler", value: function value(e) {return this.channels[e].getHandler();} }, { key: "setHandler", value: function value(e, t) {this.channels[e].setHandler(t);} }, { key: "addData", value: function value(e, t) {var r,i,a,n = !1;this.lastTime = e, g.setTime(e);for (var s = 0; s < t.length; s += 2) {if (i = 127 & t[s], a = 127 & t[s + 1], 0 !== i || 0 !== a) {if (g.log("DATA", "[" + v([t[s], t[s + 1]]) + "] -> (" + v([i, a]) + ")"), r = this.parseCmd(i, a), r || (r = this.parseMidrow(i, a)), r || (r = this.parsePAC(i, a)), r || (r = this.parseBackgroundAttributes(i, a)), !r && (n = this.parseChars(i, a))) if (this.currChNr && this.currChNr >= 0) {var o = this.channels[this.currChNr - 1];o.insertChars(n);} else g.log("WARNING", "No channel found yet. TEXT-MODE?");r ? this.dataCounters.cmd += 2 : n ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, g.log("WARNING", "Couldn't parse cleaned data " + v([i, a]) + " orig: " + v([t[s], t[s + 1]])));} else this.dataCounters.padding += 2;}} }, { key: "parseCmd", value: function value(e, t) {var r = null,i = (20 === e || 28 === e) && 32 <= t && t <= 47,a = (23 === e || 31 === e) && 33 <= t && t <= 35;if (!i && !a) return !1;if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, g.log("DEBUG", "Repeated command (" + v([e, t]) + ") is dropped"), !0;r = 20 === e || 23 === e ? 1 : 2;var n = this.channels[r - 1];return 20 === e || 28 === e ? 32 === t ? n.ccRCL() : 33 === t ? n.ccBS() : 34 === t ? n.ccAOF() : 35 === t ? n.ccAON() : 36 === t ? n.ccDER() : 37 === t ? n.ccRU(2) : 38 === t ? n.ccRU(3) : 39 === t ? n.ccRU(4) : 40 === t ? n.ccFON() : 41 === t ? n.ccRDC() : 42 === t ? n.ccTR() : 43 === t ? n.ccRTD() : 44 === t ? n.ccEDM() : 45 === t ? n.ccCR() : 46 === t ? n.ccENM() : 47 === t && n.ccEOC() : n.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0;} }, { key: "parseMidrow", value: function value(e, t) {var r = null;if ((17 === e || 25 === e) && 32 <= t && t <= 47) {if ((r = 17 === e ? 1 : 2) !== this.currChNr) return g.log("ERROR", "Mismatch channel in midrow parsing"), !1;return this.channels[r - 1].ccMIDROW(t), g.log("DEBUG", "MIDROW (" + v([e, t]) + ")"), !0;}return !1;} }, { key: "parsePAC", value: function value(e, t) {var r = null,i = null,a = (17 <= e && e <= 23 || 25 <= e && e <= 31) && 64 <= t && t <= 127,n = (16 === e || 24 === e) && 64 <= t && t <= 95;if (!a && !n) return !1;if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;r = e <= 23 ? 1 : 2, i = 64 <= t && t <= 95 ? 1 === r ? u[e] : f[e] : 1 === r ? d[e] : c[e];var s = this.interpretPAC(i, t);return this.channels[r - 1].setPAC(s), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0;} }, { key: "interpretPAC", value: function value(e, t) {var r = t,i = { color: null, italics: !1, indent: null, underline: !1, row: e };return r = t > 95 ? t - 96 : t - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i;} }, { key: "parseChars", value: function value(e, t) {var r = null,i = null,a = null;if (e >= 25 ? (r = 2, a = e - 8) : (r = 1, a = e), 17 <= a && a <= 19) {var n = t;n = 17 === a ? t + 80 : 18 === a ? t + 112 : t + 144, g.log("INFO", "Special char '" + s(n) + "' in channel " + r), i = [n];} else 32 <= e && e <= 127 && (i = 0 === t ? [e] : [e, t]);if (i) {var o = v(i);g.log("DEBUG", "Char codes =  " + o.join(",")), this.lastCmdA = null, this.lastCmdB = null;}return i;} }, { key: "parseBackgroundAttributes", value: function value(e, t) {var r,i,a,n,s = (16 === e || 24 === e) && 32 <= t && t <= 47,o = (23 === e || 31 === e) && 45 <= t && t <= 47;return !(!s && !o) && (r = {}, 16 === e || 24 === e ? (i = Math.floor((t - 32) / 2), r.background = h[i], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black", 47 === t && (r.underline = !0)), a = e < 24 ? 1 : 2, n = this.channels[a - 1], n.setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0);} }, { key: "reset", value: function value() {for (var e = 0; e < this.channels.length; e++) {this.channels[e] && this.channels[e].reset();}this.lastCmdA = null, this.lastCmdB = null;} }, { key: "cueSplitAtTime", value: function value(e) {for (var t = 0; t < this.channels.length; t++) {this.channels[t] && this.channels[t].cueSplitAtTime(e);}} }]), e;}();r.default = T;}, {}], 48: [function (e, t, r) {"use strict";var i = e(54),a = { newCue: function newCue(e, t, r, a) {for (var n, s, o, l, u, d = window.VTTCue || window.TextTrackCue, f = 0; f < a.rows.length; f++) {if (n = a.rows[f], o = !0, l = 0, u = "", !n.isEmpty()) {for (var c = 0; c < n.chars.length; c++) {n.chars[c].uchar.match(/\s/) && o ? l++ : (u += n.chars[c].uchar, o = !1);}n.cueStartTime = t, t === r && (r += 1e-4), s = new d(t, r, (0, i.fixLineBreaks)(u.trim())), l >= 16 ? l-- : l++, navigator.userAgent.match(/Firefox\//) ? s.line = f + 1 : s.line = f > 7 ? f - 2 : f + 1, s.align = "left", s.position = Math.max(0, Math.min(100, l / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), e.addCue(s);}}} };t.exports = a;}, { 54: 54 }], 49: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = e(50),s = function (e) {return e && e.__esModule ? e : { default: e };}(n),o = function () {function e(t, r, a, n) {i(this, e), this.hls = t, this.defaultEstimate_ = n, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new s.default(r), this.fast_ = new s.default(a);}return a(e, [{ key: "sample", value: function value(e, t) {e = Math.max(e, this.minDelayMs_);var r = 8e3 * t / e,i = e / 1e3;this.fast_.sample(i, r), this.slow_.sample(i, r);} }, { key: "canEstimate", value: function value() {var e = this.fast_;return e && e.getTotalWeight() >= this.minWeight_;} }, { key: "getEstimate", value: function value() {return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;} }, { key: "destroy", value: function value() {} }]), e;}();r.default = o;}, { 50: 50 }], 50: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = function () {function e(t) {i(this, e), this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = 0, this.totalWeight_ = 0;}return a(e, [{ key: "sample", value: function value(e, t) {var r = Math.pow(this.alpha_, e);this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e;} }, { key: "getTotalWeight", value: function value() {return this.totalWeight_;} }, { key: "getEstimate", value: function value() {if (this.alpha_) {var e = 1 - Math.pow(this.alpha_, this.totalWeight_);return this.estimate_ / e;}return this.estimate_;} }]), e;}();r.default = n;}, {}], 51: [function (e, t, r) {"use strict";function i() {}function a(e, t) {return t = "[" + e + "] > " + t;}function n(e) {var t = self.console[e];return t ? function () {for (var r = arguments.length, i = Array(r), n = 0; n < r; n++) {i[n] = arguments[n];}i[0] && (i[0] = a(e, i[0])), t.apply(self.console, i);} : i;}function s(e) {for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {r[i - 1] = arguments[i];}r.forEach(function (t) {u[t] = e[t] ? e[t].bind(e) : n(t);});}Object.defineProperty(r, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e;} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;},l = { trace: i, debug: i, log: i, warn: i, info: i, error: i },u = l;r.enableLogs = function (e) {if (e === !0 || "object" === (void 0 === e ? "undefined" : o(e))) {s(e, "debug", "log", "info", "warn", "error");try {u.log();} catch (e) {u = l;}} else u = l;}, r.logger = u;}, {}], 52: [function (e, t, r) {"use strict";var i = { toString: function toString(e) {for (var t = "", r = e.length, i = 0; i < r; i++) {t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]";}return t;} };t.exports = i;}, {}], 53: [function (e, t, r) {"use strict";Object.defineProperty(r, "__esModule", { value: !0 }), r.default = function () {function e(e) {return "string" == typeof e && !!n[e.toLowerCase()] && e.toLowerCase();}function t(e) {return "string" == typeof e && !!s[e.toLowerCase()] && e.toLowerCase();}function r(e) {for (var t = 1; t < arguments.length; t++) {var r = arguments[t];for (var i in r) {e[i] = r[i];}}return e;}function i(i, n, s) {var o = this,l = function () {if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent);}(),u = {};l ? o = document.createElement("custom") : u.enumerable = !0, o.hasBeenReset = !1;var d = "",f = !1,c = i,h = n,g = s,v = null,p = "",y = !0,m = "auto",E = "start",b = 50,T = "middle",_ = 50,k = "middle";if (Object.defineProperty(o, "id", r({}, u, { get: function get() {return d;}, set: function set(e) {d = "" + e;} })), Object.defineProperty(o, "pauseOnExit", r({}, u, { get: function get() {return f;}, set: function set(e) {f = !!e;} })), Object.defineProperty(o, "startTime", r({}, u, { get: function get() {return c;}, set: function set(e) {if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");c = e, this.hasBeenReset = !0;} })), Object.defineProperty(o, "endTime", r({}, u, { get: function get() {return h;}, set: function set(e) {if ("number" != typeof e) throw new TypeError("End time must be set to a number.");h = e, this.hasBeenReset = !0;} })), Object.defineProperty(o, "text", r({}, u, { get: function get() {return g;}, set: function set(e) {g = "" + e, this.hasBeenReset = !0;} })), Object.defineProperty(o, "region", r({}, u, { get: function get() {return v;}, set: function set(e) {v = e, this.hasBeenReset = !0;} })), Object.defineProperty(o, "vertical", r({}, u, { get: function get() {return p;}, set: function set(t) {var r = e(t);if (r === !1) throw new SyntaxError("An invalid or illegal string was specified.");p = r, this.hasBeenReset = !0;} })), Object.defineProperty(o, "snapToLines", r({}, u, { get: function get() {return y;}, set: function set(e) {y = !!e, this.hasBeenReset = !0;} })), Object.defineProperty(o, "line", r({}, u, { get: function get() {return m;}, set: function set(e) {if ("number" != typeof e && e !== a) throw new SyntaxError("An invalid number or illegal string was specified.");m = e, this.hasBeenReset = !0;} })), Object.defineProperty(o, "lineAlign", r({}, u, { get: function get() {return E;}, set: function set(e) {var r = t(e);if (!r) throw new SyntaxError("An invalid or illegal string was specified.");E = r, this.hasBeenReset = !0;} })), Object.defineProperty(o, "position", r({}, u, { get: function get() {return b;}, set: function set(e) {if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");b = e, this.hasBeenReset = !0;} })), Object.defineProperty(o, "positionAlign", r({}, u, { get: function get() {return T;}, set: function set(e) {var r = t(e);if (!r) throw new SyntaxError("An invalid or illegal string was specified.");T = r, this.hasBeenReset = !0;} })), Object.defineProperty(o, "size", r({}, u, { get: function get() {return _;}, set: function set(e) {if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");_ = e, this.hasBeenReset = !0;} })), Object.defineProperty(o, "align", r({}, u, { get: function get() {return k;}, set: function set(e) {var r = t(e);if (!r) throw new SyntaxError("An invalid or illegal string was specified.");k = r, this.hasBeenReset = !0;} })), o.displayState = void 0, l) return o;}if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;var a = "auto",n = { "": !0, lr: !0, rl: !0 },s = { start: !0, middle: !0, end: !0, left: !0, right: !0 };return i.prototype.getCueAsHTML = function () {return window.WebVTT.convertCueToDOMTree(window, this.text);}, i;}();}, {}], 54: [function (e, t, r) {"use strict";function i() {this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new f(), this.regionList = [];}function a(e) {function t(e, t, r, i) {return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3;}var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null;}function n() {this.values = Object.create(null);}function s(e, t, r, i) {var a = i ? e.split(i) : [e];for (var n in a) {if ("string" == typeof a[n]) {var s = a[n].split(r);if (2 === s.length) {var o = s[0],l = s[1];t(o, l);}}}}function o(e, t, r) {function i() {var t = a(e);if (null === t) throw new Error("Malformed timestamp: " + l);return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t;}function o() {e = e.replace(/^\s+/, "");}var l = e;if (o(), t.startTime = i(), o(), "-->" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + l);e = e.substr(3), o(), t.endTime = i(), o(), function (e, t) {var i = new n();s(e, function (e, t) {switch (e) {case "region":for (var a = r.length - 1; a >= 0; a--) {if (r[a].id === t) {i.set(e, r[a].region);break;}}break;case "vertical":i.alt(e, t, ["rl", "lr"]);break;case "line":var n = t.split(","),s = n[0];i.integer(e, s), i.percent(e, s) && i.set("snapToLines", !1), i.alt(e, s, ["auto"]), 2 === n.length && i.alt("lineAlign", n[1], ["start", h, "end"]);break;case "position":n = t.split(","), i.percent(e, n[0]), 2 === n.length && i.alt("positionAlign", n[1], ["start", h, "end", "line-left", "line-right", "auto"]);break;case "size":i.percent(e, t);break;case "align":i.alt(e, t, ["start", h, "end", "left", "right"]);}}, /:/, /\s/), t.region = i.get("region", null), t.vertical = i.get("vertical", "");var a = i.get("line", "auto");"auto" === a && c.line === -1 && (a = -1), t.line = a, t.lineAlign = i.get("lineAlign", "start"), t.snapToLines = i.get("snapToLines", !0), t.size = i.get("size", 100), t.align = i.get("align", h);var o = i.get("position", "auto");"auto" === o && 50 === c.position && (o = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = o;}(e, t);}function l(e) {return e.replace(/<br(?: \/)?>/gi, "\n");}Object.defineProperty(r, "__esModule", { value: !0 }), r.fixLineBreaks = void 0;var u = e(53),d = function (e) {return e && e.__esModule ? e : { default: e };}(u),f = function f() {return { decode: function decode(e) {if (!e) return "";if ("string" != typeof e) throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e));} };};n.prototype = { set: function set(e, t) {this.get(e) || "" === t || (this.values[e] = t);}, get: function get(e, t, r) {return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t;}, has: function has(e) {return e in this.values;}, alt: function alt(e, t, r) {for (var i = 0; i < r.length; ++i) {if (t === r[i]) {this.set(e, t);break;}}}, integer: function integer(e, t) {/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));}, percent: function percent(e, t) {return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0);} };var c = new d.default(0, 0, 0),h = "middle" === c.align ? "middle" : "center";i.prototype = { parse: function parse(e) {function t() {var e = r.buffer,t = 0;for (e = l(e); t < e.length && "\r" !== e[t] && "\n" !== e[t];) {++t;}var i = e.substr(0, t);return "\r" === e[t] && ++t, "\n" === e[t] && ++t, r.buffer = e.substr(t), i;}var r = this;e && (r.buffer += r.decoder.decode(e, { stream: !0 }));try {var i;if ("INITIAL" === r.state) {if (!/\r\n|\n/.test(r.buffer)) return this;i = t();var a = i.match(/^WEBVTT([ \t].*)?$/);if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");r.state = "HEADER";}for (var n = !1; r.buffer;) {if (!/\r\n|\n/.test(r.buffer)) return this;switch (n ? n = !1 : i = t(), r.state) {case "HEADER":/:/.test(i) ? function (e) {s(e, function (e, t) {switch (e) {case "Region":}}, /:/);}(i) : i || (r.state = "ID");continue;case "NOTE":i || (r.state = "ID");continue;case "ID":if (/^NOTE($|[ \t])/.test(i)) {r.state = "NOTE";break;}if (!i) continue;if (r.cue = new d.default(0, 0, ""), r.state = "CUE", i.indexOf("-->") === -1) {r.cue.id = i;continue;}case "CUE":try {o(i, r.cue, r.regionList);} catch (e) {r.cue = null, r.state = "BADCUE";continue;}r.state = "CUETEXT";continue;case "CUETEXT":var u = i.indexOf("-->") !== -1;if (!i || u && (n = !0)) {r.oncue && r.oncue(r.cue), r.cue = null, r.state = "ID";continue;}r.cue.text && (r.cue.text += "\n"), r.cue.text += i;continue;case "BADCUE":i || (r.state = "ID");continue;}}} catch (e) {"CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue), r.cue = null, r.state = "INITIAL" === r.state ? "BADWEBVTT" : "BADCUE";}return this;}, flush: function flush() {var e = this;try {if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new Error("Malformed WebVTT signature.");} catch (e) {throw e;}return e.onflush && e.onflush(), this;} }, r.fixLineBreaks = l, r.default = i;}, { 53: 53 }], 55: [function (e, t, r) {"use strict";var i = e(54),a = function (e) {return e && e.__esModule ? e : { default: e };}(i),n = function n(e) {var t = parseInt(e.substr(-3)),r = parseInt(e.substr(-6, 2)),i = parseInt(e.substr(-9, 2)),a = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;return isNaN(t) || isNaN(r) || isNaN(i) || isNaN(a) ? -1 : (t += 1e3 * r, t += 6e4 * i, t += 36e5 * a);},s = function s(e, t, r) {var i = e[t],a = e[i.prevCC];if (!a || !a.new && i.new) return e.ccOffset = e.presentationOffset = i.start, void (i.new = !1);for (; a && a.new;) {e.ccOffset += i.start - a.start, i.new = !1, i = a, a = e[i.prevCC];}e.presentationOffset = r;},o = { parse: function parse(e, t, r, i, o, l) {var u = String.fromCharCode.apply(null, new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),d = "00:00.000",f = 0,c = 0,h = 0,g = [],v = void 0,p = !0,y = new a.default();y.oncue = function (e) {var t = r[i],a = r.ccOffset;t && t.new && (c ? a = r.ccOffset = t.start : s(r, i, h)), h && !c && (a = h + r.ccOffset - r.presentationOffset), e.startTime += a - c, e.endTime += a - c, e.text = decodeURIComponent(escape(e.text)), e.endTime > 0 && g.push(e);}, y.onparsingerror = function (e) {v = e;}, y.onflush = function () {if (v && l) return void l(v);o(g);}, u.forEach(function (e) {if (p) {if (e.startsWith("X-TIMESTAMP-MAP=")) {p = !1, e.substr(16).split(",").forEach(function (e) {e.startsWith("LOCAL:") ? d = e.substr(6) : e.startsWith("MPEGTS:") && (f = parseInt(e.substr(7)));});try {t = t < 0 ? t + 8589934592 : t, f -= t, c = n(d) / 1e3, h = f / 9e4, c === -1 && (v = new Error("Malformed X-TIMESTAMP-MAP: " + e));} catch (t) {v = new Error("Malformed X-TIMESTAMP-MAP: " + e);}return;}"" === e && (p = !1);}y.parse(e + "\n");}), y.flush();} };t.exports = o;}, { 54: 54 }], 56: [function (e, t, r) {"use strict";function i(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}Object.defineProperty(r, "__esModule", { value: !0 });var a = function () {function e(e, t) {for (var r = 0; r < t.length; r++) {var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);}}return function (t, r, i) {return r && e(t.prototype, r), i && e(t, i), t;};}(),n = e(51),s = function () {function e(t) {i(this, e), t && t.xhrSetup && (this.xhrSetup = t.xhrSetup);}return a(e, [{ key: "destroy", value: function value() {this.abort(), this.loader = null;} }, { key: "abort", value: function value() {var e = this.loader;e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null;} }, { key: "load", value: function value(e, t, r) {this.context = e, this.config = t, this.callbacks = r, this.stats = { trequest: performance.now(), retry: 0 }, this.retryDelay = t.retryDelay, this.loadInternal();} }, { key: "loadInternal", value: function value() {var e,t = this.context;e = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest() : this.loader = new XMLHttpRequest();var r = this.stats;r.tfirst = 0, r.loaded = 0;var i = this.xhrSetup;if (i) try {i(e, t.url);} catch (r) {e.open("GET", t.url, !0), i(e, t.url);}e.readyState || e.open("GET", t.url, !0), t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send();} }, { key: "readystatechange", value: function value(e) {var t = e.currentTarget,r = t.readyState,i = this.stats,a = this.context,s = this.config;if (!i.aborted && r >= 2) if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(performance.now(), i.trequest)), 4 === r) {var o = t.status;if (o >= 200 && o < 300) {i.tload = Math.max(i.tfirst, performance.now());var l = void 0,u = void 0;"arraybuffer" === a.responseType ? (l = t.response, u = l.byteLength) : (l = t.responseText, u = l.length), i.loaded = i.total = u;var d = { url: t.responseURL, data: l };this.callbacks.onSuccess(d, i, a);} else i.retry >= s.maxRetry || o >= 400 && o < 499 ? (n.logger.error(o + " while loading " + a.url), this.callbacks.onError({ code: o, text: t.statusText }, a)) : (n.logger.warn(o + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, s.maxRetryDelay), i.retry++);} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), s.timeout);} }, { key: "loadtimeout", value: function value() {n.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context);} }, { key: "loadprogress", value: function value(e) {var t = this.stats;t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);var r = this.callbacks.onProgress;r && r(t, this.context, null);} }]), e;}();
      r.default = s;}, { 51: 51 }] }, {}, [38])(38);});

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map