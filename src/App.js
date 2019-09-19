import React from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux'
import Welcome from './Welcome.js'
import { fetchPublicGames } from './actions'

class App extends React.Component {

  // componentDidMount() {
  //   // fire off dispatch to send my fetch request 
  //   this.props.fetchPublicGames()
  // }

  render() {
  return (
    <div className="App">
      <Welcome/>
    </div>
  )};
}


function mdp(dispatch) {
  return { fetchPublicGames: dispatch(fetchPublicGames) }
}

export default connect(null, mdp)(App);
