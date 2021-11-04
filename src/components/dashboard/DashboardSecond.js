import React, { useState } from 'react';

import ModuleSecond from './ModuleSecond';
import PageSubscribe from '../common/PageSubscribe';

export default function Dashboard() {
    const [activeModule, setActiveModule] = useState('material');

    return(
        <React.Fragment>
            <div className="flex flex-grow">
                <div className="flex-grow bg-white p-3">
                    <PageSubscribe text="Anasayfa" />

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <ModuleSecond
                            key="personal"
                            onClick={() => setActiveModule("personal")}
                            isActive={activeModule === 'personal'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="personal.png" name="Personel Modülü" />
                        <ModuleSecond
                            key="current-account"
                            onClick={() => setActiveModule("current-account")}
                            isActive={activeModule === 'current-account'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="current-account.png" name="Cari Hesap Modülü" />
                        <ModuleSecond
                            key="material"
                            onClick={() => setActiveModule("material")}
                            isActive={activeModule === 'material'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="material-stock.png" name="Malzeme / Stok Modülü" />
                        <ModuleSecond
                            key="offer"
                            onClick={() => setActiveModule("offer")}
                            isActive={activeModule === 'offer'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="offer.png" name="Teklif Modülü" />
                        <ModuleSecond
                            key="sales"
                            onClick={() => setActiveModule("sales")}
                            isActive={activeModule === 'sales'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="sales.png" name="Satış Modülü" />
                        <ModuleSecond
                            key="purchase"
                            onClick={() => setActiveModule("purchase")}
                            isActive={activeModule === 'purchase'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="purchase.png" name="Satın Alma Modülü" />
                        <ModuleSecond
                            key="shipping"
                            onClick={() => setActiveModule("shipping")}
                            isActive={activeModule === 'shipping'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="shipping.png" name="Sevkiyat Modülü" />
                        <ModuleSecond
                            key="accounting"
                            onClick={() => setActiveModule("accounting")}
                            isActive={activeModule === 'accounting'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="accounting.png" name="Muhasebe Modülü" />
                        <ModuleSecond
                            key="production"
                            onClick={() => setActiveModule("production")}
                            isActive={activeModule === 'production'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="production.png" name="Üretim Modülü" />
                        <ModuleSecond
                            key="b2b"
                            onClick={() => setActiveModule("b2b")}
                            isActive={activeModule === 'b2b'}
                            icons={[
                                <i className="fa text-lg text-gray-dark fa-copy"></i>,
                                <i className="fa text-lg text-gray-dark fa-user"></i>,
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            ]}
                            img="b2b.png" name="B2B Modülü" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}