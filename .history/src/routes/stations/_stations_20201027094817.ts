import faunadb, { query as q } from 'faunadb';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

// interface Station {
//   name: string,
//   identifier: string,
//   description: string
// }

const STATIONS_QUERY: Promise<[]> = dbClient.query(
  q.Map(
    q.Paginate(q.Match(q.Index('stations'))), 
    q.Lambda(x => q.Get(x))
  )
);

const STATIONS_RESOLVER = from(STATIONS_QUERY).subscribe(response => JSON.stringify({ ...response }));

const stations = STATIONS_RESOLVER.map(station => ({ ...station }))

export default stations;
