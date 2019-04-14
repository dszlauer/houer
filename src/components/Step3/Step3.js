import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  render() {
    console.log(this.state);
    const { mortgage, rent } = this.state;
    return (
      <form>
        <h1>Add New Listing</h1>
        <label>monthly Mortgage Amount</label>
        <input
          value={mortgage}
          onChange={e => this.setState({ mortgage: e.target.value })}
        />
        <label>Desired Monthly Rent</label>
        <input
          value={rent}
          onChange={e => this.setState({ rent: e.target.value })}
        />
        <Link to="/" className="links">
          <button onClick={this.addHouse}>Next</button>
        </Link>
      </form>
    );
  }
}

export default Step3;
