"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Index = function(param) {\n    var musicData = param.musicData;\n    var _this1 = _this;\n    console.log(musicData);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Welcome to Next Application\"\n                }, void 0, false, {\n                    fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: \"Songs List\"\n                }, void 0, false, {\n                    fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, _this),\n                musicData.map(function(item, i) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: item.title\n                    }, i, false, {\n                        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 20\n                    }, _this1));\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this));\n};\n_c = Index;\nIndex.getInitialProps = _asyncToGenerator(_Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response, result;\n    return _Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://dog.ceo/api/breeds/list/all\");\n            case 2:\n                response = _ctx.sent;\n                _ctx.next = 5;\n                return response.json();\n            case 5:\n                result = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    musicData: result.data\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLEdBQUssQ0FBQ0UsS0FBSyxHQUFHLFFBQVEsUUFBUyxDQUFDO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7O0lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUztJQUNyQixNQUFNLDZFQUNESCwwREFBTTs4RkFDRk0sQ0FBRzs7NEZBQ0NDLENBQUU7OEJBQUMsQ0FBMkI7Ozs7Ozs0RkFDOUJDLENBQUU7OEJBQUMsQ0FBVTs7Ozs7O2dCQUNiTCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsQ0FBQyxFQUFLLENBQUM7b0JBQzFCLE1BQU0sNkVBQ0xDLENBQUU7a0NBQVVGLElBQUksQ0FBQ0csS0FBSzt1QkFBZEYsQ0FBQzs7Ozs7Z0JBRWQsQ0FBQzs7Ozs7Ozs7Ozs7O0FBSWhCLENBQUM7S0FmS1QsS0FBSztBQWlCWEEsS0FBSyxDQUFDWSxlQUFlLGlMQUFHLFFBQVEsV0FBUyxDQUFDO1FBQ2hDQyxRQUFRLEVBQ1JDLE1BQU07Ozs7O3VCQURXZix5REFBSyxDQUFFLENBQW1DOztnQkFBM0RjLFFBQVE7O3VCQUNPQSxRQUFRLENBQUNFLElBQUk7O2dCQUE1QkQsTUFBTTs2Q0FDTCxDQUFDO29CQUFDYixTQUFTLEVBQUVhLE1BQU0sQ0FBQ0UsSUFBSTtnQkFBQyxDQUFDOzs7Ozs7QUFDckMsQ0FBQztBQUNELCtEQUFlaEIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgSW5kZXggPSAoe211c2ljRGF0YX0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhtdXNpY0RhdGEpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gTmV4dCBBcHBsaWNhdGlvbjwvaDE+XG4gICAgICAgICAgICAgICAgPGgzPlNvbmdzIExpc3Q8L2gzPlxuICAgICAgICAgICAgICAgIHttdXNpY0RhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT57aXRlbS50aXRsZX08L2xpPlxuICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsYCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7IG11c2ljRGF0YTogcmVzdWx0LmRhdGEgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIkxheW91dCIsImZldGNoIiwiSW5kZXgiLCJtdXNpY0RhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJoMyIsIm1hcCIsIml0ZW0iLCJpIiwibGkiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsInJlc3BvbnNlIiwicmVzdWx0IiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});