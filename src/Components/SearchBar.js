import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="Search Robots"
          name=""
          id=""
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}

export default SearchBar;
