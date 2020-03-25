const route = require('express').Router()
//This route is on the
const db = require('../db')
route.get('/persons',(req,res)=>{
//send all the persons as an array
    db.getAllPersons()
        .then((persons)=> res.send(persons))
        .catch((err)=> res.send({error: err}))
})
route.post('/persons',(req,res)=>{
//Add the new son detals
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
        .then(()=>res.redirect('/api/'))
        .catch((err)=>res.send({error:err}))
})
exports  = module.exports = {
    route
}