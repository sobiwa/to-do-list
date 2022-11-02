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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: arima;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n:root {\n    --background: hsl(60, 30%, 96%);\n    --background-hover: hsl(60, 30%, 90%);\n    --background-active: hsl(60, 30%, 87%);\n    --start-screen-bg: hsla(225, 27%, 51%, 0.973);\n    --subtle: hsl(225, 27%, 51%);\n    --more-subtle: hsl(225, 27%, 85%);\n    --pink: hsl(326, 100%, 74%);\n    --dark-pink: hsl(326, 50%, 50%);\n    --green: hsl(135, 94%, 65%);\n    --dark-green: hsl(135, 50%, 50%);\n    --yellow: hsl(65, 92%, 76%);\n    --dark-yellow: hsl(65, 50%, 50%);\n    --blue: hsl(191, 97%, 77%);\n    --font:  hsl(231, 15%, 18%);\n}\n\nbody {\n    font-family: arima, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background-color: var(--background);\n    display: grid;\n    grid-template: 1fr 6fr / 1fr 4fr;\n    height: 100vh;\n    position: relative;\n}\n\n.sidebar-title {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    padding: 16px 0px 0px 20px;\n    color: var(--font);\n}\n\n.sidebar {\n    color: var(--font);\n    min-width: 125px;\n}\n\n.sidebar {\n    padding: 6px;\n    grid-area: 2 / 1 / -1 / 2;\n\n}\n\n.header {\n    background-color: var(--subtle);\n    grid-area: 1 / 2 / 2 / -1;\n    border-bottom-left-radius: 75px 50px;\n    color: var(--font);\n}\n\n.time-cats {\n    display: flex;\n    flex-direction: column;\n}\n\n.cat {\n    background-color: var(--background);\n    border-bottom: 1px solid var(--more-subtle);\n    display: flex;\n    justify-content: flex-end;\n    padding: 13px 5px 0px 5px;\n    border-radius: 20px 20px 10px 10px;\n    margin-bottom: -5px;\n    box-shadow: 0px 1px 1px var(--more-subtle);\n}\n\n.user-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 21px;\n}\n\n.user-projects .project {\n    border-bottom: 1px solid var(--more-subtle);\n    display: flex;\n    justify-content: flex-end;\n    padding: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 1px 1px var(--more-subtle);\n}\n\n.user-projects .project.low {\n    border-left: 8px solid var(--dark-green);\n}\n\n.user-projects .project.medium {\n    border-left: 8px solid var(--dark-yellow);\n}\n\n.user-projects .project.high {\n    border-left: 8px solid var(--dark-pink);\n}\n\n.cat:first-child {\n    z-index: 4;\n}\n.cat:nth-child(2) {\n    z-index: 3;\n}\n\n.cat:nth-child(3) {\n    z-index: 2;\n}\n\n.cat:nth-child(4) {\n    z-index: 1;\n}\n\n.cat:hover,\n.project:hover {\n    background-color: var(--more-subtle);\n    cursor: pointer;\n}\n\n.cat:active,\n.project:active {\n    background-color: var(--background-active);\n}\n\n.projects {\n    margin-top: 16px;\n}\n\n.main {\n    padding: 30px;\n}\n\n.add-item {\n    appearance: none;\n    border: none;\n    font-family: inherit;\n    background-color: var(--background);\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 6px 30px;\n    background-color: var(--more-subtle);\n    border-radius: 15px;\n    width: 100px;\n}\n\n.add-item:hover {\n    background-color: var(--subtle);\n}\n\n.add-item:active {\n    background-color: var(--more-subtle);\n}\n.add-item > span {\n    position: absolute;\n    right: 15%;\n    bottom: 15%;\n}\n\n.add-form {\n    font-family: inherit;\n    z-index: 10;\n    visibility: hidden;\n    scale: 0;\n    padding: 10px 30px 30px 30px;\n    background-color: var(--subtle);\n    width: min-content;\n    height: min-content;\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    border-radius: 30px;\n    box-shadow: 1px 1px 3px var(--subtle);\n    color: var(--background);\n    transition: 0.3s;\n}\n\n.form-type {\n    text-align: center;\n    padding: 0;\n    margin: 0;\n}\n\n.add-form .form-contents {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-form input,\n.add-form textarea {\n    appearance: none;\n    border: none;\n    font-size: 1.1rem;\n    font-family: inherit;\n    padding: 8px;\n    border-radius: 10px;\n    line-height: 24px;\n    width: 200px;\n    background-color: var(--background);\n}\n\n.add-form input:focus,\n.add-form textarea:focus {\n    outline: none;\n}\n\n.add-form .radio {\n    display: flex;\n    border: none;\n    width: 200px;\n}\n\n.radio input[type=\"radio\"] {\n    width: 20px;\n    height: 20px;\n    background-color: var(--more-subtle);\n    position: relative;\n    cursor: pointer;\n}\n\n.radio input[type=\"radio\"]::after {\n    position: absolute;\n    content: \" \";\n    width: 18px;\n    height: 18px;\n    background-color: var(--pink);\n    border-radius: 50%;\n    left: 1px;\n    bottom: 1px;\n    visibility: hidden;\n    transform: scale(0);\n    transition: .4s;\n}\n\n.radio input[type=\"radio\"]:checked::after {\n    visibility: visible;\n    transform: scale(1);\n}\n\n.radio input#low::after {\n    background-color: var(--green);\n}\n\n.radio input#medium::after {\n    background-color: var(--yellow);\n}\n\n.radio input #high::after {\n    background-color: var(--pink);\n}\n\n.radio ul {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n.radio li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.radio li:first-child {\n    color: var(--green);\n}\n\n.radio li:nth-child(2) {\n    color: var(--yellow);\n}\n\n.radio li:nth-child(3) {\n    color: var(--pink);\n}\n\n.btns {\n    display: flex;\n    width: 200px;\n    justify-content: space-around;\n    margin-top: 16px;\n}\n\n.add-form button {\n    appearance: none;\n    border: none;\n    font-family: inherit;\n    font-size: 1rem;\n    padding: 8px 16px;\n    border-radius: 10px;\n    background-color: var(--background);\n    cursor: pointer;\n}\n\n.add-form button:hover {\n    background-color: var(--more-subtle);\n}\n\n.add-form button:active {\n    background-color: var(--background-active);\n}\n\n.hidden {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n}\n\n.add-form button.info {\n    position: absolute;\n    box-sizing: border-box;\n    font-size: 1.5rem;\n    color: var(--font);\n    height: min-content;\n    width: min-content;\n    padding: 0;\n    line-height: 1.2rem;\n    text-align: center;\n    background-color: hsla(225, 27%, 51%, 0);\n    top: 0;\n    right: -10px;\n}\n\n.add-form button.info:hover {\n    color: var(--more-subtle);\n}\n\n.add-form button.info:active {\n    color: var(--background-active);\n}\n\n.visible {\n    visibility: visible;\n    scale: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: arima;\n    src: url(\"./fonts/Arima-Thin.woff2\") format(\"woff2\"),\n    url(\"./fonts/Arima-Thin.woff\") format(\"woff\");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n:root {\n    --background: hsl(60, 30%, 96%);\n    --background-hover: hsl(60, 30%, 90%);\n    --background-active: hsl(60, 30%, 87%);\n    --start-screen-bg: hsla(225, 27%, 51%, 0.973);\n    --subtle: hsl(225, 27%, 51%);\n    --more-subtle: hsl(225, 27%, 85%);\n    --pink: hsl(326, 100%, 74%);\n    --dark-pink: hsl(326, 50%, 50%);\n    --green: hsl(135, 94%, 65%);\n    --dark-green: hsl(135, 50%, 50%);\n    --yellow: hsl(65, 92%, 76%);\n    --dark-yellow: hsl(65, 50%, 50%);\n    --blue: hsl(191, 97%, 77%);\n    --font:  hsl(231, 15%, 18%);\n}\n\nbody {\n    font-family: arima, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background-color: var(--background);\n    display: grid;\n    grid-template: 1fr 6fr / 1fr 4fr;\n    height: 100vh;\n    position: relative;\n}\n\n.sidebar-title {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    padding: 16px 0px 0px 20px;\n    color: var(--font);\n}\n\n.sidebar {\n    color: var(--font);\n    min-width: 125px;\n}\n\n.sidebar {\n    padding: 6px;\n    grid-area: 2 / 1 / -1 / 2;\n\n}\n\n.header {\n    background-color: var(--subtle);\n    grid-area: 1 / 2 / 2 / -1;\n    border-bottom-left-radius: 75px 50px;\n    color: var(--font);\n}\n\n.time-cats {\n    display: flex;\n    flex-direction: column;\n}\n\n.cat {\n    background-color: var(--background);\n    border-bottom: 1px solid var(--more-subtle);\n    display: flex;\n    justify-content: flex-end;\n    padding: 13px 5px 0px 5px;\n    border-radius: 20px 20px 10px 10px;\n    margin-bottom: -5px;\n    box-shadow: 0px 1px 1px var(--more-subtle);\n}\n\n.user-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 21px;\n}\n\n.user-projects .project {\n    border-bottom: 1px solid var(--more-subtle);\n    display: flex;\n    justify-content: flex-end;\n    padding: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 1px 1px var(--more-subtle);\n}\n\n.user-projects .project.low {\n    border-left: 8px solid var(--dark-green);\n}\n\n.user-projects .project.medium {\n    border-left: 8px solid var(--dark-yellow);\n}\n\n.user-projects .project.high {\n    border-left: 8px solid var(--dark-pink);\n}\n\n.cat:first-child {\n    z-index: 4;\n}\n.cat:nth-child(2) {\n    z-index: 3;\n}\n\n.cat:nth-child(3) {\n    z-index: 2;\n}\n\n.cat:nth-child(4) {\n    z-index: 1;\n}\n\n.cat:hover,\n.project:hover {\n    background-color: var(--more-subtle);\n    cursor: pointer;\n}\n\n.cat:active,\n.project:active {\n    background-color: var(--background-active);\n}\n\n.projects {\n    margin-top: 16px;\n}\n\n.main {\n    padding: 30px;\n}\n\n.add-item {\n    appearance: none;\n    border: none;\n    font-family: inherit;\n    background-color: var(--background);\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 6px 30px;\n    background-color: var(--more-subtle);\n    border-radius: 15px;\n    width: 100px;\n}\n\n.add-item:hover {\n    background-color: var(--subtle);\n}\n\n.add-item:active {\n    background-color: var(--more-subtle);\n}\n.add-item > span {\n    position: absolute;\n    right: 15%;\n    bottom: 15%;\n}\n\n.add-form {\n    font-family: inherit;\n    z-index: 10;\n    visibility: hidden;\n    scale: 0;\n    padding: 10px 30px 30px 30px;\n    background-color: var(--subtle);\n    width: min-content;\n    height: min-content;\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    border-radius: 30px;\n    box-shadow: 1px 1px 3px var(--subtle);\n    color: var(--background);\n    transition: 0.3s;\n}\n\n.form-type {\n    text-align: center;\n    padding: 0;\n    margin: 0;\n}\n\n.add-form .form-contents {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-form input,\n.add-form textarea {\n    appearance: none;\n    border: none;\n    font-size: 1.1rem;\n    font-family: inherit;\n    padding: 8px;\n    border-radius: 10px;\n    line-height: 24px;\n    width: 200px;\n    background-color: var(--background);\n}\n\n.add-form input:focus,\n.add-form textarea:focus {\n    outline: none;\n}\n\n.add-form .radio {\n    display: flex;\n    border: none;\n    width: 200px;\n}\n\n.radio input[type=\"radio\"] {\n    width: 20px;\n    height: 20px;\n    background-color: var(--more-subtle);\n    position: relative;\n    cursor: pointer;\n}\n\n.radio input[type=\"radio\"]::after {\n    position: absolute;\n    content: \" \";\n    width: 18px;\n    height: 18px;\n    background-color: var(--pink);\n    border-radius: 50%;\n    left: 1px;\n    bottom: 1px;\n    visibility: hidden;\n    transform: scale(0);\n    transition: .4s;\n}\n\n.radio input[type=\"radio\"]:checked::after {\n    visibility: visible;\n    transform: scale(1);\n}\n\n.radio input#low::after {\n    background-color: var(--green);\n}\n\n.radio input#medium::after {\n    background-color: var(--yellow);\n}\n\n.radio input #high::after {\n    background-color: var(--pink);\n}\n\n.radio ul {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n.radio li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.radio li:first-child {\n    color: var(--green);\n}\n\n.radio li:nth-child(2) {\n    color: var(--yellow);\n}\n\n.radio li:nth-child(3) {\n    color: var(--pink);\n}\n\n.btns {\n    display: flex;\n    width: 200px;\n    justify-content: space-around;\n    margin-top: 16px;\n}\n\n.add-form button {\n    appearance: none;\n    border: none;\n    font-family: inherit;\n    font-size: 1rem;\n    padding: 8px 16px;\n    border-radius: 10px;\n    background-color: var(--background);\n    cursor: pointer;\n}\n\n.add-form button:hover {\n    background-color: var(--more-subtle);\n}\n\n.add-form button:active {\n    background-color: var(--background-active);\n}\n\n.hidden {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n}\n\n.add-form button.info {\n    position: absolute;\n    box-sizing: border-box;\n    font-size: 1.5rem;\n    color: var(--font);\n    height: min-content;\n    width: min-content;\n    padding: 0;\n    line-height: 1.2rem;\n    text-align: center;\n    background-color: hsla(225, 27%, 51%, 0);\n    top: 0;\n    right: -10px;\n}\n\n.add-form button.info:hover {\n    color: var(--more-subtle);\n}\n\n.add-form button.info:active {\n    color: var(--background-active);\n}\n\n.visible {\n    visibility: visible;\n    scale: 1;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "openList": () => (/* binding */ openList),
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

let currentList;

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
            clearDisplay();
            openList(object);
        })
        timeSection.appendChild(tab);
    }
}

function createProjects() {
    removeProjects();
    const userProjects = document.createElement("ul");
    userProjects.classList.add("user-projects");
    // const projectTitles = allProjects.map(project => project.title);

    _listData__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project, index) => {
        const tab = document.createElement("li");
        tab.innerText = `${project.title}`;
        tab.classList.add("project");
        tab.dataset.index = index;
        if (project.priority) {
            tab.classList.add(`${project.priority}`);
        }
        tab.addEventListener("click", () => {
            clearDisplay();
            openList(project);
        })
        userProjects.appendChild(tab);
    })

    projectSection.appendChild(userProjects);
}

function removeProjects() {
    const userProjects = document.querySelector(".user-projects");
    if (userProjects) {
        userProjects.remove();
    }
}

function renderListItems(list) {
    const items = document.createElement("div");
    for (let i = 0; i < list.items.length; i++) {
        let item = document.createElement("div");
        item.innerText = list.items[i].title;
        items.appendChild(item);
    }
    itemContainer.appendChild(items);
}

function appendNewItem(item) {
    const itemDisplay = document.createElement("div");
    itemDisplay.innerText = item.title;
    if (itemContainer.firstChild) {
        itemContainer.firstChild.appendChild(itemDisplay);
    } else {
        itemContainer.appendChild(itemDisplay);
    }
}

function openList(list = _listData__WEBPACK_IMPORTED_MODULE_0__.timeObjects[0]) {
    clearDisplay();
    currentList = list;
    titleDisplay.innerText = list.title;
    if (list.items.length) {
        renderListItems(list);
    }
}

function clearDisplay() {
    if (itemContainer.firstChild) {
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
    const due = input.notes.value;
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
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.openList)(project);
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
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.openList)();
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
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


let allProjects = [];

const timeMethods = {

}

function createTimeObject(title) {
    let time  = Object.create(timeMethods);
    time.title = title;
    time.items = [];
    return time
}

let today = createTimeObject("Today");
let thisWeek = createTimeObject("This Week");
let nextWeek = createTimeObject("Next Week");
let future = createTimeObject("Future");

let timeObjects  = [today, thisWeek, nextWeek, future];

const projectMethods = {
    openList: (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.openList)(undefined),
}

function addProject(title, notes, due, priority) {
    let project  = Object.create(projectMethods);
    project.title = title;
    project.notes = notes;
    project.due = due;
    project.priority = priority;
    project.items = [];
    allProjects.push(project);
    console.log(allProjects);
    return project;
}

const itemMethods = {
    addToProject() {
        let project  = this.project;
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].title === project) {
                allProjects[i].items.push(this);
            }
        }
        console.log(allProjects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcscUNBQXFDLHlCQUF5Qix1SEFBdUgsR0FBRyxP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Q3JCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRm9CO0FBQ1E7O0FBRTdCLG9EQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGlDO0FBQ2U7O0FBRXBEOztBQUVBLDZCQUFlLHNDQUFZO0FBQzNCLElBQUksaURBQVE7QUFDWixJQUFJLHVEQUFjOztBQUVsQjtBQUNBLFFBQVEsa0RBQVE7QUFDaEIsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYm1DOztBQUVuQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLGlEQUFRLENBQUMsU0FBSTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3REYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FyaW1hLVRoaW4ud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FyaW1hLVRoaW4ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGFyaW1hO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZDogaHNsKDYwLCAzMCUsIDk2JSk7XFxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogaHNsKDYwLCAzMCUsIDkwJSk7XFxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmU6IGhzbCg2MCwgMzAlLCA4NyUpO1xcbiAgICAtLXN0YXJ0LXNjcmVlbi1iZzogaHNsYSgyMjUsIDI3JSwgNTElLCAwLjk3Myk7XFxuICAgIC0tc3VidGxlOiBoc2woMjI1LCAyNyUsIDUxJSk7XFxuICAgIC0tbW9yZS1zdWJ0bGU6IGhzbCgyMjUsIDI3JSwgODUlKTtcXG4gICAgLS1waW5rOiBoc2woMzI2LCAxMDAlLCA3NCUpO1xcbiAgICAtLWRhcmstcGluazogaHNsKDMyNiwgNTAlLCA1MCUpO1xcbiAgICAtLWdyZWVuOiBoc2woMTM1LCA5NCUsIDY1JSk7XFxuICAgIC0tZGFyay1ncmVlbjogaHNsKDEzNSwgNTAlLCA1MCUpO1xcbiAgICAtLXllbGxvdzogaHNsKDY1LCA5MiUsIDc2JSk7XFxuICAgIC0tZGFyay15ZWxsb3c6IGhzbCg2NSwgNTAlLCA1MCUpO1xcbiAgICAtLWJsdWU6IGhzbCgxOTEsIDk3JSwgNzclKTtcXG4gICAgLS1mb250OiAgaHNsKDIzMSwgMTUlLCAxOCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IGFyaW1hLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDZmciAvIDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDE2cHggMHB4IDBweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG5cXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YnRsZSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDc1cHggNTBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG4udGltZS1jYXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAxM3B4IDVweCAwcHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxufVxcblxcbi51c2VyLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdC5sb3cge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdC5tZWRpdW0ge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWRhcmsteWVsbG93KTtcXG59XFxuXFxuLnVzZXItcHJvamVjdHMgLnByb2plY3QuaGlnaCB7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tZGFyay1waW5rKTtcXG59XFxuXFxuLmNhdDpmaXJzdC1jaGlsZCB7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcbi5jYXQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmNhdDpudGgtY2hpbGQoMykge1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY2F0Om50aC1jaGlsZCg0KSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXQ6aG92ZXIsXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdDphY3RpdmUsXFxuLnByb2plY3Q6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY3RpdmUpO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA2cHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5hZGQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YnRsZSk7XFxufVxcblxcbi5hZGQtaXRlbTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxufVxcbi5hZGQtaXRlbSA+IHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxNSU7XFxuICAgIGJvdHRvbTogMTUlO1xcbn1cXG5cXG4uYWRkLWZvcm0ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgc2NhbGU6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YnRsZSk7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCB2YXIoLS1zdWJ0bGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5mb3JtLXR5cGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmFkZC1mb3JtIC5mb3JtLWNvbnRlbnRzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hZGQtZm9ybSBpbnB1dCxcXG4uYWRkLWZvcm0gdGV4dGFyZWEge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmFkZC1mb3JtIGlucHV0OmZvY3VzLFxcbi5hZGQtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtZm9ybSAucmFkaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnJhZGlvIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFkaW8gaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbGVmdDogMXB4O1xcbiAgICBib3R0b206IDFweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5yYWRpbyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnJhZGlvIGlucHV0I2xvdzo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5yYWRpbyBpbnB1dCNtZWRpdW06OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnJhZGlvIGlucHV0ICNoaWdoOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbn1cXG5cXG4ucmFkaW8gdWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucmFkaW8gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmFkaW8gbGk6Zmlyc3QtY2hpbGQge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ucmFkaW8gbGk6bnRoLWNoaWxkKDIpIHtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi5yYWRpbyBsaTpudGgtY2hpbGQoMykge1xcbiAgICBjb2xvcjogdmFyKC0tcGluayk7XFxufVxcblxcbi5idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxufVxcblxcbi5hZGQtZm9ybSBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY3RpdmUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4uYWRkLWZvcm0gYnV0dG9uLmluZm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyNSwgMjclLCA1MSUsIDApO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbi5pbmZvOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbi5pbmZvOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2ZSk7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgc2NhbGU6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEI7MERBQzZDO0FBQ2pEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0Qyw2Q0FBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQywyQkFB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bnQtZmFtaWx5OiBhcmltYTtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvQXJpbWEtVGhpbi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2ZvbnRzL0FyaW1hLVRoaW4ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZDogaHNsKDYwLCAzMCUsIDk2JSk7XFxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogaHNsKDYwLCAzMCUsIDkwJSk7XFxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmU6IGhzbCg2MCwgMzAlLCA4NyUpO1xcbiAgICAtLXN0YXJ0LXNjcmVlbi1iZzogaHNsYSgyMjUsIDI3JSwgNTElLCAwLjk3Myk7XFxuICAgIC0tc3VidGxlOiBoc2woMjI1LCAyNyUsIDUxJSk7XFxuICAgIC0tbW9yZS1zdWJ0bGU6IGhzbCgyMjUsIDI3JSwgODUlKTtcXG4gICAgLS1waW5rOiBoc2woMzI2LCAxMDAlLCA3NCUpO1xcbiAgICAtLWRhcmstcGluazogaHNsKDMyNiwgNTAlLCA1MCUpO1xcbiAgICAtLWdyZWVuOiBoc2woMTM1LCA5NCUsIDY1JSk7XFxuICAgIC0tZGFyay1ncmVlbjogaHNsKDEzNSwgNTAlLCA1MCUpO1xcbiAgICAtLXllbGxvdzogaHNsKDY1LCA5MiUsIDc2JSk7XFxuICAgIC0tZGFyay15ZWxsb3c6IGhzbCg2NSwgNTAlLCA1MCUpO1xcbiAgICAtLWJsdWU6IGhzbCgxOTEsIDk3JSwgNzclKTtcXG4gICAgLS1mb250OiAgaHNsKDIzMSwgMTUlLCAxOCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IGFyaW1hLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDZmciAvIDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDE2cHggMHB4IDBweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG5cXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YnRsZSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDc1cHggNTBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG4udGltZS1jYXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAxM3B4IDVweCAwcHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxufVxcblxcbi51c2VyLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdC5sb3cge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cyAucHJvamVjdC5tZWRpdW0ge1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWRhcmsteWVsbG93KTtcXG59XFxuXFxuLnVzZXItcHJvamVjdHMgLnByb2plY3QuaGlnaCB7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tZGFyay1waW5rKTtcXG59XFxuXFxuLmNhdDpmaXJzdC1jaGlsZCB7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcbi5jYXQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmNhdDpudGgtY2hpbGQoMykge1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY2F0Om50aC1jaGlsZCg0KSB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXQ6aG92ZXIsXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdDphY3RpdmUsXFxuLnByb2plY3Q6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY3RpdmUpO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA2cHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1zdWJ0bGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5hZGQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YnRsZSk7XFxufVxcblxcbi5hZGQtaXRlbTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxufVxcbi5hZGQtaXRlbSA+IHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxNSU7XFxuICAgIGJvdHRvbTogMTUlO1xcbn1cXG5cXG4uYWRkLWZvcm0ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgc2NhbGU6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YnRsZSk7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCB2YXIoLS1zdWJ0bGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5mb3JtLXR5cGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmFkZC1mb3JtIC5mb3JtLWNvbnRlbnRzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hZGQtZm9ybSBpbnB1dCxcXG4uYWRkLWZvcm0gdGV4dGFyZWEge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmFkZC1mb3JtIGlucHV0OmZvY3VzLFxcbi5hZGQtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtZm9ybSAucmFkaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnJhZGlvIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFkaW8gaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbGVmdDogMXB4O1xcbiAgICBib3R0b206IDFweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5yYWRpbyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnJhZGlvIGlucHV0I2xvdzo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5yYWRpbyBpbnB1dCNtZWRpdW06OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnJhZGlvIGlucHV0ICNoaWdoOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbn1cXG5cXG4ucmFkaW8gdWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucmFkaW8gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmFkaW8gbGk6Zmlyc3QtY2hpbGQge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ucmFkaW8gbGk6bnRoLWNoaWxkKDIpIHtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi5yYWRpbyBsaTpudGgtY2hpbGQoMykge1xcbiAgICBjb2xvcjogdmFyKC0tcGluayk7XFxufVxcblxcbi5idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLXN1YnRsZSk7XFxufVxcblxcbi5hZGQtZm9ybSBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY3RpdmUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4uYWRkLWZvcm0gYnV0dG9uLmluZm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udCk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyNSwgMjclLCA1MSUsIDApO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbi5pbmZvOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1vcmUtc3VidGxlKTtcXG59XFxuXFxuLmFkZC1mb3JtIGJ1dHRvbi5pbmZvOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2ZSk7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgc2NhbGU6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhbGxQcm9qZWN0cywgdGltZU9iamVjdHMgfSBmcm9tIFwiLi9saXN0RGF0YVwiO1xuaW1wb3J0IHsgb3BlbkZvcm0gfSBmcm9tIFwiLi9mb3JtXCI7XG5cbmNvbnN0IHRpbWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLWNhdHNcIik7XG5jb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbmNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtZGlzcGxheVwiKTtcbmNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1jb250YWluZXJcIik7XG5cbmxldCBjdXJyZW50TGlzdDtcblxuY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xubmV3SXRlbS5pbm5lclRleHQgPSBcImFkZFwiO1xucGx1c0ljb24uY2xhc3NMaXN0LmFkZChcIm1kaVwiLCBcIm1kaS1wbGF5bGlzdC1wbHVzXCIpO1xubmV3SXRlbS5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5uZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJhZGQtaXRlbVwiKTtcbm5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuRm9ybShcIml0ZW1cIik7XG59KVxuXG5tYWluRGlzcGxheS5hcHBlbmQodGl0bGVEaXNwbGF5LCBpdGVtQ29udGFpbmVyLCBuZXdJdGVtKTtcblxuXG5mdW5jdGlvbiByZW5kZXJUaW1lVGFicygpIHtcbiAgICBmb3IgKGxldCBvYmplY3Qgb2YgdGltZU9iamVjdHMpIHtcbiAgICAgICAgbGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJjYXRcIik7XG4gICAgICAgIHRhYi5pbm5lclRleHQgPSBvYmplY3QudGl0bGU7XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgICAgICBvcGVuTGlzdChvYmplY3QpO1xuICAgICAgICB9KVxuICAgICAgICB0aW1lU2VjdGlvbi5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XG4gICAgcmVtb3ZlUHJvamVjdHMoKTtcbiAgICBjb25zdCB1c2VyUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdXNlclByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJ1c2VyLXByb2plY3RzXCIpO1xuICAgIC8vIGNvbnN0IHByb2plY3RUaXRsZXMgPSBhbGxQcm9qZWN0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlKTtcblxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGFiLmlubmVyVGV4dCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICB0YWIuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgICAgICBpZiAocHJvamVjdC5wcmlvcml0eSkge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoYCR7cHJvamVjdC5wcmlvcml0eX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgICAgICAgICAgb3Blbkxpc3QocHJvamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgIHVzZXJQcm9qZWN0cy5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH0pXG5cbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh1c2VyUHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0cygpIHtcbiAgICBjb25zdCB1c2VyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItcHJvamVjdHNcIik7XG4gICAgaWYgKHVzZXJQcm9qZWN0cykge1xuICAgICAgICB1c2VyUHJvamVjdHMucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0SXRlbXMobGlzdCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGxpc3QuaXRlbXNbaV0udGl0bGU7XG4gICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1zKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTmV3SXRlbShpdGVtKSB7XG4gICAgY29uc3QgaXRlbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1EaXNwbGF5LmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG4gICAgaWYgKGl0ZW1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBpdGVtQ29udGFpbmVyLmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoaXRlbURpc3BsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURpc3BsYXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3Blbkxpc3QobGlzdCA9IHRpbWVPYmplY3RzWzBdKSB7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgY3VycmVudExpc3QgPSBsaXN0O1xuICAgIHRpdGxlRGlzcGxheS5pbm5lclRleHQgPSBsaXN0LnRpdGxlO1xuICAgIGlmIChsaXN0Lml0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZW5kZXJMaXN0SXRlbXMobGlzdCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRpc3BsYXkoKSB7XG4gICAgaWYgKGl0ZW1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBpdGVtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGl0ZW1Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQcm9qZWN0cywgb3Blbkxpc3QsIHJlbmRlclRpbWVUYWJzLFxuICAgIGN1cnJlbnRMaXN0LCBhcHBlbmROZXdJdGVtXG59IiwiaW1wb3J0IHsgYWRkUHJvamVjdCwgYWRkTGlzdEl0ZW0gfSBmcm9tIFwiLi9saXN0RGF0YVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdHMsIG9wZW5MaXN0LCBjdXJyZW50TGlzdCwgYXBwZW5kTmV3SXRlbSB9IGZyb20gXCIuL2RvbVwiO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtZm9ybVwiKTtcbmNvbnN0IGluZm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmluZm9cIik7XG5jb25zdCBoaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGRlblwiKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnRuXCIpO1xuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbmNvbnN0IGZvcm1UeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXR5cGVcIik7XG5sZXQgaW5wdXRUeXBlID0gJyc7XG5cblxuY29uc3QgaW5wdXQgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIiksXG4gICAgbm90ZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIiksXG4gICAgZHVlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZVwiKSxcbn1cblxuZnVuY3Rpb24gY29udmVydEZvcm1Ub0RhdGEoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBpbnB1dC50aXRsZS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGlucHV0Lm5vdGVzLnZhbHVlO1xuICAgIGNvbnN0IGR1ZSA9IGlucHV0Lm5vdGVzLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKSkge1xuICAgICAgICBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHkgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gW3RpdGxlLCBub3RlcywgZHVlLCBwcmlvcml0eV07XG59XG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJOZXcgUHJvamVjdFwiKSB7XG4gICAgICAgIGlucHV0VHlwZSA9IFwicHJvamVjdFwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJpdGVtXCI7XG4gICAgfVxuICAgIGZvcm1UeXBlLmlubmVyVGV4dCA9IHR5cGU7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG59XG5cbmluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoaGlkZGVuLnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgICBoaWRkZW4uc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgaW5mb0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwibWRpLWluZm9ybWF0aW9uLW9mZi1vdXRsaW5lXCIpO1xuICAgICAgICBpbmZvQnRuLmNsYXNzTGlzdC5hZGQoXCJtZGktaW5mb3JtYXRpb24tb3V0bGluZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoaWRkZW4uc3R5bGUubWF4SGVpZ2h0ID0gaGlkZGVuLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgaW5mb0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwibWRpLWluZm9ybWF0aW9uLW91dGxpbmVcIik7XG4gICAgICAgIGluZm9CdG4uY2xhc3NMaXN0LmFkZChcIm1kaS1pbmZvcm1hdGlvbi1vZmYtb3V0bGluZVwiKTtcbiAgICB9XG59KTtcblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGlucHV0ID0gY29udmVydEZvcm1Ub0RhdGEoKTtcbiAgICBpZiAoaW5wdXRUeXBlID09PSBcInByb2plY3RcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gYWRkUHJvamVjdCguLi5pbnB1dCk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RzKCk7XG4gICAgICAgIG9wZW5MaXN0KHByb2plY3QpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSBcIml0ZW1cIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBjdXJyZW50TGlzdC50aXRsZTtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGFkZExpc3RJdGVtKC4uLmlucHV0LCBwcm9qZWN0VGl0bGUpO1xuICAgICAgICBuZXdJdGVtLmFkZFRvUHJvamVjdCgpO1xuICAgICAgICBhcHBlbmROZXdJdGVtKG5ld0l0ZW0pO1xuICAgIH1cbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgY2xvc2VGb3JtKCk7XG59KVxuXG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgY2xvc2VGb3JtKCk7XG59KVxuXG50aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBcbn0pXG5cblxuZXhwb3J0IHsgY29udmVydEZvcm1Ub0RhdGEsIG9wZW5Gb3JtIH0iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGluaXQgZnJvbSBcIi4vaW5pdC5qc1wiO1xuXG5pbml0KCk7XG5cblxuIiwiaW1wb3J0IHsgb3BlbkZvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5pbXBvcnQgeyBvcGVuTGlzdCwgcmVuZGVyVGltZVRhYnMgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvcGVuTGlzdCgpO1xuICAgIHJlbmRlclRpbWVUYWJzKCk7XG5cbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG9wZW5Gb3JtKFwiTmV3IFByb2plY3RcIik7XG4gICAgfSlcblxufSIsImltcG9ydCB7IG9wZW5MaXN0IH0gZnJvbSBcIi4vZG9tLmpzXCJcblxubGV0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHRpbWVNZXRob2RzID0ge1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpbWVPYmplY3QodGl0bGUpIHtcbiAgICBsZXQgdGltZSAgPSBPYmplY3QuY3JlYXRlKHRpbWVNZXRob2RzKTtcbiAgICB0aW1lLnRpdGxlID0gdGl0bGU7XG4gICAgdGltZS5pdGVtcyA9IFtdO1xuICAgIHJldHVybiB0aW1lXG59XG5cbmxldCB0b2RheSA9IGNyZWF0ZVRpbWVPYmplY3QoXCJUb2RheVwiKTtcbmxldCB0aGlzV2VlayA9IGNyZWF0ZVRpbWVPYmplY3QoXCJUaGlzIFdlZWtcIik7XG5sZXQgbmV4dFdlZWsgPSBjcmVhdGVUaW1lT2JqZWN0KFwiTmV4dCBXZWVrXCIpO1xubGV0IGZ1dHVyZSA9IGNyZWF0ZVRpbWVPYmplY3QoXCJGdXR1cmVcIik7XG5cbmxldCB0aW1lT2JqZWN0cyAgPSBbdG9kYXksIHRoaXNXZWVrLCBuZXh0V2VlaywgZnV0dXJlXTtcblxuY29uc3QgcHJvamVjdE1ldGhvZHMgPSB7XG4gICAgb3Blbkxpc3Q6IG9wZW5MaXN0KHRoaXMpLFxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlLCBub3RlcywgZHVlLCBwcmlvcml0eSkge1xuICAgIGxldCBwcm9qZWN0ICA9IE9iamVjdC5jcmVhdGUocHJvamVjdE1ldGhvZHMpO1xuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgICBwcm9qZWN0Lm5vdGVzID0gbm90ZXM7XG4gICAgcHJvamVjdC5kdWUgPSBkdWU7XG4gICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHByb2plY3QuaXRlbXMgPSBbXTtcbiAgICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuY29uc3QgaXRlbU1ldGhvZHMgPSB7XG4gICAgYWRkVG9Qcm9qZWN0KCkge1xuICAgICAgICBsZXQgcHJvamVjdCAgPSB0aGlzLnByb2plY3Q7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhbGxQcm9qZWN0c1tpXS50aXRsZSA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW2ldLml0ZW1zLnB1c2godGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExpc3RJdGVtKHRpdGxlLCBub3RlcywgZHVlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGxldCBpdGVtID0gT2JqZWN0LmNyZWF0ZShpdGVtTWV0aG9kcyk7XG4gICAgaXRlbS50aXRsZSA9IHRpdGxlO1xuICAgIGl0ZW0ubm90ZXMgPSBub3RlcztcbiAgICBpdGVtLmR1ZSA9IGR1ZTtcbiAgICBpdGVtLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgaXRlbS5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdCwgYWRkTGlzdEl0ZW0sIGFsbFByb2plY3RzLCB0aW1lT2JqZWN0cyB9O1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==