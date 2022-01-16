import { QueryResolvers, Resolvers } from "./models/graphql/generated/codegen";
import getBooksResolver from "./resolvers/getBooksResolver";

const Query: QueryResolvers = {
  getBooks: getBooksResolver
}

const resolvers: Resolvers = {
  Query
}

export default resolvers;