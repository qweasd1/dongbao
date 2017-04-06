
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _reactRedux = require('react-redux');

var _dongbaoState = require('dongbao-state');

var _calcWithStates = require('./calcWithStates');

var mapToFirstState = function mapToFirstState(state) {
  return { state: state };
};

function connect(_ref) {
  var path = _ref.path,
      _ref$states = _ref.states,
      states = _ref$states === undefined ? ["."] : _ref$states,
      _ref$map = _ref.map,
      map = _ref$map === undefined ? mapToFirstState : _ref$map;

  var paths = (0, _dongbaoState.parsePaths)(path);
  return (0, _reactRedux.connect)((0, _calcWithStates.createCalcWithStates)(paths, states, map));
}