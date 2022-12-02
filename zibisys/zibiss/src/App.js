import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://api.jikan.moe/v4/anime")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading.....</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map((items) => (
              <li key={items.mal_id}>{items.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
