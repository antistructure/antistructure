import { dbClient, q } from '../../database/client';

export const browse = dbClient.query(
  q.Map(
    q.Paginate(q.Match(q.Index('stations'))),
    q.Lambda(x => q.Get(x))
  )
);
