"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CircularArray =
/*#__PURE__*/
function () {
  _createClass(CircularArray, [{
    key: "length",
    get: function get() {
      return this.array.length;
    }
  }]);

  function CircularArray(n) {
    var _this = this;

    var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, CircularArray);

    _defineProperty(this, "array", []);

    _defineProperty(this, "key", []);

    _defineProperty(this, "origin", null);

    _defineProperty(this, "toString", function (array) {
      var result = [];
      var newArray = array || _this.array;

      for (var i = 0; i < newArray.length; i += 1) {
        var item = newArray[i];
        if (_typeof(item) === 'object' && item instanceof Array) result.push("[".concat(_this.toString(item), "]"));else if (_typeof(item) === 'object') result.push(JSON.stringify(item));else result.push(item.toString());
      }

      return result.join(',');
    });

    _defineProperty(this, "get", function (i) {
      var result;

      if (i < 0 || i < _this.length - _this.array.length) {
        result = _this.array[-i % _this.array.length === 0 ? 0 : _this.array.length + i % _this.array.length];
      } else {
        result = _this.array[i % _this.array.length];
      }

      return result;
    });

    _defineProperty(this, "getKeyIndex", function (i) {
      var originItem = _this.origin.get(i);

      var carouselkey = originItem.dataset.carouselkey;
      return _this.key.indexOf(carouselkey);
    });

    _defineProperty(this, "getIndex", function (i) {
      var result;

      if (i < 0 || i < _this.length - _this.array.length) {
        result = -i % _this.array.length === 0 ? 0 : _this.array.length + i % _this.array.length;
      } else {
        result = i % _this.array.length;
      }

      return result;
    });

    _defineProperty(this, "set", function (i, v) {
      if (i < 0 || i < _this.length - _this.array.length) {
        throw new Error('can not set index < 0');
      }

      if (i >= _this.length) {
        var newArr = new Array(i - _this.length + 1);
        _this.array = _this.array.concat(newArr);

        _this.array.splice(i, 1, v);
      } else {
        _this.array[_this.getIndex(i)] = v;
      }
    });

    this.array = [];

    if (typeof n === 'number') {
      this.array = new Array(n);
    } else if (_typeof(n) === 'object' && Array.isArray(n)) {
      this.array = n;
    } else if (_typeof(n) === 'object' && n.length > 0 && n instanceof NodeList) {
      for (var i = 0; i < n.length; i += 1) {
        this.array.push(n[i]);
      }

      this.key = this.array.map(function (item) {
        var carouselkey = item.dataset.carouselkey;
        return carouselkey;
      });
    } else {
      throw new Error('can not create array');
    }

    this.origin = origin;
  }

  return CircularArray;
}();

var _default = CircularArray;
exports["default"] = _default;