import React, { Component } from "react";

export default class StateInClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      chiefMinister: "Pushkar Singh",
    };
  }
  viewFullName(newName) {
    this.setState({
      chiefMinister: newName,
    });
  }
  render() {
    return (
      <div>
        <h3>My State Chief Minister is {this.state.chiefMinister}</h3>
        <button onClick={() => this.viewFullName("Pushkar Singh Dhami")}>
          Full Name of Chief Minister
        </button>
      </div>
    );
  }
}
