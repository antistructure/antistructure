import faunadb, { query as q } from 'faunadb';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

const allStations = dbClient.query(
  q.Map(
    q.Paginate(q.Match(q.Index('stations'))),
    q.Lambda(x => q.Get(x))
  )
);

export default allStations;
