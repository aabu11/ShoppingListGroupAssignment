const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// WHERE WE PUT OUR ROUTES


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
  

// END OF THE ROUTES
module.exports = router;
