import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


// declarin a Class
class App extends Component  {
  // constructor we declare the state
  constructor(){
    super()
    // Super calls the constructor of component, need to declare to use later .this.
    this.state = {
      // these are the things that can change
      robots: robots,
      searchfield: ''
    }
  }
// to this methods, use the arrow function to use correctly the .this
onSearchChange = (event) => {
  // changing the state
  this.setState({ searchfield: event.target.value })
  
  
}

render() {
  const filteredRobots = this.state.robots.filter(robot =>{
  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })
  return (
  <div className='tc'>
  <h1>RoboFriends</h1>
  <SearchBox searchChange={this.onSearchChange}/>
  <CardList robots={filteredRobots}/>
  </div>
);
  }
}
export default App;
