import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

export default function PokemonImage({ pokemon }: { pokemon: Pokemon }) {
  const imageUrl =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.other?.dream_world?.front_default ||
    pokemon.sprites.front_default;

  return (
    <div className="sticky bg-gradient-to-b from-blue-50 to-white  p-8 h-full min-h-56 sm:min-h-72 ">
      <Image
        src={imageUrl}
        alt={pokemon.name}
        fill
        className="object-contain drop-shadow-2xl "
        priority
      />
    </div>
  );
}
