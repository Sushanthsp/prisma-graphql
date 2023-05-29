module.exports = `
  type Record {
    id: ID!
    amount: Float!
    type: String!
    date: String!
    notes: String
  }

  input RecordInput {
    amount: Float!
    type: String!
    date: String!
    notes: String
  }

  type Query {
    getRecords: [Record!]!
  }    
  
  extend type Mutation {
    createRecord(recordInput: RecordInput): Record!
    updateRecord(recordId: ID!, recordInput: RecordInput): Record!
    deleteRecord(recordId: ID!): Record!
  }
`;
