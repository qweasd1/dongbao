'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _createStore = require('./createStore');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(root, storeOptions) {
  if (!root) {
    throw new Error("component is needed for render");
  }
  var store = (0, _createStore.createStore)(storeOptions);

  global.document && (0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    root
  ), global.document.getElementById('root'));
}