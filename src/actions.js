

function fetchPublicGames(dispatch) {
    let arr;
    console.log('fetching public games')
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

export { fetchPublicGames }