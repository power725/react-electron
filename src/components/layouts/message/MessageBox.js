import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MessageList from './MessageList';
import MessageRoom from './MessageRoom';

import ArrowLeftBlack from '../../../images/icons/arrow-left-black.png';
import {
  setActiveMessageRoom
} from '../../../store/commonSlice';

export default function MessageBox() {
    const dispatch = useDispatch();
    const activeMessageRoom = useSelector((state) => state.common.activeMessageRoom);

    return (
        <div className="flex-none shadow-md h-screen flex flex-col" style={{ width: '420px' }}>
            {/* Start Message box title */}
            <div className="px-2 flex-none">
                <div className="h-13 w-full px-3 flex justify-between border-b-2 border-gray-normal pb-1 items-end">
                    <div className="text-lg text-gray-dark">Mesajlar</div>

                    <div
                        className={`cursor-pointer flex items-center ${activeMessageRoom ? '' : 'invisible'}`}
                        onClick={() => dispatch(setActiveMessageRoom(null))}>
                        <img src={ArrowLeftBlack} alt="Arrow left" className="mr-2" />
                        <div className="mb-1">Geri</div>
                    </div>
                </div>
            </div>
            {/* End Message box title */}

            {!activeMessageRoom && <MessageList />}
            {activeMessageRoom && <MessageRoom />}
        </div>
    );
}