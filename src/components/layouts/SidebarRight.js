import React from 'react';
import TooltipLeft from '../common/TooltipLeft';
import { useSelector, useDispatch } from 'react-redux';
import { toggleRightToolsContainer } from '../../store/commonSlice';

export default function SidebarRight() {
    const dispatch = useDispatch();
    const openedRightToolsContainer = useSelector((state) => state.common.openedRightToolsContainer);

    return (
        <div className={"w-13 border-l border-gray-normal flex flex-col items-center flex-none box-border bg-gray-lightest right-0 top-0 z-20 h-screen"}>
            <div className="flex-none w-full h-13 p-2 border-b border-gray-normal">
                <div className="rounded flex justify-center items-center text-center h-full w-full bg-gray-normal text-gray-darkest font-bold">
                    EG
                </div>
            </div>

            <div className="flex-grow flex flex-col justify-between">
                <div className="flex flex-col">
                    <TooltipLeft text="Mail" className={`w-full justify-center border-l-2 ${openedRightToolsContainer === 'message' ? 'border-blue-500' : 'border-transparent'}`}>
                        <img alt="Mail" src={require('../../images/icons/c-mail.png')}
                            className="p-2 cursor-pointer"
                            onClick={() => dispatch(toggleRightToolsContainer(openedRightToolsContainer === 'message' ? false : 'message'))} />
                    </TooltipLeft>

                    <TooltipLeft text="Notifications" className={`w-full justify-center border-l-2 ${openedRightToolsContainer === 'notification' ? 'border-blue-500' : 'border-transparent'}`}>
                        <img
                            alt="Notifications"
                            src={require('../../images/icons/c-notification.png')}
                            className="p-2 cursor-pointer"
                            onClick={() => dispatch(toggleRightToolsContainer(!openedRightToolsContainer === 'notification' ? false : 'notification'))} />
                    </TooltipLeft>

                    <hr className="w-full m-0 border-b border-t-0 border-gray-normal" />

                    <TooltipLeft text="Phone" className={`w-full justify-center border-l-2 border-transparent`}>
                        <img alt="Phone" src={require('../../images/icons/c-phone.png')} className="p-2 cursor-pointer" />
                    </TooltipLeft>

                    <TooltipLeft text="Calendar" className={`w-full justify-center border-l-2 border-transparent`}>
                        <img alt="Calendar" src={require('../../images/icons/c-calendar.png')} className="p-2 cursor-pointer" />
                    </TooltipLeft>

                    <TooltipLeft text="Calculator" className={`w-full justify-center border-l-2 border-transparent`}>
                        <img alt="Calculator" src={require('../../images/icons/c-calculator.png')} className="p-2 cursor-pointer" />
                    </TooltipLeft>


                    <hr className="w-full m-0 border-b border-t-0 border-gray-normal" />
                </div>

                <div className="flex flex-col">
                    <hr className="w-full m-0 border-b border-t-0 border-gray-normal" />

                    <TooltipLeft text="Help" className={`w-full justify-center border-l-2  ${openedRightToolsContainer === 'help' ? 'border-blue-500' : 'border-transparent'}`}>
                        <img
                            alt="Help"
                            src={require('../../images/icons/c-help.png')} className="p-2 cursor-pointer"
                            onClick={() => dispatch(toggleRightToolsContainer(openedRightToolsContainer === 'help' ? false : 'help'))}
                        />
                    </TooltipLeft>

                    <TooltipLeft text="Logout" className={`w-full justify-center border-l-2 border-transparent`}>
                        <img alt="Logout" src={require('../../images/icons/c-logout.png')} className="p-2 cursor-pointer" />
                    </TooltipLeft>
                </div>
            </div>
        </div>
    );
}