import { typeStyles } from "@/utils/pokemonTypeStyles";

export default function PokemonTypes({
  types,
}: {
  types: { type: { name: string } }[];
}) {
  return (
    <div className="flex gap-3 mb-8">
      {types.map((type) => (
        <span
          key={type.type.name}
          className={`px-6 py-3 font-bold ${
            typeStyles[type.type.name].background
          } ${
            typeStyles[type.type.name].text
          } shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider`}>
          {type.type.name}
        </span>
      ))}
    </div>
  );
}
