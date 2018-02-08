"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxNumericSeparator = _interopRequireDefault(require("@babel/plugin-syntax-numeric-separator"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  function replaceNumberArg(_ref) {
    var node = _ref.node;

    if (node.callee.name !== "Number") {
      return;
    }

    var arg = node.arguments[0];

    if (!_core.types.isStringLiteral(arg)) {
      return;
    }

    arg.value = arg.value.replace(/_/g, "");
  }

  return {
    inherits: _pluginSyntaxNumericSeparator.default,
    visitor: {
      CallExpression: replaceNumberArg,
      NewExpression: replaceNumberArg,
      NumericLiteral: function NumericLiteral(_ref2) {
        var node = _ref2.node;
        var extra = node.extra;

        if (extra && /_/.test(extra.raw)) {
          extra.raw = extra.raw.replace(/_/g, "");
        }
      }
    }
  };
}