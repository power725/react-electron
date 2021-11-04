import React from 'react';
import PropTypes from 'prop-types';

export default function ExpandableBox(props) {
    return (
        <div>
            <div className="flex justify-between items-center px-2 pb-2 border-b-2 border-gray-normal mb-2 mt-5">
                <h5 className="text-lg font-semibold text-gray-dark">{props.headerText}</h5>

                <img alt="expand" className="cursor-pointer" src={require('../../images/icons/expand.png')} />
            </div>

            <div className="rounded-lg bg-gray-lightest border border-gray-normal">
                {props.children}
            </div>
        </div>
    );
}

ExpandableBox.propTypes = {
    headerText: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
}