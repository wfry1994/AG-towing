import { Route, Switch } from 'react-router-dom'
import React from 'react'
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import PricingComponent from './components/PricingComponent'
import NavBar from './components/Navbar/NavbarComponent'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles={
  appContainer: {
    margin: '10px'
  }
}

const routes = ({classes}) => {
  return (
      <>
        <NavBar/>
        <Grid container className={classes.appContainer}>
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/about'component={AboutComponent}/>
            <Route path='/pricing' component={PricingComponent}/>
          </Switch>
        </Grid> 
      </>
  )
}

export default withStyles(styles)(routes)
