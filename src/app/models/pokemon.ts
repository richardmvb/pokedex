/**
 * Interface para tipar os dados de pokém pós map.
 * O retorno da API é muito extenso e traz muito coisa que não aproveito. Então
 * mapeio e deixo só esses
 */
 export interface Pokemon {
  height: number;
  id: number;
  name: string;
  sprites: {
    front: string;
    official: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  weight: number;
  base_experience: number;
  abilities: {
    ability: {
      name: string;
    }
  }
  moves: {
    name: string;
  }
}
