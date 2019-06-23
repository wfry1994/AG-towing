import { Route, Switch } from 'react-router-dom'
import React from 'react'
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import PricingComponent from './components/PricingComponent'
import NavBar from './components/Navbar/NavbarComponent'

const routes = () => {
  return (
      <>
        <NavBar>
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/about'component={AboutComponent}/>
            <Route path='/pricing' component={PricingComponent}/>
          </Switch>
        </NavBar> 
      </>
  )
}

export default routes
