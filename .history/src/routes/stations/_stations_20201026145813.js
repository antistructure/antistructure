import faunadb from 'faunadb';

const { Get, Index, Lambda, Match, Paginate } = faunadb.query;
const dbClient = new faunadb.Client({ secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' });

const stations = dbClient.query(
  Map(
    Paginate(Match(Index('stations'))),
    Lambda(x => Get(x))
  )
);

export default stations;
