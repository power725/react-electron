import React from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../../common/FormGroup';

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

            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div className="col-span-1">
                    <FormGroup label="Cari Kodu" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>
                
                <div className="col-span-2">
                    <button className="btn mx-1 px-6 bg-blue-500 text-white">Listeye Ekle</button>
                </div>
                
                <div className="col-span-3 mt-10">
                    <TableWrapper
                showAdd={false}
                headerText={"Malzeme Tedarikçi Listesi"}>
                <table className="min-w-full divide-y divide-gray-normal table-fixed">
                    <thead>
                        <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                            <th className="p-2">
                                <div className="flex items-center">
                                    <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                </div>
                            </th>
                            <th className="p-2">Tür</th>
                            <th className="p-2">Cari Kodu</th>
                            <th className="p-2">Açıklama</th>
                            <th className="p-2">Yetkili Kişi</th>
                            <th className="p-2">E-Posta</th>
                            <th className="p-2">S.Telefon</th>
                            <th className="p-2">C.Telefonu</th>
                            <th className="p-2">İl</th>
                            <th className="p-2">İlçe</th>
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