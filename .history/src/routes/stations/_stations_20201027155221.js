import { dbClient, q } from '../../database/client';
import { filter } from 'rxjs/operators';


const stations = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))))
 .filter(station => station.data.name === name)
 .filter(station => station.data.identifier === identifier)
 .map(station => station.data.name);

 console.log(stationStream);

// const allStations = dbClient.query(
//   q.Map(
//     q.Paginate(q.Match(q.Index('stations'))),
//     q.Lambda(x => q.Get(x))
//   )
// );

export default allStations;
