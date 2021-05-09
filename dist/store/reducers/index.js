"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _fetchData = require("./fetchData");

var reduxState = (0, _redux.combineReducers)({
  fetchData: _fetchData.fetchData
});
var _default = reduxState;
exports["default"] = _default;