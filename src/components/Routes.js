import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MyStory from './pages/MyStory'
import Homepage from './pages/Homepage'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route path="/my-story" component={ MyStory } />
        </Switch>
    )
}

export default Routes;