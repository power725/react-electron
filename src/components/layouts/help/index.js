import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HelpList from './HelpList';
import HelpDetail from './HelpDetail';

import ArrowLeftBlack from '../../../images/icons/arrow-left-black.png';
import {
  setActiveHelpTopic
} from '../../../store/commonSlice';

export default function HelpBox() {
  const dispatch = useDispatch();
  const activeHelpTopic = useSelector((state) => state.common.activeHelpTopic);

  return (
    <div className="flex-none shadow-md h-screen flex flex-col" style={{ width: '420px' }}>
      {/* Start Help box title */}
      <div className="px-2 flex-none">
        <div className="h-13 w-full px-3 flex justify-between border-b-2 border-gray-normal pb-1 items-end">
          <div className="text-lg text-gray-dark">Yardım</div>

          <div
            className={`cursor-pointer flex items-center ${activeHelpTopic ? '' : 'invisible'}`}
            onClick={() => dispatch(setActiveHelpTopic(null))}>
            <img src={ArrowLeftBlack} alt="Arrow left" className="mr-2" />
            <div className="mb-1">Geri</div>
          </div>
        </div>
      </div>
      {/* End Help box title */}

      {!activeHelpTopic && <HelpList />}
      {activeHelpTopic && <HelpDetail />}
    </div>
  );
}