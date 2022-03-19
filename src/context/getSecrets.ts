export const KEY_BASE = [
  'MONGO_URL'
] as const;

type Keys = typeof KEY_BASE[number];

export type Secrets = Record<Keys, string>;

// TODO: 1, do we need to create a secret manager like AWS.SecretManager to
// TODO: 2, more secrets
export default async function(): Promise<Secrets> {
  // type OptionalSecrets = Partial<Secrets>;
  const secrets = KEY_BASE.reduce<Secrets>((acc, key) => {
    const temp = process.env[key];
    if(temp) {
      acc[key] = temp;
    }
    return acc;
  }, {} as Secrets);

  if (!secrets) {
    throw new Error('secrets errors')
  }

  return secrets;
}