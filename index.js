require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema/index');
const authResolver = require('./src/graphql/resolvers/auth');
const recordResolver = require('./src/graphql/resolvers/record');
const isAuth = require('./src/middleware/is-auth');

const rootResolver = {
  ...authResolver,
  ...recordResolver
};

const app = express();

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  }),
);

app.listen(5000, () => console.log('Server is running on port 5000'));
