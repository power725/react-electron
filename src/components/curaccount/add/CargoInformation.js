import React from 'react';

import FormGroup from '../../common/FormGroup';


export default function CargoInformation(props) {
    return(
        <React.Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Kargo Firması" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Ödeme Şekli" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}