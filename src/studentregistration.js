import React from 'react';
import { TextField, NumberField, EmailField, FormButton, RadioGroup } from './formcomponent';
import './studentregistration.css';

const StudentRegistrationForm = () => {
    return (
        <div className="form_container">
            <form>
                <TextField fieldname="firstname" minlength="6" maxlength="10" placeholder="enter firstname" />
                <TextField fieldname="lastname" minlength="4" maxlength="6" placeholder="enter lastname" />
                <NumberField fieldname="phonenumber" numberlength="10" placeholder="enter phonenumber" />
                <EmailField fieldname="email" placeholder="enter valid email id" />
                <RadioGroup fieldname="gender" labels="male female other" />
                <FormButton shouldfill="firstname&&lastname&&phonenumber&&email&&gender" label="submit" />
            </form>
        </div>
    );
}

export default StudentRegistrationForm;

