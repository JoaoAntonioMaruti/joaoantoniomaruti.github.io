import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/Home.js';

import { Router, Route, browserHistory } from 'react-router';


ReactDOM.render(
    <Router  history={browserHistory} >
        <Route path="/" component={Home}>
            <Route path="*" component={Home}/>
        </Route>
    </Router>
, document.getElementById('app'));