import { BrowserRouter } from 'react-router-dom'
import React from 'react'

export default ({routes}) =>
  <BrowserRouter>
      {routes.default()}
  </BrowserRouter>