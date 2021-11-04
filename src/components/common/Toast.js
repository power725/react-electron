import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationCircle,
  faCheck,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
    closeToast
} from '../../store/toastSlice';

const styles = {
    fadeIn: {
        animation: 'x .3s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

const VARIANTS = {
    info: {
        base: "bg-white border-blue-500",
        iconstyle: "text-blue-500 ",
        icon: faInfoCircle
    },

    error: {
        base: "bg-white border-red-500 ",
        iconstyle: "text-red-500 ",
        icon: faExclamationCircle
    },

    warning: {
        base: "bg-white border-yellow-500",
        iconstyle: "text-yellow-500 ",
        icon: faExclamationCircle
    },

    success: {
        base: "bg-white border-green-500",
        iconstyle: "text-green-500 ",
        icon: faCheck
    },
};

function ToastItem(props) {
    const dispatch = useDispatch();
    const item = props.item;
    const itemVar = VARIANTS[item.type];

    const removeToast = () => {
        dispatch(closeToast(item.id));
    }

    useEffect(() => {
        setTimeout(() => {
            removeToast();
        }, 8000);
    }, []);
    return (
        <div className={"flex py-1 w-full transform transition-all duration-300 pointer-events-auto"}
            style={styles.fadeIn}
        >
            <div
                className={`flex w-full visible flex-row shadow-lg border-l-4 rounded-md duration-100 cursor-pointer transform transition-all hover:scale-102 ${itemVar.base}`}>
                {itemVar.icon && (
                    <div className="flex items-center h-12 w-12 mx-auto text-xl select-none">
                        <FontAwesomeIcon
                            className={`mx-auto ${itemVar.iconstyle}`}
                            icon={itemVar.icon}
                        />
                    </div>
                )}

                <div className="flex flex-col flex-no-wrap px-1 w-full">
                    <div className="flex my-auto select-none text-base">{item.text}</div>
                </div>

                <div
                    onClick={() => removeToast()}
                    className={`w-10 h-12 mr-2 items-center mx-auto text-center leading-none text-lg`}>
                    <FontAwesomeIcon
                        className={`mx-auto my-auto h-full text-center text-gray-600 cursor-pointer hover:scale-105 transform`}
                        icon={faTimes}
                    />
                </div>
            </div>
        </div>
    );
}

function Toast(props) {
    const toastList = useSelector((state) => state.toast.toasts);
    
    return (
        <StyleRoot>
            <div className={"fixed z-70 w-full md:max-w-sm p-4 md:p-4 max-h-screen overflow-hidden pointer-events-none top-0 right-0"}>
                <div className={"flex-1 flex-col fade w-full mr-8 justify-end pointer-events-none"}>
                    {toastList.map(item => 
                        <ToastItem item={item} key={item.id} />
                    )}
                </div>
            </div>
        </StyleRoot>
    );
}

export default (props) => ReactDOM.createPortal(<Toast />, document.getElementById('toast-root'));