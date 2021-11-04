import React from 'react';
import PropTypes from 'prop-types';

export default function DropRight(props) {
    return(
        <div className={`inline-block text-left dropright mx-1 ${props.className}`}>
            <button aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                {props.elem}
            </button>

            <div className="dropright-menu origin-top-right">
                <div
                    className="absolute w-56 origin-bottom-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none p-1.5" aria-labelledby="headlessui-menu-button-1"
                    id="headlessui-menu-items-117"
                    style={props.positionStyle}
                    role="menu">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

DropRight.defaultProps = {
    className: "",
    positionStyle: {
        left: '60px',
        transform: 'translate(0px, -51px)'
    }
}

DropRight.propTypes = {
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
    positionStyle: PropTypes.object
}