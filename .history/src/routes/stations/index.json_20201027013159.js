import stations from './_stations';

export function get(req, res) {
  stations.then(response => {
    return response.data;
  })

  res.end(JSON.stringify(stations));
}
