"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCalcWithStates = createCalcWithStates;

var _dongbaoState = require("dongbao-state");

function createCalcWithStates(paths, statePaths, calcFn) {
  var stateSelectors = statePaths.map(function (statePath) {
    return (0, _dongbaoState.createRalativePathSelector)(paths, statePath);
  });

  return function calWithStates(state) {
    for (var _len = arguments.length, otherParameters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      otherParameters[_key - 1] = arguments[_key];
    }

    return calcFn.apply(null, stateSelectors.map(function (selector) {
      return selector(state);
    }).concat(otherParameters));
  };
}