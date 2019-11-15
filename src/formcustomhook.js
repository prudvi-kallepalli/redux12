import { useState } from 'react';

const useFormFieldHook = () => {
    const [fielddata, setFieldData] = useState({

    });

    const minLength = (val, len) => {
        if (val.length >= len) {
            return 0;
        }
        else {
            return 1;
        }

    }
    const maxLength = (val, len) => {
        if (val.length <= len) {
            return 0;
        }
        else {
            return 1;
        }
    }
    const phoneNumberLength = (val, len) => {
        if (!(isNaN(val)) && (val.length === parseInt(len))) {
            return 0;
        }
        else {
            return 1;
        }
    }
    const isEmailValid = (val) => {
        var patt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
        if (patt.test(val) === true) {
            return 0;
        }
        else {
            return 1;
        }
    }
    const formapi = { setFieldData, minLength, maxLength, phoneNumberLength, isEmailValid };
    return [fielddata, formapi];

}

export { useFormFieldHook };