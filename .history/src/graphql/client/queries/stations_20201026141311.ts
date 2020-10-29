import { gql } from '@apollo/client';

export const STATIONS = gql`
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
