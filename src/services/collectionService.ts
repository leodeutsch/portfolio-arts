import type { Collection } from "../types";

export async function fetchCollections(): Promise<Collection[]> {
  const res = await fetch("/collections.json");
  if (!res.ok) throw new Error("Failed to fetch collections");
  return res.json();
}

export async function fetchCollectionById(
  id: string
): Promise<Collection | undefined> {
  const collections = await fetchCollections();
  return collections.find((c) => c.id === id);
}
