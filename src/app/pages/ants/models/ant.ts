export interface Ant {
    id: number;
    images: string[]; // array de imágenes
    taxonomy: Taxonomy; // familia, especie, sinónimo
    identification: Identification; // clasificados por reina, obrera, soldado. colores y tamaños
    confusions?: Confusions; // descripción y especies
    habitat?: Habitat; // array zona (palabras claves),  array suelo del hormiguero y descripción
    distribution: Distribution; // continente, pais, comunidad autónoma?
    biology: Biology; // si es monogina, horario fundación, tamaño colonia, hibernación, nutrición, descripción
    keepingLevel?: KeepingLevel; // nivel de peligrosidad
    airhumidity?: Airhumidity; // humedad ambiental en nido y fuera
    temperature?: Temperature; // temperatura en nido y fuera
}


// forma: para reina,  obrera, soldado
export interface Shape {
    text?: string;
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
    text?: string;
}

export interface Biology {
    colonyType: string[];
    colonySize: string[];
    hibernation: number[];
    matingFlight?: number[];
    nutrition: string[];
    nutrition_text?: string;
    description: string;
}

export interface Distribution {
    continent: string[];
    country: string[];
    ca?: string[];
}

export interface Habitat {
    zone: string[];
    altitude?: number[];
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
    hair?: any[];
}


export interface Taxonomy {
    subfamily: string;
    tribe: string;
    specie: string;
    synonyms: string;
}
