"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/completed/page",{

/***/ "(app-pages-browser)/./app/Components/TaskItem/TaskItem.tsx":
/*!**********************************************!*\
  !*** ./app/Components/TaskItem/TaskItem.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/context/globalProvider */ \"(app-pages-browser)/./app/context/globalProvider.js\");\n/* harmony import */ var _app_utils_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/Icons */ \"(app-pages-browser)/./app/utils/Icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _app_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/utils/formatDate */ \"(app-pages-browser)/./app/utils/formatDate.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 1.2rem 1rem;\\n  border-radius: 1rem;\\n  background-color: \",\n        \";\\n  box-shadow: \",\n        \";\\n  border: 2px solid \",\n        \";\\n\\n  height: 16rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n\\n  .date {\\n    margin-top: auto;\\n  }\\n\\n  > h1 {\\n    font-size: 1.5rem;\\n    font-weight: 600;\\n  }\\n\\n  .task-footer {\\n    display: flex;\\n    align-items: center;\\n    gap: 1.2rem;\\n\\n    button {\\n      border: none;\\n      outline: none;\\n      cursor: pointer;\\n\\n      i {\\n        font-size: 1.4rem;\\n        color: \",\n        \";\\n      }\\n    }\\n\\n    .edit {\\n      margin-left: auto;\\n    }\\n\\n    .completed,\\n    .incomplete {\\n      display: inline-block;\\n      padding: 0.4rem 1rem;\\n      background: \",\n        \";\\n      border-radius: 30px;\\n    }\\n\\n    .completed {\\n      background: \",\n        \" !important;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TaskItem(param) {\n    let { title, description, date, isCompleted, id } = param;\n    _s();\n    const { theme, deleteTask, updateTask } = (0,_app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TaskItemStyled, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: true,\n                children: description\n            }, void 0, false, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"date\",\n                children: (0,_app_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(date)\n            }, void 0, false, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"task-footer\",\n                children: [\n                    isCompleted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"completed\",\n                        onClick: ()=>{\n                            const task = {\n                                id,\n                                isCompleted: !isCompleted\n                            };\n                            updateTask(task);\n                        },\n                        children: \"Completed\"\n                    }, void 0, false, {\n                        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"incomplete\",\n                        onClick: ()=>{\n                            const task = {\n                                id,\n                                isCompleted: !isCompleted\n                            };\n                            updateTask(task);\n                        },\n                        children: \"Incomplete\"\n                    }, void 0, false, {\n                        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"edit\",\n                        children: _app_utils_Icons__WEBPACK_IMPORTED_MODULE_3__.edit\n                    }, void 0, false, {\n                        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"delete\",\n                        onClick: ()=>{\n                            deleteTask(id);\n                        },\n                        children: _app_utils_Icons__WEBPACK_IMPORTED_MODULE_3__.trash\n                    }, void 0, false, {\n                        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskItem, \"ZI8b2+eg0/9sPhRdjEaX+p2QbH0=\", false, function() {\n    return [\n        _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = TaskItem;\nconst TaskItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), (props)=>props.theme.borderColor2, (props)=>props.theme.shadow7, (props)=>props.theme.borderColor2, (props)=>props.theme.colorGrey2, (props)=>props.theme.colorDanger, (props)=>props.theme.colorGreenDark);\n_c1 = TaskItemStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"TaskItem\");\n$RefreshReg$(_c1, \"TaskItemStyled\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL1Rhc2tJdGVtL1Rhc2tJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDZDtBQUN0QjtBQUNhO0FBQ1M7QUFVaEQsU0FBU00sU0FBUyxLQUFvRDtRQUFwRCxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLEVBQUUsRUFBUyxHQUFwRDs7SUFDaEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFLEdBQUdkLDJFQUFjQTtJQUN4RCxxQkFDRSw4REFBQ2U7UUFBZUgsT0FBT0E7OzBCQUNyQiw4REFBQ0k7MEJBQUlUOzs7Ozs7MEJBQ0wsOERBQUNVO2dCQUFFQyxTQUFTOzBCQUFFVjs7Ozs7OzBCQUNkLDhEQUFDUztnQkFBRUMsV0FBVTswQkFBUWIsaUVBQVVBLENBQUNJOzs7Ozs7MEJBQ2hDLDhEQUFDVTtnQkFBSUQsV0FBVTs7b0JBQ1pSLDRCQUNDLDhEQUFDVTt3QkFDQ0YsV0FBVTt3QkFDVkcsU0FBUzs0QkFDUCxNQUFNQyxPQUFPO2dDQUNYWDtnQ0FDQUQsYUFBYSxDQUFDQTs0QkFDaEI7NEJBRUFJLFdBQVdRO3dCQUNiO2tDQUNEOzs7Ozs2Q0FJRCw4REFBQ0Y7d0JBQ0NGLFdBQVU7d0JBQ1ZHLFNBQVM7NEJBQ1AsTUFBTUMsT0FBTztnQ0FDWFg7Z0NBQ0FELGFBQWEsQ0FBQ0E7NEJBQ2hCOzRCQUVBSSxXQUFXUTt3QkFDYjtrQ0FDRDs7Ozs7O2tDQUlILDhEQUFDRjt3QkFBT0YsV0FBVTtrQ0FBUWpCLGtEQUFJQTs7Ozs7O2tDQUM5Qiw4REFBQ21CO3dCQUNDRixXQUFVO3dCQUNWRyxTQUFTOzRCQUNQUixXQUFXRjt3QkFDYjtrQ0FFQ1QsbURBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0FqRFNJOztRQUNtQ04sdUVBQWNBOzs7S0FEakRNO0FBbURULE1BQU1TLGlCQUFpQlgseURBQU1BLENBQUNlLEdBQUcsb0JBR1gsQ0FBQ0ksUUFBVUEsTUFBTVgsS0FBSyxDQUFDWSxZQUFZLEVBQ3pDLENBQUNELFFBQVVBLE1BQU1YLEtBQUssQ0FBQ2EsT0FBTyxFQUN4QixDQUFDRixRQUFVQSxNQUFNWCxLQUFLLENBQUNZLFlBQVksRUE0QnhDLENBQUNELFFBQVVBLE1BQU1YLEtBQUssQ0FBQ2MsVUFBVSxFQVk5QixDQUFDSCxRQUFVQSxNQUFNWCxLQUFLLENBQUNlLFdBQVcsRUFLbEMsQ0FBQ0osUUFBVUEsTUFBTVgsS0FBSyxDQUFDZ0IsY0FBYztNQWxEbkRiO0FBdUROLCtEQUFlVCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRzL1Rhc2tJdGVtL1Rhc2tJdGVtLnRzeD80NzM2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiQC9hcHAvY29udGV4dC9nbG9iYWxQcm92aWRlclwiO1xuaW1wb3J0IHsgZWRpdCwgdHJhc2ggfSBmcm9tIFwiQC9hcHAvdXRpbHMvSWNvbnNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tIFwiQC9hcHAvdXRpbHMvZm9ybWF0RGF0ZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGlzQ29tcGxldGVkOiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBUYXNrSXRlbSh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgaXNDb21wbGV0ZWQsIGlkIH06IFByb3BzKSB7XG4gIGNvbnN0IHsgdGhlbWUsIGRlbGV0ZVRhc2ssIHVwZGF0ZVRhc2sgfSA9IHVzZUdsb2JhbFN0YXRlKCk7XG4gIHJldHVybiAoXG4gICAgPFRhc2tJdGVtU3R5bGVkIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj57Zm9ybWF0RGF0ZShkYXRlKX08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2stZm9vdGVyXCI+XG4gICAgICAgIHtpc0NvbXBsZXRlZCA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkOiAhaXNDb21wbGV0ZWQsXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdXBkYXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5jb21wbGV0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6ICFpc0NvbXBsZXRlZCxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB1cGRhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJbmNvbXBsZXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZWRpdFwiPntlZGl0fTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUYXNrKGlkKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RyYXNofVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvVGFza0l0ZW1TdHlsZWQ+XG4gICk7XG59XG5cbmNvbnN0IFRhc2tJdGVtU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMS4ycmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ib3JkZXJDb2xvcjJ9O1xuICBib3gtc2hhZG93OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2hhZG93N307XG4gIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ib3JkZXJDb2xvcjJ9O1xuXG4gIGhlaWdodDogMTZyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuXG4gIC5kYXRlIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgPiBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC50YXNrLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMS4ycmVtO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvckdyZXkyfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZWRpdCB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG5cbiAgICAuY29tcGxldGVkLFxuICAgIC5pbmNvbXBsZXRlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9yRGFuZ2VyfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgfVxuXG4gICAgLmNvbXBsZXRlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JHcmVlbkRhcmt9ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrSXRlbTtcbiJdLCJuYW1lcyI6WyJ1c2VHbG9iYWxTdGF0ZSIsImVkaXQiLCJ0cmFzaCIsIlJlYWN0Iiwic3R5bGVkIiwiZm9ybWF0RGF0ZSIsIlRhc2tJdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJpc0NvbXBsZXRlZCIsImlkIiwidGhlbWUiLCJkZWxldGVUYXNrIiwidXBkYXRlVGFzayIsIlRhc2tJdGVtU3R5bGVkIiwiaDEiLCJwIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInRhc2siLCJwcm9wcyIsImJvcmRlckNvbG9yMiIsInNoYWRvdzciLCJjb2xvckdyZXkyIiwiY29sb3JEYW5nZXIiLCJjb2xvckdyZWVuRGFyayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/TaskItem/TaskItem.tsx\n"));

/***/ })

});