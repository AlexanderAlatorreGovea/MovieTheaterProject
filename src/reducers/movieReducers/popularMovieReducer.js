import { FETCH_POPULAR_MOVIES } from "../../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
