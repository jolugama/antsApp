export interface Ant {
    id: number;
    taxonomy: Taxonomy; // familia, especie, sinónimo
    identification: Identification; // clasificados por reina, obrera, soldado
    confusions?: Confusions; // descripción y especies
    matingFlight?: number[]; // array de meses (en números)
    habitat?: Habitat; // array zona (palabras claves),  array suelo del hormiguero y descripción
    distribution: Distribution; // continente, pais, comunidad autónoma?
    biology: Biology; // si es monogina, horario fundación, tamaño colonia, hibernación, nutrición, descripción
    keepingLevel?: KeepingLevel; // nivel de peligrosidad
    airhumidity?: Airhumidity; // humedad ambiental en nido y fuera
    temperature?: Temperature; // temperatura en nido y fuera
    images: string[]; // array de imágenes
}


// forma: para reina,  obrera, soldado
export interface Shape {
    size: number[];
    colour: string[];
    body?: Body;
}



export interface Temperature {
    nest: number[];
    arena: (null | number)[];
}

export interface Airhumidity {
    nest: number[];
    arena: number[];
}

export interface KeepingLevel {
    level: number;
    obj?: string[];
}

export interface Biology {
    queen: string[];
    founding?: string;
    colonySize: string[];
    hibernation: number[];
    nutrition: string[];
    description: string;
}

export interface Distribution {
    continent: string[];
    country: string[];
    ca?: string[];
}

export interface Habitat {
    zone: string[];
    nestForm: string[];
    text: string;
}

export interface Confusions {
    text?: string;
    species?: any[];
}

export interface Identification {
    morph: string; // poli o mono
    queen: Shape;
    worker: Shape;
    soldier: Shape;
    male: Shape;
}



export interface Body {
    antenna?: any[];
    eye?: any[];
    head?: any[];
    leg?: any[];
    thorax?: any[];
    gaster?: any[];
    hair?: string;
}


export interface Taxonomy {
    subfamily: string;
    tribe: string;
    specie: string;
    Synonyms: string;
}
