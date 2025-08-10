import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import MovieTable from '@/components/MovieTable';
import type { Movie } from '@/types/Movie';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchMovies } from '@/services/movieApi';

const { Title } = Typography;

const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const data = await fetchMovies();
            setMovies(data);
            console.log(data);
        } catch (err) {
            console.error('Lỗi khi fetch movie:', err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    🎬 Movie List
                </h2>
                <button
                    onClick={() => navigate('/create-movie')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow-sm transition"
                >
                    Create Movie
                </button>
            </div>

            {/* Table */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <MovieTable movies={movies} onDeleteSuccess={fetchData} />
            </div>
        </div>
    );
};

export default HomePage;
