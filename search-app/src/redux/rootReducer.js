import { combineReducers } from 'redux'
import { formReducer } from './form/formReducer'

export const rootReducer = combineReducers({
    form: formReducer
})