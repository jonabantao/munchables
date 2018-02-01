import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      term: '',
    };
  }
  
  handleUpdate(e) {
    this.setState({term: e.target.value});
  }

  render() {
    return (
      <form className="navbar__search-bar">
        <input value={this.state.term} 
          placeholder="Let's Cook..." 
          onChange={e => this.handleUpdate(e)}
          className="navbar__search-bar-input"
        />
        <button className="navbar__search-bar-submit">
          <i className="fas fa-search navbar__search-bar-icon--white" />
        </button>
      </form>
    );
  }
}

export default SearchBar;