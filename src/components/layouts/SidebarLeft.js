import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import SidebarItem from './SidebarItem';

const SidebarItems = [
    {
        id: 'personal',
        text: 'Personel Modülü',
        image: require('../../images/personal.png'),
        route: '/personal',
        children: [
            { id: 'staff_card_list', route: '/personal/list', icon: 'fa-address-card', text: 'Personel Kart Listesi' },
            { id: 'add_staff_card', route: '/personal/add-staff-card', icon: 'fa-user-plus', text: 'Personel Kartı Ekle' },
            { id: 'add_payroll', route: 'add_payroll', icon: 'fa-plus-square', text: 'Puantaj Ekle' },
            { id: 'bank_salary_payment_list', route: 'bank_salary_payment_list', icon: 'fa-copy', text: 'Banka Maaş Ödeme List.' },
            { id: 'e_payroll', route: 'e_payroll', icon: 'fa-copy', text: 'e-Bordro' },
            { id: 'parameters', route: 'parameters', icon: 'fa-copy', text: 'Parametreler' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' },
        ]
    },
    {
        id: 'current-account',
        text: 'Cari Hesap Modülü',
        image: require('../../images/current-account.png'),
        route: '/current-account',
        children: [
            { id: 'current_card_list', route: '/current-account/list', icon: 'fa-list-ul', text: 'Cari Kart Listesi' },
            { id: 'add_current_card', route: '/current-account/add', icon: 'fa-plus', text: 'Cari Kart Ekle' },
            { id: 'add_current_account_slip', route: 'add_current_account_slip', icon: 'fa-plus', text: 'Cari Hesap Fişi Ekle' },
            { id: 'payment_plans', route: 'payment_plans', icon: 'fa-list', text: 'Ödeme Planları' },
            { id: 'current_card_balance_report', route: 'current_card_balance_report', icon: 'fa-copy', text: 'Cari Kart Bakiye Raporu' },
            { id: 'current_account_statement', route: 'current_account_statement', icon: 'fa-copy', text: 'Cari Hesap Ekstresi' },
            { id: 'activity_report', route: 'activity_report', icon: 'fa-copy', text: 'Faaliyet Raporu' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' }
        ]
    },
    {
        id: 'material-stock',
        text: 'Malzeme / Stok Modülü',
        image: require('../../images/material-stock.png'),
        route: '/material-stock',
        children: [
            { id: 'material_stock_list', route: '/material-stock/list', icon: 'fa-list', text: 'Malzeme / Stok Listesi' },
            { id: 'add_stock_card', route: '/material-stock/add', icon: 'fa-plus', text: 'Stok Kart Ekle' },
            { id: 'material_receipt', route: '/material-stock/material_receipt', icon: 'fa-copy', text: 'Malzeme Fişi Ekle' },
            { id: 'warehouse_control_report', route: 'warehouse_control_report', icon: 'fa-copy', text: 'Depo Kontrol Raporu' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' }
        ]
    },
    {
        id: 'offer',
        text: 'Teklif Modülü',
        image: require('../../images/offer.png'),
        route: '/offer',
        children: [
            { id: 'offer_list', route: 'offer_list', icon: 'fa-copy', text: 'Teklif Listesi' },
            { id: 'add_offer', route: 'add_offer', icon: 'fa-copy', text: 'Teklif Ekle' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' }
        ]
    },
    {
        id: 'sales',
        text: 'Satış Modülü',
        image: require('../../images/sales.png'),
        route: '/sales',
        children: [
            { id: 'invoice_list', route: 'invoice_list', icon: 'fa-copy', text: 'Fatura Listesi' },
            { id: 'add_invoice', route: 'add_invoice', icon: 'fa-copy', text: 'Fatura Ekle' },
            { id: 'waybill_list', route: 'waybill_list', icon: 'fa-copy', text: 'İrsaliye Listesi' },
            { id: 'add_waybill', route: 'add_waybill', icon: 'fa-copy', text: 'İrsaliye Ekle' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' }
        ]
    },
    {
        id: 'purchase',
        text: 'Satın Alma Modülü',
        image: require('../../images/purchase.png'),
        route: '/purchase',
        children: [
            { id: 'purchase_list', route: 'purchase_list', icon: 'fa-copy', text: 'Satın Alma Listesi' },
            { id: 'add_request_form', route: 'add_request_form', icon: 'fa-copy', text: 'Talep Formu Ekle' },
            { id: 'add_offer_form', route: 'add_offer_form', icon: 'fa-copy', text: 'Teklif Formu Ekle' },
            { id: 'warehouse_stock_list', route: 'warehouse_stock_list', icon: 'fa-copy', text: 'Depo / Stok Listesi' },
            { id: 'waybill_list', route: 'waybill_list', icon: 'fa-copy', text: 'İrsaliye Listesi' },
            { id: 'invoice_list', route: 'invoice_list', icon: 'fa-copy', text: 'Fatura Listesi' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' }
        ]
    },
    {
        id: 'shipping',
        text: 'Sevkiyat Modülü',
        image: require('../../images/shipping.png'),
        route: '/shipping',
        children: [
            { id: 'route_list', route: 'route_list', icon: 'fa-copy', text: 'Rota Listesi' },
            { id: 'add_route_definition', route: 'add_route_definition', icon: 'fa-copy', text: 'Rota Tanımı Ekle' },
            { id: 'collective_location_information', route: 'collective_location_information', icon: 'fa-copy', text: 'Toplu Lokasyon Bilgisi' },
            { id: 'route_visits', route: 'route_visits', icon: 'fa-copy', text: 'Rota Ziyaretleri' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' }
        ]
    },
    {
        id: 'accounting',
        text: 'Muhasebe Modülü',
        image: require('../../images/accounting.png'),
        route: '/accounting',
        children: [
            { id: 'accounting_account_list', route: 'accounting_account_list', icon: 'fa-copy', text: 'Muhasebe Hesap Listesi' },
            { id: 'accounting_receipts_list', route: 'accounting_receipts_list', icon: 'fa-copy', text: 'Muhasebe Fişleri Listesi' },
            { id: 'add_accounting_slip', route: 'add_accounting_slip', icon: 'fa-copy', text: 'Muhasebe Fişi Ekle' },
            { id: 'collective_accounting', route: 'collective_accounting', icon: 'fa-copy', text: 'Toplu Muhasebeleştirme' },
            { id: 'financial_statement_list', route: 'financial_statement_list', icon: 'fa-copy', text: 'Mali Tablo Listesi' },
            { id: 'declaration_list', route: 'declaration_list', icon: 'fa-copy', text: 'Beyanname Listesi' },
            { id: 'notary_list', route: 'notary_list', icon: 'fa-copy', text: 'Noter Listesi' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' }
        ]
    },
    {
        id: 'production',
        text: 'Üretim Modülü',
        image: require('../../images/production.png'),
        route: '/production',
        children: [
            { id: 'product_recipe_list', route: '/production/list', icon: 'fa-copy', text: 'Ürün Reçete Listesi' },
            { id: 'add_product_recipe', route: '/production/add', icon: 'fa-copy', text: 'Ürün Reçetesi Ekle' },
            { id: 'operator_card_list', route: '/production/card', icon: 'fa-copy', text: 'Operatör Kart Listesi' },
            { id: 'add_operator_card', route: 'add_operator_card', icon: 'fa-copy', text: 'Operatör Kartı Ekle' },
            { id: 'shift_list', route: 'shift_list', icon: 'fa-copy', text: 'Vardiya Listesi' },
            { id: 'add_shift', route: 'add_shift', icon: 'fa-copy', text: 'Vardiya Ekle' },
            { id: 'production_order_list', route: '/production/station', icon: 'fa-copy', text: 'Üretim Emri Listesi' },
            { id: 'add_production_order', route: '/production/order', icon: 'fa-copy', text: 'Üretim Emri Ekle' },
            { id: 'work_order_list', route: 'work_order_list', icon: 'fa-copy', text: 'İş Emri Listesi' },
            { id: 'add_work_order', route: 'add_work_order', icon: 'fa-copy', text: 'İş Emri Ekle' },
            { id: 'reports', route: 'reports', icon: 'fa-copy', text: 'Raporlar' },
        ]
    },
    {
        id: 'b2b',
        text: 'B2B Modülü',
        image: require('../../images/b2b.png'),
        route: '/b2b',
        children: []
    }
];


function SidebarLeft(props) {
    const isSidebarCollapsed = props.isSidebarCollapsed;
    const location = props.history.location;
    const [expandedItem, setExpandedItem] = useState('');

    return (
        <div className={`flex-none border-r border-gray-normal bg-gray-lightest h-screen flex flex-col z-20 transition-all ${isSidebarCollapsed ? 'w-13' : 'w-60'}`}>
            <div className="h-13 border-b border-gray-normal p-2 bg-gray-lightest flex-none flex items-center">
                <img alt="Sistem Erp Logo" src={require('../../images/sistem-erp-logo.png')} className="h-full" />
                <img alt="Logo Text" src={require(`../../images/logo-text.png`)} className={`ml-2 ${isSidebarCollapsed ? 'hidden' : ''}`} />
            </div>

            <div className="overflow-y-auto overflow-x-hidden c-scrollbar-small flex-grow">
                <Link to="/dashboard" className={`p-2 h-13 flex items-center ${location.pathname === '/dashboard' ? 'bg-gray-400' : 'bg-gray-light'}`}>
                    <div className={`relative w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-lg text-gray-darkest`}>
                        Ş1
                        <span className="rounded-full w-5 h-4 bg-blue-700 absolute -top-2 -right-2 text-white flex items-center justify-center text-xs font-normal">0</span>
                    </div>
                    {!isSidebarCollapsed && <span className="ellipsis text-sm ml-4">Şirket 1</span>}
                </Link>

                {SidebarItems.map((item, index) => (
                    <SidebarItem
                        key={item.id}
                        isSidebarCollapsed={isSidebarCollapsed}
                        isExpanded={expandedItem === item.id}
                        expandItem={setExpandedItem}
                        {...item} />
                ))}
            </div>

            <div className="flex-none border-t border-gray-normal flex flex-col justify-center">
                <div className="cursor-pointer pl-2 h-11 flex items-center justify-between text-sm border-l-4 border-transparent">
                    <div className="flex ellipsis">
                        <img src={require('../../images/icons/setting.png')} className="mr-5 ml-1" alt="setting" />
                        <span className="ellipsis">Sistem Yöneticisi</span>
                    </div>

                    {!isSidebarCollapsed &&
                        <div className="px-2 h-full flex items-center" onClick={() => props.onToggle(!isSidebarCollapsed)}>
                            <img
                                src={require('../../images/icons/double-arrow-right.png')}
                                className={`mr-1 transition transform ${isSidebarCollapsed ? '' : 'rotate-180'}`}
                                alt="collapse" />
                        </div>
                    }
                </div>

                {isSidebarCollapsed &&
                    <div className="cursor-pointer p-2 h-11 flex items-center text-sm border-l-4 border-transparent"
                        onClick={() => props.onToggle(!isSidebarCollapsed)} >
                        <img
                            src={require('../../images/icons/double-arrow-right.png')}
                            className={`mr-5 ml-2 transition transform ${isSidebarCollapsed ? '' : 'rotate-180'}`}
                            alt="collapse" />
                        <span className="ellipsis"></span>
                    </div>
                }
            </div>
        </div>
    );
}

export default withRouter(SidebarLeft);