/**
 * Created by tony on 4/4/17.
 */
import {CreateRootReducer, initState as defaultInitState, Config} from "dongbao-state";
import {createStore as reduxCreateStore} from "redux";


export function createStore({enhancer, initState} = {}) {
  let finalInitState = initState || defaultInitState
  let store = reduxCreateStore(CreateRootReducer(), finalInitState, enhancer)
  Config(store)
  return store
}


