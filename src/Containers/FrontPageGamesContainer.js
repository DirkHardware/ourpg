import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { fetchPublicGames } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'
import GameCard from '../Cards/GameCard'
// import React from 'react';

class FrontPageGamesContainer extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchPublicGames()
        console.log(this.props.frontPageGames)
    }
    
    render() {
        if(this.props.frontPageGames.length === 0) {
            return(
                <h1>loading</h1>
            )
        }
        // console.log('These are the front page games', this.props)
        // let pgArr = props.frontPageGames.map(game => )
        let publicGamesComponents = this.props.frontPageGames.map(
            game => <GameCard
                key = {game.id}
                title = {game.title}
                description = {game.description}
            />)
        return (
            <div>
                <h2>Check out some of our highest rated games!</h2>
                {publicGamesComponents}
            </div>
        )
    }
}

function msp(state) {
    console.log("map state to props", state)
    return { loggedIn: state.loggedIn, frontPageGames: state.frontPageGames }
}

function mdp(dispatch) {
    return { fetchPublicGames: fetchPublicGames(dispatch) }
}

export default connect(msp, mdp)(FrontPageGamesContainer) 