import browse from './_browse';

const contents = JSON.stringify(browse.then(res => { return { res } })
);

export function get(req, res, next) {
  res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
