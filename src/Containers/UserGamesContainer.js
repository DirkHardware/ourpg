import React from 'react';
import { connect } from 'react-redux'
import { fetchUserGames } from '../actions'
import '../index.css';
import UserGameCard from '../Cards/UserGameCard'
// import React from 'react';

class UserGamesContainer extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchUserGames()
    }
    
    render() {
        if(!this.props.userGames.length) {
            return(
                <h1>{this.props.id}</h1>
            )
        }
        let userGamesComponents = this.props.userGames.map(
            game => <UserGameCard
                id = {game.id}
                title = {game.title}
                description = {game.description}
            />)
        return (
            <div name='user-games-container'>
                <h2>Here are your games!</h2>
                {userGamesComponents}
            </div>
        )
    }
}

function msp(state) {
    return { loggedIn: state.loggedIn, userGames: state.userGames }
}

function mdp(dispatch, props) {
    let id = props.id
    return { fetchUserGames: fetchUserGames(dispatch, id) }
}

export default connect(msp, mdp)(UserGamesContainer) 