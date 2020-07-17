"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = currentScreenSize;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function currentScreenSize() {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    debounceTime: 200
  };

  var _useState = (0, _react.useState)(getScreenSize()),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var resizeListener = function resizeListener() {
    setWidth(getScreenSize());
  };

  var handler = debounce(resizeListener, settings.debounceTime);
  (0, _react.useEffect)(function () {
    window.addEventListener('resize', handler);
    return function () {
      return window.removeEventListener('resize', handler);
    };
  }, []);
  return width;
}
"use strict";

function debounce(fn, timeout) {
  var timeoutId = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        fn.apply(_this, args);
        timeoutId = null;
      }, timeout);
    } else {
      fn.apply(this, args);
      timeoutId = setTimeout(function () {
        timeoutId = null;
      }, timeout);
    }
  };
}
"use strict";

var getScreenSize = function getScreenSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};
