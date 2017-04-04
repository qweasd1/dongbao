
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _reactRedux = require('react-redux');

var _dongbaoState = require('dongbao-state');

var options = {
  dir: __dirname,
  states: [".", "/login", ".."],
  map: function map(state, loginState, Root) {
    return {};
  }
};

function connect(_ref) {
  var _ref$dir = _ref.dir,
      dir = _ref$dir === undefined ? "/src" : _ref$dir,
      _ref$states = _ref.states,
      states = _ref$states === undefined ? ["."] : _ref$states,
      map = _ref.map;

  var paths = (0, _dongbaoState.parsePaths)(dir);
  var stateSelectors = states.map(function (statePath) {
    return (0, _dongbaoState.createRalativePathSelector)(paths, statePath);
  });

  function mapStateToProps(state) {

    return map.apply(null, stateSelectors.map(function (selector) {
      return selector(state);
    }));
  }

  return (0, _reactRedux.connect)(mapStateToProps);
}