
export interface Context {
  readonly now: Date;
}

export async function createContext(): Promise<Context> {
  const now = new Date();
  return {
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