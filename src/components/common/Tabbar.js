import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

export default function Tabbar(props) {
    let navbarEl = null;
    let maxNavbarMargin = 0;

    const [isOverflowed, setOverflowed] = useState(false);
    const [navbarMargin, setNavbarMargin] = useState(0);
    const [tabs, setTabs] = useState([]);

    function updateSize() {
        if (!navbarEl) return;
        setOverflowed(navbarEl.offsetWidth >= navbarEl.parentElement.offsetWidth);
        maxNavbarMargin = isOverflowed ? (navbarEl.offsetWidth - navbarEl.parentElement.offsetWidth + 56) * -1 : 0;
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        updateSize();
        setTabs(props.tabs);
    });

    const moveNavbar = (direct) => {
        setNavbarMargin(Math.max(
            Math.min(navbarMargin + direct * -150, 0),
            maxNavbarMargin
        ))
    }

    const activeTabClass = 'cursor-pointer text-lg flex items-center justify-between w-48  bg-white border-l border-t border-r border-gray-normal rounded-t px-2 pt-1 pb-3 font-semibold ' + props.activeTabClassName;

    const inActiveTabClass = 'cursor-pointer text-lg flex items-center justify-between w-48 bg-gray-300 rounded px-2 py-1';

    return (
        <div className="pr-14 relative">
            <ul
                className={`flex w-min ${props.className}`} ref={el => navbarEl = el}
                style={{ marginLeft: navbarMargin + 'px' }}>
                {tabs.map(tab => {
                    const curTab = typeof (tab) === 'string' ? { id: tab, text: tab } : tab;

                    const isActive = props.activeTab === curTab.id;
                    return (
                        <li key={curTab.id} className={`flex mx-1 ${isActive ? 'flex-col-reverse -mb-px' : 'py-2'}`}>
                            <div className={isActive ? activeTabClass : inActiveTabClass} onClick={() => props.setActiveTab(tab)}>
                                <span className="text-gray-dark">{curTab.text}</span>

                                {props.showElipsis &&
                                    <span className="text-gray-dark">•••</span>
                                }
                            </div>
                        </li>
                    );
                })}
            </ul>
            {isOverflowed &&
                <div className="flex items-center absolute right-0 top-0 h-full bg-white py-2 pl-1">
                    <div className="h-full border border-gray-normal rounded-sm w-6 flex justify-center items-center mr-1" onClick={() => moveNavbar(-1)}>
                        <i className="fa fa-arrow-left"></i>
                    </div>
                    <div className="h-full border border-gray-normal rounded-sm w-6 flex justify-center items-center" onClick={() => moveNavbar(1)}>
                        <i className="fa fa-arrow-right"></i>
                    </div>
                </div>
            }
        </div>
    );
}

Tabbar.defaultProps = {
    className: '',
    showElipsis: false,
    setActiveTab: () => { },
    activeTabClassName: ''
}


Tabbar.propTypes = {
    tabs: PropTypes.array,
    activeTab: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    showElipsis: PropTypes.bool,
    setActiveTab: PropTypes.func,
    activeTabClassName: PropTypes.string
}