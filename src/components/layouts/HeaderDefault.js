import React from 'react';

import HeaderFiltersBlock from './HeaderFiltersBlock';

export default function HeaderDefault(props) {
    return(
        <div className={props.className + " h-13 flex bg-gray-lightest border-b border-gray-normal"}>
            <div className="w-13 flex-none" />

            <div className="px-2 py-2 flex flex-grow justify-between">
                <img alt="Logo" src={require('../../images/sistem-erp-logo-expand.png')} className="h-full" />

                <HeaderFiltersBlock />
            </div>
        </div>
    )
}