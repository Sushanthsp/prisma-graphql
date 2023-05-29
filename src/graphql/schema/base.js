module.exports = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type User {
    id: ID!
    email: String!
    password: String!
  }
`;
