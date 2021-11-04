import React from 'react';
import PropTypes from 'prop-types';

let date = new Date().toLocaleString();
export default function PageSubscribe(props) {
    return(
        <div className={`mb-3 flex justify-between text-gray-dark px-1 ${props.className}`}>
            <span>{props.text}</span>
            <span>{date}</span>
        </div>
    );
}

PageSubscribe.defaultProps = {
    text: "",
    className: ""
}

PageSubscribe.propTypes = {
    className: PropTypes.string
}