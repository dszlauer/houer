import React, { Component } from "react";
import { Link } from "react-router-dom";

class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: ""
    };
  }

  render() {
    console.log(this.state);
    const { imageUrl } = this.state;
    return (
      <form>
        <h1>Add New Listing</h1>
        <label>Property Name</label>
        <input
          value={imageUrl}
          onChange={e => this.setState({ imageUrl: e.target.value })}
        />
        <Link to="/" className="links">
          <button onClick={this.addHouse}>Next</button>
        </Link>
      </form>
    );
  }
}

export default Step2;
