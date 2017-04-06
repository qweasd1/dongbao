/**
 * Created by tony on 4/4/17.
 */
'use strict'
import {connect as reactReduxConnect} from 'react-redux'
import {parsePaths} from 'dongbao-state'
import {createCalcWithStates} from './calcWithStates'


const mapToFirstState = (state)=>{
  return state
}

// let options = {
//   path:__dirname,
//   states:[".","/login",".."],
//   map:(state,loginState,Root)=>{
//     return {
//
//     }
//   }
// }

export function connect({
  path, // points to root if not provide
  states=["."], // points to current state if not provide
  map = mapToFirstState // just map to the first state if not provide
}) {
  let paths = parsePaths(path)
  return reactReduxConnect(createCalcWithStates(paths,states,map))
}

