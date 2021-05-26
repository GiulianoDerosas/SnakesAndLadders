use snakes_and_ladders;

db.dropDatabase();

db.tasks.insertMany([
    {
        "task": "Take a drink!"
    },
    {
        "task": "Take two drinks!"
    }, 
    {
        "task": "Take three drinks!"
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
    {
        "action": "Eat the spiciest thing in your house"
    },
    {
        "action": "No using the bathroom til the game is over"
    },
    {
        "action": "Everything you say until your next drink has to be shouted"
    },
    {
        "action": "Teaspoon of Mustard for you!"
    },
    {
        "action": "Can't speak until your next drink"
    },
    {
        "action": "Person who rolled before you takes a drink"
    },
    {
        "action": "Perform a rain dance"
    },
    {
        "action": "Draw a moustache on yourself"
    },
    {
        "action": "Give your best dog impression"
    },
    {
        "action": "Recite a poem"
    },
    {
        "action": "Impersonate a chicken"
    },
    {
        "action": "5 Press-Ups"
    },
    {
        "action": "Sing Stayin Alive with your mouth open"
    },
])