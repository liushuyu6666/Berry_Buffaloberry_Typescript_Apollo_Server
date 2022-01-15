import { makeExecutableSchema } from "@graphql-tools/schema";
import books from "./books";


const typeDefs = new Set([
	books
]);

export default makeExecutableSchema({typeDefs: [...typeDefs]});