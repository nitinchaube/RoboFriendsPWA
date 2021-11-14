import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {connect} from "react-redux";
import {requestRobots, setSearchField} from "../actions";
import Header from '../components/Header';

const mapStateToProps = state =>{
  console.log(state)
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error

  }
}

const mapDispatchToProps =(dispatch) =>{
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=> dispatch(requestRobots())// this is same as requestRobots(dispatch)  returning a function to dispatch from actions
  }
}

class App extends Component {
  

  componentDidMount() {
    this.props.onRequestRobots();
     
  }


  render() {
    const { searchField, onSearchChange, onRequestRobots, robots, isPending, error } = this.props;
    {console.log(robots)} 
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header/>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
          
        </div>
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);