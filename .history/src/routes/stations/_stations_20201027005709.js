import faunadb, { query as q } from 'faunadb';
import { from } from 'rxjs';

const dbClient = new faunadb.Client({ secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' });

const stations = from(
  dbClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('stations'))), 
      q.Lambda(x => q.Get(x)))
    )
  )
  .subscribe(val => val.data.map(station => {
    return {
      name: station.data.name,
      identifier: station.data.identifier,
      description: station.data.description
    }
  }));

  console.log(stations);

export default stations;
