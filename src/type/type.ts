export interface IGenre {
    id: number
    name: string
}

export interface IFilm {
    id: number 
    name: string
    genres: string[]
    date: string
    description: string
    image: string
    time: number
    feedback: string[]
}
