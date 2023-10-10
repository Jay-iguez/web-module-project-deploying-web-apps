import { REDUCERS } from "../index"

export const ACTIONS = {
    LOG : 'LOG'
}

export const logState = () => {
    return({type: ACTIONS.LOG, reducer: REDUCERS.teamBuilderReducer})
}