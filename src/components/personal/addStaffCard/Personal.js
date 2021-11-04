import React, { useEffect, useState } from 'react';

import FormGroup from '../../common/FormGroup';
import ExpandableBox from '../../common/ExpandableBox';
import { useSelector, useDispatch } from 'react-redux';
import { listBranches } from '../../../store/firmSlice';
import { getBolumList } from '../../../store/staffSlice';
import { getDepartmanList, getKademeList } from '../../../store/mutualSlice';

import { Field } from 'formik';

export default function Personal(props) {
    const dispatch = useDispatch();
    let usrData = useSelector((state) => state.aut.userData);
    useEffect(() => {
        dispatch(listBranches({ firmaId: usrData.firmaId }));
        dispatch(getBolumList({ firmaId: usrData.firmaId }));
        dispatch(getKademeList({}));
    }, []);
    
    const [bolumid, setBolumid] = useState(1);

    const branchList = useSelector((state) => state.firm.branchList);
    const bolumList = useSelector((state) => state.staff.bolumList);
    const kademeList = useSelector((state) => state.mutual.kademeList);

    const handleChange = (event) => {
        setBolumid(event.target.value);
    }

    useEffect(() => {
        dispatch(getDepartmanList({ bolumid: bolumid }));
    }, [bolumid]);

    let departmanList = useSelector((state) => state.mutual.departmanList);


    return (
        <ExpandableBox headerText={`Personel Kartı`}>
            <div className="p-2 font-semibold text-base text-gray-dark">Personel Bilgileri</div>

            <div className="flex -mx-4 w-full">
                <div className="mx-4 flex-1">
                    <FormGroup label="Şube" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="subeid" as="select" className="cs-input appearance-none pr-10">
                            {branchList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>
                    <FormGroup label="Sicil No">
                        <Field name="sicilNo" className="cs-input pr-8" />
                        {props.formProps.touched.sicilNo && props.formProps.errors.sicilNo && <div className="text-red-500">{props.formProps.errors.sicilNo}</div>}
                    </FormGroup>
                </div>

                <div className="mx-4 flex-1">
                    <FormGroup label="Adı">
                        <Field name="adi" className="cs-input pr-8" />
                        {props.formProps.touched.adi && props.formProps.errors.adi && <div className="text-red-500">{props.formProps.errors.adi}</div>}
                    </FormGroup>

                    <FormGroup label="Soyadı">
                        <Field name="soyadi" className="cs-input pr-8" />
                        {props.formProps.touched.soyadi && props.formProps.errors.soyadi && <div className="text-red-500">{props.formProps.errors.soyadi}</div>}
                    </FormGroup>

                    <FormGroup label="T.C. Kimlik No">
                        <Field name="personelKimlikBilgileriDTO[tckNo]" className="cs-input pr-8" />
                    </FormGroup>
                </div>

                <div className="mx-4 flex-1">
                    <FormGroup label="Bölüm" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="bolumid" as="select" className="cs-input appearance-none pr-10">

                            {({
                                field, // { name, value, onChange, onBlur }
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta,
                            }) => (
                                <select className="cs-input appearance-none pr-10" {...field} value={bolumid} onChange={handleChange}>
                                    {bolumList.map(item =>
                                        <option key={item.id} value={item.id}>{item.adi}</option>
                                    )}
                                </select>
                            )}
                        </Field>
                    </FormGroup>
                    <FormGroup label="Departman" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="departmanid" as="select" className="cs-input appearance-none">
                            {departmanList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>
                    <FormGroup label="Kademe" icon={require('../../../images/icons/angle-down.png')}>

                        <Field name="kademeid" as="select" className="cs-input appearance-none">
                            {kademeList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>
                </div>
            </div>
        </ExpandableBox>
    );
}