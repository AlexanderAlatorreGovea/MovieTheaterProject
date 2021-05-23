export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIE_IMAGES":
      return action.payload;
    default:
      return state;
  }
};
