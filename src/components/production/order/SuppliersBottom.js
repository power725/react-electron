import React from 'react';
import { Link } from 'react-router-dom';

import TableWrapper from '../../common/TableWrapper';
import DropLeft from '../../common/DropLeft';
import TableInput from '../../common/TableInput';


const tableRows = [
    ['Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label'],
];


export default function Suppliers(props) {

    return(
        <React.Fragment>

            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div className="col-span-3 mt-10">
                <TableWrapper
                        showAdd={false}
                        headerText={<div>Üretim Miktarı Hesaplama</div>}>
                        <table className="min-w-full divide-y divide-gray-normal table-fixed">
                            <thead>
                                <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                                    <th className="p-2">
                                        <div className="flex items-center">
                                            <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                        </div>
                                    </th>
                                    <th className="p-2">Kodu</th>
                                    <th className="p-2">Ürün Miktarı (LT)</th>
                                    <th className="p-2">Dolum Miktarı (KG)</th>
                                    <th className="p-2">İstenen Birim</th>
                                    <th className="p-2">İstenen Miktar</th>
                                    <th className="p-2">Çıkan Miktar</th>
                                    <th className="p-2">Toplam</th>

                                    <th className="p-2"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm text-gray-dark">
                                
                                <tr key={0}>
                                    <td className="p-2">
                                        <div className="flex items-center">
                                            <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                        </div>
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/search.png')}>
                                            <select className="cs-input w-20 appearance-none">
                                                <option>0.001</option>
                                            </select>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/calculator.png')}>
                                            <input className="cs-input" placeholder={"8.43"}/>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/calculator.png')}>
                                            <input className="cs-input" placeholder={"8.43"}/>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/angle-down.png')}>
                                            <select className="cs-input w-20 appearance-none">
                                                <option>Dolar</option>
                                            </select>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/calculator.png')}>
                                            <input className="cs-input" placeholder={"123,50"}/>
                                        </TableInput>
                                        
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/calculator.png')}>
                                            <input className="cs-input" placeholder={"8.43"}/>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">7.5</td>
                                    <td className="p-2 cursor-pointer">
                                        <DropLeft elem={<span className="font-bold">•••</span>}>
                                            
                                            <Link to="#" tabIndex="0" className="drop-item" role="menuitem">Sil</Link>
                                            <Link to="#" tabIndex="0" className="drop-item" role="menuitem">Düzenle</Link>
                                            <Link to="#" tabIndex="0" className="drop-item" role="menuitem">İncele</Link>
                                            <Link to="#" tabIndex="0" className="drop-item" role="menuitem">Yazdır</Link>
                                        </DropLeft>
                                    </td>
                                </tr>
                                {tableRows.map((row, index) => (
                                    <tr key={index + 1}>
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
                                        <td className="p-2 cursor-pointer">
                                            <DropLeft elem={<span className="font-bold">•••</span>}>
                                            
                                                <Link to="#" tabIndex="0" className="drop-item" role="menuitem">Sil</Link>
                                                <Link to="#" tabIndex="0" className="drop-item" role="menuitem">Düzenle</Link>
                                                <Link to="#" tabIndex="0" className="drop-item" role="menuitem">İncele</Link>
                                                <Link to="#" tabIndex="0" className="drop-item" role="menuitem">Yazdır</Link>
                                            </DropLeft>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TableWrapper>
                </div>
            </div>
        </React.Fragment>

    );
}