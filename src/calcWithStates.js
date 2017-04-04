/**
 * Created by tony on 4/4/17.
 */
import {createRalativePathSelector} from "dongbao-state";

/**
 * binding parameters in calcFn with states specified in statePaths
 * @param paths
 * @param statePaths
 * @param calcFn {Function} (state1,state2,....,other_parameters...)
 * @return {calWithStates}
 */
export function createCalcWithStates(paths, statePaths, calcFn) {
  let stateSelectors = statePaths.map(statePath => createRalativePathSelector(paths, statePath))
  
  return function calWithStates(state,...otherParameters) {
    
    return calcFn.apply(null, stateSelectors.map(selector => selector(state)).concat(otherParameters))
  }
}