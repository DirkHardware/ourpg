import { combineReducers, bindActionCreators } from 'redux'
// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants'
// import { connect } from 'tls'

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
    switch (action.type) {
        case "FETCH PUBLIC GAMES":
            return action.payload
        default: 
            return state
    }
}

function handleElements(state = defaultState.selectedElement, action) {
    switch (action.type){
        case "FETCH ELEMENT":
            return action.payload
        default: 
            return state
    }
}

function handleGameElements(state = defaultState.selectedGameElements, action) {
    switch (action.type){
        case "FETCH GAME ELEMENTS":
            return action.payload
        default: 
            return state
    }
}

function handleUser(state = defaultState.currentUser, action){
    switch (action.type){
        case "FETCH USER":
            return action.payload
        default:
            return state
    }
}

function handleUserGames(state = defaultState.userGames, action){
    switch (action.type){
        case "FETCH USER GAMES":
            return action.payload
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    loggedIn: handleLogOut,
    frontPageGames: handleFrontPageGames,
    selectedElement: handleElements,
    gameElements: handleGameElements,
    currentUser: handleUser,
    userGames: handleUserGames
})

export default rootReducer