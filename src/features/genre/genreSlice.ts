import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";
import { IGenre } from "./../../type/type";
interface IState {
  genres: IGenre[];
  genre: IGenre;
}

const initialState: IState = {
  genres: [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Drama" },
    { id: 4, name: "Horror" },
    { id: 5, name: "Romance" },
    { id: 6, name: "Thriller" },
  ],
  genre: {} as IGenre,
};

const genreSlice = createSlice ({
    name: 'genre',
    initialState,
    reducers: {
        addGenre: (state, action) => {
            state.genres.push(action.payload)
        },
        deleteGenre: (state, action) => {
            state.genres = state.genres.filter(elm => elm.id != action.payload)
        },
        findGenreById: (state, action) => {
            const x = state.genres.find(elm => elm.id == action.payload)
            if(x){
                state.genre = x
            }
        }
    }
})

export const {addGenre, deleteGenre, findGenreById} = genreSlice.actions
export const selectGenre = (state:RootState) => state.genre;
export default genreSlice.reducer