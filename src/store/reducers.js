import {ADD_TODO, UPDATE_TODO} from './actions';

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
        case UPDATE_TODO: {
            state = state.map(i => {
                if(i.id === payload.id) {
                    return payload;
                  }
                  return i;
            })
            return state;
        }
        default:
            return state;
    }
}