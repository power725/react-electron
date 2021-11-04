import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../../common/FormGroup';
import TableWrapper from '../../common/TableWrapper';

export default function Salary(props) {
    const tableRows = [
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label'],
        ['Label','Label','Label','Label','Label','Label','Label','Label','Label']
    ];

    return(
        <div className={props.className}>
            <div className="p-2 text-base font-semibold text-gray-dark">Sabit Fazla Mesailer</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Hafta Sonu Mesaisi (Gün)" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Gece Mesaisi (Saat)" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>
                </div>

            </div>

            <div className="px-2 mt-6 mb-2">
                <TableWrapper headerText="Sabit Fazla Mesailer">
                    <table className="min-w-full divide-y divide-gray-normal table-fixed">
                        <thead>
                            <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                                <th className="p-2">
                                    <div className="flex items-center">
                                        <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                    </div>
                                </th>
                                <th className="p-2">Tür</th>
                                <th className="p-2">Kod</th>
                                <th className="p-2 w-1/4">Açıklama</th>
                                <th className="p-2">Ödeme Türü</th>
                                <th className="p-2">Birimi</th>
                                <th className="p-2">Tutar</th>
                                <th className="p-2">Net / Brüt</th>
                                <th className="p-2">Başlangıç Tarihi</th>
                                <th className="p-2">Bitiş Tarihi</th>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TableWrapper>
            </div>
        </div>
    );
}

Salary.defaultProps = {
    className: ''
}

Salary.propTypes = {
    className: PropTypes.string
}