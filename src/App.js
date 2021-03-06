import React, {Component} from "react";
import "./Views/roun1.css";

import "react-notifications/lib/notifications.css";
import {NotificationContainer} from "react-notifications";

import Router from "./Routes";
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            // TODO: add link of round 2
            // TODO: add instruction conectivity
            <div className="App">
                <BrowserRouter>
                    <Router/>
                    <NotificationContainer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
