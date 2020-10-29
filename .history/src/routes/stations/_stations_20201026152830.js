import faunadb, { query as q } from 'faunadb';

const dbClient = new faunadb.Client({ secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' });

const stations = dbClient.query(
  q.Map(
    q.Paginate(q.Match(q.Index('stations'))),
    q.Lambda(x => q.Get(x))
  )
)
.then(response => {
  console.log( `Station refs: ${response.data}`);

  if (response.data.length === 0) {
    console.log(`No stations were found or none exist.`);
  }
  else if (response.data.length === 1) {
    console.log(`1 station was found.`);
  }
  else {
    console.log(`${response.data.length} stations were found.`)
  }
  
  return response.data;
})
.catch(error => console.log(error));

export default stations;
