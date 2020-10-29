import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Station {
    name: String!
  }

  input StationInput {
    name: String!
  }

  type StationPage {
    data: [Station]!
    after: String
    before: String
  }

  type User {
    name: String!
    email: String!
  }

  type Post {
    id: ID!
    title: String!
    slug: String!
    html: String!
    isFeatured: Boolean!
    author: User!
    isDeleted: Boolean!
  }

  input UserInput {
    name: String!
    email: String!
  }

  type UserPage {
    data: [User]!
    after: String
    before: String
  }

  type Query {
    users(
      _size: Int
      _cursor: String
    ): UserPage!
    findPostByID(id: ID!): Post
    findUserByID(id: ID!): User
    findStationByID(id: ID!): Station
    me: User!
    stations(
      _size: Int
      _cursor: String
    ): StationPage!
  }
`;

const resolvers = {
  Query: { }
};

export const startGraphQLServer = async (): Promise<any> => new ApolloServer({
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    req.headers.authorization(`Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si`)
  }
});
