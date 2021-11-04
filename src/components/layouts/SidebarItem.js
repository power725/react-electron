import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import DropRight from '../common/DropRight';

function SidebarItem(props) {
    //Appends '/' to the start of a string if not present
    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    const isActive = getPath(props.history.location.pathname).indexOf(getPath(props.route)) === 0;

    const MainItem = (
        <div
            className={`cursor-pointer p-2 pr-1 h-11 flex items-center justify-between text-sm border-l-4 ${isActive ? "border-blue-700" : "border-transparent"}`}
            onClick={() => props.expandItem(props.isExpanded ? '' : props.id)}>
            <div className={`h-full flex items-center ${props.isExpanded ? 'text-blue-700 font-bold' : ''}`}>
                <img alt={props.image} className="h-full mr-4" src={props.image} />
                {!props.isSidebarCollapsed && <span className="ellipsis">{props.text}</span>}
            </div>
            {!props.isSidebarCollapsed && props.isExpanded &&
                <div className="w-5 h-5 flex justify-center items-center rounded-full bg-gray-lightest pb-1">
                    <img alt="Arrow Down" src={require('../../images/icons/angle-down.png')} />
                </div>
            }
        </div>
    );

    return (
        <div className={`${!props.isExpanded ? '' : 'bg-white'}`}>
            {props.isSidebarCollapsed &&
                <DropRight elem={MainItem} className="ml-0 mr-0">
                    <div>
                        <div className="text-gray-500 flex w-full p-2 text-sm leading-5 font-bold">{props.text}</div>
                        {props.children.map(child => {
                            return(
                                <Link to={child.route} tabIndex="0" className="drop-item" role="menuitem" key={child.id}>
                                    <span>
                                        <i className={`fa text-lg ${child.icon} mr-5`}></i>
                                        {child.text}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </DropRight>
            }

            {!props.isSidebarCollapsed &&
                <React.Fragment>
                    { MainItem }
                    <div className={`pl-2.5 overflow-hidden transition-all ${!props.isExpanded ? 'h-0' : 'h-auto'}`}>
                        {props.children.map(child => {
                            const isCurrentItem = getPath(props.history.location.pathname).indexOf(getPath(child.route)) === 0;
                            return(
                                <Link to={child.route} className={`cursor-pointer p-2 h-11 flex items-center text-xs ${isCurrentItem ? ' bg-gray-light rounded-lg shadow-lg text-blue-700 font-bold' : ''}`} key={child.id}>
                                    <i className={`fa text-lg text-gray-dark ${child.icon} mr-5`}></i>
                                    <span className="ellipsis">{child.text}</span>
                                </Link>
                            );
                        })}
                    </div>
                </React.Fragment>
            }
        </div>
    );
}

SidebarItem.propTypes = {
    route: PropTypes.string,
    image: PropTypes.string,
    isSidebarCollapsed: PropTypes.bool,
    text: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    isExpanded: PropTypes.bool,
    expandItem: PropTypes.func
}

export default withRouter(SidebarItem);