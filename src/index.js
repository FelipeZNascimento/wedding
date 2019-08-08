import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import history from "./components/history.jsx";

import Confirmacao from './sections/confirmation.jsx';
import Lista from './sections/list.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter history={history}>
        <Switch>
            <Route path="/confirmacao" component={Confirmacao} />
            <Route path="/lista" component={Lista} />
            <Route path="/" component={App} />            
        </Switch>
    </BrowserRouter>
    , document.getElementById("root")
);