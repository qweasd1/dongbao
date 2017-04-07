/**
 * Created by tony on 4/4/17.
 */
import {RootReducer, initState as defaultInitState, Config} from "dongbao-state";
import {createStore as reduxCreateStore} from "redux";


export function createStore({enhancer, initState} = {}) {
  let store = reduxCreateStore(RootReducer, initState, enhancer)
  Config(store)
  return store
}


