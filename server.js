const express = require('express');
var tasks = require('./routes/tasks');
const graphqlHTTP = require('express-graphql');
const schema = require('./routes/schema');

const app = express();
app.use('/api', tasks);
app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server running on port ${port}`));