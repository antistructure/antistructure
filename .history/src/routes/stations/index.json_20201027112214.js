import stations from './_stations';


export function get(req, res) {
  console.log(stations);

  res.end(JSON.stringify(stations));
}
