import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import Add from './add/index';
import List from './list/index';
import Card from './card/index';
import Order from './order/index';
import Station from './station/index';

export default function ProductionIndex() {
    return(
        <React.Fragment>
            <div className="p-3">
                <Switch>
                    <Route path="/production/add" component={Add} />
                    <Route path="/production/list" component={List} />
                    <Route path="/production/card" component={Card} />
                    <Route path="/production/order" component={Order} />
                    <Route path="/production/station" component={Station} />
                    <Redirect to="/production/list" />
                </Switch>
            </div>
        </React.Fragment>
    );
}