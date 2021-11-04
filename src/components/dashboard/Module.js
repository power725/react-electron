import React from 'react';
import PropTypes from 'prop-types';

export default function Module(props) {
    const activeBoxShadow = {
        boxShadow: 'rgb(120 162 255) 0px 4px 10px -1px, rgb(255 255 255) 0px 2px 4px -1px'
    };
    return(
        <div className={`rounded-lg flex flex-col items-center p-4 box-border border ${props.isActive ? 'border-blue-600 bg-gray-light' : 'bg-white shadow-md'}`}
            onMouseOver={props.onClick}
            style={props.isActive ? activeBoxShadow : {}}>
            <img alt="Card" src={require(`../../images/${props.img}`)} className="w-13 my-1" />

            <div className={`${props.isActive ? 'text-blue-600' : 'text-gray-dark'} text-lg mt-6 font-semibold`}>
                {props.name}
            </div>

            <div className={`flex justify-center divide-x mt-6`}>
                {props.icons}
            </div>
        </div>
    );
}

Module.defaultProps = {
    onMouseOver: () => {}
}

Module.propTypes = {
    isActive: PropTypes.bool,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    icons: PropTypes.array
};