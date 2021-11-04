import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

function NavTabbar(props) {
    let navbarEl = null;
    let maxNavbarMargin = 0;

    const [isOverflowed, setOverflowed] = useState(false);
    const [navbarMargin, setNavbarMargin] = useState(0);

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
    });

    const moveNavbar = (direct) => {
        setNavbarMargin(Math.max(
            Math.min(navbarMargin + direct * -150, 0),
            maxNavbarMargin
        ))
    }

    const activeTabClass = 'cursor-pointer text-base flex items-center justify-between w-42  bg-white border-l border-t border-r border-gray-normal rounded-t px-2 pt-1 pb-3 font-semibold ' + props.activeTabClassName;

    const inActiveTabClass = 'cursor-pointer text-base flex items-center justify-between w-42 bg-gray-300 rounded px-2 py-1';

    const pathName = props.history.location.pathname;
    return(
        <div className="pr-14 relative">
            <ul
                className={`flex w-min ${props.className}`} ref={el => navbarEl = el}
                style={{marginLeft: navbarMargin + 'px'}}>
                {props.tabs.map(tab => {
                    const isActive = pathName === tab.route;
                    return(
                        <li key={tab.id} className={`flex mr-2 ${isActive ? 'flex-col-reverse -mb-px' : 'py-2'}`}>
                            <Link to={tab.route} className={isActive ? activeTabClass : inActiveTabClass}>
                                <span className="text-gray-dark">{tab.text}</span>
                                
                                {props.showElipsis &&
                                    <span className="text-gray-dark">•••</span>
                                }
                            </Link>
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

NavTabbar.defaultProps = {
    showElipsis: false,
    activeTabClassName: '',
    className: ''
}


NavTabbar.propTypes = {
    tabs: PropTypes.array,
    showElipsis: PropTypes.bool,
    activeTabClassName: PropTypes.string,
    className: PropTypes.string
}

export default withRouter(NavTabbar);