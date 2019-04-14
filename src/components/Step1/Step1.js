import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.addHouse = this.addHouse.bind(this);
  }

  addHouse() {
    const { name, address, city, state, zip } = this.state;

    const newHouse = {
      name,
      address,
      city,
      state,
      zip
    };

    axios.post("/api/houses", newHouse);
  }

  render() {
    console.log(this.state);
    const { name, address, city, state, zip } = this.state;
    return (
      <form>
        <h1>Add New Listing</h1>
        <label>Property Name</label>
        <input
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <label>Address</label>
        <input
          value={address}
          onChange={e => this.setState({ address: e.target.value })}
        />
        <label>City</label>
        <input
          value={city}
          onChange={e => this.setState({ city: e.target.value })}
        />
        <label>State</label>
        <input
          value={state}
          onChange={e => this.setState({ state: e.target.value })}
        />
        <label>Zip</label>
        <input
          value={zip}
          onChange={e => this.setState({ zip: e.target.value })}
        />
        <Link to="/" className="links">
          <button onClick={this.addHouse}>Next</button>
        </Link>
      </form>
    );
  }
}

export default Step1;
