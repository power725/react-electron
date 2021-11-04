import React from 'react';

import DropUp from '../../common/DropUp';
import ChatUserIcon from '../../../images/icons/chat-user.png';
import MoreActionsIcon from '../../../images/icons/more-actions.png';
import DoubleCheckIcon from '../../../images/icons/double-check.png';

import { useDispatch } from 'react-redux';
import {
  toggleRightToolsContainer,
  setActiveMessageRoom
} from '../../../store/commonSlice';

const messages = [
    { id: 1, fullname: 'İsim Soyisim', unreadCount: 99, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 2, fullname: 'İsim Soyisim', unreadCount: 99, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 3, fullname: 'İsim Soyisim', unreadCount: 99, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 4, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 5, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 6, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 7, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 8, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 9, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 10, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 11, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 12, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 13, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 14, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 15, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 16, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 17, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 18, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 19, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } },
    { id: 20, fullname: 'İsim Soyisim', unreadCount: 0, lastMessage: { content: 'İçerik', sentTime: 'Pazartesi' } }
];

export default function MessageList() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {/* Start message Tab */}
      <div className="px-3 mt-4 flex-grow flex-shrink overflow-auto c-scrollbar-small">
        <div className="border-b-2 border-gray-normal px-1 flex justify-start text-base mb-2">
          <div className="cursor-pointer flex-none border-b-2 px-2 border-gray-normal">Tüm Mesajlar</div>
          <div className="cursor-pointer flex-none border-b-2 px-2 border-transparent">Okunmamışlar</div>
        </div>

        {messages.map(message => {
          return (
            <div
              key={message.id}
              className={`flex items-center rounded bg-gray-100 hover:bg-gray-200 px-2 py-1 mb-1 cursor-pointer border ${message.unreadCount > 0 ? 'border-blue-600' : 'border-gray-400'}`}
              onClick={() => dispatch(setActiveMessageRoom(message.id))}>
              <div className="rounded-full h-9 w-9 bg-white relative flex items-center justify-center p-1">
                <img src={ChatUserIcon} className="h-full" alt="Chat user" />
                {message.unreadCount > 0 &&
                  <div className="rounded-full px-1 text-white text-center absolute -right-3 -top-1 bg-blue-600 text-xs">{message.unreadCount}</div>
                }
              </div>
              <div className={`flex-grow flex flex-col pl-4 ${message.unreadCount > 0 ? 'text-blue-500' : 'text-gray-500'}`}>
                <div className="flex justify-between">
                  <div className={`text-base flex-grow`}>{message.fullname}</div>
                  <div>
                    <img alt="More actions" src={MoreActionsIcon} className="h-3" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex-grow flex">
                    <img src={DoubleCheckIcon} alt="Both read" className="mr-2 h-4" />
                    <div className="overflow-ellipsis overflow-hidden">{message.lastMessage.content}</div>
                  </div>
                  <div>{message.lastMessage.sentTime}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* End message Tab */}

      {/* Start message box actions */}
      <div className="flex justify-center py-2">
        <button className="btn mx-1 px-6 bg-blue-500 text-white" onClick={() => dispatch(toggleRightToolsContainer(false))}>Kapat</button>

        <DropUp text="Seç">
          <div className="py-1">
            <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
          </div>
        </DropUp>

        <button className="btn mx-1 px-6 bg-white border">Sil</button>
      </div>
      {/* End message box actions */}
    </React.Fragment>
  );
}