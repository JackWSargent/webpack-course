webpackHotUpdate("main",{

/***/ "./src sync recursive":
/*!******************!*\
  !*** ./src sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive";

/***/ }),

/***/ "./src/index.ejs":
/*!***********************!*\
  !*** ./src/index.ejs ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<html>\r\n    <head>\r\n        <title>' +
((__t = ( htmlWebpackPlugin.options.title )) == null ? '' : __t) +
'</title>\r\n    </head>\r\n    <body>\r\n        <div class="profile">\r\n            <img src="' +
((__t = (__webpack_require__("./src sync recursive")('./images/link.jpg'.default))) == null ? '' : __t) +
'" />\r\n            <h1>Link\'s Journal</h1>\r\n        </div>\r\n    </body>\r\n</html>\r\n';

}
return __p
}

/***/ })

})
//# sourceMappingURL=main.389f834f44b674fe02d8.hot-update.js.map