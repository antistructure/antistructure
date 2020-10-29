import stations from './_stations';

const contents = JSON.stringify(stations.then(result => {
  result.data.map(station => {
    console.log(station);
    return console.log({
      id: station.ref.id,
      name: station.data.name,
      identifier: station.data.identifier,
      description: station.data.description,
      timestamp: new Date(station.ts).toString()
    });
  });
}));

export function get(req, res, next) {
  res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
