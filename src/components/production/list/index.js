import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageSubscribe from '../../common/PageSubscribe';
import TableWrapper from '../../common/TableWrapper';
import DropUp from '../../common/DropUp';
import DropLeft from '../../common/DropLeft';


const tableRows = [
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label']
];


export default function ListMaterialStock(props) {
    const [filterOpened, setFilterOpened] = useState(true);
    const [isFullScreen, setFullScreen] = useState(false);

    return(
        <div className="p-3">
            <PageSubscribe text="Anasayfa > Üretim Modülü > Üretim Reçete Listesi"
                className="mb-5" />

            <div className={isFullScreen ? "full-screen" : ""}>
                <div className="flex justify-between items-center px-2 pb-1 border-b-2 border-gray-normal mb-2">
                    <h5 className="text-lg font-semibold text-gray-dark">Üretim Reçete Listesi</h5>

                    <div className="flex items-center">
                        <div className="relative flex items-center mr-8">
                            <select className="px-3 bg-transparent border-0 appearance-none pr-8 focus:outline-none">
                                <option>Son Eklenen</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10 -mt-1.5" />
                        </div>

                        <div className="relative flex items-center mr-8">
                            <select className="px-3 bg-transparent border-0 appearance-none pr-8 focus:outline-none">
                                <option>Dışarı Aktar</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10 -mt-1.5" />
                        </div>

                        <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded p-2 mr-3 cursor-pointer" onClick={() => setFilterOpened(!filterOpened)}>
                            <img alt="Filter" src={require('../../../images/icons/filter.png')} />
                        </div>
                        
                        <img
                            alt="expand"
                            className="cursor-pointer"
                            src={require(`../../../images/icons/${isFullScreen ? 'collapse.png' : 'expand.png'}`)}
                            onClick={() => setFullScreen(!isFullScreen)} />
                    </div>
                </div>

                {filterOpened &&
                    <div className="rounded-lg bg-gray-light border border-gray-normal flex justify-between px-2 py-0.5 mb-2">
                        <div className="flex items-center flex-grow">
                            <img alt="Filter" src={require('../../../images/icons/filter.png')} className="h-4 mr-2" />
                            <input className="text-gray-600 pl-3 pr-3 py-1.5 outline-none border-0 bg-transparent w-full" placeholder="Kelime İle Filtrele" />
                        </div>

                        <div className="flex items-center">
                            <div className="relative flex items-center ml-6">
                                <select className="px-3 bg-transparent border-0 appearance-none pr-8 focus:outline-none">
                                    <option>Firma</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10 -mt-1.5" />
                            </div>

                            <div className="relative flex items-center ml-6">
                                <select className="px-3 bg-transparent border-0 appearance-none pr-8 focus:outline-none">
                                    <option>Depo</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10 -mt-1.5" />
                            </div>

                            <div className="relative flex items-center ml-6">
                                <select className="px-3 bg-transparent border-0 appearance-none pr-8 focus:outline-none">
                                    <option>Durum</option>
                                </select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10 -mt-1.5" />
                            </div>
                        </div>
                    </div>
                }

                <div className="flex">

                    <div className="flex-grow">
                        <div className="rounded-lg border border-gray-normal bg-gray-lightest p-1 mb-2">
                            <TableWrapper
                                showAdd={true}
                                headerText={
                                    <button className="px-3 py-1 border border-blue-400 bg-gray-normal rounded text-sm w-20 text-left">
                                        <i className="fa fa-plus mr-2"></i>
                                        Ekle
                                    </button>
                                }>
                                <table className="min-w-full divide-y divide-gray-normal table-fixed">
                                    <thead>
                                        <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                                            <th className="p-2">
                                                <div className="flex items-center">
                                                    <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                                </div>
                                            </th>
                                            <th className="p-2">Tür</th>
                                            <th className="p-2">Reçete Kodu</th>
                                            <th className="p-2">Açıklama</th>
                                            <th className="p-2">Rota Kodu</th>
                                            <th className="p-2">Rota Açıklama</th>
                                            <th className="p-2">Firma</th>
                                            <th className="p-2">Şube</th>
                                            <th className="p-2">Ürün Adı</th>
                                            <th className="p-2">Durum</th>
                                            <th className="p-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-sm text-gray-dark">
                                        {tableRows.map((row, index) => (
                                            <tr key={index}>
                                                <td className="p-2">
                                                    <div className="flex items-center">
                                                        <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                                    </div>
                                                </td>
                                                <td className="p-2">{row[0]}</td>
                                                <td className="p-2">{row[1]}</td>
                                                <td className="p-2">{row[2]}</td>
                                                <td className="p-2">{row[3]}</td>
                                                <td className="p-2">{row[4]}</td>
                                                <td className="p-2">{row[5]}</td>
                                                <td className="p-2">{row[6]}</td>
                                                <td className="p-2">{row[7]}</td>
                                                <td className="p-2">{row[8]}</td>
                                                <td className="p-2">{row[9]}</td>
                                                <td className="p-2 cursor-pointer">
                                                    <DropLeft elem={<span className="font-bold">•••</span>}>
                                                        <div>
                                                            <Link to="/personal/list" tabIndex="0" className="drop-item" role="menuitem">Sil</Link>
                                                            <Link to="/personal/list" tabIndex="0" className="drop-item" role="menuitem">Düzenle</Link>
                                                            <Link to="/personal/list" tabIndex="0" className="drop-item" role="menuitem">İncele</Link>
                                                            <Link to="/personal/list" tabIndex="0" className="drop-item" role="menuitem">Yazdır</Link>
                                                        </div>
                                                    </DropLeft>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </TableWrapper>
                        </div>
                        <div className="flex justify-center">
                            <button className="btn mx-1 px-6 bg-blue-500 text-white">Kaydet</button>
                            <DropUp text="Diğer">
                                <div className="py-1">
                                    <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
                                    <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item Second</a>
                                </div>
                            </DropUp>
                            <button className="btn mx-1 px-6 bg-white border" type="button">Vazgeç</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}