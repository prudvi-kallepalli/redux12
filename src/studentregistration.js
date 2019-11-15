import React from 'react';
import { TextField, NumberField, EmailField, FormButton, RadioGroup, SelectField, CheckBox } from './formcomponent';
import './studentregistration.css';
import { states_in_india } from './listofstates';

const StudentRegistrationForm = () => {
    return (
        <div className="form_container">
            <form>
                <TextField fieldname="firstname" minlength="6" maxlength="10" placeholder="enter firstname" />
                <TextField fieldname="lastname" minlength="4" maxlength="6" placeholder="enter lastname" />
                <NumberField fieldname="phonenumber" numberlength="10" placeholder="enter phonenumber" />
                <EmailField fieldname="email" placeholder="enter  emailid" />
                <RadioGroup fieldname="gender" labels="male female other" />
                <CheckBox fieldname="firstlanguage" fieldvalue="telugu" label="Telugu" />
                <CheckBox fieldname="secondlanguage" fieldvalue="english" label="English" />
                <SelectField label="choose state:" fieldname="personstate" options={states_in_india} />
                <FormButton shouldfill="firstname&&lastname&&phonenumber&&email&&gender&&personstate" label="submit" />
            </form>
        </div>
    );
}

export default StudentRegistrationForm;

