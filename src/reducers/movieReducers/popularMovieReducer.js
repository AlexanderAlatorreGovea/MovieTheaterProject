import { FETCH_POPULAR_MOVIES } from '/Users/test/movietheaterprojectmaster/src/actions/types.js';

export default ( state = [], action) => {
    switch(action.type) {
        case FETCH_POPULAR_MOVIES:
            return action.payload;
        default:
            return state;
    }
}




