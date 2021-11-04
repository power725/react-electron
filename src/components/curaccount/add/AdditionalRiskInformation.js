import React from 'react';

import TableWrapper from '../../common/TableWrapper';


export default function AdditionalRiskInformation(props) {
    const tableRows = [
        ['Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label']
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
                            <th className="p-2">Risk Kontrolü</th>
                            <th className="p-2">Risk Limiti</th>
                            <th className="p-2">Döviz Türü</th>
                            <th className="p-2">Risk İşlemi</th>
                            <th className="p-2 w-1/4">Şubeler</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>
        </div>
    );
}