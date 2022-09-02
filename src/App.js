import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Robot friends</h1>
        <SearchBar />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
