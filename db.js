const Sequelize = require('sequelize')

const db = new Sequelize( 'demo', 'b32_25044634', 'Tushar9958@', {
    host: 'sql305.byethost.com',
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
    }},{
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