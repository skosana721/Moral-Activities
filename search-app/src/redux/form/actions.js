import { SAVE_INFO } from './actionTypes'

export const saveInfo = (info) => {
    return (dispatch) => {
        dispatch({type: SAVE_INFO, payload: info})
    }
}