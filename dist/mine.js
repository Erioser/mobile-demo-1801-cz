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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/mine/javascripts/controllers/mineController.js":
/*!******************************************************************!*\
  !*** ./src/pages/mine/javascripts/controllers/mineController.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _touchController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./touchController */ \"./src/pages/mine/javascripts/controllers/touchController.js\");\n\nvar mineController = {\n  run: function run() {\n    _touchController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mineController);\n\n//# sourceURL=webpack:///./src/pages/mine/javascripts/controllers/mineController.js?");

/***/ }),

/***/ "./src/pages/mine/javascripts/controllers/touchController.js":
/*!*******************************************************************!*\
  !*** ./src/pages/mine/javascripts/controllers/touchController.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_touch_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/touch.html */ \"./src/pages/mine/javascripts/views/touch.html\");\n/* harmony import */ var _views_touch_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_touch_html__WEBPACK_IMPORTED_MODULE_0__);\n\nvar touchController = {\n  run: function run() {\n    var html = Handlebars.compile(_views_touch_html__WEBPACK_IMPORTED_MODULE_0___default.a)({\n      text: 'Hello World'\n    });\n    $('#app-touch').html(html);\n    this.handleTouch();\n  },\n  handleTouch: function handleTouch() {\n    var $demo = $('#app-touch .demo'); // $demo.on('touchstart', (e) => {\n    //     console.log('touchstart', e.touches[0].clientX)\n    // })\n    // $demo.on('touchmove', (e) => {\n    //     console.log('touchmove', e.touches[0].clientX)\n    // })\n    // $demo.on('touchend', (e) => {\n    //     console.log('touchend', e.changedTouches[0].clientX)\n    // })\n    // $demo.swipeLeft(function() {\n    //     console.log(1)\n    //     $(this).css('background', 'blue')\n    // })\n    // touch.on('.demo', 'tap', function () {\n    //     console.log(1)  \n    // })\n\n    $('.demo').click(function () {\n      $(this).css('background', 'blue');\n    }); // $('.middle').click(function () {\n    //     $(this).hide()\n    // })\n\n    $('.mask').tap(function () {\n      $(this).hide();\n    }); // $('.mask').on('webkitAnimationEnd',function () {\n    //     $(this).hide()\n    // })\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (touchController);\n\n//# sourceURL=webpack:///./src/pages/mine/javascripts/controllers/touchController.js?");

/***/ }),

/***/ "./src/pages/mine/javascripts/views/touch.html":
/*!*****************************************************!*\
  !*** ./src/pages/mine/javascripts/views/touch.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"demo\\\">{{text}}</div><!-- <div class=\\\"middle\\\"></div> --><div class=\\\"mask\\\"></div>\"\n\n//# sourceURL=webpack:///./src/pages/mine/javascripts/views/touch.html?");

/***/ }),

/***/ "./src/pages/mine/mine.js":
/*!********************************!*\
  !*** ./src/pages/mine/mine.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/common.css */ \"./src/stylesheets/common.css\");\n/* harmony import */ var _stylesheets_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_common_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stylesheets/reset.css */ \"./src/stylesheets/reset.css\");\n/* harmony import */ var _stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stylesheets_mine_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/mine.css */ \"./src/pages/mine/stylesheets/mine.css\");\n/* harmony import */ var _stylesheets_mine_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_mine_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_tap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/tap */ \"./src/utils/tap.js\");\n/* harmony import */ var _utils_tap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_tap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _javascripts_controllers_mineController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascripts/controllers/mineController */ \"./src/pages/mine/javascripts/controllers/mineController.js\");\n\n\n\n\n\nFastClick.attach(document.body);\n_javascripts_controllers_mineController__WEBPACK_IMPORTED_MODULE_4__[\"default\"].run();\n\n//# sourceURL=webpack:///./src/pages/mine/mine.js?");

/***/ }),

/***/ "./src/pages/mine/stylesheets/mine.css":
/*!*********************************************!*\
  !*** ./src/pages/mine/stylesheets/mine.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/pages/mine/stylesheets/mine.css?");

/***/ }),

/***/ "./src/stylesheets/common.css":
/*!************************************!*\
  !*** ./src/stylesheets/common.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/stylesheets/common.css?");

/***/ }),

/***/ "./src/stylesheets/reset.css":
/*!***********************************!*\
  !*** ./src/stylesheets/reset.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/stylesheets/reset.css?");

/***/ }),

/***/ "./src/utils/flexible.js":
/*!*******************************!*\
  !*** ./src/utils/flexible.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function flexible(window, document) {\n  var docEl = document.documentElement;\n  var dpr = window.devicePixelRatio || 1; // adjust body font size\n\n  function setBodyFontSize() {\n    if (document.body) {\n      // document.body.style.fontSize = (12 * dpr) + 'px'\n      document.body.style.fontSize = 12 + 'px';\n    } else {\n      document.addEventListener('DOMContentLoaded', setBodyFontSize);\n    }\n  }\n\n  setBodyFontSize(); // set 1rem = viewWidth / 10\n\n  function setRemUnit() {\n    var rem = docEl.clientWidth / 10;\n    docEl.style.fontSize = rem + 'px';\n  }\n\n  setRemUnit(); // reset rem unit on page resize\n\n  window.addEventListener('resize', setRemUnit);\n  window.addEventListener('pageshow', function (e) {\n    if (e.persisted) {\n      setRemUnit();\n    }\n  }); // detect 0.5px supports\n\n  if (dpr >= 2) {\n    var fakeBody = document.createElement('body');\n    var testElement = document.createElement('div');\n    testElement.style.border = '.5px solid transparent';\n    fakeBody.appendChild(testElement);\n    docEl.appendChild(fakeBody);\n\n    if (testElement.offsetHeight === 1) {\n      docEl.classList.add('hairlines');\n    }\n\n    docEl.removeChild(fakeBody);\n  }\n})(window, document);\n\n//# sourceURL=webpack:///./src/utils/flexible.js?");

/***/ }),

/***/ "./src/utils/tap.js":
/*!**************************!*\
  !*** ./src/utils/tap.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// $.fn.tap = function (callback) {\n//     let st, et;\n//     let sx,sy,ex,ey;\n//     let isMove = false;\n//     this.on('touchstart', function (e) {\n//         isMove = false;\n//         st = Date.now()\n//         sx = e.touches[0].clientX\n//         sy = e.touches[0].clientY\n//     })\n//     this.on('touchmove', function () {\n//         isMove = true\n//     })\n//     this.on('touchend', function (e) {\n//         et = Date.now()\n//         ex = e.changedTouches[0].clientX\n//         ey = e.changedTouches[0].clientY\n//         if ( et - st < 100 && ! isMove && Math.abs(ex - sx) < 10 && Math.abs(ey - sy) < 10 ) {\n//             callback.call(this)\n//         }\n//     })\n// }\n\n//# sourceURL=webpack:///./src/utils/tap.js?");

/***/ }),

/***/ 1:
/*!***********************************************************!*\
  !*** multi ./src/utils/flexible.js ./src/pages/mine/mine ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/utils/flexible.js */\"./src/utils/flexible.js\");\nmodule.exports = __webpack_require__(/*! ./src/pages/mine/mine */\"./src/pages/mine/mine.js\");\n\n\n//# sourceURL=webpack:///multi_./src/utils/flexible.js_./src/pages/mine/mine?");

/***/ })

/******/ });