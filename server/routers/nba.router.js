const express = require('express');
const router = express.Router();
const Player = require('../module/models/nba.schema');

const arrayToGet = [];

router.post('/', (req, res) => {
    console.log(`PORT to /basketball: ${req.body}`);
    let playerData = req.body;
    let newPlayerData = new Player(playerData);
    arrayToGet.push(playerData);
    newPlayerData.save()
        .then( () => {
            res.sendStatus(201)
        })
        .catch( (error) =>{
            console.log(`error ${error}`);
            res.sendStatus(500);
        })
})

router.get('/', (req, res) => {
    console.log(`GET success: ${res.body}`);
    Player.find()
        .then( ( data ) => {
            console.log(`back form player DB: ${data}`);
            res.send(data);
        })
        .catch((error) => {
            console.log(`ERROR from db: ${error}`);
            res.sendStatus(500);
        })
    
})


module.exports = router;