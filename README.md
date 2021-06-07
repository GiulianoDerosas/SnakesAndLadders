# SnakesAndBladdered

A group project using the MERN (MongoDB, Express, React, NodeJS) stack to create a browser game. In this case a twist on the classic Snakes & Ladders.
As with classic snakes and ladders, a player rolls the dice and their counter moves accordingly; if the player lands on a ladder, they go up, if they hit 
a snake, they go down. However in Snakes and Bladdered there are also tiles which generate forfeits and tiles which give players a random amount of drinks.

In order to join in the fun please:

1. Fork this repository
2. Navigate to SnakesAndLadders
3. Navigate to client and run npm install
4. Navigate to server and run a. npm init -y b. npm install express c. npm install -D nodemon d. npm install -D cors
5. Seed the database by running mongodb < db/seed_data.js
6. Run the database with npm run server:dev
7. Navigate to client and run the app with npm start  