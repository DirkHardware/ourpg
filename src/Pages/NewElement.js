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
            .then(json => {
                this.props.history.push(`/usergames/${this.props.id}`);
            });
    };

    render() {
        console.log('the number of elements in this game is:', this.props.gameElements.length)
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                        <div className='element-new-form-components'>
                            <h1>New Element</h1>
                            <div className='element-new-title'>
                                <label>Title</label>
                                <div className='element-new-title-input'>
                                    <input className='input' type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className='element-new-description'>
                                <label>Description: </label>
                                <div className='edit-element-description-input'>
                                    <textarea className='text-area' rows='4' cols='100' name='description' value={this.state.description} onChange={this.handleChange}>
                                    </textarea>
                                </div>
                            </div>
                            <div className='element-new-content'>
                                <label>Content</label>
                                <div className='element-new-content-input'>
                                    <textarea className='text-area' rows='60' cols='100' name='content' value= {this.state.content} onChange={this.handleChange}>
                                    </textarea>
                                </div>
                            </div>
                            <div className='element-new-button'>
                                <button className='button'>Commit Change</button>
                            </div>
                        </div>
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
