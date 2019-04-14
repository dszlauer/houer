import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  render() {
    return (
      <Link to="/">
        <button>Cancel</button>
      </Link>
    );
  }
}

export default Wizard;
