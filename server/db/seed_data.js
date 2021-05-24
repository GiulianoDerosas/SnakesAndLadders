use snakes_and_ladders;
db.dropDatabase();

db.tasks.insertMany([
    {
        "task": "Take off your socks!"
    },
    {
        "task": "Take your bra off!"
    },
    {
        "task": "Can't use your hands to drink for a round"
    }
])

db.players.insertMany([
    {
        "player": "1",
        "name": "",
        "counter": ""
    },
    {
        "player": "2",
        "name": "",
        "counter": ""
    },
    {
        "player": "3",
        "name": "",
        "counter": ""
    },
    {
        "player": "4",
        "name": "",
        "counter": ""
    }
])