"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/important/page",{

/***/ "(app-pages-browser)/./app/Components/Modals/Modal.tsx":
/*!*****************************************!*\
  !*** ./app/Components/Modals/Modal.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/context/globalProvider */ \"(app-pages-browser)/./app/context/globalProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100vh;\\n  z-index: 100;\\n\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  .modal-overlay {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100vh;\\n    background-color: rgba(0, 0, 0, 0.45);\\n    filter: blur(4px);\\n  }\\n\\n  .modal-content {\\n    margin: 0 1rem;\\n\\n    padding: 2rem;\\n    position: relative;\\n    max-width: 630px;\\n    width: 100%;\\n    he\\n    z-index: 100;\\n\\n    border-radius: 1rem;\\n    /* background-color: \",\n        \"; */\\n    background: red;\\n    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);\\n    border-radius: \",\n        \";\\n\\n    @media screen and (max-width: 450px) {\\n      font-size: 90%;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Modal(param) {\n    let { content } = param;\n    _s();\n    const { closeModal } = (0,_app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const { theme } = (0,_app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalStyled, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"modal-overlay\",\n                onClick: closeModal\n            }, void 0, false, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/Modals/Modal.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"modal-content\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/Modals/Modal.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/Modals/Modal.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Modal, \"XDYOtn4Oy1nIf5jasROSmNDZMxw=\", false, function() {\n    return [\n        _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__.useGlobalState,\n        _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = Modal;\nconst ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject(), (props)=>props.theme.colorBg2, (props)=>props.theme.borderRadiusMd2);\n_c1 = ModalStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c, _c1;\n$RefreshReg$(_c, \"Modal\");\n$RefreshReg$(_c1, \"ModalStyled\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL01vZGFscy9Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzhEO0FBQ3BDO0FBQ2E7QUFNdkMsU0FBU0csTUFBTSxLQUFrQjtRQUFsQixFQUFFQyxPQUFPLEVBQVMsR0FBbEI7O0lBQ2IsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0wsMkVBQWNBO0lBRXJDLE1BQU0sRUFBRU0sS0FBSyxFQUFFLEdBQUdOLDJFQUFjQTtJQUNoQyxxQkFDRSw4REFBQ087UUFBWUQsT0FBT0E7OzBCQUNsQiw4REFBQ0U7Z0JBQUlDLFdBQVU7Z0JBQWdCQyxTQUFTTDs7Ozs7OzBCQUN4Qyw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQWlCTDs7Ozs7Ozs7Ozs7O0FBR3RDO0dBVlNEOztRQUNnQkgsdUVBQWNBO1FBRW5CQSx1RUFBY0E7OztLQUh6Qkc7QUFZVCxNQUFNSSxjQUFjTCx5REFBTUEsQ0FBQ00sR0FBRyxvQkFpQ0gsQ0FBQ0csUUFBVUEsTUFBTUwsS0FBSyxDQUFDTSxRQUFRLEVBR3JDLENBQUNELFFBQVVBLE1BQU1MLEtBQUssQ0FBQ08sZUFBZTtNQXBDckROO0FBNENOLCtEQUFlSixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRzL01vZGFscy9Nb2RhbC50c3g/YzgyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIkAvYXBwL2NvbnRleHQvZ2xvYmFsUHJvdmlkZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZnVuY3Rpb24gTW9kYWwoeyBjb250ZW50IH06IFByb3BzKSB7XG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcblxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICByZXR1cm4gKFxuICAgIDxNb2RhbFN0eWxlZCB0aGVtZT17dGhlbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCIgb25DbGljaz17Y2xvc2VNb2RhbH0+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj57Y29udGVudH08L2Rpdj5cbiAgICA8L01vZGFsU3R5bGVkPlxuICApO1xufVxuXG5jb25zdCBNb2RhbFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTAwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5tb2RhbC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgIGZpbHRlcjogYmx1cig0cHgpO1xuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCAxcmVtO1xuXG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA2MzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZVxuICAgIHotaW5kZXg6IDEwMDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9yQmcyfTsgKi9cbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ib3JkZXJSYWRpdXNNZDJ9O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibmFtZXMiOlsidXNlR2xvYmFsU3RhdGUiLCJSZWFjdCIsInN0eWxlZCIsIk1vZGFsIiwiY29udGVudCIsImNsb3NlTW9kYWwiLCJ0aGVtZSIsIk1vZGFsU3R5bGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInByb3BzIiwiY29sb3JCZzIiLCJib3JkZXJSYWRpdXNNZDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/Modals/Modal.tsx\n"));

/***/ })

});