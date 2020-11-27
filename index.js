let express = require("express");
let app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(port, () => {
    console.log('Running FirstRest on Port ' + port);
})

let apiRoutes = require('./routes');
app.use('/api', apiRoutes)