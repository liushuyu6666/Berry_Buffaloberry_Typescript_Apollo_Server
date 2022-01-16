import { Book } from "../models/graphql/generated/codegen";

// const Name = 'getBooks';

export interface GetBooksSuccess {
  __typename: 'GetBooksSuccess';
  books: Book[];
}

export default async function (): Promise<GetBooksSuccess> {
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
  return {
    __typename: 'GetBooksSuccess',
    books
  }
}