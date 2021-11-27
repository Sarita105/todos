import {ADD_TODO} from './actions';

const initialState = [
    {
        id: 1,
        name: 'Go to Library',
        status: false,
    },
    {
        id: 2,
        name: ' Have Lunch',
        status: true,
    },
    {
        id: 3,
        name: 'Meet friends',
        status: false,
    }
];

export const todos = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_TODO: {
            return state.concat(payload);
        }
        default:
            return state;
    }
}