const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shoppingRouter = require('./routes/route.js');
const clearResetRouter = require('./routes/route2.js')
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/shopping', shoppingRouter);
app.use('/resetandclear', clearResetRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});