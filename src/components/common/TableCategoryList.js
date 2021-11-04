import React from 'react';
import PropTypes from 'prop-types';

import DropRightMenu from '../common/DropRightMenu';
import { Link } from 'react-router-dom';

export default function TableCategoryList(props) {
    return(
        
        <div className="flex flex-col mr-1 w-28">
            {props.list.map((item, index) =>
                <DropRightMenu
                    key={index}
                    elem={
                        <div className="py-2 text-center flex flex-col bg-gray-300 rounded mb-1 relative">
                            <div className="absolute w-full h-full text-right pr-2 opacity-0 hover:opacity-100">
                                <img alt="input icon" src={require('../../images/svg/elepsis.svg')} className="ml-2 inline object-fill h-4 -mt-1" />
                            </div>
                            <i className="fa fa-copy text-lg text-white"></i>
                            <div className="text-base text-nowrap">{item.text}</div>
                        </div>
                    }>
                    <Link to="#" tabIndex="0" className="drop-item" role="menuitem">Depo Fişi</Link>
                </DropRightMenu>
            )}
        </div>
    );
}

TableCategoryList.propTypes = {
    list: PropTypes.array
}