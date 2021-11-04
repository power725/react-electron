import React from 'react';
import PropTypes from 'prop-types';

export default function DropLeft(props) {
    return(
        <div className={`inline-block text-left dropleft mx-1 ${props.className}`}>
            <button aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                {props.elem}
            </button>

            <div className="dropleft-menu origin-top-right">
                <div className="absolute w-56 origin-bottom-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none p-1.5" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu" style={props.innerStyle}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

DropLeft.defaultProps = {
    className: "",
    innerStyle: {}
}

DropLeft.propTypes = {
    elem: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.array
    ]),
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string,
    innerStyle: PropTypes.object
}