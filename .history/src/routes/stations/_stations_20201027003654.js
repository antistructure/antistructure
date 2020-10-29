import faunadb, { query as q } from 'faunadb';
import { from } from 'rxjs';

const dbClient = new faunadb.Client({ secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' });

const stations = from(
  dbClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('stations'))), 
      q.Lambda(x => q.Get(x)))
    )
  )
  .subscribe(data => console.log(data));

export default stations;
