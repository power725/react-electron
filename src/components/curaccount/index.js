import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import Add from './add/index';
import List from './list/index';

export default function CurrentAccountIndex() {
    return (
        <React.Fragment>
            <div className="p-3">
                <Switch>
                    <Route path="/current-account/add/:page?/:id?" component={Add} />
                    <Route path="/current-account/list" component={List} />
                    <Redirect to="/current-account/list" />
                </Switch>
            </div>
        </React.Fragment>
    );
}