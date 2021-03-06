import { dbClient, q } from '../../database/client';
import { filter } from 'rxjs/operators';


const stations = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))))
  .then(res => res.data.map(station => {
    console.log(JSON.stringify({
      id: station.id,
      name: station.data.name,
      identifier: station.data.identifier,
      description: station.data.description,
      timestamp: new Date(station.ts)
    }));
  })
  .catch(error => console.log(error)));


// const allStations = dbClient.query(
//   q.Map(
//     q.Paginate(q.Match(q.Index('stations'))),
//     q.Lambda(x => q.Get(x))
//   )
// );

export default stations;
