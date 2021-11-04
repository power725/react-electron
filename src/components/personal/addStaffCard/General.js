import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Field } from 'formik';

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tr from "date-fns/locale/tr/index.js";

import FormGroup from '../../common/FormGroup';
import GeneralBusinessCodeModal from '../../mutual/modal/GeneralBusinessCodeModal';
import ReasonForLeavingModal from './ReasonForLeavingModal';
import {
    getSigortaTurList,
    getSozlesmeTurList,
    getOgrenimDurumuList,
    getAskerlikDurumList,
    getEngellikDurumList
} from '../../../store/staffSlice';

export default function General(props) {

    registerLocale('tr', tr);
    setDefaultLocale('tr');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSigortaTurList());
        dispatch(getSozlesmeTurList());
        dispatch(getOgrenimDurumuList());
        dispatch(getAskerlikDurumList());
        dispatch(getEngellikDurumList());
    }, []);



    const sigortaTurList = useSelector((state) => state.staff.sigortaTurList);
    const sozlesmeTurList = useSelector((state) => state.staff.sozlesmeTurList);
    const ogrenimDurumuList = useSelector((state) => state.staff.ogrenimDurumuList);
    const askerlikDurumList = useSelector((state) => state.staff.askerlikDurumList);
    const engellikDurumList = useSelector((state) => state.staff.engellikDurumList);

    const [photo, setPhoto] = useState(null);
    const [isBusinessCodeModalOpen, setBusinessCodeModalOpen] = useState(false);
    const [isReasonForLeavingModalOpen, setReasonForLeavingModalOpen] = useState(false);
    const [businessCodeForLeaving, setBusinessCodeForLeaving] = useState({ id: '', ad: '' });
    const [reasonForLeaving, setReasonForLeaving] = useState({ id: '', adi: '' });
    const [workingState, setWorkingState] = useState(1);

    const setBusinessCodeForLeavingValues = row => {
        //props.formProps.setFieldValue('vergiDaireid', 12);
        setBusinessCodeForLeaving(row);
    }

    const setWorkingProcess = (event) => {
        setWorkingState(event.target.value);
    }

    const handlePhotoChange = (event) => {
        setPhoto(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6 ${props.className}`}>
            <div>
                <FormGroup
                    label="Vergi Dairesi"
                    icon={require('../../../images/icons/search.png')}
                    iconclick={() => setBusinessCodeModalOpen(true)}
                    iconClassName="cursor-pointer">
                    <input className="cs-input pr-8" value={businessCodeForLeaving.ad} disabled={true} />
                    <input name="vergiDaireid" value={businessCodeForLeaving.id} disabled={true} type="hidden" />
                </FormGroup>

                <FormGroup label="Vergi No">
                    <Field name="vergiNo" className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Sigorta No">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative col-span-2">
                            <Field name="sigortaNo" className="cs-input pr-8" />
                        </div>

                        <div className="flex items-center">

                            <Field name="sigortaTurid" as="select" className="cs-input appearance-none">
                                {sigortaTurList.map(item =>
                                    <option key={item.value} value={item.value}>{item.name}</option>
                                )}
                            </Field>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Sözleşme Şekli" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="sozlesmeTurid" as="select" className="cs-input appearance-none pr-8">
                        {sozlesmeTurList.map(item =>
                            <option key={item.value} value={item.value}>{item.name}</option>
                        )}
                    </Field>
                </FormGroup>

                <FormGroup label="Sözleşme Bitiş" icon={require('../../../images/icons/calendar.png')}>
                    {/* <Field name="sozlesmeBitisTarih" className="cs-input pr-8" type="date" /> */}
                    <DatePicker autoComplete="off" dateFormat="dd.MM.yyyy" name="sozlesmeBitisTarih" selected={props.formProps.values.sozlesmeBitisTarih} onChange={(date) => props.formProps.setFieldValue('sozlesmeBitisTarih', date)} className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="İşe Başlama Tarihi">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="flex col-span-2 items-center">
                            <DatePicker autoComplete="off" dateFormat="dd.MM.yyyy" name="iseGirisTarih" selected={props.formProps.values.iseGirisTarih} onChange={(date) => props.formProps.setFieldValue('iseGirisTarih', date)} className="cs-input pr-8" />

                            <img alt="input icon" src={require('../../../images/icons/calendar.png')} className="-ml-6" />
                        </div>

                        <div className="flex items-center">
                            <Field name="sigortaDurumid" as="select" className="cs-input appearance-none pr-10">

                                {({
                                    field, // { name, value, onChange, onBlur }
                                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc. 
                                    meta,
                                }) => (
                                    <select className="cs-input appearance-none pr-10" {...field} value={workingState} onChange={setWorkingProcess}>
                                        <option key={1} value={1}>Çalışıyor</option>
                                        <option key={0} value={0}>Çalışmıyor</option>
                                    </select>
                                )}
                            </Field>

                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="İşten Ayrılış Tarihi" icon={require('../../../images/icons/calendar.png')}>
                    <DatePicker autoComplete="off" dateFormat="dd.MM.yyyy" name="isdenCikisTarih" selected={props.formProps.values.isdenCikisTarih} onChange={(date) => props.formProps.setFieldValue('isdenCikisTarih', date)} className="cs-input pr-8" disabled={workingState === 1}  />

                </FormGroup>

                <FormGroup
                    label="İşten Ayrılış Nedeni"
                    icon={require('../../../images/icons/search.png')}
                    iconclick={() => setReasonForLeavingModalOpen(!Boolean(workingState))}
                    iconClassName="cursor-pointer">
                    <input className="cs-input pr-8" onChange={() => { }} value={reasonForLeaving.adi} disabled={workingState === 1} />
                </FormGroup>

                <FormGroup label="Mesleği" >
                    <Field name="meslek" className="cs-input pr-8" />
                </FormGroup>
            </div>

            <div>
                <FormGroup label="Öğrenim Durumu" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="ogrenimDurumid" as="select" className="cs-input appearance-none">
                        {ogrenimDurumuList.map(item =>
                            <option key={item.value} value={item.value}>{item.name}</option>
                        )}
                    </Field>
                </FormGroup>

                <FormGroup label="Mezun Olunan Okul">
                    <Field name="okul" className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Mezun Olunan Bölüm">
                    <Field name="bolum" className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Mezuniyet Tarihi" icon={require('../../../images/icons/calendar.png')}>
                    <DatePicker autoComplete="off" dateFormat="dd.MM.yyyy" name="mezuniyetTarih" selected={props.formProps.values.mezuniyetTarih} onChange={(date) => props.formProps.setFieldValue('mezuniyetTarih', date)} className="cs-input pr-8"  />
                </FormGroup>

                <FormGroup label="Askerlik Durumu" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="askerlikDurumid" as="select" className="cs-input appearance-none">
                        {askerlikDurumList.map(item =>
                            <option key={item.id} value={item.id}>{item.adi}</option>
                        )}
                    </Field>
                </FormGroup>

                <FormGroup label="Engellilik Derecesi" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="engellilikDurumid" as="select" className="cs-input appearance-none">
                        {engellikDurumList.map(item =>
                            <option key={item.id} value={item.id}>{item.adi}</option>
                        )}
                    </Field>
                </FormGroup>

                <FormGroup label="Eng. İndirimi Uygunlansın" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="engellilikIndirim" as="select" className="cs-input appearance-none">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </Field>
                </FormGroup>

                <FormGroup label="Eski Hükümlü" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="eskiHukumlu" as="select" className="cs-input appearance-none">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </Field>
                </FormGroup>

                <FormGroup label="Terör Maduru" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="terorMagduru" as="select" className="cs-input appearance-none">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </Field>
                </FormGroup>
            </div>

            <div>
                <FormGroup label="Grup Kodu" icon={require('../../../images/icons/search.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Cari Kodu" icon={require('../../../images/icons/search.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <div className="float-right">
                    <div className="border border-gray-dark rounded bg-white mb-1 relative w-24 h-24">
                        {photo && <img alt="Preview" src={photo} className="w-full h-full" />}
                        <div className="rounded bg-blue-500 w-8 h-8 absolute bottom-0 right-0 p-2 cursor-pointer" onClick={() => setPhoto(null)}>
                            <img alt="Trash Icon" src={require('../../../images/icons/trash.png')} className="w-full h-full" />
                        </div>
                    </div>

                    <div className="overflow-hidden relative w-24">
                        <button className="btn w-full whitespace-nowrap px-0 text-center cursor-pointer">
                            Fotoğraf Seç
                        </button>
                        <input className="cursor-pointer absolute block opacity-0 top-0 left-0 w-full h-full" type="file" name="photo" onChange={handlePhotoChange} />
                    </div>
                </div>
            </div>

            {isBusinessCodeModalOpen &&
                <GeneralBusinessCodeModal
                    onSelect={setBusinessCodeForLeavingValues}
                    onClose={() => setBusinessCodeModalOpen(false)} />
            }
            {isReasonForLeavingModalOpen &&
                <ReasonForLeavingModal
                    onSelect={setReasonForLeaving}
                    onClose={() => setReasonForLeavingModalOpen(false)} />
            }
        </div>
    );
}

General.defaultProps = {
    className: ''
}

General.propTypes = {
    className: PropTypes.string,
    formProps: PropTypes.object
}