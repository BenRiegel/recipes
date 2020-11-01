/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/controller/Controller.js":
/*!**************************************!*\
  !*** ./app/controller/Controller.js ***!
  \**************************************/
/*! namespace exports */
/*! export initApp [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initApp\": () => /* binding */ initApp\n/* harmony export */ });\n/* harmony import */ var _subcontrollers_ViewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcontrollers/ViewController.js */ \"./app/controller/subcontrollers/ViewController.js\");\n//imports ----------------------------------------------------------------------\n\n\n//import * as modelController from './subcontrollers/ModelController.js';\n\n//module code block ------------------------------------------------------------\n\n/*\nviewController.addListener('search', async (criteria) => {\n  viewController.disableSearch();\n  await modelController.getRecipes(criteria);\n  viewController.enableSearch();\n});\n\n*/\n\n\n//exports ----------------------------------------------------------------------\n\nasync function initApp(){\n  await _subcontrollers_ViewController_js__WEBPACK_IMPORTED_MODULE_0__.loadMenuOptions();\n}\n\n\n//# sourceURL=webpack://recipes/./app/controller/Controller.js?");

/***/ }),

/***/ "./app/controller/subcontrollers/ViewController.js":
/*!*********************************************************!*\
  !*** ./app/controller/subcontrollers/ViewController.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export loadMenuOptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuOptions\": () => /* binding */ loadMenuOptions\n/* harmony export */ });\n/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils.js */ \"./app/utils/Utils.js\");\n/* harmony import */ var _view_View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/View.js */ \"./app/view/View.js\");\n//imports ----------------------------------------------------------------------\n\n\n\n\n\n//module code block ------------------------------------------------------------\n\nvar loadSecondaryMenu = async function(primaryValue){\n  _view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.secondarySelect.removeOptions();\n  var secondaryOpts = await (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.getFromServer)('get_secondary', {primaryValue} );\n  _view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.secondarySelect.addOptions(secondaryOpts.options);\n}\n\n//probably need an emitter here\n_view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.searchButton.addClickListener( () => {\n  var primaryValue = _view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.primarySelect.getValue();\n  var secondaryValue = _view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.secondarySelect.getValue();\n  var searchValue = _view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.ingredient.getValue();\n  var checkedTags = _view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.tagsContainer.getCheckedTags();\n  console.log(primaryValue);\n  console.log(secondaryValue);\n  console.log(searchValue);\n  console.log(checkedTags);\n});\n\n_view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.primarySelect.addChangeListener(loadSecondaryMenu);\n\n\n//exports ----------------------------------------------------------------------\n\nfunction loadMenuOptions(){\n  var primaryOptsProm = (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.getFromServer)('get_primary');\n  var tagsProm = (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.getFromServer)('get_tags');\n  return Promise.all([primaryOptsProm, tagsProm]).then((values) => {\n    var [primaryOptsData, tagsData] = values;\n    _view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.primarySelect.addOptions(primaryOptsData.options);\n    _view_View_js__WEBPACK_IMPORTED_MODULE_0__.default.nodes.tagsContainer.addTags(tagsData.tags);\n  });\n}\n\n\n//# sourceURL=webpack://recipes/./app/controller/subcontrollers/ViewController.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/Controller.js */ \"./app/controller/Controller.js\");\n/* harmony import */ var _view_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/stylesheets/index.scss */ \"./app/view/stylesheets/index.scss\");\n\n//imports ----------------------------------------------------------------------\n\n\n\n\n\n//module code block ------------------------------------------------------------\n\n(0,_controller_Controller_js__WEBPACK_IMPORTED_MODULE_0__.initApp)();\n\n\n//# sourceURL=webpack://recipes/./app/index.js?");

/***/ }),

/***/ "./app/utils/Utils.js":
/*!****************************!*\
  !*** ./app/utils/Utils.js ***!
  \****************************/
/*! namespace exports */
/*! export getFromServer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFromServer\": () => /* binding */ getFromServer\n/* harmony export */ });\n\n\n\n\n//exports ----------------------------------------------------------------------\n\n\n\nfunction getFromServer(route, postData){\n\n  var configObj = {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"Accept\": \"application/json\"\n    },\n    body: JSON.stringify(postData),\n  };\n\n  return new Promise(async resolve => {\n    var response = await fetch(`http://localhost:8081/${route}`, configObj);\n    var responseData = await response.json();\n    resolve(responseData);\n  });\n}\n\n\n//# sourceURL=webpack://recipes/./app/utils/Utils.js?");

/***/ }),

/***/ "./app/view/View.js":
/*!**************************!*\
  !*** ./app/view/View.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _nodes_PrimarySelectNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes/PrimarySelectNode.js */ \"./app/view/nodes/PrimarySelectNode.js\");\n/* harmony import */ var _nodes_SecondarySelectNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/SecondarySelectNode.js */ \"./app/view/nodes/SecondarySelectNode.js\");\n/* harmony import */ var _nodes_IngredientSearchNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes/IngredientSearchNode.js */ \"./app/view/nodes/IngredientSearchNode.js\");\n/* harmony import */ var _nodes_SearchButtonNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodes/SearchButtonNode.js */ \"./app/view/nodes/SearchButtonNode.js\");\n/* harmony import */ var _nodes_TagsContainerNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodes/TagsContainerNode.js */ \"./app/view/nodes/TagsContainerNode.js\");\n//imports ----------------------------------------------------------------------\n\n\n\n\n\n\n\n\n\n//exports ----------------------------------------------------------------------\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n  nodes: {primarySelect: _nodes_PrimarySelectNode_js__WEBPACK_IMPORTED_MODULE_0__.default, secondarySelect: _nodes_SecondarySelectNode_js__WEBPACK_IMPORTED_MODULE_1__.default, ingredient: _nodes_IngredientSearchNode_js__WEBPACK_IMPORTED_MODULE_2__.default, tagsContainer: _nodes_TagsContainerNode_js__WEBPACK_IMPORTED_MODULE_4__.default, searchButton: _nodes_SearchButtonNode_js__WEBPACK_IMPORTED_MODULE_3__.default},\n\n});\n\n\n//# sourceURL=webpack://recipes/./app/view/View.js?");

/***/ }),

/***/ "./app/view/nodes/IngredientSearchNode.js":
/*!************************************************!*\
  !*** ./app/view/nodes/IngredientSearchNode.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//imports ----------------------------------------------------------------------\n\n//import '../stylesheets/root.scss';\n\n\n//module code block ------------------------------------------------------------\n\nvar node = document.getElementById('ingredient-search');\n\n\n//exports ----------------------------------------------------------------------\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n  node,\n\n  getValue: function(){\n    return this.node.value;\n  },\n\n});\n\n\n//# sourceURL=webpack://recipes/./app/view/nodes/IngredientSearchNode.js?");

/***/ }),

/***/ "./app/view/nodes/PrimarySelectNode.js":
/*!*********************************************!*\
  !*** ./app/view/nodes/PrimarySelectNode.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//imports ----------------------------------------------------------------------\n\n//import '../stylesheets/root.scss';\n\n\n//module code block ------------------------------------------------------------\n\nvar node = document.getElementById('primary-select');\n\n\n//exports ----------------------------------------------------------------------\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n  node,\n\n  addOptions: function(options){\n    for (let i = 0; i < options.length; i++){\n      var option = document.createElement('option');\n      option.text = options[i].id;\n      this.node.add(option);\n    }\n  },\n\n  getValue: function(){\n    return this.node.value;\n  },\n\n  addChangeListener: function(listener){\n    this.node.addEventListener('change', async () => {\n      await listener(this.node.value);\n    });\n  },\n\n});\n\n\n//# sourceURL=webpack://recipes/./app/view/nodes/PrimarySelectNode.js?");

/***/ }),

/***/ "./app/view/nodes/SearchButtonNode.js":
/*!********************************************!*\
  !*** ./app/view/nodes/SearchButtonNode.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//imports ----------------------------------------------------------------------\n\n//import '../stylesheets/root.scss';\n\n\n//module code block ------------------------------------------------------------\n\nvar node = document.getElementById('search-button');\n\n\n//exports ----------------------------------------------------------------------\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n  node,\n\n  addClickListener: function(listener){\n    this.node.addEventListener('click', evt => {\n      listener();\n    });\n  },\n\n});\n\n\n//# sourceURL=webpack://recipes/./app/view/nodes/SearchButtonNode.js?");

/***/ }),

/***/ "./app/view/nodes/SecondarySelectNode.js":
/*!***********************************************!*\
  !*** ./app/view/nodes/SecondarySelectNode.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//imports ----------------------------------------------------------------------\n\n//import '../stylesheets/root.scss';\n\n\n//module code block ------------------------------------------------------------\n\nvar node = document.getElementById('secondary-select');\n\n\n//exports ----------------------------------------------------------------------\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n  node,\n\n  addOptions: function(options){\n    for (let i = 0; i < options.length; i++){\n      var option = document.createElement('option');\n      option.text = options[i].id;\n      this.node.add(option);\n    }\n  },\n\n  removeOptions: function(){\n    var numOptions = this.node.options.length;\n    for (var i = 1; i < numOptions; i++){\n      this.node.remove(1);\n    }\n  },\n\n  getValue: function(){\n    return this.node.value;\n  },\n\n});\n\n\n//# sourceURL=webpack://recipes/./app/view/nodes/SecondarySelectNode.js?");

/***/ }),

/***/ "./app/view/nodes/TagsContainerNode.js":
/*!*********************************************!*\
  !*** ./app/view/nodes/TagsContainerNode.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//imports ----------------------------------------------------------------------\n\n//import '../stylesheets/root.scss';\n\n\n//module code block ------------------------------------------------------------\n\nvar tags;\n\nvar node = document.getElementById('tags-container');\n\n\n//exports ----------------------------------------------------------------------\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n  node,\n\n  addTags: function(tagsList){\n    var htmlStr = '';\n    for (let i = 0; i < tagsList.length; i++){\n      htmlStr +=\n      `<div class='checkbox-item'>\n         <input type='checkbox' class='checkbox' id='tag${i}' name='${tagsList[i].id}'>\n         <label for='tag1'>${tagsList[i].id}</label><br>\n      </div>`\n    }\n    this.node.innerHTML = htmlStr;\n  },\n\n  getCheckedTags: function(){\n    var checkedTags = [];\n    var tagNodes = this.node.getElementsByClassName('checkbox');\n    for (var i = 0; i < tagNodes.length; i++){\n      if (tagNodes[i].checked){\n        checkedTags.push(tagNodes[i].name);\n      }\n    }\n    return checkedTags;\n  },\n\n  getValue: function(){\n    return this.node.value;\n  },\n\n});\n\n\n//# sourceURL=webpack://recipes/./app/view/nodes/TagsContainerNode.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/view/stylesheets/index.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/view/stylesheets/index.scss ***!
  \**********************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"main {\\n  position: absolute;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%; }\\n\\nheader {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-grow: 0;\\n  width: 100%;\\n  height: 100px;\\n  /*background-image: linear-gradient(to right, rgba(255, 255, 255, 0.025) 10%, rgba(255, 255, 255, 0) 10%),\\n                    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 10%, rgba(255, 255, 255, 0) 10%),\\n                    linear-gradient(rgb(25, 68, 104), rgb(51, 102, 153));\\n  background-size: 10px 10px, 10px 10px, auto;\\n  background-repeat: repeat;*/ }\\n\\n#container {\\n  display: flex;\\n  flex-direction: row;\\n  flex-grow: 1;\\n  border: 1px solid red;\\n  width: 800px; }\\n\\n#menu-bar {\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid black; }\\n\\n.item-container {\\n  margin: 10px;\\n  padding: 5px; }\\n\\n.item-label {\\n  margin-bottom: 5px; }\\n\\n.item select {\\n  width: 100%; }\\n\\n#tags-container {\\n  width: 100%; }\\n\\n.results-container {\\n  flex-grow: 1;\\n  border: 1px solid green; }\\n\\n/*\\nfooter{\\n  flex-grow: 0;\\n  min-height: 50px;\\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.025) 10%, rgba(255, 255, 255, 0) 10%),\\n                    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 10%, rgba(255, 255, 255, 0) 10%),\\n                    linear-gradient(rgb(51, 102, 153), rgb(25, 68, 104));\\n  background-size: 10px 10px, 10px 10px, auto;\\n  background-repeat: repeat;\\n}*/\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://recipes/./app/view/stylesheets/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://recipes/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./app/view/stylesheets/index.scss":
/*!*****************************************!*\
  !*** ./app/view/stylesheets/index.scss ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/view/stylesheets/index.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://recipes/./app/view/stylesheets/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://recipes/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;