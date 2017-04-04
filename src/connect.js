/**
 * Created by tony on 4/4/17.
 */
'use strict'
import {connect as reactReduxConnect} from 'react-redux'
import {createRalativePathSelector,parsePaths} from 'dongbao-state'


let options = {
  dir:__dirname,
  states:[".","/login",".."],
  map:(state,loginState,Root)=>{
    return {
      
    }
  }
}

export function connect({
  dir="/src", // points to root if not provide
  states=["."], // points to current state if not provide
  map // required
}) {
  let paths = parsePaths(dir)
  let stateSelectors =  states.map(statePath=>createRalativePathSelector(paths,statePath))
  
  function mapStateToProps(state) {
    
    return map.apply(null,stateSelectors.map(selector=>selector(state)))
  }
  
  return reactReduxConnect(mapStateToProps)
}

