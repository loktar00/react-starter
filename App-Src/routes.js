import React from 'react';
import {Router, Route, DefaultRoute} from 'react-router';

import App from './components/App';
import Home from './components/layout/HomeScreen/Home';
import Data from './components/layout/DataScreen/Data';

module.exports = (
    <Route handler={App}>
        <DefaultRoute name='home' handler={Home}/>
        <Route name='data' path='data' handler={Data}/>
    </Route>
);
