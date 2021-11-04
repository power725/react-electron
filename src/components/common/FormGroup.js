import React from 'react';
import PropTypes from 'prop-types';

export default function FormGroup(props) {
    return(
        <div className={`mb-1 grid sm:grid-cols-1 md:grid-cols-7 ${props.className}`}>
            <label className="p-2 col-span-2 ellipsis">{props.label}</label>
            <div className="col-span-5 flex items-center">
                {props.children}

                {props.icon &&
                    <img
                        alt="input icon"
                        src={props.icon}
                        className={`-ml-6 z-10 ${props.iconClassName}`}
                        onClick={props.iconclick} />
                }
            </div>
        </div>
    );
}

FormGroup.defaultProps = {
    className: "",
    icon: "",
    iconclick: () => {},
    iconClassName: ""
}

FormGroup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconclick: PropTypes.func,
    iconClassName: PropTypes.string
}