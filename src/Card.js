import React, { Component } from "react";
import "./Card.css";

// 1. Modify the *Card* component to take props for the
// person's name, image, birthday, and home planet.

class Card extends Component {
  render() {
    const name = this.props.name;
    const photo = this.props.photo;
    const birthday = this.props.birthday;
    const home = this.props.home;

    return (
      <div className="card">
        <div className="card-content">
          <div className="card-name">{name}</div>
          <img src={photo} alt="profile" />
          <p>
            <span>Birthday:</span>
            <span>{birthday}</span>
          </p>
          <p>
            {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
            <span>Homeworld:</span>
            <span>{home}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
