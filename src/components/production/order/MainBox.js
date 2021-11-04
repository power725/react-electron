import React from 'react';

import FormGroup from '../../common/FormGroup';

export default function MainBox(props) {
    return(
        <React.Fragment>
            <div className="px-4 py-2">Kutu</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Viskozite (KU)">
                        <input className="cs-input"/>
                    </FormGroup>
                    <FormGroup label="Yoğunluk (gr/cm3)">
                        <input className="cs-input"/>
                    </FormGroup>
                    <FormGroup label="PH">
                        <input className="cs-input"/>
                    </FormGroup>
                    
                 
 
                </div>

              
            </div>
        </React.Fragment>
    );
}