import React, { Component } from "react";
import "./Card.css";

// 1. Modify the *Card* component to take props for the
// person's name, image, birthday, and home planet.

class Card extends Component {

  state = {
    showEdit: false
  }

  editOn = element => {
    element.preventDefault()
    this.setState({ showEdit:!this.state.showEdit })
  }

  render() {
    const name = this.props.name;
    const photo = this.props.photo;
    const birthday = this.props.birthday;
    const home = this.props.home;
    
    // destructure
    const { showEdit } = this.state;

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
          <button onClick={this.editOn}>Edit</button>
          {showEdit ? (          <form action="">
              <hr/>
              <input type="text"/> <span>Name</span>
              <input type="text"/> <span>Birthday</span>
              {/* <input type="text"/> <span>Homeworld</span>           */}
              <hr />
              <button>Save</button>
            </form>) : null}
            
            
  
          
        </div>
      </div>
    );
  }
}

export default Card;
