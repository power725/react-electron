import React, { useState, useEffect } from 'react';
import {
    Route,
    Switch,
    Redirect,
    useHistory
} from 'react-router-dom';
import { Formik, Form } from 'formik';
import axios from 'axios';
import toast from '../../../services/toast';

import PageSubscribe from '../../common/PageSubscribe';
import NavTabbar from '../../common/NavTabbar';
import Tabbar from '../../common/Tabbar';

import GeneralInformation from './GeneralInformation';
import AddressBilling from './AddressBilling';
import AddressOther from './AddressOther';

import Codes from './Codes';
import Other from './Other';
import RiskInformation from './RiskInformation';
import AdditionalRiskInformation from './AdditionalRiskInformation';
import Bank from './Bank';
import Authorities from './Authorities';
import EGovernment from './EGovernment';
import Producer from './Producer';
import MaturityInformation from './MaturityInformation';
import B2BB2C from './B2BB2C';
import ReportDesigns from './ReportDesigns';
import CargoInformation from './CargoInformation';


const tabItems = [
    { id: "address_billing", text: "Fatura Adresi" }
    //{ id: "address_other", text: "Diğer Adresler" }
];

const formInitialValues = {
    firmaKurulus: 1,
    firmaTurid: 1,
    firmaYonid: 1,
    kodu: "",
    unvan: "",
    vergiNo: "",
    vergiDaireid: 1,
    vergiDaire: {
        ad:""
    },
    ilgiliid: 0,
    odemePlanid: 1,
    yurtIciFirmaMi: 0,
    eIrsaliyeTurid: 0,
    eFaturaTurid: 1,
    eFaturaAdres: "",
    nakliyeTurid: 1,
    firmaid: 0,
    paraBirimid: 0,
    subeid: 1,
    firmaAdresDTO: [
        {
            id: 0,
            firmaid: 0,
            firmaAdresTurid: 1,
            adi: "",
            adres1: "",
            adres2: "",
            postaKodu: "",
            ulkeid: 213,
            ilid: 6,
            ilceid: 58,
            mahalle: "",
            bulvar: "",
            cadde: "",
            sokak: "",
            binaAdi: "",
            binaNo: "",
            daireNo: "",
            anaAdres: 1
        }
    ],
    firmaIletisimDTO: [
        {
            firmaIletisimTurid: 1,
            adi: "",
            gorev: "",
            e_posta: "",
            cepTel: "",
            isTel: ""
        }
    ]
}

export default function AddCurrentAccount(props) {
    const [activeTab, setActiveTab] = useState('address_billing');
    const Id = props.match.params.id || 0;
    const [currAccountInitialValues, setCurrAccountInitialValues] = useState(formInitialValues);
    const history = useHistory();

    const navTabItems = [
        { id: "codes", text: "Kodlar", route: `/current-account/add/codes/${Id}` },
        { id: "other", text: "Diğer", route: `/current-account/add/others/${Id}` },
        { id: "risk_information", text: "Risk Bilgileri", route: `/current-account/add/risk-information/${Id}` },
        { id: "additional_risk_information", text: "Ek Risk Bilgileri", route: `/current-account/add/additional-risk-information/${Id}` },
        { id: "bank", text: "Banka", route: `/current-account/add/bank/${Id}` },
        { id: "authorities", text: "Yetkililer", route: `/current-account/add/authorities/${Id}` },
        { id: "e_government", text: "E-Devlet", route: `/current-account/add/e-government` },
        { id: "producer", text: "Müstahsil", route: `/current-account/add/producer/${Id}` },
        { id: "maturity_information", text: "Vade Bilgileri", route: `/current-account/add/maturity-information/${Id}` },
        { id: "b2b_b2c", text: "B2B / B2C", route: `/current-account/add/b2b-b2c/${Id}` },
        { id: "report_designs", text: "Rapor Tasarımları", route: `/current-account/add/report-designs/${Id}` },
        { id: "cargo_information", text: "Kargo Bilgileri", route: `/current-account/add/cargo-information/${Id}` }
    ];

    useEffect(async () => {
        if (Id !== 0) {
            const initialData = await axios.get(`/Finans/cari-kart-getir/${Id}`);
            setCurrAccountInitialValues(initialData.data);
        }
    }, []);

    const submitForm = async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {

            let requestUrl = '/Finans/cari-kart-ekle';
            if (Id !== 0 && Id !== "0") {
                requestUrl = '/Finans/cari-kart-guncelle';
                values.id = Id;
            }
            values.firmaKurulus = Number(values.firmaKurulus);
            values.eFaturaTurid = Number(values.eFaturaTurid);

            const res = await axios.post(requestUrl, values)
                .catch(function (error) {
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
                console.log(res.response);
            toast.success('Başarıyla kaydedildi.');
            history.replace('/current-account/list')
        } catch (err) { }
        setSubmitting(false);
    }

    const validateForm = values => {
        const errors = {};

        return errors;
    }

    return (
        <Formik
            initialValues={currAccountInitialValues}
            validate={validateForm}
            onSubmit={submitForm}
            enableReinitialize
        >
            {(formProps) => (
                <Form>
                    <React.Fragment>
                        <PageSubscribe text={`Anasayfa > Cari Kart Modülü > Cari Kart ${Id !== 0 ? 'Düzenle' : 'Ekle'}`} />

                        <GeneralInformation formProps={formProps} />

                        <div className="my-2">
                            <Tabbar
                                tabs={tabItems}
                                activeTabClassName="bg-gray-lightest"
                                activeTab={activeTab}
                                setActiveTab={(tab) => setActiveTab(tab.id)} />

                            <div className="border rounded-lg border-gray-normal bg-gray-lightest">
                                {activeTab === 'address_billing' &&
                                    <AddressBilling formProps={formProps} />
                                }
                                {activeTab === 'address_other' &&
                                    <AddressOther formProps={formProps} />
                                }
                            </div>
                        </div>

                        <div className="my-2 overflow-hidden">
                            <NavTabbar
                                tabs={navTabItems}
                                activeTabClassName="bg-gray-lightest" />

                            <div className="border rounded-b-lg border-gray-normal bg-gray-lightest">
                                <Switch>
                                    <Route path={`/current-account/add/codes/${Id}`}>
                                        <Codes />
                                    </Route>

                                    <Route path={`/current-account/add/others/${Id}`}>
                                        <Other />
                                    </Route>

                                    <Route path="/current-account/add/risk-information">
                                        <RiskInformation />
                                    </Route>

                                    <Route path="/current-account/add/additional-risk-information">
                                        <AdditionalRiskInformation />
                                    </Route>

                                    <Route path="/current-account/add/bank">
                                        <Bank />
                                    </Route>

                                    <Route path="/current-account/add/authorities">
                                        <Authorities />
                                    </Route>

                                    <Route path="/current-account/add/e-government">
                                        <EGovernment />
                                    </Route>

                                    <Route path="/current-account/add/producer">
                                        <Producer />
                                    </Route>

                                    <Route path="/current-account/add/maturity-information">
                                        <MaturityInformation />
                                    </Route>

                                    <Route path="/current-account/add/b2b-b2c">
                                        <B2BB2C />
                                    </Route>

                                    <Route path="/current-account/add/report-designs">
                                        <ReportDesigns />
                                    </Route>

                                    <Route path="/current-account/add/cargo-information">
                                        <CargoInformation />
                                    </Route>

                                    <Redirect to={`/current-account/add/codes/${Id}`} />
                                </Switch>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="btn mx-1 px-6 bg-blue-500 text-white" disabled={formProps.isSubmitting}>
                                {formProps.isSubmitting &&
                                    <React.Fragment>
                                        <i className="fa fa-spin fa-spinner mr-2"></i> Kaydediliyor
                                    </React.Fragment>
                                }
                                {!formProps.isSubmitting && 'Kaydet'}
                            </button>

                            <button className="btn mx-1 px-6 bg-white border" type="button">Vazgeç</button>
                        </div>
                    </React.Fragment>

                </Form>
            )}
        </Formik>
    );
}