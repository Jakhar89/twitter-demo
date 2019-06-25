const express = require('express');
var tasks = require('./routes/tasks');
const graphqlHTTP = require('express-graphql');
const schema = require('./routes/schema');
var path = require('path');

const app = express();
app.use('/api', tasks);
app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );
  app.use(express.static('public'));
  app.get('*', function(req, res) {
    res.sendfile(path.resolve(__dirname,'public','index.html'));
  })

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server running on port ${port}`));