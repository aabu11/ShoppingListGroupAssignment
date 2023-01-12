const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// WHERE WE PUT OUR ROUTES




router.put('/id', ( req, res ) => {
    let idToUpdate = req.params
    let boughtStatus =  req.body.bought

    let sqlQuery =`
        UPDATE "shopping"
            SET "bought" = $1
            WHERE "id" = $2
    `

    let sqlValues = [ boughtStatus, idToUpdate ]
    pool.query( sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log('successful update from PUT Serverside');
        res.sendStatus(201)
    }).catch(( dbErr)=>{
        console.log('broke in PUT serverside', dbErr);
        res.sendStatus(500)
    })
})
// END OF THE ROUTES
module.exports = router;