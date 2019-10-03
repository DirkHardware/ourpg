import React from 'react';
import { connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';

class NewGame extends React.Component {

    state = {
        title: '',
        description: '',
        published: false,
        user_id: this.props.id
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleSubmit = e => {
        e.preventDefault();
        let newGame = {title: this.state.title, description: this.state.description, published: this.state.published, user_id: this.props.id}
        console.log(newGame);
        fetch("http://localhost:3000/games", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(newGame)
        })
            .then(resp => resp.json())
            .then(json => {
                this.props.history.push(`/userhome/1`);
            });
    };

    render() {
        console.log('the id of this game is', this.props.id)
        return (
          <div className='new-game-form'>
            <h1>Game</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Title: </label>
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
              <label>Description: </label>
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
              <button className='button'>Create</button>
            </form>
          </div>
        )
    }
}

function msp(state) {   
    console.log('MSP', state)
    return({loggedIn: state.loggedIn, selectedElement: state.selectedElement, gameElements: state.gameElements, selectedGameId: state.selectedGame })
}

function mdp(dispatch, props){
    let id = props.id
    // console.log('the id in PublicElenent View is', id)
    return({fetchElement: fetchElement(dispatch, id)})
}

export default connect(msp, mdp)(NewGame)
