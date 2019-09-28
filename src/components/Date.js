import React from "react";
import IcoMoon from "react-icomoon";

export class Date extends React.Component {
  constructor() {
    super();

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      date: date
    };
  }

  render() {
    return (
      <div className="date">
        <IcoMoon icon="calendar" className="calendar" />
        {this.state.date}
      </div>
    );
  }
}
