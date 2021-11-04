import React from 'react';

import TableWrapper from '../../common/TableWrapper';


export default function AddressOther(props) {
    const tableRows = [
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label', 'Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label', 'Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label', 'Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label', 'Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label', 'Label']
    ];

    return(
        <div className="p-2">
            <TableWrapper headerText="Diğer Adresler">
                <table className="min-w-full divide-y divide-gray-normal table-fixed">
                    <thead>
                        <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                            <th className="p-2">
                                <div className="flex items-center">
                                    <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                </div>
                            </th>
                            <th className="p-2">Adı</th>
                            <th className="p-2 w-1/7">Adres</th>
                            <th className="p-2">Ülke</th>
                            <th className="p-2">Şehir</th>
                            <th className="p-2">İlçe</th>
                            <th className="p-2">Mahalle</th>
                            <th className="p-2">Bulvar</th>
                            <th className="p-2">Cadde - Sokak</th>
                            <th className="p-2">Bina Adı</th>
                            <th className="p-2">Bina No</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>
        </div>
    );
}