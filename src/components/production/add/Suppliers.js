import React from 'react';
import { Link } from 'react-router-dom';
import TableInput from '../../common/TableInput';

import TableWrapper from '../../common/TableWrapper';
import DropLeft from '../../common/DropLeft';


const tableRows = [
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
    ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
];


export default function Suppliers(props) {

    return(
        <React.Fragment>

            <div className="grid grid-cols-1  py-1 px-2 gap-x-6">
                <TableWrapper
                        showAdd={false}
                        headerText={<div>Üretim Kalemleri</div>}>
                        <table className="min-w-full divide-y divide-gray-normal table-fixed">
                            <thead>
                                <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                                    <th className="p-2">
                                        <div className="flex items-center">
                                            <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                        </div>
                                    </th>
                                    <th className="p-2">Tür</th>
                                    <th className="p-2">Stok Durum</th>
                                    <th className="p-2">Ürün Kodu</th>
                                    <th className="p-2">Ürün Adı</th>
                                    <th className="p-2">Birim</th>
                                    <th className="p-2">Miktar</th>
                                    <th className="p-2">Alt Reçete Kodu</th>
                                    <th className="p-2">Açıklama</th>
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
                                            <input className="cs-input" placeholder="+ Çıkan"/>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/angle-down.png')}>
                                            <select className="cs-input w-20 appearance-none">
                                                <option>Mevcut Stok</option>
                                            </select>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                         <TableInput icon={require('../../../images/icons/search.png')}>
                                            <input className="cs-input" placeholder="0.00001"/>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">Label</td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/angle-down.png')}>
                                            <select className="cs-input w-20 appearance-none">
                                                <option>Adet</option>
                                            </select>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/calculator.png')}>
                                            <input className="cs-input" placeholder={"15,000"}/>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                        <TableInput icon={require('../../../images/icons/search.png')}>
                                            <input className="cs-input" placeholder={"0.0001"}/>
                                        </TableInput>
                                    </td>
                                    <td className="p-2">
                                      <TableInput>
                                            <input className="cs-input" placeholder={"Label"} />
                                        </TableInput>
                                       
                                    </td>
                                    <td className="p-2">1.041,105</td>
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
                                        <td className="p-2">{row[7]}</td>
                                        <td className="p-2">{row[8]}</td>
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
        </React.Fragment>

    );
}