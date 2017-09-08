import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props){
    // calling parent component class methods
    super(props);

    // this.state only exists in constructor
    this.state = {term: 'Starting Value'}
  }

  render() {
    // BAD == this.state.term = event.target.value == BAD
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={ event => this.setState({term:event.target.value})}
        />
      </div>
    )
  }
}

export default SearchBar;
