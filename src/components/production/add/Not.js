import React from 'react';


export default function Not(props) {
    return(
        <React.Fragment>
            <div className="col-12 py-1 px-2 gap-x-6">
                <div>
                    <div className="p-2 text-base text-gray-dark">Ürün Hakkında Genel Açıklamalar</div>

                    <div class="mb-1 grid sm:grid-cols-1 md:grid-cols-7 ">
                        <label class="p-2 col-span-1 ellipsis">Cari Kart Tipi</label>
                        <div class="col-span-6 relative flex items-center">
                            <textarea class="cs-input" spellcheck="false" rows={12}></textarea>
                        </div>
                    </div>
                </div>

            </div>
          </React.Fragment>
    );
}