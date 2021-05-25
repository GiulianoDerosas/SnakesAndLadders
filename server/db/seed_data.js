use snakes_and_ladders;

db.dropDatabase();

db.tasks.insertMany([
    {
        "task": "Take a drink"
    },
    {
        "task": "Take two drinks"
    }, 
    {
        "task": "Take three drinks"
    },
])

db.actions.insertMany([
    {
        "action": "Nominate another player to finish their vessel"
    },
    {
        "action": "Shotgun, last person takes a drink"
    },
    {
        "action": "Nominate another player to drink"
    },
    {
        "action": "Finish your vessel"
    },
    {
        "action": "Stand until your next turn is over"
    },
    {
        "action": "Can't use your hands to drink for a round"
    },
    {
        "action": "Take a shot"
    },
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