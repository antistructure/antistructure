import faunadb, { query as q } from 'faunadb';
import { from } from 'rxjs';

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

const stations = from(STATIONS_QUERY).subscribe(response => console.log({ response }));

export default stations;
