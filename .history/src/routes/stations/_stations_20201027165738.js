import { dbClient, q } from '../../database/client';
import { filter } from 'rxjs/operators';


export let stations;

const datasource = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))))
  .then(res => res.data.map(station => {
    return { stations } = JSON.stringify({
      id: station.id,
      name: station.data.name,
      identifier: station.data.identifier,
      description: station.data.description,
      timestamp: new Date(station.ts).toString()
    });
  }));


// const allStations = dbClient.query(
//   q.Map(
//     q.Paginate(q.Match(q.Index('stations'))),
//     q.Lambda(x => q.Get(x))
//   )
// );

