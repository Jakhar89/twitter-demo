const express = require('express');
var tasks = require('./routes/tasks');

const app = express();
app.use('/api', tasks);

const port = 5000;



app.listen(port, () => `Server running on port ${port}`);