const baseURL = 'http://localhost:5000/api/tasks'

const GameService = {

    getTasks() {
        return fetch(baseURL)
            .then(res => res.json())
    }

}
export default GameService
