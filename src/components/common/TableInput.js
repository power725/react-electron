import React from 'react';
import PropTypes from 'prop-types';

export default function TableInpu(props) {
    return(
      <div className={`relative flex items-center ${props.className}`}>
          {props.children}

          {props.icon &&
              <img
                  alt="input icon"
                  src={props.icon}
                  className={`-ml-6 z-0 ${props.iconClassName}`}
                  onClick={props.iconclick} />
          }
      </div>
    );
}

TableInpu.defaultProps = {
    className: "",
    icon: "",
    iconclick: () => {},
    iconClassName: ""
}

TableInpu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    icon: PropTypes.string,
    iconclick: PropTypes.func,
    iconClassName: PropTypes.string
}