import faunadb, { query as q } from 'faunadb';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

export const stations: Promise<[]> = dbClient.query(
  q.Map(
    q.Paginate(q.Match(q.Index('stations'))), 
    q.Lambda(x => q.Get(x))
  )
)
.then(res => res.data.forEach(station => {
  console.log(JSON.stringify({
    name: station.data.name,
    identifier: station.data.identifier,
    description: station.data.description
  }));
}));

// export const stations = from(datasource).subscribe(res => {
//   const stationData = res.data;
//   const eachStation = stationData.pipe(map(station => {
//     return JSON.stringify({
//       name: station.data.name,
//       identifier: station.data.identifier,
//       description: station.data.description
//     });
//   }));
//   return eachStation;
// });

console.log(stations);

// STATIONS_QUERY.then(result => result.data.map(station => {
//   return console.log(JSON.stringify({
//     name: station.data.name,
//     identifier: station.data.identifier,
//     description: station.data.description
//   }));
// }));

// const SQ_RESULTS = from(STATIONS_QUERY).subscribe(response => {
//   console.log(JSON.stringify({ ...response }))
//   stations = response.data;
// });

// export default stations;