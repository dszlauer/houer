import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios.get("/api/houses").then(response => {
      this.setState({ houses: response.data });
    });
  }

  deleteHouse(property_id) {
    axios.delete(`/api/house/${property_id}`).then(response => {
      this.setState({ houses: response.data });
    });
  }

  render() {
    console.log("this is state", this.sate);
    const mappedHouses = this.state.houses.map(house => {
      return (
        <div key={house.property_id}>
          <House house={house} />
          <h4>Property Name: {house.name}</h4>
          <h4>Address: {house.address}</h4>
          <h4>City: {house.city}</h4>
          <h4>State: {house.state}</h4>
          <h4>Zip: {house.zip}</h4>
          <button onClick={() => this.deleteHouse(house.property_id)}>
            Delete
          </button>
        </div>
      );
    });
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/wizard" className="links">
          <button>Add New Property</button>
        </Link>
        {mappedHouses}
      </div>
    );
  }
}

export default Dashboard;
