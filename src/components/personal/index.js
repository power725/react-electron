import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import List from './list';
import PayrollList from './payrollList';
import AddStaffCard from './addStaffCard';
import UpdateMassStaff from './updateMassStaff';

export default function PersonalIndex() {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/personal/list" component={List} />
                <Route path="/personal/payroll-list" component={PayrollList} />
                <Route path="/personal/add-staff-card/:id?" component={AddStaffCard} />
                <Route path="/personal/update-mass-staff" component={UpdateMassStaff} />

                <Redirect to="/personal/list" />
            </Switch>
        </React.Fragment>
    );
}