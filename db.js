// Created!
// You have successfully created a new database. The details are below.

// Username: la8B8tCY2W

// Database name: la8B8tCY2W

// Password: ocgU3csP4k

// Server: remotemysql.com

// Port: 3306

// These are the username and password to log in to your database and phpMyAdmin

// Make sure you keep your password secure. Ensure you keep back ups of your database in case it gets deleted.


const Sequelize = require('sequelize')


const db = new Sequelize( 'la8B8tCY2W', 'la8B8tCY2W', 'ocgU3csP4k', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
});
const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age : {
        type: Sequelize.INTEGER
    },
    city: {
        type: Sequelize.STRING

    }
    },{

    }
)


db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error(err))

exports = module.exports = {
    User
}