import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleRightToolsContainer
} from '../../../store/commonSlice';

import DropUp from '../../common/DropUp';
import ChatUserIcon from '../../../images/icons/chat-user.png';
import MoreActionsIcon from '../../../images/icons/more-actions.png';

const notifications = [
  { id: 1, title: "Title here.", content: "Notification content here.", noticeTime: "30.08.2021 Pazartesi 12:33", readAt: "30.08.2021 Pazartesi 12:33" },
  { id: 2, title: "Title here.", content: "Notification content here.", noticeTime: "30.08.2021 Pazartesi 12:33", readAt: null },
  { id: 3, title: "Title here.", content: "Notification content here.", noticeTime: "30.08.2021 Pazartesi 12:33", readAt: null },
  { id: 4, title: "Title here.", content: "Notification content here.", noticeTime: "30.08.2021 Pazartesi 12:33", readAt: null },
  { id: 5, title: "Title here.", content: "Notification content here.", noticeTime: "30.08.2021 Pazartesi 12:33", readAt: "30.08.2021 Pazartesi 12:33" },
  { id: 6, title: "Title here.", content: "Notification content here.", noticeTime: "30.08.2021 Pazartesi 12:33", readAt: null },
  { id: 7, title: "Title here.", content: "Notification content here.", noticeTime: "30.08.2021 Pazartesi 12:33", readAt: "30.08.2021 Pazartesi 12:33" },
  { id: 8, title: "Title here.", content: "Notification content here.", noticeTime: "30.08.2021 Pazartesi 12:33", readAt: null }
];

export default function NotificationBox() {
  const dispatch = useDispatch();
  const [unreadOnly, setUnreadOnly] = useState(false);

  return (
    <div className="flex-none shadow-md h-screen flex flex-col" style={{ width: '420px' }}>
      {/* Start Notification box title */}
      <div className="h-13 w-full px-3 flex-none flex items-end">
        <div className="text-lg text-gray-dark border-b-2 border-gray-normal pb-1 flex-grow">Bildirimler</div>
      </div>
      {/* End Notification box title */}
      {/* Start notification Tab */}
      <div className="px-3 mt-4 flex-grow flex-shrink overflow-auto c-scrollbar-small">
        <div className="border-b-2 border-gray-normal px-1 flex justify-between text-base mb-2">
          <div className="flex">
            <div className="cursor-pointer flex-none border-b-2 px-2 border-gray-normal">Doğrudan</div>
            <div className="cursor-pointer flex-none border-b-2 px-2 border-transparent">Takip Edilen</div>
          </div>

          <div className="flex items-center">
            <div className={`relative w-8 mr-2 h-4 transition duration-200 ease-linear rounded-full ${unreadOnly ? 'bg-green-400' : 'bg-gray-400'}`}>
              <label
                for="toggle"
                className={`absolute left-0 w-4 h-4 mb-2 transition duration-100 ease-linear transform bg-white border-2 rounded-full cursor-pointer ${unreadOnly ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400'}`}
              ></label>
              <input
                type="checkbox"
                id="toggle"
                name="toggle"
                className="w-full h-full appearance-none focus:outline-none"
                onClick={() => setUnreadOnly(!unreadOnly)}
              />
            </div>
            <div className="text-sm">Sadece Okunmayanlar</div>
          </div>
        </div>

        {
          notifications.map(notification => {
            return (
              <div
                key={notification.id}
                className={`flex items-center rounded bg-gray-100 hover:bg-gray-200 px-2 py-1 mb-1 cursor-pointer border ${!notification.readAt ? 'border-blue-600' : 'border-gray-400'}`}>
                <div className="rounded-full h-9 w-9 bg-white relative flex items-center justify-center p-1">
                  <img src={ChatUserIcon} className="h-full" alt="Chat user" />
                </div>
                <div className={`flex-grow flex flex-col pl-3`}>
                  <div className="flex justify-between">
                    <div className={`text-base flex-grow ${!notification.readAt ? 'text-blue-500' : 'text-gray-500'}`}>{notification.title}</div>
                    <div>
                      <img alt="More actions" src={MoreActionsIcon} className="h-3" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex-grow flex">
                      <div className="overflow-ellipsis overflow-hidden">{notification.content}</div>
                    </div>
                    <div>{notification.noticeTime}</div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
      {/* End notification Tab */}

      {/* Start notification box actions */}
      <div className="flex justify-center py-2">
        <button className="btn mx-1 px-6 bg-blue-500 text-white" onClick={() => dispatch(toggleRightToolsContainer(false))}>Kapat</button>

        <DropUp text="Seç">
          <div className="py-1">
            <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
          </div>
        </DropUp>

        <button className="btn mx-1 px-6 bg-white border">Sil</button>
      </div>
      {/* End notification box actions */}
    </div>
  );
}