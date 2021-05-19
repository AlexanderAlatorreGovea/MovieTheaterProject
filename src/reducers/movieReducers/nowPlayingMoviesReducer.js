//import { FETCH_NOWPLAYING_MOVIES } from '/Users/test/movietheaterprojectmaster/src/actions/types.js';
import { FETCH_NOWPLAYING_MOVIES } from '../../actions/types';

export default ( state = [], action) => {
    switch(action.type) {
        case FETCH_NOWPLAYING_MOVIES:
            return action.payload;
        default:
            return state;
    }
}
