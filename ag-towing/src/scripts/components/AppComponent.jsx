import React from 'react'
import '../../App.css' 
import Router from '../Router'

const appComponent = ({routes}) => {
    return (
      <>
       <Router routes={routes}/>
      </>
    )
}

export default appComponent