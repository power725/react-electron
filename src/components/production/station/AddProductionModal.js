import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Modal from '../../common/Modal';
import DropLeft from '../../common/DropLeft';
import DropUp from '../../common/DropUp';
import TableWrapper from '../../common/TableWrapper';

const tableRows = [
    ['Label','Label','Label'],
    ['Label','Label','Label'],
    ['Label','Label','Label'],
    ['Label','Label','Label'],
    ['Label','Label','Label']
];

export default function AddProductionModal(props) {
    const [isFullScreen, setFullScreen] = useState(false);

    return(
        <React.Fragment>
            <Modal isFullScreen={isFullScreen} onClose={props.onClose}>
                <div className="flex justify-between items-center px-2 pb-1 border-b-2 border-gray-normal my-2">
                    <h5 className="text-lg font-semibold text-gray-dark">İşkur Meslek Kodu</h5>

                    <div className="flex items-center">
                        <img
                            alt="expand"
                            className="cursor-pointer"
                            src={require(`../../../images/icons/${isFullScreen ? 'collapse.png' : 'expand.png'}`)}
                            onClick={() => setFullScreen(!isFullScreen)} />
                    </div>
                </div>

                <div className="rounded-lg bg-gray-light border border-gray-normal flex justify-between px-2 py-0.5 mb-2">
                    <div className="flex items-center flex-grow">
                        <img alt="Filter" src={require('../../../images/icons/filter.png')} className="h-4 mr-2" />
                        <input className="text-gray-600 pl-3 pr-3 py-1.5 outline-none border-0 bg-transparent w-full" placeholder="Kelime İle Filtrele" />
                    </div>
                </div>

                <div className="flex-grow">
                    <div className="rounded-lg border border-gray-normal bg-gray-lightest p-1 mb-2">
                        <TableWrapper
                            showAdd={false}
                            headerText="">
                            <table className="min-w-full divide-y divide-gray-normal table-fixed">
                                <colgroup>
                                    <col width="60px" />
                                    <col />
                                    <col />
                                    <col />
                                    <col width="50px" />
                                </colgroup>
                                <thead>
                                    <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                                        <th className="p-2">
                                            <div className="flex items-center">
                                                <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                            </div>
                                        </th>
                                        <th className="p-2">ID</th>
                                        <th className="p-2">Değer</th>
                                        <th className="p-2">Açıklama</th>
                                        <th className="p-2">İşlem</th>
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
                        <button className="btn mx-1 px-6 bg-blue-500 text-white">Seç</button>
                        <button className="btn mx-1 px-6 bg-blue-500 text-white">Ekle</button>

                        <DropUp text="Diğer">
                            <div className="py-1">
                                <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
                                <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item Second</a>
                            </div>
                        </DropUp>
                        
                        <button className="btn mx-1 px-6 bg-white border" onClick={props.onClose}>Vazgeç</button>
                    </div>
                </div>
            </Modal>
           
        </React.Fragment>
    );
}

AddProductionModal.defaultProps = {
    onClose: PropTypes.func
}

AddProductionModal.propTypes = {
    onClose: PropTypes.func
}