

function fetchPublicGames(dispatch) {
    return function () {
        fetch("http://localhost:3000/games/all_games_published") 
            .then(resp => resp.json())
            .then(data => {
                dispatch({type: "FETCH PUBLIC GAMES", payload: data})
            })
    }
            // .then(data => console.log(data))}
    //         .then(data => { 
    //             arr = data.filter(datum => datum.published === true)
    //         console.log('front page games', arr)}
    //         // dispatch({ type: "FETCH PUBLIC GAMES", payload: arr })
    // )}
}

function fetchGameElements(dispatch, id){
    return function () {
        fetch(`http"//localhost:3000/games/${id}/elements`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "FETCH GAME ELEMENTS", payload: data})
        })
    }
}

function fetchElement(dispatch, id) {
    return function() {
        fetch(`http://localhost:3000/elements/${id}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "FETCH ELEMENT", payload: data})
        })
    }
}

export { fetchPublicGames, fetchGameElements, fetchElement }