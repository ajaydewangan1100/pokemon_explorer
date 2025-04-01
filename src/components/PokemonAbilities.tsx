export default function PokemonAbilities({ abilities }: { abilities: { ability: { name: string } }[] }) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Abilities</h2>
        <div className="flex flex-wrap gap-3">
          {abilities.map((ability) => (
            <span key={ability.ability.name} className="px-6 py-3 bg-blue-50 text-blue-600 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              {ability.ability.name}
            </span>
          ))}
        </div>
      </div>
    );
  }
  