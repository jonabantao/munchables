import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      term: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.moveToSearchPage = this.moveToSearchPage.bind(this);
  }

  
  handleUpdate(e) {
    this.setState({term: e.target.value});
  }

  handleSearch(e) {
    e.preventDefault();

    const search = this.state.term.trim();
    const isAtSearchPage = this.props.path === "/search";


    if (isAtSearchPage) {
      this.props.searchRecipes(search)
        .then(this.clearForm);
    } else if (!isAtSearchPage) {
      this.props.searchRecipes(search)
        .then(() => {
          this.moveToSearchPage();
          this.clearForm();
        });
    }
  }

  clearForm() {
    this.setState({ term: '' });
  }

  moveToSearchPage() {
    this.props.pushHistory("/search");
  }


  render() {
    return (
      <form className="navbar__search-bar">
        <input value={this.state.term} 
          placeholder="Let's Cook..." 
          onChange={this.handleUpdate}
          className="navbar__search-bar-input"
        />
        <button 
          className="navbar__search-bar-submit"
          onClick={this.handleSearch}  
        >
          <i className="fas fa-search navbar__search-bar-icon--white" />
        </button>
      </form>
    );
  }
}

export default SearchBar;