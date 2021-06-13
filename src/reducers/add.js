import { ADD_TRIP } from '../actions/types'

const initialState = JSON.parse(localStorage.getItem('trip')) || []

const add = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TRIP:
            localStorage.setItem('trip', JSON.stringify([payload, ...state]))
            return [payload, ...state];

        default:
            return state;
    }
}

export default add;