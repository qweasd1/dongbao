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

    return calcFn.apply(null, stateSelectors.map(function (selector) {
      return selector(state);
    }));
  };
}