"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["bundle"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Arima-Thin.woff2 */ "./src/fonts/Arima-Thin.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Arima-Thin.woff */ "./src/fonts/Arima-Thin.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: arima;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n:root {\n    --background: hsl(60, 30%, 96%);\n    --background-hover: hsl(60, 30%, 90%);\n    --background-active: hsl(60, 30%, 87%);\n    --start-screen-bg: hsla(225, 27%, 51%, 0.973);\n    --subtle: hsl(225, 27%, 51%);\n    --more-subtle: hsl(225, 27%, 85%);\n    --pink: hsl(326, 100%, 74%);\n    --dark-pink: hsl(326, 50%, 50%);\n    --green: hsl(135, 94%, 65%);\n    --dark-green: hsl(135, 50%, 50%);\n    --yellow: hsl(65, 92%, 76%);\n    --dark-yellow: hsl(65, 50%, 50%);\n    --blue: hsl(191, 97%, 77%);\n    --font:  hsl(231, 15%, 18%);\n}\n\nbody {\n    font-family: arima, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background-color: var(--background);\n    display: grid;\n    grid-template: 1fr 6fr / 1fr 4fr;\n    height: 100vh;\n    position: relative;\n}\n\n.sidebar-title {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    padding: 16px 0px 0px 20px;\n    color: var(--font);\n}\n\n.sidebar {\n    color: var(--font);\n    min-width: 125px;\n}\n\n.sidebar {\n    padding: 6px;\n    grid-area: 2 / 1 / -1 / 2;\n\n}\n\n.header {\n    background-color: var(--subtle);\n    grid-area: 1 / 2 / 2 / -1;\n    border-bottom-left-radius: 75px 50px;\n    color: var(--font);\n}\n\n.time-cats {\n    display: flex;\n    flex-direction: column;\n}\n\n.cat {\n    background-color: var(--background);\n    border-bottom: 1px solid var(--more-subtle);\n    display: flex;\n    justify-content: flex-end;\n    padding: 13px 5px 0px 5px;\n    border-radius: 20px 20px 10px 10px;\n    margin-bottom: -5px;\n    box-shadow: 0px 1px 1px var(--more-subtle);\n}\n\n.user-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 21px;\n}\n\n.user-projects .project {\n    border-bottom: 1px solid var(--more-subtle);\n    display: flex;\n    justify-content: flex-end;\n    padding: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 1px 1px var(--more-subtle);\n}\n\n.user-projects .project.low {\n    border-left: 8px solid var(--dark-green);\n}\n\n.user-projects .project.medium {\n    border-left: 8px solid var(--dark-yellow);\n}\n\n.user-projects .project.high {\n    border-left: 8px solid var(--dark-pink);\n}\n\n.cat:first-child {\n    z-index: 4;\n}\n.cat:nth-child(2) {\n    z-index: 3;\n}\n\n.cat:nth-child(3) {\n    z-index: 2;\n}\n\n.cat:nth-child(4) {\n    z-index: 1;\n}\n\n.cat:hover,\n.project:hover {\n    background-color: var(--more-subtle);\n    cursor: pointer;\n}\n\n.cat:active,\n.project:active {\n    background-color: var(--background-active);\n}\n\n.projects {\n    margin-top: 16px;\n}\n\n.meat {\n    display: flex;\n}\n.main {\n    padding: 30px;\n}\n\n.add-item {\n    appearance: none;\n    border: none;\n    font-family: inherit;\n    background-color: var(--background);\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 6px 30px;\n    background-color: var(--more-subtle);\n    border-radius: 15px;\n    width: 100px;\n    margin-top: 10px;\n}\n\n.add-item:hover {\n    background-color: var(--subtle);\n}\n\n.add-item:active {\n    background-color: var(--more-subtle);\n}\n.add-item > span {\n    position: absolute;\n    right: 15%;\n    bottom: 15%;\n}\n\n.add-form {\n    font-family: inherit;\n    z-index: 10;\n    visibility: hidden;\n    scale: 0;\n    padding: 10px 30px 30px 30px;\n    background-color: var(--subtle);\n    width: min-content;\n    height: min-content;\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    border-radius: 30px;\n    box-shadow: 1px 1px 3px var(--subtle);\n    color: var(--background);\n    transition: 0.3s;\n}\n\n.form-type {\n    text-align: center;\n    padding: 0;\n    margin: 0;\n}\n\n.add-form .form-contents {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-form input,\n.add-form textarea {\n    appearance: none;\n    border: none;\n    font-size: 1.1rem;\n    font-family: inherit;\n    padding: 8px;\n    border-radius: 10px;\n    line-height: 24px;\n    width: 200px;\n    background-color: var(--background);\n}\n\n.add-form input:focus,\n.add-form textarea:focus {\n    outline: none;\n}\n\n.add-form .radio {\n    display: flex;\n    border: none;\n    width: 200px;\n}\n\n.radio input[type=\"radio\"] {\n    width: 20px;\n    height: 20px;\n    background-color: var(--more-subtle);\n    position: relative;\n    cursor: pointer;\n}\n\n.radio input[type=\"radio\"]::after {\n    position: absolute;\n    content: \" \";\n    width: 18px;\n    height: 18px;\n    background-color: var(--pink);\n    border-radius: 50%;\n    left: 1px;\n    bottom: 1px;\n    visibility: hidden;\n    transform: scale(0);\n    transition: .4s;\n}\n\n.radio input[type=\"radio\"]:checked::after {\n    visibility: visible;\n    transform: scale(1);\n}\n\n.radio input#low::after {\n    background-color: var(--green);\n}\n\n.radio input#medium::after {\n    background-color: var(--yellow);\n}\n\n.radio input #high::after {\n    background-color: var(--pink);\n}\n\n.radio ul {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n.radio li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.radio li:first-child {\n    color: var(--green);\n}\n\n.radio li:nth-child(2) {\n    color: var(--yellow);\n}\n\n.radio li:nth-child(3) {\n    color: var(--pink);\n}\n\n.btns {\n    display: flex;\n    width: 200px;\n    justify-content: space-around;\n    margin-top: 16px;\n}\n\n.add-form button {\n    appearance: none;\n    border: none;\n    font-family: inherit;\n    font-size: 1rem;\n    padding: 8px 16px;\n    border-radius: 10px;\n    background-color: var(--background);\n    cursor: pointer;\n}\n\n.add-form button:hover {\n    background-color: var(--more-subtle);\n}\n\n.add-form button:active {\n    background-color: var(--background-active);\n}\n\n.hidden {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n}\n\n.add-form button.info {\n    position: absolute;\n    box-sizing: border-box;\n    font-size: 1.5rem;\n    color: var(--font);\n    height: min-content;\n    width: min-content;\n    padding: 0;\n    line-height: 1.2rem;\n    text-align: center;\n    background-color: hsla(225, 27%, 51%, 0);\n    top: 0;\n    right: -10px;\n}\n\n.add-form button.info:hover {\n    color: var(--more-subtle);\n}\n\n.add-form button.info:active {\n    color: var(--background-active);\n}\n\n.visible {\n    visibility: visible;\n    scale: 1;\n}\n\n.list-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    cursor: pointer;\n    border-bottom: 1px solid var(--more-subtle);\n    font-size: 1.2rem;\n    color: var(--font);\n}\n\n.list-item input,\n.list-item label {\n    cursor: pointer;\n}\n\n.list-item input[type=\"checkbox\"]:checked + label {\n    text-decoration: line-through var(--more-subtle);\n    color: var(--more-subtle);\n}\n\n.list-item input[type=\"checkbox\"] {\n    appearance: none;\n    width: 20px;\n    height: 20px;\n    border: 1px solid var(--subtle);\n    border-radius: 50%;\n    position: relative;\n}\n\n.list-item input[type=\"checkbox\"]::after {\n    content: '';\n    position: absolute;\n    background-color: var(--subtle);\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    visibility: hidden;\n    transform: scale(0);\n    transition: 0.1s;\n    top: 1px;\n    left: 1px;\n}\n\n.list-item input[type=\"checkbox\"]:checked::after {\n    visibility: visible;\n    transform: scale(1);\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: arima;\n    src: url(\"./fonts/Arima-Thin.woff2\") format(\"woff2\"),\n    url(\"./fonts/Arima-Thin.woff\") format(\"woff\");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n:root {\n    --background: hsl(60, 30%, 96%);\n    --background-hover: hsl(60, 30%, 90%);\n    --background-active: hsl(60, 30%, 87%);\n    --start-screen-bg: hsla(225, 27%, 51%, 0.973);\n    --subtle: hsl(225, 27%, 51%);\n    --more-subtle: hsl(225, 27%, 85%);\n    --pink: hsl(326, 100%, 74%);\n    --dark-pink: hsl(326, 50%, 50%);\n    --green: hsl(135, 94%, 65%);\n    --dark-green: hsl(135, 50%, 50%);\n    --yellow: hsl(65, 92%, 76%);\n    --dark-yellow: hsl(65, 50%, 50%);\n    --blue: hsl(191, 97%, 77%);\n    --font:  hsl(231, 15%, 18%);\n}\n\nbody {\n    font-family: arima, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background-color: var(--background);\n    display: grid;\n    grid-template: 1fr 6fr / 1fr 4fr;\n    height: 100vh;\n    position: relative;\n}\n\n.sidebar-title {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    padding: 16px 0px 0px 20px;\n    color: var(--font);\n}\n\n.sidebar {\n    color: var(--font);\n    min-width: 125px;\n}\n\n.sidebar {\n    padding: 6px;\n    grid-area: 2 / 1 / -1 / 2;\n\n}\n\n.header {\n    background-color: var(--subtle);\n    grid-area: 1 / 2 / 2 / -1;\n    border-bottom-left-radius: 75px 50px;\n    color: var(--font);\n}\n\n.time-cats {\n    display: flex;\n    flex-direction: column;\n}\n\n.cat {\n    background-color: var(--background);\n    border-bottom: 1px solid var(--more-subtle);\n    display: flex;\n    justify-content: flex-end;\n    padding: 13px 5px 0px 5px;\n    border-radius: 20px 20px 10px 10px;\n    margin-bottom: -5px;\n    box-shadow: 0px 1px 1px var(--more-subtle);\n}\n\n.user-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 21px;\n}\n\n.user-projects .project {\n    border-bottom: 1px solid var(--more-subtle);\n    display: flex;\n    justify-content: flex-end;\n    padding: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 1px 1px var(--more-subtle);\n}\n\n.user-projects .project.low {\n    border-left: 8px solid var(--dark-green);\n}\n\n.user-projects .project.medium {\n    border-left: 8px solid var(--dark-yellow);\n}\n\n.user-projects .project.high {\n    border-left: 8px solid var(--dark-pink);\n}\n\n.cat:first-child {\n    z-index: 4;\n}\n.cat:nth-child(2) {\n    z-index: 3;\n}\n\n.cat:nth-child(3) {\n    z-index: 2;\n}\n\n.cat:nth-child(4) {\n    z-index: 1;\n}\n\n.cat:hover,\n.project:hover {\n    background-color: var(--more-subtle);\n    cursor: pointer;\n}\n\n.cat:active,\n.project:active {\n    background-color: var(--background-active);\n}\n\n.projects {\n    margin-top: 16px;\n}\n\n.meat {\n    display: flex;\n}\n.main {\n    padding: 30px;\n}\n\n.add-item {\n    appearance: none;\n    border: none;\n    font-family: inherit;\n    background-color: var(--background);\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 6px 30px;\n    background-color: var(--more-subtle);\n    border-radius: 15px;\n    width: 100px;\n    margin-top: 10px;\n}\n\n.add-item:hover {\n    background-color: var(--subtle);\n}\n\n.add-item:active {\n    background-color: var(--more-subtle);\n}\n.add-item > span {\n    position: absolute;\n    right: 15%;\n    bottom: 15%;\n}\n\n.add-form {\n    font-family: inherit;\n    z-index: 10;\n    visibility: hidden;\n    scale: 0;\n    padding: 10px 30px 30px 30px;\n    background-color: var(--subtle);\n    width: min-content;\n    height: min-content;\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    border-radius: 30px;\n    box-shadow: 1px 1px 3px var(--subtle);\n    color: var(--background);\n    transition: 0.3s;\n}\n\n.form-type {\n    text-align: center;\n    padding: 0;\n    margin: 0;\n}\n\n.add-form .form-contents {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-form input,\n.add-form textarea {\n    appearance: none;\n    border: none;\n    font-size: 1.1rem;\n    font-family: inherit;\n    padding: 8px;\n    border-radius: 10px;\n    line-height: 24px;\n    width: 200px;\n    background-color: var(--background);\n}\n\n.add-form input:focus,\n.add-form textarea:focus {\n    outline: none;\n}\n\n.add-form .radio {\n    display: flex;\n    border: none;\n    width: 200px;\n}\n\n.radio input[type=\"radio\"] {\n    width: 20px;\n    height: 20px;\n    background-color: var(--more-subtle);\n    position: relative;\n    cursor: pointer;\n}\n\n.radio input[type=\"radio\"]::after {\n    position: absolute;\n    content: \" \";\n    width: 18px;\n    height: 18px;\n    background-color: var(--pink);\n    border-radius: 50%;\n    left: 1px;\n    bottom: 1px;\n    visibility: hidden;\n    transform: scale(0);\n    transition: .4s;\n}\n\n.radio input[type=\"radio\"]:checked::after {\n    visibility: visible;\n    transform: scale(1);\n}\n\n.radio input#low::after {\n    background-color: var(--green);\n}\n\n.radio input#medium::after {\n    background-color: var(--yellow);\n}\n\n.radio input #high::after {\n    background-color: var(--pink);\n}\n\n.radio ul {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n.radio li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.radio li:first-child {\n    color: var(--green);\n}\n\n.radio li:nth-child(2) {\n    color: var(--yellow);\n}\n\n.radio li:nth-child(3) {\n    color: var(--pink);\n}\n\n.btns {\n    display: flex;\n    width: 200px;\n    justify-content: space-around;\n    margin-top: 16px;\n}\n\n.add-form button {\n    appearance: none;\n    border: none;\n    font-family: inherit;\n    font-size: 1rem;\n    padding: 8px 16px;\n    border-radius: 10px;\n    background-color: var(--background);\n    cursor: pointer;\n}\n\n.add-form button:hover {\n    background-color: var(--more-subtle);\n}\n\n.add-form button:active {\n    background-color: var(--background-active);\n}\n\n.hidden {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n}\n\n.add-form button.info {\n    position: absolute;\n    box-sizing: border-box;\n    font-size: 1.5rem;\n    color: var(--font);\n    height: min-content;\n    width: min-content;\n    padding: 0;\n    line-height: 1.2rem;\n    text-align: center;\n    background-color: hsla(225, 27%, 51%, 0);\n    top: 0;\n    right: -10px;\n}\n\n.add-form button.info:hover {\n    color: var(--more-subtle);\n}\n\n.add-form button.info:active {\n    color: var(--background-active);\n}\n\n.visible {\n    visibility: visible;\n    scale: 1;\n}\n\n.list-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    cursor: pointer;\n    border-bottom: 1px solid var(--more-subtle);\n    font-size: 1.2rem;\n    color: var(--font);\n}\n\n.list-item input,\n.list-item label {\n    cursor: pointer;\n}\n\n.list-item input[type=\"checkbox\"]:checked + label {\n    text-decoration: line-through var(--more-subtle);\n    color: var(--more-subtle);\n}\n\n.list-item input[type=\"checkbox\"] {\n    appearance: none;\n    width: 20px;\n    height: 20px;\n    border: 1px solid var(--subtle);\n    border-radius: 50%;\n    position: relative;\n}\n\n.list-item input[type=\"checkbox\"]::after {\n    content: '';\n    position: absolute;\n    background-color: var(--subtle);\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    visibility: hidden;\n    transform: scale(0);\n    transition: 0.1s;\n    top: 1px;\n    left: 1px;\n}\n\n.list-item input[type=\"checkbox\"]:checked::after {\n    visibility: visible;\n    transform: scale(1);\n}\n\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  if (!duration || _typeof(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.seconds) : 0; // Add years and months

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfToday)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendNewItem": () => (/* binding */ appendNewItem),
/* harmony export */   "createProjects": () => (/* binding */ createProjects),
/* harmony export */   "currentList": () => (/* binding */ currentList),
/* harmony export */   "openRecentProject": () => (/* binding */ openRecentProject),
/* harmony export */   "renderTimeTabs": () => (/* binding */ renderTimeTabs)
/* harmony export */ });
/* harmony import */ var _listData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listData */ "./src/listData.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");



const timeSection = document.querySelector(".time-cats");
const projectSection = document.querySelector(".projects");
const mainDisplay = document.querySelector(".main");
const titleDisplay = document.createElement("h1");
titleDisplay.classList.add("title-display");
const itemContainer = document.createElement("div");
itemContainer.classList.add("item-container");
const projectDetails = document.querySelector(".project-details");

let currentList;
let itemArray = [];
let listArray = [];

const newItem = document.createElement("button");
const plusIcon = document.createElement("span");
newItem.innerText = "add";
plusIcon.classList.add("mdi", "mdi-playlist-plus");
newItem.appendChild(plusIcon);
newItem.classList.add("add-item");
newItem.addEventListener("click", () => {
    (0,_form__WEBPACK_IMPORTED_MODULE_1__.openForm)("item");
})

mainDisplay.append(titleDisplay, itemContainer, newItem);


function renderTimeTabs() {
    for (let object of _listData__WEBPACK_IMPORTED_MODULE_0__.timeObjects) {
        let tab = document.createElement("li");
        tab.classList.add("cat");
        tab.innerText = object.title;
        tab.addEventListener("click", () => {
            object.compileArray();
            let domList = createList(object);
            domList.openList();
        })
        timeSection.appendChild(tab);
    }
}

function createProjects() {
    listArray = [];
    removeProjects();
    const userProjects = document.createElement("ul");
    userProjects.classList.add("user-projects");

    for (let project in _listData__WEBPACK_IMPORTED_MODULE_0__.allProjects) {
        let projectObject = _listData__WEBPACK_IMPORTED_MODULE_0__.allProjects[project];
        let domList = Object.assign(createList(projectObject), createTab);
        listArray.push(domList);
        console.log(domList);
        userProjects.appendChild(domList.createTab());
    }
    projectSection.appendChild(userProjects);
}

function openRecentProject() {
    const recentProject = listArray[listArray.length - 1];
    recentProject.openList();
}

const domListMethods = {
    openList() {
        clearDisplay();
        currentList = this.list;
        titleDisplay.innerText = this.list.title;
        if (this.list.items.length) {
            this.renderListItems();
        }
    },
    renderListItems() {
        itemArray = [];
        for (let i = 0; i < this.list.items.length; i++) {
            let item = this.list.items[i];
            let domItem = createItem(item);
            itemArray.push(domItem);
            domItem.renderView();
        }
    },
}

const createTab = {
    createTab() {
        const tab = document.createElement("li");
        tab.innerText = `${this.list.title}`;
        tab.classList.add("project");
        if (this.list.priority) {
            tab.classList.add(`${this.list.priority}`);
        }
        tab.addEventListener("click", () => {
            this.openList();
        }) 
        return tab;    
    },
}

function createList(list) {
    const domList = Object.create(domListMethods);
    domList.list = list;
    return domList
}

function removeProjects() {
    const userProjects = document.querySelector(".user-projects");
    if (userProjects) {
        userProjects.remove();
    }
}

function appendNewItem(item) {
    const domItem = createItem(item);
    itemArray.push(domItem);
    domItem.renderView();
}

const domItemMethods = {
    deleteItem() {
        this.item.removeFromProject();
    },
    renderView() {
        const itemDisplay = document.createElement("li");
        itemDisplay.classList.add("list-item");
        itemDisplay.append(this.checkbox, this.itemText);
        if (itemContainer.firstChild) {
            itemContainer.firstChild.appendChild(itemDisplay);
        } else {
            const items = document.createElement("ul");
            items.appendChild(itemDisplay);
            itemContainer.appendChild(items);
        }
    }
}

function createItem(item) {
    const domItem = Object.create(domItemMethods);

    const idTag = `item-${item.title}`

    const itemText = document.createElement("label");
    itemText.setAttribute("for", idTag);
    itemText.innerText = item.title;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", idTag);

    domItem.item = item;
    domItem.checkbox = checkbox;
    domItem.itemText = item.title;

    return domItem
}


function clearDisplay() {
    if (itemContainer.firstChild) {
        for (let item of itemArray) {
            if (item.checkbox.checked) {
                item.deleteItem();
            }
        }
        itemContainer.removeChild(itemContainer.firstChild);
    }
}



/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertFormToData": () => (/* binding */ convertFormToData),
/* harmony export */   "openForm": () => (/* binding */ openForm)
/* harmony export */ });
/* harmony import */ var _listData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listData */ "./src/listData.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const form = document.querySelector(".add-form");
const infoBtn = document.querySelector("button.info");
const hidden = document.querySelector(".hidden");
const submitBtn = document.querySelector(".submitBtn");
const cancelBtn = document.querySelector(".cancel");
const titleInput = document.querySelector("#title");
const formType = document.querySelector(".form-type");
let inputType = '';


const input = {
    title: document.querySelector("#title"),
    notes: document.querySelector("#notes"),
    due: document.querySelector("#due"),
}

function convertFormToData() {
    const title = input.title.value;
    const notes = input.notes.value;
    const due = input.due.value;
    let priority;
    if (document.querySelector("input[name='priority']:checked")) {
        priority = document.querySelector("input[name='priority']:checked").value;
    } else {
        priority = "";
    }
    return [title, notes, due, priority];
}

function openForm(type) {
    if (type === "New Project") {
        inputType = "project"
    } else {
        inputType = "item";
    }
    formType.innerText = type;
    form.classList.add("visible");
}

function closeForm() {
    form.classList.remove("visible");
}

infoBtn.addEventListener("click", () => {
    if (hidden.style.maxHeight) {
        hidden.style.maxHeight = null;
        infoBtn.classList.remove("mdi-information-off-outline");
        infoBtn.classList.add("mdi-information-outline");
    } else {
        hidden.style.maxHeight = hidden.scrollHeight + "px";
        infoBtn.classList.remove("mdi-information-outline");
        infoBtn.classList.add("mdi-information-off-outline");
    }
});

submitBtn.addEventListener("click", () => {
    let input = convertFormToData();
    if (inputType === "project") {
        const project = (0,_listData__WEBPACK_IMPORTED_MODULE_0__.addProject)(...input);
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjects)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.openRecentProject)();
    } else if (inputType === "item") {
        const projectTitle = _dom__WEBPACK_IMPORTED_MODULE_1__.currentList.title;
        const newItem = (0,_listData__WEBPACK_IMPORTED_MODULE_0__.addListItem)(...input, projectTitle);
        newItem.addToProject();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.appendNewItem)(newItem);
    }
    form.reset();
    closeForm();
})

cancelBtn.addEventListener("click", () => {
    form.reset();
    closeForm();
})

titleInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
    } 
})




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./src/init.js");



(0,_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])();




/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



const newProject = document.querySelector(".new-project");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    // openList();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderTimeTabs)();

    newProject.addEventListener("click", () => {
        (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.openForm)("New Project");
    })

}

/***/ }),

/***/ "./src/listData.js":
/*!*************************!*\
  !*** ./src/listData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListItem": () => (/* binding */ addListItem),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "timeObjects": () => (/* binding */ timeObjects)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");


let allProjects = {};

const timeMethods = {
    compileArray() {

        for (let project in allProjects) {
            if (allProjects[project].items) {
                this.items = [];
                for (let item of allProjects[project].items) {
                    if (item.due) {

                        //add space to interpret date properly 
                        let due = item.due + " ";
                        due = new Date(due);
                        if (this.end) {
                            if (due >= this.begin && due < this.end) {
                                this.items.push(item);
                            }
                        } else {
                            if (due >= this.begin) {
                                this.items.push(item);
                            }
                        }
                    }
                }
            }
        }
    }
}

function createTimeObject(title, begin, end) {
    let time = Object.create(timeMethods);
    time.title = title;
    time.items = [];
    time.begin = begin;
    time.end = end;
    return time
}

let todayDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])();
let tomorrow = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(todayDate, { days: 1 });
let thisWeekDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(todayDate, { weeks: 1 });
let nextWeekDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(todayDate, { weeks: 2 });

let today = createTimeObject("Today", todayDate, tomorrow);
let thisWeek = createTimeObject("This Week", tomorrow, thisWeekDate);
let nextWeek = createTimeObject("Next Week", thisWeekDate, nextWeekDate);
let future = createTimeObject("Future", nextWeekDate);

let timeObjects = [today, thisWeek, nextWeek, future];

const projectMethods = {
    deleteProject() {
        delete allProjects[this.title];
    }
}

function addProject(title, notes, due, priority) {
    let project = Object.create(projectMethods);
    project.title = title;
    project.notes = notes;
    project.due = due;
    project.priority = priority;
    project.items = [];
    allProjects[project.title] = project;
    console.log(allProjects);
    return project;
}

const itemMethods = {
    addToProject() {
        allProjects[this.project].items.push(this);
        console.log(allProjects);
    },
    removeFromProject() {
        const index = allProjects[this.project].items.indexOf(this);
        allProjects[this.project].items.splice(index, 1);
    }
}
function addListItem(title, notes, due, priority, project) {
    let item = Object.create(itemMethods);
    item.title = title;
    item.notes = notes;
    item.due = due;
    item.priority = priority;
    item.project = project;
    console.log(item);
    return item;
}






/***/ }),

/***/ "./src/fonts/Arima-Thin.woff":
/*!***********************************!*\
  !*** ./src/fonts/Arima-Thin.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6c0143fde0bc6e29c63.woff";

/***/ }),

/***/ "./src/fonts/Arima-Thin.woff2":
/*!************************************!*\
  !*** ./src/fonts/Arima-Thin.woff2 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9832f1d8716c10177d7.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixvREFBWTtBQUM1QixlQUFlLG9EQUFHLGNBQWMsU0FBUztBQUN6QyxtQkFBbUIsb0RBQUcsY0FBYyxVQUFVO0FBQzlDLG1CQUFtQixvREFBRyxjQUFjLFVBQVU7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3REYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FyaW1hLVRoaW4ud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FyaW1hLVRoaW4ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGFyaW1hO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZDogaHNsKDYwLCAzMCUsIDk2JSk7XFxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogaHNsKDYwLCAzMCUsIDkwJSk7XFxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmU6IGhzbCg2MCwgMzAlLCA4NyUpO1xcbiAgICAtLXN0YXJ0LXNjcmVlbi1iZzogaHNsYSgyMjUsIDI3JSwgNTElLCAwLjk3Myk7XFxuICAgIC0tc3VidGxlOiBoc2woMjI1LCAyNyUsIDUxJSk7XFxuICAgIC0tbW9yZS1zdWJ0bGU6IGhzbCgyMjUsIDI3JSwgODUlKTtcXG4gICAgLS1waW5rOiBoc2woMzI2LCAxMDAlLCA3NCUpO1xcbiAgICAtLWRhcmstcGluazogaHNsKDMyNiwgNTAlLCA1MCUpO1xcbiAgICAtLWdyZWVuOiBoc2woMTM1LCA5NCUsIDY1JSk7XFxuICAgIC0tZGFyay1ncmVlbjogaHNsKDEzNSwgNTAlLCA1MCUpO1xcbiAgICAtLXllbGxvdzogaHNsKDY1LCA5MiUsIDc2JSk7XFxuICAgIC0tZGFyay15ZWxsb3c6IGhzbCg2NSwgNTAlLCA1MCUpO1xcbiAgICAtLWJsdWU6IGhzbCgxOTEsIDk3JSwgNzclKTtcXG4gICAgLS1mb250OiAgaHNsKDIzMSwgMTUlLCAxOCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IGFyaW1hLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDZmciAvIDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDE2cHggMHB4IDBweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG5cXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YnRsZSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDc1cHggNTBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG4udGltZS1jYXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAxM3B4IDVweCAwcHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxufVxcblxcbi51c2VyLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdC5sb3cge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdC5tZWRpdW0ge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWRhcmsteWVsbG93KTtcXG59XFxuXFxuLnVzZXItcHJvamVjdHMgLnByb2plY3QuaGlnaCB7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tZGFyay1waW5rKTtcXG59XFxuXFxuLmNhdDpmaXJzdC1jaGlsZCB7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcbi5jYXQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmNhdDpudGgtY2hpbGQoMykge1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY2F0Om50aC1jaGlsZCg0KSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXQ6aG92ZXIsXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdDphY3RpdmUsXFxuLnByb2plY3Q6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY3RpdmUpO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWVhdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tYWluIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDZweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmFkZC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VidGxlKTtcXG59XFxuXFxuLmFkZC1pdGVtOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG59XFxuLmFkZC1pdGVtID4gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE1JTtcXG4gICAgYm90dG9tOiAxNSU7XFxufVxcblxcbi5hZGQtZm9ybSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBzY2FsZTogMDtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDMwcHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VidGxlKTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHZhcigtLXN1YnRsZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmZvcm0tdHlwZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWRkLWZvcm0gLmZvcm0tY29udGVudHMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC1mb3JtIGlucHV0LFxcbi5hZGQtZm9ybSB0ZXh0YXJlYSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYWRkLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuLmFkZC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC1mb3JtIC5yYWRpbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucmFkaW8gaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yYWRpbyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIGJvdHRvbTogMXB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnJhZGlvIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucmFkaW8gaW5wdXQjbG93OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnJhZGlvIGlucHV0I21lZGl1bTo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG4ucmFkaW8gaW5wdXQgI2hpZ2g6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxufVxcblxcbi5yYWRpbyB1bCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5yYWRpbyBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yYWRpbyBsaTpmaXJzdC1jaGlsZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5yYWRpbyBsaTpudGgtY2hpbGQoMikge1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnJhZGlvIGxpOm50aC1jaGlsZCgzKSB7XFxuICAgIGNvbG9yOiB2YXIoLS1waW5rKTtcXG59XFxuXFxuLmJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uYWRkLWZvcm0gYnV0dG9uIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2ZSk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5hZGQtZm9ybSBidXR0b24uaW5mbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mb250KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjI1LCAyNyUsIDUxJSwgMCk7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4uYWRkLWZvcm0gYnV0dG9uLmluZm86aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbn1cXG5cXG4uYWRkLWZvcm0gYnV0dG9uLmluZm86YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWN0aXZlKTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBzY2FsZTogMTtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XFxufVxcblxcbi5saXN0LWl0ZW0gaW5wdXQsXFxuLmxpc3QtaXRlbSBsYWJlbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtaXRlbSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIHZhcigtLW1vcmUtc3VidGxlKTtcXG4gICAgY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG59XFxuXFxuLmxpc3QtaXRlbSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VidGxlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0LWl0ZW0gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJ0bGUpO1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDFweDtcXG59XFxuXFxuLmxpc3QtaXRlbSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQjswREFDNkM7QUFDakQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDLDZDQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvRkFBb0Y7SUFDcEYsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJ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QjtJQUMvQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBhcmltYTtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvQXJpbWEtVGhpbi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2ZvbnRzL0FyaW1hLVRoaW4ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZDogaHNsKDYwLCAzMCUsIDk2JSk7XFxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogaHNsKDYwLCAzMCUsIDkwJSk7XFxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmU6IGhzbCg2MCwgMzAlLCA4NyUpO1xcbiAgICAtLXN0YXJ0LXNjcmVlbi1iZzogaHNsYSgyMjUsIDI3JSwgNTElLCAwLjk3Myk7XFxuICAgIC0tc3VidGxlOiBoc2woMjI1LCAyNyUsIDUxJSk7XFxuICAgIC0tbW9yZS1zdWJ0bGU6IGhzbCgyMjUsIDI3JSwgODUlKTtcXG4gICAgLS1waW5rOiBoc2woMzI2LCAxMDAlLCA3NCUpO1xcbiAgICAtLWRhcmstcGluazogaHNsKDMyNiwgNTAlLCA1MCUpO1xcbiAgICAtLWdyZWVuOiBoc2woMTM1LCA5NCUsIDY1JSk7XFxuICAgIC0tZGFyay1ncmVlbjogaHNsKDEzNSwgNTAlLCA1MCUpO1xcbiAgICAtLXllbGxvdzogaHNsKDY1LCA5MiUsIDc2JSk7XFxuICAgIC0tZGFyay15ZWxsb3c6IGhzbCg2NSwgNTAlLCA1MCUpO1xcbiAgICAtLWJsdWU6IGhzbCgxOTEsIDk3JSwgNzclKTtcXG4gICAgLS1mb250OiAgaHNsKDIzMSwgMTUlLCAxOCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IGFyaW1hLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDZmciAvIDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDE2cHggMHB4IDBweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG5cXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YnRsZSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDc1cHggNTBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG4udGltZS1jYXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAxM3B4IDVweCAwcHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxufVxcblxcbi51c2VyLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdC5sb3cge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdC5tZWRpdW0ge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWRhcmsteWVsbG93KTtcXG59XFxuXFxuLnVzZXItcHJvamVjdHMgLnByb2plY3QuaGlnaCB7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tZGFyay1waW5rKTtcXG59XFxuXFxuLmNhdDpmaXJzdC1jaGlsZCB7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcbi5jYXQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmNhdDpudGgtY2hpbGQoMykge1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY2F0Om50aC1jaGlsZCg0KSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXQ6aG92ZXIsXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdDphY3RpdmUsXFxuLnByb2plY3Q6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY3RpdmUpO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWVhdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tYWluIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDZweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmFkZC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VidGxlKTtcXG59XFxuXFxuLmFkZC1pdGVtOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG59XFxuLmFkZC1pdGVtID4gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE1JTtcXG4gICAgYm90dG9tOiAxNSU7XFxufVxcblxcbi5hZGQtZm9ybSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBzY2FsZTogMDtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDMwcHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VidGxlKTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHZhcigtLXN1YnRsZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmZvcm0tdHlwZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWRkLWZvcm0gLmZvcm0tY29udGVudHMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC1mb3JtIGlucHV0LFxcbi5hZGQtZm9ybSB0ZXh0YXJlYSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYWRkLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuLmFkZC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC1mb3JtIC5yYWRpbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucmFkaW8gaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yYWRpbyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIGJvdHRvbTogMXB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnJhZGlvIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucmFkaW8gaW5wdXQjbG93OjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnJhZGlvIGlucHV0I21lZGl1bTo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG4ucmFkaW8gaW5wdXQgI2hpZ2g6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxufVxcblxcbi5yYWRpbyB1bCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5yYWRpbyBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yYWRpbyBsaTpmaXJzdC1jaGlsZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5yYWRpbyBsaTpudGgtY2hpbGQoMikge1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnJhZGlvIGxpOm50aC1jaGlsZCgzKSB7XFxuICAgIGNvbG9yOiB2YXIoLS1waW5rKTtcXG59XFxuXFxuLmJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uYWRkLWZvcm0gYnV0dG9uIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2ZSk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5hZGQtZm9ybSBidXR0b24uaW5mbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mb250KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjI1LCAyNyUsIDUxJSwgMCk7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4uYWRkLWZvcm0gYnV0dG9uLmluZm86aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbn1cXG5cXG4uYWRkLWZvcm0gYnV0dG9uLmluZm86YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWN0aXZlKTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBzY2FsZTogMTtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XFxufVxcblxcbi5saXN0LWl0ZW0gaW5wdXQsXFxuLmxpc3QtaXRlbSBsYWJlbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtaXRlbSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIHZhcigtLW1vcmUtc3VidGxlKTtcXG4gICAgY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG59XFxuXFxuLmxpc3QtaXRlbSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VidGxlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0LWl0ZW0gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJ0bGUpO1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDFweDtcXG59XFxuXFxuLmxpc3QtaXRlbSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTW9udGhzIGZyb20gXCIuLi9hZGRNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtEdXJhdGlvbn0gZHVyYXRpb24gLSB0aGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKlxuICogfCBLZXkgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCB5ZWFycyAgICAgICAgICB8IEFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtb250aHMgICAgICAgICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQgICAgICAgfFxuICogfCB3ZWVrcyAgICAgICAgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBkYXlzICAgICAgICAgICB8IEFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkICAgICAgICAgfFxuICogfCBob3VycyAgICAgICAgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtaW51dGVzICAgICAgICB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkICAgICAgfFxuICogfCBzZWNvbmRzICAgICAgICB8IEFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkICAgICAgfFxuICpcbiAqIEFsbCB2YWx1ZXMgZGVmYXVsdCB0byAwXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIHRvIDEgU2VwdGVtYmVyIDIwMTQsIDEwOjE5OjUwXG4gKiBjb25zdCByZXN1bHQgPSBhZGQobmV3IERhdGUoMjAxNCwgOCwgMSwgMTAsIDE5LCA1MCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMCxcbiAqIH0pXG4gKiAvLz0+IFRodSBKdW4gMTUgMjAxNyAxNToyOToyMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGQoZGlydHlEYXRlLCBkdXJhdGlvbikge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgaWYgKCFkdXJhdGlvbiB8fCBfdHlwZW9mKGR1cmF0aW9uKSAhPT0gJ29iamVjdCcpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgeWVhcnMgPSBkdXJhdGlvbi55ZWFycyA/IHRvSW50ZWdlcihkdXJhdGlvbi55ZWFycykgOiAwO1xuICB2YXIgbW9udGhzID0gZHVyYXRpb24ubW9udGhzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1vbnRocykgOiAwO1xuICB2YXIgd2Vla3MgPSBkdXJhdGlvbi53ZWVrcyA/IHRvSW50ZWdlcihkdXJhdGlvbi53ZWVrcykgOiAwO1xuICB2YXIgZGF5cyA9IGR1cmF0aW9uLmRheXMgPyB0b0ludGVnZXIoZHVyYXRpb24uZGF5cykgOiAwO1xuICB2YXIgaG91cnMgPSBkdXJhdGlvbi5ob3VycyA/IHRvSW50ZWdlcihkdXJhdGlvbi5ob3VycykgOiAwO1xuICB2YXIgbWludXRlcyA9IGR1cmF0aW9uLm1pbnV0ZXMgPyB0b0ludGVnZXIoZHVyYXRpb24ubWludXRlcykgOiAwO1xuICB2YXIgc2Vjb25kcyA9IGR1cmF0aW9uLnNlY29uZHMgPyB0b0ludGVnZXIoZHVyYXRpb24uc2Vjb25kcykgOiAwOyAvLyBBZGQgeWVhcnMgYW5kIG1vbnRoc1xuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlV2l0aE1vbnRocyA9IG1vbnRocyB8fCB5ZWFycyA/IGFkZE1vbnRocyhkYXRlLCBtb250aHMgKyB5ZWFycyAqIDEyKSA6IGRhdGU7IC8vIEFkZCB3ZWVrcyBhbmQgZGF5c1xuXG4gIHZhciBkYXRlV2l0aERheXMgPSBkYXlzIHx8IHdlZWtzID8gYWRkRGF5cyhkYXRlV2l0aE1vbnRocywgZGF5cyArIHdlZWtzICogNykgOiBkYXRlV2l0aE1vbnRoczsgLy8gQWRkIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXG5cbiAgdmFyIG1pbnV0ZXNUb0FkZCA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xuICB2YXIgc2Vjb25kc1RvQWRkID0gc2Vjb25kcyArIG1pbnV0ZXNUb0FkZCAqIDYwO1xuICB2YXIgbXNUb0FkZCA9IHNlY29uZHNUb0FkZCAqIDEwMDA7XG4gIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShkYXRlV2l0aERheXMuZ2V0VGltZSgpICsgbXNUb0FkZCk7XG4gIHJldHVybiBmaW5hbERhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSBtb250aHMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gU3VuIEZlYiAwMSAyMDE1IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgbW9udGhzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTsgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoLlxuXG4gIHZhciBlbmRPZkRlc2lyZWRNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XG4gIHZhciBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcblxuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxuICAgIGRhdGUuc2V0RnVsbFllYXIoZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSwgZW5kT2ZEZXNpcmVkTW9udGguZ2V0TW9udGgoKSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZlRvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgdG9kYXkuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiB0b2RheS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZUb2RheSgpXG4gKiAvLz0+IE1vbiBPY3QgNiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlRvZGF5KCkge1xuICByZXR1cm4gc3RhcnRPZkRheShEYXRlLm5vdygpKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFsbFByb2plY3RzLCB0aW1lT2JqZWN0cyB9IGZyb20gXCIuL2xpc3REYXRhXCI7XG5pbXBvcnQgeyBvcGVuRm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcblxuY29uc3QgdGltZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtY2F0c1wiKTtcbmNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1kaXNwbGF5XCIpO1xuY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5pdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWNvbnRhaW5lclwiKTtcbmNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRldGFpbHNcIik7XG5cbmxldCBjdXJyZW50TGlzdDtcbmxldCBpdGVtQXJyYXkgPSBbXTtcbmxldCBsaXN0QXJyYXkgPSBbXTtcblxuY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xubmV3SXRlbS5pbm5lclRleHQgPSBcImFkZFwiO1xucGx1c0ljb24uY2xhc3NMaXN0LmFkZChcIm1kaVwiLCBcIm1kaS1wbGF5bGlzdC1wbHVzXCIpO1xubmV3SXRlbS5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5uZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJhZGQtaXRlbVwiKTtcbm5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuRm9ybShcIml0ZW1cIik7XG59KVxuXG5tYWluRGlzcGxheS5hcHBlbmQodGl0bGVEaXNwbGF5LCBpdGVtQ29udGFpbmVyLCBuZXdJdGVtKTtcblxuXG5mdW5jdGlvbiByZW5kZXJUaW1lVGFicygpIHtcbiAgICBmb3IgKGxldCBvYmplY3Qgb2YgdGltZU9iamVjdHMpIHtcbiAgICAgICAgbGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJjYXRcIik7XG4gICAgICAgIHRhYi5pbm5lclRleHQgPSBvYmplY3QudGl0bGU7XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LmNvbXBpbGVBcnJheSgpO1xuICAgICAgICAgICAgbGV0IGRvbUxpc3QgPSBjcmVhdGVMaXN0KG9iamVjdCk7XG4gICAgICAgICAgICBkb21MaXN0Lm9wZW5MaXN0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRpbWVTZWN0aW9uLmFwcGVuZENoaWxkKHRhYik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcbiAgICBsaXN0QXJyYXkgPSBbXTtcbiAgICByZW1vdmVQcm9qZWN0cygpO1xuICAgIGNvbnN0IHVzZXJQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1c2VyUHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInVzZXItcHJvamVjdHNcIik7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgIGxldCBwcm9qZWN0T2JqZWN0ID0gYWxsUHJvamVjdHNbcHJvamVjdF07XG4gICAgICAgIGxldCBkb21MaXN0ID0gT2JqZWN0LmFzc2lnbihjcmVhdGVMaXN0KHByb2plY3RPYmplY3QpLCBjcmVhdGVUYWIpO1xuICAgICAgICBsaXN0QXJyYXkucHVzaChkb21MaXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coZG9tTGlzdCk7XG4gICAgICAgIHVzZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChkb21MaXN0LmNyZWF0ZVRhYigpKTtcbiAgICB9XG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlclByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gb3BlblJlY2VudFByb2plY3QoKSB7XG4gICAgY29uc3QgcmVjZW50UHJvamVjdCA9IGxpc3RBcnJheVtsaXN0QXJyYXkubGVuZ3RoIC0gMV07XG4gICAgcmVjZW50UHJvamVjdC5vcGVuTGlzdCgpO1xufVxuXG5jb25zdCBkb21MaXN0TWV0aG9kcyA9IHtcbiAgICBvcGVuTGlzdCgpIHtcbiAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgIGN1cnJlbnRMaXN0ID0gdGhpcy5saXN0O1xuICAgICAgICB0aXRsZURpc3BsYXkuaW5uZXJUZXh0ID0gdGhpcy5saXN0LnRpdGxlO1xuICAgICAgICBpZiAodGhpcy5saXN0Lml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJMaXN0SXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyTGlzdEl0ZW1zKCkge1xuICAgICAgICBpdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3QuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5saXN0Lml0ZW1zW2ldO1xuICAgICAgICAgICAgbGV0IGRvbUl0ZW0gPSBjcmVhdGVJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbUFycmF5LnB1c2goZG9tSXRlbSk7XG4gICAgICAgICAgICBkb21JdGVtLnJlbmRlclZpZXcoKTtcbiAgICAgICAgfVxuICAgIH0sXG59XG5cbmNvbnN0IGNyZWF0ZVRhYiA9IHtcbiAgICBjcmVhdGVUYWIoKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGFiLmlubmVyVGV4dCA9IGAke3RoaXMubGlzdC50aXRsZX1gO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIGlmICh0aGlzLmxpc3QucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKGAke3RoaXMubGlzdC5wcmlvcml0eX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3Blbkxpc3QoKTtcbiAgICAgICAgfSkgXG4gICAgICAgIHJldHVybiB0YWI7ICAgIFxuICAgIH0sXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QobGlzdCkge1xuICAgIGNvbnN0IGRvbUxpc3QgPSBPYmplY3QuY3JlYXRlKGRvbUxpc3RNZXRob2RzKTtcbiAgICBkb21MaXN0Lmxpc3QgPSBsaXN0O1xuICAgIHJldHVybiBkb21MaXN0XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RzKCkge1xuICAgIGNvbnN0IHVzZXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0c1wiKTtcbiAgICBpZiAodXNlclByb2plY3RzKSB7XG4gICAgICAgIHVzZXJQcm9qZWN0cy5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5ld0l0ZW0oaXRlbSkge1xuICAgIGNvbnN0IGRvbUl0ZW0gPSBjcmVhdGVJdGVtKGl0ZW0pO1xuICAgIGl0ZW1BcnJheS5wdXNoKGRvbUl0ZW0pO1xuICAgIGRvbUl0ZW0ucmVuZGVyVmlldygpO1xufVxuXG5jb25zdCBkb21JdGVtTWV0aG9kcyA9IHtcbiAgICBkZWxldGVJdGVtKCkge1xuICAgICAgICB0aGlzLml0ZW0ucmVtb3ZlRnJvbVByb2plY3QoKTtcbiAgICB9LFxuICAgIHJlbmRlclZpZXcoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBpdGVtRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xuICAgICAgICBpdGVtRGlzcGxheS5hcHBlbmQodGhpcy5jaGVja2JveCwgdGhpcy5pdGVtVGV4dCk7XG4gICAgICAgIGlmIChpdGVtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChpdGVtRGlzcGxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGl0ZW1EaXNwbGF5KTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCBkb21JdGVtID0gT2JqZWN0LmNyZWF0ZShkb21JdGVtTWV0aG9kcyk7XG5cbiAgICBjb25zdCBpZFRhZyA9IGBpdGVtLSR7aXRlbS50aXRsZX1gXG5cbiAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpdGVtVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWRUYWcpO1xuICAgIGl0ZW1UZXh0LmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgaWRUYWcpO1xuXG4gICAgZG9tSXRlbS5pdGVtID0gaXRlbTtcbiAgICBkb21JdGVtLmNoZWNrYm94ID0gY2hlY2tib3g7XG4gICAgZG9tSXRlbS5pdGVtVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgICByZXR1cm4gZG9tSXRlbVxufVxuXG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICBpZiAoaXRlbUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbUFycmF5KSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZWxldGVJdGVtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUNvbnRhaW5lci5yZW1vdmVDaGlsZChpdGVtQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQcm9qZWN0cywgb3BlblJlY2VudFByb2plY3QsIHJlbmRlclRpbWVUYWJzLFxuICAgIGN1cnJlbnRMaXN0LCBhcHBlbmROZXdJdGVtXG59IiwiaW1wb3J0IHsgYWRkUHJvamVjdCwgYWRkTGlzdEl0ZW0gfSBmcm9tIFwiLi9saXN0RGF0YVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdHMsIGN1cnJlbnRMaXN0LFxuICAgIGFwcGVuZE5ld0l0ZW0sIG9wZW5SZWNlbnRQcm9qZWN0IH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWZvcm1cIik7XG5jb25zdCBpbmZvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5pbmZvXCIpO1xuY29uc3QgaGlkZGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIik7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEJ0blwiKTtcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG5jb25zdCBmb3JtVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS10eXBlXCIpO1xubGV0IGlucHV0VHlwZSA9ICcnO1xuXG5cbmNvbnN0IGlucHV0ID0ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLFxuICAgIG5vdGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpLFxuICAgIGR1ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVcIiksXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGb3JtVG9EYXRhKCkge1xuICAgIGNvbnN0IHRpdGxlID0gaW5wdXQudGl0bGUudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBpbnB1dC5ub3Rlcy52YWx1ZTtcbiAgICBjb25zdCBkdWUgPSBpbnB1dC5kdWUudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5O1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpKSB7XG4gICAgICAgIHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBbdGl0bGUsIG5vdGVzLCBkdWUsIHByaW9yaXR5XTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0odHlwZSkge1xuICAgIGlmICh0eXBlID09PSBcIk5ldyBQcm9qZWN0XCIpIHtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJwcm9qZWN0XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dFR5cGUgPSBcIml0ZW1cIjtcbiAgICB9XG4gICAgZm9ybVR5cGUuaW5uZXJUZXh0ID0gdHlwZTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbn1cblxuaW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChoaWRkZW4uc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICAgIGhpZGRlbi5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICBpbmZvQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJtZGktaW5mb3JtYXRpb24tb2ZmLW91dGxpbmVcIik7XG4gICAgICAgIGluZm9CdG4uY2xhc3NMaXN0LmFkZChcIm1kaS1pbmZvcm1hdGlvbi1vdXRsaW5lXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGRlbi5zdHlsZS5tYXhIZWlnaHQgPSBoaWRkZW4uc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBpbmZvQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJtZGktaW5mb3JtYXRpb24tb3V0bGluZVwiKTtcbiAgICAgICAgaW5mb0J0bi5jbGFzc0xpc3QuYWRkKFwibWRpLWluZm9ybWF0aW9uLW9mZi1vdXRsaW5lXCIpO1xuICAgIH1cbn0pO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgaW5wdXQgPSBjb252ZXJ0Rm9ybVRvRGF0YSgpO1xuICAgIGlmIChpbnB1dFR5cGUgPT09IFwicHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBhZGRQcm9qZWN0KC4uLmlucHV0KTtcbiAgICAgICAgY3JlYXRlUHJvamVjdHMoKTtcbiAgICAgICAgb3BlblJlY2VudFByb2plY3QoKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gXCJpdGVtXCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gY3VycmVudExpc3QudGl0bGU7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhZGRMaXN0SXRlbSguLi5pbnB1dCwgcHJvamVjdFRpdGxlKTtcbiAgICAgICAgbmV3SXRlbS5hZGRUb1Byb2plY3QoKTtcbiAgICAgICAgYXBwZW5kTmV3SXRlbShuZXdJdGVtKTtcbiAgICB9XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGNsb3NlRm9ybSgpO1xufSlcblxuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGNsb3NlRm9ybSgpO1xufSlcblxudGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gXG59KVxuXG5cbmV4cG9ydCB7IGNvbnZlcnRGb3JtVG9EYXRhLCBvcGVuRm9ybSB9IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBpbml0IGZyb20gXCIuL2luaXQuanNcIjtcblxuaW5pdCgpO1xuXG5cbiIsImltcG9ydCB7IG9wZW5Gb3JtIH0gZnJvbSBcIi4vZm9ybS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGltZVRhYnMgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBvcGVuTGlzdCgpO1xuICAgIHJlbmRlclRpbWVUYWJzKCk7XG5cbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG9wZW5Gb3JtKFwiTmV3IFByb2plY3RcIik7XG4gICAgfSlcblxufSIsImltcG9ydCB7IGFkZCwgc3RhcnRPZlRvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmxldCBhbGxQcm9qZWN0cyA9IHt9O1xuXG5jb25zdCB0aW1lTWV0aG9kcyA9IHtcbiAgICBjb21waWxlQXJyYXkoKSB7XG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBpbiBhbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgaWYgKGFsbFByb2plY3RzW3Byb2plY3RdLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgYWxsUHJvamVjdHNbcHJvamVjdF0uaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZHVlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIHNwYWNlIHRvIGludGVycHJldCBkYXRlIHByb3Blcmx5IFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGR1ZSA9IGl0ZW0uZHVlICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdWUgPSBuZXcgRGF0ZShkdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGR1ZSA+PSB0aGlzLmJlZ2luICYmIGR1ZSA8IHRoaXMuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkdWUgPj0gdGhpcy5iZWdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUaW1lT2JqZWN0KHRpdGxlLCBiZWdpbiwgZW5kKSB7XG4gICAgbGV0IHRpbWUgPSBPYmplY3QuY3JlYXRlKHRpbWVNZXRob2RzKTtcbiAgICB0aW1lLnRpdGxlID0gdGl0bGU7XG4gICAgdGltZS5pdGVtcyA9IFtdO1xuICAgIHRpbWUuYmVnaW4gPSBiZWdpbjtcbiAgICB0aW1lLmVuZCA9IGVuZDtcbiAgICByZXR1cm4gdGltZVxufVxuXG5sZXQgdG9kYXlEYXRlID0gc3RhcnRPZlRvZGF5KCk7XG5sZXQgdG9tb3Jyb3cgPSBhZGQodG9kYXlEYXRlLCB7IGRheXM6IDEgfSk7XG5sZXQgdGhpc1dlZWtEYXRlID0gYWRkKHRvZGF5RGF0ZSwgeyB3ZWVrczogMSB9KTtcbmxldCBuZXh0V2Vla0RhdGUgPSBhZGQodG9kYXlEYXRlLCB7IHdlZWtzOiAyIH0pO1xuXG5sZXQgdG9kYXkgPSBjcmVhdGVUaW1lT2JqZWN0KFwiVG9kYXlcIiwgdG9kYXlEYXRlLCB0b21vcnJvdyk7XG5sZXQgdGhpc1dlZWsgPSBjcmVhdGVUaW1lT2JqZWN0KFwiVGhpcyBXZWVrXCIsIHRvbW9ycm93LCB0aGlzV2Vla0RhdGUpO1xubGV0IG5leHRXZWVrID0gY3JlYXRlVGltZU9iamVjdChcIk5leHQgV2Vla1wiLCB0aGlzV2Vla0RhdGUsIG5leHRXZWVrRGF0ZSk7XG5sZXQgZnV0dXJlID0gY3JlYXRlVGltZU9iamVjdChcIkZ1dHVyZVwiLCBuZXh0V2Vla0RhdGUpO1xuXG5sZXQgdGltZU9iamVjdHMgPSBbdG9kYXksIHRoaXNXZWVrLCBuZXh0V2VlaywgZnV0dXJlXTtcblxuY29uc3QgcHJvamVjdE1ldGhvZHMgPSB7XG4gICAgZGVsZXRlUHJvamVjdCgpIHtcbiAgICAgICAgZGVsZXRlIGFsbFByb2plY3RzW3RoaXMudGl0bGVdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSwgbm90ZXMsIGR1ZSwgcHJpb3JpdHkpIHtcbiAgICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUocHJvamVjdE1ldGhvZHMpO1xuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgICBwcm9qZWN0Lm5vdGVzID0gbm90ZXM7XG4gICAgcHJvamVjdC5kdWUgPSBkdWU7XG4gICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHByb2plY3QuaXRlbXMgPSBbXTtcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0LnRpdGxlXSA9IHByb2plY3Q7XG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5jb25zdCBpdGVtTWV0aG9kcyA9IHtcbiAgICBhZGRUb1Byb2plY3QoKSB7XG4gICAgICAgIGFsbFByb2plY3RzW3RoaXMucHJvamVjdF0uaXRlbXMucHVzaCh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH0sXG4gICAgcmVtb3ZlRnJvbVByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYWxsUHJvamVjdHNbdGhpcy5wcm9qZWN0XS5pdGVtcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBhbGxQcm9qZWN0c1t0aGlzLnByb2plY3RdLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTGlzdEl0ZW0odGl0bGUsIG5vdGVzLCBkdWUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgbGV0IGl0ZW0gPSBPYmplY3QuY3JlYXRlKGl0ZW1NZXRob2RzKTtcbiAgICBpdGVtLnRpdGxlID0gdGl0bGU7XG4gICAgaXRlbS5ub3RlcyA9IG5vdGVzO1xuICAgIGl0ZW0uZHVlID0gZHVlO1xuICAgIGl0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBpdGVtLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG5leHBvcnQgeyBhZGRQcm9qZWN0LCBhZGRMaXN0SXRlbSwgYWxsUHJvamVjdHMsIHRpbWVPYmplY3RzIH07XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9