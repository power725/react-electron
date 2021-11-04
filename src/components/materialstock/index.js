import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import Add from './add/index';
import List from './list/index';
import Receipt from './receipt/index';
import AddPen from './addpen/index';

export default function MaterialStockIndex() {
    return(
        <React.Fragment>
            <div className="p-3">
                <Switch>
                    <Route path="/material-stock/add" component={Add} />
                    <Route path="/material-stock/list" component={List} />
                    <Route path="/material-stock/material_receipt" component={Receipt} />
                    <Route path="/material-stock/material_pen" component={AddPen} />
                    <Redirect to="/material-stock/list" />
                </Switch>
            </div>
        </React.Fragment>
    );
}