import {ApolloServer} from 'apollo-server';
import { addResolversToSchema } from '@graphql-tools/schema';

import schemaWithoutResolver from './models/graphql/schema';


const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];


  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
    },
  };


  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const schema = addResolversToSchema( schemaWithoutResolver, resolvers );
const server = new ApolloServer({schema});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

  
  