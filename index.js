'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = require('react'),
  _getScreenSize = _interopRequireDefault(require('./src/utils/getScreenSize')),
  _debounce = _interopRequireDefault(require('./src/utils/debounce'));
function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}
function _slicedToArray(a, b) {
  return (
    _arrayWithHoles(a) ||
    _iterableToArrayLimit(a, b) ||
    _unsupportedIterableToArray(a, b) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(a, b) {
  if (a) {
    if ('string' == typeof a) return _arrayLikeToArray(a, b);
    var c = Object.prototype.toString.call(a).slice(8, -1);
    return (
      'Object' === c && a.constructor && (c = a.constructor.name),
      'Map' === c || 'Set' === c
        ? Array.from(a)
        : 'Arguments' === c ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
        ? _arrayLikeToArray(a, b)
        : void 0
    );
  }
}
function _arrayLikeToArray(a, b) {
  (null == b || b > a.length) && (b = a.length);
  for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
  return d;
}
function _iterableToArrayLimit(a, b) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(a)) {
    var c = [],
      d = !0,
      e = !1,
      f = void 0;
    try {
      for (
        var g, h = a[Symbol.iterator]();
        !(d = (g = h.next()).done) && (c.push(g.value), !(b && c.length === b));
        d = !0
      );
    } catch (a) {
      (e = !0), (f = a);
    } finally {
      try {
        d || null == h['return'] || h['return']();
      } finally {
        if (e) throw f;
      }
    }
    return c;
  }
}
function _arrayWithHoles(a) {
  if (Array.isArray(a)) return a;
}
var currentScreenSize = function () {
    var a =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : { debounceTime: 200 },
      b = (0, _react.useState)((0, _getScreenSize['default'])()),
      c = _slicedToArray(b, 2),
      d = c[0],
      e = c[1],
      f = (0, _debounce['default'])(function handleResize() {
        return e((0, _getScreenSize['default'])());
      }, a.debounceTime);
    return (
      (0, _react.useEffect)(function () {
        return (
          window.addEventListener('resize', f),
          function () {
            window.removeEventListener('resize', f);
          }
        );
      }, []),
      { width: d.width, height: d.height }
    );
  },
  _default = currentScreenSize;
exports['default'] = _default;
