import React from 'react';
import NavBar from './NavbarComponent'
import '../../App.css'; 
import Router from '../Router'

const appComponent = ({routes}) =>   {
    return (
      <div>
       <NavBar/>
       <Router routes={routes}/>
      </div>
    )
}

export default appComponent;