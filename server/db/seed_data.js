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

db.dice.insertMany([
    {
        "dice1": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png"
    },
    {
        "dice2": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png"
    },
    {
        "dice3": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png"
    },
    {
        "dice4": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png"
    },
    {
        "dice5": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png"
    },
    {
        "dice6": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141006/dice6.png"
    }
])