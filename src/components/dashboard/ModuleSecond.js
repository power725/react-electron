import React from 'react';
import PropTypes from 'prop-types';

export default function Module(props) {
    return(
        <div className={`rounded-lg flex flex-col items-center p-4 pb-2 box-border border ${props.isActive ? 'border-blue-600 bg-gray-300' : 'bg-gray-lightest'}`}
            onClick={props.onClick}>
            <img alt="Personal Module" src={`${process.env.PUBLIC_URL}/images/${props.img}`} className="w-13 my-1" />

            <div className={`${props.isActive ? 'text-blue-600' : 'text-gray-dark'} text-lg mt-6 font-semibold`}>
                {props.name}
            </div>

            <div className={`w-full mt-4 py-2 rounded ${props.isActive ? 'bg-gray-lightest' : 'bg-white'}`}>
                <div className={`flex justify-center divide-x`}>
                    {props.icons.map((icon, index) => (
                        <div className="px-2" key={index}>
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Module.defaultProps = {
    onClick: () => {}
}

Module.propTypes = {
    isActive: PropTypes.bool,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icons: PropTypes.array
};