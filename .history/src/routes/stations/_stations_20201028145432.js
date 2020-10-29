import { dbClient, q } from '../../database/client';
import fetch from 'node-fetch';

const stations = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))));

const stationsgql = async () => {
  const response = await fetch(`https://graphql.fauna.com/graphql`, {
    headers: {
      'authorization': 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si',
      'content-type': 'application/json'
    }
  });
  const data = await response.json();

  return { data };
}

stationsgql.then(data => {
  console.log(data);
});

export default stations;
