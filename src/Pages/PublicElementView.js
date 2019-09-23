import React from 'react';
import { connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'

class PublicElementView extends React.Component {

    componentDidMount() {
        this.props.fetchElement()
        console.log(this.props.selectedElement)
    }  

    render() {
        if(!this.props.selectedElement) {
            return(
                <h1>loading</h1>
            )
        }
        else {
            console.log(this.props.gameElements)
            return (
            <div>
                <h2>Title: {this.props.selectedElement.title}</h2>
                <p>{this.props.selectedElement.content}</p>
                <h4>Page: {this.props.selectedElement.order}</h4>
            </div>
        )
        }
    }
}

function msp(state) {   
    return({loggedIn: state.loggedIn, selectedElement: state.selectedElement })
}

function mdp(dispatch, props){
    let id = props.id
    console.log('the id in PublicElenent View is', id)
    return({fetchElement: fetchElement(dispatch, id)})
}

export default connect(msp, mdp)(PublicElementView)