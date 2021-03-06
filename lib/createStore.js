"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;

var _dongbaoState = require("dongbao-state");

var _redux = require("redux");

function createStore() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      enhancer = _ref.enhancer,
      initState = _ref.initState;

  var store = (0, _redux.createStore)(_dongbaoState.RootReducer, initState, enhancer);
  (0, _dongbaoState.Config)(store);
  return store;
}