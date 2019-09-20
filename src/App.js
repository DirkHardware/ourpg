import React from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import Welcome from './Welcome.js'
import { fetchPublicGames } from './actions'
import GameCard from './Cards/GameCard'

class App extends React.Component {

  // componentDidMount() {
  //   // fire off dispatch to send my fetch request 
  //   this.props.fetchPublicGames()
  // }

  render() {
  return (
    <div className="App">
      <Switch>
      <Route path="/home" render={() =>
        <Welcome/>
      }/>
      <Route path='/GameCard' render={() =>
        <GameCard
          id='1'
          title='Pathfinder'
          description='A game for D&D grognards who dont like 5th edition but their 3.5 edition rulebooks have all rotted' 
        />
      }/>
      </Switch>
    </div>
  )};
}


function mdp(dispatch) {
  return { fetchPublicGames: dispatch(fetchPublicGames) }
}

export default connect(null, mdp)(App);
