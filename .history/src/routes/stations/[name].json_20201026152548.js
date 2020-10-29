import stations from './_stations.js';

const lookup = new Map();

stations.map(station => lookup.set(station.name, JSON.stringify(station)));

export function get(req, res, next) {
  const { name } = req.params;

  if (lookup.has(name)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(lookup.get(name));
  }
  else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `No stations were found`
    }));
  }
}