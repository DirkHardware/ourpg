import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import { fetchPublicGames, fetchAllGames } from './actions'
import NavBar from './NavBar'
import PublicGameView from './Pages/PublicGameView'
import PublicElementView from './Pages/PublicElementView'
import Login from './Pages/Login'
import NewElement from './Pages/NewElement'
import NewGame from './Pages/NewGame'
import UserHome from './Pages/UserHome'
import UserGameView from './Pages/UserGameView'
import UserElementView from './Pages/UserElementView'

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
            <Route path='/usergames/:id/newgame' render={(routerProps) => (
                <NewGame
                id={routerProps.match.params.id}
              />
            )}/>
            <Route path='/userhome/:id' render={(routerProps) =>
              <UserHome
              id={routerProps.match.params.id}
              />
            }/>
            <Route path="/login" render={() =>
              <Login/>
            }/>
            <Route path='/publicgames/:id' render={(routerProps) => (
                <PublicGameView
                id={routerProps.match.params.id}
              />
            )}/>
             <Route path='/usergames/:id/newelement' render={(routerProps) => (
                <NewElement
                history = {routerProps.history}
                id={routerProps.match.params.id}
              />
            )}/>
            <Route path='/usergames/:id' render={(routerProps) => (
                <UserGameView
                history = {routerProps.history}
                id={routerProps.match.params.id}
              />
            )}/>
            <Route path='/publicelements/:id' render={(routerProps) => (
                <PublicElementView
                id={routerProps.match.params.id}
              />
            )}/>
            <Route path='/userelements/:id' render={(routerProps) => {
              console.log(routerProps);
              return <UserElementView
                history = {routerProps.history}
                id={routerProps.match.params.id}
              />
            }}/>
          </Switch>
         </Router>
       </div>
    )};
  }


function mdp(dispatch) {
  return { fetchPublicGames: dispatch(fetchPublicGames), fetchAllGames: dispatch(fetchAllGames) }
}

export default connect(null, mdp)(App);
