import React, { useEffect, useState } from 'react';
import {
    useHistory
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authenticateUser } from '../store/authenticationSlice';

export default function Login(props) {
    const history = useHistory();

    const firmList = useSelector((state) => state.firm.firmList);

    const [isSysSetExpand, setSysSetExpand] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [selectedFirm, setSelectedFirm] = useState("Albera");
    const dispatch = useDispatch();
    const [loginErr, setLoginErr] = useState([]);

    const connect = () => {
        setButtonDisabled(true);
        dispatch(authenticateUser({ "kullaniciAdi": userName, "sifre": password, "firmaId": 1 }))
            .then(function (result) {
                let success = result.payload.success
                if (success) {
                    history.replace('/dashboard')
                }
                else {
                    setLoginErr(result.payload.messages);
                }
            })
            .finally(() => setButtonDisabled(false));
    }
    useEffect(() => {
        //List Firms Request
    })
    const listFirms = () => {
        return firmList.map(firmName => {
            return (
                <option key={firmName.id} id={firmName.id}>{firmName.adi}</option>
            )
        });
    }
    const onFirmValueChanged = (e) => {
        setSelectedFirm(e.target.value);
    }
    const onUsernameChanged = (e) => {
        setUserName(e.target.value);
    }
    const onPasswordChanged = (e) => {
        setPassword(e.target.value);
    }
    const closeWindow = () => {
        if (window.confirm('Are you sure you want to close?')) {
            window.alert('Closed');
        } else {
            window.alert('Canceled');
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover login-container">

            <div className="w-full mx-auto bg-white rounded-xl z-10 p-5 pt-0 border relative bg-gray-lightest"
                style={{ maxWidth: '404px' }}>

                <div className="rounded w-7 h-7 bg-gray-light text-indigo-600 absolute top-2 right-2 items-center justify-center flex cursor-pointer" onClick={closeWindow}>
                    <i className="fa fa-times"></i>
                </div>

                <img
                    className="mx-auto my-12"
                    src={require('../images/sistem-erp-logo-expand.png')}
                    alt="System Erp Logo" />

                <div className="relative mb-3">
                    <label className="z-15 absolute mt-1 ml-3 text-xs text-gray">Firma</label>
                    <input onChange={e => onFirmValueChanged(e)} className="cs-big-input z-10 appearance-none" value={selectedFirm} list="server-options" />
                    <datalist id="server-options">
                        {listFirms()}
                    </datalist>

                    <img alt="input icon" src={require('../images/icons/angle-down.png')} className="absolute right-2 top-3" />
                </div>

                <div className="relative mb-3">
                    <label className="z-15 absolute mt-1 ml-3 text-xs text-gray">Kullanıcı Kodu</label>
                    <input onChange={e => onUsernameChanged(e)} className="cs-big-input z-10" value={userName} />
                </div>

                <div className="relative mb-3">
                    <label className="z-15 absolute mt-1 ml-3 text-xs text-gray">Şifre</label>
                    <input onChange={e => onPasswordChanged(e)} type="password" className="cs-big-input z-10" value={password} />
                </div>
                <div>
                    {loginErr.map((i) =>
                        <div className=" my-3 block text-sm text-left text-red-600 bg-red-500 bg-opacity-10 border border-red-400 h-12 flex items-center p-4 rounded-md"
                            role="alert"
                            key={i}
                        >
                            {i}
                        </div>
                    )}
                </div>
                <div className="bg-gray-light rounded">
                    <div className="text-blue-500 px-3 py-1 flex justify-between items-center border-b-2 border-gray-200" onClick={() => setSysSetExpand(!isSysSetExpand)}>
                        Sistem Ayarlarını Görüntüle
                        <i className="fa fa-chevron-up"></i>
                    </div>

                    {isSysSetExpand &&
                        <div className="px-3 py-1">
                            <div className="grid grid-cols-4 gap-4 mb-1">
                                <div className="flex items-center text-gray-darkest">Dil</div>
                                <div className="col-span-3">
                                    <div className="relative flex items-center">
                                        <select className="cs-input appearance-none pr-8">
                                            <option value="turkish">Türkçe</option>
                                            <option value="english">İngilizce</option>
                                        </select>
                                        <img alt="input icon" src={require('../images/icons/angle-down.png')} className="-ml-6 z-10" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center my-3">
                                <input id="remember_me" name="remember_me" type="checkbox"
                                    className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-4" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm">Aynı Kullanıcının Bağlantısını Kes</label>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-1">
                                <button className="btn">İnternet Bağlama Testi</button>
                                <button className="btn">Ödeme İşlemleri</button>
                            </div>
                        </div>
                    }
                </div>

                <div className="flex flex-col items-center">
                    <button className="px-10 py-2 rounded text-center text-sm bg-blue-500 text-white mx-auto mt-5 font-bold" onClick={connect} disabled={buttonDisabled}>
                        {buttonDisabled && <i className="fa fa-spin fa-spinner"></i>}
                        {!buttonDisabled && 'Bağlan'}
                    </button>
                    <img src={require('../images/comodo.png')} alt="Comodo" className="mt-2 w-12" />
                </div>

                <hr className="border border-gray-200 mt-1 mb-2" />

                <div className="flex justify-center space-x-8 mb-2">
                    <span>Yardım</span>
                    <span>Gizlilik</span>
                    <span>Şartlar</span>
                </div>

                <div className="flex justify-center space-x-6">
                    <span>www.softsis.com.tr</span>
                    <span>
                        <i className="fa fa-phone mr-2"></i>
                        0850 000 00 00
                    </span>
                    <span className="flex space-x-2 text-gray-500">
                        <i className="fa fa-youtube"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-linkedin"></i>
                    </span>
                </div>

                <a href="https://www.softsis.com.tr" rel="noopener noreferrer" target="_blank">
                    <img src={require('../images/soft-sis.png')} alt="Softsis" className="mt-3 mx-auto" />
                </a>
            </div>
        </div>
    );
}