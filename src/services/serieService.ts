import type { Serie } from "../types";

export async function fetchSeries(): Promise<Serie[]> {
  const res = await fetch("/series.json");
  if (!res.ok) throw new Error("Failed to fetch series");
  return res.json();
}

export async function fetchSerieById(id: string): Promise<Serie | undefined> {
  const series = await fetchSeries();
  return series.find((c) => c.id === id);
}
