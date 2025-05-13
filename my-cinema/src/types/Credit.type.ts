export interface Credits {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface Crews {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

export interface CreditResponse {
    id: number;
    cast: Credits[];
    crew: Crews[];
}

export type Credit = Pick<
    Credits,
    "id" | "name" | "original_name" | "profile_path"
>;
export type Crew = Pick<Crews, "id" | "name" | "job" | "profile_path">;
