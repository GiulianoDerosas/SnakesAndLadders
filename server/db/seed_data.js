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