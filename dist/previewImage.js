(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("previewImage", [], factory);
	else if(typeof exports === 'object')
		exports["previewImage"] = factory();
	else
		root["previewImage"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/core/previewImage.js":
/*!**************************************!*\
  !*** ./src/lib/core/previewImage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewImage": () => (/* binding */ PreviewImage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var utils = __webpack_require__(/*! ../utils */ "./src/lib/utils.js");

var PreviewImage = /*#__PURE__*/function () {
  function PreviewImage() {
    _classCallCheck(this, PreviewImage);

    this.init2 = 2;
    this.init();
  }

  _createClass(PreviewImage, [{
    key: "init",
    value: function init() {
      console.log('init');
    }
  }, {
    key: "initDom",
    value: function initDom() {
      console.log('initDom');
    }
  }, {
    key: "start",
    value: function start(_ref) {
      var urls = _ref.urls,
          current = _ref.current;

      if (!utils.isArray(urls)) {
        throw new Error('urls 必须是数组');
      }

      this.urls = urls;
      this.current = current || 0;
    }
  }]);

  return PreviewImage;
}(); // module.exports = PreviewImage;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewImage);

/***/ }),

/***/ "./src/lib/helps/bind.js":
/*!*******************************!*\
  !*** ./src/lib/helps/bind.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  bind: bind
});

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helps_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helps/bind */ "./src/lib/helps/bind.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var toString = Object.prototype.toString;

var isArray = function isArray(value) {
  return toString.call(value) == '[object Array]';
};
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = (0,_helps_bind__WEBPACK_IMPORTED_MODULE_0__.bind)(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray: isArray,
  forEach: forEach,
  extend: extend
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_lib_core_previewImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/lib/core/previewImage */ "./src/lib/core/previewImage.js");
// import main from'./src/lib/main';
 // export default main;

console.log(new _src_lib_core_previewImage__WEBPACK_IMPORTED_MODULE_0__.PreviewImage().initDom());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_lib_core_previewImage__WEBPACK_IMPORTED_MODULE_0__.PreviewImage);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmV2aWV3SW1hZ2Uvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ByZXZpZXdJbWFnZS8uL3NyYy9saWIvY29yZS9wcmV2aWV3SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJldmlld0ltYWdlLy4vc3JjL2xpYi9oZWxwcy9iaW5kLmpzIiwid2VicGFjazovL3ByZXZpZXdJbWFnZS8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcHJldmlld0ltYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByZXZpZXdJbWFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJldmlld0ltYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJldmlld0ltYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJldmlld0ltYWdlLy4vaW5kZXguanMiXSwibmFtZXMiOlsidXRpbHMiLCJyZXF1aXJlIiwiUHJldmlld0ltYWdlIiwiaW5pdDIiLCJpbml0IiwiY29uc29sZSIsImxvZyIsInVybHMiLCJjdXJyZW50IiwiaXNBcnJheSIsIkVycm9yIiwiYmluZCIsImZuIiwidGhpc0FyZyIsIndyYXAiLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwiYXBwbHkiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInZhbHVlIiwiY2FsbCIsImZvckVhY2giLCJvYmoiLCJsIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJleHRlbmQiLCJhIiwiYiIsImFzc2lnblZhbHVlIiwidmFsIiwiaW5pdERvbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7OztBQ1ZhOzs7Ozs7OztBQUViLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQ0FBRCxDQUFyQjs7QUFFTyxJQUFNQyxZQUFiO0FBQ0ksMEJBQWE7QUFBQTs7QUFDVCxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLElBQUw7QUFDSDs7QUFKTDtBQUFBO0FBQUEsV0FNSSxnQkFBTTtBQUNGQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0g7QUFSTDtBQUFBO0FBQUEsV0FVSSxtQkFBUztBQUNMRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0g7QUFaTDtBQUFBO0FBQUEsV0FjSSxxQkFBdUI7QUFBQSxVQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxVQUFWQyxPQUFVLFFBQVZBLE9BQVU7O0FBQ25CLFVBQUcsQ0FBQ1IsS0FBSyxDQUFDUyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF3QjtBQUNwQixjQUFNLElBQUlHLEtBQUosQ0FBVSxZQUFWLENBQU47QUFDSDs7QUFDRCxXQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxPQUFMLEdBQWVBLE9BQU8sSUFBSSxDQUExQjtBQUNIO0FBcEJMOztBQUFBO0FBQUEsSSxDQXVCQTs7QUFDQSxpRUFBZU4sWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUM1QmE7O0FBRU4sU0FBU1MsSUFBVCxDQUFjQyxFQUFkLEVBQWtCQyxPQUFsQixFQUEyQjtBQUNoQyxTQUFPLFNBQVNDLElBQVQsR0FBZ0I7QUFDckIsUUFBSUMsSUFBSSxHQUFHLElBQUlDLEtBQUosQ0FBVUMsU0FBUyxDQUFDQyxNQUFwQixDQUFYOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osSUFBSSxDQUFDRyxNQUF6QixFQUFpQ0MsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQ0osVUFBSSxDQUFDSSxDQUFELENBQUosR0FBVUYsU0FBUyxDQUFDRSxDQUFELENBQW5CO0FBQ0Q7O0FBQ0QsV0FBT1AsRUFBRSxDQUFDUSxLQUFILENBQVNQLE9BQVQsRUFBa0JFLElBQWxCLENBQVA7QUFDRCxHQU5EO0FBT0Q7QUFBQTtBQUdELGlFQUFlO0FBQ1hKLE1BQUksRUFBSkE7QUFEVyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFHQSxJQUFNVSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkYsUUFBbEM7O0FBRUEsSUFBTVosT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBU2UsS0FBVCxFQUFnQjtBQUM1QixTQUFPSCxRQUFRLENBQUNJLElBQVQsQ0FBY0QsS0FBZCxLQUF3QixnQkFBL0I7QUFDSCxDQUZEO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxTQUFTRSxPQUFULENBQWlCQyxHQUFqQixFQUFzQmYsRUFBdEIsRUFBMEI7QUFDdkI7QUFDQSxNQUFJZSxHQUFHLEtBQUssSUFBUixJQUFnQixPQUFPQSxHQUFQLEtBQWUsV0FBbkMsRUFBZ0Q7QUFDOUM7QUFDRCxHQUpzQixDQU12Qjs7O0FBQ0EsTUFBSSxRQUFPQSxHQUFQLE1BQWUsUUFBbkIsRUFBNkI7QUFDM0I7QUFDQUEsT0FBRyxHQUFHLENBQUNBLEdBQUQsQ0FBTjtBQUNEOztBQUVELE1BQUlsQixPQUFPLENBQUNrQixHQUFELENBQVgsRUFBa0I7QUFDaEI7QUFDQSxTQUFLLElBQUlSLENBQUMsR0FBRyxDQUFSLEVBQVdTLENBQUMsR0FBR0QsR0FBRyxDQUFDVCxNQUF4QixFQUFnQ0MsQ0FBQyxHQUFHUyxDQUFwQyxFQUF1Q1QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQ1AsUUFBRSxDQUFDYSxJQUFILENBQVEsSUFBUixFQUFjRSxHQUFHLENBQUNSLENBQUQsQ0FBakIsRUFBc0JBLENBQXRCLEVBQXlCUSxHQUF6QjtBQUNEO0FBQ0YsR0FMRCxNQUtPO0FBQ0w7QUFDQSxTQUFLLElBQUlFLEdBQVQsSUFBZ0JGLEdBQWhCLEVBQXFCO0FBQ25CLFVBQUlMLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQk8sY0FBakIsQ0FBZ0NMLElBQWhDLENBQXFDRSxHQUFyQyxFQUEwQ0UsR0FBMUMsQ0FBSixFQUFvRDtBQUNsRGpCLFVBQUUsQ0FBQ2EsSUFBSCxDQUFRLElBQVIsRUFBY0UsR0FBRyxDQUFDRSxHQUFELENBQWpCLEVBQXdCQSxHQUF4QixFQUE2QkYsR0FBN0I7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNDLFNBQVNJLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQnBCLE9BQXRCLEVBQStCO0FBQzVCYSxTQUFPLENBQUNPLENBQUQsRUFBSSxTQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQk4sR0FBMUIsRUFBK0I7QUFDeEMsUUFBSWhCLE9BQU8sSUFBSSxPQUFPc0IsR0FBUCxLQUFlLFVBQTlCLEVBQTBDO0FBQ3hDSCxPQUFDLENBQUNILEdBQUQsQ0FBRCxHQUFTbEIsaURBQUksQ0FBQ3dCLEdBQUQsRUFBTXRCLE9BQU4sQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMbUIsT0FBQyxDQUFDSCxHQUFELENBQUQsR0FBU00sR0FBVDtBQUNEO0FBQ0YsR0FOTSxDQUFQO0FBT0EsU0FBT0gsQ0FBUDtBQUNIOztBQUdELGlFQUFlO0FBQ1h2QixTQUFPLEVBQVBBLE9BRFc7QUFFWGlCLFNBQU8sRUFBUEEsT0FGVztBQUdYSyxRQUFNLEVBQU5BO0FBSFcsQ0FBZixFOzs7Ozs7VUNyRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtDQUlBOztBQUNBMUIsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBSUosb0VBQUosR0FBbUJrQyxPQUFuQixFQUFaO0FBQ0EsaUVBQWVsQyxvRUFBZixFIiwiZmlsZSI6InByZXZpZXdJbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicHJldmlld0ltYWdlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInByZXZpZXdJbWFnZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwcmV2aWV3SW1hZ2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJylcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmV2aWV3SW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmluaXQyID0gMlxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0JylcclxuICAgIH1cclxuXHJcbiAgICBpbml0RG9tKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXREb20nKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHsgdXJscyxjdXJyZW50IH0pe1xyXG4gICAgICAgIGlmKCF1dGlscy5pc0FycmF5KHVybHMpKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1cmxzIOW/hemhu+aYr+aVsOe7hCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXJscyA9IHVybHM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudCB8fCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFByZXZpZXdJbWFnZTtcclxuZXhwb3J0IGRlZmF1bHQgUHJldmlld0ltYWdlO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xyXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGJpbmRcclxufSIsImltcG9ydCB7IGJpbmQgfSAgZnJvbSAnLi9oZWxwcy9iaW5kJ1xyXG5cclxuXHJcbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuXHJcbmNvbnN0IGlzQXJyYXkgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXHJcbiAqXHJcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcclxuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXHJcbiAqXHJcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXHJcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cclxuICovXHJcbiBmdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcclxuICAgIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcclxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cclxuICAgICAgb2JqID0gW29ial07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4vKipcclxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xyXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcclxuICovXHJcbiBmdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xyXG4gICAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xyXG4gICAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFba2V5XSA9IHZhbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYTtcclxufVxyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaXNBcnJheSxcclxuICAgIGZvckVhY2gsXHJcbiAgICBleHRlbmQsXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBtYWluIGZyb20nLi9zcmMvbGliL21haW4nO1xyXG5pbXBvcnQgeyBQcmV2aWV3SW1hZ2UgfSBmcm9tICcuL3NyYy9saWIvY29yZS9wcmV2aWV3SW1hZ2UnIFxyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IG1haW47XHJcbmNvbnNvbGUubG9nKG5ldyBQcmV2aWV3SW1hZ2UoKS5pbml0RG9tKCkpXHJcbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdJbWFnZTsiXSwic291cmNlUm9vdCI6IiJ9