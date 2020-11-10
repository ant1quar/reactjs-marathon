type PokemonAbilities =
  | 'overgrow'
  | 'chlorophyll'
  | 'blaze'
  | 'solar-power'
  | 'shield-dust'
  | 'run-away'
  | 'torrent'
  | 'rain-dish';

type PokemonType = 'grass' | 'poison' | 'bug' | 'water' | 'fire' | 'flying';

interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}
export interface Pokemon {
  nameClean: string;
  abilities: PokemonAbilities[];
  stats: PokemonStats;
  types: PokemonType[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}
