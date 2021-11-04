import React, { useEffect } from 'react';

import FormGroup from '../../common/FormGroup';

import { useSelector, useDispatch } from 'react-redux';
import { Field } from 'formik';
import { getb2bCargoStatusLists, getb2bDeliveryStatusLists, getb2bProductTypeLists, getCargoPriceStatusLists, getGroupCodeLists, getStockTypeLists } from '../../../store/materialStockSlice';



export default function B2B(props) {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getStockTypeLists());
        dispatch(getGroupCodeLists());
        dispatch(getb2bProductTypeLists());
        dispatch(getb2bDeliveryStatusLists());
        dispatch(getb2bCargoStatusLists());
        dispatch(getCargoPriceStatusLists());
    }, []);


    const productTypeList = useSelector((state) => state.material.productTypeList);
    const deliveryStatusList = useSelector((state) => state.material.deliveryStatusList);
    const cargoStatusList = useSelector((state) => state.material.cargoStatusList);
    const cargoPriceStatusList = useSelector((state) => state.material.cargoPriceStatusList);

    return (
        <React.Fragment>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <div className="p-2 text-base text-gray-dark">Genel Bilgiler</div>

                    <FormGroup label="B2B Aktarılsın mı?" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="b2b" as="select" className="cs-input appearance-none pr-10">
                            <option value="1">Evet</option>
                            <option value="0">Hayır</option>
                        </Field>
                    </FormGroup>

                    <FormGroup label="Ürün Türü" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="bolumid" as="select" className="cs-input appearance-none pr-10">
                            {productTypeList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="İndirim Oranı" icon={require('../../../images/icons/calculator.png')}>
                        <Field name="indirimOrani" className="cs-input" />
                    </FormGroup>
                </div>


                <div>
                    <div className="p-2 text-base text-gray-dark">Kargo</div>

                    <FormGroup label="Teslimat Durumu" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="teslimatDurumu" as="select" className="cs-input appearance-none pr-10">
                            {deliveryStatusList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="Kargo Durumu" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="kargoDurumu" as="select" className="cs-input appearance-none pr-10">
                            {cargoStatusList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="Kargo Ücret Durum" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="kargoUcretiDurumu" as="select" className="cs-input appearance-none pr-10">
                            {cargoPriceStatusList.map(item =>
                                <option key={item.value} value={item.value}>{item.name}</option>
                            )}
                        </Field>
                    </FormGroup>

                    <FormGroup label="Kargo Ücreti" icon={require('../../../images/icons/calculator.png')}>
                        <Field name="kargoUcreti" className="cs-input" />
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}