import React from 'react';

import FormGroup from '../../common/FormGroup';


export default function Producer(props) {
    return(
        <React.Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <FormGroup label="" className="mt-4">
                    <input id="kisisel" name="kisisel" type="checkbox"
                        className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                    <label htmlFor="kisisel" className="block text-sm ellipsis">Müstahsil Parametreleri Uygulansın</label>
                </FormGroup>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Bağkur No">
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="Muafiyet Belge No">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Komisyon Oranı">
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="Muafiyet Başlangıç" icon={require('../../../images/icons/calendar.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Muafiyet Bitiş" icon={require('../../../images/icons/calendar.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}