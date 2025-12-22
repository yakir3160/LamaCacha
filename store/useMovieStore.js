import { create } from "zustand";

const useMovieStore = create((set) => ({
    movies: [{ id: 1, title: "Inception" }, { id: 2, title: "The Matrix"}],
    addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
    removeMovie: (id) => set((state) => ({ movies: state.movies.filter((movie) => movie.id !== id) })),
}));

export default useMovieStore;
