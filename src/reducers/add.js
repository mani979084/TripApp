import { ADD_TRIP, DELETE_TRIP } from '../actions/types'

const initialState = JSON.parse(localStorage.getItem('trip')) || []

const add = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TRIP:
            localStorage.setItem('trip', JSON.stringify([payload, ...state]))
            return [payload, ...state];

        case DELETE_TRIP:
            localStorage.setItem('trip', JSON.stringify([...payload]))
            return [...payload];

        default:
            return state;
    }
}

export default add;