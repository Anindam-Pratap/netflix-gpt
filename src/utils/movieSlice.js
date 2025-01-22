import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        playingMovies:null,
        movieTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.playingMovies = action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload
        }
        }
})

export default movieSlice.reducer
export const {addNowPlayingMovies,addMovieTrailer} = movieSlice.actions