/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection{\r\n    constructor(elements){\r\n        this.elements = elements;\r\n    }\r\n\r\n    html(string = null){\r\n        if (string){\r\n            this.elements.forEach(el => {\r\n                el.innerHTML = string;\r\n            });\r\n        } else {\r\n            return this.elements[0].innerHTML;\r\n        }\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = {\r\n    DOMNodeCollection\r\n}\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const {DOMNodeCollection} = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\r\n\r\nconst $l = (selector)=>{\r\n    if (selector instanceof String){\r\n        const array = Array.from(document.querySelectorAll(selector));\r\n        return new DOMNodeCollection(array);\r\n    } else if (selector instanceof HTMLElement){\r\n        return new DOMNodeCollection([selector]);\r\n    }\r\n};\r\n\r\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;