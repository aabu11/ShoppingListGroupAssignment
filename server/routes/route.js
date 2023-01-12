const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// WHERE WE PUT OUR ROUTES
router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM "shoppingList" ORDER BY "name" ASC;`;
    pool.query(sqlQuery)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlQuery}`, error);
            res.sendStatus(500); // Good server always responds
        })
})



// END OF THE ROUTES
module.exports = router;