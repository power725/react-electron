import React from 'react';
import FormGroup from '../../common/FormGroup';

import { Field } from 'formik';

export default function General(props) {
    return (
        <React.Fragment>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <div className="p-2 text-base text-gray-dark">Miktar</div>

                    <FormGroup label="Min. Sipariş Miktarı" icon={require('../../../images/icons/calculator.png')}>
                        <Field name="genelOzellikler[minSiparisMiktari]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Asgari Miktar" icon={require('../../../images/icons/calculator.png')}>
                        <Field name="genelOzellikler[asgariMiktar]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Azami Miktar" icon={require('../../../images/icons/calculator.png')}>
                        <Field name="genelOzellikler[azamiMiktar]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Risk Kontrol">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <Field name="genelOzellikler[riskKontrol]" as="select" className="cs-input appearance-none pr-8">
                                    <option value="1">Evet</option>
                                    <option value="0">Hayır</option>
                                </Field>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Risk Miktarı</div>

                            <div className="relative flex items-center">
                                <Field name="genelOzellikler[riskMiktari]" className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>


                    <div className="p-2 text-base text-gray-dark">Raf</div>

                    <FormGroup label="Raf Ömrü">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <Field name="genelOzellikler[rafOmru]" className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <Field name="genelOzellikler[rafOmruBirimid]" as="select" className="cs-input appearance-none pr-8">
                                    <option value="1">Gün</option>
                                    <option value="2">Ay</option>
                                    <option value="3">Yıl</option>
                                </Field>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Raf Yeri">
                        <Field name="genelOzellikler[rafYeri]" className="cs-input" />
                    </FormGroup>
                </div>

                <div>
                    <div className="p-2 text-base text-gray-dark">KDV</div>

                    <FormGroup label="Alış KDV" icon={require('../../../images/icons/calculator.png')}>
                        <Field name="genelOzellikler[alisKDV]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Satış KDV" icon={require('../../../images/icons/calculator.png')}>
                        <Field name="genelOzellikler[satisKDV]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Toptan Satış KDV" icon={require('../../../images/icons/calculator.png')}>
                        <Field name="genelOzellikler[toptanSatisKDV]" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Tevkifat Kodu">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <input className="cs-input pr-8"></input>
                                <img alt="input icon" src={require('../../../images/icons/search.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Tevkifat Oranı</div>

                            <div className="relative flex items-center">
                                <Field name="genelOzellikler[tevkifatOrani]" className="cs-input pr-8" />
                            </div>
                        </div>
                    </FormGroup>


                    <div className="p-2 text-base text-gray-dark">Barkod</div>

                    <FormGroup label="Kare Barkod">
                        <Field name="genelOzellikler[kareBarkod]" className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Global Barkod">
                        <Field name="genelOzellikler[globalBarkod]" className="cs-input" />
                    </FormGroup>

                </div>

                <div>
                    <div className="p-2 text-base text-gray-dark">Tedarik</div>

                    <FormGroup label="Tedarik Süresi">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <Field name="genelOzellikler[tedarikSuresi]" className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <Field name="genelOzellikler[tedarikSuresiPeriyot]" as="select" className="cs-input appearance-none pr-8">
                                    <option value="1">Gün</option>
                                    <option value="2">Ay</option>
                                    <option value="3">Yıl</option>
                                </Field>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Garanti Süresi">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="relative flex items-center col-span-2">
                                <Field name="genelOzellikler[garantiSuresi]" className="cs-input pr-8" />
                                <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center">
                                <Field name="genelOzellikler[garantiSuresiPeriyot]" as="select" className="cs-input appearance-none pr-8">
                                    <option value="1">Gün</option>
                                    <option value="2">Ay</option>
                                    <option value="3">Yıl</option>
                                </Field>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}