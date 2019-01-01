import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import github from "./api/github";

class App extends Component {
  state = {
    users: [],
    sort: {
      column: null,
      direction: "desc"
    }
  };
  onFormSubmit = async term => {
    const response = await github.get(`users?q=${term}`);
    this.setState({ users: response.data.items });
  };
  sortBy = column => {
    const direction = this.state.sort.direction === "asc" ? "desc" : "asc";
    const sortedData = this.state.users.sort((a, b) => {
      if (column === "login") {
        const nameA = a.login.toUpperCase(); 
        const nameB = b.login.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      } else {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      }
    });

    if (direction === "desc") {
      sortedData.reverse();
    }

    this.setState({
      users: sortedData,
      sort: {
        column,
        direction
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <Results users={this.state.users} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default App;
