import React from 'react';
import { connect } from 'react-redux'
import { fetchGameElements } from '../actions'
import { Link } from 'react-router-dom'
import '../index.css';
import rootReducer from '../reducer'
import UserElementCard from '../Cards/PublicElementCard'

class UserGameView extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchGameElements()
    }

    render() {
        if(this.props.gameElements.length === 0) {
            return(
                <div className='user-game-no-elements'>
                    <h1>This game has no elements (yet)!</h1>
                    <button>New Element</button>
                </div>
            )
        }
        // console.log('game elements:', this.props.gameElements)
        let elementComponents = this.props.gameElements.map(
            game => <UserElementCard
                gameElements = {this.props.gameElements}
                id = {game.id}
                title = {game.title}
                description = {game.description}
            />)
        let linkString= `/usergames/${this.props.id}/newelement`
        return (
            <div className='user-game-view'>
                <h2>{elementComponents} </h2>
                <Link to={linkString} >
                <button>New Element</button>
                </Link>
                <button>Publish</button>
            </div>
        )
    }
}

function msp(state){
    return({loggedIn: state.loggedIn, gameElements: state.gameElements})
}

function mdp(dispatch, props){
    let id = props.id
    return({fetchGameElements: fetchGameElements(dispatch, id)})
}

export default connect(msp, mdp)(UserGameView)