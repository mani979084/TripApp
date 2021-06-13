import { ADD_TRIP } from './types'

export const addTrip = (data) => dispatch => {
    dispatch({
        type: ADD_TRIP,
        payload: data
    })
}