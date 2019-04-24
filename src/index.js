import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Confirmacao from './sections/confirmation.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/confirmacao" component={Confirmacao} />
            <Route path="/" component={App} />            
        </Switch>
    </BrowserRouter>
    , document.getElementById("root")
);