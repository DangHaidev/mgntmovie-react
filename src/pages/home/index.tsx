import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import MovieTable from '@/components/MovieTable';
import type { Movie } from '@/types/Movie';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const mockMovies: Movie[] = [
            {
                id: 1,
                title: 'Inception',
                genre: ['Sci-Fi', 'Thriller'],
                releaseYear: 2010,
                director: 'Christopher Nolan',
                description: 'A thief who steals corporate secrets through dream-sharing technology.',
                posterUrl: 'https://via.placeholder.com/100x150',
            },
            {
                id: 2,
                title: 'The Matrix',
                genre: ['Action', 'Sci-Fi'],
                releaseYear: 1999,
                director: 'The Wachowskis',
                description: 'A computer hacker learns about the true nature of his reality.',
                posterUrl: 'https://via.placeholder.com/100x150',
            },
            {
                id: 3,
                title: 'Inception',
                genre: ['Sci-Fi', 'Thriller'],
                releaseYear: 2010,
                director: 'Christopher Nolan',
                description: 'A thief who steals corporate secrets through dream-sharing technology.',
                posterUrl: 'https://via.placeholder.com/100x150',
            },
            {
                id: 4,
                title: 'Inception',
                genre: ['Sci-Fi', 'Thriller'],
                releaseYear: 2010,
                director: 'Christopher Nolan',
                description: 'A thief who steals corporate secrets through dream-sharing technology.',
                posterUrl: 'https://via.placeholder.com/100x150',
            },
            {
                id: 5,
                title: 'Inception',
                genre: ['Sci-Fi', 'Thriller'],
                releaseYear: 2010,
                director: 'Christopher Nolan',
                description: 'A thief who steals corporate secrets through dream-sharing technology.',
                posterUrl: 'https://via.placeholder.com/100x150',
            },
            {
                id: 6,
                title: 'Inception',
                genre: ['Sci-Fi', 'Thriller'],
                releaseYear: 2010,
                director: 'Christopher Nolan',
                description: 'A thief who steals corporate secrets through dream-sharing technology.',
                posterUrl: 'https://via.placeholder.com/100x150',
            },
        ];
        setMovies(mockMovies);
    }, []);

    return (
        <div className="mb-4">
            <div className="mb-4">
                <Title level={2}>🎬 Movie List</Title>
                <Button type="primary" onClick={() => navigate('/create-movie')}>
                    Create Movie
                </Button>
            </div>
            <MovieTable movies={movies} />
        </div>
    );
};

export default HomePage;
