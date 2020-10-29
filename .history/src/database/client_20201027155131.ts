import faunadb, { query as q } from 'faunadb';

const dbClient = new faunadb.Client({ 
  secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
});

export { dbClient, q}
