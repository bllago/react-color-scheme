"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var defaultColorScheme = {
  colors: {
    primary: 'green'
  }
};
var _default = defaultColorScheme;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var createColorScheme = function createColorScheme(theme) {
  var defaultColorScheme = {
    colors: {
      primary: 'green'
    }
  };

  var ColorSchemeContext = _react.default.createContext(theme);

  var ColorSchemeProvider = ColorSchemeContext.Provider;
  var ColorSchemeConsumer = ColorSchemeContext.Consumer;

  var useTheme = function useTheme(localTheme) {
    return _deepmerge.default.all([defaultColorScheme, Object.assign({}, theme), Object.assign({}, localTheme)]);
  };

  return {
    ColorSchemeContext: ColorSchemeContext,
    ColorSchemeProvider: ColorSchemeProvider,
    ColorSchemeConsumer: ColorSchemeConsumer,
    useTheme: useTheme
  };
};

var _default = createColorScheme;
exports.default = _default;
