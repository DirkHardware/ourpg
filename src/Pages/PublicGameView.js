import React from 'react';
import { Provider, connect } from 'react-redux'
import { fetchGameElements } from '../actions'
import '../index.css';
import rootReducer from '../reducer'
import ElementCard from '../Cards/ElementCard'

class PublicGameView extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchGameElements()
        console.log('the id in component did mount is', this.props.id)
        console.log("public view component mounting", this.props.gameElements)
    }

    render() {
        if(this.props.gameElements.length === 0) {
            return(
                <h1>loading</h1>
            )
        }
        let elementComponents = this.props.gameElements.map(
            game => <ElementCard
                id = {game.id}
                title = {game.title}
                description = {game.description}
            />)
        return (
            <div>
                <h2>{elementComponents} </h2>
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

export default connect(msp, mdp)(PublicGameView)