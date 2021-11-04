import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import FormGroup from '../../common/FormGroup';

import {
    getCountryLists,
    getDistrictLists
} from '../../../store/mutualSlice';

import { Field } from 'formik';
export default function Sgk(props) {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCityId(event.target.value);
        dispatch(getDistrictLists({ ilid: event.target.value }));
    }

    const [cityId, setCityId] = useState("6");

    useEffect(() => {
        dispatch(getCountryLists({}));
        dispatch(getDistrictLists({ ilid: 6 }));
    }, []);

    const countryList = useSelector((state) => state.mutual.countryList);
    const cityList = useSelector((state) => state.mutual.cityList);
    const districtList = useSelector((state) => state.mutual.districtList);

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6 ${props.className}`}>
            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">Sigorta Bilgileri</div>

                <FormGroup label="Sigorta Kolu">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="SGB İş Kolu">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Belge Türü">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="İşkur Meslek Kodu">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Görev Kodu">
                    <input className="cs-input" />
                </FormGroup>
            </div>

            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">İletişim Bilgileri</div>

                <FormGroup label="Adres 1">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Ülke" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="personelKimlikBilgileriEkleDTO[ulkeid]" as="select" className="cs-input appearance-none pr-10">
                        {countryList.map(item =>
                            <option key={item.id} value={item.id}>{item.adi}</option>
                        )}
                    </Field>
                </FormGroup>

                <FormGroup label="İl" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="personelKimlikBilgileriEkleDTO[ilid]" as="select" className="cs-input appearance-none pr-10">

                        {({
                            field,
                            form: { touched, errors },
                            meta,
                        }) => (
                            <select className="cs-input appearance-none pr-10" {...field} value={cityId} onChange={handleChange}>
                                {cityList.map(item =>
                                    <option key={item.id} value={item.id}>{item.adi}</option>
                                )}
                            </select>
                        )}
                    </Field>
                </FormGroup>



                <FormGroup label="İlçe" icon={require('../../../images/icons/angle-down.png')}>
                    <Field name="personelKimlikBilgileriEkleDTO[ilceid]" as="select" className="cs-input appearance-none pr-10">
                        {districtList.map(item =>
                            <option key={item.id} value={item.id}>{item.adi}</option>
                        )}
                    </Field>
                </FormGroup>

                <FormGroup label="Mahalle">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bulvar">
                    <input className="cs-input" />
                </FormGroup>

            </div>

            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">&nbsp;&nbsp;&nbsp;</div>


                <FormGroup label="Cadde - Sokak">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bina Adı">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bina No">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>

                        <div className="flex items-center pl-2">Daire No</div>

                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Telefon No">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>

                        <div className="flex items-center pl-2">Mobil No</div>

                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Posta Kodu">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>
            </div>
        </div>
    );
}

Sgk.defaultProps = {
    className: ''
}

Sgk.propTypes = {
    className: PropTypes.string
}