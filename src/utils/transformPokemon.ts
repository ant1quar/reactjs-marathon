import { Pokemon } from '../models/pokemon';

const transformPokemonModel = (p: any): Pokemon => {
  return {
    ...p,
    types: [...p.types],
    abilities: [...p.abilities],
    stats: {
      ...p.stats,
      specialAttack: p.stats['special-attack'],
      specialDefense: p.stats['special-defense'],
    },
    baseExperience: p.base_experience,
    isDefault: p.is_default,
    nameClean: p.name_clean,
  };
};
export default transformPokemonModel;
