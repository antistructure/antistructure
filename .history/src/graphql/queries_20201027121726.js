import gql from 'graphql-tag';

export const ALL_STATIONS = gql`
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
