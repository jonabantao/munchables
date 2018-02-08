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
  }
  
  handleUpdate(e) {
    this.setState({term: e.target.value});
  }

  handleSearch() {
    let searchState = Object.assign(this.state);

    this.props.searchRecipes(searchState)
      .then(() => {
        this.props.pushHistory("/search");
        this.clearForm();
      });
  }

  clearForm() {
    this.setState({ term: '' });
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