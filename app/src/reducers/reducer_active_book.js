import { Actions } from './../actions/actions'

// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action = {}) {
    switch(action.type) {
        case Actions.BOOK_SELECTED:
            return action.payload;
    }

    return state;
}