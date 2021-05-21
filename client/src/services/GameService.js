const baseURL = 'http://localhost:5000/api/players'

// const baseURL = 'http://localhost:5000/api/sightings/'

export const getPlayers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postPlayers = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

