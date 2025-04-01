"use client";

import { motion } from "framer-motion";

export default function PokemonMoves({
  moves,
}: {
  moves: { move: { name: string } }[];
}) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Moves</h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 py-2 px-2"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
          {moves.concat(moves).map((move, index) => (
            <p
              key={index}
              className="p-2 rounded-md text-gray-700  font-bold bg-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 uppercase tracking-wider border whitespace-nowrap flex items-center">
              {move.move.name}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
