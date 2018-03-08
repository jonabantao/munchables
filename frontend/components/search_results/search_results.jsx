import React, { Component } from 'react';
import RecipeItem from '../recipe/recipe_item';
import SearchResultsBar from './search_results_bar';
import _ from 'lodash';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.displayResultHeader = this.displayResultHeader.bind(this);
    this.createRecipeContainers = this.createRecipeContainers.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  

  componentWillUnmount() {
    this.props.clearSearch();
  }

  componentDidMount() {
    // Used to fill in list if page is reloaded
    if (this.props.searchTerm.length === 0) {
      this.props.searchRecipes('');
    }
  }

  handleSearch(term) {
    const search = term.trim();

    this.props.searchRecipes(search);
  }

  createRecipeContainers() {
    if (this.props.recipes.length) {
      return (
        this.props.recipes.map(recipe => <RecipeItem
          key={recipe.id}
          recipe={recipe}
          authorName={this.props.authors[recipe.author_id].username}
        />)
      );
    } else if (this.props.searchTerm.length > 0) {
      let term = this.props.searchTerm;

      return (
        <div>
          <h3 className="recipe-list__header-text">
            Nothing found for {`${term}`}
          </h3>
        </div>
      );
    }
  }

  displayResultHeader() {
    if (this.props.searchTerm.length === 0) {
      return (
        <h3 className="recipe-list__header-text">
          Can't decide what to make? Here are some of our Munchables...
        </h3>
      );
    } 
  }
  
  render() {
    const handleSearch = _.debounce(term => { this.handleSearch(term); }, 300);

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