import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import Pagination from '../../common/Pagination';
import PageSubscribe from '../../common/PageSubscribe';
import TableWrapper from '../../common/TableWrapper';
import DropLeft from '../../common/DropLeft';
import TableCategoryList from '../../common/TableCategoryList';
import {
    deleteMaterial,
    getMaterialStockLists
} from '../../../store/materialStockSlice';

export default function ListMaterialStock(props) {

    const [filterOpened, setFilterOpened] = useState(true);
    const [isFullScreen, setFullScreen] = useState(false);

    const [aramaMetni, setAramaMetni] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const pageSizes = [5, 10, 20, 30, 50, 100];

    const dispatch = useDispatch();

    const loadMaterialStockList = () => {
        dispatch(getMaterialStockLists({
            "getAllData": false,
            "pageSize": pageSize,
            "pageNumber": currentPage - 1,
            "AramaMetni": aramaMetni
        }));
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
    }


    const handleSearchChange = (event) => {
        let searchText = event.target.value;
        if (searchText.length > 3)
            setAramaMetni(searchText);
        else if (searchText.length === 0)
            setAramaMetni(searchText);
    }
    useEffect(() => {
        loadMaterialStockList();
    }, [currentPage, aramaMetni, pageSize]);

    const tableRows = useSelector((state) => state.material.materialStockList);

    const deleteRow = (rowId) => {
        if (!window.confirm('Bu malzeme kaydını silmek istediğinize emin misiniz?')) return;

        dispatch(deleteMaterial(rowId));

        setTimeout(function() {
            loadMaterialStockList();
        }.bind(this), 1000)
    }

    return (
        <div className="p-3">
            <PageSubscribe text="Anasayfa > Malzeme Stok Modülü > Malzeme Stok Listesi "
                className="mb-5" />

            <div className={isFullScreen ? "full-screen" : ""}>
                <div className="flex justify-between items-center px-2 pb-1 border-b-2 border-gray-normal mb-2">
                    <h5 className="text-lg font-semibold text-gray-dark">Malzeme Stok Listesi</h5>

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
                            <input className="text-gray-600 pl-3 pr-3 py-1.5 outline-none border-0 bg-transparent w-full" onChange={handleSearchChange} placeholder="Kelime İle Filtrele" />
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
                    <TableCategoryList list={[
                        { text: 'Malzeme Fişi' },
                        { text: 'Fatura' },
                        { text: 'İrsaliye' },
                        { text: 'Sipariş' },
                        { text: 'Üretim' },
                    ]} />

                    <div className="flex-grow">
                        <div className="rounded-lg border border-gray-normal bg-gray-lightest p-1 mb-2">
                            <TableWrapper
                                showAdd={true}
                                pageSize={
                                    <select onChange={handlePageSizeChange} className="cs-input appearance-none pr-8 w-24 py-1" defaultValue={pageSize}>
                                        {pageSizes.map((size) => (
                                            <option key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                }
                                headerText={
                                    <Link to="/material-stock/add" className="px-3 py-1 border border-blue-400 bg-gray-normal rounded text-sm w-50 text-left">
                                        <i className="fa fa-plus mr-2"></i>
                                        Malzeme Kartı Ekle
                                    </Link>
                                }>
                                <table className="min-w-full divide-y divide-gray-normal table-fixed">
                                    <thead>
                                        <tr className="text-left text-xs font-medium text-gray-darkest tracking-wider">
                                            <th className="p-2">
                                                <div className="flex items-center">
                                                    <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                                </div>
                                            </th>
                                            <th className="p-2">Stok Kodu</th>
                                            <th className="p-2">Adı</th>
                                            <th className="p-2">Marka</th>
                                            <th className="p-2">Açıklama</th>
                                            <th className="p-2">Grup Kodu</th>
                                            <th className="p-2">Stok Tür</th>
                                            <th className="p-2">Oluşturma Tarihi</th>
                                            <th className="p-2">B2B</th>
                                            <th className="p-2">Stok</th>
                                            <th className="p-2">Durum</th>
                                            <th className="p-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-sm text-gray-dark">
                                        {tableRows.resultSet !== undefined && tableRows.resultSet.map(row => (
                                            <tr key={row.id}>
                                                <td className="p-2">
                                                    <div className="flex items-center">
                                                        <input id="asgari" name="asgari" type="checkbox" className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded" />
                                                    </div>
                                                </td>
                                                <td className="p-2">{row.kod}</td>
                                                <td className="p-2">{row.adi}</td>
                                                <td className="p-2">{row.marka}</td>
                                                <td className="p-2">{row.aciklama}</td>
                                                <td className="p-2">{row.grupKoduAdi}</td>
                                                <td className="p-2">{row.stokTurAdi}</td>
                                                <td className="p-2">{(row.kayitTarih) && dateFormat(row.kayitTarih, "dd mmmm yyyy HH:MM")}</td>
                                                <td className="p-2">{row.b2b ? "Evet" : "Hayır"}</td>
                                                <td className="p-2">{row.stok}</td>
                                                <td className="p-2">{row.iptalmi ? "Pasif" : "Aktif"}</td>
                                                <td className="p-2 cursor-pointer">
                                                    <DropLeft elem={<span className="font-bold">•••</span>} innerStyle={{ right: '100px' }}>
                                                        <div>
                                                            <div tabIndex="0" className="drop-item" role="menuitem" onClick={() => deleteRow(row.id)}>Sil</div>
                                                            <Link to="/material-stock/add" tabIndex="0" className="drop-item" role="menuitem">Düzenle</Link>
                                                        </div>
                                                    </DropLeft>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </TableWrapper>
                        </div>


                        <div>

                            {tableRows.resultSet !== undefined && (
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={tableRows.currentPage === 0 ? 1 : tableRows.currentPage + 1}
                                    totalCount={tableRows.totalCount}
                                    pageSize={pageSize}
                                    onPageChange={page => setCurrentPage(page)}
                                />
                            )}
                        </div>

                        <div>
                            {tableRows.totalCount} kayıttan {(tableRows.currentPage * tableRows.pageSize) === 0 ? 1 : (tableRows.currentPage * tableRows.pageSize)} - {(tableRows.currentPage + 1) * tableRows.pageSize} arasındaki kayıtlar gösteriliyor
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}