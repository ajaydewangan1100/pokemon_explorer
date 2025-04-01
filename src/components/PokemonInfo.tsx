export default function PokemonInfo({
  height,
  weight,
}: {
  height: number;
  weight: number;
}) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
        <h2 className="font-semibold text-gray-600 mb-2">Height</h2>
        <p className="text-3xl font-bold text-gray-800">{height / 10}m</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
        <h2 className="font-semibold text-gray-600 mb-2">Weight</h2>
        <p className="text-3xl font-bold text-gray-800">{weight / 10}kg</p>
      </div>
    </div>
  );
}
