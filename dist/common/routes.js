"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Router;
exports.routes = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _App = _interopRequireDefault(require("../components/app/App"));

var _Home = _interopRequireDefault(require("../components/home/Home"));

var _About = _interopRequireDefault(require("../components/about/About"));

var _NotFound = _interopRequireDefault(require("../components/notFound/NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var routes = [{
  path: '/',
  exact: true,
  component: _Home["default"]
}, {
  path: '/about',
  exact: true,
  component: _About["default"]
}, {
  component: _NotFound["default"]
}];
exports.routes = routes;

function Router() {
  return /*#__PURE__*/_react["default"].createElement(_App["default"], null, /*#__PURE__*/_react["default"].createElement(_reactRouter.Switch, null, routes.map(function (route) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, _extends({
      key: route.path || 'notfound'
    }, route));
  })));
}