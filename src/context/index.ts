// import getSecrets from "./getSecrets";
import createDBOperations, { MongoCallbackFn } from "./mongodb";

export interface Context {
  readonly dbOps: <T>(callback: MongoCallbackFn<T>) => Promise<T>;
  readonly now: Date;
}

export async function createContext(): Promise<Context> {
  const now = new Date();
  // const secrets = await getSecrets();

  // console.log(`secrets is ${JSON.stringify(secrets.MONGO_URL)}`);

  // const {
  //   MONGO_URL
  // } = secrets;

  return {
    dbOps: createDBOperations(),
    now
  }
}

export interface GraphqlContext extends Context {}

export async function createGraphqlContext(): Promise<GraphqlContext>{
  const context = await createContext();
  return {
    ...context
  }
}