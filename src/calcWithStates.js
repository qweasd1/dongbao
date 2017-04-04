/**
 * Created by tony on 4/4/17.
 */
import {createRalativePathSelector} from "dongbao-state";

export function createCalcWithStates(paths, statePaths, calcFn) {
  let stateSelectors = statePaths.map(statePath => createRalativePathSelector(paths, statePath))
  
  return function calWithStates(state) {
    
    return calcFn.apply(null, stateSelectors.map(selector => selector(state)))
  }
}