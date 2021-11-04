import React from 'react';
import PropTypes from 'prop-types';

export default function TooltipLeft({ children, text, className }) {
    const tipRef = React.createRef(null);
    function handleMouseEnter() {
        tipRef.current.style.visibility = 'visible';
        tipRef.current.style.opacity = 1;
        tipRef.current.style.marginRight = "10px";
    }
    function handleMouseLeave() {
        tipRef.current.style.visibility = 'hidden';
        tipRef.current.style.opacity = 0;
        tipRef.current.style.marginRight = "0px";
    }
    return (
        <div
            className={`relative flex items-center ${className}`}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute whitespace-nowrap bg-gradient-to-r from-black to-gray-700 text-white pl-3 pr-4 py-2 rounded flex items-center transition-all duration-150"
                style={{ right: "100%", opacity: 0, visibility: "hidden" }}
                ref={tipRef}
            >
                <div
                    className="bg-black h-3 w-3 absolute"
                    style={{ right: "-6px", transform: "rotate(45deg)" }}
                />
                {text}
            </div>
            <div onMouseEnter={handleMouseEnter}>
                {children}
            </div>
        </div>
    );
}

TooltipLeft.defaultProps = {
    text: '',
    className: ''
}

TooltipLeft.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
}