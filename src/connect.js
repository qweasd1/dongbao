/**
 * Created by tony on 4/4/17.
 */
'use strict'
import {connect as reactReduxConnect} from 'react-redux'
import {createRalativePathSelector,parsePaths} from 'dongbao-state'
import {createCalcWithStates} from './calcWithStates'



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
  map // required
}) {
  let paths = parsePaths(path)
  return reactReduxConnect(createCalcWithStates(paths,states,map))
}

