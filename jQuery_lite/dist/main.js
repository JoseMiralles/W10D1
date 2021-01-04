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

eval("class DOMNodeCollection{\r\n    constructor(elements){\r\n        this.elements = elements;\r\n    }\r\n\r\n    html(string = null){\r\n        if (string || string === \"\"){\r\n            this.elements.forEach(el => {\r\n                el.innerHTML = string;\r\n            });\r\n        } else {\r\n            return this.elements[0].innerHTML;\r\n        }\r\n    }\r\n\r\n    empty(){\r\n        this.html(\"\");\r\n    }\r\n\r\n    append(selector){\r\n        if (typeof selector === \"string\" || selector instanceof String) {\r\n            this.elements.forEach(el => {\r\n                el.innerHTML += selector;\r\n            });\r\n        } else if (selector instanceof DOMNodeCollection) {\r\n            this.elements.forEach(el => {\r\n                selector.elements.forEach(sel => {\r\n                    el.innerHTML += sel.outerHTML;\r\n                });\r\n            });\r\n        } else if (selector instanceof HTMLElement){\r\n            this.elements.forEach(el => {\r\n                el.innerHTML += selector.outerHTML;\r\n            });\r\n        }\r\n    }\r\n\r\n    children(){\r\n        const children = [];\r\n        this.elements.forEach(el => {\r\n            for (let i = 0; i < el.children.length; i++) {\r\n                children.push(\r\n                    new DOMNodeCollection(el.children[i])\r\n                );\r\n            }\r\n        });\r\n        return children;\r\n    }\r\n\r\n    parent(){\r\n        const parents = [];\r\n        this.elements.forEach(el => {\r\n            parents.push(\r\n                new DOMNodeCollection(el.parentElement)\r\n            );\r\n        });\r\n        return parents;\r\n    }\r\n\r\n    find(selector){\r\n        const res = [];\r\n        this.elements.forEach(el => {\r\n            res.push(\r\n                new DOMNodeCollection(el.querySelectorAll(selector))\r\n            );\r\n        });\r\n        return res;\r\n    }\r\n\r\n    remove(selector){\r\n        this.elements.forEach(el => {\r\n            el.querySelectorAll(selector).forEach(el => {\r\n                el.remove();\r\n            });\r\n        });\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = {\r\n    DOMNodeCollection\r\n}\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

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
eval("const {DOMNodeCollection} = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\r\n\r\nconst $l = (selector)=>{\r\n    if (typeof selector === \"string\" || selector instanceof String){\r\n        const array = Array.from(document.querySelectorAll(selector));\r\n        // console.log(array);\r\n        return new DOMNodeCollection(array);\r\n    } \r\n    \r\n    else if (selector instanceof HTMLElement){\r\n        // console.log([selector]);\r\n        return new DOMNodeCollection([selector]);\r\n    }\r\n\r\n};\r\n\r\nwindow.addEventListener(\"load\", ()=>{\r\n    const test = $l(\".test\");\r\n    test.html(\"Works!!\");\r\n    // test.empty();\r\n    test.append(\"Appended\");\r\n    test.append( $l(\".appendable\") );\r\n    const element = document.createElement(\"div\");\r\n    element.innerHTML = \"HTML ELEMENT\";\r\n    test.append(element);\r\n    const children = test.children();\r\n    const parents = test.parent();\r\n    const searched = test.find(\".appendable\");\r\n    test.remove(\".appendable\");\r\n});\r\n\r\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;