"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function get() {
    return _slider["default"];
  }
});
exports["default"] = void 0;

var _carousel = _interopRequireDefault(require("./carousel"));

var _slider = _interopRequireDefault(require("./carousel/slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _carousel["default"];
exports["default"] = _default;