
'use strict';

var _render = require('./render');

var _connect = require('./connect');

var _dongbaoState = require('dongbao-state');

var _calcWithStates = require('./calcWithStates');

var _createStore = require('./createStore');

module.exports = {

  render: _render.render,
  connect: _connect.connect,

  State: _dongbaoState.State,
  Actions: _dongbaoState.Actions,
  States: _dongbaoState.States,
  getState: _dongbaoState.getState,
  createStore: _createStore.createStore,

  createCalcWithStates: _calcWithStates.createCalcWithStates
};