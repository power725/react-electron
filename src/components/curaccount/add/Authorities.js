import React from 'react';

import TableWrapper from '../../common/TableWrapper';


export default function Authorities(props) {
    const tableRows = [
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label','Label','Label']
    ];

    return(
        <div className="p-2">
            <TableWrapper headerText="">
                <table className="min-w-full divide-y divide-gray-normal table-fixed">
                    <thead>
                        <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                            <th className="p-2">
                                <div className="flex items-center">
                                    <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                </div>
                            </th>
                            <th className="p-2">Banka Adı</th>
                            <th className="p-2">Adı Soyadı</th>
                            <th className="p-2">Görev</th>
                            <th className="p-2">Yetkililer</th>
                            <th className="p-2">Cep Telefonu</th>
                            <th className="p-2">İş Telefonu</th>
                            <th className="p-2">E-Posta</th>
                            <th className="p-2">T.C. No</th>
                            <th className="p-2">Not</th>
                            <th className="p-2">Özel Kod</th>
                            <th className="p-2">Türü</th>
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
                                <td className="p-2">{row[10]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>
        </div>
    );
}