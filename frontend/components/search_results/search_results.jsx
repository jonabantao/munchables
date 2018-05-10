import React, { Component } from 'react';
import _ from 'lodash';

import RecipeItem from '../recipe/recipe_item';
import SearchResultsBar from './search_results_bar';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.displayResultHeader = this.displayResultHeader.bind(this);
    this.createRecipeContainers = this.createRecipeContainers.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // Used to fill in list if page is reloaded
    if (this.props.searchTerm.length === 0) {
      this.props.searchRecipes('');
    }
  }

  componentWillUnmount() {
    this.props.clearSearch();
  }

  handleSearch(term) {
    const search = term.trim();

    this.props.searchRecipes(search);
  }

  createRecipeContainers() {
    if (this.props.recipes.length) {
      return (
        this.props.recipes.map(recipe => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            authorName={this.props.authors[recipe.author_id].username}
          />
        ))
      );
    } else if (this.props.searchTerm.length > 0) {
      const { searchTerm } = this.props;

      return (
        <div>
          <h3 className="recipe-list__header-text">
            Nothing found for {`${searchTerm}`}
          </h3>
        </div>
      );
    }

    return null;
  }

  displayResultHeader() {
    if (this.props.searchTerm.length === 0) {
      return (
        <h3 className="recipe-list__header-text">
          Can&apos;t decide what to make? Here are some of our Munchables...
        </h3>
      );
    }

    return null;
  }

  render() {
    const handleSearch = _.debounce(term => this.handleSearch(term), 300);

    return (
      <React.Fragment>
        <SearchResultsBar
          onSearchTermChange={handleSearch}
          searchTerm={this.props.searchTerm}
        />
        <section className="search-page-container">
          <nav className="recipe-list">
            <section className="recipe-list__heading">
              {this.displayResultHeader()}
            </section>
            <ul className="recipe-list__contents">
              {this.createRecipeContainers()}
            </ul>
          </nav>
        </section>
      </React.Fragment>
    );
  }
}

export default SearchResults;
