import { connect } from 'react-redux';
import { requestFilteredRecipes } from '../../actions/recipe_actions';
import { clearSearch } from '../../actions/search_actions';
import SearchResults from './search_results';

const mapStateToProps = state => ({
  recipes: Object.values(state.entities.recipes),
  authors: state.entities.users,
  searchTerm: state.term,
});

const mapDispatchToProps = dispatch => ({
  searchRecipes: searchTerm => dispatch(requestFilteredRecipes(searchTerm)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);
