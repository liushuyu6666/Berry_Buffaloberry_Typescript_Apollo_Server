import { Book } from '../models/graphql/generated/codegen';
import { WrappedDB } from '../models/mongodb/wrapDB';

interface Params {
  $project?: Record<string, unknown>;
  db: WrappedDB;
}

export interface GetBooksSuccess {
  __typename: 'GetBooksSuccess';
  books: Book[];
}

export default async function ({
  $project,
  db
}: Params): Promise<GetBooksSuccess> {
  const pipeline: Record<string, unknown>[] = [
    {
      $project: {
        _id: 0,
        id: 'groupBy',
        books: '$$ROOT'
      }
    },
    {
      $group: {
        _id: '$id',
        books: {
          $addToSet: '$books'
        }
      }
    },
    {
      $project: {
        _id: 0
      }
    }
  ];

  if ($project) {
    pipeline.push({ $project });
  }

  const cursor = db.mutable.Book.aggregate<GetBooksSuccess>(pipeline);

  try {
    const ret = await cursor.next();
    if (!ret) {
      throw new Error('cannot find anything match our database');
    }
    if (await cursor.next()) {
      throw new Error('more than 1 entry');
    }
    return ret;
  } finally {
    await cursor.close();
  }
}
