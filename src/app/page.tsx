import PokemonGrid from "@/components/PokemonGrid";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { getPokemonList, getPokemonById } from "@/utils/api";
import { Pokemon } from "@/types/pokemon";

const ITEMS_PER_PAGE = 18;

export const revalidate = 3600; // Revalidate - every  hour

async function getInitialPokemons() {
  try {
    const response = await getPokemonList(0, ITEMS_PER_PAGE);

    const pokemonPromises = response.results.map(async (pokemon) => {
      const id = pokemon.url.split("/").slice(-2, -1)[0];
      return getPokemonById(id);
    });

    const results = await Promise.allSettled(pokemonPromises);

    const pokemonDetails = results
      .filter(
        (result): result is PromiseFulfilledResult<Pokemon> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value);

    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching initial pokemons:", error);
    return [];
  }
}

export default async function Home() {
  const initialPokemons = await getInitialPokemons();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] text-center font-[family-name:var(--font-geist-sans)]">
        <div className="container mx-auto px-4 py-8 relative ">
          <div>
            <h1 className="text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Pokemon Explorer
            </h1>
          </div>

          <div>
            <p className="text-xl text-gray-600 mb-6">
              Discover your favorite Pokemon!
            </p>
          </div>
          <PokemonGrid initialPokemons={initialPokemons} />
        </div>
      </div>

      <ScrollToTopButton />
    </main>
  );
}
