import React from 'react';
import { connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';

class UserElementView extends React.Component {

    componentDidMount() {
        this.props.fetchElement()
        console.log(this.props.selectedElement)
    }
    
    // check = (props) => {
    //     console.log(props.gameElements.findIndex(nextPage(props.selectedElement.order)));
    // }

    render() {
        if(!this.props.selectedElement) {
            return(
                <h1>This game has no elements!</h1>
            )
        }
        else {
            // console.log('public element view game elements', this.props.gameElements)
            // check = (props) => {
            //     console.log(props.gameElements.findIndex(nextPage(props.selectedElement.order)));
            // }
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

function nextPage(element, currentOrder) {
    return element.order === currentOrder + 1 
}

// function check(props) {
//     console.log(props.gameElements.findIndex(nextPage(props.selectedElement.order)));
// }

// let nextpage = check(props.gameElements)


function msp(state) {   
    console.log('MSP', state)
    return({loggedIn: state.loggedIn, selectedElement: state.selectedElement, gameElements: state.gameElements })
}

function mdp(dispatch, props){
    let id = props.id
    console.log('the id in PublicElenent View is', id)
    return({fetchElement: fetchElement(dispatch, id)})
}

export default connect(msp, mdp)(UserElementView)