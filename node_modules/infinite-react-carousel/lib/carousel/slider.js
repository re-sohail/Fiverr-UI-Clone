"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _each = _interopRequireDefault(require("lodash/each"));

var _get = _interopRequireDefault(require("lodash/get"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _classnames = _interopRequireDefault(require("classnames"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _array = _interopRequireDefault(require("./array"));

var _types = require("./types");

var _arrows = require("./arrows");

var _dots = _interopRequireDefault(require("./dots"));

var _listener = require("./listener");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var extractObject = function extractObject(spec, keys) {
  var newObject = {};

  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    newObject[key] = spec[key];
  }

  return newObject;
};

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "isMounted", true);

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      var _this$state = _this.state,
          settings = _this$state.settings,
          width = _this$state.width;
      var activeIndex = _this.state.activeIndex;
      settings = _objectSpread({}, _types.defaultProps, {}, _this.props); // force showing one slide and scrolling by one if the fade mode is on

      if (settings.fade) {
        if (settings.slidesToShow > 1 && process.env.NODE_ENV !== 'production') {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        settings.slidesToShow = 1;
      }

      var children = _this.props.children;
      children = _react["default"].Children.toArray(children).filter(function (child) {
        return typeof child === 'string' ? !!child.trim() : !!child;
      });

      var newWith = _this.widthInit();

      if (width !== newWith) {
        width = newWith;
      }

      var newChildren = [];

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (k < children.length) {
              row.push(_react["default"].cloneElement(children[k], {
                key: 100 * i + 10 * j + k,
                tabIndex: -1,
                style: {
                  width: "".concat(100 / settings.slidesPerRow, "%"),
                  display: 'inline-block'
                }
              }));
            }
          }

          newSlide.push(_react["default"].createElement("div", {
            className: "carousel-row",
            key: 10 * i + j
          }, row));
        }

        newChildren.push(_react["default"].createElement("div", {
          "data-carouselkey": i,
          key: i,
          className: "carousel-item",
          style: {
            width: "".concat(width, "px"),
            display: 'none'
          }
        }, newSlide));
      }

      if (_this.newChildren.length !== newChildren.length) {
        _this.rerender = true;
        _this.newChildren = newChildren;
      } else {
        _this.rerender = false;
        _this.newChildren = newChildren;
        _this.virtualList = newChildren;
      }

      if (settings.virtualList && _this.items && _this.items.length === _this.newChildren.length && !_this.rerender) {
        if (_this.endIndex === activeIndex) {
          _this.endIndex = null;
        }

        _this.virtualList = _this.createVirtualList();

        _this.forceUpdate(function () {
          if (!_this.resizeHeight) {
            _this.connectObserver();
          }
        });
      }

      if (!(0, _isEqual["default"])((0, _get["default"])(_this.state, 'settings'), settings) && _this.isMounted) {
        _this.setState({
          settings: settings
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setRef", function (element) {
      return _this.setState({
        SliderRef: element
      }, function () {
        var slides = element.querySelectorAll('.carousel-item');
        var virtualList = _this.state.settings.virtualList;

        if (virtualList) {
          _this.virtualList = _this.newChildren;

          _this.forceUpdate(function () {
            _this.items = new _array["default"](element.querySelectorAll('.carousel-item'));
            _this.virtualItem = null;
          });
        } else {
          _this.items = new _array["default"](slides);
        }

        _this.slideInit();

        var settings = _this.state.settings;
        var slidesToShow = settings.slidesToShow;

        if (slidesToShow < slides.length) {
          _this.signupListener();

          _this.autoPlay();
        } else {
          _this.removeListener();
        }

        element.addEventListener('click', _this.handleClick);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function () {
      var _this$state2 = _this.state,
          SliderRef = _this$state2.SliderRef,
          _this$state2$settings = _this$state2.settings,
          autoplay = _this$state2$settings.autoplay,
          autoplaySpeed = _this$state2$settings.autoplaySpeed,
          pauseOnHover = _this$state2$settings.pauseOnHover;

      if (autoplay && autoplaySpeed > 0 && !_this.autoplayTimer) {
        _this.scrollType = {
          type: 'autoplay'
        };
        _this.autoplayTimer = setInterval(function () {
          var autoplayScroll = _this.props.autoplayScroll;
          var activeIndex = _this.state.activeIndex;
          _this.beforeChangeTrigger = false;

          _this.slickNext(activeIndex + autoplayScroll);
        }, autoplaySpeed);
        window.addEventListener('visibilitychange', _this.handleVisibilityChange);

        if (pauseOnHover) {
          SliderRef.addEventListener('mouseover', _this.handleAutoplayPause);
          SliderRef.removeEventListener('mouseleave', _this.autoPlay);
        } else {
          SliderRef.removeEventListener('mouseover', _this.handleAutoplayPause);
          SliderRef.removeEventListener('mouseleave', _this.autoPlay);
        }
      } else if (autoplay && autoplaySpeed && _this.autoplayTimer) {
        _this.autoPlayInit();

        if (!pauseOnHover) {
          SliderRef.removeEventListener('mouseover', _this.handleAutoplayPause);
          SliderRef.removeEventListener('mouseleave', _this.autoPlay);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlayInit", function () {
      var settings = _this.state.settings;

      if (settings.autoplay) {
        _this.handleAutoplayPause();

        _this.autoPlay();
      } else if (_this.isMounted) {
        _this.setState({
          settings: _objectSpread({}, settings, {
            autoplay: true
          })
        }, function () {
          _this.handleAutoplayPause();

          _this.autoPlay();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "connectObserver", function () {
      if (!_this.resizeObserver) {
        var SliderRef = _this.state.SliderRef;
        _this.resizeObserver = new _resizeObserverPolyfill["default"](_this.handleResizeHeight);

        _this.resizeObserver.observe(SliderRef.querySelector('.carousel-item'));
      } else {
        _this.disconnectObserver();

        _this.connectObserver();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "disconnectObserver", function () {
      if (_this.resizeObserver) {
        _this.resizeObserver.disconnect();

        _this.resizeObserver = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "track", function () {
      var now = Date.now();
      var elapsed = now - _this.timestamp;
      _this.timestamp = now;
      var delta = _this.offset - _this.frame;
      _this.frame = _this.offset;
      var v = 1000 * delta / (1 + elapsed);
      _this.velocity = 0.8 * v + 0.2 * _this.velocity;
    });

    _defineProperty(_assertThisInitialized(_this), "autoScroll", function (type) {
      var settings = _this.state.settings;

      if (_this.amplitude) {
        var elapsed = Date.now() - _this.timestamp;

        var delta = _this.amplitude * Math.exp(-elapsed / settings.duration);

        if (_this.doubleTrigger) {
          _this.beforeChangeTrigger = false;

          _this.scroll('auto', _this.target - delta);

          requestAnimationFrame(_this.autoScroll);
          _this.doubleTrigger = false;
        } else if (delta > 2 || delta < -2) {
          _this.scroll(type === 'start' ? type : 'auto', _this.target - delta);

          requestAnimationFrame(_this.autoScroll);
        } else if (_this.changeWindow) {
          _this.changeWindow = false;

          _this.scroll('auto', _this.target);
        } else {
          _this.scroll('end', _this.target);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getItem", function (scrollItem, index) {
      var virtualList = _this.state.settings.virtualList;
      var el;

      if (virtualList) {
        var keyIndex = scrollItem.getKeyIndex(index);

        if (keyIndex >= 0) {
          el = scrollItem.get(keyIndex);
        }
      } else {
        el = scrollItem.get(index);
      }

      return el;
    });

    _defineProperty(_assertThisInitialized(_this), "scroll", function (type, x) {
      var _this$state3 = _this.state,
          SliderRef = _this$state3.SliderRef,
          width = _this$state3.width,
          settings = _this$state3.settings,
          activeIndex = _this$state3.activeIndex;
      var centerMode = settings.centerMode,
          beforeChange = settings.beforeChange,
          afterChange = settings.afterChange,
          slidesToShow = settings.slidesToShow,
          virtualList = settings.virtualList; // Start actual scroll

      var i;
      var el;
      var alignment = 'translateX(0px)';

      if (!x) {
        _this.offset = width * activeIndex * 2;
      } else {
        _this.offset = typeof x === 'number' ? x : _this.offset;
      }

      _this.center = Math.floor((_this.offset + _this.dim / 2) / _this.dim);
      var delta = _this.offset - _this.center * _this.dim;
      var dir = delta < 0 ? 1 : -1;
      var tween = -dir * delta * 2 / _this.dim;

      if (centerMode) {
        if (slidesToShow % 2 === 0) {
          alignment = "translateX(".concat(width * (slidesToShow / 2), "px)");
        } else {
          alignment = "translateX(".concat((SliderRef.clientWidth - width) / 2 - settings.centerPadding, "px)");
        }
      } else {
        alignment = 'translateX(0px)';
      }

      var _this$scrollType = _this.scrollType,
          scrollType = _this$scrollType.type,
          direction = _this$scrollType.direction; // Track scrolling state

      if (!SliderRef.classList.contains('scrolling') && scrollType !== 'arrows' && type !== 'init' && type !== 'resize') {
        _this.swiping = true;
        SliderRef.classList.add('scrolling');
      } // center
      // Don't show wrapped items.


      var index = _this.wrap(_this.center);

      if (!_this.beforeChangeTrigger && type !== 'start' && type !== 'end' && type !== 'init') {
        _this.beforeChangeTrigger = true;
        var newIndex;

        switch (scrollType) {
          case 'arrows':
            {
              var slides = settings.arrowsScroll;
              _this.scrollDistance = slides;
              newIndex = _this.items.getIndex(direction === 'prev' ? activeIndex - slides : activeIndex + slides);
              break;
            }

          case 'dots':
            {
              newIndex = _this.scrollOptions.index * _this.scrollOptions.dotsScroll;
              break;
            }

          case 'autoplay':
            {
              var _slides = settings.autoplayScroll;
              _this.scrollDistance = _slides;
              newIndex = _this.items.getIndex(activeIndex + _slides);
              break;
            }

          case 'wheel':
            {
              var _slides2 = settings.wheelScroll;
              _this.scrollDistance = _slides2;
              newIndex = _this.items.getIndex(direction === 'prev' ? activeIndex - _slides2 : activeIndex + _slides2);
              break;
            }

          default:
            break;
        }

        _this.endIndex = newIndex;

        if (beforeChange && typeof beforeChange === 'function') {
          beforeChange(activeIndex, newIndex);
        }
      }

      if (type !== 'end' && _this.scrollEnd) _this.scrollEnd = false;

      if (type === 'end') {
        if (afterChange && typeof afterChange === 'function' && !_this.scrollEnd) {
          afterChange(_this.wrap(_this.center));
        }

        _this.scrollEnd = true;
        SliderRef.classList.remove('scrolling');
        _this.beforeChangeTrigger = false;
        _this.swiping = false;
      } else if (_this.scrollEnd) {
        _this.scrollEnd(true);
      }

      _this.virtualItem = _this.virtualItem || new _array["default"](SliderRef.querySelectorAll('.carousel-item'), _this.items);
      var scrollItem = virtualList ? _this.virtualItem : _this.items;

      if (scrollItem.length <= slidesToShow) {
        el = _this.getItem(scrollItem, 0);

        if (el) {
          // Add active class to center item.
          if (el.classList.contains('active')) {
            (0, _each["default"])(SliderRef.querySelectorAll('.carousel-item'), function (ele) {
              return ele.classList.remove('active');
            });
            el.classList.add('active');
          }

          var transformString = "".concat(alignment, " translateX(0px)");

          _this.updateItemStyle(el, transformString);
        }
      } else if (!_this.noWrap || _this.center >= 0 && _this.center < scrollItem.length) {
        el = _this.getItem(scrollItem, index);

        if (el) {
          // Add active class to center item.
          if (el.classList.contains('active')) {
            (0, _each["default"])(SliderRef.querySelectorAll('.carousel-item'), function (ele) {
              return ele.classList.remove('active');
            });
            el.classList.add('active');
          }

          var _transformString = "".concat(alignment, " translateX(").concat(-delta / 2, "px) translateX(").concat(dir * settings.shift * tween * i, "px)");

          _this.updateItemStyle(el, _transformString);
        }
      }

      if (centerMode) {
        var half = Math.floor(scrollItem.length / 2);

        for (i = 1; i <= half; i += 1) {
          // right side
          // Don't show wrapped items.
          if (!_this.noWrap || _this.center + i < scrollItem.length) {
            el = _this.getItem(scrollItem, _this.wrap(_this.center + i));

            if (el) {
              var _transformString2 = "".concat(alignment, " translateX(").concat(settings.shift + (_this.dim * i - delta) / 2, "px)");

              _this.updateItemStyle(el, _transformString2);
            }
          } // left side
          // Don't show wrapped items.


          if (!_this.noWrap || _this.center - i >= 0) {
            el = _this.getItem(scrollItem, _this.wrap(_this.center - i));

            if (el) {
              var _transformString3 = "".concat(alignment, " translateX(").concat(-settings.shift + (-_this.dim * i - delta) / 2, "px)");

              _this.updateItemStyle(el, _transformString3);
            }
          }
        }
      } else if (scrollItem.length <= slidesToShow) {
        for (i = 1; i < scrollItem.length; i += 1) {
          el = _this.getItem(scrollItem, i);

          if (el) {
            var _transformString4 = "".concat(alignment, " translateX(").concat(settings.shift + (_this.dim * i - delta) / 2, "px)");

            _this.updateItemStyle(el, _transformString4);
          }
        }
      } else {
        for (i = 1; i < slidesToShow; i += 1) {
          el = _this.getItem(scrollItem, _this.wrap(_this.center + i));

          if (el) {
            var _transformString5 = "".concat(alignment, " translateX(").concat(settings.shift + (_this.dim * i - delta) / 2, "px)");

            _this.updateItemStyle(el, _transformString5);
          }
        }

        var _half = Math.ceil((scrollItem.length - slidesToShow) / 2);

        for (i = 0; i < _half; i += 1) {
          // right side
          if (!_this.noWrap || _this.center + slidesToShow + i < scrollItem.length) {
            el = _this.getItem(scrollItem, _this.wrap(_this.center + slidesToShow + i));

            if (el) {
              var _transformString6 = "".concat(alignment, " translateX(").concat(settings.shift + (_this.dim * (slidesToShow + i) - delta) / 2, "px)");

              _this.updateItemStyle(el, _transformString6);
            }
          } // left side


          if (!_this.noWrap || _this.center + slidesToShow + i < scrollItem.length) {
            el = _this.getItem(scrollItem, _this.wrap(_this.center - i - 1));

            if (el) {
              var _transformString7 = "".concat(alignment, " translateX(").concat(-settings.shift + (-_this.dim * (i + 1) - delta) / 2, "px)");

              _this.updateItemStyle(el, _transformString7);
            }
          }
        }
      } // center
      // Don't show wrapped items.


      if ((!_this.noWrap || _this.center < _this.items.length) && slidesToShow < scrollItem.length) {
        el = _this.getItem(scrollItem, _this.center);

        if (el) {
          if (!el.classList.contains('active')) {
            (0, _each["default"])(SliderRef.querySelectorAll('.carousel-item'), function (ele) {
              return ele.classList.remove('active');
            });
            el.classList.add('active');

            var newActiveIndex = _this.wrap(_this.center);

            if (_this.beforeChangeTrigger && _this.isMounted) {
              _this.setState({
                activeIndex: newActiveIndex
              }, function () {
                _this.virtualItem = null;
              });
            }
          }

          var _transformString8 = "".concat(alignment, " translateX(").concat(-delta / 2, "px) translateX(").concat(dir * settings.shift * tween, "px)");

          _this.updateItemStyle(el, _transformString8);
        }
      }

      _this.adaptHeight(); // onCycleTo callback


      var currItem = SliderRef.querySelectorAll('.carousel-item')[_this.wrap(_this.center)]; // One time callback


      if (typeof _this.oneTimeCallback === 'function') {
        _this.oneTimeCallback.call(_assertThisInitialized(_this), currItem, _this.dragged);

        _this.oneTimeCallback = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateItemStyle", function (el, transform) {
      var newEl = el;
      newEl.style[_this.xform] = transform;
      newEl.style.zIndex = 1;
      newEl.style.display = '';
    });

    _defineProperty(_assertThisInitialized(_this), "widthInit", function () {
      var _this$state4 = _this.state,
          settings = _this$state4.settings,
          SliderRef = _this$state4.SliderRef;
      var centerMode = settings.centerMode,
          centerPadding = settings.centerPadding,
          slidesToShow = settings.slidesToShow;

      if (SliderRef) {
        var padding = 0;

        if (typeof centerPadding === 'string') {
          var _centerPadding$match = centerPadding.match(/\d+/g);

          var _centerPadding$match2 = _slicedToArray(_centerPadding$match, 1);

          padding = _centerPadding$match2[0];
        } else if (typeof centerPadding === 'number') {
          padding = centerPadding;
        } else {
          padding = 50;
          console.warn('centerPadding have to be number or string like 50px');
        }

        var offsetWidth = SliderRef.offsetWidth;

        if (offsetWidth <= 0) {
          offsetWidth = window.innerWidth;
        }

        var sliderWidth = centerMode ? offsetWidth - padding * 2 : offsetWidth;
        var width = sliderWidth / slidesToShow;
        return width;
      }

      return 0;
    });

    _defineProperty(_assertThisInitialized(_this), "slideInit", function () {
      var _this$state5 = _this.state,
          SliderRef = _this$state5.SliderRef,
          initialSlide = _this$state5.settings.initialSlide;

      if (SliderRef && _this.isMounted) {
        var width = _this.widthInit();

        _this.setState({
          width: width
        }, function () {
          _this.dim = width * 2; // this.settings.gutter = padding;

          _this.scroll('init');

          if (initialSlide) {
            if (typeof initialSlide === 'number') {
              if (initialSlide > 0 && !_this.initialSet) {
                _this.slickSet(initialSlide);

                _this.initialSet = true;
              }
            } else {
              _this.slickSet(0);

              _this.initialSet = false;
              console.warn('initialSlide must be a number');
            }
          }

          _this.connectObserver();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      var _this$state6 = _this.state,
          settings = _this$state6.settings,
          SliderRef = _this$state6.SliderRef,
          height = _this$state6.height;

      if (settings.adaptiveHeight && SliderRef) {
        var index = _this.wrap(_this.center);

        var elem = _this.items.get(index);

        var offsetHeight = elem.offsetHeight;

        if (height !== offsetHeight && offsetHeight > 0 && _this.isMounted) {
          _this.setState({
            height: offsetHeight
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "xpos", function (e) {
      // touch event
      if (e.targetTouches && e.targetTouches.length >= 1) {
        return e.targetTouches[0].clientX;
      } // mouse event


      return e.clientX;
    });

    _defineProperty(_assertThisInitialized(_this), "ypos", function (e) {
      // touch event
      if (e.targetTouches && e.targetTouches.length >= 1) {
        return e.targetTouches[0].clientY;
      } // mouse event


      return e.clientY;
    });

    _defineProperty(_assertThisInitialized(_this), "wrap", function (x) {
      return _this.items.getIndex(x);
    });

    _defineProperty(_assertThisInitialized(_this), "cycleTo", function (n, callback) {
      var diff = _this.center % _this.items.length - n; // Account for wraparound.

      if (!_this.noWrap) {
        if (diff < 0) {
          if (Math.abs(diff + _this.items.length) < Math.abs(diff)) {
            diff += _this.items.length;
          }
        } else if (diff > 0) {
          if (Math.abs(diff - _this.items.length) < diff) {
            diff -= _this.items.length;
          }
        }
      }

      _this.target = _this.dim * Math.round(_this.offset / _this.dim); // Next

      if (diff < 0) {
        _this.target += _this.dim * Math.abs(diff); // Prev
      } else if (diff > 0) {
        _this.target -= _this.dim * diff;
      } // Set one time callback


      if (typeof callback === 'function') {
        _this.oneTimeCallback = callback;
      } // Scroll


      if (_this.offset !== _this.target) {
        _this.amplitude = _this.target - _this.offset;
        _this.timestamp = Date.now();
        requestAnimationFrame(function () {
          _this.autoScroll('start');
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function (n) {
      if (_this.scrollType.type === 'arrows') {
        _this.doubleTrigger = true;
      }

      if (typeof n === 'number') {
        _this.cycleTo(n);
      } else {
        var activeIndex = _this.state.activeIndex;

        _this.cycleTo(activeIndex + 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function (n) {
      if (_this.scrollType.type === 'arrows') {
        _this.doubleTrigger = true;
      }

      if (typeof n === 'number') {
        _this.cycleTo(n);
      } else {
        var activeIndex = _this.state.activeIndex;

        _this.cycleTo(activeIndex - 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slickSet", function (n, callback) {
      return _this.cycleTo(n, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "createVirtualList", function () {
      var _this$state7 = _this.state,
          _this$state7$settings = _this$state7.settings,
          slidesToShow = _this$state7$settings.slidesToShow,
          overScan = _this$state7$settings.overScan,
          activeIndex = _this$state7.activeIndex;

      if (_this.virtualList.length > (slidesToShow + overScan) * 2 + 1) {
        var result = [];
        var getIndex = [];
        var newActiveIndex = activeIndex;
        var _this$scrollType2 = _this.scrollType,
            type = _this$scrollType2.type,
            direction = _this$scrollType2.direction;

        switch (type) {
          case 'scroll':
            {
              if (direction === 'left') newActiveIndex += 1;else newActiveIndex -= 1;
              break;
            }

          case 'arrows':
            {
              if (direction === 'next') newActiveIndex += 1;else newActiveIndex -= 1;
              break;
            }

          case 'dots':
            {
              if (direction === 'right') newActiveIndex += 1;else newActiveIndex -= 1;
              break;
            }

          case 'wheel':
            {
              if (direction === 'next') newActiveIndex += 1;else newActiveIndex -= 1;
              break;
            }

          case 'autoplay':
            {
              newActiveIndex += 1;
              break;
            }

          default:
            break;
        }

        var i = 0;

        for (; i < slidesToShow + overScan; i += 1) {
          if (i === 0) {
            var index = _this.items.getIndex(newActiveIndex);

            getIndex.push(index);
          } else {
            var rightIndex = _this.items.getIndex(newActiveIndex + i);

            var leftIndex = _this.items.getIndex(newActiveIndex - i);

            getIndex.push(rightIndex);
            getIndex.unshift(leftIndex);
          }
        }

        if (_this.endIndex >= 0 && typeof _this.endIndex === 'number') {
          var buffer = 0;

          if (activeIndex + _this.endIndex < _this.newChildren.length + _this.scrollDistance && activeIndex + _this.endIndex >= _this.newChildren.length - _this.scrollDistance && (activeIndex >= _this.newChildren.length - _this.scrollDistance || _this.endIndex >= _this.newChildren.length - _this.scrollDistance)) {
            if (_this.endIndex + activeIndex < _this.newChildren.length) {
              if (_this.endIndex < activeIndex) {
                buffer = _this.newChildren.length - activeIndex + _this.endIndex;
              } else {
                buffer = _this.newChildren.length - _this.endIndex + activeIndex;
              }
            } else if (_this.endIndex < activeIndex) {
              buffer = _this.newChildren.length + _this.scrollDistance - activeIndex + _this.endIndex;
            } else {
              buffer = _this.newChildren.length + _this.scrollDistance - _this.endIndex + activeIndex;
            }
          } else {
            buffer = _this.endIndex < activeIndex ? activeIndex - _this.endIndex : _this.endIndex - activeIndex;
          }

          for (var j = 0; j < buffer; j += 1) {
            var _rightIndex = _this.items.getIndex(newActiveIndex + i + j);

            var _leftIndex = _this.items.getIndex(newActiveIndex - i - j);

            switch (type) {
              case 'arrows':
                {
                  if (direction === 'next') getIndex.push(_rightIndex);else getIndex.unshift(_leftIndex);
                  break;
                }

              case 'dots':
                {
                  if (direction === 'right') getIndex.push(_rightIndex);else getIndex.unshift(_leftIndex);
                  break;
                }

              case 'wheel':
                {
                  if (direction === 'next') getIndex.push(_rightIndex);else getIndex.unshift(_leftIndex);
                  break;
                }

              case 'autoplay':
                {
                  getIndex.push(_rightIndex);
                  break;
                }

              default:
                break;
            }
          }
        }

        getIndex.sort(function (a, b) {
          return a - b;
        });

        for (i = 0; i < getIndex.length; i += 1) {
          var childrenIndex = getIndex[i];
          var children = _this.newChildren[childrenIndex];
          result.push(children);
        }

        return result;
      }

      return _this.virtualList;
    });

    _this.state = {
      SliderRef: null,
      width: 0,
      height: 0,
      autoplaying: null,
      settings: _types.defaultProps,
      activeIndex: 0
    };
    _this.touchObject = {};
    _this.newChildren = [];
    _this.virtualList = [];
    _this.center = 0;
    _this.offset = 0;
    _this.target = 0;
    _this.items = null;
    _this.virtualItem = null;
    _this.dim = 1;
    _this.xform = '';
    _this.resizeObserver = null;
    _this.autoplayTimer = null;
    ['', 'Webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
      var e = "".concat(prefix, "Transform");

      if (typeof document !== 'undefined' && typeof document.body.style[e] !== 'undefined') {
        _this.xform = e;
        return false;
      }

      return true;
    });
    /* switch */

    _this.doubleTrigger = false;
    _this.initialSet = false;
    _this.beforeChangeTrigger = false;
    _this.scrollEnd = false;
    _this.autoplayTimer = null;
    _this.scrollType = {};
    _this.scrollOptions = {};
    _this.rerender = false;
    _this.resizeHeight = false;
    _this.endIndex = null;
    _this.changeWindow = false;
    /* functionBind */

    _this.scroll = _this.scroll.bind(_assertThisInitialized(_this));
    _this.setRef = _this.setRef.bind(_assertThisInitialized(_this));
    _this.slideInit = _this.slideInit.bind(_assertThisInitialized(_this));
    _this.slickNext = _this.slickNext.bind(_assertThisInitialized(_this));
    _this.slickPrev = _this.slickPrev.bind(_assertThisInitialized(_this));
    _this.slickSet = _this.slickSet.bind(_assertThisInitialized(_this));
    _this.cycleTo = _this.cycleTo.bind(_assertThisInitialized(_this));
    _this.autoPlay = _this.autoPlay.bind(_assertThisInitialized(_this));
    _this.handleCarouselTap = _listener.handleCarouselTap.bind(_assertThisInitialized(_this));
    _this.signupListener = _listener.signupListener.bind(_assertThisInitialized(_this));
    _this.removeListener = _listener.removeListener.bind(_assertThisInitialized(_this));
    _this.handleCarouselDrag = _listener.handleCarouselDrag.bind(_assertThisInitialized(_this));
    _this.handleCarouselRelease = _listener.handleCarouselRelease.bind(_assertThisInitialized(_this));
    _this.handleAutoplayPause = _listener.handleAutoplayPause.bind(_assertThisInitialized(_this));
    _this.handleResize = (0, _throttle["default"])(_listener.handleResize.bind(_assertThisInitialized(_this)), 1000, {
      leading: true
    });
    _this.handleResizeHeight = (0, _throttle["default"])(_listener.handleResizeHeight.bind(_assertThisInitialized(_this)), 500);
    _this.handleVisibilityChange = _listener.handleVisibilityChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _listener.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleClick = _listener.handleClick.bind(_assertThisInitialized(_this));
    _this.handleWheel = _listener.handleWheel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isMounted = true;
      window.addEventListener('resize', this.handleResize);
      this.init();
      var onInit = this.props.onInit;
      if (onInit && typeof onInit === 'function') onInit(this);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      this.init();
      var slidesPerRow = nextProps.slidesPerRow,
          rows = nextProps.rows;
      var _this$state$settings = this.state.settings,
          originPerRow = _this$state$settings.slidesPerRow,
          originRows = _this$state$settings.rows;

      if (slidesPerRow !== originPerRow || rows !== originRows) {
        this.resizeHeight = false;
      }

      return (0, _isEqual["default"])(nextProps, this.props) || (0, _isEqual["default"])(nextState, this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var SliderRef = this.state.SliderRef;

      var newProps = _objectSpread({}, this.props, {
        children: []
      });

      var newPrevProps = _objectSpread({}, prevProps, {
        children: []
      });

      var children = this.props.children;

      if (!(0, _isEqual["default"])(newProps, newPrevProps) || prevProps.children.length !== children.length) {
        var onReInit = this.props.onReInit;
        this.init();
        this.setRef(SliderRef);
        if (onReInit && typeof onReInit === 'function') onReInit(this);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      this.isMounted = false;
    }
    /**
     * settings init
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state8 = this.state,
          height = _this$state8.height,
          settings = _this$state8.settings,
          activeIndex = _this$state8.activeIndex;

      var spec = _objectSpread({}, settings, {}, this.prop);

      var centerPadding = settings.centerPadding,
          centerMode = settings.centerMode;
      var padding = typeof centerPadding === 'string' ? centerPadding : "".concat(centerPadding, "px");
      /*  arrow  */

      var arrowProps = extractObject(spec, ['arrows', 'arrowsScroll', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow', 'arrowsBlock']);
      var prevArrow;
      var nextArrow;

      if (settings.arrows) {
        prevArrow = _react["default"].createElement(_arrows.PrevArrow, _extends({}, arrowProps, {
          clickHandler: function clickHandler(options) {
            _this2.beforeChangeTrigger = false;
            _this2.scrollType = {
              type: 'arrows',
              direction: 'prev'
            };
            _this2.scrollOptions = options;

            _this2.slickPrev(activeIndex - options.arrowsScroll);
          }
        }));
        nextArrow = _react["default"].createElement(_arrows.NextArrow, _extends({}, arrowProps, {
          clickHandler: function clickHandler(options) {
            _this2.beforeChangeTrigger = false;
            _this2.scrollType = {
              type: 'arrows',
              direction: 'next'
            };
            _this2.scrollOptions = options;

            _this2.slickNext(activeIndex + options.arrowsScroll);
          }
        }));
      }
      /*  Dots  */


      var dots;

      if (settings.dots === true && this.items) {
        if (this.items.length >= settings.slidesToShow) {
          var dotProps = extractObject(spec, ['dotsClass', 'slidesToShow', 'dotsScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']);
          var pauseOnDotsHover = settings.pauseOnDotsHover;
          Object.assign(dotProps, {
            activeIndex: activeIndex,
            slideCount: this.items.length,
            clickHandler: function clickHandler(options) {
              _this2.beforeChangeTrigger = false;
              var right = 0;
              var left = 0;
              var direction = null;

              if (activeIndex > options.index) {
                right = _this2.newChildren.length - activeIndex + options.index;
                left = activeIndex - options.index;
                direction = right < left ? 'right' : 'left';
              } else {
                right = options.index - activeIndex;
                left = _this2.newChildren.length - options.index + activeIndex;
                direction = right <= left ? 'right' : 'left';
              }

              _this2.scrollType = {
                type: 'dots',
                direction: direction
              };
              _this2.scrollOptions = options;

              _this2.slickSet(options.index * options.dotsScroll);
            },
            onMouseEnter: pauseOnDotsHover ? this.onDotsLeave : null,
            onMouseOver: pauseOnDotsHover ? this.onDotsOver : null,
            onMouseLeave: pauseOnDotsHover ? this.onDotsLeave : null
          });
          dots = _react["default"].createElement(_dots["default"], dotProps);
        }
      }

      var judge = this.items ? settings.slidesToShow < this.items.length : false;
      /*  Slide  */

      var component = _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
        ref: function ref(e) {
          var SliderRef = _this2.state.SliderRef;

          if (!SliderRef && _this2.isMounted) {
            _this2.setRef(e);
          }
        },
        className: "carousel-initialized",
        style: {
          padding: centerMode ? "0 ".concat(padding) : 0
        }
      }, !settings.unslick && judge ? prevArrow : '', _react["default"].createElement("div", {
        style: {
          height: "".concat(height, "px")
        },
        className: "carousel-track"
      }, this.rerender ? this.newChildren : this.virtualList), !settings.unslick && judge ? nextArrow : ''), !settings.unslick && judge ? dots : '');

      if (settings === 'unslick') {
        var className = "regular slider ".concat(settings.className || '');
        component = _react["default"].createElement("div", {
          className: className
        }, this.newChildren);
      }

      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(settings.className)
      }, component);
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = _types.propTypes;
Slider.defaultProps = _types.defaultProps;
var _default = Slider;
exports["default"] = _default;