import React from 'react';

import FormGroup from '../../common/FormGroup';

export default function Other(props) {
    return(
        <React.Fragment>
            <div className="p-2 text-base font-semibold text-gray-dark">Özel Kodlar</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="İlgili Kişi" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Satış Elemanı" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Ödeme Planı" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="İndirim Oranı" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Kara Liste" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Kara Liste Nedeni" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="Döviz">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Döviz Türü</div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Fiyat" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                        <label className="p-2 col-span-3 ellipsis">Potansiyel Giriş Tarihi</label>
                        <div className="col-span-4 relative flex items-center">
                            <input className="cs-input" />
                            <img alt="input icon" src={require('../../../images/icons/calendar.png')} className="-ml-6 z-10" />
                        </div>
                    </div>

                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                        <label className="p-2 col-span-3 ellipsis">Cariye Dönüşüm Tarihi</label>
                        <div className="col-span-4 relative flex items-center">
                            <input className="cs-input" />
                            <img alt="input icon" src={require('../../../images/icons/calendar.png')} className="-ml-6 z-10" />
                        </div>
                    </div>

                    <FormGroup label="Üst İşlem Türü" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex">
                        <label className="p-2 col-span-2 ellipsis">Not</label>
                        <div className="col-span-5 relative flex items-center">
                            <textarea className="cs-input" rows="3"></textarea>
                        </div>
                    </div>
                </div>

                <div>
                    <FormGroup label="T. Mesaj Üyelik" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="T. Mesaj Grupları" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="" className="mt-4">
                        <div className="grid grid-cols-2 gap-1 w-full">
                            <div className="flex items-center">
                                <input id="kadin" name="kadin" type="checkbox"
                                    className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                                <label htmlFor="kadin" className="block text-xs ellipsis">Form BA'da Göster</label>
                            </div>

                            <div className="flex items-center">
                                <input id="erkek" name="erkek" type="checkbox"
                                    className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                                <label htmlFor="erkek" className="block text-xs ellipsis">Form BS'de Göster</label>
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="" className="mt-4">
                        <input id="kisisel" name="kisisel" type="checkbox"
                            className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                        <label htmlFor="kisisel" className="block text-sm ellipsis">Kişisel Bilgilerimin Kullanılmasına İzin Veriyorum.</label>
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}