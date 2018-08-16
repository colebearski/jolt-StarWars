import React, { Component } from 'react';
import './SearchBar.css';
import axios from 'axios'

// 5. Make the provided `SearchBar` component work as a filter on the people cards,
//  acting on any of their attributes, filtering at the server level and still 
//  paginating the results
//  (ref: https://github.com/typicode/json-server#full-text-search).

class SearchBar extends Component {

  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`http://localhost:3008/people`).then(res => {
      const people = res.data;
      this.setState({ people })
      console.log(people)
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
        
      }
    })
  }

  render() {
    return (
      <div className='search-bar'>
      <input 
      placeholder='Search Your Destiny'
      ref={input => this.search = input}
      onChange={this.handleInputChange}
      />
      {/* <p>{this.state.query}</p> */}
      </div>
    );
  }
}

export default SearchBar;
