import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchBar from './search_bar';
import { requestFilteredRecipes } from '../../../actions/recipe_actions';


const mapStateToProps = (_, ownProps) => ({
  pushHistory: ownProps.history.push,
  path: ownProps.location.pathname,
});

const mapDispatchToProps = dispatch => ({
  searchRecipes: searchTerm => dispatch(requestFilteredRecipes(searchTerm)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar));
