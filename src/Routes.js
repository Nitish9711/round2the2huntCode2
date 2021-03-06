import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Round1 from "./Views/Round1";
const Routes = (props) => {
    return (
        <Switch>
            <Route path={process.env.PUBLIC_URL + "/"} exact component={Round1}/>
        </Switch>
    );
};

export default Routes;
