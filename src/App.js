import React, { Component } from "react";
import routes from "./routes";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Wizard from "./components/Wizard/Wizard";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Dashboard and Wizard coming from routes component */}
        {/* <Dashboard /> */}
        {/* <Wizard /> */}
        <Header />
        {/* routes brings in Dashboard and Wizard */}
        {routes}
      </div>
    );
  }
}

export default App;
