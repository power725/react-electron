import React from 'react';

import FormGroup from '../../common/FormGroup';

export default function Codes(props) {
    return(
        <React.Fragment>
            <div className="p-2 text-base font-semibold text-gray-dark">Özel Kodlar</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Grup Kodu" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Kaynak" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Sektörler" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                    
                    <FormGroup label="Sektörler" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}