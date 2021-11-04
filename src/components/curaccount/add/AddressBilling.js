import React, { useEffect, useState } from 'react';
import FormGroup from '../../common/FormGroup';
import { useSelector, useDispatch } from 'react-redux';

import { getAddressTypeLists } from '../../../store/companySlice';

import {
    getCountryLists,
    getCityLists,
    getDistrictLists
} from '../../../store/mutualSlice';

import { Field } from 'formik';

export default function AddressBilling(props) {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCityId(event.target.value);
        dispatch(getDistrictLists({ ilid: event.target.value }));
    }

    useEffect(() => {
        dispatch(getAddressTypeLists());
        dispatch(getCountryLists({}));
        dispatch(getCityLists({}));
        dispatch(getDistrictLists({ ilid: 6 }));
    }, []);

    const addressTypeList = useSelector((state) => state.company.addressTypeList);
    const countryList = useSelector((state) => state.mutual.countryList);
    const cityList = useSelector((state) => state.mutual.cityList);
    const districtList = useSelector((state) => state.mutual.districtList);

    const [cityId, setCityId] = useState(6);

    return (
        <React.Fragment>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div className="font-semibold text-base text-gray-dark">Adres Bilgileri</div>
                <div className="font-semibold text-base text-gray-dark"></div>
                <div className="font-semibold text-base text-gray-dark">Yetkili Bilgileri</div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>

                    <FormGroup label="Firma Adres Tür" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="firmaAdresDTO[0].firmaAdresTurid" as="select" className="cs-input appearance-none">
                            {addressTypeList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="Adres Adı">
                        <Field name="firmaAdresDTO[0].adi" className="cs-input pr-8" />
                    </FormGroup>



                    <FormGroup label="Ülke" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="firmaAdresDTO[0].ulkeid" as="select" className="cs-input appearance-none pr-10">
                            {countryList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="İl" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="firmaAdresDTO[0].ilid" as="select" className="cs-input appearance-none pr-10">

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
                        <Field name="firmaAdresDTO[0].ilceid" as="select" className="cs-input appearance-none pr-10">
                            {districtList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="Mahalle">
                        <Field name="firmaAdresDTO[0].mahalle" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Bulvar">
                        <Field name="firmaAdresDTO[0].bulvar" className="cs-input pr-8" />
                    </FormGroup>

                </div>
                <div>

                    <FormGroup label="Cadde - Sokak">
                        <Field name="firmaAdresDTO[0].cadde" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Bina Adı">
                        <Field name="firmaAdresDTO[0].binaAdi" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Bina No">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <Field name="firmaAdresDTO[0].binaNo" className="cs-input pr-8" />
                            </div>

                            <div className="relative flex items-center pl-2">Daire No</div>

                            <div className="relative flex items-center">
                                <Field name="firmaAdresDTO[0].daireNo" className="cs-input pr-8" />
                            </div>
                        </div>
                    </FormGroup>


                    <FormGroup label="Posta Kodu">
                        <Field name="firmaAdresDTO[0].postaKodu" className="cs-input pr-8" />
                    </FormGroup>

                </div>
                <div>

                    <FormGroup label="Ad Soyad">
                        <Field name="firmaIletisimDTO[0].adi" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Görev">
                        <Field name="firmaIletisimDTO[0].gorev" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="E-Posta">
                        <Field name="firmaIletisimDTO[0].e_posta" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Cep Telefonu">
                        <Field name="firmaIletisimDTO[0].cepTel" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="İş Telefonu">
                        <Field name="firmaIletisimDTO[0].isTel" className="cs-input pr-8" />
                    </FormGroup>

                </div>
            </div>
        </React.Fragment>
    );
}