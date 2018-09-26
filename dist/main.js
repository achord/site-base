/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/main.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/main.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/******************************************\\nBASE MIXINS\\n******************************************/\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n  box-sizing: border-box; }\\n\\nhtml {\\n  -webkit-overflow-scrolling: touch;\\n  height: 100%;\\n  overflow: auto;\\n  width: 100%; }\\n\\nbody {\\n  -webkit-overflow-scrolling: touch;\\n  font-size: 62.5%;\\n  margin: 0;\\n  min-height: 100%;\\n  overflow-x: hidden;\\n  overflow: auto;\\n  padding: 0;\\n  position: relative;\\n  width: 100%; }\\n\\na:link,\\na:focus {\\n  transition: color 0.17s ease-in-out; }\\n\\np a:link,\\np a:active,\\np a:focus {\\n  transition: color 0.17s ease-in-out;\\n  color: #cbb46c;\\n  text-decoration: underline;\\n  touch-action: manipulation; }\\n\\np a:active,\\np a:hover,\\np a:visited {\\n  color: #ad923d; }\\n\\nimg {\\n  height: auto;\\n  width: 100%; }\\n\\n:root {\\n  font-size: 10px; }\\n\\nbody {\\n  font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  font-size: inherit;\\n  font-size: 1.6rem;\\n  font-style: normal;\\n  line-height: 150%;\\n  letter-spacing: 0;\\n  text-size-adjust: 100% !important;\\n  /* Better Font Rendering */\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\nh1 {\\n  font-size: 6rem;\\n  line-height: 7.2rem; }\\n\\n.test {\\n  font-size: 60px;\\n  line-height: 72px; }\\n\\nh2 {\\n  font-size: 4.8rem;\\n  line-height: 6rem; }\\n\\nh3 {\\n  font-size: 3.6rem;\\n  line-height: 4.8rem; }\\n\\nh4 {\\n  font-size: 2.4rem;\\n  line-height: 3rem; }\\n\\nh5 {\\n  font-size: 2.1rem;\\n  line-height: 2.4rem; }\\n\\nh6 {\\n  font-size: 1.2rem;\\n  line-height: 1.8rem; }\\n\\np,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n  margin: 0; }\\n\\nul,\\nol,\\nul ul,\\nol ol,\\nul ol,\\nol ul {\\n  margin: 0; }\\n\\nul {\\n  list-style-type: disc; }\\n\\nol {\\n  list-style-type: decimal; }\\n\\nli {\\n  font-size: inherit;\\n  line-height: 150%; }\\n\\n/* Let's make sure all's aligned */\\nhr,\\n.hr {\\n  margin: -1px 0;\\n  border: 1px solid; }\\n\\na,\\nb,\\ni,\\nstrong,\\nem,\\nsmall,\\ncode {\\n  line-height: 0; }\\n\\nsub,\\nsup {\\n  position: relative;\\n  line-height: 0;\\n  vertical-align: baseline; }\\n\\nsup {\\n  top: -.5em; }\\n\\nsub {\\n  bottom: -.25em; }\\n\\np {\\n  font-weight: 500;\\n  font-size: 1.6rem;\\n  line-height: 3rem;\\n  letter-spacing: .02rem;\\n  color: #000;\\n  margin: 0;\\n  padding: 0; }\\n  p strong {\\n    font-weight: 600; }\\n  p i, p em {\\n    font-style: italic; }\\n\\n@media (max-width: 767px) {\\n  h4 {\\n    font-size: 3.2rem;\\n    margin: 20px 0 40px; }\\n  h5 {\\n    font-size: 2.6rem;\\n    line-height: 2.8rem;\\n    margin-bottom: 20px; }\\n  h6 {\\n    font-size: 1.4rem; }\\n  p {\\n    font-size: 1.8rem;\\n    line-height: 3rem; } }\\n\\nbutton {\\n  position: relative;\\n  top: 0;\\n  left: 0;\\n  cursor: pointer;\\n  transition: .2s;\\n  font-size: inherit;\\n  font-weight: 100;\\n  border: none;\\n  border-radius: 0;\\n  background: none;\\n  appearance: none; }\\n\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  overflow: visible;\\n  margin: 0;\\n  font-size: inherit;\\n  line-height: inherit;\\n  vertical-align: top;\\n  border: none;\\n  outline: none;\\n  background: none;\\n  box-shadow: none;\\n  text-fill-color: #fff;\\n  font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif; }\\n\\ninput[type=\\\"text\\\"], input[type=\\\"search\\\"],\\ntextarea,\\nselect {\\n  padding: 15px 8px;\\n  box-sizing: border-box; }\\n  input[type=\\\"text\\\"]::placeholder, input[type=\\\"search\\\"]::placeholder,\\n  textarea::placeholder,\\n  select::placeholder {\\n    color: #666;\\n    font-weight: 800;\\n    opacity: 1; }\\n\\ninput:-webkit-autofill,\\ntextarea:-webkit-autofill,\\nselect:-webkit-autofill {\\n  background: #fff !important;\\n  box-shadow: 0 0 0 1000px #fff inset;\\n  text-fill-color: currentColor; }\\n\\nbutton::-moz-focus-inner,\\ninput:-moz-focus-inner,\\nselect:-moz-focus-inner,\\n*:focus-inner {\\n  padding: 0;\\n  border: none; }\\n\\n.pot {\\n  display: none !important; }\\n\\ninput[type=\\\"text\\\"], input[type=\\\"email\\\"],\\ntextarea,\\nselect {\\n  width: 100%;\\n  margin-bottom: 20px; }\\n\\ninput,\\ntextarea,\\nselect {\\n  display: block;\\n  border: 1px solid #666;\\n  font-size: 1.2rem;\\n  color: #000;\\n  font-weight: 800;\\n  padding: 7px; }\\n  input::placeholder,\\n  textarea::placeholder,\\n  select::placeholder {\\n    text-transform: uppercase;\\n    color: #666;\\n    padding: 5px 0;\\n    opacity: 1; }\\n\\ninput[type=submit], input[type=reset] {\\n  cursor: pointer; }\\n\\ninput, select {\\n  height: 30px;\\n  margin-bottom: 20px; }\\n\\n.container {\\n  max-width: 576px;\\n  margin: 0 auto;\\n  box-sizing: border-box; }\\n  .container.small {\\n    max-width: 768px; }\\n  .container.medium {\\n    max-width: 992px; }\\n  .container.large {\\n    max-width: 1200px; }\\n\\n@media (max-width: 767px) {\\n  .container {\\n    padding: 0 20px; }\\n    .container .container {\\n      padding: 0; }\\n    .container.small {\\n      max-width: 100%; }\\n    .container.medium {\\n      max-width: 100%; }\\n    .container.large {\\n      max-width: 100%; } }\\n\\n.Header {\\n  padding: 20px 0 0;\\n  text-align: center; }\\n  .Header-logo {\\n    margin: 5px auto;\\n    max-width: 575px; }\\n    .Header-logo a {\\n      text-decoration: none;\\n      color: #000;\\n      font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;\\n      display: block;\\n      margin: 35px 0;\\n      opacity: 1;\\n      transition: opacity .25s linear; }\\n      .Header-logo a:hover {\\n        opacity: .8; }\\n    .Header-logo-text {\\n      font-weight: 900;\\n      font-size: 4.8rem; }\\n  .Header-tagline {\\n    text-transform: uppercase;\\n    font-size: 1.2rem;\\n    letter-spacing: .1rem;\\n    margin: 0 0 20px;\\n    padding: 0; }\\n  .Header-menu {\\n    position: absolute;\\n    z-index: 21000;\\n    top: 30px;\\n    right: 25px;\\n    cursor: pointer;\\n    width: 50px;\\n    height: 50px;\\n    line-height: 0;\\n    flex: none; }\\n    .Header-menu-wrapper {\\n      display: none; }\\n    .Header-menu span {\\n      display: none; }\\n    .Header-menu-icon {\\n      overflow: hidden;\\n      width: 50px;\\n      height: 50px;\\n      padding: 10px;\\n      position: relative;\\n      left: -2px;\\n      top: -2px; }\\n    .Header-menu-btn {\\n      margin: 0;\\n      padding: 0;\\n      border: 0;\\n      background: transparent;\\n      line-height: normal;\\n      cursor: pointer;\\n      width: 50px;\\n      height: 50px;\\n      text-align: center;\\n      border: none;\\n      border-radius: 50%;\\n      background: white;\\n      transition: all 0.25s ease-out;\\n      border: 2px solid #000; }\\n      .Header-menu-btn::-moz-focus-inner {\\n        padding: 0;\\n        border: 0; }\\n      .Header-menu-btn:focus {\\n        outline: 0; }\\n      .Header-menu-btn:focus {\\n        outline: 0; }\\n      .Header-menu-btn:active {\\n        background: white; }\\n      .Header-menu-btn .close {\\n        display: none;\\n        fill: #fff; }\\n      .Header-menu-btn .open {\\n        display: block; }\\n      .Header-menu-btn.isActive {\\n        background: #000;\\n        border-radius: 50%;\\n        background: black;\\n        border: 2px solid #fff; }\\n        .Header-menu-btn.isActive:hover {\\n          opacity: .85; }\\n        .Header-menu-btn.isActive .open {\\n          display: none; }\\n        .Header-menu-btn.isActive .close {\\n          display: block; }\\n\\n@media (max-width: 767px) {\\n  .Header {\\n    display: flex;\\n    flex-direction: column;\\n    padding: 19px 0 0 30px;\\n    text-align: left;\\n    border-bottom: 1px solid #444; }\\n    .Header-logo {\\n      margin: 0;\\n      order: 0;\\n      padding: 0 0 10px;\\n      margin: 0; }\\n      .Header-logo-text {\\n        font-size: 4rem; }\\n    .Header-tagline {\\n      order: 2;\\n      display: none; }\\n    .Header-menu-wrapper {\\n      display: block; } }\\n\\n.Footer {\\n  margin-top: 80px;\\n  padding: 40px 20px 80px;\\n  text-align: center;\\n  color: #fff;\\n  background-color: #000;\\n  background-image: linear-gradient(-180deg, #000 0%, #31363a 100%); }\\n  .Footer a,\\n  .Footer p {\\n    color: #fff; }\\n  .Footer-nav {\\n    padding: 30px 0 60px; }\\n    .Footer-nav li {\\n      display: inline;\\n      list-style: none; }\\n      .Footer-nav li a {\\n        font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n        font-size: 1.2rem;\\n        font-weight: bold;\\n        padding: 10px 20px;\\n        text-decoration: none;\\n        text-transform: uppercase; }\\n        .Footer-nav li a:hover {\\n          color: #cbb46c; }\\n  .Footer-info {\\n    display: flex;\\n    width: 100%;\\n    margin: 0 0 40px;\\n    justify-content: center; }\\n  .Footer-logo, .Footer-address, .Footer-twitter {\\n    flex: 1; }\\n  .Footer-logo {\\n    font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;\\n    font-size: 3.6rem;\\n    font-weight: 900;\\n    text-align: left; }\\n  .Footer-address {\\n    font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;\\n    font-weight: 500; }\\n    .Footer-address p {\\n      font-size: 2.1rem; }\\n  .Footer-twitter {\\n    display: flex;\\n    flex-direction: column;\\n    text-align: right; }\\n    .Footer-twitter a {\\n      font-size: 1.8rem;\\n      line-height: 2.4rem;\\n      margin-bottom: 20px;\\n      text-decoration: none; }\\n    .Footer-twitter i {\\n      position: relative;\\n      top: 6px;\\n      display: inline-block;\\n      width: 30px;\\n      height: 30px;\\n      margin: 0 10px 0 0;\\n      transition: background .2s linear;\\n      border-radius: 50%;\\n      background-color: #fff; }\\n      .Footer-twitter i:hover {\\n        background-color: #cbb46c; }\\n    .Footer-twitter .icon-twitter {\\n      width: 18px;\\n      height: 18px;\\n      margin-top: 6px;\\n      margin-right: 5px;\\n      fill: #444; }\\n  .Footer-legal {\\n    font-size: 1rem;\\n    padding: 0 0 20px 5px; }\\n\\n@media (max-width: 767px) {\\n  .Footer {\\n    margin-top: 0;\\n    padding: 40px 0; }\\n    .Footer-nav {\\n      padding: 0 0 40px; }\\n      .Footer-nav li {\\n        display: block;\\n        padding: 15px 0;\\n        list-style: none; }\\n        .Footer-nav li a {\\n          font-size: 1.7rem;\\n          line-height: 2.4rem; }\\n    .Footer-info {\\n      display: block;\\n      text-align: center; }\\n    .Footer-logo, .Footer-twitter {\\n      margin: 40px 5px;\\n      text-align: center; } }\\n\\n@media (min-width: 768px) and (max-width: 991px) {\\n  .Footer {\\n    margin-top: 80px;\\n    padding: 40px 10px 80px; }\\n    .Footer-nav {\\n      margin: 0 -20px;\\n      padding: 30px 0 60px; }\\n      .Footer-nav li a {\\n        font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n        font-size: 1.1rem;\\n        font-weight: bold;\\n        padding: 10px; } }\\n\\na.Btn,\\ninput.Btn {\\n  line-height: 1.2rem;\\n  display: inline-block;\\n  padding: 7px 10px;\\n  user-select: none;\\n  text-align: center;\\n  text-decoration: none;\\n  letter-spacing: .06em;\\n  -webkit-appearance: none;\\n  -webkit-border-radius: 0px;\\n  transition: all 0.25s ease-out;\\n  -webkit-appearance: none;\\n  -webkit-border-radius: 0px;\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  line-height: normal;\\n  cursor: pointer; }\\n  a.Btn::-moz-focus-inner,\\n  input.Btn::-moz-focus-inner {\\n    padding: 0;\\n    border: 0; }\\n  a.Btn:focus,\\n  input.Btn:focus {\\n    outline: 0; }\\n  a.Btn--primary,\\n  input.Btn--primary {\\n    font-size: 1.4rem;\\n    font-weight: bold;\\n    padding: 14px 37px;\\n    text-transform: uppercase;\\n    color: #fff;\\n    background-color: #1f5d9b;\\n    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.5); }\\n    a.Btn--primary:hover,\\n    input.Btn--primary:hover {\\n      background-color: #cbb46c; }\\n  a.Btn--secondary,\\n  input.Btn--secondary {\\n    font-size: 1.2rem;\\n    font-weight: bold;\\n    padding: 13px 30px;\\n    text-transform: uppercase;\\n    color: #fff;\\n    background-color: #1f5d9b;\\n    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.5); }\\n    a.Btn--secondary:hover,\\n    input.Btn--secondary:hover {\\n      background-color: #cbb46c; }\\n  a.Btn--big,\\n  input.Btn--big {\\n    font-weight: bold;\\n    padding: 25px 50px;\\n    text-transform: uppercase;\\n    color: #fff;\\n    background-color: #f70056; }\\n    a.Btn--big:hover,\\n    input.Btn--big:hover {\\n      background-color: #cbb46c; }\\n\\n@media (max-width: 767px) {\\n  a.Btn,\\n  .Btn {\\n    width: 100%; }\\n    a.Btn--primary,\\n    .Btn--primary {\\n      font-size: 1.6rem;\\n      padding: 20px;\\n      color: #fff; }\\n    a.Btn--secondary,\\n    .Btn--secondary {\\n      font-size: 1.4rem;\\n      font-weight: bold;\\n      padding: 20px;\\n      text-transform: uppercase;\\n      color: #fff;\\n      background-color: #1f5d9b; }\\n    a.Btn--big,\\n    .Btn--big {\\n      padding: 25px 15px; } }\\n\\n.Image {\\n  margin: 40px auto; }\\n  .Image--normal {\\n    max-width: 992px; }\\n  .Image--halfWidth {\\n    width: 39%;\\n    max-width: 500px; }\\n\\n@media (max-width: 767px) {\\n  .Image {\\n    margin: 10px auto; }\\n    .Image--normal {\\n      width: calc(100% - 10px);\\n      max-width: calc(100% - 10px); }\\n    .Image--halfWidth {\\n      width: calc(100% - 10px);\\n      max-width: calc(100% - 10px); } }\\n\\n@media (min-width: 768px) and (max-width: 991px) {\\n  .Image {\\n    margin: 10px auto; }\\n    .Image--normal {\\n      width: 75%; }\\n    .Image--halfWidth {\\n      width: 60%; } }\\n\\n.Hero {\\n  margin: 0 auto;\\n  background-size: cover; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/main.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/main.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);\nconsole.log('Testing ftlog!');\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });