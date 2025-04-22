import React from "react";
import "./Events.css";

const Events = () => {
  const eventData = [
    {
      date: "13",
      month: "March",
      heading: "Understanding the Strengths and Difficulties Questionnaire",
      time: "19.00am • 6.5h",
      venue: "Online Via Zoom",
      price: "£250 £99 | VAT with members discount",
    },
    {
      date: "24",
      month: "April",
      heading: "Review your Drawing and Talking Practices FOUNDATION",
      time: "19.00am • 6.5h",
      venue: "Online Via Zoom",
      price: "£250 £99 | VAT with members discount",
    },
    {
      date: "13",
      month: "March",
      heading: "Understanding the Strengths and Difficulties Questionnaire",
      time: "19.00am • 6.5h",
      venue: "Online Via Zoom",
      price: "£250 £99 | VAT with members discount",
    },
    {
      date: "24",
      month: "April",
      heading: "Review your Drawing and Talking Practices FOUNDATION",
      time: "19.00am • 6.5h",
      venue: "Online Via Zoom",
      price: "£250 £99 | VAT with members discount",
    },
    {
      date: "24",
      month: "April",
      heading: "Review your Drawing and Talking Practices FOUNDATION",
      time: "19.00am • 6.5h",
      venue: "Online Via Zoom",
      price: "£250 £99 | VAT with members discount",
    },
  ];

  return (
    <div className="container container-main">
      <div className="heading">
        <h1>Upcoming Calendar</h1>
      </div>

      {eventData.map((event, index) => (
        <div className="event-container" key={index}>
          <div className="event-data">
            <div className="event-date">
              <div className="event-day">{event.date}</div>
              <div className="event-month">{event.month}</div>
            </div>

            <div className="event-details">
              <h2 className="event-heading">{event.heading}</h2>
              <div className="event-time-venue">
                <span>{event.time}</span>
                <span className="dot">•</span>
                <span>{event.venue}</span>
              </div>
              <div className="event-price">{event.price}</div>
            </div>
          </div>

          <div className="event-button-container">
            <button className="event-button">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
