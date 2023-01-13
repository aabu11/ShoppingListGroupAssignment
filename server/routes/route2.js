const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
router.put('/', ( req, res ) => {
    let boughtStatus =  req.body.bought
    console.log('boughtStatus', boughtStatus);

    let sqlQuery =`
        UPDATE "shoppingList"
            SET "bought" = $1;
    `

    let sqlValues = [boughtStatus]
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log('successful update from PUT Serverside');
        res.sendStatus(201)
    }).catch(( dbErr)=>{
        console.log('broke in PUT serverside', dbErr);
        res.sendStatus(500)
    })
})
router.delete("/", (req, res) => {
    let sqlQuery = `
            DELETE FROM "shoppingList";
          `;
    pool
      .query(sqlQuery)
      .then((dbRes) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log("broke in Delete route", dbErr);
      });
  });




module.exports = router;