const baseURL = 'http://localhost:5000/api/tasks'

// const baseURL = 'http://localhost:5000/api/sightings/'

const GameService = {

    getTasks() {
        return fetch(baseURL)
            .then(res => res.json())
    }

}

export default GameService




// export const postPlayers = (payload) => {
//     return fetch(baseURL, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' }
//     })
//     .then(res => res.json())
// }

