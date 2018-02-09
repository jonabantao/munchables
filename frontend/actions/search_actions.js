export const CLEAR_SEARCH_TERM = "CLEAR_SEARCH_TERM";

const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM
});

export const clearSearch = () => dispatch => dispatch(clearSearchTerm());