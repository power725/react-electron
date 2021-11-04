import React, { useState } from 'react';

import PageSubscribe from '../../common/PageSubscribe';
import Tabbar from '../../common/Tabbar';

import FormGroup from '../../common/FormGroup';


import Suppliers from './Suppliers';

const tabItems = [
    { id: "suppliers", text: "Malzeme Listesi" },
];

export default function AddPen(props) {
    const [activeTab, setActiveTab] = useState('suppliers');
    const [isFullScreen, setFullScreen] = useState(false);
    
    return(
        <React.Fragment>
            <PageSubscribe text="Anasayfa > Malzeme Stok Modülü > Malzeme Fişi Ekle" />
            
            <div className={isFullScreen ? "full-screen" : ""}>
                <div>
                <div className="flex justify-between items-center px-2 pb-2 border-b-2 border-gray-normal mb-2 mt-5">
                    <h5 className="text-lg font-semibold text-gray-dark">Malzeme Fişi Ekle</h5>

                    <img
                            alt="expand"
                            className="cursor-pointer"
                            src={require(`../../../images/icons/${isFullScreen ? 'collapse.png' : 'expand.png'}`)}
                            onClick={() => setFullScreen(!isFullScreen)} />
                </div>

                <div className="rounded-lg bg-gray-lightest border border-gray-normal">
                    <div className="p-2 font-semibold text-base text-gray-dark">Genel Bilgiler</div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                        <div>
                            <FormGroup label="Stok Türü" icon={require('../../../images/icons/angle-down.png')}>
                                <select className="cs-input appearance-none"></select>
                            </FormGroup>

                            <FormGroup label="Stok Kodu">
                                <input className="cs-input" />
                            </FormGroup>
                        </div>

                        <div>
                            <FormGroup label="Marka" icon={require('../../../images/icons/search.png')}>
                                <input className="cs-input pr-8" />
                            </FormGroup>

                            <FormGroup label="B2B" icon={require('../../../images/icons/angle-down.png')}>
                                <select className="cs-input appearance-none"></select>
                            </FormGroup>
                        </div>

                        <div>
                            <FormGroup label="Grup Kodu" icon={require('../../../images/icons/search.png')}>
                                <input className="cs-input pr-8" />
                            </FormGroup>

                            <FormGroup label="Durum" icon={require('../../../images/icons/angle-down.png')}>
                                <select className="cs-input appearance-none"></select>
                            </FormGroup>
                        </div>

                    </div>
                </div>
                </div>
        
                <div className="my-2">
                    <Tabbar
                        tabs={tabItems}
                        activeTabClassName="bg-gray-lightest"
                        activeTab={activeTab}
                        setActiveTab={(tab) => setActiveTab(tab.id)} />

                    <div className="border rounded-lg border-gray-normal bg-gray-lightest">
                        {activeTab === 'suppliers' &&
                            <Suppliers />
                        }
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="btn mx-1 px-6 bg-blue-500 text-white">Kaydet</button>

                    <div className=" relative inline-block text-left dropdown">
                        <span className="rounded-md shadow-sm">
                            <button className="inline-flex btn px-6" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                <span>Diğer</span>
                                <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </span>

                        <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                            <div className="absolute right-0 bottom-10 w-56 mt-2 origin-bottom-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                <div className="py-1">
                                    <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
                                    <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item Second</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn mx-1 px-6 bg-white border" type="button">Vazgeç</button>
                </div>
            </div>
        </React.Fragment>
    );
}