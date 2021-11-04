import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Field } from 'formik';

import {
    getMedeniHalList
} from '../../../store/staffSlice';

import {
    getCityLists,
    getDistrictLists
} from '../../../store/mutualSlice';

import FormGroup from '../../common/FormGroup';

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tr from "date-fns/locale/tr/index.js";

export default function Credential(props) {

    registerLocale('tr', tr);
    setDefaultLocale('tr');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMedeniHalList());
        dispatch(getCityLists({}));
    }, []);

    const handleChange = (event) => {
        //setCityId(event.target.value);
        props.formProps.setFieldValue('personelKimlikBilgileriDTO[ilid]', event.target.value)
        dispatch(getDistrictLists({ ilid: event.target.value }));
    }

    const medeniHalList = useSelector((state) => state.staff.medeniHalList);
    const cityList = useSelector((state) => state.mutual.cityList);
    const districtList = useSelector((state) => state.mutual.districtList);
    return (
        <div className={props.className}>
            <div className="p-2 text-base font-semibold text-gray-dark">Kimlik Bilgileri</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>

                    <FormGroup label="Kimlik Tür" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="personelKimlikBilgileriDTO[kimlikTurid]" as="select" className="cs-input appearance-none pr-10">
                            <option value="1">Çipli</option>
                            <option value="2">Mavi</option>
                        </Field>
                    </FormGroup>
                    <FormGroup label="Baba Adı">
                        <Field name="personelKimlikBilgileriDTO[babaAdi]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Anne Adı">
                        <Field name="personelKimlikBilgileriDTO[anneAdi]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Cinsiyet">
                        <div className="grid grid-cols-2 gap-1 w-full">
                            <div className="flex items-center">
                                <Field id="kadin" name="personelKimlikBilgileriDTO[cinsiyet]" type="radio" value="0"
                                    className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                                <label htmlFor="kadin" className="text-sm">Kadın</label>
                            </div>

                            <div className="flex items-center">
                                <Field id="erkek" name="personelKimlikBilgileriDTO[cinsiyet]" type="radio" value="1"
                                    className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" checked={true} />
                                <label htmlFor="erkek" className="text-sm">Erkek</label>
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Medeni Hali" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="personelKimlikBilgileriDTO[medeniHal]" as="select" className="cs-input appearance-none">
                            {medeniHalList.map(item =>
                                <option key={item.value} value={item.value}>{item.name}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="Doğum Yeri">
                        <Field name="personelKimlikBilgileriDTO[dogumYeri]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Doğum Tarihi" icon={require('../../../images/icons/calendar.png')}>
                        <DatePicker autoComplete="off" dateFormat="dd.MM.yyyy" name="personelKimlikBilgileriDTO[dogumTarih]" selected={props.formProps.values.personelKimlikBilgileriDTO['dogumTarih']} onChange={(date) => props.formProps.setFieldValue('personelKimlikBilgileriDTO[dogumTarih]', date)} className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Uyruk">
                        <Field name="personelKimlikBilgileriDTO[uyruk]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Ehliyet Durumu" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="personelKimlikBilgileriDTO[ehliyetVarMi]" as="select" className="cs-input appearance-none pr-10">
                            <option value="1">Evet</option>
                            <option value="0">Hayır</option>
                        </Field>
                    </FormGroup>

                    <FormGroup label="E-Posta">
                        <Field name="personelKimlikBilgileriDTO[eposta]" className="cs-input pr-8" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="Seri No">
                        <Field name="personelKimlikBilgileriDTO[seriNo]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Cilt No">
                        <Field name="personelKimlikBilgileriDTO[ciltNo]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Sıra No">
                        <Field name="personelKimlikBilgileriDTO[siraNo]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Aile Sıra No">
                        <Field name="personelKimlikBilgileriDTO[aileSiraNo]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Kayıt No.">
                        <Field name="personelKimlikBilgileriDTO[kayitNo]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Hes Kodu">
                        <Field name="personelKimlikBilgileriDTO[hesKodu]" className="cs-input pr-8" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="İl" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="personelKimlikBilgileriDTO[ilid]" as="select" className="cs-input appearance-none pr-10">

                            {({
                                field, // { name, value, onChange, onBlur }
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta,
                            }) => (
                                <select className="cs-input appearance-none pr-10" {...field} value={props.formProps.values.personelKimlikBilgileriDTO['ilid']} onChange={handleChange}>
                                    {cityList.map(item =>
                                        <option key={item.id} value={item.id}>{item.adi}</option>
                                    )}
                                </select>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="İlçe" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="personelKimlikBilgileriDTO[ilceid]" as="select" className="cs-input appearance-none pr-10">
                            {districtList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="Mahalle - Köy">
                        <Field name="personelKimlikBilgileriDTO[mahalle]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Verildiği Yer">
                        <Field name="personelKimlikBilgileriDTO[verildigiYer]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Veriliş Tarihi">
                        <DatePicker autoComplete="off" dateFormat="dd.MM.yyyy" name="personelKimlikBilgileriDTO[verilisTarih]" selected={props.formProps.values.personelKimlikBilgileriDTO['verilisTarih']} onChange={(date) => props.formProps.setFieldValue('personelKimlikBilgileriDTO[verilisTarih]', date)} className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Veriliş Nedeni">
                        <Field name="personelKimlikBilgileriDTO[verilisNedeni]" className="cs-input pr-8" />
                    </FormGroup>
                </div>
            </div>
        </div>
    );
}

Credential.defaultProps = {
    className: ''
}

Credential.propTypes = {
    className: PropTypes.string
}