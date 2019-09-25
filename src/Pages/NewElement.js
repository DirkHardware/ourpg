import React from 'react';
import { connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';

class NewElement extends React.Component {

    render() {
        return (
          <div>
            <h1>New Element</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Title: </label>
              <input type="text" name="username" value='Title'/>
              <label>Password: </label>
              <input type="text" name="password" value='Description' onChange={this.handleChange}/>
              <button>signup</button>
            </form>
          </div>
        )
    }
}

function msp(state) {   
    console.log('MSP', state)
    return({loggedIn: state.loggedIn, selectedElement: state.selectedElement, gameElements: state.gameElements })
}

function mdp(dispatch, props){
    let id = props.id
    // console.log('the id in PublicElenent View is', id)
    return({fetchElement: fetchElement(dispatch, id)})
}

export default connect(msp, mdp)(NewElement)
