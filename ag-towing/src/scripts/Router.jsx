import { BrowserRouter } from 'react-router-dom'
import React from 'react'

export default ({routes}) => {
    <BrowserRouter basename="/a&g-towing">
        {routes()}
    </BrowserRouter>
}