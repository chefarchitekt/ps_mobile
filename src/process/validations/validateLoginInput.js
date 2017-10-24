import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

//validator isNull is deprecated 
const validateLoginInput = (data) => {
    console.log('logindata for isvalid');
    console.log(data);
    const errors = {};
    
        if (validator.isEmpty(data.UserName)) {
            errors.UserName = 'This field is required';
        }
    
        if (validator.isEmpty(data.UserPassword)) {
            errors.UserPassword = 'This field is required';
        }
    
        if (validator.isEmpty(data.KazooAccountName)) {
            errors.KazooAccountName = 'This field is required';
        }

        console.log('login validation errors');
        console.log(errors);

        return {
            errors, //shorthand of errors: errors
            isValid: isEmpty(errors)
        };
};

export default validateLoginInput;
