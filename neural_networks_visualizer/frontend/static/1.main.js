(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./neural_networks_visualizer/frontend/src/actions/plot.js":
/*!*****************************************************************!*\
  !*** ./neural_networks_visualizer/frontend/src/actions/plot.js ***!
  \*****************************************************************/
/*! exports provided: getPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlot\", function() { return getPlot; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./neural_networks_visualizer/frontend/src/actions/types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar getPlot = () => /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (dispatch) {\n    try {\n      var res = yield axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/plot');\n      dispatch({\n        type: _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_PLOT\"],\n        payload: res.data\n      });\n    } catch (err) {\n      console.log(err);\n    }\n  });\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./neural_networks_visualizer/frontend/src/actions/plot.js?");

/***/ }),

/***/ "./neural_networks_visualizer/frontend/src/components/layout/Landing.js":
/*!******************************************************************************!*\
  !*** ./neural_networks_visualizer/frontend/src/components/layout/Landing.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_plot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/plot */ \"./neural_networks_visualizer/frontend/src/actions/plot.js\");\n\n\n\n\nvar Landing = (_ref) => {\n  var {\n    plot,\n    getPlot\n  } = _ref;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getPlot();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (plot) {\n      var re = /<script>(.*?)<\\/script>/g;\n      var res = re.exec('<script>test</script>');\n      console.log(res);\n    }\n  }, [plot]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, \"Hello\", plot !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"test-plot\"\n  }));\n};\n\nvar mapStateToProps = state => ({\n  plot: state.plot.plot\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  getPlot: _actions_plot__WEBPACK_IMPORTED_MODULE_2__[\"getPlot\"]\n})(Landing));\n\n//# sourceURL=webpack:///./neural_networks_visualizer/frontend/src/components/layout/Landing.js?");

/***/ })

}]);