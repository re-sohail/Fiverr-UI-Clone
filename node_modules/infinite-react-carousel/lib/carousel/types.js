"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrowsPropTypes = exports.arrowsDefaultProps = exports.dotsPropTypes = exports.dotsDefaultProps = exports.autoplayProps = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var autoplayProps = {
  autoplaySpeed: 3000
};
exports.autoplayProps = autoplayProps;
var defaultProps = {
  accessibility: true,
  //
  adaptiveHeight: false,
  //
  afterChange: null,
  //
  appendDots: function appendDots(dots) {
    return _react["default"].createElement("ul", {
      style: {
        display: 'block'
      }
    }, dots);
  },
  //
  arrows: true,
  //
  autoplay: false,
  //
  autoplaySpeed: 3000,
  //
  beforeChange: null,
  //
  centerMode: false,
  //
  arrowsScroll: 1,
  //
  centerPadding: 50,
  //
  className: '',
  //
  customPaging: function customPaging(i) {
    return _react["default"].createElement("button", {
      type: "button"
    }, i + 1);
  },
  //
  dots: false,
  //
  dotsClass: 'carousel-dots',
  //
  dotsScroll: 1,
  //
  draggable: true,
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  initialSlide: false,
  //
  lazyLoad: null,
  nextArrow: null,
  //
  onEdge: null,
  onInit: null,
  //
  onLazyLoadError: null,
  onReInit: null,
  //
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  //
  prevArrow: null,
  //
  responsive: null,
  rows: 1,
  //
  rtl: false,
  slide: 'div',
  slidesPerRow: 1,
  //
  slidesToShow: 1,
  //
  swipe: true,
  //
  swipeToSlide: false,
  vertical: false,
  duration: 200,
  //
  shift: 0,
  //
  gutter: 0,
  //
  fullWidth: false,
  //
  arrowsBlock: true,
  //
  autoplayScroll: 1,
  //
  onResize: function onResize() {},
  //
  onSwipe: function onSwipe() {},
  //
  wheel: false,
  wheelScroll: 1,
  virtualList: false,
  overScan: 2
};
exports.defaultProps = defaultProps;
var propTypes = {
  accessibility: _propTypes["default"].bool,
  adaptiveHeight: _propTypes["default"].bool,
  afterChange: _propTypes["default"].func,
  appendDots: _propTypes["default"].func,
  arrows: _propTypes["default"].bool,
  arrowsScroll: _propTypes["default"].number,
  autoplay: _propTypes["default"].bool,
  autoplaySpeed: _propTypes["default"].number,
  beforeChange: _propTypes["default"].func,
  centerMode: _propTypes["default"].bool,
  centerPadding: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  className: _propTypes["default"].string,
  cssEase: _propTypes["default"].string,
  customPaging: _propTypes["default"].func,
  dots: _propTypes["default"].bool,
  dotsClass: _propTypes["default"].string,
  dotsScroll: _propTypes["default"].number,
  draggable: _propTypes["default"].bool,
  easing: _propTypes["default"].string,
  edgeFriction: _propTypes["default"].number,
  fade: _propTypes["default"].bool,
  focusOnSelect: _propTypes["default"].bool,
  initialSlide: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool]),
  lazyLoad: _propTypes["default"].bool,
  nextArrow: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element), _propTypes["default"].element]),
  onEdge: _propTypes["default"].func,
  onInit: _propTypes["default"].func,
  onLazyLoadError: _propTypes["default"].func,
  onReInit: _propTypes["default"].func,
  pauseOnDotsHover: _propTypes["default"].bool,
  pauseOnFocus: _propTypes["default"].bool,
  pauseOnHover: _propTypes["default"].bool,
  prevArrow: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element), _propTypes["default"].element]),
  responsive: _propTypes["default"].array,
  rows: _propTypes["default"].number,
  rtl: _propTypes["default"].bool,
  slide: _propTypes["default"].string,
  slidesPerRow: _propTypes["default"].number,
  slidesToShow: _propTypes["default"].number,
  swipe: _propTypes["default"].bool,
  swipeToSlide: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool,
  duration: _propTypes["default"].number,
  shift: _propTypes["default"].number,
  gutter: _propTypes["default"].number,
  fullWidth: _propTypes["default"].bool,
  arrowsBlock: _propTypes["default"].bool,
  autoplayScroll: _propTypes["default"].number,
  onResize: _propTypes["default"].func,
  onSwipe: _propTypes["default"].func,
  virtualList: _propTypes["default"].bool,
  overScan: _propTypes["default"].number
};
exports.propTypes = propTypes;
var dotsDefaultProps = {
  slideCount: 0,
  dotsScroll: 1,
  slidesToShow: 1,
  infinite: true,
  currentSlide: 0,
  clickHandler: function clickHandler() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseOver: function onMouseOver() {},
  onMouseLeave: function onMouseLeave() {},
  customPaging: function customPaging(i) {
    return _react["default"].createElement("button", {
      type: "button"
    }, i + 1);
  },
  appendDots: function appendDots(dots) {
    return _react["default"].createElement("ul", {
      style: {
        display: 'block'
      }
    }, dots);
  },
  dotsClass: ''
};
exports.dotsDefaultProps = dotsDefaultProps;
var dotsPropTypes = {
  slideCount: _propTypes["default"].number,
  dotsScroll: _propTypes["default"].number,
  slidesToShow: _propTypes["default"].number,
  infinite: _propTypes["default"].bool,
  currentSlide: _propTypes["default"].number,
  clickHandler: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  customPaging: _propTypes["default"].func,
  appendDots: _propTypes["default"].func,
  dotsClass: _propTypes["default"].string
};
exports.dotsPropTypes = dotsPropTypes;
var arrowsPropTypes = {
  arrows: _propTypes["default"].bool,
  arrowsScroll: _propTypes["default"].number,
  // currentSlide: PropTypes,
  clickHandler: _propTypes["default"].func,
  // slideCount,
  type: _propTypes["default"].oneOf(['prev', 'next']),
  prevArrow: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].element, _propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element), _propTypes["default"].oneOf([null])]),
  nextArrow: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].element, _propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element), _propTypes["default"].oneOf([null])]),
  arrowsBlock: _propTypes["default"].bool
};
exports.arrowsPropTypes = arrowsPropTypes;
var arrowsDefaultProps = {
  arrows: true,
  arrowsScroll: 1,
  // currentSlide,
  clickHandler: function clickHandler() {},
  // slideCount,
  type: 'prev',
  arrowsBlock: true,
  prevArrow: null,
  nextArrow: null
};
exports.arrowsDefaultProps = arrowsDefaultProps;