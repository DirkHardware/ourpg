function fetchPublicGames(dispatch) {
    return function () {
        fetch("http://localhost:3000/games/all_games_published") 
            .then(resp => resp.json())
            .then(data => {
                dispatch({type: "FETCH PUBLIC GAMES", payload: data})
            })
    }
}

function fetchAllGames(dispatch) {
    return function () {
        fetch("http://localhost:3000/games/all_games_published") 
            .then(resp => resp.json())
            .then(data => {
                dispatch({type: "FETCH PUBLIC GAMES", payload: data})
            })
    }
}

function fetchUserGames(dispatch, id){
    return function () {
        fetch(`http://localhost:3000/users/${id}/games`)
            .then(resp => resp.json())
            .then(data => {
                dispatch({type: "FETCH USER GAMES", payload: data})
            })
    }
}

function fetchGame(dispatch, id){
    return function() {
        fetch(`http://localhost:3000/games/${id}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "FETCH GAME", payload: data})
        })
    }
}

function fetchGameElements(dispatch, id){
    return function () {
        fetch(`http://localhost:3000/games/${id}/elements`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "FETCH GAME ELEMENTS", payload: data})
        })
    }
}

function fetchElement(dispatch, id){
    return function() {
        fetch(`http://localhost:3000/elements/${id}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "FETCH ELEMENT", payload: data})
        })
    }
}

function fetchUser(dispatch, username){
    return function() {
        fetch(`http://localhost:3000/users/${username}`)
        .then(resp => resp.json())
        .then(data =>
            dispatch({type: "FETCH USER", payload: data}))
    }
}

export { fetchPublicGames, fetchGameElements, fetchElement, fetchGame, fetchAllGames, fetchUser, fetchUserGames }