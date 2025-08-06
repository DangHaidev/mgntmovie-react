import axios from 'axios';
import type { Movie } from '@/types/Movie';

const API_BASE_URL = 'https://api.example.com/movies';
const TIMEOUT = 5000;

export const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get<Movie[]>(API_BASE_URL, {
            timeout: TIMEOUT,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const fetchMovieById = async (id: string): Promise<Movie> => {
    try {
        const response = await axios.get<Movie>(`${API_BASE_URL}/${id}`, {
            timeout: TIMEOUT,
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching movie with ID ${id}:`, error);
        throw error;
    }
};

export const createMovie = async (movie: Movie): Promise<Movie> => {
    try {
        const response = await axios.post<Movie>(API_BASE_URL, movie, {
            timeout: TIMEOUT,
        });
        return response.data;
    } catch (error) {
        console.error('Error creating movie:', error);
        throw error;
    }
};

export const updateMovie = async (id: string, movie: Movie): Promise<Movie> => {
    try {
        const response = await axios.put<Movie>(`${API_BASE_URL}/${id}`, movie, {
            timeout: TIMEOUT,
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating movie with ID ${id}:`, error);
        throw error;
    }
};

export const deleteMovie = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`, {
            timeout: TIMEOUT,
        });
    } catch (error) {
        console.error(`Error deleting movie with ID ${id}:`, error);
        throw error;
    }
};
