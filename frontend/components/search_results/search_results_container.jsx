import React from 'react';
import { connect } from 'react-redux';
import { requestAllRecipes } from '../../actions/recipe_actions';
import SearchResults from './search_results';

const mapStateToProps = (state, ownProps) => ({
  recipes: state.entities.recipes,
  state,
  ownProps
});

const mapDispatchToProps = dispatch => ({
  searchRecipes: searchTerm => dispatch(requestAllRecipes(searchTerm)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);