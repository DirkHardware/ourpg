import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { fetchElement, fetchGameElements } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'
import Element from '../Cards/Element'
import { BrowserRouter } from 'react-router'

class PublicGameView extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchGameElements()
        console.log("public view component mounting", this.props.gameElements)
    }

    // render(){
    //     // console.log('public game view test', this.props)
    //     return(<p>this is a test {this.props.id}</p>)
    // }

    render() {
        if(this.props.gameElements.length === 0) {
            return(
                <h1>loading</h1>
            )
        }
        // console.log('These are the front page games', this.props)
        // let pgArr = props.frontPageGames.map(game => )
        return (
            <div>
                <h2>This game has {this.props.gameElements.length} elements </h2>
            </div>
        )
    }
}

function msp(state){
    return({loggedIn: state.loggedIn, gameElements: state.gameElements})
}

function mdp(dispatch, props){
    console.log('mdp props', props)
    let id = props.id
    return({fetchGameElements: fetchGameElements(dispatch, id)})
}

export default connect(msp, mdp)(PublicGameView)