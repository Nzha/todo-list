/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\n  border: 1px solid red;\n} */\n\nhtml {\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    box-sizing: inherit;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: auto 3fr;\n    grid-template-rows: auto 1fr;\n    grid-template-areas: \n        \"header header\"\n        \"sidebar content\";\n    font-family: 'Roboto', sans-serif;\n    color: #1f1f2f;\n    height: 100vh;\n    margin: 0;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n/* HEADER STARTS */\nheader {\n    grid-area: header;\n    font-size: 1.5rem;\n    color: white;\n    background-color: #db4c3f;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 1rem;\n}\n\n#hide-menu-btn {\n    font-size: 1.5rem;\n    border: none;\n    color: white;\n    background-color: inherit;\n}\n\n#hide-menu-btn:hover {\n    cursor: pointer;\n    background-color: #e26f65;\n}\n/* HEADER ENDS */\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n/* SIDEBAR STARTS */\n.sidebar {\n    grid-area: sidebar;\n    background-color: #fafafa;\n    width: 300px;\n    overflow-x: hidden;\n    position: absolute;\n    top: 2.75rem;\n    height: 100%;\n    z-index: 1;\n    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.sidebar.hidden {\n    width: 0;\n}\n\n/* Must create an inner container in sidebar otherwise\nthe padding is still displayed when sidebar is hidden */\n.sidebar-inner-container {\n    padding: 2rem 1rem;\n}\n\n.sidebar-tasks-item,\n.sidebar-projects-item {\n    display: flex;\n    gap: 0.5rem;\n    padding: 0.5rem 1rem;\n    white-space: nowrap;\n}\n\n.sidebar-tasks-item:hover,\n.sidebar-projects-item:hover {\n    background-color: #eeeeee;\n}\n\n.fa-inbox {\n    color: #4a87e4;\n}\n\n.fa-calendar-day {\n    color: #88c397;\n}\n\n.fa-calendar-week {\n    color: #8d62d0;\n}\n\n.sidebar-projects {\n    margin-top: 2rem;\n    padding: 0 1rem;\n}\n\n.projects-title {\n    font-size: 1.15rem;\n}\n/* SIDEBAR ENDS */\n\n.content {\n    grid-area: content;\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n    transition: margin-left 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n                background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.content.full-width {\n    transition: margin-left 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.content:not(.full-width) {\n    background-color: rgba(0,0,0,.5);\n}\n\n.content-inner-container {\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\nh2 {\n    margin: 0;\n}\n\n.add-task-container {\n    color: #8b8b8b;\n    padding-top: 0.5rem;\n\n}\n\n.add-task-btn {\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n.add-task-btn:hover {\n    color: #dd4b39;\n}\n\n.add-task-btn::before {\n    /* Add '+' before 'Add task' */\n    font-family: fontAwesome;\n    content: \"\\f055\\00a0\";\n    font-size: 1.25rem;\n    margin-right: 0.4rem;\n}\n\n/* NEW TASK FORM STARTS */\n.new-task-form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 0.75rem 0;\n}\n\n.new-task-form-editor {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 0.5rem 0.5rem;\n    border: 1px solid #e5e5e5;\n    border-radius: 10px;\n}\n\ninput[type=text],\ntextarea {\n    appearance: none;\n    border: 1px solid transparent;\n}\n  \ninput[type=text]:focus,\ntextarea:focus,\ninput[type=date]:focus {\n    outline: none;\n}\n\n#taskName {\n    font-size: 0.9rem;\n}\n\n#taskDescription {\n    resize: none;\n}\n\n#taskDescription,\n#taskDueDate {\n    font-family: \"Helvetica\", \"Arial\", sans-serif;\n}\n\n#taskDueDate {\n    color: #8b8b8b;\n    align-self: flex-start;\n    border: 1px solid #e5e5e5;\n    border-radius: 5px;\n    padding: 0.5rem 0.25rem;\n}\n\n#taskDueDate:focus {\n    color: #1f1f2f;\n}\n\n.form-btn-container {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.5rem;\n}\n\n.cancel-task-form-btn,\n.add-task-form-btn {\n    cursor: pointer;\n    font-weight: 600;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 12px;\n}\n\n.cancel-task-form-btn {\n    background-color: #f5f5f5;\n}\n\n.cancel-task-form-btn:hover {\n    background-color: #e5e5e5;\n}\n\n.add-task-form-btn {\n    color: white;\n    background-color: #f1b7b2;\n}\n\n.add-task-form-btn:hover {\n    background-color: #db4c3f;\n}\n/* NEW TASK FORM ENDS */\n\n\n/* TASK LIST STARTS */\n.task-list-item-container {\n    display: grid;\n    justify-content: space-between;\n    grid-template-areas: \n        \"task taskOptions\"\n        \"taskDueDate taskDueDate\";\n    font-size: 0.9rem;\n    padding: 0.5rem 0;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.task {\n    grid-area: task;\n}\n\n.task-label {\n    display: flex;\n    align-items: center;\n}\n\n/* Custom checkbox starts\nSource: https://www.sliderrevolution.com/resources/css-checkbox/ (task description added) */\n.task-label,\n.task-description {\n    -webkit-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n}\n\n.task-label span,\n.task-description span {\n    display: inline-block;\n    vertical-align: middle;\n    transform: translate3d(0, 0, 0);\n}\n\n.task-label span:first-child {\n    position: relative;\n    width: 20px;\n    height: 20px;\n    /* Add min width to avoid circle being squashed on mobile when task name too long */\n    min-width: 20px;\n    border-radius: 50%;\n    transform: scale(1);\n    vertical-align: middle;\n    border: 1px solid #B9B8C3;\n    transition: all 0.2s ease;\n}\n\n.task-label span:first-child svg {\n    position: absolute;\n    z-index: 1;\n    top: 5px;\n    left: 3px;\n    fill: none;\n    stroke: white;\n    stroke-width: 2;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-dasharray: 16px;\n    stroke-dashoffset: 16px;\n    transition: all 0.3s ease;\n    transition-delay: 0.1s;\n    transform: translate3d(0, 0, 0);\n}\n\n.task-label span:first-child:before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    background: lightgrey;\n    display: block;\n    transform: scale(0);\n    opacity: 1;\n    border-radius: 50%;\n    transition-delay: 0.2s;\n}\n\n.task-label span:last-child {\n    margin-left: 8px;\n}\n\n.task-label span:last-child:after,\n.task-description span:last-child:after {\n    content: \"\";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background: #B9B8C3;\n    transform-origin: 0 0;\n    transform: scaleX(0);\n}\n\n.task-label:hover span:first-child {\n    border-color: grey;\n}\n\n.task-checkbox:checked + .task-label span:first-child {\n    border-color: grey;\n    background: grey;\n    animation: check 0.6s ease;\n}\n\n.task-checkbox:checked + .task-label span:first-child svg {\n    stroke-dashoffset: 0;\n}\n\n.task-checkbox:checked + .task-label span:first-child:before {\n    transform: scale(2.2);\n    opacity: 0;\n    transition: all 0.6s ease;\n}\n\n.task-checkbox:checked + .task-label span:last-child,\n.task-checkbox:checked ~ .task-description span:last-child {\n    color: #B9B8C3;\n    transition: all 0.3s ease;\n}\n\n.task-checkbox:checked + .task-label span:last-child:after,\n.task-checkbox:checked ~ .task-description span:last-child:after {\n    transform: scaleX(1);\n    transition: all 0.3s ease;\n}\n\n@keyframes check {\n  50% {\n    transform: scale(1.2);\n  }\n}\n/* Custom checkbox ends */\n\n.task-description {\n    font-size: 0.8rem;\n    color: #8b8b8b;\n    margin-left: 1.8rem;\n}\n\n.task-due-date-container {\n    grid-area: taskDueDate;\n    display: flex;\n    align-items: center;\n    color: #8b8b8b;\n    gap: 0.2rem;\n    margin-left: 1.8rem;\n    margin-top: 0.5rem;\n}\n\n.task-due-date {\n    font-size: 0.8rem;\n}\n\n.task-option-container {\n    grid-area: taskOptions;\n    display: flex;\n    align-items: center;\n    gap: 1.25rem;\n    font-size: 1rem;\n    margin-left: 1.25rem;\n}\n\n.task-option-trashcan,\n.task-option-edit,\n.task-option-calendar {\n    cursor: pointer;\n    transition: all .07s ease;\n}\n\n.task-option-trashcan:hover,\n.task-option-edit:hover,\n.task-option-calendar:hover {\n    transform: scale(1.2);\n}\n/* TASK LIST ENDS */\n\n@media only screen and (min-width: 700px) {\n    .sidebar {\n        position: initial;\n    }\n\n    .content:not(.full-width) {\n        background-color: inherit;\n    }\n\n    .content-inner-container {\n        width: 50%;\n    }\n\n    .task-list-item-container {\n        grid-template-columns: 1fr auto auto;\n        grid-template-areas: \n            \"task taskDueDate taskOptions\";\n    }\n\n    .task-due-date-container {\n        color: inherit;\n        gap: 0.5rem;\n        margin-left: 1.25rem;\n        margin-top: 0;\n    }\n    \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* * {\n  border: 1px solid red;\n} */\n\nhtml {\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    box-sizing: inherit;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: auto 3fr;\n    grid-template-rows: auto 1fr;\n    grid-template-areas: \n        \"header header\"\n        \"sidebar content\";\n    font-family: 'Roboto', sans-serif;\n    color: #1f1f2f;\n    height: 100vh;\n    margin: 0;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n/* HEADER STARTS */\nheader {\n    grid-area: header;\n    font-size: 1.5rem;\n    color: white;\n    background-color: #db4c3f;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 1rem;\n}\n\n#hide-menu-btn {\n    font-size: 1.5rem;\n    border: none;\n    color: white;\n    background-color: inherit;\n}\n\n#hide-menu-btn:hover {\n    cursor: pointer;\n    background-color: #e26f65;\n}\n/* HEADER ENDS */\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n/* SIDEBAR STARTS */\n.sidebar {\n    grid-area: sidebar;\n    background-color: #fafafa;\n    width: 300px;\n    overflow-x: hidden;\n    position: absolute;\n    top: 2.75rem;\n    height: 100%;\n    z-index: 1;\n    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.sidebar.hidden {\n    width: 0;\n}\n\n/* Must create an inner container in sidebar otherwise\nthe padding is still displayed when sidebar is hidden */\n.sidebar-inner-container {\n    padding: 2rem 1rem;\n}\n\n.sidebar-tasks-item,\n.sidebar-projects-item {\n    display: flex;\n    gap: 0.5rem;\n    padding: 0.5rem 1rem;\n    white-space: nowrap;\n}\n\n.sidebar-tasks-item:hover,\n.sidebar-projects-item:hover {\n    background-color: #eeeeee;\n}\n\n.fa-inbox {\n    color: #4a87e4;\n}\n\n.fa-calendar-day {\n    color: #88c397;\n}\n\n.fa-calendar-week {\n    color: #8d62d0;\n}\n\n.sidebar-projects {\n    margin-top: 2rem;\n    padding: 0 1rem;\n}\n\n.projects-title {\n    font-size: 1.15rem;\n}\n/* SIDEBAR ENDS */\n\n.content {\n    grid-area: content;\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n    transition: margin-left 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n                background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.content.full-width {\n    transition: margin-left 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.content:not(.full-width) {\n    background-color: rgba(0,0,0,.5);\n}\n\n.content-inner-container {\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\nh2 {\n    margin: 0;\n}\n\n.add-task-container {\n    color: #8b8b8b;\n    padding-top: 0.5rem;\n\n}\n\n.add-task-btn {\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n.add-task-btn:hover {\n    color: #dd4b39;\n}\n\n.add-task-btn::before {\n    /* Add '+' before 'Add task' */\n    font-family: fontAwesome;\n    content: \"\\f055\\00a0\";\n    font-size: 1.25rem;\n    margin-right: 0.4rem;\n}\n\n/* NEW TASK FORM STARTS */\n.new-task-form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 0.75rem 0;\n}\n\n.new-task-form-editor {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 0.5rem 0.5rem;\n    border: 1px solid #e5e5e5;\n    border-radius: 10px;\n}\n\ninput[type=text],\ntextarea {\n    appearance: none;\n    border: 1px solid transparent;\n}\n  \ninput[type=text]:focus,\ntextarea:focus,\ninput[type=date]:focus {\n    outline: none;\n}\n\n#taskName {\n    font-size: 0.9rem;\n}\n\n#taskDescription {\n    resize: none;\n}\n\n#taskDescription,\n#taskDueDate {\n    font-family: \"Helvetica\", \"Arial\", sans-serif;\n}\n\n#taskDueDate {\n    color: #8b8b8b;\n    align-self: flex-start;\n    border: 1px solid #e5e5e5;\n    border-radius: 5px;\n    padding: 0.5rem 0.25rem;\n}\n\n#taskDueDate:focus {\n    color: #1f1f2f;\n}\n\n.form-btn-container {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.5rem;\n}\n\n.cancel-task-form-btn,\n.add-task-form-btn {\n    cursor: pointer;\n    font-weight: 600;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 12px;\n}\n\n.cancel-task-form-btn {\n    background-color: #f5f5f5;\n}\n\n.cancel-task-form-btn:hover {\n    background-color: #e5e5e5;\n}\n\n.add-task-form-btn {\n    color: white;\n    background-color: #f1b7b2;\n}\n\n.add-task-form-btn:hover {\n    background-color: #db4c3f;\n}\n/* NEW TASK FORM ENDS */\n\n\n/* TASK LIST STARTS */\n.task-list-item-container {\n    display: grid;\n    justify-content: space-between;\n    grid-template-areas: \n        \"task taskOptions\"\n        \"taskDueDate taskDueDate\";\n    font-size: 0.9rem;\n    padding: 0.5rem 0;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.task {\n    grid-area: task;\n}\n\n.task-label {\n    display: flex;\n    align-items: center;\n}\n\n/* Custom checkbox starts\nSource: https://www.sliderrevolution.com/resources/css-checkbox/ (task description added) */\n.task-label,\n.task-description {\n    -webkit-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n}\n\n.task-label span,\n.task-description span {\n    display: inline-block;\n    vertical-align: middle;\n    transform: translate3d(0, 0, 0);\n}\n\n.task-label span:first-child {\n    position: relative;\n    width: 20px;\n    height: 20px;\n    /* Add min width to avoid circle being squashed on mobile when task name too long */\n    min-width: 20px;\n    border-radius: 50%;\n    transform: scale(1);\n    vertical-align: middle;\n    border: 1px solid #B9B8C3;\n    transition: all 0.2s ease;\n}\n\n.task-label span:first-child svg {\n    position: absolute;\n    z-index: 1;\n    top: 5px;\n    left: 3px;\n    fill: none;\n    stroke: white;\n    stroke-width: 2;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-dasharray: 16px;\n    stroke-dashoffset: 16px;\n    transition: all 0.3s ease;\n    transition-delay: 0.1s;\n    transform: translate3d(0, 0, 0);\n}\n\n.task-label span:first-child:before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    background: lightgrey;\n    display: block;\n    transform: scale(0);\n    opacity: 1;\n    border-radius: 50%;\n    transition-delay: 0.2s;\n}\n\n.task-label span:last-child {\n    margin-left: 8px;\n}\n\n.task-label span:last-child:after,\n.task-description span:last-child:after {\n    content: \"\";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background: #B9B8C3;\n    transform-origin: 0 0;\n    transform: scaleX(0);\n}\n\n.task-label:hover span:first-child {\n    border-color: grey;\n}\n\n.task-checkbox:checked + .task-label span:first-child {\n    border-color: grey;\n    background: grey;\n    animation: check 0.6s ease;\n}\n\n.task-checkbox:checked + .task-label span:first-child svg {\n    stroke-dashoffset: 0;\n}\n\n.task-checkbox:checked + .task-label span:first-child:before {\n    transform: scale(2.2);\n    opacity: 0;\n    transition: all 0.6s ease;\n}\n\n.task-checkbox:checked + .task-label span:last-child,\n.task-checkbox:checked ~ .task-description span:last-child {\n    color: #B9B8C3;\n    transition: all 0.3s ease;\n}\n\n.task-checkbox:checked + .task-label span:last-child:after,\n.task-checkbox:checked ~ .task-description span:last-child:after {\n    transform: scaleX(1);\n    transition: all 0.3s ease;\n}\n\n@keyframes check {\n  50% {\n    transform: scale(1.2);\n  }\n}\n/* Custom checkbox ends */\n\n.task-description {\n    font-size: 0.8rem;\n    color: #8b8b8b;\n    margin-left: 1.8rem;\n}\n\n.task-due-date-container {\n    grid-area: taskDueDate;\n    display: flex;\n    align-items: center;\n    color: #8b8b8b;\n    gap: 0.2rem;\n    margin-left: 1.8rem;\n    margin-top: 0.5rem;\n}\n\n.task-due-date {\n    font-size: 0.8rem;\n}\n\n.task-option-container {\n    grid-area: taskOptions;\n    display: flex;\n    align-items: center;\n    gap: 1.25rem;\n    font-size: 1rem;\n    margin-left: 1.25rem;\n}\n\n.task-option-trashcan,\n.task-option-edit,\n.task-option-calendar {\n    cursor: pointer;\n    transition: all .07s ease;\n}\n\n.task-option-trashcan:hover,\n.task-option-edit:hover,\n.task-option-calendar:hover {\n    transform: scale(1.2);\n}\n/* TASK LIST ENDS */\n\n@media only screen and (min-width: 700px) {\n    .sidebar {\n        position: initial;\n    }\n\n    .content:not(.full-width) {\n        background-color: inherit;\n    }\n\n    .content-inner-container {\n        width: 50%;\n    }\n\n    .task-list-item-container {\n        grid-template-columns: 1fr auto auto;\n        grid-template-areas: \n            \"task taskDueDate taskOptions\";\n    }\n\n    .task-due-date-container {\n        color: inherit;\n        gap: 0.5rem;\n        margin-left: 1.25rem;\n        margin-top: 0;\n    }\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _taskManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManagement */ "./src/taskManagement.js");



function loadContent(title) {
    const content = document.querySelector('.content');

    const contentContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'content-inner-container', content);
    const contentHeader = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'content-header', contentContainer);

    const headerTitle = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'content-header-title', contentHeader);
    headerTitle.textContent = title;

    const taskContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task-container', contentContainer);
    const taskList = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', 'task-list', taskContainer);
    
    (0,_taskManagement__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContent);

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement),
/* harmony export */   "increment": () => (/* binding */ increment)
/* harmony export */ });
function createElement(type, className, parentEl) {
    const element = document.createElement(type);
    element.classList.add(className);

    /**
    * If parent element has been previously created via this function
    * (e.g: const span3 = createEl2('span', 'span3', taskDescriptionDiv))
    */
    if (parentEl.element) {
        parentEl.element.appendChild(element);
    // (e.g: const span3 = document.createElement('span');)
    } else {
        parentEl.appendChild(element);
    }

    return element
}

let increment = (function(n) {
    return function() {
      n += 1;
      return n;
    }
}(-1)); 



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");


function sidebarToggle() {
    const hideMenuBtn = document.querySelector('#hide-menu-btn');
    const sideBarDiv = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    hideMenuBtn.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        sideBarDiv.classList.toggle('hidden');
        content.classList.toggle('full-width');
    }
}

function getPage() {
    const allTasksLink = document.querySelector('#all-tasks-link');
    const todayTasksLink = document.querySelector('#todays-tasks-link');
    const upcomingTasksLink = document.querySelector('#upcoming-tasks-link');

    allTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'All')
    });

    todayTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'Today')
    });

    upcomingTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'Upcoming')
    });

    function loadPage(e, title) {
        e.preventDefault();
    
        const content = document.querySelector('.content');
        content.innerHTML = '';
    
        (0,_content__WEBPACK_IMPORTED_MODULE_0__["default"])(title);
    }
}

getPage();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarToggle);

/***/ }),

/***/ "./src/taskManagement.js":
/*!*******************************!*\
  !*** ./src/taskManagement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


let myTasks = [];

const task = (id, name, description, dueDate, status) => {
    return {id, name, description, dueDate, status};
}

function createAddTaskBtn() {
    const taskListDiv = document.querySelector('.task-list');

    const addTaskContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'add-task-container', taskListDiv);

    const addTaskBtn = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'add-task-btn', addTaskContainer);
    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', loadNewTaskForm);
}

function loadNewTaskForm() {
    // Remove 'Add task' button    
    const addTaskContainer = document.querySelector('.add-task-container');
    addTaskContainer.parentNode.removeChild(addTaskContainer);

    // FORM
    const taskListDiv = document.querySelector('.task-list');
    const newTaskFormContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'new-task-container', taskListDiv);
    const newTaskForm = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('form', 'new-task-form', newTaskFormContainer);
    const newTaskEditor = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'new-task-form-editor', newTaskForm);

    const taskName = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'taskName', newTaskEditor);
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskName');
    taskName.setAttribute('name', 'taskName');
    taskName.setAttribute('placeholder', 'Task name');
    taskName.setAttribute('autocomplete', 'off');
    taskName.setAttribute('maxlength', '50');

    const taskDescription = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('textarea', 'taskDescription', newTaskEditor);
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id', 'taskDescription');
    taskDescription.setAttribute('name', 'taskDescription');
    taskDescription.setAttribute('placeholder', 'Description');
    taskDescription.setAttribute('maxlength', '300');

    const taskDueDate = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'taskDueDate', newTaskEditor);
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('id', 'taskDueDate');
    taskDueDate.setAttribute('name', 'taskDueDate');
    taskDueDate.setAttribute('placeholder', 'Description');

    const btnContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'form-btn-container', newTaskForm);

    const cancelTaskBtn = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'cancel-task-form-btn', btnContainer);
    cancelTaskBtn.textContent = 'Cancel';
    cancelTaskBtn.addEventListener('click', cancelNewTaskEl)

    const addTaskBtn = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'add-task-form-btn', btnContainer);
    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', addTask)
}

function addTask(e) {   
    e.preventDefault();

    const newTaskForm = document.querySelector('.new-task-form');
    const taskNameInput = document.querySelector('#taskName');
    const taskDescriptionInput = document.querySelector('#taskDescription');
    const taskDueDateInput = document.querySelector('#taskDueDate');

    let taskId = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.increment)();
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let taskDueDate = taskDueDateInput.value;

    if (!taskName) return;

    const newTask = task(taskId, taskName, taskDescription, taskDueDate, 'unchecked');
    myTasks.push(newTask);
    console.table(myTasks);

    createTaskEl(newTask);

    newTaskForm.reset();
    taskNameInput.focus();
}

function createTaskEl(newTask) { 
    const taskList = document.querySelector('.task-list');
    const newTaskFormContainer = document.querySelector('.new-task-container');

    // CONTAINER
    const taskContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'task-list-item-container', newTaskFormContainer);
    const task = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task', taskContainer);

    // CUSTOM CHECKBOX AND LABEL/TASK NAME
    const checkbox = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'task-checkbox', task);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', newTask.id);
    checkbox.style.display = 'none';

    const checkboxLabel = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'task-label', task);
    checkboxLabel.setAttribute('for', newTask.id);

    const span = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'span', checkboxLabel);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", "12px");
    svg.setAttributeNS(null, "height", "9px");
    svg.setAttributeNS(null, "viewBox", "0 0 12 9");
    span.appendChild(svg);

    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttributeNS(null, "points", "1 5 4 8 11 1");
    svg.appendChild(polyline);

    const span2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'span2', checkboxLabel);
    span2.textContent = newTask.name;

    // TASK DESCRIPTION
    if (newTask.description) {
        const taskDescription = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task-description', task);

        const span3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'span3', taskDescription);
        span3.textContent = newTask.description;
    }

    // TASK DUE DATE
    if (newTask.dueDate) {
        const dueDateContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task-due-date-container', taskContainer);

        const calendar = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task-option-calendar', dueDateContainer);
        calendar.classList.add('fa-regular', 'fa-calendar');

        const dueDate = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task-due-date', dueDateContainer);
        dueDate.textContent = newTask.dueDate;
    }

    // TASK OPTIONS
    const taskOptionContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task-option-container', taskContainer);

    const edit = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task-option-edit', taskOptionContainer);
    edit.classList.add('fa-regular', 'fa-pen-to-square');

    const trashcan = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'task-option-trashcan', taskOptionContainer);
    trashcan.classList.add('fa-regular', 'fa-trash-can');

    // INSERT TASK INTO LIST BEFORE NEW TASK FORM
    taskList.insertBefore(taskContainer, newTaskFormContainer);

    // EVENT LISTENERS
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateTaskStatus))

    const trashcans = document.querySelectorAll('.task-option-trashcan');
    trashcans.forEach(trashcan => trashcan.addEventListener('click', deleteTask))
}

function cancelNewTaskEl(e) {
    e.preventDefault();

    const newTaskFormContainer = document.querySelector('.new-task-container');

    newTaskFormContainer.remove();
    createAddTaskBtn();
}

function updateTaskStatus(e) {
    // Find index in array where array ID and div ID match
    const indexArrayMatching = myTasks.findIndex(el => el.id == e.target.id);

    if (e.target.checked) {
        myTasks[indexArrayMatching].status = 'checked';
    } else {
        myTasks[indexArrayMatching].status = 'unchecked';
    }

    console.table(myTasks);
}

function deleteTask(e) {
    const eventTaskId = e.target.parentElement.parentElement.querySelector('.task-checkbox').id;

    // Find index in array where array ID and div ID match
    const indexArrayMatching = myTasks.findIndex(el => el.id == eventTaskId);

    myTasks.splice(indexArrayMatching, 1);
    e.target.parentElement.parentElement.remove();
    console.table(myTasks);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddTaskBtn);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");




(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_content__WEBPACK_IMPORTED_MODULE_2__["default"])('All');
})();

/******/ })()
;
//# sourceMappingURL=main.js.map