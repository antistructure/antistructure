import faunadb, { query as q } from 'faunadb';
import { filter } from 'rxjs/operators';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

const stationStream = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))))
 .filter(station => station.data.name === name)
 .filter(station => station.data.identifier === identifier)
 .map(station => station.data.name);

 console.log(stationStream);

// const allStations = dbClient.query(
//   q.Map(
//     q.Paginate(q.Match(q.Index('stations'))),
//     q.Lambda(x => q.Get(x))
//   )
// );

export default allStations;
