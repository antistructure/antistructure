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

class AntistructureStationsApi extends GraphQLDatasource {
  baseUrl = 'https://graphql.fauna.com';

  async getGraphQLAPI() {
    const response = await this.query(STATIONS);

    return response.data.stations;
  }
}

export default AntistructureStationsApi;
