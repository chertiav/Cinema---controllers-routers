require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();
const movieRoters = require('./routers/movieRouters')
const actorRouters = require('./routers/actorRouters')
const directorRouters = require('./routers/directorRouters')
const studioRouters = require('./routers/studioRouters')

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', movieRoters);
app.use('/api', actorRouters);
app.use('/api', directorRouters);
app.use('/api', studioRouters);


app.listen(port, () => console.log(`Server is started at ${port}`))