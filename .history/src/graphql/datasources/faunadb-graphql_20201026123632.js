import { GraphQLDatasource } from 'apollo-datasource-graphql';
import { gql } from 'apollo-server-express';

const STATIONS = gql`
  query allStations {
    stations(_size: 10) {
      data {
        _id
        name
        _ts
      }
    }
  }
`;
