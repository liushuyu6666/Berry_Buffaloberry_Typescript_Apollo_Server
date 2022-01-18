import { GraphqlContext } from '../context';
import getBooksView, { GetBooksSuccess } from '../utils/getBooksView';

export default async function (
  graphqlContext: GraphqlContext
): Promise<GetBooksSuccess> {
  const { dbOps } = graphqlContext;
  console.log(`dbOps is dbOps`);
  const books = await dbOps(async (db) => {
    console.log(`db is ${db}`);
    return getBooksView({ db }).catch(() => undefined);
  });

  if (!books) {
    throw new Error('getBooksView found nothing');
  }
  return books;
}
