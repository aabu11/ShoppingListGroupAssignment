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



// END OF THE ROUTES
module.exports = router;