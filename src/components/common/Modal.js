import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeIn: {
        animation: 'x .3s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

function Modal(props) {
    return (
        <StyleRoot>
            <div className="fixed z-60 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" style={styles.fadeIn}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={props.onClose}></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    
                    <div className={`inline-block align-bottom bg-white text-left shadow-xl transform transition-all sm:align-middle p-3 ${props.isFullScreen ? 'fixed w-full h-full overflow-auto left-0 top-0' : 'rounded-lg overflow-hidden sm:my-8 sm:max-w-2xl sm:w-full'} ${props.containerClassName}`}>
                        {props.children}
                    </div>
                </div>
            </div>
        </StyleRoot>
    );
}

Modal.defaultProps = {
    containerClassName: "",
    isFullScreen: false,
    onClose: () => {}
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    containerClassName: PropTypes.string,
    isFullScreen: PropTypes.bool,
    onClose: PropTypes.func
}

export default (props) => ReactDOM.createPortal(<Modal {...props} />, document.getElementById('modal-root'));