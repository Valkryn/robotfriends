import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchbar: "",
    };
  }
  render() {
    return (
      <div className="tc">
        <h1>Robot friends</h1>
        <SearchBar />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
