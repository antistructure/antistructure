import stations from './_stations.js';

const contents = JSON.stringify(stations.map(station => {
  return {
    name: station.name
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content': 'application/json'
  });

  res.end(contents);
}
