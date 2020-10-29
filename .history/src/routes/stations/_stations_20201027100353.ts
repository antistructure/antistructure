import faunadb, { query as q } from 'faunadb';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

// interface Station {
//   name: string,
//   identifier: string,
//   description: string
// }

const stations: Promise<[]> = dbClient.query(
  q.Map(
    q.Paginate(q.Match(q.Index('stations'))), 
    q.Lambda(x => q.Get(x))
  )
)
  .pipe(map(response => response.body);

console.log(stations);

// const stations = 
  // from(STATIONS_QUERY).subscribe(response => console.log(JSON.stringify({ ...response })));

export default stations;
