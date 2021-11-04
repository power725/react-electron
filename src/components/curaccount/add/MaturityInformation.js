import React from 'react';

import FormGroup from '../../common/FormGroup';


export default function MaturityInformation(props) {
    return(
        <React.Fragment>
            <div className="p-2 text-base font-semibold text-gray-dark">Vade Bilgileri</div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Vadesi Geçen Borç Kont.">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center col-span-2">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center whitespace-nowrap pl-2">Fatura</div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Vadesi Geçen Borç Kont.">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center col-span-2">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center whitespace-nowrap pl-2">İrsaliye</div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Vadesi Geçen Borç Kont.">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center col-span-2">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center whitespace-nowrap pl-2">Sipariş</div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Vade Kontrolü">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center col-span-2">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center whitespace-nowrap pl-2">Sipariş</div>
                        </div>
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}