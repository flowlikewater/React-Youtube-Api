import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props){
    // calling parent component class methods
    super(props);

    // this.state only exists in constructor
    this.state = {term: ''}
  }

  render() {
    // BAD == this.state.term = event.target.value == BAD
    return (
      <div className='search-bar'>
        <input
          value = {this.state.term}
          onChange = { event => this.onInputChange(event.target.value) }
        />
      </div>
    )
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
