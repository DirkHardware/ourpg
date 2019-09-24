import React from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import { fetchPublicGames, fetchAllGames } from './actions'
import GameCard from './Cards/GameCard'
import NavBar from './NavBar'
import PublicGameView from './Pages/PublicGameView'
import PublicElementView from './Pages/PublicElementView'
import Login from './Pages/Login'

class App extends React.Component {

  componentDidMount() {
    // fire off dispatch to send my fetch request 
    this.props.fetchAllGames()
  }

  render() {
    return (
      <div className="App">
        <Router>
        <NavBar/>
          <Switch>
            <Route path="/home" render={() =>
              <Welcome/>
            }/>
            <Route path="/login" render={() =>
              <Login/>
            }/>
            <Route path='/games/:id' render={(routerProps) => (
                <PublicGameView
                id={routerProps.match.params.id}
              />
            )}/>
            <Route path='/publicelements/:id' render={(routerProps) => (
                <PublicElementView
                id={routerProps.match.params.id}
              />
            )}/>
          </Switch>
         </Router>
       </div>
    )};
  }


function mdp(dispatch) {
  return { fetchPublicGames: dispatch(fetchPublicGames), fetchAllGames: dispatch(fetchAllGames) }
}

export default connect(null, mdp)(App);
