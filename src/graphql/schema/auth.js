module.exports = `
  type AuthData {
    userId: ID! 
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    email: String!
    password: String!
  }

  extend type Mutation {
    signup(userInput: UserInput): User!
    login(email: String!, password: String!): AuthData!
  }
`;
