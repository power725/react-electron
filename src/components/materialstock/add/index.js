import React, { useState, useEffect } from 'react';

import { Formik, Form, Field } from 'formik';

import axios from 'axios';
import toast from '../../../services/toast';

import { useHistory } from "react-router-dom";
import PageSubscribe from '../../common/PageSubscribe';
import Tabbar from '../../common/Tabbar';

import FormGroup from '../../common/FormGroup';
import { useSelector, useDispatch } from 'react-redux';

import General from './General';
import Not from './Not';
import B2B from './B2B';
import Suppliers from './Suppliers';

import MainBody from './MainBody';
import MainBox from './MainBox';

import { getGroupCodeLists, getStockTypeLists } from '../../../store/materialStockSlice';

const tabItems = [
    { id: "general", text: "Genel" },
    { id: "not", text: "Not" },
    { id: "b2b", text: "B2B" },
    { id: "suppliers", text: "Tedarikçiler" },
];

const additionalTabItems = [
    { id: "birim", text: "Ana Birim" },
    //{ id: "kutu", text: "Kutu" },
];


export default function AddMaterialStock(props) {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('general');
    const history = useHistory();

    const [additionalTab, setAdditionalTab] = useState('birim');
    const [isFullScreen, setFullScreen] = useState(false);

    const submitForm = async (values, { setSubmitting }) => {

        setSubmitting(true);
        try {
            await axios.post('/Malzeme/malzeme-ekle', values).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            });
            toast.success('Başarıyla kaydedildi.');
            history.replace('/material-stock/list')
        } catch (err) { }
        setSubmitting(false);
    }

    const validateForm = values => {
        const errors = {};

        return errors;
    }
    const initialValues = {
        stokTurid: 1,
        adi: "",
        kod: "",
        gizliKod: "",
        aciklama: "",
        anabirim: 1,
        stok: 1,
        marka: "",
        b2b: 0,
        grupKoduid: 1,
        status: 1,
        indirimOrani: "0",
        cariKartid: [

        ],
        genelOzellikler: {
            minSiparisMiktari: 0,
            asgariMiktar: 0,
            azamiMiktar: 0,
            riskKontrol: 0,
            riskMiktari: 0,
            rafOmru: 0,
            rafOmruBirimid: 2,
            rafYeri: "",
            alisKDV: 18,
            satisKDV: 18,
            toptanSatisKDV: 18,
            tevkifatKodu: 1,
            tevkifatOrani: "",
            kareBarkod: "",
            globalBarkod: "",
            tedarikSuresi: 0,
            tedarikSuresiPeriyot: 1,
            garantiSuresi: 0,
            garantiSuresiPeriyot: 2
        }

    }

    useEffect(() => {
        dispatch(getStockTypeLists());
        dispatch(getGroupCodeLists());
    }, []);


    const stockTypeList = useSelector((state) => state.material.stockTypeList);
    const groupCodeList = useSelector((state) => state.material.groupCodeList);

    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={submitForm}
        >
            {(formProps) => (
                <Form>
                    <React.Fragment>
                        <PageSubscribe text="Anasayfa > Malzeme Stok Modülü > Stok Kartı Ekle" />

                        <div className={isFullScreen ? "full-screen" : ""}>

                            <div className="flex justify-between items-center px-2 pb-2 border-b-2 border-gray-normal mb-2 mt-5">
                                <h5 className="text-lg font-semibold text-gray-dark">Stok Kartı Ekle</h5>


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
                                        <FormGroup label="Adı">
                                            <Field name="adi" className="cs-input" />
                                        </FormGroup>
                                        <FormGroup label="Stok Türü" icon={require('../../../images/icons/angle-down.png')}>
                                            <Field name="stokTurid" as="select" className="cs-input appearance-none">
                                                {stockTypeList.map(item =>
                                                    <option key={item.id} value={item.id}>{item.adi}</option>
                                                )}
                                            </Field>
                                        </FormGroup>

                                        <FormGroup label="Stok Kodu">
                                            <Field name="kod" className="cs-input" />
                                            {formProps.touched.kod && formProps.errors.kod && <div className="text-red-500">{formProps.errors.kod}</div>}
                                        </FormGroup>

                                    </div>

                                    <div>
                                        <FormGroup label="Gizli Kod" >
                                            <Field name="gizliKod" className="cs-input" />
                                        </FormGroup>

                                        <FormGroup label="Marka" >
                                            <Field name="marka" className="cs-input" />
                                        </FormGroup>
                                        <FormGroup label="GTİP Kodu" >
                                            <Field name="gTip" className="cs-input" />
                                        </FormGroup>
                                    </div>

                                    <div>
                                        <FormGroup label="Grup Kodu" icon={require('../../../images/icons/angle-down.png')}>
                                            <Field name="grupKoduid" as="select" className="cs-input appearance-none pr-10">
                                                {groupCodeList.map(item =>
                                                    <option key={item.id} value={item.id}>{item.ad}</option>
                                                )}
                                            </Field>
                                        </FormGroup>

                                        <FormGroup label="Durum" icon={require('../../../images/icons/angle-down.png')}>
                                            <Field name="status" as="select" className="cs-input appearance-none pr-10">
                                                <option value="1">Aktif</option>
                                                <option value="0">Pasif</option>
                                            </Field>
                                        </FormGroup>
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
                                    {activeTab === 'general' &&
                                        <General formProps={formProps} />
                                    }
                                    {activeTab === 'not' &&
                                        <Not />
                                    }
                                    {activeTab === 'b2b' &&
                                        <B2B />
                                    }
                                    {activeTab === 'suppliers' &&
                                        <Suppliers />
                                    }
                                </div>
                            </div>

                            <div className="my-2 overflow-hidden">
                                <Tabbar
                                    tabs={additionalTabItems}
                                    activeTabClassName="bg-gray-lightest"
                                    activeTab={additionalTab}
                                    setActiveTab={(tab) => setAdditionalTab(tab.id)} />

                                <div className="border rounded-lg border-gray-normal bg-gray-lightest">
                                    {additionalTab === 'birim' &&
                                        <MainBody />
                                    }
                                    {additionalTab === 'kutu' &&
                                        <MainBox />
                                    }
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="btn mx-1 px-6 bg-blue-500 text-white" type="submit">Kaydet</button>

                                <button className="btn mx-1 px-6 bg-white border" type="button">Vazgeç</button>
                            </div>
                        </div>


                    </React.Fragment>

                </Form>
            )}
        </Formik>
    );
}