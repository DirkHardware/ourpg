import React from 'react';
import { connect } from 'react-redux'
import { fetchGameElements } from '../actions'
import { Link } from 'react-router-dom'
import '../index.css';
import UserElementCard from '../Cards/UserElementCard'

class UserGameView extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchGameElements()
    }

    render() {
        let linkString= `/usergames/${this.props.id}/newelement`
        if(this.props.gameElements.length === 0) {
            return(
                <div className='user-game-no-elements'>
                    <h1>This game has no elements (yet)!</h1>
                    <Link to={linkString}>
                        <button>New Element</button>
                    </Link>
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