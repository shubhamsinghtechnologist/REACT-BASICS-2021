import React from "react";

export default class EventsInClassComponent extends React.Component {
  fatherName = "Lalit Singh";
  changeFatherName() {
    console.log(this.fatherName);
  }
  render() {
    return (
      <>
        <h3>My Father name is Mr. {this.fatherName}</h3>
        <button onClick={() => this.changeFatherName()}>
          Change Father Name
        </button>
      </>
    );
  }
}
