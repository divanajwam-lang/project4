const jenisKelaminTypeDefs = require("./jenis_kelamin/schema");

const baseTypeDefs = `#graphql
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

module.exports = [baseTypeDefs, jenisKelaminTypeDefs];