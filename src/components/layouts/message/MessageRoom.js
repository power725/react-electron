import React from 'react';
import UserAvatar from '../../../images/user-avatar.png';
import DropUp from '../../common/DropUp';

const messages = [
  { id: 1, senderId: 1, sender: 'Emre Güleryüz', sentTime: '20.12.2020 13.43', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed   diam nonummy nibh euismod tincidunt' },
  { id: 2, senderId: 2, sender: 'Kubilay ERKEÇ', sentTime: '20.12.2020 13.43', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed   diam nonummy nibh euismod tincidunt' }
];

export default function MessageRoom() {
  return (
    <React.Fragment>
      <div className="px-2 mb-2 flex-none">
        <div className="p-2 flex items-center border-b-2 border-gray-normal">
          <img src={UserAvatar} className="rounded h-20 w-20 flex-none mr-3" alt="User Avatar" />

          <div className="flex-grow flex flex-col place-content-between h-full">
            <div className="font-bold text-base">Kubilay ERKEÇ</div>

            <div>
              <div>BiTES Savunma</div>
              <div>Eğitim ve Simülasyon Teknolojileri</div>
              <div>Teknik Lider</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 flex-grow flex-shrink overflow-auto c-scrollbar-small border-b-2 border-gray-normal">
        {messages.map(message => {
          return (
            <div
              className={`p-2 rounded mb-2 flex flex-col flex-none w-72 bg-gray-100 ${message.senderId === 1 ? 'ml-auto' : ''}`}
              key={message.id}>
              <div className="font-bold flex justify-between mb-2">
                <div>{message.sender}</div>
                <div>{message.sentTime}</div>
              </div>
              <div>{message.content}</div>
            </div>
          );
        })}
      </div>

      <div className="p-2 flex-none">
        <textarea className="rounded-lg border-0 bg-gray-200 mb-2 px-2 py-1 w-full focus:outline-none" rows="3"></textarea>

        <div className="flex justify-center py-2">
          <button className="btn mx-1 px-6 bg-white border">Sil</button>

          <DropUp text="Ekle">
            <div className="py-1">
              <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
            </div>
          </DropUp>

          <button className="btn mx-1 px-6 bg-blue-500 text-white">
            Gönder
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}