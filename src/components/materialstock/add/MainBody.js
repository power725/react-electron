import React, { useEffect } from 'react';

import FormGroup from '../../common/FormGroup';
import { useSelector, useDispatch } from 'react-redux';
import { getUnitLists } from '../../../store/materialStockSlice';

import { Field } from 'formik';

export default function MainBody(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUnitLists({  }));
    }, []);

    const unitList = useSelector((state) => state.material.unitList);
    return (
        <React.Fragment>

            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Ana Birim" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="anabirim" as="select" className="cs-input appearance-none">
                            {unitList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>


                    <FormGroup label="B2B Ekle" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="b2b" as="select" className="cs-input appearance-none">
                            <option value="1">Evet</option>
                            <option value="0">Hayır</option>
                        </Field>
                    </FormGroup>

                </div>

                <div>
                    <FormGroup label="Satış Fiyatı">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative col-span-2">
                                <input className="cs-input pr-8" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>TL</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                            <div className="relative col-span-3 my-1">
                                <div className="flex items-center">
                                    <input id="Satış" name="Yurtdışı" type="checkbox"
                                        className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                                    <label htmlFor="Satış" className="block text-xs">İndirimli Fiyata KDV Dahil</label>
                                </div>
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="İndirimli Fiyat">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative col-span-2">
                                <input className="cs-input pr-8" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>TL</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                            <div className="relative col-span-3 my-1">
                                <div className="flex items-center">
                                    <input id="İndirimli" name="Yurtdışı" type="checkbox"
                                        className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                                    <label htmlFor="İndirimli" className="block text-xs">Satış Fiyatına KDV Dahil</label>
                                </div>
                            </div>
                        </div>
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="En">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>cm</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Boy">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>cm</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Yükseklik">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>cm</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Alan">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <input className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8">
                                    <option>cm</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Desi">
                        <input className="cs-input" />
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}