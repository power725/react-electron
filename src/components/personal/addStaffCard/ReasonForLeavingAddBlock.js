import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { slideInRight } from 'react-animations';
import axios from 'axios';

import Radium, { StyleRoot } from 'radium';
import DropUp from '../../common/DropUp';
import FormGroup from '../../common/FormGroup';
import toast from '../../../services/toast';

const styles = {
    slideInRight: {
        animation: 'x .3s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
}

function ReasonForLeavingAddBlock(props) {

    const [value, setValue] = useState(props.adi || '');
    const [turValue, setTurValue] = useState(props.tur === true ? 1 : 0);

    const submitForm = async (e) => {
        e.preventDefault();

        if (!value) {
            toast.warning('Please input value.');
            return false;
        }

        if (props.id) { // update
            await axios.post('/Personel/isten-ayrilma-nedenleri-guncelle', { id: props.id, adi: value, tur: turValue });
        } else { // add
            await axios.post('/Personel/isten-ayrilma-nedenleri-ekle', { adi: value, tur: turValue });
        }

        toast.success('Saved successfully.');
        props.onSave();
        props.onClose();
    };

    return (
        <StyleRoot>
            <div className="fixed z-70 inset-0 overflow-y-auto" style={styles.slideInRight}>
                <div className="flex min-h-screen sm:block sm:p-0 h-full">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={props.onClose}></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <form onSubmit={submitForm}>
                        <div className={`absolute top-0 right-0 block bg-white shadow-xl transform transition-all h-full p-3 w-96 flex flex-col justify-between`}>
                            <div>
                                <div className="px-2 pb-1 border-b-2 border-gray-normal my-2">
                                    <h5 className="text-lg font-semibold text-gray-dark">İşten Ayrılma Nedeni Ekle</h5>
                                </div>

                                <div className="border rounded-lg border-gray-normal bg-gray-lightest p-2 pb-1">
                                    <FormGroup label="Tür">
                                        <select className="cs-input appearance-none pr-8" value={turValue}
                                            onChange={(e) => setTurValue(Boolean(e.target.value))}>
                                            <option value={1}>SGK</option>
                                            <option value={0}>İş Kur</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup label="Değer">
                                        <textarea className="cs-input" rows="3"
                                            onChange={(e) => setValue(e.target.value)}
                                            value={value}></textarea>

                                    </FormGroup>

                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="btn mx-1 px-6 bg-blue-500 text-white">Kaydet</button>

                                <DropUp text="Diğer">
                                    <div className="py-1">
                                        <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
                                        <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item Second</a>
                                    </div>
                                </DropUp>

                                <button type="button" className="btn mx-1 px-6 bg-white border" onClick={props.onClose}>Vazgeç</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </StyleRoot>
    );
}

ReasonForLeavingAddBlock.defaultProps = {
    onClose: () => { },
    onSave: () => { },
    id: null,
    tur: null,
    value: ''
}

ReasonForLeavingAddBlock.propTypes = {
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    value: PropTypes.string
}

export default (props) => ReactDOM.createPortal(<ReasonForLeavingAddBlock {...props} />, document.getElementById('modal-root'));