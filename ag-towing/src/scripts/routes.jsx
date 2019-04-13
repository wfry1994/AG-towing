import { Route, Switch } from 'react-router-dom'
import React from 'react'

export default () => {
    <Switch>
        <Route exact path='/'/>
        <Route  path='/home'/>
        <Route  path='/about'/>
        <Route  path='/pricing'/>
    </Switch>
}