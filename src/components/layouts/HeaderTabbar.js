import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab, addTab, closeTab } from '../../store/commonSlice';

import HeaderFiltersBlock from './HeaderFiltersBlock';

function HeaderTabbar(props) {
    const tabs = useSelector((state) => state.common.tabs);
    const activeTabId = useSelector((state) => state.common.activeTabId);
    const dispatch = useDispatch();

    const closeTabItem = (e, tabId) => {
        e.stopPropagation();
        dispatch(closeTab(tabId));
    }

    const activeTabClass = 'cursor-pointer text-base whitespace-nowrap flex items-center justify-between w-44 bg-white border-l border-t border-r border-gray-normal rounded-t px-2 pt-2 pb-3 font-semibold';
    const inActiveTabClass = 'cursor-pointer text-sm whitespace-nowrap flex items-center justify-between w-44 bg-gray-300 rounded px-2 py-1';

    return(
        <div className={"h-13 flex bg-gray-lightest border-b border-gray-normal flex-none"}>
            <div className="px-2 flex flex-grow justify-between">
                <ul className="flex">
                    {tabs.map(tab => {
                        const isActive = tab.id === activeTabId;
                        return (
                            <li className={`flex mr-1 ${isActive ? 'flex-col-reverse -mb-px' : 'py-2'}`}
                                component="li" key={tab.id}>
                                <div onClick={() => dispatch(setActiveTab(tab.id))}
                                    className={isActive ? activeTabClass : inActiveTabClass} >
                                    <span className="text-gray-dark ellipsis">{tab.title}</span>

                                    {tabs.length !== 1 &&
                                        <i className="fa fa-close" onClick={(e) => closeTabItem(e, tab.id)}></i>
                                    }
                                </div>
                            </li>
                        );
                    })}

                    {props.showAddIcon &&
                        <li className="flex mx-1 py-2" key="add-tab" onClick={() => dispatch(addTab())}>
                            <div className="cursor-pointer text-lg bg-gray-300 rounded px-2 py-1 w-9 text-center text-blue-700">
                                <i className="fa fa-plus"></i>
                            </div>
                        </li>
                    }
                </ul>

                
                <div className="flex items-center py-2">
                    <HeaderFiltersBlock />
                </div>
            </div>
        </div>
    )
}

HeaderTabbar.defaultProps = {
    showAddIcon: true
}

HeaderTabbar.propTypes = {
    showAddIcon: PropTypes.bool
}

export default withRouter(HeaderTabbar);