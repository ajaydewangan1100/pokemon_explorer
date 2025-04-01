"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import PokemonCard from "@/components/PokemonCard";
import SkeletonCard from "@/components/SkeletonCard";
import { Pokemon } from "@/types/pokemon";
import { getPokemonList, getPokemonById, getPokemonByName } from "@/utils/api";

const ITEMS_PER_PAGE = 18;
const TOTAL_POKEMON = 1008;

interface PokemonGridProps {
  initialPokemons: Pokemon[];
}

function PokemonGrid({ initialPokemons }: PokemonGridProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>(initialPokemons);
  const [extraFetchedPokemons, setExtraFetchedPokemons] = useState<Pokemon[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(ITEMS_PER_PAGE);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchPokemons = useCallback(async (currentOffset: number) => {
    try {
      setLoading(true);
      const response = await getPokemonList(currentOffset, ITEMS_PER_PAGE);

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

      setPokemons((prev) => [...prev, ...pokemonDetails]);

      const nextOffset = currentOffset + ITEMS_PER_PAGE;
      setHasMore(nextOffset < TOTAL_POKEMON);
      setOffset(nextOffset);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadMore = () => {
    if (searchTerm) {
      setSearchTerm("");
      return;
    }

    if (!loading && hasMore) {
      fetchPokemons(offset);
    }
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setExtraFetchedPokemons([]);
    if (searchTerm.trim() === "") return;

    (async () => {
      try {
        const data = await getPokemonByName(searchTerm);
        if (data) {
          setExtraFetchedPokemons([data]);
        }
      } catch (error) {
        console.error("Error fetching Pokemon by name:", error);
      }
    })();
  }, [searchTerm]);

  return (
    <div>
      <div className="relative max-w-md mx-auto mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokemon..."
          className="w-full px-6 py-4 text-lg rounded-full border-4 border-white bg-white/90 shadow-lg focus:outline-none focus:ring-3 focus:ring-blue-500/50 transition-all duration-300 placeholder-gray-400 text-gray-700 font-semibold"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-4">
        {extraFetchedPokemons.length > 0 &&
          extraFetchedPokemons.map((pokemon, index) => (
            <PokemonCard
              key={`extra-${pokemon.id}`}
              pokemon={pokemon}
              index={index + filteredPokemons.length}
            />
          ))}
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard
            key={`regular-${pokemon.id}`}
            pokemon={pokemon}
            index={index}
          />
        ))}
        {loading &&
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))}
      </div>

      {isClient && !searchTerm && hasMore && (
        <div className="flex justify-center mt-12 mb-8">
          <button
            key="load-more-button"
            onClick={handleLoadMore}
            disabled={loading}
            className={`px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-xl hover:scale-105"
            }`}>
            {loading ? (
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Loading...
              </div>
            ) : (
              "Load More Pokemon"
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default PokemonGrid;
