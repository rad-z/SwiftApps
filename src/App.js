import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";

class App extends Component {
  state = {
    data: null
  };

  runProject = () => {
    console.log("In here");
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err))
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
  }

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <TopNav />
        <header className="App-header">
          <h1 className="App-title">Your Local Projects</h1>
          <button onClick={this.runProject}>RUN PROJECT</button>
          <button onClick={this.runProject}>OPEN IN FINDER</button>
          <button onClick={this.runProject}>VISIT SITE</button>
        </header>
        
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
