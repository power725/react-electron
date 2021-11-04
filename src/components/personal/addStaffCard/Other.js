import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import FormGroup from '../../common/FormGroup';

export default function Other(props) {
    return(
        <div className={props.className}>
            <div className="p-2 text-base font-semibold text-gray-dark">Diğer Bilgiler</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Sosyal Güv. Kuruluşu" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="personelDiğerBilgileriEkleDTO[sosyalGuvenlikKurumid]" as="select" className="cs-input appearance-none"></Field>
                    </FormGroup>

                    <FormGroup label="Emekli Sandık  No">
                        <Field name="personelDiğerBilgileriEkleDTO[emekliSandikNo]" className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Sandık Kodu">
                        <Field name="personelDiğerBilgileriEkleDTO[sandikKodu]" className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Bağkur No">
                        <Field name="personelDiğerBilgileriEkleDTO[bagkurNo]" className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Sandık Sicil No.">
                        <Field name="personelDiğerBilgileriEkleDTO[sicilNo]" className="cs-input" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="Referans">
                        <Field name="personelDiğerBilgileriEkleDTO[referansAdSoyad]" className="cs-input appearance-none" />
                    </FormGroup>

                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                        <label className="p-2 col-span-3 ellipsis">Önceki Çalışma Süresi</label>
                        <div className="col-span-4 flex items-center">
                            <Field name="personelDiğerBilgileriEkleDTO[oncekiCalismaSuresiAy]" className="cs-input" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>
                    </div>

                    <FormGroup label="Önceki İş Yeri">
                        <Field name="personelDiğerBilgileriEkleDTO[oncekiIsyeri]" className="cs-input" />
                    </FormGroup>

                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                        <label className="p-2 col-span-3 ellipsis">Önceki İş Yeri Adresi</label>
                        <div className="col-span-4 flex items-center">
                            <Field name="personelDiğerBilgileriEkleDTO[oncekiIsAdres]" className="cs-input" />
                        </div>
                    </div>

                </div>

                <div>
                    <FormGroup label="Eğitim Tazminatı" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Aile Yardımı" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Yemek Parası" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Çocuk Parası" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input" />
                    </FormGroup>
                </div>
            </div>
        </div>
    );
}

Other.defaultProps = {
    className: ''
}

Other.propTypes = {
    className: PropTypes.string
}