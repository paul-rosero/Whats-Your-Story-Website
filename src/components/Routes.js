import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyStory from './pages/MyStory';
import Homepage from './pages/Homepage';
import Merch from './pages/Merch';
import Podcast from './pages/Podcast';
import Contact from './pages/Contact';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route path="/my-story" component={ MyStory } />
            <Route path="/merch" component={ Merch } />
            <Route path="/podcast" component={ Podcast } />
            <Route path="/contact" component={ Contact } />
        </Switch>
    )
}

export default Routes;