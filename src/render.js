/**
 * Created by tony on 4/4/17.
 */
import {createStore} from './createStore'
import React from 'react'

import {render as reactRender} from 'react-dom'
import {Provider} from 'react-redux'



export function render(RootComponent,storeOptions) {
  // TODO: add more check (e.g. whether it's react component) in the future
  if (!RootComponent) {
    throw new Error("component is needed for render")
  }
  let store = createStore(storeOptions)
  
  global.document && reactRender(
    <Provider store={store}>
      <RootComponent></RootComponent>
    </Provider>,
    global.document.getElementById('root')
  )
}