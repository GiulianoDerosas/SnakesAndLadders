use snakes_and_ladders;

db.dropDatabase();

db.tasks.insertMany([
    {
        "task": " takes a drink!"
    },
    {
        "task": " takes two drinks!"
    }, 
    {
        "task": " takes three drinks!"
    },
])

db.actions.insertMany([
    {
        "action": ", nominate another player to finish their vessel"
    },
    {
        "action": " calls shotgun, last person takes a drink"
    },
    {
        "action": ", nominate another player to drink"
    },
    {
        "action": " has to finish their vessel"
    },
    {
        "action": " has to stand until their next turn is over"
    },
    {
        "action": " can't use their hands to drink for a round"
    },
    {
        "action": " has to take a shot"
    },
    {
        "action": ", eat the spiciest thing in your house"
    },
    {
        "action": " can't use the bathroom til the game is over"
    },
    {
        "action": ", everything you say until your next drink has to be shouted"
    },
    {
        "action": ", teaspoon of Mustard for you!"
    },
    {
        "action": " can't speak until their next drink"
    },
    {
        "action": ", person who rolled before you takes a drink"
    },
    {
        "action": " has to perform a rain dance"
    },
    {
        "action": ", draw a moustache on yourself"
    },
    {
        "action": ", give your best dog impression"
    },
    {
        "action": " has to recite a poem"
    },
    {
        "action": ", impersonate a chicken"
    },
    {
        "action": " has to do 5 Press-Ups"
    },
    {
        "action": ", trying singing Stayin Alive with your mouth open"
    },
])