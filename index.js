const express = require('express');
const nationRouter = require('./routes/nationRouter');
const playerRouter = require('./routes/playerRouter');
const app = express();
const port = 5000;

app.use('/nations', nationRouter);
app.use('/players', playerRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
