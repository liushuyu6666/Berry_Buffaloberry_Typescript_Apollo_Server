import { Collection, Db } from "mongodb";
import { BookObject } from "./Book";

export interface WrappedDB {
  readonly mutable: {
    readonly Book: Collection<BookObject>;
  }
}

export default function (DB: Db): WrappedDB {
  return {
    mutable: {
      Book: DB.collection('Book')
    }
  }
}