import { ADD_TRIP, DELETE_TRIP } from './types'

export const addTrip = (data) => dispatch => {
    dispatch({
        type: ADD_TRIP,
        payload: data
    })
}

export const deleteTrip = (data) => dispatch => {
    dispatch({
        type: DELETE_TRIP,
        payload: data
    })
}