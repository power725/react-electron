import React from 'react';

import FormGroup from '../../common/FormGroup';


export default function B2BB2C(props) {
    return(
        <React.Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="B2B Üye mi?">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">B2C Üye mi?</div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Login Sayısı" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Son Login Tarihi" icon={require('../../../images/icons/calendar.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Son Login IP">
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}