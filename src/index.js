/**
 * Created by tony on 4/4/17.
 */
'use strict'
import {render} from './render'
import {connect} from './connect'
import {State,Actions,States,getState} from 'dongbao-state'
import {createCalcWithStates} from './calcWithStates'
import {createStore} from './createStore'
 



module.exports = {
  
  render,
  connect,
  
  // for state management
  State,
  Actions,
  States,
  getState,
  createStore,
  
  // utils
  createCalcWithStates
}
