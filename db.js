const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query(`CREATE TABLE test1(
    id int PRIMARY KEY AUTO_INCREMENNT,
    name varchar(80),
    age int,
    city varchar(40)
)`, (err, res) => {
  if (err) throw err;
    console.log(err)

});

function getAlldata(){
    return new Promise(function(resolve,reject){
        client.query(
            `select*from test1`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                }else {
                    resolve(rows)
                }

            }
        )

    })
}
function addNewdata(name){
    return new Promise(function(resolve,reject){
        client.query(
            `INSERT INTO persons (name,age,city)values(?,?,?)`,
            [name,age,city],
            function(err,results){
                if(err){
                    reject(err)
                }else {
                    resolve()
                }

            }
        )

    })
}

exports = module.exports = {
    getAlldata,
    addNewdata
}