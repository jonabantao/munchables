import React, { Component } from 'react';
import RecipeItem from '../recipe/recipe_item';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      term: '',
    };

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
    } else {
      this.setState({ term: this.props.searchTerm });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchTerm !== nextProps.searchTerm) {
      this.setState({ term: nextProps.searchTerm });
    }
  }

  handleUpdate(e) {
    this.setState({ term: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();

    const search = this.state.term.trim();

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
    return (
      <React.Fragment>
        <section className="search-page-top">
          <h4 className="search-page-top__header">Let's Cook</h4>
          <form>
            <input type="text" 
              className="search-page-top__form"
              value={this.state.term}
              onChange={e => this.handleUpdate(e)}
              autoFocus
            />
            <button
              className="search-page-top__submit"
              onClick={this.handleSearch}
            >
            <i className="fas fa-search search-page-top__icon--white" />
            </button>
          </form>
        </section>
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