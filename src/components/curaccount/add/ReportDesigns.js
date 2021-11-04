import React from 'react';


export default function ReportDesigns(props) {
    return(
        <React.Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                        <label className="p-2 col-span-3 ellipsis">Fatura Fişi Rapor Tas.</label>
                        <div className="col-span-4 relative flex items-center">
                            <input className="cs-input" />
                            <img alt="input icon" src={require('../../../images/icons/search.png')} className="-ml-6 z-10" />
                        </div>
                    </div>

                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                        <label className="p-2 col-span-3 ellipsis">İrsaliye Fişi Rapor Tas.</label>
                        <div className="col-span-4 relative flex items-center">
                            <input className="cs-input" />
                            <img alt="input icon" src={require('../../../images/icons/search.png')} className="-ml-6 z-10" />
                        </div>
                    </div>

                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                        <label className="p-2 col-span-3 ellipsis">Sipariş Fişi Rapor Tas.</label>
                        <div className="col-span-4 relative flex items-center">
                            <input className="cs-input" />
                            <img alt="input icon" src={require('../../../images/icons/search.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                    
                    <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                        <label className="p-2 col-span-3 ellipsis">Teklif Fişi Rapor Tas.</label>
                        <div className="col-span-4 relative flex items-center">
                            <input className="cs-input" />
                            <img alt="input icon" src={require('../../../images/icons/search.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}