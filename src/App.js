import React, { Component } from "react";
import "./App.css";
import Card from "./Card.js";
import SearchBar from "./SearchBar.js";
import star from "./images/star.svg";
import wars from "./images/wars.svg";
import axios from "axios";
import { link } from "fs";

// 2. GET the list of Star Wars people from `http://localhost:3008/people`
// and render a *Card* component for each of the people, using people data
// from the API as props.
// https://alligator.io/react/axios-react/



class App extends Component {

  state = {
    persons: []
  }
  
  componentDidMount () {
    axios.get(`http://localhost:3008/people`).then(res => {
      const persons = res.data;
      this.setState({ persons })
      console.log(persons)
    })
  }



  render() {
    return (
      <div className="content">
        <div className="logo">
          <img src={star} alt="star-logo" />
          <span className="interview-text">The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <SearchBar />
        <Card
          name="Greg"
          birthday="April"
          home="Mars"
          photo="http://localhost:3008/darth_vader.jpg"
        />
        <ul>
          {this.state.persons.map(persons => <li> {persons.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
