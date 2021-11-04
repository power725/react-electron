import React from 'react';

import FormGroup from '../../common/FormGroup';

export default function RiskInformation(props) {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">Açık Hesap</div>
                
                <FormGroup label="Risk Limiti">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center col-span-2">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Limit Aşım İşlemi">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center col-span-2">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center whitespace-nowrap">Fatura, Kasa, Banka</div>
                    </div>
                </FormGroup>

                <FormGroup label="Limit Aşım İşlemi">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center col-span-2">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center whitespace-nowrap">İrsaliye</div>
                    </div>
                </FormGroup>

                <FormGroup label="Limit Aşım İşlemi">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center col-span-2">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center whitespace-nowrap">Sipariş</div>
                    </div>
                </FormGroup>
            </div>

            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">Özel Kodlar</div>
                
                <FormGroup label="Label">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
                
                <FormGroup label="Label">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
                
                <FormGroup label="Label">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
                
                <FormGroup label="Label">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
                
                <FormGroup label="Label">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
            </div>

            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">Yüzdeler</div>

                <FormGroup label="" className="my-2 mb-3">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div></div>
                        <div className="relative flex items-center">Çek</div>
                        <div className="relative flex items-center">Senet</div>
                    </div>
                </FormGroup>
                
                <FormGroup label="Kendi">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div></div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
                
                <FormGroup label="Müşteri Kendi">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div></div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
                
                <FormGroup label="Müşteri Cirolu">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div></div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
            </div>
        </div>
    );
}