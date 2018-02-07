"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxDynamicImport = _interopRequireDefault(require("@babel/plugin-syntax-dynamic-import"));

var _pluginSyntaxImportMeta = _interopRequireDefault(require("@babel/plugin-syntax-import-meta"));

var _pluginProposalAsyncGeneratorFunctions = _interopRequireDefault(require("@babel/plugin-proposal-async-generator-functions"));

var _pluginProposalClassProperties = _interopRequireDefault(require("@babel/plugin-proposal-class-properties"));

var _pluginProposalObjectRestSpread = _interopRequireDefault(require("@babel/plugin-proposal-object-rest-spread"));

var _pluginProposalOptionalCatchBinding = _interopRequireDefault(require("@babel/plugin-proposal-optional-catch-binding"));

var _pluginProposalUnicodePropertyRegex = _interopRequireDefault(require("@babel/plugin-proposal-unicode-property-regex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(context, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var loose = false;
  var useBuiltIns = false;

  if (opts !== undefined) {
    if (opts.loose !== undefined) loose = opts.loose;
    if (opts.useBuiltIns !== undefined) useBuiltIns = opts.useBuiltIns;
  }

  if (typeof loose !== "boolean") {
    throw new Error("@babel/preset-stage-3 'loose' option must be a boolean.");
  }

  if (typeof useBuiltIns !== "boolean") {
    throw new Error("@babel/preset-stage-3 'useBuiltIns' option must be a boolean.");
  }

  return {
    plugins: [_pluginSyntaxDynamicImport.default, _pluginSyntaxImportMeta.default, _pluginProposalAsyncGeneratorFunctions.default, [_pluginProposalClassProperties.default, {
      loose: loose
    }], [_pluginProposalObjectRestSpread.default, {
      useBuiltIns: useBuiltIns
    }], _pluginProposalOptionalCatchBinding.default, _pluginProposalUnicodePropertyRegex.default]
  };
}