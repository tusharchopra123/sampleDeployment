const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query(`CREATE TABLE test1(
    id int PRIMARY KEY AUTO_INCREMENNT,
    name varchar(80)
)`, (err, res) => {
  if (err) throw err;
    console.log(err)
    
});