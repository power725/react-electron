import React, { useState } from 'react';

export default function HeaderFiltersBlock(props) {
    const [isSearchOpened, setSearchOpened] = useState(false);

    const focusSearch = () => {
        searchInput.current.focus();
        setSearchOpened(true);
    }

    const onBlurSearch = () => {
        if (searchInput.current.value.trim() === "") {
            setSearchOpened(false);
        }
    }

    const searchInput = React.createRef();
    return(
        <div className="border-l border-gray-normal text-gray-normal flex items-center text-xl">
            <input type="search"
                ref={searchInput}
                className={`pt-1.5 pb-1 border-0 border-b focus:outline-none text-base bg-transparent text-gray-darkest transition-all ${isSearchOpened ? 'w-auto px-1.5 ml-2' : 'w-0 px-0 ml-0'}`}
                onBlur={onBlurSearch} />

            <img alt="Search" src={require('../../images/icons/c-search.png')} className="ml-2 cursor-pointer" onClick={focusSearch} />

            <img alt="Filter" src={require('../../images/icons/c-filter.png')} className="ml-2 cursor-pointer" />
        </div>
    );
}