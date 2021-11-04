import React from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleRightToolsContainer,
  setActiveHelpTopic
} from '../../../store/commonSlice';

const helpList = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus dictum magna venenatis aliquet. Aenean vel lacinia nisl, imperdiet consequat eros. Vivamus turpis velit, gravida vel congue a, consequat lobortis massa. Mauris ac ex varius, porta neque in, condimentum dui. Integer et leo at tellus gravida aliquam quis vitae ante. Aliquam orci tortor, hendrerit in nisl ut, placerat volutpat nunc. Curabitur laoreet diam in ligula lacinia tristique. In maximus velit id lorem eleifend euismod. Nunc tristique commodo dui. Praesent in molestie felis. Cras quis tortor et est iaculis efficitur eget vel dolor. Aliquam erat volutpat.'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus dictum magna venenatis aliquet. Aenean vel lacinia nisl, imperdiet consequat eros. Vivamus turpis velit, gravida vel congue a, consequat lobortis massa. Mauris ac ex varius, porta neque in, condimentum dui. Integer et leo at tellus gravida aliquam quis vitae ante. Aliquam orci tortor, hendrerit in nisl ut, placerat volutpat nunc. Curabitur laoreet diam in ligula lacinia tristique. In maximus velit id lorem eleifend euismod. Nunc tristique commodo dui. Praesent in molestie felis. Cras quis tortor et est iaculis efficitur eget vel dolor. Aliquam erat volutpat.'
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus dictum magna venenatis aliquet. Aenean vel lacinia nisl, imperdiet consequat eros. Vivamus turpis velit, gravida vel congue a, consequat lobortis massa. Mauris ac ex varius, porta neque in, condimentum dui. Integer et leo at tellus gravida aliquam quis vitae ante. Aliquam orci tortor, hendrerit in nisl ut, placerat volutpat nunc. Curabitur laoreet diam in ligula lacinia tristique. In maximus velit id lorem eleifend euismod. Nunc tristique commodo dui. Praesent in molestie felis. Cras quis tortor et est iaculis efficitur eget vel dolor. Aliquam erat volutpat.'
  }
];

export default function HelpBox() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="px-3 mt-4 flex-grow flex-shrink overflow-auto c-scrollbar-small">
        <div className="rounded-lg bg-gray-light border border-gray-normal flex justify-between px-2 py-0.5 mb-2">
          <div className="flex items-center flex-grow">
            <img alt="Filter" src={require('../../../images/icons/filter.png')} className="h-4 mr-2" />
            <input className="text-gray-600 pl-3 pr-3 py-1.5 outline-none border-0 bg-transparent w-full" placeholder="Kelime İle Filtrele" />
          </div>
        </div>

        <div className="text-gray-dark">Anasayfa &gt; Üretim Modülü &gt; Oparatör Kart Listesi</div>

        {
          helpList.map(help => {
            return (
              <div
                key={help.id}
                className={`flex flex-col py-1 mb-4 cursor-pointer`}
                onClick={() => dispatch(setActiveHelpTopic(help.id))}
              >
                <div className="text-lg font-bold mb-1">{help.title}</div>
                <div className="text-sm">{help.content}</div>
              </div>
            );
          })
        }
      </div>

      {/* Start help box actions */}
      <div className="flex justify-center py-2">
        <button className="btn mx-1 px-6 bg-blue-500 text-white" onClick={() => dispatch(toggleRightToolsContainer(false))}>Kapat</button>
      </div>
      {/* End help box actions */}
    </React.Fragment>
  );
}