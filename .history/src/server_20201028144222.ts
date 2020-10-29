import sirv from 'sirv';
import express, { Express } from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import { apolloServer } from './graphql/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const startServer = async (graphqlPath: string): Promise<Express> => {
	const app = express();
	const graphqlServer = await apolloServer();

	graphqlServer.applyMiddleware({ app, path: graphqlPath });

	app.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	);

	return app;
};

startServer('/graphql').then(app => 
	app.listen(PORT, (err?: Error): void => {
		if (err) {
			console.log('error', err)
		}
	})
);
