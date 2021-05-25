use snakes_and_ladders;

db.dropDatabase();

db.tasks.insertMany([
    {
        "task": "Take a drink"
    },
    {
        "task": "Nominate another player to drink"
    },
    {
        "task": "Take two drinks"
    },
    {
        "task": "Finish your vessel"
    },
    {
        "task": "Stand until your next turn is over"
    }, 
    {
        "task": "Can't use your hands to drink for a round"
    },
    {
        "task": "Take three drinks"
    },
    {
        "task": "Take a shot"
    },
    {
        "task": "Nominate another player to finish their vessel"
    },
    {
        "task": "Shotgun, last person takes a drink"
    }
])

db.drinks.insertMany([
    {
        "drink": "Take 1 Gulp!"
    },
    {
        "drink": "Take 2 Gulp!"
    },
    {
        "drink": "Take 3 Gulp!"
    }
])