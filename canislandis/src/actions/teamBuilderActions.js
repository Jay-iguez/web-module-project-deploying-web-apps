import { REDUCERS } from "../index"

export const ACTIONS = {
    UPDATE_VALUES : 'UPDATE_VALUES',
    UPDATE_MEMBER : 'UPDATE_MEMBER',
    REVERT_VALUES : 'REVERT_VALUES',
    ENABLE_BUTTON : "ENABLE_BUTTON",
    SET_FORM_ERRORS: "SET_FORM_ERRORS",
    SUBMIT: 'SUBMIT'
}

export const updateValues = (formInput) => {
    return({type: ACTIONS.UPDATE_VALUES, payload: formInput, reducer: REDUCERS.teamBuilderReducer})
}

export const updateMember = (member) => {
    return({type: ACTIONS.UPDATE_MEMBER, payload: member, reducer: REDUCERS.teamBuilderReducer})
}

export const revertFormValues = () => {
    return({type: ACTIONS.REVERT_VALUES, reducer: REDUCERS.teamBuilderReducer})
}

export const enableButton = (valid) => {
    return({type: ACTIONS.ENABLE_BUTTON, payload: valid, reducer: REDUCERS.teamBuilderReducer})
}

export const setFormErrors = (formErrors) => {
    return({type: ACTIONS.SET_FORM_ERRORS, payload: formErrors, reducer: REDUCERS.teamBuilderReducer})
}

export const submitForm = () => {
    return({type: ACTIONS.SUBMIT, reducer: REDUCERS.teamBuilderReducer})
}