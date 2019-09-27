import React from 'react';
import { connect } from 'react-redux'
import { fetchElement } from '../actions'
import '../index.css';

class NewElement extends React.Component {

    state = {
        title: '',
        description: '',
        content: '',
        game_id: this.props.id,
        gameElementsLength: 0
    }

    // lets worry about this later
    // componentDidMount(){
    //     if (this.state.gameElements === []){
    //         fetch(`http://localhost:3000/games/${this.props.id}`)
    //         .then(resp => resp.json())
    //         .then(data => this.setState({gameElementsLength: data}))
    //         .then(console.log('done fetching!', this.state.gameElements.length))
    //     }
    //     else {
    //         this.setState({gameElementsLength: this.props.gameElements.length})
    //     }
    //     console.log('the number of elements in this game is', this.state.gameElementsLength)
    // }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleSubmit = e => {
        e.preventDefault();
        let newElement = {title: this.state.title, description: this.state.description, kind: 'text', content: this.state.content, order: 999, game_id: this.props.id}
        console.log(newElement);
        fetch("http://localhost:3000/elements", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(newElement)
        })
            .then(resp => resp.json())
        //     .then(json => {
        //     this.context.history.push(`/usergames/${json.id}`);
        // });
    };

    render() {
        console.log('the number of elements in this game is:', this.props.gameElements.length)
        return (
          <div>
            <h1>New Element</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Title: </label>
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
              <label>Description: </label>
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
              <label>Content</label>
              <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
              <button>Create</button>
            </form>
          </div>
        )
    }
}

function msp(state) {   
    // console.log('MSP', state)
    return({loggedIn: state.loggedIn, selectedElement: state.selectedElement, gameElements: state.gameElements, selectedGameId: state.selectedGame })
}

function mdp(dispatch, props){
    let id = props.id
    // console.log('the id in PublicElenent View is', id)
    return({fetchElement: fetchElement(dispatch, id)})
}

export default connect(msp, mdp)(NewElement)
