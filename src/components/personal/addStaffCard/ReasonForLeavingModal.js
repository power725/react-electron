import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from '../../common/Modal';
import DropLeft from '../../common/DropLeft';
import TableWrapper from '../../common/TableWrapper';
import ReasonForLeavingAddBlock from './ReasonForLeavingAddBlock';
import {
    getReasonLeavingList
} from '../../../store/staffSlice';

import toast from '../../../services/toast';
import axios from 'axios';

export default function ReasonForLeavingModal(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReasonLeavingList());
    }, []);

    const tableRows = useSelector((state) => state.staff.reasonLeavingList);

    const [isFullScreen, setFullScreen] = useState(false);
    const [isAddBlockOpened, setAddBlockOpened] = useState(false);
    const [selectedRow, setSelctedRow] = useState({});
    const [editingRow, setEditingRow] = useState({});

    const closeAddBlockContainer = () => {
        setAddBlockOpened(false);
        setEditingRow({});
    }
    
    const openAddBlockContainer = (row) => {
        setEditingRow(row);
        setAddBlockOpened(true);
    }

    const selectRow = () => {
        if (!selectedRow.id) {
            toast.success('Please select a row.');
            return false;
        }

        props.onSelect(selectedRow);
        props.onClose();
    };

    const deleteRow = async (rowId) => {
        if (!window.confirm('Are you sure ?')) return;

        await axios.post(`/Personel/IstenAyrilmaNeden/sil?istenAyrilmaNedenId=${rowId}`);

        toast.success('Deleted successfully.');

        dispatch(getReasonLeavingList());
    }

    return(
        <React.Fragment>
            <Modal isFullScreen={isFullScreen} onClose={props.onClose}>
                <div className="flex justify-between items-center px-2 pb-1 border-b-2 border-gray-normal my-2">
                    <h5 className="text-lg font-semibold text-gray-dark">İşten Ayrılma Nedeni</h5>

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
                            hideBtn={true}
                            headerText="">
                            <table className="min-w-full divide-y divide-gray-normal table-fixed">
                                <colgroup>
                                    <col width="60px" />
                                    <col width="100px" />
                                    <col />
                                    <col width="50px" />
                                </colgroup>
                                <thead>
                                    <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                                        <th className="p-2">
                                            <div className="flex items-center"></div>
                                        </th>
                                        {/* <th className="p-2">ID</th> */}
                                        <th className="p-2">Değer</th>
                                        <th className="p-2">Tür</th>
                                        <th className="p-2">İşlem</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm text-gray-dark">
                                    {tableRows.map(row => (
                                        <tr key={row.id} onDoubleClick={() => setSelctedRow(row)}>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <input id="asgari" name="asgari" type="radio" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" checked={selectedRow.id === row.id} onChange={() => setSelctedRow(row)} />
                                                </div>
                                            </td>
                                            {/* <td className="p-2">{row.id}</td> */}
                                            <td className="p-2">{row.adi}</td>
                                            <td className="p-2">{row.tur === true? "SGK":"İş Kur"}</td>
                                            <td className="p-2 cursor-pointer relative z-100">
                                                <DropLeft elem={<span className="font-bold">•••</span>}>
                                                    <div>
                                                        <div to="/personal/list" tabIndex="0" className="drop-item" role="menuitem"
                                                            onClick={() => deleteRow(row.id)}>Sil</div>
                                                        <div tabIndex="0" className="drop-item" role="menuitem"
                                                            onClick={() => openAddBlockContainer(row)}>Düzenle</div>
                                                        {/* <Link to="/personal/list" tabIndex="0" className="drop-item" role="menuitem">İncele</Link>
                                                        <Link to="/personal/list" tabIndex="0" className="drop-item" role="menuitem">Yazdır</Link> */}
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
                        <button className="btn mx-1 px-6 bg-blue-500 text-white" onClick={() => selectRow()}>Seç</button>
                        <button className="btn mx-1 px-6 bg-green-400 text-white" onClick={() => openAddBlockContainer({})}>Ekle</button>

                        {/* <DropUp text="Diğer">
                            <div className="py-1">
                                <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
                                <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item Second</a>
                            </div>
                        </DropUp> */}
                        
                        <button className="btn mx-1 px-6 bg-white border" onClick={props.onClose}>Vazgeç</button>
                    </div>
                </div>
            </Modal>
            {isAddBlockOpened &&
                <ReasonForLeavingAddBlock
                    id={editingRow.id}
                    adi={editingRow.adi}
                    tur={Boolean(editingRow.tur)}
                    onSave={() => dispatch(getReasonLeavingList())}
                    onClose={() => closeAddBlockContainer()} />
            }
        </React.Fragment>
    );
}

ReasonForLeavingModal.defaultProps = {
    onClose: () => {},
    onSelect: () => {}
}

ReasonForLeavingModal.propTypes = {
    onClose: PropTypes.func,
    onSelect: PropTypes.func
}