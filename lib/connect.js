
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _reactRedux = require('react-redux');

var _dongbaoState = require('dongbao-state');

var _calcWithStates = require('./calcWithStates');

function connect(_ref) {
  var _ref$path = _ref.path,
      path = _ref$path === undefined ? "/src" : _ref$path,
      _ref$states = _ref.states,
      states = _ref$states === undefined ? ["."] : _ref$states,
      map = _ref.map;

  var paths = (0, _dongbaoState.parsePaths)(path);
  return (0, _reactRedux.connect)((0, _calcWithStates.createCalcWithStates)(paths, states, map));
}