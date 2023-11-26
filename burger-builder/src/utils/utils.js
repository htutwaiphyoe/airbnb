export const checkValidation = (value, rules) => {
    let isValid = true;
    if (rules.required) {
        isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
        isValid = value.trim().length >= rules.minLength && isValid;
    }
    return isValid;
};
export const updateObject = (oldObj, updatedObj) => {
    return {
        ...oldObj,
        ...updatedObj,
    };
};
