import React from 'react';
import { useFormFieldHook } from './formcustomhook';
import { connect } from 'react-redux';


const FieldComp = ({ fieldname, minlength, maxlength, placeholder, uploadData }) => {
    const [fielddata, formapi] = useFormFieldHook();
    return (
        <div>
            {/* {console.log(minlength + "  " + maxlength)} */}
            <input className="form_field" type="text" name={fieldname} placeholder={placeholder} onChange={(e) => formapi.minLength(e.target.value, minlength) ? formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 1, [fieldname]: e.target.value }) : formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 0, [fieldname]: e.target.value })} onBlur={() => (fielddata[fieldname + 'fieldError'] === 0) ? uploadData(fieldname, fielddata[fieldname]) : uploadData(fieldname, '')} />
            <p className="error_message">{(!(fielddata[fieldname + 'fieldError'] !== 1)) ? <span>enter valid information</span> : <span></span>}</p>
            {/* {console.log(formapi)} */}
            {/* {console.log(fielddata)} */}
        </div>
    );
}
const NumberFieldComp = ({ fieldname, numberlength, placeholder, uploadData }) => {
    const [fielddata, formapi] = useFormFieldHook();
    return (
        <div>
            <input className="form_field" type="number" name={fieldname} placeholder={placeholder} onChange={(e) => (formapi.phoneNumberLength(e.target.value, numberlength)) ? formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 1, [fieldname]: e.target.value }) : formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 0, [fieldname]: e.target.value })} onBlur={() => (fielddata[fieldname + 'fieldError'] === 0) ? uploadData(fieldname, fielddata[fieldname]) : uploadData(fieldname, '')} />
            <p className="error_message">{(!(fielddata[fieldname + 'fieldError'] !== 1)) ? <span>enter valid phonenumber</span> : <span></span>}</p>
        </div>
    );
}
const EmailComp = ({ fieldname, placeholder, uploadData }) => {
    const [fielddata, formapi] = useFormFieldHook();
    return (
        <div>
            <input className="form_field" type="email" name={fieldname} placeholder={placeholder} onChange={(e) => (formapi.isEmailValid(e.target.value)) ? formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 1, [fieldname]: e.target.value }) : formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 0, [fieldname]: e.target.value })} onBlur={() => (fielddata[fieldname + 'fieldError'] === 0) ? uploadData(fieldname, fielddata[fieldname]) : uploadData(fieldname, '')} />
            <p className="error_message">{(!(fielddata[fieldname + 'fieldError'] !== 1)) ? <span>enter valid email address</span> : <span></span>}</p>
        </div>
    );
}
const RadioGroupComp = ({ uploadData, fieldname, labels }) => {
    //const [fielddata, formapi] = useFormFieldHook();
    const items = labels.split(" ");
    return (
        <div className="radio_group">
            <span>{fieldname}:</span>{items.map((item, index) => <RadioGroupItem key={index} itemname={item} fieldname={fieldname} uploadRadioItem={(data) => uploadData(fieldname, data)} />)}
        </div>
    );
}
const RadioGroupItem = ({ fieldname, itemname, uploadRadioItem }) => {
    return (
        <span>
            <input type="radio" name={fieldname} value={itemname} onClick={(e) => uploadRadioItem(e.target.value)} /><label >{itemname}</label>
        </span>
    );
}
const SelectComp = ({ options, label, fieldname, uploadData }) => {
    return (
        <div className="SelectComp">
            <label >{label}</label><select onChange={(e) => uploadData(fieldname, e.target.value)} name={fieldname}>{options.map((option_name, index) => <SelectItem key={index} option_name={option_name} />)}</select>
        </div>
    );
}
const SelectItem = ({ option_name }) => {
    return (
        <option value={option_name}>{option_name}</option>
    );
}
const CheckBoxComp = ({ fieldname, fieldvalue, label, uploadData }) => {
    return (
        <span className="checkbox_comp">
            <input type="checkbox" onClick={(e) => uploadData(fieldname, fieldvalue)} name={fieldname} value={fieldvalue} /><label>{label}</label>
        </span>
    );
}
const ButtonComp = ({ shouldfill, label, formInformation }) => {
    const condition_parameters = shouldfill.split('&&');
    let flag;
    const isDisabled = () => {
        flag = 0;
        for (let index = 0; index < condition_parameters.length; index++) {
            if ((formInformation[condition_parameters[index]] === '') || !(formInformation[condition_parameters[index]])) {
                flag = 1;
                break;
            }
        }
        if (flag === 1) {
            return true;
        }
        else {
            return false;
        }


    }
    return (
        <div>
            {/* {console.log(condition_parameters)} */}
            <button className="form_button" disabled={isDisabled()}>{label}</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        formInformation: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        uploadData: (fname, fvalue) => { dispatch({ type: "LOAD_FORM_DATA", fieldname: fname, fieldvalue: fvalue }) }
    }
}
const TextField = connect(null, mapDispatchToProps)(FieldComp);
const NumberField = connect(null, mapDispatchToProps)(NumberFieldComp);
const EmailField = connect(null, mapDispatchToProps)(EmailComp);
const RadioGroup = connect(null, mapDispatchToProps)(RadioGroupComp);
const SelectField = connect(null, mapDispatchToProps)(SelectComp);
const CheckBox = connect(null, mapDispatchToProps)(CheckBoxComp);
const FormButton = connect(mapStateToProps, null)(ButtonComp);
export { TextField, NumberField, EmailField, FormButton, RadioGroup, SelectField, CheckBox };