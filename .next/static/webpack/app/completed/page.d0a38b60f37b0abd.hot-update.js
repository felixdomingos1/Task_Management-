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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/context/globalProvider */ \"(app-pages-browser)/./app/context/globalProvider.js\");\n/* harmony import */ var _app_utils_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/Icons */ \"(app-pages-browser)/./app/utils/Icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _app_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/utils/formatDate */ \"(app-pages-browser)/./app/utils/formatDate.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 1.2rem 1rem;\\n  border-radius: 1rem;\\n  background-color: \",\n        \";\\n  box-shadow: \",\n        \";\\n  border: 2px solid \",\n        \";\\n\\n  height: 16rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  .description\\n  .date {\\n    margin-top: auto;\\n  }\\n\\n  > h1 {\\n    font-size: 1.5rem;\\n    font-weight: 600;\\n  }\\n\\n  .task-footer {\\n    display: flex;\\n    align-items: center;\\n    gap: 1.2rem;\\n\\n    button {\\n      border: none;\\n      outline: none;\\n      cursor: pointer;\\n\\n      i {\\n        font-size: 1.4rem;\\n        color: \",\n        \";\\n      }\\n    }\\n\\n    .edit {\\n      margin-left: auto;\\n    }\\n\\n    .completed,\\n    .incomplete {\\n      display: inline-block;\\n      padding: 0.4rem 1rem;\\n      background: \",\n        \";\\n      border-radius: 30px;\\n    }\\n\\n    .completed {\\n      background: \",\n        \" !important;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TaskItem(param) {\n    let { title, description, date, isCompleted, id } = param;\n    _s();\n    const { theme, deleteTask, updateTask } = (0,_app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TaskItemStyled, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"description\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"date\",\n                children: (0,_app_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(date)\n            }, void 0, false, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"task-footer\",\n                children: [\n                    isCompleted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"completed\",\n                        onClick: ()=>{\n                            const task = {\n                                id,\n                                isCompleted: !isCompleted\n                            };\n                            updateTask(task);\n                        },\n                        children: \"Completed\"\n                    }, void 0, false, {\n                        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"incomplete\",\n                        onClick: ()=>{\n                            const task = {\n                                id,\n                                isCompleted: !isCompleted\n                            };\n                            updateTask(task);\n                        },\n                        children: \"Incomplete\"\n                    }, void 0, false, {\n                        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"edit\",\n                        children: _app_utils_Icons__WEBPACK_IMPORTED_MODULE_3__.edit\n                    }, void 0, false, {\n                        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"delete\",\n                        onClick: ()=>{\n                            deleteTask(id);\n                        },\n                        children: _app_utils_Icons__WEBPACK_IMPORTED_MODULE_3__.trash\n                    }, void 0, false, {\n                        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fe/M\\xfasicas/todoapp_fullstack-master/app/Components/TaskItem/TaskItem.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskItem, \"ZI8b2+eg0/9sPhRdjEaX+p2QbH0=\", false, function() {\n    return [\n        _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = TaskItem;\nconst TaskItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), (props)=>props.theme.borderColor2, (props)=>props.theme.shadow7, (props)=>props.theme.borderColor2, (props)=>props.theme.colorGrey2, (props)=>props.theme.colorDanger, (props)=>props.theme.colorGreenDark);\n_c1 = TaskItemStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"TaskItem\");\n$RefreshReg$(_c1, \"TaskItemStyled\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL1Rhc2tJdGVtL1Rhc2tJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDZDtBQUN0QjtBQUNhO0FBQ1M7QUFVaEQsU0FBU00sU0FBUyxLQUFvRDtRQUFwRCxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLEVBQUUsRUFBUyxHQUFwRDs7SUFDaEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFLEdBQUdkLDJFQUFjQTtJQUN4RCxxQkFDRSw4REFBQ2U7UUFBZUgsT0FBT0E7OzBCQUNyQiw4REFBQ0k7MEJBQUlUOzs7Ozs7MEJBQ0wsOERBQUNVO2dCQUFFQyxXQUFVOzBCQUFlVjs7Ozs7OzBCQUM1Qiw4REFBQ1M7Z0JBQUVDLFdBQVU7MEJBQVFiLGlFQUFVQSxDQUFDSTs7Ozs7OzBCQUNoQyw4REFBQ1U7Z0JBQUlELFdBQVU7O29CQUNaUiw0QkFDQyw4REFBQ1U7d0JBQ0NGLFdBQVU7d0JBQ1ZHLFNBQVM7NEJBQ1AsTUFBTUMsT0FBTztnQ0FDWFg7Z0NBQ0FELGFBQWEsQ0FBQ0E7NEJBQ2hCOzRCQUVBSSxXQUFXUTt3QkFDYjtrQ0FDRDs7Ozs7NkNBSUQsOERBQUNGO3dCQUNDRixXQUFVO3dCQUNWRyxTQUFTOzRCQUNQLE1BQU1DLE9BQU87Z0NBQ1hYO2dDQUNBRCxhQUFhLENBQUNBOzRCQUNoQjs0QkFFQUksV0FBV1E7d0JBQ2I7a0NBQ0Q7Ozs7OztrQ0FJSCw4REFBQ0Y7d0JBQU9GLFdBQVU7a0NBQVFqQixrREFBSUE7Ozs7OztrQ0FDOUIsOERBQUNtQjt3QkFDQ0YsV0FBVTt3QkFDVkcsU0FBUzs0QkFDUFIsV0FBV0Y7d0JBQ2I7a0NBRUNULG1EQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBakRTSTs7UUFDbUNOLHVFQUFjQTs7O0tBRGpETTtBQW1EVCxNQUFNUyxpQkFBaUJYLHlEQUFNQSxDQUFDZSxHQUFHLG9CQUdYLENBQUNJLFFBQVVBLE1BQU1YLEtBQUssQ0FBQ1ksWUFBWSxFQUN6QyxDQUFDRCxRQUFVQSxNQUFNWCxLQUFLLENBQUNhLE9BQU8sRUFDeEIsQ0FBQ0YsUUFBVUEsTUFBTVgsS0FBSyxDQUFDWSxZQUFZLEVBNEJ4QyxDQUFDRCxRQUFVQSxNQUFNWCxLQUFLLENBQUNjLFVBQVUsRUFZOUIsQ0FBQ0gsUUFBVUEsTUFBTVgsS0FBSyxDQUFDZSxXQUFXLEVBS2xDLENBQUNKLFFBQVVBLE1BQU1YLEtBQUssQ0FBQ2dCLGNBQWM7TUFsRG5EYjtBQXVETiwrREFBZVQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29tcG9uZW50cy9UYXNrSXRlbS9UYXNrSXRlbS50c3g/NDczNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIkAvYXBwL2NvbnRleHQvZ2xvYmFsUHJvdmlkZXJcIjtcbmltcG9ydCB7IGVkaXQsIHRyYXNoIH0gZnJvbSBcIkAvYXBwL3V0aWxzL0ljb25zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIkAvYXBwL3V0aWxzL2Zvcm1hdERhdGVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBpc0NvbXBsZXRlZDogYm9vbGVhbjtcbiAgaWQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gVGFza0l0ZW0oeyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIGlzQ29tcGxldGVkLCBpZCB9OiBQcm9wcykge1xuICBjb25zdCB7IHRoZW1lLCBkZWxldGVUYXNrLCB1cGRhdGVUYXNrIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICByZXR1cm4gKFxuICAgIDxUYXNrSXRlbVN0eWxlZCB0aGVtZT17dGhlbWV9PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPntmb3JtYXREYXRlKGRhdGUpfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzay1mb290ZXJcIj5cbiAgICAgICAge2lzQ29tcGxldGVkID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6ICFpc0NvbXBsZXRlZCxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB1cGRhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmNvbXBsZXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogIWlzQ29tcGxldGVkLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHVwZGF0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEluY29tcGxldGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlZGl0XCI+e2VkaXR9PC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2soaWQpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dHJhc2h9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9UYXNrSXRlbVN0eWxlZD5cbiAgKTtcbn1cblxuY29uc3QgVGFza0l0ZW1TdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxLjJyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJvcmRlckNvbG9yMn07XG4gIGJveC1zaGFkb3c6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zaGFkb3c3fTtcbiAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJvcmRlckNvbG9yMn07XG5cbiAgaGVpZ2h0OiAxNnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIC5kZXNjcmlwdGlvblxuICAuZGF0ZSB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxuXG4gID4gaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAudGFzay1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEuMnJlbTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JHcmV5Mn07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVkaXQge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmNvbXBsZXRlZCxcbiAgICAuaW5jb21wbGV0ZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvckRhbmdlcn07XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIH1cblxuICAgIC5jb21wbGV0ZWQge1xuICAgICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9yR3JlZW5EYXJrfSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGFza0l0ZW07XG4iXSwibmFtZXMiOlsidXNlR2xvYmFsU3RhdGUiLCJlZGl0IiwidHJhc2giLCJSZWFjdCIsInN0eWxlZCIsImZvcm1hdERhdGUiLCJUYXNrSXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiaXNDb21wbGV0ZWQiLCJpZCIsInRoZW1lIiwiZGVsZXRlVGFzayIsInVwZGF0ZVRhc2siLCJUYXNrSXRlbVN0eWxlZCIsImgxIiwicCIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0YXNrIiwicHJvcHMiLCJib3JkZXJDb2xvcjIiLCJzaGFkb3c3IiwiY29sb3JHcmV5MiIsImNvbG9yRGFuZ2VyIiwiY29sb3JHcmVlbkRhcmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/TaskItem/TaskItem.tsx\n"));

/***/ })

});