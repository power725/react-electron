import React, { useEffect, useState } from 'react';

import Module from './Module';
import PageSubscribe from '../common/PageSubscribe';
import { Link } from 'react-router-dom';
import {
    useHistory
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'


export default function Dashboard() {
    const [activeModule, setActiveModule] = useState('material');

    const success = useSelector((state) => state.aut.success);
    const history = useHistory();
    useEffect(() => {
        if (success === false) {
            history.replace('/login')
        }
    })
    return (
        <React.Fragment>
            <div className="flex-grow p-3">
                <PageSubscribe text="Anasayfa" />

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <Module
                        key="personal"
                        onClick={() => setActiveModule("personal")}
                        isActive={activeModule === 'personal'}
                        icons={[
                            <Link to="personal" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-address-card"></i>
                            </Link>,
                            <Link to="personal" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-user-plus"></i>
                            </Link>,
                            <Link to="personal" className="px-2" key="3">
                                <FontAwesomeIcon icon={faMoneyBillAlt} className="text-lg text-gray-dark" />
                            </Link>
                        ]}
                        img="personal.png" name="Personel Modülü" />
                    <Module
                        key="current-account"
                        onClick={() => setActiveModule("current-account")}
                        isActive={activeModule === 'current-account'}
                        icons={[
                            <Link to="current-account" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-list-ul"></i>
                            </Link>,
                            <Link to="current-account" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-plus"></i>
                            </Link>,
                            <Link to="current-account" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        route="/current-account"
                        img="current-account.png" name="Cari Hesap Modülü" />
                    <Module
                        key="material"
                        onClick={() => setActiveModule("material")}
                        isActive={activeModule === 'material'}
                        icons={[
                            <Link to="/dashboard" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-list-ul"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-plus"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        img="material-stock.png" name="Malzeme / Stok Modülü" />
                    <Module
                        key="offer"
                        onClick={() => setActiveModule("offer")}
                        isActive={activeModule === 'offer'}
                        icons={[
                            <Link to="/dashboard" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-list-ul"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-plus"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        img="offer.png" name="Teklif Modülü" />
                    <Module
                        key="sales"
                        onClick={() => setActiveModule("sales")}
                        isActive={activeModule === 'sales'}
                        icons={[
                            <Link to="/dashboard" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-user"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        img="sales.png" name="Satış Modülü" />
                    <Module
                        key="purchase"
                        onClick={() => setActiveModule("purchase")}
                        isActive={activeModule === 'purchase'}
                        icons={[
                            <Link to="/dashboard" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-user"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        img="purchase.png" name="Satın Alma Modülü" />
                    <Module
                        key="shipping"
                        onClick={() => setActiveModule("shipping")}
                        isActive={activeModule === 'shipping'}
                        icons={[
                            <Link to="/dashboard" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-user"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        img="shipping.png" name="Sevkiyat Modülü" />
                    <Module
                        key="accounting"
                        onClick={() => setActiveModule("accounting")}
                        isActive={activeModule === 'accounting'}
                        icons={[
                            <Link to="/dashboard" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-user"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        img="accounting.png" name="Muhasebe Modülü" />
                    <Module
                        key="production"
                        onClick={() => setActiveModule("production")}
                        isActive={activeModule === 'production'}
                        icons={[
                            <Link to="/dashboard" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-user"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        img="production.png" name="Üretim Modülü" />
                    <Module
                        key="b2b"
                        onClick={() => setActiveModule("b2b")}
                        isActive={activeModule === 'b2b'}
                        icons={[
                            <Link to="/dashboard" className="px-2" key="1">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="2">
                                <i className="fa text-lg text-gray-dark fa-user"></i>
                            </Link>,
                            <Link to="/dashboard" className="px-2" key="3">
                                <i className="fa text-lg text-gray-dark fa-copy"></i>
                            </Link>
                        ]}
                        img="b2b.png" name="B2B Modülü" />
                </div>
            </div>
        </React.Fragment>

    );
}