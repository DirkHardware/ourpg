import React from 'react';
import { connect } from 'react-redux'
import { fetchGameElements, fetchGame } from '../actions'
import { Link } from 'react-router-dom'
import '../index.css';
import UserElementCard from '../Cards/UserElementCard'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class UserGameView extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchGameElements()
        this.props.fetchGame()
    }

    print = elements => {
        let i;
        let contentArray = []
        for(i = 0; i < elements.length; i++){
          contentArray.push({
            text: elements[i].title,
            style: 'header'
          })
          contentArray.push('        ')
          contentArray.push(elements[i].content)
          contentArray.push('        ')
        };
        let docDefinition = {content: contentArray, styles: { header: {
          fontSize: 18,
          bold: true
        }}};
        console.log(docDefinition)
        pdfMake.createPdf(docDefinition).download();
    }

    handleSubmit = e => {
        e.preventDefault();
        let editedElement = {title: this.state.title, description: this.state.description, kind: 'text', content: this.state.content, order: this.state.order, game_id: this.state.id}
        console.log(editedElement);
        fetch(`http://localhost:3000/elements/${this.props.element_id}/update`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(editedElement)
        })
            .then(resp => resp.json())
        //     .then(json => {
        //     this.context.history.push(`/usergames/${json.id}`);
        // });
    };

    // we'll deal with this later
    handlePublish = e => {
        e.preventDefault();
        if (this.props.selectedGame.published === false) {
            fetch(`http://localhost:3000/games/${this.props.id}/update`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    Accepts: "application/json"
                },
                body: JSON.stringify({title: this.props.selectedGame.title, description: this.props.selectedGame.description, published: true, user_id: this.props.user_id})
            })
                .then(resp => resp.json())
        } else {
            fetch(`http://localhost:3000/games/${this.props.id}/update`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    Accepts: "application/json"
                },
                body: JSON.stringify({title: this.props.selectedGame.title, description: this.props.selectedGame.description, published: false, user_id: this.props.user_id})
            })
                .then(resp => resp.json())
        }
        //     .then(json => {
        //     this.context.history.push(`/usergames/${json.id}`);
        // });
    };

    render() {
        let linkString= `/usergames/${this.props.id}/newelement`
        if(!this.props.gameElements) {
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
        console.log('selected game is', this.props.selectedGame)
        console.log(this.props.gameElements)
        let elementComponents = this.props.gameElements.map(
            element => <UserElementCard
                history = {this.props.history}
                gameElements = {this.props.gameElements}
                game_id = {this.props.id}
                id = {element.id}
                title = {element.title}
                description = {element.description}
            />)
        return (
            <div className='user-game-view'>
                <h2>{elementComponents} </h2>
                <Link to={linkString} >
                <button>New Element</button>
                </Link>
                <button onClick={this.handlePublish}>Publish</button>
                {/* remember that you can add 'checked=true' to a checkbox to have it checked by default, you 
                will wanter to set this to conditionally render based on published state later on */}
                {/* Published: <input type="checkbox" id='publish-checkbox' onClick='publish'/> */}
                <button onClick={() => this.print(this.props.gameElements)}>Export</button>
            </div>
        )
    }
}

function msp(state){
    return({loggedIn: state.loggedIn, selectedGame: state.selectedGame, gameElements: state.gameElements})
}

function mdp(dispatch, props){
    let id = props.id
    return({fetchGame: fetchGame(dispatch, id), fetchGameElements: fetchGameElements(dispatch, id)})
}

export default connect(msp, mdp)(UserGameView)