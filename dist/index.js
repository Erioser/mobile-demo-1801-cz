/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/common.css */ \"./src/stylesheets/common.css\");\n/* harmony import */ var _stylesheets_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_common_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stylesheets_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/index.css */ \"./src/pages/index/stylesheets/index.css\");\n/* harmony import */ var _stylesheets_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _javascripts_controllers_indexController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascripts/controllers/indexController */ \"./src/pages/index/javascripts/controllers/indexController.js\");\n// require('../../stylesheets/common.css')\n\n\n\n_javascripts_controllers_indexController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].run();\nconsole.log('hahaha!');\nconsole.log('hahaha!');\nconsole.log('hahaha!');\nconsole.log('hahaha!');\n\n//# sourceURL=webpack:///./src/pages/index/index.js?");

/***/ }),

/***/ "./src/pages/index/javascripts/controllers/bannerController.js":
/*!*********************************************************************!*\
  !*** ./src/pages/index/javascripts/controllers/bannerController.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_bannerModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/bannerModel */ \"./src/pages/index/javascripts/models/bannerModel.js\");\n/* harmony import */ var _views_banner_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/banner.html */ \"./src/pages/index/javascripts/views/banner.html\");\n/* harmony import */ var _views_banner_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_banner_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar bannerController = {\n  run: function run() {\n    this.render();\n  },\n  render: function render() {\n    // 得到了一个编译函数，需要传入html字符串\n    var template = Handlebars.compile(_views_banner_html__WEBPACK_IMPORTED_MODULE_1___default.a); // 执行编译函数得到编译后的字符串\n\n    var html = template(_models_bannerModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    document.querySelector('#app-banner').innerHTML = html;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bannerController);\n\n//# sourceURL=webpack:///./src/pages/index/javascripts/controllers/bannerController.js?");

/***/ }),

/***/ "./src/pages/index/javascripts/controllers/indexController.js":
/*!********************************************************************!*\
  !*** ./src/pages/index/javascripts/controllers/indexController.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bannerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bannerController */ \"./src/pages/index/javascripts/controllers/bannerController.js\");\n\nvar indexController = {\n  run: function run() {\n    _bannerController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexController);\n\n//# sourceURL=webpack:///./src/pages/index/javascripts/controllers/indexController.js?");

/***/ }),

/***/ "./src/pages/index/javascripts/models/bannerModel.js":
/*!***********************************************************!*\
  !*** ./src/pages/index/javascripts/models/bannerModel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bannerData = {\n  title: '轮播图'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bannerData);\n\n//# sourceURL=webpack:///./src/pages/index/javascripts/models/bannerModel.js?");

/***/ }),

/***/ "./src/pages/index/javascripts/views/banner.html":
/*!*******************************************************!*\
  !*** ./src/pages/index/javascripts/views/banner.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>{{ title }}</div>\"\n\n//# sourceURL=webpack:///./src/pages/index/javascripts/views/banner.html?");

/***/ }),

/***/ "./src/pages/index/stylesheets/index.css":
/*!***********************************************!*\
  !*** ./src/pages/index/stylesheets/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/pages/index/stylesheets/index.css?");

/***/ }),

/***/ "./src/stylesheets/common.css":
/*!************************************!*\
  !*** ./src/stylesheets/common.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/stylesheets/common.css?");

/***/ }),

/***/ "./src/utils/flexible.js":
/*!*******************************!*\
  !*** ./src/utils/flexible.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function flexible(window, document) {\n  var docEl = document.documentElement;\n  var dpr = window.devicePixelRatio || 1; // adjust body font size\n\n  function setBodyFontSize() {\n    if (document.body) {\n      // document.body.style.fontSize = (12 * dpr) + 'px'\n      document.body.style.fontSize = 12 + 'px';\n    } else {\n      document.addEventListener('DOMContentLoaded', setBodyFontSize);\n    }\n  }\n\n  setBodyFontSize(); // set 1rem = viewWidth / 10\n\n  function setRemUnit() {\n    var rem = docEl.clientWidth / 10;\n    docEl.style.fontSize = rem + 'px';\n  }\n\n  setRemUnit(); // reset rem unit on page resize\n\n  window.addEventListener('resize', setRemUnit);\n  window.addEventListener('pageshow', function (e) {\n    if (e.persisted) {\n      setRemUnit();\n    }\n  }); // detect 0.5px supports\n\n  if (dpr >= 2) {\n    var fakeBody = document.createElement('body');\n    var testElement = document.createElement('div');\n    testElement.style.border = '.5px solid transparent';\n    fakeBody.appendChild(testElement);\n    docEl.appendChild(fakeBody);\n\n    if (testElement.offsetHeight === 1) {\n      docEl.classList.add('hairlines');\n    }\n\n    docEl.removeChild(fakeBody);\n  }\n})(window, document);\n\n//# sourceURL=webpack:///./src/utils/flexible.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/utils/flexible.js ./src/pages/index/index ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/utils/flexible.js */\"./src/utils/flexible.js\");\nmodule.exports = __webpack_require__(/*! ./src/pages/index/index */\"./src/pages/index/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/utils/flexible.js_./src/pages/index/index?");

/***/ })

/******/ });