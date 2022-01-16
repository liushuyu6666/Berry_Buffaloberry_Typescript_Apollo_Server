import getBooksView, { GetBooksSuccess } from "../utils/getBooksView";

export default async function (): Promise<GetBooksSuccess> {
  const books = await getBooksView();
  return books;
}