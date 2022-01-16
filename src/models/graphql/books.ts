import gql from 'graphql-tag'

export default gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    getBooks: [Book!]!
  }
`