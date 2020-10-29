import { dbClient, q } from '../../database/client';
import fetch from 'node-fetch';

const stations = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))));

const stationsgql = async () =>
  fetch(`https://graphql.fauna.com/graphql`, {
    headers: {
      'authorization': 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si',
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

export default stations;
