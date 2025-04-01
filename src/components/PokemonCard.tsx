import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { typeStyles } from "@/utils/pokemonTypeStyles";

interface PokemonCardProps {
  pokemon: Pokemon;
  index: number;
}

function PokemonCard({ pokemon, index }: PokemonCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const imageUrl =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.other?.dream_world?.front_default ||
    pokemon.sprites.front_default;

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div
      className={`group min-w-[340px] max-w-[400px] bg-[#f5f5f5] mx-auto rounded-tr-xl rounded-bl-xl hover:scale-105 duration-300 mt-2 ${
        isLoading ? "opacity-75" : ""
      }`}>
      <div>
        <Link
          href={`/pokemon/${pokemon.id}`}
          onClick={handleClick}
          className="block">
          <div className="relative h-56 p-6">
            <div className="relative h-full">
              <Image
                src={imageUrl}
                alt={pokemon.name}
                fill
                className="object-contain group-hover:scale-105 drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-300"
                priority={index < 6}
              />
            </div>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>

          <div className="p-6 relative bg-gradient-to-b from-white to-gray-50">
            <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
              #{String(pokemon.id).padStart(3, "0")}
            </div>

            <h2 className="text-3xl font-bold capitalize mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center relative z-10">
              {pokemon.name}
            </h2>

            <div className="flex gap-2 justify-center relative z-10">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`px-5 py-2  text-sm font-bold ${
                    typeStyles[type.type.name].background
                  } ${
                    typeStyles[type.type.name].text
                  } shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider`}>
                  <span></span>
                  {type.type.name}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PokemonCard;
