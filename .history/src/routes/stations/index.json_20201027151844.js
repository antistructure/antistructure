import allStations from './_stations';

const contents = JSON.stringify(
  allStations.then(res => res.data.map(station => {
    return {
      name: station.data.name,
      identifier: station.data.identifier,
      description: station.data.description
    };
  }))
);

export function get(req, res, next) {
  console.log(contents);
}