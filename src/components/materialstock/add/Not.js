import React from 'react';

import { Field } from 'formik';

export default function Not(props) {
    return (
        <React.Fragment>
            <div className="col-12 py-1 px-2 gap-x-6">
                <div>
                    <div className="p-2 text-base text-gray-dark">Ürün Hakkında Genel Açıklamalar</div>

                    <div class="mb-1 grid sm:grid-cols-1 md:grid-cols-7 ">
                        <label class="p-2 col-span-1 ellipsis">Açıklama</label>
                        <div class="col-span-6 relative flex items-center">
                            <Field name="aciklama" as="select" className="cs-input appearance-none pr-10">

                                {({
                                    field, // { name, value, onChange, onBlur }
                                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc. 
                                    meta,
                                }) => (

                                    <textarea class="cs-input"  {...field} spellcheck="false" rows={12}></textarea>
                                )}
                            </Field>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}