import { QueryResolvers } from "../models/graphql/generated/codegen";
import getBooks from "../services/getBooks";

const NAME = 'getBooks';

const getBooksResolver: QueryResolvers[typeof NAME] = async () => {
  const ret = await getBooks();
  return ret.books;
};

export default getBooksResolver;