import { QueryResolvers } from "../models/graphql/generated/codegen";
import getBooks from "../services/getBooks";

const NAME = 'getBooks';

const getBooksResolver: QueryResolvers[typeof NAME] = async (
  _,
  args,
  context
) => {
  if (args) {
    console.log('in resolver');
  }
  const ret = await getBooks(context);
  return ret.books;
};

export default getBooksResolver;