"use strict";

var _express = _interopRequireDefault(require("express"));

var _handleRender = _interopRequireDefault(require("./handleRender"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// this is a very simple express app designed only for the purpose of this repo
var app = (0, _express["default"])();
var port = 3000; // server static content

app.use('/dist', _express["default"]["static"]('dist')); // register route handler

app.use(_handleRender["default"]); // listen out for incoming requests

app.listen(port, function () {
  console.log('app now listening on port', port);
});