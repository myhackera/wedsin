const express = require('express');
const app = express();

// Database Config
const connection = require('./config/db.config.js');
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

// Routes Config
app.use(express.json({
    extended: false
})) //parse incoming request body in JSON format.

const port =  process.env.port || 5000;

app.use('/', require('./routes/query'));

app.listen(port, console.log(`Server is running on port ${port}`));


