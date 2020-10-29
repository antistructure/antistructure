import { dbClient, q } from '../../database/client';
import { filter } from 'rxjs/operators';


export let stations;

const stations = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))));
