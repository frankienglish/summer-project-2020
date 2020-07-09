import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    keyword: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.keyword);
    this.setState({ keyword: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
           name="searchWord" 
           style={{ flex: '10', padding: '5px' }}
           placeholder="Search ..." 
        //   value={this.state.keyword}
        //   onChange={this.onChange}
        />

        
        <input 
          type="submit" 
          value="Search" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

// PropTypes
Search.propTypes = {
  search: PropTypes.func.isRequired
}

export default Search;