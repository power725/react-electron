import React from 'react';
import FormGroup from '../../common/FormGroup';


export default function B2B(props) {
    return(
        <React.Fragment>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <div className="p-2 text-base text-gray-dark">Genel Bilgiler</div>

                    <FormGroup label="Ürün Türü" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="İndirim Oranı" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>

                
                <div>
                    <div className="p-2 text-base text-gray-dark">Kargo</div>

                    <FormGroup label="Teslimat Durumu" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Kargo Durumu" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Kargo Ücret Durum" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Kargo Ücreti" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}