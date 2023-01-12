const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// WHERE WE PUT OUR ROUTES

// POST
router.post('/', (req, res) => {
  const newItem = req.body;
  const sqlQuery = `
    INSERT INTO "shoppingList" ("name", "quantity", "unit")
    VALUES ($1, $2, $3);
  `;

  pool.query(sqlQuery, [newItem.name, newItem.quantity, newItem.unit])
    .then((result) => {
      console.log('Item added to the database:', newItem)
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in POST server:', error)
      res.sendStatus(500);
    })
})

router.delete("/:id", (req, res) => {
    console.log(req.params);
    let idToDelete = req.params.id;
    let sqlQuery = `
            DELETE FROM "shoppingList"
            WHERE "id"=$1
          `;
    let sqlValues = [idToDelete];
    pool
      .query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log("broke in Delete route", dbErr);
      });
  });
  

router.put('/:id', ( req, res ) => {
    let idToUpdate = req.params.id
    let boughtStatus =  req.body.bought
    console.log(boughtStatus);

    let sqlQuery =`
        UPDATE "shoppingList"
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
