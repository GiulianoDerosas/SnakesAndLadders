use snakes_and_ladders;

db.dropDatabase();

db.tasks.insertMany([
    {
        "task": " take a drink!"
    },
    {
        "task": " take two drinks!"
    }, 
    {
        "task": " take three drinks!"
    },
])

db.actions.insertMany([
    {
        "action": " nominate another player to finish their vessel"
    },
    {
        "action": " shotgun, last person takes a drink"
    },
    {
        "action": " nominate another player to drink"
    },
    {
        "action": " finish your vessel"
    },
    {
        "action": " atand until your next turn is over"
    },
    {
        "action": " can't use your hands to drink for a round"
    },
    {
        "action": " take a shot"
    },
    {
        "action": " eat the spiciest thing in your house"
    },
    {
        "action": " no using the bathroom til the game is over"
    },
    {
        "action": " everything you say until your next drink has to be shouted"
    },
    {
        "action": " teaspoon of Mustard for you!"
    },
    {
        "action": " can't speak until your next drink"
    },
    {
        "action": " person who rolled before you takes a drink"
    },
    {
        "action": " perform a rain dance"
    },
    {
        "action": " draw a moustache on yourself"
    },
    {
        "action": " give your best dog impression"
    },
    {
        "action": " recite a poem"
    },
    {
        "action": " impersonate a chicken"
    },
    {
        "action": " 5 Press-Ups"
    },
    {
        "action": " sing Stayin Alive with your mouth open"
    },
])