import React, { Component } from "react";

export class PropsInClassComponent extends Component {
  // We cannot change the value of props
  changeAge() {
    alert(this.props.details.age);
    return (this.props.details.age = 30);
  }
  render() {
    console.log("Class Component::::", this.props);
    return (
      <div>
        Props Children (HTML): {this.props.children}
        <h3>My Name is {this.props.name}</h3>
        <h3>My Hobbies are: {this.props.hobbies + " "}</h3>
        <h3>
          My age is {this.props.details.age} - My city is:
          {this.props.details.city} - Am i married :
          {this.props.details.isMarried}
        </h3>
        <button onClick={() => this.changeAge()}>Change Age</button>
      </div>
    );
  }
}

export default PropsInClassComponent;
