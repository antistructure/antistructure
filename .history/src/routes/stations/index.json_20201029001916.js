import { dbClient, q } from '../../database/client';

const stations = dbClient.query(q.Map(q.Paginate(q.Match(q.Index('stations'))), q.Lambda(x => q.Get(x))));

export function get(req, res, next) {
  res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(stations);
}
