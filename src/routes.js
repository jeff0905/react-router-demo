import React from 'react';
import { Route, Switch } from 'react-router';

import Nav from './components/nav';
import Home from './pages/home';
import Detail from './pages/detail';

const routes = (
    <div>
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
        </Switch>
    </div>
)

export default routes;