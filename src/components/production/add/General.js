import React from 'react';
import FormGroup from '../../common/FormGroup';


export default function General(props) {
    return(
        <React.Fragment>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <div className="p-2 text-base text-gray-dark">Miktar</div>

                    <FormGroup label="Min. Sipariş Miktarı" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Asgari Miktar" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Azami Miktar" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Risk Kontrol">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>Evet</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Risk Miktarı</div>

                            <div className="relative flex items-center">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>


                    <div className="p-2 text-base text-gray-dark">Raf</div>

                    <FormGroup label="Raf Ömrü">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>Gün</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Raf Yeri">
                        <input className="cs-input" />
                    </FormGroup>
                </div>

                <div>
                    <div className="p-2 text-base text-gray-dark">KDV</div>
                    
                    <FormGroup label="Alış KDV" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                    
                    <FormGroup label="Satış KDV" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                    
                    <FormGroup label="Toptan Satış KDV" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Tevkifat Kodu">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <input className="cs-input pr-8"></input>
                                <img alt="input icon" src={require('../../../images/icons/search.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Tevkifat</div>

                            <div className="relative flex items-center">
                                <input className="cs-input"></input>
                            </div>
                        </div>
                    </FormGroup>

                    
                    <div className="p-2 text-base text-gray-dark">Barkod</div>

                    <FormGroup label="Kare Barkod">
                        <input className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Global Barkod">
                        <input className="cs-input" />
                    </FormGroup>

                </div>

                <div>
                    <div className="p-2 text-base text-gray-dark">Tedarik</div>

                    <FormGroup label="Tedarik Süresi">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>Gün</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Garanti Süresi">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>Ay</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}