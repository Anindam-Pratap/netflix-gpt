import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        playingMovies:null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        recommendedMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.playingMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload
        },
        addRecommendedMovies:(state,action)=>{
            state.recommendedMovies = action.payload
        }
        }
})

export default movieSlice.reducer
export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addRecommendedMovies} = movieSlice.actions