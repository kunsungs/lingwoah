import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import NavBar from "./NavBar";
import "./Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "90vh" }}
        />
      </div>
    );
  }
}

export default MyCalendar;