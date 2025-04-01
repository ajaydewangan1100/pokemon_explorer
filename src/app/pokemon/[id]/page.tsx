import PokemonAbilities from "@/components/PokemonAbilities";
import PokemonImage from "@/components/PokemonImage";
import PokemonInfo from "@/components/PokemonInfo";
import PokemonMoves from "@/components/PokemonMoves";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PokemonStats from "@/components/PokemonStats";
import PokemonTypes from "@/components/PokemonTypes";
import { getPokemonById } from "@/utils/api";
import Link from "next/link";

type Params = {
  id: string;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default async function PokemonPage({ params }: { params: Params }) {
  try {
    const pokemon = await getPokemonById(params.id);

    if (!pokemon) {
      return <PokemonNotFound />;
    }

    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
        <BackgroundElements />

        <div className="container mx-auto px-2 py-4 sm:px-12 sm:py-12 relative">
          <BackButton />

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-white mx-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="shadow-md rounded-lg overflow-hidden">
                  <PokemonImage pokemon={pokemon} />
                </div>
                <h1 className="text-5xl font-bold capitalize mb-6 text-gray-800 my-3">
                  {pokemon.name}
                </h1>
                <PokemonTypes types={pokemon.types} />
                <PokemonMoves moves={pokemon.moves} />
              </div>
              <div>
                <PokemonInfo height={pokemon.height} weight={pokemon.weight} />
                <PokemonAbilities abilities={pokemon.abilities} />
                <PokemonStats stats={pokemon.stats} />
              </div>
            </div>
          </div>
        </div>

        <ScrollToTopButton />
      </main>
    );
  } catch (error) {
    console.error("Error loading Pokemon:", error);
    return <PokemonNotFound />;
  }
}

function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
    </div>
  );
}

function BackButton() {
  return (
    <div className="mb-4">
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
        <span>←</span> <span className="ml-2">Back to Home</span>
      </Link>
    </div>
  );
}

function PokemonNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Pokémon not found
        </h1>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
