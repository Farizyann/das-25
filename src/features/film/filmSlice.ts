import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { IFilm } from './../../type/type';
interface IState {
    films: IFilm[];
    film: IFilm;
    urls: string[]
}

const initialState: IState = {
    urls:["/img/1.jfif", "/img/2.jfif", "/img/3.jfif","/img/4.jfif","/img/5.jfif","/img/6.jfif","/img/7.jfif","/img/8.png","/img/9.jfif","/img/10.jfif",],
    films: [
        {
            id: 1,
            name: 'Avengers: Endgame',
            genres: ['Action', 'Drama'],
            date: '2019-04-26',
            description: 'The Avengers assemble once more to reverse the damage caused by Thanos.',
            image: "/img/1.jfif",
            time: 181,
            feedback: ['Amazing!', 'Emotional and epic finale.']
        },
        {
            id: 2,
            name: 'The Hangover',
            genres: ['Comedy'],
            date: '2009-06-05',
            description: 'Three friends wake up from a bachelor party in Las Vegas, with no memory of the previous night.',
            image: "/img/2.jfif",
            time: 100,
            feedback: ['Laugh-out-loud funny', 'Perfect mix of chaos and humor.']
        },
        {
            id: 3,
            name: 'The Godfather',
            genres: ['Drama', 'Romance'],
            date: '1972-03-24',
            description: 'The aging patriarch of an organized Romance dynasty transfers control of his clandestine empire to his reluctant son.',
            image: "/img/3.jfif",
            time: 175,
            feedback: ['Masterpiece', 'The best Romance film ever made.']
        },
        {
            id: 4,
            name: 'A Quiet Place',
            genres: ['Horror', 'Thriller'],
            date: '2018-04-06',
            description: 'In a post-apocalyptic world, a family must live in silence to avoid blind monsters with acute hearing.',
            image: "/img/4.jfif",
            time: 90,
            feedback: ['Terrifying!', 'Edge of your seat suspense.']
        },
        {
            id: 5,
            name: 'The Notebook',
            genres: ['Romance', 'Drama'],
            date: '2004-06-25',
            description: 'A young couple falls in love during the summer of 1940, but their love story is tested by time and circumstances.',
            image: "/img/5.jfif",
            time: 124,
            feedback: ['Heartwarming', 'A tearjerker.']
        },
        {
            id: 6,
            name: 'Mad Max: Fury Road',
            genres: ['Action', 'Comedy'],
            date: '2015-05-15',
            description: 'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a warlord and his army.',
            image: "/img/6.jfif",
            time: 120,
            feedback: ['Breathtaking action!', 'Visually stunning and intense.']
        },
        {
            id: 7,
            name: 'The Dark Knight',
            genres: ['Action', 'Romance'],
            date: '2008-07-18',
            description: 'Batman faces the Joker, a criminal mastermind who seeks to create chaos in Gotham City.',
            image: "/img/7.jfif",
            time: 152,
            feedback: ['Incredible villain!', 'Perfect superhero film.']
        },
        {
            id: 8,
            name: 'The Pursuit of Happyness',
            genres: ['Drama', 'Comedy'],
            date: '2006-12-15',
            description: 'Based on a true story, Chris Gardner overcomes homelessness and hardship to secure a better future for his son.',
            image: "/img/8.png",
            time: 117,
            feedback: ['Inspiring', 'A powerful performance by Will Smith.']
        },
        {
            id: 9,
            name: 'Get Out',
            genres: ['Horror', 'Comedy'],
            date: '2017-02-24',
            description: 'A young African American man visits his white girlfriend’s family, where he uncovers disturbing secrets.',
            image: "/img/9.jfif",
            time: 104,
            feedback: ['Thought-provoking', 'A modern horror classic.']
        },
        {
            id: 10,
            name: 'La La Land',
            genres: ['Romance', 'Thriller'],
            date: '2016-12-09',
            description: 'A jazz musician and an aspiring actress fall in love, but their dreams threaten to tear them apart.',
            image: "/img/10.jfif",
            time: 128,
            feedback: ['Magical!', 'A beautiful and melancholic love story.']
        },
    ],
    film: {} as IFilm
}

const filmSlice:any = createSlice({
    name: 'film',
    initialState,
    reducers: {
        addFilm:(state, action) => {
            state.films.push(action.payload)
        },
        deleteFilm: (state, action) => {
            state.films = state.films.filter(elm => elm.id != action.payload)
        },
        findFilmById: (state, action) => {
            const x = state.films.find(elm=> elm.id == action.payload)
            if(x){
                state.film = x
            }
        }
    }
})

export const {addFilm, deleteFilm, findFilmById}=filmSlice.actions;
export const selectFilm = (state: RootState) => state.film;
export default filmSlice.reducer