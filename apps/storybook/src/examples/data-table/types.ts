export type Pokemon = {
    id: number;
    name: string;
    type1: string; // "Grass";
    type2: string; // "Poison";
    ability1: string; // "Overgrow";
    ability2: string; // "";
    abilityH: string; // "Chlorophyll";
    hp: number;
    attack: number
    defense: number;
    spattack: number;
    spdefense: number;
    speed: number;
    total: number;
    weight: string;
    height: string;
    percentM: string | number; // ???
    percentF: string | number; // ???
};
