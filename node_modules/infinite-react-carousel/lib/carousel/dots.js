"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getDotCount = function getDotCount(spec) {
  return Math.ceil(spec.slideCount / spec.dotsScroll);
};

var Dots = function Dots(_ref) {
  var slideCount = _ref.slideCount,
      dotsScroll = _ref.dotsScroll,
      slidesToShow = _ref.slidesToShow,
      infinite = _ref.infinite,
      activeIndex = _ref.activeIndex,
      clickHandler = _ref.clickHandler,
      onMouseEnter = _ref.onMouseEnter,
      onMouseOver = _ref.onMouseOver,
      onMouseLeave = _ref.onMouseLeave,
      customPaging = _ref.customPaging,
      appendDots = _ref.appendDots,
      dotsClass = _ref.dotsClass;

  var ClickHandler = function ClickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    clickHandler(options);
  }; // Apply join & split to Array to pre-fill it for IE8
  //
  // Credit: http://stackoverflow.com/a/13735425/1849458


  var dotCount = getDotCount({
    slideCount: slideCount,
    dotsScroll: dotsScroll,
    slidesToShow: slidesToShow,
    infinite: infinite
  });
  var dots = Array.apply([], Array(dotCount + 1).join('0').split('')).map(function (x, i) {
    var leftBound = i * dotsScroll;
    var rightBound = i * dotsScroll + (dotsScroll - 1);
    var className = (0, _classnames["default"])({
      'carousel-dots-active': activeIndex >= leftBound && activeIndex <= rightBound
    });
    var dotOptions = {
      message: 'dots',
      index: i,
      dotsScroll: dotsScroll,
      activeIndex: activeIndex
    };
    return _react["default"].createElement("li", {
      className: "".concat(className, " carousel-dot-").concat(i + 1),
      key: "".concat(new Date().getTime() * i)
    }, _react["default"].cloneElement(customPaging(i), {
      onClick: function onClick(e) {
        return ClickHandler(dotOptions, e);
      }
    }));
  });
  return _react["default"].cloneElement(appendDots(dots), _objectSpread({
    className: dotsClass
  }, {
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave
  }));
};

Dots.defaultProps = _types.dotsDefaultProps;
Dots.propTypes = _types.dotsPropTypes;
var _default = Dots;
exports["default"] = _default;