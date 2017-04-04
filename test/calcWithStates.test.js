/**
 * Created by tony on 4/4/17.
 */
import {createCalcWithStates} from '../src/calcWithStates'


describe("createCalcWithStates only states",()=>{
  
  test("=1 state", () => {
    let fn = createCalcWithStates(["a"],["."],(state)=>state)
    expect(fn({a:1})).toEqual(1)
  })
  
  test("=0 state", () => {
    let fn = createCalcWithStates(["a"],[],()=>1)
    expect(fn({a:1})).toEqual(1)
  })
  
  test(">1 state", () => {
    let fn = createCalcWithStates(["a"],["/a","."],(state,aState)=>state+aState)
    expect(fn({a:1})).toEqual(2)
  })
  
})


describe("createCalcWithStates only states",()=>{
  
  test(">1 state", () => {
    let fn = createCalcWithStates(["a"],["/a","."],(state,aState,other)=>state+aState+other)
    expect(fn({a:1},1)).toEqual(3)
  })
  
})