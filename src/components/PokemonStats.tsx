"use client";

import { motion } from "framer-motion";

const MAX_STAT_VALUE = 255; 

export default function PokemonStats({
  stats,
}: {
  stats: { stat: { name: string }; base_stat: number }[];
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
        <span className="mr-2">⚡</span> Base Stats{" "}
        <span className="ml-2">⚡</span>
      </h2>
      {stats.map((stat) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={stat.stat.name}
          className="flex items-center space-x-3 bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300">
          <span className="text-xl w-8 text-center">
            {stat.stat.name === "hp"
              ? "❤️"
              : stat.stat.name === "attack"
              ? "⚔️"
              : stat.stat.name === "defense"
              ? "🛡️"
              : stat.stat.name === "special-attack"
              ? "✨"
              : stat.stat.name === "special-defense"
              ? "🌟"
              : "⚡"}
          </span>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-gray-700 capitalize">
                {stat.stat.name === "hp"
                  ? "Health"
                  : stat.stat.name === "attack"
                  ? "Attack"
                  : stat.stat.name === "defense"
                  ? "Defense"
                  : stat.stat.name === "special-attack"
                  ? "Special Attack"
                  : stat.stat.name === "special-defense"
                  ? "Special Defense"
                  : "Speed"}
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-bold text-gray-800">
                {stat.base_stat}
              </motion.span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${(stat.base_stat / MAX_STAT_VALUE) * 100}%`,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className={`h-full rounded-full ${
                  stat.base_stat > 150
                    ? "bg-gradient-to-r from-red-500 to-pink-500"
                    : stat.base_stat > 100
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gradient-to-r from-green-500 to-emerald-500"
                }`}
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>0</span>
              <span>{MAX_STAT_VALUE}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
