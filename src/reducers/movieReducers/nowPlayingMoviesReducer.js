import { FETCH_NOWPLAYING_MOVIES } from '/Users/test/movietheaterprojectmaster/src/actions/types.js';

export default ( state = [], action) => {
    switch(action.type) {
        case FETCH_NOWPLAYING_MOVIES:
            return action.payload;
        default:
            return state;
    }
}
