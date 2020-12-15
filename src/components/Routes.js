import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Bio from '../pages/Bio'
import Homepage from '../pages/Homepage'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route path="/bio" component={ Bio } />
        </Switch>
    )
}

export default Routes;