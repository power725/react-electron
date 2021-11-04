import React, { useState, useEffect } from 'react';

import { Formik, Form } from 'formik';
import axios from 'axios';

import { useHistory } from "react-router-dom";
import PageSubscribe from '../../common/PageSubscribe';
import Tabbar from '../../common/Tabbar';

import Personal from './Personal';
import Study from './Study';
import General from './General';
import Credential from './Credential';
import Sgk from './Sgk';
import Salary from './Salary';
import Dynamic from './Dynamic';
import Other from './Other';
import toast from '../../../services/toast';
// import * as Yup from 'yup';

const tabItems = [
    {
        id: "general",
        text: "Genel Bilgiler"
    },
    {
        id: "study",
        text: "Çalışma Bilgileri"
    },
    {
        id: "credential",
        text: "Kimlik Bilgileri"
    },
    {
        id: "sgk",
        text: "SGK Bilgileri"
    },
    /*{
        id: "salary",
        text: "Maaş ve Kesintiler"
    },
    {
        id: "dynamic",
        text: "Dinamik",
    },*/
    {
        id: "other",
        text: "Diğer Bilgiler"
    }
];


const formInitialValues = {
    // General
    firmaid: 1,
    subeid: 1,
    kademeid: 1,
    departmanid: 1,
    bolumid: 1,
    unvanid: 1,

    sigortaDurumid: 1,
    grupid: 1,

    askerlikDurumid: 1,
    sicilNo: "",
    adi: "",
    soyadi: "",
    okul: "",
    bolum: "",
    mezuniyetTarih: "",
    engellilikDurumid: 1,
    engellilikIndirim: 0,
    eskiHukumlu: 0,
    terorMagduru: 0,
    kidemTarih: "",


    vergiDaireid: null,
    vergiNo: "",
    sigortaNo: "",
    sozlesmeTurid: 2,
    sozlesmeBitisTarih: "",
    iseGirisTarih: "",
    isdenCikisTarih: "",
    meslek: "",
    sigortaTurid: 2,
    ogrenimDurumid: 6,

    silindimi: 0,

    personelAgiDto: {
        esCalisiyorMu: 0,
        esinGeliriVarMi: 0,
        agiKapsamindaCocukSayisi: 0,
        digerCocuk: 0
    },

    personelBankaHesapDto: {
        kodu: "",
        adi: "",
        paraBirimiid: 160,
        subeno: "",
        subeAdi: "",
        hesapNo: "",
        ibanNo: "",
        anaHesap: true
    },

    // credentials
    personelKimlikBilgileriDTO: {
        kimlikTurid: 1,
        babaAdi: "",
        anneAdi: "",
        cinsiyet: 1,
        medeniHal: 0,
        dogumYeri: "",
        dogumTarih: new Date("01.01.1985"),
        uyruk: "",
        ehliyetVarMi: '0',
        eposta: "",
        tckNo: "",
        seriNo: "",
        ciltNo: "",
        siraNo: "",
        aileSiraNo: "",
        kayitNo: "",
        hesKodu: "",
        ulkeid: 213,
        ilid: 6,
        ilceid: 58,
        mahalle: "",
        verildigiYer: "",
        verilisTarih: new Date("01.01.2010"),
        verilisNedeni: "",
    },

    // Others
    personelDiğerBilgileriDTO: {
        sosyalGuvenlikKurumid: 1,
        emekliSandikNo: "",
        sandikKodu: "",
        bagkurNo: "",
        sicilNo: "",
        referansAdSoyad: "",
        oncekiCalismaSuresiAy: 0,
        oncekiIsyeri: "",
        oncekiIsAdres: ""
    },
    personelMaasDTO: {
        maas: 0,
        maasParaBirimid: 160,
        maasbrut: 0,
        asgariUcret: 0,
        personelMaasOdemeTurid: 3,
        personelMaasPeriyotid: 1,
        baslangicTarih: "",
        bitisTarih: ""
    },
    personelTabiKanunDTO: {
        personelKanunId: 1,
        gvHesaplansinMi: 1,
        gVmuafiyet: "0",
        gvMuafiyetiNeteEkle: 0,
        sgkHesaplansinMi: 1,
        uvsKisveren: 0,
        uvsKisci: 0,
        gsSisveren: 0,
        gsSisci: 0,
        kvsKisveren: 0,
        issizlikHesaplansinMi: 1,
        issizlikisveren: 0,
        issizlikisci: 0,
        dvHesaplansinMi: 1,
        damgaVergisi: 0,
        dvMuafiyetiNeteEkle: 0
    },
    personelEmeklilikDTO: {
        ozelSigortaTurid: 1,
        bireyselEmeklilikVar: 0,
        emeklilikKesintiOran: 0,
        policeNo: "",
        ptOemeklilik: 0,
        ptOhayat: 0,
        ptOsaglik: 0,
        itOemeklilik: 0,
        itOhayat: 0,
        itOsaglik: 0
    }
}

export default function AddStaffCard(props) {
    const history = useHistory();
    const staffId = props.match.params.id || null;
    const [activeTab, setActiveTab] = useState('general');
    const [staffInitialValues, setStaffInitialValues] = useState(formInitialValues);

    useEffect(async () => {
        if (staffId) {
            const initialStaffData = await axios.get(`/Personel/personel-getir/${staffId}`);

            if (initialStaffData.data.iseGirisTarih !== null && initialStaffData.data.iseGirisTarih !== "")
                initialStaffData.data.iseGirisTarih = new Date(initialStaffData.data.iseGirisTarih);


            if (initialStaffData.data.isdenCikisTarih !== null && initialStaffData.data.isdenCikisTarih !== "")
                initialStaffData.data.isdenCikisTarih = new Date(initialStaffData.data.isdenCikisTarih);

            if (initialStaffData.data.mezuniyetTarih !== null && initialStaffData.data.mezuniyetTarih !== "")
                initialStaffData.data.mezuniyetTarih = new Date(initialStaffData.data.mezuniyetTarih);

            if (initialStaffData.data.sozlesmeBitisTarih !== null && initialStaffData.data.sozlesmeBitisTarih !== "")
                initialStaffData.data.sozlesmeBitisTarih = new Date(initialStaffData.data.sozlesmeBitisTarih);

            if (initialStaffData.data.kidemTarih !== null && initialStaffData.data.kidemTarih !== "")
                initialStaffData.data.kidemTarih = new Date(initialStaffData.data.kidemTarih);

            if (initialStaffData.data.personelKimlikBilgileriDTO.dogumTarih !== null && initialStaffData.data.personelKimlikBilgileriDTO.dogumTarih !== "")
                initialStaffData.data.personelKimlikBilgileriDTO.dogumTarih = new Date(initialStaffData.data.personelKimlikBilgileriDTO.dogumTarih);

            if (initialStaffData.data.personelKimlikBilgileriDTO.verilisTarih !== null && initialStaffData.data.personelKimlikBilgileriDTO.verilisTarih !== "")
                initialStaffData.data.personelKimlikBilgileriDTO.verilisTarih = new Date(initialStaffData.data.personelKimlikBilgileriDTO.verilisTarih);

            setStaffInitialValues(initialStaffData.data);
        }
    }, []);

    // const ValidationSchema = Yup.object().shape({
    //     sicilNo: Yup.string()
    //         .min(2, 'Çok kısa!')
    //         .max(50, 'Çok uzun!')
    //         .required('Bu alanı doldurmanız gereklidir.'),
    //     adi: Yup.string()
    //         .min(2, 'Çok kısa!')
    //         .max(50, 'Çok uzun!')
    //         .required('Bu alanı doldurmanız gereklidir.'),
    //     soyadi: Yup.string()
    //         .min(2, 'Çok kısa!')
    //         .max(50, 'Çok uzun!')
    //         .required('Bu alanı doldurmanız gereklidir.')
    // });

    const validateForm = values => {
        const errors = {};

        if (!values.sicilNo) {
            errors.sicilNo = 'Bu alanı doldurmanız gereklidir.';
        }
        if (!values.adi) {
            errors.adi = 'Bu alanı doldurmanız gereklidir.';
        }
        if (!values.soyadi) {
            errors.soyadi = 'Bu alanı doldurmanız gereklidir.';
        }

        return errors;
    }

    const submitForm = async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
            values.sigortaTurid = Number(values.sigortaTurid);
            values.personelKimlikBilgileriDTO.cinsiyet = Number(values.personelKimlikBilgileriDTO.cinsiyet);
            values.personelKimlikBilgileriDTO.ehliyetVarMi = Number(values.personelKimlikBilgileriDTO.ehliyetVarMi);

            let requestUrl = '/Personel/personel-ekle';
            if (staffId) {
                requestUrl = '/Personel/personel-guncelle';
                values.id = staffId;
            }

            var dataRes = await axios.post(requestUrl, values).catch(function (error) {
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
            if (dataRes.success) {
                toast.success('Başarıyla kaydedildi.');
                history.replace('/personal/list')
            }
            else {
                dataRes.messages.map(i => toast.error(i))
            }
        } catch (err) { }
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={staffInitialValues}
            validate={validateForm}
            onSubmit={submitForm}
            enableReinitialize
        >
            {(formProps) => (
                <Form>
                    <div className="p-3">
                        <PageSubscribe text={`Anasayfa > Personel Modülü > Personel Kartı ${staffId ? 'Düzenle' : 'Ekle'}`} />

                        <Personal formProps={formProps} />

                        <div className="my-2 overflow-hidden">
                            <Tabbar
                                tabs={tabItems}
                                activeTabClassName="bg-gray-lightest"
                                activeTab={activeTab}
                                setActiveTab={(tab) => setActiveTab(tab.id)} />

                            <div className="border rounded-b-lg border-gray-normal bg-gray-lightest">
                                <General formProps={formProps} className={activeTab === 'general' ? '' : 'hidden'} />
                                <Study formProps={formProps} className={activeTab === 'study' ? '' : 'hidden'} />
                                <Credential formProps={formProps} className={activeTab === 'credential' ? '' : 'hidden'} />
                                <Sgk formProps={formProps} className={activeTab === 'sgk' ? '' : 'hidden'} />
                                <Salary formProps={formProps} className={activeTab === 'salary' ? '' : 'hidden'} />
                                <Dynamic formProps={formProps} className={activeTab === 'dynamic' ? '' : 'hidden'} />
                                <Other formProps={formProps} className={activeTab === 'other' ? '' : 'hidden'} />
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
                    </div>
                </Form>
            )}
        </Formik>
    );
}