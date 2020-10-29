import faunadb, { query as q } from 'faunadb';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

// const stations: Promise<[]> = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))))
//   .then(result => result.data.map(station => {
//     return JSON.stringify({
//       id: station.ref.id,
//       name: station.data.name,
//       identifier: station.data.identifier,
//       description: station.data.description,
//       ts: new Date(station.ts).toString()
//     });
//   }));

const STATIONS_QUERY: Promise<[]> = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))));

const stations = from(STATIONS_QUERY).subscribe(res => {
  res.data.map(station => {
    return JSON.stringify({
      id: station.ref.id,
      name: station.data.name,
      identifier: station.data.identifier,
      description: station.data.description,
      ts: new Date(station.ts).toString()
    });
  })
});

console.log(stations);

export default { stations };
