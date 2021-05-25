const baseURL = 'http://localhost:5000/api/tasks'
const baseURL2 = 'http://localhost:5000/api/actions'

const GameService = {

    getTasks() {
        return fetch(baseURL)
            .then(res => res.json())
    },

    getActions() {
        return fetch(baseURL2)
            .then(res => res.json())
    }
}
export default GameService
