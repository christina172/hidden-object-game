/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Times New Roman', Times, serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader,\nfooter {\n    background-color: antiquewhite;\n    padding: 5px;\n}\n\nh1,\nfooter {\n    text-align: center;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding: 20px 100px;\n    background-color: rgb(255, 250, 244);\n}\n\n.description {\n    text-align: center;\n    font-size: 1.3rem;\n}\n\n.bold {\n    font-weight: bold;\n    font-style: normal;\n}\n\nspan {\n    font-weight: normal;\n    font-style: italic;\n}\n\n.yellow {\n    text-shadow: yellow 1px 1px 3px;\n}\n\n.orange {\n    text-shadow: rgb(255, 136, 0) 1px 1px 3px;\n}\n\n.red {\n    text-shadow: red 1px 1px 3px;\n}\n\n.sand {\n    text-shadow: rgb(168, 141, 82) 1px 1px 3px;\n}\n\n.grey {\n    text-shadow: grey 1px 1px 3px;\n}\n\n.green {\n    text-shadow: rgb(18, 219, 18) 1px 1px 3px;\n}\n\n.turquoise {\n    text-shadow: rgb(8, 221, 210) 1px 1px 3px;\n}\n\n.image-container {\n    height: 732px;\n    position: relative;\n}\n\n.screen,\n.win {\n    background-color: rgb(0, 0, 0, 0.75);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.win {\n    display: none;\n}\n\n.message {\n    border-radius: 20px;\n    background-color: rgb(215, 255, 205);\n    text-align: center;\n    padding: 10px 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.message form {\n    display: flex;\n    gap: 7px;\n    align-items: center;\n}\n\n.message label,\n.message input,\n.message button {\n    font-size: 1.25rem;\n    font-style: italic;\n}\n\n.time-message {\n    font-size: 1.25rem;\n}\n\ninput {\n    padding: 2px 7px;\n    border-radius: 10px;\n    border: black 1px solid;\n}\n\n.message button {\n    padding: 3px 8px;\n    border-radius: 12px;\n    border: black 1px solid;\n    font-style: normal;\n}\n\n.room {\n    height: 732px;\n    width: auto;\n}\n\n.saxophone {\n    position: absolute;\n    height: 100px;\n    right: 45px;\n    top: 235px;\n}\n\n.fan {\n    position: absolute;\n    height: 45px;\n    right: 305px;\n    top: 105px;\n}\n\n.butterfly {\n    position: absolute;\n    height: 45px;\n    right: 445px;\n    top: 280px;\n}\n\n.butterfly {\n    position: absolute;\n    height: 40px;\n    right: 90px;\n    top: 95px;\n}\n\n.bug {\n    position: absolute;\n    height: 55px;\n    right: 488px;\n    top: 170px;\n}\n\n.key {\n    position: absolute;\n    height: 55px;\n    right: 850px;\n    top: 250px;\n}\n\n.turtle {\n    position: absolute;\n    height: 55px;\n    right: 150px;\n    top: 600px;\n}\n\n.hourglass {\n    position: absolute;\n    height: 55px;\n    right: 930px;\n    top: 490px;\n}\n\n.hourglass {\n    position: absolute;\n    height: 55px;\n    right: 978px;\n    top: 182px;\n}\n\n.hat {\n    position: absolute;\n    height: 50px;\n    right: 200px;\n    top: 470px;\n}\n\n.lamp {\n    position: absolute;\n    height: 50px;\n    right: 90px;\n    top: 340px;\n}\n\n.card {\n    position: absolute;\n    height: 32px;\n    right: 633px;\n    top: 53px;\n}\n\n.milk {\n    position: absolute;\n    height: 60px;\n    right: 513px;\n    top: 417px;\n}\n\n.scallions {\n    position: absolute;\n    height: 60px;\n    right: 512px;\n    top: 275px;\n}\n\n.cheese {\n    position: absolute;\n    height: 35px;\n    right: 517px;\n    top: 513px;\n}\n\n.brooch {\n    position: absolute;\n    height: 25px;\n    right: 1008px;\n    top: 508px;\n}\n\n.form-container {\n    display: none;\n    position: absolute;\n    padding: 5px 7px;\n    background-color: rgb(215, 255, 205);\n    border-radius: 10px;\n}\n\n.select-object {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 7px;\n    font-style: italic;\n}\n\nselect {\n    font-style: italic;\n    font-size: 1rem;\n}\n\nform button {\n    background-color: rgb(179, 255, 160);\n}\n\nform button:hover {\n    background-color: rgb(116, 255, 81);\n}\n\n.select-object button {\n    padding: 1px 3px;\n    border: black 1px solid;\n    border-radius: 2px;\n}\n\n.start {\n    padding: 10px 30px;\n    font-size: 2.5rem;\n    border-radius: 40px;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    background-color: antiquewhite;\n    border: none;\n}\n\n.detective {\n    height: 60px;\n}\n\n.restart {\n    font-size: 1.2rem;\n    border-radius: 20px;\n    padding: 5px 15px;\n    background-color: antiquewhite;\n    border: black 1px solid;\n}\n\n.start:hover,\n.restart:hover {\n    background-color: rgb(247, 216, 176);\n}\n\n.best-scores {\n    background-color: antiquewhite;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 10px;\n    border: 1px black solid;\n    max-width: 320px;\n}\n\nol {\n    background-color: rgb(255, 250, 244);\n    padding: 3px 5px;\n    overflow-y: scroll;\n    height: 90px;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\nli {\n    list-style-position: inside;\n}\n\nh2 {\n    text-align: center;\n}\n\na {\n    color: black;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Times New Roman', Times, serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader,\nfooter {\n    background-color: antiquewhite;\n    padding: 5px;\n}\n\nh1,\nfooter {\n    text-align: center;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding: 20px 100px;\n    background-color: rgb(255, 250, 244);\n}\n\n.description {\n    text-align: center;\n    font-size: 1.3rem;\n}\n\n.bold {\n    font-weight: bold;\n    font-style: normal;\n}\n\nspan {\n    font-weight: normal;\n    font-style: italic;\n}\n\n.yellow {\n    text-shadow: yellow 1px 1px 3px;\n}\n\n.orange {\n    text-shadow: rgb(255, 136, 0) 1px 1px 3px;\n}\n\n.red {\n    text-shadow: red 1px 1px 3px;\n}\n\n.sand {\n    text-shadow: rgb(168, 141, 82) 1px 1px 3px;\n}\n\n.grey {\n    text-shadow: grey 1px 1px 3px;\n}\n\n.green {\n    text-shadow: rgb(18, 219, 18) 1px 1px 3px;\n}\n\n.turquoise {\n    text-shadow: rgb(8, 221, 210) 1px 1px 3px;\n}\n\n.image-container {\n    height: 732px;\n    position: relative;\n}\n\n.screen,\n.win {\n    background-color: rgb(0, 0, 0, 0.75);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.win {\n    display: none;\n}\n\n.message {\n    border-radius: 20px;\n    background-color: rgb(215, 255, 205);\n    text-align: center;\n    padding: 10px 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.message form {\n    display: flex;\n    gap: 7px;\n    align-items: center;\n}\n\n.message label,\n.message input,\n.message button {\n    font-size: 1.25rem;\n    font-style: italic;\n}\n\n.time-message {\n    font-size: 1.25rem;\n}\n\ninput {\n    padding: 2px 7px;\n    border-radius: 10px;\n    border: black 1px solid;\n}\n\n.message button {\n    padding: 3px 8px;\n    border-radius: 12px;\n    border: black 1px solid;\n    font-style: normal;\n}\n\n.room {\n    height: 732px;\n    width: auto;\n}\n\n.saxophone {\n    position: absolute;\n    height: 100px;\n    right: 45px;\n    top: 235px;\n}\n\n.fan {\n    position: absolute;\n    height: 45px;\n    right: 305px;\n    top: 105px;\n}\n\n.butterfly {\n    position: absolute;\n    height: 45px;\n    right: 445px;\n    top: 280px;\n}\n\n.butterfly {\n    position: absolute;\n    height: 40px;\n    right: 90px;\n    top: 95px;\n}\n\n.bug {\n    position: absolute;\n    height: 55px;\n    right: 488px;\n    top: 170px;\n}\n\n.key {\n    position: absolute;\n    height: 55px;\n    right: 850px;\n    top: 250px;\n}\n\n.turtle {\n    position: absolute;\n    height: 55px;\n    right: 150px;\n    top: 600px;\n}\n\n.hourglass {\n    position: absolute;\n    height: 55px;\n    right: 930px;\n    top: 490px;\n}\n\n.hourglass {\n    position: absolute;\n    height: 55px;\n    right: 978px;\n    top: 182px;\n}\n\n.hat {\n    position: absolute;\n    height: 50px;\n    right: 200px;\n    top: 470px;\n}\n\n.lamp {\n    position: absolute;\n    height: 50px;\n    right: 90px;\n    top: 340px;\n}\n\n.card {\n    position: absolute;\n    height: 32px;\n    right: 633px;\n    top: 53px;\n}\n\n.milk {\n    position: absolute;\n    height: 60px;\n    right: 513px;\n    top: 417px;\n}\n\n.scallions {\n    position: absolute;\n    height: 60px;\n    right: 512px;\n    top: 275px;\n}\n\n.cheese {\n    position: absolute;\n    height: 35px;\n    right: 517px;\n    top: 513px;\n}\n\n.brooch {\n    position: absolute;\n    height: 25px;\n    right: 1008px;\n    top: 508px;\n}\n\n.form-container {\n    display: none;\n    position: absolute;\n    padding: 5px 7px;\n    background-color: rgb(215, 255, 205);\n    border-radius: 10px;\n}\n\n.select-object {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 7px;\n    font-style: italic;\n}\n\nselect {\n    font-style: italic;\n    font-size: 1rem;\n}\n\nform button {\n    background-color: rgb(179, 255, 160);\n}\n\nform button:hover {\n    background-color: rgb(116, 255, 81);\n}\n\n.select-object button {\n    padding: 1px 3px;\n    border: black 1px solid;\n    border-radius: 2px;\n}\n\n.start {\n    padding: 10px 30px;\n    font-size: 2.5rem;\n    border-radius: 40px;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    background-color: antiquewhite;\n    border: none;\n}\n\n.detective {\n    height: 60px;\n}\n\n.restart {\n    font-size: 1.2rem;\n    border-radius: 20px;\n    padding: 5px 15px;\n    background-color: antiquewhite;\n    border: black 1px solid;\n}\n\n.start:hover,\n.restart:hover {\n    background-color: rgb(247, 216, 176);\n}\n\n.best-scores {\n    background-color: antiquewhite;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 10px;\n    border: 1px black solid;\n    max-width: 320px;\n}\n\nol {\n    background-color: rgb(255, 250, 244);\n    padding: 3px 5px;\n    overflow-y: scroll;\n    height: 90px;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\nli {\n    list-style-position: inside;\n}\n\nh2 {\n    text-align: center;\n}\n\na {\n    color: black;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE
};

var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
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
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


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
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/differenceInSeconds */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");



const formContainer = document.querySelector(".form-container");
const screen = document.querySelector(".screen");
const win = document.querySelector(".win");

let chosenObject;
let player;

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
    img.addEventListener("click", (e) => {
        console.log("clicked", e.target.className);
        chosenObject = e.target.className;
        formContainer.style.display = "block";
        formContainer.style.left = e.pageX + 12 + "px";
        formContainer.style.top = e.pageY + 12 + "px";
    });
});

document.addEventListener("click", (e) => {
    const imageContainer = document.querySelector(".image-container");
    if (!imageContainer.contains(e.target) && !formContainer.contains(e.target)) {
        formContainer.style.display = "none";
    };
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
    formContainer.style.display = "none";
});

function countTime(time) {
    if (time > 60) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (minutes == 1) {
            if (seconds == 1) {
                return `1 minute 1 second`
            };
            return `1 minute ${seconds} seconds`
        };
        if (seconds == 1) {
            return `${minutes} minutes 1 second`
        };
        return `${minutes} minutes ${seconds} seconds`
    };
    return `${time} seconds`;
};

const selectObjectForm = document.querySelector(".select-object");
selectObjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const select = document.getElementById("hidden-object");
    console.log("selected", select.value);
    formContainer.style.display = "none";
    if (chosenObject == select.value && player[chosenObject] == false) {
        const hidden = document.querySelector(`.${chosenObject}`);
        hidden.style.border = "solid rgb(116, 255, 81) 2px";
        hidden.style.borderRadius = "6px";

        player[chosenObject] = true;
        player.score += 1;
        console.log(player);

        if (player.score == 2) {
            console.log("You won!");
            win.style.display = "flex";

            player.finish = Date.now();
            player.time = (0,date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_1__["default"])(player.finish, player.start);
            console.log(player.time);
            const timeString = countTime(player.time);

            const timeMessage = document.querySelector(".time-message");
            timeMessage.textContent = `You found all items in ${timeString}.`;
        };
    };
});

function createNewPlayer() {
    player = {
        saxophone: false,
        fan: false,
        butterfly: false,
        bug: false,
        key: false,
        turtle: false,
        hourglass: false,
        hat: false,
        lamp: false,
        card: false,
        milk: false,
        scallions: false,
        cheese: false,
        brooch: false,
        start: Date.now(),
        finish: undefined,
        time: 0,
        score: 0,
    };
}

const start = document.querySelector(".start");
start.addEventListener("click", () => {
    screen.style.display = "none";
    createNewPlayer();
});

function startANewGame() {
    win.style.display = "none";
    formContainer.style.display = "none";
    imgs.forEach((img) => {
        img.style.border = "none";
        img.style.borderRadius = "0";
    });
    createNewPlayer();
    console.log(player);
};

const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
    screen.style.display = "none";
    startANewGame();
});

const enterNameForm = document.querySelector(".enter-name");
enterNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    startANewGame();
    screen.style.display = "flex";
    enterNameForm.reset();
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    startANewGame();
    screen.style.display = "flex";
    enterNameForm.reset();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4QztBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQSxrQkFBa0IsU0FBUyxVQUFVLFNBQVM7QUFDOUM7QUFDQSxjQUFjLE1BQU07QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHdFQUFtQjtBQUM3QztBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFLFdBQVc7QUFDM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaWRkZW4tb2JqZWN0LWdhbWUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9oaWRkZW4tb2JqZWN0LWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGlkZGVuLW9iamVjdC1nYW1lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oaWRkZW4tb2JqZWN0LWdhbWUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oaWRkZW4tb2JqZWN0LWdhbWUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGlkZGVuLW9iamVjdC1nYW1lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGlkZGVuLW9iamVjdC1nYW1lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9oaWRkZW4tb2JqZWN0LWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaGlkZGVuLW9iamVjdC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9oaWRkZW4tb2JqZWN0LWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaGlkZGVuLW9iamVjdC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vaGlkZGVuLW9iamVjdC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oaWRkZW4tb2JqZWN0LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hpZGRlbi1vYmplY3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaGlkZGVuLW9iamVjdC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5oMSxcXG5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTAsIDI0NCk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnllbGxvdyB7XFxuICAgIHRleHQtc2hhZG93OiB5ZWxsb3cgMXB4IDFweCAzcHg7XFxufVxcblxcbi5vcmFuZ2Uge1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiKDI1NSwgMTM2LCAwKSAxcHggMXB4IDNweDtcXG59XFxuXFxuLnJlZCB7XFxuICAgIHRleHQtc2hhZG93OiByZWQgMXB4IDFweCAzcHg7XFxufVxcblxcbi5zYW5kIHtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYigxNjgsIDE0MSwgODIpIDFweCAxcHggM3B4O1xcbn1cXG5cXG4uZ3JleSB7XFxuICAgIHRleHQtc2hhZG93OiBncmV5IDFweCAxcHggM3B4O1xcbn1cXG5cXG4uZ3JlZW4ge1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiKDE4LCAyMTksIDE4KSAxcHggMXB4IDNweDtcXG59XFxuXFxuLnR1cnF1b2lzZSB7XFxuICAgIHRleHQtc2hhZG93OiByZ2IoOCwgMjIxLCAyMTApIDFweCAxcHggM3B4O1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3MzJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2NyZWVuLFxcbi53aW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43NSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLndpbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjU1LCAyMDUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVzc2FnZSBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZXNzYWdlIGxhYmVsLFxcbi5tZXNzYWdlIGlucHV0LFxcbi5tZXNzYWdlIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGltZS1tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDJweCA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcbn1cXG5cXG4ubWVzc2FnZSBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4ucm9vbSB7XFxuICAgIGhlaWdodDogNzMycHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc2F4b3Bob25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICByaWdodDogNDVweDtcXG4gICAgdG9wOiAyMzVweDtcXG59XFxuXFxuLmZhbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICByaWdodDogMzA1cHg7XFxuICAgIHRvcDogMTA1cHg7XFxufVxcblxcbi5idXR0ZXJmbHkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgcmlnaHQ6IDQ0NXB4O1xcbiAgICB0b3A6IDI4MHB4O1xcbn1cXG5cXG4uYnV0dGVyZmx5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHJpZ2h0OiA5MHB4O1xcbiAgICB0b3A6IDk1cHg7XFxufVxcblxcbi5idWcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgcmlnaHQ6IDQ4OHB4O1xcbiAgICB0b3A6IDE3MHB4O1xcbn1cXG5cXG4ua2V5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIHJpZ2h0OiA4NTBweDtcXG4gICAgdG9wOiAyNTBweDtcXG59XFxuXFxuLnR1cnRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICByaWdodDogMTUwcHg7XFxuICAgIHRvcDogNjAwcHg7XFxufVxcblxcbi5ob3VyZ2xhc3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgcmlnaHQ6IDkzMHB4O1xcbiAgICB0b3A6IDQ5MHB4O1xcbn1cXG5cXG4uaG91cmdsYXNzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIHJpZ2h0OiA5NzhweDtcXG4gICAgdG9wOiAxODJweDtcXG59XFxuXFxuLmhhdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICByaWdodDogMjAwcHg7XFxuICAgIHRvcDogNDcwcHg7XFxufVxcblxcbi5sYW1wIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHJpZ2h0OiA5MHB4O1xcbiAgICB0b3A6IDM0MHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICByaWdodDogNjMzcHg7XFxuICAgIHRvcDogNTNweDtcXG59XFxuXFxuLm1pbGsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcmlnaHQ6IDUxM3B4O1xcbiAgICB0b3A6IDQxN3B4O1xcbn1cXG5cXG4uc2NhbGxpb25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHJpZ2h0OiA1MTJweDtcXG4gICAgdG9wOiAyNzVweDtcXG59XFxuXFxuLmNoZWVzZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICByaWdodDogNTE3cHg7XFxuICAgIHRvcDogNTEzcHg7XFxufVxcblxcbi5icm9vY2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcmlnaHQ6IDEwMDhweDtcXG4gICAgdG9wOiA1MDhweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyNTUsIDIwNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zZWxlY3Qtb2JqZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDdweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAyNTUsIDE2MCk7XFxufVxcblxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMjU1LCA4MSk7XFxufVxcblxcbi5zZWxlY3Qtb2JqZWN0IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDFweCAzcHg7XFxuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zdGFydCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZXRlY3RpdmUge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcbn1cXG5cXG4uc3RhcnQ6aG92ZXIsXFxuLnJlc3RhcnQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMTYsIDE3Nik7XFxufVxcblxcbi5iZXN0LXNjb3JlcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG59XFxuXFxub2wge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTAsIDI0NCk7XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxufVxcblxcbmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1C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QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmgxLFxcbmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MCwgMjQ0KTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ueWVsbG93IHtcXG4gICAgdGV4dC1zaGFkb3c6IHllbGxvdyAxcHggMXB4IDNweDtcXG59XFxuXFxuLm9yYW5nZSB7XFxuICAgIHRleHQtc2hhZG93OiByZ2IoMjU1LCAxMzYsIDApIDFweCAxcHggM3B4O1xcbn1cXG5cXG4ucmVkIHtcXG4gICAgdGV4dC1zaGFkb3c6IHJlZCAxcHggMXB4IDNweDtcXG59XFxuXFxuLnNhbmQge1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiKDE2OCwgMTQxLCA4MikgMXB4IDFweCAzcHg7XFxufVxcblxcbi5ncmV5IHtcXG4gICAgdGV4dC1zaGFkb3c6IGdyZXkgMXB4IDFweCAzcHg7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIHRleHQtc2hhZG93OiByZ2IoMTgsIDIxOSwgMTgpIDFweCAxcHggM3B4O1xcbn1cXG5cXG4udHVycXVvaXNlIHtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYig4LCAyMjEsIDIxMCkgMXB4IDFweCAzcHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDczMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zY3JlZW4sXFxuLndpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjc1KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2luIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyNTUsIDIwNSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZXNzYWdlIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lc3NhZ2UgbGFiZWwsXFxuLm1lc3NhZ2UgaW5wdXQsXFxuLm1lc3NhZ2UgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50aW1lLW1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMnB4IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxufVxcblxcbi5tZXNzYWdlIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDNweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5yb29tIHtcXG4gICAgaGVpZ2h0OiA3MzJweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5zYXhvcGhvbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHJpZ2h0OiA0NXB4O1xcbiAgICB0b3A6IDIzNXB4O1xcbn1cXG5cXG4uZmFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHJpZ2h0OiAzMDVweDtcXG4gICAgdG9wOiAxMDVweDtcXG59XFxuXFxuLmJ1dHRlcmZseSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICByaWdodDogNDQ1cHg7XFxuICAgIHRvcDogMjgwcHg7XFxufVxcblxcbi5idXR0ZXJmbHkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcmlnaHQ6IDkwcHg7XFxuICAgIHRvcDogOTVweDtcXG59XFxuXFxuLmJ1ZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICByaWdodDogNDg4cHg7XFxuICAgIHRvcDogMTcwcHg7XFxufVxcblxcbi5rZXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgcmlnaHQ6IDg1MHB4O1xcbiAgICB0b3A6IDI1MHB4O1xcbn1cXG5cXG4udHVydGxlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIHJpZ2h0OiAxNTBweDtcXG4gICAgdG9wOiA2MDBweDtcXG59XFxuXFxuLmhvdXJnbGFzcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICByaWdodDogOTMwcHg7XFxuICAgIHRvcDogNDkwcHg7XFxufVxcblxcbi5ob3VyZ2xhc3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgcmlnaHQ6IDk3OHB4O1xcbiAgICB0b3A6IDE4MnB4O1xcbn1cXG5cXG4uaGF0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHJpZ2h0OiAyMDBweDtcXG4gICAgdG9wOiA0NzBweDtcXG59XFxuXFxuLmxhbXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcmlnaHQ6IDkwcHg7XFxuICAgIHRvcDogMzQwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHJpZ2h0OiA2MzNweDtcXG4gICAgdG9wOiA1M3B4O1xcbn1cXG5cXG4ubWlsayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICByaWdodDogNTEzcHg7XFxuICAgIHRvcDogNDE3cHg7XFxufVxcblxcbi5zY2FsbGlvbnMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcmlnaHQ6IDUxMnB4O1xcbiAgICB0b3A6IDI3NXB4O1xcbn1cXG5cXG4uY2hlZXNlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHJpZ2h0OiA1MTdweDtcXG4gICAgdG9wOiA1MTNweDtcXG59XFxuXFxuLmJyb29jaCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICByaWdodDogMTAwOHB4O1xcbiAgICB0b3A6IDUwOHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDVweCA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDI1NSwgMjA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNlbGVjdC1vYmplY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogN3B4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDI1NSwgMTYwKTtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAyNTUsIDgxKTtcXG59XFxuXFxuLnNlbGVjdC1vYmplY3QgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMXB4IDNweDtcXG4gICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRldGVjdGl2ZSB7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxufVxcblxcbi5zdGFydDpob3ZlcixcXG4ucmVzdGFydDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIxNiwgMTc2KTtcXG59XFxuXFxuLmJlc3Qtc2NvcmVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xcbn1cXG5cXG5vbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MCwgMjQ0KTtcXG4gICAgcGFkZGluZzogM3B4IDVweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcXG59XFxuXFxuaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG59O1xuXG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJblNlY29uZHMnXG5cbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW5cIik7XG5jb25zdCB3aW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpblwiKTtcblxubGV0IGNob3Nlbk9iamVjdDtcbmxldCBwbGF5ZXI7XG5cbmNvbnN0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xuaW1ncy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiLCBlLnRhcmdldC5jbGFzc05hbWUpO1xuICAgICAgICBjaG9zZW5PYmplY3QgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArIDEyICsgXCJweFwiO1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnRvcCA9IGUucGFnZVkgKyAxMiArIFwicHhcIjtcbiAgICB9KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2UtY29udGFpbmVyXCIpO1xuICAgIGlmICghaW1hZ2VDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmICFmb3JtQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xufSk7XG5cbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuZnVuY3Rpb24gY291bnRUaW1lKHRpbWUpIHtcbiAgICBpZiAodGltZSA+IDYwKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IHRpbWUgJSA2MDtcbiAgICAgICAgaWYgKG1pbnV0ZXMgPT0gMSkge1xuICAgICAgICAgICAgaWYgKHNlY29uZHMgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgMSBtaW51dGUgMSBzZWNvbmRgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGAxIG1pbnV0ZSAke3NlY29uZHN9IHNlY29uZHNgXG4gICAgICAgIH07XG4gICAgICAgIGlmIChzZWNvbmRzID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHttaW51dGVzfSBtaW51dGVzIDEgc2Vjb25kYFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYCR7bWludXRlc30gbWludXRlcyAke3NlY29uZHN9IHNlY29uZHNgXG4gICAgfTtcbiAgICByZXR1cm4gYCR7dGltZX0gc2Vjb25kc2A7XG59O1xuXG5jb25zdCBzZWxlY3RPYmplY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Qtb2JqZWN0XCIpO1xuc2VsZWN0T2JqZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRkZW4tb2JqZWN0XCIpO1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRcIiwgc2VsZWN0LnZhbHVlKTtcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBpZiAoY2hvc2VuT2JqZWN0ID09IHNlbGVjdC52YWx1ZSAmJiBwbGF5ZXJbY2hvc2VuT2JqZWN0XSA9PSBmYWxzZSkge1xuICAgICAgICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaG9zZW5PYmplY3R9YCk7XG4gICAgICAgIGhpZGRlbi5zdHlsZS5ib3JkZXIgPSBcInNvbGlkIHJnYigxMTYsIDI1NSwgODEpIDJweFwiO1xuICAgICAgICBoaWRkZW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcblxuICAgICAgICBwbGF5ZXJbY2hvc2VuT2JqZWN0XSA9IHRydWU7XG4gICAgICAgIHBsYXllci5zY29yZSArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuc2NvcmUgPT0gMikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3Ugd29uIVwiKTtcbiAgICAgICAgICAgIHdpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgICAgICAgIHBsYXllci5maW5pc2ggPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgcGxheWVyLnRpbWUgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKHBsYXllci5maW5pc2gsIHBsYXllci5zdGFydCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIudGltZSk7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gY291bnRUaW1lKHBsYXllci50aW1lKTtcblxuICAgICAgICAgICAgY29uc3QgdGltZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtbWVzc2FnZVwiKTtcbiAgICAgICAgICAgIHRpbWVNZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdSBmb3VuZCBhbGwgaXRlbXMgaW4gJHt0aW1lU3RyaW5nfS5gO1xuICAgICAgICB9O1xuICAgIH07XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3UGxheWVyKCkge1xuICAgIHBsYXllciA9IHtcbiAgICAgICAgc2F4b3Bob25lOiBmYWxzZSxcbiAgICAgICAgZmFuOiBmYWxzZSxcbiAgICAgICAgYnV0dGVyZmx5OiBmYWxzZSxcbiAgICAgICAgYnVnOiBmYWxzZSxcbiAgICAgICAga2V5OiBmYWxzZSxcbiAgICAgICAgdHVydGxlOiBmYWxzZSxcbiAgICAgICAgaG91cmdsYXNzOiBmYWxzZSxcbiAgICAgICAgaGF0OiBmYWxzZSxcbiAgICAgICAgbGFtcDogZmFsc2UsXG4gICAgICAgIGNhcmQ6IGZhbHNlLFxuICAgICAgICBtaWxrOiBmYWxzZSxcbiAgICAgICAgc2NhbGxpb25zOiBmYWxzZSxcbiAgICAgICAgY2hlZXNlOiBmYWxzZSxcbiAgICAgICAgYnJvb2NoOiBmYWxzZSxcbiAgICAgICAgc3RhcnQ6IERhdGUubm93KCksXG4gICAgICAgIGZpbmlzaDogdW5kZWZpbmVkLFxuICAgICAgICB0aW1lOiAwLFxuICAgICAgICBzY29yZTogMCxcbiAgICB9O1xufVxuXG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIik7XG5zdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY3JlYXRlTmV3UGxheWVyKCk7XG59KTtcblxuZnVuY3Rpb24gc3RhcnRBTmV3R2FtZSgpIHtcbiAgICB3aW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGltZ3MuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgIGltZy5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgaW1nLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMFwiO1xuICAgIH0pO1xuICAgIGNyZWF0ZU5ld1BsYXllcigpO1xuICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG59O1xuXG5jb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0XCIpO1xucmVzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgc3RhcnRBTmV3R2FtZSgpO1xufSk7XG5cbmNvbnN0IGVudGVyTmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVudGVyLW5hbWVcIik7XG5lbnRlck5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3RhcnRBTmV3R2FtZSgpO1xuICAgIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZW50ZXJOYW1lRm9ybS5yZXNldCgpO1xufSk7XG5cbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3RhcnRBTmV3R2FtZSgpO1xuICAgIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZW50ZXJOYW1lRm9ybS5yZXNldCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=