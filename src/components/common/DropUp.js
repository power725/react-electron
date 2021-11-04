import React from 'react';
import PropTypes from 'prop-types';

export default function DropUp(props) {
    return(
        <div className="relative inline-block text-left dropup mx-1">
            <span className="rounded-md shadow-sm">
                <button className="inline-flex btn px-6" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span>{props.text}</span>
                    <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </span>

            <div className="opacity-0 invisible dropup-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div className="absolute right-0 bottom-10 w-56 mt-2 origin-bottom-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

DropUp.propTypes = {
    text: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
}