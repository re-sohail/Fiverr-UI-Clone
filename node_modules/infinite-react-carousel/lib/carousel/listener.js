"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCarouselTap = handleCarouselTap;
exports.handleCarouselDrag = handleCarouselDrag;
exports.handleCarouselRelease = handleCarouselRelease;
exports.handleResizeHeight = handleResizeHeight;
exports.handleClick = handleClick;
exports.handleAutoplayPause = handleAutoplayPause;
exports.handleKeyDown = handleKeyDown;
exports.handleResize = handleResize;
exports.handleWheel = handleWheel;
exports.handleVisibilityChange = handleVisibilityChange;
exports.signupListener = signupListener;
exports.removeListener = removeListener;

var _utils = require("./utils");

/**
 * Handle Carousel Tap
 * @param {Event} e
 */
function handleCarouselTap(e) {
  // Fixes firefox draggable image bug
  if (e.type === 'mousedown' && e.target.tagName === 'IMG') {
    e.preventDefault();
  }

  this.pressed = true;
  this.dragged = false;
  this.verticalDragged = false;
  this.reference = this.xpos(e);
  this.referenceY = this.ypos(e);
  this.touchObject = Object.assign(this.touchObject, {
    startX: this.reference,
    startY: this.referenceY
  });
  this.velocity = 0;
  this.amplitude = 0;
  this.frame = this.offset;
  this.timestamp = Date.now();
  clearInterval(this.ticker);
  this.ticker = setInterval(this.track, 100);
}
/**
 * Handle Carousel Drag
 * @param {Event} e
 */


function handleCarouselDrag(e) {
  if (this.pressed) {
    var x = this.xpos(e);
    var y = this.ypos(e);
    var delta = this.reference - x;
    var deltaY = Math.abs(this.referenceY - y);
    var direction = (0, _utils.getSwipeDirection)(Object.assign(this.touchObject, {
      endX: x,
      endY: y
    }));
    this.scrollType = {
      type: 'scroll',
      direction: direction
    };

    if (deltaY < 30 && !this.verticalDragged) {
      // If vertical scrolling don't allow dragging.
      if (delta > 2 || delta < -2) {
        this.dragged = true;
        this.reference = x;
        this.scroll('drag', this.offset + delta);
      }
    } else if (this.dragged) {
      // If dragging don't allow vertical scroll.
      e.preventDefault();
      e.stopPropagation();
    } else {
      // Vertical scrolling.
      this.verticalDragged = true;
    }
  }

  if (this.dragged) {
    // If dragging don't allow vertical scroll.
    e.preventDefault();
    e.stopPropagation();
  }
}
/**
   * Handle Carousel Release
   * @param {Event} e
   */


function handleCarouselRelease(e) {
  if (this.pressed) {
    this.pressed = false;
  } else {
    return;
  }

  this.beforeChangeTrigger = false;
  var onSwipe = this.props.onSwipe;
  onSwipe(this.scrollType.direction);
  clearInterval(this.ticker);
  this.target = this.offset;

  if (this.velocity > 10 || this.velocity < -10) {
    this.amplitude = 0.9 * this.velocity;
    this.target = this.offset + this.amplitude;
  }

  this.target = Math.round(this.target / this.dim) * this.dim; // No wrap of items.

  if (this.noWrap) {
    if (this.target >= this.dim * (this.items.length - 1)) {
      this.target = this.dim * (this.items.length - 1);
    } else if (this.target < 0) {
      this.target = 0;
    }
  }

  this.amplitude = this.target - this.offset;
  this.timestamp = Date.now();
  requestAnimationFrame(this.autoScroll);

  if (this.dragged) {
    e.preventDefault();
    e.stopPropagation();
  }
}
/**
 * Handle window resize will change items Height
 */


function handleResizeHeight(mutations) {
  var _this = this;

  var height = this.state.height;
  var mutation = mutations[mutations.length - 1];
  var offsetHeight = mutation.target.offsetHeight;

  if (height !== offsetHeight && offsetHeight > 0 && this.isMounted) {
    this.setState({
      height: offsetHeight
    }, function () {
      _this.resizeHeight = true;
    });
  }
}
/**
 * Handle carousel click
 */


function handleClick() {
  this.disconnectObserver();
}
/**
 * Handle autoplay hover to pause
 * @param {Object} options
 * @param {Number} options.autoplaySpeed
 */


function handleAutoplayPause() {
  var SliderRef = this.state.SliderRef;

  if (this.autoplayTimer) {
    clearInterval(this.autoplayTimer);
    this.autoplayTimer = null;
    SliderRef.removeEventListener('mouseover', this.handleAutoplayPause);
    SliderRef.addEventListener('mouseleave', this.autoPlay);
  }
}

function handleKeyDown(e) {
  var _this$state$settings = this.state.settings,
      rtl = _this$state$settings.rtl,
      accessibility = _this$state$settings.accessibility;
  var dir = (0, _utils.keyHandler)(e, accessibility, rtl);

  if (dir === 'previous') {
    this.slickPrev();
  } else if (dir === 'next') {
    this.slickNext();
  }
}
/**
 * Handle Throttle Resize
 * @param {Event} e
 */


function handleResize(e) {
  this.slideInit();
  this.connectObserver();
  var settings = this.state.settings;
  var onResize = settings.onResize;

  if (settings.fullWidth) {
    var width = this.state.width;
    this.dim = width * 2 + settings.gutter;
    this.offset = this.center * 2 * width;
    this.target = this.offset;
  } else {
    this.scroll('resize');
  }

  onResize(e);
}

function handleWheel(e) {
  e.stopPropagation();
  e.preventDefault();
  this.beforeChangeTrigger = false;
  var _this$state = this.state,
      wheelScroll = _this$state.settings.wheelScroll,
      activeIndex = _this$state.activeIndex;
  var deltaY = e.deltaY;

  if (deltaY > 0) {
    this.scrollType = {
      type: 'wheel',
      direction: 'next'
    };
    this.slickNext(activeIndex + wheelScroll);
  } else if (deltaY < 0) {
    this.scrollType = {
      type: 'wheel',
      direction: 'prev'
    };
    this.slickPrev(activeIndex - wheelScroll);
  }
}

function handleVisibilityChange() {
  this.changeWindow = typeof document !== 'undefined' && document.visibilityState === 'visible';
}

function signupListener() {
  var _this$state2 = this.state,
      settings = _this$state2.settings,
      SliderRef = _this$state2.SliderRef;
  var swipe = settings.swipe,
      accessibility = settings.accessibility,
      wheel = settings.wheel;

  if (swipe) {
    SliderRef.addEventListener('touchstart', this.handleCarouselTap);
    SliderRef.addEventListener('touchmove', this.handleCarouselDrag);
    SliderRef.addEventListener('touchend', this.handleCarouselRelease);
  } else {
    SliderRef.removeEventListener('touchstart', this.handleCarouselTap);
    SliderRef.removeEventListener('touchmove', this.handleCarouselDrag);
    SliderRef.removeEventListener('touchend', this.handleCarouselRelease);
  }

  if (accessibility) {
    SliderRef.addEventListener('keydown', this.handleKeyDown);
  } else {
    SliderRef.removeEventListener('keydown', this.handleKeyDown);
  }

  if (wheel) {
    SliderRef.addEventListener('wheel', this.handleWheel);
  } else {
    SliderRef.removeEventListener('wheel', this.handleWheel);
  }

  SliderRef.addEventListener('mousedown', this.handleCarouselTap);
  SliderRef.addEventListener('mousemove', this.handleCarouselDrag);
  SliderRef.addEventListener('mouseup', this.handleCarouselRelease);
  SliderRef.addEventListener('mouseleave', this.handleCarouselRelease);
}

function removeListener() {
  var _this$state3 = this.state,
      settings = _this$state3.settings,
      SliderRef = _this$state3.SliderRef;
  var swipe = settings.swipe,
      accessibility = settings.accessibility,
      wheel = settings.wheel,
      autoplay = settings.autoplay;

  if (swipe) {
    SliderRef.removeEventListener('touchstart', this.handleCarouselTap);
    SliderRef.removeEventListener('touchmove', this.handleCarouselDrag);
    SliderRef.removeEventListener('touchend', this.handleCarouselRelease);
  }

  if (accessibility) {
    SliderRef.removeEventListener('keydown', this.handleKeyDown);
  }

  if (wheel) {
    SliderRef.removeEventListener('wheel', this.handleWheel);
  }

  if (autoplay) {
    window.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  SliderRef.removeEventListener('mousedown', this.handleCarouselTap);
  SliderRef.removeEventListener('mousemove', this.handleCarouselDrag);
  SliderRef.removeEventListener('mouseup', this.handleCarouselRelease);
  SliderRef.removeEventListener('mouseleave', this.handleCarouselRelease);
}