import { ACTIONS } from '../actions/teamBuilderActions'

const initialState = (() => {
    const initialFormValues = {
        name: '',
        email: '',
        role: '',
        breed: '',
        bio: '',
        chew: ''
    }

    return {
        initialFormValues,
        formValues : {...initialFormValues, chew : false},
        formErrors : {...initialFormValues}
    }
})

export const teamBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOG:
            console.log(state)
            return state
        default:
            return state
    }
}