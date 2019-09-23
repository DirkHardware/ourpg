import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'

class PublicElementView extends React.Component {

    componentDidMount() {
        this.props.fetchElement()
        console.log("element id", this.props.e_id)
        // console.log(this.props.element)
    }  

    render(){
        console.log(this.props.selectedElement)
        return(
        <div>
            <p>this is a test</p>
        </div>)
    }
}

function msp(state) {   
    return({loggedIn: state.loggedIn, selectedElement: state.selectedElement })
}

function mdp(dispatch, props){
    let id = props.id
    return({fetchElement: fetchElement(dispatch, id)})
    // return({fetchElement: fetchElement(dispatch)})
}

export default connect(msp, mdp)(PublicElementView)