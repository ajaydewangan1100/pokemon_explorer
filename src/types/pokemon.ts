export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    stat: {
      name: string;
    };
    base_stat: number;
  }[];
  sprites: {
    front_default: string;
    other?: {
      "official-artwork"?: {
        front_default: string;
      };
      dream_world?: {
        front_default: string;
      };
    };
  };
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}
