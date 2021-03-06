export interface movieCreationDTO{
    title: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    gendersId: number[];
    movieTheatersIds: number[];
}

export interface movieDTO{
    title: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
}