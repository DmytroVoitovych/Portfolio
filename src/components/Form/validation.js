

const nameValid = {
    required: 'Write your name:',
    minLength: {
        value: 4,
        message: 'Minimum of 4 characters.'
    },
    maxLength: {
        value: 40,
        message: 'Maximum of 40 characters.'
    }
};




const joberValid = {
    required: 'Write the name of your organization:',
    minLength: {
        value: 4,
        message: 'Minimum of 4 characters.'
    },
    maxLength: {
        value: 40,
        message: 'Maximum of 40 characters.'
    }
}; 


const messageValid = {
    maxLength: {
        value: 400,
        message: 'Maximum of 400 characters.'
    }
};


export {messageValid, nameValid, joberValid };