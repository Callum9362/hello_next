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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Index = function(param) {\n    var coinData = param.coinData;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: \"Coins List\"\n                }, void 0, false, {\n                    fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n                    class: \"table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Symbol\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                        lineNumber: 12,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                        lineNumber: 13,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Current Price\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                        lineNumber: 14,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Market Cap\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Market Cap Rank\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                        lineNumber: 16,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Total Volume\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                        lineNumber: 17,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                lineNumber: 11,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                            lineNumber: 10,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                            children: coinData === null || coinData === void 0 ? void 0 : coinData.map(function(item, i) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                        children: item.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 41\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 37\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                            lineNumber: 20,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/CallumPersonal/Documents/repos/hello_next/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, _this));\n};\n_c = Index;\nIndex.getInitialProps = _asyncToGenerator(_Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response, result;\n    return _Users_CallumPersonal_Documents_repos_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1\");\n            case 2:\n                response = _ctx.sent;\n                _ctx.next = 5;\n                return response.json();\n            case 5:\n                result = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    coinData: result\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLEdBQUssQ0FBQ0UsS0FBSyxHQUFHLFFBQVEsUUFBUSxDQUFDO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDcEIsTUFBTSw2RUFDREgsMERBQU07OEZBQ0ZJLENBQUc7OzRGQUNDQyxDQUFFOzhCQUFDLENBQVU7Ozs7Ozs0RkFDVEMsQ0FBSztvQkFBQ0MsS0FBSyxFQUFDLENBQU87O29HQUNmQyxDQUFLO2tIQUNEQyxDQUFFOztnSEFDRUMsQ0FBRTt3Q0FBQ0MsS0FBSyxFQUFDLENBQUs7a0RBQUMsQ0FBTTs7Ozs7O2dIQUNyQkQsQ0FBRTt3Q0FBQ0MsS0FBSyxFQUFDLENBQUs7a0RBQUMsQ0FBSTs7Ozs7O2dIQUNuQkQsQ0FBRTt3Q0FBQ0MsS0FBSyxFQUFDLENBQUs7a0RBQUMsQ0FBYTs7Ozs7O2dIQUM1QkQsQ0FBRTt3Q0FBQ0MsS0FBSyxFQUFDLENBQUs7a0RBQUMsQ0FBVTs7Ozs7O2dIQUN6QkQsQ0FBRTt3Q0FBQ0MsS0FBSyxFQUFDLENBQUs7a0RBQUMsQ0FBZTs7Ozs7O2dIQUM5QkQsQ0FBRTt3Q0FBQ0MsS0FBSyxFQUFDLENBQUs7a0RBQUMsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBR25DQyxDQUFLO3NDQUNEVCxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxRQUFRLENBQUVVLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsQ0FBQyxFQUFLLENBQUM7Z0NBQ3pCLE1BQU0sNkVBQ0ROLENBQUU7MEhBQ0VPLENBQUU7a0RBQUVGLElBQUksQ0FBQ0csTUFBTTs7Ozs7O21DQURYRixDQUFDOzs7Ozs0QkFJbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0IsQ0FBQztLQTdCS2IsS0FBSztBQStCWEEsS0FBSyxDQUFDZ0IsZUFBZSxpTEFBRyxRQUFRLFdBQVMsQ0FBQztRQUNoQ0MsUUFBUSxFQUNSQyxNQUFNOzs7Ozt1QkFEV25CLHlEQUFLLENBQUUsQ0FBd0c7O2dCQUFoSWtCLFFBQVE7O3VCQUNPQSxRQUFRLENBQUNFLElBQUk7O2dCQUE1QkQsTUFBTTs2Q0FDTCxDQUFDO29CQUFDakIsUUFBUSxFQUFFaUIsTUFBTTtnQkFBQyxDQUFDOzs7Ozs7QUFDL0IsQ0FBQztBQUNELCtEQUFlbEIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgSW5kZXggPSAoe2NvaW5EYXRhfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMz5Db2lucyBMaXN0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN5bWJvbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5DdXJyZW50IFByaWNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TWFya2V0IENhcDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk1hcmtldCBDYXAgUmFuazwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRvdGFsIFZvbHVtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW5EYXRhPy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5zeW1ib2x9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zL21hcmtldHM/dnNfY3VycmVuY3k9dXNkJm9yZGVyPW1hcmtldF9jYXBfZGVzYyZwZXJfcGFnZT0xMDAmcGFnZT0xYCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7IGNvaW5EYXRhOiByZXN1bHQgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIkxheW91dCIsImZldGNoIiwiSW5kZXgiLCJjb2luRGF0YSIsImRpdiIsImgzIiwidGFibGUiLCJjbGFzcyIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJpdGVtIiwiaSIsInRkIiwic3ltYm9sIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});