import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import {shuffle} from "underscore";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, 
    alreadyClicked: [],
    score: 0,
    topScore: 0
  };

  // Map over this.state.friends and render a FriendCard component for each friend object




  constructor() {
    super()
    // this.handleClick = this.handleClick.bind(this);
  }



//when handleClicked is triggered,
handleClick(id) {
  //checks if id is in alreadyClicked array,
  if (this.state.alreadyClicked.includes(id)){
    //if it is in addClicked array resets score,
    this.setState({score: 0});
   
  } else {
    //if not in array increments score by 1,
    // this.setState({score: this.state.score +1})
    this.setState((previousState, props) => {
      console.log(previousState);
      return {
        score: previousState.score +1,
        topScore: previousState.score >= previousState.topScore ? previousState.score +1 : previousState.topScore,
        alreadyClicked: previousState.alreadyClicked.concat(id)
      }
    })
  }
  //randomize images,
  this.shuffleFriends();
}
  
  shuffleFriends = () => {
    this.setState({friends: shuffle(this.state.friends)})
  }
  

  render() {
    return (
      <Wrapper>
        <div className="container">
          <Title>
            <h2>Clicky Game</h2>
            <h6>Click on an image to earn points, but don't click on any more than once!</h6>

          </Title>
          <div className="row">

            <div className="col-md-2">
            your score: {this.state.score}
            top score: {this.state.topScore}
            </div>

            <div className="col-md-8 ">

              {this.state.friends.map(friend => (
                <FriendCard
                  id={friend.id}
                  key={friend.id}
                  image={friend.image}
                  clickHandler = {() => this.handleClick(friend.id)}
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
