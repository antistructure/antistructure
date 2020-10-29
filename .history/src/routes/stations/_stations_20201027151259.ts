import faunadb, { query as q } from 'faunadb';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

const stations: Promise<[]> = dbClient.query(
  q.Map(
    q.Paginate(q.Match(q.Index('stations'))), 
    q.Lambda(x => q.Get(x))
  )
)
.then(res => res.data.forEach(station => {
  return JSON.stringify({
    name: station.data.name,
    identifier: station.data.identifier,
    description: station.data.description
  });
}));

export default stations;
