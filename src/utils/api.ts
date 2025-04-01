import { Pokemon, PokemonListResponse } from "@/types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(
  offset: number = 0,
  limit: number = 20
): Promise<PokemonListResponse> {
  const response = await fetch(
    `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
  );
  if (!response.ok) throw new Error("Failed to fetch pokemon list");
  return response.json();
}

export async function getPokemonById(id: string): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!response.ok) throw new Error("Failed to fetch pokemon");
  return response.json();
}

export async function getPokemonByName(name: string): Promise<Pokemon | null> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`);

    if (!response.ok) {
      console.error(`Error fetching Pokémon: ${response.statusText}`);
      return null; // Gracefully return null instead of throwing an error
    }

    return await response.json();
  } catch (error) {
    console.error("Network error:", error);
    return null; // Return null if there's a network error
  }
}
