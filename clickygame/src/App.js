import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">

            <div className="col-md-2">
            </div>

            <div className="col-md-8 ">
              <Title>Clicky Game</Title>
              {this.state.friends.map(friend => (
                <FriendCard
                  id={friend.id}
                  key={friend.id}
                  image={friend.image}
                />
              ))}
            </div>

            <div className="col-md-2">
            </div>

          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
