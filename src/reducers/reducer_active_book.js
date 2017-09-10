// State argument is not application state,
// only what this reducer is responsible for (ie: state += 1, global state of this reducer)
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }

    // Never mutate state
    return state
}