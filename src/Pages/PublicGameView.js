import React from 'react';
import { connect } from 'react-redux'
import { fetchGame, fetchGameElements } from '../actions'
import '../index.css';
import PublicElementCard from '../Cards/PublicElementCard'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class PublicGameView extends React.Component {

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

    render() {
        if(!this.props.gameElements || !this.props.selectedGame) {
            return(
                <h1>This game has no elements (yet)!</h1>
            )
        }
        console.log('game elements:', this.props.gameElements)
        let elementComponents = this.props.gameElements.map(
            game => <PublicElementCard
                gameElements = {this.props.gameElements}
                id = {game.id}
                title = {game.title}
                description = {game.description}
            />)
        return (
            <div className='public-elements-container'>
                <h1>{this.props.selectedGame.title}</h1>
                 <button className='button' onClick={() => this.print(this.props.gameElements)}>Export</button>
                {elementComponents}
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

export default connect(msp, mdp)(PublicGameView)