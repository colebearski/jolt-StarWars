import React, { Component } from "react";
import "./App.css";
import Card from "./Card.js";
import SearchBar from "./SearchBar.js";
import star from "./images/star.svg";
import wars from "./images/wars.svg";
import axios from "axios";

// 2. GET the list of Star Wars people from `http://localhost:3008/people`
// and render a *Card* component for each of the people, using people data
// from the API as props.
// https://alligator.io/react/axios-react/

// 3. Use `http://localhost:3008/planets` to get the name of each person's
// home world.

// 4. Paginate the list of cards using listing no more than 10
// https://github.com/typicode/json-server#paginate

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      planets: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3008/people?_page1&_limit=10`).then(res => {
      const persons = res.data;
      this.setState({ persons });
      // console.log(persons);
    });

    axios.get(`http://localhost:3008/planets`).then(res => {
      const planets = res.data;
      // console.log(planets);
      this.setState({ planets });
    });
  }

  render() {
    // destructure
    const { persons } = this.state;
    const { planets } = this.state;

    // https://stackoverflow.com/questions/9639065/a-for-loop-that-compares-two-arrays-looking-for-matching-values
    let matchHome = (homePlanet) => {
      for (let i = 0; i < planets.length; i++) {
        for (let j = 0; j < persons.length; j++) {
          if (planets[i].id === homePlanet) {
            return planets[i].name;
          }
          return "No Planet";
        }
      }
    };

    return (
      <div className="content">
        <div className="logo">
          <img src={star} alt="star-logo" />
          <span className="interview-text">The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <SearchBar />

        {this.state.persons.map(persons => {
          return (
            <Card
              key={persons.id}
              name={persons.name}
              birthday={persons.birth_year}
              home={matchHome(persons.homeworld)}
              photo={"http://localhost:3008/" + persons.image}
            />
          );
        })}
        <ul>
          {/* {this.state.persons.map(persons => <li> {persons.name}</li>)} */}
        </ul>
      </div>
    );
  }
}

export default App;
