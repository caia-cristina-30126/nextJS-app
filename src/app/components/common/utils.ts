export async function getAllEntities<T>(endpointAPI: string): Promise<T[]> {
  const response = await fetch(endpointAPI);
  return response.json() as Promise<T[]>;
}
