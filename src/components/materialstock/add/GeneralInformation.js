import React from 'react';
import FormGroup from '../../common/FormGroup';
import ExpandableBox from '../../common/ExpandableBox';

export default function GeneralInformation(props) {
    return(
        <ExpandableBox headerText="Cari Kart Ekle">
            <div className="p-2 font-semibold text-base text-gray-dark">Genel Bilgiler</div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Türü" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Cari Kart Tipi">
                        <input className="cs-input" />
                    </FormGroup>
                    
                    <FormGroup label="Durum">
                        <input className="cs-input" />
                    </FormGroup>

                    <div className="grid grid-cols-3 gap-x-3 mt-4 px-2">
                        <div className="flex items-center">
                            <input id="AsgariUcretli" name="Yurtdışı" type="checkbox"
                                className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                            <label htmlFor="AsgariUcretli" className="block text-xs">Yurtdışı</label>
                        </div>
                        <div className="flex items-center">
                            <input id="AsgariUcretli" name="Potansiyel" type="checkbox"
                                className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                            <label htmlFor="AsgariUcretli" className="block text-xs">Potansiyel</label>
                        </div>
                        <div className="flex items-center">
                            <input id="AsgariUcretli" name="Rehberde Gözüksün" type="checkbox"
                                className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                            <label htmlFor="AsgariUcretli" className="block text-xs ellipsis">Rehberde Gözüksün</label>
                        </div>
                    </div>
                </div>

                <div>
                    <FormGroup label="Şube" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>
                    
                    <FormGroup label="Şube Kodu">
                        <input className="cs-input" />
                    </FormGroup>
                    
                    <FormGroup label="Ünvan">
                        <input className="cs-input" />
                    </FormGroup>
                    
                    <FormGroup label="Kısa Açıklama">
                        <input className="cs-input" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="Vergi Dairesi" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Vergi Numarası" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="E Fatura" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>
                </div>
            </div>
        </ExpandableBox>
    );
}