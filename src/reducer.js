import { combineReducers, bindActionCreators } from 'redux'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants'
import { connect } from 'tls'

let defaultState = {
    loggedIn: false,
    currentUser: null,
    frontPageGames: [],
    userGames: [],
    selectedGame: null,
    selectedGameElements: [],
    selectedElement: null, 
    // selectedElementContent: '',
    userRolls: '',  
}

function handleLogOut(state = defaultState.loggedIn, action) {
    console.log('handleLogOut', action.type)
    switch (action.type) {
        case "LOG OUT":
            return state ? false : state
        case "LOG IN":
            return state ? state : true
        default:
            return state  
    }
}

function handleFrontPageGames(state = defaultState.frontPageGames, action) {
    console.log('handleGames', action.type)
    switch (action.type) {
        case "FETCH PUBLIC GAMES":
            // console.log('these are the front page public games', state)
            return action.payload
        default: 
            return state
    }
}

function handleElements(state = defaultState.selectedElement, action) {
    console.log('handleElement', action.type)
    switch (action.type){
        case "FETCH ELEMENT":
            return action.payload
        default: 
            return state
    }
}

function handleGameElements(state = defaultState.selectedGameElements, action) {
    console.log('handleGameElement', action.type)
    switch (action.type){
        case "FETCH GAME ELEMENTS":
            return action.payload
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    loggedIn: handleLogOut,
    frontPageGames: handleFrontPageGames,
    element: handleElements,
    gameElements: handleGameElements
})

export default rootReducer