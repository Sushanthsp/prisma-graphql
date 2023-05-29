const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const baseTypeDefs = require('./base');
const authTypeDefs = require('./auth');
const recordTypeDefs = require('./record');

const typeDefs = mergeTypeDefs([baseTypeDefs, authTypeDefs, recordTypeDefs]);

const schema = makeExecutableSchema({ typeDefs });

module.exports = schema;
