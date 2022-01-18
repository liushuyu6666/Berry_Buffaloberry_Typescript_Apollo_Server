import { MongoClient } from "mongodb";
import wrapDB, { WrappedDB } from "../models/mongodb/wrapDB";

export type MongoCallbackFn<T> = (
  db: WrappedDB,
  client: MongoClient
) => Promise<T>;

type DBOperation = <T>(callback: MongoCallbackFn<T>) => Promise<T>;

export default function createDBOperations(
    // mongoURL: string
  ): DBOperation {
  return async (callback) => {
    console.log('hello');
    const client = await MongoClient.connect('mongodb://localhost:27017/buffalo', {
  
    });
    console.log(`client is ${client}`);
    const db = wrapDB(client.db());
    try {
      return await callback(db, client);
    } finally {
      client.close((e) => {
        if (e) {
          console.error('Failed to close Mongodb', e);
        }
      });
    }
  };
}