import faunadb, { query as q } from 'faunadb';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

const STATIONS_QUERY: Promise<[]> = dbClient.query(
  q.Map(
    q.Paginate(q.Match(q.Index('stations'))), 
    q.Lambda(x => q.Get(x))
  )
);

export let stations: [];

STATIONS_QUERY.then(result => result.data.map(station => {
  console.log(`data: ${station.data.name}, ${station.data.identifier}, ${station.data.description}`);
  return JSON.stringify({
    name: station.data.name,
    identifier: station.data.identifier,
    description: station.data.description
  });
}));

// const SQ_RESULTS = from(STATIONS_QUERY).subscribe(response => {
//   console.log(JSON.stringify({ ...response }))
//   stations = response.data;
// });

// export default stations;
