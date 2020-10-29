import stations from './_stations';

const contents = JSON.stringify(stations.map(station => {
	return {
    id: station.id,
		name: station.name,
    identifier: station.identifier,
    description: station.description,
    timestamp: station.ts
	};
}));


export function get(req, res) {
  console.log(contents);

  res.end(JSON.stringify(contents));
}
